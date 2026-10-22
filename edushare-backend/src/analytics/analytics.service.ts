import { Injectable } from '@nestjs/common';
import { ItemCategory, ItemStatus } from '@prisma/client';
import { publicUserSelect } from '../common/utils';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';

const DASHBOARD_CACHE_KEY = 'analytics:dashboard';

@Injectable()
export class AnalyticsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  async dashboard() {
    const cached = await this.redis.cacheGet(DASHBOARD_CACHE_KEY);
    if (cached) {
      const parsed: unknown = JSON.parse(cached);
      if (isDashboard(parsed)) {
        return parsed;
      }
    }
    const snapshot = await this.buildDashboard();
    await this.redis.cacheSet(DASHBOARD_CACHE_KEY, JSON.stringify(snapshot), 30);
    return snapshot;
  }

  async esg() {
    const [byCategory, byGrade, delivered, recycled, hours, schools] = await Promise.all([
      this.prisma.resourceItem.groupBy({ by: ['category', 'status'], _count: { _all: true } }),
      this.prisma.resourceItem.groupBy({ by: ['grade'], _count: { _all: true } }),
      this.prisma.resourceItem.count({ where: { status: 'DELIVERED' } }),
      this.prisma.resourceItem.count({ where: { status: 'RECYCLED' } }),
      this.prisma.volunteerShift.aggregate({ _sum: { hoursContributed: true } }),
      this.prisma.supportRequisition.findMany({
        where: { status: 'COMPLETED' },
        select: { schoolId: true },
        distinct: ['schoolId'],
      }),
    ]);
    const received = byCategory.reduce((sum, row) => sum + row._count._all, 0);
    return {
      resourcesReceived: received,
      resourcesDelivered: delivered,
      resourcesRecycled: recycled,
      reuseRate: received === 0 ? 0 : Math.round((delivered / received) * 1000) / 10,
      volunteerHours: hours._sum.hoursContributed ?? 0,
      schoolsCompleted: schools.length,
      byCategory: byCategory.map((row) => ({
        category: row.category,
        status: row.status,
        count: row._count._all,
      })),
      byGrade: byGrade.map((row) => ({ grade: row.grade, count: row._count._all })),
    };
  }

  async beneficiarySchools() {
    const schools = await this.prisma.user.findMany({
      where: { role: 'SCHOOL_REP' },
      select: {
        ...publicUserSelect,
        requisitions: {
          select: {
            id: true,
            code: true,
            title: true,
            status: true,
            urgencyLevel: true,
            priorityScore: true,
            items: true,
            allocationPlans: {
              orderBy: { createdAt: 'asc' },
              select: {
                waybill: { select: { status: true, deliveredAt: true, code: true } },
                items: { select: { resourceItem: { select: { status: true } } } },
              },
            },
          },
        },
      },
      orderBy: { fullName: 'asc' },
    });
    return {
      data: schools.map((school) => {
        const delivered = school.requisitions.reduce((sum, requisition) => {
          const items = requisition.allocationPlans.flatMap((plan) => plan.items);
          return sum + items.filter((item) => item.resourceItem.status === 'DELIVERED').length;
        }, 0);
        return {
          school: {
            id: school.id,
            fullName: school.fullName,
            email: school.email,
            phone: school.phone,
            profile: school.profile,
          },
          requisitions: school.requisitions.length,
          deliveredItems: delivered,
          requests: school.requisitions,
        };
      }),
    };
  }

  private async buildDashboard() {
    const [statusGroups, campaignGroups, ready, schools, recentWaybills, hours] = await Promise.all([
      this.prisma.resourceItem.groupBy({ by: ['status'], _count: { _all: true } }),
      this.prisma.campaign.groupBy({ by: ['status'], _count: { _all: true } }),
      this.prisma.resourceItem.count({ where: { status: 'READY_FOR_ALLOCATION' } }),
      this.prisma.supportRequisition.findMany({
        where: { items: { some: { quantityFulfilled: { gt: 0 } } } },
        select: { schoolId: true },
        distinct: ['schoolId'],
      }),
      this.prisma.waybill.findMany({
        take: 8,
        orderBy: { createdAt: 'desc' },
        include: {
          volunteers: {
            include: { volunteer: { select: { id: true, fullName: true } } },
            orderBy: { createdAt: 'asc' },
          },
          allocationPlan: {
            include: {
              requisition: {
                select: {
                  title: true,
                  code: true,
                  school: { select: { fullName: true, profile: { select: { city: true, district: true } } } },
                },
              },
              items: { select: { resourceItem: { select: { name: true, category: true } } } },
            },
          },
        },
      }),
      this.prisma.volunteerShift.aggregate({ _sum: { hoursContributed: true } }),
    ]);
    const pipeline = emptyPipeline();
    for (const row of statusGroups) {
      pipeline[row.status] = row._count._all;
    }
    const totalItems = Object.values(pipeline).reduce((sum, value) => sum + value, 0);
    const campaigns = { UPCOMING: 0, ACTIVE: 0, PAUSED: 0, COMPLETED: 0 };
    for (const row of campaignGroups) {
      campaigns[row.status] = row._count._all;
    }
    return {
      generatedAt: new Date().toISOString(),
      kpis: {
        itemsReceived: totalItems,
        itemsInspectedOrBeyond: totalItems - pipeline.PENDING_INTAKE,
        itemsDelivered: pipeline.DELIVERED,
        readyForAllocation: ready,
        activeCampaigns: campaigns.ACTIVE,
        totalCampaigns: Object.values(campaigns).reduce((sum, value) => sum + value, 0),
        schoolsServed: schools.length,
        volunteerHours: hours._sum.hoursContributed ?? 0,
      },
      pipeline,
      campaigns,
      recentWaybills: recentWaybills.map((waybill) => ({
        id: waybill.id,
        code: waybill.code,
        status: waybill.status,
        dispatchedAt: waybill.dispatchedAt,
        deliveredAt: waybill.deliveredAt,
        volunteerName: waybill.volunteers.map((link) => link.volunteer.fullName).join(', ') || null,
        schoolName: waybill.allocationPlan.requisition.school.fullName,
        location: [
          waybill.allocationPlan.requisition.school.profile?.district,
          waybill.allocationPlan.requisition.school.profile?.city,
        ].filter((part): part is string => Boolean(part)).join(', '),
        requisitionCode: waybill.allocationPlan.requisition.code,
        itemCount: waybill.allocationPlan.items.length,
        sampleItem: waybill.allocationPlan.items[0]?.resourceItem.name ?? null,
      })),
    };
  }
}

function emptyPipeline(): Record<ItemStatus, number> {
  return {
    PENDING_INTAKE: 0,
    INSPECTED: 0,
    REFURBISHING: 0,
    READY_FOR_ALLOCATION: 0,
    ALLOCATED: 0,
    IN_TRANSIT: 0,
    DELIVERED: 0,
    RECYCLED: 0,
  };
}

function isDashboard(value: unknown): value is { generatedAt: string; kpis: Record<string, number> } {
  if (!value || typeof value !== 'object') {
    return false;
  }
  const record = value as Record<string, unknown>;
  return typeof record.generatedAt === 'string' && typeof record.kpis === 'object' && record.kpis !== null;
}

export const TRACKED_CATEGORIES: readonly ItemCategory[] = [
  'BOOKS',
  'UNIFORMS',
  'IT_DEVICES',
  'STATIONERY',
  'FURNITURE',
  'VEHICLES',
];
