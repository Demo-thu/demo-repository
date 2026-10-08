import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import {
  DataTable, Empty, GhostButton, KeyValue, Modal, Notice, PageHead, SearchBox, Stat, StatusBadge, downloadCsv, fmtDateTime,
  useWaybills, waybillItems,
} from "@/pages/portals/kit";

export default function HistoryScreen({ params, openTab }) {
  const { waybills, error } = useWaybills("DELIVERED");
  const [search, setSearch] = useState("");
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const id = params.get("waybill");
    if (id && waybills.length) setDetail(waybills.find((row) => row.id === id) || null);
  }, [params, waybills]);

  const visible = waybills.filter((row) => {
    const term = search.trim().toLowerCase();
    return !term || `${row.code} ${row.allocationPlan?.requisition?.code} ${row.proof?.recipientName}`.toLowerCase().includes(term);
  });
  const totalItems = waybills.reduce((sum, row) => sum + waybillItems(row).length, 0);

  function exportCsv() {
    downloadCsv("lich-su-giao-hang.csv", ["Vận đơn", "Yêu cầu", "Số món", "Người nhận", "Chức vụ", "Ký lúc", "Báo cáo TNV"], visible.map((row) => [
      row.code, row.allocationPlan?.requisition?.code, waybillItems(row).length, row.proof?.recipientName, row.proof?.recipientTitle,
      fmtDateTime(row.proof?.signedAt), row.proof?.volunteerReportedAt ? "Đã nộp" : "Chưa nộp",
    ]));
  }

  const rows = visible.map((row) => ({
    key: row.id,
    cells: [
      <b className="text-blue-700">{row.code}</b>,
      row.allocationPlan?.requisition?.code,
      waybillItems(row).length,
      <div><p>{row.proof?.recipientName || "—"}</p><p className="text-xs text-slate-500">{row.proof?.recipientTitle}</p></div>,
      fmtDateTime(row.deliveredAt),
      row.proof?.volunteerReportedAt ? <span className="text-xs text-emerald-700">Đã nộp</span> : <span className="text-xs text-slate-500">Chưa nộp</span>,
      <GhostButton onClick={() => setDetail(row)}>Xem biên bản PoD</GhostButton>,
    ],
  }));

  return (
    <div>
      <PageHead eyebrow="4. Lịch sử & lưu trữ" title="Lịch sử giao hàng" subtitle="Lưu trữ các chuyến đã bàn giao cùng biên bản PoD có chữ ký và ảnh hiện trường."
        actions={<GhostButton onClick={exportCsv} disabled={!visible.length}><Download size={14} />Xuất CSV</GhostButton>} />
      <Notice notice={error ? { tone: "error", text: error } : null} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-3">
        <Stat label="Chuyến đã giao" value={waybills.length} tone="emerald" />
        <Stat label="Tổng số món" value={totalItems} />
        <Stat label="Biên bản có báo cáo TNV" value={waybills.filter((row) => row.proof?.volunteerReportedAt).length} tone="violet" />
      </div>
      <div className="mb-4"><SearchBox value={search} onChange={setSearch} placeholder="Tìm vận đơn, yêu cầu, người nhận..." /></div>
      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <DataTable columns={["Vận đơn", "Yêu cầu", "Số món", "Người ký nhận", "Thời điểm giao", "Báo cáo TNV", "Lưu trữ"]} rows={rows} empty="Chưa có chuyến hàng nào được bàn giao." />
      </div>

      {detail?.proof ? (
        <Modal wide title={`Biên bản PoD · ${detail.code}`} subtitle={detail.allocationPlan?.requisition?.title} onClose={() => setDetail(null)}
          footer={<><GhostButton onClick={() => window.print()}>In biên bản</GhostButton><GhostButton onClick={() => openTab("trace")}>Truy vết mã QR</GhostButton><GhostButton onClick={() => setDetail(null)}>Đóng</GhostButton></>}>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <KeyValue rows={[
                ["Trạng thái", <StatusBadge kind="waybill" value={detail.status} />],
                ["Người ký nhận", `${detail.proof.recipientName} (${detail.proof.recipientTitle})`],
                ["Ký lúc", fmtDateTime(detail.proof.signedAt)],
                ["Vị trí", detail.proof.gpsLatitude != null ? `${detail.proof.gpsLatitude.toFixed(5)}, ${detail.proof.gpsLongitude.toFixed(5)}` : "Không ghi nhận"],
                ["Số món", waybillItems(detail).length],
              ]} />
              <p className="mb-1 mt-4 text-xs font-semibold text-slate-600">Chữ ký</p>
              <img src={detail.proof.recipientSignatureUrl} alt="Chữ ký người nhận" className="h-24 rounded border border-slate-200 bg-white object-contain p-1" />
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold text-slate-600">Ảnh bàn giao</p>
              <div className="grid grid-cols-2 gap-2">
                {detail.proof.proofPhotoUrls.map((url, index) => <img key={index} src={url} alt={`Ảnh bàn giao ${index + 1}`} className="aspect-video rounded border border-slate-200 object-cover" />)}
              </div>
              {detail.proof.volunteerReportNote ? <div className="mt-4 rounded-lg bg-slate-50 p-3 text-sm"><p className="text-xs font-semibold text-slate-600">Báo cáo của tình nguyện viên</p><p className="mt-1 text-slate-700">{detail.proof.volunteerReportNote}</p></div> : <Empty>Tình nguyện viên chưa nộp báo cáo.</Empty>}
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
