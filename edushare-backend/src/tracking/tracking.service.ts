import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TrackingService {
  constructor(private readonly prisma: PrismaService) {}

  async item(qrCode: string) {
    const item = await this.prisma.resourceItem.findUnique({
      where: { qrCode },
      include: {
        warehouse: { select: { code: true, name: true, city: true } },
        pledgeItem: {
          select: {
            pledge: {
              select: {
                code: true,
                status: true,
                donor: { select: { fullName: true, profile: { select: { organizationName: true } } } },
                campaign: { select: { slug: true, title: true } },
              },
            },
          },
        },
        inspections: {
          orderBy: { inspectedAt: 'asc' },
          select: {
            inspectedAt: true,
            isFunctional: true,
            recommendedAction: true,
            physicalDefects: true,
          },
        },
        allocationItem: {
          select: {
            fromWarehouseId: true,
            allocationPlan: {
              select: {
                status: true,
                requisition: {
                  select: {
                    code: true,
                    title: true,
                    school: { select: { fullName: true, profile: { select: { city: true, district: true } } } },
                  },
                },
                waybill: {
                  select: {
                    code: true,
                    status: true,
                    dispatchedAt: true,
                    deliveredAt: true,
                    proof: {
                      select: {
                        recipientName: true,
                        recipientTitle: true,
                        signedAt: true,
                        gpsLatitude: true,
                        gpsLongitude: true,
                        proofPhotoUrls: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
    if (!item) {
      throw new NotFoundException('Không tìm thấy mã truy vết');
    }
    const plan = item.allocationItem?.allocationPlan;
    return {
      qrCode: item.qrCode,
      name: item.name,
      category: item.category,
      grade: item.grade,
      status: item.status,
      binLocation: item.binLocation,
      receivedAt: item.receivedAt,
      warehouse: item.warehouse,
      pledge: item.pledgeItem
        ? {
            code: item.pledgeItem.pledge.code,
            status: item.pledgeItem.pledge.status,
            donorName: item.pledgeItem.pledge.donor.fullName,
            organizationName: item.pledgeItem.pledge.donor.profile?.organizationName ?? null,
            campaign: item.pledgeItem.pledge.campaign,
          }
        : null,
      inspections: item.inspections,
      allocation: plan
        ? {
            status: plan.status,
            requisitionCode: plan.requisition.code,
            requisitionTitle: plan.requisition.title,
            schoolName: plan.requisition.school.fullName,
            city: plan.requisition.school.profile?.city ?? null,
            district: plan.requisition.school.profile?.district ?? null,
          }
        : null,
      waybill: plan?.waybill
        ? {
            code: plan.waybill.code,
            status: plan.waybill.status,
            dispatchedAt: plan.waybill.dispatchedAt,
            deliveredAt: plan.waybill.deliveredAt,
            proof: plan.waybill.proof,
          }
        : null,
    };
  }

  async waybill(code: string) {
    const waybill = await this.prisma.waybill.findUnique({
      where: { code },
      include: {
        volunteers: {
          include: { volunteer: { select: { fullName: true } } },
          orderBy: { createdAt: 'asc' },
        },
        proof: {
          select: {
            recipientName: true,
            recipientTitle: true,
            signedAt: true,
            gpsLatitude: true,
            gpsLongitude: true,
            proofPhotoUrls: true,
          },
        },
        allocationPlan: {
          include: {
            requisition: {
              select: {
                code: true,
                title: true,
                school: { select: { fullName: true, profile: { select: { city: true, district: true, address: true } } } },
              },
            },
            items: {
              include: {
                resourceItem: { select: { qrCode: true, name: true, category: true, grade: true, status: true } },
              },
            },
          },
        },
      },
    });
    if (!waybill) {
      throw new NotFoundException('Không tìm thấy vận đơn');
    }
    return {
      code: waybill.code,
      status: waybill.status,
      dispatchedAt: waybill.dispatchedAt,
      deliveredAt: waybill.deliveredAt,
      volunteerName: waybill.volunteers.map((link) => link.volunteer.fullName).join(', ') || null,
      volunteers: waybill.volunteers.map((link) => link.volunteer),
      school: {
        name: waybill.allocationPlan.requisition.school.fullName,
        address: waybill.allocationPlan.requisition.school.profile?.address ?? null,
        district: waybill.allocationPlan.requisition.school.profile?.district ?? null,
        city: waybill.allocationPlan.requisition.school.profile?.city ?? null,
      },
      requisition: {
        code: waybill.allocationPlan.requisition.code,
        title: waybill.allocationPlan.requisition.title,
      },
      items: waybill.allocationPlan.items.map((item) => item.resourceItem),
      proof: waybill.proof,
    };
  }

  async search(q: string) {
    const term = q.trim();
    const [items, pledges, requisitions, waybills, campaigns] = await Promise.all([
      this.prisma.resourceItem.findMany({
        where: { OR: [{ qrCode: { contains: term, mode: 'insensitive' } }, { name: { contains: term, mode: 'insensitive' } }] },
        select: { id: true, qrCode: true, name: true, status: true, category: true },
        take: 8,
      }),
      this.prisma.donationPledge.findMany({
        where: { code: { contains: term, mode: 'insensitive' } },
        select: { id: true, code: true, status: true },
        take: 8,
      }),
      this.prisma.supportRequisition.findMany({
        where: { OR: [{ code: { contains: term, mode: 'insensitive' } }, { title: { contains: term, mode: 'insensitive' } }] },
        select: { id: true, code: true, title: true, status: true, priorityScore: true },
        take: 8,
      }),
      this.prisma.waybill.findMany({
        where: { code: { contains: term, mode: 'insensitive' } },
        select: { id: true, code: true, status: true },
        take: 8,
      }),
      this.prisma.campaign.findMany({
        where: { OR: [{ slug: { contains: term, mode: 'insensitive' } }, { title: { contains: term, mode: 'insensitive' } }] },
        select: { id: true, slug: true, title: true, status: true },
        take: 8,
      }),
    ]);
    return { items, pledges, requisitions, waybills, campaigns };
  }
}
