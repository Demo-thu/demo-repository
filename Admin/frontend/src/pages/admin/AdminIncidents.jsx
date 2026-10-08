import { useCallback, useEffect, useState } from "react";
import { Download, Lock, ShieldAlert } from "lucide-react";
import api, { apiError } from "../../lib/api";
import { Badge, Card, DataTable, GhostButton, KeyValue, Modal, Notice, PageHead, SearchBox, Stat, StatusBadge, downloadCsv, fmtDateTime, rowsOf, useNotice } from "../portals/kit";

export default function AdminIncidents() {
  const [incidents, setIncidents] = useState([]);
  const [search, setSearch] = useState("");
  const [detail, setDetail] = useState(null);
  const { notice, fail } = useNotice();

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

  const visible = incidents.filter((row) => {
    const term = search.trim().toLowerCase();
    return !term || `${row.waybill?.code || ""} ${row.reason} ${row.incidentType || ""} ${row.reporter?.fullName || ""}`.toLowerCase().includes(term);
  });
  const monthAgo = Date.now() - 30 * 86400000;

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
        <Stat label="Tổng hồ sơ" value={incidents.length} icon={ShieldAlert} tone="rose" />
        <Stat label="Trong 30 ngày" value={incidents.filter((row) => new Date(row.createdAt).getTime() >= monthAgo).length} tone="amber" />
        <Stat label="Vận đơn đang sự cố" value={incidents.filter((row) => row.waybill?.status === "FAILED").length} tone="violet" />
      </div>
      <Card title="Danh sách hồ sơ" actions={<SearchBox value={search} onChange={setSearch} placeholder="Tìm vận đơn, lý do, người báo..." />}>
        <p className="mb-3 flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600"><Lock size={13} />Hồ sơ chỉ đọc.</p>
        <DataTable columns={["Thời gian", "Vận đơn", "Loại", "Lý do", "Người báo", "Ảnh", ""]} rows={table} empty="Chưa có hồ sơ sự cố nào." />
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
