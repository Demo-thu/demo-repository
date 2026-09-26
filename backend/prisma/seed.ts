import { ItemConditionGrade, PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';

const prisma = new PrismaClient();
const PASSWORD = 'EduShare@2024';

function qr(category: string): string {
  const cat = category.slice(0, 4).toUpperCase();
  const timestamp = Date.now().toString(36).toUpperCase();
  const hash = randomBytes(3).toString('hex').toUpperCase();
  return `EDU-${cat}-${timestamp}-${hash}`;
}

async function main(): Promise<void> {
  const existing = await prisma.user.findUnique({ where: { email: 'admin@edushare.vn' } });
  if (existing) {
    console.log('Seed đã tồn tại. Bỏ qua.');
    return;
  }

  const passwordHash = await bcrypt.hash(PASSWORD, 12);

  const admin = await prisma.user.create({
    data: {
      email: 'admin@edushare.vn',
      passwordHash,
      fullName: 'Nguyễn Văn An',
      phone: '0901000001',
      role: Role.ADMIN,
      profile: { create: { organizationName: 'EduShare Vietnam', city: 'Hà Nội', district: 'Cầu Giấy' } },
    },
  });
  const intake = await prisma.user.create({
    data: {
      email: 'intake@edushare.vn',
      passwordHash,
      fullName: 'Trần Hùng',
      phone: '0901000002',
      role: Role.INTAKE_STAFF,
      profile: { create: { organizationName: 'Trạm kỹ thuật Hà Nội', city: 'Hà Nội' } },
    },
  });
  await prisma.user.create({
    data: {
      email: 'warehouse@edushare.vn',
      passwordHash,
      fullName: 'Lê Minh',
      phone: '0901000003',
      role: Role.WAREHOUSE_STAFF,
      profile: { create: { organizationName: 'Kho EduShare Hà Nội', city: 'Hà Nội' } },
    },
  });
  const coordinator = await prisma.user.create({
    data: {
      email: 'coord@edushare.vn',
      passwordHash,
      fullName: 'Phạm Điều Phối',
      phone: '0901000004',
      role: Role.COORDINATOR,
      profile: { create: { organizationName: 'Điều phối quốc gia', city: 'Hà Nội' } },
    },
  });
  const volunteer = await prisma.user.create({
    data: {
      email: 'volunteer@edushare.vn',
      passwordHash,
      fullName: 'Lê Hoàng Long',
      phone: '0901000005',
      role: Role.VOLUNTEER,
      profile: { create: { organizationName: 'Đội xe tình nguyện Tây Bắc', city: 'Hà Nội' } },
    },
  });
  const donor = await prisma.user.create({
    data: {
      email: 'donor@edushare.vn',
      passwordHash,
      fullName: 'Nguyễn Hà My',
      phone: '0901000006',
      role: Role.DONOR,
      profile: { create: { organizationName: 'Tập đoàn VNPT', city: 'Hà Nội', district: 'Hoàn Kiếm' } },
    },
  });
  const school = await prisma.user.create({
    data: {
      email: 'school@edushare.vn',
      passwordHash,
      fullName: 'Lò Văn Thuận',
      phone: '0901000007',
      role: Role.SCHOOL_REP,
      profile: {
        create: {
          organizationName: 'Trường PTDTBT THCS Mường Lát',
          address: 'Khu phố I, Thị trấn Mường Lát',
          city: 'Thanh Hóa',
          district: 'Mường Lát',
        },
      },
    },
  });

  const haNoi = await prisma.warehouse.create({
    data: {
      code: 'WH-HAN',
      name: 'Tổng kho Hà Nội',
      address: 'Cầu Giấy, Hà Nội',
      city: 'Hà Nội',
      managerId: admin.id,
      capacity: 5000,
    },
  });
  await prisma.warehouse.create({
    data: {
      code: 'WH-DAD',
      name: 'Kho Đà Nẵng',
      address: 'Hải Châu, Đà Nẵng',
      city: 'Đà Nẵng',
      capacity: 2000,
    },
  });

  const campaign = await prisma.campaign.create({
    data: {
      slug: 'may-tinh-cho-em-vung-cao-2024',
      title: 'Máy Tính Cho Em Vùng Cao',
      description: 'Cung cấp laptop và thiết bị tin học đã kiểm định cho điểm trường vùng cao, biên giới.',
      startDate: new Date('2024-09-01'),
      endDate: new Date('2024-12-31'),
      status: 'ACTIVE',
      targets: {
        create: [
          { category: 'IT_DEVICES', targetQuantity: 50, currentReceivedQuantity: 6, currentDistributedQuantity: 2 },
          { category: 'STATIONERY', targetQuantity: 200 },
        ],
      },
    },
  });

  const pledge = await prisma.donationPledge.create({
    data: {
      code: 'DN-20240926-0001',
      donorId: donor.id,
      campaignId: campaign.id,
      handoverMethod: 'DROP_OFF',
      status: 'PARTIALLY_RECEIVED',
      address: 'Kho EduShare Cầu Giấy',
      notes: 'Đợt laptop Latitude từ VNPT',
      items: {
        create: [
          {
            category: 'IT_DEVICES',
            name: 'Laptop Dell Latitude 5520',
            estimatedQuantity: 8,
            declaredCondition: 'Đã qua sử dụng, còn hoạt động',
            unit: 'máy',
          },
        ],
      },
    },
    include: { items: true },
  });
  const pledgeItem = pledge.items[0];
  if (!pledgeItem) {
    throw new Error('Seed pledge item missing');
  }

  const specs = [
    { cpu: 'i5-1135G7', ram: '8GB', storage: '256GB SSD' },
    { cpu: 'i5-1135G7', ram: '8GB', storage: '256GB SSD' },
    { cpu: 'i5-8250U', ram: '8GB', storage: '256GB SSD' },
    { cpu: 'i5-8250U', ram: '16GB', storage: '512GB SSD' },
    { cpu: 'i3-10100', ram: '8GB', storage: '256GB SSD' },
    { cpu: 'i5-7500', ram: '8GB', storage: '256GB SSD' },
  ];
  const grades: ItemConditionGrade[] = ['GRADE_A', 'GRADE_A', 'GRADE_B', 'GRADE_A', 'GRADE_B', 'GRADE_C'];
  const statuses = ['DELIVERED', 'DELIVERED', 'READY_FOR_ALLOCATION', 'READY_FOR_ALLOCATION', 'REFURBISHING', 'PENDING_INTAKE'] as const;

  const items = [];
  for (let index = 0; index < specs.length; index += 1) {
    const spec = specs[index];
    const grade = grades[index];
    const status = statuses[index];
    if (!spec || !grade || !status) {
      throw new Error('Seed row missing');
    }
    const item = await prisma.resourceItem.create({
      data: {
        qrCode: qr('IT_DEVICES'),
        pledgeItemId: pledgeItem.id,
        warehouseId: haNoi.id,
        category: 'IT_DEVICES',
        name: index < 4 ? 'Laptop Dell Latitude 5520' : 'PC HP ProDesk 400',
        grade: status === 'PENDING_INTAKE' ? null : grade,
        status,
        specifications: spec,
        binLocation: status === 'DELIVERED' ? null : `KỆ-A${index + 1}-TẦNG-1`,
        receivedAt: new Date('2024-10-18T08:30:00.000Z'),
      },
    });
    items.push(item);
    if (status !== 'PENDING_INTAKE') {
      await prisma.inspectionReport.create({
        data: {
          resourceItemId: item.id,
          inspectorId: intake.id,
          isFunctional: status !== 'REFURBISHING',
          physicalDefects: status === 'REFURBISHING' ? 'Pin chai, cần thay' : null,
          recommendedAction: status === 'REFURBISHING' ? 'REFURBISH' : 'ALLOCATE',
          notes: 'Kiểm định theo quy trình EduShare',
          inspectedAt: new Date('2024-10-18T11:00:00.000Z'),
        },
      });
    }
  }

  const delivered = items.filter((item) => item.status === 'DELIVERED');
  const first = delivered[0];
  const second = delivered[1];
  if (!first || !second) {
    throw new Error('Seed delivered items missing');
  }

  const requisition = await prisma.supportRequisition.create({
    data: {
      code: 'REQ-20240926-0001',
      schoolId: school.id,
      title: '35 bộ máy tính cho phòng tin học',
      urgencyLevel: 'HIGH',
      priorityScore: 72.5,
      verificationDocUrl: 'https://edushare.local/docs/muong-lat-verification.pdf',
      status: 'ALLOCATING',
      items: { create: [{ category: 'IT_DEVICES', quantityNeeded: 4, quantityFulfilled: 2 }] },
    },
  });

  const plan = await prisma.allocationPlan.create({
    data: {
      requisitionId: requisition.id,
      approvedById: coordinator.id,
      status: 'DISPATCHED',
      totalItems: 2,
      items: {
        create: [
          { resourceItemId: first.id, fromWarehouseId: haNoi.id },
          { resourceItemId: second.id, fromWarehouseId: haNoi.id },
        ],
      },
    },
  });

  await prisma.waybill.create({
    data: {
      code: 'WB-20240926-0001',
      allocationPlanId: plan.id,
      assignedVolunteerId: volunteer.id,
      status: 'DELIVERED',
      dispatchedAt: new Date('2024-10-20T05:00:00.000Z'),
      deliveredAt: new Date('2024-10-21T09:30:00.000Z'),
      proof: {
        create: {
          recipientName: 'Lò Văn Thuận',
          recipientTitle: 'Hiệu trưởng',
          recipientSignatureUrl: 'https://edushare.local/signatures/muong-lat.png',
          proofPhotoUrls: ['https://edushare.local/proofs/muong-lat-01.jpg'],
          gpsLatitude: 20.527,
          gpsLongitude: 104.629,
          signedAt: new Date('2024-10-21T09:30:00.000Z'),
        },
      },
    },
  });

  const openRequest = await prisma.supportRequisition.create({
    data: {
      code: 'REQ-20240926-0002',
      schoolId: school.id,
      title: '20 tablet cho điểm lẻ',
      urgencyLevel: 'CRITICAL',
      priorityScore: 88,
      status: 'PENDING',
      items: { create: [{ category: 'IT_DEVICES', quantityNeeded: 20 }] },
    },
  });

  const checkIn = new Date('2024-10-18T08:00:00.000Z');
  const checkOut = new Date('2024-10-18T12:00:00.000Z');
  await prisma.volunteerShift.create({
    data: {
      volunteerId: volunteer.id,
      warehouseId: haNoi.id,
      shiftDate: new Date('2024-10-18'),
      shiftType: 'DELIVERY',
      checkInAt: checkIn,
      checkOutAt: checkOut,
      hoursContributed: 4,
    },
  });

  await prisma.auditLog.createMany({
    data: [
      { userId: admin.id, action: 'SEED_COMPLETED', resource: 'System', details: { note: 'Dữ liệu mẫu EduShare Vietnam' } },
      { userId: coordinator.id, action: 'REQUISITION_APPROVED', resource: 'SupportRequisition', details: { requisitionId: requisition.id } },
      { userId: school.id, action: 'REQUISITION_CREATED', resource: 'SupportRequisition', details: { requisitionId: openRequest.id } },
    ],
  });

  console.log('Seed EduShare Vietnam hoàn tất.');
  console.log(`Đăng nhập mẫu (mọi tài khoản): mật khẩu ${PASSWORD}`);
  console.log('admin@edushare.vn | intake@edushare.vn | warehouse@edushare.vn');
  console.log('coord@edushare.vn | volunteer@edushare.vn | donor@edushare.vn | school@edushare.vn');
}

main()
  .catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
