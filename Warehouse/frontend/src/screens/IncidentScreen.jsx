import { useCallback, useEffect, useState } from "react";
import { Lock, ShieldAlert } from "lucide-react";
import api, { apiError, currentUser } from "@/lib/api";
import {
  Badge, Card, Chips, DataTable, Empty, Field, GhostButton, KeyValue, Modal, Notice, PageHead, PhotoPicker, PrimaryButton,
  SearchBox, Stat, StatusBadge, fmtDateTime, inputClass, rowsOf, useNotice,
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
  const [detail, setDetail] = useState(null);
  const [form, setForm] = useState({ type: INCIDENT_TYPES[0], qr: params.get("scan") || "", reason: "" });
  const [photos, setPhotos] = useState([]);
  const [pending, setPending] = useState(false);
  const { notice, ok, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const response = await api.get("/waybills/incidents", { params: { limit: 100 } });
      setIncidents(rowsOf(response.data));
    } catch (error) {
      fail(apiError(error, "Không tải được hồ sơ sự cố."));
    }
  }, []);

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

  const mine = incidents.filter((row) => row.reporter?.id === user?.id);
  const monthAgo = Date.now() - 30 * 86400000;
  const visible = incidents.filter((row) => {
    if (filter === "mine" && row.reporter?.id !== user?.id) return false;
    if (filter === "waybill" && !row.waybill) return false;
    const term = search.trim().toLowerCase();
    return !term || `${row.waybill?.code || ""} ${row.reason} ${row.incidentType || ""} ${row.qrCode || ""} ${row.reporter?.fullName || ""}`.toLowerCase().includes(term);
  });

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
        <Stat label="Tổng hồ sơ" value={incidents.length} icon={ShieldAlert} tone="rose" />
        <Stat label="Do bạn báo" value={mine.length} tone="blue" />
        <Stat label="Trong 30 ngày" value={incidents.filter((row) => new Date(row.createdAt).getTime() >= monthAgo).length} tone="amber" />
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
            <Chips value={filter} onChange={setFilter} items={[["all", "Tất cả", incidents.length], ["mine", "Do tôi báo", mine.length], ["waybill", "Trên chuyến", incidents.filter((row) => row.waybill).length]]} />
            <SearchBox value={search} onChange={setSearch} placeholder="Tìm lý do, mã QR, người báo..." />
          </div>
          <Card>
            <p className="mb-3 flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600"><Lock size={13} />Hồ sơ đã gửi chỉ đọc, không sửa.</p>
            {incidents.length ? <DataTable columns={["Thời gian", "Loại", "Lý do", "Người báo", "Vị trí", ""]} rows={rows} empty="Không có hồ sơ nào khớp." /> : <Empty>Chưa có hồ sơ sự cố.</Empty>}
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
