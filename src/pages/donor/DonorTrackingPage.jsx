import { useState } from "react";
import { Link } from "react-router-dom";

export default function DonorTrackingPage() {
  const [activeQR, setActiveQR] = useState("#QR-8821");

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface flex antialiased">
      {/* Sidebar */}
      <aside className="bg-surface-container-low fixed top-0 left-0 z-50 flex h-full w-72 flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="px-space-md gap-space-sm bg-surface-container-lowest flex h-16 items-center shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
            <div className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
              <span className="material-symbols-outlined text-on-primary text-[22px]">volunteer_activism</span>
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="font-headline-sm text-headline-sm text-primary truncate leading-none font-bold tracking-tight">
                EduShare VN
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-space-xs truncate tracking-wider uppercase">
                Cổng Nhà Hảo Tâm
              </span>
            </div>
          </div>
          <div className="px-space-md py-space-sm mt-space-sm">
            <div className="px-space-sm py-space-xs bg-surface-container-high text-on-surface flex items-center justify-between rounded-lg">
              <span className="font-label-sm text-label-sm text-secondary font-semibold tracking-wider uppercase">
                Điều Hướng Chính
              </span>
              <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed rounded px-1.5 py-0.5 font-semibold">
                NHT
              </span>
            </div>
          </div>
          <nav className="gap-space-xs px-space-md mt-space-xs flex flex-col">
            <Link
              className="gap-space-sm px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center rounded-lg transition-colors"
              to="/donor/donation-details"
            >
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
              <span className="font-label-md text-label-md font-medium">Đăng ký trao tặng</span>
            </Link>
            <Link
              className="gap-space-sm px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center rounded-lg transition-colors"
              to="/donor/dashboard"
            >
              <span className="material-symbols-outlined text-[20px]">assignment</span>
              <span className="font-label-md text-label-md font-medium">Quản lý phiếu của tôi</span>
            </Link>
            <Link
              className="gap-space-sm px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center rounded-lg transition-colors"
              to="/donor/certificates"
            >
              <span className="material-symbols-outlined text-[20px]">verified</span>
              <span className="font-label-md text-label-md font-medium">Biên nhận &amp; Chứng nhận</span>
            </Link>
            <Link
              className="gap-space-sm px-space-md py-space-sm bg-primary text-on-primary flex items-center rounded-lg font-semibold shadow-sm transition-colors"
              to="/donor/tracking"
            >
              <span className="material-symbols-outlined text-on-primary text-[20px]">qr_code_scanner</span>
              <span className="font-label-md text-label-md font-semibold">Hành trình &amp; Mã QR</span>
            </Link>
            <Link
              className="gap-space-sm px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center rounded-lg transition-colors"
              to="/donor/campaigns"
            >
              <span className="material-symbols-outlined text-[20px]">campaign</span>
              <span className="font-label-md text-label-md font-medium">Đợt vận động đang chạy</span>
            </Link>
          </nav>
        </div>
        <div className="p-space-md bg-surface-container-lowest/80 m-space-md rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-sm">
          <div className="gap-space-xs text-tertiary mb-space-xs flex items-center">
            <span className="bg-tertiary h-2 w-2 animate-pulse rounded-full"></span>
            <span className="font-label-sm text-label-sm font-semibold tracking-wide uppercase">
              Hệ thống Trực tuyến
            </span>
          </div>
          <div className="font-body-sm text-body-sm text-on-surface font-medium">Kết nối 63 Tỉnh Thành Toàn Quốc</div>
          <div className="font-code-num text-code-num text-outline mt-space-xs flex items-center justify-between text-[11px]">
            <span className="">Bản dựng EduShare</span>
            <span className="">v2.8.4</span>
          </div>
        </div>
      </aside>

      <div className="w-full flex-1 pl-72">
        <header className="bg-surface/85 px-gutter-desktop gap-space-md fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="max-w-xl flex-1">
            <div className="bg-surface-container-lowest px-space-md py-space-xs relative flex w-full items-center rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
              <span className="material-symbols-outlined text-outline mr-space-sm shrink-0 text-[20px]">search</span>
              <input
                className="text-on-surface font-body-md text-body-md placeholder:text-outline w-full bg-transparent focus:outline-none"
                placeholder="Tra cứu mã phiếu (#DON), số serial, mã QR thiết bị..."
                type="text"
              />
            </div>
          </div>
          <div className="gap-space-md flex shrink-0 items-center">
            <div className="gap-space-sm px-space-md bg-surface-container-high hidden items-center rounded-full py-1.5 xl:flex">
              <span className="material-symbols-outlined text-primary text-[18px]">corporate_fare</span>
              <div className="flex flex-col text-left">
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-none font-medium">
                  Tổ chức Hảo tâm
                </span>
                <span className="font-label-md text-label-md text-on-surface max-w-[160px] truncate font-semibold">
                  Tập đoàn Vingroup
                </span>
              </div>
              <span className="font-code-num text-code-num text-primary bg-surface-container-lowest ml-space-xs rounded px-1.5 py-0.5 text-[11px] font-semibold">
                #NHT-78294
              </span>
            </div>
            <button
              aria-label="Thông báo"
              className="p-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface relative flex items-center justify-center rounded-xl transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="bg-error ring-surface absolute top-2 right-2 h-2 w-2 rounded-full ring-2"></span>
            </button>
            <div className="gap-space-sm pl-space-xs flex items-center">
              <div className="bg-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
              <div className="hidden flex-col text-left sm:flex">
                <span className="font-label-md text-label-md text-on-surface leading-tight font-semibold">
                  Ban Điều Hành
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-none">
                  Quản trị viên Quỹ
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-surface relative min-h-screen pt-16">
          <div className="flex w-full flex-col">
            {/* Dynamic Top Banner / Notification Bar */}
            <div className="px-gutter-desktop py-space-sm bg-surface-container-high/60 flex items-center justify-between">
              <div className="gap-space-sm flex items-center">
                <span className="bg-tertiary-container text-on-tertiary-container inline-flex h-6 w-6 items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    sensors
                  </span>
                </span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  <strong>Giám sát hành trình trực tiếp:</strong> Cảm biến IoT trên kiện hàng đang phát tín hiệu định kỳ
                  mỗi 45 giây. Tọa độ GPS đã xác minh.
                </span>
              </div>
              <div className="gap-space-sm flex items-center">
                <span className="font-code-num text-code-num text-tertiary bg-surface-container-lowest rounded px-2 py-0.5 text-[11px] font-semibold tracking-wider uppercase">
                  Mã Hash SHA-256 xác thực
                </span>
                <span className="font-code-num text-code-num text-outline text-[11px]">v2.8-LIVE</span>
              </div>
            </div>

            <div className="p-gutter-desktop space-y-space-lg mx-auto w-full max-w-[1720px]">
              {/* Breadcrumb & Header Utility Panel */}
              <div className="gap-space-md flex flex-col justify-between lg:flex-row lg:items-center">
                <div className="flex flex-col gap-1">
                  <nav className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-2">
                    <Link className="hover:text-primary transition-colors" to="/">
                      EduShare VN
                    </Link>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <Link className="hover:text-primary transition-colors" to="/donor/dashboard">
                      Cổng Nhà Hảo Tâm
                    </Link>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <Link className="hover:text-primary transition-colors" to="/donor/tracking">
                      Hành trình &amp; Mã QR
                    </Link>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="text-primary font-code-num font-semibold">
                      #QR-8821 (Laptop Dell Latitude 5520)
                    </span>
                  </nav>
                  <div className="gap-space-sm mt-1 flex flex-wrap items-center">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                      Tra Cứu Hành Trình &amp; Quản Lý Mã QR Thiết Bị
                    </h1>
                    <span className="px-space-sm bg-tertiary/10 text-tertiary font-label-sm text-label-sm inline-flex items-center gap-1.5 rounded-full py-1 font-semibold">
                      <span className="bg-tertiary h-2 w-2 animate-ping rounded-full"></span>
                      GPS Live Tracking • Bất Biến SHA-256
                    </span>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="gap-space-sm flex flex-wrap items-center">
                  <button
                    className="gap-space-xs px-space-md bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-md text-label-md inline-flex items-center rounded-lg py-2 shadow-sm transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">print</span>
                    <span className="">In Tem QR Lô Hàng (A4)</span>
                  </button>
                  <button
                    className="gap-space-xs px-space-md bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-md text-label-md inline-flex items-center rounded-lg py-2 shadow-sm transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">share</span>
                    <span className="">Chia sẻ công khai</span>
                  </button>
                  <button
                    className="gap-space-xs px-space-md bg-primary-container text-on-primary font-label-md text-label-md inline-flex items-center rounded-lg py-2 shadow-sm transition-all hover:brightness-105"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span className="">Xuất Nhật Ký (CSV)</span>
                  </button>
                </div>
              </div>

              {/* Quick Search & Smart Lookup Bar */}
              <div className="bg-surface-container-lowest p-space-md gap-space-md flex flex-col items-center justify-between rounded-xl shadow-sm md:flex-row">
                <div className="gap-space-sm flex w-full flex-1 flex-col items-center sm:flex-row">
                  <div className="relative w-full">
                    <span className="material-symbols-outlined text-outline absolute top-1/2 left-3.5 -translate-y-1/2 text-[20px]">
                      qr_code_scanner
                    </span>
                    <input
                      className="bg-surface-container-low text-on-surface font-code-num text-code-num focus:bg-surface-container-lowest focus:ring-primary placeholder:text-outline w-full rounded-lg py-2.5 pr-4 pl-11 transition-all focus:ring-2 focus:outline-none"
                      placeholder="Nhập mã QR thiết bị, Số Serial, Mã phiếu quyên góp..."
                      type="text"
                      defaultValue="#QR-8821"
                    />
                  </div>
                  <button
                    className="px-space-lg bg-primary text-on-primary font-label-md text-label-md flex w-full shrink-0 items-center justify-center gap-1.5 rounded-lg py-2.5 shadow-sm transition-all hover:brightness-110 sm:w-auto"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">search</span>
                    <span className="">Tra cứu</span>
                  </button>
                  <button
                    className="px-space-md bg-secondary-container text-on-secondary-fixed font-label-md text-label-md hover:bg-surface-container-highest flex w-full shrink-0 items-center justify-center gap-1.5 rounded-lg py-2.5 transition-all sm:w-auto"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                    <span className="">Quét Camera</span>
                  </button>
                </div>
                <div className="gap-space-xs text-on-surface-variant font-label-sm text-label-sm flex w-full items-center overflow-x-auto md:w-auto">
                  <span className="text-secondary shrink-0">Gợi ý nhanh:</span>
                  <button
                    onClick={() => setActiveQR("#QR-8821")}
                    className={`font-code-num rounded px-2 py-1 transition-colors ${activeQR === "#QR-8821" ? "bg-primary-fixed text-primary" : "bg-surface-container-high text-on-surface hover:bg-primary-fixed"}`}
                  >
                    #QR-8821 (Pà Vì)
                  </button>
                  <button
                    onClick={() => setActiveQR("#QR-8822")}
                    className={`font-code-num rounded px-2 py-1 transition-colors ${activeQR === "#QR-8822" ? "bg-primary-fixed text-primary" : "bg-surface-container-high text-on-surface hover:bg-primary-fixed"}`}
                  >
                    #QR-8822 (Mường Lát)
                  </button>
                  <button
                    onClick={() => setActiveQR("#QR-8815")}
                    className={`font-code-num rounded px-2 py-1 transition-colors ${activeQR === "#QR-8815" ? "bg-primary-fixed text-primary" : "bg-surface-container-high text-on-surface hover:bg-primary-fixed"}`}
                  >
                    #QR-8815 (Trà Dơn)
                  </button>
                </div>
              </div>

              {/* Main Two-column Content Grid */}
              <div className="gap-space-lg grid grid-cols-1 items-start xl:grid-cols-12">
                {/* LEFT PRIMARY TRACKING WORKSPACE (8 Columns) */}
                <div className="gap-space-lg flex flex-col xl:col-span-8">
                  {/* Hero Equipment Overview Card */}
                  <div className="bg-surface-container-lowest p-space-lg relative overflow-hidden rounded-xl shadow-sm">
                    <div className="gap-space-lg flex flex-col items-start md:flex-row">
                      {/* Equipment Image Frame */}
                      <div className="bg-surface-container-high relative h-52 w-full shrink-0 overflow-hidden rounded-lg md:w-56">
                        <img
                          alt="Laptop Dell"
                          className="h-full w-full object-cover"
                          src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80"
                        />
                        <span className="bg-primary/90 text-on-primary font-code-num absolute top-2 left-2 rounded px-2 py-0.5 text-[11px] font-bold">
                          GRADE A+
                        </span>
                        <span className="bg-inverse-surface/80 text-inverse-on-surface font-code-num absolute right-2 bottom-2 rounded px-2 py-0.5 text-[10px] backdrop-blur-md">
                          Ảnh kiểm định Hub
                        </span>
                      </div>
                      {/* Specs & Donation Details */}
                      <div className="flex w-full flex-1 flex-col justify-between">
                        <div className="gap-space-sm flex flex-col justify-between sm:flex-row sm:items-start">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-code-num text-code-num text-primary bg-primary-fixed rounded px-2 py-0.5 font-bold">
                                ID: #QR-8821
                              </span>
                              <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed rounded px-2 py-0.5 font-semibold">
                                Đã qua 7 bước kiểm chuẩn
                              </span>
                            </div>
                            <h2 className="font-headline-md text-headline-md text-on-surface mt-1.5 font-bold">
                              Laptop Dell Latitude 5520 Chuyên Dụng
                            </h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                              Intel Core i5-1145G7 | 16GB RAM DDR4 | SSD NVMe 256GB mới 100% | Pin đạt 96% dung lượng
                              gốc
                            </p>
                          </div>
                          <div className="shrink-0 text-right">
                            <span className="bg-primary-fixed-dim/40 text-primary font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold">
                              <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full"></span>
                              Đang trên đường tới trường
                            </span>
                          </div>
                        </div>
                        {/* Metadata Grid */}
                        <div className="gap-space-sm mt-space-md pt-space-md bg-surface-container-low p-space-md grid grid-cols-1 rounded-lg sm:grid-cols-3">
                          <div className="flex flex-col">
                            <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                              Thuộc Phiếu Trao Tặng
                            </span>
                            <span className="font-code-num text-code-num text-on-surface mt-0.5 font-semibold">
                              #DON-2024-8842
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                              Tập đoàn Vingroup
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                              Chiến Dịch Điều Phối
                            </span>
                            <span className="font-body-md text-body-md text-on-surface mt-0.5 truncate font-medium">
                              Ánh Sáng Tri Thức Miền Tây
                            </span>
                            <span className="font-body-sm text-body-sm text-primary font-medium">
                              Đợt 4: Hà Giang Cực Bắc
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                              Điểm Trường Tiếp Nhận
                            </span>
                            <span className="font-body-md text-body-md text-on-surface mt-0.5 truncate font-medium">
                              PTDTBT THCS Pà Vì
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                              Huyện Mèo Vạc, Hà Giang
                            </span>
                          </div>
                        </div>
                        {/* Installed Software Tags */}
                        <div className="mt-space-sm flex flex-wrap items-center gap-1.5 pt-2">
                          <span className="text-secondary font-label-sm text-label-sm">Học liệu đã cài đặt sẵn:</span>
                          <span className="bg-surface-container-high text-on-surface font-code-num rounded px-2 py-0.5 text-[11px]">
                            EduOS Linux v4.2
                          </span>
                          <span className="bg-surface-container-high text-on-surface font-code-num rounded px-2 py-0.5 text-[11px]">
                            Scratch 3.0 Offline
                          </span>
                          <span className="bg-surface-container-high text-on-surface font-code-num rounded px-2 py-0.5 text-[11px]">
                            SGK Số Bộ GD&amp;ĐT
                          </span>
                          <span className="bg-surface-container-high text-on-surface font-code-num rounded px-2 py-0.5 text-[11px]">
                            Từ Điển Song Ngữ H'Mông - Kinh
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Live Gps Map Tracker Module */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                    <div className="gap-space-sm mb-space-md flex flex-col justify-between sm:flex-row sm:items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Bản Đồ GPS Vận Chuyển Thực Địa
                          </span>
                          <span className="bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold">
                            <span className="bg-tertiary-fixed h-1.5 w-1.5 animate-ping rounded-full"></span>
                            Trực Tiếp 36 km/h
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                          Cung đường Quốc lộ 4C: Hà Nội → TP. Hà Giang → Cổng Trời Quản Bạ → Đèo Mã Pí Lèng → Xã Pà Vì
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <button
                          className="bg-surface-container-high text-on-surface hover:bg-surface-container rounded-lg p-2 transition-colors"
                          title="Làm mới tọa độ"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">refresh</span>
                        </button>
                        <button
                          className="bg-surface-container-high text-on-surface hover:bg-surface-container rounded-lg p-2 transition-colors"
                          title="Mở rộng toàn màn hình"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">fullscreen</span>
                        </button>
                      </div>
                    </div>
                    {/* Interactive Graphic Route Map */}
                    <div className="bg-surface-container-high relative h-80 w-full overflow-hidden rounded-lg">
                      <div
                        className="h-full w-full bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80')",
                        }}
                      ></div>
                      {/* Map Overlay Gradient for Readability */}
                      <div className="from-inverse-surface/90 via-inverse-surface/40 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent"></div>
                      {/* Route Marker Visual SVG */}
                      <svg
                        className="pointer-events-none absolute inset-0 h-full w-full"
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
                        <circle cx="60" cy="260" fill="#004ac6" r="7" stroke="#ffffff" strokeWidth="3"></circle>
                        <circle cx="380" cy="180" fill="#006058" r="6" stroke="#ffffff" strokeWidth="2"></circle>
                        <circle cx="640" cy="110" fill="#2563eb" r="10" stroke="#ffffff" strokeWidth="3"></circle>
                        <circle cx="820" cy="80" fill="#565e74" r="8" stroke="#ffffff" strokeWidth="3"></circle>
                      </svg>
                      {/* Dynamic GPS Vehicle Pin Callout */}
                      <div className="bg-surface-container-lowest text-on-surface p-space-sm gap-space-sm absolute top-1/3 left-1/2 flex max-w-sm -translate-x-1/2 -translate-y-1/2 items-center rounded-xl shadow-xl">
                        <div className="bg-primary text-on-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                          <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                        </div>
                        <div className="flex flex-col overflow-hidden">
                          <span className="font-label-sm text-label-sm text-primary truncate font-bold">
                            Đang qua Đèo Mã Pí Lèng
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface truncate">
                            Km 152 QL4C • Độ cao 1,280m
                          </span>
                        </div>
                        <span className="font-code-num text-code-num text-tertiary bg-tertiary-fixed ml-auto shrink-0 rounded px-1.5 py-0.5 text-[11px] font-bold">
                          -38 km
                        </span>
                      </div>
                      {/* Bottom Telemetry HUD Bar */}
                      <div className="p-space-sm bg-inverse-surface/85 text-inverse-on-surface gap-space-sm absolute right-3 bottom-3 left-3 flex flex-wrap items-center justify-between rounded-lg backdrop-blur-md">
                        <div className="gap-space-md flex items-center">
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">
                              thermostat
                            </span>
                            <div className="flex flex-col">
                              <span className="text-outline font-label-sm text-[10px] leading-none">
                                Nhiệt độ thùng hàng
                              </span>
                              <span className="font-code-num text-code-num text-inverse-on-surface font-semibold">
                                21.5°C (Tối ưu)
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                              humidity_percentage
                            </span>
                            <div className="flex flex-col">
                              <span className="text-outline font-label-sm text-[10px] leading-none">
                                Độ ẩm chống sốc
                              </span>
                              <span className="font-code-num text-code-num text-inverse-on-surface font-semibold">
                                52% RH
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">speed</span>
                            <div className="flex flex-col">
                              <span className="text-outline font-label-sm text-[10px] leading-none">
                                Vận tốc di chuyển
                              </span>
                              <span className="font-code-num text-code-num text-inverse-on-surface font-semibold">
                                36.2 km/h
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Volunteer Escort Contact */}
                        <div className="gap-space-sm border-outline/30 pl-space-md flex items-center border-l">
                          <div className="bg-primary-fixed text-on-primary-fixed font-headline-sm flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                            LH
                          </div>
                          <div className="flex flex-col">
                            <span className="font-label-sm text-label-sm text-inverse-on-surface font-semibold">
                              Lê Hoàng Long (TNV Trưởng Đoàn)
                            </span>
                            <span className="font-code-num text-secondary-fixed text-[11px]">
                              Ford Ranger Bán Tải 29C-882.10
                            </span>
                          </div>
                          <button
                            className="bg-primary text-on-primary font-label-md ml-2 flex items-center gap-1 rounded px-2.5 py-1 text-xs hover:brightness-110"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[14px]">call</span>
                            <span className="">Liên hệ</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Trip Milestones Indicator Bar */}
                    <div className="mt-space-md gap-space-sm grid grid-cols-2 text-center sm:grid-cols-4">
                      <div className="p-space-sm bg-surface-container-high rounded-lg">
                        <span className="font-label-sm text-label-sm text-secondary uppercase">Khởi Hành</span>
                        <div className="font-headline-sm text-headline-sm text-on-surface mt-0.5 font-bold">
                          05:30 Sáng
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Hub Cầu Giấy, Hà Nội</span>
                      </div>
                      <div className="p-space-sm bg-surface-container-high rounded-lg">
                        <span className="font-label-sm text-label-sm text-secondary uppercase">Đã Di Chuyển</span>
                        <div className="font-headline-sm text-headline-sm text-primary mt-0.5 font-bold">412 km</div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Vượt 2 đèo lớn</span>
                      </div>
                      <div className="p-space-sm bg-surface-container-high rounded-lg">
                        <span className="font-label-sm text-label-sm text-secondary uppercase">Khoảng Cách Còn</span>
                        <div className="font-headline-sm text-headline-sm text-tertiary mt-0.5 font-bold">38 km</div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Khoảng 55 phút xe chạy
                        </span>
                      </div>
                      <div className="p-space-sm bg-surface-container-high rounded-lg">
                        <span className="font-label-sm text-label-sm text-secondary uppercase">Dự Kiến Bàn Giao</span>
                        <div className="font-headline-sm text-headline-sm text-on-surface mt-0.5 font-bold">
                          16:30 Hôm nay
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Sân trường PTDTBT Pà Vì
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 5-stage Equipment Lifecycle Timeline */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                    <div className="mb-space-lg flex items-center justify-between">
                      <div>
                        <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                          Tiến Trình Vòng Đời Thiết Bị &amp; Nhật Ký Minh Bạch
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Mỗi mốc thời gian đều được bảo chứng chữ ký số Edushare Core v2.8 và không thể chỉnh sửa
                        </p>
                      </div>
                      <span className="font-code-num text-code-num text-primary bg-primary-fixed rounded-full px-2.5 py-1 text-xs font-semibold">
                        4 / 5 Chặng Hoàn Tất
                      </span>
                    </div>
                    {/* Step by Step Audit Rail */}
                    <div className="space-y-space-lg relative pl-6">
                      <div className="bg-surface-container-highest absolute top-3 bottom-4 left-2.5 w-0.5"></div>

                      {/* CHẶNG 1: HOÀN TẤT */}
                      <div className="gap-space-md relative flex items-start">
                        <div className="bg-tertiary text-on-tertiary ring-surface-container-lowest z-10 -ml-[19px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-4">
                          <span className="material-symbols-outlined text-[15px] font-bold">check</span>
                        </div>
                        <div className="bg-surface-container-low p-space-md flex-1 rounded-lg">
                          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                                Chặng 1: Tiếp nhận &amp; Niêm phong tại Hub Hà Nội
                              </span>
                              <span className="font-code-num bg-tertiary-fixed text-on-tertiary-fixed rounded px-2 py-0.5 text-[11px] font-bold">
                                ĐÃ XÁC NHẬN
                              </span>
                            </div>
                            <span className="font-code-num text-code-num text-outline text-xs">14:30 • 22/10/2024</span>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface-variant mt-1.5">
                            Tiếp nhận 20 máy Laptop từ Văn phòng Tập đoàn Vingroup. Kỹ thuật viên kiểm đếm nguyên kiện,
                            dán mã QR định danh số cá thể #QR-8821, chụp ảnh lưu kho và khởi tạo block bảo chứng.
                          </p>
                          <div className="mt-space-sm gap-space-md font-code-num text-secondary flex items-center text-xs">
                            <span className="">Người tiếp nhận: Nguyễn Mai Anh (Thủ kho EduShare Hub 1)</span>
                            <span className="">Biên bản tiếp nhận: #REC-8842-A</span>
                          </div>
                        </div>
                      </div>

                      {/* CHẶNG 2: HOÀN TẤT */}
                      <div className="gap-space-md relative flex items-start">
                        <div className="bg-tertiary text-on-tertiary ring-surface-container-lowest z-10 -ml-[19px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-4">
                          <span className="material-symbols-outlined text-[15px] font-bold">check</span>
                        </div>
                        <div className="bg-surface-container-low p-space-md flex-1 rounded-lg">
                          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                                Chặng 2: Kiểm định kỹ thuật 7 bước &amp; Nâng cấp linh kiện
                              </span>
                              <span className="font-code-num bg-tertiary-fixed text-on-tertiary-fixed rounded px-2 py-0.5 text-[11px] font-bold">
                                GRADE A+ PASSED
                              </span>
                            </div>
                            <span className="font-code-num text-code-num text-outline text-xs">09:15 • 23/10/2024</span>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface-variant mt-1.5">
                            Thực hiện quy trình kiểm tra phần cứng độc lập: Nâng cấp mới SSD NVMe 256GB mới 100%, tra
                            keo tản nhiệt Arctic MX-4, cài hệ điều hành EduOS Linux tối ưu hóa học tập, đóng gói bộ SGK
                            điện tử và dán tem vỡ bảo mật số seri 90812.
                          </p>
                          <div className="mt-space-sm gap-space-md font-code-num text-secondary flex items-center text-xs">
                            <span className="">Kỹ sư trưởng: Hoàng Sơn (Phòng Kiểm Chuẩn EduTech)</span>
                            <span className="">Tem bảo hành: #WAR-36M-90812</span>
                          </div>
                        </div>
                      </div>

                      {/* CHẶNG 3: HOÀN TẤT */}
                      <div className="gap-space-md relative flex items-start">
                        <div className="bg-tertiary text-on-tertiary ring-surface-container-lowest z-10 -ml-[19px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-4">
                          <span className="material-symbols-outlined text-[15px] font-bold">check</span>
                        </div>
                        <div className="bg-surface-container-low p-space-md flex-1 rounded-lg">
                          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                                Chặng 3: Đóng thùng tiêu chuẩn &amp; Xuất kho điều phối
                              </span>
                              <span className="font-code-num bg-tertiary-fixed text-on-tertiary-fixed rounded px-2 py-0.5 text-[11px] font-bold">
                                XUẤT KHO THÀNH CÔNG
                              </span>
                            </div>
                            <span className="font-code-num text-code-num text-outline text-xs">16:00 • 23/10/2024</span>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface-variant mt-1.5">
                            Đóng thùng xốp bọc khí 5 lớp chống rung xóc đèo núi dốc. Niêm phong kèm chuột quang mới, sạc
                            zin Dell 65W, cặp chống sốc và bàn di chuột. Lệnh điều chuyển #XK-2024-892 được Ban Quản trị
                            Quỹ phê duyệt điện tử.
                          </p>
                          <div className="mt-space-sm gap-space-md font-code-num text-secondary flex items-center text-xs">
                            <span className="">Mã kiện hàng: #BOX-HG-04</span>
                            <span className="">Trọng lượng: 3.4 kg</span>
                          </div>
                        </div>
                      </div>

                      {/* CHẶNG 4: ĐANG DIỄN RA */}
                      <div className="gap-space-md relative flex items-start">
                        <div className="bg-primary text-on-primary ring-primary-fixed z-10 -ml-[19px] flex h-6 w-6 shrink-0 animate-pulse items-center justify-center rounded-full shadow-lg ring-4">
                          <span className="material-symbols-outlined text-[15px]">local_shipping</span>
                        </div>
                        <div className="bg-surface-container-high/70 p-space-md border-primary/20 flex-1 rounded-lg border-2">
                          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                                Chặng 4: Vận chuyển liên tỉnh vượt đèo cao
                              </span>
                              <span className="font-code-num bg-primary text-on-primary animate-pulse rounded px-2 py-0.5 text-[11px] font-bold">
                                ĐANG THỰC HIỆN
                              </span>
                            </div>
                            <span className="font-code-num text-code-num text-primary text-xs font-semibold">
                              Hiện tại (Cập nhật 2 phút trước)
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface mt-1.5">
                            Đội Tình nguyện viên Vượt Đèo Hà Giang tiếp quản và vận chuyển bằng xe bán tải chuyên dụng.
                            Đang vượt qua đoạn dốc quanh co Đèo Mã Pí Lèng hướng về Huyện Mèo Vạc. Thiết bị đo gia tốc
                            báo trạng thái ổn định, không va đập mạnh.
                          </p>
                          <div className="mt-space-sm gap-space-md font-code-num text-on-surface-variant flex flex-wrap items-center text-xs">
                            <span className="text-primary font-semibold">
                              TNV Phụ trách: Lê Hoàng Long (0988.xxx.123)
                            </span>
                            <span className="">Định vị: Cột mốc Km 152 QL4C</span>
                            <span className="">Tốc độ an toàn: 36 km/h</span>
                          </div>
                        </div>
                      </div>

                      {/* CHẶNG 5: DỰ KIẾN */}
                      <div className="gap-space-md relative flex items-start opacity-75">
                        <div className="bg-surface-container-highest text-secondary ring-surface-container-lowest z-10 -ml-[19px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-4">
                          <span className="material-symbols-outlined text-[15px]">inventory_2</span>
                        </div>
                        <div className="bg-surface-container-low p-space-md flex-1 rounded-lg">
                          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                                Chặng 5: Bàn giao, Nghiệm thu thực địa &amp; Ký biên bản số (PoD)
                              </span>
                              <span className="font-code-num bg-surface-container-highest text-secondary rounded px-2 py-0.5 text-[11px] font-bold">
                                DỰ KIẾN 16:30
                              </span>
                            </div>
                            <span className="font-code-num text-code-num text-outline text-xs">16:30 • Chiều nay</span>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface-variant mt-1.5">
                            Đại diện Nhà trường (Thầy Hiệu trưởng Hoàng Văn Sơn) và Ban Giám hiệu sẽ tiến hành mở niêm
                            phong kiểm tra máy trực tiếp trước sự chứng kiến của học sinh. Ký biên bản giao nhận điện tử
                            kèm ảnh chụp lưu trữ vào hệ thống EduShare.
                          </p>
                          <div className="mt-space-sm gap-space-md font-code-num text-outline flex items-center text-xs">
                            <span className="">Trường THCS Pà Vì, Mèo Vạc</span>
                            <span className="">Biên bản số: #POD-PAVI-2024</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDEBAR: QR CODE, SHA-256 & BATCH SIBLINGS (4 Columns) */}
                <div className="gap-space-lg flex flex-col xl:col-span-4">
                  {/* Interactive Qr Card */}
                  <div className="bg-surface-container-lowest p-space-lg flex flex-col items-center rounded-xl text-center shadow-sm">
                    <div className="pb-space-sm border-surface-container-high flex w-full items-center justify-between border-b">
                      <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                        Mã QR Định Danh Cá Thể
                      </span>
                      <span className="font-code-num text-code-num text-primary text-xs font-semibold">
                        Chuẩn QR ISO/IEC 18004
                      </span>
                    </div>
                    {/* Dynamic QR Graphic Frame */}
                    <div className="my-space-md p-space-md bg-surface-container-low group relative flex flex-col items-center justify-center rounded-xl">
                      <svg className="text-on-surface h-48 w-48" fill="currentColor" viewBox="0 0 100 100">
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
                        <rect height="14" rx="1" width="14" x="11" y="11"></rect>
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
                        <rect height="14" rx="1" width="14" x="75" y="11"></rect>
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
                        <rect height="14" rx="1" width="14" x="11" y="75"></rect>
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
                        <rect fill="#2563eb" height="12" width="12" x="35" y="46"></rect>
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
                        <span className="font-code-num text-code-num text-on-surface text-base font-bold">
                          {activeQR}-VN
                        </span>
                        <p className="font-body-sm text-outline text-[11px]">Quét để xem trang minh bạch công cộng</p>
                      </div>
                    </div>
                    {/* Public Link Display */}
                    <div className="bg-surface-container-low px-space-sm mb-space-md flex w-full items-center justify-between gap-1 rounded-lg py-2">
                      <span className="font-code-num text-primary truncate text-[11px]">
                        edushare.vn/verify/{activeQR.replace("#", "")}
                      </span>
                      <button
                        className="text-secondary hover:text-primary shrink-0 transition-colors"
                        title="Sao chép liên kết"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">content_copy</span>
                      </button>
                    </div>
                    {/* Quick QR Action Grid */}
                    <div className="gap-space-sm grid w-full grid-cols-2">
                      <button
                        className="bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">zoom_in</span>
                        <span className="">Phóng to</span>
                      </button>
                      <button
                        className="bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">download</span>
                        <span className="">Tải file PNG</span>
                      </button>
                    </div>
                  </div>

                  {/* Cryptographic Sha-256 Integrity Block */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                    <div className="gap-space-sm mb-space-sm flex items-center">
                      <span className="material-symbols-outlined text-tertiary text-[22px]">verified_user</span>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm text-on-surface leading-tight font-bold">
                          Chứng Nhận Toàn Vẹn SHA-256
                        </span>
                        <span className="font-label-sm text-label-sm text-outline">
                          Chống giả mạo nhật ký giao hàng
                        </span>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Mỗi thao tác quét mã, thay đổi tọa độ và xác nhận nghiệm thu đều được tính toán vào chuỗi băm bất
                      biến được lưu trữ phân tán.
                    </p>
                    <div className="mt-space-md p-space-sm bg-inverse-surface text-inverse-on-surface font-code-num space-y-1 rounded-lg text-xs">
                      <div className="text-outline text-[10px] font-bold tracking-wider uppercase">
                        HASH HIỆN TẠI (BLOCK #49102)
                      </div>
                      <div className="text-tertiary-fixed font-mono text-[11px] leading-relaxed break-all select-all">
                        8a7f4e91bc023d8fa19934e62c1149e7bdfa43a1299c80d5012e34fa980a331c
                      </div>
                      <div className="text-outline flex items-center justify-between pt-1 text-[10px]">
                        <span className="">Đã đồng bộ Sổ cái Quốc gia v2.8</span>
                        <span className="text-tertiary-fixed">Hợp lệ 100%</span>
                      </div>
                    </div>
                  </div>

                  {/* BATCH SIBLINGS LIST (20 THIẾT BỊ CÙNG ĐỢT) */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                    <div className="mb-space-sm flex items-center justify-between">
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Thiết Bị Cùng Lô Hàng
                        </h4>
                        <p className="font-body-sm text-on-surface-variant text-[12px]">
                          20 Laptop cùng bàn giao cho THCS Pà Vì
                        </p>
                      </div>
                      <span className="font-code-num text-code-num text-primary text-xs font-semibold">Lô #L-88</span>
                    </div>
                    <div className="space-y-space-xs mt-space-sm max-h-56 overflow-y-auto pr-1">
                      <div className="bg-primary-fixed text-on-primary-fixed flex items-center justify-between rounded-lg p-2 text-xs font-medium">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[16px]">laptop_chromebook</span>
                          <span className="font-code-num font-bold">#QR-8821</span>
                          <span className="text-[11px] opacity-80">(Đang xem)</span>
                        </div>
                        <span className="font-code-num text-primary text-[11px] font-bold">Km 152 QL4C</span>
                      </div>
                      <Link
                        className="bg-surface-container-low hover:bg-surface-container-high text-on-surface flex items-center justify-between rounded-lg p-2 text-xs transition-colors"
                        to="#"
                      >
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[16px]">
                            laptop_chromebook
                          </span>
                          <span className="font-code-num font-semibold">#QR-8822</span>
                          <span className="text-on-surface-variant text-[11px]">Dell Latitude 5520</span>
                        </div>
                        <span className="font-code-num text-tertiary text-[11px] font-medium">Cùng xe tải</span>
                      </Link>
                      <Link
                        className="bg-surface-container-low hover:bg-surface-container-high text-on-surface flex items-center justify-between rounded-lg p-2 text-xs transition-colors"
                        to="#"
                      >
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[16px]">
                            laptop_chromebook
                          </span>
                          <span className="font-code-num font-semibold">#QR-8823</span>
                          <span className="text-on-surface-variant text-[11px]">Dell Latitude 5520</span>
                        </div>
                        <span className="font-code-num text-tertiary text-[11px] font-medium">Cùng xe tải</span>
                      </Link>
                      <Link
                        className="bg-surface-container-low hover:bg-surface-container-high text-on-surface flex items-center justify-between rounded-lg p-2 text-xs transition-colors"
                        to="#"
                      >
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[16px]">
                            laptop_chromebook
                          </span>
                          <span className="font-code-num font-semibold">#QR-8824</span>
                          <span className="text-on-surface-variant text-[11px]">Dell Latitude 5520</span>
                        </div>
                        <span className="font-code-num text-tertiary text-[11px] font-medium">Cùng xe tải</span>
                      </Link>
                      <Link
                        className="bg-surface-container-low hover:bg-surface-container-high text-on-surface flex items-center justify-between rounded-lg p-2 text-xs transition-colors"
                        to="#"
                      >
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[16px]">
                            laptop_chromebook
                          </span>
                          <span className="font-code-num font-semibold">#QR-8825</span>
                          <span className="text-on-surface-variant text-[11px]">Dell Latitude 5520</span>
                        </div>
                        <span className="font-code-num text-tertiary text-[11px] font-medium">Cùng xe tải</span>
                      </Link>
                    </div>
                    <div className="mt-space-md pt-space-sm border-surface-container-high flex items-center justify-between border-t text-xs">
                      <span className="text-on-surface-variant">Xem trọn bộ 20 máy</span>
                      <button className="text-primary font-semibold hover:underline" type="button">
                        Mở danh sách lô →
                      </button>
                    </div>
                  </div>

                  {/* 36-month Maintenance Commitment Card */}
                  <div className="from-tertiary/10 via-surface-container-low to-surface-container-high p-space-md rounded-xl bg-gradient-to-br shadow-sm">
                    <div className="gap-space-sm flex items-start">
                      <span className="material-symbols-outlined text-tertiary text-[24px]">verified</span>
                      <div>
                        <span className="font-label-md text-label-md text-on-surface font-bold">
                          Bảo Trợ Kỹ Thuật 36 Tháng
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          EduCare Core cam kết cử kỹ thuật viên bảo dưỡng định kỳ 6 tháng/lần tại trường THCS Pà Vì. Hỗ
                          trợ 1 đổi 1 linh kiện tận nơi nếu phát sinh lỗi phần cứng.
                        </p>
                        <div className="mt-space-sm flex items-center gap-2">
                          <span className="font-code-num text-tertiary bg-surface-container-lowest rounded px-2 py-0.5 text-[11px] font-semibold">
                            Hotline SOS: 1800-6899
                          </span>
                          <span className="font-label-sm text-secondary text-[11px]">Miễn cước 24/7</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Donor Empowerment Statement */}
              <div className="mt-space-lg p-space-md bg-surface-container-lowest gap-space-md flex flex-col items-center justify-between rounded-xl shadow-sm sm:flex-row">
                <div className="gap-space-md flex items-center">
                  <div className="bg-primary-fixed text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[26px]">handshake</span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Minh Bạch Tuyệt Đối - Nâng Bước Tương Lai
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Mỗi chiếc máy tính bạn trao tặng mở ra chân trời học tập số cho học sinh vùng cao. Cảm ơn sự đồng
                      hành quý báu của <strong>Tập đoàn Vingroup</strong>.
                    </p>
                  </div>
                </div>
                <div className="gap-space-sm flex shrink-0 items-center">
                  <button
                    className="px-space-md bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-lg py-2 transition-colors"
                    type="button"
                  >
                    Gửi lời nhắn động viên đoàn xe
                  </button>
                  <button
                    className="px-space-md bg-primary text-on-primary font-label-md text-label-md rounded-lg py-2 shadow-sm transition-colors hover:brightness-110"
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
