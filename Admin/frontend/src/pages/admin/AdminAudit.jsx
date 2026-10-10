import { useCallback, useEffect, useState } from "react";
import { Download } from "lucide-react";
import api, { apiError } from "../../lib/api";
import { ROLE_LABEL } from "../../lib/roles";
import { Card, DataTable, GhostButton, Notice, PageHead, Pager, SearchBox, downloadCsv, fmtDateTime, inputClass, rowsOf, useNotice } from "../portals/kit";

const RESOURCES = ["User", "Campaign", "DonationPledge", "SupportRequisition", "AllocationPlan", "Waybill", "IncidentReport", "ResourceItem", "StockTransferOrder", "Warehouse", "VolunteerShift"];

const ACTION_LABEL = {
  AUTH_LOGIN: "Đăng nhập",
  AUTH_LOGOUT: "Đăng xuất",
  AUTH_REGISTER: "Đăng ký tài khoản",
  PROFILE_UPDATED: "Tự sửa hồ sơ",
  USER_CREATED: "Tạo tài khoản",
  USER_UPDATED: "Sửa thông tin tài khoản",
  USER_ROLE_CHANGED: "Đổi vai trò tài khoản",
  USER_STATUS_CHANGED: "Đổi trạng thái tài khoản",
  CAMPAIGN_CREATED: "Tạo chiến dịch",
  CAMPAIGN_UPDATED: "Sửa chiến dịch",
  CAMPAIGN_STATUS_CHANGED: "Đổi trạng thái chiến dịch",
  CAMPAIGN_TARGET_ADDED: "Thêm hạng mục chiến dịch",
  PLEDGE_CREATED: "Tạo phiếu trao tặng",
  PLEDGE_UPDATED: "Sửa phiếu trao tặng",
  PLEDGE_VERIFIED: "Xác minh phiếu trao tặng",
  PLEDGE_CANCELLED: "Hủy phiếu trao tặng",
  PLEDGE_PROPOSAL_SENT: "Kho gửi phiếu đề xuất cho nhà hảo tâm",
  PLEDGE_PROPOSAL_ACCEPTED: "Nhà hảo tâm xác nhận đề xuất của kho",
  PLEDGE_PROPOSAL_WITHDRAWN: "Kho rút phiếu đề xuất",
  PLEDGE_PROPOSAL_EXPIRED: "Phiếu đề xuất hết hạn (7 ngày)",
  PLEDGE_RECEIVED: "Nhập kho phiếu trao tặng",
  REQUISITION_CREATED: "Trường gửi yêu cầu",
  REQUISITION_UPDATED: "Sửa yêu cầu của trường",
  REQUISITION_RESCORED: "Chấm lại điểm ưu tiên",
  REQUISITION_RESCORED_BATCH: "Chấm lại điểm hàng loạt",
  REQUISITION_APPROVED: "Duyệt yêu cầu",
  REQUISITION_REJECTED: "Từ chối yêu cầu",
  ALLOCATION_MATCHED: "Ghép tồn kho",
  ALLOCATION_CONFIRMED: "Xác nhận phương án",
  ALLOCATION_CANCELLED: "Hủy phương án",
  INSPECTION_RECORDED: "Kiểm định hiện vật",
  ITEM_UPDATED: "Sửa hiện vật",
  ITEM_REFURBISH_STARTED: "Bắt đầu sửa chữa hiện vật",
  ITEM_REFURBISH_COMPLETED: "Hoàn tất sửa chữa hiện vật",
  WAREHOUSE_CREATED: "Tạo kho",
  WAREHOUSE_UPDATED: "Sửa thông tin kho",
  STOCK_TRANSFER_MANIFEST: "Lập danh sách hiện vật chuyển",
  STOCK_TRANSFER_DISPATCHED: "Xuất kho điều chuyển",
  STOCK_TRANSFER_COMPLETED: "Trường nhận hàng điều chuyển",
  STOCK_TRANSFER_CANCELLED: "Hủy lệnh điều chuyển",
  WAYBILL_CREATED: "Lập vận đơn",
  WAYBILL_ASSIGNED: "Gán tình nguyện viên vận đơn",
  WAYBILL_PICKED_UP: "Lấy hàng vận đơn",
  WAYBILL_FAILED: "Vận đơn thất bại",
  DELIVERY_PROVED: "Trường ký nhận (PoD)",
  VOLUNTEER_DELIVERY_REPORTED: "Tình nguyện viên báo cáo giao hàng",
  INCIDENT_REPORTED: "Báo cáo sự cố",
  ROUTE_INCIDENT: "Sự cố trên tuyến",
  POD_RECONCILED: "Đối soát biên bản bàn giao",
  VOLUNTEER_SHIFT_CREATED: "Tạo ca tình nguyện",
  VOLUNTEER_CHECK_IN: "Điểm danh vào ca",
  VOLUNTEER_CHECK_OUT: "Điểm danh ra ca",
  KIEM_KE: "Kiểm kê kho",
  SEED_COMPLETED: "Nạp dữ liệu mẫu",
};

