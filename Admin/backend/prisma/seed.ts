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

const extraWarehouses = [
  { code: 'WH-HAN', name: 'Tổng kho Hà Nội', address: 'Cầu Giấy, Hà Nội', city: 'Hà Nội', capacity: 5000 },
  { code: 'WH-HPH', name: 'Kho Hải Phòng', address: 'Ngô Quyền, Hải Phòng', city: 'Hải Phòng', capacity: 1500 },
  { code: 'WH-QNH', name: 'Kho Quảng Ninh', address: 'Hạ Long, Quảng Ninh', city: 'Quảng Ninh', capacity: 800 },
  { code: 'WH-LCA', name: 'Kho Lào Cai', address: 'Lào Cai', city: 'Lào Cai', capacity: 600 },
  { code: 'WH-DBN', name: 'Kho Điện Biên', address: 'Điện Biên Phủ', city: 'Điện Biên', capacity: 600 },
  { code: 'WH-THA', name: 'Kho Thanh Hóa', address: 'TP. Thanh Hóa', city: 'Thanh Hóa', capacity: 1200 },
  { code: 'WH-NAN', name: 'Kho Nghệ An', address: 'TP. Vinh, Nghệ An', city: 'Nghệ An', capacity: 1200 },
  { code: 'WH-HUE', name: 'Kho Thừa Thiên Huế', address: 'TP. Huế', city: 'Thừa Thiên Huế', capacity: 1000 },
  { code: 'WH-DAD', name: 'Kho Đà Nẵng', address: 'Hải Châu, Đà Nẵng', city: 'Đà Nẵng', capacity: 2000 },
  { code: 'WH-QNA', name: 'Kho Quảng Nam', address: 'Tam Kỳ, Quảng Nam', city: 'Quảng Nam', capacity: 800 },
  { code: 'WH-KHA', name: 'Kho Khánh Hòa', address: 'Nha Trang, Khánh Hòa', city: 'Khánh Hòa', capacity: 1000 },
  { code: 'WH-GLA', name: 'Kho Gia Lai', address: 'Pleiku, Gia Lai', city: 'Gia Lai', capacity: 700 },
  { code: 'WH-DLK', name: 'Kho Đắk Lắk', address: 'Buôn Ma Thuột', city: 'Đắk Lắk', capacity: 700 },
  { code: 'WH-SGN', name: 'Kho TP. Hồ Chí Minh', address: 'Quận 12, TP. Hồ Chí Minh', city: 'TP. Hồ Chí Minh', capacity: 4000 },
  { code: 'WH-BDG', name: 'Kho Bình Dương', address: 'Thủ Dầu Một, Bình Dương', city: 'Bình Dương', capacity: 1500 },
  { code: 'WH-CTO', name: 'Kho Cần Thơ', address: 'Ninh Kiều, Cần Thơ', city: 'Cần Thơ', capacity: 1500 },
  { code: 'WH-AGG', name: 'Kho An Giang', address: 'Long Xuyên, An Giang', city: 'An Giang', capacity: 700 },
  { code: 'WH-CMU', name: 'Kho Cà Mau', address: 'TP. Cà Mau', city: 'Cà Mau', capacity: 500 },
];

async function ensureWarehouses(): Promise<void> {
  for (const row of extraWarehouses) {
    await prisma.warehouse.upsert({
      where: { code: row.code },
      update: { name: row.name, address: row.address, city: row.city, capacity: row.capacity },
      create: row,
    });
  }
}

const learningSupplies: Array<{ category: 'BOOKS' | 'STATIONERY'; name: string; bin: string }> = [
  { category: 'BOOKS', name: 'SGK Toán 1', bin: 'Kệ sách 1' },
  { category: 'BOOKS', name: 'SGK Toán 2', bin: 'Kệ sách 1' },
  { category: 'BOOKS', name: 'SGK Tiếng Việt 1', bin: 'Kệ sách 1' },
  { category: 'BOOKS', name: 'SGK Tiếng Việt 2', bin: 'Kệ sách 1' },
  { category: 'BOOKS', name: 'SGK Tiếng Anh 3', bin: 'Kệ sách 2' },
  { category: 'BOOKS', name: 'SGK Khoa học 4', bin: 'Kệ sách 2' },
  { category: 'BOOKS', name: 'SGK Lịch sử và Địa lý 5', bin: 'Kệ sách 2' },
  { category: 'BOOKS', name: 'SGK Đạo đức 1', bin: 'Kệ sách 2' },
  { category: 'STATIONERY', name: 'Vở ô ly 80 trang', bin: 'Kệ vở 1' },
  { category: 'STATIONERY', name: 'Vở kẻ ngang 96 trang', bin: 'Kệ vở 1' },
  { category: 'STATIONERY', name: 'Vở tập viết lớp 1', bin: 'Kệ vở 1' },
  { category: 'STATIONERY', name: 'Bút bi xanh', bin: 'Kệ bút 1' },
  { category: 'STATIONERY', name: 'Bút bi đỏ', bin: 'Kệ bút 1' },
  { category: 'STATIONERY', name: 'Bút chì 2B', bin: 'Kệ bút 1' },
  { category: 'STATIONERY', name: 'Bút máy học sinh', bin: 'Kệ bút 1' },
  { category: 'STATIONERY', name: 'Bút lông màu 12 cây', bin: 'Kệ bút 2' },
  { category: 'STATIONERY', name: 'Thước kẻ 20cm', bin: 'Kệ dụng cụ 1' },
  { category: 'STATIONERY', name: 'Compa học sinh', bin: 'Kệ dụng cụ 1' },
  { category: 'STATIONERY', name: 'Tẩy trắng', bin: 'Kệ dụng cụ 1' },
  { category: 'STATIONERY', name: 'Gọt bút chì', bin: 'Kệ dụng cụ 1' },
  { category: 'STATIONERY', name: 'Hộp bút', bin: 'Kệ dụng cụ 2' },
  { category: 'STATIONERY', name: 'Cặp sách học sinh', bin: 'Kệ dụng cụ 2' },
];

