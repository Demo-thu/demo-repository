import { useCallback, useEffect, useMemo, useState } from "react";
import { FileText, Search } from "lucide-react";
import api, { apiError } from "@/lib/api";
import {
  CATEGORY_LABEL, Chips, DataTable, Field, GhostButton, KeyValue, Modal, Notice, PageHead, PrimaryButton, SearchBox,
  StatusBadge, Timeline, fmtDate, fmtDateTime, inputClass, rowsOf, useNotice,
} from "@/pages/portals/kit";

const REASONS = [
  "Thay đổi kế hoạch, không còn đủ hiện vật",
  "Nhập sai số lượng hoặc thông tin thiết bị",
  "Không thu xếp được vận chuyển",
  "Hiện vật đã được dùng cho mục đích khác",
  "Lý do khác",
];

const WINDOW_MS = 72 * 3600 * 1000;

function hoursLeft(pledge) {
  return Math.max(0, Math.floor((new Date(pledge.createdAt).getTime() + WINDOW_MS - Date.now()) / 3600000));
}

function cancellable(pledge) {
  return pledge.status === "PENDING" && Date.now() - new Date(pledge.createdAt).getTime() <= WINDOW_MS;
}

export default function MyPledgesScreen({ params, openTab }) {
  const [pledges, setPledges] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [detail, setDetail] = useState(null);
  const [cancelling, setCancelling] = useState(null);
  const [reason, setReason] = useState(REASONS[0]);
  const [note, setNote] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [pending, setPending] = useState(false);
  const { notice, ok, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const response = await api.get("/pledges?limit=100");
      setPledges(rowsOf(response.data));
    } catch (error) {
      fail(apiError(error, "Không tải được danh sách phiếu."));
    }
  }, []);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  useEffect(() => {
    const id = params.get("pledge");
    if (id && pledges.length) setDetail(pledges.find((row) => row.id === id) || null);
  }, [params, pledges]);

  const counts = useMemo(() => ({
    all: pledges.length,
    PENDING: pledges.filter((row) => row.status === "PENDING").length,
    VERIFIED: pledges.filter((row) => ["VERIFIED", "PARTIALLY_RECEIVED", "COMPLETED"].includes(row.status)).length,
    CANCELLED: pledges.filter((row) => row.status === "CANCELLED").length,
  }), [pledges]);

  const visible = pledges.filter((row) => {
    if (filter === "VERIFIED" && !["VERIFIED", "PARTIALLY_RECEIVED", "COMPLETED"].includes(row.status)) return false;
    if ((filter === "PENDING" || filter === "CANCELLED") && row.status !== filter) return false;
    const term = search.trim().toLowerCase();
    return !term || `${row.code} ${row.campaign?.title || ""} ${row.items.map((item) => item.name).join(" ")}`.toLowerCase().includes(term);
  });

  async function confirmCancel() {
    setPending(true);
    try {
      await api.patch(`/pledges/${cancelling.id}/cancel`, { reason, note: note.trim() || undefined });
      ok(`Đã hủy phiếu ${cancelling.code}.`);
      setCancelling(null);
      setNote("");
      setConfirmed(false);
      await load();
    } catch (error) {
      fail(apiError(error, "Không hủy được phiếu."));
    } finally {
      setPending(false);
    }
  }

  const rows = visible.map((pledge) => ({
    key: pledge.id,
    cells: [
      <b className="text-blue-700">{pledge.code}</b>,
      pledge.campaign?.title || "Trao tặng chung",
      <span className="text-xs">{pledge.items.map((item) => `${item.estimatedQuantity} ${item.name}`).join("; ")}</span>,
      fmtDate(pledge.scheduledAt),
      fmtDate(pledge.createdAt),
      <StatusBadge kind="pledge" value={pledge.status} />,
      <div className="flex flex-wrap gap-1.5">
        <GhostButton onClick={() => setDetail(pledge)}><Search size={12} />Chi tiết</GhostButton>
        {!["PENDING", "CANCELLED"].includes(pledge.status) ? <GhostButton onClick={() => openTab("receipt", { pledge: pledge.id })}><FileText size={12} />Biên nhận</GhostButton> : null}
        {cancellable(pledge) ? <GhostButton tone="danger" onClick={() => setCancelling(pledge)}>Hủy phiếu</GhostButton> : null}
      </div>,
    ],
  }));

  const timeline = (pledge) => [
    { title: "Đã gửi phiếu", detail: fmtDateTime(pledge.createdAt), done: true },
    { title: "Kho xác minh phiếu", detail: pledge.status === "PENDING" ? "Đang chờ kho xác minh" : pledge.status === "CANCELLED" ? "Phiếu đã hủy" : "Đã xác minh", done: !["PENDING", "CANCELLED"].includes(pledge.status) },
    { title: "Nhập kho & cấp mã QR", detail: `${pledge.items.reduce((sum, item) => sum + (item._count?.resourceItems || 0), 0)}/${pledge.items.reduce((sum, item) => sum + item.estimatedQuantity, 0)} hiện vật`, done: ["PARTIALLY_RECEIVED", "COMPLETED"].includes(pledge.status) },
    { title: "Hoàn tất tiếp nhận", done: pledge.status === "COMPLETED" },
  ];

  return (
    <div>
      <PageHead
        eyebrow="Phiếu trao tặng"
        title="Danh sách phiếu đã gửi"
        subtitle="Theo dõi trạng thái từng phiếu, xem biên nhận và hủy phiếu khi còn trong thời hạn 72 giờ."
        actions={<PrimaryButton onClick={() => openTab("pledge")}>+ Tạo phiếu mới</PrimaryButton>}
      />
      <Notice notice={notice} />
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Chips value={filter} onChange={setFilter} items={[["all", "Tất cả", counts.all], ["PENDING", "Chờ tiếp nhận", counts.PENDING], ["VERIFIED", "Đã xác minh", counts.VERIFIED], ["CANCELLED", "Đã hủy", counts.CANCELLED]]} />
        <SearchBox value={search} onChange={setSearch} placeholder="Tìm mã phiếu, hiện vật..." />
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <DataTable columns={["Mã phiếu", "Chiến dịch", "Hiện vật", "Ngày hẹn", "Ngày gửi", "Trạng thái", "Thao tác"]} rows={rows} empty="Bạn chưa có phiếu trao tặng nào khớp bộ lọc." />
      </div>

      {detail ? (
        <Modal wide title={`Phiếu ${detail.code}`} subtitle={detail.campaign?.title || "Trao tặng chung"} onClose={() => setDetail(null)}
          footer={<GhostButton onClick={() => setDetail(null)}>Đóng</GhostButton>}>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <KeyValue rows={[
                ["Trạng thái", <StatusBadge kind="pledge" value={detail.status} />],
                ["Bàn giao", detail.handoverMethod === "PICK_UP" ? "Kho đến lấy" : "Tự mang đến kho"],
                ["Người liên hệ", detail.contactName],
                ["Điện thoại", detail.contactPhone],
                ["Địa chỉ", detail.address],
                ["Ngày hẹn", fmtDateTime(detail.scheduledAt)],
                ["Ghi chú", detail.notes],
                ...(detail.status === "CANCELLED" ? [["Lý do hủy", detail.cancelReason], ["Thời điểm hủy", fmtDateTime(detail.cancelledAt)]] : []),
              ]} />
              <ul className="mt-4 space-y-1 text-sm">
                {detail.items.map((item) => (
                  <li key={item.id} className="rounded bg-slate-50 px-3 py-2">
                    <b>{item.estimatedQuantity} {item.unit}</b> · {item.name} <span className="text-xs text-slate-500">({CATEGORY_LABEL[item.category]})</span>
                    <p className="text-xs text-slate-500">Đã nhập kho {item._count?.resourceItems || 0} · {item.declaredCondition || "Không khai báo tình trạng"}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Timeline steps={timeline(detail)} />
          </div>
        </Modal>
      ) : null}

      {cancelling ? (
        <Modal tone="rose" title={`Hủy phiếu ${cancelling.code}`} subtitle={`Còn khoảng ${hoursLeft(cancelling)} giờ trong thời hạn hủy 72 giờ.`} onClose={() => setCancelling(null)}
          footer={<><GhostButton onClick={() => setCancelling(null)}>Giữ phiếu</GhostButton><PrimaryButton className="!bg-rose-600 hover:!bg-rose-700" pending={pending} disabled={!confirmed} onClick={confirmCancel}>Xác nhận hủy phiếu</PrimaryButton></>}>
          <div className="space-y-4">
            <Field label="Lý do hủy phiếu (bắt buộc)">
              <select className={inputClass} value={reason} onChange={(event) => setReason(event.target.value)}>
                {REASONS.map((item) => <option key={item}>{item}</option>)}
              </select>
            </Field>
            <Field label="Ghi chú thêm"><textarea rows={3} className={inputClass} value={note} onChange={(event) => setNote(event.target.value)} /></Field>
            <label className="flex items-start gap-2 text-xs text-slate-600">
              <input type="checkbox" className="mt-0.5" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} />
              Tôi hiểu phiếu đã hủy không thể khôi phục và hiện vật sẽ không được kho tiếp nhận.
            </label>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