const RESOURCE_LABEL = {
  User: "Tài khoản",
  Campaign: "Chiến dịch",
  CampaignTarget: "Hạng mục chiến dịch",
  DonationPledge: "Phiếu trao tặng",
  SupportRequisition: "Yêu cầu của trường",
  AllocationPlan: "Phương án phân bổ",
  Waybill: "Vận đơn",
  waybill: "Vận đơn",
  IncidentReport: "Sự cố",
  ResourceItem: "Hiện vật",
  StockTransferOrder: "Lệnh điều chuyển",
  InspectionReport: "Kiểm định",
  Warehouse: "Kho",
  VolunteerShift: "Ca tình nguyện",
  DeliveryProof: "Biên bản bàn giao",
  System: "Hệ thống",
};

const STATUS_LABEL = {
  ACTIVE: "Đang hoạt động", SUSPENDED: "Đã khóa", INACTIVE: "Ngừng hoạt động",
  DRAFT: "Nháp", PAUSED: "Tạm dừng", COMPLETED: "Hoàn tất", CLOSED: "Đã đóng", CANCELLED: "Đã hủy",
  PENDING: "Chờ xử lý", IN_TRANSIT: "Đang vận chuyển", RECEIVED: "Đã nhận", DELIVERED: "Đã giao",
  READY_FOR_ALLOCATION: "Sẵn sàng phân bổ", NEEDS_REFURBISH: "Cần sửa chữa", REJECTED: "Từ chối",
};

const GRADE_LABEL = { GRADE_A: "Loại A", GRADE_B: "Loại B", GRADE_C: "Loại C", REJECTED: "Không đạt" };
const FIELD_LABEL = { fullName: "Họ tên", phone: "Số điện thoại", title: "Tên", description: "Mô tả", startDate: "Ngày bắt đầu", endDate: "Ngày kết thúc" };

const isUuid = (value) => typeof value === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
const show = (value) => (value === null || value === undefined || value === "" ? "(trống)" : String(value));
const roleName = (value) => ROLE_LABEL[value] || value;
const statusName = (value) => STATUS_LABEL[value] || value;

