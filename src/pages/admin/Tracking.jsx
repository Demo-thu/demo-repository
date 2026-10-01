import React, { useState } from "react";
import {
  Box,
  CheckSquare,
  ChevronRight,
  Copy,
  ExternalLink,
  Lock,
  MapPin,
  Navigation,
  Navigation2,
  Package,
  Phone,
  Printer,
  Receipt,
  Route,
  Satellite,
  School,
  Search,
  SearchCheck,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Snowflake,
  Star,
  Truck,
  Verified,
  Warehouse,
} from "lucide-react";
import { Breadcrumb } from "../../components/system-ui";

export default function TrackingPage() {
  const [searchValue, setSearchValue] = useState("QR-8821");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) {
      alert("Vui lòng nhập mã quyên góp hoặc mã vận đơn!");
      return;
    }
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 400);
  };

  return (
    <div className="flex w-full flex-col pb-8">
      {/* Top Navigation & Action Banner */}
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="flex flex-col">
          {/* Breadcrumb */}
          <nav className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-600 uppercase">
            <span className="">EduShare VN</span>
            <ChevronRight className="h-5 w-5" />
            <span className="">Nhà hảo tâm</span>
            <ChevronRight className="h-5 w-5" />
            <span className="font-semibold text-blue-600">Tra cứu hành trình</span>
          </nav>
          {/* Page Title & Subtitle */}
          <h1 className="font-display mb-1 text-3xl font-bold tracking-tight text-slate-900">
            Tra Cứu Hành Trình &amp; Minh Bạch Vận Chuyển
          </h1>
          <p className="max-w-3xl text-sm font-normal text-slate-600">
            Hệ thống theo dõi luân chuyển hiện vật giáo dục thời gian thực từ Nhà tài trợ qua Kiểm định kỹ thuật đến
            Điểm trường vùng cao.
          </p>
        </div>
        {/* Quick Telemetry & Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50/40 px-3 py-1.5 text-xs font-semibold tracking-wider text-teal-600 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-600 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-600"></span>
            </span>
            Dữ liệu trực tuyến • GPS Tracking Active
          </div>
          <div className="flex items-center gap-2">
            <button
              className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow transition hover:bg-slate-100 hover:text-blue-600"
              type="button"
            >
              <Share2 className="h-5 w-5" />
              <span className="">Chia sẻ</span>
            </button>
            <button
              className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow transition hover:bg-slate-100 hover:text-blue-600"
              type="button"
            >
              <Printer className="h-5 w-5" />
              <span className="">In phiếu</span>
            </button>
          </div>
        </div>
      </div>
      {/* Search Section */}
      <section className="mb-6 rounded-full bg-white p-4 shadow md:rounded-2xl md:p-6">
        <form className="flex flex-col gap-3" id="trackingSearchForm">
          <div className="flex flex-col items-stretch gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="h-5 w-5" />
              <input
                className="w-full rounded-xl bg-slate-50 py-3.5 pr-4 pl-12 text-base font-normal text-slate-900 shadow-inner transition-colors placeholder:text-slate-400 focus:bg-white focus:outline-none"
                id="searchInput"
                placeholder="Nhập mã quyên góp, mã QR hoặc mã vận đơn (vd: QR-8821, VNPOST-29C-882.10)..."
                type="text"
                value="QR-8821"
              />
            </div>
            <button
              className="font-display flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-lg font-semibold text-white shadow transition-colors hover:bg-blue-100"
              id="searchBtn"
              type="button"
            >
              <SearchCheck className="h-5 w-5" />
              <span className="">Tra cứu</span>
            </button>
          </div>
          {/* Quick Suggested Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-semibold tracking-wider text-slate-600 uppercase">Mã phổ biến:</span>
            <button
              className="inline-flex items-center rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-semibold tracking-wider text-blue-600 uppercase transition hover:bg-slate-100"
              type="button"
            >
              #QR-8821 (Laptop Hà Giang)
            </button>
            <button
              className="inline-flex items-center rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-semibold tracking-wider text-slate-600 uppercase transition hover:bg-slate-100 hover:text-slate-900"
              type="button"
            >
              #QR-8820 (Máy tính Sơn La)
            </button>
            <button
              className="inline-flex items-center rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-semibold tracking-wider text-slate-600 uppercase transition hover:bg-slate-100 hover:text-slate-900"
              type="button"
            >
              #QR-8792 (Sách giáo khoa Mường Tè)
            </button>
          </div>
        </form>
      </section>
      {/* Main Tracking Workspace (4:8 Desktop Grid) */}
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
        {/* LEFT COLUMN: Donor & Consignment Summary (col-span-4) */}
        <div className="flex flex-col gap-4 lg:col-span-4">
          {/* Primary Consignment Card */}
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow">
            {/* Card Header with Brand & Live Badge */}
            <div className="flex items-start justify-between gap-3 pb-3">
              <div className="flex items-center gap-3">
                <div className="font-display flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl font-bold text-white shadow">
                  VS
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-lg leading-tight font-semibold text-slate-900">
                    Tập đoàn Viettel Solutions
                  </span>
                  <div className="mt-0.5 inline-flex items-center gap-1">
                    <Verified className="h-5 w-5" />
                    <span className="text-xs font-semibold tracking-wider text-teal-600 uppercase">
                      Nhà tài trợ Vàng
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Global Status Chip */}
            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-blue-600">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600"></span>
                </span>
                <span className="font-display text-lg font-semibold text-blue-600">Đang vận chuyển</span>
              </div>
              <Truck className="h-5 w-5" />
            </div>
            {/* Equipment Specifications */}
            <div className="space-y-3 rounded-xl bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider text-slate-600 uppercase">Mã hiện vật</span>
                <div className="inline-flex items-center gap-1.5 rounded bg-slate-100 px-2 py-0.5 font-mono text-sm font-semibold text-slate-900">
                  <span className="">QR-8821</span>
                  <button className="text-slate-600 hover:text-blue-600" type="button">
                    <Copy className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div>
                <div className="font-display mb-1 text-lg font-semibold text-slate-900">
                  50 Laptop Dell Latitude 5520
                </div>
                <p className="text-xs leading-relaxed font-normal text-slate-600">
                  Intel Core i5, 16GB RAM, SSD NVMe 256GB mới 100% kèm sạc zin và chuột quang học chuyên dụng phòng lab.
                </p>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-xs font-semibold tracking-wider text-slate-600 uppercase">Giá trị tài trợ:</span>
                <span className="font-display text-2xl font-bold text-teal-600">425.000.000 VNĐ</span>
              </div>
            </div>
            {/* Route Nodes & Logistics Summary */}
            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <Warehouse className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-wider text-slate-600 uppercase">
                    Điểm nhận hàng (Xuất phát)
                  </span>
                  <span className="font-display text-lg font-semibold text-slate-900">Tổng Kho Kỹ Thuật Hà Nội</span>
                  <span className="text-xs font-normal text-slate-500">Km12, QL1A, Thanh Trì, Hà Nội</span>
                </div>
              </div>
              <div className="ml-4 py-0.5 pl-3">
                <div className="h-6 w-0.5 rounded-full bg-slate-200"></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <School className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-wider text-slate-600 uppercase">
                    Điểm đến dự kiến (&amp;Dstich)
                  </span>
                  <span className="font-display text-lg font-semibold text-slate-900">Trường THCS Pả Vi</span>
                  <span className="text-xs font-normal text-slate-500">Huyện Mèo Vạc, Tỉnh Hà Giang</span>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-sm font-medium text-slate-900">
                <span className="flex items-center gap-1.5 text-slate-600">
                  <Route className="h-5 w-5" />
                  385 km toàn tuyến
                </span>
                <span className="font-semibold text-blue-600">Dự kiến: 16:30 ngày mai</span>
              </div>
            </div>
            {/* Driver / Volunteer Badge */}
            <div className="flex flex-col gap-2 rounded-xl bg-white p-4">
              <span className="text-xs font-semibold tracking-wider text-slate-600 uppercase">
                Tình nguyện viên điều phối
              </span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-100">
                    <img
                      className="h-full w-full object-cover"
                      data-alt="Chân dung anh Lê Hoàng Long, tình nguyện viên vận chuyển nhiệt huyết của tổ chức EduShare với áo khoác chuyên dụng và nụ cười rạng rỡ, hậu cảnh là đồi núi phía Bắc nắng nhẹ"
                      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-display text-lg font-semibold text-slate-900">Lê Hoàng Long</span>
                      <span className="flex items-center text-xs font-semibold tracking-wider text-amber-500 uppercase">
                        <Star className="h-5 w-5" />
                        4.9
                      </span>
                    </div>
                    <span className="text-xs font-normal text-slate-500">32 chuyến giao thành công</span>
                  </div>
                </div>
                <a
                  aria-label="Gọi điện thoại điều phối"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition hover:bg-blue-600 hover:text-white"
                  href="tel:0988000123"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-1 flex items-center justify-between pt-2 text-xs font-normal text-slate-600">
                <span className="">Phương tiện bảo mật:</span>
                <span className="font-mono text-sm font-semibold text-slate-900">Ford Ranger • 29C-882.10</span>
              </div>
            </div>
            {/* Secondary Document Actions */}
            <div className="flex flex-col gap-2 pt-1">
              <button
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
                type="button"
              >
                <Receipt className="h-5 w-5" />
                <span className="">Tải biên lai quyên góp điện tử (PDF)</span>
              </button>
              <a
                className="inline-flex items-center justify-center gap-1 py-1.5 text-xs font-semibold tracking-wider text-slate-400 uppercase transition hover:text-blue-600"
                href="#"
              >
                <ShieldCheck className="h-5 w-5" />
                <span className="">Xem cam kết bảo mật &amp; minh bạch EduShare</span>
              </a>
            </div>
          </div>
          {/* Quick Telemetry & Environment Card */}
          <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-white">
                <Snowflake className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold tracking-wider text-slate-600 uppercase">
                  Nhiệt độ thùng máy
                </span>
                <span className="font-display text-lg font-semibold text-slate-900">21.5°C • &amp;Dstộ ẩm 54%</span>
              </div>
            </div>
            <span className="rounded-lg bg-teal-50/30 px-2 py-1 text-xs font-semibold tracking-wider text-teal-600 uppercase">
              An toàn cao
            </span>
          </div>
        </div>
        {/* RIGHT COLUMN: Detailed Operational Stepper / Timeline (col-span-8) */}
        <div className="flex flex-col gap-6 rounded-2xl bg-white p-4 shadow md:p-6 lg:col-span-8">
          {/* Stepper Header */}
          <div className="flex flex-col justify-between gap-3 pb-3 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Nhật Ký Hành Trình Vận Chuyển &amp; Tiếp Nhận
              </h2>
              <p className="text-xs font-normal text-slate-600">
                Ghi nhận tiến trình theo thời gian thực cùng chữ ký số điều phối viên
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 font-mono text-sm font-semibold text-slate-900">
              <Truck className="h-5 w-5" />
              <span className="">VNPOST-29C-882.10</span>
            </div>
          </div>
          {/* Linear Stepper Layout */}
          <div className="relative flex flex-col gap-6">
            {/* Connecting Line */}
            <div aria-hidden="true" className="absolute top-6 bottom-8 left-6 w-0.5 bg-slate-100"></div>
            {/* STEP 1: Completed */}
            <div className="relative flex items-start gap-4">
              <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-white shadow">
                <Package className="h-5 w-5" />
              </div>
              <div className="flex-1 rounded-xl bg-slate-50 p-4">
                <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-lg font-semibold text-slate-900">
                      Đã tiếp nhận từ Nhà tài trợ
                    </span>
                    <span className="rounded bg-teal-50 px-2 py-0.5 text-xs font-semibold tracking-wider text-teal-900 uppercase">
                      Hoàn thành
                    </span>
                  </div>
                  <span className="font-mono text-sm text-slate-500">08:30 • 22/10/2024</span>
                </div>
                <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-slate-600 uppercase">
                  <Box className="h-5 w-5" />
                  <span className="">Văn phòng Tiếp nhận EduShare Core (Cầu Giấy, Hà Nội)</span>
                </div>
                <p className="text-sm leading-relaxed font-normal text-slate-900">
                  Đại diện Tập đoàn Viettel Solutions bàn giao nguyên kiện 50 máy kèm phụ kiện chính hãng. Đã đối soát
                  số serial và ký biên bản giao nhận ban đầu mã{" "}
                  <strong className="font-mono text-sm text-blue-600">#BBGN-2024-8821</strong>.
                </p>
              </div>
            </div>
            {/* STEP 2: Completed */}
            <div className="relative flex items-start gap-4">
              <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-white shadow">
                <CheckSquare className="h-5 w-5" />
              </div>
              <div className="flex-1 rounded-xl bg-slate-50 p-4">
                <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-lg font-semibold text-slate-900">
                      Kiểm định Kỹ thuật &amp; Nhập Kho Chuẩn Bị Xuất
                    </span>
                    <span className="rounded bg-teal-50 px-2 py-0.5 text-xs font-semibold tracking-wider text-teal-900 uppercase">
                      Đạt chuẩn Grade A
                    </span>
                  </div>
                  <span className="font-mono text-sm text-slate-500">14:15 • 23/10/2024</span>
                </div>
                <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-slate-600 uppercase">
                  <Warehouse className="h-5 w-5" />
                  <span className="">Tổng Kho Kỹ Thuật Tân Bình - Phân hiệu Hà Nội</span>
                </div>
                <p className="mb-3 text-sm leading-relaxed font-normal text-slate-900">
                  Đã kiểm tra pin (đạt 100% dung lượng); nâng cấp SSD NVMe 256GB; cài sẵn bộ phần mềm học tập Tin học
                  Lớp 6-9 và phần mềm giáo dục chuẩn Bộ GD&amp;ĐT. Đã dán tem kiểm định QR Code chống giả mạo toàn bộ
                  dãy thiết bị.
                </p>
                <div className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold tracking-wider text-slate-900 uppercase">
                  <Verified className="h-5 w-5" />
                  <span className="">Kỹ thuật viên thẩm định: Phạm Hoàng Nam (Cert #KT-092)</span>
                </div>
              </div>
            </div>
            {/* STEP 3: ACTIVE & IN-TRANSIT (Pulsing / GPS Live) */}
            <div className="relative flex items-start gap-4">
              <div className="shadow-primary/30 relative z-10 flex h-12 w-12 flex-shrink-0 animate-pulse items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                <Truck className="h-5 w-5" />
              </div>
              <div className="flex-1 rounded-xl bg-white p-4 shadow">
                <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-lg font-semibold text-blue-600">
                      Đang vận chuyển vượt đèo tới điểm trường
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold tracking-wider text-white uppercase">
                      <span className="h-1.5 w-1.5 animate-ping rounded-full bg-white"></span>
                      Đang di chuyển
                    </span>
                  </div>
                  <span className="font-mono text-sm font-bold text-blue-600">07:00 • Hôm nay (24/10/2024)</span>
                </div>
                <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-slate-600 uppercase">
                  <Navigation className="h-5 w-5" />
                  <span className="font-semibold text-slate-900">Đang qua Trạm dừng Chân đèo Mã Pí Lèng</span>
                  <span className="">(Km152 QL4C, Mèo Vạc, Hà Giang)</span>
                </div>
                <p className="mb-4 text-sm leading-relaxed font-normal text-slate-900">
                  Đang được vận chuyển bởi Tình nguyện viên <strong>Lê Hoàng Long</strong> (SĐT: 0988.xxx.123). Tình
                  trạng đường sá: Thời tiết sương mù nhẹ, xe duy trì vận tốc an toàn 35km/h, toàn bộ thiết bị được bảo
                  quản trong thùng chống sốc chuyên dụng kèm bạt chống nước đa lớp.
                </p>
                {/* Embedded Live GPS Visualization Mini Widget */}
                <div className="flex flex-col gap-3 overflow-hidden rounded-xl bg-slate-50 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Satellite className="h-5 w-5" />
                      <span className="text-xs font-semibold tracking-wider text-slate-900 uppercase">
                        Tọa độ GPS thời gian thực:
                      </span>
                      <span className="rounded bg-white px-2 py-0.5 font-mono text-sm text-blue-600 shadow-xs">
                        23.2389° N, 105.4192° E
                      </span>
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                      Cập nhật 2 phút trước
                    </span>
                  </div>
                  {/* Location Map Element */}
                  <div
                    className="relative flex h-44 w-full items-end rounded-lg bg-cover bg-center p-3 shadow-inner"
                    data-location="Mã Pí Lèng Pass, Mèo Vạc, Hà Giang, Vietnam"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                  >
                    <div className="flex items-center gap-2 rounded-lg bg-white/90 px-3 py-1.5 shadow backdrop-blur-md">
                      <Navigation2 className="h-5 w-5" />
                      <span className="text-xs font-semibold tracking-wider text-slate-900 uppercase">
                        Đèo Mã Pí Lèng • Còn 38 km nữa tới THCS Pả Vi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* STEP 4: Upcoming / Destination Pending */}
            <div className="relative flex items-start gap-4">
              <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <School className="h-5 w-5" />
              </div>
              <div className="flex-1 rounded-xl bg-slate-50 p-4 opacity-90">
                <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-lg font-semibold text-slate-600">
                      Bàn giao thành công &amp; Nghiệm thu tại Điểm trường
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                      Dự kiến
                    </span>
                  </div>
                  <span className="font-mono text-sm text-slate-400">16:30 • 25/10/2024</span>
                </div>
                <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-slate-600 uppercase">
                  <MapPin className="h-5 w-5" />
                  <span className="">Trường THCS Pả Vi, Xã Pả Vi, Huyện Mèo Vạc, Tỉnh Hà Giang</span>
                </div>
                <p className="mb-4 text-sm leading-relaxed font-normal text-slate-600">
                  Người tiếp nhận: <strong>Thầy Hoàng Văn Sơn</strong> – Hiệu trưởng nhà trường cùng 45 học sinh có hoàn
                  cảnh khó khăn tại xã biên giới. Toàn bộ quá trình bàn giao và biên bản đối soát số seri sẽ được cập
                  nhật tự động lên hệ thống ngay sau khi ký duyệt.
                </p>
                <button
                  className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 opacity-50"
                  disabled
                  type="button"
                >
                  <Lock className="h-5 w-5" />
                  <span className="">Xem biên bản bàn giao &amp; Ảnh nghiệm thu thực tế (Chưa khả dụng)</span>
                </button>
              </div>
            </div>
          </div>
          {/* Audit & Transparency Footer Note */}
          <div className="mt-space-sm flex items-center justify-between gap-3 rounded-xl bg-white p-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="h-5 w-5" />
              <span className="text-xs font-normal text-slate-900">
                Mọi mốc luân chuyển đều được băm mã SHA-256 trên sổ cái số EduShare Public Ledger đảm bảo tính bất biến.
              </span>
            </div>
            <a
              className="flex flex-shrink-0 items-center gap-1 text-xs font-semibold tracking-wider text-blue-600 uppercase hover:underline"
              href="#"
            >
              <span className="">Tra cứu hash block</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
