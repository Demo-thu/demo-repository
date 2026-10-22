import { useCallback, useEffect, useState } from "react";
import { FileText, Search, TriangleAlert } from "lucide-react";
import api, { apiError } from "@/lib/api";
import {
  CATEGORY_LABEL, Chips, DataTable, Field, GhostButton, KeyValue, Modal, Notice, PageHead, Pager, PrimaryButton, SearchBox,
  StatusBadge, Timeline, fmtDate, fmtDateTime, inputClass, rowsOf, totalOf, useNotice,
} from "@/pages/portals/kit";

const REASONS = [
  "Thay đổi kế hoạch, không còn đủ hiện vật",
  "Nhập sai số lượng hoặc thông tin thiết bị",
  "Không thu xếp được vận chuyển",
  "Hiện vật đã được dùng cho mục đích khác",
  "Không đồng ý với đề xuất của kho",
  "Lý do khác",
];

const WINDOW_MS = 72 * 3600 * 1000;

function hoursLeft(pledge) {
  return Math.max(0, Math.floor((new Date(pledge.createdAt).getTime() + WINDOW_MS - Date.now()) / 3600000));
}

function cancellable(pledge) {
  if (pledge.status === "AWAITING_DONOR") return true;
  return pledge.status === "PENDING" && Date.now() - new Date(pledge.createdAt).getTime() <= WINDOW_MS;
}

