import { ItemStatus, Prisma, PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { nextSerial, shortCode } from '../src/common/utils';

const prisma = new PrismaClient();
const N = 10;
const PASSWORD = 'EduShare@2024';

const nn = (index: number) => String(index).padStart(2, '0');
const photo = (label: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect width="100%" height="100%" fill="#1d4ed8"/><text x="50%" y="50%" fill="white" font-size="28" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`,
  )}`;

const accountRoles: Role[] = [
  Role.DONOR,
  Role.SCHOOL_REP,
  Role.WAREHOUSE_STAFF,
  Role.VOLUNTEER,
  Role.ADMIN,
  Role.DONOR,
  Role.SCHOOL_REP,
  Role.WAREHOUSE_STAFF,
  Role.VOLUNTEER,
  Role.ADMIN,
];

async function main(): Promise<void> {
  const marker = await prisma.campaign.findFirst({ where: { title: 'Chiến dịch sách điểm trường 01' } });
  if (marker) {
    console.log('Bo du lieu 10 dong da co san, bo qua.');
    return;
  }

  const [donor, school, warehouseUser, volunteer, admin, warehouse] = await Promise.all([
    prisma.user.findUnique({ where: { email: 'donor@edushare.vn' }, include: { profile: true } }),
    prisma.user.findUnique({ where: { email: 'school@edushare.vn' }, include: { profile: true } }),
    prisma.user.findUnique({ where: { email: 'warehouse@edushare.vn' } }),
    prisma.user.findUnique({ where: { email: 'volunteer@edushare.vn' } }),
    prisma.user.findUnique({ where: { email: 'admin@edushare.vn' } }),
    prisma.warehouse.findUnique({ where: { code: 'WH-HAN' } }),
  ]);
  if (!donor || !school || !warehouseUser || !volunteer || !admin || !warehouse) {
    throw new Error('Thieu tai khoan mau hoac kho WH-HAN. Hay chay seed goc truoc.');
  }

  const passwordHash = await bcrypt.hash(PASSWORD, 12);
  const now = new Date();
  const recent = new Date(now.getTime() - 60 * 60 * 1000);
  const address = school.profile?.address || 'Điểm trường vùng cao, xã biên giới';

  await prisma.$transaction(
    async (tx) => {
      const [pledgeRows, requisitionRows, waybillRows, transferRows, itemRows, campaignRows] = await Promise.all([
        tx.donationPledge.findMany({ select: { code: true } }),
        tx.supportRequisition.findMany({ select: { code: true } }),
        tx.waybill.findMany({ select: { code: true } }),
        tx.stockTransferOrder.findMany({ select: { code: true } }),
        tx.resourceItem.findMany({ select: { qrCode: true } }),
        tx.campaign.findMany({ select: { slug: true } }),
      ]);
      const serial = {
        DN: nextSerial(pledgeRows.map((row) => row.code), 'DN'),
        YC: nextSerial(requisitionRows.map((row) => row.code), 'YC'),
        WB: nextSerial(waybillRows.map((row) => row.code), 'WB'),
        DC: nextSerial(transferRows.map((row) => row.code), 'DC'),
        BK: nextSerial(itemRows.map((row) => row.qrCode), 'BK'),
        CD: nextSerial(campaignRows.map((row) => row.slug), 'CD'),
      };
      const take = (prefix: keyof typeof serial) => {
        const code = shortCode(prefix, serial[prefix]);
        serial[prefix] += 1;
        return code;
      };

      for (let index = 1; index <= N; index += 1) {
        const tag = nn(index);
        await tx.user.create({
          data: {
            email: `nguoidung${tag}@edushare.vn`,
            passwordHash,
            fullName: `Người dùng ${tag}`,
            phone: `0902${String(100000 + index)}`,
            role: accountRoles[index - 1] ?? Role.DONOR,
            profile: {
              create: {
                organizationName: `Đơn vị ${tag}`,
                organizationCode: accountRoles[index - 1] === Role.SCHOOL_REP ? `SCH${tag}` : null,
                address,
                city: 'Đà Nẵng',
                district: 'Hải Châu',
              },
            },
          },
        });
      }

      for (let index = 1; index <= N; index += 1) {
        const tag = nn(index);
        const campaign = await tx.campaign.create({
          data: {
            slug: take('CD'),
            title: `Chiến dịch sách điểm trường ${tag}`,
            description: `Đợt sách số ${tag}: sách giáo khoa và vở cho một điểm trường.`,
            startDate: new Date('2026-09-01T00:00:00.000Z'),
            endDate: new Date('2026-12-31T00:00:00.000Z'),
            status: 'ACTIVE',
            targets: {
              create: [
                { category: 'BOOKS', targetQuantity: 500, currentReceivedQuantity: 0, currentDistributedQuantity: 0 },
                { category: 'STATIONERY', targetQuantity: 200, currentReceivedQuantity: 0, currentDistributedQuantity: 0 },
              ],
            },
          },
        });

        await createPlainPledge(tx, { code: take('DN'), campaignId: campaign.id, donor, status: 'PENDING', quantity: 2, createdAt: now, note: 'Nhà hảo tâm sẽ mang sách đến kho.' });
        const awaiting = await createPlainPledge(tx, { code: take('DN'), campaignId: campaign.id, donor, status: 'AWAITING_DONOR', quantity: 2, createdAt: now, note: 'Kho đề nghị lưu vào kho dự trữ.' });
        await tx.pledgeProposal.create({
          data: {
            pledgeId: awaiting.id,
            createdById: warehouseUser.id,
            status: 'PENDING',
            reason: 'Chiến dịch tạm đủ sách ở một điểm khác, kho đề nghị lưu kho dự trữ.',
            note: 'Nhà hảo tâm chọn đồng ý lưu kho hoặc hủy phiếu.',
            lines: [{ name: `SGK Toán ${tag}`, category: 'BOOKS', quantity: 2 }] as Prisma.InputJsonValue,
            options: [{ type: 'STOCK' }] as Prisma.InputJsonValue,
            createdAt: now,
          },
        });
        await createPlainPledge(tx, { code: take('DN'), campaignId: campaign.id, donor, status: 'VERIFIED', quantity: 2, createdAt: now, note: 'Kho đã xác minh, chờ tiếp nhận.' });
        await createPlainPledge(tx, { code: take('DN'), campaignId: campaign.id, donor, status: 'CANCELLED', quantity: 1, createdAt: now, note: 'Đã hủy trước khi kho xác minh.', cancelled: true });

        const receivedNote = 'Đã nhập đủ số sách.';
        const partialNote = 'Đã nhập một phần số sách.';
        const intakePledge = await createItemPledge(tx, { code: take('DN'), campaignId: campaign.id, donor, status: 'PARTIALLY_RECEIVED', estimated: 2, createdAt: recent, note: partialNote, book: `SGK Toán lớp 1 - bộ ${tag}` });
        const refurbishPledge = await createItemPledge(tx, { code: take('DN'), campaignId: campaign.id, donor, status: 'PARTIALLY_RECEIVED', estimated: 2, createdAt: recent, note: partialNote, book: `SGK Toán lớp 1 - bộ ${tag}` });
        const readyPledge = await createItemPledge(tx, { code: take('DN'), campaignId: campaign.id, donor, status: 'COMPLETED', estimated: 1, createdAt: recent, note: receivedNote, book: `SGK Toán lớp 1 - bộ ${tag}` });
        const proposedPledge = await createItemPledge(tx, { code: take('DN'), campaignId: campaign.id, donor, status: 'COMPLETED', estimated: 1, createdAt: recent, note: receivedNote, book: `SGK Toán lớp 1 - bộ ${tag}` });
        const confirmedPledge = await createItemPledge(tx, { code: take('DN'), campaignId: campaign.id, donor, status: 'COMPLETED', estimated: 1, createdAt: recent, note: receivedNote, book: `SGK Toán lớp 1 - bộ ${tag}` });
        const pickupPledge = await createItemPledge(tx, { code: take('DN'), campaignId: campaign.id, donor, status: 'COMPLETED', estimated: 1, createdAt: recent, note: receivedNote, book: `SGK Toán lớp 1 - bộ ${tag}` });
        const transitPledge = await createItemPledge(tx, { code: take('DN'), campaignId: campaign.id, donor, status: 'COMPLETED', estimated: 1, createdAt: recent, note: receivedNote, book: `SGK Toán lớp 1 - bộ ${tag}` });
        const deliveredPledge = await createItemPledge(tx, { code: take('DN'), campaignId: campaign.id, donor, status: 'COMPLETED', estimated: 1, createdAt: recent, note: receivedNote, book: `SGK Toán lớp 1 - bộ ${tag}` });
        const transferPledge = await createItemPledge(tx, { code: take('DN'), campaignId: campaign.id, donor, status: 'COMPLETED', estimated: 1, createdAt: recent, note: receivedNote, book: `SGK Toán lớp 1 - bộ ${tag}` });

        const book = `SGK Toán lớp 1 - bộ ${tag}`;
        await makeItem(tx, { pledgeItemId: intakePledge.itemId, warehouseId: warehouse.id, name: book, qr: take('BK'), status: 'PENDING_INTAKE', grade: null });
        const refurbish = await makeItem(tx, { pledgeItemId: refurbishPledge.itemId, warehouseId: warehouse.id, name: book, qr: take('BK'), status: 'REFURBISHING', grade: 'GRADE_B' });
        await tx.inspectionReport.create({
          data: {
            resourceItemId: refurbish.id,
            inspectorId: warehouseUser.id,
            isFunctional: false,
            physicalDefects: 'Gáy sách bong',
            recommendedAction: 'REFURBISH',
            notes: `Kiểm định bộ ${tag}: cần dán gáy lại trước khi phân bổ.`,
          },
        });
        const ready = await makeItem(tx, { pledgeItemId: readyPledge.itemId, warehouseId: warehouse.id, name: book, qr: take('BK'), status: 'READY_FOR_ALLOCATION', grade: 'GRADE_A' });
        const proposedItem = await makeItem(tx, { pledgeItemId: proposedPledge.itemId, warehouseId: warehouse.id, name: book, qr: take('BK'), status: 'ALLOCATED', grade: 'GRADE_A' });
        const confirmedItem = await makeItem(tx, { pledgeItemId: confirmedPledge.itemId, warehouseId: warehouse.id, name: book, qr: take('BK'), status: 'ALLOCATED', grade: 'GRADE_A' });
        const pickupItem = await makeItem(tx, { pledgeItemId: pickupPledge.itemId, warehouseId: warehouse.id, name: book, qr: take('BK'), status: 'ALLOCATED', grade: 'GRADE_A' });
        const transitQr = take('BK');
        const transitItem = await makeItem(tx, { pledgeItemId: transitPledge.itemId, warehouseId: warehouse.id, name: book, qr: transitQr, status: 'IN_TRANSIT', grade: 'GRADE_A' });
        const deliveredItem = await makeItem(tx, { pledgeItemId: deliveredPledge.itemId, warehouseId: warehouse.id, name: book, qr: take('BK'), status: 'DELIVERED', grade: 'GRADE_A' });
        const transferStatus: ItemStatus = index <= 5 ? 'ALLOCATED' : 'IN_TRANSIT';
        const transferItem = await makeItem(tx, { pledgeItemId: transferPledge.itemId, warehouseId: warehouse.id, name: book, qr: take('BK'), status: transferStatus, grade: 'GRADE_A' });

        await tx.campaignTarget.updateMany({
          where: { campaignId: campaign.id, category: 'BOOKS' },
          data: { currentReceivedQuantity: 9, currentDistributedQuantity: 1 },
        });

        const docs = {
          verificationDocUrl: `xac-minh-${tag}.pdf`,
          schoolConfirmationUrl: `xac-nhan-truong-${tag}.pdf`,
          committeeConfirmationUrl: `xac-nhan-uy-ban-${tag}.pdf`,
        };
        await tx.supportRequisition.create({
          data: {
            code: take('YC'),
            schoolId: school.id,
            title: `Yêu cầu sách đang chờ duyệt ${tag}`,
            urgencyLevel: index <= 3 ? 'CRITICAL' : 'HIGH',
            priorityScore: 98 - index,
            description: `Điểm trường ${tag} thiếu SGK Toán lớp 1.`,
            studentInfo: { grade: '1', students: 25 + index, classes: 1 },
            status: 'PENDING',
            ...docs,
            items: { create: [{ category: 'BOOKS', quantityNeeded: 20, quantityFulfilled: 0, unit: 'quyển', reason: 'Thiếu sách đầu năm' }] },
            createdAt: new Date(Date.UTC(2020, 0, index, 1)),
          },
        });
        await tx.supportRequisition.create({
          data: {
            code: take('YC'),
            schoolId: school.id,
            title: `Yêu cầu đã từ chối ${tag}`,
            urgencyLevel: 'LOW',
            priorityScore: 10,
            description: `Từ chối ${tag}: hồ sơ xác nhận chưa đủ chữ ký.`,
            status: 'REJECTED',
            items: { create: [{ category: 'STATIONERY', quantityNeeded: 10, quantityFulfilled: 0, unit: 'bộ', reason: 'Vở viết' }] },
            createdAt: new Date(Date.UTC(2020, 0, index, 2)),
          },
        });
        await tx.supportRequisition.create({
          data: {
            code: take('YC'),
            schoolId: school.id,
            title: `Yêu cầu đã duyệt, chờ ghép kho ${tag}`,
            urgencyLevel: 'HIGH',
            priorityScore: 90 - index,
            description: `Đã duyệt, cần 1 quyển SGK bộ ${tag}.`,
            studentInfo: { grade: '1', students: 30, classes: 1 },
            status: 'APPROVED',
            ...docs,
            items: { create: [{ category: 'BOOKS', quantityNeeded: 1, quantityFulfilled: 0, unit: 'quyển', reason: 'Ghép tồn kho' }] },
            createdAt: new Date(Date.UTC(2020, 0, index, 3)),
          },
        });

        await planRequisition(tx, {
          tag,
          code: take('YC'),
          schoolId: school.id,
          adminId: admin.id,
          warehouseId: warehouse.id,
          itemId: proposedItem.id,
          title: `Đang phân bổ, chờ admin xác nhận ${tag}`,
          status: 'ALLOCATING',
          planStatus: 'PROPOSED',
          confirmed: false,
          fulfilled: 0,
          docs,
        });
        await planRequisition(tx, {
          tag,
          code: take('YC'),
          schoolId: school.id,
          adminId: admin.id,
          warehouseId: warehouse.id,
          itemId: confirmedItem.id,
          title: `Đã chuyển kho lập vận đơn ${tag}`,
          status: 'ALLOCATING',
          planStatus: 'CONFIRMED',
          confirmed: true,
          fulfilled: 0,
          docs,
        });
        const pickupReq = await planRequisition(tx, {
          tag,
          code: take('YC'),
          schoolId: school.id,
          adminId: admin.id,
          warehouseId: warehouse.id,
          itemId: pickupItem.id,
          title: `Chờ tình nguyện viên lấy hàng ${tag}`,
          status: 'ALLOCATING',
          planStatus: 'DISPATCHED',
          confirmed: true,
          fulfilled: 0,
          docs,
        });
        const transitReq = await planRequisition(tx, {
          tag,
          code: take('YC'),
          schoolId: school.id,
          adminId: admin.id,
          warehouseId: warehouse.id,
          itemId: transitItem.id,
          title: `Đang vận chuyển tới trường ${tag}`,
          status: 'ALLOCATING',
          planStatus: 'DISPATCHED',
          confirmed: true,
          fulfilled: 0,
          docs,
        });
        const deliveredReq = await planRequisition(tx, {
          tag,
          code: take('YC'),
          schoolId: school.id,
          adminId: admin.id,
          warehouseId: warehouse.id,
          itemId: deliveredItem.id,
          title: `Đã giao và ký nhận ${tag}`,
          status: 'COMPLETED',
          planStatus: 'DISPATCHED',
          confirmed: true,
          fulfilled: 1,
          docs,
        });

        await tx.waybill.create({
          data: {
            code: take('WB'),
            allocationPlanId: pickupReq.planId,
            status: 'PENDING_PICKUP',
            volunteers: { create: [{ volunteerId: volunteer.id }] },
          },
        });
        const transitWaybill = await tx.waybill.create({
          data: {
            code: take('WB'),
            allocationPlanId: transitReq.planId,
            status: 'IN_TRANSIT',
            dispatchedAt: recent,
            volunteers: { create: [{ volunteerId: volunteer.id }] },
          },
        });
        await tx.waybill.create({
          data: {
            code: take('WB'),
            allocationPlanId: deliveredReq.planId,
            status: 'DELIVERED',
            dispatchedAt: new Date(recent.getTime() - 86400000),
            deliveredAt: recent,
            volunteers: { create: [{ volunteerId: volunteer.id }] },
            proof: {
              create: {
                recipientSignatureUrl: photo(`Ky nhan ${tag}`),
                proofPhotoUrls: [photo(`Truong ${tag}`)],
                recipientName: school.fullName,
                recipientTitle: 'Hiệu trưởng',
                gpsLatitude: 16.0544,
                gpsLongitude: 108.2022,
                signedAt: recent,
                volunteerReportNote: `Đã bàn giao đủ 1 SGK bộ ${tag}.`,
                volunteerPhotoUrls: [photo(`Tinh nguyen ${tag}`)],
                volunteerReportedAt: recent,
                volunteerReporterId: volunteer.id,
              },
            },
          },
        });
        await tx.incidentReport.create({
          data: {
            waybillId: transitWaybill.id,
            reporterId: index % 2 === 0 ? warehouseUser.id : volunteer.id,
            reason: `Thùng sách bộ ${tag} bị ướt một góc khi xếp xe.`,
            incidentType: 'Hỏng bao bì',
            qrCode: transitQr,
            photoUrls: [photo(`Su co ${tag}`)],
          },
        });

        const transferMoving = index > 5;
        await tx.stockTransferOrder.create({
          data: {
            code: take('DC'),
            sourceWarehouseId: warehouse.id,
            targetSchoolId: school.id,
            deliveryAddress: address,
            createdById: warehouseUser.id,
            status: transferMoving ? 'IN_TRANSIT' : 'PENDING',
            itemsCount: 1,
            recipientName: school.fullName,
            recipientPhone: school.phone,
            dispatchedAt: transferMoving ? recent : null,
            volunteers: { create: [{ volunteerId: volunteer.id }] },
            items: { create: [{ resourceItemId: transferItem.id }] },
          },
        });

        const shiftDay = new Date(2026, 9, 19 + ((index - 1) % 4), 8, 0, 0);
        const open = index <= 2;
        await tx.volunteerShift.create({
          data: {
            volunteerId: volunteer.id,
            warehouseId: warehouse.id,
            shiftDate: shiftDay,
            shiftType: index % 3 === 0 ? 'DELIVERY' : index % 3 === 1 ? 'SORTING' : 'PACKING',
            checkInAt: open || index > 2 ? new Date(shiftDay.getTime() + 30 * 60 * 1000) : null,
            checkOutAt: open ? null : new Date(shiftDay.getTime() + 4.5 * 3600 * 1000),
            hoursContributed: open ? 0 : 4,
          },
        });

        void ready;
      }

      const audits: Array<{ action: string; resource: string; details: Prisma.InputJsonValue }> = [
        { action: 'CAMPAIGN_CREATED', resource: 'Campaign', details: { note: 'Tạo chiến dịch sách điểm trường' } },
        { action: 'PLEDGE_CREATED', resource: 'DonationPledge', details: { note: 'Tạo phiếu trao tặng sách cho nhà hảo tâm mẫu' } },
        { action: 'REQUISITION_APPROVED', resource: 'SupportRequisition', details: { note: 'Duyệt yêu cầu sách của trường', before: 'PENDING', after: 'APPROVED' } },
        { action: 'ALLOCATION_CONFIRMED', resource: 'AllocationPlan', details: { note: 'Xác nhận phương án phân bổ và chuyển kho', before: 'PROPOSED', after: 'CONFIRMED' } },
        { action: 'WAYBILL_CREATED', resource: 'Waybill', details: { note: 'Lập vận đơn cho trường' } },
        { action: 'INCIDENT_REPORTED', resource: 'IncidentReport', details: { note: 'Ghi nhận sự cố thùng sách bị ướt khi xếp xe' } },
        { action: 'VOLUNTEER_CHECK_IN', resource: 'VolunteerShift', details: { note: 'Điểm danh ca tại Tổng kho Miền Trung' } },
        { action: 'STOCK_TRANSFER_DISPATCHED', resource: 'StockTransferOrder', details: { note: 'Xuất lệnh điều chuyển tới trường', before: 'PENDING', after: 'IN_TRANSIT' } },
        { action: 'KIEM_KE', resource: 'Warehouse', details: { note: 'Kiểm kê kệ sách 1 tại WH-HAN' } },
        { action: 'DELIVERY_PROVED', resource: 'Waybill', details: { note: 'Trường ký nhận sách' } },
      ];
      for (const row of audits) {
        await tx.auditLog.create({ data: { userId: admin.id, action: row.action, resource: row.resource, details: row.details, ipAddress: '127.0.0.1' } });
      }

      for (let index = 1; index <= N; index += 1) {
        const tag = nn(index);
        await tx.pendingRegistration.create({
          data: {
            email: `dangky${tag}@seed.edushare.vn`,
            payload: {
              fullName: `Đăng ký ${tag}`,
              role: index % 2 === 0 ? 'SCHOOL_REP' : 'DONOR',
              organizationName: `Đơn vị đăng ký ${tag}`,
            },
            codeHash: passwordHash,
            expiresAt: new Date(now.getTime() - 3600 * 1000),
            attempts: 0,
            sendCount: 1,
          },
        });
        await tx.passwordResetCode.create({
          data: {
            userId: donor.id,
            codeHash: passwordHash,
            expiresAt: new Date(now.getTime() - 3600 * 1000),
            attempts: 0,
            usedAt: new Date(now.getTime() - 1800 * 1000),
          },
        });
      }
    },
    { timeout: 180000, maxWait: 20000 },
  );

  console.log('Da nap 10 dong cho moi chuc nang.');
}

async function createPlainPledge(
  tx: Prisma.TransactionClient,
  input: {
    code: string;
    campaignId: string;
    donor: { id: string; fullName: string; phone: string | null };
    status: 'PENDING' | 'AWAITING_DONOR' | 'VERIFIED' | 'CANCELLED';
    quantity: number;
    createdAt: Date;
    note: string;
    cancelled?: boolean;
  },
) {
  return tx.donationPledge.create({
    data: {
      code: input.code,
      donorId: input.donor.id,
      campaignId: input.campaignId,
      handoverMethod: 'DROP_OFF',
      scheduledAt: input.createdAt,
      address: 'Nhà hảo tâm mang đến Tổng kho Miền Trung',
      contactName: input.donor.fullName,
      contactPhone: input.donor.phone,
      status: input.status,
      notes: input.note,
      cancelReason: input.cancelled ? 'Đổi ý' : null,
      cancelNote: input.cancelled ? 'Hủy trước khi kho xác minh.' : null,
      cancelledAt: input.cancelled ? input.createdAt : null,
      createdAt: input.createdAt,
      items: {
        create: [{ category: 'BOOKS', name: 'SGK Toán lớp 1', estimatedQuantity: input.quantity, declaredCondition: 'Mới', unit: 'quyển' }],
      },
    },
  });
}

async function createItemPledge(
  tx: Prisma.TransactionClient,
  input: {
    code: string;
    campaignId: string;
    donor: { id: string; fullName: string; phone: string | null };
    status: 'PARTIALLY_RECEIVED' | 'COMPLETED';
    estimated: number;
    createdAt: Date;
    note: string;
    book: string;
  },
) {
  const pledge = await tx.donationPledge.create({
    data: {
      code: input.code,
      donorId: input.donor.id,
      campaignId: input.campaignId,
      handoverMethod: 'DROP_OFF',
      address: 'Tổng kho Miền Trung',
      contactName: input.donor.fullName,
      contactPhone: input.donor.phone,
      status: input.status,
      notes: input.note,
      createdAt: input.createdAt,
      items: {
        create: [{ category: 'BOOKS', name: input.book, estimatedQuantity: input.estimated, declaredCondition: 'Mới', unit: 'quyển' }],
      },
    },
    include: { items: true },
  });
  const item = pledge.items[0];
  if (!item) {
    throw new Error(`Thieu dong phieu ${pledge.code}`);
  }
  return { id: pledge.id, itemId: item.id };
}

async function makeItem(
  tx: Prisma.TransactionClient,
  input: { pledgeItemId: string; warehouseId: string; name: string; qr: string; status: ItemStatus; grade: 'GRADE_A' | 'GRADE_B' | null },
) {
  return tx.resourceItem.create({
    data: {
      qrCode: input.qr,
      pledgeItemId: input.pledgeItemId,
      warehouseId: input.warehouseId,
      category: 'BOOKS',
      name: input.name,
      grade: input.grade,
      status: input.status,
      specifications: { subject: 'Toán', gradeLevel: '1', batch: '2026-09' },
      binLocation: input.status === 'PENDING_INTAKE' ? null : 'Kệ sách 1',
      receivedAt: new Date(),
    },
  });
}

async function planRequisition(
  tx: Prisma.TransactionClient,
  input: {
    tag: string;
    code: string;
    schoolId: string;
    adminId: string;
    warehouseId: string;
    itemId: string;
    title: string;
    status: 'ALLOCATING' | 'COMPLETED';
    planStatus: 'PROPOSED' | 'CONFIRMED' | 'DISPATCHED';
    confirmed: boolean;
    fulfilled: number;
    docs: { verificationDocUrl: string; schoolConfirmationUrl: string; committeeConfirmationUrl: string };
  },
) {
  const requisition = await tx.supportRequisition.create({
    data: {
      code: input.code,
      schoolId: input.schoolId,
      title: input.title,
      urgencyLevel: 'MEDIUM',
      priorityScore: 70,
      description: `Yêu cầu sách bộ ${input.tag}, khớp 1 quyển đã kiểm định.`,
      studentInfo: { grade: '1', students: 28, classes: 1 },
      status: input.status,
      ...input.docs,
      items: { create: [{ category: 'BOOKS', quantityNeeded: 1, quantityFulfilled: input.fulfilled, unit: 'quyển', reason: 'Đúng bộ sách' }] },
      createdAt: new Date(Date.UTC(2020, 0, Number(input.tag), 4)),
    },
  });
  const plan = await tx.allocationPlan.create({
    data: {
      requisitionId: requisition.id,
      approvedById: input.adminId,
      adminConfirmedAt: input.confirmed ? new Date() : null,
      adminConfirmedById: input.confirmed ? input.adminId : null,
      status: input.planStatus,
      totalItems: 1,
      items: { create: [{ resourceItemId: input.itemId, fromWarehouseId: input.warehouseId }] },
    },
  });
  return { id: requisition.id, planId: plan.id };
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
