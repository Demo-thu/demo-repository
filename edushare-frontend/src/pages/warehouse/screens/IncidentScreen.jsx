import { useCallback, useEffect, useState } from "react";
import { Lock, ShieldAlert } from "lucide-react";
import api, { apiError, currentUser } from "@/lib/api";
import {
  Badge, Card, Chips, DataTable, Empty, Field, GhostButton, KeyValue, Modal, Notice, PageHead, Pager, PhotoPicker, PrimaryButton,
  SearchBox, Stat, StatusBadge, fmtDateTime, inputClass, rowsOf, totalOf, useNotice,
} from "@/pages/portals/kit";

export const INCIDENT_TYPES = [
  "Hư hỏng khi lưu kho",
  "Sai lệch số lượng / mất mát",
  "Thiết bị mất an toàn (phồng pin, chập điện...)",
  "Sự cố vận chuyển",
  "Khác",
];

export default function IncidentScreen({ params }) {
  const user = currentUser();
  const [incidents, setIncidents] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState(params.get("q") || "");
  const [term, setTerm] = useState(params.get("q") || "");
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({ page: 1, totalPages: 1, total: 0 });
  const [counts, setCounts] = useState({ all: 0, mine: 0, waybill: 0, recent: 0 });
  const [detail, setDetail] = useState(null);
  const [form, setForm] = useState({ type: INCIDENT_TYPES[0], qr: params.get("scan") || "", reason: "" });
  const [photos, setPhotos] = useState([]);
  const [pending, setPending] = useState(false);
  const { notice, ok, fail } = useNotice();

  useEffect(() => {
    const timer = window.setTimeout(() => { setTerm(search.trim()); setPage(1); }, 300);
    return () => window.clearTimeout(timer);
  }, [search]);
  useEffect(() => { setPage(1); }, [filter]);

  const load = useCallback(async () => {
    try {
      const since = new Date(Date.now() - 30 * 86400000).toISOString();
      const [list, all, mine, waybill, recent] = await Promise.all([
        api.get("/waybills/incidents", { params: { page, limit: 20, search: term || undefined, scope: filter === "all" ? undefined : filter } }),
        api.get("/waybills/incidents", { params: { limit: 1 } }),
        api.get("/waybills/incidents", { params: { limit: 1, scope: "mine" } }),
        api.get("/waybills/incidents", { params: { limit: 1, scope: "waybill" } }),
        api.get("/waybills/incidents", { params: { limit: 1, from: since } }),
      ]);
      setIncidents(rowsOf(list.data));
      setMeta(list.data?.meta || { page, totalPages: 1, total: rowsOf(list.data).length });
      setCounts({ all: totalOf(all.data), mine: totalOf(mine.data), waybill: totalOf(waybill.data), recent: totalOf(recent.data) });
    } catch (error) {
      fail(apiError(error, "Không tải được hồ sơ sự cố."));
    }
  }, [page, term, filter]);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  async function submit(event) {
    event.preventDefault();
    setPending(true);
    try {
      await api.post("/waybills/incidents", {
        incidentType: form.type,
        qrCode: form.qr.trim() || undefined,
        reason: form.reason.trim(),
        photoUrls: photos,
      });
      ok("Đã gửi báo cáo sự cố dưới tên của bạn.");
      setForm({ type: INCIDENT_TYPES[0], qr: "", reason: "" });
      setPhotos([]);
      await load();
    } catch (error) {
      fail(apiError(error, "Không gửi được báo cáo sự cố."));
    } finally {
      setPending(false);
    }
  }

  const visible = incidents;

  const rows = visible.map((row) => ({
    key: row.id,
    cells: [
      fmtDateTime(row.createdAt),
      <Badge tone="rose">{row.incidentType || "Sự cố"}</Badge>,
      <span className="line-clamp-2 max-w-md">{row.reason}</span>,
      row.reporter?.id === user?.id ? <b>Bạn</b> : row.reporter?.fullName || "—",
      row.waybill ? <span>{row.waybill.code} <StatusBadge kind="waybill" value={row.waybill.status} /></span> : "Tại kho",
      <GhostButton onClick={() => setDetail(row)}>Xem hồ sơ</GhostButton>,
    ],
  }));

  return (
    <div>
      <PageHead eyebrow="Điều phối & vận chuyển" title="Báo cáo sự cố" subtitle="Kho báo sự cố dưới tên của chính mình và xem toàn bộ hồ sơ. Báo cáo đã gửi không sửa được; không báo thay người khác (tình nguyện viên tự báo trên chuyến của họ)." />
      <Notice notice={notice} />
      <div className="mb-5 grid grid-cols-3 gap-3">
        <Stat label="Tổng hồ sơ" value={counts.all} icon={ShieldAlert} tone="rose" />
        <Stat label="Do bạn báo" value={counts.mine} tone="blue" />
        <Stat label="Trong 30 ngày" value={counts.recent} tone="amber" />
      </div>

      <div className="grid gap-5 xl:grid-cols-[360px_1fr]">
        <form onSubmit={submit}>
          <Card title="Báo sự cố mới" hint={`Người báo: ${user?.fullName || "—"}`}>
            <div className="space-y-4">
              <Field label="Loại sự cố">
                <select className={inputClass} value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value })}>
                  {INCIDENT_TYPES.map((type) => <option key={type}>{type}</option>)}
                </select>
              </Field>
              <Field label="Mã QR hiện vật (nếu có)"><input maxLength={80} className={inputClass} value={form.qr} onChange={(event) => setForm({ ...form, qr: event.target.value })} placeholder="IT001..." /></Field>
              <Field label="Mô tả sự cố"><textarea required minLength={5} maxLength={2000} rows={4} className={inputClass} value={form.reason} onChange={(event) => setForm({ ...form, reason: event.target.value })} placeholder="Mô tả chi tiết điều gì đã xảy ra..." /></Field>
              <Field label="Ảnh hiện trường (tối đa 4)"><PhotoPicker photos={photos} onChange={setPhotos} max={4} /></Field>
              <PrimaryButton type="submit" pending={pending}>Gửi báo cáo</PrimaryButton>
            </div>
          </Card>
        </form>

        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <Chips value={filter} onChange={setFilter} items={[["all", "Tất cả", counts.all], ["mine", "Do tôi báo", counts.mine], ["waybill", "Trên chuyến", counts.waybill]]} />
            <SearchBox value={search} onChange={setSearch} placeholder="Tìm lý do, mã QR, người báo..." />
          </div>
          <Card>
            <p className="mb-3 flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600"><Lock size={13} />Hồ sơ đã gửi chỉ đọc, không sửa.</p>
            {incidents.length ? <DataTable columns={["Thời gian", "Loại", "Lý do", "Người báo", "Vị trí", ""]} rows={rows} empty="Không có hồ sơ nào khớp." /> : <Empty>Chưa có hồ sơ sự cố.</Empty>}
            <Pager page={meta.page || page} totalPages={meta.totalPages || 1} total={meta.total || 0} onChange={setPage} />
          </Card>
        </div>
      </div>

      {detail ? (
        <Modal wide title="Hồ sơ sự cố" subtitle={detail.waybill?.code || "Báo tại kho"} onClose={() => setDetail(null)} footer={<GhostButton onClick={() => setDetail(null)}>Đóng</GhostButton>}>
          <div className="space-y-4">
            <KeyValue rows={[["Thời gian", fmtDateTime(detail.createdAt)], ["Người báo", detail.reporter?.fullName || "—"], ["Loại", detail.incidentType || "Sự cố"], ["Mã QR", detail.qrCode || "—"]]} />
            <p className="rounded-lg bg-rose-50 p-3 text-sm text-rose-900">{detail.reason}</p>
            {detail.photoUrls?.length ? <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{detail.photoUrls.map((url, index) => <img key={index} src={url} alt={`Ảnh sự cố ${index + 1}`} className="aspect-video w-full rounded-lg object-cover" />)}</div> : null}
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
