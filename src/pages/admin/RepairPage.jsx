import { useState } from "react";
import { Breadcrumb } from "../../components/system-ui";
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

function Metric({ icon: Icon, label, value, children, colorClass, iconColorClass }) {
  return (
    <article className="flex items-start justify-between rounded-xl bg-white p-5 shadow-sm">
      <div className="flex flex-col">
        <span
          className={`text-[10px] font-semibold tracking-wider uppercase ${colorClass ? colorClass : "text-slate-500"}`}
        >
          {label}
        </span>
        <div className="mt-1 flex items-baseline gap-2">
          <span
            className={`font-display text-3xl leading-none font-semibold ${colorClass ? colorClass : "text-slate-900"}`}
          >
            {value}
          </span>
          <span className="text-sm font-medium text-slate-500">máy</span>
        </div>
        <div className={`mt-2 flex items-center gap-1 text-xs ${colorClass ? colorClass : "text-slate-600"}`}>
          {children}
        </div>
      </div>
      <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${iconColorClass}`}>
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
    className={`flex cursor-pointer flex-col gap-2 rounded-xl p-3 transition-all ${selected ? "bg-blue-50 shadow-md ring-2 ring-blue-600" : "bg-white shadow-sm hover:shadow-md"}`}
  >
    {active && (
      <div className="absolute -top-2 -right-2 flex items-center gap-1 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-semibold text-white">
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
        {priority === "Khẩn cấp" && <span className="size-1.5 rounded-full bg-rose-500"></span>}
        {priority}
      </span>
    </div>
    <div>
      <h2
        className={`font-display text-sm leading-snug font-semibold ${selected ? "text-slate-900" : "text-slate-900 hover:text-blue-600"}`}
      >
        {title}
      </h2>
      <span className="text-xs text-slate-500">{specs}</span>
    </div>
    <div className="flex flex-wrap gap-1">
      {errors.map((err, i) => (
        <span key={i} className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
          {err}
        </span>
      ))}
    </div>
    <div className="flex items-center gap-1 text-xs text-slate-500">
      <SourceIcon size={14} className={selected ? "text-blue-600" : ""} />
      <span>{source}</span>
    </div>
    <div
      className={`mt-1 flex items-center justify-between rounded-b-xl pt-2 ${selected ? "-mx-3 -mb-3 bg-white/60 p-3" : "bg-white"}`}
    >
      <div className="flex items-center gap-1.5">
        <div className="flex size-6 items-center justify-center rounded-full bg-blue-100 text-[10px] font-semibold text-blue-700">
          {assigneeInitials}
        </div>
        <span className="text-xs font-medium text-slate-900">{assignee}</span>
      </div>
      <span className={`text-xs ${selected ? "font-semibold text-blue-600" : "text-slate-500"}`}>{time}</span>
    </div>
  </div>
);

export default function RepairPage() {
  const [selectedCard, setSelectedCard] = useState("LT-2024-88");

  return (
    <>
      <Breadcrumb current="Sửa chữa" />
      <main className="mx-auto max-w-[1540px] px-4 py-5 lg:px-6">
        {/* Top Actions Bar */}
        <div className="flex flex-col justify-between gap-3 pb-3 md:flex-row md:items-center">
          <div className="flex items-center gap-1.5 text-slate-500">
            <span className="cursor-pointer text-xs font-semibold hover:text-blue-600">EduShare VN</span>
            <MoreHorizontal size={14} />
            <span className="cursor-pointer text-xs font-semibold hover:text-blue-600">Kho & Kỹ thuật</span>
            <MoreHorizontal size={14} />
            <span className="text-xs font-semibold text-blue-600">Quản lý Sửa chữa Thiết bị</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-teal-700">
              <span className="size-2 animate-pulse rounded-full bg-teal-600"></span>
              <span className="text-xs font-semibold">Xưởng Kỹ thuật Trung tâm • Trạm HN-01</span>
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col justify-between gap-4 pt-2 pb-4 lg:flex-row lg:items-center">
          <div className="flex max-w-3xl flex-col gap-1">
            <h1 className="font-display text-2xl font-semibold tracking-tight text-slate-900">
              Quản Lý & Điều Phối Sửa Chữa Thiết Bị
            </h1>
            <p className="text-sm text-slate-600">
              Hệ thống Kanban theo dõi chu trình sửa chữa, thay thế linh kiện và phục hồi máy tính quyên góp trước khi
              bàn giao cho học sinh vùng cao.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50">
              <Download size={18} />
              <span>Xuất báo cáo kỹ thuật</span>
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700">
              <PlusCircle size={20} />
              <span>Tiếp nhận thiết bị lỗi</span>
            </button>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 gap-4 pb-6 sm:grid-cols-2 xl:grid-cols-4">
          <Metric icon={Monitor} label="Tổng thiết bị bảo trì" value="48" iconColorClass="bg-slate-100 text-slate-600">
            <RefreshCw size={14} className="text-slate-400" /> Toàn bộ luồng xử lý tháng này
          </Metric>
          <Metric
            icon={Wrench}
            label="Đang sửa chữa tại xưởng"
            value="14"
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
            <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400" size={18} />
            <input
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pr-4 pl-9 text-sm text-slate-900 placeholder-slate-400 transition-all outline-none focus:bg-white focus:ring-2 focus:ring-blue-100"
              placeholder="Tìm theo mã QR, tên thiết bị, KTV..."
              type="text"
            />
          </div>
          <div className="flex w-full flex-wrap items-center justify-end gap-3 md:w-auto">
            <select className="cursor-pointer appearance-none rounded-lg border border-slate-200 bg-slate-50 py-2 pr-8 pl-3 text-sm text-slate-700 outline-none hover:bg-slate-100">
              <option>Loại thiết bị: Tất cả</option>
            </select>
            <select className="cursor-pointer appearance-none rounded-lg border border-slate-200 bg-slate-50 py-2 pr-8 pl-3 text-sm text-slate-700 outline-none hover:bg-slate-100">
              <option>Mức độ ưu tiên: Tất cả</option>
            </select>
            <button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100">
              <SlidersHorizontal size={16} className="text-slate-500" />
              <span>Bộ lọc</span>
            </button>
            <button
              className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-600 transition-colors hover:bg-slate-100"
              title="Làm mới bảng"
            >
              <RefreshCw size={18} />
            </button>
          </div>
        </div>

        {/* Kanban Board & Side Panel */}
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-12">
          {/* Kanban Workspace */}
          <div className="flex flex-col gap-4 lg:col-span-8">
            <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-2 xl:grid-cols-4">
              {/* Column 1 */}
              <div className="flex min-h-[620px] flex-col gap-2.5 rounded-xl bg-slate-50 p-2.5">
                <div className="flex items-center justify-between px-1.5 py-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm font-semibold text-slate-900">Chờ kiểm tra</span>
                    <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700">
                      12
                    </span>
                  </div>
                  <button className="rounded p-1 text-slate-400 hover:text-slate-900">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
                <KanbanCard
                  id="LT-2024-95"
                  priority="Khẩn cấp"
                  title="ThinkPad T480s"
                  specs="Intel Core i5-8350U • 8GB RAM"
                  errors={["Lỗi ổ cứng SSD"]}
                  sourceIcon={Building2}
                  source="Viettel Solutions"
                  assigneeInitials="LM"
                  assignee="Lê Minh"
                  time="1 ngày trước"
                />
                <KanbanCard
                  id="PC-2024-42"
                  priority="Trung bình"
                  title="PC HP ProDesk 400 G6"
                  specs="Core i3 9100 • 4GB • HDD 500GB"
                  errors={["Chết nguồn PSU"]}
                  sourceIcon={Heart}
                  source="FPT Telecom"
                  assigneeInitials="QA"
                  assignee="Quốc Anh"
                  time="3 ngày trước"
                />
              </div>

              {/* Column 2 */}
              <div className="flex min-h-[620px] flex-col gap-2.5 rounded-xl bg-slate-50 p-2.5">
                <div className="flex items-center justify-between px-1.5 py-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm font-semibold text-slate-900">Đang sửa chữa</span>
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">14</span>
                  </div>
                  <button className="rounded p-1 text-slate-400 hover:text-slate-900">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
                <div className="relative">
                  <KanbanCard
                    id="LT-2024-88"
                    priority="Ưu tiên cao"
                    title="Laptop Dell Latitude 5520"
                    specs="Intel Core i5 11th Gen • 8GB RAM"
                    errors={["Hỏng màn hình", "Chai pin (64%)"]}
                    sourceIcon={ShieldCheck}
                    source="Quyên góp từ: Tập đoàn VNPT"
                    assigneeInitials="TH"
                    assignee="KTV Trần Hùng (Lead)"
                    time="Đang xử lý"
                    selected
                    active
                  />
                </div>
                <KanbanCard
                  id="TB-2024-19"
                  priority="Trung bình"
                  title="iPad Gen 9 (64GB Wifi)"
                  specs='A13 Bionic • Màn Retina 10.2"'
                  errors={["Liệt cảm ứng mép phải"]}
                  sourceIcon={Building2}
                  source="Cá nhân: Trần Kim Ngân"
                  assigneeInitials="LM"
                  assignee="Lê Minh"
                  time="2 ngày trước"
                />
              </div>

              {/* Column 3 */}
              <div className="flex min-h-[620px] flex-col gap-2.5 rounded-xl bg-slate-50 p-2.5">
                <div className="flex items-center justify-between px-1.5 py-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm font-semibold text-slate-900">Chờ linh kiện</span>
                    <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-semibold text-purple-700">
                      8
                    </span>
                  </div>
                  <button className="rounded p-1 text-slate-400 hover:text-slate-900">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
                <KanbanCard
                  id="LT-2024-51"
                  priority="Ưu tiên cao"
                  title="ThinkPad X1 Carbon Gen 6"
                  specs="Core i7 8650U • 16GB RAM"
                  errors={["Chờ cụm bàn phím US"]}
                  sourceIcon={Building2}
                  source="MB Bank Hà Nội"
                  assigneeInitials="TH"
                  assignee="Trần Hùng"
                  time="4 ngày trước"
                />
              </div>

              {/* Column 4 */}
              <div className="flex min-h-[620px] flex-col gap-2.5 rounded-xl bg-slate-50 p-2.5">
                <div className="flex items-center justify-between px-1.5 py-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm font-semibold text-slate-900">Đã hoàn thành</span>
                    <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs font-semibold text-teal-700">22</span>
                  </div>
                  <button className="rounded p-1 text-slate-400 hover:text-slate-900">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
                <KanbanCard
                  id="LT-2024-34"
                  priority="Đạt QA 100%"
                  title="HP EliteBook 840 G5"
                  specs="Core i5 8250U • Đã gắn SSD 256GB"
                  errors={["Đã thay Cell Pin & Sạc"]}
                  sourceIcon={GraduationCap}
                  source="Giao: THCS Tủa Chùa"
                  assigneeInitials="QA"
                  assignee="Quốc Anh"
                  time="Sẵn sàng xuất"
                />
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="sticky top-20 flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm lg:col-span-4">
            {/* Header */}
            <div className="flex items-start justify-between pb-3">
              <div className="flex flex-col gap-0.5">
                <h2 className="font-display text-lg font-semibold tracking-tight text-slate-900">
                  Cập nhật tiến độ sửa chữa
                </h2>
                <div className="mt-1 flex items-center gap-2">
                  <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs font-bold text-blue-600">
                    Mã: #LT-2024-88
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                    <span className="size-1.5 animate-pulse rounded-full bg-blue-600"></span>
                    Đang sửa chữa
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-900">
                  <Maximize2 size={18} />
                </button>
                <button className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-900">
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
                  <span className="text-xs font-semibold text-slate-500">Hãng sản xuất</span>
                  <span className="text-sm font-semibold">Dell Inc.</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-500">Model thiết bị</span>
                  <span className="text-sm font-semibold">Latitude 5520</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-500">Đơn vị tài trợ</span>
                  <span className="text-sm font-medium text-blue-600">VNPT trao tặng</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-500">Trường đích dự kiến</span>
                  <span className="text-sm font-medium text-teal-700">THCS Trà Dơn</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-900">Ghi chú kỹ thuật</label>
                  <span className="text-xs font-semibold text-slate-400">Cập nhật 20 phút trước</span>
                </div>
                <textarea
                  className="w-full resize-none rounded-lg border border-slate-200 bg-white p-3 text-sm leading-relaxed text-slate-900 transition-all outline-none focus:ring-2 focus:ring-blue-100"
                  rows="4"
                  defaultValue="Đã tháo máy vệ sinh tra keo tản nhiệt Noctua. Kiểm tra mainboard điện áp bình thường. Màn hình IPS bị đốm sọc panel cần thay màn mới. Pin còn 64% dung lượng khuyến nghị thay cell mới trước khi bàn giao điểm trường Mèo Vạc."
                ></textarea>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-900">Linh kiện thay thế dự kiến</label>
                <div className="flex flex-col gap-1.5 rounded-lg border border-slate-200 bg-white p-2.5">
                  <label className="flex cursor-pointer items-center gap-2.5 rounded p-1 transition-colors hover:bg-slate-50">
                    <input type="checkbox" defaultChecked className="size-4 cursor-pointer accent-blue-600" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-900">Pin Li-ion 4-Cell 58Wh (Dell OEM)</span>
                      <span className="text-xs font-semibold text-slate-500">Tồn kho xưởng: Còn 6 viên</span>
                    </div>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2.5 rounded p-1 transition-colors hover:bg-slate-50">
                    <input type="checkbox" className="size-4 cursor-pointer accent-blue-600" />
                    <div className="flex flex-col">
                      <span className="text-sm text-slate-900">Nâng cấp RAM DDR4 8GB -&gt; 16GB Kingston</span>
                      <span className="text-xs font-semibold text-slate-500">Tồn kho xưởng: Còn 18 thanh</span>
                    </div>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2.5 rounded p-1 transition-colors hover:bg-slate-50">
                    <input type="checkbox" defaultChecked className="size-4 cursor-pointer accent-blue-600" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-900">
                        Ổ cứng SSD NVMe 256GB Kingston High-Speed
                      </span>
                      <span className="text-xs font-semibold text-slate-500">Bảo hành 24 tháng theo quỹ tài trợ</span>
                    </div>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2.5 rounded p-1 transition-colors hover:bg-slate-50">
                    <input type="checkbox" defaultChecked className="size-4 cursor-pointer accent-blue-600" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-900">Cụm Màn hình 15.6 inch FHD IPS</span>
                      <span className="text-xs font-semibold text-slate-500">
                        Linh kiện rã xác máy kiểm định đạt chuẩn
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-900">Chi phí sửa chữa (VNĐ)</label>
                <div className="relative">
                  <input
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-base font-bold text-slate-900 transition-all outline-none focus:ring-2 focus:ring-blue-100"
                    type="text"
                    defaultValue="1.450.000 đ"
                  />
                  <Banknote className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400" size={18} />
                </div>
                <span className="text-[11px] text-slate-500">
                  Nguồn chi: Quỹ bảo trợ thiết bị công nghệ EduShare - Đối ứng nhà tài trợ
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-900">Trạng thái chuyển tiếp</label>
                <select className="cursor-pointer appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-900 transition-all outline-none focus:ring-2 focus:ring-blue-100">
                  <option defaultValue>Đang sửa chữa (Xưởng Kỹ thuật)</option>
                  <option>Chờ linh kiện đối ứng</option>
                  <option>Đã hoàn thành (Chuyển sang kiểm định QA)</option>
                  <option>Chuyển kho rã xác phụ tùng</option>
                </select>
              </div>

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
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    <Save size={16} className="text-slate-500" />
                    <span>Lưu nháp</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    <Printer size={16} className="text-blue-600" />
                    <span>In tem bảo hành QR</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
