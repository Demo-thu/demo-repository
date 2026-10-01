import React from 'react';

export default function VolunteerRouteGPSPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="h-16 px-4 flex items-center gap-3 bg-surface-container-lowest border-b border-surface-container">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary font-bold shadow-sm">
              <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-sm text-primary font-bold tracking-tight leading-none">EduShare VN</span>
              <span className="text-[11px] text-on-surface-variant font-semibold tracking-wider mt-0.5">CỔNG TÌNH NGUYỆN VIÊN</span>
            </div>
          </div>
          
          <div className="p-3 flex flex-col gap-3 overflow-y-auto max-h-[calc(100vh-140px)]">
            {/* Section 1: Điều động & Ca trực */}
            <nav className="flex flex-col gap-1">
              <div className="px-3 py-1">
                <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">ĐIỀU ĐỘNG & CA TRỰC</span>
              </div>
              <a className="flex items-center gap-3 px-3 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-sm" href="/volunteer/attendance">
                <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                <span>Điểm danh ca trực</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-sm" href="/volunteer/leaderboard">
                <span className="material-symbols-outlined text-[20px]">military_tech</span>
                <span>Bảng xếp hạng & Giờ công</span>
              </a>
            </nav>

            {/* Section 2: Vận chuyển & Giao nhận (Active Group) */}
            <nav className="flex flex-col gap-1">
              <div className="px-3 py-1">
                <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">VẬN CHUYỂN & GIAO NHẬN</span>
              </div>
              <a className="flex items-center gap-3 px-3 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-sm" href="/volunteer/waybill">
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span>Vận đơn được gán</span>
              </a>
              {/* Active Menu Item */}
              <a className="flex items-center gap-3 px-3 py-2 rounded-xl bg-primary text-on-primary font-semibold shadow-sm text-sm" href="/volunteer/route-gps">
                <span className="material-symbols-outlined text-[20px]">navigation</span>
                <span>Tuyến đường & GPS</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-sm" href="#">
                <span className="material-symbols-outlined text-[20px]">inventory</span>
                <span>Xác nhận lấy hàng tại kho</span>
              </a>
            </nav>

            {/* Section 3: Biên bản & Sự cố */}
            <nav className="flex flex-col gap-1">
              <div className="px-3 py-1">
                <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">BIÊN BẢN & SỰ CỐ</span>
              </div>
              <a className="flex items-center gap-3 px-3 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-sm" href="#">
                <span className="material-symbols-outlined text-[20px]">warning</span>
                <span>Báo cáo sự cố chuyến đi</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-sm" href="#">
                <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                <span>Hoàn thành & Minh chứng PoD</span>
              </a>
            </nav>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 bg-surface-container-low border-t border-surface-container">
          <div className="p-3 rounded-xl bg-surface-container flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-error text-xs font-semibold">
              <span className="material-symbols-outlined text-[16px]">sos</span>
              <span>HỖ TRỢ KHẨN CẤP 24/7</span>
            </div>
            <div className="text-sm font-bold text-on-surface">1900 6829</div>
            <div class="text-[11px] text-on-surface-variant">EduShare Vietnam v2.8.4-PROD</div>
          </div>
        </div>
      </aside>

      {/* TOP HEADER */}
      <div className="pl-72">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-6 border-b border-surface-container">
          <div className="flex items-center gap-4 flex-1 max-w-lg">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
              <input className="w-full bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant pl-10 pr-4 py-2 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary shadow-[0_1px_4px_rgba(0,0,0,0.02)] border border-surface-container" placeholder="Tìm mã vận đơn, chuyến xe, bảng xếp hạng..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-tertiary text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              <span>Trực tuyến</span>
            </div>
            <button className="relative p-2 rounded-xl hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error"></span>
            </button>
            <div className="flex items-center gap-3 pl-2">
              <div className="flex flex-col text-right hidden sm:flex">
                <span className="font-headline-sm text-sm font-semibold text-on-surface leading-tight">Lê Hoàng Long</span>
                <span className="text-[11px] text-on-surface-variant">TNV-VCH-88 · Đội Trưởng Đội Vượt Đèo Hà Giang & Tây Bắc</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold shadow-sm">
                <span className="material-symbols-outlined text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN PAGE CONTENT */}
        <main className="relative pt-16 w-full px-6 py-6 bg-surface min-h-screen">
          {/* Breadcrumb & Top Action Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-surface-container mb-6">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-on-surface-variant mb-1 font-medium">
                <span>EDUSHARE TNV</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span>VẬN CHUYỂN & GIAO NHẬN</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-primary font-semibold">TUYẾN ĐƯỜNG & GPS</span>
              </div>
              <div className="flex items-center gap-3">
                <h1 className="font-headline-lg text-2xl font-bold text-on-surface">Giám Sát Tuyến Đường & Định Vị GPS Thực Địa</h1>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-tertiary-fixed text-on-tertiary-fixed-variant">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
                  GPS Realtime • 5s/lần
                </span>
              </div>
              <p className="text-xs text-on-surface-variant mt-1">
                Mã hành trình: <span className="font-semibold text-primary font-mono">#TN-NW-042</span> • Xe bán tải Ford Ranger <span className="font-semibold text-on-surface font-mono">29H-882.14</span> • Điểm đến: Trường PTDTBT THCS Mường Lát (Thanh Hóa)
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-semibold transition-colors">
                <span className="material-symbols-outlined text-[18px] text-tertiary">cloud_sync</span>
                <span>Đồng bộ Offline (Bộ đệm 12km)</span>
              </button>
              <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-semibold transition-colors">
                <span className="material-symbols-outlined text-[18px] text-primary">share_location</span>
                <span>Chia sẻ vị trí cứu hộ</span>
              </button>
              <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-error hover:bg-error-container hover:text-on-error-container text-white text-xs font-bold shadow-sm transition-all" onClick={() => alert('Đã phát tín hiệu SOS về Trung tâm điều phối!')}>
                <span className="material-symbols-outlined text-[18px]">warning</span>
                <span>Báo Nguy Hiểm / SOS Đèo</span>
              </button>
            </div>
          </div>

          {/* 4 KPI BENTO CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-surface-container flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Tốc độ & Cao độ</span>
                <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">speed</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-headline-lg text-on-surface">38 <span className="text-xs font-normal text-on-surface-variant">km/h</span></span>
                  <span className="text-xs font-semibold text-primary">· Cao độ 1,150m</span>
                </div>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px] text-error">landscape</span>
                  <span>Đoạn đèo Pha Đin (Dốc 11%, khúc cua gắt)</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-surface-container flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Tiến độ hành trình</span>
                <div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[20px]">route</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-headline-lg text-on-surface">312 / 485 <span className="text-xs font-normal text-on-surface-variant">km</span></span>
                  <span className="text-xs font-semibold text-tertiary">64.3%</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 mt-2 overflow-hidden">
                  <div className="bg-tertiary h-1.5 rounded-full" style={{ width: '64.3%' }}></div>
                </div>
                <div className="mt-1 text-[11px] text-on-surface-variant">Còn 173 km tới điểm trường Mường Lát</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-surface-container flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Thời gian dự kiến (ETA)</span>
                <div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-headline-lg text-primary">16:30 <span className="text-xs font-normal text-on-surface-variant">Hôm nay</span></span>
                  <span className="text-[11px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">±15 phút</span>
                </div>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px] text-tertiary">wb_cloudy</span>
                  <span>Thời tiết sương mù, đường khô ráo</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-surface-container flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Tải trọng & Kiện hàng</span>
                <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-headline-lg text-on-surface">50 <span className="text-xs font-normal text-on-surface-variant">Kiện PC</span></span>
                  <span className="text-xs font-semibold text-tertiary">2.8 Tấn · Ổn định</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-[11px] text-on-surface-variant">
                  <span>Cảm biến va đập: 0.12G (Chuẩn)</span>
                  <span className="font-semibold text-primary">Nhiệt độ: 21°C</span>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN LAYOUT: 7/12 & 5/12 SPLIT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* ============================================== */}
            {/* LEFT COLUMN: INTERACTIVE MAP & ROUTE TELEMETRY (7/12) */}
            {/* ============================================== */}
            <div className="lg:col-span-7 space-y-4">
              {/* MAP CONTAINER */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container overflow-hidden flex flex-col">
                {/* Map Top Controls */}
                <div className="p-3 bg-surface-container-low border-b border-surface-container flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">pin_drop</span>
                    <span className="text-xs font-bold text-on-surface">Tọa độ xe hiện tại:</span>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-surface-container text-primary">20.8421° N, 105.1219° E</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-primary text-white shadow-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">layers</span>
                      <span>Vệ Tinh</span>
                    </button>
                    <button className="px-2.5 py-1 rounded-md text-xs font-medium bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">terrain</span>
                      <span>Địa Hình</span>
                    </button>
                    <button className="px-2.5 py-1 rounded-md text-xs font-medium bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">filter_drama</span>
                      <span>Thời Tiết</span>
                    </button>
                    <button className="p-1 rounded-md bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Căn giữa xe">
                      <span className="material-symbols-outlined text-[18px]">my_location</span>
                    </button>
                  </div>
                </div>

                {/* Vector Simulated Map Canvas */}
                <div className="relative w-full h-[460px] bg-[#0e1726] overflow-hidden select-none">
                  {/* Grid Matrix & Terrain Overlay */}
                  <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                  
                  {/* Mountain Contours (SVG Vector) */}
                  <svg className="absolute inset-0 w-full h-full opacity-35" preserveAspectRatio="none" viewBox="0 0 800 500">
                    <path d="M0 320 Q 150 220 300 280 T 600 240 T 800 300 L 800 500 L 0 500 Z" fill="#1e293b"/>
                    <path d="M0 260 Q 200 180 400 230 T 700 190 T 800 220 L 800 500 L 0 500 Z" fill="#0f172a"/>
                    <path d="M50 140 Q 180 60 320 110 T 620 90 T 800 130" fill="none" stroke="#334155" strokeDasharray="3,3" strokeWidth="1"/>
                    <path d="M80 180 Q 220 90 380 150 T 680 130 T 800 170" fill="none" stroke="#334155" strokeDasharray="3,3" strokeWidth="1"/>
                    <path d="M110 220 Q 250 130 420 190 T 720 170 T 800 210" fill="none" stroke="#334155" strokeDasharray="3,3" strokeWidth="1"/>
                  </svg>

                  {/* Main Route Polyline */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 500">
                    {/* Completed Route Segment (Solid Green Glow) */}
                    <path d="M 80 400 Q 140 370 200 350 T 320 300 T 430 250 L 510 220" 
                          fill="none" stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" 
                          style={{ filter: 'drop-shadow(0 0 6px rgba(16,185,129,0.7))' }}/>
                    {/* Upcoming Route Segment (Dashed Blue Glow) */}
                    <path d="M 510 220 Q 560 190 620 170 T 710 120 L 730 100" 
                          fill="none" stroke="#38bdf8" strokeDasharray="8,6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"
                          style={{ filter: 'drop-shadow(0 0 6px rgba(56,189,248,0.6))' }}/>
                  </svg>

                  {/* WAYPOINT 1: HUB-01 HÀ NỘI (ORIGIN) */}
                  <div className="absolute left-[70px] top-[385px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg border-2 border-slate-900">
                      <span className="material-symbols-outlined text-[16px]">warehouse</span>
                    </div>
                    <div className="mt-1 px-2 py-0.5 rounded bg-slate-900/90 text-[10px] font-semibold text-emerald-400 whitespace-nowrap border border-emerald-500/40">
                      HUB-01 Hà Nội (05:30)
                    </div>
                  </div>

                  {/* WAYPOINT 2: HÒA BÌNH / VÂN HỒ (PASSED) */}
                  <div className="absolute left-[315px] top-[295px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/80 text-white flex items-center justify-center shadow border border-slate-900">
                      <span className="material-symbols-outlined text-[12px]">check</span>
                    </div>
                    <div className="mt-1 px-1.5 py-0.5 rounded bg-slate-900/80 text-[9px] text-slate-300 whitespace-nowrap">
                      Trạm nghỉ Vân Hồ
                    </div>
                  </div>

                  {/* WAYPOINT 3: CURRENT VEHICLE LOCATION (Pha Đin Pass) */}
                  <div className="absolute left-[510px] top-[220px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                    {/* Radar Pulse Ring */}
                    <div className="absolute w-16 h-16 rounded-full bg-sky-500/30 animate-ping pointer-events-none"></div>
                    <div className="relative w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.9)] border-2 border-white">
                      <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                    </div>
                    <div className="mt-1.5 px-2.5 py-1 rounded-lg bg-slate-900/95 text-xs text-white whitespace-nowrap shadow-xl border border-sky-400/50 flex flex-col items-center">
                      <div className="flex items-center gap-1 font-bold text-sky-400 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Ford Ranger 29H-882.14</span>
                      </div>
                      <span className="text-[10px] text-slate-300">Đang vượt đèo · 38 km/h · 1,150m</span>
                    </div>
                  </div>

                  {/* WAYPOINT 4: DESTINATION (THCS Mường Lát) */}
                  <div className="absolute left-[730px] top-[95px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                    {/* Geofence Target Radius (Dashed Circle) */}
                    <div className="absolute w-24 h-24 rounded-full border-2 border-dashed border-red-500/60 bg-red-500/10 pointer-events-none animate-pulse"></div>
                    <div className="relative w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
                      <span className="material-symbols-outlined text-[18px]">school</span>
                    </div>
                    <div className="mt-1 px-2 py-0.5 rounded bg-slate-900/90 text-[10px] font-bold text-red-400 whitespace-nowrap border border-red-500/50">
                      THCS Mường Lát (Geofence 100m)
                    </div>
                  </div>

                  {/* Map Floating Legend Overlay */}
                  <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-700 text-white text-[11px] flex flex-col gap-1.5 shadow-md">
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Chú thích bản đồ</div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-1 bg-emerald-500 rounded"></span>
                      <span>Đoạn đã vượt qua (312 km)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-1 border-b-2 border-dashed border-sky-400"></span>
                      <span>Đoạn còn lại (173 km)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full border border-red-500 bg-red-500/40"></span>
                      <span>Geofence điểm trường (Bán kính 100m)</span>
                    </div>
                  </div>

                  {/* Fog Warning Banner in Map */}
                  <div className="absolute top-3 right-3 max-w-xs bg-amber-500/90 backdrop-blur-md text-slate-950 p-2.5 rounded-lg shadow-lg border border-amber-300 text-xs flex items-start gap-2">
                    <span className="material-symbols-outlined text-[20px] text-slate-950 shrink-0 mt-0.5">foggy</span>
                    <div>
                      <div className="font-bold">Cảnh báo sương mù & cua dốc</div>
                      <div className="text-[11px] leading-tight text-slate-900 mt-0.5">Tầm nhìn &lt; 30m đoạn Km142 - Km158. Đã kích hoạt chế độ đèn sương mù vàng.</div>
                    </div>
                  </div>
                </div>

                {/* Realtime Telemetry Strip Below Map */}
                <div className="p-3 bg-surface-container-low border-t border-surface-container grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2 rounded bg-surface-container-lowest border border-surface-container">
                    <div className="text-on-surface-variant text-[11px]">Độ dốc cung đường</div>
                    <div className="font-bold text-on-surface text-sm mt-0.5">+11.2% (Đang leo đèo)</div>
                  </div>
                  <div className="p-2 rounded bg-surface-container-lowest border border-surface-container">
                    <div className="text-on-surface-variant text-[11px]">Nhiệt độ ngoài trời</div>
                    <div className="font-bold text-on-surface text-sm mt-0.5">18.5°C · Độ ẩm 85%</div>
                  </div>
                  <div className="p-2 rounded bg-surface-container-lowest border border-surface-container">
                    <div className="text-on-surface-variant text-[11px]">Mức tiêu hao nhiên liệu</div>
                    <div className="font-bold text-on-surface text-sm mt-0.5">8.4 L/100km (Bình thường)</div>
                  </div>
                  <div className="p-2 rounded bg-surface-container-lowest border border-surface-container">
                    <div className="text-on-surface-variant text-[11px]">Sóng viễn thông Viettel</div>
                    <div className="font-bold text-tertiary text-sm mt-0.5">4G LTE (4 Vạch)</div>
                  </div>
                </div>
              </div>

              {/* ASSIGNED ROUTE WAYPOINTS TABLE */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">timeline</span>
                    <h3 className="font-headline-sm text-sm font-bold text-on-surface">Các Điểm Chốt Kiểm Soát Tuyến Đường (Checkpoints)</h3>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant">Đã qua 3/5 chốt</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low text-on-surface-variant font-semibold uppercase text-[10px] tracking-wider border-b border-surface-container">
                        <th className="py-2.5 px-3">Mốc / Điểm Chốt</th>
                        <th className="py-2.5 px-3">Khoảng Cách</th>
                        <th className="py-2.5 px-3">Giờ Dự Kiến / Thực Tế</th>
                        <th className="py-2.5 px-3">Tình Trạng Mặt Đường</th>
                        <th className="py-2.5 px-3 text-right">Trạng Thái</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container font-body-md text-on-surface">
                      <tr>
                        <td className="py-3 px-3">
                          <div className="font-bold">Tổng kho HUB-01 Hà Nội</div>
                          <div className="text-[11px] text-on-surface-variant">Km0 · Điểm xuất phát tiếp nhận hàng</div>
                        </td>
                        <td className="py-3 px-3 font-mono">0 km</td>
                        <td className="py-3 px-3">05:30 (Đúng giờ)</td>
                        <td className="py-3 px-3 text-tertiary">Đường cao tốc khô ráo</td>
                        <td className="py-3 px-3 text-right">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-tertiary-fixed text-on-tertiary-fixed-variant">
                            Đã xuất phát
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3">
                          <div className="font-bold">Trạm kiểm tra dừng nghỉ Vân Hồ</div>
                          <div className="text-[11px] text-on-surface-variant">Km165 · Siết đai, kiểm tra phanh và lốp</div>
                        </td>
                        <td className="py-3 px-3 font-mono">165 km</td>
                        <td className="py-3 px-3">08:45 (Đúng giờ)</td>
                        <td className="py-3 px-3 text-tertiary">Đường tốt, giao thông thoáng</td>
                        <td className="py-3 px-3 text-right">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-tertiary-fixed text-on-tertiary-fixed-variant">
                            Đã kiểm tra
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-primary-fixed/20">
                        <td className="py-3 px-3">
                          <div className="font-bold text-primary flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span>Đỉnh Đèo Pha Đin (Vị trí hiện tại)</span>
                          </div>
                          <div className="text-[11px] text-on-surface-variant">Km312 · Cao độ 1,150m · Sương mù dày</div>
                        </td>
                        <td className="py-3 px-3 font-mono font-bold text-primary">312 km</td>
                        <td className="py-3 px-3 font-bold text-primary">13:45 (Hiện tại)</td>
                        <td className="py-3 px-3 text-amber-700 font-medium">Sương mù, tầm nhìn 30m</td>
                        <td className="py-3 px-3 text-right">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white shadow-sm">
                            Đang di chuyển
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3">
                          <div className="font-bold">Ngã 3 Huyện Mường Lát</div>
                          <div className="text-[11px] text-on-surface-variant">Km430 · Chuẩn bị tiếp cận đường liên xã</div>
                        </td>
                        <td className="py-3 px-3 font-mono">430 km</td>
                        <td className="py-3 px-3 text-on-surface-variant">15:45 (Dự kiến)</td>
                        <td className="py-3 px-3 text-on-surface-variant">Đường bê tông nông thôn</td>
                        <td className="py-3 px-3 text-right">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-surface-container text-on-surface-variant">
                            Chờ đến
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3">
                          <div className="font-bold text-on-surface">Trường PTDTBT THCS Mường Lát</div>
                          <div className="text-[11px] text-on-surface-variant">Km485 · Điểm đích giao 50 kiện PC & ký PoD</div>
                        </td>
                        <td className="py-3 px-3 font-mono">485 km</td>
                        <td className="py-3 px-3 font-semibold text-primary">16:30 (Dự kiến)</td>
                        <td className="py-3 px-3 text-on-surface-variant">Sân trường bê tông bằng phẳng</td>
                        <td className="py-3 px-3 text-right">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-secondary-container text-secondary">
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
            <div className="lg:col-span-5 space-y-4">
              
              {/* BLOCK 1: TỔ XE & PHƯƠNG TIỆN */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container p-4">
                <div className="flex items-center justify-between border-b border-surface-container pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">group</span>
                    <h3 className="font-headline-sm text-sm font-bold text-on-surface">Tổ Xe Vận Chuyển Cứu Trợ</h3>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant">Đội Vượt Đèo 08</span>
                </div>

                <div className="space-y-3">
                  {/* Crew 1 (Driver / Leader) */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low border border-surface-container">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        HL
                      </div>
                      <div>
                        <div className="text-xs font-bold text-on-surface">Lê Hoàng Long <span className="text-[10px] text-primary font-semibold font-mono">(TNV-VCH-88)</span></div>
                        <div className="text-[11px] text-on-surface-variant">Lái chính · Đội trưởng Đội Vượt Đèo Tây Bắc</div>
                        <div className="text-[10px] text-tertiary font-semibold mt-0.5">GPLX Hạng D · 32 Chuyến xe an toàn</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button className="w-7 h-7 rounded-full bg-primary-fixed text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors" title="Gọi nội bộ">
                        <span className="material-symbols-outlined text-[16px]">call</span>
                      </button>
                      <button className="w-7 h-7 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-surface-container-high transition-colors" title="Bộ đàm Kênh 03">
                        <span className="material-symbols-outlined text-[16px]">radio</span>
                      </button>
                    </div>
                  </div>

                  {/* Crew 2 (Technician / Assistant) */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low border border-surface-container">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm shadow-sm">
                        ĐT
                      </div>
                      <div>
                        <div className="text-xs font-bold text-on-surface">Trần Đình Trọng <span className="text-[10px] text-secondary font-semibold font-mono">(TNV-KT-412)</span></div>
                        <div className="text-[11px] text-on-surface-variant">Phụ xe · Kỹ thuật viên phần cứng & Mạng</div>
                        <div className="text-[10px] text-on-surface-variant mt-0.5">Chứng chỉ sơ cấp cứu Chữ Thập Đỏ</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button className="w-7 h-7 rounded-full bg-surface-container text-on-surface flex items-center justify-center hover:bg-surface-container-high transition-colors" title="Gọi nội bộ">
                        <span className="material-symbols-outlined text-[16px]">call</span>
                      </button>
                    </div>
                  </div>

                  {/* Vehicle Spec */}
                  <div className="p-3 rounded-lg bg-surface-container flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">directions_car</span>
                      <div>
                        <div className="font-bold text-on-surface">Ford Ranger Biển số 29H-882.14</div>
                        <div className="text-[11px] text-on-surface-variant">Trang bị tời kéo 4.5 tấn, lốp địa hình gai MT</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-tertiary bg-surface-container-lowest px-2 py-0.5 rounded shadow-xs">Kiểm định Hợp lệ</span>
                  </div>
                </div>
              </div>

              {/* BLOCK 2: IoT TELEMETRY & THÔNG SỐ BẢO QUẢN HÀNG HÓA */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container p-4">
                <div className="flex items-center justify-between border-b border-surface-container pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">sensors</span>
                    <h3 className="font-headline-sm text-sm font-bold text-on-surface">Cảm Biến Thùng Hàng Điện Tử (IoT)</h3>
                  </div>
                  <span className="text-[11px] font-mono text-on-surface-variant">Sensor ID: #TH-BOX-88</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  {/* Sensor 1: Niêm phong Seal */}
                  <div className="p-3 rounded-lg bg-surface-container-low border border-surface-container flex flex-col justify-between">
                    <div className="flex items-center justify-between text-tertiary">
                      <span className="material-symbols-outlined text-[18px]">verified_user</span>
                      <span className="text-[10px] font-bold uppercase">Nguyên vẹn</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-[11px] text-on-surface-variant">Mã Seal Điện Tử</div>
                      <div className="font-mono font-bold text-xs text-on-surface">#SL-8841-A</div>
                    </div>
                  </div>

                  {/* Sensor 2: Độ ẩm */}
                  <div className="p-3 rounded-lg bg-surface-container-low border border-surface-container flex flex-col justify-between">
                    <div className="flex items-center justify-between text-primary">
                      <span className="material-symbols-outlined text-[18px]">humidity_mid</span>
                      <span className="text-[10px] font-bold uppercase">An toàn</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-[11px] text-on-surface-variant">Độ ẩm thùng máy</div>
                      <div className="font-bold text-sm text-on-surface">58% <span className="text-[10px] font-normal text-on-surface-variant">(&lt; 70%)</span></div>
                    </div>
                  </div>

                  {/* Sensor 3: Va đập chấn động */}
                  <div className="p-3 rounded-lg bg-surface-container-low border border-surface-container flex flex-col justify-between">
                    <div className="flex items-center justify-between text-tertiary">
                      <span className="material-symbols-outlined text-[18px]">vibration</span>
                      <span className="text-[10px] font-bold uppercase">Grade A</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-[11px] text-on-surface-variant">Chấn động G-Force</div>
                      <div className="font-bold text-sm text-on-surface">0.12 G <span className="text-[10px] font-normal text-on-surface-variant">(&lt; 0.5G)</span></div>
                    </div>
                  </div>

                  {/* Sensor 4: Cửa thùng hàng */}
                  <div className="p-3 rounded-lg bg-surface-container-low border border-surface-container flex flex-col justify-between">
                    <div className="flex items-center justify-between text-secondary">
                      <span className="material-symbols-outlined text-[18px]">lock</span>
                      <span className="text-[10px] font-bold uppercase">Khóa chặt</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-[11px] text-on-surface-variant">Khóa chốt thùng</div>
                      <div className="font-bold text-sm text-on-surface">Đóng kín 100%</div>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-surface-container text-[11px] text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">info</span>
                  <span>Dữ liệu cảm biến được đồng bộ băm SHA-256 vào chuỗi EduLedger mỗi 15 phút.</span>
                </div>
              </div>

              {/* BLOCK 3: QUY TRÌNH TIẾP CẬN ĐIỂM TRƯỜNG & GEOFENCE */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container p-4">
                <div className="flex items-center justify-between border-b border-surface-container pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">pin_invoke</span>
                    <h3 className="font-headline-sm text-sm font-bold text-on-surface">Tiếp Cận & Mở Khóa Geofence</h3>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Cách 173 km</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-on-surface-variant">
                    <span className="w-5 h-5 rounded-full bg-surface-container flex items-center justify-center font-bold text-[11px] text-on-surface shrink-0 mt-0.5">1</span>
                    <div>Khi xe tiến vào bán kính <strong>100m quanh điểm trường</strong>, hệ thống tự động kích hoạt chức năng <strong>"Xác nhận bàn giao"</strong>.</div>
                  </div>
                  <div className="flex items-start gap-2 text-on-surface-variant">
                    <span className="w-5 h-5 rounded-full bg-surface-container flex items-center justify-center font-bold text-[11px] text-on-surface shrink-0 mt-0.5">2</span>
                    <div>Thầy Hà Văn Tiêu (Hiệu trưởng) kiểm đếm 50 bộ máy tính, ký xác nhận điện tử trực tiếp trên màn hình.</div>
                  </div>
                  <div className="flex items-start gap-2 text-on-surface-variant">
                    <span className="w-5 h-5 rounded-full bg-surface-container flex items-center justify-center font-bold text-[11px] text-on-surface shrink-0 mt-0.5">3</span>
                    <div>TNV chụp 2 ảnh minh chứng và bấm chốt hoàn tất biên bản giao nhận PoD (Proof of Delivery).</div>
                  </div>
                </div>

                {/* Emergency Incident Button (Per RBAC: TNV Báo sự cố chuyến đi) */}
                <div className="mt-4 pt-3 border-t border-surface-container">
                  <a href="#" className="w-full py-2.5 px-3 rounded-lg border border-error/40 text-error hover:bg-error-container/40 font-bold text-xs flex items-center justify-center gap-2 transition-all">
                    <span className="material-symbols-outlined text-[18px]">report_problem</span>
                    <span>Báo Cáo Sự Cố Chuyến Đi (Hỏng xe / Sạt lở đèo)</span>
                  </a>
                  <div className="text-[10px] text-on-surface-variant text-center mt-1">
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
