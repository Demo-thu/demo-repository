import React from "react";
import { Link } from "react-router-dom";

export default function SchoolPoDPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased flex">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low flex flex-col z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="p-space-md pb-space-sm">
          <div className="flex items-center gap-space-sm">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-[22px]">local_library</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary leading-tight tracking-tight">EduShare VN</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Cổng Trường Học</span>
            </div>
          </div>
          <div className="mt-space-sm inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-secondary-container">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="font-label-sm text-label-sm">Trực tuyến • 63 Tỉnh Thành</span>
          </div>
        </div>
        
        <nav className="flex-1 px-space-md py-space-sm overflow-y-auto space-y-space-md">
          <div className="space-y-1">
            <p className="px-space-sm py-1 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Cổng trường học</p>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" to="/school/request">
              <span className="material-symbols-outlined text-[20px]">assignment</span>
              <span className="font-label-md text-label-md">Yêu cầu tài trợ</span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" to="/school/student-details">
              <span className="material-symbols-outlined text-[20px]">groups</span>
              <span className="font-label-md text-label-md">Học sinh tiếp nhận</span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg bg-primary-container text-on-primary font-medium shadow-sm transition-colors" to="/school/pod">
              <span className="material-symbols-outlined text-[20px]">description</span>
              <span className="font-label-md text-label-md">Biên bản bàn giao (PoD)</span>
            </Link>
          </div>
          <div className="space-y-1">
            <p className="px-space-sm py-1 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Kho &amp; Tiếp nhận</p>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" to="#">
              <span className="material-symbols-outlined text-[20px]">inventory_2</span>
              <span className="font-label-md text-label-md">Danh mục thiết bị phân bổ</span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" to="#">
              <span className="material-symbols-outlined text-[20px]">history</span>
              <span className="font-label-md text-label-md">Lịch sử đợt giao</span>
            </Link>
          </div>
        </nav>
        
        <div className="p-space-md bg-surface-container/60 rounded-t-xl space-y-space-xs">
          <div className="flex items-center gap-space-xs text-on-surface">
            <span className="material-symbols-outlined text-[18px] text-primary">support_agent</span>
            <span className="font-label-md text-label-md font-semibold">Hỗ trợ kỹ thuật 24/7</span>
          </div>
          <div className="font-code-num text-code-num text-primary font-bold tracking-wide">
            1800 6868 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">(Miễn phí)</span>
          </div>
          <div className="font-label-sm text-label-sm text-on-surface-variant pt-1">Phiên bản Quốc gia v2.8.4</div>
        </div>
      </aside>

      {/* HEADER */}
      <div className="pl-72 flex-1 flex flex-col min-h-screen">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface/90 backdrop-blur-xl z-40 shadow-[0_1px_8px_rgba(0,0,0,0.04)] px-space-xl flex items-center justify-between gap-space-md">
          <div className="flex-1 max-w-lg">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-[20px] text-outline">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder="Tìm kiếm biên bản, thiết bị, học sinh..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-space-md shrink-0">
            <div className="hidden xl:flex flex-col text-right">
              <span className="font-label-sm text-label-sm text-primary font-semibold">Vai trò: Đại diện Trường học (BGH)</span>
              <span className="font-body-sm text-body-sm text-on-surface font-medium truncate max-w-xs">Thầy Hà Văn Tiêu - Trường PTDTBT THCS Mường Lát</span>
            </div>
            <button className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors relative" type="button">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </header>

        <main className="relative pt-16 bg-surface w-full px-gutter-desktop min-h-screen">
          <div className="flex flex-col w-full pb-16">
            
            {/* BREADCRUMB & CONTEXT BANNER */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md mb-space-sm mt-space-md">
              <Link className="hover:text-primary transition-colors flex items-center gap-1" to="#">
                <span className="material-symbols-outlined text-[16px]">account_balance</span>
                Cổng Trường Học
              </Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <Link className="hover:text-primary transition-colors" to="#">Biên bản bàn giao (PoD)</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-on-surface font-semibold">Biên bản #POD-2024-ML08</span>
            </nav>

            {/* ACTION HEADER / STATUS STRIP */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
              <div className="flex items-start sm:items-center gap-space-md">
                <Link className="w-10 h-10 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container transition-colors shrink-0" to="#">
                  <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                </Link>
                <div>
                  <div className="flex flex-wrap items-center gap-space-sm mb-1">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Biên Bản Bàn Giao &amp; Nghiệm Thu #POD-2024-ML08</h1>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0fdf4] text-[#166534] text-label-sm font-label-sm">
                      <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse"></span>
                      ĐÃ HOÀN TẤT KÝ SỐ &amp; NGHIỆM THU
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs flex-wrap">
                    <span>Chiến dịch: <strong>Chắp Cánh Ước Mơ Tin Học Mường Lát 2024</strong> (#CD-2024-ML08)</span>
                    <span className="text-outline-variant">•</span>
                    <span>Vận đơn: <strong className="font-code-num text-code-num">#WB-2024-NW08</strong> (Xe 29C-882.10)</span>
                  </p>
                </div>
              </div>
              
              {/* Toolbar buttons */}
              <div className="flex items-center gap-space-sm flex-wrap shrink-0">
                <button className="px-4 py-2 bg-surface-container-lowest hover:bg-surface-container text-on-surface rounded-lg font-label-md text-label-md shadow-sm transition-colors flex items-center gap-1.5" type="button">
                  <span className="material-symbols-outlined text-[18px] text-primary">share</span>
                  <span>Chia sẻ minh chứng</span>
                </button>
                <button className="px-4 py-2 bg-surface-container-lowest hover:bg-surface-container text-on-surface rounded-lg font-label-md text-label-md shadow-sm transition-colors flex items-center gap-1.5" type="button">
                  <span className="material-symbols-outlined text-[18px] text-tertiary">receipt_long</span>
                  <span>Xuất hóa đơn</span>
                </button>
                <button className="px-4 py-2 bg-primary hover:bg-primary-container text-on-primary rounded-lg font-label-md text-label-md shadow-sm transition-colors flex items-center gap-1.5" type="button" onClick={() => window.print()}>
                  <span className="material-symbols-outlined text-[18px]">print</span>
                  <span>In biên bản nghiệm thu (PDF)</span>
                </button>
              </div>
            </div>

            {/* SECTION 1: OVERVIEW HERO METRICS CARD */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg mb-space-lg">
              <div className="flex flex-col xl:flex-row justify-between gap-space-lg pb-space-md mb-space-md bg-surface-container-low/50 p-space-md rounded-lg">
                <div className="space-y-1">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Đơn Vị Thụ Hưởng Cấp Cơ Sở</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">Trường PTDTBT THCS Mường Lát</h2>
                  <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs flex-wrap">
                    <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                    <span>Bản Lát, Xã Tam Chung, Huyện Mường Lát, Tỉnh Thanh Hóa</span>
                    <span className="text-outline-variant">•</span>
                    <span>Phòng Tin học Điểm trường chính</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-space-md">
                  {/* Geotag verification tag */}
                  <div className="flex items-center gap-space-sm bg-surface-container-lowest px-3 py-2 rounded-lg shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-tertiary-container/20 text-tertiary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </div>
                    <div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">Xác Thực Định Vị Vệ Tinh (GPS)</div>
                      <div className="font-code-num text-code-num text-tertiary font-bold">20.505°N, 104.622°E <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">(Sai số &lt; 3m)</span></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm bg-surface-container-lowest px-3 py-2 rounded-lg shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                    </div>
                    <div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">Thời Điểm Bàn Giao Kỹ Thuật</div>
                      <div className="font-code-num text-code-num text-on-surface font-semibold">16:30 • 24/10/2024</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 4 Bento Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
                {/* Card 1 */}
                <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Tổng Thiết Bị Bàn Giao</span>
                    <span className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">devices</span>
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-headline-lg text-headline-lg font-bold text-on-surface">37</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">thiết bị chính</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">25 PC HP • 10 Santak UPS • 2 Switch Cisco</p>
                </div>
                {/* Card 2 */}
                <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Tình Trạng Kỹ Thuật</span>
                    <span className="w-8 h-8 rounded-lg bg-tertiary text-on-tertiary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-headline-lg text-headline-lg font-bold text-tertiary">100%</span>
                    <span className="font-label-md text-label-md text-tertiary font-semibold">Grade A</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Đã test nghiệm thu chạy liên tục 4h ổn định</p>
                </div>
                {/* Card 3 */}
                <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Học Sinh Hưởng Lợi</span>
                    <span className="w-8 h-8 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">school</span>
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-headline-lg text-headline-lg font-bold text-on-surface">412</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">học sinh dân tộc</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">142 em bán trú diện đặc biệt khó khăn</p>
                </div>
                {/* Card 4 */}
                <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Giá Trị Tài Trợ Quy Đổi</span>
                    <span className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">volunteer_activism</span>
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-headline-lg text-headline-lg font-bold text-primary">345.000.000</span>
                    <span className="font-label-sm text-label-sm font-semibold text-primary">₫</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">Tài trợ bởi Tập đoàn FPT &amp; Quỹ Hy Vọng</p>
                </div>
              </div>
            </div>

            {/* SECTION 2: TWO-COLUMN WORKSPACE (7 : 5) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              
              {/* LEFT COLUMN (7 COLS): SPECIFICATION, CHECKLIST, EVIDENCE PHOTO */}
              <div className="lg:col-span-7 space-y-space-lg">
                
                {/* SUB-BLOCK A: DETAILED ASSET TABLE & QR CODING */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                  <div className="p-space-md pb-space-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm bg-surface-container-low/40">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[20px] text-primary">inventory_2</span>
                        Danh Mục Thiết Bị Bàn Giao &amp; Mã QR Từng Máy
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Đã được dán tem định danh số hoá và tích hợp vào CSDL cơ sở vật chất của trường</p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-secondary-container font-label-sm text-label-sm self-start sm:self-auto font-semibold">
                      3 Nhóm phân loại
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                          <th className="py-3 px-space-md font-semibold">Hạng mục &amp; Cấu hình kỹ thuật</th>
                          <th className="py-3 px-3 font-semibold text-center">Số lượng</th>
                          <th className="py-3 px-3 font-semibold">Tình trạng</th>
                          <th className="py-3 px-space-md font-semibold">Dải QR / Seri</th>
                        </tr>
                      </thead>
                      <tbody className="font-body-sm text-body-sm text-on-surface">
                        {/* Item 1: PC */}
                        <tr className="hover:bg-surface-container-low/60 transition-colors">
                          <td className="py-space-sm px-space-md">
                            <div className="flex items-start gap-space-sm">
                              <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                <span className="material-symbols-outlined text-[18px]">desktop_windows</span>
                              </div>
                              <div>
                                <div className="font-label-md text-label-md font-semibold text-on-surface">PC HP ProDesk 400 G6 Microtower</div>
                                <div className="text-on-surface-variant font-body-sm text-body-sm">Core i3-10100 • 8GB DDR4 • 256GB NVMe SSD</div>
                                <div className="text-on-surface-variant text-label-sm font-label-sm">Kèm màn hình HP P22v G4 21.5" FHD + Phím chuột HP</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-space-sm px-3 text-center">
                            <span className="font-headline-sm text-headline-sm font-bold text-primary">25</span>
                            <div className="text-label-sm font-label-sm text-on-surface-variant">Bộ</div>
                          </td>
                          <td className="py-space-sm px-3">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-sm font-label-sm bg-[#f0fdf4] text-[#166534]">
                              <span className="material-symbols-outlined text-[14px]">check</span> Refurbished Grade A
                            </span>
                            <div className="text-label-sm font-label-sm text-on-surface-variant mt-0.5">Tem niêm phong EduShare</div>
                          </td>
                          <td className="py-space-sm px-space-md">
                            <div className="font-code-num text-code-num text-primary font-semibold">#QR-PC-ML01 ➔ ML25</div>
                            <button className="text-label-sm font-label-sm text-primary hover:underline flex items-center gap-0.5 mt-0.5" type="button">
                              <span className="material-symbols-outlined text-[13px]">qr_code_scanner</span>
                              Xem 25 mã QR
                            </button>
                          </td>
                        </tr>
                        {/* Item 2: UPS */}
                        <tr className="hover:bg-surface-container-low/60 transition-colors">
                          <td className="py-space-sm px-space-md">
                            <div className="flex items-start gap-space-sm">
                              <div className="w-8 h-8 rounded bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0 mt-0.5">
                                <span className="material-symbols-outlined text-[18px]">battery_charging_full</span>
                              </div>
                              <div>
                                <div className="font-label-md text-label-md font-semibold text-on-surface">Bộ lưu điện Santak Blazer 1000E Pro</div>
                                <div className="text-on-surface-variant font-body-sm text-body-sm">Công suất 1000VA / 600W • Ắc quy khô không cần bảo dưỡng</div>
                                <div className="text-on-surface-variant text-label-sm font-label-sm">Đảm bảo máy vận hành khi sụt áp lưới điện vùng cao</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-space-sm px-3 text-center">
                            <span className="font-headline-sm text-headline-sm font-bold text-on-surface">10</span>
                            <div className="text-label-sm font-label-sm text-on-surface-variant">Bộ</div>
                          </td>
                          <td className="py-space-sm px-3">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-sm font-label-sm bg-[#f0fdf4] text-[#166534]">
                              <span className="material-symbols-outlined text-[14px]">new_releases</span> Mới 100%
                            </span>
                            <div className="text-label-sm font-label-sm text-on-surface-variant mt-0.5">Bảo hành 24 tháng</div>
                          </td>
                          <td className="py-space-sm px-space-md">
                            <div className="font-code-num text-code-num text-on-surface font-semibold">#QR-UPS-ML01 ➔ ML10</div>
                            <button className="text-label-sm font-label-sm text-primary hover:underline flex items-center gap-0.5 mt-0.5" type="button">
                              <span className="material-symbols-outlined text-[13px]">qr_code_scanner</span>
                              Xem 10 mã QR
                            </button>
                          </td>
                        </tr>
                        {/* Item 3: Switch mạng */}
                        <tr className="hover:bg-surface-container-low/60 transition-colors">
                          <td className="py-space-sm px-space-md">
                            <div className="flex items-start gap-space-sm">
                              <div className="w-8 h-8 rounded bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                                <span className="material-symbols-outlined text-[18px]">hub</span>
                              </div>
                              <div>
                                <div className="font-label-md text-label-md font-semibold text-on-surface">Switch TP-Link TL-SG1024D 24-Port Gigabit</div>
                                <div className="text-on-surface-variant font-body-sm text-body-sm">24 cổng 10/100/1000Mbps • Vỏ thép gắn tủ rack</div>
                                <div className="text-on-surface-variant text-label-sm font-label-sm">Kèm 02 thùng cáp mạng Cat6 UTP 305m &amp; hạt mạng RJ45</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-space-sm px-3 text-center">
                            <span className="font-headline-sm text-headline-sm font-bold text-on-surface">02</span>
                            <div className="text-label-sm font-label-sm text-on-surface-variant">Bộ</div>
                          </td>
                          <td className="py-space-sm px-3">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-sm font-label-sm bg-[#f0fdf4] text-[#166534]">
                              <span className="material-symbols-outlined text-[14px]">new_releases</span> Mới 100%
                            </span>
                            <div className="text-label-sm font-label-sm text-on-surface-variant mt-0.5">Nguyên seal nhà máy</div>
                          </td>
                          <td className="py-space-sm px-space-md">
                            <div className="font-code-num text-code-num text-on-surface font-semibold">#QR-NET-ML01, ML02</div>
                            <button className="text-label-sm font-label-sm text-primary hover:underline flex items-center gap-0.5 mt-0.5" type="button">
                              <span className="material-symbols-outlined text-[13px]">qr_code_scanner</span>
                              Xem mã định danh
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* SUB-BLOCK B: FIELD ACCEPTANCE CHECKLIST (5 CRITERIA) */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md">
                  <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[20px] text-tertiary">fact_check</span>
                        Biên Bản Kiểm Tra Kỹ Thuật Nghiệm Thu Tại Chỗ (5 Tiêu Chí)
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Thực hiện kiểm tra thực tế dưới sự giám sát trực tiếp của BGH trường và UBND Xã Tam Chung</p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#f0fdf4] text-[#166534] font-label-sm text-label-sm font-bold">
                      5/5 TIÊU CHÍ ĐẠT
                    </span>
                  </div>
                  <div className="space-y-space-xs">
                    {/* Item 1 */}
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                      <span className="w-6 h-6 rounded-full bg-[#16a34a] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">1. Khởi động hệ điều hành EduOS Vietnam Core &amp; Phần mềm học tập</span>
                          <span className="font-label-sm text-label-sm text-[#166534] font-semibold">ĐẠT (25/25 MÁY)</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Đã nạp sẵn giáo trình Scratch 3.0, môi trường lập trình Python 3, bộ gõ Tiếng Việt và kho SGK Số Bộ GD&amp;ĐT ngoại tuyến.</p>
                      </div>
                    </div>
                    {/* Item 2 */}
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                      <span className="w-6 h-6 rounded-full bg-[#16a34a] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">2. Mạng LAN nội bộ và đường truyền Internet cáp quang Viettel</span>
                          <span className="font-label-sm text-label-sm text-[#166534] font-semibold">ĐẠT (150 Mbps)</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Tất cả 25 máy kết nối thông suốt với máy chủ giáo viên, truy cập ổn định Cổng học liệu trực tuyến Quốc gia.</p>
                      </div>
                    </div>
                    {/* Item 3 */}
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                      <span className="w-6 h-6 rounded-full bg-[#16a34a] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">3. Bàn phím, chuột quang, tai nghe và hệ thống âm thanh</span>
                          <span className="font-label-sm text-label-sm text-[#166534] font-semibold">ĐẠT (100% LINH KIỆN)</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Đã gõ test toàn bộ phím cơ bản, chuột nhạy trên bàn gỗ, âm thanh tai nghe rõ tiếng phục vụ môn Tiếng Anh.</p>
                      </div>
                    </div>
                    {/* Item 4 */}
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                      <span className="w-6 h-6 rounded-full bg-[#16a34a] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">4. Hệ thống nguồn điện ổn định, UPS lưu điện khi mất điện lưới</span>
                          <span className="font-label-sm text-label-sm text-[#166534] font-semibold">ĐẠT (LƯU ĐIỆN 25 PHÚT)</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Thử nghiệm ngắt aptomat phòng máy giả định mất điện đột ngột: 10 cụm UPS kích hoạt tức thì, không gây khởi động lại PC.</p>
                      </div>
                    </div>
                    {/* Item 5 */}
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                      <span className="w-6 h-6 rounded-full bg-[#16a34a] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">5. Phụ kiện đi kèm, dây cáp nguồn và phiếu bảo hành chính hãng</span>
                          <span className="font-label-sm text-label-sm text-[#166534] font-semibold">ĐÃ BÀN GIAO ĐỦ</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Kèm theo 25 phiếu bảo hành linh kiện 36 tháng, 2 kìm bấm mạng chuyên dụng và 50 đầu hạt mạng dự phòng.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SUB-BLOCK C: PROOF OF DELIVERY (PoD) PHOTO WITH GPS WATERMARK */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                  <div className="p-space-md pb-space-sm flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[20px] text-primary">photo_camera</span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">Ảnh Chụp Minh Chứng Nghiệm Thu Thực Địa (Proof of Delivery)</h3>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-semibold">
                      Ảnh gốc lưu trữ IPFS
                    </span>
                  </div>
                  <div className="p-space-md pt-0">
                    <div className="relative rounded-lg overflow-hidden group">
                      <img alt="Minh chứng" className="w-full h-80 sm:h-96 object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_oSOuhqgGh7Kg1FAwjPYXuFut7C_BwwU2QVYRgN0bUt8QD4oiwi4w6jaaV3sXz6R-DXIFqW8rheYfMEjj6rGvRbalmwYDCp1FN7DGotwCWWvWmjzPVsePKXXsfvPvqj2SETL9gpUI90gV8r1daN23bxa_lBxyFH7xulU4L-yDHHrcq0hE7J1CP-Bq1gMQoglMNGmlisfiyXkTjgTV3b5cmyoI7HPpGwTCcc6Mn8pRGF34w6teu8pXhg" />
                      {/* Watermark Overlay (Anti-fraud verification) */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0b1c30]/95 via-[#0b1c30]/70 to-transparent p-space-md text-white">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="px-2 py-0.5 rounded bg-tertiary text-on-tertiary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                                Đã Đóng Dấu Định Vị Vệ Tinh (GPS Watermarked)
                              </span>
                              <span className="font-label-sm text-label-sm text-white/80">Ảnh ID: #IMG-POD-2024-8892</span>
                            </div>
                            <div className="font-code-num text-code-num text-white font-semibold">
                              📍 Tọa độ: 20.50521° N, 104.62215° E • Bản Lát, Tam Chung, Mường Lát
                            </div>
                            <div className="font-label-sm text-label-sm text-white/70">
                              Thời gian đóng dấu: 24/10/2024 16:32:04 (GMT+7) • Thiết bị ghi: Cat S62 Rugged GPS Terminal
                            </div>
                          </div>
                          <div className="shrink-0 text-left sm:text-right">
                            <div className="font-label-sm text-label-sm text-white/70">SHA-256 Checksum:</div>
                            <div className="font-code-num text-code-num text-tertiary-fixed font-mono">0x4c88...e92f</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-sm flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                      <span>Bàn giao trực tiếp tại Phòng Tin học Điểm trường chính Bản Lát, Trường PTDTBT THCS Mường Lát.</span>
                      <button className="text-primary hover:underline font-label-sm text-label-sm font-semibold flex items-center gap-1 shrink-0" type="button">
                        <span className="material-symbols-outlined text-[16px]">zoom_in</span>
                        Xem ảnh độ phân giải gốc
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* RIGHT COLUMN (5 COLS): 3-PARTY DIGITAL SIGNATURE, LOGISTICS REPORT, LEDGER QR */}
              <div className="lg:col-span-5 space-y-space-lg">
                
                {/* SUB-BLOCK D: 3-PARTY DIGITAL SIGNATURES */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md">
                  <div className="pb-space-sm mb-space-md">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[20px] text-primary">draw</span>
                      Khối Ký Số 3 Bên Đại Diện (Hợp Chuẩn Pháp Lý)
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Biên bản điện tử được xác thực qua chứng thư số quốc gia VNPT-CA &amp; chữ ký số OTP xác thực</p>
                  </div>
                  <div className="space-y-space-md">
                    {/* Bên 1: Trường học (Bên Nhận) */}
                    <div className="p-space-md rounded-lg bg-surface-container-low relative overflow-hidden">
                      <div className="flex items-center justify-between mb-space-xs">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">1. ĐẠI DIỆN BÊN NHẬN (TRƯỜNG HỌC)</span>
                        <span className="px-2 py-0.5 rounded text-label-sm font-label-sm bg-[#f0fdf4] text-[#166534] font-semibold">Đã ký số</span>
                      </div>
                      <div className="font-headline-sm text-headline-sm text-on-surface">Thầy Hà Văn Tiêu</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Hiệu trưởng - Trường PTDTBT THCS Mường Lát</div>
                      {/* Hand-drawn vector signature & Digital Stamp overlay */}
                      <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between relative h-24 overflow-hidden">
                        {/* Digital Red Seal Stamp Graphic */}
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-dashed border-error/50 flex flex-col items-center justify-center text-center p-1 rotate-[-8deg] pointer-events-none opacity-85">
                          <div className="font-label-sm text-[8px] text-error font-bold leading-tight uppercase">UBND HUYỆN MƯỜNG LÁT</div>
                          <div className="w-3 h-3 text-error flex items-center justify-center my-0.5">
                            <span className="material-symbols-outlined text-[12px]">star</span>
                          </div>
                          <div className="font-label-sm text-[8px] text-error font-bold leading-tight uppercase">TRƯỜNG PTDTBT THCS MƯỜNG LÁT</div>
                          <div className="font-label-sm text-[7px] text-error">CHỨNG THỰC SỐ</div>
                        </div>
                        {/* Vector signature */}
                        <svg className="w-48 h-16 text-primary" fill="none" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 38C25 35 40 20 48 24C55 28 35 48 30 46C26 44 42 22 55 18C70 14 78 35 90 32C98 30 115 22 130 25C140 27 155 20 170 30" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"></path>
                          <path d="M45 42C65 42 110 38 145 36" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6"></path>
                        </svg>
                        <div className="text-right z-10">
                          <div className="font-code-num text-[11px] text-on-surface-variant font-mono">VNPT-CA: #VN-8849-HA-TIEU</div>
                          <div className="font-label-sm text-[10px] text-on-surface-variant">Ký lúc: 16:35 24/10/2024</div>
                        </div>
                      </div>
                    </div>
                    {/* Bên 2: Đội Vận Chuyển TNV (Bên Giao) */}
                    <div className="p-space-md rounded-lg bg-surface-container-low">
                      <div className="flex items-center justify-between mb-space-xs">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">2. ĐẠI DIỆN BÊN GIAO (ĐỘI TNV VẬN CHUYỂN)</span>
                        <span className="px-2 py-0.5 rounded text-label-sm font-label-sm bg-[#f0fdf4] text-[#166534] font-semibold">Đã ký số</span>
                      </div>
                      <div className="font-headline-sm text-headline-sm text-on-surface">Lê Hoàng Long</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Trưởng đoàn vận chuyển • Đội TNV Vượt Đèo Tây Bắc</div>
                      <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between h-20">
                        {/* Vector signature 2 */}
                        <svg className="w-40 h-14 text-secondary" fill="none" viewBox="0 0 180 50" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 28C22 16 35 12 42 22C48 32 30 38 45 40C60 42 80 18 95 24C105 28 115 32 140 26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                        <div className="text-right">
                          <div className="font-code-num text-[11px] text-on-surface-variant font-mono">OTP Identity: #VOL-LONG-LH</div>
                          <div className="font-label-sm text-[10px] text-on-surface-variant">Ký lúc: 16:31 24/10/2024</div>
                        </div>
                      </div>
                    </div>
                    {/* Bên 3: Giám Sát Địa Phương (UBND Xã) */}
                    <div className="p-space-md rounded-lg bg-surface-container-low">
                      <div className="flex items-center justify-between mb-space-xs">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-bold">3. ĐƠN VỊ THẨM ĐỊNH &amp; GIÁM SÁT (UBND XÃ)</span>
                        <span className="px-2 py-0.5 rounded text-label-sm font-label-sm bg-[#f0fdf4] text-[#166534] font-semibold">Đã xác nhận</span>
                      </div>
                      <div className="font-headline-sm text-headline-sm text-on-surface">Ông Thào A Páo</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Phó Chủ tịch Hội đồng Nhân dân • Hội Khuyến học Xã Tam Chung</div>
                      <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between h-20">
                        {/* Vector signature 3 */}
                        <svg className="w-36 h-14 text-tertiary" fill="none" viewBox="0 0 160 50" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 32C25 15 45 28 55 22C65 18 75 36 90 28C105 20 120 22 135 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                          <path d="M50 42C75 40 100 38 125 36" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
                        </svg>
                        <div className="text-right">
                          <div className="font-code-num text-[11px] text-on-surface-variant font-mono">DVC-XATAMCHUNG: #TAP-884</div>
                          <div className="font-label-sm text-[10px] text-on-surface-variant">Xác thực lúc: 16:38 24/10/2024</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SUB-BLOCK E: LOGISTICS / VOLUNTEER TRIP REPORT */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs mb-space-sm">
                    <span className="material-symbols-outlined text-[20px] text-secondary">local_shipping</span>
                    Báo Cáo Nghiệm Thu Của Đội Vận Chuyển
                  </h3>
                  <div className="space-y-space-sm text-body-sm font-body-sm text-on-surface">
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Lộ trình vận chuyển đèo dốc</span>
                      <p>Khởi hành từ Kho Trung Chuyển Hà Nội (05:00 23/10) ➔ TP. Thanh Hóa ➔ Vượt dốc Sài Khao ➔ Đến điểm trường THCS Mường Lát (14:30 24/10). Thời tiết khô ráo, thùng máy không bị ẩm ướt.</p>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Hỗ trợ lắp đặt phòng máy</span>
                      <p>Đội TNV gồm 02 kỹ sư IT phối hợp cùng thầy hiệu phó và 4 thầy cô trong trường hoàn tất nối dây mạng LAN, chạy điện âm gen tường, kiểm thử 25 máy tính hoạt động ổn định trong 3 giờ làm việc.</p>
                    </div>
                  </div>
                </div>

                {/* SUB-BLOCK F: BLOCKCHAIN / PUBLIC LEDGER TRANSPARENCY QR */}
                <div className="bg-surface-container-low rounded-xl shadow-sm p-space-md">
                  <div className="flex items-center gap-space-sm mb-space-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px]">lock</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Sổ Cái Minh Bạch Công Khai</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Bản ghi bất biến trên EduShare Ledger</p>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-space-md rounded-lg flex items-center gap-space-md shadow-sm">
                    {/* QR Code SVG Representation */}
                    <div className="w-24 h-24 bg-surface p-1 rounded-lg shrink-0 flex items-center justify-center">
                      <svg className="w-full h-full text-on-surface" fill="currentColor" viewBox="0 0 100 100">
                        {/* QR Patterns simulated */}
                        <rect height="28" rx="2" width="28" x="5" y="5"></rect>
                        <rect fill="white" height="20" width="20" x="9" y="9"></rect>
                        <rect height="12" width="12" x="13" y="13"></rect>
                        <rect height="28" rx="2" width="28" x="67" y="5"></rect>
                        <rect fill="white" height="20" width="20" x="71" y="9"></rect>
                        <rect height="12" width="12" x="75" y="13"></rect>
                        <rect height="28" rx="2" width="28" x="5" y="67"></rect>
                        <rect fill="white" height="20" width="20" x="9" y="71"></rect>
                        <rect height="12" width="12" x="13" y="75"></rect>
                        {/* Data dots */}
                        <circle cx="45" cy="15" r="4"></circle><circle cx="55" cy="22" r="3"></circle><circle cx="45" cy="30" r="3"></circle>
                        <circle cx="20" cy="48" r="4"></circle><circle cx="35" cy="50" r="3"></circle><circle cx="50" cy="50" r="4"></circle>
                        <circle cx="65" cy="45" r="3"></circle><circle cx="80" cy="48" r="4"></circle><circle cx="90" cy="55" r="3"></circle>
                        <circle cx="48" cy="65" r="4"></circle><circle cx="62" cy="72" r="3"></circle><circle cx="78" cy="75" r="4"></circle>
                        <circle cx="48" cy="85" r="3"></circle><circle cx="65" cy="88" r="4"></circle><circle cx="85" cy="90" r="3"></circle>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Tra cứu hồ sơ công khai:</div>
                      <Link className="font-code-num text-code-num text-primary font-bold hover:underline block truncate mb-1" to="#">
                        edushare.vn/verify/POD-2024-ML08
                      </Link>
                      <div className="font-label-sm text-label-sm text-on-surface-variant truncate">
                        Mã băm SHA-256: <span className="font-code-num text-code-num text-on-surface">0x8f2a...9cbd</span>
                      </div>
                      <div className="mt-2 flex items-center gap-1 text-[11px] text-tertiary font-semibold">
                        <span className="material-symbols-outlined text-[14px]">format_image_left</span>
                        Đã ghi nhận trên hệ thống Dữ liệu Giáo dục Quốc gia
                      </div>
                    </div>
                  </div>
                  {/* Quick actions for School Admin */}
                  <div className="mt-space-md pt-space-sm flex flex-col gap-2">
                    <button className="w-full py-2.5 px-3 bg-surface-container-lowest hover:bg-surface-container text-on-surface rounded-lg font-label-md text-label-md shadow-sm transition-colors flex items-center justify-center gap-2" type="button">
                      <span className="material-symbols-outlined text-[18px] text-primary">download</span>
                      <span>Tải bộ hồ sơ &amp; Biên bản đầy đủ chữ ký (.PDF)</span>
                    </button>
                    <button className="w-full py-2 px-3 hover:bg-error-container/30 text-error rounded-lg font-label-md text-label-md transition-colors flex items-center justify-center gap-2" type="button">
                      <span className="material-symbols-outlined text-[18px]">report_problem</span>
                      <span>Báo cáo sự cố thiết bị sau bàn giao (Bảo hành 24/7)</span>
                    </button>
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
