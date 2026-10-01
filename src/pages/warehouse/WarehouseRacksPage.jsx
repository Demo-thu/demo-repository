import { Link } from "react-router-dom";

const WarehouseRacksPage = () => {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface flex min-h-screen flex-col antialiased">
      <aside className="bg-surface-container-lowest fixed top-0 left-0 z-50 flex h-full w-72 flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] select-none">
        <div className="flex flex-col">
          <div className="bg-surface-container-low flex items-center gap-2 px-4 py-6">
            <div className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
              <span className="material-symbols-outlined text-on-primary text-[22px]">inventory_2</span>
            </div>
            <div className="flex min-w-0 flex-col">
              <div className="flex items-center gap-1">
                <span className="font-headline-sm text-headline-sm text-on-surface truncate font-bold tracking-tight">
                  EduShare VN
                </span>
                <span className="bg-primary-fixed text-on-primary-fixed rounded px-1.5 py-0.5 text-[10px] font-bold">
                  HUB-01
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-primary truncate font-semibold tracking-wider uppercase">
                Kho &amp; Kỹ Thuật
              </span>
            </div>
          </div>
          <div className="bg-surface-container-lowest flex items-center justify-between px-4 py-1">
            <div className="flex items-center gap-1.5">
              <span className="bg-tertiary-container h-2 w-2 animate-pulse rounded-full"></span>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Hệ thống toàn quốc</span>
            </div>
            <span className="font-label-sm text-label-sm text-tertiary font-semibold">63 Tỉnh Thành</span>
          </div>
          <div className="h-[calc(100vh-210px)] overflow-y-auto px-2 py-2">
            <nav className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <div className="font-label-sm text-label-sm text-outline px-2 py-1 font-bold tracking-wider uppercase">
                  Nhập Kho &amp; Tiếp Nhận
                </div>
                <Link
                  className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                  to="/warehouse/receive"
                >
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                  <span className="font-body-md text-body-md">Tiếp nhận &amp; Kiểm định</span>
                </Link>
                <Link
                  className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                  to="/warehouse/scan-qr"
                >
                  <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                  <span className="font-body-md text-body-md">Quét QR phân luồng</span>
                </Link>
                <Link
                  className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                  to="/warehouse/donation-receipt"
                >
                  <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
                  <span className="font-body-md text-body-md">Phiếu trao tặng</span>
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-label-sm text-label-sm text-outline px-2 py-1 font-bold tracking-wider uppercase">
                  Quản Lý Kho Bãi
                </div>
                <Link
                  className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                  to="/warehouse/inventory"
                >
                  <span className="material-symbols-outlined text-[20px]">shelves</span>
                  <span className="font-body-md text-body-md">Tồn kho thiết bị</span>
                </Link>
                <Link
                  className="bg-primary-container text-on-primary-container flex items-center justify-between rounded-lg px-2 py-2 font-semibold shadow-sm transition-colors"
                  to="/warehouse/racks"
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-on-primary-container text-[20px]">grid_view</span>
                    <span className="font-body-md text-body-md text-on-primary-container font-semibold">
                      Vị trí kệ định danh
                    </span>
                  </div>
                  <span className="bg-surface-container-lowest text-primary rounded px-1.5 py-0.5 text-[10px] font-bold shadow-sm">
                    Chỉ xem
                  </span>
                </Link>
                <Link
                  className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                  to="/warehouse/audit-report"
                >
                  <span className="material-symbols-outlined text-[20px]">fact_check</span>
                  <span className="font-body-md text-body-md">Kiểm kê &amp; Báo cáo</span>
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-label-sm text-label-sm text-outline px-2 py-1 font-bold tracking-wider uppercase">
                  Điều Phối &amp; Vận Chuyển
                </div>
                <Link
                  className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                  to="/warehouse/dispatch"
                >
                  <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                  <span className="font-body-md text-body-md">Lệnh điều chuyển &amp; Vận đơn</span>
                </Link>
                <Link
                  className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                  to="/warehouse/delivery-history"
                >
                  <span className="material-symbols-outlined text-[20px]">history</span>
                  <span className="font-body-md text-body-md">Lịch sử đợt giao</span>
                </Link>
                <Link
                  className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                  to="/warehouse/incident-report"
                >
                  <span className="material-symbols-outlined text-[20px]">report_problem</span>
                  <span className="font-body-md text-body-md">Báo cáo sự cố kho</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <div className="bg-surface-container-low flex flex-col gap-1 p-2">
          <div className="text-on-surface-variant flex items-center justify-between px-1">
            <span className="font-body-sm text-body-sm">Phiên bản</span>
            <span className="font-code-num text-code-num text-secondary font-semibold">v2.8.4-PROD</span>
          </div>
          <div className="text-on-surface-variant flex items-center justify-between px-1">
            <span className="font-body-sm text-body-sm">Kỹ thuật kho</span>
            <a className="font-code-num text-code-num text-primary font-bold hover:underline" href="tel:19006829">
              1900 6829
            </a>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col pl-72">
        <header className="bg-surface/90 fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between px-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="flex max-w-xl min-w-0 flex-1 items-center gap-4">
            <div className="text-on-surface-variant font-label-md text-label-md flex shrink-0 items-center gap-1.5">
              <span className="hover:text-primary cursor-pointer transition-colors">EduShare VN Kho</span>
              <span className="material-symbols-outlined text-outline-variant text-[16px]">chevron_right</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Quản Lý Kho Bãi</span>
              <span className="material-symbols-outlined text-outline-variant text-[16px]">chevron_right</span>
              <span className="text-on-surface truncate font-semibold">Vị Trí Kệ Định Danh</span>
            </div>
            <div className="relative hidden max-w-md flex-1 xl:block">
              <span className="material-symbols-outlined text-outline absolute top-1/2 left-3 -translate-y-1/2 text-[18px]">
                search
              </span>
              <input
                className="bg-surface-container-lowest text-body-sm font-body-sm text-on-surface placeholder:text-outline focus:ring-primary w-full rounded-lg border-0 py-1.5 pr-3 pl-9 shadow-[0_1px_4px_rgba(0,0,0,0.04)] focus:ring-2 focus:outline-none"
                placeholder="Tra cứu mã vận đơn, số lô hàng, serial hoặc vị trí kệ (vd: Kệ A2, Ô 12)..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <button
                className="bg-surface-container hover:bg-surface-container-high text-on-surface flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
                title="Quét nhanh QR"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">barcode_scanner</span>
              </button>
              <button
                className="bg-surface-container hover:bg-surface-container-high text-on-surface relative flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
                title="Thông báo hệ thống"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">notifications</span>
                <span className="bg-error ring-surface absolute top-1.5 right-1.5 h-2 w-2 rounded-full ring-2"></span>
              </button>
              <button
                className="bg-surface-container hover:bg-surface-container-high text-on-surface flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
                title="Trợ giúp &amp; Tài liệu quy trình"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">help_outline</span>
              </button>
            </div>
            <div className="border-outline-variant/30 flex items-center gap-2 border-l pl-2">
              <div className="flex hidden flex-col text-right sm:flex">
                <div className="flex items-center justify-end gap-1">
                  <span className="font-label-md text-label-md text-on-surface truncate font-semibold">Trần Hùng</span>
                  <span className="font-code-num text-primary bg-primary-fixed rounded px-1 text-[11px] font-bold">
                    (TK-MB-04)
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Trưởng Kho Kỹ Thuật • HUB-01 Hà Nội
                </span>
              </div>
              <div className="bg-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-surface relative min-h-screen w-full flex-1 pt-16">
          <div className="flex w-full flex-col">
            <div className="mx-auto flex w-full max-w-[1720px] flex-col gap-6 px-8 py-6">
              {/* Header Section & Subheader */}
              <div className="flex flex-col justify-between gap-4 pb-1 xl:flex-row xl:items-center">
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 tracking-wide">
                      <span className="bg-primary h-1.5 w-1.5 rounded-full"></span>
                      KHO TỔNG MIỀN BẮC (HUB-01 HÀ NỘI) • QUY CHUẨN ISO-LOGISTICS 2024
                    </span>
                    <span className="bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2.5 py-1">
                      <span className="material-symbols-outlined text-[14px]">lock</span>
                      CHẾ ĐỘ CHỈ XEM (READ-ONLY RACK MATRIX) - RBAC v2.8.4
                    </span>
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                    Bản Đồ Vị Trí Kệ Định Danh &amp; Khay Lưu Trữ
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-4xl">
                    Sơ đồ trực quan hệ thống kệ phân tầng, mã khay định danh phục vụ định vị thiết bị nhập kho, kiểm
                    định và soạn hàng theo lệnh điều phối đã duyệt của Admin Tổng.
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-2.5 self-start xl:self-center">
                  <button
                    className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md inline-flex items-center gap-2 rounded-lg px-4 py-2 shadow-sm transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-primary text-[18px]">download</span>
                    Xuất Sơ Đồ Kệ (.pdf/.xlsx)
                  </button>
                  <button
                    className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md inline-flex items-center gap-2 rounded-lg px-4 py-2 shadow-sm transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-primary text-[18px]">qr_code_scanner</span>
                    Quét Barcode / RFID Tra Cứu
                  </button>
                  <button
                    className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md inline-flex items-center gap-2 rounded-lg px-4 py-2 shadow-sm transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">print</span>
                    In Tem Mã Kệ Đồng Loạt
                  </button>
                </div>
              </div>

              {/* Bento 4 Metric KPI Cards */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {/* Card 1 */}
                <div className="bg-surface-container-lowest relative flex flex-col justify-between gap-4 overflow-hidden rounded-xl p-6 shadow-sm">
                  <div className="bg-primary/5 pointer-events-none absolute -right-4 -bottom-4 h-28 w-28 rounded-full"></div>
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
                        Tổng Sức Chứa Kho
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg text-on-surface font-bold">24 Kệ</span>
                        <span className="font-headline-md text-headline-md text-secondary">/ 192 Ô Khay</span>
                      </div>
                    </div>
                    <div className="bg-primary-fixed text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[22px]">warehouse</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-2">
                    <div className="text-body-sm font-body-sm flex items-center justify-between">
                      <span className="text-on-surface-variant">Tải trọng sử dụng</span>
                      <span className="font-code-num text-code-num text-primary font-semibold">81.2% công suất</span>
                    </div>
                    <div className="bg-surface-container-highest h-1.5 w-full overflow-hidden rounded-full">
                      <div className="bg-primary h-full rounded-full" style={{ width: "81.2%" }}></div>
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="bg-surface-container-lowest relative flex flex-col justify-between gap-4 overflow-hidden rounded-xl p-6 shadow-sm">
                  <div className="bg-tertiary/5 pointer-events-none absolute -right-4 -bottom-4 h-28 w-28 rounded-full"></div>
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
                        Thiết Bị Đang Định Danh Kệ
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg text-on-surface font-bold">3,420</span>
                        <span className="font-body-md text-body-md text-on-surface-variant">thiết bị</span>
                      </div>
                    </div>
                    <div className="bg-tertiary-fixed text-tertiary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[22px]">qr_code_2</span>
                    </div>
                  </div>
                  <div className="text-body-sm font-body-sm text-tertiary flex items-center gap-2 pt-2 font-medium">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span className="">100% gắn mã QR/RFID chuẩn vị trí</span>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="bg-surface-container-lowest relative flex flex-col justify-between gap-4 overflow-hidden rounded-xl p-6 shadow-sm">
                  <div className="bg-primary-container/5 pointer-events-none absolute -right-4 -bottom-4 h-28 w-28 rounded-full"></div>
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
                        Khu Vực Đang Chọn
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg text-primary font-bold">Khu A - Kệ A2</span>
                      </div>
                    </div>
                    <div className="bg-surface-container-high text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[22px]">shelves</span>
                    </div>
                  </div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant flex items-center justify-between pt-2">
                    <span className="">Laptop &amp; Linh kiện kiểm định</span>
                    <span className="font-code-num text-code-num text-on-surface font-semibold">16/16 Ô lưu</span>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="bg-surface-container-lowest relative flex flex-col justify-between gap-4 overflow-hidden rounded-xl p-6 shadow-sm">
                  <div className="bg-secondary/5 pointer-events-none absolute -right-4 -bottom-4 h-28 w-28 rounded-full"></div>
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
                        Ràng Buộc Thẩm Quyền (RBAC)
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-headline-sm text-headline-sm text-secondary font-bold">Khóa Sửa Kệ</span>
                        <span className="material-symbols-outlined text-secondary text-[18px]">lock_outline</span>
                      </div>
                    </div>
                    <div className="bg-surface-container-highest text-secondary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[22px]">admin_panel_settings</span>
                    </div>
                  </div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant pt-2 leading-tight">
                    Chỉ Admin Tổng có quyền quy hoạch cấu trúc; Kho chỉ tra cứu vị trí lấy hàng.
                  </div>
                </div>
              </div>

              {/* MAIN WORKSPACE: Split 7/12 & 5/12 */}
              <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-12">
                {/* LEFT COLUMN: Rack Matrix Visualizer (7/12) */}
                <div className="flex flex-col gap-4 xl:col-span-7">
                  {/* Zone Tabs Navigation */}
                  <div className="bg-surface-container-low flex items-center gap-2 overflow-x-auto rounded-xl p-1">
                    <button
                      className="bg-surface-container-lowest text-primary font-label-md text-label-md inline-flex shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 font-semibold shadow-sm transition-all"
                      type="button"
                    >
                      <span className="bg-primary h-2 w-2 rounded-full"></span>
                      Khu A: Laptop &amp; Tablet (Kệ A1 - A6)
                    </button>
                    <button
                      className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md inline-flex shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 transition-all"
                      type="button"
                    >
                      <span className="bg-outline-variant h-2 w-2 rounded-full"></span>
                      Khu B: PC &amp; Màn Hình (Kệ B1 - B6)
                    </button>
                    <button
                      className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md inline-flex shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 transition-all"
                      type="button"
                    >
                      <span className="bg-outline-variant h-2 w-2 rounded-full"></span>
                      Khu C: Thiết Bị Mạng (Kệ C1 - C6)
                    </button>
                    <button
                      className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md inline-flex shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 transition-all"
                      type="button"
                    >
                      <span className="bg-outline-variant h-2 w-2 rounded-full"></span>
                      Khu D: Sách &amp; Vật Phẩm (Kệ D1 - D6)
                    </button>
                  </div>

                  {/* Interactive Rack Matrix Board */}
                  <div className="bg-surface-container-lowest flex flex-col gap-4 rounded-xl p-6 shadow-sm">
                    {/* Rack Info Bar */}
                    <div className="bg-surface-container-low flex flex-col justify-between gap-3 rounded-xl p-4 md:flex-row md:items-center">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="font-code-num text-code-num text-on-primary bg-primary rounded px-2 py-0.5 font-bold">
                            RACK-MB-A2
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Kệ Chuyên Dụng A2
                          </span>
                          <span className="bg-tertiary-fixed text-on-tertiary-fixed rounded px-2 py-0.5 text-[11px] font-semibold">
                            Đang Hoạt Động
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Chủng loại: Laptop Giáo Dục &amp; SSD Nâng Cấp • Tải trọng an toàn: 850kg
                        </span>
                      </div>
                      <div className="text-body-sm font-body-sm flex shrink-0 items-center gap-4">
                        <div className="text-on-surface-variant flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-tertiary text-[18px]">thermostat</span>
                          <span className="">22.4°C</span>
                        </div>
                        <div className="text-on-surface-variant flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[18px]">
                            humidity_percentage
                          </span>
                          <span className="">52% RH</span>
                        </div>
                        <div className="text-on-surface-variant flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-secondary text-[18px]">weight</span>
                          <span className="font-code-num text-code-num">640 / 850 kg</span>
                        </div>
                      </div>
                    </div>

                    {/* Color Coding Legend */}
                    <div className="text-label-sm font-label-sm flex flex-wrap items-center justify-between gap-2 py-1">
                      <span className="text-outline tracking-wider uppercase">Trạng thái ô khay:</span>
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <span className="bg-tertiary h-3 w-3 rounded-full"></span>
                          <span className="text-on-surface-variant">Đạt chuẩn sẵn sàng xuất</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="bg-primary h-3 w-3 rounded-full"></span>
                          <span className="text-on-surface-variant">Đang kiểm định / Nâng cấp</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="bg-secondary-fixed-dim h-3 w-3 rounded-full"></span>
                          <span className="text-on-surface-variant">Chờ đối soát tiếp nhận</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="bg-surface-container-highest h-3 w-3 rounded-full"></span>
                          <span className="text-on-surface-variant">Ô khay còn trống</span>
                        </div>
                      </div>
                    </div>

                    {/* Physical Rack Structure Visualizer (4 Tầng x 4 Ô) */}
                    <div className="bg-surface-container flex flex-col gap-3 rounded-xl p-4">
                      {/* Tầng 04 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between px-1">
                          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5 font-bold tracking-wider uppercase">
                            <span className="material-symbols-outlined text-primary text-[16px]">layers</span>
                            TẦNG 04 (Tải trọng tầng: 120/200 kg)
                          </span>
                          <span className="font-code-num text-secondary text-[11px]">
                            Vị trí cao - Cần thang cơ khí
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
                          {/* Ô 13 */}
                          <div className="bg-surface-container-lowest hover:bg-surface-container-high flex cursor-pointer flex-col gap-1.5 rounded-lg p-3 shadow-sm transition-all">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num text-on-surface font-bold">Ô A2-13</span>
                              <span className="bg-tertiary h-2.5 w-2.5 rounded-full" title="Đạt chuẩn"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              25 HP ProBook 440 G5
                            </span>
                            <div className="font-code-num text-secondary flex items-center justify-between text-[11px]">
                              <span className="">Lô: #DON-8810</span>
                              <span className="text-tertiary font-semibold">100%</span>
                            </div>
                          </div>
                          {/* Ô 14 */}
                          <div className="bg-surface-container-lowest hover:bg-surface-container-high flex cursor-pointer flex-col gap-1.5 rounded-lg p-3 shadow-sm transition-all">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num text-on-surface font-bold">Ô A2-14</span>
                              <span className="bg-primary h-2.5 w-2.5 rounded-full" title="Đang kiểm tra"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              18 Dell Latitude 7490
                            </span>
                            <div className="font-code-num text-secondary flex items-center justify-between text-[11px]">
                              <span className="">Lô: #DON-8824</span>
                              <span className="text-primary font-semibold">75%</span>
                            </div>
                          </div>
                          {/* Ô 15 */}
                          <div className="bg-surface-container-lowest hover:bg-surface-container-high flex cursor-pointer flex-col gap-1.5 rounded-lg p-3 shadow-sm transition-all">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num text-on-surface font-bold">Ô A2-15</span>
                              <span
                                className="bg-secondary-fixed-dim h-2.5 w-2.5 rounded-full"
                                title="Mới tiếp nhận"
                              ></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              20 Asus Vivobook X409
                            </span>
                            <div className="font-code-num text-secondary flex items-center justify-between text-[11px]">
                              <span className="">Lô: #DON-8833</span>
                              <span className="text-secondary font-semibold">80%</span>
                            </div>
                          </div>
                          {/* Ô 16 */}
                          <div className="bg-surface-container-highest/60 hover:bg-surface-container-highest flex cursor-pointer flex-col gap-1.5 rounded-lg p-3 transition-all">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num text-outline font-bold">Ô A2-16</span>
                              <span className="bg-outline-variant h-2.5 w-2.5 rounded-full" title="Trống"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-outline italic">Khay còn trống</span>
                            <div className="font-code-num text-outline flex items-center justify-between text-[11px]">
                              <span className="">Sức chứa: 30 máy</span>
                              <span className="">0%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tầng 03 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between px-1">
                          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5 font-bold tracking-wider uppercase">
                            <span className="material-symbols-outlined text-primary text-[16px]">layers</span>
                            TẦNG 03 (Tải trọng tầng: 185/220 kg)
                          </span>
                          <span className="font-code-num text-secondary text-[11px]">Tầng trọng tâm thao tác</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
                          {/* Ô 09 */}
                          <div className="bg-surface-container-lowest hover:bg-surface-container-high flex cursor-pointer flex-col gap-1.5 rounded-lg p-3 shadow-sm transition-all">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num text-on-surface font-bold">Ô A2-09</span>
                              <span className="bg-tertiary h-2.5 w-2.5 rounded-full"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              30 Lenovo L480
                            </span>
                            <div className="font-code-num text-secondary flex items-center justify-between text-[11px]">
                              <span className="">Lô: #DON-8790</span>
                              <span className="text-tertiary font-semibold">100%</span>
                            </div>
                          </div>
                          {/* Ô 10 */}
                          <div className="bg-surface-container-lowest hover:bg-surface-container-high flex cursor-pointer flex-col gap-1.5 rounded-lg p-3 shadow-sm transition-all">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num text-on-surface font-bold">Ô A2-10</span>
                              <span className="bg-tertiary h-2.5 w-2.5 rounded-full"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              28 ThinkPad X270
                            </span>
                            <div className="font-code-num text-secondary flex items-center justify-between text-[11px]">
                              <span className="">Lô: #DON-8802</span>
                              <span className="text-tertiary font-semibold">95%</span>
                            </div>
                          </div>
                          {/* Ô 11 */}
                          <div className="bg-surface-container-lowest hover:bg-surface-container-high flex cursor-pointer flex-col gap-1.5 rounded-lg p-3 shadow-sm transition-all">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num text-on-surface font-bold">Ô A2-11</span>
                              <span className="bg-primary h-2.5 w-2.5 rounded-full"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              24 Acer Aspire 5 A514
                            </span>
                            <div className="font-code-num text-secondary flex items-center justify-between text-[11px]">
                              <span className="">Lô: #DON-8818</span>
                              <span className="text-primary font-semibold">80%</span>
                            </div>
                          </div>
                          {/* Ô 12 (ACTIVE / HIGHLIGHTED) */}
                          <div className="bg-primary-fixed text-on-primary-fixed flex scale-[1.02] transform cursor-pointer flex-col gap-1.5 rounded-lg p-3 shadow-md transition-all">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-primary text-[16px]">stars</span>
                                <span className="font-code-num text-code-num text-primary font-bold">Ô A2-12</span>
                              </div>
                              <span className="py-0.2 bg-primary text-on-primary rounded px-1.5 text-[10px] font-bold tracking-wider uppercase">
                                ĐANG CHỌN
                              </span>
                            </div>
                            <span className="font-headline-sm text-on-primary-fixed line-clamp-1 text-[13px] font-bold">
                              30 ThinkPad T480s (FPT)
                            </span>
                            <div className="font-code-num text-primary flex items-center justify-between text-[11px]">
                              <span className="">Lệnh: Mường Lát</span>
                              <span className="font-bold">100% CÔNG SUẤT</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tầng 02 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between px-1">
                          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5 font-bold tracking-wider uppercase">
                            <span className="material-symbols-outlined text-primary text-[16px]">layers</span>
                            TẦNG 02 (Tải trọng tầng: 195/240 kg)
                          </span>
                          <span className="font-code-num text-secondary text-[11px]">Tầng tiếp nhận nhanh</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
                          {/* Ô 05 */}
                          <div className="bg-surface-container-lowest hover:bg-surface-container-high flex cursor-pointer flex-col gap-1.5 rounded-lg p-3 shadow-sm transition-all">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num text-on-surface font-bold">Ô A2-05</span>
                              <span className="bg-tertiary h-2.5 w-2.5 rounded-full"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              26 Dell Vostro 3400
                            </span>
                            <div className="font-code-num text-secondary flex items-center justify-between text-[11px]">
                              <span className="">Lô: #DON-8755</span>
                              <span className="text-tertiary font-semibold">90%</span>
                            </div>
                          </div>
                          {/* Ô 06 */}
                          <div className="bg-surface-container-lowest hover:bg-surface-container-high flex cursor-pointer flex-col gap-1.5 rounded-lg p-3 shadow-sm transition-all">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num text-on-surface font-bold">Ô A2-06</span>
                              <span className="bg-primary h-2.5 w-2.5 rounded-full"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              20 HP EliteBook 840
                            </span>
                            <div className="font-code-num text-secondary flex items-center justify-between text-[11px]">
                              <span className="">Lô: #DON-8761</span>
                              <span className="text-primary font-semibold">70%</span>
                            </div>
                          </div>
                          {/* Ô 07 */}
                          <div className="bg-surface-container-lowest hover:bg-surface-container-high flex cursor-pointer flex-col gap-1.5 rounded-lg p-3 shadow-sm transition-all">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num text-on-surface font-bold">Ô A2-07</span>
                              <span className="bg-secondary-fixed-dim h-2.5 w-2.5 rounded-full"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              15 Macbook Air 2017
                            </span>
                            <div className="font-code-num text-secondary flex items-center justify-between text-[11px]">
                              <span className="">Lô: #DON-8809</span>
                              <span className="text-secondary font-semibold">50%</span>
                            </div>
                          </div>
                          {/* Ô 08 */}
                          <div className="bg-surface-container-lowest hover:bg-surface-container-high flex cursor-pointer flex-col gap-1.5 rounded-lg p-3 shadow-sm transition-all">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num text-on-surface font-bold">Ô A2-08</span>
                              <span className="bg-tertiary h-2.5 w-2.5 rounded-full"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              32 Fujitsu Lifebook
                            </span>
                            <div className="font-code-num text-secondary flex items-center justify-between text-[11px]">
                              <span className="">Lô: #DON-8780</span>
                              <span className="text-tertiary font-semibold">100%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* TẦNG 01 (SÀN KỆ) */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between px-1">
                          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5 font-bold tracking-wider uppercase">
                            <span className="material-symbols-outlined text-primary text-[16px]">layers</span>
                            TẦNG 01 (SÀN KỆ) (Tải trọng tầng: 210/250 kg)
                          </span>
                          <span className="font-code-num text-secondary text-[11px]">
                            Hàng nặng / Thùng sạc lưu động
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
                          {/* Ô 01 */}
                          <div className="bg-surface-container-lowest hover:bg-surface-container-high flex cursor-pointer flex-col gap-1.5 rounded-lg p-3 shadow-sm transition-all">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num text-on-surface font-bold">Ô A2-01</span>
                              <span className="bg-tertiary h-2.5 w-2.5 rounded-full"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              8 Thùng Sạc Di Động 30 Cổng
                            </span>
                            <div className="font-code-num text-secondary flex items-center justify-between text-[11px]">
                              <span className="">Lô: #ACC-8012</span>
                              <span className="text-tertiary font-semibold">100%</span>
                            </div>
                          </div>
                          {/* Ô 02 */}
                          <div className="bg-surface-container-lowest hover:bg-surface-container-high flex cursor-pointer flex-col gap-1.5 rounded-lg p-3 shadow-sm transition-all">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num text-on-surface font-bold">Ô A2-02</span>
                              <span className="bg-tertiary h-2.5 w-2.5 rounded-full"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              120 Bộ Sạc Nguồn Type-C
                            </span>
                            <div className="font-code-num text-secondary flex items-center justify-between text-[11px]">
                              <span className="">Lô: #ACC-8019</span>
                              <span className="text-tertiary font-semibold">95%</span>
                            </div>
                          </div>
                          {/* Ô 03 */}
                          <div className="bg-surface-container-lowest hover:bg-surface-container-high flex cursor-pointer flex-col gap-1.5 rounded-lg p-3 shadow-sm transition-all">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num text-on-surface font-bold">Ô A2-03</span>
                              <span className="bg-primary h-2.5 w-2.5 rounded-full"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              45 Pin Dự Phòng Laptop
                            </span>
                            <div className="font-code-num text-secondary flex items-center justify-between text-[11px]">
                              <span className="">Lô: #BAT-9002</span>
                              <span className="text-primary font-semibold">75%</span>
                            </div>
                          </div>
                          {/* Ô 04 */}
                          <div className="bg-surface-container-lowest hover:bg-surface-container-high flex cursor-pointer flex-col gap-1.5 rounded-lg p-3 shadow-sm transition-all">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num text-on-surface font-bold">Ô A2-04</span>
                              <span className="bg-tertiary h-2.5 w-2.5 rounded-full"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              50 Ram DDR4 &amp; SSD 256GB
                            </span>
                            <div className="font-code-num text-secondary flex items-center justify-between text-[11px]">
                              <span className="">Lô: #RAM-3341</span>
                              <span className="text-tertiary font-semibold">100%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Rack Switcher Strip */}
                    <div className="flex flex-col gap-2 pt-2">
                      <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
                        Chuyển nhanh các kệ trong Khu A:
                      </span>
                      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                        <div className="bg-surface-container hover:bg-surface-container-high flex cursor-pointer flex-col gap-1 rounded-lg p-2.5 text-center transition-all">
                          <span className="font-code-num text-code-num text-on-surface font-bold">Kệ A1</span>
                          <span className="text-on-surface-variant text-[11px]">14/16 Ô</span>
                          <div className="bg-surface-container-highest h-1 w-full overflow-hidden rounded-full">
                            <div className="bg-tertiary h-full rounded-full" style={{ width: "87%" }}></div>
                          </div>
                        </div>
                        <div className="bg-primary-container text-on-primary-container flex cursor-default flex-col gap-1 rounded-lg p-2.5 text-center shadow-sm">
                          <span className="font-code-num text-code-num font-bold">Kệ A2 (Đang xem)</span>
                          <span className="text-[11px] font-medium opacity-90">15/16 Ô</span>
                          <div className="bg-primary/30 h-1 w-full overflow-hidden rounded-full">
                            <div
                              className="bg-surface-container-lowest h-full rounded-full"
                              style={{ width: "94%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="bg-surface-container hover:bg-surface-container-high flex cursor-pointer flex-col gap-1 rounded-lg p-2.5 text-center transition-all">
                          <span className="font-code-num text-code-num text-on-surface font-bold">Kệ A3</span>
                          <span className="text-on-surface-variant text-[11px]">12/16 Ô</span>
                          <div className="bg-surface-container-highest h-1 w-full overflow-hidden rounded-full">
                            <div className="bg-tertiary h-full rounded-full" style={{ width: "75%" }}></div>
                          </div>
                        </div>
                        <div className="bg-surface-container hover:bg-surface-container-high flex cursor-pointer flex-col gap-1 rounded-lg p-2.5 text-center transition-all">
                          <span className="font-code-num text-code-num text-on-surface font-bold">Kệ A4</span>
                          <span className="text-on-surface-variant text-[11px]">16/16 Ô</span>
                          <div className="bg-surface-container-highest h-1 w-full overflow-hidden rounded-full">
                            <div className="bg-tertiary h-full rounded-full" style={{ width: "100%" }}></div>
                          </div>
                        </div>
                        <div className="bg-surface-container hover:bg-surface-container-high flex cursor-pointer flex-col gap-1 rounded-lg p-2.5 text-center transition-all">
                          <span className="font-code-num text-code-num text-on-surface font-bold">Kệ A5</span>
                          <span className="text-on-surface-variant text-[11px]">10/16 Ô</span>
                          <div className="bg-surface-container-highest h-1 w-full overflow-hidden rounded-full">
                            <div className="bg-tertiary h-full rounded-full" style={{ width: "62%" }}></div>
                          </div>
                        </div>
                        <div className="bg-surface-container hover:bg-surface-container-high flex cursor-pointer flex-col gap-1 rounded-lg p-2.5 text-center transition-all">
                          <span className="font-code-num text-code-num text-on-surface font-bold">Kệ A6</span>
                          <span className="text-on-surface-variant text-[11px]">11/16 Ô</span>
                          <div className="bg-surface-container-highest h-1 w-full overflow-hidden rounded-full">
                            <div className="bg-tertiary h-full rounded-full" style={{ width: "68%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Inspection & Bin Detail Panel (5/12) */}
                <div className="flex flex-col gap-4 xl:col-span-5">
                  {/* Box 1: Selected Bin Dossier */}
                  <div className="bg-surface-container-lowest flex flex-col gap-4 rounded-xl p-6 shadow-sm">
                    <div className="flex items-start justify-between gap-3 border-b-0 pb-1">
                      <div className="flex flex-col gap-1">
                        <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
                          Hồ Sơ Chi Tiết Khay Định Vị
                        </span>
                        <div className="flex items-center gap-2">
                          <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                            Kệ A2 - Tầng 04 (Ô 12)
                          </h3>
                        </div>
                      </div>
                      <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 font-semibold">
                        <span className="material-symbols-outlined text-[14px]">verified</span>
                        Đạt Chuẩn Xuất
                      </span>
                    </div>

                    {/* Realistic Warehouse Shelf / Bin Image Card */}
                    <div className="bg-surface-container-high relative h-44 w-full overflow-hidden rounded-lg shadow-inner">
                      <img
                        alt="Close-up realistic view of organized industrial warehouse storage rack shelves in a clean modern logistics depot with labeled blue plastic bins containing neatly stacked refurbished enterprise laptops, warm focused LED ceiling lighting, clear high-contrast QR barcode stickers visible on shelf rails."
                        className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                      />
                      <div className="from-inverse-surface/90 via-inverse-surface/40 absolute inset-0 flex items-end bg-gradient-to-t to-transparent p-4">
                        <div className="text-inverse-on-surface flex w-full items-center justify-between">
                          <div className="flex flex-col">
                            <span className="font-code-num text-code-num font-bold tracking-wider">
                              BIN-MB-A2-T04-O12
                            </span>
                            <span className="text-[12px] opacity-90">Niêm phong RFID: VN-DON-8842-MB</span>
                          </div>
                          <div className="bg-surface-container-lowest text-on-surface flex h-9 w-9 items-center justify-center rounded shadow-md">
                            <span className="material-symbols-outlined text-[24px]">qr_code_2</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Specifications Matrix */}
                    <div className="text-body-sm font-body-sm grid grid-cols-2 gap-3">
                      <div className="bg-surface-container-low flex flex-col gap-0.5 rounded-lg p-2">
                        <span className="text-outline font-label-sm text-label-sm">VẬT PHẨM LƯU TRỮ</span>
                        <span className="text-on-surface font-semibold">30 Laptop ThinkPad T480s</span>
                        <span className="text-on-surface-variant font-code-num text-[11px]">
                          i5-8350U • RAM 8G • SSD 256G
                        </span>
                      </div>
                      <div className="bg-surface-container-low flex flex-col gap-0.5 rounded-lg p-2">
                        <span className="text-outline font-label-sm text-label-sm">NGUỒN QUYÊN GÓP</span>
                        <span className="text-on-surface font-semibold">Tập đoàn FPT</span>
                        <span className="text-primary font-code-num text-[11px]">Lô: #DON-2024-8842</span>
                      </div>
                      <div className="bg-surface-container-low flex flex-col gap-0.5 rounded-lg p-2">
                        <span className="text-outline font-label-sm text-label-sm">PHƯƠNG ÁN PHÂN BỔ</span>
                        <span className="text-on-surface font-semibold">Trường THCS Mường Lát</span>
                        <span className="text-tertiary font-code-num text-[11px]">Mã PA: #PA-2024-892 (Đã Duyệt)</span>
                      </div>
                      <div className="bg-surface-container-low flex flex-col gap-0.5 rounded-lg p-2">
                        <span className="text-outline font-label-sm text-label-sm">LỆNH ĐIỀU CHUYỂN / VẬN ĐƠN</span>
                        <span className="text-on-surface font-semibold">Xe tải chuyên dụng #03</span>
                        <span className="text-primary font-code-num text-[11px]">Vận đơn: #WB-2024-NW08</span>
                      </div>
                    </div>

                    {/* Table of Devices in this Bin */}
                    <div className="flex flex-col gap-2 pt-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
                          Danh Sách Serial Máy Trong Khay (5 / 30 máy)
                        </span>
                        <span className="font-code-num text-primary cursor-pointer text-[11px] font-semibold hover:underline">
                          Xem toàn bộ 30 máy →
                        </span>
                      </div>
                      <div className="bg-surface-container-low w-full overflow-hidden rounded-lg">
                        <table className="w-full border-collapse text-left">
                          <thead>
                            <tr className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
                              <th className="px-3 py-2.5">Mã Serial Thiết Bị</th>
                              <th className="px-2 py-2.5">Kiểm Định</th>
                              <th className="px-3 py-2.5 text-right">Trạng Thái Xuất</th>
                            </tr>
                          </thead>
                          <tbody className="font-code-num text-code-num text-on-surface divide-none text-[12px]">
                            <tr className="hover:bg-surface-container transition-colors">
                              <td className="text-primary px-3 py-2 font-semibold">SN-VNPT-2024-99812</td>
                              <td className="text-tertiary px-2 py-2 font-medium">Grade A (98%)</td>
                              <td className="px-3 py-2 text-right">
                                <span className="bg-tertiary-fixed text-on-tertiary-fixed inline-flex rounded px-1.5 py-0.5 text-[10px] font-bold">
                                  Đã Dán Seal
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-surface-container transition-colors">
                              <td className="text-primary px-3 py-2 font-semibold">SN-FPT-4820-01</td>
                              <td className="text-tertiary px-2 py-2 font-medium">Grade A (95%)</td>
                              <td className="px-3 py-2 text-right">
                                <span className="bg-tertiary-fixed text-on-tertiary-fixed inline-flex rounded px-1.5 py-0.5 text-[10px] font-bold">
                                  Đã Dán Seal
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-surface-container transition-colors">
                              <td className="text-primary px-3 py-2 font-semibold">SN-FPT-4820-02</td>
                              <td className="text-tertiary px-2 py-2 font-medium">Grade A (96%)</td>
                              <td className="px-3 py-2 text-right">
                                <span className="bg-tertiary-fixed text-on-tertiary-fixed inline-flex rounded px-1.5 py-0.5 text-[10px] font-bold">
                                  Đã Dán Seal
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-surface-container transition-colors">
                              <td className="text-primary px-3 py-2 font-semibold">SN-FPT-4820-03</td>
                              <td className="text-tertiary px-2 py-2 font-medium">Grade B+ (92%)</td>
                              <td className="px-3 py-2 text-right">
                                <span className="bg-tertiary-fixed text-on-tertiary-fixed inline-flex rounded px-1.5 py-0.5 text-[10px] font-bold">
                                  Đã Dán Seal
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-surface-container transition-colors">
                              <td className="text-primary px-3 py-2 font-semibold">SN-FPT-4820-04</td>
                              <td className="text-tertiary px-2 py-2 font-medium">Grade A (97%)</td>
                              <td className="px-3 py-2 text-right">
                                <span className="bg-tertiary-fixed text-on-tertiary-fixed inline-flex rounded px-1.5 py-0.5 text-[10px] font-bold">
                                  Đã Dán Seal
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Bottom Action Buttons for Warehouse Operator */}
                    <div className="flex flex-col items-center gap-2.5 pt-2 sm:flex-row">
                      <button
                        className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 shadow-sm transition-colors sm:flex-1"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                        In Phiếu Định Vị Lấy Hàng
                      </button>
                      <button
                        className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 transition-colors sm:flex-1"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-tertiary text-[18px]">
                          check_circle_outline
                        </span>
                        Quét Xác Nhận Rời Kệ
                      </button>
                    </div>
                  </div>

                  {/* Box 2: RBAC Policy Compliance Notice */}
                  <div className="bg-surface-container-lowest flex flex-col gap-3 rounded-xl p-6 shadow-sm">
                    <div className="text-on-surface flex items-center gap-2.5">
                      <div className="bg-surface-container-highest text-secondary flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                        <span className="material-symbols-outlined text-[20px]">shield</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm font-bold">Quy Chuẩn Phân Quyền Kho</span>
                        <span className="font-code-num text-secondary text-[11px]">
                          RBAC-POL-2024-V2.8.4 (Chỉ Đọc Cấu Trúc)
                        </span>
                      </div>
                    </div>
                    <div className="bg-surface-container-low text-body-sm font-body-sm text-on-surface-variant flex flex-col gap-2 rounded-lg p-4">
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-secondary mt-0.5 shrink-0 text-[18px]">
                          policy
                        </span>
                        <p className="leading-relaxed">
                          <strong className="text-on-surface font-semibold">Lưu ý kiểm toán:</strong> Chức năng sửa vị
                          trí kệ, đổi mã ô, ghép máy tự do đã được gỡ bỏ hoàn toàn khỏi Cổng Nhà Kho. Thủ kho thao tác
                          quét mã để xác nhận lấy đúng vật phẩm theo vận đơn đã được Admin phê duyệt.
                        </p>
                      </div>
                      <div className="text-outline flex items-center justify-between pt-1 text-[11px]">
                        <span className="">
                          Mã kiểm toán phiên:{" "}
                          <code className="font-code-num text-on-surface font-semibold">LOG-TK-MB04-992A</code>
                        </span>
                        <span className="text-tertiary font-semibold">Toàn vẹn CSDL 100%</span>
                      </div>
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

export default WarehouseRacksPage;
