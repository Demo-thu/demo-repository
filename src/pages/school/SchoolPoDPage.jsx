import { Link } from "react-router-dom";

export default function SchoolPoDPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface flex antialiased">
      {/* Sidebar */}
      <aside className="bg-surface-container-low fixed top-0 left-0 z-50 flex h-full w-72 flex-col shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="p-space-md pb-space-sm">
          <div className="gap-space-sm flex items-center">
            <div className="bg-primary text-on-primary flex h-9 w-9 items-center justify-center rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-[22px]">local_library</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary leading-tight tracking-tight">
                EduShare VN
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                Cổng Trường Học
              </span>
            </div>
          </div>
          <div className="mt-space-sm bg-surface-container text-on-secondary-container inline-flex items-center gap-1.5 rounded-full px-2.5 py-1">
            <span className="bg-tertiary h-2 w-2 animate-pulse rounded-full"></span>
            <span className="font-label-sm text-label-sm">Trực tuyến • 63 Tỉnh Thành</span>
          </div>
        </div>

        <nav className="px-space-md py-space-sm space-y-space-md flex-1 overflow-y-auto">
          <div className="space-y-1">
            <p className="px-space-sm font-label-sm text-label-sm text-on-surface-variant py-1 font-semibold tracking-wider uppercase">
              Cổng trường học
            </p>
            <Link
              className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center rounded-lg py-2 transition-colors"
              to="/school/request"
            >
              <span className="material-symbols-outlined text-[20px]">assignment</span>
              <span className="font-label-md text-label-md">Yêu cầu tài trợ</span>
            </Link>
            <Link
              className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center rounded-lg py-2 transition-colors"
              to="/school/student-details"
            >
              <span className="material-symbols-outlined text-[20px]">groups</span>
              <span className="font-label-md text-label-md">Học sinh tiếp nhận</span>
            </Link>
            <Link
              className="gap-space-sm px-space-sm bg-primary-container text-on-primary flex items-center rounded-lg py-2 font-medium shadow-sm transition-colors"
              to="/school/pod"
            >
              <span className="material-symbols-outlined text-[20px]">description</span>
              <span className="font-label-md text-label-md">Biên bản bàn giao (PoD)</span>
            </Link>
          </div>
          <div className="space-y-1">
            <p className="px-space-sm font-label-sm text-label-sm text-on-surface-variant py-1 font-semibold tracking-wider uppercase">
              Kho &amp; Tiếp nhận
            </p>
            <Link
              className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center rounded-lg py-2 transition-colors"
              to="#"
            >
              <span className="material-symbols-outlined text-[20px]">inventory_2</span>
              <span className="font-label-md text-label-md">Danh mục thiết bị phân bổ</span>
            </Link>
            <Link
              className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center rounded-lg py-2 transition-colors"
              to="#"
            >
              <span className="material-symbols-outlined text-[20px]">history</span>
              <span className="font-label-md text-label-md">Lịch sử đợt giao</span>
            </Link>
          </div>
        </nav>

        <div className="p-space-md bg-surface-container/60 space-y-space-xs rounded-t-xl">
          <div className="gap-space-xs text-on-surface flex items-center">
            <span className="material-symbols-outlined text-primary text-[18px]">support_agent</span>
            <span className="font-label-md text-label-md font-semibold">Hỗ trợ kỹ thuật 24/7</span>
          </div>
          <div className="font-code-num text-code-num text-primary font-bold tracking-wide">
            1800 6868 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">(Miễn phí)</span>
          </div>
          <div className="font-label-sm text-label-sm text-on-surface-variant pt-1">Phiên bản Quốc gia v2.8.4</div>
        </div>
      </aside>

      {/* Header */}
      <div className="flex min-h-screen flex-1 flex-col pl-72">
        <header className="bg-surface/90 px-space-xl gap-space-md fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="max-w-lg flex-1">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined text-outline absolute left-3 text-[20px]">search</span>
              <input
                className="bg-surface-container-lowest font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:ring-primary w-full rounded-lg py-2 pr-4 pl-10 shadow-sm focus:ring-2 focus:outline-none"
                placeholder="Tìm kiếm biên bản, thiết bị, học sinh..."
                type="text"
              />
            </div>
          </div>
          <div className="gap-space-md flex shrink-0 items-center">
            <div className="hidden flex-col text-right xl:flex">
              <span className="font-label-sm text-label-sm text-primary font-semibold">
                Vai trò: Đại diện Trường học (BGH)
              </span>
              <span className="font-body-sm text-body-sm text-on-surface max-w-xs truncate font-medium">
                Thầy Hà Văn Tiêu - Trường PTDTBT THCS Mường Lát
              </span>
            </div>
            <button
              className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container relative rounded-lg p-2 transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="bg-error absolute top-1.5 right-1.5 h-2 w-2 rounded-full"></span>
            </button>
            <div className="bg-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </header>

        <main className="bg-surface px-gutter-desktop relative min-h-screen w-full pt-16">
          <div className="flex w-full flex-col pb-16">
            {/* Breadcrumb & Context Banner */}
            <nav
              aria-label="Breadcrumb"
              className="gap-space-xs text-on-surface-variant font-label-md text-label-md mb-space-sm mt-space-md flex items-center"
            >
              <Link className="hover:text-primary flex items-center gap-1 transition-colors" to="#">
                <span className="material-symbols-outlined text-[16px]">account_balance</span>
                Cổng Trường Học
              </Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <Link className="hover:text-primary transition-colors" to="#">
                Biên bản bàn giao (PoD)
              </Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-on-surface font-semibold">Biên bản #POD-2024-ML08</span>
            </nav>

            {/* ACTION HEADER / STATUS STRIP */}
            <div className="gap-space-md mb-space-lg flex flex-col justify-between lg:flex-row lg:items-center">
              <div className="gap-space-md flex items-start sm:items-center">
                <Link
                  className="bg-surface-container-lowest text-on-surface hover:text-primary hover:bg-surface-container flex h-10 w-10 shrink-0 items-center justify-center rounded-lg shadow-sm transition-colors"
                  to="#"
                >
                  <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                </Link>
                <div>
                  <div className="gap-space-sm mb-1 flex flex-wrap items-center">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      Biên Bản Bàn Giao &amp; Nghiệm Thu #POD-2024-ML08
                    </h1>
                    <span className="text-label-sm font-label-sm inline-flex items-center gap-1.5 rounded-full bg-[#f0fdf4] px-3 py-1 text-[#166534]">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#16a34a]"></span>
                      ĐÃ HOÀN TẤT KÝ SỐ &amp; NGHIỆM THU
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant gap-space-xs flex flex-wrap items-center">
                    <span>
                      Chiến dịch: <strong>Chắp Cánh Ước Mơ Tin Học Mường Lát 2024</strong> (#CD-2024-ML08)
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span>
                      Vận đơn: <strong className="font-code-num text-code-num">#WB-2024-NW08</strong> (Xe 29C-882.10)
                    </span>
                  </p>
                </div>
              </div>

              {/* Toolbar buttons */}
              <div className="gap-space-sm flex shrink-0 flex-wrap items-center">
                <button
                  className="bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-1.5 rounded-lg px-4 py-2 shadow-sm transition-colors"
                  type="button"
                >
                  <span className="material-symbols-outlined text-primary text-[18px]">share</span>
                  <span>Chia sẻ minh chứng</span>
                </button>
                <button
                  className="bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-1.5 rounded-lg px-4 py-2 shadow-sm transition-colors"
                  type="button"
                >
                  <span className="material-symbols-outlined text-tertiary text-[18px]">receipt_long</span>
                  <span>Xuất hóa đơn</span>
                </button>
                <button
                  className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md flex items-center gap-1.5 rounded-lg px-4 py-2 shadow-sm transition-colors"
                  type="button"
                  onClick={() => window.print()}
                >
                  <span className="material-symbols-outlined text-[18px]">print</span>
                  <span>In biên bản nghiệm thu (PDF)</span>
                </button>
              </div>
            </div>

            {/* SECTION 1: OVERVIEW HERO METRICS CARD */}
            <div className="bg-surface-container-lowest p-space-lg mb-space-lg rounded-xl shadow-sm">
              <div className="gap-space-lg pb-space-md mb-space-md bg-surface-container-low/50 p-space-md flex flex-col justify-between rounded-lg xl:flex-row">
                <div className="space-y-1">
                  <span className="font-label-sm text-label-sm text-primary font-bold tracking-wider uppercase">
                    Đơn Vị Thụ Hưởng Cấp Cơ Sở
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">Trường PTDTBT THCS Mường Lát</h2>
                  <div className="font-body-sm text-body-sm text-on-surface-variant gap-space-xs flex flex-wrap items-center">
                    <span className="material-symbols-outlined text-outline text-[16px]">location_on</span>
                    <span>Bản Lát, Xã Tam Chung, Huyện Mường Lát, Tỉnh Thanh Hóa</span>
                    <span className="text-outline-variant">•</span>
                    <span>Phòng Tin học Điểm trường chính</span>
                  </div>
                </div>
                <div className="gap-space-md flex flex-wrap items-center">
                  {/* Geotag verification tag */}
                  <div className="gap-space-sm bg-surface-container-lowest flex items-center rounded-lg px-3 py-2 shadow-sm">
                    <div className="bg-tertiary-container/20 text-tertiary flex h-8 w-8 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </div>
                    <div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">
                        Xác Thực Định Vị Vệ Tinh (GPS)
                      </div>
                      <div className="font-code-num text-code-num text-tertiary font-bold">
                        20.505°N, 104.622°E{" "}
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">
                          (Sai số &lt; 3m)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="gap-space-sm bg-surface-container-lowest flex items-center rounded-lg px-3 py-2 shadow-sm">
                    <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                    </div>
                    <div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">
                        Thời Điểm Bàn Giao Kỹ Thuật
                      </div>
                      <div className="font-code-num text-code-num text-on-surface font-semibold">
                        16:30 • 24/10/2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Bento Metric Cards */}
              <div className="gap-space-md grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                {/* Card 1 */}
                <div className="p-space-md bg-surface-container-low flex flex-col justify-between rounded-lg">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                      Tổng Thiết Bị Bàn Giao
                    </span>
                    <span className="bg-primary-container text-on-primary-container flex h-8 w-8 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[18px]">devices</span>
                    </span>
                  </div>
                  <div className="mb-1 flex items-baseline gap-2">
                    <span className="font-headline-lg text-headline-lg text-on-surface font-bold">37</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">thiết bị chính</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    25 PC HP • 10 Santak UPS • 2 Switch Cisco
                  </p>
                </div>
                {/* Card 2 */}
                <div className="p-space-md bg-surface-container-low flex flex-col justify-between rounded-lg">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                      Tình Trạng Kỹ Thuật
                    </span>
                    <span className="bg-tertiary text-on-tertiary flex h-8 w-8 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    </span>
                  </div>
                  <div className="mb-1 flex items-baseline gap-2">
                    <span className="font-headline-lg text-headline-lg text-tertiary font-bold">100%</span>
                    <span className="font-label-md text-label-md text-tertiary font-semibold">Grade A</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Đã test nghiệm thu chạy liên tục 4h ổn định
                  </p>
                </div>
                {/* Card 3 */}
                <div className="p-space-md bg-surface-container-low flex flex-col justify-between rounded-lg">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                      Học Sinh Hưởng Lợi
                    </span>
                    <span className="bg-secondary-container text-on-secondary-container flex h-8 w-8 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[18px]">school</span>
                    </span>
                  </div>
                  <div className="mb-1 flex items-baseline gap-2">
                    <span className="font-headline-lg text-headline-lg text-on-surface font-bold">412</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">học sinh dân tộc</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    142 em bán trú diện đặc biệt khó khăn
                  </p>
                </div>
                {/* Card 4 */}
                <div className="p-space-md bg-surface-container-low flex flex-col justify-between rounded-lg">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                      Giá Trị Tài Trợ Quy Đổi
                    </span>
                    <span className="bg-primary text-on-primary flex h-8 w-8 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[18px]">volunteer_activism</span>
                    </span>
                  </div>
                  <div className="mb-1 flex items-baseline gap-1">
                    <span className="font-headline-lg text-headline-lg text-primary font-bold">345.000.000</span>
                    <span className="font-label-sm text-label-sm text-primary font-semibold">₫</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Tài trợ bởi Tập đoàn FPT &amp; Quỹ Hy Vọng
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 2: TWO-COLUMN WORKSPACE (7 : 5) */}
            <div className="gap-space-lg grid grid-cols-1 items-start lg:grid-cols-12">
              {/* LEFT COLUMN (7 COLS): SPECIFICATION, CHECKLIST, EVIDENCE PHOTO */}
              <div className="space-y-space-lg lg:col-span-7">
                {/* SUB-BLOCK A: DETAILED ASSET TABLE & QR CODING */}
                <div className="bg-surface-container-lowest overflow-hidden rounded-xl shadow-sm">
                  <div className="p-space-md pb-space-sm gap-space-sm bg-surface-container-low/40 flex flex-col justify-between sm:flex-row sm:items-center">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface gap-space-xs flex items-center">
                        <span className="material-symbols-outlined text-primary text-[20px]">inventory_2</span>
                        Danh Mục Thiết Bị Bàn Giao &amp; Mã QR Từng Máy
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Đã được dán tem định danh số hoá và tích hợp vào CSDL cơ sở vật chất của trường
                      </p>
                    </div>
                    <span className="bg-surface-container text-on-secondary-container font-label-sm text-label-sm self-start rounded px-2.5 py-1 font-semibold sm:self-auto">
                      3 Nhóm phân loại
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
                          <th className="px-space-md py-3 font-semibold">Hạng mục &amp; Cấu hình kỹ thuật</th>
                          <th className="px-3 py-3 text-center font-semibold">Số lượng</th>
                          <th className="px-3 py-3 font-semibold">Tình trạng</th>
                          <th className="px-space-md py-3 font-semibold">Dải QR / Seri</th>
                        </tr>
                      </thead>
                      <tbody className="font-body-sm text-body-sm text-on-surface">
                        {/* Item 1: PC */}
                        <tr className="hover:bg-surface-container-low/60 transition-colors">
                          <td className="py-space-sm px-space-md">
                            <div className="gap-space-sm flex items-start">
                              <div className="bg-primary/10 text-primary mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded">
                                <span className="material-symbols-outlined text-[18px]">desktop_windows</span>
                              </div>
                              <div>
                                <div className="font-label-md text-label-md text-on-surface font-semibold">
                                  PC HP ProDesk 400 G6 Microtower
                                </div>
                                <div className="text-on-surface-variant font-body-sm text-body-sm">
                                  Core i3-10100 • 8GB DDR4 • 256GB NVMe SSD
                                </div>
                                <div className="text-on-surface-variant text-label-sm font-label-sm">
                                  Kèm màn hình HP P22v G4 21.5" FHD + Phím chuột HP
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-space-sm px-3 text-center">
                            <span className="font-headline-sm text-headline-sm text-primary font-bold">25</span>
                            <div className="text-label-sm font-label-sm text-on-surface-variant">Bộ</div>
                          </td>
                          <td className="py-space-sm px-3">
                            <span className="text-label-sm font-label-sm inline-flex items-center gap-1 rounded bg-[#f0fdf4] px-2 py-0.5 text-[#166534]">
                              <span className="material-symbols-outlined text-[14px]">check</span> Refurbished Grade A
                            </span>
                            <div className="text-label-sm font-label-sm text-on-surface-variant mt-0.5">
                              Tem niêm phong EduShare
                            </div>
                          </td>
                          <td className="py-space-sm px-space-md">
                            <div className="font-code-num text-code-num text-primary font-semibold">
                              #QR-PC-ML01 ➔ ML25
                            </div>
                            <button
                              className="text-label-sm font-label-sm text-primary mt-0.5 flex items-center gap-0.5 hover:underline"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[13px]">qr_code_scanner</span>
                              Xem 25 mã QR
                            </button>
                          </td>
                        </tr>
                        {/* Item 2: UPS */}
                        <tr className="hover:bg-surface-container-low/60 transition-colors">
                          <td className="py-space-sm px-space-md">
                            <div className="gap-space-sm flex items-start">
                              <div className="bg-tertiary/10 text-tertiary mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded">
                                <span className="material-symbols-outlined text-[18px]">battery_charging_full</span>
                              </div>
                              <div>
                                <div className="font-label-md text-label-md text-on-surface font-semibold">
                                  Bộ lưu điện Santak Blazer 1000E Pro
                                </div>
                                <div className="text-on-surface-variant font-body-sm text-body-sm">
                                  Công suất 1000VA / 600W • Ắc quy khô không cần bảo dưỡng
                                </div>
                                <div className="text-on-surface-variant text-label-sm font-label-sm">
                                  Đảm bảo máy vận hành khi sụt áp lưới điện vùng cao
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-space-sm px-3 text-center">
                            <span className="font-headline-sm text-headline-sm text-on-surface font-bold">10</span>
                            <div className="text-label-sm font-label-sm text-on-surface-variant">Bộ</div>
                          </td>
                          <td className="py-space-sm px-3">
                            <span className="text-label-sm font-label-sm inline-flex items-center gap-1 rounded bg-[#f0fdf4] px-2 py-0.5 text-[#166534]">
                              <span className="material-symbols-outlined text-[14px]">new_releases</span> Mới 100%
                            </span>
                            <div className="text-label-sm font-label-sm text-on-surface-variant mt-0.5">
                              Bảo hành 24 tháng
                            </div>
                          </td>
                          <td className="py-space-sm px-space-md">
                            <div className="font-code-num text-code-num text-on-surface font-semibold">
                              #QR-UPS-ML01 ➔ ML10
                            </div>
                            <button
                              className="text-label-sm font-label-sm text-primary mt-0.5 flex items-center gap-0.5 hover:underline"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[13px]">qr_code_scanner</span>
                              Xem 10 mã QR
                            </button>
                          </td>
                        </tr>
                        {/* Item 3: Switch mạng */}
                        <tr className="hover:bg-surface-container-low/60 transition-colors">
                          <td className="py-space-sm px-space-md">
                            <div className="gap-space-sm flex items-start">
                              <div className="bg-secondary-container text-on-secondary-container mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded">
                                <span className="material-symbols-outlined text-[18px]">hub</span>
                              </div>
                              <div>
                                <div className="font-label-md text-label-md text-on-surface font-semibold">
                                  Switch TP-Link TL-SG1024D 24-Port Gigabit
                                </div>
                                <div className="text-on-surface-variant font-body-sm text-body-sm">
                                  24 cổng 10/100/1000Mbps • Vỏ thép gắn tủ rack
                                </div>
                                <div className="text-on-surface-variant text-label-sm font-label-sm">
                                  Kèm 02 thùng cáp mạng Cat6 UTP 305m &amp; hạt mạng RJ45
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-space-sm px-3 text-center">
                            <span className="font-headline-sm text-headline-sm text-on-surface font-bold">02</span>
                            <div className="text-label-sm font-label-sm text-on-surface-variant">Bộ</div>
                          </td>
                          <td className="py-space-sm px-3">
                            <span className="text-label-sm font-label-sm inline-flex items-center gap-1 rounded bg-[#f0fdf4] px-2 py-0.5 text-[#166534]">
                              <span className="material-symbols-outlined text-[14px]">new_releases</span> Mới 100%
                            </span>
                            <div className="text-label-sm font-label-sm text-on-surface-variant mt-0.5">
                              Nguyên seal nhà máy
                            </div>
                          </td>
                          <td className="py-space-sm px-space-md">
                            <div className="font-code-num text-code-num text-on-surface font-semibold">
                              #QR-NET-ML01, ML02
                            </div>
                            <button
                              className="text-label-sm font-label-sm text-primary mt-0.5 flex items-center gap-0.5 hover:underline"
                              type="button"
                            >
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
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                  <div className="pb-space-sm mb-space-sm flex items-center justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface gap-space-xs flex items-center">
                        <span className="material-symbols-outlined text-tertiary text-[20px]">fact_check</span>
                        Biên Bản Kiểm Tra Kỹ Thuật Nghiệm Thu Tại Chỗ (5 Tiêu Chí)
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Thực hiện kiểm tra thực tế dưới sự giám sát trực tiếp của BGH trường và UBND Xã Tam Chung
                      </p>
                    </div>
                    <span className="font-label-sm text-label-sm inline-flex items-center gap-1 rounded bg-[#f0fdf4] px-3 py-1 font-bold text-[#166534]">
                      5/5 TIÊU CHÍ ĐẠT
                    </span>
                  </div>
                  <div className="space-y-space-xs">
                    {/* Item 1 */}
                    <div className="p-space-sm bg-surface-container-low gap-space-sm flex items-start rounded-lg">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-white">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-md text-label-md text-on-surface font-semibold">
                            1. Khởi động hệ điều hành EduOS Vietnam Core &amp; Phần mềm học tập
                          </span>
                          <span className="font-label-sm text-label-sm font-semibold text-[#166534]">
                            ĐẠT (25/25 MÁY)
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Đã nạp sẵn giáo trình Scratch 3.0, môi trường lập trình Python 3, bộ gõ Tiếng Việt và kho SGK
                          Số Bộ GD&amp;ĐT ngoại tuyến.
                        </p>
                      </div>
                    </div>
                    {/* Item 2 */}
                    <div className="p-space-sm bg-surface-container-low gap-space-sm flex items-start rounded-lg">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-white">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-md text-label-md text-on-surface font-semibold">
                            2. Mạng LAN nội bộ và đường truyền Internet cáp quang Viettel
                          </span>
                          <span className="font-label-sm text-label-sm font-semibold text-[#166534]">
                            ĐẠT (150 Mbps)
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Tất cả 25 máy kết nối thông suốt với máy chủ giáo viên, truy cập ổn định Cổng học liệu trực
                          tuyến Quốc gia.
                        </p>
                      </div>
                    </div>
                    {/* Item 3 */}
                    <div className="p-space-sm bg-surface-container-low gap-space-sm flex items-start rounded-lg">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-white">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-md text-label-md text-on-surface font-semibold">
                            3. Bàn phím, chuột quang, tai nghe và hệ thống âm thanh
                          </span>
                          <span className="font-label-sm text-label-sm font-semibold text-[#166534]">
                            ĐẠT (100% LINH KIỆN)
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Đã gõ test toàn bộ phím cơ bản, chuột nhạy trên bàn gỗ, âm thanh tai nghe rõ tiếng phục vụ môn
                          Tiếng Anh.
                        </p>
                      </div>
                    </div>
                    {/* Item 4 */}
                    <div className="p-space-sm bg-surface-container-low gap-space-sm flex items-start rounded-lg">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-white">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-md text-label-md text-on-surface font-semibold">
                            4. Hệ thống nguồn điện ổn định, UPS lưu điện khi mất điện lưới
                          </span>
                          <span className="font-label-sm text-label-sm font-semibold text-[#166534]">
                            ĐẠT (LƯU ĐIỆN 25 PHÚT)
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Thử nghiệm ngắt aptomat phòng máy giả định mất điện đột ngột: 10 cụm UPS kích hoạt tức thì,
                          không gây khởi động lại PC.
                        </p>
                      </div>
                    </div>
                    {/* Item 5 */}
                    <div className="p-space-sm bg-surface-container-low gap-space-sm flex items-start rounded-lg">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-white">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-md text-label-md text-on-surface font-semibold">
                            5. Phụ kiện đi kèm, dây cáp nguồn và phiếu bảo hành chính hãng
                          </span>
                          <span className="font-label-sm text-label-sm font-semibold text-[#166534]">
                            ĐÃ BÀN GIAO ĐỦ
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Kèm theo 25 phiếu bảo hành linh kiện 36 tháng, 2 kìm bấm mạng chuyên dụng và 50 đầu hạt mạng
                          dự phòng.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SUB-BLOCK C: PROOF OF DELIVERY (PoD) PHOTO WITH GPS WATERMARK */}
                <div className="bg-surface-container-lowest overflow-hidden rounded-xl shadow-sm">
                  <div className="p-space-md pb-space-sm flex items-center justify-between">
                    <div className="gap-space-xs flex items-center">
                      <span className="material-symbols-outlined text-primary text-[20px]">photo_camera</span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Ảnh Chụp Minh Chứng Nghiệm Thu Thực Địa (Proof of Delivery)
                      </h3>
                    </div>
                    <span className="bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm rounded px-2.5 py-1 font-semibold">
                      Ảnh gốc lưu trữ IPFS
                    </span>
                  </div>
                  <div className="p-space-md pt-0">
                    <div className="group relative overflow-hidden rounded-lg">
                      <img
                        alt="Minh chứng"
                        className="h-80 w-full object-cover object-center sm:h-96"
                        src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80"
                      />
                      {/* Watermark Overlay (Anti-fraud verification) */}
                      <div className="p-space-md absolute right-0 bottom-0 left-0 bg-gradient-to-t from-[#0b1c30]/95 via-[#0b1c30]/70 to-transparent text-white">
                        <div className="gap-space-sm flex flex-col justify-between sm:flex-row sm:items-end">
                          <div>
                            <div className="mb-1 flex items-center gap-2">
                              <span className="bg-tertiary text-on-tertiary font-label-sm text-label-sm rounded px-2 py-0.5 font-bold tracking-wider uppercase">
                                Đã Đóng Dấu Định Vị Vệ Tinh (GPS Watermarked)
                              </span>
                              <span className="font-label-sm text-label-sm text-white/80">
                                Ảnh ID: #IMG-POD-2024-8892
                              </span>
                            </div>
                            <div className="font-code-num text-code-num font-semibold text-white">
                              📍 Tọa độ: 20.50521° N, 104.62215° E • Bản Lát, Tam Chung, Mường Lát
                            </div>
                            <div className="font-label-sm text-label-sm text-white/70">
                              Thời gian đóng dấu: 24/10/2024 16:32:04 (GMT+7) • Thiết bị ghi: Cat S62 Rugged GPS
                              Terminal
                            </div>
                          </div>
                          <div className="shrink-0 text-left sm:text-right">
                            <div className="font-label-sm text-label-sm text-white/70">SHA-256 Checksum:</div>
                            <div className="font-code-num text-code-num text-tertiary-fixed font-mono">
                              0x4c88...e92f
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-sm text-on-surface-variant font-body-sm text-body-sm flex items-center justify-between">
                      <span>
                        Bàn giao trực tiếp tại Phòng Tin học Điểm trường chính Bản Lát, Trường PTDTBT THCS Mường Lát.
                      </span>
                      <button
                        className="text-primary font-label-sm text-label-sm flex shrink-0 items-center gap-1 font-semibold hover:underline"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">zoom_in</span>
                        Xem ảnh độ phân giải gốc
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN (5 COLS): 3-PARTY DIGITAL SIGNATURE, LOGISTICS REPORT, LEDGER QR */}
              <div className="space-y-space-lg lg:col-span-5">
                {/* SUB-BLOCK D: 3-PARTY DIGITAL SIGNATURES */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                  <div className="pb-space-sm mb-space-md">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface gap-space-xs flex items-center">
                      <span className="material-symbols-outlined text-primary text-[20px]">draw</span>
                      Khối Ký Số 3 Bên Đại Diện (Hợp Chuẩn Pháp Lý)
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Biên bản điện tử được xác thực qua chứng thư số quốc gia VNPT-CA &amp; chữ ký số OTP xác thực
                    </p>
                  </div>
                  <div className="space-y-space-md">
                    {/* Bên 1: Trường học (Bên Nhận) */}
                    <div className="p-space-md bg-surface-container-low relative overflow-hidden rounded-lg">
                      <div className="mb-space-xs flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-primary font-bold tracking-wider uppercase">
                          1. ĐẠI DIỆN BÊN NHẬN (TRƯỜNG HỌC)
                        </span>
                        <span className="text-label-sm font-label-sm rounded bg-[#f0fdf4] px-2 py-0.5 font-semibold text-[#166534]">
                          Đã ký số
                        </span>
                      </div>
                      <div className="font-headline-sm text-headline-sm text-on-surface">Thầy Hà Văn Tiêu</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                        Hiệu trưởng - Trường PTDTBT THCS Mường Lát
                      </div>
                      {/* Hand-drawn vector signature & Digital Stamp overlay */}
                      <div className="bg-surface-container-lowest p-space-sm relative flex h-24 items-center justify-between overflow-hidden rounded-lg">
                        {/* Digital Red Seal Stamp Graphic */}
                        <div className="border-error/50 pointer-events-none absolute top-1/2 right-3 flex h-20 w-20 -translate-y-1/2 rotate-[-8deg] flex-col items-center justify-center rounded-full border-2 border-dashed p-1 text-center opacity-85">
                          <div className="font-label-sm text-error text-[8px] leading-tight font-bold uppercase">
                            UBND HUYỆN MƯỜNG LÁT
                          </div>
                          <div className="text-error my-0.5 flex h-3 w-3 items-center justify-center">
                            <span className="material-symbols-outlined text-[12px]">star</span>
                          </div>
                          <div className="font-label-sm text-error text-[8px] leading-tight font-bold uppercase">
                            TRƯỜNG PTDTBT THCS MƯỜNG LÁT
                          </div>
                          <div className="font-label-sm text-error text-[7px]">CHỨNG THỰC SỐ</div>
                        </div>
                        {/* Vector signature */}
                        <svg
                          className="text-primary h-16 w-48"
                          fill="none"
                          viewBox="0 0 200 60"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 38C25 35 40 20 48 24C55 28 35 48 30 46C26 44 42 22 55 18C70 14 78 35 90 32C98 30 115 22 130 25C140 27 155 20 170 30"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.2"
                          ></path>
                          <path
                            d="M45 42C65 42 110 38 145 36"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="1.6"
                          ></path>
                        </svg>
                        <div className="z-10 text-right">
                          <div className="font-code-num text-on-surface-variant font-mono text-[11px]">
                            VNPT-CA: #VN-8849-HA-TIEU
                          </div>
                          <div className="font-label-sm text-on-surface-variant text-[10px]">
                            Ký lúc: 16:35 24/10/2024
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Bên 2: Đội Vận Chuyển TNV (Bên Giao) */}
                    <div className="p-space-md bg-surface-container-low rounded-lg">
                      <div className="mb-space-xs flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary font-bold tracking-wider uppercase">
                          2. ĐẠI DIỆN BÊN GIAO (ĐỘI TNV VẬN CHUYỂN)
                        </span>
                        <span className="text-label-sm font-label-sm rounded bg-[#f0fdf4] px-2 py-0.5 font-semibold text-[#166534]">
                          Đã ký số
                        </span>
                      </div>
                      <div className="font-headline-sm text-headline-sm text-on-surface">Lê Hoàng Long</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                        Trưởng đoàn vận chuyển • Đội TNV Vượt Đèo Tây Bắc
                      </div>
                      <div className="bg-surface-container-lowest p-space-sm flex h-20 items-center justify-between rounded-lg">
                        {/* Vector signature 2 */}
                        <svg
                          className="text-secondary h-14 w-40"
                          fill="none"
                          viewBox="0 0 180 50"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 28C22 16 35 12 42 22C48 32 30 38 45 40C60 42 80 18 95 24C105 28 115 32 140 26"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></path>
                        </svg>
                        <div className="text-right">
                          <div className="font-code-num text-on-surface-variant font-mono text-[11px]">
                            OTP Identity: #VOL-LONG-LH
                          </div>
                          <div className="font-label-sm text-on-surface-variant text-[10px]">
                            Ký lúc: 16:31 24/10/2024
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Bên 3: Giám Sát Địa Phương (UBND Xã) */}
                    <div className="p-space-md bg-surface-container-low rounded-lg">
                      <div className="mb-space-xs flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-tertiary font-bold tracking-wider uppercase">
                          3. ĐƠN VỊ THẨM ĐỊNH &amp; GIÁM SÁT (UBND XÃ)
                        </span>
                        <span className="text-label-sm font-label-sm rounded bg-[#f0fdf4] px-2 py-0.5 font-semibold text-[#166534]">
                          Đã xác nhận
                        </span>
                      </div>
                      <div className="font-headline-sm text-headline-sm text-on-surface">Ông Thào A Páo</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                        Phó Chủ tịch Hội đồng Nhân dân • Hội Khuyến học Xã Tam Chung
                      </div>
                      <div className="bg-surface-container-lowest p-space-sm flex h-20 items-center justify-between rounded-lg">
                        {/* Vector signature 3 */}
                        <svg
                          className="text-tertiary h-14 w-36"
                          fill="none"
                          viewBox="0 0 160 50"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 32C25 15 45 28 55 22C65 18 75 36 90 28C105 20 120 22 135 18"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                          ></path>
                          <path
                            d="M50 42C75 40 100 38 125 36"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="1.5"
                          ></path>
                        </svg>
                        <div className="text-right">
                          <div className="font-code-num text-on-surface-variant font-mono text-[11px]">
                            DVC-XATAMCHUNG: #TAP-884
                          </div>
                          <div className="font-label-sm text-on-surface-variant text-[10px]">
                            Xác thực lúc: 16:38 24/10/2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SUB-BLOCK E: LOGISTICS / VOLUNTEER TRIP REPORT */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface gap-space-xs mb-space-sm flex items-center">
                    <span className="material-symbols-outlined text-secondary text-[20px]">local_shipping</span>
                    Báo Cáo Nghiệm Thu Của Đội Vận Chuyển
                  </h3>
                  <div className="space-y-space-sm text-body-sm font-body-sm text-on-surface">
                    <div className="p-space-sm bg-surface-container-low flex flex-col gap-1 rounded-lg">
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">
                        Lộ trình vận chuyển đèo dốc
                      </span>
                      <p>
                        Khởi hành từ Kho Trung Chuyển Hà Nội (05:00 23/10) ➔ TP. Thanh Hóa ➔ Vượt dốc Sài Khao ➔ Đến
                        điểm trường THCS Mường Lát (14:30 24/10). Thời tiết khô ráo, thùng máy không bị ẩm ướt.
                      </p>
                    </div>
                    <div className="p-space-sm bg-surface-container-low flex flex-col gap-1 rounded-lg">
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">
                        Hỗ trợ lắp đặt phòng máy
                      </span>
                      <p>
                        Đội TNV gồm 02 kỹ sư IT phối hợp cùng thầy hiệu phó và 4 thầy cô trong trường hoàn tất nối dây
                        mạng LAN, chạy điện âm gen tường, kiểm thử 25 máy tính hoạt động ổn định trong 3 giờ làm việc.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SUB-BLOCK F: BLOCKCHAIN / PUBLIC LEDGER TRANSPARENCY QR */}
                <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm">
                  <div className="gap-space-sm mb-space-sm flex items-center">
                    <div className="bg-primary text-on-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[18px]">lock</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Sổ Cái Minh Bạch Công Khai</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Bản ghi bất biến trên EduShare Ledger
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-space-md gap-space-md flex items-center rounded-lg shadow-sm">
                    {/* QR Code SVG Representation */}
                    <div className="bg-surface flex h-24 w-24 shrink-0 items-center justify-center rounded-lg p-1">
                      <svg className="text-on-surface h-full w-full" fill="currentColor" viewBox="0 0 100 100">
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
                        <circle cx="45" cy="15" r="4"></circle>
                        <circle cx="55" cy="22" r="3"></circle>
                        <circle cx="45" cy="30" r="3"></circle>
                        <circle cx="20" cy="48" r="4"></circle>
                        <circle cx="35" cy="50" r="3"></circle>
                        <circle cx="50" cy="50" r="4"></circle>
                        <circle cx="65" cy="45" r="3"></circle>
                        <circle cx="80" cy="48" r="4"></circle>
                        <circle cx="90" cy="55" r="3"></circle>
                        <circle cx="48" cy="65" r="4"></circle>
                        <circle cx="62" cy="72" r="3"></circle>
                        <circle cx="78" cy="75" r="4"></circle>
                        <circle cx="48" cy="85" r="3"></circle>
                        <circle cx="65" cy="88" r="4"></circle>
                        <circle cx="85" cy="90" r="3"></circle>
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">
                        Tra cứu hồ sơ công khai:
                      </div>
                      <Link
                        className="font-code-num text-code-num text-primary mb-1 block truncate font-bold hover:underline"
                        to="#"
                      >
                        edushare.vn/verify/POD-2024-ML08
                      </Link>
                      <div className="font-label-sm text-label-sm text-on-surface-variant truncate">
                        Mã băm SHA-256:{" "}
                        <span className="font-code-num text-code-num text-on-surface">0x8f2a...9cbd</span>
                      </div>
                      <div className="text-tertiary mt-2 flex items-center gap-1 text-[11px] font-semibold">
                        <span className="material-symbols-outlined text-[14px]">format_image_left</span>
                        Đã ghi nhận trên hệ thống Dữ liệu Giáo dục Quốc gia
                      </div>
                    </div>
                  </div>
                  {/* Quick actions for School Admin */}
                  <div className="mt-space-md pt-space-sm flex flex-col gap-2">
                    <button
                      className="bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2.5 shadow-sm transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-primary text-[18px]">download</span>
                      <span>Tải bộ hồ sơ &amp; Biên bản đầy đủ chữ ký (.PDF)</span>
                    </button>
                    <button
                      className="hover:bg-error-container/30 text-error font-label-md text-label-md flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 transition-colors"
                      type="button"
                    >
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
