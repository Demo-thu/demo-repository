import { Link } from "react-router-dom";

export default function SchoolDeliveryHistoryPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md selection:bg-primary-fixed selection:text-on-primary-fixed flex antialiased">
      {/* Sidebar */}
      <aside className="bg-surface-container-lowest fixed top-0 left-0 z-50 flex h-screen w-72 flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] select-none">
        <div className="flex flex-col">
          <div className="px-space-md py-space-lg bg-surface-container-lowest">
            <div className="gap-space-sm mb-space-xs flex items-center">
              <div className="bg-primary text-on-primary flex h-9 w-9 items-center justify-center rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-[22px]">local_shipping</span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-primary leading-tight tracking-tight">
                  EduShare VN
                </div>
                <div className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">VIETNAM CORE</div>
              </div>
            </div>
            <div className="mt-space-sm bg-surface-container inline-flex items-center gap-1.5 rounded-full px-2.5 py-1">
              <span className="bg-tertiary h-2 w-2 animate-pulse rounded-full"></span>
              <span className="font-label-sm text-label-sm text-on-surface font-medium">
                Trực tuyến • 63 Tỉnh Thành
              </span>
            </div>
          </div>

          <div className="px-space-md pt-space-md">
            <div className="font-label-sm text-label-sm text-on-surface-variant px-space-xs mb-space-xs tracking-wider uppercase">
              Cổng Trường Học
            </div>
            <nav className="flex flex-col gap-1">
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center rounded-lg py-2 transition-all"
                to="/school/request"
              >
                <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
                <span className="font-label-md text-label-md">Yêu cầu tài trợ</span>
              </Link>
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center rounded-lg py-2 transition-all"
                to="/school/student-details"
              >
                <span className="material-symbols-outlined text-[20px]">school</span>
                <span className="font-label-md text-label-md">Học sinh tiếp nhận</span>
              </Link>
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center rounded-lg py-2 transition-all"
                to="/school/pod"
              >
                <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                <span className="font-label-md text-label-md">Biên bản bàn giao (PoD)</span>
              </Link>
            </nav>
          </div>

          <div className="px-space-md pt-space-lg">
            <div className="font-label-sm text-label-sm text-on-surface-variant px-space-xs mb-space-xs tracking-wider uppercase">
              Kho &amp; Tiếp Nhận
            </div>
            <nav className="flex flex-col gap-1">
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center rounded-lg py-2 transition-all"
                to="#"
              >
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span className="font-label-md text-label-md">Danh mục thiết bị phân bổ</span>
              </Link>
              <Link
                className="gap-space-sm px-space-sm bg-primary text-on-primary flex items-center rounded-lg py-2 font-medium shadow-sm transition-all"
                to="/school/delivery-history"
              >
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span className="font-label-md text-label-md">Lịch sử đợt giao</span>
              </Link>
            </nav>
          </div>
        </div>

        <div className="p-space-md bg-surface-container-low">
          <div className="p-space-sm bg-surface-container-lowest mb-space-xs rounded-lg shadow-sm">
            <div className="gap-space-xs text-tertiary mb-1 flex items-center">
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              <span className="font-label-sm text-label-sm font-semibold uppercase">Hỗ trợ kỹ thuật 24/7</span>
            </div>
            <div className="font-body-md text-body-md text-on-surface font-semibold">1800 6868</div>
            <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Cục Cơ sở vật chất &amp; CNTT
            </div>
          </div>
          <div className="px-space-xs text-on-surface-variant font-label-sm text-label-sm flex items-center justify-between">
            <span>EduShare Platform</span>
            <span>Phiên bản Quốc gia v2.8.4</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex min-h-screen flex-1 flex-col pl-72">
        {/* Header */}
        <header className="bg-surface-container-lowest/90 px-space-lg gap-space-lg fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
          <div className="max-w-xl flex-1">
            <div className="relative flex w-full items-center">
              <span className="material-symbols-outlined text-outline pointer-events-none absolute left-3 text-[20px]">
                search
              </span>
              <input
                className="pr-space-md bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-primary w-full rounded-lg py-2 pl-10 transition-colors focus:ring-2 focus:outline-none"
                placeholder="Tìm kiếm đợt giao, biên bản, vận đơn, thiết bị..."
                type="text"
              />
            </div>
          </div>
          <div className="gap-space-md flex items-center">
            <div className="bg-surface-container-low hover:bg-surface-container flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 transition-colors">
              <span className="material-symbols-outlined text-primary text-[18px]">shield</span>
              <div className="text-left">
                <div className="font-label-sm text-label-sm text-on-surface-variant">Vai trò tài khoản</div>
                <div className="font-label-md text-label-md text-on-surface flex items-center gap-1 font-semibold">
                  Đại diện Trường học (BGH)
                  <span className="material-symbols-outlined text-on-surface-variant text-[16px]">expand_more</span>
                </div>
              </div>
            </div>
            <button
              aria-label="Thông báo"
              className="text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface relative rounded-lg p-2 transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="bg-error ring-surface-container-lowest absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full ring-2"></span>
            </button>
            <div className="bg-outline-variant/40 h-7 w-[1px]"></div>
            <div className="gap-space-sm flex items-center pl-1">
              <div className="bg-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
              <div className="hidden text-left xl:block">
                <div className="font-label-md text-label-md text-on-surface leading-snug font-semibold">
                  Thầy Hà Văn Tiêu
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant max-w-[200px] truncate">
                  Hiệu trưởng PTDTBT THCS Mường Lát
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-surface p-space-lg min-h-[calc(100vh-4rem)] w-full pt-16">
          <div className="flex w-full flex-col">
            {/* Top Navigation & Action Header */}
            <section className="gap-space-md mb-space-lg flex flex-col">
              {/* Breadcrumb & Status Ribbon */}
              <div className="gap-space-sm flex flex-wrap items-center justify-between">
                <nav className="text-on-surface-variant font-label-md text-label-md flex items-center gap-2">
                  <span className="hover:text-primary cursor-pointer transition-colors">Cổng Trường Học</span>
                  <span className="material-symbols-outlined text-outline text-[16px]">chevron_right</span>
                  <span className="hover:text-primary cursor-pointer transition-colors">Kho &amp; Tiếp nhận</span>
                  <span className="material-symbols-outlined text-outline text-[16px]">chevron_right</span>
                  <span className="text-primary font-semibold">Lịch sử các đợt giao hàng</span>
                </nav>
                <div className="bg-surface-container inline-flex items-center gap-2 rounded-full px-3 py-1 shadow-sm">
                  <span className="bg-tertiary h-2 w-2 rounded-full"></span>
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wider uppercase">
                    Cơ sở dữ liệu EduShare Ledger: Khối #9842-ML
                  </span>
                </div>
              </div>

              {/* Title and Action Row */}
              <div className="gap-space-md bg-surface-container-lowest p-space-lg flex flex-col justify-between rounded-xl shadow-sm lg:flex-row lg:items-center">
                <div className="space-y-1">
                  <div className="gap-space-sm flex items-center">
                    <span className="material-symbols-outlined text-primary text-[28px]">local_shipping</span>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface">
                      Lịch Sử Các Đợt Giao &amp; Bàn Giao Thiết Bị
                    </h1>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                    Tổng hợp toàn bộ hành trình các chuyến xe viện trợ, biên bản nghiệm thu (PoD), tình trạng thiết bị
                    và nhật ký bàn giao từ các nhà hảo tâm qua EduShare Ledger cho trường PTDTBT THCS Mường Lát.
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-2">
                  <button
                    className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md inline-flex items-center gap-1.5 rounded-lg px-3 py-2 transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-primary text-[18px]">qr_code_scanner</span>
                    <span>Tra cứu mã PoD/QR</span>
                  </button>
                  <button
                    className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md inline-flex items-center gap-1.5 rounded-lg px-3 py-2 transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-tertiary text-[18px]">fact_check</span>
                    <span>Báo cáo đối soát</span>
                  </button>
                  <button
                    className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md inline-flex items-center gap-1.5 rounded-lg px-4 py-2 shadow-sm transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                    <span>Xuất sổ theo dõi (PDF/Excel)</span>
                  </button>
                </div>
              </div>
            </section>

            {/* 4 Bento KPI Metric Cards */}
            <section className="gap-space-md mb-space-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <div className="p-space-md bg-surface-container-lowest flex flex-col justify-between rounded-xl shadow-sm">
                <div className="mb-space-sm flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                    Tổng Đợt Tiếp Nhận
                  </span>
                  <span className="bg-surface-container text-primary flex h-8 w-8 items-center justify-center rounded-lg">
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
                <div className="bg-surface-container mt-space-md h-1.5 w-full overflow-hidden rounded-full">
                  <div className="bg-tertiary h-1.5 w-full rounded-full"></div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="p-space-md bg-surface-container-lowest flex flex-col justify-between rounded-xl shadow-sm">
                <div className="mb-space-sm flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                    Tổng Thiết Bị Đã Nhận
                  </span>
                  <span className="bg-surface-container text-primary flex h-8 w-8 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[20px]">devices</span>
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-xl text-headline-xl text-on-surface font-bold">68</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">thiết bị số</span>
                  </div>
                  <p
                    className="font-body-sm text-body-sm text-on-surface-variant mt-1 truncate"
                    title="35 PC, 15 Laptop, 10 UPS, 2 Switch, 6 Tablet"
                  >
                    35 PC, 15 Laptop, 10 UPS, 2 Switch, 6 Tab
                  </p>
                </div>
                <div className="bg-surface-container mt-space-md flex h-1.5 w-full overflow-hidden rounded-full">
                  <div className="bg-primary h-1.5" style={{ width: "51%" }}></div>
                  <div className="bg-tertiary h-1.5" style={{ width: "22%" }}></div>
                  <div className="bg-secondary h-1.5" style={{ width: "15%" }}></div>
                  <div className="bg-outline-variant h-1.5" style={{ width: "12%" }}></div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="p-space-md bg-surface-container-lowest flex flex-col justify-between rounded-xl shadow-sm">
                <div className="mb-space-sm flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                    Giá Trị Tài Trợ Quy Đổi
                  </span>
                  <span className="bg-surface-container text-tertiary flex h-8 w-8 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[20px]">payments</span>
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline-xl text-headline-xl text-on-surface font-bold">585</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface-variant font-medium">
                      triệu đ
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 truncate">
                    FPT, Viettel Solutions, MB, Quỹ Hy Vọng
                  </p>
                </div>
                <div className="mt-space-md flex items-center gap-1">
                  <span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm inline-block rounded px-1.5 py-0.5">
                    Được kiểm toán độc lập
                  </span>
                </div>
              </div>
              {/* Card 4 */}
              <div className="p-space-md bg-surface-container-lowest flex flex-col justify-between rounded-xl shadow-sm">
                <div className="mb-space-sm flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                    Tỷ Lệ Nghiệm Thu &amp; Khai Thác
                  </span>
                  <span className="bg-surface-container text-primary flex h-8 w-8 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[20px]">verified</span>
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-xl text-headline-xl text-tertiary font-bold">98.5%</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">Sẵn sàng</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
                    <span className="bg-tertiary h-2 w-2 rounded-full"></span>
                    67 máy tốt • 01 máy bảo dưỡng định kỳ
                  </p>
                </div>
                <div className="bg-surface-container mt-space-md h-1.5 w-full overflow-hidden rounded-full">
                  <div className="bg-tertiary h-1.5 rounded-full" style={{ width: "98.5%" }}></div>
                </div>
              </div>
            </section>

            {/* Filter & View Controls */}
            <section className="bg-surface-container-lowest p-space-md mb-space-lg gap-space-md flex flex-col items-stretch justify-between rounded-xl shadow-sm md:flex-row md:items-center">
              <div className="gap-space-sm flex flex-1 flex-wrap items-center">
                {/* Search Input */}
                <div className="relative min-w-[280px] flex-1">
                  <span className="material-symbols-outlined text-outline absolute top-2.5 left-3 text-[18px]">
                    search
                  </span>
                  <input
                    className="bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-primary w-full rounded-lg py-2 pr-3 pl-9 transition-all focus:ring-2 focus:outline-none"
                    placeholder="Tìm kiếm theo mã đợt #BG, vận đơn #WB, đơn vị tài trợ..."
                    type="text"
                  />
                </div>
                {/* Academic Year Filter */}
                <select className="bg-surface-container-low text-on-surface font-body-md text-body-md focus:ring-primary cursor-pointer rounded-lg px-3 py-2 focus:ring-2 focus:outline-none">
                  <option>Năm học 2024 - 2025 (Học kỳ I)</option>
                  <option>Năm học 2023 - 2024 (Toàn năm)</option>
                  <option>Tất cả niên khóa</option>
                </select>
                {/* Status Filter */}
                <select className="bg-surface-container-low text-on-surface font-body-md text-body-md focus:ring-primary cursor-pointer rounded-lg px-3 py-2 focus:ring-2 focus:outline-none">
                  <option>Tất cả trạng thái bàn giao</option>
                  <option>Đã hoàn tất &amp; Ký số điện tử</option>
                  <option>Đang trong chu kỳ bảo dưỡng</option>
                  <option>Đang vận chuyển liên tỉnh</option>
                </select>
              </div>
              {/* View Mode Switcher */}
              <div className="bg-surface-container-low flex items-center gap-1 self-end rounded-lg p-1 md:self-auto">
                <button
                  className="bg-surface-container-lowest text-primary font-label-md text-label-md inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 shadow-sm transition-all"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">timeline</span>
                  <span>Dòng thời gian</span>
                </button>
                <button
                  className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-all"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">table_rows</span>
                  <span>Bảng chi tiết</span>
                </button>
              </div>
            </section>

            {/* Main Content Layout: Detailed Feed (2/3) + Institutional Compliance Sidebar (1/3) */}
            <div className="gap-space-lg grid grid-cols-1 items-start lg:grid-cols-12">
              {/* LEFT FEED: Timeline Delivery Logs (8 Cols) */}
              <div className="gap-space-lg flex flex-col lg:col-span-8">
                {/* BATCH 01: Expanded Full Detail with Proof of Delivery & Photos */}
                <article className="bg-surface-container-lowest overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-md">
                  {/* Card Top Bar / Badge Bar */}
                  <div className="bg-surface-container-low px-space-lg py-space-md gap-space-sm flex flex-wrap items-center justify-between">
                    <div className="gap-space-sm flex items-center">
                      <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm flex items-center gap-1 rounded px-2.5 py-1 font-semibold tracking-wider uppercase">
                        <span className="material-symbols-outlined text-[14px]">verified</span> Đã Hoàn Tất Bàn Giao
                        &amp; Ký Số
                      </span>
                      <span className="font-code-num text-code-num text-primary font-semibold">#BG-2024-110</span>
                      <span className="text-outline text-body-sm">•</span>
                      <span className="font-code-num text-code-num text-secondary">Vận đơn: #WB-2024-NW08</span>
                    </div>
                    <div className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-tertiary text-[16px]">event_available</span>
                      <span>24/10/2024 lúc 16:30</span>
                    </div>
                  </div>
                  <div className="p-space-lg gap-space-md flex flex-col">
                    {/* Batch Title & Donor Info */}
                    <div>
                      <h2 className="font-headline-md text-headline-md text-on-surface mb-1">
                        Đợt IV/2024: Dự Án Chắp Cánh Ước Mơ Tin Học Mường Lát
                      </h2>
                      <div className="gap-x-space-md text-on-surface-variant font-body-sm text-body-sm flex flex-wrap items-center gap-y-1">
                        <span className="text-on-surface flex items-center gap-1">
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
                    <div className="gap-space-sm grid grid-cols-1 md:grid-cols-3">
                      <div className="group relative overflow-hidden rounded-lg shadow-sm md:col-span-2">
                        <img
                          alt="Bàn giao máy tính"
                          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                        />
                        <div className="from-on-background/90 via-on-background/40 p-space-sm text-on-primary absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent">
                          <span className="font-label-sm text-label-sm text-primary-fixed font-semibold tracking-wide uppercase">
                            Ảnh thực địa #01
                          </span>
                          <p className="font-body-sm text-body-sm text-surface truncate">
                            Bàn giao máy tính tại phòng Tin học Điểm trường chính
                          </p>
                        </div>
                      </div>
                      <div className="gap-space-sm flex flex-col">
                        <div className="group relative flex-1 overflow-hidden rounded-lg shadow-sm">
                          <img
                            alt="Kiểm đếm 25 thùng PC"
                            className="h-[106px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                          />
                          <div className="from-on-background/80 text-on-primary absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-1.5">
                            <span className="font-label-sm text-label-sm">Kiểm đếm 25 thùng PC</span>
                          </div>
                        </div>
                        <div className="group relative flex-1 overflow-hidden rounded-lg shadow-sm">
                          <img
                            alt="Ký số & Đối soát PoD"
                            className="h-[106px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                          />
                          <div className="from-on-background/80 text-on-primary absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-1.5">
                            <span className="font-label-sm text-label-sm">Ký số &amp; Đối soát PoD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Equipment Breakdown Matrix */}
                    <div className="bg-surface-container-low p-space-md rounded-xl">
                      <div className="mb-space-sm flex items-center justify-between">
                        <span className="font-label-md text-label-md text-on-surface flex items-center gap-1.5 font-semibold">
                          <span className="material-symbols-outlined text-primary text-[18px]">devices_other</span>
                          Danh mục thiết bị đã bàn giao vào kho trường (37 hạng mục)
                        </span>
                        <span className="font-label-sm text-label-sm text-tertiary font-semibold">
                          Tất cả đạt chuẩn Grade A
                        </span>
                      </div>
                      <div className="gap-space-sm grid grid-cols-1 md:grid-cols-3">
                        <div className="bg-surface-container-lowest p-space-sm gap-space-sm flex items-center rounded-lg shadow-sm">
                          <span className="material-symbols-outlined text-primary text-[24px]">desktop_windows</span>
                          <div className="min-w-0">
                            <div className="font-label-md text-label-md text-on-surface truncate font-semibold">
                              25 Máy PC HP ProDesk 400 G6
                            </div>
                            <div className="font-body-sm text-body-sm text-on-surface-variant">
                              Core i5-10500 / 16GB / SSD 256GB
                            </div>
                          </div>
                        </div>
                        <div className="bg-surface-container-lowest p-space-sm gap-space-sm flex items-center rounded-lg shadow-sm">
                          <span className="material-symbols-outlined text-tertiary text-[24px]">
                            battery_charging_full
                          </span>
                          <div className="min-w-0">
                            <div className="font-label-md text-label-md text-on-surface truncate font-semibold">
                              10 Bộ Lưu Điện Santak 1000VA
                            </div>
                            <div className="font-body-sm text-body-sm text-on-surface-variant">
                              Bảo vệ nguồn điện lưới miền núi
                            </div>
                          </div>
                        </div>
                        <div className="bg-surface-container-lowest p-space-sm gap-space-sm flex items-center rounded-lg shadow-sm">
                          <span className="material-symbols-outlined text-secondary text-[24px]">hub</span>
                          <div className="min-w-0">
                            <div className="font-label-md text-label-md text-on-surface truncate font-semibold">
                              02 Cisco Gigabit Switch 24-Port
                            </div>
                            <div className="font-body-sm text-body-sm text-on-surface-variant">
                              Kèm hệ thống dây mạng LAN Cat6
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Verification Telemetry & Blockchain Hash Strip */}
                    <div className="bg-surface-container p-space-md gap-space-md flex flex-col justify-between rounded-xl md:flex-row md:items-center">
                      <div className="space-y-1">
                        <div className="gap-space-sm flex items-center">
                          <span className="material-symbols-outlined text-tertiary text-[20px]">pin_drop</span>
                          <span className="font-label-md text-label-md text-on-surface font-semibold">
                            Tọa độ GPS xác thực: 20.5052° N, 104.6221° E (Xã Mường Lát)
                          </span>
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
                          <span>
                            Người tiếp nhận: <strong>Thầy Hà Văn Tiêu (Hiệu trưởng)</strong>
                          </span>
                          <span>•</span>
                          <span>
                            TNV phụ trách: <strong>Lê Hoàng Long (Đội TNV Vượt Đèo)</strong>
                          </span>
                        </div>
                        <div className="font-code-num text-code-num text-outline break-all">
                          Mã SHA-256: e8b7a4f91040854d9c72ecadff67f40112aa84339e1bfda26359f2c8d62bb4
                        </div>
                      </div>
                      <div className="flex shrink-0 flex-wrap items-end gap-2 md:flex-col">
                        <span className="bg-surface-container-lowest text-tertiary font-label-sm text-label-sm inline-flex items-center gap-1 rounded-md px-2.5 py-1 font-semibold">
                          <span className="material-symbols-outlined text-[16px]">enhanced_encryption</span> VNPT-CA Hợp
                          Lệ
                        </span>
                        <span className="text-on-surface-variant font-label-sm text-label-sm">
                          Đã đồng bộ lên CSDL Bộ GD&amp;ĐT
                        </span>
                      </div>
                    </div>
                    {/* Bottom Action Buttons for Batch 01 */}
                    <div className="gap-space-sm flex flex-wrap items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <button
                          className="bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 shadow-sm transition-all"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">description</span>
                          <span>Xem Biên bản PoD chi tiết</span>
                        </button>
                        <button
                          className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-all"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-primary text-[18px]">qr_code</span>
                          <span>Xem 37 Mã QR tài sản</span>
                        </button>
                      </div>
                      <button
                        className="text-primary hover:text-primary-container font-label-md text-label-md inline-flex items-center gap-1"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        <span>Tải file ký số (.pdf - 4.2 MB)</span>
                      </button>
                    </div>
                  </div>
                </article>

                {/* BATCH 02: Collapsed / Overview Card */}
                <article className="bg-surface-container-lowest overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-md">
                  <div className="p-space-lg gap-space-sm flex flex-col">
                    <div className="gap-space-sm flex flex-wrap items-center justify-between">
                      <div className="gap-space-sm flex items-center">
                        <span className="bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm flex items-center gap-1 rounded px-2.5 py-1 font-semibold tracking-wider uppercase">
                          <span className="material-symbols-outlined text-[14px]">school</span> Khai thác học tập tốt
                        </span>
                        <span className="font-code-num text-code-num text-primary font-semibold">#BG-2024-065</span>
                        <span className="text-outline text-body-sm">•</span>
                        <span className="font-code-num text-code-num text-secondary">Vận đơn: #WB-2024-VT03</span>
                      </div>
                      <div className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span> 15/09/2024
                      </div>
                    </div>
                    <div className="gap-space-md mt-1 flex flex-col justify-between md:flex-row md:items-center">
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">
                          Đợt III/2024: Tài Trợ Máy Tính Xách Tay Bồi Dưỡng Học Sinh Giỏi
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                          Nhà tài trợ: <strong>Tập đoàn Viettel Solutions</strong> • Tiếp nhận: Thầy Lò Văn Thuận (Tổ
                          trưởng Chuyên môn)
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <div className="text-right">
                          <div className="font-headline-sm text-headline-sm text-primary font-bold">15 Laptop</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">Dell Latitude 5520</div>
                        </div>
                        <button
                          className="bg-surface-container hover:bg-surface-container-high text-primary flex h-9 w-9 items-center justify-center rounded-lg transition-all"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                        </button>
                      </div>
                    </div>
                    {/* Micro specs badges */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <span className="bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm flex items-center gap-1 rounded px-2 py-1">
                        <span className="material-symbols-outlined text-tertiary text-[14px]">check</span> Đã nạp
                        Windows 11 Pro Edu bản quyền
                      </span>
                      <span className="bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm flex items-center gap-1 rounded px-2 py-1">
                        <span className="material-symbols-outlined text-primary text-[14px]">backpack</span> Tặng kèm 15
                        balo chống sốc &amp; chuột quang
                      </span>
                      <span className="bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm rounded px-2 py-1">
                        Biên bản bàn giao số #PoD-VT-782
                      </span>
                    </div>
                  </div>
                </article>

                {/* BATCH 03: Compact Card */}
                <article className="bg-surface-container-lowest overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-md">
                  <div className="p-space-lg gap-space-sm flex flex-col">
                    <div className="gap-space-sm flex flex-wrap items-center justify-between">
                      <div className="gap-space-sm flex items-center">
                        <span className="bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm flex items-center gap-1 rounded px-2.5 py-1 font-semibold tracking-wider uppercase">
                          <span className="material-symbols-outlined text-[14px]">local_library</span> Phục vụ thư viện
                          số
                        </span>
                        <span className="font-code-num text-code-num text-primary font-semibold">#BG-2024-032</span>
                      </div>
                      <div className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span> 20/05/2024
                      </div>
                    </div>
                    <div className="gap-space-md mt-1 flex flex-col justify-between md:flex-row md:items-center">
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">
                          Đợt II/2024: Học Cụ Số Hóa &amp; Máy Tính Bảng Tra Cứu Thư Viện
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                          Nhà tài trợ: <strong>Khối Doanh Nghiệp Trẻ Hà Nội &amp; MB Bank</strong> • Phụ trách thư viện
                          số
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <div className="text-right">
                          <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            06 Tablet + 10 Bàn
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">
                            Galaxy Tab A8 + Bàn chuyên dụng
                          </div>
                        </div>
                        <button
                          className="bg-surface-container hover:bg-surface-container-high text-primary flex h-9 w-9 items-center justify-center rounded-lg transition-all"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <span className="bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm flex items-center gap-1 rounded px-2 py-1">
                        <span className="material-symbols-outlined text-tertiary text-[14px]">verified</span> Tích hợp
                        kho sách điện tử 5.000 đầu sách thiếu nhi
                      </span>
                      <span className="bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm rounded px-2 py-1">
                        Biên bản số #PoD-MB-221
                      </span>
                    </div>
                  </div>
                </article>

                {/* BATCH 04: Archived Milestone Card */}
                <article className="bg-surface-container-lowest overflow-hidden rounded-xl opacity-90 shadow-sm transition-all hover:opacity-100 hover:shadow-md">
                  <div className="p-space-lg gap-space-sm flex flex-col">
                    <div className="gap-space-sm flex flex-wrap items-center justify-between">
                      <div className="gap-space-sm flex items-center">
                        <span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1 rounded px-2.5 py-1 font-semibold tracking-wider uppercase">
                          <span className="material-symbols-outlined text-[14px]">history</span> Lưu trữ năm 2023
                        </span>
                        <span className="font-code-num text-code-num text-secondary font-semibold">#BG-2023-088</span>
                      </div>
                      <div className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span> 18/11/2023
                      </div>
                    </div>
                    <div className="gap-space-md mt-1 flex flex-col justify-between md:flex-row md:items-center">
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">
                          Đợt I/2023: Khởi Động Phòng Học Số Vùng Biên Giới Mường Lát
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                          Nhà tài trợ: <strong>Cộng đồng Cựu Sinh Viên Bách Khoa Hà Nội</strong> • Đợt viện trợ tiền đề
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <div className="text-right">
                          <div className="font-headline-sm text-headline-sm text-on-surface font-bold">10 Máy PC</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">Phòng thực hành số 1</div>
                        </div>
                        <button
                          className="bg-surface-container hover:bg-surface-container-high text-primary flex h-9 w-9 items-center justify-center rounded-lg transition-all"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Pagination / Log counter */}
                <div className="p-space-md bg-surface-container-lowest text-on-surface-variant font-body-sm text-body-sm flex items-center justify-between rounded-xl shadow-sm">
                  <span>
                    Hiển thị <strong>4 trên 4 đợt giao</strong> (Niên khóa 2023 - 2025)
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      className="bg-surface-container text-outline cursor-not-allowed rounded-lg px-3 py-1.5"
                      disabled
                      type="button"
                    >
                      Trang trước
                    </button>
                    <span className="bg-primary text-on-primary rounded-lg px-3 py-1.5 font-semibold">1</span>
                    <button
                      className="bg-surface-container text-outline cursor-not-allowed rounded-lg px-3 py-1.5"
                      disabled
                      type="button"
                    >
                      Trang sau
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDEBAR: Institutional Governance & Technical Support (4 Cols) */}
              <aside className="gap-space-lg flex flex-col lg:col-span-4">
                {/* Asset Maintenance Commitment Panel */}
                <div className="bg-surface-container-lowest p-space-lg gap-space-md flex flex-col rounded-xl shadow-sm">
                  <div className="gap-space-sm text-primary flex items-center">
                    <span className="material-symbols-outlined text-[24px]">gavel</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Cam Kết Quản Lý Tài Sản</h2>
                  </div>
                  <div className="bg-surface-container-low p-space-md space-y-2 rounded-lg">
                    <div className="text-on-surface flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Mã văn bản cam kết:</span>
                      <span className="font-code-num text-code-num text-primary font-bold">#CK-ML-01/GD</span>
                    </div>
                    <div className="text-on-surface flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Chu kỳ kiểm kê:</span>
                      <span className="font-label-md text-label-md font-medium">06 tháng / lần</span>
                    </div>
                    <div className="text-on-surface flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Lần kiểm kê gần nhất:</span>
                      <span className="font-label-md text-label-md text-tertiary font-medium">30/09/2024</span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Nhà trường cam kết không chuyển nhượng, không hoán đổi vị trí thiết bị ra khỏi khuôn viên trường học
                    khi chưa có phê chuẩn từ EduShare Core và Phòng GD&amp;ĐT huyện Mường Lát.
                  </p>
                  <button
                    className="bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md flex w-full items-center justify-center gap-1.5 rounded-lg py-2 transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">verified_user</span>
                    <span>Xem bản quy chế quản lý công</span>
                  </button>
                </div>

                {/* Next Scheduled Maintenance Card */}
                <div className="bg-surface-container-lowest p-space-lg gap-space-md flex flex-col rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="gap-space-sm text-tertiary flex items-center">
                      <span className="material-symbols-outlined text-[24px]">build_circle</span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">Bảo Dưỡng Kỹ Thuật</h2>
                    </div>
                    <span className="bg-surface-container text-tertiary font-label-sm text-label-sm rounded-full px-2 py-0.5 font-semibold">
                      Định kỳ
                    </span>
                  </div>
                  <div className="bg-surface-container p-space-md border-primary rounded-lg border-l-4">
                    <div className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                      Đợt Kiểm Tra Tiếp Theo
                    </div>
                    <div className="font-headline-sm text-headline-sm text-primary mt-1 font-bold">
                      15 Tháng 12, 2024
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Thực hiện bởi: <strong>Tổ Kỹ Thuật Viễn Thông VNPT Mường Lát</strong> (Vệ sinh máy, cập nhật phần
                      mềm học liệu mới).
                    </p>
                  </div>
                  {/* 1 Asset Under Maintenance Notice */}
                  <div className="p-space-sm bg-surface-container-low gap-space-sm flex items-start rounded-lg">
                    <span className="material-symbols-outlined text-secondary mt-0.5 shrink-0 text-[20px]">info</span>
                    <div className="min-w-0">
                      <div className="font-label-md text-label-md text-on-surface font-semibold">
                        1 Thiết bị đang kiểm tra nguồn
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        PC HP #ML-PC-014 (Phòng Tin số 2) dự kiến hoàn tất ngày 28/10.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick School Representative Contact & Support */}
                <div className="bg-surface-container-lowest p-space-lg gap-space-md flex flex-col rounded-xl shadow-sm">
                  <div className="gap-space-sm text-on-surface flex items-center">
                    <span className="material-symbols-outlined text-primary text-[24px]">support_agent</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Hỗ Trợ Thực Địa Khẩn Cấp</h2>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Khi gặp sự cố hỏng hóc do sét đánh, sạt lở hoặc điện lưới chập chờn, Ban giám hiệu kích hoạt lệnh
                    cứu trợ công nghệ:
                  </p>
                  <div className="space-y-2">
                    <a
                      className="bg-primary text-on-primary hover:bg-primary-container flex items-center justify-between rounded-lg p-3 transition-all"
                      href="tel:18006868"
                    >
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                        <span className="font-label-md text-label-md font-semibold">Hotline Kỹ Thuật Miễn Cước</span>
                      </div>
                      <span className="font-code-num text-code-num font-bold">1800 6868</span>
                    </a>
                    <button
                      className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex w-full items-center justify-center gap-2 rounded-lg p-2.5 transition-all"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-error text-[18px]">report_problem</span>
                      <span>Gửi Yêu Cầu Thay Thế Linh Kiện</span>
                    </button>
                  </div>
                  <div className="pt-2 text-center">
                    <span className="font-label-sm text-label-sm text-outline">
                      Thời gian phản hồi cam kết tại vùng cao: dưới 48 giờ
                    </span>
                  </div>
                </div>

                {/* Ministry of Education Compliance Guarantee Badge */}
                <div className="p-space-md bg-surface-container-low gap-space-sm flex items-center rounded-xl shadow-sm">
                  <span className="material-symbols-outlined text-tertiary shrink-0 text-[32px]">verified</span>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface font-semibold">
                      Quy chuẩn dữ liệu cấp Quốc gia
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Biên bản số hóa đáp ứng Thông tư số 16/2019/TT-BGDĐT về quản trị cơ sở dữ liệu thiết bị trường
                      học.
                    </div>
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
