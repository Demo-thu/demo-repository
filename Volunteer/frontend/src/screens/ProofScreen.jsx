import { useEffect, useState } from "react";
import { CheckCircle2, Hourglass } from "lucide-react";
import api, { apiError } from "@/lib/api";
import {
  CATEGORY_LABEL, Card, Empty, Field, KeyValue, Notice, PageHead, PhotoPicker, PrimaryButton, StatusBadge, SubmitBar, fmtDateTime,
  inputClass, orgName, useNotice, useWaybills, waybillItems,
} from "@/pages/portals/kit";

export default function ProofScreen({ params, openTab }) {
  const { waybills, reload, loading } = useWaybills();
  const candidates = waybills.filter((row) => ["IN_TRANSIT", "DELIVERED"].includes(row.status));
  const [selected, setSelected] = useState(params.get("waybill") || "");
  const [note, setNote] = useState("");
  const [photos, setPhotos] = useState([]);
  const [pending, setPending] = useState(false);
  const { notice, ok, fail } = useNotice();

  useEffect(() => {
    setSelected((current) => params.get("waybill") || (candidates.some((row) => row.id === current) ? current : candidates.find((row) => row.proof && !row.proof.volunteerReportedAt)?.id || candidates[0]?.id || ""));
  }, [waybills, params]);

  const waybill = candidates.find((row) => row.id === selected);
  const proof = waybill?.proof;
  const items = waybillItems(waybill);
  const reported = Boolean(proof?.volunteerReportedAt);

  async function submit(event) {
    event.preventDefault();
    setPending(true);
    try {
      await api.post(`/waybills/${waybill.id}/volunteer-report`, { volunteerReportNote: note.trim(), volunteerPhotoUrls: photos });
      ok("Đã nộp biên bản bàn giao hoàn thành. Chữ ký của nhà trường không bị thay đổi.");
      setNote("");
      setPhotos([]);
      await reload();
    } catch (error) {
      fail(apiError(error, "Không nộp được báo cáo."));
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={submit}>
      <PageHead eyebrow="Cổng tình nguyện viên" title="Nghiệm thu bàn giao tại trường (PoD)" subtitle="Nhà trường ký biên bản trước; sau đó tình nguyện viên nộp báo cáo và ảnh xác nhận của mình." />
      <Notice notice={notice} />
      {loading ? <Empty>Đang tải vận đơn...</Empty> : null}
      {!loading && !candidates.length ? <Empty>Chưa có chuyến nào ở giai đoạn nghiệm thu. <button type="button" className="font-semibold text-blue-700" onClick={() => openTab("waybills")}>Xem vận đơn được giao</button></Empty> : null}

      {waybill ? (
        <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
          <div className="space-y-5">
            <Card title="Chuyến cần nghiệm thu">
              <select className={inputClass} value={selected} onChange={(event) => setSelected(event.target.value)}>
                {candidates.map((row) => <option key={row.id} value={row.id}>{row.code} · {orgName(row.allocationPlan?.requisition?.school)}</option>)}
              </select>
              <div className="mt-3"><KeyValue rows={[["Trạng thái", <StatusBadge kind="waybill" value={waybill.status} />], ["Trường nhận", orgName(waybill.allocationPlan?.requisition?.school)], ["Số món", items.length]]} /></div>
            </Card>

            <Card title="Bước 1 · Chữ ký của nhà trường" actions={proof ? <CheckCircle2 className="text-emerald-600" size={18} /> : <Hourglass className="text-amber-500" size={18} />}>
              {proof ? (
                <div className="grid gap-4 sm:grid-cols-[1fr_200px]">
                  <KeyValue rows={[["Người ký", `${proof.recipientName} (${proof.recipientTitle})`], ["Thời điểm", fmtDateTime(proof.signedAt)]]} />
                  <img src={proof.recipientSignatureUrl} alt="Chữ ký nhà trường" className="h-24 rounded border border-slate-200 bg-white object-contain p-1" />
                </div>
              ) : <p className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800">Nhà trường chưa ký biên bản. Hãy mời đại diện trường đăng nhập cổng trường học để ký, sau đó bạn mới nộp được báo cáo.</p>}
            </Card>

            <Card title="Bước 2 · Báo cáo của tình nguyện viên">
              {reported ? (
                <div className="space-y-3">
                  <p className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">Báo cáo đã được nộp lúc {fmtDateTime(proof.volunteerReportedAt)} và không thể sửa.</p>
                  <p className="text-sm text-slate-700">{proof.volunteerReportNote}</p>
                  <div className="flex flex-wrap gap-2">{proof.volunteerPhotoUrls.map((url, index) => <img key={index} src={url} alt="Ảnh báo cáo" className="size-24 rounded object-cover" />)}</div>
                </div>
              ) : (
                <div className="space-y-4">
                  <Field label="Ghi chú bàn giao"><textarea required minLength={2} maxLength={2000} rows={4} disabled={!proof} className={inputClass} value={note} onChange={(event) => setNote(event.target.value)} placeholder="Tình trạng hàng khi giao, phản hồi của nhà trường..." /></Field>
                  <div><p className="mb-1 text-xs font-semibold text-slate-600">Ảnh xác nhận của tình nguyện viên (1-4 ảnh)</p><PhotoPicker photos={photos} onChange={setPhotos} max={4} /></div>
                </div>
              )}
            </Card>
          </div>
          <aside>
            <Card title="Hàng hóa đã giao">
              {Object.entries(items.reduce((groups, item) => ({ ...groups, [item.category]: [...(groups[item.category] || []), item] }), {})).map(([category, rows]) => (
                <div key={category} className="mb-3 rounded-lg border border-slate-200 p-3 last:mb-0">
                  <p className="flex justify-between text-sm font-semibold"><span>{CATEGORY_LABEL[category]}</span><span>{rows.length}</span></p>
                  <p className="mt-1 font-mono text-[11px] text-slate-500">{rows.map((row) => row.qrCode).join(", ")}</p>
                </div>
              ))}
            </Card>
          </aside>
        </div>
      ) : null}

      {waybill && !reported ? (
        <SubmitBar>
          <p className="text-xs text-slate-500">{proof ? "Báo cáo chỉ nộp được một lần." : "Đang chờ nhà trường ký biên bản."}</p>
          <PrimaryButton type="submit" pending={pending} disabled={!proof || !photos.length || note.trim().length < 2}>Nộp biên bản bàn giao hoàn thành</PrimaryButton>
        </SubmitBar>
      ) : null}
    </form>
  );
}
