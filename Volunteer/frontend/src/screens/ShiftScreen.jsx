import { useCallback, useEffect, useState } from "react";
import { Clock, Crosshair, LogIn, LogOut, MapPin } from "lucide-react";
import api, { apiError } from "@/lib/api";
import {
  Badge, Card, Empty, Field, GhostButton, KeyValue, Notice, PageHead, Pager, PrimaryButton, Stat, StatusBadge, currentPosition, fmtDate,
  fmtTime, inputClass, orgName, rowsOf, totalOf, useNotice, useWaybills,
} from "@/pages/portals/kit";

const TYPES = [["SORTING", "Phân loại hàng"], ["PACKING", "Đóng gói"], ["DELIVERY", "Giao hàng"]];
const localDate = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
};
const sameDay = (a, b) => new Date(a).toDateString() === new Date(b).toDateString();

function elapsed(from, now) {
  const seconds = Math.max(0, Math.floor((now - new Date(from).getTime()) / 1000));
  const pad = (value) => String(value).padStart(2, "0");
  return `${pad(Math.floor(seconds / 3600))}:${pad(Math.floor((seconds % 3600) / 60))}:${pad(seconds % 60)}`;
}

export default function ShiftScreen({ openTab }) {
  const { waybills } = useWaybills();
  const [weekShifts, setWeekShifts] = useState([]);
  const [weekMeta, setWeekMeta] = useState({ page: 1, totalPages: 1, total: 0 });
  const [weekPage, setWeekPage] = useState(1);
  const [active, setActive] = useState(null);
  const [totals, setTotals] = useState({ count: 0, hours: 0 });
  const [warehouse, setWarehouse] = useState(null);
  const [form, setForm] = useState({ date: localDate(), type: "SORTING" });
  const [now, setNow] = useState(Date.now());
  const [position, setPosition] = useState(null);
  const [pending, setPending] = useState("");
  const { notice, ok, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
      const [weekRes, totalRes, openRes, warehouseRes] = await Promise.all([
        api.get("/volunteers/shifts", { params: { from: start.toISOString(), page: weekPage, limit: 20 } }),
        api.get("/volunteers/shifts", { params: { limit: 1 } }),
        api.get("/volunteers/shifts", { params: { open: true, limit: 5 } }),
        api.get("/warehouses", { params: { limit: 50 } }),
      ]);
      setWeekShifts(rowsOf(weekRes.data));
      setWeekMeta(weekRes.data?.meta || { page: weekPage, totalPages: 1, total: rowsOf(weekRes.data).length });
      setTotals({ count: totalOf(totalRes.data), hours: totalRes.data?.summary?.hoursContributed || 0 });
      setActive(rowsOf(openRes.data)[0] || null);
      const rows = rowsOf(warehouseRes.data);
      setWarehouse(rows.find((row) => row.code === "WH-HAN") || rows[0] || null);
    } catch (error) {
      fail(apiError(error, "Không tải được ca trực."));
    }
  }, [weekPage]);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => {
      window.removeEventListener("portal:refresh", load);
      window.clearInterval(timer);
    };
  }, [load]);

  const todayShift = weekShifts.find((row) => sameDay(row.shiftDate, now) && !row.checkInAt);
  const totalHours = totals.hours;
  const tasks = waybills.filter((row) => ["PENDING_PICKUP", "IN_TRANSIT"].includes(row.status));

  async function run(kind, action) {
    setPending(kind);
    try {
      await action();
      window.dispatchEvent(new CustomEvent("portal:refresh"));
    } catch (error) {
      fail(apiError(error, "Thao tác ca trực không thành công."));
    } finally {
      setPending("");
    }
  }

  const register = (event) => {
    event.preventDefault();
    if (!warehouse) {
      fail("Chưa xác định được kho trực.");
      return;
    }
    run("register", async () => {
      await api.post("/volunteers/shifts", { warehouseId: warehouse.id, shiftDate: new Date(`${form.date}T08:00:00`).toISOString(), shiftType: form.type });
      ok("Đã đăng ký ca. Bạn có thể điểm danh vào ca ngay khi tới kho.");
    });
  };

  const checkIn = (shift) => run("in", async () => {
    await api.post(`/volunteers/shifts/${shift.id}/check-in`);
    ok("Đã điểm danh vào ca. Chúc bạn một ca trực hiệu quả!");
  });

  const checkOut = (shift) => run("out", async () => {
    const { data } = await api.post(`/volunteers/shifts/${shift.id}/check-out`);
    ok(`Đã kết ca. Ghi nhận ${data.hoursContributed} giờ đóng góp.`);
  });

  async function locate() {
    const result = await currentPosition();
    if (result) setPosition(result);
    else fail("Không lấy được vị trí. Hãy cấp quyền định vị cho trình duyệt.");
  }

  return (
    <div>
      <PageHead eyebrow="Cổng tình nguyện viên" title="Điểm danh ca trực hôm nay" subtitle="Điểm danh vào/ra ca để hệ thống tự cộng giờ đóng góp vào bảng xếp hạng." />
      <Notice notice={notice} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Giờ đóng góp" value={totalHours.toFixed(1)} tone="emerald" icon={Clock} />
        <Stat label="Tổng số ca" value={totals.count} />
        <Stat label="Ca tuần này" value={weekMeta.total || weekShifts.length} tone="violet" />
        <Stat label="Chuyến đang phụ trách" value={tasks.length} tone="amber" />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <div className="space-y-5">
          <Card>
            <div className="text-center">
              <p className="font-display text-5xl font-semibold tabular-nums text-slate-900">{new Date(now).toLocaleTimeString("vi-VN")}</p>
              <p className="mt-1 text-sm text-slate-500">{new Date(now).toLocaleDateString("vi-VN", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" })}</p>
            </div>
            <div className="mt-5 border-t border-slate-100 pt-5">
              {active ? (
                <div className="text-center">
                  <Badge tone="emerald">● Đang trong ca · {TYPES.find(([key]) => key === active.shiftType)?.[1]}</Badge>
                  <p className="mt-2 font-display text-3xl font-semibold tabular-nums text-emerald-700">{elapsed(active.checkInAt, now)}</p>
                  <p className="text-xs text-slate-500">Vào ca lúc {fmtTime(active.checkInAt)} · {active.warehouse?.name}</p>
                  <PrimaryButton className="mt-4 !bg-rose-600 hover:!bg-rose-700" pending={pending === "out"} onClick={() => checkOut(active)}><LogOut size={16} />Kết ca</PrimaryButton>
                </div>
              ) : todayShift ? (
                <div className="text-center">
                  <Badge tone="blue">Ca hôm nay · {TYPES.find(([key]) => key === todayShift.shiftType)?.[1]}</Badge>
                  <p className="mt-2 text-sm text-slate-600">{todayShift.warehouse?.name}</p>
                  <PrimaryButton className="mt-4" pending={pending === "in"} onClick={() => checkIn(todayShift)}><LogIn size={16} />Điểm danh vào ca</PrimaryButton>
                </div>
              ) : (
                <form onSubmit={register} className="mx-auto grid max-w-md gap-3">
                  <p className="text-center text-sm text-slate-600">Bạn chưa có ca nào hôm nay. Đăng ký ca mới:</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field label="Ngày trực"><input type="date" required className={inputClass} value={form.date} min={localDate()} onChange={(event) => setForm({ ...form, date: event.target.value })} /></Field>
                    <Field label="Loại ca"><select className={inputClass} value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value })}>{TYPES.map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></Field>
                  </div>
                  <PrimaryButton type="submit" pending={pending === "register"}>Đăng ký ca trực</PrimaryButton>
                </form>
              )}
            </div>
          </Card>

          <Card title="Nhiệm vụ đang phụ trách" actions={<GhostButton onClick={() => openTab("waybills")}>Xem tất cả</GhostButton>}>
            {tasks.length ? tasks.slice(0, 4).map((row) => (
              <div key={row.id} className="mb-2 flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm last:mb-0">
                <span><b className="text-blue-700">{row.code}</b> · {orgName(row.allocationPlan?.requisition?.school)}</span>
                <StatusBadge kind="waybill" value={row.status} />
              </div>
            )) : <Empty>Hiện chưa có chuyến nào được giao cho bạn.</Empty>}
          </Card>
        </div>

        <div className="space-y-5">
          <Card title="Vị trí của bạn" actions={<MapPin size={16} className="text-blue-600" />}>
            <GhostButton onClick={locate}><Crosshair size={13} />Lấy vị trí hiện tại</GhostButton>
            {position ? <p className="mt-2 text-xs text-slate-600">{position.latitude.toFixed(5)}, {position.longitude.toFixed(5)} (±{Math.round(position.accuracy)} m)</p> : <p className="mt-2 text-xs text-slate-500">Vị trí chỉ hiển thị cho bạn tham khảo, không được lưu.</p>}
            {warehouse ? <div className="mt-3"><KeyValue rows={[["Kho trực", warehouse.name], ["Địa chỉ", warehouse.address]]} /></div> : null}
          </Card>
          <Card title="Lịch ca tuần này">
            {weekShifts.length ? weekShifts.map((row) => (
              <div key={row.id} className="mb-2 flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2 text-sm last:mb-0">
                <span><b>{fmtDate(row.shiftDate)}</b><span className="block text-xs text-slate-500">{TYPES.find(([key]) => key === row.shiftType)?.[1]}</span></span>
                {row.checkOutAt ? <Badge tone="emerald">{row.hoursContributed} giờ</Badge> : row.checkInAt ? <Badge tone="blue">Đang trực</Badge> : <Badge tone="amber">Chưa điểm danh</Badge>}
              </div>
            )) : <Empty>Chưa có ca nào trong tuần.</Empty>}
            <Pager page={weekMeta.page || weekPage} totalPages={weekMeta.totalPages || 1} total={weekMeta.total || 0} onChange={setWeekPage} />
          </Card>
        </div>
      </div>
    </div>
  );
}
