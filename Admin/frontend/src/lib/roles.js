export function homeForRole(role) {
  if (role === "DONOR") return "/donor";
  if (role === "SCHOOL_REP") return "/school";
  if (role === "VOLUNTEER") return "/volunteer";
  if (role === "WAREHOUSE_STAFF" || role === "INTAKE_STAFF" || role === "COORDINATOR") return "/warehouse";
  return "/";
}

export function portalOf(pathname) {
  if (pathname.startsWith("/donor")) return "donor";
  if (pathname.startsWith("/school")) return "school";
  if (pathname.startsWith("/warehouse")) return "warehouse";
  if (pathname.startsWith("/volunteer")) return "volunteer";
  return "";
}

export const PORTAL_ACCESS = {
  donor: ["DONOR"],
  school: ["SCHOOL_REP"],
  warehouse: ["WAREHOUSE_STAFF", "INTAKE_STAFF", "COORDINATOR"],
  volunteer: ["VOLUNTEER"],
};

export const ROLE_LABEL = {
  ADMIN: "Quản trị viên",
  WAREHOUSE_STAFF: "Thủ kho điều phối",
  INTAKE_STAFF: "Thủ kho điều phối",
  COORDINATOR: "Thủ kho điều phối",
  VOLUNTEER: "Tình nguyện viên",
  DONOR: "Nhà hảo tâm",
  SCHOOL_REP: "Đại diện nhà trường",
};
