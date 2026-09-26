import { useEffect, useState } from "react";
import api, { apiError } from "../lib/api";
import { downloadCsv } from "../lib/actions";
import { Breadcrumb } from "../components/system-ui";
import {
  Download,
  PlusCircle,
  Monitor,
  Wrench,
  Truck,
  CheckCircle2,
  Search,
  SlidersHorizontal,
  RefreshCw,
  MoreHorizontal,
  QrCode,
  Building2,
  Heart,
  ShieldCheck,
  GraduationCap,
  Maximize2,
  X,
  Banknote,
  Save,
  Printer,
} from "lucide-react";

function Metric({
  icon: Icon,
  label,
  value,
  children,
  colorClass,
  iconColorClass,
}) {
  return (
    <article className="flex items-start justify-between rounded-xl bg-white p-5 shadow-sm">
      <div className="flex flex-col">
        <span
          className={`text-[10px] font-semibold uppercase tracking-wider ${colorClass ? colorClass : "text-slate-500"}`}
        >
          {label}
        </span>
        <div className="mt-1 flex items-baseline gap-2">
          <span
            className={`font-display text-3xl font-semibold leading-none ${colorClass ? colorClass : "text-slate-900"}`}
          >
            {value}
          </span>
          <span className="text-sm font-medium text-slate-500">máy</span>
        </div>
        <div
          className={`mt-2 flex items-center gap-1 text-xs ${colorClass ? colorClass : "text-slate-600"}`}
        >
          {children}
        </div>
      </div>
      <div
        className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${iconColorClass}`}
      >
        <Icon size={22} />
      </div>
    </article>
  );
}

const KanbanCard = ({
  id,
  priority,
  title,
  specs,
  errors,
  sourceIcon: SourceIcon,
  source,
  assignee,
  assigneeInitials,
  time,
  selected,
  onClick,
  active,
}) => (
  <div
    onClick={onClick}
    className={`relative flex cursor-pointer flex-col gap-2 rounded-xl p-3 transition-all ${selected ? "bg-blue-50 ring-2 ring-blue-600 shadow-md" : "bg-white shadow-sm hover:shadow-md"}`}
  >
    {active && (
      <div className="absolute -right-2 -top-2 flex items-center gap-1 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-semibold text-white">
        <span className="size-1.5 animate-ping rounded-full bg-white"></span>
        Đang mở kiểm tra
      </div>
    )}
    <div className="flex items-center justify-between">
      <div
        className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs font-semibold ${selected ? "bg-white" : "bg-slate-50"} text-blue-600`}
      >
        <QrCode size={13} />
        <span>{id}</span>
      </div>
      <span
        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${priority === "Khẩn cấp" ? "bg-rose-50 text-rose-700" : priority === "Ưu tiên cao" ? "bg-amber-50 text-amber-700" : "bg-purple-50 text-purple-700"}`}
      >
        {priority === "Khẩn cấp" && (
          <span className="size-1.5 rounded-full bg-rose-500"></span>
        )}
        {priority}
      </span>
    </div>
    <div>
      <h2
        className={`font-display text-sm font-semibold leading-snug ${selected ? "text-slate-900" : "text-slate-900 hover:text-blue-600"}`}
      >
        {title}
      </h2>
      <span className="text-xs text-slate-500">{specs}</span>
    </div>
    <div className="flex flex-wrap gap-1">
      {errors.map((err, i) => (
        <span
          key={i}
          className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700"
        >
          {err}
        </span>
      ))}
    </div>
    <div className="flex items-center gap-1 text-xs text-slate-500">
      <SourceIcon size={14} className={selected ? "text-blue-600" : ""} />
      <span>{source}</span>
    </div>
    <div
      className={`mt-1 flex items-center justify-between rounded-b-xl pt-2 ${selected ? "bg-white/60 -mx-3 -mb-3 p-3" : "bg-white"}`}
    >
      <div className="flex items-center gap-1.5">
        <div className="flex size-6 items-center justify-center rounded-full bg-blue-100 text-[10px] font-semibold text-blue-700">
          {assigneeInitials}
        </div>
        <span className="text-xs font-medium text-slate-900">{assignee}</span>
      </div>
      <span
        className={`text-xs ${selected ? "font-semibold text-blue-600" : "text-slate-500"}`}
      >
        {time}
      </span>
    </div>
  </div>
);

export default function RepairPage() {
  const [repairItems, setRepairItems] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [nextStatus, setNextStatus] = useState("Đang sửa chữa (Xưởng Kỹ thuật)");
  const [repairNotice, setRepairNotice] = useState("");
  const [repairQuery, setRepairQuery] = useState("");
  const [note, setNote] = useState("");
  const [detailOpen, setDetailOpen] = useState(false);
  const [partsWait, setPartsWait] = useState(() => new Set(JSON.parse(localStorage.getItem("edushare_parts_wait") || "[]")));

  function rememberParts(next) {
    setPartsWait(next);
    localStorage.setItem("edushare_parts_wait", JSON.stringify([...next]));
  }

  function columnOf(item) {
    if (item.status === "READY_FOR_ALLOCATION") return "done";
    if (item.status === "REFURBISHING" && partsWait.has(item.id)) return "parts";
    if (item.status === "REFURBISHING") return "repair";
    if (item.status === "PENDING_INTAKE" || item.status === "INSPECTED") return "wait";
    return "";
  }

  async function reloadRepair(parts = partsWait) {
    const response = await api.get("/items?limit=40");
    const rows = (response.data.data ?? []).filter((item) => {
      if (item.status === "READY_FOR_ALLOCATION" || item.status === "REFURBISHING") return true;
      return item.status === "PENDING_INTAKE" || item.status === "INSPECTED";
    });
    setRepairItems(rows);
    setSelectedId((current) => (rows.some((item) => item.id === current) ? current : rows.find((item) => item.status === "REFURBISHING" && !parts.has(item.id))?.id || rows[0]?.id || ""));
    return rows;
  }

  useEffect(() => {
    reloadRepair().catch(() => undefined);
  }, []);

  async function updateRepair(event) {
    event.preventDefault();
    const item = repairItems.find((row) => row.id === selectedId);
    if (!item) {
      setRepairNotice("Hãy chọn một thẻ thiết bị trên bảng.");
      return;
    }
    try {
      const nextParts = new Set(partsWait);
      if (nextStatus.includes("hoàn thành")) {
        if (item.status !== "REFURBISHING") await api.patch(`/items/${item.id}/refurbish`);
        await api.patch(`/items/${item.id}/complete-refurbish`);
        nextParts.delete(item.id);
        setRepairNotice(`Đã hoàn tất ${item.qrCode} và chuyển sang sẵn sàng xuất.`);
      } else if (nextStatus.includes("rã")) {
        await api.post("/inspections", {
          resourceItemId: item.id,
          isFunctional: false,
          grade: "GRADE_C",
          recommendedAction: "RECYCLE",
          notes: note || "Chuyển kho rã xác phụ tùng từ trang sửa chữa.",
        });
        nextParts.delete(item.id);
        setRepairNotice(`Đã ghi nhận tái chế ${item.qrCode}.`);
      } else if (nextStatus.includes("linh kiện")) {
        if (item.status !== "REFURBISHING") await api.patch(`/items/${item.id}/refurbish`);
        nextParts.add(item.id);
        setRepairNotice(`${item.qrCode} đang chờ linh kiện. Ghi chú: ${note || "chưa có"}.`);
      } else if (item.status === "REFURBISHING") {
        nextParts.delete(item.id);
        setRepairNotice(`${item.qrCode} tiếp tục ở xưởng sửa chữa.`);
      } else {
        await api.patch(`/items/${item.id}/refurbish`);
        nextParts.delete(item.id);
        setRepairNotice(`Đã chuyển ${item.qrCode} vào xưởng sửa chữa.`);
      }
      rememberParts(nextParts);
      await reloadRepair(nextParts);
    } catch (error) {
      setRepairNotice(apiError(error, "Không lưu được trạng thái sửa chữa."));
    }
  }

  async function receiveBroken() {
    try {
      const response = await api.get("/items?limit=40");
      const candidate = (response.data.data ?? []).find((item) => item.status === "INSPECTED" || item.status === "PENDING_INTAKE" || item.status === "READY_FOR_ALLOCATION");
      if (!candidate) {
        setRepairNotice("Không còn thiết bị sẵn sàng để chuyển vào xưởng.");
        return;
      }
      await api.patch(`/items/${candidate.id}/refurbish`);
      setSelectedId(candidate.id);
      await reloadRepair();
      setRepairNotice(`Đã tiếp nhận ${candidate.qrCode} vào cột Đang sửa chữa.`);
    } catch (error) {
      setRepairNotice(apiError(error, "Không tiếp nhận được thiết bị lỗi."));
    }
  }

  async function printWarranty() {
    const item = repairItems.find((row) => row.id === selectedId);
    if (!item) {
      setRepairNotice("Hãy chọn thiết bị trước khi in tem.");
      return;
    }
    try {
      const response = await api.get(`/items/${item.id}/qr-image`, { responseType: "blob" });
      const url = URL.createObjectURL(response.data);
      window.open(url, "_blank", "noopener");
    } catch (error) {
      setRepairNotice(apiError(error, "Không tải được tem QR."));
    }
  }

  const visibleRepair = repairItems.filter((item) => {
    const text = `${item.qrCode} ${item.name} ${item.status}`.toLowerCase();
    return !repairQuery.trim() || text.includes(repairQuery.trim().toLowerCase());
  });
  const selected = repairItems.find((item) => item.id === selectedId) || null;
  const columns = [
    ["wait", "Chờ kiểm tra", "bg-slate-200 text-slate-700"],
    ["repair", "Đang sửa chữa", "bg-blue-100 text-blue-700"],
    ["parts", "Chờ linh kiện", "bg-purple-100 text-purple-700"],
    ["done", "Đã hoàn thành", "bg-teal-100 text-teal-700"],
  ];

  return (
    <>
      <Breadcrumb current="Sửa chữa" />
      <main className="mx-auto max-w-[1540px] px-4 py-5 lg:px-6">
        {/* Top Actions Bar */}
        <div className="flex flex-col justify-between gap-3 pb-3 md:flex-row md:items-center">
          <div className="flex items-center gap-1.5 text-slate-500">
            <span className="cursor-pointer text-xs font-semibold hover:text-blue-600">
              EduShare VN
            </span>
            <MoreHorizontal size={14} />
            <span className="cursor-pointer text-xs font-semibold hover:text-blue-600">
              Kho & Kỹ thuật
            </span>
            <MoreHorizontal size={14} />
            <span className="text-xs font-semibold text-blue-600">
              Quản lý Sửa chữa Thiết bị
            </span>
          </div>
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-teal-700">
              <span className="size-2 animate-pulse rounded-full bg-teal-600"></span>
              <span className="text-xs font-semibold">
                Xưởng Kỹ thuật Trung tâm • Trạm HN-01
              </span>
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col justify-between gap-4 pb-4 pt-2 lg:flex-row lg:items-center">
          <div className="flex max-w-3xl flex-col gap-1">
            <h1 className="font-display text-2xl font-semibold tracking-tight text-slate-900">
              Quản Lý & Điều Phối Sửa Chữa Thiết Bị
            </h1>
            <p className="text-sm text-slate-600">
              Hệ thống Kanban theo dõi chu trình sửa chữa, thay thế linh kiện và
              phục hồi máy tính quyên góp trước khi bàn giao cho học sinh vùng
              cao.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <button type="button" onClick={() => downloadCsv("sua-chua.csv", ["QR", "Tên", "Trạng thái"], visibleRepair.map((item) => [item.qrCode, item.name, item.status]))} className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 border border-slate-200">
              <Download size={18} />
              <span>Xuất báo cáo kỹ thuật</span>
            </button>
            <button type="button" onClick={receiveBroken} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700">
              <PlusCircle size={20} />
              <span>Tiếp nhận thiết bị lỗi</span>
            </button>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 gap-4 pb-6 sm:grid-cols-2 xl:grid-cols-4">
          <Metric
            icon={Monitor}
            label="Tổng thiết bị bảo trì"
            value="48"
            iconColorClass="bg-slate-100 text-slate-600"
          >
            <RefreshCw size={14} className="text-slate-400" /> Toàn bộ luồng xử
            lý tháng này
          </Metric>
          <Metric
            icon={Wrench}
            label="Đang sửa chữa tại xưởng"
            value={String(repairItems.filter((item) => item.status === "REFURBISHING" && !partsWait.has(item.id)).length)}
            colorClass="text-blue-600"
            iconColorClass="bg-blue-100 text-blue-600"
          >
            <Wrench size={14} /> 5 KTV đang thao tác
          </Metric>
          <Metric
            icon={Truck}
            label="Chờ linh kiện đối ứng"
            value="8"
            colorClass="text-purple-700"
            iconColorClass="bg-purple-100 text-purple-700"
          >
            <Truck size={14} /> 3 kiện dự kiến về chiều nay
          </Metric>
          <Metric
            icon={CheckCircle2}
            label="Đã nghiệm thu thành công"
            value="22"
            colorClass="text-teal-700"
            iconColorClass="bg-teal-100 text-teal-700"
          >
            <CheckCircle2 size={14} /> Sẵn sàng xuất kho chuyển giao
          </Metric>
        </div>

        {/* Filters */}
        <div className="mb-4 flex flex-col items-center justify-between gap-3 rounded-xl bg-white p-4 shadow-sm md:flex-row">
          <div className="relative w-full md:w-80">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              className="w-full rounded-lg bg-slate-50 py-2 pl-9 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-blue-100 border border-slate-200"
              value={repairQuery}
              onChange={(event) => setRepairQuery(event.target.value)}
              placeholder="Tìm theo mã QR, tên thiết bị, KTV..."
              type="text"
            />
          </div>
          <div className="flex w-full flex-wrap items-center justify-end gap-3 md:w-auto">
            <select className="cursor-pointer appearance-none rounded-lg bg-slate-50 py-2 pl-3 pr-8 text-sm text-slate-700 outline-none hover:bg-slate-100 border border-slate-200">
              <option>Loại thiết bị: Tất cả</option>
            </select>
            <select className="cursor-pointer appearance-none rounded-lg bg-slate-50 py-2 pl-3 pr-8 text-sm text-slate-700 outline-none hover:bg-slate-100 border border-slate-200">
              <option>Mức độ ưu tiên: Tất cả</option>
            </select>
            <button type="button" onClick={() => setRepairQuery("")} className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 border border-slate-200">
              <SlidersHorizontal size={16} className="text-slate-500" />
              <span>Bộ lọc</span>
            </button>
            <button
              type="button"
              onClick={() => reloadRepair().then(() => setRepairNotice(`Đang có ${visibleRepair.length} thiết bị trong xưởng.`)).catch((error) => setRepairNotice(apiError(error, "Không tải lại được.")))}
              className="rounded-lg bg-slate-50 p-2 text-slate-600 transition-colors hover:bg-slate-100 border border-slate-200"
              title="Làm mới bảng"
            >
              <RefreshCw size={18} />
            </button>
          </div>
        </div>

        {/* Kanban Board & Side Panel */}
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-12">
          {/* KANBAN WORKSPACE */}
          <div className="flex flex-col gap-4 lg:col-span-8">
            <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-2 xl:grid-cols-4">
              {columns.map(([key, title, badge]) => {
                const cards = visibleRepair.filter((item) => columnOf(item) === key);
                return (
                  <div key={key} className="flex min-h-[320px] flex-col gap-2.5 rounded-xl bg-slate-50 p-2.5">
                    <div className="flex items-center justify-between px-1.5 py-1">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-sm font-semibold text-slate-900">{title}</span>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${badge}`}>{cards.length}</span>
                      </div>
                      <button type="button" onClick={() => { const first = cards[0]; if (!first) { setRepairNotice(title + " đang trống."); return; } setSelectedId(first.id); setNote(""); setRepairNotice("Đang mở " + first.qrCode + " trong cột " + title + "."); }} className="rounded p-1 text-slate-400 hover:text-slate-900">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                    {cards.map((item) => (
                      <KanbanCard
                        key={item.id}
                        id={item.qrCode}
                        priority={item.status === "REFURBISHING" ? "Ưu tiên cao" : "Trung bình"}
                        title={item.name}
                        specs={item.category}
                        errors={[item.binLocation || item.warehouse?.name || "Chưa xếp kệ"]}
                        sourceIcon={Wrench}
                        source={item.warehouse?.code || "Kho EduShare"}
                        assigneeInitials="KT"
                        assignee="Xưởng kỹ thuật"
                        time={item.status}
                        selected={selectedId === item.id}
                        active={selectedId === item.id}
                        onClick={() => { setSelectedId(item.id); setNote(""); setDetailOpen(false); }}
                      />
                    ))}
                    {cards.length === 0 && <p className="px-2 text-xs text-slate-400">Chưa có thiết bị.</p>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="sticky top-20 flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm lg:col-span-4 border border-slate-100">
            {/* Header */}
            <div className="flex items-start justify-between pb-3">
              <div className="flex flex-col gap-0.5">
                <h2 className="font-display text-lg font-semibold tracking-tight text-slate-900">
                  Cập nhật tiến độ sửa chữa
                </h2>
                <div className="mt-1 flex items-center gap-2">
                  <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs font-bold text-blue-600">
                    Mã: {selected?.qrCode || "chưa chọn"}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                    <span className="size-1.5 animate-pulse rounded-full bg-blue-600"></span>
                    {selected?.status || "Chưa chọn"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button type="button" onClick={() => selected ? setDetailOpen(true) : setRepairNotice("Hãy chọn một thiết bị trên bảng.")} className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-900">
                  <Maximize2 size={18} />
                </button>
                <button type="button" onClick={() => { setSelectedId(""); setNote(""); setDetailOpen(false); }} className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-900">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Visual & Profile */}
            <div className="flex flex-col gap-3 rounded-xl bg-slate-50 p-3.5">
              <div className="relative h-36 w-full overflow-hidden rounded-lg bg-slate-200">
                <img
                  className="size-full object-cover"
                  src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80"
                  alt="Repair"
                />
                <span className="absolute bottom-2 left-2 rounded bg-slate-900/80 px-2 py-1 text-xs font-semibold text-white backdrop-blur">
                  Ảnh kiểm định tiếp nhận ban đầu
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-slate-900">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-500">
                    Hãng sản xuất
                  </span>
                  <span className="text-sm font-semibold">{selected?.name?.split(" ")[0] || "—"}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-500">
                    Model thiết bị
                  </span>
                  <span className="text-sm font-semibold">{selected?.name || "—"}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-500">
                    Đơn vị tài trợ
                  </span>
                  <span className="text-sm font-medium text-blue-600">
                    {selected?.warehouse?.name || "Chưa có kho"}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-500">
                    Trường đích dự kiến
                  </span>
                  <span className="text-sm font-medium text-teal-700">
                    {selected?.binLocation || "Chưa xếp kệ"}
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              className="flex flex-col gap-3"
              onSubmit={updateRepair}
            >
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-900">
                    Ghi chú kỹ thuật
                  </label>
                  <span className="text-xs font-semibold text-slate-400">
                    Cập nhật 20 phút trước
                  </span>
                </div>
                <textarea
                  className="w-full resize-none rounded-lg bg-white p-3 text-sm leading-relaxed text-slate-900 outline-none transition-all focus:ring-2 focus:ring-blue-100 border border-slate-200"
                  rows="4"
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  placeholder={selected ? `Ghi chú cho ${selected.qrCode}` : "Chọn một thẻ thiết bị trước"}
                ></textarea>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-900">
                  Linh kiện thay thế dự kiến
                </label>
                <div className="flex flex-col gap-1.5 rounded-lg bg-white p-2.5 border border-slate-200">
                  <label className="flex cursor-pointer items-center gap-2.5 rounded p-1 transition-colors hover:bg-slate-50">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="size-4 cursor-pointer accent-blue-600"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-900">
                        Pin Li-ion 4-Cell 58Wh (Dell OEM)
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        Tồn kho xưởng: Còn 6 viên
                      </span>
                    </div>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2.5 rounded p-1 transition-colors hover:bg-slate-50">
                    <input
                      type="checkbox"
                      className="size-4 cursor-pointer accent-blue-600"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm text-slate-900">
                        Nâng cấp RAM DDR4 8GB -&gt; 16GB Kingston
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        Tồn kho xưởng: Còn 18 thanh
                      </span>
                    </div>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2.5 rounded p-1 transition-colors hover:bg-slate-50">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="size-4 cursor-pointer accent-blue-600"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-900">
                        Ổ cứng SSD NVMe 256GB Kingston High-Speed
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        Bảo hành 24 tháng theo quỹ tài trợ
                      </span>
                    </div>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2.5 rounded p-1 transition-colors hover:bg-slate-50">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="size-4 cursor-pointer accent-blue-600"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-900">
                        Cụm Màn hình 15.6 inch FHD IPS
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        Linh kiện rã xác máy kiểm định đạt chuẩn
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-900">
                  Chi phí sửa chữa (VNĐ)
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded-lg bg-white px-3 py-2.5 text-base font-bold text-slate-900 outline-none transition-all focus:ring-2 focus:ring-blue-100 border border-slate-200"
                    type="text"
                    defaultValue="1.450.000 đ"
                  />
                  <Banknote
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                </div>
                <span className="text-[11px] text-slate-500">
                  Nguồn chi: Quỹ bảo trợ thiết bị công nghệ EduShare - Đối ứng
                  nhà tài trợ
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-900">
                  Trạng thái chuyển tiếp
                </label>
                <select value={nextStatus} onChange={(event) => setNextStatus(event.target.value)} className="cursor-pointer appearance-none rounded-lg bg-white px-3 py-2.5 text-sm font-medium text-slate-900 outline-none transition-all focus:ring-2 focus:ring-blue-100 border border-slate-200">
                  <option>Đang sửa chữa (Xưởng Kỹ thuật)</option>
                  <option>Chờ linh kiện đối ứng</option>
                  <option>Đã hoàn thành (Chuyển sang kiểm định QA)</option>
                  <option>Chuyển kho rã xác phụ tùng</option>
                </select>
              </div>

              {repairNotice && <p className="rounded-lg bg-blue-50 px-3 py-2 text-sm text-blue-800">{repairNotice}</p>}
              <div className="mt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-blue-700 active:scale-[0.99]"
                >
                  <RefreshCw size={20} />
                  <span>Cập nhật trạng thái</span>
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => { if (!selected) { setRepairNotice("Hãy chọn thiết bị trước khi lưu nháp."); return; } localStorage.setItem("edushare_repair_draft", JSON.stringify({ status: nextStatus, note, qr: selected.qrCode })); setRepairNotice(`Đã lưu nháp ${selected.qrCode}. Bấm Cập nhật trạng thái để ghi database.`); }}
                    className="flex items-center justify-center gap-1.5 rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 border border-slate-200"
                  >
                    <Save size={16} className="text-slate-500" />
                    <span>Lưu nháp</span>
                  </button>
                  <button
                    type="button"
                    onClick={printWarranty}
                    className="flex items-center justify-center gap-1.5 rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 border border-slate-200"
                  >
                    <Printer size={16} className="text-blue-600" />
                    <span>In tem bảo hành QR</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {detailOpen && selected && (
          <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/40 p-4">
            <article className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
              <div className="flex justify-between"><h2 className="font-display text-xl font-semibold">{selected.name}</h2><button type="button" onClick={() => setDetailOpen(false)}>×</button></div>
              <p className="mt-2 font-mono text-sm text-blue-700">{selected.qrCode}</p>
              <p className="mt-3 text-sm text-slate-600">Trạng thái: {selected.status}</p>
              <p className="text-sm text-slate-600">Kho: {selected.warehouse?.name || "Chưa có kho"}</p>
              <p className="text-sm text-slate-600">Kệ: {selected.binLocation || "Chưa xếp"}</p>
              <p className="mt-3 text-sm text-slate-700">{note || "Chưa có ghi chú kỹ thuật."}</p>
            </article>
          </div>
        )}
      </main>
    </>
  );
}
