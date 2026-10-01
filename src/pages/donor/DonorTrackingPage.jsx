import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DonorTrackingPage() {
  const [activeQR, setActiveQR] = useState("#QR-8821");

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="h-16 px-space-md flex items-center gap-space-sm bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[22px]">
                volunteer_activism
              </span>
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="font-headline-sm text-headline-sm font-bold text-primary tracking-tight leading-none truncate">
                EduShare VN
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant truncate uppercase tracking-wider mt-space-xs">
                Cổng Nhà Hảo Tâm
              </span>
            </div>
          </div>
          <div className="px-space-md py-space-sm mt-space-sm">
            <div className="px-space-sm py-space-xs bg-surface-container-high rounded-lg text-on-surface flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                Điều Hướng Chính
              </span>
              <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-1.5 py-0.5 rounded font-semibold">
                NHT
              </span>
            </div>
          </div>
          <nav className="flex flex-col gap-space-xs px-space-md mt-space-xs">
            <Link
              className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
              to="/donor/donation-details"
            >
              <span className="material-symbols-outlined text-[20px]">
                add_circle
              </span>
              <span className="font-label-md text-label-md font-medium">
                Đăng ký trao tặng
              </span>
            </Link>
            <Link
              className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
              to="/donor/dashboard"
            >
              <span className="material-symbols-outlined text-[20px]">
                assignment
              </span>
              <span className="font-label-md text-label-md font-medium">
                Quản lý phiếu của tôi
              </span>
            </Link>
            <Link
              className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
              to="/donor/certificates"
            >
              <span className="material-symbols-outlined text-[20px]">
                verified
              </span>
              <span className="font-label-md text-label-md font-medium">
                Biên nhận &amp; Chứng nhận
              </span>
            </Link>
            <Link
              className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg bg-primary text-on-primary font-semibold shadow-sm transition-colors"
              to="/donor/tracking"
            >
              <span className="material-symbols-outlined text-[20px] text-on-primary">
                qr_code_scanner
              </span>
              <span className="font-label-md text-label-md font-semibold">
                Hành trình &amp; Mã QR
              </span>
            </Link>
            <Link
              className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
              to="/donor/campaigns"
            >
              <span className="material-symbols-outlined text-[20px]">
                campaign
              </span>
              <span className="font-label-md text-label-md font-medium">
                Đợt vận động đang chạy
              </span>
            </Link>
          </nav>
        </div>
        <div className="p-space-md bg-surface-container-lowest/80 backdrop-blur-sm m-space-md rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-space-xs text-tertiary mb-space-xs">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="font-label-sm text-label-sm font-semibold tracking-wide uppercase">
              Hệ thống Trực tuyến
            </span>
          </div>
          <div className="font-body-sm text-body-sm text-on-surface font-medium">
            Kết nối 63 Tỉnh Thành Toàn Quốc
          </div>
          <div className="font-code-num text-code-num text-outline text-[11px] mt-space-xs flex items-center justify-between">
            <span className="">Bản dựng EduShare</span>
            <span className="">v2.8.4</span>
          </div>
        </div>
      </aside>

      <div className="pl-72 w-full flex-1">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-gutter-desktop flex items-center justify-between gap-space-md">
          <div className="flex-1 max-w-xl">
            <div className="relative flex items-center w-full bg-surface-container-lowest rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] px-space-md py-space-xs">
              <span className="material-symbols-outlined text-outline text-[20px] mr-space-sm shrink-0">
                search
              </span>
              <input
                className="w-full bg-transparent text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none"
                placeholder="Tra cứu mã phiếu (#DON), số serial, mã QR thiết bị..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-space-md shrink-0">
            <div className="hidden xl:flex items-center gap-space-sm px-space-md py-1.5 bg-surface-container-high rounded-full">
              <span className="material-symbols-outlined text-primary text-[18px]">
                corporate_fare
              </span>
              <div className="flex flex-col text-left">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium leading-none">
                  Tổ chức Hảo tâm
                </span>
                <span className="font-label-md text-label-md text-on-surface font-semibold truncate max-w-[160px]">
                  Tập đoàn Vingroup
                </span>
              </div>
              <span className="font-code-num text-code-num text-primary font-semibold text-[11px] bg-surface-container-lowest px-1.5 py-0.5 rounded ml-space-xs">
                #NHT-78294
              </span>
            </div>
            <button
              aria-label="Thông báo"
              className="relative p-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors flex items-center justify-center"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">
                notifications
              </span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error ring-2 ring-surface"></span>
            </button>
            <div className="flex items-center gap-space-sm pl-space-xs">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="font-label-md text-label-md font-semibold text-on-surface leading-tight">
                  Ban Điều Hành
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-none">
                  Quản trị viên Quỹ
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="relative pt-16 bg-surface min-h-screen">
          <div className="flex flex-col w-full">
            {/* Dynamic Top Banner / Notification Bar */}
            <div className="px-gutter-desktop py-space-sm bg-surface-container-high/60 flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-tertiary-container text-on-tertiary-container">
                  <span
                    className="material-symbols-outlined text-[15px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    sensors
                  </span>
                </span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  <strong>Giám sát hành trình trực tiếp:</strong> Cảm biến IoT
                  trên kiện hàng đang phát tín hiệu định kỳ mỗi 45 giây. Tọa độ
                  GPS đã xác minh.
                </span>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="font-code-num text-code-num text-[11px] text-tertiary font-semibold uppercase tracking-wider bg-surface-container-lowest px-2 py-0.5 rounded">
                  Mã Hash SHA-256 xác thực
                </span>
                <span className="font-code-num text-code-num text-[11px] text-outline">
                  v2.8-LIVE
                </span>
              </div>
            </div>

            <div className="p-gutter-desktop space-y-space-lg max-w-[1720px] mx-auto w-full">
              {/* Breadcrumb & Header Utility Panel */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
                <div className="flex flex-col gap-1">
                  <nav className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                    <Link
                      className="hover:text-primary transition-colors"
                      to="/"
                    >
                      EduShare VN
                    </Link>
                    <span className="material-symbols-outlined text-[14px]">
                      chevron_right
                    </span>
                    <Link
                      className="hover:text-primary transition-colors"
                      to="/donor/dashboard"
                    >
                      Cổng Nhà Hảo Tâm
                    </Link>
                    <span className="material-symbols-outlined text-[14px]">
                      chevron_right
                    </span>
                    <Link
                      className="hover:text-primary transition-colors"
                      to="/donor/tracking"
                    >
                      Hành trình &amp; Mã QR
                    </Link>
                    <span className="material-symbols-outlined text-[14px]">
                      chevron_right
                    </span>
                    <span className="text-primary font-semibold font-code-num">
                      #QR-8821 (Laptop Dell Latitude 5520)
                    </span>
                  </nav>
                  <div className="flex flex-wrap items-center gap-space-sm mt-1">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                      Tra Cứu Hành Trình &amp; Quản Lý Mã QR Thiết Bị
                    </h1>
                    <span className="inline-flex items-center gap-1.5 px-space-sm py-1 bg-tertiary/10 text-tertiary rounded-full font-label-sm text-label-sm font-semibold">
                      <span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
                      GPS Live Tracking • Bất Biến SHA-256
                    </span>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-space-sm">
                  <button
                    className="inline-flex items-center gap-space-xs px-space-md py-2 bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg shadow-sm transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      print
                    </span>
                    <span className="">In Tem QR Lô Hàng (A4)</span>
                  </button>
                  <button
                    className="inline-flex items-center gap-space-xs px-space-md py-2 bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg shadow-sm transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      share
                    </span>
                    <span className="">Chia sẻ công khai</span>
                  </button>
                  <button
                    className="inline-flex items-center gap-space-xs px-space-md py-2 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:brightness-105 transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      download
                    </span>
                    <span className="">Xuất Nhật Ký (CSV)</span>
                  </button>
                </div>
              </div>

              {/* Quick Search & Smart Lookup Bar */}
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row gap-space-md items-center justify-between">
                <div className="flex-1 flex flex-col sm:flex-row items-center gap-space-sm w-full">
                  <div className="relative w-full">
                    <span className="material-symbols-outlined text-outline absolute left-3.5 top-1/2 -translate-y-1/2 text-[20px]">
                      qr_code_scanner
                    </span>
                    <input
                      className="w-full pl-11 pr-4 py-2.5 bg-surface-container-low rounded-lg text-on-surface font-code-num text-code-num focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-outline"
                      placeholder="Nhập mã QR thiết bị, Số Serial, Mã phiếu quyên góp..."
                      type="text"
                      defaultValue="#QR-8821"
                    />
                  </div>
                  <button
                    className="w-full sm:w-auto px-space-lg py-2.5 bg-primary text-on-primary font-label-md text-label-md rounded-lg shrink-0 flex items-center justify-center gap-1.5 shadow-sm hover:brightness-110 transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      search
                    </span>
                    <span className="">Tra cứu</span>
                  </button>
                  <button
                    className="w-full sm:w-auto px-space-md py-2.5 bg-secondary-container text-on-secondary-fixed font-label-md text-label-md rounded-lg shrink-0 flex items-center justify-center gap-1.5 hover:bg-surface-container-highest transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      photo_camera
                    </span>
                    <span className="">Quét Camera</span>
                  </button>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm w-full md:w-auto overflow-x-auto">
                  <span className="shrink-0 text-secondary">Gợi ý nhanh:</span>
                  <button
                    onClick={() => setActiveQR("#QR-8821")}
                    className={`px-2 py-1 rounded font-code-num transition-colors ${activeQR === "#QR-8821" ? "bg-primary-fixed text-primary" : "bg-surface-container-high text-on-surface hover:bg-primary-fixed"}`}
                  >
                    #QR-8821 (Pà Vì)
                  </button>
                  <button
                    onClick={() => setActiveQR("#QR-8822")}
                    className={`px-2 py-1 rounded font-code-num transition-colors ${activeQR === "#QR-8822" ? "bg-primary-fixed text-primary" : "bg-surface-container-high text-on-surface hover:bg-primary-fixed"}`}
                  >
                    #QR-8822 (Mường Lát)
                  </button>
                  <button
                    onClick={() => setActiveQR("#QR-8815")}
                    className={`px-2 py-1 rounded font-code-num transition-colors ${activeQR === "#QR-8815" ? "bg-primary-fixed text-primary" : "bg-surface-container-high text-on-surface hover:bg-primary-fixed"}`}
                  >
                    #QR-8815 (Trà Dơn)
                  </button>
                </div>
              </div>

              {/* Main Two-column Content Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
                {/* LEFT PRIMARY TRACKING WORKSPACE (8 Columns) */}
                <div className="xl:col-span-8 flex flex-col gap-space-lg">
                  {/* Hero Equipment Overview Card */}
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-space-lg items-start">
                      {/* Equipment Image Frame */}
                      <div className="relative w-full md:w-56 h-52 shrink-0 rounded-lg overflow-hidden bg-surface-container-high">
                        <img
                          alt="Laptop Dell"
                          className="w-full h-full object-cover"
                          src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80"
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 bg-primary/90 text-on-primary font-code-num text-[11px] font-bold rounded">
                          GRADE A+
                        </span>
                        <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-inverse-surface/80 backdrop-blur-md text-inverse-on-surface font-code-num text-[10px] rounded">
                          Ảnh kiểm định Hub
                        </span>
                      </div>
                      {/* Specs & Donation Details */}
                      <div className="flex-1 flex flex-col justify-between w-full">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-code-num text-code-num text-primary font-bold bg-primary-fixed px-2 py-0.5 rounded">
                                ID: #QR-8821
                              </span>
                              <span className="font-label-sm text-label-sm px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed font-semibold rounded">
                                Đã qua 7 bước kiểm chuẩn
                              </span>
                            </div>
                            <h2 className="font-headline-md text-headline-md text-on-surface font-bold mt-1.5">
                              Laptop Dell Latitude 5520 Chuyên Dụng
                            </h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                              Intel Core i5-1145G7 | 16GB RAM DDR4 | SSD NVMe
                              256GB mới 100% | Pin đạt 96% dung lượng gốc
                            </p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary-fixed-dim/40 text-primary font-label-sm text-label-sm font-semibold rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                              Đang trên đường tới trường
                            </span>
                          </div>
                        </div>
                        {/* Metadata Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm mt-space-md pt-space-md bg-surface-container-low p-space-md rounded-lg">
                          <div className="flex flex-col">
                            <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                              Thuộc Phiếu Trao Tặng
                            </span>
                            <span className="font-code-num text-code-num text-on-surface font-semibold mt-0.5">
                              #DON-2024-8842
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                              Tập đoàn Vingroup
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                              Chiến Dịch Điều Phối
                            </span>
                            <span className="font-body-md text-body-md text-on-surface font-medium truncate mt-0.5">
                              Ánh Sáng Tri Thức Miền Tây
                            </span>
                            <span className="font-body-sm text-body-sm text-primary font-medium">
                              Đợt 4: Hà Giang Cực Bắc
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                              Điểm Trường Tiếp Nhận
                            </span>
                            <span className="font-body-md text-body-md text-on-surface font-medium truncate mt-0.5">
                              PTDTBT THCS Pà Vì
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                              Huyện Mèo Vạc, Hà Giang
                            </span>
                          </div>
                        </div>
                        {/* Installed Software Tags */}
                        <div className="flex flex-wrap items-center gap-1.5 mt-space-sm pt-2">
                          <span className="text-secondary font-label-sm text-label-sm">
                            Học liệu đã cài đặt sẵn:
                          </span>
                          <span className="px-2 py-0.5 bg-surface-container-high text-on-surface font-code-num text-[11px] rounded">
                            EduOS Linux v4.2
                          </span>
                          <span className="px-2 py-0.5 bg-surface-container-high text-on-surface font-code-num text-[11px] rounded">
                            Scratch 3.0 Offline
                          </span>
                          <span className="px-2 py-0.5 bg-surface-container-high text-on-surface font-code-num text-[11px] rounded">
                            SGK Số Bộ GD&amp;ĐT
                          </span>
                          <span className="px-2 py-0.5 bg-surface-container-high text-on-surface font-code-num text-[11px] rounded">
                            Từ Điển Song Ngữ H'Mông - Kinh
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Live Gps Map Tracker Module */}
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-md">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Bản Đồ GPS Vận Chuyển Thực Địa
                          </span>
                          <span className="px-2 py-0.5 bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-semibold rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-ping"></span>
                            Trực Tiếp 36 km/h
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                          Cung đường Quốc lộ 4C: Hà Nội → TP. Hà Giang → Cổng
                          Trời Quản Bạ → Đèo Mã Pí Lèng → Xã Pà Vì
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          className="p-2 bg-surface-container-high rounded-lg text-on-surface hover:bg-surface-container transition-colors"
                          title="Làm mới tọa độ"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            refresh
                          </span>
                        </button>
                        <button
                          className="p-2 bg-surface-container-high rounded-lg text-on-surface hover:bg-surface-container transition-colors"
                          title="Mở rộng toàn màn hình"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            fullscreen
                          </span>
                        </button>
                      </div>
                    </div>
                    {/* Interactive Graphic Route Map */}
                    <div className="relative w-full h-80 rounded-lg overflow-hidden bg-surface-container-high">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80')",
                        }}
                      ></div>
                      {/* Map Overlay Gradient for Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent pointer-events-none"></div>
                      {/* Route Marker Visual SVG */}
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M 60 260 Q 220 220 380 180 T 640 110 T 820 80"
                          fill="none"
                          opacity="0.8"
                          stroke="#2563eb"
                          strokeDasharray="8 6"
                          strokeLinecap="round"
                          strokeWidth="4"
                        ></path>
                        <circle
                          cx="60"
                          cy="260"
                          fill="#004ac6"
                          r="7"
                          stroke="#ffffff"
                          strokeWidth="3"
                        ></circle>
                        <circle
                          cx="380"
                          cy="180"
                          fill="#006058"
                          r="6"
                          stroke="#ffffff"
                          strokeWidth="2"
                        ></circle>
                        <circle
                          cx="640"
                          cy="110"
                          fill="#2563eb"
                          r="10"
                          stroke="#ffffff"
                          strokeWidth="3"
                        ></circle>
                        <circle
                          cx="820"
                          cy="80"
                          fill="#565e74"
                          r="8"
                          stroke="#ffffff"
                          strokeWidth="3"
                        ></circle>
                      </svg>
                      {/* Dynamic GPS Vehicle Pin Callout */}
                      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 bg-surface-container-lowest text-on-surface p-space-sm rounded-xl shadow-xl flex items-center gap-space-sm max-w-sm">
                        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-on-primary shrink-0">
                          <span className="material-symbols-outlined text-[20px]">
                            local_shipping
                          </span>
                        </div>
                        <div className="flex flex-col overflow-hidden">
                          <span className="font-label-sm text-label-sm font-bold text-primary truncate">
                            Đang qua Đèo Mã Pí Lèng
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface truncate">
                            Km 152 QL4C • Độ cao 1,280m
                          </span>
                        </div>
                        <span className="font-code-num text-code-num text-[11px] text-tertiary bg-tertiary-fixed px-1.5 py-0.5 rounded font-bold ml-auto shrink-0">
                          -38 km
                        </span>
                      </div>
                      {/* Bottom Telemetry HUD Bar */}
                      <div className="absolute bottom-3 left-3 right-3 p-space-sm bg-inverse-surface/85 backdrop-blur-md rounded-lg text-inverse-on-surface flex flex-wrap items-center justify-between gap-space-sm">
                        <div className="flex items-center gap-space-md">
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">
                              thermostat
                            </span>
                            <div className="flex flex-col">
                              <span className="text-[10px] text-outline font-label-sm leading-none">
                                Nhiệt độ thùng hàng
                              </span>
                              <span className="font-code-num text-code-num font-semibold text-inverse-on-surface">
                                21.5°C (Tối ưu)
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[18px] text-primary-fixed">
                              humidity_percentage
                            </span>
                            <div className="flex flex-col">
                              <span className="text-[10px] text-outline font-label-sm leading-none">
                                Độ ẩm chống sốc
                              </span>
                              <span className="font-code-num text-code-num font-semibold text-inverse-on-surface">
                                52% RH
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">
                              speed
                            </span>
                            <div className="flex flex-col">
                              <span className="text-[10px] text-outline font-label-sm leading-none">
                                Vận tốc di chuyển
                              </span>
                              <span className="font-code-num text-code-num font-semibold text-inverse-on-surface">
                                36.2 km/h
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Volunteer Escort Contact */}
                        <div className="flex items-center gap-space-sm border-l border-outline/30 pl-space-md">
                          <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0 font-bold font-headline-sm text-xs">
                            LH
                          </div>
                          <div className="flex flex-col">
                            <span className="font-label-sm text-label-sm font-semibold text-inverse-on-surface">
                              Lê Hoàng Long (TNV Trưởng Đoàn)
                            </span>
                            <span className="font-code-num text-[11px] text-secondary-fixed">
                              Ford Ranger Bán Tải 29C-882.10
                            </span>
                          </div>
                          <button
                            className="ml-2 px-2.5 py-1 bg-primary text-on-primary text-xs font-label-md rounded flex items-center gap-1 hover:brightness-110"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[14px]">
                              call
                            </span>
                            <span className="">Liên hệ</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Trip Milestones Indicator Bar */}
                    <div className="mt-space-md grid grid-cols-2 sm:grid-cols-4 gap-space-sm text-center">
                      <div className="p-space-sm bg-surface-container-high rounded-lg">
                        <span className="font-label-sm text-label-sm text-secondary uppercase">
                          Khởi Hành
                        </span>
                        <div className="font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5">
                          05:30 Sáng
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Hub Cầu Giấy, Hà Nội
                        </span>
                      </div>
                      <div className="p-space-sm bg-surface-container-high rounded-lg">
                        <span className="font-label-sm text-label-sm text-secondary uppercase">
                          Đã Di Chuyển
                        </span>
                        <div className="font-headline-sm text-headline-sm font-bold text-primary mt-0.5">
                          412 km
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Vượt 2 đèo lớn
                        </span>
                      </div>
                      <div className="p-space-sm bg-surface-container-high rounded-lg">
                        <span className="font-label-sm text-label-sm text-secondary uppercase">
                          Khoảng Cách Còn
                        </span>
                        <div className="font-headline-sm text-headline-sm font-bold text-tertiary mt-0.5">
                          38 km
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Khoảng 55 phút xe chạy
                        </span>
                      </div>
                      <div className="p-space-sm bg-surface-container-high rounded-lg">
                        <span className="font-label-sm text-label-sm text-secondary uppercase">
                          Dự Kiến Bàn Giao
                        </span>
                        <div className="font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5">
                          16:30 Hôm nay
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Sân trường PTDTBT Pà Vì
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 5-stage Equipment Lifecycle Timeline */}
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                    <div className="flex items-center justify-between mb-space-lg">
                      <div>
                        <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                          Tiến Trình Vòng Đời Thiết Bị &amp; Nhật Ký Minh Bạch
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Mỗi mốc thời gian đều được bảo chứng chữ ký số
                          Edushare Core v2.8 và không thể chỉnh sửa
                        </p>
                      </div>
                      <span className="font-code-num text-code-num text-primary font-semibold bg-primary-fixed px-2.5 py-1 rounded-full text-xs">
                        4 / 5 Chặng Hoàn Tất
                      </span>
                    </div>
                    {/* Step by Step Audit Rail */}
                    <div className="relative pl-6 space-y-space-lg">
                      <div className="absolute left-2.5 top-3 bottom-4 w-0.5 bg-surface-container-highest"></div>

                      {/* CHẶNG 1: HOÀN TẤT */}
                      <div className="relative flex items-start gap-space-md">
                        <div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 ring-4 ring-surface-container-lowest z-10 -ml-[19px]">
                          <span className="material-symbols-outlined text-[15px] font-bold">
                            check
                          </span>
                        </div>
                        <div className="flex-1 bg-surface-container-low p-space-md rounded-lg">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                                Chặng 1: Tiếp nhận &amp; Niêm phong tại Hub Hà
                                Nội
                              </span>
                              <span className="font-code-num text-[11px] bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded font-bold">
                                ĐÃ XÁC NHẬN
                              </span>
                            </div>
                            <span className="font-code-num text-code-num text-outline text-xs">
                              14:30 • 22/10/2024
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface-variant mt-1.5">
                            Tiếp nhận 20 máy Laptop từ Văn phòng Tập đoàn
                            Vingroup. Kỹ thuật viên kiểm đếm nguyên kiện, dán mã
                            QR định danh số cá thể #QR-8821, chụp ảnh lưu kho và
                            khởi tạo block bảo chứng.
                          </p>
                          <div className="mt-space-sm flex items-center gap-space-md text-xs font-code-num text-secondary">
                            <span className="">
                              Người tiếp nhận: Nguyễn Mai Anh (Thủ kho EduShare
                              Hub 1)
                            </span>
                            <span className="">
                              Biên bản tiếp nhận: #REC-8842-A
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* CHẶNG 2: HOÀN TẤT */}
                      <div className="relative flex items-start gap-space-md">
                        <div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 ring-4 ring-surface-container-lowest z-10 -ml-[19px]">
                          <span className="material-symbols-outlined text-[15px] font-bold">
                            check
                          </span>
                        </div>
                        <div className="flex-1 bg-surface-container-low p-space-md rounded-lg">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                                Chặng 2: Kiểm định kỹ thuật 7 bước &amp; Nâng
                                cấp linh kiện
                              </span>
                              <span className="font-code-num text-[11px] bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded font-bold">
                                GRADE A+ PASSED
                              </span>
                            </div>
                            <span className="font-code-num text-code-num text-outline text-xs">
                              09:15 • 23/10/2024
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface-variant mt-1.5">
                            Thực hiện quy trình kiểm tra phần cứng độc lập: Nâng
                            cấp mới SSD NVMe 256GB mới 100%, tra keo tản nhiệt
                            Arctic MX-4, cài hệ điều hành EduOS Linux tối ưu hóa
                            học tập, đóng gói bộ SGK điện tử và dán tem vỡ bảo
                            mật số seri 90812.
                          </p>
                          <div className="mt-space-sm flex items-center gap-space-md text-xs font-code-num text-secondary">
                            <span className="">
                              Kỹ sư trưởng: Hoàng Sơn (Phòng Kiểm Chuẩn EduTech)
                            </span>
                            <span className="">
                              Tem bảo hành: #WAR-36M-90812
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* CHẶNG 3: HOÀN TẤT */}
                      <div className="relative flex items-start gap-space-md">
                        <div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 ring-4 ring-surface-container-lowest z-10 -ml-[19px]">
                          <span className="material-symbols-outlined text-[15px] font-bold">
                            check
                          </span>
                        </div>
                        <div className="flex-1 bg-surface-container-low p-space-md rounded-lg">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                                Chặng 3: Đóng thùng tiêu chuẩn &amp; Xuất kho
                                điều phối
                              </span>
                              <span className="font-code-num text-[11px] bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded font-bold">
                                XUẤT KHO THÀNH CÔNG
                              </span>
                            </div>
                            <span className="font-code-num text-code-num text-outline text-xs">
                              16:00 • 23/10/2024
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface-variant mt-1.5">
                            Đóng thùng xốp bọc khí 5 lớp chống rung xóc đèo núi
                            dốc. Niêm phong kèm chuột quang mới, sạc zin Dell
                            65W, cặp chống sốc và bàn di chuột. Lệnh điều chuyển
                            #XK-2024-892 được Ban Quản trị Quỹ phê duyệt điện
                            tử.
                          </p>
                          <div className="mt-space-sm flex items-center gap-space-md text-xs font-code-num text-secondary">
                            <span className="">Mã kiện hàng: #BOX-HG-04</span>
                            <span className="">Trọng lượng: 3.4 kg</span>
                          </div>
                        </div>
                      </div>

                      {/* CHẶNG 4: ĐANG DIỄN RA */}
                      <div className="relative flex items-start gap-space-md">
                        <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 ring-4 ring-primary-fixed z-10 -ml-[19px] shadow-lg animate-pulse">
                          <span className="material-symbols-outlined text-[15px]">
                            local_shipping
                          </span>
                        </div>
                        <div className="flex-1 bg-surface-container-high/70 p-space-md rounded-lg border-2 border-primary/20">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                                Chặng 4: Vận chuyển liên tỉnh vượt đèo cao
                              </span>
                              <span className="font-code-num text-[11px] bg-primary text-on-primary px-2 py-0.5 rounded font-bold animate-pulse">
                                ĐANG THỰC HIỆN
                              </span>
                            </div>
                            <span className="font-code-num text-code-num text-primary font-semibold text-xs">
                              Hiện tại (Cập nhật 2 phút trước)
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface mt-1.5">
                            Đội Tình nguyện viên Vượt Đèo Hà Giang tiếp quản và
                            vận chuyển bằng xe bán tải chuyên dụng. Đang vượt
                            qua đoạn dốc quanh co Đèo Mã Pí Lèng hướng về Huyện
                            Mèo Vạc. Thiết bị đo gia tốc báo trạng thái ổn định,
                            không va đập mạnh.
                          </p>
                          <div className="mt-space-sm flex flex-wrap items-center gap-space-md text-xs font-code-num text-on-surface-variant">
                            <span className="text-primary font-semibold">
                              TNV Phụ trách: Lê Hoàng Long (0988.xxx.123)
                            </span>
                            <span className="">
                              Định vị: Cột mốc Km 152 QL4C
                            </span>
                            <span className="">Tốc độ an toàn: 36 km/h</span>
                          </div>
                        </div>
                      </div>

                      {/* CHẶNG 5: DỰ KIẾN */}
                      <div className="relative flex items-start gap-space-md opacity-75">
                        <div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center shrink-0 ring-4 ring-surface-container-lowest z-10 -ml-[19px]">
                          <span className="material-symbols-outlined text-[15px]">
                            inventory_2
                          </span>
                        </div>
                        <div className="flex-1 bg-surface-container-low p-space-md rounded-lg">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                                Chặng 5: Bàn giao, Nghiệm thu thực địa &amp; Ký
                                biên bản số (PoD)
                              </span>
                              <span className="font-code-num text-[11px] bg-surface-container-highest text-secondary px-2 py-0.5 rounded font-bold">
                                DỰ KIẾN 16:30
                              </span>
                            </div>
                            <span className="font-code-num text-code-num text-outline text-xs">
                              16:30 • Chiều nay
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface-variant mt-1.5">
                            Đại diện Nhà trường (Thầy Hiệu trưởng Hoàng Văn Sơn)
                            và Ban Giám hiệu sẽ tiến hành mở niêm phong kiểm tra
                            máy trực tiếp trước sự chứng kiến của học sinh. Ký
                            biên bản giao nhận điện tử kèm ảnh chụp lưu trữ vào
                            hệ thống EduShare.
                          </p>
                          <div className="mt-space-sm flex items-center gap-space-md text-xs font-code-num text-outline">
                            <span className="">Trường THCS Pà Vì, Mèo Vạc</span>
                            <span className="">
                              Biên bản số: #POD-PAVI-2024
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDEBAR: QR CODE, SHA-256 & BATCH SIBLINGS (4 Columns) */}
                <div className="xl:col-span-4 flex flex-col gap-space-lg">
                  {/* Interactive Qr Card */}
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm text-center flex flex-col items-center">
                    <div className="w-full flex items-center justify-between pb-space-sm border-b border-surface-container-high">
                      <span className="font-label-sm text-label-sm uppercase font-bold text-secondary">
                        Mã QR Định Danh Cá Thể
                      </span>
                      <span className="font-code-num text-code-num text-primary font-semibold text-xs">
                        Chuẩn QR ISO/IEC 18004
                      </span>
                    </div>
                    {/* Dynamic QR Graphic Frame */}
                    <div className="my-space-md p-space-md bg-surface-container-low rounded-xl flex flex-col items-center justify-center relative group">
                      <svg
                        className="w-48 h-48 text-on-surface"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                      >
                        <rect
                          fill="none"
                          height="26"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="4"
                          width="26"
                          x="5"
                          y="5"
                        ></rect>
                        <rect
                          height="14"
                          rx="1"
                          width="14"
                          x="11"
                          y="11"
                        ></rect>
                        <rect
                          fill="none"
                          height="26"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="4"
                          width="26"
                          x="69"
                          y="5"
                        ></rect>
                        <rect
                          height="14"
                          rx="1"
                          width="14"
                          x="75"
                          y="11"
                        ></rect>
                        <rect
                          fill="none"
                          height="26"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="4"
                          width="26"
                          x="5"
                          y="69"
                        ></rect>
                        <rect
                          height="14"
                          rx="1"
                          width="14"
                          x="11"
                          y="75"
                        ></rect>
                        <rect height="5" width="5" x="36" y="8"></rect>
                        <rect height="5" width="6" x="46" y="8"></rect>
                        <rect height="5" width="5" x="57" y="15"></rect>
                        <rect height="6" width="7" x="36" y="24"></rect>
                        <rect height="5" width="5" x="48" y="24"></rect>
                        <rect height="6" width="6" x="58" y="24"></rect>
                        <rect height="5" width="5" x="8" y="38"></rect>
                        <rect height="5" width="6" x="18" y="38"></rect>
                        <rect height="5" width="5" x="29" y="38"></rect>
                        <rect height="6" width="6" x="39" y="36"></rect>
                        <rect height="5" width="5" x="50" y="38"></rect>
                        <rect height="5" width="5" x="61" y="36"></rect>
                        <rect height="5" width="6" x="72" y="38"></rect>
                        <rect height="5" width="5" x="83" y="38"></rect>
                        <rect height="5" width="6" x="8" y="48"></rect>
                        <rect height="5" width="5" x="20" y="48"></rect>
                        <rect
                          fill="#2563eb"
                          height="12"
                          width="12"
                          x="35"
                          y="46"
                        ></rect>
                        <circle cx="41" cy="52" fill="#ffffff" r="3"></circle>
                        <rect height="5" width="5" x="53" y="48"></rect>
                        <rect height="5" width="6" x="64" y="48"></rect>
                        <rect height="5" width="5" x="75" y="48"></rect>
                        <rect height="5" width="6" x="86" y="48"></rect>
                        <rect height="5" width="6" x="36" y="64"></rect>
                        <rect height="5" width="5" x="47" y="64"></rect>
                        <rect height="6" width="6" x="58" y="64"></rect>
                        <rect height="5" width="5" x="69" y="64"></rect>
                        <rect height="5" width="5" x="36" y="75"></rect>
                        <rect height="6" width="6" x="46" y="75"></rect>
                        <rect height="5" width="5" x="57" y="75"></rect>
                        <rect height="5" width="5" x="68" y="75"></rect>
                        <rect height="6" width="6" x="79" y="75"></rect>
                        <rect height="6" width="7" x="36" y="86"></rect>
                        <rect height="5" width="5" x="48" y="86"></rect>
                        <rect height="6" width="6" x="58" y="86"></rect>
                        <rect height="5" width="5" x="69" y="86"></rect>
                        <rect height="5" width="5" x="80" y="86"></rect>
                      </svg>
                      <div className="mt-2 text-center">
                        <span className="font-code-num text-code-num font-bold text-on-surface text-base">
                          {activeQR}-VN
                        </span>
                        <p className="font-body-sm text-[11px] text-outline">
                          Quét để xem trang minh bạch công cộng
                        </p>
                      </div>
                    </div>
                    {/* Public Link Display */}
                    <div className="w-full bg-surface-container-low px-space-sm py-2 rounded-lg flex items-center justify-between gap-1 mb-space-md">
                      <span className="font-code-num text-[11px] text-primary truncate">
                        edushare.vn/verify/{activeQR.replace("#", "")}
                      </span>
                      <button
                        className="text-secondary hover:text-primary transition-colors shrink-0"
                        title="Sao chép liên kết"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          content_copy
                        </span>
                      </button>
                    </div>
                    {/* Quick QR Action Grid */}
                    <div className="grid grid-cols-2 gap-space-sm w-full">
                      <button
                        className="py-2 px-3 bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          zoom_in
                        </span>
                        <span className="">Phóng to</span>
                      </button>
                      <button
                        className="py-2 px-3 bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          download
                        </span>
                        <span className="">Tải file PNG</span>
                      </button>
                    </div>
                  </div>

                  {/* Cryptographic Sha-256 Integrity Block */}
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                    <div className="flex items-center gap-space-sm mb-space-sm">
                      <span className="material-symbols-outlined text-tertiary text-[22px]">
                        verified_user
                      </span>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                          Chứng Nhận Toàn Vẹn SHA-256
                        </span>
                        <span className="font-label-sm text-label-sm text-outline">
                          Chống giả mạo nhật ký giao hàng
                        </span>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Mỗi thao tác quét mã, thay đổi tọa độ và xác nhận nghiệm
                      thu đều được tính toán vào chuỗi băm bất biến được lưu trữ
                      phân tán.
                    </p>
                    <div className="mt-space-md p-space-sm bg-inverse-surface rounded-lg text-inverse-on-surface font-code-num text-xs space-y-1">
                      <div className="text-outline text-[10px] uppercase font-bold tracking-wider">
                        HASH HIỆN TẠI (BLOCK #49102)
                      </div>
                      <div className="break-all font-mono text-tertiary-fixed text-[11px] leading-relaxed select-all">
                        8a7f4e91bc023d8fa19934e62c1149e7bdfa43a1299c80d5012e34fa980a331c
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-outline pt-1">
                        <span className="">
                          Đã đồng bộ Sổ cái Quốc gia v2.8
                        </span>
                        <span className="text-tertiary-fixed">Hợp lệ 100%</span>
                      </div>
                    </div>
                  </div>

                  {/* BATCH SIBLINGS LIST (20 THIẾT BỊ CÙNG ĐỢT) */}
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                    <div className="flex items-center justify-between mb-space-sm">
                      <div>
                        <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                          Thiết Bị Cùng Lô Hàng
                        </h4>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">
                          20 Laptop cùng bàn giao cho THCS Pà Vì
                        </p>
                      </div>
                      <span className="font-code-num text-code-num text-xs text-primary font-semibold">
                        Lô #L-88
                      </span>
                    </div>
                    <div className="space-y-space-xs mt-space-sm max-h-56 overflow-y-auto pr-1">
                      <div className="p-2 bg-primary-fixed text-on-primary-fixed rounded-lg flex items-center justify-between text-xs font-medium">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-primary">
                            laptop_chromebook
                          </span>
                          <span className="font-code-num font-bold">
                            #QR-8821
                          </span>
                          <span className="text-[11px] opacity-80">
                            (Đang xem)
                          </span>
                        </div>
                        <span className="font-code-num text-[11px] font-bold text-primary">
                          Km 152 QL4C
                        </span>
                      </div>
                      <Link
                        className="p-2 bg-surface-container-low hover:bg-surface-container-high rounded-lg flex items-center justify-between text-xs text-on-surface transition-colors"
                        to="#"
                      >
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            laptop_chromebook
                          </span>
                          <span className="font-code-num font-semibold">
                            #QR-8822
                          </span>
                          <span className="text-[11px] text-on-surface-variant">
                            Dell Latitude 5520
                          </span>
                        </div>
                        <span className="font-code-num text-[11px] text-tertiary font-medium">
                          Cùng xe tải
                        </span>
                      </Link>
                      <Link
                        className="p-2 bg-surface-container-low hover:bg-surface-container-high rounded-lg flex items-center justify-between text-xs text-on-surface transition-colors"
                        to="#"
                      >
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            laptop_chromebook
                          </span>
                          <span className="font-code-num font-semibold">
                            #QR-8823
                          </span>
                          <span className="text-[11px] text-on-surface-variant">
                            Dell Latitude 5520
                          </span>
                        </div>
                        <span className="font-code-num text-[11px] text-tertiary font-medium">
                          Cùng xe tải
                        </span>
                      </Link>
                      <Link
                        className="p-2 bg-surface-container-low hover:bg-surface-container-high rounded-lg flex items-center justify-between text-xs text-on-surface transition-colors"
                        to="#"
                      >
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            laptop_chromebook
                          </span>
                          <span className="font-code-num font-semibold">
                            #QR-8824
                          </span>
                          <span className="text-[11px] text-on-surface-variant">
                            Dell Latitude 5520
                          </span>
                        </div>
                        <span className="font-code-num text-[11px] text-tertiary font-medium">
                          Cùng xe tải
                        </span>
                      </Link>
                      <Link
                        className="p-2 bg-surface-container-low hover:bg-surface-container-high rounded-lg flex items-center justify-between text-xs text-on-surface transition-colors"
                        to="#"
                      >
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            laptop_chromebook
                          </span>
                          <span className="font-code-num font-semibold">
                            #QR-8825
                          </span>
                          <span className="text-[11px] text-on-surface-variant">
                            Dell Latitude 5520
                          </span>
                        </div>
                        <span className="font-code-num text-[11px] text-tertiary font-medium">
                          Cùng xe tải
                        </span>
                      </Link>
                    </div>
                    <div className="mt-space-md pt-space-sm border-t border-surface-container-high flex items-center justify-between text-xs">
                      <span className="text-on-surface-variant">
                        Xem trọn bộ 20 máy
                      </span>
                      <button
                        className="text-primary font-semibold hover:underline"
                        type="button"
                      >
                        Mở danh sách lô →
                      </button>
                    </div>
                  </div>

                  {/* 36-month Maintenance Commitment Card */}
                  <div className="bg-gradient-to-br from-tertiary/10 via-surface-container-low to-surface-container-high p-space-md rounded-xl shadow-sm">
                    <div className="flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-tertiary text-[24px]">
                        verified
                      </span>
                      <div>
                        <span className="font-label-md text-label-md font-bold text-on-surface">
                          Bảo Trợ Kỹ Thuật 36 Tháng
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          EduCare Core cam kết cử kỹ thuật viên bảo dưỡng định
                          kỳ 6 tháng/lần tại trường THCS Pà Vì. Hỗ trợ 1 đổi 1
                          linh kiện tận nơi nếu phát sinh lỗi phần cứng.
                        </p>
                        <div className="mt-space-sm flex items-center gap-2">
                          <span className="font-code-num text-[11px] text-tertiary font-semibold bg-surface-container-lowest px-2 py-0.5 rounded">
                            Hotline SOS: 1800-6899
                          </span>
                          <span className="font-label-sm text-[11px] text-secondary">
                            Miễn cước 24/7
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Donor Empowerment Statement */}
              <div className="mt-space-lg p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[26px]">
                      handshake
                    </span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      Minh Bạch Tuyệt Đối - Nâng Bước Tương Lai
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Mỗi chiếc máy tính bạn trao tặng mở ra chân trời học tập
                      số cho học sinh vùng cao. Cảm ơn sự đồng hành quý báu của{" "}
                      <strong>Tập đoàn Vingroup</strong>.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm shrink-0">
                  <button
                    className="px-space-md py-2 bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-lg transition-colors"
                    type="button"
                  >
                    Gửi lời nhắn động viên đoàn xe
                  </button>
                  <button
                    className="px-space-md py-2 bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:brightness-110 transition-colors"
                    type="button"
                  >
                    Đăng ký trao tặng thêm máy mới
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
