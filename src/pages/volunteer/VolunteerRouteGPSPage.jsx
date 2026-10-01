
export default function VolunteerRouteGPSPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen antialiased">
      {/* Sidebar */}
      <aside className="bg-surface-container-low fixed top-0 left-0 z-50 flex h-full w-72 flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="bg-surface-container-lowest border-surface-container flex h-16 items-center gap-3 border-b px-4">
            <div className="bg-primary text-on-primary flex h-9 w-9 items-center justify-center rounded-xl font-bold shadow-sm">
              <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-primary text-sm leading-none font-bold tracking-tight">
                EduShare VN
              </span>
              <span className="text-on-surface-variant mt-0.5 text-[11px] font-semibold tracking-wider">
                CỔNG TÌNH NGUYỆN VIÊN
              </span>
            </div>
          </div>

          <div className="flex max-h-[calc(100vh-140px)] flex-col gap-3 overflow-y-auto p-3">
            {/* Section 1: Điều động & Ca trực */}
            <nav className="flex flex-col gap-1">
              <div className="px-3 py-1">
                <span className="text-on-surface-variant text-[10px] font-bold tracking-wider uppercase">
                  ĐIỀU ĐỘNG & CA TRỰC
                </span>
              </div>
              <a
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors"
                href="/volunteer/attendance"
              >
                <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                <span>Điểm danh ca trực</span>
              </a>
              <a
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors"
                href="/volunteer/leaderboard"
              >
                <span className="material-symbols-outlined text-[20px]">military_tech</span>
                <span>Bảng xếp hạng & Giờ công</span>
              </a>
            </nav>

            {/* Section 2: Vận chuyển & Giao nhận (Active Group) */}
            <nav className="flex flex-col gap-1">
              <div className="px-3 py-1">
                <span className="text-on-surface-variant text-[10px] font-bold tracking-wider uppercase">
                  VẬN CHUYỂN & GIAO NHẬN
                </span>
              </div>
              <a
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors"
                href="/volunteer/waybill"
              >
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span>Vận đơn được gán</span>
              </a>
              {/* Active Menu Item */}
              <a
                className="bg-primary text-on-primary flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold shadow-sm"
                href="/volunteer/route-gps"
              >
                <span className="material-symbols-outlined text-[20px]">navigation</span>
                <span>Tuyến đường & GPS</span>
              </a>
              <a
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">inventory</span>
                <span>Xác nhận lấy hàng tại kho</span>
              </a>
            </nav>

            {/* Section 3: Biên bản & Sự cố */}
            <nav className="flex flex-col gap-1">
              <div className="px-3 py-1">
                <span className="text-on-surface-variant text-[10px] font-bold tracking-wider uppercase">
                  BIÊN BẢN & SỰ CỐ
                </span>
              </div>
              <a
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">warning</span>
                <span>Báo cáo sự cố chuyến đi</span>
              </a>
              <a
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                <span>Hoàn thành & Minh chứng PoD</span>
              </a>
            </nav>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="bg-surface-container-low border-surface-container border-t p-3">
          <div className="bg-surface-container flex flex-col gap-1 rounded-xl p-3">
            <div className="text-error flex items-center gap-1.5 text-xs font-semibold">
              <span className="material-symbols-outlined text-[16px]">sos</span>
              <span>HỖ TRỢ KHẨN CẤP 24/7</span>
            </div>
            <div className="text-on-surface text-sm font-bold">1900 6829</div>
            <div class="text-on-surface-variant text-[11px]">EduShare Vietnam v2.8.4-PROD</div>
          </div>
        </div>
      </aside>

      {/* Top Header */}
      <div className="pl-72">
        <header className="bg-surface/90 border-surface-container fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between border-b px-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="flex max-w-lg flex-1 items-center gap-4">
            <div className="relative w-full">
              <span className="material-symbols-outlined text-on-surface-variant absolute top-1/2 left-3 -translate-y-1/2 text-[18px]">
                search
              </span>
              <input
                className="bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant focus:ring-primary border-surface-container w-full rounded-xl border py-2 pr-4 pl-10 text-sm shadow-[0_1px_4px_rgba(0,0,0,0.02)] outline-none focus:ring-2"
                placeholder="Tìm mã vận đơn, chuyến xe, bảng xếp hạng..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-surface-container text-tertiary flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
              <span className="bg-tertiary h-2 w-2 animate-pulse rounded-full"></span>
              <span>Trực tuyến</span>
            </div>
            <button className="hover:bg-surface-container text-on-surface-variant hover:text-on-surface relative rounded-xl p-2 transition-colors">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="bg-error absolute top-1.5 right-1.5 h-2 w-2 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-2">
              <div className="flex hidden flex-col text-right sm:flex">
                <span className="font-headline-sm text-on-surface text-sm leading-tight font-semibold">
                  Lê Hoàng Long
                </span>
                <span className="text-on-surface-variant text-[11px]">
                  TNV-VCH-88 · Đội Trưởng Đội Vượt Đèo Hà Giang & Tây Bắc
                </span>
              </div>
              <div className="bg-primary text-on-primary flex h-8 w-8 items-center justify-center rounded-full font-bold shadow-sm">
                <span className="material-symbols-outlined text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Page Content */}
        <main className="bg-surface relative min-h-screen w-full px-6 py-6 pt-16">
          {/* Breadcrumb & Top Action Bar */}
          <div className="border-surface-container mb-6 flex flex-col justify-between gap-4 border-b pb-6 md:flex-row md:items-center">
            <div>
              <div className="text-on-surface-variant mb-1 flex items-center gap-1.5 text-xs font-medium">
                <span>EDUSHARE TNV</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span>VẬN CHUYỂN & GIAO NHẬN</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-primary font-semibold">TUYẾN ĐƯỜNG & GPS</span>
              </div>
              <div className="flex items-center gap-3">
                <h1 className="font-headline-lg text-on-surface text-2xl font-bold">
                  Giám Sát Tuyến Đường & Định Vị GPS Thực Địa
                </h1>
                <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold">
                  <span className="bg-tertiary h-2 w-2 animate-ping rounded-full"></span>
                  GPS Realtime • 5s/lần
                </span>
              </div>
              <p className="text-on-surface-variant mt-1 text-xs">
                Mã hành trình: <span className="text-primary font-mono font-semibold">#TN-NW-042</span> • Xe bán tải
                Ford Ranger <span className="text-on-surface font-mono font-semibold">29H-882.14</span> • Điểm đến:
                Trường PTDTBT THCS Mường Lát (Thanh Hóa)
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button className="bg-surface-container hover:bg-surface-container-high text-on-surface inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors">
                <span className="material-symbols-outlined text-tertiary text-[18px]">cloud_sync</span>
                <span>Đồng bộ Offline (Bộ đệm 12km)</span>
              </button>
              <button className="bg-surface-container hover:bg-surface-container-high text-on-surface inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors">
                <span className="material-symbols-outlined text-primary text-[18px]">share_location</span>
                <span>Chia sẻ vị trí cứu hộ</span>
              </button>
              <button
                className="bg-error hover:bg-error-container hover:text-on-error-container inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold text-white shadow-sm transition-all"
                onClick={() => alert("Đã phát tín hiệu SOS về Trung tâm điều phối!")}
              >
                <span className="material-symbols-outlined text-[18px]">warning</span>
                <span>Báo Nguy Hiểm / SOS Đèo</span>
              </button>
            </div>
          </div>

          {/* 4 Kpi Bento Cards */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest border-surface-container flex flex-col justify-between rounded-xl border p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                  Tốc độ & Cao độ
                </span>
                <div className="bg-primary-fixed text-primary flex h-8 w-8 items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-[20px]">speed</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-on-surface text-2xl font-bold">
                    38 <span className="text-on-surface-variant text-xs font-normal">km/h</span>
                  </span>
                  <span className="text-primary text-xs font-semibold">· Cao độ 1,150m</span>
                </div>
                <div className="text-on-surface-variant mt-1 flex items-center gap-1 text-[11px]">
                  <span className="material-symbols-outlined text-error text-[14px]">landscape</span>
                  <span>Đoạn đèo Pha Đin (Dốc 11%, khúc cua gắt)</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest border-surface-container flex flex-col justify-between rounded-xl border p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                  Tiến độ hành trình
                </span>
                <div className="bg-tertiary-fixed text-tertiary flex h-8 w-8 items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-[20px]">route</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-on-surface text-2xl font-bold">
                    312 / 485 <span className="text-on-surface-variant text-xs font-normal">km</span>
                  </span>
                  <span className="text-tertiary text-xs font-semibold">64.3%</span>
                </div>
                <div className="bg-surface-container mt-2 h-1.5 w-full overflow-hidden rounded-full">
                  <div className="bg-tertiary h-1.5 rounded-full" style={{ width: "64.3%" }}></div>
                </div>
                <div className="text-on-surface-variant mt-1 text-[11px]">Còn 173 km tới điểm trường Mường Lát</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest border-surface-container flex flex-col justify-between rounded-xl border p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                  Thời gian dự kiến (ETA)
                </span>
                <div className="bg-secondary-container text-secondary flex h-8 w-8 items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-primary text-2xl font-bold">
                    16:30 <span className="text-on-surface-variant text-xs font-normal">Hôm nay</span>
                  </span>
                  <span className="bg-surface-container text-on-surface-variant rounded px-1.5 py-0.5 text-[11px]">
                    ±15 phút
                  </span>
                </div>
                <div className="text-on-surface-variant mt-1 flex items-center gap-1 text-[11px]">
                  <span className="material-symbols-outlined text-tertiary text-[14px]">wb_cloudy</span>
                  <span>Thời tiết sương mù, đường khô ráo</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-surface-container-lowest border-surface-container flex flex-col justify-between rounded-xl border p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                  Tải trọng & Kiện hàng
                </span>
                <div className="bg-surface-container-high text-primary flex h-8 w-8 items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-on-surface text-2xl font-bold">
                    50 <span className="text-on-surface-variant text-xs font-normal">Kiện PC</span>
                  </span>
                  <span className="text-tertiary text-xs font-semibold">2.8 Tấn · Ổn định</span>
                </div>
                <div className="text-on-surface-variant mt-1 flex items-center justify-between text-[11px]">
                  <span>Cảm biến va đập: 0.12G (Chuẩn)</span>
                  <span className="text-primary font-semibold">Nhiệt độ: 21°C</span>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN LAYOUT: 7/12 & 5/12 SPLIT */}
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
            {/* ============================================== */}
            {/* LEFT COLUMN: INTERACTIVE MAP & ROUTE TELEMETRY (7/12) */}
            {/* ============================================== */}
            <div className="space-y-4 lg:col-span-7">
              {/* Map Container */}
              <div className="bg-surface-container-lowest border-surface-container flex flex-col overflow-hidden rounded-xl border shadow-sm">
                {/* Map Top Controls */}
                <div className="bg-surface-container-low border-surface-container flex flex-wrap items-center justify-between gap-2 border-b p-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">pin_drop</span>
                    <span className="text-on-surface text-xs font-bold">Tọa độ xe hiện tại:</span>
                    <span className="bg-surface-container text-primary rounded px-2 py-0.5 font-mono text-xs font-semibold">
                      20.8421° N, 105.1219° E
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button className="bg-primary flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                      <span className="material-symbols-outlined text-[14px]">layers</span>
                      <span>Vệ Tinh</span>
                    </button>
                    <button className="bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-colors">
                      <span className="material-symbols-outlined text-[14px]">terrain</span>
                      <span>Địa Hình</span>
                    </button>
                    <button className="bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-colors">
                      <span className="material-symbols-outlined text-[14px]">filter_drama</span>
                      <span>Thời Tiết</span>
                    </button>
                    <button
                      className="bg-surface-container hover:bg-surface-container-high text-on-surface-variant rounded-md p-1 transition-colors"
                      title="Căn giữa xe"
                    >
                      <span className="material-symbols-outlined text-[18px]">my_location</span>
                    </button>
                  </div>
                </div>

                {/* Vector Simulated Map Canvas */}
                <div className="relative h-[460px] w-full overflow-hidden bg-[#0e1726] select-none">
                  {/* Grid Matrix & Terrain Overlay */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  ></div>

                  {/* Mountain Contours (SVG Vector) */}
                  <svg
                    className="absolute inset-0 h-full w-full opacity-35"
                    preserveAspectRatio="none"
                    viewBox="0 0 800 500"
                  >
                    <path d="M0 320 Q 150 220 300 280 T 600 240 T 800 300 L 800 500 L 0 500 Z" fill="#1e293b" />
                    <path d="M0 260 Q 200 180 400 230 T 700 190 T 800 220 L 800 500 L 0 500 Z" fill="#0f172a" />
                    <path
                      d="M50 140 Q 180 60 320 110 T 620 90 T 800 130"
                      fill="none"
                      stroke="#334155"
                      strokeDasharray="3,3"
                      strokeWidth="1"
                    />
                    <path
                      d="M80 180 Q 220 90 380 150 T 680 130 T 800 170"
                      fill="none"
                      stroke="#334155"
                      strokeDasharray="3,3"
                      strokeWidth="1"
                    />
                    <path
                      d="M110 220 Q 250 130 420 190 T 720 170 T 800 210"
                      fill="none"
                      stroke="#334155"
                      strokeDasharray="3,3"
                      strokeWidth="1"
                    />
                  </svg>

                  {/* Main Route Polyline */}
                  <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 800 500">
                    {/* Completed Route Segment (Solid Green Glow) */}
                    <path
                      d="M 80 400 Q 140 370 200 350 T 320 300 T 430 250 L 510 220"
                      fill="none"
                      stroke="#10b981"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="5"
                      style={{
                        filter: "drop-shadow(0 0 6px rgba(16,185,129,0.7))",
                      }}
                    />
                    {/* Upcoming Route Segment (Dashed Blue Glow) */}
                    <path
                      d="M 510 220 Q 560 190 620 170 T 710 120 L 730 100"
                      fill="none"
                      stroke="#38bdf8"
                      strokeDasharray="8,6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      style={{
                        filter: "drop-shadow(0 0 6px rgba(56,189,248,0.6))",
                      }}
                    />
                  </svg>

                  {/* WAYPOINT 1: HUB-01 HÀ NỘI (ORIGIN) */}
                  <div className="absolute top-[385px] left-[70px] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-slate-900 bg-emerald-500 text-white shadow-lg">
                      <span className="material-symbols-outlined text-[16px]">warehouse</span>
                    </div>
                    <div className="mt-1 rounded border border-emerald-500/40 bg-slate-900/90 px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap text-emerald-400">
                      HUB-01 Hà Nội (05:30)
                    </div>
                  </div>

                  {/* WAYPOINT 2: HÒA BÌNH / VÂN HỒ (PASSED) */}
                  <div className="absolute top-[295px] left-[315px] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-900 bg-emerald-500/80 text-white shadow">
                      <span className="material-symbols-outlined text-[12px]">check</span>
                    </div>
                    <div className="mt-1 rounded bg-slate-900/80 px-1.5 py-0.5 text-[9px] whitespace-nowrap text-slate-300">
                      Trạm nghỉ Vân Hồ
                    </div>
                  </div>

                  {/* WAYPOINT 3: CURRENT VEHICLE LOCATION (Pha Đin Pass) */}
                  <div className="absolute top-[220px] left-[510px] z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                    {/* Radar Pulse Ring */}
                    <div className="pointer-events-none absolute h-16 w-16 animate-ping rounded-full bg-sky-500/30"></div>
                    <div className="bg-primary relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white shadow-[0_0_15px_rgba(37,99,235,0.9)]">
                      <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                    </div>
                    <div className="mt-1.5 flex flex-col items-center rounded-lg border border-sky-400/50 bg-slate-900/95 px-2.5 py-1 text-xs whitespace-nowrap text-white shadow-xl">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-sky-400">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
                        <span>Ford Ranger 29H-882.14</span>
                      </div>
                      <span className="text-[10px] text-slate-300">Đang vượt đèo · 38 km/h · 1,150m</span>
                    </div>
                  </div>

                  {/* WAYPOINT 4: DESTINATION (THCS Mường Lát) */}
                  <div className="absolute top-[95px] left-[730px] z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                    {/* Geofence Target Radius (Dashed Circle) */}
                    <div className="pointer-events-none absolute h-24 w-24 animate-pulse rounded-full border-2 border-dashed border-red-500/60 bg-red-500/10"></div>
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-red-600 text-white shadow-lg">
                      <span className="material-symbols-outlined text-[18px]">school</span>
                    </div>
                    <div className="mt-1 rounded border border-red-500/50 bg-slate-900/90 px-2 py-0.5 text-[10px] font-bold whitespace-nowrap text-red-400">
                      THCS Mường Lát (Geofence 100m)
                    </div>
                  </div>

                  {/* Map Floating Legend Overlay */}
                  <div className="absolute bottom-3 left-3 flex flex-col gap-1.5 rounded-lg border border-slate-700 bg-slate-900/85 px-3 py-2 text-[11px] text-white shadow-md backdrop-blur-md">
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      Chú thích bản đồ
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-3 rounded bg-emerald-500"></span>
                      <span>Đoạn đã vượt qua (312 km)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-3 border-b-2 border-dashed border-sky-400"></span>
                      <span>Đoạn còn lại (173 km)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full border border-red-500 bg-red-500/40"></span>
                      <span>Geofence điểm trường (Bán kính 100m)</span>
                    </div>
                  </div>

                  {/* Fog Warning Banner in Map */}
                  <div className="absolute top-3 right-3 flex max-w-xs items-start gap-2 rounded-lg border border-amber-300 bg-amber-500/90 p-2.5 text-xs text-slate-950 shadow-lg backdrop-blur-md">
                    <span className="material-symbols-outlined mt-0.5 shrink-0 text-[20px] text-slate-950">foggy</span>
                    <div>
                      <div className="font-bold">Cảnh báo sương mù & cua dốc</div>
                      <div className="mt-0.5 text-[11px] leading-tight text-slate-900">
                        Tầm nhìn &lt; 30m đoạn Km142 - Km158. Đã kích hoạt chế độ đèn sương mù vàng.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Realtime Telemetry Strip Below Map */}
                <div className="bg-surface-container-low border-surface-container grid grid-cols-2 gap-2 border-t p-3 text-center text-xs sm:grid-cols-4">
                  <div className="bg-surface-container-lowest border-surface-container rounded border p-2">
                    <div className="text-on-surface-variant text-[11px]">Độ dốc cung đường</div>
                    <div className="text-on-surface mt-0.5 text-sm font-bold">+11.2% (Đang leo đèo)</div>
                  </div>
                  <div className="bg-surface-container-lowest border-surface-container rounded border p-2">
                    <div className="text-on-surface-variant text-[11px]">Nhiệt độ ngoài trời</div>
                    <div className="text-on-surface mt-0.5 text-sm font-bold">18.5°C · Độ ẩm 85%</div>
                  </div>
                  <div className="bg-surface-container-lowest border-surface-container rounded border p-2">
                    <div className="text-on-surface-variant text-[11px]">Mức tiêu hao nhiên liệu</div>
                    <div className="text-on-surface mt-0.5 text-sm font-bold">8.4 L/100km (Bình thường)</div>
                  </div>
                  <div className="bg-surface-container-lowest border-surface-container rounded border p-2">
                    <div className="text-on-surface-variant text-[11px]">Sóng viễn thông Viettel</div>
                    <div className="text-tertiary mt-0.5 text-sm font-bold">4G LTE (4 Vạch)</div>
                  </div>
                </div>
              </div>

              {/* Assigned Route Waypoints Table */}
              <div className="bg-surface-container-lowest border-surface-container rounded-xl border p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">timeline</span>
                    <h3 className="font-headline-sm text-on-surface text-sm font-bold">
                      Các Điểm Chốt Kiểm Soát Tuyến Đường (Checkpoints)
                    </h3>
                  </div>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant rounded px-2 py-0.5 text-xs font-semibold">
                    Đã qua 3/5 chốt
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-xs">
                    <thead>
                      <tr className="bg-surface-container-low text-on-surface-variant border-surface-container border-b text-[10px] font-semibold tracking-wider uppercase">
                        <th className="px-3 py-2.5">Mốc / Điểm Chốt</th>
                        <th className="px-3 py-2.5">Khoảng Cách</th>
                        <th className="px-3 py-2.5">Giờ Dự Kiến / Thực Tế</th>
                        <th className="px-3 py-2.5">Tình Trạng Mặt Đường</th>
                        <th className="px-3 py-2.5 text-right">Trạng Thái</th>
                      </tr>
                    </thead>
                    <tbody className="divide-surface-container font-body-md text-on-surface divide-y">
                      <tr>
                        <td className="px-3 py-3">
                          <div className="font-bold">Tổng kho HUB-01 Hà Nội</div>
                          <div className="text-on-surface-variant text-[11px]">Km0 · Điểm xuất phát tiếp nhận hàng</div>
                        </td>
                        <td className="px-3 py-3 font-mono">0 km</td>
                        <td className="px-3 py-3">05:30 (Đúng giờ)</td>
                        <td className="text-tertiary px-3 py-3">Đường cao tốc khô ráo</td>
                        <td className="px-3 py-3 text-right">
                          <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold">
                            Đã xuất phát
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3">
                          <div className="font-bold">Trạm kiểm tra dừng nghỉ Vân Hồ</div>
                          <div className="text-on-surface-variant text-[11px]">
                            Km165 · Siết đai, kiểm tra phanh và lốp
                          </div>
                        </td>
                        <td className="px-3 py-3 font-mono">165 km</td>
                        <td className="px-3 py-3">08:45 (Đúng giờ)</td>
                        <td className="text-tertiary px-3 py-3">Đường tốt, giao thông thoáng</td>
                        <td className="px-3 py-3 text-right">
                          <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold">
                            Đã kiểm tra
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-primary-fixed/20">
                        <td className="px-3 py-3">
                          <div className="text-primary flex items-center gap-1 font-bold">
                            <span className="bg-primary h-2 w-2 animate-pulse rounded-full"></span>
                            <span>Đỉnh Đèo Pha Đin (Vị trí hiện tại)</span>
                          </div>
                          <div className="text-on-surface-variant text-[11px]">
                            Km312 · Cao độ 1,150m · Sương mù dày
                          </div>
                        </td>
                        <td className="text-primary px-3 py-3 font-mono font-bold">312 km</td>
                        <td className="text-primary px-3 py-3 font-bold">13:45 (Hiện tại)</td>
                        <td className="px-3 py-3 font-medium text-amber-700">Sương mù, tầm nhìn 30m</td>
                        <td className="px-3 py-3 text-right">
                          <span className="bg-primary inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
                            Đang di chuyển
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3">
                          <div className="font-bold">Ngã 3 Huyện Mường Lát</div>
                          <div className="text-on-surface-variant text-[11px]">
                            Km430 · Chuẩn bị tiếp cận đường liên xã
                          </div>
                        </td>
                        <td className="px-3 py-3 font-mono">430 km</td>
                        <td className="text-on-surface-variant px-3 py-3">15:45 (Dự kiến)</td>
                        <td className="text-on-surface-variant px-3 py-3">Đường bê tông nông thôn</td>
                        <td className="px-3 py-3 text-right">
                          <span className="bg-surface-container text-on-surface-variant inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium">
                            Chờ đến
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3">
                          <div className="text-on-surface font-bold">Trường PTDTBT THCS Mường Lát</div>
                          <div className="text-on-surface-variant text-[11px]">
                            Km485 · Điểm đích giao 50 kiện PC & ký PoD
                          </div>
                        </td>
                        <td className="px-3 py-3 font-mono">485 km</td>
                        <td className="text-primary px-3 py-3 font-semibold">16:30 (Dự kiến)</td>
                        <td className="text-on-surface-variant px-3 py-3">Sân trường bê tông bằng phẳng</td>
                        <td className="px-3 py-3 text-right">
                          <span className="bg-secondary-container text-secondary inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium">
                            Đích đến
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ============================================== */}
            {/* RIGHT COLUMN: VEHICLE CREW & TELEMETRY IoT (5/12) */}
            {/* ============================================== */}
            <div className="space-y-4 lg:col-span-5">
              {/* BLOCK 1: TỔ XE & PHƯƠNG TIỆN */}
              <div className="bg-surface-container-lowest border-surface-container rounded-xl border p-4 shadow-sm">
                <div className="border-surface-container mb-3 flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">group</span>
                    <h3 className="font-headline-sm text-on-surface text-sm font-bold">Tổ Xe Vận Chuyển Cứu Trợ</h3>
                  </div>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant rounded px-2 py-0.5 text-xs font-semibold">
                    Đội Vượt Đèo 08
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Crew 1 (Driver / Leader) */}
                  <div className="bg-surface-container-low border-surface-container flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm">
                        HL
                      </div>
                      <div>
                        <div className="text-on-surface text-xs font-bold">
                          Lê Hoàng Long{" "}
                          <span className="text-primary font-mono text-[10px] font-semibold">(TNV-VCH-88)</span>
                        </div>
                        <div className="text-on-surface-variant text-[11px]">
                          Lái chính · Đội trưởng Đội Vượt Đèo Tây Bắc
                        </div>
                        <div className="text-tertiary mt-0.5 text-[10px] font-semibold">
                          GPLX Hạng D · 32 Chuyến xe an toàn
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        className="bg-primary-fixed text-primary hover:bg-primary flex h-7 w-7 items-center justify-center rounded-full transition-colors hover:text-white"
                        title="Gọi nội bộ"
                      >
                        <span className="material-symbols-outlined text-[16px]">call</span>
                      </button>
                      <button
                        className="bg-surface-container text-on-surface hover:bg-surface-container-high flex h-7 w-7 items-center justify-center rounded-full transition-colors"
                        title="Bộ đàm Kênh 03"
                      >
                        <span className="material-symbols-outlined text-[16px]">radio</span>
                      </button>
                    </div>
                  </div>

                  {/* Crew 2 (Technician / Assistant) */}
                  <div className="bg-surface-container-low border-surface-container flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm">
                        ĐT
                      </div>
                      <div>
                        <div className="text-on-surface text-xs font-bold">
                          Trần Đình Trọng{" "}
                          <span className="text-secondary font-mono text-[10px] font-semibold">(TNV-KT-412)</span>
                        </div>
                        <div className="text-on-surface-variant text-[11px]">
                          Phụ xe · Kỹ thuật viên phần cứng & Mạng
                        </div>
                        <div className="text-on-surface-variant mt-0.5 text-[10px]">
                          Chứng chỉ sơ cấp cứu Chữ Thập Đỏ
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        className="bg-surface-container text-on-surface hover:bg-surface-container-high flex h-7 w-7 items-center justify-center rounded-full transition-colors"
                        title="Gọi nội bộ"
                      >
                        <span className="material-symbols-outlined text-[16px]">call</span>
                      </button>
                    </div>
                  </div>

                  {/* Vehicle Spec */}
                  <div className="bg-surface-container flex items-center justify-between rounded-lg p-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">directions_car</span>
                      <div>
                        <div className="text-on-surface font-bold">Ford Ranger Biển số 29H-882.14</div>
                        <div className="text-on-surface-variant text-[11px]">
                          Trang bị tời kéo 4.5 tấn, lốp địa hình gai MT
                        </div>
                      </div>
                    </div>
                    <span className="text-tertiary bg-surface-container-lowest rounded px-2 py-0.5 text-[11px] font-semibold shadow-xs">
                      Kiểm định Hợp lệ
                    </span>
                  </div>
                </div>
              </div>

              {/* BLOCK 2: IoT TELEMETRY & THÔNG SỐ BẢO QUẢN HÀNG HÓA */}
              <div className="bg-surface-container-lowest border-surface-container rounded-xl border p-4 shadow-sm">
                <div className="border-surface-container mb-3 flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">sensors</span>
                    <h3 className="font-headline-sm text-on-surface text-sm font-bold">
                      Cảm Biến Thùng Hàng Điện Tử (IoT)
                    </h3>
                  </div>
                  <span className="text-on-surface-variant font-mono text-[11px]">Sensor ID: #TH-BOX-88</span>
                </div>

                <div className="mb-3 grid grid-cols-2 gap-3">
                  {/* Sensor 1: Niêm phong Seal */}
                  <div className="bg-surface-container-low border-surface-container flex flex-col justify-between rounded-lg border p-3">
                    <div className="text-tertiary flex items-center justify-between">
                      <span className="material-symbols-outlined text-[18px]">verified_user</span>
                      <span className="text-[10px] font-bold uppercase">Nguyên vẹn</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-on-surface-variant text-[11px]">Mã Seal Điện Tử</div>
                      <div className="text-on-surface font-mono text-xs font-bold">#SL-8841-A</div>
                    </div>
                  </div>

                  {/* Sensor 2: Độ ẩm */}
                  <div className="bg-surface-container-low border-surface-container flex flex-col justify-between rounded-lg border p-3">
                    <div className="text-primary flex items-center justify-between">
                      <span className="material-symbols-outlined text-[18px]">humidity_mid</span>
                      <span className="text-[10px] font-bold uppercase">An toàn</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-on-surface-variant text-[11px]">Độ ẩm thùng máy</div>
                      <div className="text-on-surface text-sm font-bold">
                        58% <span className="text-on-surface-variant text-[10px] font-normal">(&lt; 70%)</span>
                      </div>
                    </div>
                  </div>

                  {/* Sensor 3: Va đập chấn động */}
                  <div className="bg-surface-container-low border-surface-container flex flex-col justify-between rounded-lg border p-3">
                    <div className="text-tertiary flex items-center justify-between">
                      <span className="material-symbols-outlined text-[18px]">vibration</span>
                      <span className="text-[10px] font-bold uppercase">Grade A</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-on-surface-variant text-[11px]">Chấn động G-Force</div>
                      <div className="text-on-surface text-sm font-bold">
                        0.12 G <span className="text-on-surface-variant text-[10px] font-normal">(&lt; 0.5G)</span>
                      </div>
                    </div>
                  </div>

                  {/* Sensor 4: Cửa thùng hàng */}
                  <div className="bg-surface-container-low border-surface-container flex flex-col justify-between rounded-lg border p-3">
                    <div className="text-secondary flex items-center justify-between">
                      <span className="material-symbols-outlined text-[18px]">lock</span>
                      <span className="text-[10px] font-bold uppercase">Khóa chặt</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-on-surface-variant text-[11px]">Khóa chốt thùng</div>
                      <div className="text-on-surface text-sm font-bold">Đóng kín 100%</div>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container text-on-surface-variant flex items-center gap-2 rounded-lg p-2.5 text-[11px]">
                  <span className="material-symbols-outlined text-primary text-[18px]">info</span>
                  <span>Dữ liệu cảm biến được đồng bộ băm SHA-256 vào chuỗi EduLedger mỗi 15 phút.</span>
                </div>
              </div>

              {/* BLOCK 3: QUY TRÌNH TIẾP CẬN ĐIỂM TRƯỜNG & GEOFENCE */}
              <div className="bg-surface-container-lowest border-surface-container rounded-xl border p-4 shadow-sm">
                <div className="border-surface-container mb-3 flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">pin_invoke</span>
                    <h3 className="font-headline-sm text-on-surface text-sm font-bold">Tiếp Cận & Mở Khóa Geofence</h3>
                  </div>
                  <span className="bg-surface-container text-on-surface-variant rounded px-2 py-0.5 text-xs font-semibold">
                    Cách 173 km
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="text-on-surface-variant flex items-start gap-2">
                    <span className="bg-surface-container text-on-surface mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold">
                      1
                    </span>
                    <div>
                      Khi xe tiến vào bán kính <strong>100m quanh điểm trường</strong>, hệ thống tự động kích hoạt chức
                      năng <strong>"Xác nhận bàn giao"</strong>.
                    </div>
                  </div>
                  <div className="text-on-surface-variant flex items-start gap-2">
                    <span className="bg-surface-container text-on-surface mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold">
                      2
                    </span>
                    <div>
                      Thầy Hà Văn Tiêu (Hiệu trưởng) kiểm đếm 50 bộ máy tính, ký xác nhận điện tử trực tiếp trên màn
                      hình.
                    </div>
                  </div>
                  <div className="text-on-surface-variant flex items-start gap-2">
                    <span className="bg-surface-container text-on-surface mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold">
                      3
                    </span>
                    <div>
                      TNV chụp 2 ảnh minh chứng và bấm chốt hoàn tất biên bản giao nhận PoD (Proof of Delivery).
                    </div>
                  </div>
                </div>

                {/* Emergency Incident Button (Per RBAC: TNV Báo sự cố chuyến đi) */}
                <div className="border-surface-container mt-4 border-t pt-3">
                  <a
                    href="#"
                    className="border-error/40 text-error hover:bg-error-container/40 flex w-full items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-xs font-bold transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">report_problem</span>
                    <span>Báo Cáo Sự Cố Chuyến Đi (Hỏng xe / Sạt lở đèo)</span>
                  </a>
                  <div className="text-on-surface-variant mt-1 text-center text-[10px]">
                    *Khi báo sự cố, vận đơn tự động chuyển trạng thái FAILED và kích hoạt cứu hộ theo chuẩn RBAC.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
