import { ItemConditionGrade, ItemStatus, UrgencyLevel } from '@prisma/client';
import { BadRequestException } from '@nestjs/common';

const URGENCY_WEIGHT: Record<UrgencyLevel, number> = {
  LOW: 10,
  MEDIUM: 25,
  HIGH: 40,
  CRITICAL: 55,
};

export interface PriorityInput {
  urgencyLevel: UrgencyLevel;
  hasVerificationDoc: boolean;
  quantityNeeded: number;
  quantityFulfilled: number;
  createdAt: Date;
  now?: Date;
}

export function computePriorityScore(input: PriorityInput): number {
  const urgency = URGENCY_WEIGHT[input.urgencyLevel];
  const verification = input.hasVerificationDoc ? 15 : 0;
  const gapRatio = input.quantityNeeded <= 0
    ? 0
    : Math.max(0, input.quantityNeeded - input.quantityFulfilled) / input.quantityNeeded;
  const gap = Math.min(1, gapRatio) * 20;
  const now = input.now ?? new Date();
  const days = Math.max(0, (now.getTime() - input.createdAt.getTime()) / 86_400_000);
  const waiting = Math.min(10, days * 0.5);
  const raw = urgency + verification + gap + waiting;
  return Math.round(Math.min(100, Math.max(0, raw)) * 10) / 10;
}

export function assertTransition(current: string, next: string, allowed: object, label: string): void {
  const table = allowed as Record<string, readonly string[] | undefined>;
  const options = table[current] ?? [];
  if (!options.includes(next)) {
    throw new BadRequestException(`${label} không thể chuyển từ ${current} sang ${next}`);
  }
}

export const PLEDGE_TRANSITIONS = {
  PENDING: ['VERIFIED', 'CANCELLED'],
  VERIFIED: ['PARTIALLY_RECEIVED', 'COMPLETED', 'CANCELLED'],
  PARTIALLY_RECEIVED: ['PARTIALLY_RECEIVED', 'COMPLETED', 'CANCELLED'],
  COMPLETED: [],
  CANCELLED: [],
} as const;

export const ITEM_TRANSITIONS: Record<ItemStatus, readonly ItemStatus[]> = {
  PENDING_INTAKE: ['INSPECTED', 'REFURBISHING', 'READY_FOR_ALLOCATION', 'RECYCLED'],
  INSPECTED: ['REFURBISHING', 'READY_FOR_ALLOCATION', 'RECYCLED', 'INSPECTED'],
  REFURBISHING: ['INSPECTED', 'READY_FOR_ALLOCATION', 'RECYCLED'],
  READY_FOR_ALLOCATION: ['ALLOCATED', 'REFURBISHING', 'RECYCLED'],
  ALLOCATED: ['IN_TRANSIT', 'READY_FOR_ALLOCATION'],
  IN_TRANSIT: ['DELIVERED', 'READY_FOR_ALLOCATION'],
  DELIVERED: [],
  RECYCLED: [],
};

export const REQUISITION_TRANSITIONS = {
  PENDING: ['APPROVED', 'REJECTED'],
  APPROVED: ['ALLOCATING', 'REJECTED'],
  ALLOCATING: ['COMPLETED', 'APPROVED'],
  COMPLETED: [],
  REJECTED: [],
} as const;

export const WAYBILL_TRANSITIONS = {
  PENDING_PICKUP: ['IN_TRANSIT', 'FAILED'],
  IN_TRANSIT: ['DELIVERED', 'FAILED'],
  DELIVERED: [],
  FAILED: [],
} as const;

export const CAMPAIGN_TRANSITIONS = {
  UPCOMING: ['ACTIVE', 'PAUSED'],
  ACTIVE: ['PAUSED', 'COMPLETED'],
  PAUSED: ['ACTIVE', 'COMPLETED'],
  COMPLETED: [],
} as const;

export const TRANSFER_TRANSITIONS = {
  PENDING: ['RECEIVED', 'CANCELLED'],
  IN_TRANSIT: ['RECEIVED'],
  RECEIVED: [],
  CANCELLED: [],
} as const;

export const MOVABLE_ITEM_STATUSES: readonly ItemStatus[] = [
  'PENDING_INTAKE',
  'INSPECTED',
  'REFURBISHING',
  'READY_FOR_ALLOCATION',
];

export function resolveInspectionOutcome(input: {
  grade: ItemConditionGrade;
  isFunctional: boolean;
  recommendedAction: 'ALLOCATE' | 'REFURBISH' | 'RECYCLE' | 'HOLD';
}): { grade: ItemConditionGrade; status: ItemStatus; recommendedAction: string } {
  if (input.recommendedAction === 'RECYCLE' || input.grade === 'REJECTED') {
    return { grade: 'REJECTED', status: 'RECYCLED', recommendedAction: 'RECYCLE' };
  }
  if (input.recommendedAction === 'REFURBISH' || !input.isFunctional) {
    return { grade: input.grade, status: 'REFURBISHING', recommendedAction: 'REFURBISH' };
  }
  if (input.recommendedAction === 'ALLOCATE') {
    return { grade: input.grade, status: 'READY_FOR_ALLOCATION', recommendedAction: 'ALLOCATE' };
  }
  return { grade: input.grade, status: 'INSPECTED', recommendedAction: 'HOLD' };
}

export const GRADE_RANK: Record<ItemConditionGrade, number> = {
  GRADE_A: 0,
  GRADE_B: 1,
  GRADE_C: 2,
  REJECTED: 3,
};
