import React from 'react';
import { Link } from 'react-router-dom';

const VolunteerLeaderboardPage = () => {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col">
          <div className="h-16 px-space-md flex items-center gap-space-sm bg-surface-container-lowest">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary font-headline-md font-bold">
              <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight leading-none">EduShare VN</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wider mt-0.5">CỔNG TÌNH NGUYỆN VIÊN</span>
            </div>
          </div>
          <div className="p-space-md flex flex-col gap-space-md overflow-y-auto max-h-[calc(100vh-140px)]">
            <nav className="flex flex-col gap-space-xs">
              <div className="px-space-sm py-1">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">ĐIỀU ĐỘNG &amp; CA TRỰC</span>
              </div>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md" to="/volunteer/attendance">
                <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                <span>Điểm danh ca trực</span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-xl bg-primary text-on-primary font-semibold shadow-sm transition-colors font-body-md text-body-md" to="/volunteer/leaderboard">
                <span className="material-symbols-outlined text-[20px]">military_tech</span>
                <span>Bảng xếp hạng &amp; Giờ công</span>
              </Link>
            </nav>
            <nav className="flex flex-col gap-space-xs">
              <div className="px-space-sm py-1">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">VẬN CHUYỂN &amp; GIAO NHẬN</span>
              </div>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md" to="/volunteer/assigned-waybills">
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span>Vận đơn được gán</span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md" to="/volunteer/routes-gps">
                <span className="material-symbols-outlined text-[20px]">navigation</span>
                <span>Tuyến đường &amp; GPS</span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md" to="/volunteer/pickup-confirmation">
                <span className="material-symbols-outlined text-[20px]">inventory</span>
                <span>Xác nhận lấy hàng tại kho</span>
              </Link>
            </nav>
            <nav className="flex flex-col gap-space-xs">
              <div className="px-space-sm py-1">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">BIÊN BẢN &amp; SỰ CỐ</span>
              </div>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md" to="/volunteer/incident-report">
                <span className="material-symbols-outlined text-[20px]">warning</span>
                <span>Báo cáo sự cố chuyến đi</span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md" to="/volunteer/pod">
                <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                <span>Hoàn thành &amp; Minh chứng PoD</span>
              </Link>
            </nav>
          </div>
        </div>
        <div className="p-space-md bg-surface-container-low">
          <div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs text-error font-label-sm text-label-sm font-semibold">
              <span className="material-symbols-outlined text-[16px]">sos</span>
              <span>HỖ TRỢ KHẨN CẤP 24/7</span>
            </div>
            <div className="font-code-num text-code-num font-bold text-on-surface">1900 6829</div>
            <div className="font-body-sm text-body-sm text-on-surface-variant">EduShare Vietnam v2.8.4-PROD</div>
          </div>
        </div>
      </aside>

      <div className="pl-72 flex-1 flex flex-col">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
          <div className="flex items-center gap-space-md flex-1 max-w-lg">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
              <input className="w-full bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant pl-10 pr-space-md py-2 rounded-xl text-body-md font-body-md outline-none focus:ring-2 focus:ring-primary shadow-[0_1px_4px_rgba(0,0,0,0.02)]" placeholder="Tìm mã vận đơn, chuyến xe, bảng xếp hạng..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-tertiary font-label-md text-label-md font-medium">
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
              <span>Trực tuyến</span>
            </div>
            <button className="relative p-2 rounded-xl hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error"></span>
            </button>
            <div className="flex items-center gap-space-sm pl-space-sm">
              <div className="flex flex-col text-right hidden sm:flex">
                <span className="font-headline-sm text-headline-sm font-semibold text-on-surface leading-tight">Lê Hoàng Long</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">TNV-VCH-88 · Đội Trưởng Đội Vượt Đèo Hà Giang &amp; Tây Bắc</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        <main className="relative pt-16 w-full px-space-lg py-space-lg bg-surface flex-1">
          <div className="flex flex-col w-full gap-space-lg">
            {/* BREADCRUMB & HEADER SECTION */}
            <div className="flex flex-col gap-space-sm">
              {/* Breadcrumb */}
              <div className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface-variant">
                <span className="hover:text-primary cursor-pointer transition-colors">EDUSHARE TNV</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="hover:text-primary cursor-pointer transition-colors">ĐIỀU ĐỘNG &amp; CA TRỰC</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-primary font-semibold">BẢNG XẾP HẠNG &amp; GIỜ CÔNG</span>
              </div>
              {/* Title & Action Bar */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <h1 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
                    Bảng Xếp Hạng &amp; Giờ Công Cống Hiến
                  </h1>
                  <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                    Hệ thống ghi nhận và vinh danh giờ công tình nguyện viên, đối soát minh bạch chuỗi khối EduLedger và xếp hạng cống hiến toàn quốc theo chuẩn RBAC v2.8.4.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-space-sm">
                  <button className="flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md shadow-sm transition-all" type="button">
                    <span className="material-symbols-outlined text-[18px] text-primary">help_outline</span>
                    <span>Quy chế vinh danh</span>
                  </button>
                  <button className="flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md shadow-sm transition-all" type="button">
                    <span className="material-symbols-outlined text-[18px] text-secondary">event_repeat</span>
                    <span>Đổi ca / Nghỉ phép</span>
                  </button>
                  <button className="flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md shadow-sm transition-all" type="button">
                    <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                    <span>Xuất chứng nhận (.pdf)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* BENTO 4 THẺ KPI TỔNG HỢP */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {/* KPI 1 */}
              <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm uppercase text-on-surface-variant font-bold tracking-wider">Tổng Giờ Công Tích Lũy</span>
                    <div className="flex items-baseline gap-space-xs mt-1">
                      <span className="text-headline-xl font-headline-xl text-primary font-bold">240</span>
                      <span className="text-body-md font-body-md text-on-surface-variant font-medium">Giờ</span>
                      <span className="ml-1 text-label-sm font-label-sm text-tertiary font-semibold bg-surface-container px-1.5 py-0.5 rounded">+16h tuần này</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant">
                    <span className="material-symbols-outlined text-[22px]">schedule</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-sm flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-label-sm font-label-sm">
                    <span className="text-on-surface-variant">Cấp 3 (Vàng) · Chiến dịch Thu 2024</span>
                    <span className="text-primary font-bold font-code-num">80%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
              {/* KPI 2 */}
              <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm uppercase text-on-surface-variant font-bold tracking-wider">Thứ Hạng Toàn Quốc</span>
                    <div className="flex items-baseline gap-space-xs mt-1">
                      <span className="text-headline-xl font-headline-xl text-tertiary-container font-bold">#03</span>
                      <span className="text-body-md font-body-md text-on-surface-variant">/ 1,280 TNV</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined text-[22px]">military_tech</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center justify-between text-label-sm font-label-sm">
                  <span className="text-tertiary font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    Tây Bắc: Hạng #1
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-medium">Tay Lái Vàng</span>
                </div>
              </div>
              {/* KPI 3 */}
              <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm uppercase text-on-surface-variant font-bold tracking-wider">Chuyến Đi &amp; Vận Đơn</span>
                    <div className="flex items-baseline gap-space-xs mt-1">
                      <span className="text-headline-xl font-headline-xl text-on-surface font-bold">28</span>
                      <span className="text-body-md font-body-md text-on-surface-variant">Chuyến xe</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">local_shipping</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center justify-between text-label-sm font-label-sm">
                  <span className="text-tertiary font-semibold">100% PoD Hợp Lệ</span>
                  <span className="text-on-surface-variant font-code-num">4,850 km an toàn</span>
                </div>
              </div>
              {/* KPI 4 */}
              <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm uppercase text-on-surface-variant font-bold tracking-wider">Giá Trị Quy Đổi Xã Hội</span>
                    <div className="flex items-baseline gap-space-xs mt-1">
                      <span className="text-headline-xl font-headline-xl text-primary font-bold">1,420</span>
                      <span className="text-body-md font-body-md text-on-surface-variant">Học Sinh</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">school</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center justify-between text-label-sm font-label-sm">
                  <span className="text-on-surface-variant font-medium">520 Bộ PC &amp; Laptop</span>
                  <span className="text-primary font-semibold">18 Điểm Trường</span>
                </div>
              </div>
            </div>

            {/* BỘ LỌC THỜI GIAN & PHÂN HẠNG (TABS & TOOLBAR) */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
              {/* Tab navigation */}
              <div className="flex items-center gap-space-xs overflow-x-auto pb-1 lg:pb-0">
                <button className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold whitespace-nowrap shadow-sm" type="button">
                  Xếp Hạng Cá Nhân
                </button>
                <button className="px-space-md py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md font-medium whitespace-nowrap transition-colors" type="button">
                  Xếp Hạng Đội Nhóm Xe
                </button>
                <button className="px-space-md py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md font-medium whitespace-nowrap transition-colors" type="button">
                  Kỷ Lục Vượt Đèo
                </button>
                <button className="px-space-md py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md font-medium whitespace-nowrap transition-colors" type="button">
                  Lịch Sử Giờ Công Bản Thân
                </button>
              </div>
              {/* Filter selectors */}
              <div className="flex flex-wrap items-center gap-space-sm">
                <div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1.5 rounded-lg text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">calendar_month</span>
                  <select className="bg-transparent text-on-surface font-medium outline-none cursor-pointer pr-1" defaultValue="Tháng 10/2024">
                    <option value="Tháng 10/2024">Tháng 10/2024</option>
                    <option value="Quý 3/2024">Quý 3/2024</option>
                    <option value="Toàn niên 2024">Toàn niên 2024</option>
                  </select>
                </div>
                <div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1.5 rounded-lg text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">location_on</span>
                  <select className="bg-transparent text-on-surface font-medium outline-none cursor-pointer pr-1" defaultValue="Tây Bắc">
                    <option value="Toàn quốc">Toàn quốc (63 tỉnh thành)</option>
                    <option value="Tây Bắc">Tây Bắc (Hà Giang, Sơn La, Lai Châu)</option>
                    <option value="Miền Trung">Miền Trung &amp; Duyên hải</option>
                    <option value="Tây Nguyên">Tây Nguyên &amp; Nam Bộ</option>
                  </select>
                </div>
              </div>
            </div>

            {/* BỐ CỤC CHÍNH 7:5 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              {/* CỘT TRÁI (7/12): PODIUM & BẢNG DANH SÁCH & NHẬT KÝ */}
              <div className="lg:col-span-7 flex flex-col gap-space-lg">
                {/* PODIUM TOP 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px]">trophy</span>
                      <h3 className="text-headline-sm font-headline-sm text-on-surface">Bục Vinh Danh Top 3 Toàn Quốc - Tháng 10</h3>
                    </div>
                    <span className="text-label-sm font-label-sm text-tertiary bg-surface-container px-2 py-0.5 rounded-full font-semibold">Đã kiểm toán EduLedger</span>
                  </div>
                  {/* Visual Podium Display */}
                  <div className="grid grid-cols-3 gap-space-sm pt-space-md items-end">
                    {/* TOP 2: BẠC */}
                    <div className="flex flex-col items-center">
                      <div className="relative mb-2">
                        <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed overflow-hidden shadow-sm">
                          <img className="w-full h-full object-cover" alt="Trần Quốc Bảo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbudBVlM7xLwzK5dXeMS4dd4kv572SH1XbKESRDmS0Pwaxf5EvP2txyn4k8E4YdcJ6V4AGMWBJhZe2XRYdfrA8joEsqYmvP-X1a7ZfOOzP0gEopXPVTPpcZBvJvGWNgPUgPf1pO4RfmZTQRhgW3TZOR8xVJhtSEEuesG-IJbrtMHwfvlO61Ny7Ru9tHpuNY49g-nJ18Fn04tDq1CcMED1Ct0rbu9UoQ-JzLquCq3oeNs8oPql27djOWQ" />
                        </div>
                        <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-secondary text-on-secondary font-code-num text-label-sm flex items-center justify-center font-bold shadow-sm">2</span>
                      </div>
                      <span className="font-headline-sm text-label-md font-bold text-on-surface text-center truncate max-w-full">Trần Quốc Bảo</span>
                      <span className="text-label-sm font-label-sm text-on-surface-variant">Đà Nẵng</span>
                      <div className="w-full mt-2 pt-3 pb-2 px-2 rounded-t-lg bg-surface-container text-center flex flex-col items-center">
                        <span className="font-code-num text-label-md font-bold text-on-surface">254 Giờ</span>
                        <span className="text-body-sm font-body-sm text-on-surface-variant text-[11px]">30 chuyến</span>
                      </div>
                    </div>
                    {/* TOP 1: VÀNG */}
                    <div className="flex flex-col items-center">
                      <div className="relative mb-2">
                        <div className="w-18 h-18 rounded-full bg-primary-fixed flex items-center justify-center text-primary overflow-hidden shadow-md">
                          <img className="w-full h-full object-cover" alt="Nguyễn Thị Mai Phương" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWvvtQrJKF5ohMM2io0qv8JAJhXkS0xTUzT5dgeyUjlDQP6YIRCv6MF8-J6iPCRwUxGTStqpXRBOGU1W_mSZE6FKpVAUTbs3LYiDGIN7s6WWAow5fnBB47onlTT-TbZXtpVnstaoMZ2Ncu1XbJkbDkhuGQZtbQOTr58hdKboC5j5j6qzoIH3A1kPTWxmexceeqfZUk5ZfipoFoMwg-CLJRAX0Ehac1lbIx_LZxiecWywaPew4UtyO-wg" />
                        </div>
                        <span className="absolute -top-2 -right-1 w-7 h-7 rounded-full bg-primary text-on-primary font-code-num text-label-md flex items-center justify-center font-bold shadow">1</span>
                      </div>
                      <span className="font-headline-sm text-label-md font-bold text-primary text-center truncate max-w-full">Nguyễn Thị Mai Phương</span>
                      <span className="text-label-sm font-label-sm text-on-surface-variant">Hà Nội &amp; Bắc Giang</span>
                      <div className="w-full mt-2 pt-5 pb-3 px-2 rounded-t-xl bg-primary-fixed text-center flex flex-col items-center">
                        <span className="font-code-num text-body-md font-bold text-on-primary-fixed-variant">268 Giờ</span>
                        <span className="text-body-sm font-body-sm text-on-primary-fixed-variant font-medium text-[12px]">32 chuyến xe</span>
                      </div>
                    </div>
                    {/* TOP 3: ĐỒNG (LÊ HOÀNG LONG - CHÍNH BẠN) */}
                    <div className="flex flex-col items-center">
                      <div className="relative mb-2">
                        <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container overflow-hidden shadow-sm">
                          <img className="w-full h-full object-cover" alt="Lê H. Long" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYWKErXD2WUAB9XsBZ7bsgCCqgKGrLg5Q1WokS_MpKs5O_lB7xNnzsKdnMJ2Z7Pv6j9RrzSpRJyVA2yJxfhH88zHmGzi_5ZwhZE5gGC_xCCHNhkqYzbrDScHdxbQg4qKX26gt_ZrmRhgfPkBCrg8Hq2426xnYTfWpMRTB3z_E0Nn4VrF0rNgPBF5K_Ex3StrXV9GIjIDiG9Ao0wwq-Dva6VD_bv2URmEv3_ZQlXXfimyWjd0S_uSHfyg" />
                        </div>
                        <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-secondary text-on-secondary font-code-num text-label-sm flex items-center justify-center font-bold shadow-sm">3</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-headline-sm text-label-md font-bold text-on-surface truncate max-w-[90px]">Lê H. Long</span>
                        <span className="text-[9px] font-bold bg-primary text-on-primary px-1 py-0.2 rounded">BẠN</span>
                      </div>
                      <span className="text-label-sm font-label-sm text-on-surface-variant">Hà Giang</span>
                      <div className="w-full mt-2 pt-2 pb-2 px-2 rounded-t-lg bg-surface-container-high text-center flex flex-col items-center">
                        <span className="font-code-num text-label-md font-bold text-primary">240 Giờ</span>
                        <span className="text-body-sm font-body-sm text-on-surface-variant text-[11px]">28 chuyến</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* BẢNG DANH SÁCH TÌNH NGUYỆN VIÊN (HẠNG 4 - HẠNG 8) */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="p-space-md flex items-center justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-headline-sm font-headline-sm text-on-surface">Danh Sách Xếp Hạng Quốc Gia</h3>
                      <span className="text-body-sm font-body-sm text-on-surface-variant">Cập nhật lúc 15:42 hôm nay · Tự động đối soát từ chuỗi nhật ký</span>
                    </div>
                    <button className="text-label-sm font-label-sm text-primary font-semibold hover:underline" type="button">
                      Xem toàn bộ 1,280 TNV
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-surface-container-low text-on-surface-variant text-label-sm font-label-sm uppercase tracking-wider">
                          <th className="py-2.5 px-space-md">Hạng</th>
                          <th className="py-2.5 px-space-md">Tình Nguyện Viên</th>
                          <th className="py-2.5 px-space-md">Kỹ Năng</th>
                          <th className="py-2.5 px-space-md text-center">Chuyến Xe</th>
                          <th className="py-2.5 px-space-md text-center">PoD Chuẩn</th>
                          <th className="py-2.5 px-space-md text-right">Tổng Giờ</th>
                          <th className="py-2.5 px-space-md text-center">Chi Tiết</th>
                        </tr>
                      </thead>
                      <tbody className="text-body-sm font-body-sm text-on-surface">
                        {/* Row 4 */}
                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="py-3 px-space-md font-code-num font-bold text-on-surface">#04</td>
                          <td className="py-3 px-space-md">
                            <div className="flex items-center gap-space-sm">
                              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-primary text-label-sm">PM</div>
                              <div className="flex flex-col">
                                <span className="font-medium text-on-surface">Phạm Đức Minh</span>
                                <span className="text-label-sm font-label-sm text-on-surface-variant">TNV-1203 · Sơn La</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <span className="text-label-sm font-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Tải nặng 3.5T</span>
                          </td>
                          <td className="py-3 px-space-md text-center font-code-num">26</td>
                          <td className="py-3 px-space-md text-center">
                            <span className="text-label-sm font-label-sm text-tertiary font-semibold">100%</span>
                          </td>
                          <td className="py-3 px-space-md text-right font-code-num font-bold text-primary">218h</td>
                          <td className="py-3 px-space-md text-center">
                            <button className="p-1 hover:bg-surface-container rounded text-on-surface-variant hover:text-primary" type="button">
                              <span className="material-symbols-outlined text-[18px]">visibility</span>
                            </button>
                          </td>
                        </tr>
                        {/* Row 5 */}
                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="py-3 px-space-md font-code-num font-bold text-on-surface">#05</td>
                          <td className="py-3 px-space-md">
                            <div className="flex items-center gap-space-sm">
                              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-secondary text-label-sm">DH</div>
                              <div className="flex flex-col">
                                <span className="font-medium text-on-surface">Đặng Quốc Hùng</span>
                                <span className="text-label-sm font-label-sm text-on-surface-variant">TNV-1452 · Lai Châu</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <span className="text-label-sm font-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Cứu hộ đèo</span>
                          </td>
                          <td className="py-3 px-space-md text-center font-code-num">24</td>
                          <td className="py-3 px-space-md text-center">
                            <span className="text-label-sm font-label-sm text-tertiary font-semibold">98.5%</span>
                          </td>
                          <td className="py-3 px-space-md text-right font-code-num font-bold text-primary">205h</td>
                          <td className="py-3 px-space-md text-center">
                            <button className="p-1 hover:bg-surface-container rounded text-on-surface-variant hover:text-primary" type="button">
                              <span className="material-symbols-outlined text-[18px]">visibility</span>
                            </button>
                          </td>
                        </tr>
                        {/* Row 6 */}
                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="py-3 px-space-md font-code-num font-bold text-on-surface">#06</td>
                          <td className="py-3 px-space-md">
                            <div className="flex items-center gap-space-sm">
                              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-primary text-label-sm">VK</div>
                              <div className="flex flex-col">
                                <span className="font-medium text-on-surface">Vũ Đình Khoa</span>
                                <span className="text-label-sm font-label-sm text-on-surface-variant">TNV-1455 · Nghệ An</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <span className="text-label-sm font-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Kỹ thuật viên PC</span>
                          </td>
                          <td className="py-3 px-space-md text-center font-code-num">22</td>
                          <td className="py-3 px-space-md text-center">
                            <span className="text-label-sm font-label-sm text-tertiary font-semibold">100%</span>
                          </td>
                          <td className="py-3 px-space-md text-right font-code-num font-bold text-primary">192h</td>
                          <td className="py-3 px-space-md text-center">
                            <button className="p-1 hover:bg-surface-container rounded text-on-surface-variant hover:text-primary" type="button">
                              <span className="material-symbols-outlined text-[18px]">visibility</span>
                            </button>
                          </td>
                        </tr>
                        {/* Row 7 */}
                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="py-3 px-space-md font-code-num font-bold text-on-surface">#07</td>
                          <td className="py-3 px-space-md">
                            <div className="flex items-center gap-space-sm">
                              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-secondary text-label-sm">HT</div>
                              <div className="flex flex-col">
                                <span className="font-medium text-on-surface">Hoàng Minh Tuấn</span>
                                <span className="text-label-sm font-label-sm text-on-surface-variant">TNV-1105 · Cao Bằng</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <span className="text-label-sm font-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Đoàn thể địa phương</span>
                          </td>
                          <td className="py-3 px-space-md text-center font-code-num">21</td>
                          <td className="py-3 px-space-md text-center">
                            <span className="text-label-sm font-label-sm text-tertiary font-semibold">97.0%</span>
                          </td>
                          <td className="py-3 px-space-md text-right font-code-num font-bold text-primary">186h</td>
                          <td className="py-3 px-space-md text-center">
                            <button className="p-1 hover:bg-surface-container rounded text-on-surface-variant hover:text-primary" type="button">
                              <span className="material-symbols-outlined text-[18px]">visibility</span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* NHẬT KÝ TÍCH LŨY GIỜ CÔNG CÁ NHÂN GẦN ĐÂY */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px]">history_edu</span>
                      <h3 className="text-headline-sm font-headline-sm text-on-surface">Nhật Ký Tích Lũy Giờ Công Gần Đây</h3>
                    </div>
                    <span className="text-label-sm font-label-sm text-on-surface-variant">TNV: Lê Hoàng Long (TNV-VCH-88)</span>
                  </div>
                  <div className="flex flex-col gap-space-sm mt-2">
                    {/* Item 1 */}
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">pending</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-body-md text-on-surface">Vận chuyển #WB-2024-NW08 THCS Mường Lát</span>
                          <span className="text-label-sm font-label-sm text-on-surface-variant">24/10/2024 · 07:00 - 15:00 · Đang duyệt PoD &amp; kiểm tra geofence</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-code-num font-bold text-body-md text-primary">+8 giờ</span>
                        <span className="text-label-sm font-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded">Chờ duyệt</span>
                      </div>
                    </div>
                    {/* Item 2 */}
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">verified</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-body-md text-on-surface">Vận chuyển thiết bị Mèo Vạc, Hà Giang (35 Bộ PC)</span>
                          <span className="text-label-sm font-label-sm text-on-surface-variant">23/10/2024 · 05:30 - 15:30 · Đã đối soát chuỗi khối EduLedger</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-code-num font-bold text-body-md text-tertiary">+10 giờ</span>
                        <span className="text-label-sm font-label-sm text-tertiary bg-surface-container px-2 py-0.5 rounded">Đã xác nhận</span>
                      </div>
                    </div>
                    {/* Item 3 */}
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">inventory_2</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-body-md text-on-surface">Hỗ trợ phân loại &amp; đóng gói thiết bị tại Tổng Kho HUB-01</span>
                          <span className="text-label-sm font-label-sm text-on-surface-variant">21/10/2024 · 08:00 - 14:00 · Trực tiếp thủ kho ký nhận</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-code-num font-bold text-body-md text-tertiary">+6 giờ</span>
                        <span className="text-label-sm font-label-sm text-tertiary bg-surface-container px-2 py-0.5 rounded">Đã xác nhận</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* CỘT PHẢI (5/12): HỒ SƠ TÌNH NGUYỆN VIÊN, HUY HIỆU & RBAC POLICY */}
              <div className="lg:col-span-5 flex flex-col gap-space-lg">
                {/* CARD 1: HỒ SƠ TÌNH NGUYỆN VIÊN ĐẠI DIỆN */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="text-label-sm font-label-sm uppercase text-on-surface-variant font-bold tracking-wider">Hồ Sơ Cống Hiến Cá Nhân</span>
                    <span className="flex items-center gap-1 text-label-sm font-label-sm text-tertiary font-semibold">
                      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                      Đang hoạt động
                    </span>
                  </div>
                  <div className="flex items-center gap-space-md">
                    <div className="w-16 h-16 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant overflow-hidden shadow">
                      <img className="w-full h-full object-cover" alt="Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiSoYcc2Niy5f3CZHjL0n27Iiql-qsMSJYNiwpAXG8cr1bOpGfQQS2wMrksmOMBQZnKHMw-bw5KNhzDJi7QuddF13OkWiruXhnOE6LspGTZNC33xIDfw8btZUlmmxR9DjA22cA-3Uxlej-DWJiBaX4NPSrHLo0qUOj94Hhmftjdr0u2xl2xD6Z4lD13x6quOJ0fQUcYjMtEbSg3j0fx_Gv5BeR8Y2c-wNPguVhfvw1ROb7rY5rYbSMfw" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-headline-sm font-headline-sm text-on-surface font-bold truncate">Lê Hoàng Long</h4>
                        <span className="bg-primary text-on-primary text-[10px] font-bold px-1.5 py-0.2 rounded font-code-num">TNV-VCH-88</span>
                      </div>
                      <span className="text-body-sm font-body-sm text-on-surface-variant font-medium mt-0.5">
                        Đội Trưởng Đội Vượt Đèo Hà Giang &amp; Tây Bắc
                      </span>
                      <div className="flex items-center gap-space-xs mt-1 text-label-sm font-label-sm text-secondary">
                        <span className="material-symbols-outlined text-[14px]">shield_person</span>
                        <span>Cấp 3: Tình Nguyện Viên Nòng Cốt Vàng</span>
                      </div>
                    </div>
                  </div>
                  {/* Level Up Stepper */}
                  <div className="flex flex-col gap-1.5 p-space-sm rounded-lg bg-surface-container-low">
                    <div className="flex justify-between items-center text-label-sm font-label-sm">
                      <span className="text-on-surface font-medium">Tiến trình lên Cấp 4 (Hiệp Sĩ Áo Xanh)</span>
                      <span className="font-code-num font-bold text-primary">240 / 300 Giờ</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                      <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: '80%' }}></div>
                    </div>
                    <span className="text-label-sm font-label-sm text-on-surface-variant">Cần thêm 60 giờ công để nhận danh xưng Hiệp Sĩ và huân chương cống hiến từ Bộ GD&amp;ĐT.</span>
                  </div>
                </div>
                {/* CARD 2: BỘ HUY HIỆU & CHỨNG NHẬN ĐIỆN TỬ */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px]">military_tech</span>
                      <h3 className="text-headline-sm font-headline-sm text-on-surface">Bộ Huy Hiệu &amp; Vinh Danh</h3>
                    </div>
                    <span className="text-label-sm font-label-sm text-primary font-bold">3/4 Đã Đạt</span>
                  </div>
                  <div className="grid grid-cols-2 gap-space-sm">
                    {/* Badge 1 */}
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col items-center text-center gap-1.5">
                      <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
                        <span className="material-symbols-outlined text-[20px]">terrain</span>
                      </div>
                      <span className="text-label-md font-label-md font-bold text-on-surface">10,000km Vùng Cao</span>
                      <span className="text-body-sm font-body-sm text-on-surface-variant text-[11px]">Đã trao tặng</span>
                    </div>
                    {/* Badge 2 */}
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col items-center text-center gap-1.5">
                      <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant">
                        <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
                      </div>
                      <span className="text-label-md font-label-md font-bold text-on-surface">Chiến Sĩ Áo Xanh 2024</span>
                      <span className="text-body-sm font-body-sm text-on-surface-variant text-[11px]">Đã trao tặng</span>
                    </div>
                    {/* Badge 3 */}
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col items-center text-center gap-1.5">
                      <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
                        <span className="material-symbols-outlined text-[20px]">verified_user</span>
                      </div>
                      <span className="text-label-md font-label-md font-bold text-on-surface">100% PoD Hoàn Hảo</span>
                      <span className="text-body-sm font-body-sm text-on-surface-variant text-[11px]">28/28 Biên bản</span>
                    </div>
                    {/* Badge 4 (Locked) */}
                    <div className="p-space-sm rounded-lg bg-surface-container flex flex-col items-center text-center gap-1.5 opacity-70">
                      <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
                        <span className="material-symbols-outlined text-[20px]">emergency</span>
                      </div>
                      <span className="text-label-md font-label-md font-bold text-on-surface">Cứu Hộ Đèo Núi</span>
                      <span className="text-body-sm font-body-sm text-on-surface-variant text-[11px]">Đang khóa (2/3 ca)</span>
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center gap-space-xs py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md font-bold transition-all" type="button">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>Tải Bằng Khen Kỹ Thuật Số (PDF)</span>
                  </button>
                </div>
                {/* CARD 3: QUY CHUẨN GIỜ CÔNG & PHÂN QUYỀN RBAC (DOCUMENT_55) */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[20px]">policy</span>
                      <h3 className="text-headline-sm font-headline-sm text-on-surface">Quy Chuẩn Giờ Công RBAC v2.8.4</h3>
                    </div>
                    <span className="text-label-sm font-label-sm font-code-num text-on-surface-variant font-semibold">DOC-55</span>
                  </div>
                  <div className="flex flex-col gap-space-sm mt-1 text-body-sm font-body-sm text-on-surface-variant">
                    <div className="flex gap-space-sm items-start">
                      <span className="w-5 h-5 rounded-full bg-surface-container text-primary font-bold text-label-sm flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <p><strong className="text-on-surface font-medium">Đối soát tự động Geofence:</strong> Giờ công chỉ kích hoạt khi GPS phương tiện nằm trong phạm vi 500m của kho vận và điểm trường thụ hưởng.</p>
                    </div>
                    <div className="flex gap-space-sm items-start">
                      <span className="w-5 h-5 rounded-full bg-surface-container text-primary font-bold text-label-sm flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <p><strong className="text-on-surface font-medium">Bảo chứng chuỗi EduLedger:</strong> Không cho phép điều chỉnh giờ công thủ công. Mọi mốc thời gian đều được niêm phong mật mã SHA-256 đối soát trực tiếp Admin Tổng.</p>
                    </div>
                    <div className="flex gap-space-sm items-start">
                      <span className="w-5 h-5 rounded-full bg-surface-container text-primary font-bold text-label-sm flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <p><strong className="text-on-surface font-medium">Đặc quyền cấp bậc:</strong> TNV từ Cấp 3 trở lên được bảo trợ 100% chi phí bảo hiểm tai nạn nghề nghiệp trong suốt các cung đường đèo hiểm trở.</p>
                    </div>
                  </div>
                  {/* Audit Hash Stamp */}
                  <div className="mt-space-sm p-space-xs rounded bg-surface-container-low flex items-center justify-between font-code-num text-label-sm">
                    <span className="text-on-surface-variant">Audit Hash:</span>
                    <span className="text-primary font-semibold truncate max-w-[200px]">SHA256: 7d8a901ff...f3b890a</span>
                    <span className="material-symbols-outlined text-[14px] text-tertiary">lock</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VolunteerLeaderboardPage;
