import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../lib/api";
import { ITEM_STATUS_LABEL, WAYBILL_STATUS_LABEL } from "../lib/labels";
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
import { Breadcrumb } from "../components/system-ui";

export default function TrackingPage() {
  const [params] = useSearchParams();
  const [searchValue, setSearchValue] = useState(params.get("q") || "");
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  async function lookup(term) {
    const code = term.trim();
    if (!code) {
      setError("Nhập mã QR hoặc mã vận đơn.");
      return;
    }
    setIsSearching(true);
    setError("");
    try {
      if (code.toUpperCase().startsWith("WB-")) {
        const response = await api.get(`/tracking/waybills/${encodeURIComponent(code)}`);
        setResult({ kind: "waybill", data: response.data });
      } else {
        const response = await api.get(`/tracking/items/${encodeURIComponent(code)}`);
        setResult({ kind: "item", data: response.data });
      }
    } catch {
      try {
        const response = await api.get(`/tracking/search?q=${encodeURIComponent(code)}`);
        setResult({ kind: "search", data: response.data });
      } catch {
        setResult(null);
        setError("Không tìm thấy mã này trong hệ thống.");
      }
    } finally {
      setIsSearching(false);
    }
  }

  useEffect(() => {
    const initial = params.get("q");
    if (initial) lookup(initial);
  }, [params]);

  const handleSearch = (event) => {
    event.preventDefault();
    lookup(searchValue);
  };

  return (
    <div className="flex flex-col w-full pb-8">
      {/* Top Navigation & Action Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex flex-col">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <span className="">EduShare VN</span>
            <ChevronRight className="w-5 h-5" />
            <span className="">Nhà hảo tâm</span>
            <ChevronRight className="w-5 h-5" />
            <span className="text-blue-600 font-semibold">
              Tra cứu hành trình
            </span>
          </nav>
          {/* Page Title & Subtitle */}
          <h1 className="text-3xl font-bold font-display text-slate-900 tracking-tight mb-1">
            Tra Cứu Hành Trình &amp; Minh Bạch Vận Chuyển
          </h1>
          <p className="text-sm font-normal text-slate-600 max-w-3xl">
            Hệ thống theo dõi luân chuyển hiện vật giáo dục thời gian thực từ
            Nhà tài trợ qua Kiểm định kỹ thuật đến Điểm trường vùng cao.
          </p>
        </div>
        {/* Quick Telemetry & Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50/40 text-teal-600 text-xs font-semibold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
            </span>
            Dữ liệu trực tuyến • GPS Tracking Active
          </div>
          <div className="flex items-center gap-2">
            <button
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition shadow text-sm font-medium"
              type="button"
            >
              <Share2 className="w-5 h-5" />
              <span className="">Chia sẻ</span>
            </button>
            <button
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition shadow text-sm font-medium"
              type="button"
            >
              <Printer className="w-5 h-5" />
              <span className="">In phiếu</span>
            </button>
          </div>
        </div>
      </div>
      {/* Search Section */}
      <section className="bg-white rounded-full md:rounded-2xl p-4 md:p-6 shadow mb-6">
        <form className="flex flex-col gap-3" id="trackingSearchForm" onSubmit={handleSearch}>
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5" />
              <input
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 rounded-xl text-base font-normal text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-colors shadow-inner"
                id="searchInput"
                placeholder="Nhập mã quyên góp, mã QR hoặc mã vận đơn (vd: QR-8821, VNPOST-29C-882.10)..."
                type="text"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </div>
            <button
              className="bg-blue-600 hover:bg-blue-100 text-white text-lg font-semibold font-display px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow transition-colors"
              id="searchBtn"
              type="submit"
            >
              <SearchCheck className="w-5 h-5" />
              <span className="">Tra cứu</span>
            </button>
          </div>
          {/* Quick Suggested Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              Mã phổ biến:
            </span>
            <button
              className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-50 text-blue-600 hover:bg-slate-100 text-xs font-semibold uppercase tracking-wider transition"
              type="button"
            >
              #QR-8821 (Laptop Hà Giang)
            </button>
            <button
              className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 text-xs font-semibold uppercase tracking-wider transition"
              type="button"
            >
              #QR-8820 (Máy tính Sơn La)
            </button>
            <button
              className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 text-xs font-semibold uppercase tracking-wider transition"
              type="button"
            >
              #QR-8792 (Sách giáo khoa Mường Tè)
            </button>
          </div>
        </form>
      </section>
      {(isSearching || error || result) && (
        <section className="mb-6 rounded-2xl bg-white p-5 shadow">
          {isSearching && <p className="text-sm text-slate-500">Đang tra cứu...</p>}
          {error && <p className="text-sm text-rose-600">{error}</p>}
          {result?.kind === "item" && (
            <div className="text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase text-blue-700">Tài nguyên {result.data.qrCode}</p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">{result.data.name}</h2>
              <p className="mt-2">Trạng thái: {ITEM_STATUS_LABEL[result.data.status] || result.data.status} · Hạng: {result.data.grade || "—"}</p>
              <p>Kho: {result.data.warehouse ? `${result.data.warehouse.name} (${result.data.warehouse.city})` : "Chưa nhập kho"}</p>
              <p>Phiếu: {result.data.pledge?.code || "—"} · {result.data.pledge?.organizationName || result.data.pledge?.donorName || ""}</p>
              <p>Trường nhận: {result.data.allocation?.schoolName || "Chưa phân bổ"}</p>
              <p>Vận đơn: {result.data.waybill ? `${result.data.waybill.code} · ${WAYBILL_STATUS_LABEL[result.data.waybill.status] || result.data.waybill.status}` : "Chưa lập"}</p>
            </div>
          )}
          {result?.kind === "waybill" && (
            <div className="text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase text-blue-700">Vận đơn {result.data.code}</p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">{result.data.school?.name}</h2>
              <p className="mt-2">{WAYBILL_STATUS_LABEL[result.data.status] || result.data.status} · {result.data.items?.length || 0} thiết bị · TNV {result.data.volunteerName || "chưa gán"}</p>
              <p>{[result.data.school?.address, result.data.school?.district, result.data.school?.city].filter(Boolean).join(", ")}</p>
            </div>
          )}
          {result?.kind === "search" && (
            <div className="text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Kết quả gần đúng</p>
              <p className="mt-1">Tài nguyên: {(result.data.items ?? []).map((item) => item.qrCode).join(", ") || "không có"}</p>
              <p>Vận đơn: {(result.data.waybills ?? []).map((item) => item.code).join(", ") || "không có"}</p>
              <p>Phiếu trao tặng: {(result.data.pledges ?? []).map((item) => item.code).join(", ") || "không có"}</p>
            </div>
          )}
        </section>
      )}
      {/* Main Tracking Workspace (4:8 Desktop Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Donor & Consignment Summary (col-span-4) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Primary Consignment Card */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
            {/* Card Header with Brand & Live Badge */}
            <div className="flex items-start justify-between gap-3 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-white flex items-center justify-center text-2xl font-bold font-display shadow">
                  VS
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold font-display text-slate-900 leading-tight">
                    Tập đoàn Viettel Solutions
                  </span>
                  <div className="inline-flex items-center gap-1 mt-0.5">
                    <Verified className="w-5 h-5" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                      Nhà tài trợ Vàng
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Global Status Chip */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 text-blue-600">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                </span>
                <span className="text-lg font-semibold font-display text-blue-600">
                  Đang vận chuyển
                </span>
              </div>
              <Truck className="w-5 h-5" />
            </div>
            {/* Equipment Specifications */}
            <div className="space-y-3 bg-white rounded-xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 uppercase">
                  Mã hiện vật
                </span>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-slate-100 rounded text-sm font-mono text-slate-900 font-semibold">
                  <span className="">QR-8821</span>
                  <button
                    className="text-slate-600 hover:text-blue-600"
                    type="button"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold font-display text-slate-900 mb-1">
                  50 Laptop Dell Latitude 5520
                </div>
                <p className="text-xs font-normal text-slate-600 leading-relaxed">
                  Intel Core i5, 16GB RAM, SSD NVMe 256GB mới 100% kèm sạc zin
                  và chuột quang học chuyên dụng phòng lab.
                </p>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Giá trị tài trợ:
                </span>
                <span className="text-2xl font-bold font-display text-teal-600">
                  425.000.000 VNĐ
                </span>
              </div>
            </div>
            {/* Route Nodes & Logistics Summary */}
            <div className="space-y-4 pt-1">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0 mt-0.5">
                  <Warehouse className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 uppercase tracking-wider">
                    Điểm nhận hàng (Xuất phát)
                  </span>
                  <span className="text-lg font-semibold font-display text-slate-900">
                    Tổng Kho Kỹ Thuật Hà Nội
                  </span>
                  <span className="text-xs font-normal text-slate-500">
                    Km12, QL1A, Thanh Trì, Hà Nội
                  </span>
                </div>
              </div>
              <div className="ml-4 pl-3 py-0.5">
                <div className="h-6 w-0.5 bg-slate-200 rounded-full"></div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                  <School className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 uppercase tracking-wider">
                    Điểm đến dự kiến (&amp;Dstich)
                  </span>
                  <span className="text-lg font-semibold font-display text-slate-900">
                    Trường THCS Pả Vi
                  </span>
                  <span className="text-xs font-normal text-slate-500">
                    Huyện Mèo Vạc, Tỉnh Hà Giang
                  </span>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between text-slate-900 text-sm font-medium">
                <span className="flex items-center gap-1.5 text-slate-600">
                  <Route className="w-5 h-5" />
                  385 km toàn tuyến
                </span>
                <span className="font-semibold text-blue-600">
                  Dự kiến: 16:30 ngày mai
                </span>
              </div>
            </div>
            {/* Driver / Volunteer Badge */}
            <div className="bg-white rounded-xl p-4 flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 uppercase">
                Tình nguyện viên điều phối
              </span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-100">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Chân dung anh Lê Hoàng Long, tình nguyện viên vận chuyển nhiệt huyết của tổ chức EduShare với áo khoác chuyên dụng và nụ cười rạng rỡ, hậu cảnh là đồi núi phía Bắc nắng nhẹ"
                      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="text-lg font-semibold font-display text-slate-900">
                        Lê Hoàng Long
                      </span>
                      <span className="flex items-center text-amber-500 text-xs font-semibold uppercase tracking-wider font-semibold">
                        <Star className="w-5 h-5" />
                        4.9
                      </span>
                    </div>
                    <span className="text-xs font-normal text-slate-500">
                      32 chuyến giao thành công
                    </span>
                  </div>
                </div>
                <a
                  aria-label="Gọi điện thoại điều phối"
                  className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-900 flex items-center justify-center transition"
                  href="tel:0988000123"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-1 pt-2 flex items-center justify-between text-xs font-normal text-slate-600">
                <span className="">Phương tiện bảo mật:</span>
                <span className="text-sm font-mono font-semibold text-slate-900">
                  Ford Ranger • 29C-882.10
                </span>
              </div>
            </div>
            {/* Secondary Document Actions */}
            <div className="flex flex-col gap-2 pt-1">
              <button
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-medium flex items-center justify-center gap-2 transition"
                type="button"
              >
                <Receipt className="w-5 h-5" />
                <span className="">Tải biên lai quyên góp điện tử (PDF)</span>
              </button>
              <a
                className="inline-flex items-center justify-center gap-1 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-blue-600 transition"
                href="#"
              >
                <ShieldCheck className="w-5 h-5" />
                <span className="">
                  Xem cam kết bảo mật &amp; minh bạch EduShare
                </span>
              </a>
            </div>
          </div>
          {/* Quick Telemetry & Environment Card */}
          <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-white flex items-center justify-center">
                <Snowflake className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Nhiệt độ thùng máy
                </span>
                <span className="text-lg font-semibold font-display text-slate-900">
                  21.5°C • &amp;Dstộ ẩm 54%
                </span>
              </div>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 font-semibold px-2 py-1 bg-teal-50/30 rounded-lg">
              An toàn cao
            </span>
          </div>
        </div>
        {/* RIGHT COLUMN: Detailed Operational Stepper / Timeline (col-span-8) */}
        <div className="lg:col-span-8 bg-white rounded-2xl shadow p-4 md:p-6 flex flex-col gap-6">
          {/* Stepper Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3">
            <div>
              <h2 className="text-2xl font-bold font-display text-slate-900">
                Nhật Ký Hành Trình Vận Chuyển &amp; Tiếp Nhận
              </h2>
              <p className="text-xs font-normal text-slate-600">
                Ghi nhận tiến trình theo thời gian thực cùng chữ ký số điều phối
                viên
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-sm font-mono text-slate-900 font-semibold">
              <Truck className="w-5 h-5" />
              <span className="">VNPOST-29C-882.10</span>
            </div>
          </div>
          {/* Linear Stepper Layout */}
          <div className="relative flex flex-col gap-6">
            {/* Connecting Line */}
            <div
              aria-hidden="true"
              className="absolute left-6 top-6 bottom-8 w-0.5 bg-slate-100"
            ></div>
            {/* STEP 1: Completed */}
            <div className="relative flex items-start gap-4">
              <div className="relative z-10 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center shadow flex-shrink-0">
                <Package className="w-5 h-5" />
              </div>
              <div className="flex-1 bg-slate-50 rounded-xl p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold font-display text-slate-900">
                      Đã tiếp nhận từ Nhà tài trợ
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wider bg-teal-50 text-teal-900 font-semibold">
                      Hoàn thành
                    </span>
                  </div>
                  <span className="text-sm font-mono text-slate-500">
                    08:30 • 22/10/2024
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                  <Box className="w-5 h-5" />
                  <span className="">
                    Văn phòng Tiếp nhận EduShare Core (Cầu Giấy, Hà Nội)
                  </span>
                </div>
                <p className="text-sm font-normal text-slate-900 leading-relaxed">
                  Đại diện Tập đoàn Viettel Solutions bàn giao nguyên kiện 50
                  máy kèm phụ kiện chính hãng. Đã đối soát số serial và ký biên
                  bản giao nhận ban đầu mã{" "}
                  <strong className="text-sm font-mono text-blue-600">
                    #BBGN-2024-8821
                  </strong>
                  .
                </p>
              </div>
            </div>
            {/* STEP 2: Completed */}
            <div className="relative flex items-start gap-4">
              <div className="relative z-10 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center shadow flex-shrink-0">
                <CheckSquare className="w-5 h-5" />
              </div>
              <div className="flex-1 bg-slate-50 rounded-xl p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold font-display text-slate-900">
                      Kiểm định Kỹ thuật &amp; Nhập Kho Chuẩn Bị Xuất
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wider bg-teal-50 text-teal-900 font-semibold">
                      Đạt chuẩn Grade A
                    </span>
                  </div>
                  <span className="text-sm font-mono text-slate-500">
                    14:15 • 23/10/2024
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                  <Warehouse className="w-5 h-5" />
                  <span className="">
                    Tổng Kho Kỹ Thuật Tân Bình - Phân hiệu Hà Nội
                  </span>
                </div>
                <p className="text-sm font-normal text-slate-900 leading-relaxed mb-3">
                  Đã kiểm tra pin (đạt 100% dung lượng); nâng cấp SSD NVMe
                  256GB; cài sẵn bộ phần mềm học tập Tin học Lớp 6-9 và phần mềm
                  giáo dục chuẩn Bộ GD&amp;ĐT. Đã dán tem kiểm định QR Code
                  chống giả mạo toàn bộ dãy thiết bị.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 text-xs font-semibold uppercase tracking-wider">
                  <Verified className="w-5 h-5" />
                  <span className="">
                    Kỹ thuật viên thẩm định: Phạm Hoàng Nam (Cert #KT-092)
                  </span>
                </div>
              </div>
            </div>
            {/* STEP 3: ACTIVE & IN-TRANSIT (Pulsing / GPS Live) */}
            <div className="relative flex items-start gap-4">
              <div className="relative z-10 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-primary/30 flex-shrink-0 animate-pulse">
                <Truck className="w-5 h-5" />
              </div>
              <div className="flex-1 bg-white rounded-xl p-4 shadow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold font-display text-blue-600">
                      Đang vận chuyển vượt đèo tới điểm trường
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 text-white font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                      Đang di chuyển
                    </span>
                  </div>
                  <span className="text-sm font-mono text-blue-600 font-bold">
                    07:00 • Hôm nay (24/10/2024)
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3">
                  <Navigation className="w-5 h-5" />
                  <span className="font-semibold text-slate-900">
                    Đang qua Trạm dừng Chân đèo Mã Pí Lèng
                  </span>
                  <span className="">(Km152 QL4C, Mèo Vạc, Hà Giang)</span>
                </div>
                <p className="text-sm font-normal text-slate-900 leading-relaxed mb-4">
                  Đang được vận chuyển bởi Tình nguyện viên{" "}
                  <strong>Lê Hoàng Long</strong> (SĐT: 0988.xxx.123). Tình trạng
                  đường sá: Thời tiết sương mù nhẹ, xe duy trì vận tốc an toàn
                  35km/h, toàn bộ thiết bị được bảo quản trong thùng chống sốc
                  chuyên dụng kèm bạt chống nước đa lớp.
                </p>
                {/* Embedded Live GPS Visualization Mini Widget */}
                <div className="rounded-xl overflow-hidden bg-slate-50 p-4 flex flex-col gap-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Satellite className="w-5 h-5" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-900 font-semibold">
                        Tọa độ GPS thời gian thực:
                      </span>
                      <span className="text-sm font-mono text-blue-600 bg-white px-2 py-0.5 rounded shadow-xs">
                        23.2389° N, 105.4192° E
                      </span>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Cập nhật 2 phút trước
                    </span>
                  </div>
                  {/* Location Map Element */}
                  <div
                    className="w-full h-44 rounded-lg bg-cover bg-center relative flex items-end p-3 shadow-inner"
                    data-location="Mã Pí Lèng Pass, Mèo Vạc, Hà Giang, Vietnam"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                  >
                    <div className="backdrop-blur-md bg-white/90 px-3 py-1.5 rounded-lg shadow flex items-center gap-2">
                      <Navigation2 className="w-5 h-5" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-900 font-semibold">
                        Đèo Mã Pí Lèng • Còn 38 km nữa tới THCS Pả Vi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* STEP 4: Upcoming / Destination Pending */}
            <div className="relative flex items-start gap-4">
              <div className="relative z-10 w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center flex-shrink-0">
                <School className="w-5 h-5" />
              </div>
              <div className="flex-1 bg-slate-50 rounded-xl p-4 opacity-90">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold font-display text-slate-600">
                      Bàn giao thành công &amp; Nghiệm thu tại Điểm trường
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-500 font-semibold">
                      Dự kiến
                    </span>
                  </div>
                  <span className="text-sm font-mono text-slate-400">
                    16:30 • 25/10/2024
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="">
                    Trường THCS Pả Vi, Xã Pả Vi, Huyện Mèo Vạc, Tỉnh Hà Giang
                  </span>
                </div>
                <p className="text-sm font-normal text-slate-600 leading-relaxed mb-4">
                  Người tiếp nhận: <strong>Thầy Hoàng Văn Sơn</strong> – Hiệu
                  trưởng nhà trường cùng 45 học sinh có hoàn cảnh khó khăn tại
                  xã biên giới. Toàn bộ quá trình bàn giao và biên bản đối soát
                  số seri sẽ được cập nhật tự động lên hệ thống ngay sau khi ký
                  duyệt.
                </p>
                <button
                  className="opacity-50 cursor-not-allowed bg-slate-100 text-slate-600 px-4 py-2 rounded-lg inline-flex items-center gap-1.5 text-sm font-medium"
                  disabled
                  type="button"
                >
                  <Lock className="w-5 h-5" />
                  <span className="">
                    Xem biên bản bàn giao &amp; Ảnh nghiệm thu thực tế (Chưa khả
                    dụng)
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Audit & Transparency Footer Note */}
          <div className="mt-space-sm p-4 rounded-xl bg-white flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" />
              <span className="text-xs font-normal text-slate-900">
                Mọi mốc luân chuyển đều được băm mã SHA-256 trên sổ cái số
                EduShare Public Ledger đảm bảo tính bất biến.
              </span>
            </div>
            <a
              className="text-xs font-semibold uppercase tracking-wider text-blue-600 hover:underline flex items-center gap-1 flex-shrink-0"
              href="#"
            >
              <span className="">Tra cứu hash block</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