/** Biến một bản ghi nhật ký thành các dòng tiếng Việt: thao tác đó đã sửa gì, trên đối tượng nào. */
function describe(row) {
  const details = row.details && typeof row.details === "object" ? row.details : {};
  const refs = row.refs || {};
  const lines = [];
  const who = (key) => refs[key] || null;

  if (Array.isArray(details.changes)) {
    const target = who("userId") || who("campaignId");
    if (target) lines.push(`Đối tượng: ${target}`);
    if (details.changes.length === 0) lines.push("Lưu nhưng không có thông tin nào thay đổi.");
    details.changes.forEach((change) => {
      lines.push(`${change.label || FIELD_LABEL[change.field] || change.field}: ${show(change.from)} → ${show(change.to)}`);
    });
  } else if (row.action === "PROFILE_UPDATED" && Array.isArray(details.fields)) {
    lines.push(`Tự cập nhật: ${details.fields.map((field) => FIELD_LABEL[field] || field).join(", ")}`);
  }

  switch (row.action) {
    case "USER_ROLE_CHANGED":
      lines.push(`Tài khoản: ${who("userId") || "không rõ"}`);
      lines.push(details.from ? `Vai trò: ${roleName(details.from)} → ${roleName(details.role)}` : `Vai trò mới: ${roleName(details.role)}`);
      break;
    case "USER_STATUS_CHANGED":
      lines.push(`Tài khoản: ${who("userId") || "không rõ"}`);
      lines.push(details.from ? `Trạng thái: ${statusName(details.from)} → ${statusName(details.status)}` : `Trạng thái mới: ${statusName(details.status)}`);
      break;
    case "USER_CREATED":
      lines.push(`Tài khoản mới: ${who("userId") || "không rõ"} · vai trò ${roleName(details.role)}`);
      break;
    case "AUTH_REGISTER":
      lines.push(`Email ${details.email} đăng ký với vai trò ${roleName(details.role)}`);
      break;
    case "CAMPAIGN_STATUS_CHANGED":
      lines.push(`Chiến dịch: ${who("campaignId") || "không rõ"}`);
      lines.push(`Trạng thái: ${statusName(details.from)} → ${statusName(details.to)}`);
      break;
    case "CAMPAIGN_CREATED":
      lines.push(`Chiến dịch mới: ${who("campaignId") || details.slug}`);
      break;
    case "CAMPAIGN_TARGET_ADDED":
      lines.push(`Thêm hạng mục ${details.category || ""} vào chiến dịch ${who("campaignId") || "không rõ"}`);
      break;
    case "REQUISITION_CREATED":
    case "REQUISITION_UPDATED":
    case "REQUISITION_APPROVED":
    case "REQUISITION_REJECTED":
    case "REQUISITION_RESCORED":
      lines.push(`Yêu cầu: ${who("requisitionId") || details.code || "không rõ"}`);
      if (details.priorityScore !== undefined) lines.push(`Điểm ưu tiên: ${details.priorityScore}`);
      if (details.reason) lines.push(`Lý do: ${details.reason}`);
      break;
    case "ALLOCATION_MATCHED":
    case "ALLOCATION_CONFIRMED":
    case "ALLOCATION_CANCELLED":
      lines.push(`${who("planId") || "Phương án"}${who("requisitionId") ? ` (${who("requisitionId")})` : ""}`);
      if (details.totalItems !== undefined) lines.push(`Số hiện vật: ${details.totalItems}`);
      break;
    case "PLEDGE_CREATED":
    case "PLEDGE_UPDATED":
    case "PLEDGE_VERIFIED":
    case "PLEDGE_PROPOSAL_SENT":
    case "PLEDGE_PROPOSAL_WITHDRAWN":
    case "PLEDGE_PROPOSAL_EXPIRED":
      lines.push(`Phiếu: ${who("pledgeId") || details.code || "không rõ"}`);
      break;
    case "PLEDGE_PROPOSAL_ACCEPTED":
      lines.push(`Phiếu: ${who("pledgeId") || details.code || "không rõ"}`);
      lines.push(`Lựa chọn: ${{ REDIRECT: "đổi sang chiến dịch khác", SPLIT: `chia phiếu (phần dư thành phiếu ${details.restCode || "mới"} lưu dự trữ)`, STOCK: "để kho lưu dự trữ" }[details.decision] || details.decision}`);
      break;
    case "PLEDGE_CANCELLED":
      lines.push(`Phiếu: ${who("pledgeId") || details.code || "không rõ"}`);
      if (details.reason) lines.push(`Lý do hủy: ${details.reason}`);
      break;
    case "PLEDGE_RECEIVED":
      lines.push(`Phiếu: ${who("pledgeId") || "không rõ"} · nhập kho ${details.created ?? "?"} hiện vật`);
      break;
    case "INSPECTION_RECORDED":
      lines.push(`Hiện vật: ${who("resourceItemId") || "không rõ"}`);
      lines.push(`Kết quả: ${GRADE_LABEL[details.grade] || details.grade || "—"} · trạng thái ${statusName(details.status) || "—"}`);
      break;
    case "ITEM_UPDATED":
    case "ITEM_REFURBISH_STARTED":
      lines.push(`Hiện vật: ${who("itemId") || details.qrCode || "không rõ"}`);
      break;
    case "ITEM_REFURBISH_COMPLETED":
      lines.push(`Hiện vật: ${who("itemId") || details.qrCode || "không rõ"}`);
      if (details.grade) lines.push(`Phân loại sau sửa: ${GRADE_LABEL[details.grade] || details.grade}`);
      break;
    case "STOCK_TRANSFER_MANIFEST":
      lines.push(`Lệnh: ${who("transferId") || "không rõ"}${who("requisitionId") ? ` · giao cho yêu cầu ${who("requisitionId")}` : ""}`);
      lines.push(`Số hiện vật: ${Array.isArray(details.itemIds) ? details.itemIds.length : "?"}`);
      break;
    case "STOCK_TRANSFER_DISPATCHED":
    case "STOCK_TRANSFER_COMPLETED":
    case "STOCK_TRANSFER_CANCELLED":
      lines.push(`Lệnh điều chuyển: ${who("transferId") || details.code || "không rõ"}`);
      if (details.status) lines.push(`Trạng thái: ${statusName(details.status)}`);
      break;
    case "VOLUNTEER_SHIFT_CREATED":
      lines.push(`Tình nguyện viên: ${who("volunteerId") || "không rõ"} · ca ${details.shiftType || ""}`);
      break;
    case "VOLUNTEER_CHECK_OUT":
      lines.push(`Số giờ đóng góp: ${details.hoursContributed ?? "?"}`);
      break;
    case "INCIDENT_REPORTED":
      lines.push(`Loại sự cố: ${details.incidentType || "không rõ"}${who("reporterId") ? ` · người báo: ${who("reporterId")}` : ""}`);
      break;
    default:
      break;
  }

  if (details.note) lines.push(String(details.note));

  if (!lines.length) {
    if (row.action === "AUTH_LOGIN") lines.push("Đăng nhập thành công vào hệ thống.");
    else if (row.action === "AUTH_LOGOUT") lines.push("Đăng xuất khỏi hệ thống.");
    else if (["USER_UPDATED", "PROFILE_UPDATED", "CAMPAIGN_UPDATED", "WAREHOUSE_UPDATED", "PLEDGE_UPDATED"].includes(row.action)) {
      const target = Object.values(refs)[0];
      lines.push(target ? `Đối tượng: ${target}` : "Có chỉnh sửa thông tin (bản ghi cũ không lưu chi tiết trường nào thay đổi).");
      if (target) lines.push("Bản ghi cũ không lưu chi tiết trường nào thay đổi.");
    }
  }

  if (!lines.length) {
    // Dự phòng: liệt kê các thông tin còn lại, bỏ qua mọi chuỗi UUID.
    Object.entries(details)
      .filter(([key, value]) => !isUuid(value) && !Array.isArray(value) && value !== null && typeof value !== "object" && key !== "note")
      .forEach(([key, value]) => lines.push(`${FIELD_LABEL[key] || key}: ${value}`));
  }
  return lines.length ? lines : ["Không có thông tin chi tiết bổ sung."];
}