export default function MyPledgesScreen({ params, openTab }) {
  const [pledges, setPledges] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({ page: 1, totalPages: 1, total: 0 });
  const [counts, setCounts] = useState({ all: 0, PENDING: 0, AWAITING_DONOR: 0, VERIFIED: 0, CANCELLED: 0 });
  const [detail, setDetail] = useState(null);
  const [cancelling, setCancelling] = useState(null);
  const [responding, setResponding] = useState(null);
  const [decision, setDecision] = useState("");
  const [reason, setReason] = useState(REASONS[0]);
  const [note, setNote] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [pending, setPending] = useState(false);
  const { notice, ok, fail } = useNotice();

  useEffect(() => {
    const timer = window.setTimeout(() => { setTerm(search.trim()); setPage(1); }, 300);
    return () => window.clearTimeout(timer);
  }, [search]);
  useEffect(() => { setPage(1); }, [filter]);

  const load = useCallback(async () => {
    try {
      const params = { page, limit: 20, search: term || undefined, ...(filter === "VERIFIED" ? { bucket: "CONFIRMED" } : filter !== "all" ? { status: filter } : {}) };
      const [list, all, pending, waiting, confirmed, cancelled] = await Promise.all([
        api.get("/pledges", { params }),
        api.get("/pledges", { params: { limit: 1 } }),
        api.get("/pledges", { params: { limit: 1, status: "PENDING" } }),
        api.get("/pledges", { params: { limit: 1, status: "AWAITING_DONOR" } }),
        api.get("/pledges", { params: { limit: 1, bucket: "CONFIRMED" } }),
        api.get("/pledges", { params: { limit: 1, status: "CANCELLED" } }),
      ]);
      setPledges(rowsOf(list.data));
      setMeta(list.data?.meta || { page, totalPages: 1, total: rowsOf(list.data).length });
      setCounts({ all: totalOf(all.data), PENDING: totalOf(pending.data), AWAITING_DONOR: totalOf(waiting.data), VERIFIED: totalOf(confirmed.data), CANCELLED: totalOf(cancelled.data) });
    } catch (error) {
      fail(apiError(error, "Không tải được danh sách phiếu."));
    }
  }, [page, filter, term]);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  useEffect(() => {
    const id = params.get("pledge");
    if (!id) return;
    const found = pledges.find((row) => row.id === id);
    if (found) { setDetail(found); return; }
    api.get(`/pledges/${id}`).then((response) => setDetail(response.data)).catch(() => setDetail(null));
  }, [params, pledges]);

  // Giữ các hộp thoại đang mở đồng bộ với dữ liệu mới nhất từ máy chủ.
  useEffect(() => {
    const fresh = (current) => (current ? pledges.find((row) => row.id === current.id) || current : current);
    setDetail(fresh);
    setResponding(fresh);
  }, [pledges]);

  const visible = pledges;

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

  function startCancel(pledge) {
    setReason(pledge.status === "AWAITING_DONOR" ? "Không đồng ý với đề xuất của kho" : REASONS[0]);
    setCancelling(pledge);
  }

  async function confirmRespond() {
    setPending(true);
    try {
      await api.patch(`/pledges/${responding.id}/proposal/respond`, { decision });
      const done = {
        REDIRECT: `Đã xác nhận đổi chiến dịch cho phiếu ${responding.code}. Phiếu đã được kho xác minh.`,
        SPLIT: `Đã xác nhận chia phiếu ${responding.code}: phần chiến dịch còn cần giữ ở phiếu này, phần dư thành phiếu mới lưu kho dự trữ. Cả hai phiếu đã được kho xác minh.`,
        STOCK: `Đã xác nhận để kho lưu dự trữ phiếu ${responding.code}. Phiếu đã được kho xác minh.`,
      };
      ok(done[decision]);
      setResponding(null);
      setDecision("");
      await load();
    } catch (error) {
      fail(apiError(error, "Không gửi được xác nhận."));
      await load();
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
        {pledge.status === "AWAITING_DONOR" ? <PrimaryButton className="!px-3 !py-1.5 !text-xs" onClick={() => { setDecision(pledge.proposals?.[0]?.options?.[0]?.type || ""); setResponding(pledge); }}>Phản hồi đề xuất</PrimaryButton> : null}
        {!["PENDING", "AWAITING_DONOR", "CANCELLED"].includes(pledge.status) ? <GhostButton onClick={() => openTab("receipt", { pledge: pledge.id })}><FileText size={12} />Biên nhận</GhostButton> : null}
        {cancellable(pledge) ? <GhostButton tone="danger" onClick={() => startCancel(pledge)}>Hủy phiếu</GhostButton> : null}
      </div>,
    ],
  }));

  const timeline = (pledge) => [
    { title: "Đã gửi phiếu", detail: fmtDateTime(pledge.createdAt), done: true },
    ...(pledge.proposals?.length ? [{
      title: "Kho gửi phiếu đề xuất",
      detail: pledge.status === "AWAITING_DONOR" ? "Đang chờ bạn xác nhận"
        : pledge.proposals[0].status === "ACCEPTED" ? `Bạn đã đồng ý (${{ REDIRECT: "đổi chiến dịch", SPLIT: "chia phiếu", STOCK: "lưu kho dự trữ" }[pledge.proposals[0].chosenType]})`
        : pledge.proposals[0].status === "WITHDRAWN" ? "Kho đã rút đề xuất"
        : pledge.proposals[0].status === "EXPIRED" ? "Đề xuất đã hết hạn, phiếu quay lại chờ kho xác minh" : "Bạn đã từ chối bằng cách hủy phiếu",
      done: pledge.proposals[0].status !== "PENDING",
    }] : []),
    { title: "Kho xác minh phiếu", detail: pledge.status === "PENDING" ? "Đang chờ kho xác minh" : pledge.status === "AWAITING_DONOR" ? "Chờ bạn xác nhận đề xuất của kho" : pledge.status === "CANCELLED" ? "Phiếu đã hủy" : "Đã xác minh", done: !["PENDING", "AWAITING_DONOR", "CANCELLED"].includes(pledge.status) },
    { title: "Nhập kho & cấp mã QR", detail: `${pledge.items.reduce((sum, item) => sum + (item._count?.resourceItems || 0), 0)}/${pledge.items.reduce((sum, item) => sum + item.estimatedQuantity, 0)} hiện vật`, done: ["PARTIALLY_RECEIVED", "COMPLETED"].includes(pledge.status) },
    { title: "Hoàn tất tiếp nhận", done: pledge.status === "COMPLETED" },
  ];

  return (
    <div>
      <PageHead
        eyebrow="Phiếu trao tặng"
        title="Danh sách phiếu đã gửi"
        subtitle="Theo dõi trạng thái từng phiếu, trả lời đề xuất của kho, xem biên nhận và hủy phiếu khi còn trong thời hạn 72 giờ."
        actions={<PrimaryButton onClick={() => openTab("pledge")}>+ Tạo phiếu mới</PrimaryButton>}
      />
      <Notice notice={notice} />
      {counts.AWAITING_DONOR ? (
        <div className="mb-4 flex items-center gap-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
          <TriangleAlert size={18} className="shrink-0" />
          <p className="flex-1">Kho vừa gửi {counts.AWAITING_DONOR} phiếu đề xuất cần bạn xác nhận: chiến dịch không còn cần (hoặc đã đủ) vật tư bạn trao tặng.</p>
          <GhostButton onClick={() => setFilter("AWAITING_DONOR")}>Xem ngay</GhostButton>
        </div>
      ) : null}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Chips value={filter} onChange={setFilter} items={[["all", "Tất cả", counts.all], ["AWAITING_DONOR", "Cần bạn xác nhận", counts.AWAITING_DONOR], ["PENDING", "Chờ xác minh", counts.PENDING], ["VERIFIED", "Đã xác minh", counts.VERIFIED], ["CANCELLED", "Đã hủy", counts.CANCELLED]]} />
        <SearchBox value={search} onChange={setSearch} placeholder="Tìm mã phiếu, hiện vật..." />
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <DataTable columns={["Mã phiếu", "Chiến dịch", "Hiện vật", "Ngày hẹn", "Ngày gửi", "Trạng thái", "Thao tác"]} rows={rows} empty="Bạn chưa có phiếu trao tặng nào khớp bộ lọc." />
        <Pager page={meta.page || page} totalPages={meta.totalPages || 1} total={meta.total || 0} onChange={setPage} />
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

      {responding && responding.proposals?.[0] ? (
        <Modal wide tone="rose" title={`Phiếu đề xuất của kho cho ${responding.code}`} subtitle={responding.campaign?.title || "Trao tặng chung"} onClose={() => setResponding(null)}
          footer={(
            <>
              <GhostButton onClick={() => setResponding(null)}>Để sau</GhostButton>
              <GhostButton tone="danger" onClick={() => { const target = responding; setResponding(null); startCancel(target); }}>Không đồng ý - hủy phiếu</GhostButton>
              <PrimaryButton pending={pending} disabled={!decision} onClick={confirmRespond}>Đồng ý với phương án đã chọn</PrimaryButton>
            </>
          )}>
          <div className="space-y-4 text-sm">
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-amber-900">
              <p className="font-semibold">Lý do kho đưa ra</p>
              <p className="mt-1">{responding.proposals[0].reason}</p>
              {responding.proposals[0].note ? <p className="mt-1 text-xs">Ghi chú: {responding.proposals[0].note}</p> : null}
              <p className="mt-1 text-xs">Đề xuất hết hạn lúc {fmtDateTime(new Date(new Date(responding.proposals[0].createdAt).getTime() + 7 * 24 * 3600 * 1000))}; sau đó phiếu quay về chờ kho xác minh.</p>
            </div>
            <ul className="space-y-1">
              {responding.items.map((item) => <li key={item.id} className="rounded bg-slate-50 px-3 py-2"><b>{item.estimatedQuantity} {item.unit}</b> · {item.name}</li>)}
            </ul>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Chọn phương án bạn đồng ý</p>
              <div className="space-y-2">
                {responding.proposals[0].options.map((option) => (
                  <label key={option.type} className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 ${decision === option.type ? "border-blue-500 bg-blue-50" : "border-slate-200"}`}>
                    <input type="radio" className="mt-1" name="proposal-decision" checked={decision === option.type} onChange={() => setDecision(option.type)} />
                    <span>
                      <b>{option.type === "REDIRECT" ? `Đổi sang chiến dịch "${option.campaignTitle}"` : option.type === "SPLIT" ? "Chia phiếu: một phần cho chiến dịch, phần dư để kho dự trữ" : "Để kho lưu giữ toàn bộ làm dự trữ"}</b>
                      <span className="block text-xs text-slate-500">
                        {option.type === "REDIRECT" ? "Phiếu được chuyển sang chiến dịch đang cần đúng số vật tư bạn trao tặng, sau đó kho xác minh và nhận hàng."
                          : option.type === "SPLIT" ? `${option.lines.filter((line) => line.fit > 0).map((line) => `${line.fit} ${line.unit} ${line.name}`).join(", ")} giữ cho "${option.campaignTitle}"; ${option.lines.reduce((sum, line) => sum + line.rest, 0)} còn lại tách thành phiếu mới, kho lưu dự trữ cho các chiến dịch sau.`
                            : "Kho nhận và lưu hiện vật, dùng cho các chiến dịch sau khi có nhu cầu."}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-500">Nếu bạn không muốn đổi chiến dịch hoặc để kho lưu dự trữ, hãy chọn "Không đồng ý - hủy phiếu".</p>
          </div>
        </Modal>
      ) : null}

      {cancelling ? (
        <Modal tone="rose" title={`Hủy phiếu ${cancelling.code}`} subtitle={cancelling.status === "AWAITING_DONOR" ? "Từ chối đề xuất của kho: phiếu sẽ bị hủy, không giới hạn 72 giờ." : `Còn khoảng ${hoursLeft(cancelling)} giờ trong thời hạn hủy 72 giờ.`} onClose={() => setCancelling(null)}
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
