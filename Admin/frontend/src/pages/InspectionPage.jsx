import { useEffect, useState } from "react";
import api, { apiError } from "../lib/api";
import { downloadCsv } from "../lib/actions";
import { GRADE_LABEL, ITEM_STATUS_LABEL, specLine } from "../lib/labels";
import { AlertTriangle, Box, CheckCircle2, ClipboardList, Download, Factory, FilePlus2, Laptop, ScanLine, Search, ShieldCheck, Wrench } from "lucide-react";
import { Breadcrumb } from "../components/system-ui";

const inspectionSeed = [
  ["TB-DELL-5520", "Laptop Dell Latitude 5520", "i5 11th Gen • 8GB RAM", "Tập đoàn VNPT", "Cần nâng cấp SSD", "Trần Hùng", "Đang xem"],
  ["TB-THNK-X1C6", "ThinkPad Carbon Gen 6", "i7 8550U • 16GB RAM", "FPT Software HN", "Sẵn sàng bàn giao", "Lê Minh", "Chi tiết"],
  ["TB-HP-PRO400", "PC HP ProDesk 400 G6", "Desktop SFF Core i3", "Ngân hàng BIDV", "Chờ đo nguồn PSU", "Quốc Anh", "Tạo phiếu"],
  ["TB-IPAD-G9", "Apple iPad Gen 9 (64GB)", "Wi-Fi • Kèm Cáp Zin", "Nhà Hảo Tâm An Đà Nẵng", "Pin chai 64% (Cần thay)", "Trần Hùng", "Điều phối"],
  ["TB-MON-LG24", "Màn Hình LG 24MP59G IPS", "Full HD • Cổng HDMI/VGA", "Tập đoàn VNPT", "Đạt chuẩn Grade A", "Lê Minh", "In Tem QR"],
  ["TB-DESK-OPT7050", "PC Dell OptiPlex 7050 SFF", "Core i5-7500 • 8GB RAM", "Ngân hàng MB Bank", "Đạt chuẩn Grade A", "Quốc Anh", "Chi tiết"],
  ["TB-LEN-T480", "Laptop Lenovo ThinkPad T480", "i5 8th Gen • 16GB RAM", "Tập đoàn VNPT", "Cần cài EduShare OS", "Trần Hùng", "Ký kỹ thuật"],
  ["TB-SAM-TAB8", "Samsung Galaxy Tab A8 10.5", "Wi-Fi • Kèm sạc Type-C", "Hảo Tâm Đà Nẵng", "Kiểm tra cảm ứng", "Lê Minh", "Tạo phiếu"],
];