export default function AdminAudit() {
  const [logs, setLogs] = useState([]);
  const [meta, setMeta] = useState({ page: 1, totalPages: 1, total: 0 });
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [term, setTerm] = useState("");
  const [resource, setResource] = useState("");
  const { notice, fail } = useNotice();

  useEffect(() => {
    const timer = window.setTimeout(() => { setTerm(search.trim()); setPage(1); }, 300);
    return () => window.clearTimeout(timer);
  }, [search]);
  useEffect(() => { setPage(1); }, [resource]);

  const load = useCallback(async () => {
    try {
      const response = await api.get("/audit-logs", { params: { page, limit: 20, search: term || undefined, resource: resource || undefined } });
      setLogs(rowsOf(response.data));
      setMeta(response.data.meta || { page, totalPages: 1, total: rowsOf(response.data).length });
    } catch (error) {
      fail(apiError(error, "Không tải được nhật ký kiểm toán."));
    }
  }, [page, term, resource]);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  const rows = logs.map((row) => ({
    key: row.id,
    cells: [
      fmtDateTime(row.createdAt),
      <div><b className="block">{ACTION_LABEL[row.action] || row.action}</b><span className="font-mono text-[10px] text-slate-400">{row.action}</span></div>,
      RESOURCE_LABEL[row.resource] || row.resource,
      row.user ? `${row.user.fullName} (${ROLE_LABEL[row.user.role] || row.user.role})` : "Hệ thống",
      <ul className="max-w-lg space-y-0.5 break-words text-xs text-slate-700">{describe(row).map((line, index) => <li key={index}>{line}</li>)}</ul>,
      row.ipAddress || "—",
    ],
  }));

  return (
    <div className="mx-auto max-w-[1400px] p-4 md:p-6">
      <PageHead
        eyebrow="Trung tâm điều hành · Admin"
        title="Nhật ký kiểm toán"
        subtitle="Mọi thao tác duyệt, xác nhận, ghép tồn kho và tạo tài khoản đều được ghi lại để đối soát."
        actions={<GhostButton disabled={!logs.length} onClick={() => downloadCsv("nhat-ky-kiem-toan.csv", ["Thời gian", "Hành động", "Đối tượng", "Người thực hiện", "Chi tiết"], logs.map((row) => [fmtDateTime(row.createdAt), ACTION_LABEL[row.action] || row.action, RESOURCE_LABEL[row.resource] || row.resource, row.user?.fullName, describe(row).join("; ")]))}><Download size={14} />Xuất CSV</GhostButton>}
      />
      <Notice notice={notice} />
      <Card title={`Nhật ký (${meta.total || 0})`} actions={<div className="flex flex-wrap gap-2"><select className={`${inputClass} !w-auto !py-1.5 !text-xs`} value={resource} onChange={(event) => setResource(event.target.value)}><option value="">Tất cả đối tượng</option>{RESOURCES.map((item) => <option key={item} value={item}>{RESOURCE_LABEL[item] || item}</option>)}</select><SearchBox value={search} onChange={setSearch} placeholder="Tìm hành động, người, ghi chú..." /></div>}>
        <DataTable columns={["Thời gian", "Hành động", "Đối tượng", "Người thực hiện", "Chi tiết", "IP"]} rows={rows} empty="Chưa có bản ghi nào." />
        <Pager page={meta.page || page} totalPages={meta.totalPages || 1} total={meta.total || 0} onChange={setPage} />
      </Card>
    </div>
  );
}
