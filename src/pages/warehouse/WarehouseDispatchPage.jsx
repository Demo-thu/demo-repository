import { Link } from "react-router-dom";

const WarehouseDispatchPage = () => {
  return (
    <div className="bg-background font-body-md text-on-surface flex min-h-screen flex-col antialiased">
      <aside className="bg-surface-container-low fixed top-0 left-0 z-50 flex h-full w-72 flex-col justify-between overflow-y-auto shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="bg-surface-container-low flex h-16 items-center justify-between px-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-on-primary font-headline-sm text-headline-sm flex h-9 w-9 items-center justify-center rounded-xl">
                E
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight">EduShare VN</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Hệ Thống Thiết Bị Giáo Dục</span>
              </div>
            </div>
          </div>
          <div className="px-4 py-1">
            <div className="bg-surface-container text-primary flex items-center gap-1 rounded-lg px-2 py-1">
              <span className="material-symbols-outlined text-[16px]">warehouse</span>
              <span className="font-label-sm text-label-sm font-semibold tracking-wide uppercase">
                HUB-01 KHO &amp; KỸ THUẬT
              </span>
            </div>
          </div>
          <nav className="mt-4 flex flex-col gap-6 px-4">
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-secondary px-2 tracking-wider uppercase">
                1. Nhập Kho &amp; Tiếp Nhận
              </span>
              <Link
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center gap-2 rounded-xl px-2 py-2 transition-all"
                to="/warehouse/receive"
              >
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <span>Tiếp nhận &amp; Kiểm định</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center gap-2 rounded-xl px-2 py-2 transition-all"
                to="/warehouse/scan-qr"
              >
                <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                <span>Quét QR phân luồng</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center gap-2 rounded-xl px-2 py-2 transition-all"
                to="/warehouse/donation-receipt"
              >
                <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                <span>Phiếu trao tặng</span>
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-secondary px-2 tracking-wider uppercase">
                2. Quản Lý Kho Bãi
              </span>
              <Link
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center gap-2 rounded-xl px-2 py-2 transition-all"
                to="/warehouse/inventory"
              >
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span>Tồn kho thiết bị</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center justify-between rounded-xl px-2 py-2 transition-all"
                to="/warehouse/racks"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">shelves</span>
                  <span>Vị trí kệ định danh</span>
                </div>
                <span className="font-label-sm bg-surface-container-highest text-on-surface-variant rounded px-1.5 py-0.5 text-[10px]">
                  Chỉ xem
                </span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center gap-2 rounded-xl px-2 py-2 transition-all"
                to="/warehouse/audit-report"
              >
                <span className="material-symbols-outlined text-[20px]">fact_check</span>
                <span>Kiểm kê &amp; Báo cáo</span>
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-secondary px-2 tracking-wider uppercase">
                3. Điều Phối &amp; Vận Chuyển
              </span>
              <Link
                className="bg-primary text-on-primary text-body-md flex items-center gap-2 rounded-xl px-2 py-2 font-semibold shadow-sm transition-all"
                to="/warehouse/dispatch"
              >
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span>Lệnh điều chuyển &amp; Vận đơn</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center gap-2 rounded-xl px-2 py-2 transition-all"
                to="/warehouse/delivery-history"
              >
                <span className="material-symbols-outlined text-[20px]">history</span>
                <span>Lịch sử đợt giao</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center gap-2 rounded-xl px-2 py-2 transition-all"
                to="/warehouse/incident-report"
              >
                <span className="material-symbols-outlined text-[20px]">report_problem</span>
                <span>Báo cáo sự cố kho</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="bg-surface-container m-4 rounded-xl p-4">
          <div className="mb-1 flex items-center justify-between">
            <span className="font-code-num text-code-num text-secondary">v2.8.4-PROD</span>
            <span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1 font-medium">
              <span className="bg-tertiary inline-block h-2 w-2 rounded-full"></span>
              Hoạt động
            </span>
          </div>
          <div className="text-on-surface-variant font-body-sm text-body-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">support_agent</span>
            <span>
              Kỹ thuật kho: <span className="text-on-surface font-code-num font-medium">1900 6829</span>
            </span>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col pl-72">
        <header className="bg-surface/85 fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between px-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
              <span className="text-primary font-medium">EduShare VN Kho</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span>Điều Phối &amp; Vận Chuyển</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-on-surface font-semibold">Lệnh Điều Chuyển &amp; Vận Đơn</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative w-80">
              <span className="material-symbols-outlined text-on-surface-variant absolute top-1/2 left-3 -translate-y-1/2 text-[18px]">
                search
              </span>
              <input
                className="bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:bg-surface-container-lowest h-9 w-full rounded-xl pr-4 pl-9 transition-all focus:outline-none"
                placeholder="Mã #ST, vận đơn #WB, điểm trường..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-2 pl-2">
              <div className="flex flex-col text-right">
                <span className="font-headline-sm text-headline-sm text-on-surface leading-tight">
                  Trần Hùng <span className="font-code-num text-body-sm text-secondary">(TK-MB-04)</span>
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                  Trưởng Kho Kỹ Thuật Hà Nội • HUB-01 Hà Nội
                </span>
              </div>
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-background flex min-h-screen w-full flex-1 flex-col px-6 py-6 pt-16">
          <div className="flex w-full flex-col gap-6">
            {/* Top Bar / Command Actions */}
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Lệnh Điều Chuyển &amp; Vận Đơn
                  </span>
                  <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed rounded-full px-2.5 py-1 font-semibold tracking-wide">
                    RBAC KHO V2.8
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                  Quản lý luồng xuất kho liên hub và vận đơn bàn giao thiết bị trực tiếp về điểm trường học sinh vùng
                  cao.
                </p>
              </div>
              {/* Action Buttons adhering strictly to RBAC: Transfer creates instant cleared, Waybill requires Admin Approval */}
              <div className="flex flex-wrap items-center gap-2">
                <button className="bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-sm text-headline-sm flex h-10 items-center gap-1.5 rounded-xl px-4 shadow-sm transition-all">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span>Xuất File Báo Cáo (.xlsx)</span>
                </button>
                <button className="bg-surface-container hover:bg-surface-container-high text-primary font-headline-sm text-headline-sm flex h-10 items-center gap-1.5 rounded-xl px-4 shadow-sm transition-all">
                  <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
                  <span>+ Lệnh Điều Chuyển Liên Kho</span>
                  <span className="font-code-num bg-primary-fixed text-on-primary-fixed-variant rounded px-1.5 py-0.5 text-[10px]">
                    Hoàn tất ngay
                  </span>
                </button>
                <button className="bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-headline-sm flex h-10 items-center gap-1.5 rounded-xl px-4 shadow-sm transition-all">
                  <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                  <span>+ Lập Vận Đơn Mới</span>
                  <span className="font-code-num bg-surface-container-lowest/20 text-on-primary rounded px-1.5 py-0.5 text-[10px]">
                    PA Đã Duyệt
                  </span>
                </button>
              </div>
            </div>

            {/* Bento 4 Metric Indicators */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Card 1: Tổng đơn */}
              <div className="bg-surface-container-lowest relative flex flex-col justify-between overflow-hidden rounded-xl p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase">
                      Tổng lệnh &amp; Vận đơn
                    </span>
                    <span className="font-headline-xl text-headline-xl text-on-surface mt-1">68</span>
                  </div>
                  <div className="bg-surface-container text-primary flex h-11 w-11 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[24px]">assignment</span>
                  </div>
                </div>
                <div className="font-code-num text-code-num text-on-surface-variant mt-4 flex items-center justify-between pt-3">
                  <span>
                    <strong className="text-primary font-semibold">42</strong> Vận đơn trường
                  </span>
                  <span className="text-outline">/</span>
                  <span>
                    <strong className="text-tertiary font-semibold">26</strong> Lệnh liên kho
                  </span>
                </div>
                <div className="bg-surface-container-high mt-2 h-1 w-full overflow-hidden rounded-full">
                  <div className="bg-primary h-full w-[62%]"></div>
                </div>
              </div>
              {/* Card 2: Điều chuyển hoàn tất ngay */}
              <div className="bg-surface-container-lowest relative flex flex-col justify-between overflow-hidden rounded-xl p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase">
                        Điều chuyển liên kho
                      </span>
                      <span className="font-label-sm bg-tertiary-fixed text-on-tertiary-fixed rounded px-1.5 py-[0.1rem] text-[10px] font-bold">
                        TỨC THÌ
                      </span>
                    </div>
                    <span className="font-headline-xl text-headline-xl text-tertiary mt-1">26 / 26</span>
                  </div>
                  <div className="bg-surface-container-low text-tertiary flex h-11 w-11 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[24px]">verified</span>
                  </div>
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-4 flex items-center justify-between pt-3">
                  <span className="text-tertiary flex items-center gap-1 font-medium">
                    <span className="material-symbols-outlined text-[15px]">bolt</span>
                    Xuất là chốt - Ko chờ đích duyệt
                  </span>
                  <span className="font-code-num text-code-num text-tertiary font-semibold">100%</span>
                </div>
                <div className="bg-surface-container-high mt-2 h-1 w-full overflow-hidden rounded-full">
                  <div className="bg-tertiary h-full w-full"></div>
                </div>
              </div>
              {/* Card 3: Vận đơn sẵn sàng xuất kho */}
              <div className="bg-surface-container-lowest relative flex flex-col justify-between overflow-hidden rounded-xl p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase">
                      Vận đơn sẵn sàng xuất
                    </span>
                    <span className="font-headline-xl text-headline-xl text-primary mt-1">14</span>
                  </div>
                  <div className="bg-surface-container-low text-primary flex h-11 w-11 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[24px]">fact_check</span>
                  </div>
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-4 flex items-center justify-between pt-3">
                  <span className="text-primary flex items-center gap-1 font-medium">
                    <span className="material-symbols-outlined text-[15px]">lock</span>
                    100% Admin Đã Ký Phê Duyệt PA
                  </span>
                  <span className="font-code-num text-code-num text-primary font-semibold">14/14 PA</span>
                </div>
                <div className="bg-surface-container-high mt-2 h-1 w-full overflow-hidden rounded-full">
                  <div className="bg-primary-container h-full w-[70%]"></div>
                </div>
              </div>
              {/* Card 4: TNV Đã Gán (waybill_volunteers) */}
              <div className="bg-surface-container-lowest relative flex flex-col justify-between overflow-hidden rounded-xl p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase">
                      TNV Vận chuyển đã gán
                    </span>
                    <span className="font-headline-xl text-headline-xl text-on-surface mt-1">38</span>
                  </div>
                  <div className="bg-secondary-container text-on-secondary-container flex h-11 w-11 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[24px]">diversity_3</span>
                  </div>
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-4 flex items-center justify-between pt-3">
                  <span className="text-on-surface-variant flex items-center gap-1 font-medium">
                    <span className="material-symbols-outlined text-[15px]">how_to_reg</span>
                    Gán không giới hạn (Có role TNV)
                  </span>
                  <span className="font-code-num text-code-num text-secondary font-semibold">12 Đội</span>
                </div>
                <div className="bg-surface-container-high mt-2 h-1 w-full overflow-hidden rounded-full">
                  <div className="bg-secondary h-full w-[85%]"></div>
                </div>
              </div>
            </div>

            {/* RBAC Compliance Banner Notice */}
            <div className="bg-surface-container-low flex flex-col items-start justify-between gap-4 rounded-xl p-4 md:flex-row md:items-center">
              <div className="flex items-center gap-2">
                <div className="bg-surface-container text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-[20px]">gavel</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      Đặc Tả Quyền Hạn Cổng Kho (RBAC DOC-47):
                    </span>
                    <span className="font-label-sm text-label-sm text-primary bg-primary-fixed rounded px-2 py-0.5 font-semibold">
                      HUB KỸ THUẬT
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    1. Lập vận đơn chỉ khi <strong>Admin đã phê duyệt phương án phân bổ</strong> (Kho không được tự
                    hủy/sửa PA). • 2. Xuất điều chuyển liên kho <strong>hoàn tất tức thì</strong> không cần kho đích xác
                    nhận. • 3. <strong>Gán không giới hạn TNV</strong> vận chuyển cho mỗi đơn (role: Tình nguyện viên).
                  </span>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="font-code-num text-code-num text-secondary bg-surface-container-lowest rounded px-2.5 py-1 shadow-sm">
                  HUB-01 • Hà Nội
                </span>
                <span className="material-symbols-outlined text-outline text-[18px]">verified_user</span>
              </div>
            </div>

            {/* Navigation Filters & Search Ribbon */}
            <div className="bg-surface-container-lowest flex flex-col items-stretch justify-between gap-4 rounded-xl p-4 shadow-sm lg:flex-row lg:items-center">
              {/* Functional Tab Switching */}
              <div className="bg-surface-container-low flex items-center overflow-x-auto rounded-xl p-1">
                <button className="bg-primary text-on-primary font-headline-sm text-headline-sm flex items-center gap-2 rounded-lg px-4 py-1.5 whitespace-nowrap shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">school</span>
                  <span>Vận Đơn Bàn Giao Điểm Trường</span>
                  <span className="font-code-num bg-on-primary text-primary rounded-full px-2 py-[0.1rem] text-[11px] font-bold">
                    14
                  </span>
                </button>
                <button className="text-on-surface-variant hover:text-on-surface font-headline-sm text-headline-sm flex items-center gap-2 rounded-lg px-4 py-1.5 whitespace-nowrap transition-colors">
                  <span className="material-symbols-outlined text-[18px]">sync_alt</span>
                  <span>Lệnh Điều Chuyển Liên Kho</span>
                  <span className="font-code-num bg-surface-container-highest text-secondary rounded-full px-2 py-[0.1rem] text-[11px] font-bold">
                    26
                  </span>
                </button>
                <button className="text-on-surface-variant hover:text-on-surface font-headline-sm text-headline-sm flex items-center gap-2 rounded-lg px-4 py-1.5 whitespace-nowrap transition-colors">
                  <span className="material-symbols-outlined text-[18px]">history</span>
                  <span>Tất Cả Lịch Sử</span>
                </button>
              </div>
              {/* Search & Regional/Status Dropdown Filters */}
              <div className="flex flex-wrap items-center gap-2 lg:flex-nowrap">
                <div className="relative w-full sm:w-64">
                  <span className="material-symbols-outlined text-outline absolute top-1/2 left-3 -translate-y-1/2 text-[18px]">
                    search
                  </span>
                  <input
                    className="bg-surface font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:ring-primary h-9 w-full rounded-lg pr-3 pl-9 shadow-inner focus:ring-1 focus:outline-none"
                    placeholder="Tìm #WB, #ST, Mường Lát..."
                    type="text"
                    defaultValue="Mường Lát"
                  />
                </div>
                <div className="bg-surface text-on-surface-variant font-label-md text-label-md flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-[16px]">filter_list</span>
                  <span>
                    Trạng thái: <strong>Admin Đã Duyệt</strong>
                  </span>
                  <span className="material-symbols-outlined text-[16px]">expand_more</span>
                </div>
                <div className="bg-surface text-on-surface-variant font-label-md text-label-md flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-[16px]">share_location</span>
                  <span>
                    Khu vực: <strong>Tây Bắc &amp; Bắc Miền Trung</strong>
                  </span>
                  <span className="material-symbols-outlined text-[16px]">expand_more</span>
                </div>
              </div>
            </div>

            {/* Main 2-Column Split Interface (7 : 5 ratio) */}
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
              {/* LEFT COLUMN (7 Cols) - WAYBILLS & TRANSFER ORDERS MASTER TABLE */}
              <div className="flex flex-col gap-4 lg:col-span-7">
                <div className="bg-surface-container-lowest overflow-hidden rounded-xl shadow-sm">
                  <div className="bg-surface-container-low flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-headline-sm text-headline-sm text-on-surface">
                        Danh Sách Vận Đơn &amp; Lệnh Điều Chuyển
                      </span>
                      <span className="font-code-num bg-surface-container text-on-surface-variant rounded px-2 py-0.5 text-[11px]">
                        Trang 1 / 4
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Đang chọn: <strong>#WB-2024-NW08</strong>
                    </span>
                  </div>
                  {/* Table View */}
                  <div className="overflow-x-auto">
                    <table className="font-body-md text-body-md w-full text-left">
                      <thead>
                        <tr className="bg-surface-container-low text-secondary font-label-sm text-label-sm tracking-wider uppercase">
                          <th className="px-4 py-3">Mã Đơn / Loại</th>
                          <th className="px-4 py-3">Điểm Đến / Đơn Vị Nhận</th>
                          <th className="px-4 py-3">Quy Cách Hàng</th>
                          <th className="px-4 py-3">TNV Phụ Trách</th>
                          <th className="px-4 py-3">Trạng Thái Admin</th>
                          <th className="px-4 py-3 text-right">Chi Tiết</th>
                        </tr>
                      </thead>
                      <tbody className="text-on-surface divide-y-0">
                        {/* Row 1: Selected Record (#WB-2024-NW08) */}
                        <tr className="bg-primary/5 hover:bg-primary/10 relative cursor-pointer transition-colors">
                          <td className="px-4 py-3.5">
                            <div className="flex flex-col">
                              <span className="font-code-num text-primary font-semibold">#WB-2024-NW08</span>
                              <span className="font-label-sm text-label-sm text-secondary mt-0.5 flex items-center gap-0.5">
                                <span className="material-symbols-outlined text-[13px]">school</span> Vận đơn trường
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="flex max-w-[190px] flex-col">
                              <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                                PTDTBT THCS Mường Lát
                              </span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant">
                                H. Mường Lát, Thanh Hóa
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="font-code-num text-code-num flex flex-col">
                              <span className="text-on-surface font-semibold">50 Thiết bị</span>
                              <span className="text-secondary font-body-sm text-[11px]">30 Laptop, 20 Màn</span>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            {/* Unlimited Volunteer Avatars Display */}
                            <div className="flex items-center -space-x-2">
                              <div
                                className="bg-primary text-on-primary font-headline-sm ring-surface-container-lowest flex h-7 w-7 items-center justify-center rounded-full text-[11px] ring-2"
                                title="Lê Hoàng Long (Trưởng đoàn)"
                              >
                                HL
                              </div>
                              <div
                                className="bg-tertiary text-on-tertiary font-headline-sm ring-surface-container-lowest flex h-7 w-7 items-center justify-center rounded-full text-[11px] ring-2"
                                title="Trần Đình Trọng (Kỹ thuật)"
                              >
                                TT
                              </div>
                              <div
                                className="bg-secondary text-on-secondary font-headline-sm ring-surface-container-lowest flex h-7 w-7 items-center justify-center rounded-full text-[11px] ring-2"
                                title="Nguyễn Minh Tuấn (Điều phối)"
                              >
                                MT
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold whitespace-nowrap">
                              <span className="material-symbols-outlined text-[13px]">check_circle</span>
                              PA #892 Đã Duyệt
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-right">
                            <span className="bg-primary text-on-primary inline-flex h-7 w-7 items-center justify-center rounded-lg">
                              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            </span>
                          </td>
                        </tr>
                        {/* Row 2: Stock Transfer (Auto Cleared) */}
                        <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                          <td className="px-4 py-3.5">
                            <div className="flex flex-col">
                              <span className="font-code-num text-tertiary font-semibold">#ST-2024-TR03</span>
                              <span className="font-label-sm text-label-sm text-secondary mt-0.5 flex items-center gap-0.5">
                                <span className="material-symbols-outlined text-[13px]">swap_horiz</span> Lệnh điều
                                chuyển
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="flex max-w-[190px] flex-col">
                              <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                                HUB-02 Tây Bắc (Yên Bái)
                              </span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant">
                                Kho Tiếp Vận Trung Chuyển
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="font-code-num text-code-num flex flex-col">
                              <span className="text-on-surface font-semibold">45 Thiết bị</span>
                              <span className="text-secondary font-body-sm text-[11px]">
                                15 PC Đồng bộ, 30 Chuột/Phím
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="flex items-center -space-x-2">
                              <div
                                className="bg-secondary-fixed text-on-secondary-fixed font-headline-sm flex h-7 w-7 items-center justify-center rounded-full text-[11px]"
                                title="Vũ Viết Quân"
                              >
                                VQ
                              </div>
                              <div
                                className="bg-primary-fixed text-on-primary-fixed font-headline-sm flex h-7 w-7 items-center justify-center rounded-full text-[11px]"
                                title="Đặng Nam"
                              >
                                +1
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold whitespace-nowrap">
                              <span className="material-symbols-outlined text-[13px]">bolt</span>
                              Hoàn tất ngay (Auto)
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-right">
                            <span className="bg-surface-container text-on-surface-variant inline-flex h-7 w-7 items-center justify-center rounded-lg">
                              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            </span>
                          </td>
                        </tr>
                        {/* Row 3: Waybill #WB-2024-NW09 */}
                        <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                          <td className="px-4 py-3.5">
                            <div className="flex flex-col">
                              <span className="font-code-num text-primary font-semibold">#WB-2024-NW09</span>
                              <span className="font-label-sm text-label-sm text-secondary mt-0.5 flex items-center gap-0.5">
                                <span className="material-symbols-outlined text-[13px]">school</span> Vận đơn trường
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="flex max-w-[190px] flex-col">
                              <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                                Trường Tiểu Học Nậm Kè
                              </span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant">
                                Huyện Mường Nhé, Điện Biên
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="font-code-num text-code-num flex flex-col">
                              <span className="text-on-surface font-semibold">25 Laptop</span>
                              <span className="text-secondary font-body-sm text-[11px]">HP Probook 450 G5</span>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="flex items-center -space-x-2">
                              <div className="bg-tertiary-fixed text-on-tertiary-fixed font-headline-sm flex h-7 w-7 items-center justify-center rounded-full text-[11px]">
                                BN
                              </div>
                              <div className="bg-primary-fixed text-on-primary-fixed font-headline-sm flex h-7 w-7 items-center justify-center rounded-full text-[11px]">
                                HV
                              </div>
                              <div className="bg-surface-container text-on-surface-variant font-label-sm flex h-7 w-7 items-center justify-center rounded-full text-[10px]">
                                +2
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold whitespace-nowrap">
                              <span className="material-symbols-outlined text-[13px]">check_circle</span>
                              PA #896 Đã Duyệt
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-right">
                            <span className="bg-surface-container text-on-surface-variant inline-flex h-7 w-7 items-center justify-center rounded-lg">
                              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            </span>
                          </td>
                        </tr>
                        {/* Row 4: Waybill #WB-2024-BT02 */}
                        <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                          <td className="px-4 py-3.5">
                            <div className="flex flex-col">
                              <span className="font-code-num text-primary font-semibold">#WB-2024-BT02</span>
                              <span className="font-label-sm text-label-sm text-secondary mt-0.5 flex items-center gap-0.5">
                                <span className="material-symbols-outlined text-[13px]">school</span> Vận đơn trường
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="flex max-w-[190px] flex-col">
                              <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                                THCS Hướng Việt
                              </span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant">
                                Huyện Hướng Hóa, Quảng Trị
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="font-code-num text-code-num flex flex-col">
                              <span className="text-on-surface font-semibold">35 Màn hình &amp; PC</span>
                              <span className="text-secondary font-body-sm text-[11px]">Phòng máy chuẩn tin học</span>
                            </div>
                          </td>
                          <td className="px-4 py-3.5">
                            <span className="font-body-sm text-body-sm text-outline italic">Chưa gán đội TNV</span>
                          </td>
                          <td className="px-4 py-3.5">
                            <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold whitespace-nowrap">
                              <span className="material-symbols-outlined text-[13px]">check_circle</span>
                              PA #901 Đã Duyệt
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-right">
                            <span className="bg-surface-container text-on-surface-variant inline-flex h-7 w-7 items-center justify-center rounded-lg">
                              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Table Visual Footnote */}
                  <div className="bg-surface-container-low font-body-sm text-body-sm text-secondary flex flex-col items-center justify-between gap-2 p-4 sm:flex-row">
                    <div className="flex items-center gap-2">
                      <span className="bg-primary inline-block h-2 w-2 rounded-full"></span>
                      <span>Hiển thị 4 trên 40 bản ghi hoạt động trong tháng này</span>
                    </div>
                    <div className="font-label-sm text-label-sm flex items-center gap-1">
                      <button className="bg-surface-container text-on-surface hover:bg-surface-container-high rounded px-2 py-1 transition-colors">
                        « Trước
                      </button>
                      <span className="font-code-num px-2 py-1">1</span>
                      <span className="font-code-num px-2 py-1">2</span>
                      <span className="font-code-num px-2 py-1">3</span>
                      <button className="bg-surface-container text-on-surface hover:bg-surface-container-high rounded px-2 py-1 transition-colors">
                        Tiếp »
                      </button>
                    </div>
                  </div>
                </div>

                {/* Route Visualizer Box & Packing Verification Map Insight */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* Visual 1: Lộ trình vận tải & Trạm kiểm tra */}
                  <div className="bg-surface-container-lowest flex flex-col justify-between rounded-xl p-6 shadow-sm">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">near_me</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Lộ Trình Bàn Giao Tuyến
                        </span>
                      </div>
                      <span className="font-code-num text-code-num text-secondary">310 km</span>
                    </div>
                    <div className="relative my-2 space-y-4 pl-6">
                      {/* Line indicator */}
                      <div className="bg-surface-container-high absolute top-2 bottom-2 left-2.5 w-0.5"></div>
                      <div className="relative flex items-start gap-2">
                        <span className="bg-primary text-on-primary font-label-sm ring-surface-container-lowest mt-0.5 -ml-6 flex h-5 w-5 items-center justify-center rounded-full text-[10px] ring-4">
                          1
                        </span>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            HUB-01 Hà Nội (Kho xuất)
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary">
                            Đã đóng gói, dán seal RFID lúc 08:30
                          </span>
                        </div>
                      </div>
                      <div className="relative flex items-start gap-2">
                        <span className="bg-surface-container-high text-on-surface-variant font-label-sm ring-surface-container-lowest mt-0.5 -ml-6 flex h-5 w-5 items-center justify-center rounded-full text-[10px] ring-4">
                          2
                        </span>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            Trạm nghỉ TP. Thanh Hóa
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary">
                            Điểm hội quân đoàn xe TNV số 02
                          </span>
                        </div>
                      </div>
                      <div className="relative flex items-start gap-2">
                        <span className="bg-tertiary text-on-tertiary font-label-sm ring-surface-container-lowest mt-0.5 -ml-6 flex h-5 w-5 items-center justify-center rounded-full text-[10px] ring-4">
                          3
                        </span>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-headline-sm text-tertiary font-semibold">
                            PTDTBT THCS Mường Lát
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary">
                            Biên bản bàn giao 3 bên dự kiến 16:30
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low mt-3 flex items-center justify-between rounded-lg p-2 pt-3">
                      <span>
                        Dự báo thời tiết đèo: <strong className="text-tertiary">Khô ráo</strong>
                      </span>
                      <span>
                        Phương tiện: <strong>Bán tải 4x4</strong>
                      </span>
                    </div>
                  </div>
                  {/* Visual 2: Map Static Preview */}
                  <div className="relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-xl shadow-sm">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      data-location="Muong Lat, Thanh Hoa, Vietnam"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80')",
                      }}
                    ></div>
                    <div className="from-inverse-surface/90 via-inverse-surface/40 absolute inset-0 bg-gradient-to-t to-transparent"></div>
                    <div className="text-surface relative flex items-center justify-between p-4">
                      <span className="font-label-sm text-label-sm bg-surface-container-lowest/20 rounded px-2 py-0.5 tracking-wider uppercase backdrop-blur">
                        Tọa độ đích đến
                      </span>
                      <span className="font-code-num text-code-num">20.5186° N, 104.6231° E</span>
                    </div>
                    <div className="text-inverse-on-surface relative flex flex-col p-4">
                      <span className="font-headline-sm text-headline-sm font-bold">Xã Tam Chung, Mường Lát</span>
                      <span className="font-body-sm text-body-sm text-inverse-on-surface/80">
                        Điểm trường cắm bản vùng cao giáp biên giới Lào
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN (5 Cols) - SELECTED WAYBILL DETAIL (#WB-2024-NW08) */}
              <div className="flex flex-col gap-4 lg:col-span-5">
                {/* Primary Card: Dossier Detail */}
                <div className="bg-surface-container-lowest flex flex-col overflow-hidden rounded-xl shadow-sm">
                  {/* Dossier Header */}
                  <div className="bg-surface-container flex flex-col gap-2 p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-code-num text-code-num bg-primary text-on-primary rounded-full px-2.5 py-0.5 font-bold">
                        #WB-2024-NW08
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary">Tạo lúc: 14/10/2024 • 07:45</span>
                    </div>
                    <div className="mt-1 flex flex-col">
                      <span className="font-headline-lg text-headline-lg text-on-surface leading-tight">
                        Trường PTDTBT THCS Mường Lát
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Thị trấn Mường Lát, Huyện Mường Lát, Tỉnh Thanh Hóa
                      </span>
                    </div>
                    {/* School Recipient Identity */}
                    <div className="flex items-center gap-2 pt-2">
                      <div className="bg-surface-container-high text-primary font-headline-sm text-headline-sm flex h-9 w-9 items-center justify-center rounded-full">
                        <span className="material-symbols-outlined text-[20px]">person_pin</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Thầy Hà Văn Tiêu{" "}
                          <span className="font-body-sm text-body-sm text-secondary font-normal">(Hiệu trưởng)</span>
                        </span>
                        <span className="font-code-num text-code-num text-primary">
                          SĐT: 0984 219 xxx • CMND/CCCD: 038085xxxxxx
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Strict RBAC Proof: Admin Allocation Policy (Read Only for Warehouse) */}
                  <div className="bg-surface-container-high flex items-center justify-between px-6 py-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Căn Cứ Phân Bổ: #PA-2024-892
                        </span>
                        <span className="font-body-sm text-on-surface-variant text-[11px]">
                          Ký duyệt số bởi: Ban Điều Hành EduShare TW
                        </span>
                      </div>
                    </div>
                    <span className="font-label-sm bg-tertiary-fixed text-on-tertiary-fixed rounded px-2 py-0.5 text-[11px] font-bold tracking-wide">
                      ĐÃ KHÓA SỬA (LOCKED)
                    </span>
                  </div>

                  {/* Donor Allocation Breakdown Table (stock_transfer_items) */}
                  <div className="flex flex-col gap-2 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Danh Mục &amp; Nguồn Gốc Tài Trợ
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">(Bóc tách nhà hảo tâm)</span>
                      </div>
                      <button className="bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm flex items-center gap-1 rounded px-2.5 py-1 font-semibold transition-colors">
                        <span className="material-symbols-outlined text-[14px]">table_view</span>
                        <span>Xuất Excel Nhà Hảo Tâm</span>
                      </button>
                    </div>
                    <div className="bg-surface-container-low overflow-hidden rounded-xl">
                      <div className="bg-surface-container flex flex-col gap-2 p-3">
                        {/* Item 1 */}
                        <div className="flex items-start justify-between">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface">
                                30 Laptop Lenovo ThinkPad T480s
                              </span>
                              <span className="font-code-num bg-tertiary-fixed text-on-tertiary-fixed rounded px-2 py-[0.1rem] text-[10px] font-bold">
                                Loại A (Mới 95%)
                              </span>
                            </div>
                            <span className="font-body-sm text-body-sm text-primary mt-0.5 flex items-center gap-1">
                              <span className="material-symbols-outlined text-[14px]">volunteer_activism</span>
                              Nguồn ủng hộ: <strong>Tập đoàn FPT (Công đoàn FPT Software)</strong>
                            </span>
                            <span className="font-code-num text-secondary text-[11px]">
                              Phiếu tiếp nhận nguồn: #DON-2024-8842 • Đã kiểm định linh kiện
                            </span>
                          </div>
                          <span className="font-code-num text-headline-sm text-on-surface font-semibold">30 Chiếc</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 p-3">
                        {/* Item 2 */}
                        <div className="flex items-start justify-between">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface">
                                20 Màn hình Dell Professional 24" FHD
                              </span>
                              <span className="font-code-num bg-tertiary-fixed text-on-tertiary-fixed rounded px-2 py-[0.1rem] text-[10px] font-bold">
                                Loại A- (Mới 90%)
                              </span>
                            </div>
                            <span className="font-body-sm text-body-sm text-primary mt-0.5 flex items-center gap-1">
                              <span className="material-symbols-outlined text-[14px]">volunteer_activism</span>
                              Nguồn ủng hộ: <strong>VNPT Hưng Yên (Cựu SV K44 quyên góp)</strong>
                            </span>
                            <span className="font-code-num text-secondary text-[11px]">
                              Phiếu tiếp nhận nguồn: #DON-2024-9115 • Đầy đủ cáp HDMI &amp; Nguồn
                            </span>
                          </div>
                          <span className="font-code-num text-headline-sm text-on-surface font-semibold">20 Chiếc</span>
                        </div>
                      </div>
                    </div>
                    {/* Total Items Summary */}
                    <div className="font-headline-sm text-headline-sm flex items-center justify-between px-2 pt-1">
                      <span className="text-secondary">Tổng số lượng bàn giao:</span>
                      <span className="text-primary font-code-num font-bold">50 Thiết bị chuẩn hóa</span>
                    </div>
                  </div>

                  {/* Section: Waybill Assigned Volunteers (waybill_volunteers) */}
                  <div className="flex flex-col gap-2 px-6 pb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Đội Ngũ TNV Vận Chuyển
                        </span>
                        <span className="font-label-sm text-label-sm bg-surface-container text-primary rounded px-2 py-0.5 font-semibold">
                          Không giới hạn
                        </span>
                      </div>
                      <button className="bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm flex items-center gap-1 rounded-lg px-2.5 py-1 font-semibold transition-colors">
                        <span className="material-symbols-outlined text-[16px]">person_add</span>
                        <span>+ Gán Thêm TNV</span>
                      </button>
                    </div>
                    {/* Volunteer Cards Stack */}
                    <div className="flex flex-col gap-2">
                      {/* TNV 1: Leader */}
                      <div className="bg-surface-container-low flex items-center justify-between rounded-xl p-2.5">
                        <div className="flex items-center gap-2">
                          <div className="bg-primary text-on-primary font-headline-sm flex h-8 w-8 items-center justify-center rounded-full text-[12px]">
                            HL
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface">Lê Hoàng Long</span>
                              <span className="font-label-sm bg-primary-fixed text-on-primary-fixed rounded px-1.5 py-[0.1rem] text-[10px] font-bold">
                                TRƯỞNG ĐOÀN XE
                              </span>
                            </div>
                            <span className="font-body-sm text-secondary text-[12px]">
                              Ford Ranger 29H-882.14 • SĐT: 0912 345 678
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-outline text-[18px]">verified</span>
                      </div>
                      {/* TNV 2: Technician */}
                      <div className="bg-surface-container-low flex items-center justify-between rounded-xl p-2.5">
                        <div className="flex items-center gap-2">
                          <div className="bg-tertiary text-on-tertiary font-headline-sm flex h-8 w-8 items-center justify-center rounded-full text-[12px]">
                            TT
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface">Trần Đình Trọng</span>
                              <span className="font-label-sm bg-tertiary-fixed text-on-tertiary-fixed rounded px-1.5 py-[0.1rem] text-[10px] font-bold">
                                KỸ THUẬT ÁP TẢI
                              </span>
                            </div>
                            <span className="font-body-sm text-secondary text-[12px]">
                              Cài đặt Win &amp; Hướng dẫn • SĐT: 0978 998 112
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-outline text-[18px]">verified</span>
                      </div>
                      {/* TNV 3: Coordinator */}
                      <div className="bg-surface-container-low flex items-center justify-between rounded-xl p-2.5">
                        <div className="flex items-center gap-2">
                          <div className="bg-secondary text-on-secondary font-headline-sm flex h-8 w-8 items-center justify-center rounded-full text-[12px]">
                            MT
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface">
                                Nguyễn Minh Tuấn
                              </span>
                              <span className="font-label-sm bg-secondary-fixed text-on-secondary-fixed rounded px-1.5 py-[0.1rem] text-[10px] font-bold">
                                HẬU CẦN - LIÊN LẠC
                              </span>
                            </div>
                            <span className="font-body-sm text-secondary text-[12px]">
                              Ký biên bản • SĐT: 0945 667 889
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-outline text-[18px]">verified</span>
                      </div>
                    </div>
                    <span className="font-body-sm text-secondary text-[11px] italic">
                      * Chỉ tài khoản có vai trò Tình nguyện viên đã xác thực thông tin CCCD mới được gán vào đơn.
                    </span>
                  </div>

                  {/* Packing & Seal Verification Card */}
                  <div className="bg-surface-container-low flex items-center justify-between px-6 py-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary text-[20px]">qr_code_2</span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          Trạng thái đóng kiện &amp; Seal
                        </span>
                        <span className="font-body-sm text-secondary text-[11px]">
                          50/50 thiết bị đã quét mã QR định danh
                        </span>
                      </div>
                    </div>
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed font-code-num text-code-num rounded px-2 py-1 font-bold">
                      SEAL #HN-8842-OK
                    </span>
                  </div>

                  {/* Action Execution Bottom Area */}
                  <div className="bg-surface-container-lowest flex flex-col gap-2 p-6">
                    <button className="bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-headline-sm flex h-11 w-full items-center justify-center gap-2 rounded-xl shadow-md transition-all">
                      <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                      <span>Xác Nhận Xuất Kho &amp; Bàn Giao Cho Đội TNV</span>
                    </button>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex h-9 items-center justify-center gap-1.5 rounded-lg px-2 transition-colors">
                        <span className="material-symbols-outlined text-[16px]">print</span>
                        <span>In Phiếu Vận Đơn (3 Liên)</span>
                      </button>
                      <button className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex h-9 items-center justify-center gap-1.5 rounded-lg px-2 transition-colors">
                        <span className="material-symbols-outlined text-[16px]">label</span>
                        <span>In Tem Niêm Phong Vận Chuyển</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Summary Notice for Stock Transfer Module (Inter-hub) */}
                <div className="bg-tertiary-fixed/30 flex items-start gap-2 rounded-xl p-4">
                  <span className="material-symbols-outlined text-tertiary mt-0.5 shrink-0 text-[22px]">info</span>
                  <div className="font-body-sm text-body-sm text-on-tertiary-fixed flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-tertiary">
                      Chính Sách Điều Chuyển Liên Kho:
                    </span>
                    <span>
                      Khi xuất điều chuyển hàng qua HUB-02 hoặc HUB-03, trạng thái tồn kho trừ tức thì tại HUB-01 và ghi
                      tăng ngay trên hệ thống tập trung. Không áp dụng quy trình chờ xác nhận từ thủ kho nhận.
                    </span>
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

export default WarehouseDispatchPage;
