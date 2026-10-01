import { Link } from "react-router-dom";

const WarehouseDonationReceiptPage = () => {
  return (
    <div className="bg-background font-body-md text-on-surface flex min-h-screen flex-col antialiased">
      <aside className="bg-surface-container-low fixed top-0 left-0 z-50 flex h-full w-72 flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-1 flex-col overflow-y-auto">
          <div className="p-space-lg bg-surface-container">
            <div className="gap-space-sm flex items-center">
              <div className="bg-primary text-on-primary flex h-9 w-9 items-center justify-center rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-[20px]">warehouse</span>
              </div>
              <div>
                <span className="font-headline-sm text-headline-sm text-primary block font-bold tracking-tight">
                  EduShare VN
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant block font-semibold tracking-wider uppercase">
                  Kho &amp; Kỹ Thuật
                </span>
              </div>
            </div>
            <div className="mt-space-md gap-space-xs px-space-sm bg-surface-container-lowest flex w-fit items-center rounded-full py-1">
              <span className="bg-tertiary-container h-2 w-2 animate-pulse rounded-full"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Trực tuyến 63 Tỉnh Thành
              </span>
            </div>
          </div>
          <nav className="px-space-md py-space-md space-y-space-lg flex-1">
            <div className="space-y-space-xs">
              <span className="px-space-sm font-label-sm text-label-sm text-outline block font-semibold tracking-wider uppercase">
                Nhập Kho &amp; Tiếp Nhận
              </span>
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center rounded-lg py-2 transition-colors"
                to="/warehouse/receive"
              >
                <span className="material-symbols-outlined text-[20px]">fact_check</span>
                <span className="">Tiếp nhận &amp; Kiểm định</span>
              </Link>
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center rounded-lg py-2 transition-colors"
                to="/warehouse/scan-qr"
              >
                <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                <span className="">Quét QR phân luồng</span>
              </Link>
              <Link
                className="gap-space-sm px-space-sm bg-primary text-on-primary flex items-center rounded-lg py-2 font-medium shadow-sm transition-colors"
                to="/warehouse/donation-receipt"
              >
                <span className="material-symbols-outlined text-on-primary text-[20px]">inventory</span>
                <span className="text-on-primary">Phiếu trao tặng</span>
              </Link>
            </div>
            <div className="space-y-space-xs">
              <span className="px-space-sm font-label-sm text-label-sm text-outline block font-semibold tracking-wider uppercase">
                Quản Lý Kho Bãi
              </span>
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center rounded-lg py-2 transition-colors"
                to="/warehouse/inventory"
              >
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span className="">Tồn kho thiết bị</span>
              </Link>
              <Link
                className="px-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center justify-between rounded-lg py-2 transition-colors"
                to="/warehouse/racks"
              >
                <div className="gap-space-sm flex items-center">
                  <span className="material-symbols-outlined text-[20px]">shelves</span>
                  <span className="">Vị trí kệ định danh</span>
                </div>
                <span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface rounded px-1.5 py-0.5 font-medium">
                  Xem
                </span>
              </Link>
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center rounded-lg py-2 transition-colors"
                to="/warehouse/audit-report"
              >
                <span className="material-symbols-outlined text-[20px]">assignment</span>
                <span className="">Kiểm kê &amp; Báo cáo</span>
              </Link>
            </div>
            <div className="space-y-space-xs">
              <span className="px-space-sm font-label-sm text-label-sm text-outline block font-semibold tracking-wider uppercase">
                Điều Phối &amp; Vận Chuyển
              </span>
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center rounded-lg py-2 transition-colors"
                to="/warehouse/dispatch"
              >
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span className="">Lệnh điều chuyển &amp; Vận đơn</span>
              </Link>
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center rounded-lg py-2 transition-colors"
                to="/warehouse/delivery-history"
              >
                <span className="material-symbols-outlined text-[20px]">history</span>
                <span className="">Lịch sử đợt giao</span>
              </Link>
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center rounded-lg py-2 transition-colors"
                to="/warehouse/incident-report"
              >
                <span className="material-symbols-outlined text-[20px]">report_problem</span>
                <span className="">Báo cáo sự cố cá nhân</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="p-space-md bg-surface-container-lowest mx-space-md mb-space-md rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="text-outline flex items-center justify-between">
            <span className="font-label-sm text-label-sm">Phiên bản</span>
            <span className="font-code-num text-code-num text-on-surface font-semibold">v2.8.4</span>
          </div>
          <div className="text-outline mt-1 flex items-center justify-between">
            <span className="font-label-sm text-label-sm">Kỹ thuật kho</span>
            <span className="font-code-num text-code-num text-primary font-semibold">1900 6829</span>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col pl-72">
        <header className="bg-surface/90 fixed top-0 right-0 left-72 z-40 h-16 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="px-space-lg gap-space-md flex h-16 w-full items-center justify-between">
            <div className="gap-space-md flex min-w-0 items-center">
              <nav className="font-label-md text-label-md text-outline flex items-center gap-1.5 truncate">
                <span className="hover:text-on-surface cursor-pointer transition-colors">EduShare VN Kho</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="hover:text-on-surface cursor-pointer transition-colors">Nhập Kho &amp; Tiếp Nhận</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-primary truncate font-semibold">Phiếu Trao Tặng</span>
              </nav>
            </div>
            <div className="gap-space-md mx-space-md flex max-w-xl flex-1 items-center">
              <div className="relative w-full">
                <span className="material-symbols-outlined text-outline absolute top-1/2 left-3 -translate-y-1/2 text-[18px]">
                  search
                </span>
                <input
                  className="bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:ring-primary w-full rounded-lg py-2 pr-4 pl-9 transition-all focus:ring-2 focus:outline-none"
                  placeholder="Mã phiếu #DON, serial thiết bị, nhà tài trợ..."
                  type="text"
                />
              </div>
              <button
                className="bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-primary flex items-center gap-1.5 rounded-lg px-3 py-2 font-medium whitespace-nowrap shadow-sm transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
                <span className="">Quét QR nhanh</span>
              </button>
            </div>
            <div className="gap-space-md flex items-center">
              <button
                className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high relative rounded-full p-2 transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[22px]">notifications</span>
                <span className="bg-error absolute top-1.5 right-1.5 h-2 w-2 rounded-full"></span>
              </button>
              <div className="gap-space-sm pl-space-sm flex items-center">
                <div className="bg-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-label-md text-label-md text-on-surface leading-tight font-semibold">
                    Trần Hùng (TK-MB-04)
                  </span>
                  <span className="font-label-sm text-label-sm text-outline leading-tight">
                    Trưởng Kho Kỹ Thuật Hà Nội • Kho Tổng Miền Bắc (HUB-01 Hà Nội)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-background relative w-full flex-1 pt-16">
          <div className="flex w-full flex-col">
            <div className="px-space-lg py-space-md space-y-space-md">
              {/* Header Title & Quick Actions */}
              <div className="gap-space-md bg-surface-container-lowest p-space-lg flex flex-col justify-between rounded-xl shadow-sm xl:flex-row xl:items-center">
                <div className="space-y-1">
                  <div className="gap-space-sm flex flex-wrap items-center">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      Quản Lý &amp; Xác Minh Phiếu Trao Tặng
                    </h1>
                    <span className="bg-surface-container-high text-primary font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold tracking-wide">
                      <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                      Kho HUB-01 Miền Bắc • Quy Chuẩn Tiếp Nhận ISO-2024
                    </span>
                    <span className="bg-secondary-container text-on-secondary-fixed font-code-num text-label-sm inline-flex items-center gap-1 rounded-full px-2 py-0.5">
                      RBAC: Thủ kho / KTV
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-outline">
                    Quy trình tiếp nhận hiện vật đóng góp từ nhà hảo tâm, rà soát đối chiếu số lượng thực tế, dán mã QR
                    định danh và nhập kho chính ngạch.
                  </p>
                </div>
                <div className="gap-space-sm flex shrink-0 flex-wrap items-center">
                  <button
                    className="bg-surface-container-low text-on-surface hover:bg-surface-container hover:text-primary font-label-md text-label-md inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 font-semibold transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">file_download</span>
                    <span className="">Tải Bảng Kê Tiếp Nhận (.xlsx)</span>
                  </button>
                  <button
                    className="bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-container font-label-md text-label-md inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 font-semibold transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
                    <span className="">Quét QR Phiếu Trao Tặng</span>
                  </button>
                  <button
                    className="bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md inline-flex items-center gap-1.5 rounded-lg px-4 py-2 font-semibold shadow-sm transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">add_box</span>
                    <span className="">+ Nhận Kiện Hàng Mới</span>
                  </button>
                </div>
              </div>

              {/* Bento 4 Metric Cards */}
              <div className="gap-space-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {/* Metric 1 */}
                <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
                      Tổng Phiếu Tiếp Nhận
                    </span>
                    <div className="bg-surface-container-high text-primary flex h-8 w-8 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">assignment</span>
                    </div>
                  </div>
                  <div className="mt-space-sm">
                    <div className="gap-space-xs flex items-baseline">
                      <span className="font-headline-xl text-headline-xl text-on-surface font-bold">128</span>
                      <span className="font-label-md text-label-md text-outline">phiếu</span>
                    </div>
                    <div className="font-body-sm text-body-sm text-outline mt-1 flex items-center gap-1.5">
                      <span className="bg-tertiary inline-block h-2 w-2 rounded-full"></span>
                      <span className="">
                        <strong className="text-on-surface">96 phiếu</strong> đã nhập kho hoàn tất
                      </span>
                    </div>
                  </div>
                </div>
                {/* Metric 2 */}
                <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
                      Phiếu Chờ Xác Minh
                    </span>
                    <div className="bg-error-container text-error flex h-8 w-8 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">pending_actions</span>
                    </div>
                  </div>
                  <div className="mt-space-sm">
                    <div className="gap-space-xs flex items-baseline">
                      <span className="font-headline-xl text-headline-xl text-error font-bold">24</span>
                      <span className="font-label-md text-label-md text-outline">phiếu</span>
                    </div>
                    <div className="font-body-sm text-body-sm text-outline mt-1 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-error text-[15px]">alarm</span>
                      <span className="">
                        <strong className="text-on-surface">8 kiện hàng</strong> vừa cập bến sáng nay
                      </span>
                    </div>
                  </div>
                </div>
                {/* Metric 3 */}
                <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
                      Hiện Vật Vừa Xác Minh
                    </span>
                    <div className="bg-surface-container text-primary flex h-8 w-8 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">devices</span>
                    </div>
                  </div>
                  <div className="mt-space-sm">
                    <div className="gap-space-xs flex items-baseline">
                      <span className="font-headline-xl text-headline-xl text-primary font-bold">430</span>
                      <span className="font-label-md text-label-md text-outline">thiết bị</span>
                    </div>
                    <div className="font-body-sm text-body-sm text-tertiary mt-1 flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-[15px]">verified_user</span>
                      <span className="">Khớp 100% niêm phong nhà tài trợ</span>
                    </div>
                  </div>
                </div>
                {/* Metric 4 */}
                <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
                      Tỷ Lệ Khớp Khai Báo
                    </span>
                    <div className="bg-secondary-container text-on-secondary-fixed flex h-8 w-8 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">rule</span>
                    </div>
                  </div>
                  <div className="mt-space-sm">
                    <div className="gap-space-xs flex items-baseline">
                      <span className="font-headline-xl text-headline-xl text-on-surface font-bold">98.6%</span>
                      <span className="font-label-md text-label-md text-tertiary font-semibold">+1.2%</span>
                    </div>
                    <div className="font-body-sm text-body-sm text-outline mt-1 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-tertiary text-[15px]">check_circle</span>
                      <span className="">Chuẩn minh bạch EduShare VN</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter & Search Bar */}
              <div className="bg-surface-container-lowest p-space-md gap-space-md flex flex-col items-stretch justify-between rounded-xl shadow-sm lg:flex-row lg:items-center">
                <div className="gap-space-sm flex flex-1 flex-col lg:flex-row lg:items-center">
                  <div className="relative w-full max-w-lg flex-1">
                    <span className="material-symbols-outlined text-outline absolute top-1/2 left-3 -translate-y-1/2 text-[18px]">
                      search
                    </span>
                    <input
                      className="bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:ring-primary w-full rounded-lg py-2 pr-4 pl-9 transition-all focus:ring-2 focus:outline-none"
                      placeholder="Tìm kiếm theo mã phiếu (#DON-2024-xxxx), nhà hảo tâm, SĐT, chủng loại..."
                      type="text"
                    />
                  </div>
                  <div className="gap-space-xs flex w-full items-center overflow-x-auto lg:w-auto">
                    <select className="bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:ring-primary shrink-0 cursor-pointer rounded-lg px-3 py-2 focus:ring-2 focus:outline-none">
                      <option>Tất cả trạng thái đối soát</option>
                      <option>Chờ xác minh thực tế</option>
                      <option>Đã xác minh 1 phần</option>
                      <option>Hoàn tất nhập kho</option>
                      <option>Có ghi chú sai lệch</option>
                    </select>
                    <select className="bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:ring-primary shrink-0 cursor-pointer rounded-lg px-3 py-2 focus:ring-2 focus:outline-none">
                      <option>Tất cả nguồn tài trợ</option>
                      <option>Doanh nghiệp &amp; Tập đoàn</option>
                      <option>Cá nhân / Nhà hảo tâm</option>
                      <option>Tổ chức giáo dục / Cựu SV</option>
                    </select>
                    <select className="bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:ring-primary shrink-0 cursor-pointer rounded-lg px-3 py-2 focus:ring-2 focus:outline-none">
                      <option>Kho: HUB-01 Miền Bắc</option>
                      <option>Kho: HUB-02 Miền Trung</option>
                      <option>Kho: HUB-03 Miền Nam</option>
                    </select>
                  </div>
                </div>
                <div className="gap-space-xs mt-3 flex shrink-0 items-center justify-end lg:mt-0">
                  <button
                    className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md inline-flex items-center gap-1.5 rounded-lg px-3 py-2 transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">tune</span>
                    <span className="">Bộ lọc nâng cao</span>
                  </button>
                  <button
                    className="bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md inline-flex items-center gap-1.5 rounded-lg px-3 py-2 transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                    <span className="">Xuất Báo Cáo Đối Soát</span>
                  </button>
                </div>
              </div>

              {/* MAIN TWO-COLUMN WORKSPACE (7 : 5) */}
              <div className="gap-space-md grid grid-cols-1 items-start lg:grid-cols-12">
                {/* LEFT COLUMN (7 COLS): LIST OF DONATION TICKETS */}
                <div className="space-y-space-md overflow-hidden lg:col-span-7">
                  <div className="bg-surface-container-lowest flex flex-col overflow-hidden rounded-xl shadow-sm">
                    {/* Tab Switcher */}
                    <div className="gap-space-sm px-space-md pt-space-md bg-surface-container-low/40 flex items-center overflow-x-auto border-b-0">
                      <button className="px-space-md text-primary font-headline-sm text-headline-sm border-primary border-b-2 py-2.5 whitespace-nowrap">
                        Tất cả phiếu (24)
                      </button>
                      <button className="px-space-md text-outline hover:text-on-surface font-body-md text-body-md flex items-center gap-1 py-2.5 whitespace-nowrap">
                        <span className="">Chờ đối soát thực tế</span>
                        <span className="bg-error-container text-error text-label-sm rounded-full px-1.5 py-0.5 font-semibold">
                          16
                        </span>
                      </button>
                      <button className="px-space-md text-outline hover:text-on-surface font-body-md text-body-md flex items-center gap-1 py-2.5 whitespace-nowrap">
                        <span className="">Đã xác minh chờ nhập</span>
                        <span className="bg-surface-container text-primary text-label-sm rounded-full px-1.5 py-0.5 font-semibold">
                          8
                        </span>
                      </button>
                      <button className="px-space-md text-outline hover:text-on-surface font-body-md text-body-md flex items-center gap-1 py-2.5 whitespace-nowrap">
                        <span className="">Có sai lệch số lượng</span>
                        <span className="bg-secondary-fixed text-on-secondary-fixed text-label-sm rounded-full px-1.5 py-0.5 font-semibold">
                          1
                        </span>
                      </button>
                    </div>
                    {/* Table Records */}
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[700px] border-collapse text-left">
                        <thead>
                          <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
                            <th className="px-space-md py-3">Mã Phiếu &amp; Thời Gian</th>
                            <th className="px-space-md py-3">Nhà Hảo Tâm / Đơn Vị</th>
                            <th className="px-space-md py-3">Hiện Vật Khai Báo</th>
                            <th className="px-space-md py-3">Tình Trạng Niêm Phong</th>
                            <th className="px-space-md py-3 text-right">Trạng Thái</th>
                          </tr>
                        </thead>
                        <tbody className="font-body-md text-body-md divide-y divide-transparent">
                          {/* ROW 1 (SELECTED / CURRENTLY ACTIVE) */}
                          <tr className="bg-surface-container-high/60 border-l-primary relative cursor-pointer border-l-4 transition-colors">
                            <td className="px-space-md py-3.5">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-[18px]">
                                  radio_button_checked
                                </span>
                                <div>
                                  <span className="font-code-num text-code-num text-primary block font-bold">
                                    #DON-2024-8842
                                  </span>
                                  <span className="font-body-sm text-body-sm text-outline">22/10/2024 • 08:30</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-space-md py-3.5">
                              <div>
                                <span className="font-headline-sm text-headline-sm text-on-surface block">
                                  Tập đoàn FPT
                                </span>
                                <span className="font-body-sm text-body-sm text-outline">
                                  Đại diện: Ông Trần Minh Tuấn (0912.839.xxx)
                                </span>
                              </div>
                            </td>
                            <td className="px-space-md py-3.5">
                              <span className="font-label-md text-label-md text-on-surface block font-semibold">
                                30 ThinkPad T480s
                              </span>
                              <span className="font-body-sm text-body-sm text-outline">20 Màn hình Dell 24" IPS</span>
                            </td>
                            <td className="px-space-md py-3.5">
                              <span className="font-body-sm text-body-sm text-tertiary inline-flex items-center gap-1">
                                <span className="material-symbols-outlined text-[15px]">security</span>2 kiện niêm phong
                                tốt
                              </span>
                            </td>
                            <td className="px-space-md py-3.5 text-right">
                              <span className="bg-error-container text-error font-label-sm text-label-sm inline-flex items-center rounded-full px-2.5 py-1 font-semibold whitespace-nowrap">
                                Chờ đối soát thực tế
                              </span>
                            </td>
                          </tr>
                          {/* Row 2 */}
                          <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                            <td className="px-space-md py-3.5">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-outline text-[18px]">
                                  radio_button_unchecked
                                </span>
                                <div>
                                  <span className="font-code-num text-code-num text-on-surface block font-semibold">
                                    #DON-2024-9102
                                  </span>
                                  <span className="font-body-sm text-body-sm text-outline">23/10/2024 • 14:15</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-space-md py-3.5">
                              <div>
                                <span className="font-headline-sm text-headline-sm text-on-surface block">
                                  Quỹ Hy Vọng (FPT Hope)
                                </span>
                                <span className="font-body-sm text-body-sm text-outline">
                                  Chương trình: Máy tính cho em
                                </span>
                              </div>
                            </td>
                            <td className="px-space-md py-3.5">
                              <span className="font-label-md text-label-md text-on-surface block font-semibold">
                                10 Bộ lưu điện Santak
                              </span>
                              <span className="font-body-sm text-body-sm text-outline">Model 1000E Pro (Mới 100%)</span>
                            </td>
                            <td className="px-space-md py-3.5">
                              <span className="font-body-sm text-body-sm text-tertiary inline-flex items-center gap-1">
                                <span className="material-symbols-outlined text-[15px]">security</span>1 Pallet thùng gỗ
                              </span>
                            </td>
                            <td className="px-space-md py-3.5 text-right">
                              <span className="bg-surface-container-high text-primary font-label-sm text-label-sm inline-flex items-center rounded-full px-2.5 py-1 font-semibold whitespace-nowrap">
                                Đã xác minh một phần
                              </span>
                            </td>
                          </tr>
                          {/* Row 3 */}
                          <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                            <td className="px-space-md py-3.5">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-outline text-[18px]">
                                  radio_button_unchecked
                                </span>
                                <div>
                                  <span className="font-code-num text-code-num text-on-surface block font-semibold">
                                    #DON-2024-9115
                                  </span>
                                  <span className="font-body-sm text-body-sm text-outline">24/10/2024 • 09:10</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-space-md py-3.5">
                              <div>
                                <span className="font-headline-sm text-headline-sm text-on-surface block">
                                  VNPT Hưng Yên
                                </span>
                                <span className="font-body-sm text-body-sm text-outline">Đơn vị viễn thông tỉnh</span>
                              </div>
                            </td>
                            <td className="px-space-md py-3.5">
                              <span className="font-label-md text-label-md text-on-surface block font-semibold">
                                02 Switch Cisco 24-Port
                              </span>
                              <span className="font-body-sm text-body-sm text-outline">05 Cuộn cáp UTP Cat6</span>
                            </td>
                            <td className="px-space-md py-3.5">
                              <span className="font-body-sm text-body-sm text-tertiary inline-flex items-center gap-1">
                                <span className="material-symbols-outlined text-[15px]">security</span>
                                Nguyên đai tem VNPT
                              </span>
                            </td>
                            <td className="px-space-md py-3.5 text-right">
                              <span className="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm inline-flex items-center rounded-full px-2.5 py-1 font-semibold whitespace-nowrap">
                                Đã xác minh xong
                              </span>
                            </td>
                          </tr>
                          {/* Row 4 */}
                          <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                            <td className="px-space-md py-3.5">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-outline text-[18px]">
                                  radio_button_unchecked
                                </span>
                                <div>
                                  <span className="font-code-num text-code-num text-on-surface block font-semibold">
                                    #DON-2024-9120
                                  </span>
                                  <span className="font-body-sm text-body-sm text-outline">24/10/2024 • 11:20</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-space-md py-3.5">
                              <div>
                                <span className="font-headline-sm text-headline-sm text-on-surface block">
                                  Hội Cựu SV ĐH Bách Khoa
                                </span>
                                <span className="font-body-sm text-body-sm text-outline">Khoa CNTT - Khóa 52</span>
                              </div>
                            </td>
                            <td className="px-space-md py-3.5">
                              <span className="font-label-md text-label-md text-on-surface block font-semibold">
                                15 Bộ PC Dell OptiPlex
                              </span>
                              <span className="font-body-sm text-body-sm text-outline">
                                Đầy đủ bàn phím &amp; chuột
                              </span>
                            </td>
                            <td className="px-space-md py-3.5">
                              <span className="font-body-sm text-body-sm text-tertiary inline-flex items-center gap-1">
                                <span className="material-symbols-outlined text-[15px]">security</span>
                                Thùng carton dán băng dính
                              </span>
                            </td>
                            <td className="px-space-md py-3.5 text-right">
                              <span className="bg-error-container text-error font-label-sm text-label-sm inline-flex items-center rounded-full px-2.5 py-1 font-semibold whitespace-nowrap">
                                Chờ đối soát thực tế
                              </span>
                            </td>
                          </tr>
                          {/* Row 5 */}
                          <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                            <td className="px-space-md py-3.5">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-outline text-[18px]">
                                  radio_button_unchecked
                                </span>
                                <div>
                                  <span className="font-code-num text-code-num text-on-surface block font-semibold">
                                    #DON-2024-9088
                                  </span>
                                  <span className="font-body-sm text-body-sm text-outline">20/10/2024 • 16:40</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-space-md py-3.5">
                              <div>
                                <span className="font-headline-sm text-headline-sm text-on-surface block">
                                  Chị Phạm Hồng Anh
                                </span>
                                <span className="font-body-sm text-body-sm text-outline">
                                  Cá nhân hảo tâm (Q. Hoàn Kiếm, HN)
                                </span>
                              </div>
                            </td>
                            <td className="px-space-md py-3.5">
                              <span className="font-label-md text-label-md text-on-surface block font-semibold">
                                05 Apple iPad Gen 9
                              </span>
                              <span className="font-body-sm text-body-sm text-outline">
                                Kèm bút cảm ứng &amp; bao da
                              </span>
                            </td>
                            <td className="px-space-md py-3.5">
                              <span className="font-body-sm text-body-sm text-tertiary inline-flex items-center gap-1">
                                <span className="material-symbols-outlined text-[15px]">verified</span>
                                Nguyên seal hộp Apple
                              </span>
                            </td>
                            <td className="px-space-md py-3.5 text-right">
                              <span className="bg-surface-container text-outline font-label-sm text-label-sm inline-flex items-center rounded-full px-2.5 py-1 font-semibold whitespace-nowrap">
                                Hoàn tất nhập kho
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Pagination */}
                    <div className="p-space-md bg-surface-container-low/60 font-body-sm text-body-sm text-outline flex items-center justify-between">
                      <span className="">
                        Hiển thị <strong>1 - 5</strong> trên <strong>24</strong> phiếu chờ xử lý
                      </span>
                      <div className="flex items-center gap-1">
                        <button className="bg-surface-container-lowest text-outline hover:text-on-surface rounded px-2.5 py-1 transition-colors">
                          Trước
                        </button>
                        <button className="bg-primary text-on-primary rounded px-2.5 py-1 font-semibold">1</button>
                        <button className="bg-surface-container-lowest text-outline hover:text-on-surface rounded px-2.5 py-1 transition-colors">
                          2
                        </button>
                        <button className="bg-surface-container-lowest text-outline hover:text-on-surface rounded px-2.5 py-1 transition-colors">
                          3
                        </button>
                        <button className="bg-surface-container-lowest text-outline hover:text-on-surface rounded px-2.5 py-1 transition-colors">
                          Sau
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Quick Guideline Note On Warehouse Receipt */}
                  <div className="bg-surface-container-lowest p-space-md gap-space-md flex items-start rounded-xl shadow-sm">
                    <div className="bg-surface-container-high text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[24px]">verified</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Lưu ý khi đối soát tiếp nhận hiện vật
                      </h4>
                      <p className="font-body-sm text-body-sm text-outline">
                        Mỗi thiết bị khi mở kiện cần được đối chiếu ngay với thông tin serial trên bao bì. Trong trường
                        hợp phụ kiện (sạc, cáp kết nối) bị thiếu hoặc hiện vật bị cấn móp do vận chuyển, thủ kho ghi
                        nhận trực tiếp vào ô sai lệch trước khi thực hiện cấp mã QR.
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN (5 COLS): DETAILED RECONCILIATION FOR SELECTED TICKET */}
                <div className="space-y-space-md lg:col-span-5">
                  {/* CARD 1: DONATION PROFILE SUMMARY */}
                  <div className="bg-surface-container-lowest p-space-md space-y-space-md rounded-xl shadow-sm">
                    <div className="pb-space-sm flex flex-col justify-between gap-2 border-b-0 sm:flex-row sm:items-center">
                      <div className="gap-space-sm flex items-center">
                        <div className="bg-primary text-on-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                          <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                        </div>
                        <div>
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Hồ Sơ Phiếu #DON-2024-8842
                          </span>
                          <span className="font-label-sm text-label-sm text-outline block">
                            Nhà hảo tâm: Doanh Nghiệp Tài Trợ
                          </span>
                        </div>
                      </div>
                      <span className="bg-error-container text-error font-label-sm text-label-sm inline-flex shrink-0 items-center justify-center gap-1 rounded-full px-2.5 py-1 font-semibold">
                        <span className="bg-error h-2 w-2 animate-pulse rounded-full"></span>
                        Đang Chờ Xác Minh
                      </span>
                    </div>
                    <div className="gap-space-sm bg-surface-container-low p-space-md grid grid-cols-1 rounded-lg sm:grid-cols-2">
                      <div>
                        <span className="font-label-sm text-label-sm text-outline block tracking-wider uppercase">
                          Đơn vị gửi
                        </span>
                        <span className="font-headline-sm text-headline-sm text-on-surface block font-semibold">
                          Tập đoàn FPT
                        </span>
                        <span className="font-body-sm text-body-sm text-outline">Trụ sở Duy Tân, Cầu Giấy, HN</span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-outline block tracking-wider uppercase">
                          Người đại diện
                        </span>
                        <span className="font-label-md text-label-md text-on-surface block font-semibold">
                          Ông Trần Minh Tuấn
                        </span>
                        <span className="font-code-num text-code-num text-outline">0912.839.xxx (Đã xác thực OTP)</span>
                      </div>
                    </div>
                    {/* Photo Of Arrived Packages */}
                    <div className="space-y-space-xs">
                      <span className="font-label-sm text-label-sm text-outline block tracking-wider uppercase">
                        Ảnh Thực Tế Kiện Hàng Tại Sảnh Tiếp Nhận
                      </span>
                      <div className="bg-surface-container relative h-36 overflow-hidden rounded-lg">
                        <img
                          alt="A clean industrial warehouse receiving dock in Hanoi with cardboard pallets and tech boxes clearly sealed with security tape. Morning sunlight streams through high warehouse windows highlighting Lenovo and Dell logos on outer packaging, strictly adhering to realistic corporate photo style."
                          className="h-full w-full object-cover"
                          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                        />
                        <div className="bg-on-background/80 text-surface font-label-sm text-label-sm absolute bottom-2 left-2 flex items-center gap-1 rounded px-2 py-0.5">
                          <span className="material-symbols-outlined text-[14px]">photo_camera</span>
                          <span className="">Ảnh chụp tiếp nhận 08:35 AM • KTV Nguyễn Đức Thành</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2: ITEM-BY-ITEM VERIFICATION */}
                  <div className="bg-surface-container-lowest p-space-md space-y-space-md rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Bảng Đối Soát Từng Dòng Hàng Thực Tế
                        </h3>
                        <p className="font-body-sm text-body-sm text-outline">
                          KTV kiểm tra số lượng thực tế trước khi cấp mã QR
                        </p>
                      </div>
                      <span className="font-label-md text-label-md text-primary font-bold whitespace-nowrap">
                        2 / 2 Dòng Hàng
                      </span>
                    </div>
                    {/* Item Line 1 */}
                    <div className="p-space-md bg-surface-container-low space-y-space-sm border-l-tertiary rounded-lg border-l-4">
                      <div className="gap-space-sm flex items-start justify-between">
                        <div className="gap-space-xs flex items-start">
                          <input
                            defaultChecked
                            className="text-primary focus:ring-primary mt-1 h-4 w-4 shrink-0 cursor-pointer rounded"
                            id="item-check-1"
                            type="checkbox"
                          />
                          <div>
                            <label
                              className="font-headline-sm text-headline-sm text-on-surface cursor-pointer font-bold"
                              htmlFor="item-check-1"
                            >
                              Laptop Lenovo ThinkPad T480s
                            </label>
                            <span className="font-body-sm text-body-sm text-outline block">
                              Core i5-8350U, RAM 8GB, SSD 256GB
                            </span>
                          </div>
                        </div>
                        <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm inline-flex shrink-0 items-center gap-1 rounded px-2 py-0.5 font-semibold">
                          <span className="material-symbols-outlined text-[14px]">check</span>
                          Đã Khớp Số Lượng
                        </span>
                      </div>
                      <div className="gap-space-sm bg-surface-container-lowest p-space-sm grid grid-cols-2 rounded">
                        <div>
                          <span className="font-label-sm text-label-sm text-outline block">Số lượng khai báo</span>
                          <span className="font-code-num text-headline-sm text-on-surface font-bold">30 máy</span>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-outline block">Thực tế tiếp nhận</span>
                          <span className="font-code-num text-headline-sm text-tertiary font-bold">
                            30 máy (Đủ 100%)
                          </span>
                        </div>
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-tertiary shrink-0 text-[16px]">
                          check_circle
                        </span>
                        <span className="">Đầy đủ 30 bộ sạc cáp 65W Zin, ngoại quan Grade A/B nguyên vẹn.</span>
                      </div>
                      {/* Static Shelf Position */}
                      <div className="bg-surface-container-high/70 flex items-center justify-between rounded p-2">
                        <div className="flex min-w-0 items-center gap-1.5">
                          <span className="material-symbols-outlined text-primary shrink-0 text-[18px]">shelves</span>
                          <span className="font-body-sm text-body-sm text-on-surface truncate">
                            Vị trí kệ định danh dự kiến:{" "}
                            <strong className="font-code-num text-primary">Kệ A2 - Tầng 04 (Ô 12)</strong>
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm bg-surface-container-lowest text-outline ml-2 inline-flex shrink-0 items-center gap-1 rounded px-2 py-0.5 font-semibold">
                          <span className="material-symbols-outlined text-[12px]">lock</span>
                          Chế độ chỉ xem
                        </span>
                      </div>
                    </div>
                    {/* Item Line 2 */}
                    <div className="p-space-md bg-surface-container-low space-y-space-sm border-l-tertiary rounded-lg border-l-4">
                      <div className="gap-space-sm flex items-start justify-between">
                        <div className="gap-space-xs flex items-start">
                          <input
                            defaultChecked
                            className="text-primary focus:ring-primary mt-1 h-4 w-4 shrink-0 cursor-pointer rounded"
                            id="item-check-2"
                            type="checkbox"
                          />
                          <div>
                            <label
                              className="font-headline-sm text-headline-sm text-on-surface cursor-pointer font-bold"
                              htmlFor="item-check-2"
                            >
                              Màn Hình Dell 24 inch FHD IPS
                            </label>
                            <span className="font-body-sm text-body-sm text-outline block">
                              Model P2419H (Chân đế nâng hạ, xoay dọc)
                            </span>
                          </div>
                        </div>
                        <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm inline-flex shrink-0 items-center gap-1 rounded px-2 py-0.5 font-semibold">
                          <span className="material-symbols-outlined text-[14px]">check</span>
                          Đã Khớp Số Lượng
                        </span>
                      </div>
                      <div className="gap-space-sm bg-surface-container-lowest p-space-sm grid grid-cols-2 rounded">
                        <div>
                          <span className="font-label-sm text-label-sm text-outline block">Số lượng khai báo</span>
                          <span className="font-code-num text-headline-sm text-on-surface font-bold">20 chiếc</span>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-outline block">Thực tế tiếp nhận</span>
                          <span className="font-code-num text-headline-sm text-tertiary font-bold">
                            20 chiếc (Đủ 100%)
                          </span>
                        </div>
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-tertiary shrink-0 text-[16px]">
                          check_circle
                        </span>
                        <span className="">20 thùng carton nguyên seal xốp, kèm đầy đủ dây nguồn và cáp HDMI.</span>
                      </div>
                      {/* Static Shelf Position */}
                      <div className="bg-surface-container-high/70 flex items-center justify-between rounded p-2">
                        <div className="flex min-w-0 items-center gap-1.5">
                          <span className="material-symbols-outlined text-primary shrink-0 text-[18px]">shelves</span>
                          <span className="font-body-sm text-body-sm text-on-surface truncate">
                            Vị trí kệ định danh dự kiến:{" "}
                            <strong className="font-code-num text-primary">Kệ B1 - Tầng 01 (Ô 05)</strong>
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm bg-surface-container-lowest text-outline ml-2 inline-flex shrink-0 items-center gap-1 rounded px-2 py-0.5 font-semibold">
                          <span className="material-symbols-outlined text-[12px]">lock</span>
                          Chế độ chỉ xem
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CARD 3: AUDIT SEAL & WAREHOUSE DISPATCH NOTE */}
                  <div className="bg-surface-container-lowest p-space-md space-y-space-md rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Ghi Chú Tiếp Nhận &amp; Lập Biên Nhận Điện Tử
                      </span>
                      <span className="font-code-num text-label-sm text-primary font-bold">
                        RFID: RFID-VN-DON-8842-MB
                      </span>
                    </div>
                    <div className="space-y-space-xs">
                      <label className="font-label-sm text-label-sm text-outline block tracking-wider uppercase">
                        Ý Kiến Đánh Giá Ngoại Quan Của Thủ Kho
                      </label>
                      <textarea
                        className="bg-surface-container-low font-body-sm text-body-sm text-on-surface w-full cursor-default resize-none rounded-lg p-2.5 focus:outline-none"
                        defaultValue="Kiện hàng nguyên niêm phong nhà tài trợ FPT, ngoại quan sạch đẹp, đầy đủ phụ kiện. Sẵn sàng chuyển tiếp luồng Kiểm định kỹ thuật và dán nhãn EduShare Code."
                        readOnly
                        rows="3"
                      ></textarea>
                    </div>
                    {/* Primary Action Buttons */}
                    <div className="space-y-space-xs pt-space-xs">
                      <button
                        className="px-space-md bg-primary text-on-primary hover:bg-primary-container font-headline-sm text-headline-sm flex w-full items-center justify-center gap-2 rounded-lg py-3 font-semibold shadow-sm transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">inventory</span>
                        <span className="">XÁC NHẬN NHẬP CÁC DÒNG ĐÃ XÁC MINH VÀO KHO</span>
                      </button>
                      <div className="gap-space-sm pt-space-xs grid grid-cols-2">
                        <button
                          className="bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 font-semibold transition-colors"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">print</span>
                          <span className="">In Biên Nhận Tạm Thời</span>
                        </button>
                        <button
                          className="bg-surface-container-low hover:bg-error-container hover:text-error text-outline font-label-md text-label-md flex items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 font-semibold transition-colors"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">report_problem</span>
                          <span className="">Báo Cáo Sai Lệch Cho Admin</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* CARD 4: RBAC OPERATIONAL CONSTRAINTS */}
                  <div className="bg-surface-container-low/70 p-space-md space-y-space-xs rounded-xl">
                    <div className="text-outline flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">policy</span>
                      <span className="font-label-sm text-label-sm text-on-surface font-bold tracking-wider uppercase">
                        Ràng Buộc Nghiệp Vụ Cổng Kho (RBAC v2.8.4)
                      </span>
                    </div>
                    <ul className="font-body-sm text-body-sm text-outline list-disc space-y-1 pl-5">
                      <li className="">
                        Vị trí kệ định danh hiển thị tĩnh (chế độ chỉ xem), KTV không tự ý chỉnh sửa quy hoạch kệ lưu
                        trữ.
                      </li>
                      <li className="">
                        Kho không có quyền sửa đổi nội dung cam kết của nhà tài trợ (chỉ đối soát và ghi chú
                        thừa/thiếu).
                      </li>
                      <li className="">
                        Sau khi bấm xác nhận nhập kho, hệ thống tự động sinh <strong>Biên nhận điện tử</strong> đồng bộ
                        lên App nhà hảo tâm.
                      </li>
                      <li className="">
                        Nghiêm cấm tự ý điều chuyển hoặc xuất kho khi chưa có Lệnh Điều Phối được Admin duyệt.
                      </li>
                    </ul>
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

export default WarehouseDonationReceiptPage;
