export const WAYBILL_STATUS_LABEL = {
  PENDING_PICKUP: "Chờ xác nhận",
  IN_TRANSIT: "Đang vận chuyển",
  DELIVERED: "Đã bàn giao",
  FAILED: "Giao thất bại",
};

export const ITEM_STATUS_LABEL = {
  PENDING_INTAKE: "Chờ tiếp nhận",
  INSPECTED: "Đã kiểm định",
  REFURBISHING: "Đang sửa chữa",
  READY_FOR_ALLOCATION: "Sẵn sàng xuất",
  ALLOCATED: "Đã gán phân bổ",
  IN_TRANSIT: "Đang vận chuyển",
  DELIVERED: "Đã bàn giao",
  RECYCLED: "Tái chế",
};

export const GRADE_LABEL = {
  GRADE_A: "Hạng A",
  GRADE_B: "Hạng B",
  GRADE_C: "Hạng C",
  REJECTED: "Không đạt",
};

export const CATEGORY_LABEL = {
  BOOKS: "Sách",
  UNIFORMS: "Đồng phục",
  IT_DEVICES: "Thiết bị tin học",
  STATIONERY: "Văn phòng phẩm",
  FURNITURE: "Bàn ghế",
  VEHICLES: "Phương tiện",
};

export const ROLE_LABEL = {
  ADMIN: "Quản trị",
  INTAKE_STAFF: "Tiếp nhận",
  WAREHOUSE_STAFF: "Nhân viên kho",
  COORDINATOR: "Điều phối",
  VOLUNTEER: "Tình nguyện viên",
  DONOR: "Nhà hảo tâm",
  SCHOOL_REP: "Đại diện trường",
};

export function formatNumber(value) {
  return new Intl.NumberFormat("vi-VN").format(Number(value) || 0);
}

export function formatDate(value) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" }).format(date);
}

export function formatDateTime(value) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("vi-VN", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" }).format(date);
}

export function initials(name) {
  if (!name) return "—";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const picked = parts.slice(-2);
  return picked.map((part) => part[0]).join("").toUpperCase();
}

export function specLine(specifications) {
  if (!specifications || typeof specifications !== "object") return "";
  return [specifications.cpu, specifications.ram, specifications.storage, specifications.battery].filter(Boolean).join(" • ");
}
