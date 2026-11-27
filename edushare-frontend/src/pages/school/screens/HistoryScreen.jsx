import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import api, { apiError } from "@/lib/api";
import DeliveryEvidence from "@/pages/portals/DeliveryEvidence";
import {
  DataTable, GhostButton, KeyValue, Modal, Notice, PageHead, Pager, SearchBox, Stat, StatusBadge, downloadCsv, fmtDateTime,
  useWaybills, waybillItems,
} from "@/pages/portals/kit";

export default function HistoryScreen({ params, openTab }) {
  const [search, setSearch] = useState("");
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(1);
  const [detail, setDetail] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState("");
  const { waybills, meta, error } = useWaybills("DELIVERED", { page, limit: 20, search: term });

  useEffect(() => {
    const timer = window.setTimeout(() => { setTerm(search.trim()); setPage(1); }, 300);
    return () => window.clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    const id = params.get("waybill");
    if (!id) return;
    const found = waybills.find((row) => row.id === id);
    if (found) { setDetail(found); return; }
    setDetailLoading(true);
    api.get(`/waybills/${id}`)
      .then((response) => setDetail(response.data))
      .catch((failure) => setDetailError(apiError(failure, "Không tải được biên bản bàn giao.")))
      .finally(() => setDetailLoading(false));
  }, [params, waybills]);

  async function openDetail(row) {
    setDetail(row);
    setDetailError("");
    setDetailLoading(true);
    try {
      const response = await api.get(`/waybills/${row.id}`);
      setDetail(response.data);
    } catch (failure) {
      setDetailError(apiError(failure, "Không tải được biên bản bàn giao mới nhất."));
    } finally {
      setDetailLoading(false);
    }
  }

  const visible = waybills;
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
      <GhostButton onClick={() => openDetail(row)}>Xem biên bản PoD</GhostButton>,
    ],
  }));

  return (
    <div>
      <PageHead eyebrow="4. Lịch sử & lưu trữ" title="Lịch sử giao hàng" subtitle="Lưu trữ các chuyến đã bàn giao cùng biên bản PoD có chữ ký và ảnh hiện trường."
        actions={<GhostButton onClick={exportCsv} disabled={!visible.length}><Download size={14} />Xuất CSV</GhostButton>} />
      <Notice notice={detailError ? { tone: "error", text: detailError } : error ? { tone: "error", text: error } : null} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-3">
        <Stat label="Chuyến đã giao" value={meta.total || 0} tone="emerald" />
        <Stat label="Số món trang này" value={totalItems} />
        <Stat label="Báo cáo TNV trang này" value={waybills.filter((row) => row.proof?.volunteerReportedAt).length} tone="violet" />
      </div>
      <div className="mb-4"><SearchBox value={search} onChange={setSearch} placeholder="Tìm vận đơn, yêu cầu, người nhận..." /></div>
      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <DataTable columns={["Vận đơn", "Yêu cầu", "Số món", "Người ký nhận", "Thời điểm giao", "Báo cáo TNV", "Lưu trữ"]} rows={rows} empty="Chưa có chuyến hàng nào được bàn giao." />
      </div>
      <Pager page={meta.page || page} totalPages={meta.totalPages || 1} total={meta.total || 0} onChange={setPage} />

      {detail?.proof ? (
        <Modal wide title={`Biên bản PoD · ${detail.code}`} subtitle={detail.allocationPlan?.requisition?.title} onClose={() => setDetail(null)}
          footer={<><GhostButton onClick={() => window.print()}>In biên bản</GhostButton><GhostButton onClick={() => openTab("trace")}>Truy vết mã QR</GhostButton><GhostButton onClick={() => setDetail(null)}>Đóng</GhostButton></>}>
          <div className="space-y-5">
            {detailLoading ? <p className="rounded-lg bg-blue-50 p-2 text-xs text-blue-700">Đang tải biên bản bàn giao mới nhất...</p> : null}
            <KeyValue rows={[
              ["Trạng thái", <StatusBadge kind="waybill" value={detail.status} />],
              ["Vị trí", detail.proof.gpsLatitude != null ? `${detail.proof.gpsLatitude.toFixed(5)}, ${detail.proof.gpsLongitude.toFixed(5)}` : "Không ghi nhận"],
              ["Số món", waybillItems(detail).length],
            ]} />
            <DeliveryEvidence proof={detail.proof} />
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
