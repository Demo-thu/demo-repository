-- AlterTable
ALTER TABLE "support_requisitions" ADD COLUMN "committeeConfirmationUrl" TEXT,
ADD COLUMN "schoolConfirmationUrl" TEXT;

-- Keep the old verification document as the school confirmation for existing rows.
UPDATE "support_requisitions"
SET "schoolConfirmationUrl" = "verificationDocUrl"
WHERE "verificationDocUrl" IS NOT NULL
  AND ("schoolConfirmationUrl" IS NULL OR "schoolConfirmationUrl" = '');

-- AlterTable
ALTER TABLE "allocation_plans" ADD COLUMN "adminConfirmedAt" TIMESTAMP(3),
ADD COLUMN "adminConfirmedById" TEXT;

-- Existing confirmed or dispatched plans already passed confirmation.
UPDATE "allocation_plans" AS plan
SET "adminConfirmedAt" = plan."updatedAt",
    "adminConfirmedById" = plan."approvedById"
WHERE plan."status" IN ('CONFIRMED', 'DISPATCHED')
  AND plan."adminConfirmedAt" IS NULL
  AND EXISTS (SELECT 1 FROM "users" AS usr WHERE usr."id" = plan."approvedById");

-- AlterTable
ALTER TABLE "delivery_proofs" ADD COLUMN "volunteerPhotoUrls" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN "volunteerReportNote" TEXT,
ADD COLUMN "volunteerReportedAt" TIMESTAMP(3),
ADD COLUMN "volunteerReporterId" TEXT;

-- AlterTable
ALTER TABLE "stock_transfer_orders" ADD COLUMN "recipientName" TEXT,
ADD COLUMN "recipientNote" TEXT,
ADD COLUMN "recipientPhone" TEXT;

-- CreateTable
CREATE TABLE "waybill_volunteers" (
    "id" TEXT NOT NULL,
    "waybillId" TEXT NOT NULL,
    "volunteerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "waybill_volunteers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "waybill_volunteers_volunteerId_idx" ON "waybill_volunteers"("volunteerId");

-- CreateIndex
CREATE UNIQUE INDEX "waybill_volunteers_waybillId_volunteerId_key" ON "waybill_volunteers"("waybillId", "volunteerId");

-- AddForeignKey
ALTER TABLE "waybill_volunteers" ADD CONSTRAINT "waybill_volunteers_waybillId_fkey" FOREIGN KEY ("waybillId") REFERENCES "waybills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "waybill_volunteers" ADD CONSTRAINT "waybill_volunteers_volunteerId_fkey" FOREIGN KEY ("volunteerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Copy the single assigned volunteer into the join table before dropping the old column.
INSERT INTO "waybill_volunteers" ("id", "waybillId", "volunteerId", "createdAt")
SELECT gen_random_uuid()::text, waybill."id", waybill."assignedVolunteerId", CURRENT_TIMESTAMP
FROM "waybills" AS waybill
WHERE waybill."assignedVolunteerId" IS NOT NULL;

-- DropForeignKey
ALTER TABLE "waybills" DROP CONSTRAINT "waybills_assignedVolunteerId_fkey";

-- AlterTable
ALTER TABLE "waybills" DROP COLUMN "assignedVolunteerId";

-- CreateTable
CREATE TABLE "incident_reports" (
    "id" TEXT NOT NULL,
    "waybillId" TEXT NOT NULL,
    "reporterId" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "incident_reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stock_transfer_volunteers" (
    "id" TEXT NOT NULL,
    "transferId" TEXT NOT NULL,
    "volunteerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stock_transfer_volunteers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stock_transfer_items" (
    "id" TEXT NOT NULL,
    "transferId" TEXT NOT NULL,
    "resourceItemId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stock_transfer_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "incident_reports_waybillId_idx" ON "incident_reports"("waybillId");

-- CreateIndex
CREATE INDEX "incident_reports_reporterId_idx" ON "incident_reports"("reporterId");

-- CreateIndex
CREATE INDEX "stock_transfer_volunteers_volunteerId_idx" ON "stock_transfer_volunteers"("volunteerId");

-- CreateIndex
CREATE UNIQUE INDEX "stock_transfer_volunteers_transferId_volunteerId_key" ON "stock_transfer_volunteers"("transferId", "volunteerId");

-- CreateIndex
CREATE INDEX "stock_transfer_items_resourceItemId_idx" ON "stock_transfer_items"("resourceItemId");

-- CreateIndex
CREATE UNIQUE INDEX "stock_transfer_items_transferId_resourceItemId_key" ON "stock_transfer_items"("transferId", "resourceItemId");

-- AddForeignKey
ALTER TABLE "allocation_plans" ADD CONSTRAINT "allocation_plans_adminConfirmedById_fkey" FOREIGN KEY ("adminConfirmedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_proofs" ADD CONSTRAINT "delivery_proofs_volunteerReporterId_fkey" FOREIGN KEY ("volunteerReporterId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incident_reports" ADD CONSTRAINT "incident_reports_waybillId_fkey" FOREIGN KEY ("waybillId") REFERENCES "waybills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incident_reports" ADD CONSTRAINT "incident_reports_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_transfer_volunteers" ADD CONSTRAINT "stock_transfer_volunteers_transferId_fkey" FOREIGN KEY ("transferId") REFERENCES "stock_transfer_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_transfer_volunteers" ADD CONSTRAINT "stock_transfer_volunteers_volunteerId_fkey" FOREIGN KEY ("volunteerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_transfer_items" ADD CONSTRAINT "stock_transfer_items_transferId_fkey" FOREIGN KEY ("transferId") REFERENCES "stock_transfer_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_transfer_items" ADD CONSTRAINT "stock_transfer_items_resourceItemId_fkey" FOREIGN KEY ("resourceItemId") REFERENCES "resource_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
