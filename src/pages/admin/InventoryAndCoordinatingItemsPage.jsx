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
  <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
    <div className="flex items-start justify-between">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-slate-600">{title}</span>
        <div className="flex items-baseline gap-1 mt-1">
          <span className={`text-4xl font-display font-bold ${textClass}`}>
            {value}
          </span>
          <span className={`text-xs ${textClass} font-medium`}>{unit}</span>
        </div>
      </div>
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform ${iconBgClass} ${iconTextClass}`}
      >
        <Icon className="text-[26px] w-6 h-6" />
      </div>
    </div>

    <div className="mt-4 pt-2 flex items-center justify-between">
      {TrendIcon && (
        <span
          className={`inline-flex items-center text-xs font-semibold ${trendColorClass}`}
        >
          <TrendIcon className="text-[16px] mr-0.5 w-4 h-4" />
          {trendText}
        </span>
      )}
      {trendDesc && (
        <span className="text-xs text-slate-600 truncate mr-2">
          {trendDesc}
        </span>
      )}
      {badgeText && (
        <span
          className={`shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold ${badgeColorClass}`}
        >
          {badgeText}
        </span>
      )}
    </div>
  </div>
);

const InventoryRow = ({ item, isSelected, onSelect, onOpenDetails }) => {
  return (
    <tr
      className={`transition-colors cursor-pointer group ${isSelected ? "bg-slate-200/40 hover:bg-slate-200" : item.isAlert ? "bg-rose-100/20 hover:bg-rose-100/40" : "hover:bg-slate-50"}`}
      onClick={() => onSelect(item.id)}
    >
      <td className="p-4" onClick={(e) => e.stopPropagation()}>
        <input
          checked={isSelected}
          onChange={() => onSelect(item.id)}
          className="rounded accent-primary cursor-pointer w-4 h-4"
          type="checkbox"
        />
      </td>
      <td className="py-4 px-2">
        <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-mono font-semibold hover:underline">
          <QrCode className="text-[16px] w-4 h-4" />
          {item.id}
        </span>
      </td>
      <td className="py-4 px-4">
        <div className="flex flex-col">
          <span className="font-medium text-slate-900">{item.name}</span>
          <span className="text-xs text-slate-600">{item.desc}</span>
        </div>
      </td>
      <td className="py-4 px-2">
        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs font-medium">
          {item.category}
        </span>
      </td>
      <td className="py-4 px-2">
        <span
          className={`px-2 py-0.5 rounded text-xs font-semibold ${item.conditionColorClass}`}
        >
          {item.condition}
        </span>
      </td>
      <td className="py-4 px-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-50 text-slate-900 text-sm font-mono">
          <item.locationIcon className="text-[15px] text-blue-700 w-4 h-4" />
          <span>{item.location}</span>
        </div>
      </td>
      <td
        className={`py-4 px-2 text-sm font-mono font-medium ${item.isAlert ? "text-rose-600" : "text-slate-900"}`}
      >
        {item.date}
      </td>
      <td className="py-4 px-2">
        <span
          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${item.statusColorClass}`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${item.statusDotClass}`}
          ></span>
          {item.status}
        </span>
      </td>
      <td className="py-4 px-4 text-right" onClick={(e) => e.stopPropagation()}>
        <div className="inline-flex items-center gap-1">
          <button
            className="p-1.5 rounded hover:bg-white text-slate-500 hover:text-blue-700 transition-colors"
            onClick={() => {
              onSelect(item.id);
              onOpenDetails();
            }}
            title="Chỉnh sửa vị trí lưu trữ"
          >
            <MapPin className="text-[18px] w-5 h-5" />
          </button>
          <button
            className="p-1.5 rounded hover:bg-white text-slate-500 hover:text-blue-700 transition-colors"
            onClick={() => {
              onSelect(item.id);
              onOpenDetails();
            }}
            title="Mở thông tin chi tiết"
          >
            <Eye className="text-[18px] w-5 h-5" />
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
      showToast(
        "success",
        "Đã lưu thành công",
        "Vị trí lưu trữ đã được cập nhật.",
      );
      setSlideOverOpen(false);
    }, 2000);
  };

  const activeItem =
    inventoryItems.find((item) => item.id === selectedDevice) ||
    inventoryItems[0];

  return (
    <>
      <Breadcrumb current="Tồn kho thiết bị" />
      <div className="flex flex-col w-full pb-16">
        {/* Breadcrumb & Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-slate-500 text-xs font-medium tracking-wide">
              <span>EduShare VN</span>
              <ChevronRight className="text-[14px] w-4 h-4" />
              <span>Kho & Kỹ thuật</span>
              <ChevronRight className="text-[14px] w-4 h-4" />
              <span className="text-blue-700 font-semibold">
                Tồn kho thiết bị
              </span>
            </div>
            <h1 className="text-3xl font-display font-semibold text-slate-900">
              Quản Lý Tồn Kho Thiết Bị & Điều Phối Vật Phẩm
            </h1>
            <p className="text-sm text-slate-600 max-w-3xl">
              Kiểm soát số lượng hiện vật giáo dục, vị trí lưu trữ tại các tổng
              kho và tình trạng sẵn sàng điều phối chi viện vùng cao.
            </p>
          </div>
          {/* Top Action Pills */}
          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <button className="inline-flex items-center gap-1 px-4 py-2 bg-white hover:bg-slate-200 text-slate-900 text-sm font-medium rounded-lg shadow-sm transition-all">
              <HelpCircle className="text-[18px] text-blue-700 w-5 h-5" />
              <span>Xuất báo cáo Excel / PDF</span>
            </button>
            <button className="inline-flex items-center gap-1 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-blue-700 text-sm font-medium rounded-lg transition-colors">
              <RefreshCcw className="text-[18px] w-5 h-5" />
              <span>Đồng bộ quét RFID/Barcode</span>
            </button>
          </div>
        </div>

        {/* Top Kpi Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
        <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-[20px] w-5 h-5" />
            <input
              className="w-full pl-10 pr-12 py-2 bg-slate-50 text-slate-900 text-sm rounded-lg outline-none focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
              id="inventory-search"
              placeholder="Tìm theo Mã QR, Tên thiết bị, số serial, mã lô..."
              type="text"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 bg-slate-200 text-slate-500 rounded text-xs font-mono font-medium">
              ⌘K
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 flex-1">
            <div className="relative">
              <select className="appearance-none bg-slate-50 text-slate-900 text-sm pl-3 pr-8 py-2 rounded-lg outline-none cursor-pointer hover:bg-slate-100 transition-colors">
                <option value="">Tất cả các kho</option>
                <option value="hn">Tổng Kho Kỹ thuật HN</option>
                <option value="dn">Trạm Tiếp vận Đà Nẵng</option>
                <option value="hcm">Kho Trung chuyển TP.HCM</option>
                <option value="tb">Kho Vệ tinh Tây Bắc</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 text-[18px] w-4 h-4" />
            </div>
            <div className="relative">
              <select className="appearance-none bg-slate-50 text-slate-900 text-sm pl-3 pr-8 py-2 rounded-lg outline-none cursor-pointer hover:bg-slate-100 transition-colors">
                <option value="">Tất cả loại thiết bị</option>
                <option value="laptop">Laptop giáo dục</option>
                <option value="pc">Máy tính để bàn PC</option>
                <option value="tablet">Máy tính bảng Tablet</option>
                <option value="sgk">Sách giáo khoa & Nghe nhìn</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 text-[18px] w-4 h-4" />
            </div>
            <div className="relative">
              <select className="appearance-none bg-slate-50 text-slate-900 text-sm pl-3 pr-8 py-2 rounded-lg outline-none cursor-pointer hover:bg-slate-100 transition-colors">
                <option value="">Tất cả tình trạng</option>
                <option value="new">Mới 100%</option>
                <option value="good">Cũ - Tốt (&gt;90%)</option>
                <option value="upgrade">Cần nâng cấp/sửa chữa</option>
                <option value="pending">Chờ thanh lý</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 text-[18px] w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button className="inline-flex items-center gap-1 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-blue-700 text-sm font-medium font-semibold rounded-lg transition-all shadow-sm">
              <Download className="text-[18px] w-5 h-5" />
              <span>Nhập kho (Stock In)</span>
            </button>
            <button className="inline-flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium font-semibold rounded-lg shadow-sm transition-all">
              <Upload className="text-[18px] w-5 h-5" />
              <span>Xuất kho (Stock Out)</span>
            </button>
          </div>
        </div>

        {/* Main Data Section & Slide-over Workspace */}
        <div className="relative flex gap-6 items-start">
          {/* Data Table Container */}
          <div className="flex-1 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col transition-all duration-300">
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-xs font-medium uppercase tracking-wider border-b border-slate-100">
                    <th className="p-4 w-10">
                      <input
                        className="rounded accent-primary cursor-pointer w-4 h-4"
                        type="checkbox"
                      />
                    </th>
                    <th className="py-4 px-2">Mã QR</th>
                    <th className="py-4 px-4">Tên thiết bị / Vật phẩm</th>
                    <th className="py-4 px-2">Phân loại</th>
                    <th className="py-4 px-2">Tình trạng</th>
                    <th className="py-4 px-4">Vị trí lưu trữ</th>
                    <th className="py-4 px-2">Ngày nhập kho</th>
                    <th className="py-4 px-2">Trạng thái</th>
                    <th className="py-4 px-4 text-right">Thao tác</th>
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
            <div className="p-4 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-slate-100">
              <span className="text-xs text-slate-600">
                Hiển thị{" "}
                <span className="font-semibold text-slate-900">1 - 6</span> của{" "}
                <span className="font-semibold text-slate-900">15,240</span>{" "}
                thiết bị
              </span>
              <div className="flex items-center gap-1">
                <button className="p-1.5 rounded bg-white border border-slate-200 text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-colors disabled:opacity-50">
                  <ChevronLeft className="text-[18px] w-5 h-5" />
                </button>
                <button className="w-8 h-8 rounded bg-blue-600 text-white text-sm font-mono font-semibold flex items-center justify-center">
                  1
                </button>
                <button className="w-8 h-8 rounded bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-mono flex items-center justify-center transition-colors">
                  2
                </button>
                <button className="w-8 h-8 rounded bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-mono flex items-center justify-center transition-colors">
                  3
                </button>
                <span className="px-1 text-slate-500 text-sm font-mono">
                  ...
                </span>
                <button className="w-8 h-8 rounded bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-mono flex items-center justify-center transition-colors">
                  254
                </button>
                <button className="p-1.5 rounded bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">
                  <ChevronRight className="text-[18px] w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* SLIDE-OVER PANEL: DETAIL & LOCATION UPDATE */}
          {slideOverOpen && (
            <div className="w-[390px] shrink-0 bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 border border-slate-100 transition-all">
              {/* Panel Header */}
              <div className="flex items-center justify-between pb-1">
                <div className="flex flex-col">
                  <span className="text-base font-display font-semibold text-slate-900 font-bold">
                    Chi tiết thiết bị & Vị trí
                  </span>
                  <span className="text-sm font-mono text-blue-700 font-semibold">
                    #{activeItem.id}
                  </span>
                </div>
                <button
                  className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors"
                  onClick={() => setSlideOverOpen(false)}
                >
                  <X className="text-[20px] w-5 h-5" />
                </button>
              </div>

              {/* Upper section: Device Image, QR Code, Spec Sheet */}
              <div className="bg-slate-50 rounded-xl p-4 flex flex-col gap-4 border border-slate-100">
                <div className="grid grid-cols-2 gap-2 items-center">
                  <div className="relative h-28 rounded-lg overflow-hidden bg-slate-200 flex items-center justify-center border border-slate-200">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Device"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-2">
                      <span className="text-[10px] text-white font-medium">
                        Hình ảnh thực tế
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg h-28 flex flex-col items-center justify-center border border-slate-200">
                    <QrCode className="text-[48px] text-slate-900 w-12 h-12" />
                    <span className="text-[10px] font-mono text-slate-500 mt-1">
                      {activeItem.id}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="font-semibold text-slate-900 text-sm">
                    {activeItem.name}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px] font-medium font-mono">
                      SN: 8A9B2C3D4E
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px] font-medium">
                      {activeItem.condition}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {activeItem.desc}
                  </p>
                </div>
              </div>

              <hr className="border-slate-100 my-2" />

              {/* Action: Update Location */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1.5">
                  <MapPin className="text-blue-700 text-[18px] w-5 h-5" />
                  <span className="text-sm font-semibold text-slate-900">
                    Cập nhật vị trí lưu trữ
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-slate-600">
                    Chọn Kho - Trạm
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-900 text-sm pl-3 pr-8 py-2.5 rounded-lg outline-none cursor-pointer focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all">
                      <option>Tổng Kho Kỹ thuật HN (Đông Anh)</option>
                      <option>Kho Vệ tinh Tây Bắc (Lào Cai)</option>
                      <option>Trạm Tiếp vận Đà Nẵng</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-[18px] w-4 h-4" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-slate-600">
                      Khu vực / Dãy
                    </label>
                    <input
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm px-3 py-2.5 rounded-lg outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all uppercase font-mono"
                      defaultValue="KHU A"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-slate-600">
                      Kệ / Tầng / Ô
                    </label>
                    <input
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm px-3 py-2.5 rounded-lg outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all font-mono"
                      defaultValue="Kệ 02"
                      type="text"
                    />
                  </div>
                </div>
                <button
                  className="mt-2 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all"
                  onClick={handleSaveLocation}
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="animate-spin text-[18px] w-5 h-5" />
                      <span>Đang lưu...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="text-[18px] w-5 h-5" />
                      <span>Xác nhận & Lưu vị trí</span>
                    </>
                  )}
                </button>
              </div>

              <hr className="border-slate-100 my-2" />

              {/* Action: Stock Out / Allocate */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Truck className="text-teal-700 text-[18px] w-5 h-5" />
                    <span className="text-sm font-semibold text-slate-900">
                      Khởi tạo lệnh điều phối
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600">
                  Gắn thiết bị này vào một lệnh vận chuyển số hoặc cấp phát cho
                  Tình nguyện viên/Đơn vị trường học.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <button className="flex items-center justify-center gap-1 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors">
                    <Network className="text-[16px] w-4 h-4" />
                    Gán Lệnh xuất
                  </button>
                  <button className="flex items-center justify-center gap-1 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors">
                    <Printer className="text-[16px] w-4 h-4" />
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
        className={`fixed bottom-6 right-6 transition-all duration-300 z-50 flex items-center gap-2 bg-white p-4 rounded-lg shadow-xl border-l-4 ${
          toast.type === "success" ? "border-teal-600" : "border-rose-600"
        } ${
          toast.visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-24 pointer-events-none"
        }`}
      >
        {toast.type === "success" ? (
          <Check className="w-6 h-6 text-teal-600" />
        ) : (
          <X className="w-6 h-6 text-rose-600" />
        )}
        <div className="flex flex-col">
          <span className="text-sm font-medium font-bold text-slate-900">
            {toast.title}
          </span>
          <span className="text-xs text-slate-500">{toast.message}</span>
        </div>
      </div>
    </>
  );
}
