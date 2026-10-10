import { useCallback, useEffect, useState } from "react";
import { Lock, ShieldAlert } from "lucide-react";
import api, { apiError } from "@/lib/api";
import { Badge, Card, Empty, Field, Notice, PageHead, Pager, PhotoPicker, PrimaryButton, StatusBadge, fmtDateTime, inputClass, orgName, rowsOf, useNotice, usePortalRefresh, useWaybills } from "@/pages/portals/kit";

const TYPES = ["Hỏng xe / tai nạn giao thông", "Thời tiết xấu, đường sạt lở", "Hàng hóa hư hỏng hoặc thiếu", "Trường không có người nhận", "Lý do khác"];

export default function IncidentScreen({ params }) {
  const { waybills, reload } = useWaybills();
  const [incidents, setIncidents] = useState([]);
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({ page: 1, totalPages: 1, total: 0 });
  const [form, setForm] = useState({ waybillId: params.get("waybill") || "", type: TYPES[0], qr: "", reason: "", photos: [], agree: false });
  const [pending, setPending] = useState(false);
  const { notice, ok, fail } = useNotice();

  const loadIncidents = useCallback(async () => {
    try {
      const response = await api.get("/waybills/incidents", { params: { page, limit: 20 } });
      setIncidents(rowsOf(response.data));
      setMeta(response.data?.meta || { page, totalPages: 1, total: rowsOf(response.data).length });
    } catch (error) {
      fail(apiError(error, "Không tải được lịch sử sự cố."));
    }
  }, [page]);

  useEffect(() => {
    loadIncidents();
  }, [loadIncidents]);
  usePortalRefresh(loadIncidents);

  const reportable = waybills.filter((row) => ["PENDING_PICKUP", "IN_TRANSIT"].includes(row.status));
  const set = (patch) => setForm((current) => ({ ...current, ...patch }));
  const selected = reportable.find((row) => row.id === form.waybillId);

  useEffect(() => {
    if (!form.waybillId && reportable.length) set({ waybillId: reportable[0].id });
  }, [reportable.length]);

  async function submit(event) {
    event.preventDefault();
    setPending(true);
    try {
      await api.post(`/waybills/${form.waybillId}/incidents`, {
        reason: form.reason.trim(),
        incidentType: form.type,
        qrCode: form.qr.trim() || undefined,
        photoUrls: form.photos,
      });
      ok(`Đã báo sự cố cho ${selected?.code}. Vận đơn chuyển sang trạng thái Sự cố; kho và admin chỉ xem hồ sơ này.`);
      setForm({ waybillId: "", type: TYPES[0], qr: "", reason: "", photos: [], agree: false });
      await Promise.all([reload(), loadIncidents()]);
    } catch (error) {
      fail(apiError(error, "Không gửi được báo cáo sự cố."));
    } finally {
      setPending(false);
    }
  }

  return (
    <div>
      <PageHead eyebrow="Cổng tình nguyện viên" title="Báo sự cố trên chuyến của mình" subtitle="Bắt buộc ghi lý do. Vận đơn sẽ chuyển sang FAILED. Kho và admin chỉ xem, không tạo hộ và không sửa." />
      <Notice notice={notice} />
      <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
        <form onSubmit={submit}>
          <Card title="Thông tin sự cố">
            {!reportable.length ? <Empty>Bạn không có chuyến nào đang chờ lấy hàng hoặc đang vận chuyển để báo sự cố.</Empty> : (
              <div className="space-y-4">
                <Field label="Chuyến bị sự cố">
                  <select className={inputClass} value={form.waybillId} onChange={(event) => set({ waybillId: event.target.value })}>
                    {reportable.map((row) => <option key={row.id} value={row.id}>{row.code} · {orgName(row.allocationPlan?.requisition?.school)}</option>)}
                  </select>
                </Field>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Phân loại"><select className={inputClass} value={form.type} onChange={(event) => set({ type: event.target.value })}>{TYPES.map((item) => <option key={item}>{item}</option>)}</select></Field>
                  <Field label="Mã QR liên quan (nếu có)"><input className={inputClass} value={form.qr} onChange={(event) => set({ qr: event.target.value })} placeholder="IT001" /></Field>
                </div>
                <Field label="Lý do / mô tả sự cố (bắt buộc)"><textarea required minLength={5} maxLength={2000} rows={4} className={inputClass} value={form.reason} onChange={(event) => set({ reason: event.target.value })} placeholder="Mô tả vị trí, tình trạng và nhu cầu hỗ trợ..." /></Field>
                <div><p className="mb-1 text-xs font-semibold text-slate-600">Ảnh hiện trường (tối đa 4)</p><PhotoPicker photos={form.photos} onChange={(photos) => set({ photos })} max={4} /></div>
                <label className="flex items-start gap-2 text-sm text-slate-700"><input type="checkbox" className="mt-1" checked={form.agree} onChange={(event) => set({ agree: event.target.checked })} />Tôi hiểu vận đơn sẽ chuyển sang FAILED và báo cáo không thể chỉnh sửa.</label>
                <PrimaryButton type="submit" pending={pending} disabled={!form.agree || form.reason.trim().length < 5 || !form.waybillId} className="!bg-rose-600 hover:!bg-rose-700"><ShieldAlert size={15} />Gửi báo cáo sự cố</PrimaryButton>
              </div>
            )}
          </Card>
        </form>

        <Card title="Sự cố của tôi" actions={<Lock size={15} className="text-slate-400" />} hint="Chỉ đọc sau khi gửi.">
          {incidents.length ? (
            <ul className="max-h-[560px] space-y-3 overflow-y-auto pr-1">
              {incidents.map((row) => (
                <li key={row.id} className="rounded-lg border border-rose-100 bg-rose-50/40 p-3 text-sm">
                  <div className="flex items-center justify-between gap-2"><Badge tone="rose">{row.incidentType || "Sự cố"}</Badge><span className="text-[10px] text-slate-500">{fmtDateTime(row.createdAt)}</span></div>
                  <p className="mt-2 text-slate-700">{row.reason}</p>
                  <p className="mt-1 flex items-center gap-2 text-xs text-slate-500">{row.waybill?.code}{row.waybill ? <StatusBadge kind="waybill" value={row.waybill.status} /> : null}</p>
                  {row.photoUrls?.length ? <div className="mt-2 flex gap-1">{row.photoUrls.map((url, index) => <img key={index} src={url} alt="Ảnh sự cố" className="size-12 rounded object-cover" />)}</div> : null}
                </li>
              ))}
            </ul>
          ) : <Empty>Bạn chưa báo sự cố nào.</Empty>}
          <Pager page={meta.page || page} totalPages={meta.totalPages || 1} total={meta.total || 0} onChange={setPage} />
        </Card>
      </div>
    </div>
  );
}