function Kpi({ icon: Icon, label, value, note, blue, teal }) { return <article className="rounded-lg bg-white p-5 shadow-sm"><div className="flex justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">{label}</p><h2 className={`mt-3 font-display text-3xl font-semibold ${blue ? "text-blue-700" : teal ? "text-teal-700" : ""}`}>{value}</h2></div><span className="grid size-9 place-items-center rounded bg-blue-100 text-blue-600"><Icon size={19} /></span></div><p className="mt-5 text-xs text-slate-500">{note}</p></article>; }
function Chip({ children, color = "blue" }) { return <span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${color === "teal" ? "bg-teal-100 text-teal-800" : color === "red" ? "bg-rose-100 text-rose-700" : "bg-blue-100 text-blue-700"}`}>{children}</span>; }

export default function InspectionPage() {
  const [notice, setNotice] = useState("");
  const [inventory, setInventory] = useState(inspectionSeed);
  const [selected, setSelected] = useState(inspectionSeed[0]);
  const [lotFilter, setLotFilter] = useState("all");
  const [lotQuery, setLotQuery] = useState("");
  const [detail, setDetail] = useState(null);
  const [orders, setOrders] = useState([
    ["#ORD-2024-LC01", "THCS Tà Mung, Lai Châu", "35 / 35 máy (100%)", "Xe Viettel Post lấy lúc 15:30"],
    ["#ORD-2024-HG04", "Tiểu Học Pải Lủng, Mèo Vạc", "16 / 20 máy (80%)", "Dự kiến xuất: Sáng mai"],
    ["#ORD-2024-SL02", "Trường Phổ Thông Số 2 Bắc Yên", "15 / 15 PC", "Thiếu 5 chiếc"],
  ]);

  useEffect(() => {
    api.get("/items?limit=20").then((response) => {
      const rows = (response.data.data ?? []).map((item) => [
        item.qrCode,
        item.name,
        specLine(item.specifications) || item.category,
        item.warehouse?.name || "Chưa nhập kho",
        ITEM_STATUS_LABEL[item.status] || item.status,
        GRADE_LABEL[item.grade] || "Chưa chấm",
        "Chi tiết",
        item.id,
        item.warehouseId || "",
        item.status,
      ]);
      if (rows.length === 0) return;
      setInventory(rows);
      setSelected(rows[0]);
    }).catch(() => undefined);
  }, []);

  function applyItemStatus(resourceItemId, status) {
    const label = ITEM_STATUS_LABEL[status] || status;
    setInventory((rows) => rows.map((row) => {
      if (row[7] !== resourceItemId) return row;
      const next = [...row];
      next[4] = label;
      next[9] = status;
      return next;
    }));
    setSelected((row) => {
      if (!row || row[7] !== resourceItemId) return row;
      const next = [...row];
      next[4] = label;
      next[9] = status;
      return next;
    });
  }

  async function submitInspection(action = "ALLOCATE", grade = "GRADE_B", isFunctional = true) {
    const resourceItemId = selected?.[7];
    if (!resourceItemId) {
      setNotice("Hãy chọn một thiết bị trong danh sách.");
      return;
    }
    try {
      const response = await api.post("/inspections", {
        resourceItemId,
        isFunctional,
        grade,
        recommendedAction: action,
        notes: `Phiếu kiểm định cho ${selected[1]}`,
      });
      const status = response.data.resourceItem?.status;
      if (status) applyItemStatus(resourceItemId, status);
      setNotice(`${selected[1]} đã chuyển sang ${ITEM_STATUS_LABEL[status] || "trạng thái mới"}.`);
    } catch (error) {
      setNotice(apiError(error, "Không thực hiện được kiểm định."));
    }
  }

  async function transferSelected() {
    const resourceItemId = selected?.[7];
    const sourceWarehouseId = selected?.[8];
    if (!resourceItemId || !sourceWarehouseId) {
      setNotice("Hãy chọn thiết bị đã có kho.");
      return;
    }
    try {
      const warehouses = await api.get("/warehouses?limit=10");
      const target = (warehouses.data.data ?? []).find((warehouse) => warehouse.id !== sourceWarehouseId);
      if (!target) {
        setNotice("Không có kho đích để điều chuyển.");
        return;
      }
      const people = await api.get("/users?role=VOLUNTEER&limit=5");
      const volunteer = (people.data.data ?? [])[0];
      if (!volunteer) {
        setNotice("Cần ít nhất một tình nguyện viên để lập lệnh điều chuyển.");
        return;
      }
      const phone = String(volunteer.phone || "0901234567");
      const created = await api.post("/transfers", {
        sourceWarehouseId,
        targetWarehouseId: target.id,
        resourceItemIds: [resourceItemId],
        recipientName: target.name,
        recipientPhone: phone.length >= 8 ? phone.slice(0, 20) : "0901234567",
        recipientNote: "Điều chuyển từ trang kiểm định",
        volunteerIds: [volunteer.id],
      });
      await api.patch(`/transfers/${created.data.id}/dispatch`);
      setNotice(`Đã xuất điều chuyển ${selected[0]} sang ${target.name}. Mã ${created.data.code}.`);
    } catch (error) {
      setNotice(apiError(error, "Không điều chuyển được thiết bị."));
    }
  }

  async function openDetail(row) {
    setSelected(row);
    if (!row?.[7]) {
      setNotice("Thiết bị này chưa có hồ sơ trong database.");
      return;
    }
    try {
      const response = await api.get(`/items/${row[7]}`);
      setDetail(response.data);
    } catch (error) {
      setNotice(apiError(error, "Không mở được chi tiết thiết bị."));
    }
  }

  function scanLot() {
    const code = window.prompt("Nhập hoặc quét mã QR / mã lô");
    if (!code) return;
    const found = inventory.find((row) => String(row[0]).toLowerCase().includes(code.trim().toLowerCase()));
    if (!found) {
      setNotice(`Không thấy mã ${code} trong danh sách đang tải.`);
      return;
    }
    setSelected(found);
    setLotQuery(code.trim());
    setNotice(`Đã chọn ${found[1]} (${found[0]}).`);
  }

  async function loadOrders() {
    try {
      const response = await api.get("/requisitions?limit=12");
      const rows = (response.data.data ?? []).map((item) => [
        item.code,
        item.school?.profile?.organizationName || item.school?.fullName || item.title,
        item.status,
        item.urgencyLevel || "",
      ]);
      if (rows.length > 0) setOrders(rows);
      setNotice(rows.length ? `Đã tải ${rows.length} đề xuất từ database.` : "Chưa có đề xuất.");
    } catch (error) {
      setNotice(apiError(error, "Không tải được danh sách đơn."));
    }
  }

  const waiting = inventory.filter((row) => row[9] === "PENDING_INTAKE" || row[9] === "INSPECTED").length;
  const repairing = inventory.filter((row) => row[9] === "REFURBISHING").length;
  const ready = inventory.filter((row) => row[9] === "READY_FOR_ALLOCATION").length;
  const visibleLots = inventory.filter((row) => {
    const text = `${row[0]} ${row[1]} ${row[4]}`.toLowerCase();
    if (lotQuery.trim() && !text.includes(lotQuery.trim().toLowerCase())) return false;
    if (lotFilter === "wait") return row[9] === "PENDING_INTAKE" || row[9] === "INSPECTED";
    if (lotFilter === "repair") return row[9] === "REFURBISHING";
    if (lotFilter === "ready") return row[9] === "READY_FOR_ALLOCATION";
    return true;
  });

  return <><Breadcrumb current="Kiểm định" /><main className="mx-auto max-w-[1540px] space-y-5 px-4 py-5 lg:px-6">
    <section className="flex flex-col justify-between gap-4 rounded-lg bg-white p-5 shadow-sm md:flex-row md:items-center"><div className="flex items-start gap-4"><span className="grid size-12 place-items-center rounded bg-blue-100 text-blue-600"><Factory size={25} /></span><div><p className="text-[10px] font-semibold text-teal-700">TRẠM KỸ THUẬT TRỌNG ĐIỂM　• Trực thuộc Tổng Kho EduShare</p><h1 className="mt-1 max-w-3xl font-display text-2xl font-semibold leading-tight md:text-[28px]">Quản Lý Kho Hàng & Trạm Kỹ Thuật Kiểm Định - Kho Miền Bắc (Hà Nội)</h1><p className="mt-1 text-sm text-slate-600">Quy trình tiếp nhận, kiểm định 7 bước, chuẩn hóa thiết bị tin học đường trao tặng vùng sâu.</p></div></div><div className="flex gap-2"><button type="button" onClick={scanLot} className="rounded bg-blue-50 px-3 py-2 text-xs font-semibold"><ScanLine className="mr-1 inline" size={15} />Quét Mã Lô Hàng</button><button onClick={submitInspection} className="rounded bg-blue-600 px-4 py-2 text-xs font-semibold text-white"><FilePlus2 className="mr-1 inline" size={15} />Lưu phiếu kiểm định</button></div></section>
    <section className="flex items-center gap-3 rounded-lg bg-rose-100 p-4 text-rose-800"><AlertTriangle size={25} /><div className="flex-1"><b className="text-xs uppercase">Cảnh báo tồn kho & linh kiện điều phối liên kho</b><p className="text-xs">Kho miền Trung sắp hết vật tư đóng gói chống sốc và dây sạc Type-C 65W. Dự kiến ảnh hưởng 42 đơn hàng xuất cho trường vùng cao.</p></div><button onClick={transferSelected} className="rounded bg-rose-700 px-3 py-2 text-xs font-semibold text-white">Cân đối & Điều chuyển kho</button></section>
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"><Kpi icon={Box} label="Chờ tiếp nhận & phân loại" value={String(waiting)} note="Số thiết bị đang chờ hoặc vừa kiểm" /><Kpi icon={ClipboardList} label="Đang kiểm định chất lượng" value={String(inventory.length)} blue note="Tổng thiết bị đang hiển thị từ database" /><Kpi icon={Wrench} label="Đang thay thế / sửa chữa" value={String(repairing)} note="Thiết bị đang ở trạng thái sửa chữa" /><Kpi icon={ShieldCheck} label="Đã đạt chuẩn – sẵn sàng xuất" value={String(ready)} teal note="Sẵn sàng ghép vào đề xuất trường" /></section>
    <section className="flex flex-wrap gap-2 rounded-lg bg-white p-3 shadow-sm">{[["all", `Tất cả (${inventory.length})`], ["wait", `Chờ kiểm định (${waiting})`], ["repair", `Đang sửa (${repairing})`], ["ready", `Đạt chuẩn (${ready})`]].map(([key, label]) => <button key={key} type="button" onClick={() => setLotFilter(key)} className={`rounded px-3 py-2 text-xs ${lotFilter === key ? "bg-blue-600 font-semibold text-white" : "bg-blue-50 text-slate-600"}`}>{label}</button>)}<label className="ml-auto flex items-center gap-1 rounded bg-blue-50 px-2 text-xs text-slate-500"><Search size={14} /><input value={lotQuery} onChange={(event) => setLotQuery(event.target.value)} className="w-36 bg-transparent py-1 outline-none" placeholder="Mã lô hoặc serial..." /></label><button type="button" onClick={() => downloadCsv("kiem-dinh.csv", ["QR", "Thiết bị", "Kho", "Trạng thái"], visibleLots.map((row) => [row[0], row[1], row[3], row[4]]))} className="rounded bg-blue-50 px-3 text-slate-600"><Download size={15} /></button></section>
    <section className="grid items-start gap-5 lg:grid-cols-12"><article className="overflow-hidden rounded-lg bg-white shadow-sm lg:col-span-8"><div className="flex items-center justify-between p-5"><div><h2 className="font-display text-base font-semibold">☷ Danh Sách Lô Thiết Bị Tiếp Nhận & Điều Phối Kỹ Thuật</h2><p className="text-[10px] text-slate-500">Tiến độ ca sáng: <b>48/70 thiết bị</b>　•　Hiệu suất đạt chuẩn: <b className="text-teal-700">89.4%</b></p></div><div className="h-2 w-40 overflow-hidden rounded bg-blue-100"><span className="block h-full w-[89%] bg-teal-700" /></div></div><div className="overflow-x-auto"><table className="w-full min-w-[800px] text-left"><thead className="bg-blue-50 text-[9px] uppercase text-slate-500"><tr>{["Mã định danh / QR", "Thiết bị", "Đơn vị hiện tặng", "Tình trạng tiếp nhận", "Kỹ thuật viên", "Thao tác"].map(x => <th key={x} className="px-4 py-3">{x}</th>)}</tr></thead><tbody>{visibleLots.map((row) => <tr key={row[0]} onClick={() => setSelected(row)} className={`cursor-pointer border-t border-blue-50 text-xs ${selected[0] === row[0] ? "bg-blue-50" : "hover:bg-slate-50"}`}><td className="px-4 py-3 font-semibold text-blue-700">▦ {row[0]}<br /><span className="text-[10px] text-slate-500">{row[3]}</span></td><td className="px-4 py-3"><b>{row[1]}</b><br /><span className="text-[10px] text-slate-500">{row[2]}</span></td><td className="px-4 py-3 text-slate-600">{row[3]}</td><td className="px-4 py-3"><Chip color={row[9] === "REFURBISHING" ? "red" : row[9] === "READY_FOR_ALLOCATION" ? "teal" : "blue"}>◉ {row[4]}</Chip></td><td className="px-4 py-3"><span className="rounded-full bg-slate-200 px-1.5 py-1 text-[10px] font-semibold">{String(row[5] || "—").split(" ").map((part) => part[0]).join("")}</span> {row[5]}</td><td className="px-4 py-3"><button type="button" onClick={(event) => { event.stopPropagation(); openDetail(row); }} className="rounded bg-blue-100 px-2 py-1.5 text-[10px] font-semibold text-blue-700">{row[6]}</button></td></tr>)}{visibleLots.length === 0 && <tr><td className="px-4 py-6 text-xs text-slate-500" colSpan={6}>Không có thiết bị khớp bộ lọc.</td></tr>}</tbody></table></div><footer className="flex justify-between bg-blue-50 px-4 py-3 text-[10px] text-slate-500"><span>Hiển thị 9 trên 320 thiết bị trong phiên kiểm</span><span>Trang 1 / 36　 Trước　<b className="rounded bg-blue-600 px-2 py-1 text-white">1</b>　2　Tiếp</span></footer></article>
      <aside className="space-y-5 lg:col-span-4"><article className="rounded-lg bg-white p-5 shadow-sm"><div className="flex justify-between"><div><h2 className="font-display text-lg font-semibold">Phiếu kỹ thuật {selected?.[0] || ""}</h2><p className="text-[10px] text-slate-500">Hồ sơ của thiết bị đang chọn trong danh sách</p></div><Chip>{selected?.[0] || "—"}</Chip></div><div className="mt-4 flex gap-3 rounded bg-blue-50 p-3"><Laptop className="text-blue-600" /><p className="text-xs"><b>{selected?.[1]}</b><br />{selected?.[2]} · {selected?.[3]}<br /><span className="text-teal-700">{selected?.[4]} · {selected?.[5]}</span></p></div><h3 className="mt-5 text-[10px] font-semibold uppercase text-slate-500">Hạng mục đánh giá kỹ thuật (5/5)</h3>{[["Màn Hình & Tấm Nền IPS", "Đạt Chuẩn A", "teal"], ["Bàn Phím & Touchpad", "Tốt", "teal"], ["Dung Lượng Pin & Bộ Sạc", "Cần Thay Pin", "red"], ["Ổ Cứng & Tốc Độ Đọc/Ghi", "Cần Nâng Cấp", "blue"], ["Nhiệt Độ & Hiệu Năng CPU/RAM", "Ổn Định", "teal"]].map(x => <div key={x[0]} className="mt-2 flex items-center justify-between rounded bg-blue-50 p-3 text-xs"><span><CheckCircle2 className={`mr-1 inline ${x[2] === "red" ? "text-rose-500" : "text-teal-700"}`} size={15} /><b>{x[0]}</b><br /><small className="ml-5 text-slate-500">Đo sáng, kiểm tra theo tiêu chuẩn kỹ thuật</small></span><Chip color={x[2]}>{x[1]}</Chip></div>)}<div className="mt-4 rounded bg-blue-100 p-3"><p className="text-xs"><b>KẾT LUẬN THẨM ĐỊNH</b>　 <span className="text-blue-700">KTV: Nguyễn Văn Minh</span></p><h3 className="mt-2 font-display text-base font-semibold text-blue-700">⚒ Cần nâng cấp SSD + Thay pin mới</h3><p className="mt-2 text-xs text-slate-600">Khung vỏ đạt 95%, bản lề chắc. Sau khi thay thỏi pin 4-cell và nâng cấp SSD NVMe 256GB từ Kho linh kiện sẵn sàng cấp mã EduSafe.</p></div><div className="mt-4 flex gap-2"><button onClick={() => submitInspection("HOLD", "GRADE_B", true)} className="flex-1 rounded bg-blue-100 py-2 text-xs font-semibold">▣ Lưu Phiếu Tạm</button><button onClick={() => submitInspection("REFURBISH", "GRADE_C", false)} className="flex-1 rounded bg-slate-600 py-2 text-xs font-semibold text-white">⚒ Chuyển Sang Sửa Chữa</button></div><button onClick={() => submitInspection("ALLOCATE", "GRADE_A", true)} className="mt-2 w-full rounded bg-blue-600 py-3 text-xs font-semibold text-white">◉ Xác Nhận Nhập Kho Sẵn Sàng Điều Phối (Xuất Tem)</button></article><article className="rounded-lg bg-white p-5 shadow-sm"><h3 className="text-[10px] font-semibold uppercase text-slate-500">Lịch sử di chuyển & nhật ký kho (Audit Trail)</h3>{["10:45 - Tiếp nhận tại Cửa Nhập Kho #A2", "11:15 - Hoàn tất quét mã QR & phân loại sơ bộ", "Dự kiến 14:00 - Thay cell pin và cài đặt Hệ điều hành EduShare Linux"].map(x => <p key={x} className="mt-3 border-l-2 border-blue-300 pl-3 text-xs">{x}</p>)}</article></aside></section>
    <section className="rounded-lg bg-white p-5 shadow-sm"><div className="flex justify-between"><div><h2 className="font-display text-lg font-semibold">🚚 Lệnh Xuất Điều Phối Thiết Bị Ra Điểm Trường (Display Warehouse Orders)</h2><p className="text-xs text-slate-500">Tiến độ gom hàng, đóng thùng bảo vệ và niêm phong chứng chỉ EduShare trước khi bàn giao cho xe vận chuyển.</p></div><button type="button" onClick={loadOrders} className="rounded bg-blue-100 px-4 text-xs">Xem toàn bộ đơn</button></div><div className="mt-4 grid gap-4 md:grid-cols-3">{orders.map(x => <article key={x[0]} className="rounded bg-blue-50 p-4"><b className="text-xs text-blue-700">{x[0]}</b><h3 className="mt-2 font-display text-sm font-semibold">{x[1]}</h3><p className="mt-3 text-xs">Đã kiểm định & đóng hộp: <b className="text-teal-700">{x[2]}</b></p><footer className="mt-3 text-[10px] text-slate-500">{x[3]}　 <b className="float-right text-blue-700">Theo dõi ›</b></footer></article>)}</div></section>
  </main>{detail && <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/40 p-4"><article className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl"><div className="flex items-start justify-between gap-3"><div><p className="text-[10px] font-semibold uppercase text-slate-500">Chi tiết thiết bị</p><h2 className="font-display text-xl font-semibold">{detail.name}</h2><p className="mt-1 font-mono text-sm text-blue-700">{detail.qrCode}</p></div><button type="button" onClick={() => setDetail(null)} className="rounded px-2 text-lg">×</button></div><dl className="mt-4 space-y-2 text-sm text-slate-700"><div className="flex justify-between gap-3"><dt>Trạng thái</dt><dd className="font-semibold">{ITEM_STATUS_LABEL[detail.status] || detail.status}</dd></div><div className="flex justify-between gap-3"><dt>Mức chất lượng</dt><dd>{GRADE_LABEL[detail.grade] || "Chưa chấm"}</dd></div><div className="flex justify-between gap-3"><dt>Kho</dt><dd>{detail.warehouse?.name || "Chưa nhập kho"}</dd></div><div className="flex justify-between gap-3"><dt>Vị trí kệ</dt><dd>{detail.binLocation || "Chưa xếp kệ"}</dd></div><div className="flex justify-between gap-3"><dt>Thông số</dt><dd className="text-right">{specLine(detail.specifications) || detail.category}</dd></div></dl><button type="button" onClick={() => { setDetail(null); setNotice(`Đã mở hồ sơ ${detail.qrCode}. Có thể lưu phiếu kiểm định bên phải.`); }} className="mt-5 w-full rounded bg-blue-600 py-2 text-sm font-semibold text-white">Dùng hồ sơ này để kiểm định</button></article></div>}{notice && <div className="fixed bottom-5 right-5 z-50 flex gap-3 rounded-lg bg-teal-700 px-4 py-3 text-sm text-white shadow-xl"><CheckCircle2 size={18} />{notice}<button onClick={() => setNotice("")}>×</button></div>}</>;
}
