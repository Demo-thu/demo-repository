import React, { useState } from "react";
import { Breadcrumb } from "../../components/system-ui";
import {
  ChevronRight,
  Download,
  Upload,
  UserPlus,
  TrendingUp,
  Users,
  UserCheck,
  AlertTriangle,
  Clock,
  Search,
  MapPin,
  Wrench,
  SlidersHorizontal,
  RefreshCw,
  Route,
  Eye,
  RefreshCcw,
  Check,
  X,
  Badge,
  School,
  Truck,
  ChevronLeft,
  Network,
  Package,
  History,
  ChevronDown,
  QrCode,
  Server,
  Box,
  Warehouse,
  Printer,
  Loader2,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

// KPICard Component
const KPICard = ({
  title,
  value,
  unit,
  icon: Icon,
  bgClass,
  textClass,
  iconBgClass,
  iconTextClass,
  trendIcon: TrendIcon,
  trendText,
  trendDesc,
  trendColorClass,
  badgeText,
  badgeColorClass,
}) => (
  <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white p-6 shadow-sm">
    <div className="flex items-start justify-between">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-slate-600">{title}</span>
        <div className="mt-1 flex items-baseline gap-1">
          <span className={`font-display text-4xl font-bold ${textClass}`}>{value}</span>
          <span className={`text-xs ${textClass} font-medium`}>{unit}</span>
        </div>
      </div>
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-105 ${iconBgClass} ${iconTextClass}`}
      >
        <Icon className="h-6 w-6 text-[26px]" />
      </div>
    </div>

    <div className="mt-4 flex items-center justify-between pt-2">
      {TrendIcon && (
        <span className={`inline-flex items-center text-xs font-semibold ${trendColorClass}`}>
          <TrendIcon className="mr-0.5 h-4 w-4 text-[16px]" />
          {trendText}
        </span>
      )}
      {trendDesc && <span className="mr-2 truncate text-xs text-slate-600">{trendDesc}</span>}
      {badgeText && (
        <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${badgeColorClass}`}>
          {badgeText}
        </span>
      )}
    </div>
  </div>
);

