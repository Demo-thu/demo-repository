import { useCallback, useEffect, useState } from "react";
import { Download, Lock, ShieldAlert } from "lucide-react";
import api, { apiError } from "../../lib/api";
import { Badge, Card, DataTable, GhostButton, KeyValue, Modal, Notice, PageHead, Pager, SearchBox, Stat, StatusBadge, downloadCsv, fmtDateTime, rowsOf, totalOf, useNotice } from "../portals/kit";

export default function AdminIncidents() {
  const [incidents, setIncidents] = useState([]);
  const [search, setSearch] = useState("");
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({ page: 1, totalPages: 1, total: 0 });
  const [totals, setTotals] = useState({ all: 0, recent: 0, failed: 0 });
  const [detail, setDetail] = useState(null);
  const { notice, fail } = useNotice();

  useEffect(() => {
    const timer = window.setTimeout(() => { setTerm(search.trim()); setPage(1); }, 300);
    return () => window.clearTimeout(timer);
  }, [search]);

  const load = useCallback(async () => {
    try {
      const since = new Date(Date.now() - 30 * 86400000).toISOString();
      const [list, all, recent, failed] = await Promise.all([
        api.get("/waybills/incidents", { params: { page, limit: 20, search: term || undefined } }),
        api.get("/waybills/incidents", { params: { limit: 1 } }),
        api.get("/waybills/incidents", { params: { limit: 1, from: since } }),
        api.get("/waybills", { params: { limit: 1, status: "FAILED" } }),
      ]);
      setIncidents(rowsOf(list.data));
      setMeta(list.data?.meta || { page, totalPages: 1, total: rowsOf(list.data).length });
      setTotals({ all: totalOf(all.data), recent: totalOf(recent.data), failed: totalOf(failed.data) });
    } catch (error) {
      fail(apiError(error, "Không tải được hồ sơ sự cố."));
    }
  }, [page, term]);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  const visible = incidents;

  const table = visible.map((row) => ({
    key: row.id,
    cells: [
      fmtDateTime(row.createdAt),
      row.waybill?.code || "—",
      row.incidentType || "Khác",
      <span className="line-clamp-2 max-w-md">{row.reason}</span>,
      row.reporter?.fullName || "—",
      row.photoUrls?.length ? <Badge tone="blue">{row.photoUrls.length} ảnh</Badge> : "—",
      <GhostButton onClick={() => setDetail(row)}>Xem hồ sơ</GhostButton>,
    ],
  }));

  return (
    <div className="mx-auto max-w-[1400px] p-4 md:p-6">
      <PageHead
        eyebrow="Vận chuyển · Admin"
        title="Hồ sơ sự cố"
        subtitle="Chỉ xem hồ sơ sự cố do tình nguyện viên báo trên chuyến của mình. Admin không tạo và không sửa."
        actions={<GhostButton disabled={!visible.length} onClick={() => downloadCsv("ho-so-su-co.csv", ["Thời gian", "Vận đơn", "Loại", "Lý do", "Người báo"], visible.map((row) => [fmtDateTime(row.createdAt), row.waybill?.code, row.incidentType, row.reason, row.reporter?.fullName]))}><Download size={14} />Xuất CSV</GhostButton>}
      />
      <Notice notice={notice} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-3">
        <Stat label="Tổng hồ sơ" value={totals.all} icon={ShieldAlert} tone="rose" />
        <Stat label="Trong 30 ngày" value={totals.recent} tone="amber" />
        <Stat label="Vận đơn đang sự cố" value={totals.failed} tone="violet" />
      </div>
      <Card title="Danh sách hồ sơ" actions={<SearchBox value={search} onChange={setSearch} placeholder="Tìm vận đơn, lý do, người báo..." />}>
        <p className="mb-3 flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600"><Lock size={13} />Hồ sơ chỉ đọc.</p>
        <DataTable columns={["Thời gian", "Vận đơn", "Loại", "Lý do", "Người báo", "Ảnh", ""]} rows={table} empty="Chưa có hồ sơ sự cố nào." />
        <Pager page={meta.page || page} totalPages={meta.totalPages || 1} total={meta.total || 0} onChange={setPage} />
      </Card>

      {detail ? (
        <Modal wide title="Hồ sơ sự cố" subtitle={detail.waybill?.code} onClose={() => setDetail(null)} footer={<GhostButton onClick={() => setDetail(null)}>Đóng</GhostButton>}>
          <div className="space-y-4">
            <KeyValue rows={[
              ["Thời gian", fmtDateTime(detail.createdAt)],
              ["Người báo", detail.reporter?.fullName || "—"],
              ["Loại sự cố", detail.incidentType || "Khác"],
              ["Mã QR liên quan", detail.qrCode || "—"],
              ["Trạng thái vận đơn", detail.waybill ? <StatusBadge kind="waybill" value={detail.waybill.status} /> : "—"],
            ]} />
            <p className="rounded-lg bg-rose-50 p-3 text-sm text-rose-900">{detail.reason}</p>
            {detail.photoUrls?.length ? <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{detail.photoUrls.map((url, index) => <img key={index} src={url} alt={`Ảnh sự cố ${index + 1}`} className="aspect-video w-full rounded-lg object-cover" />)}</div> : null}
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