const categoryPrefix: Record<string, string> = {
  IT_DEVICES: 'IT',
  BOOKS: 'BK',
  STATIONERY: 'VP',
  UNIFORMS: 'DP',
  FURNITURE: 'BG',
  VEHICLES: 'XE',
};

async function ensureLearningSupplies(): Promise<void> {
  const warehouse = await prisma.warehouse.findUnique({ where: { code: 'WH-HAN' } });
  if (!warehouse) {
    return;
  }
  for (const row of learningSupplies) {
    const found = await prisma.resourceItem.findFirst({ where: { name: row.name, category: row.category } });
    if (found) {
      continue;
    }
    await prisma.resourceItem.create({
      data: {
        qrCode: `T${randomBytes(8).toString('hex')}`,
        warehouseId: warehouse.id,
        category: row.category,
        name: row.name,
        grade: 'GRADE_A',
        status: 'READY_FOR_ALLOCATION',
        specifications: { kind: 'learning-supply' },
        binLocation: row.bin,
        receivedAt: new Date(),
      },
    });
  }
}

async function rewriteCodes(
  rows: Array<{ id: string }>,
  prefix: string,
  write: (id: string, code: string) => Promise<unknown>,
): Promise<void> {
  for (const row of rows) {
    await write(row.id, `T${row.id.replace(/-/g, '').slice(0, 20)}`);
  }
  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index];
    if (!row) {
      continue;
    }
    await write(row.id, `${prefix}${String(index + 1).padStart(3, '0')}`);
  }
}

async function compactCodes(): Promise<void> {
  const items = await prisma.resourceItem.findMany({ orderBy: { createdAt: 'asc' } });
  const groups = new Map<string, typeof items>();
  for (const item of items) {
    const prefix = categoryPrefix[item.category] ?? 'SP';
    const list = groups.get(prefix) ?? [];
    list.push(item);
    groups.set(prefix, list);
  }
  for (const item of items) {
    await prisma.resourceItem.update({
      where: { id: item.id },
      data: { qrCode: `T${item.id.replace(/-/g, '').slice(0, 20)}` },
    });
  }
  for (const [prefix, list] of groups) {
    for (let index = 0; index < list.length; index += 1) {
      const row = list[index];
      if (!row) {
        continue;
      }
      await prisma.resourceItem.update({
        where: { id: row.id },
        data: { qrCode: `${prefix}${String(index + 1).padStart(3, '0')}` },
      });
    }
  }
  const pledges = await prisma.donationPledge.findMany({ orderBy: { createdAt: 'asc' } });
  await rewriteCodes(pledges, 'DN', (id, code) => prisma.donationPledge.update({ where: { id }, data: { code } }));
  const requisitions = await prisma.supportRequisition.findMany({ orderBy: { createdAt: 'asc' } });
  await rewriteCodes(requisitions, 'YC', (id, code) => prisma.supportRequisition.update({ where: { id }, data: { code } }));
  const transfers = await prisma.stockTransferOrder.findMany({ orderBy: { createdAt: 'asc' } });
  await rewriteCodes(transfers, 'DC', (id, code) => prisma.stockTransferOrder.update({ where: { id }, data: { code } }));
  const waybills = await prisma.waybill.findMany({ orderBy: { createdAt: 'asc' } });
  await rewriteCodes(waybills, 'WB', (id, code) => prisma.waybill.update({ where: { id }, data: { code } }));
  const campaigns = await prisma.campaign.findMany({ orderBy: { createdAt: 'asc' } });
  await rewriteCodes(campaigns, 'CD', (id, code) => prisma.campaign.update({ where: { id }, data: { slug: code } }));
}

async function mergeWarehouseRoles(): Promise<void> {
  await prisma.user.updateMany({
    where: { role: { in: [Role.INTAKE_STAFF, Role.COORDINATOR] } },
    data: { role: Role.WAREHOUSE_STAFF },
  });
}

async function main(): Promise<void> {
  await mergeWarehouseRoles();
  await ensureWarehouses();
  await ensureLearningSupplies();
  await compactCodes();
  const existing = await prisma.user.findUnique({ where: { email: 'admin@edushare.vn' } });
  if (existing) {
    console.log('Seed người dùng đã tồn tại. Đã gộp tiếp nhận và điều phối vào nhân viên kho.');
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
      role: Role.WAREHOUSE_STAFF,
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
      role: Role.WAREHOUSE_STAFF,
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

  const haNoi = await prisma.warehouse.update({
    where: { code: 'WH-HAN' },
    data: { managerId: admin.id },
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
      schoolConfirmationUrl: 'https://edushare.local/docs/muong-lat-school.pdf',
      committeeConfirmationUrl: 'https://edushare.local/docs/muong-lat-committee.pdf',
      status: 'ALLOCATING',
      items: { create: [{ category: 'IT_DEVICES', quantityNeeded: 4, quantityFulfilled: 2 }] },
    },
  });

  const plan = await prisma.allocationPlan.create({
    data: {
      requisitionId: requisition.id,
      approvedById: admin.id,
      adminConfirmedAt: new Date('2024-10-19T02:00:00.000Z'),
      adminConfirmedById: admin.id,
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
      status: 'DELIVERED',
      volunteers: { create: [{ volunteerId: volunteer.id }] },
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
      schoolConfirmationUrl: 'https://edushare.local/docs/tablet-school.pdf',
      committeeConfirmationUrl: 'https://edushare.local/docs/tablet-committee.pdf',
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

  await compactCodes();
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
