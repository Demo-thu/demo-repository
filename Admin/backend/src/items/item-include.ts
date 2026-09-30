import { Prisma } from '@prisma/client';
import { publicUserSelect } from '../common/utils';

export const itemInclude = {
  warehouse: { select: { id: true, code: true, name: true, city: true } },
  pledgeItem: {
    select: {
      id: true,
      name: true,
      category: true,
      pledge: { select: { id: true, code: true, campaignId: true } },
    },
  },
  allocationItem: {
    select: {
      id: true,
      fromWarehouseId: true,
      allocationPlan: {
        select: {
          id: true,
          status: true,
          requisition: {
            select: {
              id: true,
              code: true,
              title: true,
              school: { select: publicUserSelect },
            },
          },
          waybill: { select: { id: true, code: true, status: true } },
        },
      },
    },
  },
} satisfies Prisma.ResourceItemInclude;
