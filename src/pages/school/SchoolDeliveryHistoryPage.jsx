import React from "react";
import { Link } from "react-router-dom";

export default function SchoolDeliveryHistoryPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed flex">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] select-none">
        <div className="flex flex-col">
          <div className="px-space-md py-space-lg bg-surface-container-lowest">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-sm">
                <span className="material-symbols-outlined text-[22px]">local_shipping</span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-primary leading-tight tracking-tight">EduShare VN</div>
                <div className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">VIETNAM CORE</div>
              </div>
            </div>
            <div className="mt-space-sm inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface-container rounded-full">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface font-medium">Trực tuyến • 63 Tỉnh Thành</span>
            </div>
          </div>
          
          <div className="px-space-md pt-space-md">
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider px-space-xs mb-space-xs">Cổng Trường Học</div>
            <nav className="flex flex-col gap-1">
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" to="/school/request">
                <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
                <span className="font-label-md text-label-md">Yêu cầu tài trợ</span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" to="/school/student-details">
                <span className="material-symbols-outlined text-[20px]">school</span>
                <span className="font-label-md text-label-md">Học sinh tiếp nhận</span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" to="/school/pod">
                <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                <span className="font-label-md text-label-md">Biên bản bàn giao (PoD)</span>
              </Link>
            </nav>
          </div>
          
          <div className="px-space-md pt-space-lg">
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider px-space-xs mb-space-xs">Kho &amp; Tiếp Nhận</div>
            <nav className="flex flex-col gap-1">
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" to="#">
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span className="font-label-md text-label-md">Danh mục thiết bị phân bổ</span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg transition-all bg-primary text-on-primary font-medium shadow-sm" to="/school/delivery-history">
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span className="font-label-md text-label-md">Lịch sử đợt giao</span>
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="p-space-md bg-surface-container-low">
          <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm mb-space-xs">
            <div className="flex items-center gap-space-xs text-tertiary mb-1">
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              <span className="font-label-sm text-label-sm font-semibold uppercase">Hỗ trợ kỹ thuật 24/7</span>
            </div>
            <div className="font-body-md text-body-md font-semibold text-on-surface">1800 6868</div>
            <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Cục Cơ sở vật chất &amp; CNTT</div>
          </div>
          <div className="px-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
            <span>EduShare Platform</span>
            <span>Phiên bản Quốc gia v2.8.4</span>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="pl-72 flex flex-col min-h-screen flex-1">
        
        {/* HEADER */}
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-md z-40 shadow-[0_1px_8px_rgba(0,0,0,0.04)] px-space-lg flex items-center justify-between gap-space-lg">
          <div className="flex-1 max-w-xl">
            <div className="relative flex items-center w-full">
              <span className="material-symbols-outlined absolute left-3 text-outline text-[20px] pointer-events-none">search</span>
              <input className="w-full pl-10 pr-space-md py-2 bg-surface-container-low rounded-lg text-on-surface placeholder:text-outline font-body-md text-body-md transition-colors focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tìm kiếm đợt giao, biên bản, vận đơn, thiết bị..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-lg cursor-pointer hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-primary text-[18px]">shield</span>
              <div className="text-left">
                <div className="font-label-sm text-label-sm text-on-surface-variant">Vai trò tài khoản</div>
                <div className="font-label-md text-label-md font-semibold text-on-surface flex items-center gap-1">Đại diện Trường học (BGH)<span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span></div>
              </div>
            </div>
            <button aria-label="Thông báo" className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-error rounded-full ring-2 ring-surface-container-lowest"></span>
            </button>
            <div className="h-7 w-[1px] bg-outline-variant/40"></div>
            <div className="flex items-center gap-space-sm pl-1">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
              <div className="text-left hidden xl:block">
                <div className="font-label-md text-label-md font-semibold text-on-surface leading-snug">Thầy Hà Văn Tiêu</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant truncate max-w-[200px]">Hiệu trưởng PTDTBT THCS Mường Lát</div>
              </div>
            </div>
          </div>
        </header>

        <main className="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)] p-space-lg">
          <div className="flex flex-col w-full">
            
            {/* Top Navigation & Action Header */}
            <section className="flex flex-col gap-space-md mb-space-lg">
              {/* Breadcrumb & Status Ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-space-sm">
                <nav className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
                  <span className="hover:text-primary cursor-pointer transition-colors">Cổng Trường Học</span>
                  <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
                  <span className="hover:text-primary cursor-pointer transition-colors">Kho &amp; Tiếp nhận</span>
                  <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
                  <span className="text-primary font-semibold">Lịch sử các đợt giao hàng</span>
                </nav>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold">Cơ sở dữ liệu EduShare Ledger: Khối #9842-ML</span>
                </div>
              </div>
              
              {/* Title and Action Row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                <div className="space-y-1">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[28px]">local_shipping</span>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface">Lịch Sử Các Đợt Giao &amp; Bàn Giao Thiết Bị</h1>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                    Tổng hợp toàn bộ hành trình các chuyến xe viện trợ, biên bản nghiệm thu (PoD), tình trạng thiết bị và nhật ký bàn giao từ các nhà hảo tâm qua EduShare Ledger cho trường PTDTBT THCS Mường Lát.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button className="inline-flex items-center gap-1.5 px-3 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md transition-all" type="button">
                    <span className="material-symbols-outlined text-[18px] text-primary">qr_code_scanner</span>
                    <span>Tra cứu mã PoD/QR</span>
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-3 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md transition-all" type="button">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">fact_check</span>
                    <span>Báo cáo đối soát</span>
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-container text-on-primary rounded-lg font-label-md text-label-md shadow-sm transition-all" type="button">
                    <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                    <span>Xuất sổ theo dõi (PDF/Excel)</span>
                  </button>
                </div>
              </div>
            </section>
            
            {/* 4 Bento KPI Metric Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg">
              {/* Card 1 */}
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Tổng Đợt Tiếp Nhận</span>
                  <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-xl text-headline-xl text-primary font-bold">04</span>
                    <span className="font-label-md text-label-md text-tertiary font-medium">/ 04 Đợt</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-tertiary text-[14px]">check_circle</span>
                    100% hoàn thành bàn giao thực địa
                  </p>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 mt-space-md overflow-hidden">
                  <div className="bg-tertiary h-1.5 rounded-full w-full"></div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Tổng Thiết Bị Đã Nhận</span>
                  <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">devices</span>
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-xl text-headline-xl text-on-surface font-bold">68</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">thiết bị số</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 truncate" title="35 PC, 15 Laptop, 10 UPS, 2 Switch, 6 Tablet">
                    35 PC, 15 Laptop, 10 UPS, 2 Switch, 6 Tab
                  </p>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 mt-space-md overflow-hidden flex">
                  <div className="bg-primary h-1.5" style={{ width: "51%" }}></div>
                  <div className="bg-tertiary h-1.5" style={{ width: "22%" }}></div>
                  <div className="bg-secondary h-1.5" style={{ width: "15%" }}></div>
                  <div className="bg-outline-variant h-1.5" style={{ width: "12%" }}></div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Giá Trị Tài Trợ Quy Đổi</span>
                  <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-[20px]">payments</span>
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline-xl text-headline-xl text-on-surface font-bold">585</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface-variant font-medium">triệu đ</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 truncate">
                    FPT, Viettel Solutions, MB, Quỹ Hy Vọng
                  </p>
                </div>
                <div className="flex items-center gap-1 mt-space-md">
                  <span className="inline-block px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Được kiểm toán độc lập</span>
                </div>
              </div>
              {/* Card 4 */}
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Tỷ Lệ Nghiệm Thu &amp; Khai Thác</span>
                  <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">verified</span>
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-xl text-headline-xl text-tertiary font-bold">98.5%</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">Sẵn sàng</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                    67 máy tốt • 01 máy bảo dưỡng định kỳ
                  </p>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 mt-space-md overflow-hidden">
                  <div className="bg-tertiary h-1.5 rounded-full" style={{ width: "98.5%" }}></div>
                </div>
              </div>
            </section>
            
            {/* Filter & View Controls */}
            <section className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm mb-space-lg flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md">
              <div className="flex flex-1 flex-wrap items-center gap-space-sm">
                {/* Search Input */}
                <div className="relative min-w-[280px] flex-1">
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">search</span>
                  <input className="w-full pl-9 pr-3 py-2 bg-surface-container-low rounded-lg text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all" placeholder="Tìm kiếm theo mã đợt #BG, vận đơn #WB, đơn vị tài trợ..." type="text" />
                </div>
                {/* Academic Year Filter */}
                <select className="px-3 py-2 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                  <option>Năm học 2024 - 2025 (Học kỳ I)</option>
                  <option>Năm học 2023 - 2024 (Toàn năm)</option>
                  <option>Tất cả niên khóa</option>
                </select>
                {/* Status Filter */}
                <select className="px-3 py-2 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                  <option>Tất cả trạng thái bàn giao</option>
                  <option>Đã hoàn tất &amp; Ký số điện tử</option>
                  <option>Đang trong chu kỳ bảo dưỡng</option>
                  <option>Đang vận chuyển liên tỉnh</option>
                </select>
              </div>
              {/* View Mode Switcher */}
              <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-lg self-end md:self-auto">
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md shadow-sm transition-all" type="button">
                  <span className="material-symbols-outlined text-[18px]">timeline</span>
                  <span>Dòng thời gian</span>
                </button>
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all" type="button">
                  <span className="material-symbols-outlined text-[18px]">table_rows</span>
                  <span>Bảng chi tiết</span>
                </button>
              </div>
            </section>
            
            {/* Main Content Layout: Detailed Feed (2/3) + Institutional Compliance Sidebar (1/3) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              
              {/* LEFT FEED: Timeline Delivery Logs (8 Cols) */}
              <div className="lg:col-span-8 flex flex-col gap-space-lg">
                {/* BATCH 01: Expanded Full Detail with Proof of Delivery & Photos */}
                <article className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
                  {/* Card Top Bar / Badge Bar */}
                  <div className="bg-surface-container-low px-space-lg py-space-md flex flex-wrap items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="px-2.5 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold uppercase tracking-wider flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">verified</span> Đã Hoàn Tất Bàn Giao &amp; Ký Số
                      </span>
                      <span className="font-code-num text-code-num font-semibold text-primary">#BG-2024-110</span>
                      <span className="text-outline text-body-sm">•</span>
                      <span className="font-code-num text-code-num text-secondary">Vận đơn: #WB-2024-NW08</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">event_available</span>
                      <span>24/10/2024 lúc 16:30</span>
                    </div>
                  </div>
                  <div className="p-space-lg flex flex-col gap-space-md">
                    {/* Batch Title & Donor Info */}
                    <div>
                      <h2 className="font-headline-md text-headline-md text-on-surface mb-1">
                        Đợt IV/2024: Dự Án Chắp Cánh Ước Mơ Tin Học Mường Lát
                      </h2>
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-space-md text-on-surface-variant font-body-sm text-body-sm">
                        <span className="flex items-center gap-1 text-on-surface">
                          <span className="material-symbols-outlined text-primary text-[16px]">corporate_fare</span>
                          <strong>Nguồn tài trợ:</strong> Tập đoàn FPT &amp; Quỹ Hy Vọng
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-secondary text-[16px]">handshake</span>
                          Đồng hành kỹ thuật: VNPT Thanh Hóa
                        </span>
                      </div>
                    </div>
                    {/* Featured Photo Mosaic from Handover Event */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
                      <div className="md:col-span-2 relative rounded-lg overflow-hidden group shadow-sm">
                        <img alt="Bàn giao máy tính" className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxQwwEgyHPxt9vFlZMJJ6zm7lRFdi8u1Y1dy0-fcqWd1fptTPVXOk8ZivEr6U_cD2SLv9QrrCBvXoKwW0dybArfv0WjW6xSLtYFg8alpm6xnbmv4G3q2npWx7G7HIxhqwSbdCMUBwet2DSzmfu8DbLS79HP2aVd6imNZXnGwdISnJjjNTbO1gW5ffvm5ebf7V_KsrU_AXEjgHJriqPgBnsR6Qf7fr7ifgVutyyqzdPLrkTftDPoQP2XA" />
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-on-background/90 via-on-background/40 to-transparent p-space-sm text-on-primary">
                          <span className="font-label-sm text-label-sm font-semibold tracking-wide uppercase text-primary-fixed">Ảnh thực địa #01</span>
                          <p className="font-body-sm text-body-sm truncate text-surface">Bàn giao máy tính tại phòng Tin học Điểm trường chính</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-space-sm">
                        <div className="relative rounded-lg overflow-hidden flex-1 group shadow-sm">
                          <img alt="Kiểm đếm 25 thùng PC" className="w-full h-[106px] object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVzuMRG7X3w0HORsqwHa8aXr1EFgtMJXXxMZutAH9Hw2ZKyIYdNgsiXogDRVLvZU4bYnNcOH3teWZ47XsUtTINo4HdlLaryCdnrxYSot7Ztt_CFULw_1vGefMiEW651DnTbLOGtQC4fhF2CsHIlXzO7qqMJNph9yn0DX2_QtGZANCQA9hJAqaQMVJAtTo6TwU1vs15kK8RhBqTlyRwTm6-hB06jQsBvDkH8YEpIY-Bs-DT2ZXdVN_LuQ" />
                          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-on-background/80 to-transparent p-1.5 text-on-primary">
                            <span className="font-label-sm text-label-sm">Kiểm đếm 25 thùng PC</span>
                          </div>
                        </div>
                        <div className="relative rounded-lg overflow-hidden flex-1 group shadow-sm">
                          <img alt="Ký số & Đối soát PoD" className="w-full h-[106px] object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKwU0qeO1JaR-wMahBE5p262_vGa3bSP65XOlIl8I-2C6YCGGCEqbr6Fcm4_TtE-7IGqzM4KpPx_2M88o7I909UAIrP-IjSrRaN9v1-OzYGBm-VfYm9eoK_ECqTEggcrBsG-05F3xFLppgDU1Fy492cl9ap6XwBux3TxwQz7IY11MFYpnfkQavOpEna-Fhw74Dfzux22u5HwqVk4cUCIyzex4QbJtFj9e9eE8QuXt6r32a9cj4-va9HA" />
                          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-on-background/80 to-transparent p-1.5 text-on-primary">
                            <span className="font-label-sm text-label-sm">Ký số &amp; Đối soát PoD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Equipment Breakdown Matrix */}
                    <div className="bg-surface-container-low p-space-md rounded-xl">
                      <div className="flex items-center justify-between mb-space-sm">
                        <span className="font-label-md text-label-md font-semibold text-on-surface flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[18px]">devices_other</span>
                          Danh mục thiết bị đã bàn giao vào kho trường (37 hạng mục)
                        </span>
                        <span className="font-label-sm text-label-sm text-tertiary font-semibold">Tất cả đạt chuẩn Grade A</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
                        <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-sm shadow-sm">
                          <span className="material-symbols-outlined text-primary text-[24px]">desktop_windows</span>
                          <div className="min-w-0">
                            <div className="font-label-md text-label-md font-semibold text-on-surface truncate">25 Máy PC HP ProDesk 400 G6</div>
                            <div className="font-body-sm text-body-sm text-on-surface-variant">Core i5-10500 / 16GB / SSD 256GB</div>
                          </div>
                        </div>
                        <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-sm shadow-sm">
                          <span className="material-symbols-outlined text-tertiary text-[24px]">battery_charging_full</span>
                          <div className="min-w-0">
                            <div className="font-label-md text-label-md font-semibold text-on-surface truncate">10 Bộ Lưu Điện Santak 1000VA</div>
                            <div className="font-body-sm text-body-sm text-on-surface-variant">Bảo vệ nguồn điện lưới miền núi</div>
                          </div>
                        </div>
                        <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-sm shadow-sm">
                          <span className="material-symbols-outlined text-secondary text-[24px]">hub</span>
                          <div className="min-w-0">
                            <div className="font-label-md text-label-md font-semibold text-on-surface truncate">02 Cisco Gigabit Switch 24-Port</div>
                            <div className="font-body-sm text-body-sm text-on-surface-variant">Kèm hệ thống dây mạng LAN Cat6</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Verification Telemetry & Blockchain Hash Strip */}
                    <div className="bg-surface-container p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div className="space-y-1">
                        <div className="flex items-center gap-space-sm">
                          <span className="material-symbols-outlined text-tertiary text-[20px]">pin_drop</span>
                          <span className="font-label-md text-label-md font-semibold text-on-surface">Tọa độ GPS xác thực: 20.5052° N, 104.6221° E (Xã Mường Lát)</span>
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
                          <span>Người tiếp nhận: <strong>Thầy Hà Văn Tiêu (Hiệu trưởng)</strong></span>
                          <span>•</span>
                          <span>TNV phụ trách: <strong>Lê Hoàng Long (Đội TNV Vượt Đèo)</strong></span>
                        </div>
                        <div className="font-code-num text-code-num text-outline break-all">
                          Mã SHA-256: e8b7a4f91040854d9c72ecadff67f40112aa84339e1bfda26359f2c8d62bb4
                        </div>
                      </div>
                      <div className="flex flex-wrap md:flex-col items-end gap-2 shrink-0">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-lowest rounded-md text-tertiary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[16px]">enhanced_encryption</span> VNPT-CA Hợp Lệ
                        </span>
                        <span className="text-on-surface-variant font-label-sm text-label-sm">Đã đồng bộ lên CSDL Bộ GD&amp;ĐT</span>
                      </div>
                    </div>
                    {/* Bottom Action Buttons for Batch 01 */}
                    <div className="flex flex-wrap items-center justify-between gap-space-sm pt-2">
                      <div className="flex items-center gap-2">
                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all shadow-sm" type="button">
                          <span className="material-symbols-outlined text-[18px]">description</span>
                          <span>Xem Biên bản PoD chi tiết</span>
                        </button>
                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md transition-all" type="button">
                          <span className="material-symbols-outlined text-[18px] text-primary">qr_code</span>
                          <span>Xem 37 Mã QR tài sản</span>
                        </button>
                      </div>
                      <button className="inline-flex items-center gap-1 text-primary hover:text-primary-container font-label-md text-label-md" type="button">
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        <span>Tải file ký số (.pdf - 4.2 MB)</span>
                      </button>
                    </div>
                  </div>
                </article>

                {/* BATCH 02: Collapsed / Overview Card */}
                <article className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
                  <div className="p-space-lg flex flex-col gap-space-sm">
                    <div className="flex flex-wrap items-center justify-between gap-space-sm">
                      <div className="flex items-center gap-space-sm">
                        <span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-semibold uppercase tracking-wider flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">school</span> Khai thác học tập tốt
                        </span>
                        <span className="font-code-num text-code-num font-semibold text-primary">#BG-2024-065</span>
                        <span className="text-outline text-body-sm">•</span>
                        <span className="font-code-num text-code-num text-secondary">Vận đơn: #WB-2024-VT03</span>
                      </div>
                      <div className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span> 15/09/2024
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mt-1">
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">
                          Đợt III/2024: Tài Trợ Máy Tính Xách Tay Bồi Dưỡng Học Sinh Giỏi
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                          Nhà tài trợ: <strong>Tập đoàn Viettel Solutions</strong> • Tiếp nhận: Thầy Lò Văn Thuận (Tổ trưởng Chuyên môn)
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="text-right">
                          <div className="font-headline-sm text-headline-sm text-primary font-bold">15 Laptop</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">Dell Latitude 5520</div>
                        </div>
                        <button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-primary transition-all" type="button">
                          <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                        </button>
                      </div>
                    </div>
                    {/* Micro specs badges */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <span className="px-2 py-1 bg-surface-container-low rounded text-on-surface-variant font-body-sm text-body-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-tertiary text-[14px]">check</span> Đã nạp Windows 11 Pro Edu bản quyền
                      </span>
                      <span className="px-2 py-1 bg-surface-container-low rounded text-on-surface-variant font-body-sm text-body-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary text-[14px]">backpack</span> Tặng kèm 15 balo chống sốc &amp; chuột quang
                      </span>
                      <span className="px-2 py-1 bg-surface-container-low rounded text-on-surface-variant font-body-sm text-body-sm">
                        Biên bản bàn giao số #PoD-VT-782
                      </span>
                    </div>
                  </div>
                </article>

                {/* BATCH 03: Compact Card */}
                <article className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
                  <div className="p-space-lg flex flex-col gap-space-sm">
                    <div className="flex flex-wrap items-center justify-between gap-space-sm">
                      <div className="flex items-center gap-space-sm">
                        <span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-semibold uppercase tracking-wider flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">local_library</span> Phục vụ thư viện số
                        </span>
                        <span className="font-code-num text-code-num font-semibold text-primary">#BG-2024-032</span>
                      </div>
                      <div className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span> 20/05/2024
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mt-1">
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">
                          Đợt II/2024: Học Cụ Số Hóa &amp; Máy Tính Bảng Tra Cứu Thư Viện
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                          Nhà tài trợ: <strong>Khối Doanh Nghiệp Trẻ Hà Nội &amp; MB Bank</strong> • Phụ trách thư viện số
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="text-right">
                          <div className="font-headline-sm text-headline-sm text-on-surface font-bold">06 Tablet + 10 Bàn</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">Galaxy Tab A8 + Bàn chuyên dụng</div>
                        </div>
                        <button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-primary transition-all" type="button">
                          <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <span className="px-2 py-1 bg-surface-container-low rounded text-on-surface-variant font-body-sm text-body-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-tertiary text-[14px]">verified</span> Tích hợp kho sách điện tử 5.000 đầu sách thiếu nhi
                      </span>
                      <span className="px-2 py-1 bg-surface-container-low rounded text-on-surface-variant font-body-sm text-body-sm">
                        Biên bản số #PoD-MB-221
                      </span>
                    </div>
                  </div>
                </article>

                {/* BATCH 04: Archived Milestone Card */}
                <article className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md opacity-90 hover:opacity-100">
                  <div className="p-space-lg flex flex-col gap-space-sm">
                    <div className="flex flex-wrap items-center justify-between gap-space-sm">
                      <div className="flex items-center gap-space-sm">
                        <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold uppercase tracking-wider flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">history</span> Lưu trữ năm 2023
                        </span>
                        <span className="font-code-num text-code-num font-semibold text-secondary">#BG-2023-088</span>
                      </div>
                      <div className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span> 18/11/2023
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mt-1">
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">
                          Đợt I/2023: Khởi Động Phòng Học Số Vùng Biên Giới Mường Lát
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                          Nhà tài trợ: <strong>Cộng đồng Cựu Sinh Viên Bách Khoa Hà Nội</strong> • Đợt viện trợ tiền đề
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="text-right">
                          <div className="font-headline-sm text-headline-sm text-on-surface font-bold">10 Máy PC</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">Phòng thực hành số 1</div>
                        </div>
                        <button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-primary transition-all" type="button">
                          <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Pagination / Log counter */}
                <div className="flex items-center justify-between p-space-md bg-surface-container-lowest rounded-xl shadow-sm text-on-surface-variant font-body-sm text-body-sm">
                  <span>Hiển thị <strong>4 trên 4 đợt giao</strong> (Niên khóa 2023 - 2025)</span>
                  <div className="flex items-center gap-1">
                    <button className="px-3 py-1.5 rounded-lg bg-surface-container text-outline cursor-not-allowed" disabled type="button">Trang trước</button>
                    <span className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-semibold">1</span>
                    <button className="px-3 py-1.5 rounded-lg bg-surface-container text-outline cursor-not-allowed" disabled type="button">Trang sau</button>
                  </div>
                </div>
              </div>
              
              {/* RIGHT SIDEBAR: Institutional Governance & Technical Support (4 Cols) */}
              <aside className="lg:col-span-4 flex flex-col gap-space-lg">
                {/* Asset Maintenance Commitment Panel */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-sm text-primary">
                    <span className="material-symbols-outlined text-[24px]">gavel</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Cam Kết Quản Lý Tài Sản</h2>
                  </div>
                  <div className="bg-surface-container-low p-space-md rounded-lg space-y-2">
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Mã văn bản cam kết:</span>
                      <span className="font-code-num text-code-num font-bold text-primary">#CK-ML-01/GD</span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Chu kỳ kiểm kê:</span>
                      <span className="font-label-md text-label-md font-medium">06 tháng / lần</span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Lần kiểm kê gần nhất:</span>
                      <span className="font-label-md text-label-md font-medium text-tertiary">30/09/2024</span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Nhà trường cam kết không chuyển nhượng, không hoán đổi vị trí thiết bị ra khỏi khuôn viên trường học khi chưa có phê chuẩn từ EduShare Core và Phòng GD&amp;ĐT huyện Mường Lát.
                  </p>
                  <button className="w-full py-2 bg-surface-container hover:bg-surface-container-high text-primary rounded-lg font-label-md text-label-md transition-all flex items-center justify-center gap-1.5" type="button">
                    <span className="material-symbols-outlined text-[18px]">verified_user</span>
                    <span>Xem bản quy chế quản lý công</span>
                  </button>
                </div>
                
                {/* Next Scheduled Maintenance Card */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm text-tertiary">
                      <span className="material-symbols-outlined text-[24px]">build_circle</span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">Bảo Dưỡng Kỹ Thuật</h2>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm font-semibold">Định kỳ</span>
                  </div>
                  <div className="bg-surface-container p-space-md rounded-lg border-l-4 border-primary">
                    <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Đợt Kiểm Tra Tiếp Theo</div>
                    <div className="font-headline-sm text-headline-sm text-primary font-bold mt-1">15 Tháng 12, 2024</div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Thực hiện bởi: <strong>Tổ Kỹ Thuật Viễn Thông VNPT Mường Lát</strong> (Vệ sinh máy, cập nhật phần mềm học liệu mới).
                    </p>
                  </div>
                  {/* 1 Asset Under Maintenance Notice */}
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">info</span>
                    <div className="min-w-0">
                      <div className="font-label-md text-label-md font-semibold text-on-surface">1 Thiết bị đang kiểm tra nguồn</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">PC HP #ML-PC-014 (Phòng Tin số 2) dự kiến hoàn tất ngày 28/10.</div>
                    </div>
                  </div>
                </div>
                
                {/* Quick School Representative Contact & Support */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-sm text-on-surface">
                    <span className="material-symbols-outlined text-primary text-[24px]">support_agent</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Hỗ Trợ Thực Địa Khẩn Cấp</h2>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Khi gặp sự cố hỏng hóc do sét đánh, sạt lở hoặc điện lưới chập chờn, Ban giám hiệu kích hoạt lệnh cứu trợ công nghệ:
                  </p>
                  <div className="space-y-2">
                    <a className="flex items-center justify-between p-3 bg-primary text-on-primary rounded-lg hover:bg-primary-container transition-all" href="tel:18006868">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                        <span className="font-label-md text-label-md font-semibold">Hotline Kỹ Thuật Miễn Cước</span>
                      </div>
                      <span className="font-code-num text-code-num font-bold">1800 6868</span>
                    </a>
                    <button className="w-full flex items-center justify-center gap-2 p-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md transition-all" type="button">
                      <span className="material-symbols-outlined text-error text-[18px]">report_problem</span>
                      <span>Gửi Yêu Cầu Thay Thế Linh Kiện</span>
                    </button>
                  </div>
                  <div className="pt-2 text-center">
                    <span className="font-label-sm text-label-sm text-outline">Thời gian phản hồi cam kết tại vùng cao: dưới 48 giờ</span>
                  </div>
                </div>
                
                {/* Ministry of Education Compliance Guarantee Badge */}
                <div className="p-space-md bg-surface-container-low rounded-xl flex items-center gap-space-sm shadow-sm">
                  <span className="material-symbols-outlined text-tertiary text-[32px] shrink-0">verified</span>
                  <div>
                    <div className="font-label-md text-label-md font-semibold text-on-surface">Quy chuẩn dữ liệu cấp Quốc gia</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Biên bản số hóa đáp ứng Thông tư số 16/2019/TT-BGDĐT về quản trị cơ sở dữ liệu thiết bị trường học.</div>
                  </div>
                </div>
              </aside>
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}