const InventoryRow = ({ item, isSelected, onSelect, onOpenDetails }) => {
  return (
    <tr
      className={`group cursor-pointer transition-colors ${isSelected ? "bg-slate-200/40 hover:bg-slate-200" : item.isAlert ? "bg-rose-100/20 hover:bg-rose-100/40" : "hover:bg-slate-50"}`}
      onClick={() => onSelect(item.id)}
    >
      <td className="p-4" onClick={(e) => e.stopPropagation()}>
        <input
          checked={isSelected}
          onChange={() => onSelect(item.id)}
          className="accent-primary h-4 w-4 cursor-pointer rounded"
          type="checkbox"
        />
      </td>
      <td className="px-2 py-4">
        <span className="inline-flex items-center gap-1 font-mono text-sm font-semibold text-blue-700 hover:underline">
          <QrCode className="h-4 w-4 text-[16px]" />
          {item.id}
        </span>
      </td>
      <td className="px-4 py-4">
        <div className="flex flex-col">
          <span className="font-medium text-slate-900">{item.name}</span>
          <span className="text-xs text-slate-600">{item.desc}</span>
        </div>
      </td>
      <td className="px-2 py-4">
        <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">{item.category}</span>
      </td>
      <td className="px-2 py-4">
        <span className={`rounded px-2 py-0.5 text-xs font-semibold ${item.conditionColorClass}`}>
          {item.condition}
        </span>
      </td>
      <td className="px-4 py-4">
        <div className="inline-flex items-center gap-1.5 rounded bg-slate-50 px-2.5 py-1 font-mono text-sm text-slate-900">
          <item.locationIcon className="h-4 w-4 text-[15px] text-blue-700" />
          <span>{item.location}</span>
        </div>
      </td>
      <td className={`px-2 py-4 font-mono text-sm font-medium ${item.isAlert ? "text-rose-600" : "text-slate-900"}`}>
        {item.date}
      </td>
      <td className="px-2 py-4">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${item.statusColorClass}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${item.statusDotClass}`}></span>
          {item.status}
        </span>
      </td>
      <td className="px-4 py-4 text-right" onClick={(e) => e.stopPropagation()}>
        <div className="inline-flex items-center gap-1">
          <button
            className="rounded p-1.5 text-slate-500 transition-colors hover:bg-white hover:text-blue-700"
            onClick={() => {
              onSelect(item.id);
              onOpenDetails();
            }}
            title="Chỉnh sửa vị trí lưu trữ"
          >
            <MapPin className="h-5 w-5 text-[18px]" />
          </button>
          <button
            className="rounded p-1.5 text-slate-500 transition-colors hover:bg-white hover:text-blue-700"
            onClick={() => {
              onSelect(item.id);
              onOpenDetails();
            }}
            title="Mở thông tin chi tiết"
          >
            <Eye className="h-5 w-5 text-[18px]" />
          </button>
        </div>
      </td>
    </tr>
  );
};

const inventoryItems = [
  {
    id: "QR-LT-8821",
    name: "Laptop Dell Latitude 5490",
    desc: "Core i5-8350U • 8GB • 256GB SSD",
    category: "Thiết bị số",
    condition: "Mới 95%",
    conditionColorClass: "bg-teal-100 text-teal-900",
    location: "Kho HN - Khu A - Kệ 02",
    locationIcon: Server,
    date: "15/10/2024",
    status: "Sẵn sàng xuất",
    statusColorClass: "bg-teal-100 text-teal-900",
    statusDotClass: "bg-teal-600",
    isAlert: false,
  },
  {
    id: "QR-TB-9104",
    name: "Apple iPad Gen 9",
    desc: "64GB Wi-Fi • Silver • iOS 17",
    category: "Máy tính bảng",
    condition: "Mới 100%",
    conditionColorClass: "bg-teal-100 text-teal-900",
    location: "Kho HN - Khu B - Kệ 05",
    locationIcon: Server,
    date: "18/10/2024",
    status: "Đã gán lệnh điều phối",
    statusColorClass: "bg-slate-200 text-blue-700",
    statusDotClass: "bg-blue-600",
    isAlert: false,
  },
  {
    id: "QR-PC-4420",
    name: "HP ProDesk 400 G6 Microtower",
    desc: 'Core i3-9100 • Kèm Màn hình HP 21.5"',
    category: "Máy bàn PC",
    condition: "Cũ - Tốt 85%",
    conditionColorClass: "bg-slate-100 text-slate-600",
    location: "Trạm ĐN - Khu C - Kệ 01",
    locationIcon: Server,
    date: "20/10/2024",
    status: "Đang bảo trì / Kiểm định",
    statusColorClass: "bg-slate-200 text-slate-900",
    statusDotClass: "bg-slate-500",
    isAlert: false,
  },
  {
    id: "QR-SGK-1123",
    name: "Trọn bộ SGK Cánh Diều Lớp 6-9",
    desc: "Lô 50 bộ • Đã đóng kiện màng bọc",
    category: "Sách giáo khoa",
    condition: "Mới 100%",
    conditionColorClass: "bg-teal-100 text-teal-900",
    location: "Kho HN - Khu D - Pallet 12",
    locationIcon: Box,
    date: "12/09/2024 (Lâu ngày)",
    status: "Sẵn sàng xuất",
    statusColorClass: "bg-teal-100 text-teal-900",
    statusDotClass: "bg-teal-600",
    isAlert: true,
  },
  {
    id: "QR-LT-5542",
    name: "Lenovo ThinkPad T480",
    desc: "Core i7-8550U • 16GB • Cần thay SSD",
    category: "Thiết bị số",
    condition: "Cần nâng cấp SSD",
    conditionColorClass: "bg-rose-100 text-rose-900",
    location: "Kho HN - Khu A - Kệ 08",
    locationIcon: Server,
    date: "22/10/2024",
    status: "Đang bảo trì / Kiểm định",
    statusColorClass: "bg-slate-200 text-slate-900",
    statusDotClass: "bg-slate-500",
    isAlert: false,
  },
  {
    id: "QR-TB-3319",
    name: "Samsung Galaxy Tab A8 LTE",
    desc: "64GB 4G • Kèm sạc zin & ốp chống sốc",
    category: "Máy tính bảng",
    condition: "Mới 90%",
    conditionColorClass: "bg-teal-100 text-teal-900",
    location: "Kho HN - Khu B - Kệ 02",
    locationIcon: Server,
    date: "24/10/2024",
    status: "Sẵn sàng xuất",
    statusColorClass: "bg-teal-100 text-teal-900",
    statusDotClass: "bg-teal-600",
    isAlert: false,
  },
];

export default function InventoryAndCoordinatingItemsPage() {
  const [toast, setToast] = useState({
    visible: false,
    type: "",
    title: "",
    message: "",
  });
  const [selectedDevice, setSelectedDevice] = useState(inventoryItems[0].id);
  const [slideOverOpen, setSlideOverOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const showToast = (type, title, message) => {
    setToast({ visible: true, type, title, message });
    setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), 3000);
  };

  const handleSelectDevice = (qrCode) => {
    setSelectedDevice(qrCode);
  };

  const handleOpenDetails = () => {
    setSlideOverOpen(true);
  };

  const handleSaveLocation = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      showToast("success", "Đã lưu thành công", "Vị trí lưu trữ đã được cập nhật.");
      setSlideOverOpen(false);
    }, 2000);
  };

  const activeItem = inventoryItems.find((item) => item.id === selectedDevice) || inventoryItems[0];

  return (
    <>
      <Breadcrumb current="Tồn kho thiết bị" />
      <div className="flex w-full flex-col pb-16">
        {/* Breadcrumb & Header Title */}
        <div className="flex flex-col justify-between gap-4 py-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-xs font-medium tracking-wide text-slate-500">
              <span>EduShare VN</span>
              <ChevronRight className="h-4 w-4 text-[14px]" />
              <span>Kho & Kỹ thuật</span>
              <ChevronRight className="h-4 w-4 text-[14px]" />
              <span className="font-semibold text-blue-700">Tồn kho thiết bị</span>
            </div>
            <h1 className="font-display text-3xl font-semibold text-slate-900">
              Quản Lý Tồn Kho Thiết Bị & Điều Phối Vật Phẩm
            </h1>
            <p className="max-w-3xl text-sm text-slate-600">
              Kiểm soát số lượng hiện vật giáo dục, vị trí lưu trữ tại các tổng kho và tình trạng sẵn sàng điều phối chi
              viện vùng cao.
            </p>
          </div>
          {/* Top Action Pills */}
          <div className="flex shrink-0 items-center gap-2 self-start md:self-auto">
            <button className="inline-flex items-center gap-1 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition-all hover:bg-slate-200">
              <HelpCircle className="h-5 w-5 text-[18px] text-blue-700" />
              <span>Xuất báo cáo Excel / PDF</span>
            </button>
            <button className="inline-flex items-center gap-1 rounded-lg bg-slate-200 px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-slate-300">
              <RefreshCcw className="h-5 w-5 text-[18px]" />
              <span>Đồng bộ quét RFID/Barcode</span>
            </button>
          </div>
        </div>

        {/* Top Kpi Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <KPICard
            title="Tổng thiết bị đang lưu kho"
            value="15,240"
            unit="thiết bị"
            icon={Package}
            bgClass="bg-white"
            textClass="text-slate-900"
            iconBgClass="bg-slate-200"
            iconTextClass="text-blue-700"
            trendIcon={TrendingUp}
            trendText="+5.8%"
            trendDesc="+850 thiết bị mới nhập tuần này"
            trendColorClass="text-teal-700"
          />
          <KPICard
            title="Sẵn sàng phân phối"
            value="12,000"
            unit="thiết bị"
            icon={Truck}
            bgClass="bg-white"
            textClass="text-slate-900"
            iconBgClass="bg-teal-100"
            iconTextClass="text-teal-700"
            trendDesc="Chuẩn kiểm định Grade A & B sẵn sàng"
            badgeText="78.7% tổng kho"
            badgeColorClass="bg-teal-100 text-teal-900"
          />
          <KPICard
            title="Cảnh báo tồn kho lâu ngày"
            value="340"
            unit="thiết bị"
            icon={History}
            bgClass="bg-white"
            textClass="text-rose-600"
            iconBgClass="bg-rose-100"
            iconTextClass="text-rose-900"
            trendDesc="&gt; 60 ngày chưa xuất hoặc cần tái kiểm định"
            badgeText="Ưu tiên phân bổ ngay"
            badgeColorClass="bg-rose-100 text-rose-900"
          />
        </div>

        {/* Toolbar & Filters */}
        <div className="mb-6 flex flex-col items-stretch justify-between gap-4 rounded-xl bg-white p-4 shadow-sm lg:flex-row lg:items-center">
          <div className="relative max-w-md flex-1">
            <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-[20px] text-slate-600" />
            <input
              className="w-full rounded-lg bg-slate-50 py-2 pr-12 pl-10 text-sm text-slate-900 transition-all outline-none focus:bg-white focus:ring-2 focus:ring-blue-100"
              id="inventory-search"
              placeholder="Tìm theo Mã QR, Tên thiết bị, số serial, mã lô..."
              type="text"
            />
            <span className="absolute top-1/2 right-3 -translate-y-1/2 rounded bg-slate-200 px-1.5 py-0.5 font-mono text-xs font-medium text-slate-500">
              ⌘K
            </span>
          </div>
          <div className="flex flex-1 flex-wrap items-center gap-2">
            <div className="relative">
              <select className="cursor-pointer appearance-none rounded-lg bg-slate-50 py-2 pr-8 pl-3 text-sm text-slate-900 transition-colors outline-none hover:bg-slate-100">
                <option value="">Tất cả các kho</option>
                <option value="hn">Tổng Kho Kỹ thuật HN</option>
                <option value="dn">Trạm Tiếp vận Đà Nẵng</option>
                <option value="hcm">Kho Trung chuyển TP.HCM</option>
                <option value="tb">Kho Vệ tinh Tây Bắc</option>
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 text-[18px] text-slate-500" />
            </div>
            <div className="relative">
              <select className="cursor-pointer appearance-none rounded-lg bg-slate-50 py-2 pr-8 pl-3 text-sm text-slate-900 transition-colors outline-none hover:bg-slate-100">
                <option value="">Tất cả loại thiết bị</option>
                <option value="laptop">Laptop giáo dục</option>
                <option value="pc">Máy tính để bàn PC</option>
                <option value="tablet">Máy tính bảng Tablet</option>
                <option value="sgk">Sách giáo khoa & Nghe nhìn</option>
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 text-[18px] text-slate-500" />
            </div>
            <div className="relative">
              <select className="cursor-pointer appearance-none rounded-lg bg-slate-50 py-2 pr-8 pl-3 text-sm text-slate-900 transition-colors outline-none hover:bg-slate-100">
                <option value="">Tất cả tình trạng</option>
                <option value="new">Mới 100%</option>
                <option value="good">Cũ - Tốt (&gt;90%)</option>
                <option value="upgrade">Cần nâng cấp/sửa chữa</option>
                <option value="pending">Chờ thanh lý</option>
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 text-[18px] text-slate-500" />
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button className="inline-flex items-center gap-1 rounded-lg bg-slate-200 px-4 py-2 text-sm font-medium font-semibold text-blue-700 shadow-sm transition-all hover:bg-slate-300">
              <Download className="h-5 w-5 text-[18px]" />
              <span>Nhập kho (Stock In)</span>
            </button>
            <button className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium font-semibold text-white shadow-sm transition-all hover:bg-blue-700">
              <Upload className="h-5 w-5 text-[18px]" />
              <span>Xuất kho (Stock Out)</span>
            </button>
          </div>
        </div>

        {/* Main Data Section & Slide-over Workspace */}
        <div className="relative flex items-start gap-6">
          {/* Data Table Container */}
          <div className="flex flex-1 flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300">
            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-xs font-medium tracking-wider text-slate-500 uppercase">
                    <th className="w-10 p-4">
                      <input className="accent-primary h-4 w-4 cursor-pointer rounded" type="checkbox" />
                    </th>
                    <th className="px-2 py-4">Mã QR</th>
                    <th className="px-4 py-4">Tên thiết bị / Vật phẩm</th>
                    <th className="px-2 py-4">Phân loại</th>
                    <th className="px-2 py-4">Tình trạng</th>
                    <th className="px-4 py-4">Vị trí lưu trữ</th>
                    <th className="px-2 py-4">Ngày nhập kho</th>
                    <th className="px-2 py-4">Trạng thái</th>
                    <th className="px-4 py-4 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {inventoryItems.map((item) => (
                    <InventoryRow
                      key={item.id}
                      item={item}
                      isSelected={selectedDevice === item.id}
                      onSelect={handleSelectDevice}
                      onOpenDetails={handleOpenDetails}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-100 bg-slate-50 p-4 sm:flex-row">
              <span className="text-xs text-slate-600">
                Hiển thị <span className="font-semibold text-slate-900">1 - 6</span> của{" "}
                <span className="font-semibold text-slate-900">15,240</span> thiết bị
              </span>
              <div className="flex items-center gap-1">
                <button className="rounded border border-slate-200 bg-white p-1.5 text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-900 disabled:opacity-50">
                  <ChevronLeft className="h-5 w-5 text-[18px]" />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 font-mono text-sm font-semibold text-white">
                  1
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded border border-slate-200 bg-white font-mono text-sm text-slate-700 transition-colors hover:bg-slate-50">
                  2
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded border border-slate-200 bg-white font-mono text-sm text-slate-700 transition-colors hover:bg-slate-50">
                  3
                </button>
                <span className="px-1 font-mono text-sm text-slate-500">...</span>
                <button className="flex h-8 w-8 items-center justify-center rounded border border-slate-200 bg-white font-mono text-sm text-slate-700 transition-colors hover:bg-slate-50">
                  254
                </button>
                <button className="rounded border border-slate-200 bg-white p-1.5 text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900">
                  <ChevronRight className="h-5 w-5 text-[18px]" />
                </button>
              </div>
            </div>
          </div>

          {/* SLIDE-OVER PANEL: DETAIL & LOCATION UPDATE */}
          {slideOverOpen && (
            <div className="flex w-[390px] shrink-0 flex-col gap-4 rounded-xl border border-slate-100 bg-white p-6 shadow-md transition-all">
              {/* Panel Header */}
              <div className="flex items-center justify-between pb-1">
                <div className="flex flex-col">
                  <span className="font-display text-base font-bold font-semibold text-slate-900">
                    Chi tiết thiết bị & Vị trí
                  </span>
                  <span className="font-mono text-sm font-semibold text-blue-700">#{activeItem.id}</span>
                </div>
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100"
                  onClick={() => setSlideOverOpen(false)}
                >
                  <X className="h-5 w-5 text-[20px]" />
                </button>
              </div>

              {/* Upper section: Device Image, QR Code, Spec Sheet */}
              <div className="flex flex-col gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="grid grid-cols-2 items-center gap-2">
                  <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-200">
                    <img
                      className="h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Device"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-900/60 to-transparent p-2">
                      <span className="text-[10px] font-medium text-white">Hình ảnh thực tế</span>
                    </div>
                  </div>
                  <div className="flex h-28 flex-col items-center justify-center rounded-lg border border-slate-200 bg-white">
                    <QrCode className="h-12 w-12 text-[48px] text-slate-900" />
                    <span className="mt-1 font-mono text-[10px] text-slate-500">{activeItem.id}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-semibold text-slate-900">{activeItem.name}</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="rounded bg-slate-200 px-2 py-0.5 font-mono text-[10px] font-medium text-slate-700">
                      SN: 8A9B2C3D4E
                    </span>
                    <span className="rounded bg-slate-200 px-2 py-0.5 text-[10px] font-medium text-slate-700">
                      {activeItem.condition}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{activeItem.desc}</p>
                </div>
              </div>

              <hr className="my-2 border-slate-100" />

              {/* Action: Update Location */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-5 w-5 text-[18px] text-blue-700" />
                  <span className="text-sm font-semibold text-slate-900">Cập nhật vị trí lưu trữ</span>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-slate-600">Chọn Kho - Trạm</label>
                  <div className="relative">
                    <select className="w-full cursor-pointer appearance-none rounded-lg border border-slate-200 bg-slate-50 py-2.5 pr-8 pl-3 text-sm text-slate-900 transition-all outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100">
                      <option>Tổng Kho Kỹ thuật HN (Đông Anh)</option>
                      <option>Kho Vệ tinh Tây Bắc (Lào Cai)</option>
                      <option>Trạm Tiếp vận Đà Nẵng</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-[18px] text-slate-500" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-slate-600">Khu vực / Dãy</label>
                    <input
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 font-mono text-sm text-slate-900 uppercase transition-all outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                      defaultValue="KHU A"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-slate-600">Kệ / Tầng / Ô</label>
                    <input
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 font-mono text-sm text-slate-900 transition-all outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                      defaultValue="Kệ 02"
                      type="text"
                    />
                  </div>
                </div>
                <button
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
                  onClick={handleSaveLocation}
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin text-[18px]" />
                      <span>Đang lưu...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="h-5 w-5 text-[18px]" />
                      <span>Xác nhận & Lưu vị trí</span>
                    </>
                  )}
                </button>
              </div>

              <hr className="my-2 border-slate-100" />

              {/* Action: Stock Out / Allocate */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Truck className="h-5 w-5 text-[18px] text-teal-700" />
                    <span className="text-sm font-semibold text-slate-900">Khởi tạo lệnh điều phối</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600">
                  Gắn thiết bị này vào một lệnh vận chuyển số hoặc cấp phát cho Tình nguyện viên/Đơn vị trường học.
                </p>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  <button className="flex items-center justify-center gap-1 rounded-lg border border-slate-200 bg-slate-50 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100">
                    <Network className="h-4 w-4 text-[16px]" />
                    Gán Lệnh xuất
                  </button>
                  <button className="flex items-center justify-center gap-1 rounded-lg border border-slate-200 bg-slate-50 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100">
                    <Printer className="h-4 w-4 text-[16px]" />
                    In phiếu PXK
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Toast */}
      <div
        className={`fixed right-6 bottom-6 z-50 flex items-center gap-2 rounded-lg border-l-4 bg-white p-4 shadow-xl transition-all duration-300 ${
          toast.type === "success" ? "border-teal-600" : "border-rose-600"
        } ${toast.visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"}`}
      >
        {toast.type === "success" ? (
          <Check className="h-6 w-6 text-teal-600" />
        ) : (
          <X className="h-6 w-6 text-rose-600" />
        )}
        <div className="flex flex-col">
          <span className="text-sm font-bold font-medium text-slate-900">{toast.title}</span>
          <span className="text-xs text-slate-500">{toast.message}</span>
        </div>
      </div>
    </>
  );
}
