-- CreateEnum
CREATE TYPE "CampaignStatus" AS ENUM ('UPCOMING', 'ACTIVE', 'PAUSED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "ItemCategory" AS ENUM ('BOOKS', 'UNIFORMS', 'IT_DEVICES', 'STATIONERY', 'FURNITURE', 'VEHICLES');

-- CreateEnum
CREATE TYPE "ItemConditionGrade" AS ENUM ('GRADE_A', 'GRADE_B', 'GRADE_C', 'REJECTED');

-- CreateEnum
CREATE TYPE "ItemStatus" AS ENUM ('PENDING_INTAKE', 'INSPECTED', 'REFURBISHING', 'READY_FOR_ALLOCATION', 'ALLOCATED', 'IN_TRANSIT', 'DELIVERED', 'RECYCLED');

-- CreateEnum
CREATE TYPE "PledgeStatus" AS ENUM ('PENDING', 'VERIFIED', 'PARTIALLY_RECEIVED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "RequisitionStatus" AS ENUM ('PENDING', 'APPROVED', 'ALLOCATING', 'COMPLETED', 'REJECTED');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'INTAKE_STAFF', 'WAREHOUSE_STAFF', 'COORDINATOR', 'VOLUNTEER', 'DONOR', 'SCHOOL_REP');

-- CreateEnum
CREATE TYPE "UrgencyLevel" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "WaybillStatus" AS ENUM ('PENDING_PICKUP', 'IN_TRANSIT', 'DELIVERED', 'FAILED');

-- CreateTable
CREATE TABLE "allocation_items" (
    "id" TEXT NOT NULL,
    "allocationPlanId" TEXT NOT NULL,
    "resourceItemId" TEXT NOT NULL,
    "fromWarehouseId" TEXT NOT NULL,

    CONSTRAINT "allocation_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "allocation_plans" (
    "id" TEXT NOT NULL,
    "requisitionId" TEXT NOT NULL,
    "approvedById" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PROPOSED',
    "totalItems" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "allocation_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "action" TEXT NOT NULL,
    "resource" TEXT NOT NULL,
    "details" JSONB,
    "ipAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campaign_targets" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "category" "ItemCategory" NOT NULL,
    "targetQuantity" INTEGER NOT NULL,
    "currentReceivedQuantity" INTEGER NOT NULL DEFAULT 0,
    "currentDistributedQuantity" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "campaign_targets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campaigns" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bannerUrl" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "status" "CampaignStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campaigns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "delivery_proofs" (
    "id" TEXT NOT NULL,
    "waybillId" TEXT NOT NULL,
    "recipientSignatureUrl" TEXT NOT NULL,
    "proofPhotoUrls" TEXT[],
    "recipientName" TEXT NOT NULL,
    "recipientTitle" TEXT NOT NULL,
    "gpsLatitude" DOUBLE PRECISION,
    "gpsLongitude" DOUBLE PRECISION,
    "signedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "delivery_proofs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donation_pledge_items" (
    "id" TEXT NOT NULL,
    "pledgeId" TEXT NOT NULL,
    "category" "ItemCategory" NOT NULL,
    "name" TEXT NOT NULL,
    "estimatedQuantity" INTEGER NOT NULL,
    "declaredCondition" TEXT,
    "photoUrls" TEXT[],
    "unit" TEXT NOT NULL DEFAULT 'c├íi',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "donation_pledge_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donation_pledges" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "donorId" TEXT NOT NULL,
    "campaignId" TEXT,
    "handoverMethod" TEXT NOT NULL DEFAULT 'DROP_OFF',
    "scheduledAt" TIMESTAMP(3),
    "address" TEXT,
    "status" "PledgeStatus" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "donation_pledges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inspection_reports" (
    "id" TEXT NOT NULL,
    "resourceItemId" TEXT NOT NULL,
    "inspectorId" TEXT NOT NULL,
    "isFunctional" BOOLEAN NOT NULL DEFAULT true,
    "physicalDefects" TEXT,
    "recommendedAction" TEXT,
    "notes" TEXT,
    "inspectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "inspection_reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "requisition_items" (
    "id" TEXT NOT NULL,
    "requisitionId" TEXT NOT NULL,
    "category" "ItemCategory" NOT NULL,
    "quantityNeeded" INTEGER NOT NULL,
    "quantityFulfilled" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "requisition_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resource_items" (
    "id" TEXT NOT NULL,
    "qrCode" TEXT NOT NULL,
    "pledgeItemId" TEXT,
    "warehouseId" TEXT,
    "category" "ItemCategory" NOT NULL,
    "name" TEXT NOT NULL,
    "grade" "ItemConditionGrade",
    "status" "ItemStatus" NOT NULL DEFAULT 'PENDING_INTAKE',
    "specifications" JSONB,
    "binLocation" TEXT,
    "receivedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resource_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stock_transfer_orders" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "sourceWarehouseId" TEXT NOT NULL,
    "targetWarehouseId" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "itemsCount" INTEGER NOT NULL DEFAULT 0,
    "dispatchedAt" TIMESTAMP(3),
    "receivedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stock_transfer_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "support_requisitions" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "urgencyLevel" "UrgencyLevel" NOT NULL DEFAULT 'MEDIUM',
    "priorityScore" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "verificationDocUrl" TEXT,
    "status" "RequisitionStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "support_requisitions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "organizationName" TEXT,
    "address" TEXT,
    "city" TEXT,
    "district" TEXT,
    "avatarUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT,
    "role" "Role" NOT NULL DEFAULT 'DONOR',
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "refreshTokenHash" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volunteer_shifts" (
    "id" TEXT NOT NULL,
    "volunteerId" TEXT NOT NULL,
    "warehouseId" TEXT NOT NULL,
    "shiftDate" TIMESTAMP(3) NOT NULL,
    "shiftType" TEXT NOT NULL,
    "checkInAt" TIMESTAMP(3),
    "checkOutAt" TIMESTAMP(3),
    "hoursContributed" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "volunteer_shifts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "warehouses" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "managerId" TEXT,
    "capacity" INTEGER NOT NULL DEFAULT 1000,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "warehouses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "waybills" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "allocationPlanId" TEXT NOT NULL,
    "assignedVolunteerId" TEXT,
    "status" "WaybillStatus" NOT NULL DEFAULT 'PENDING_PICKUP',
    "dispatchedAt" TIMESTAMP(3),
    "deliveredAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "waybills_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "allocation_items_resourceItemId_key" ON "allocation_items"("resourceItemId" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "allocation_plans_requisitionId_key" ON "allocation_plans"("requisitionId" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "campaigns_slug_key" ON "campaigns"("slug" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "delivery_proofs_waybillId_key" ON "delivery_proofs"("waybillId" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "donation_pledges_code_key" ON "donation_pledges"("code" ASC);

-- CreateIndex
CREATE INDEX "resource_items_category_idx" ON "resource_items"("category" ASC);

-- CreateIndex
CREATE INDEX "resource_items_qrCode_idx" ON "resource_items"("qrCode" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "resource_items_qrCode_key" ON "resource_items"("qrCode" ASC);

-- CreateIndex
CREATE INDEX "resource_items_status_idx" ON "resource_items"("status" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "stock_transfer_orders_code_key" ON "stock_transfer_orders"("code" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "support_requisitions_code_key" ON "support_requisitions"("code" ASC);

-- CreateIndex
CREATE INDEX "support_requisitions_priorityScore_idx" ON "support_requisitions"("priorityScore" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "user_profiles_userId_key" ON "user_profiles"("userId" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "warehouses_code_key" ON "warehouses"("code" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "waybills_allocationPlanId_key" ON "waybills"("allocationPlanId" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "waybills_code_key" ON "waybills"("code" ASC);

-- AddForeignKey
ALTER TABLE "allocation_items" ADD CONSTRAINT "allocation_items_allocationPlanId_fkey" FOREIGN KEY ("allocationPlanId") REFERENCES "allocation_plans"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "allocation_items" ADD CONSTRAINT "allocation_items_resourceItemId_fkey" FOREIGN KEY ("resourceItemId") REFERENCES "resource_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "allocation_plans" ADD CONSTRAINT "allocation_plans_requisitionId_fkey" FOREIGN KEY ("requisitionId") REFERENCES "support_requisitions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_targets" ADD CONSTRAINT "campaign_targets_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "campaigns"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_proofs" ADD CONSTRAINT "delivery_proofs_waybillId_fkey" FOREIGN KEY ("waybillId") REFERENCES "waybills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donation_pledge_items" ADD CONSTRAINT "donation_pledge_items_pledgeId_fkey" FOREIGN KEY ("pledgeId") REFERENCES "donation_pledges"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donation_pledges" ADD CONSTRAINT "donation_pledges_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "campaigns"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donation_pledges" ADD CONSTRAINT "donation_pledges_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inspection_reports" ADD CONSTRAINT "inspection_reports_inspectorId_fkey" FOREIGN KEY ("inspectorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inspection_reports" ADD CONSTRAINT "inspection_reports_resourceItemId_fkey" FOREIGN KEY ("resourceItemId") REFERENCES "resource_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requisition_items" ADD CONSTRAINT "requisition_items_requisitionId_fkey" FOREIGN KEY ("requisitionId") REFERENCES "support_requisitions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resource_items" ADD CONSTRAINT "resource_items_pledgeItemId_fkey" FOREIGN KEY ("pledgeItemId") REFERENCES "donation_pledge_items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resource_items" ADD CONSTRAINT "resource_items_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "warehouses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_transfer_orders" ADD CONSTRAINT "stock_transfer_orders_sourceWarehouseId_fkey" FOREIGN KEY ("sourceWarehouseId") REFERENCES "warehouses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_transfer_orders" ADD CONSTRAINT "stock_transfer_orders_targetWarehouseId_fkey" FOREIGN KEY ("targetWarehouseId") REFERENCES "warehouses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "support_requisitions" ADD CONSTRAINT "support_requisitions_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volunteer_shifts" ADD CONSTRAINT "volunteer_shifts_volunteerId_fkey" FOREIGN KEY ("volunteerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volunteer_shifts" ADD CONSTRAINT "volunteer_shifts_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "warehouses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "waybills" ADD CONSTRAINT "waybills_allocationPlanId_fkey" FOREIGN KEY ("allocationPlanId") REFERENCES "allocation_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "waybills" ADD CONSTRAINT "waybills_assignedVolunteerId_fkey" FOREIGN KEY ("assignedVolunteerId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

