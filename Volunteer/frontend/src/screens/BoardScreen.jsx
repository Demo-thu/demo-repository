import { useCallback, useEffect, useState } from "react";
import { Award, Download, Medal, Timer } from "lucide-react";
import api, { apiError, currentUser } from "@/lib/api";
import { Badge, Card, Chips, DataTable, GhostButton, Notice, PageHead, Stat, downloadCsv, fmtDate, fmtTime, rowsOf, statusMeta, useNotice, useWaybills } from "@/pages/portals/kit";

export default function BoardScreen() {
  const user = currentUser();
  const { waybills } = useWaybills("DELIVERED");
  const [shifts, setShifts] = useState([]);
  const [board, setBoard] = useState([]);
  const [filter, setFilter] = useState("all");
  const { notice, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const [shiftRes, boardRes] = await Promise.all([api.get("/volunteers/shifts", { params: { limit: 100 } }), api.get("/volunteers/leaderboard")]);
      setShifts(rowsOf(shiftRes.data));
      setBoard(rowsOf(boardRes.data));
    } catch (error) {
      fail(apiError(error, "Không tải được lịch sử ca."));
    }
  }, []);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  const hours = shifts.reduce((sum, row) => sum + (row.hoursContributed || 0), 0);
  const finished = shifts.filter((row) => row.checkOutAt);
  const attendance = shifts.length ? Math.round((finished.length / shifts.length) * 100) : 0;
  const delivered = waybills.reduce((sum, row) => sum + (row.allocationPlan?.items?.length || 0), 0);
  const myRank = board.findIndex((row) => row.volunteer?.id === user?.id) + 1;

  const visible = shifts.filter((row) => filter === "all" || row.shiftType === filter);
  const table = visible.map((row) => ({
    key: row.id,
    cells: [fmtDate(row.shiftDate), statusMeta("shift", row.shiftType)[0], row.warehouse?.name, fmtTime(row.checkInAt), fmtTime(row.checkOutAt), row.checkOutAt ? `${row.hoursContributed} giờ` : row.checkInAt ? <Badge tone="blue">Đang trực</Badge> : <Badge tone="amber">Chưa điểm danh</Badge>],
  }));

  function exportCsv() {
    downloadCsv("lich-su-ca-truc.csv", ["Ngày", "Loại ca", "Kho", "Vào ca", "Kết ca", "Giờ đóng góp"], visible.map((row) => [fmtDate(row.shiftDate), statusMeta("shift", row.shiftType)[0], row.warehouse?.name, fmtTime(row.checkInAt), fmtTime(row.checkOutAt), row.hoursContributed]));
  }

  return (
    <div>
      <PageHead eyebrow="Cổng tình nguyện viên" title="Lịch sử ca trực & xếp hạng" subtitle="Giờ đóng góp được cộng khi bạn kết ca; bảng xếp hạng chung tính theo tổng giờ." actions={<GhostButton onClick={exportCsv} disabled={!visible.length}><Download size={14} />Xuất CSV</GhostButton>} />
      <Notice notice={notice} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Tổng giờ đóng góp" value={hours.toFixed(1)} tone="emerald" icon={Timer} />
        <Stat label="Tỷ lệ hoàn thành ca" value={`${attendance}%`} hint={`${finished.length}/${shifts.length} ca`} />
        <Stat label="Hiện vật đã giao" value={delivered} tone="violet" />
        <Stat label="Thứ hạng" value={myRank ? `#${myRank}` : "—"} tone="amber" icon={Medal} />
      </div>
      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <Card title="Lịch sử ca" actions={<Chips value={filter} onChange={setFilter} items={[["all", "Tất cả"], ["SORTING", "Phân loại"], ["PACKING", "Đóng gói"], ["DELIVERY", "Giao hàng"]]} />}>
          <DataTable columns={["Ngày", "Loại ca", "Kho", "Vào ca", "Kết ca", "Giờ"]} rows={table} empty="Chưa có ca trực nào." />
        </Card>
        <Card title="Bảng xếp hạng" actions={<Award size={18} className="text-amber-500" />}>
          {board.length ? (
            <ol className="space-y-2">
              {board.slice(0, 10).map((row, index) => (
                <li key={row.volunteer?.id || index} className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${row.volunteer?.id === user?.id ? "bg-blue-50 ring-1 ring-blue-200" : "bg-slate-50"}`}>
                  <span className="flex items-center gap-2"><b className={`grid size-6 place-items-center rounded-full text-xs ${index < 3 ? "bg-amber-400 text-white" : "bg-slate-200 text-slate-600"}`}>{index + 1}</b>{row.volunteer?.fullName || "Tình nguyện viên"}</span>
                  <b className="text-blue-700">{Number(row.hoursContributed).toFixed(1)} giờ</b>
                </li>
              ))}
            </ol>
          ) : <p className="text-sm text-slate-500">Chưa có dữ liệu xếp hạng.</p>}
        </Card>
      </div>
    </div>
  );
}
