import { Link } from "react-router-dom";

const WarehouseInventoryPage = () => {
  return (
    <div className="bg-surface font-body-md text-on-surface flex min-h-screen flex-col antialiased">
      <aside className="bg-surface-container-lowest fixed top-0 left-0 z-50 flex h-screen w-72 flex-col justify-between overflow-y-auto shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="bg-surface-container-low/60 flex items-center gap-3 px-6 py-5">
            <div className="bg-primary text-on-primary font-headline-md flex h-10 w-10 items-center justify-center rounded-xl font-bold tracking-tight shadow-sm">
              ES
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">EduShare VN</span>
                <span className="font-label-sm bg-primary-fixed text-on-primary-fixed-variant rounded px-1.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase">
                  Kho
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Kho &amp; Kỹ Thuật</span>
            </div>
          </div>
          <div className="bg-surface-container-low flex items-center gap-2 px-6 py-3">
            <span className="bg-tertiary-container h-2 w-2 animate-pulse rounded-full"></span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface font-medium">Kho Tổng Miền Bắc (TK-MB)</span>
              <span className="font-body-sm text-on-surface-variant text-[11px]">Trực tuyến 63 Tỉnh Thành</span>
            </div>
          </div>
          <nav className="flex-1 space-y-6 px-4 py-4">
            <div className="space-y-1">
              <div className="font-label-sm text-label-sm text-outline px-3 pb-1 font-semibold tracking-wider uppercase">
                Nhập Kho &amp; Tiếp Nhận
              </div>
              <Link
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                to="/warehouse/receive"
              >
                <span className="material-symbols-outlined text-[20px]">fact_check</span>
                <span className="font-body-md text-body-md">Tiếp nhận &amp; Kiểm định</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                to="/warehouse/scan-qr"
              >
                <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                <span className="font-body-md text-body-md">Quét QR phân luồng</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                to="/warehouse/donation-receipt"
              >
                <span className="material-symbols-outlined text-[20px]">description</span>
                <span className="font-body-md text-body-md">Phiếu trao tặng</span>
              </Link>
            </div>
            <div className="space-y-1">
              <div className="font-label-sm text-label-sm text-outline px-3 pb-1 font-semibold tracking-wider uppercase">
                Quản Lý Kho Bãi
              </div>
              <Link
                className="hover:bg-surface-container hover:text-on-surface bg-primary text-on-primary flex items-center gap-3 rounded-lg px-3 py-2 font-medium shadow-sm transition-colors"
                to="/warehouse/inventory"
              >
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span className="font-body-md text-body-md">Tồn kho thiết bị</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center justify-between rounded-lg px-3 py-2 transition-colors"
                to="/warehouse/racks"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px]">shelves</span>
                  <span className="font-body-md text-body-md">Vị trí kệ định danh</span>
                </div>
                <span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant rounded px-1.5 py-0.5">
                  Xem
                </span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                to="/warehouse/audit-report"
              >
                <span className="material-symbols-outlined text-[20px]">assignment</span>
                <span className="font-body-md text-body-md">Kiểm kê &amp; Báo cáo</span>
              </Link>
            </div>
            <div className="space-y-1">
              <div className="font-label-sm text-label-sm text-outline px-3 pb-1 font-semibold tracking-wider uppercase">
                Điều Phối &amp; Vận Chuyển
              </div>
              <Link
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                to="/warehouse/dispatch"
              >
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span className="font-body-md text-body-md">Lệnh điều chuyển &amp; Vận đơn</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                to="/warehouse/delivery-history"
              >
                <span className="material-symbols-outlined text-[20px]">history</span>
                <span className="font-body-md text-body-md">Lịch sử đợt giao</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                to="/warehouse/incident-report"
              >
                <span className="material-symbols-outlined text-[20px]">warning</span>
                <span className="font-body-md text-body-md">Báo cáo sự cố cá nhân</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="bg-surface-container-low text-on-surface-variant mx-4 mb-4 space-y-1 rounded-xl p-4">
          <div className="font-label-sm text-label-sm flex items-center justify-between font-semibold">
            <span className="text-on-surface">CỔNG KHO VẬN</span>
            <span className="text-outline">v2.8.4</span>
          </div>
          <div className="text-on-surface-variant font-body-sm text-body-sm flex items-center gap-2 pt-1">
            <span className="material-symbols-outlined text-primary text-[16px]">support_agent</span>
            <span className="">
              Kỹ thuật kho: <strong className="text-on-surface font-semibold">1900 6829</strong>
            </span>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col pl-72">
        <header className="bg-surface-container-lowest/90 fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between gap-4 px-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1.5">
              <span className="hover:text-primary cursor-pointer transition-colors">EduShare VN Kho</span>
              <span className="material-symbols-outlined text-outline text-[16px]">chevron_right</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Nhập Kho &amp; Tiếp Nhận</span>
              <span className="material-symbols-outlined text-outline text-[16px]">chevron_right</span>
              <span className="text-primary font-medium">Quét QR Phân Luồng</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined text-outline absolute left-3 text-[18px]">search</span>
              <input
                className="text-body-md font-body-md bg-surface-container-low text-on-surface placeholder:text-outline focus:ring-primary/20 w-96 rounded-lg py-2 pr-14 pl-9 transition-all outline-none focus:ring-2"
                placeholder="Mã vận đơn, số lô hàng, serial hoặc quét mã QR thiết bị..."
                type="text"
              />
              <span className="bg-surface-container-high text-on-surface-variant font-code-num absolute right-3 rounded px-1.5 py-0.5 text-[11px] font-semibold tracking-wide">
                ⌘K
              </span>
            </div>
            <button className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary font-label-md text-label-md flex items-center gap-1.5 rounded-lg px-3 py-2 transition-colors">
              <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
              <span className="">Quét QR</span>
            </button>
            <button className="hover:bg-surface-container-low text-on-surface-variant relative rounded-lg p-2 transition-colors">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="bg-error absolute top-1.5 right-1.5 h-2 w-2 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-3">
              <div className="flex flex-col text-right">
                <span className="font-label-md text-label-md text-on-surface font-semibold">Trần Hùng (TK-MB-04)</span>
                <span className="font-body-sm text-on-surface-variant text-[11px]">
                  Trưởng Kho Kỹ Thuật Hà Nội • Kho Tổng Miền Bắc (HUB-01 Hà Nội)
                </span>
              </div>
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-surface w-full flex-1 pt-16">
          <div className="flex w-full flex-col">
            {/* Subtle Ambient Glow */}
            <div className="relative w-full space-y-6 overflow-hidden px-8 py-6">
              <div className="bg-primary/5 pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full blur-3xl"></div>
              <div className="bg-tertiary/5 pointer-events-none absolute top-96 -left-32 h-80 w-80 rounded-full blur-3xl"></div>

              {/* 1. Page Title & Action Bar */}
              <div className="relative z-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm inline-flex items-center rounded px-2 py-0.5 font-semibold tracking-wider uppercase">
                      Chế độ Thủ Kho • Kho Tổng HUB-01
                    </span>
                    <span className="bg-tertiary/10 text-tertiary font-code-num text-body-sm inline-flex items-center gap-1 rounded px-2 py-0.5">
                      <span className="bg-tertiary h-1.5 w-1.5 animate-ping rounded-full"></span>
                      RFID Cổng Đang Hoạt Động
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                    Tồn Kho Thiết Bị &amp; Quản Lý Lưu Trữ
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Quản trị chi tiết 15,240 thiết bị giáo dục đã thẩm định, mã hóa QR định danh và phân loại theo Grade
                    kiểm chuẩn.
                  </p>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  <button className="bg-surface-container-lowest text-on-surface hover:bg-surface-container text-label-md font-label-md inline-flex items-center gap-2 rounded-xl px-3.5 py-2.5 shadow-sm transition-all">
                    <span className="material-symbols-outlined text-primary text-[18px]">download</span>
                    <span className="">Xuất Báo Cáo Tồn (.xlsx)</span>
                  </button>
                  <button className="bg-surface-container-high text-on-surface hover:bg-surface-container-highest text-label-md font-label-md inline-flex items-center gap-2 rounded-xl px-3.5 py-2.5 transition-all">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">sensors</span>
                    <span className="">Kiểm Kê RFID Nhanh</span>
                  </button>
                  <button className="bg-primary text-on-primary hover:bg-surface-tint text-label-md font-label-md inline-flex items-center gap-2 rounded-xl px-4 py-2.5 shadow transition-all">
                    <span className="material-symbols-outlined text-[18px]">sync</span>
                    <span className="">Đồng Bộ Quét Mã</span>
                  </button>
                </div>
              </div>

              {/* 2. Bento Grid 4 Thẻ KPI Kho */}
              <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Kpi 1 */}
                <div className="bg-surface-container-lowest flex flex-col justify-between space-y-4 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wider uppercase">
                        Tổng Thiết Bị Lưu Kho
                      </span>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="font-headline-xl text-headline-xl text-on-surface font-bold">15,240</span>
                        <span className="font-label-md text-label-md text-tertiary flex items-center font-semibold">
                          <span className="material-symbols-outlined text-[16px]">trending_up</span> +340
                        </span>
                      </div>
                    </div>
                    <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-xl">
                      <span className="material-symbols-outlined text-[22px]">inventory_2</span>
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-2">
                    <div className="font-body-sm text-body-sm text-on-surface-variant flex justify-between">
                      <span className="">
                        PC &amp; Laptop: <strong className="text-on-surface font-semibold">8,420</strong>
                      </span>
                      <span className="">
                        Tablet: <strong className="text-on-surface font-semibold">3,820</strong>
                      </span>
                    </div>
                    <div className="bg-surface-container flex h-2 w-full overflow-hidden rounded-full">
                      <div className="bg-primary h-full" style={{ width: "55%" }}></div>
                      <div className="bg-tertiary-container h-full" style={{ width: "25%" }}></div>
                      <div className="bg-surface-dim h-full" style={{ width: "20%" }}></div>
                    </div>
                    <div className="text-outline font-code-num flex items-center justify-between text-[11px]">
                      <span className="">55% Máy tính</span>
                      <span className="">25% Máy tính bảng</span>
                      <span className="">20% Mạng/UPS</span>
                    </div>
                  </div>
                </div>
                {/* Kpi 2 */}
                <div className="bg-surface-container-lowest flex flex-col justify-between space-y-4 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wider uppercase">
                        Đạt Chuẩn Phân Bổ (A/B)
                      </span>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="font-headline-xl text-headline-xl text-tertiary font-bold">12,180</span>
                        <span className="font-label-sm text-label-sm bg-tertiary/10 text-tertiary rounded-full px-2 py-0.5 font-semibold">
                          79.9%
                        </span>
                      </div>
                    </div>
                    <div className="bg-tertiary/10 text-tertiary flex h-10 w-10 items-center justify-center rounded-xl">
                      <span className="material-symbols-outlined text-[22px]">verified</span>
                    </div>
                  </div>
                  <div className="space-y-1 pt-2">
                    <div className="text-on-surface font-body-sm text-body-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-tertiary text-[16px]">check_circle</span>
                      <span className="">Sẵn sàng đóng kiện xuất trường học</span>
                    </div>
                    <p className="font-body-sm text-on-surface-variant line-clamp-1 text-[11px]">
                      Đã dán niêm phong kiểm định và kiểm tra pin &gt; 80%
                    </p>
                  </div>
                </div>
                {/* Kpi 3 */}
                <div className="bg-surface-container-lowest flex flex-col justify-between space-y-4 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wider uppercase">
                        Xưởng Nâng Cấp &amp; Sửa Chữa
                      </span>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="font-headline-xl text-headline-xl text-on-surface font-bold">185</span>
                        <span className="font-label-sm text-label-sm text-secondary font-code-num">
                          Khu Vực Kỹ Thuật
                        </span>
                      </div>
                    </div>
                    <div className="bg-secondary-fixed text-on-secondary-fixed flex h-10 w-10 items-center justify-center rounded-xl">
                      <span className="material-symbols-outlined text-[22px]">build_circle</span>
                    </div>
                  </div>
                  <div className="space-y-1 pt-2">
                    <div className="text-secondary font-body-sm text-body-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">autorenew</span>
                      <span className="">Chờ linh kiện SSD / Pin thay thế</span>
                    </div>
                    <p className="font-body-sm text-on-surface-variant text-[11px]">
                      Thời gian chu chuyển TB:{" "}
                      <strong className="text-on-surface font-semibold">3.2 ngày/thiết bị</strong>
                    </p>
                  </div>
                </div>
                {/* Kpi 4 */}
                <div className="bg-surface-container-lowest flex flex-col justify-between space-y-4 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-error font-semibold tracking-wider uppercase">
                        Cảnh Báo Tồn &gt; 45 Ngày
                      </span>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="font-headline-xl text-headline-xl text-error font-bold">84</span>
                        <span className="font-label-sm text-label-sm bg-error-container text-on-error-container rounded-full px-2 py-0.5 font-semibold">
                          Ưu tiên phân bổ
                        </span>
                      </div>
                    </div>
                    <div className="bg-error-container text-on-error-container flex h-10 w-10 items-center justify-center rounded-xl">
                      <span className="material-symbols-outlined text-[22px]">hourglass_empty</span>
                    </div>
                  </div>
                  <div className="space-y-1 pt-2">
                    <div className="text-error font-body-sm text-body-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">priority_high</span>
                      <span className="">Đề xuất Admin lập phương án gấp</span>
                    </div>
                    <p className="font-body-sm text-on-surface-variant line-clamp-1 text-[11px]">
                      Chủ yếu: Sách giáo khoa &amp; màn hình CRT lưu kho
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Thanh Công Cụ Lọc Nâng Cao */}
              <div className="bg-surface-container-lowest relative z-10 space-y-3 rounded-2xl p-4 shadow-sm">
                <div className="flex flex-col items-center justify-between gap-3 lg:flex-row">
                  {/* Search Field */}
                  <div className="relative w-full flex-1">
                    <span className="material-symbols-outlined text-outline absolute top-1/2 left-3.5 -translate-y-1/2 text-[20px]">
                      search
                    </span>
                    <input
                      className="bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container w-full rounded-xl py-2.5 pr-12 pl-10 transition-colors outline-none"
                      placeholder="Tìm kiếm theo mã QR thiết bị, Serial, Model máy, hoặc Tên Nhà hảo tâm..."
                      type="text"
                      defaultValue="DELL-5520"
                    />
                    <span className="font-code-num text-label-sm bg-surface-container-high text-on-surface-variant absolute top-1/2 right-3 -translate-y-1/2 rounded px-1.5 py-0.5">
                      ESC để xóa
                    </span>
                  </div>
                  {/* Filter Dropdowns / Chips */}
                  <div className="flex w-full flex-wrap items-center gap-2 lg:w-auto">
                    {/* Phân Loại */}
                    <div className="bg-surface-container-low text-on-surface text-label-md font-label-md hover:bg-surface-container flex cursor-pointer items-center gap-1.5 rounded-xl px-3 py-2 transition-colors">
                      <span className="material-symbols-outlined text-outline text-[18px]">devices</span>
                      <span className="">
                        Loại: <strong>Laptop &amp; PC</strong>
                      </span>
                      <span className="material-symbols-outlined text-outline text-[16px]">expand_more</span>
                    </div>
                    {/* Grade */}
                    <div className="bg-surface-container-low text-on-surface text-label-md font-label-md hover:bg-surface-container flex cursor-pointer items-center gap-1.5 rounded-xl px-3 py-2 transition-colors">
                      <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
                      <span className="">
                        Chuẩn: <strong>Grade A &amp; B</strong>
                      </span>
                      <span className="material-symbols-outlined text-outline text-[16px]">expand_more</span>
                    </div>
                    {/* Kho */}
                    <div className="bg-surface-container-low text-on-surface text-label-md font-label-md hover:bg-surface-container flex cursor-pointer items-center gap-1.5 rounded-xl px-3 py-2 transition-colors">
                      <span className="material-symbols-outlined text-primary text-[18px]">warehouse</span>
                      <span className="">
                        Kho: <strong>HUB-01 Miền Bắc</strong>
                      </span>
                      <span className="material-symbols-outlined text-outline text-[16px]">expand_more</span>
                    </div>
                    {/* Khu Kệ */}
                    <div className="bg-surface-container-low text-on-surface text-label-md font-label-md hover:bg-surface-container flex cursor-pointer items-center gap-1.5 rounded-xl px-3 py-2 transition-colors">
                      <span className="material-symbols-outlined text-secondary text-[18px]">shelves</span>
                      <span className="">
                        Khu: <strong>Tất cả (A, B, C, D)</strong>
                      </span>
                      <span className="material-symbols-outlined text-outline text-[16px]">expand_more</span>
                    </div>
                    {/* Clear Filter */}
                    <button
                      className="text-outline hover:text-error hover:bg-error-container/30 rounded-xl p-2 transition-colors"
                      title="Đặt lại bộ lọc"
                    >
                      <span className="material-symbols-outlined text-[20px]">filter_alt_off</span>
                    </button>
                  </div>
                </div>
                {/* Quick Category Pills */}
                <div className="text-label-md font-label-md flex items-center gap-2 overflow-x-auto pb-1 whitespace-nowrap">
                  <span className="font-label-sm text-label-sm text-outline pr-1 tracking-wider uppercase">
                    Lọc nhanh:
                  </span>
                  <button className="bg-primary text-on-primary rounded-full px-3 py-1 shadow-xs">
                    Tất cả (15,240)
                  </button>
                  <button className="bg-surface-container-low text-on-surface-variant hover:bg-surface-container rounded-full px-3 py-1 transition-colors">
                    Laptops (5,120)
                  </button>
                  <button className="bg-surface-container-low text-on-surface-variant hover:bg-surface-container rounded-full px-3 py-1 transition-colors">
                    Máy Bàn Desktop (3,300)
                  </button>
                  <button className="bg-surface-container-low text-on-surface-variant hover:bg-surface-container rounded-full px-3 py-1 transition-colors">
                    Máy Tính Bảng (3,820)
                  </button>
                  <button className="bg-surface-container-low text-on-surface-variant hover:bg-surface-container rounded-full px-3 py-1 transition-colors">
                    Thiết bị mạng (1,850)
                  </button>
                  <button className="bg-error-container text-on-error-container hover:bg-error/20 rounded-full px-3 py-1 transition-colors">
                    Tồn quá hạn &gt; 45 ngày (84)
                  </button>
                </div>
              </div>

              {/* 4. Two-Column Layout (7/12 & 5/12) */}
              <div className="relative z-10 grid grid-cols-1 items-start gap-6 xl:grid-cols-12">
                {/* CỘT TRÁI (7/12): Danh mục thiết bị tồn kho thời gian thực */}
                <div className="flex flex-col space-y-4 xl:col-span-7">
                  <div className="bg-surface-container-lowest flex flex-col overflow-hidden rounded-2xl shadow-sm">
                    {/* Table Header Controls */}
                    <div className="bg-surface-container-low/40 flex items-center justify-between p-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">view_list</span>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Danh Mục Thiết Bị Đang Lưu Bãi
                        </h2>
                        <span className="bg-surface-container-highest text-on-surface-variant font-code-num text-label-sm rounded-full px-2 py-0.5">
                          15,240 máy
                        </span>
                      </div>
                      <div className="text-label-sm font-label-sm text-outline flex items-center gap-2">
                        <span className="bg-tertiary h-2 w-2 rounded-full"></span>
                        <span className="">Cập nhật 4 phút trước</span>
                      </div>
                    </div>
                    {/* Table Container with Horizontal Scroll */}
                    <div className="w-full overflow-x-auto">
                      <table className="w-full min-w-[700px] border-collapse text-left">
                        <thead>
                          <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
                            <th className="px-4 py-3">Thiết Bị &amp; Mã QR</th>
                            <th className="px-4 py-3">Nguồn Tài Trợ</th>
                            <th className="px-4 py-3">Kiểm Định</th>
                            <th className="px-4 py-3">
                              <div className="flex items-center gap-1">
                                <span className="">Vị Trí Lưu Kho</span>
                                <span className="py-0.2 bg-surface-container-high text-outline rounded px-1 text-[9px] font-bold">
                                  Chỉ xem
                                </span>
                              </div>
                            </th>
                            <th className="px-4 py-3">Tồn Kho</th>
                            <th className="px-3 py-3 text-right">Chi Tiết</th>
                          </tr>
                        </thead>
                        <tbody className="text-body-md font-body-md divide-y-0">
                          {/* ROW 1 (ACTIVE / SELECTED) */}
                          <tr className="bg-primary/5 hover:bg-primary/10 relative cursor-pointer transition-colors">
                            <td className="px-4 py-3.5">
                              <div className="flex items-center gap-3">
                                <div className="bg-primary -ml-2 h-10 w-2 rounded-full"></div>
                                <div className="bg-surface-container-high text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                                  <span className="material-symbols-outlined text-[22px]">laptop_mac</span>
                                </div>
                                <div className="flex min-w-0 flex-col">
                                  <span className="font-headline-sm text-on-surface truncate text-[14px] font-bold">
                                    Laptop Dell Latitude 5520
                                  </span>
                                  <div className="font-code-num text-body-sm text-on-surface-variant flex items-center gap-2">
                                    <span className="text-primary font-semibold">#QR-DELL-5520</span>
                                    <span className="">•</span>
                                    <span className="">SN: 7X89KL2</span>
                                  </div>
                                  <span className="text-outline truncate text-[11px]">i5-1135G7 • 8GB • SSD 256GB</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md text-on-surface font-semibold">
                                  Tập đoàn VNPT
                                </span>
                                <span className="text-on-surface-variant text-[11px]">Lô trao tặng #8842</span>
                              </div>
                            </td>
                            <td className="px-4 py-3.5">
                              <span className="bg-tertiary/10 text-tertiary font-label-md text-label-md inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold whitespace-nowrap">
                                <span className="material-symbols-outlined text-[15px]">verified</span> Grade A
                              </span>
                            </td>
                            <td className="px-4 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-code-num text-label-md text-primary font-bold">
                                  Kệ A2 - Tầng 04
                                </span>
                                <span className="text-outline text-[11px]">Ô định danh 12</span>
                              </div>
                            </td>
                            <td className="font-code-num px-4 py-3.5">
                              <span className="bg-surface-container text-on-surface text-body-sm rounded px-2 py-0.5 font-semibold whitespace-nowrap">
                                12 ngày
                              </span>
                            </td>
                            <td className="px-3 py-3.5 text-right">
                              <span className="material-symbols-outlined text-primary text-[22px]">
                                arrow_forward_ios
                              </span>
                            </td>
                          </tr>
                          {/* Row 2 */}
                          <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                            <td className="px-4 py-3.5">
                              <div className="flex items-center gap-3">
                                <div className="bg-surface-container text-secondary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                                  <span className="material-symbols-outlined text-[22px]">desktop_windows</span>
                                </div>
                                <div className="flex min-w-0 flex-col">
                                  <span className="font-headline-sm text-on-surface truncate text-[14px] font-semibold">
                                    Bộ PC HP ProDesk 400 G6
                                  </span>
                                  <div className="font-code-num text-body-sm text-on-surface-variant flex items-center gap-2">
                                    <span className="text-secondary font-semibold">#QR-HP-400-G6</span>
                                    <span className="">•</span>
                                    <span className="">SN: HP984210</span>
                                  </div>
                                  <span className="text-outline truncate text-[11px]">
                                    i3-9100 • 8GB • Kèm Màn HP 21.5"
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md text-on-surface font-semibold">
                                  FPT Software
                                </span>
                                <span className="text-on-surface-variant text-[11px]">Chương trình nối tri thức</span>
                              </div>
                            </td>
                            <td className="px-4 py-3.5">
                              <span className="bg-tertiary/10 text-tertiary font-label-md text-label-md inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold whitespace-nowrap">
                                <span className="material-symbols-outlined text-[15px]">verified</span> Grade A
                              </span>
                            </td>
                            <td className="px-4 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-code-num text-label-md text-on-surface font-semibold">
                                  Kệ B1 - Tầng 01
                                </span>
                                <span className="text-outline text-[11px]">Ô định danh 05</span>
                              </div>
                            </td>
                            <td className="font-code-num px-4 py-3.5">
                              <span className="bg-surface-container text-on-surface text-body-sm rounded px-2 py-0.5 whitespace-nowrap">
                                18 ngày
                              </span>
                            </td>
                            <td className="px-3 py-3.5 text-right">
                              <span className="material-symbols-outlined text-outline text-[20px]">chevron_right</span>
                            </td>
                          </tr>
                          {/* Row 3 */}
                          <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                            <td className="px-4 py-3.5">
                              <div className="flex items-center gap-3">
                                <div className="bg-secondary-fixed/50 text-on-secondary-fixed flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                                  <span className="material-symbols-outlined text-[22px]">laptop</span>
                                </div>
                                <div className="flex min-w-0 flex-col">
                                  <span className="font-headline-sm text-on-surface truncate text-[14px] font-semibold">
                                    Lenovo ThinkPad T480s
                                  </span>
                                  <div className="font-code-num text-body-sm text-on-surface-variant flex items-center gap-2">
                                    <span className="text-secondary font-semibold">#QR-LEN-T480</span>
                                    <span className="">•</span>
                                    <span className="">SN: PF19920A</span>
                                  </div>
                                  <span className="text-outline truncate text-[11px]">Core i5-8350U • Chờ pin mới</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md text-on-surface font-semibold">
                                  Viettel Solutions
                                </span>
                                <span className="text-on-surface-variant text-[11px]">Tài trợ kỹ thuật số</span>
                              </div>
                            </td>
                            <td className="px-4 py-3.5">
                              <span className="bg-secondary-container text-on-secondary-container font-label-md text-label-md inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold whitespace-nowrap">
                                <span className="material-symbols-outlined text-[15px]">build</span> Đang sửa chữa
                              </span>
                            </td>
                            <td className="px-4 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-code-num text-label-md text-on-surface font-semibold">
                                  Kệ A1 - Tầng 02
                                </span>
                                <span className="text-outline text-[11px]">Khu Kỹ Thuật</span>
                              </div>
                            </td>
                            <td className="font-code-num px-4 py-3.5">
                              <span className="bg-surface-container text-on-surface text-body-sm rounded px-2 py-0.5 whitespace-nowrap">
                                5 ngày
                              </span>
                            </td>
                            <td className="px-3 py-3.5 text-right">
                              <span className="material-symbols-outlined text-outline text-[20px]">chevron_right</span>
                            </td>
                          </tr>
                          {/* Row 4 */}
                          <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                            <td className="px-4 py-3.5">
                              <div className="flex items-center gap-3">
                                <div className="bg-surface-container text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                                  <span className="material-symbols-outlined text-[22px]">tablet_mac</span>
                                </div>
                                <div className="flex min-w-0 flex-col">
                                  <span className="font-headline-sm text-on-surface truncate text-[14px] font-semibold">
                                    Apple iPad Gen 9 (64GB)
                                  </span>
                                  <div className="font-code-num text-body-sm text-on-surface-variant flex items-center gap-2">
                                    <span className="text-primary font-semibold">#QR-IPAD-G9-08</span>
                                    <span className="">•</span>
                                    <span className="">SN: DMPZ9182</span>
                                  </div>
                                  <span className="text-outline truncate text-[11px]">
                                    Wi-Fi • Pin 91% • Kèm Củ Sạc
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md text-on-surface font-semibold">
                                  Trần Kim Ngân
                                </span>
                                <span className="text-on-surface-variant text-[11px]">Hảo tâm cá nhân (Hà Nội)</span>
                              </div>
                            </td>
                            <td className="px-4 py-3.5">
                              <span className="bg-primary-fixed text-on-primary-fixed-variant font-label-md text-label-md inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold whitespace-nowrap">
                                <span className="material-symbols-outlined text-[15px]">school</span> Grade B+
                              </span>
                            </td>
                            <td className="px-4 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-code-num text-label-md text-on-surface font-semibold">
                                  Kệ B2 - Tầng 03
                                </span>
                                <span className="text-outline text-[11px]">Khu Máy Tính Bảng</span>
                              </div>
                            </td>
                            <td className="font-code-num px-4 py-3.5">
                              <span className="bg-surface-container text-on-surface text-body-sm rounded px-2 py-0.5 whitespace-nowrap">
                                22 ngày
                              </span>
                            </td>
                            <td className="px-3 py-3.5 text-right">
                              <span className="material-symbols-outlined text-outline text-[20px]">chevron_right</span>
                            </td>
                          </tr>
                          {/* Row 5 */}
                          <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                            <td className="px-4 py-3.5">
                              <div className="flex items-center gap-3">
                                <div className="bg-surface-container text-tertiary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                                  <span className="material-symbols-outlined text-[22px]">router</span>
                                </div>
                                <div className="flex min-w-0 flex-col">
                                  <span className="font-headline-sm text-on-surface truncate text-[14px] font-semibold">
                                    Cisco Catalyst 24-Port GE
                                  </span>
                                  <div className="font-code-num text-body-sm text-on-surface-variant flex items-center gap-2">
                                    <span className="text-tertiary font-semibold">#QR-SW-CISCO24</span>
                                    <span className="">•</span>
                                    <span className="">SN: FCW2248A</span>
                                  </div>
                                  <span className="text-outline truncate text-[11px]">
                                    WS-C2960X-24TD-L • 24 Port PoE
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md text-on-surface font-semibold">
                                  VNPT Hưng Yên
                                </span>
                                <span className="text-on-surface-variant text-[11px]">Thiết bị phòng tin học</span>
                              </div>
                            </td>
                            <td className="px-4 py-3.5">
                              <span className="bg-tertiary/10 text-tertiary font-label-md text-label-md inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold whitespace-nowrap">
                                <span className="material-symbols-outlined text-[15px]">verified</span> Grade A
                              </span>
                            </td>
                            <td className="px-4 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-code-num text-label-md text-on-surface font-semibold">
                                  Kệ C3 - Tầng 02
                                </span>
                                <span className="text-outline text-[11px]">Khu Thiết Bị Mạng</span>
                              </div>
                            </td>
                            <td className="font-code-num px-4 py-3.5">
                              <span className="bg-surface-container text-on-surface text-body-sm rounded px-2 py-0.5 whitespace-nowrap">
                                8 ngày
                              </span>
                            </td>
                            <td className="px-3 py-3.5 text-right">
                              <span className="material-symbols-outlined text-outline text-[20px]">chevron_right</span>
                            </td>
                          </tr>
                          {/* ROW 6 (CẢNH BÁO TỒN LÂU) */}
                          <tr className="hover:bg-error-container/20 bg-error-container/10 cursor-pointer transition-colors">
                            <td className="px-4 py-3.5">
                              <div className="flex items-center gap-3">
                                <div className="bg-error-container text-error flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                                  <span className="material-symbols-outlined text-[22px]">auto_stories</span>
                                </div>
                                <div className="flex min-w-0 flex-col">
                                  <span className="font-headline-sm text-on-surface truncate text-[14px] font-semibold">
                                    Bộ 50 Cuốn SGK Lớp 7 &amp; Ghế Xếp
                                  </span>
                                  <div className="font-code-num text-body-sm text-error flex items-center gap-2">
                                    <span className="font-bold">#QR-SGK-701</span>
                                    <span className="">•</span>
                                    <span className="bg-error text-on-error rounded px-1 text-[10px]">
                                      Tồn &gt; 45 ngày
                                    </span>
                                  </div>
                                  <span className="text-on-surface-variant truncate text-[11px]">
                                    Sách Cánh Diều + 10 Bộ bàn ghế lắp ghép
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md text-on-surface font-semibold">
                                  Hội Cựu SV ĐH Kinh Tế
                                </span>
                                <span className="text-on-surface-variant text-[11px]">
                                  Chi viện trường xã biên giới
                                </span>
                              </div>
                            </td>
                            <td className="px-4 py-3.5">
                              <span className="bg-surface-container text-on-surface font-label-md text-label-md inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-medium whitespace-nowrap">
                                <span className="material-symbols-outlined text-[15px]">inventory</span> Sẵn sàng
                              </span>
                            </td>
                            <td className="px-4 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-code-num text-label-md text-on-surface font-semibold">
                                  Pallet D2 - Sàn 01
                                </span>
                                <span className="text-outline text-[11px]">Kho Sách &amp; Cơ Sở Vật</span>
                              </div>
                            </td>
                            <td className="font-code-num px-4 py-3.5">
                              <span className="bg-error text-on-error text-body-sm rounded px-2 py-0.5 font-bold whitespace-nowrap">
                                48 ngày
                              </span>
                            </td>
                            <td className="px-3 py-3.5 text-right">
                              <span className="material-symbols-outlined text-outline text-[20px]">chevron_right</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Pagination Bar */}
                    <div className="bg-surface-container-low/40 text-body-sm font-body-sm text-on-surface-variant flex items-center justify-between p-4">
                      <div className="flex items-center gap-2">
                        <span className="">Hiển thị</span>
                        <select className="bg-surface-container-lowest text-on-surface font-code-num cursor-pointer rounded-lg px-2 py-1 outline-none">
                          <option>6</option>
                          <option>12</option>
                          <option>24</option>
                          <option>50</option>
                        </select>
                        <span className="">
                          trên <strong>15,240</strong> thiết bị
                        </span>
                      </div>
                      <div className="font-label-md flex items-center gap-1.5">
                        <button className="bg-surface-container-lowest text-on-surface hover:bg-surface-container flex h-8 w-8 items-center justify-center rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-[18px]">first_page</span>
                        </button>
                        <button className="bg-surface-container-lowest text-on-surface hover:bg-surface-container flex h-8 w-8 items-center justify-center rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                        </button>
                        <button className="bg-primary text-on-primary flex h-8 w-8 items-center justify-center rounded-lg font-bold shadow-xs">
                          1
                        </button>
                        <button className="bg-surface-container-lowest text-on-surface hover:bg-surface-container flex h-8 w-8 items-center justify-center rounded-lg transition-colors">
                          2
                        </button>
                        <button className="bg-surface-container-lowest text-on-surface hover:bg-surface-container flex h-8 w-8 items-center justify-center rounded-lg transition-colors">
                          3
                        </button>
                        <span className="text-outline px-1">...</span>
                        <button className="bg-surface-container-lowest text-on-surface hover:bg-surface-container flex h-8 w-8 items-center justify-center rounded-lg transition-colors">
                          2,540
                        </button>
                        <button className="bg-surface-container-lowest text-on-surface hover:bg-surface-container flex h-8 w-8 items-center justify-center rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                        <button className="bg-surface-container-lowest text-on-surface hover:bg-surface-container flex h-8 w-8 items-center justify-center rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-[18px]">last_page</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Technical Telemetry & Environmental Sensor Box */}
                  <div className="bg-surface-container-lowest flex flex-col items-center justify-between gap-4 rounded-2xl p-5 shadow-sm md:flex-row">
                    <div className="flex items-center gap-3">
                      <div className="bg-surface-container text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                        <span className="material-symbols-outlined text-[28px]">thermostat</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wider uppercase">
                          Cảm Biến Môi Trường Khu Kệ A &amp; B
                        </span>
                        <div className="mt-0.5 flex flex-wrap items-center gap-3">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">22.4°C</span>
                          <span className="text-outline hidden sm:inline">•</span>
                          <span className="font-headline-sm text-headline-sm text-tertiary font-bold">48% Độ Ẩm</span>
                          <span className="bg-tertiary/10 text-tertiary font-label-sm hidden rounded px-2 py-0.5 text-[11px] font-semibold sm:inline-block">
                            Lý tưởng lưu kho IT
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end gap-3 md:w-auto">
                      {/* Mini Sparkline inline SVG */}
                      <div className="flex flex-col items-end">
                        <span className="text-outline font-code-num text-[11px]">24h Biến thiên ẩm</span>
                        <svg className="text-tertiary h-6 w-28" fill="none" viewBox="0 0 100 24">
                          <path
                            d="M0 16 L20 14 L40 18 L60 10 L80 12 L100 8"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                          ></path>
                          <circle cx="100" cy="8" fill="currentColor" r="3"></circle>
                        </svg>
                      </div>
                      <button
                        className="bg-surface-container hover:bg-surface-container-high text-on-surface-variant rounded-xl p-2.5 transition-colors"
                        title="Xem sơ đồ nhiệt độ các dãy kệ"
                      >
                        <span className="material-symbols-outlined text-[20px]">grid_view</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* CỘT PHẢI (5/12): Thẻ chi tiết thiết bị đang chọn & Quy chuẩn RBAC */}
                <div className="flex flex-col space-y-4 xl:col-span-5">
                  {/* Main Inspection Panel */}
                  <div className="bg-surface-container-lowest flex flex-col overflow-hidden rounded-2xl shadow-sm">
                    {/* Card Header */}
                    <div className="from-primary/10 via-surface-container-low to-surface-container-low flex items-start justify-between bg-gradient-to-r p-5">
                      <div className="flex flex-col">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="bg-primary text-on-primary font-code-num text-label-sm rounded px-2 py-0.5 font-bold">
                            #QR-DELL-5520
                          </span>
                          <span className="bg-tertiary/10 text-tertiary font-label-sm text-label-sm flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold">
                            <span className="material-symbols-outlined text-[14px]">verified</span> Đạt Grade A
                          </span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-on-surface mt-1.5 font-bold">
                          Laptop Dell Latitude 5520
                        </h3>
                        <span className="font-code-num text-body-sm text-on-surface-variant">
                          Serial: 7X89KL2 • Asset Tag: EDU-VN-2024-00441
                        </span>
                      </div>
                      <div className="flex flex-col items-end">
                        <button
                          className="bg-surface-container-lowest text-on-surface hover:bg-surface-container rounded-xl p-2 shadow-xs transition-colors"
                          title="In tem dán nhãn định danh"
                        >
                          <span className="material-symbols-outlined text-primary text-[20px]">print</span>
                        </button>
                      </div>
                    </div>
                    {/* Inspection Photo & QR Preview */}
                    <div className="space-y-5 p-5">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {/* Physical Inspection Photo */}
                        <div className="bg-surface-container-low group relative aspect-video h-40 overflow-hidden rounded-xl sm:aspect-auto">
                          <img
                            alt="Close up inspection photo of a modern black Dell Latitude 5520 laptop resting on an industrial clean warehouse calibration workbench under bright neutral studio lighting, showing spotless keyboard, intact screen, with an official tamper-evident EduShare verification sticker on the palmrest, sharp macro photography in blue and slate grey tones."
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                          />
                          <div className="bg-on-background/70 text-inverse-on-surface font-code-num absolute right-2 bottom-2 left-2 flex items-center justify-between rounded-lg px-2.5 py-1 text-[11px] backdrop-blur-md">
                            <span className="">Ảnh giám định: 14/11/2024</span>
                            <span className="text-tertiary-fixed">KT: Hoàng Văn Nam</span>
                          </div>
                        </div>
                        {/* Big QR Code Box */}
                        <div className="bg-surface-container-low flex flex-col items-center justify-center space-y-2 rounded-xl p-3.5 text-center">
                          {/* Inline SVG QR Code Visual */}
                          <div className="rounded-xl bg-white p-2 shadow-xs">
                            <svg className="text-on-background h-24 w-24" fill="currentColor" viewBox="0 0 100 100">
                              {/* QR Finder Patterns */}
                              <rect fill="currentColor" height="28" rx="4" width="28" x="5" y="5"></rect>
                              <rect fill="white" height="18" rx="2" width="18" x="10" y="10"></rect>
                              <rect fill="currentColor" height="10" width="10" x="14" y="14"></rect>
                              <rect fill="currentColor" height="28" rx="4" width="28" x="67" y="5"></rect>
                              <rect fill="white" height="18" rx="2" width="18" x="72" y="10"></rect>
                              <rect fill="currentColor" height="10" width="10" x="76" y="14"></rect>
                              <rect fill="currentColor" height="28" rx="4" width="28" x="5" y="67"></rect>
                              <rect fill="white" height="18" rx="2" width="18" x="10" y="72"></rect>
                              <rect fill="currentColor" height="10" width="10" x="14" y="76"></rect>
                              {/* Data Blocks */}
                              <rect fill="currentColor" height="8" width="8" x="38" y="8"></rect>
                              <rect fill="currentColor" height="8" width="8" x="50" y="12"></rect>
                              <rect fill="currentColor" height="8" width="8" x="42" y="24"></rect>
                              <rect fill="currentColor" height="8" width="8" x="8" y="42"></rect>
                              <rect fill="currentColor" height="8" width="8" x="22" y="48"></rect>
                              <rect fill="currentColor" height="24" rx="2" width="24" x="38" y="40"></rect>
                              <circle cx="50" cy="52" fill="white" r="6"></circle>
                              <rect fill="currentColor" height="8" width="8" x="70" y="42"></rect>
                              <rect fill="currentColor" height="8" width="8" x="84" y="54"></rect>
                              <rect fill="currentColor" height="8" width="8" x="40" y="72"></rect>
                              <rect fill="currentColor" height="8" width="8" x="54" y="80"></rect>
                              <rect fill="currentColor" height="8" width="8" x="72" y="72"></rect>
                              <rect fill="currentColor" height="8" width="8" x="84" y="84"></rect>
                            </svg>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-code-num text-label-sm text-on-surface font-semibold">
                              RFID-UHF-915-00441
                            </span>
                            <span className="text-outline text-[11px]">Tần số UHF EPC Class1 Gen2</span>
                          </div>
                        </div>
                      </div>
                      {/* Bóc tách chi tiết nguồn đóng góp của Nhà Hảo Tâm */}
                      <div className="bg-surface-container-low space-y-2.5 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wider uppercase">
                            Bóc Tách Nguồn Đóng Góp
                          </span>
                          <span className="bg-surface-container-high text-primary font-code-num rounded px-2 py-0.5 text-[11px] font-semibold">
                            #DON-2024-8842
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary-fixed text-on-primary-fixed text-headline-sm flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-bold">
                            VN
                          </div>
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface font-bold">
                              Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT)
                            </span>
                            <p className="font-body-sm text-on-surface-variant mt-0.5 text-[12px]">
                              Tài trợ theo khuôn khổ chương trình "Sóng và Máy tính cho Em" đợt 6. Bàn giao nguyên kiện
                              vào kho ngày 02/11/2024. Đã đối soát thuế và cấp chứng nhận đóng góp xã hội.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Kết Quả Thẩm Định Kỹ Thuật (Grade A Details) */}
                      <div className="space-y-3">
                        <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wider uppercase">
                          Kết Quả Thẩm Định Kỹ Thuật (Grade A)
                        </span>
                        <div className="text-body-sm font-body-sm grid grid-cols-2 gap-2">
                          <div className="bg-surface-container flex items-center gap-2 rounded-xl p-2.5">
                            <span className="material-symbols-outlined text-tertiary shrink-0 text-[18px]">
                              check_circle
                            </span>
                            <div className="flex min-w-0 flex-col">
                              <span className="text-outline truncate text-[11px]">Màn hình 15.6" FHD</span>
                              <span className="text-on-surface truncate font-semibold">IPS Sáng rõ 100%</span>
                            </div>
                          </div>
                          <div className="bg-surface-container flex items-center gap-2 rounded-xl p-2.5">
                            <span className="material-symbols-outlined text-tertiary shrink-0 text-[18px]">
                              battery_charging_full
                            </span>
                            <div className="flex min-w-0 flex-col">
                              <span className="text-outline truncate text-[11px]">Tình trạng Pin</span>
                              <span className="text-on-surface truncate font-semibold">Zin 94% (5h30p)</span>
                            </div>
                          </div>
                          <div className="bg-surface-container flex items-center gap-2 rounded-xl p-2.5">
                            <span className="material-symbols-outlined text-tertiary shrink-0 text-[18px]">memory</span>
                            <div className="flex min-w-0 flex-col">
                              <span className="text-outline truncate text-[11px]">Ổ Cứng SSD NVMe</span>
                              <span className="text-on-surface truncate font-semibold">256GB Mới 100%</span>
                            </div>
                          </div>
                          <div className="bg-surface-container flex items-center gap-2 rounded-xl p-2.5">
                            <span className="material-symbols-outlined text-tertiary shrink-0 text-[18px]">
                              keyboard
                            </span>
                            <div className="flex min-w-0 flex-col">
                              <span className="text-outline truncate text-[11px]">Bàn phím &amp; Touchpad</span>
                              <span className="text-on-surface truncate font-semibold">Nguyên bản 100%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* VỊ TRÍ KỆ LƯU TRỮ (RBAC TĨNH: CHỈ XEM) */}
                      <div className="bg-surface-container-high/60 space-y-2 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-secondary text-[18px]">shelves</span>
                            <span className="font-label-md text-label-md text-on-surface font-bold">
                              Vị Trí Kệ Lưu Trữ Hiện Tại
                            </span>
                          </div>
                          <span className="bg-secondary-fixed text-on-secondary-fixed font-label-sm ml-2 shrink-0 rounded px-2 py-0.5 text-[11px] font-bold uppercase">
                            Chỉ Xem (Read-only)
                          </span>
                        </div>
                        {/* Static Shelf Coordinate Display */}
                        <div className="bg-surface-container-lowest flex items-center justify-between rounded-xl p-3">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary-fixed text-on-primary-fixed font-code-num text-headline-sm flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold">
                              A2
                            </div>
                            <div className="flex min-w-0 flex-col">
                              <span className="font-headline-sm text-body-lg text-on-surface truncate font-bold">
                                Dãy A2 • Kệ Tầng 04 (Ô 12)
                              </span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                                Kho Tổng Miền Bắc (HUB-01 Hà Nội)
                              </span>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-outline ml-2 shrink-0 text-[22px]">lock</span>
                        </div>
                        {/* RBAC DOCUMENT_41 Compliance Notice */}
                        <div className="bg-surface-container text-on-surface-variant flex items-start gap-2 rounded-lg p-2.5">
                          <span className="material-symbols-outlined text-outline mt-0.5 shrink-0 text-[16px]">
                            info
                          </span>
                          <p className="font-body-sm text-[11px] leading-relaxed">
                            <strong>Theo phân quyền hệ thống (DOCUMENT_41):</strong> Cổng Nhà Kho chỉ hiển thị toạ độ vị
                            trí kệ định danh để phục vụ thao tác lấy máy đóng gói. Quyền tạo mới hoặc di dời cấu trúc kệ
                            do Trưởng Ban Vận Hành Trung Ương phê duyệt.
                          </p>
                        </div>
                      </div>
                      {/* Trạng Thái Điều Phối & Phân Bổ (Admin Authority Rule) */}
                      <div className="bg-surface-container-low space-y-2 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wider uppercase">
                            Trạng Thái Điều Phối Dự Án
                          </span>
                          <span className="bg-secondary-container text-on-secondary-container font-label-sm ml-2 shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold">
                            Chờ Phương Án Admin
                          </span>
                        </div>
                        <p className="font-body-sm text-on-surface-variant text-[12px]">
                          Thiết bị chưa gán đến điểm trường cụ thể. Ghép tồn kho và kích hoạt lệnh xuất kho thuộc thẩm
                          quyền của Admin Tổng trên hệ thống phê duyệt.
                        </p>
                      </div>
                      {/* Bottom Actions */}
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <button className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 transition-colors">
                          <span className="material-symbols-outlined text-[18px]">history</span>
                          <span className="">Lịch Sử Kiểm Định</span>
                        </button>
                        <button className="bg-primary text-on-primary hover:bg-surface-tint font-label-md text-label-md flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 shadow-sm transition-colors">
                          <span className="material-symbols-outlined text-[18px]">qr_code</span>
                          <span className="">In Tem Mã Dán Máy</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Khối Quy Định Kiểm Toán Tồn Kho (Kho Logistics Standard) */}
                  <div className="bg-surface-container-lowest space-y-3 rounded-2xl p-5 shadow-sm">
                    <div className="text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">policy</span>
                      <h4 className="font-headline-sm text-headline-sm font-bold">
                        Quy Chuẩn Kiểm Toán &amp; Bảo Quản
                      </h4>
                    </div>
                    <ul className="text-body-sm text-body-sm text-on-surface-variant space-y-2.5">
                      <li className="flex items-start gap-2.5">
                        <span className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full"></span>
                        <span className="">
                          <strong>Kiểm đếm thực tế:</strong> Nhân viên kho chỉ ghi nhận tình trạng vật lý (trầy xước,
                          nứt vỡ, cạn pin), không được can thiệp vào tình trạng tài sản trên hệ thống sổ cái.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full"></span>
                        <span className="">
                          <strong>Nguyên tắc Một Chiều:</strong> Bất kỳ thao tác chuyển vị trí trong kho phải được quét
                          qua cổng RFID Barcode Scanner để duy trì tính toàn vẹn của chuỗi minh bạch EduShare Ledger.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="bg-error mt-2 h-1.5 w-1.5 shrink-0 rounded-full"></span>
                        <span className="">
                          <strong>Quy chuẩn tồn &gt; 45 ngày:</strong> Sau 45 ngày lưu kho không có lệnh xuất, hệ thống
                          tự động gắn cờ báo động để Ban Điều Phối ưu tiên điều chuyển chi viện các điểm trường vùng
                          cao.
                        </span>
                      </li>
                    </ul>
                    <div className="text-outline font-code-num flex items-center justify-between pt-2 text-[11px]">
                      <span className="">Tiêu chuẩn ISO 27001 / EduLedger v2.8</span>
                      <span className="">Kho vận số #HUB-01-HN</span>
                    </div>
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

export default WarehouseInventoryPage;
