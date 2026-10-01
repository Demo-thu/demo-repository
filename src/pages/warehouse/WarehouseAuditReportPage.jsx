import { Link } from "react-router-dom";

const WarehouseAuditReportPage = () => {
  return (
    <div className="bg-surface font-body-md text-on-surface flex min-h-screen flex-col antialiased">
      <aside className="bg-surface-container-lowest fixed top-0 left-0 z-50 flex h-full w-72 flex-col shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="bg-surface-container-lowest flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-1">
            <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
              <span className="material-symbols-outlined text-on-primary text-[18px]">warehouse</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface leading-tight">EduShare VN</span>
              <span className="font-label-sm text-label-sm text-primary">CỔNG KỸ THUẬT</span>
            </div>
          </div>
          <span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2 py-0.5">
            <span className="bg-tertiary h-1.5 w-1.5 rounded-full"></span>63 Tỉnh
          </span>
        </div>
        <div className="flex-1 overflow-y-auto px-2 py-2">
          <nav className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <div className="font-label-sm text-label-sm text-outline px-2 py-1 tracking-wider uppercase">
                Nhập Kho &amp; Tiếp Nhận
              </div>
              <Link
                className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                to="/warehouse/receive"
              >
                <span className="material-symbols-outlined text-[20px]">fact_check</span>
                <span>Tiếp nhận &amp; Kiểm định</span>
              </Link>
              <Link
                className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                to="/warehouse/scan-qr"
              >
                <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                <span>Quét QR phân luồng</span>
              </Link>
              <Link
                className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                to="/warehouse/donation-receipt"
              >
                <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                <span>Phiếu trao tặng</span>
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-label-sm text-label-sm text-outline px-2 py-1 tracking-wider uppercase">
                Quản Lý Kho Bãi
              </div>
              <Link
                className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                to="/warehouse/inventory"
              >
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span>Tồn kho thiết bị</span>
              </Link>
              <Link
                className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container hover:text-on-surface flex items-center justify-between rounded-lg px-2 py-2 transition-colors"
                to="/warehouse/racks"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">shelves</span>
                  <span>Vị trí kệ định danh</span>
                </div>
                <span className="bg-surface-container font-label-sm text-label-sm text-secondary rounded px-1.5 py-0.5">
                  Chỉ xem
                </span>
              </Link>
              <Link
                className="bg-primary text-on-primary font-label-md text-label-md flex items-center gap-2 rounded-lg px-2 py-2 shadow-sm transition-colors"
                to="/warehouse/audit-report"
              >
                <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                <span>Kiểm kê &amp; Báo cáo</span>
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-label-sm text-label-sm text-outline px-2 py-1 tracking-wider uppercase">
                Điều Phối &amp; Vận Chuyển
              </div>
              <Link
                className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                to="/warehouse/dispatch"
              >
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span>Lệnh điều chuyển &amp; Vận đơn</span>
              </Link>
              <Link
                className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                to="/warehouse/delivery-history"
              >
                <span className="material-symbols-outlined text-[20px]">history</span>
                <span>Lịch sử đợt giao</span>
              </Link>
              <Link
                className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                to="/warehouse/incident-report"
              >
                <span className="material-symbols-outlined text-[20px]">warning</span>
                <span>Báo cáo sự cố kho</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="bg-surface-container-low mx-2 mb-2 flex flex-col gap-1 rounded-lg p-2">
          <div className="text-on-surface-variant font-label-sm text-label-sm flex items-center justify-between">
            <span>Bản dựng</span>
            <span className="font-code-num text-code-num text-on-surface font-semibold">v2.8.4-PROD</span>
          </div>
          <div className="text-on-surface-variant font-label-sm text-label-sm flex items-center justify-between">
            <span>Kỹ thuật kho</span>
            <span className="font-code-num text-code-num text-primary font-semibold">1900 6829</span>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col pl-72">
        <header className="bg-surface-container-lowest/90 fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between gap-4 px-4 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-primary-container text-on-primary-container font-label-sm text-label-sm rounded px-2 py-1 font-semibold tracking-wide">
                HUB-01 KHO &amp; KỸ THUẬT
              </span>
            </div>
            <div className="text-on-surface-variant font-body-sm text-body-sm hidden items-center gap-1.5 xl:flex">
              <span className="hover:text-on-surface cursor-pointer">EduShare VN Kho</span>
              <span className="material-symbols-outlined text-outline text-[14px]">chevron_right</span>
              <span className="hover:text-on-surface cursor-pointer">Quản Lý Kho Bãi</span>
              <span className="material-symbols-outlined text-outline text-[14px]">chevron_right</span>
              <span className="font-label-md text-label-md text-primary font-semibold">Kiểm Kê &amp; Báo Cáo</span>
            </div>
          </div>
          <div className="flex max-w-xl flex-1 items-center justify-end gap-2">
            <div className="relative hidden w-full max-w-md md:block">
              <span className="material-symbols-outlined text-outline absolute top-1/2 left-3 -translate-y-1/2 text-[18px]">
                search
              </span>
              <input
                className="bg-surface font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:ring-primary w-full rounded-lg border-none py-1.5 pr-3 pl-9 focus:ring-1 focus:outline-none"
                placeholder="Mã kiểm kê, vận đơn, serial, barcode..."
                type="text"
              />
            </div>
            <button
              className="bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">barcode_scanner</span>
              <span className="hidden sm:inline">Quét Barcode/RFID</span>
            </button>
            <div className="text-on-surface-variant flex items-center gap-1">
              <button
                className="hover:bg-surface-container relative flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">notifications</span>
                <span className="bg-error absolute top-2 right-2 h-2 w-2 rounded-full"></span>
              </button>
              <button
                className="hover:bg-surface-container flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">help_outline</span>
              </button>
            </div>
            <div className="bg-outline-variant mx-1 hidden h-7 w-[1px] sm:block"></div>
            <div className="flex items-center gap-2.5 pl-1">
              <div className="bg-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
              <div className="hidden flex-col text-left lg:flex">
                <span className="font-label-md text-label-md text-on-surface leading-tight font-semibold">
                  Trần Hùng (TK-MB-04)
                </span>
                <span className="font-label-sm text-label-sm text-outline leading-tight">
                  Trưởng Kho Kỹ Thuật • HUB-01 Hà Nội
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-surface min-h-screen w-full pt-16">
          <div className="flex w-full flex-col">
            {/* Top Context Bar & Audit Banner */}
            <div className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm flex w-full flex-wrap items-center justify-between gap-3 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="bg-primary text-on-primary inline-flex items-center gap-1.5 rounded px-2 py-0.5 font-semibold tracking-wider uppercase">
                  <span className="material-symbols-outlined text-[14px]">sensors</span>
                  RFID UHF 915MHz Active
                </span>
                <span className="text-outline">•</span>
                <span className="text-on-surface font-medium">KHO TỔNG MIỀN BẮC (HUB-01 HÀ NỘI)</span>
                <span className="text-outline">•</span>
                <span className="text-secondary">CHU KỲ KIỂM KÊ THÁNG 10/2024</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-tertiary inline-flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[15px]">verified_user</span>
                  QUY TRÌNH KIỂM KÊ RFID CHUẨN ISO-27001
                </span>
                <span className="text-outline">•</span>
                <span className="text-outline font-code-num text-code-num">EDU-AUDIT-v2.8.4</span>
              </div>
            </div>

            <div className="mx-auto flex w-full max-w-[1720px] flex-col gap-6 p-4 lg:p-6">
              {/* Business Header & Actions */}
              <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
                <div className="flex max-w-3xl flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      Kiểm Kê Kho &amp; Báo Cáo Sai Lệch Tồn
                    </h1>
                    <span className="bg-surface-container-high text-primary font-label-sm text-label-sm rounded px-2 py-0.5 font-semibold">
                      RBAC: THỦ KHO ĐỐI SOÁT
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Hệ thống đối soát hiện vật thực tế qua sóng RFID UHF 915MHz, phát hiện sai lệch vị trí, tình trạng
                    hao mòn và tự động lập biên bản kiểm toán gửi Admin Tổng duyệt điều chỉnh sổ cái EduLedger.
                  </p>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    className="bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-1.5 rounded-lg px-3 py-2 shadow-sm transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-tertiary text-[18px]">file_download</span>
                    <span>Xuất Báo Cáo Kiểm Toán (.xlsx/.pdf)</span>
                  </button>
                  <button
                    className="bg-surface-container-high text-primary hover:bg-primary-fixed font-label-md text-label-md flex items-center gap-1.5 rounded-lg px-3 py-2 shadow-sm transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">cell_tower</span>
                    <span>Quét Đối Soát RFID Khay/Kệ</span>
                  </button>
                  <button
                    className="bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md flex items-center gap-1.5 rounded-lg px-4 py-2 shadow-sm transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">add_circle</span>
                    <span>Tạo Phiếu Kiểm Kê Mới</span>
                  </button>
                </div>
              </div>

              {/* Bento 4 Kpi Summary Cards */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {/* Kpi 1 */}
                <div className="bg-surface-container-lowest relative flex flex-col justify-between gap-3 overflow-hidden rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                      Tổng Thiết Bị Đã Kiểm Kê
                    </span>
                    <div className="bg-surface-container-low text-primary flex h-8 w-8 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">fact_check</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-xl text-headline-xl text-on-surface tracking-tight">14,890</span>
                      <span className="font-label-md text-label-md text-outline">/ 15,240 máy</span>
                    </div>
                    <div className="bg-surface-container mt-1 h-2 w-full overflow-hidden rounded-full">
                      <div className="bg-primary h-full rounded-full" style={{ width: "97.7%" }}></div>
                    </div>
                  </div>
                  <div className="text-on-surface-variant font-body-sm text-body-sm flex items-center justify-between pt-1">
                    <span className="text-tertiary flex items-center gap-0.5 font-semibold">
                      <span className="material-symbols-outlined text-[15px]">trending_up</span> 97.7% tiến độ
                    </span>
                    <span>Còn 350 máy Kệ D</span>
                  </div>
                </div>
                {/* Kpi 2 */}
                <div className="bg-surface-container-lowest relative flex flex-col justify-between gap-3 overflow-hidden rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                      Tỷ Lệ Khớp Thực Tế
                    </span>
                    <div className="bg-surface-container-low text-tertiary flex h-8 w-8 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">task_alt</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-xl text-headline-xl text-tertiary tracking-tight">99.4%</span>
                      <span className="font-label-sm text-label-sm bg-surface-container text-tertiary rounded px-1.5 py-0.5 font-medium">
                        Đạt Chuẩn
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      14,800 máy khớp 100% vị trí &amp; mã định danh
                    </p>
                  </div>
                  <div className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1.5 pt-1">
                    <span className="bg-tertiary h-2 w-2 rounded-full"></span>
                    <span>EduAudit Chứng thực sóng UHF</span>
                  </div>
                </div>
                {/* Kpi 3 */}
                <div className="bg-surface-container-lowest relative flex flex-col justify-between gap-3 overflow-hidden rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                      Sai Lệch Cần Xử Lý
                    </span>
                    <div className="bg-error-container/40 text-error flex h-8 w-8 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">warning</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-xl text-headline-xl text-error tracking-tight">18</span>
                      <span className="font-label-md text-label-md text-on-surface-variant">thiết bị / kiện</span>
                    </div>
                    <div className="text-on-surface-variant font-body-sm text-body-sm flex items-center gap-2">
                      <span className="text-on-secondary-fixed-variant">10 lệch ô</span>
                      <span>•</span>
                      <span className="text-error">5 pin phồng</span>
                      <span>•</span>
                      <span className="text-outline">3 thiếu sạc</span>
                    </div>
                  </div>
                  <div className="text-error font-label-sm text-label-sm flex items-center justify-between pt-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px]">report_problem</span>
                      Cần lập giải trình gửi Admin
                    </span>
                    <span className="cursor-pointer underline">Chi tiết</span>
                  </div>
                </div>
                {/* Kpi 4 */}
                <div className="bg-surface-container-lowest relative flex flex-col justify-between gap-3 overflow-hidden rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                      Thẩm Quyền RBAC (Kiểm Kê)
                    </span>
                    <div className="bg-surface-container-high text-primary flex h-8 w-8 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">shield_person</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-headline-sm text-headline-sm text-on-surface line-clamp-1">
                      Kho Đối Soát - Admin Phê Duyệt
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Kho chỉ ghi nhận thực tế &amp; lập giải trình; Admin duyệt chốt cân đối sổ cái
                    </p>
                  </div>
                  <div className="text-on-surface-variant font-label-sm text-label-sm flex items-center justify-between pt-1">
                    <span className="text-primary font-medium">Quyền hạn: Xem &amp; Quét</span>
                    <span className="bg-surface-container text-outline rounded px-1.5 py-0.5">v2.8.4</span>
                  </div>
                </div>
              </div>

              {/* Filter Toolbar */}
              <div className="bg-surface-container-lowest flex flex-col items-stretch justify-between gap-3 rounded-xl p-4 shadow-sm lg:flex-row lg:items-center">
                {/* Search & Selects */}
                <div className="flex flex-1 flex-wrap items-center gap-3">
                  <div className="relative min-w-[260px] flex-1">
                    <span className="material-symbols-outlined text-outline absolute top-1/2 left-3 -translate-y-1/2 text-[18px]">
                      search
                    </span>
                    <input
                      className="bg-surface font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:bg-surface-container-lowest w-full rounded-lg py-2 pr-3 pl-9 shadow-inner focus:outline-none"
                      placeholder="Tìm theo mã phiếu kiểm kê, mã kệ, số serial, tên thiết bị..."
                      type="text"
                    />
                  </div>
                  {/* Dropdown Khu Vực */}
                  <div className="min-w-[210px]">
                    <div className="relative">
                      <select className="bg-surface font-body-sm text-body-sm text-on-surface w-full cursor-pointer appearance-none rounded-lg py-2 pr-8 pl-3 focus:outline-none">
                        <option value="all">Khu A (Laptop &amp; Phụ Kiện) - Kệ A1 -&gt; A6</option>
                        <option value="khu-b">Khu B (PC &amp; Màn hình hiển thị)</option>
                        <option value="khu-c">Khu C (Thiết bị Mạng &amp; Bộ lưu điện)</option>
                        <option value="khu-d">Khu D (Sách Giáo Khoa &amp; Bàn Ghế)</option>
                      </select>
                      <span className="material-symbols-outlined text-outline pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-[18px]">
                        expand_more
                      </span>
                    </div>
                  </div>
                  {/* Dropdown Tình Trạng */}
                  <div className="min-w-[190px]">
                    <div className="relative">
                      <select className="bg-surface font-body-sm text-body-sm text-on-surface w-full cursor-pointer appearance-none rounded-lg py-2 pr-8 pl-3 focus:outline-none">
                        <option value="all">Tất cả tình trạng</option>
                        <option value="match">Khớp 100% (Không lệch)</option>
                        <option value="diff">Có sai lệch (Lệch vị trí/Số lượng)</option>
                        <option value="pending">Chưa kiểm đếm</option>
                      </select>
                      <span className="material-symbols-outlined text-outline pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-[18px]">
                        filter_list
                      </span>
                    </div>
                  </div>
                </div>
                {/* Quick Filter Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
                  <button
                    className="bg-primary text-on-primary font-label-sm text-label-sm rounded-lg px-3 py-1.5 whitespace-nowrap shadow-sm"
                    type="button"
                  >
                    Tất cả đợt (12)
                  </button>
                  <button
                    className="bg-surface text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm rounded-lg px-3 py-1.5 whitespace-nowrap transition-colors"
                    type="button"
                  >
                    Đang kiểm đếm (3)
                  </button>
                  <button
                    className="bg-surface text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm rounded-lg px-3 py-1.5 whitespace-nowrap transition-colors"
                    type="button"
                  >
                    Chờ Admin duyệt (2)
                  </button>
                  <button
                    className="bg-surface text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm rounded-lg px-3 py-1.5 whitespace-nowrap transition-colors"
                    type="button"
                  >
                    Đã hoàn tất (7)
                  </button>
                </div>
              </div>

              {/* MAIN 7 : 5 SPLIT WORKSPACE */}
              <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-12">
                {/* LEFT COLUMN (7 / 12) */}
                <div className="flex flex-col gap-4 xl:col-span-7">
                  {/* Current Active Audit Session Banner */}
                  <div className="bg-surface-container-lowest flex flex-col gap-4 rounded-xl p-4 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary-container text-on-primary-container flex h-10 w-10 items-center justify-center rounded-lg font-bold">
                          <span className="material-symbols-outlined text-[24px]">qr_code_scanner</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="font-headline-sm text-headline-sm text-on-surface">
                              Đợt Kiểm Kê: #KK-2024-T10-A2
                            </span>
                            <span className="bg-surface-container text-primary font-label-sm text-label-sm rounded-full px-2 py-0.5 font-semibold">
                              ĐANG THỰC ĐẾM
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Kệ A2 • Phân khu Laptop &amp; Linh kiện phụ trợ • HUB-01 Hà Nội
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-code-num text-code-num text-outline">
                          KTV: Trần Hùng (TK-04) &amp; H.V. Minh
                        </span>
                        <button
                          className="bg-surface hover:bg-surface-container text-on-surface-variant flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">sync</span>
                        </button>
                      </div>
                    </div>
                    {/* Session Progress Bar & Details */}
                    <div className="bg-surface-container-low flex flex-col gap-2.5 rounded-lg p-3.5">
                      <div className="text-body-sm font-body-sm flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-on-surface font-medium">Tiến độ quét khay kệ:</span>
                          <span className="font-code-num text-code-num text-primary font-semibold">
                            192 / 192 Ô Khay
                          </span>
                          <span className="text-tertiary font-semibold">(100% khay đã quét sóng)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-on-surface-variant">
                            Sổ sách: <strong className="font-code-num text-code-num text-on-surface">640 máy</strong>
                          </span>
                          <span className="text-outline">|</span>
                          <span className="text-on-surface-variant">
                            Thực tế: <strong className="font-code-num text-code-num text-primary">642 máy</strong>
                          </span>
                          <span className="bg-surface-container text-error font-label-sm text-label-sm rounded px-1.5 py-0.5 font-semibold">
                            +02 LỆCH SỔ
                          </span>
                        </div>
                      </div>
                      <div className="bg-surface-container-high h-2 w-full overflow-hidden rounded-full">
                        <div
                          className="bg-primary h-full rounded-full transition-all duration-500"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                        * Ghi chú sơ bộ: Thừa 02 máy so với sổ cái do tiếp nhận trả về từ xưởng bảo dưỡng chưa kịp đóng
                        lệnh chuyển kho.
                      </p>
                    </div>
                  </div>

                  {/* Audit Discrepancy & Item Details Table */}
                  <div className="bg-surface-container-lowest flex flex-col overflow-hidden rounded-xl shadow-sm">
                    <div className="bg-surface-container-lowest flex flex-wrap items-center justify-between gap-3 p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Danh Mục Đối Soát Hiện Vật Chi Tiết
                        </span>
                        <span className="bg-surface-container text-secondary font-code-num text-code-num rounded px-2 py-0.5">
                          642/640 Mục
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          className="bg-surface text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 rounded-lg px-2.5 py-1.5 transition-colors"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[16px]">visibility</span>
                          <span>Chỉ hiện mục sai lệch (18)</span>
                        </button>
                        <button
                          className="bg-surface text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 rounded-lg px-2.5 py-1.5 transition-colors"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[16px]">view_column</span>
                          <span>Tùy chỉnh cột</span>
                        </button>
                      </div>
                    </div>
                    {/* The Table */}
                    <div className="w-full overflow-x-auto">
                      <table className="font-body-sm text-body-sm w-full text-left">
                        <thead className="bg-surface font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                          <tr>
                            <th className="px-4 py-3">Mã QR / Serial</th>
                            <th className="px-3 py-3">Tên Thiết Bị &amp; Cấu Hình</th>
                            <th className="px-3 py-3">Vị Trí Sổ Sách</th>
                            <th className="px-3 py-3">Quét Thực Tế</th>
                            <th className="px-3 py-3">Trạng Thái Đối Soát</th>
                            <th className="px-3 py-3">Chất Lượng</th>
                            <th className="px-4 py-3 text-right">Thao Tác</th>
                          </tr>
                        </thead>
                        <tbody className="text-on-surface divide-y-0">
                          {/* ROW 1 (Active Match) */}
                          <tr className="hover:bg-surface bg-surface-container-low/30 transition-colors">
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <div className="flex flex-col">
                                <span className="font-code-num text-code-num text-primary font-semibold">
                                  #QR-DELL-5520
                                </span>
                                <span className="font-code-num text-code-num text-outline">SN: 7X89KL2</span>
                              </div>
                            </td>
                            <td className="px-3 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md text-on-surface font-semibold">
                                  Dell Latitude 5520
                                </span>
                                <span className="font-body-sm text-body-sm text-outline">
                                  Core i5-1145G7 • 16GB • 256GB SSD
                                </span>
                              </div>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container font-code-num text-code-num text-on-surface-variant rounded px-2 py-0.5">
                                Kệ A2-T04-Ô12
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container-low font-code-num text-code-num text-tertiary rounded px-2 py-0.5 font-semibold">
                                Kệ A2-T04-Ô12
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container text-tertiary font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold">
                                <span className="bg-tertiary h-1.5 w-1.5 rounded-full"></span> Khớp 100%
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container font-label-sm text-label-sm text-on-surface rounded px-2 py-0.5">
                                Grade A
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-right whitespace-nowrap">
                              <button
                                className="bg-surface hover:bg-surface-container text-outline hover:text-on-surface ml-auto flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
                                type="button"
                              >
                                <span className="material-symbols-outlined text-[18px]">more_vert</span>
                              </button>
                            </td>
                          </tr>
                          {/* ROW 2 (Match) */}
                          <tr className="hover:bg-surface transition-colors">
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <div className="flex flex-col">
                                <span className="font-code-num text-code-num text-primary font-semibold">
                                  #QR-HP-400-G6
                                </span>
                                <span className="font-code-num text-code-num text-outline">SN: 4CG1299Z</span>
                              </div>
                            </td>
                            <td className="px-3 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md text-on-surface font-semibold">
                                  Bộ PC HP ProDesk 400 G6
                                </span>
                                <span className="font-body-sm text-body-sm text-outline">
                                  Core i3-10100 • 8GB • Kèm màn 21.5"
                                </span>
                              </div>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container font-code-num text-code-num text-on-surface-variant rounded px-2 py-0.5">
                                Kệ A2-T02-Ô05
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container-low font-code-num text-code-num text-tertiary rounded px-2 py-0.5 font-semibold">
                                Kệ A2-T02-Ô05
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container text-tertiary font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold">
                                <span className="bg-tertiary h-1.5 w-1.5 rounded-full"></span> Khớp 100%
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container font-label-sm text-label-sm text-on-surface rounded px-2 py-0.5">
                                Grade A
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-right whitespace-nowrap">
                              <button
                                className="bg-surface hover:bg-surface-container text-outline hover:text-on-surface ml-auto flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
                                type="button"
                              >
                                <span className="material-symbols-outlined text-[18px]">more_vert</span>
                              </button>
                            </td>
                          </tr>
                          {/* ROW 3 (DISCREPANCY: Wrong shelf location) */}
                          <tr className="hover:bg-surface bg-secondary-container/20 transition-colors">
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <div className="flex flex-col">
                                <span className="font-code-num text-code-num text-error font-semibold">
                                  #QR-LEN-T480
                                </span>
                                <span className="font-code-num text-code-num text-outline">SN: PF19920A</span>
                              </div>
                            </td>
                            <td className="px-3 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md text-on-surface font-semibold">
                                  Lenovo ThinkPad T480s
                                </span>
                                <span className="font-body-sm text-body-sm text-error">
                                  Sai lệch vị trí lưu trữ thực tế
                                </span>
                              </div>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container font-code-num text-code-num text-outline rounded px-2 py-0.5 line-through">
                                Kệ A2-T03-Ô09
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-secondary-container font-code-num text-code-num text-on-secondary-fixed rounded px-2 py-0.5 font-bold">
                                Kệ A1-T02-Ô04
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold">
                                <span className="material-symbols-outlined text-[13px]">wrong_location</span> Lạc Vị Trí
                                Kệ
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container font-label-sm text-label-sm text-on-surface rounded px-2 py-0.5">
                                Grade B+
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-right whitespace-nowrap">
                              <button
                                className="bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container rounded px-2.5 py-1 transition-colors"
                                type="button"
                              >
                                Đã trả lại kệ A2
                              </button>
                            </td>
                          </tr>
                          {/* ROW 4 (DISCREPANCY: Battery degraded) */}
                          <tr className="hover:bg-surface bg-error-container/10 transition-colors">
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <div className="flex flex-col">
                                <span className="font-code-num text-code-num text-primary font-semibold">
                                  #QR-IPAD-G9-08
                                </span>
                                <span className="font-code-num text-code-num text-outline">SN: DMPX8002</span>
                              </div>
                            </td>
                            <td className="px-3 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md text-on-surface font-semibold">
                                  Apple iPad Gen 9 (10.2")
                                </span>
                                <span className="font-body-sm text-body-sm text-outline">64GB Wi-Fi Space Grey</span>
                              </div>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container font-code-num text-code-num text-on-surface-variant rounded px-2 py-0.5">
                                Kệ A2-T04-Ô01
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container font-code-num text-code-num text-on-surface-variant rounded px-2 py-0.5">
                                Kệ A2-T04-Ô01
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-error-container text-error font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold">
                                <span className="material-symbols-outlined text-[13px]">battery_alert</span> Pin chai
                                78%
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-error-container text-error font-label-sm text-label-sm rounded px-2 py-0.5 font-bold">
                                Grade B- (Hạ cấp)
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-right whitespace-nowrap">
                              <button
                                className="bg-surface-container-high text-primary font-label-sm text-label-sm hover:bg-primary-fixed rounded px-2.5 py-1 transition-colors"
                                type="button"
                              >
                                Chuyển Xưởng Pin
                              </button>
                            </td>
                          </tr>
                          {/* ROW 5 (Match) */}
                          <tr className="hover:bg-surface transition-colors">
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <div className="flex flex-col">
                                <span className="font-code-num text-code-num text-primary font-semibold">
                                  #QR-SW-CISCO24
                                </span>
                                <span className="font-code-num text-code-num text-outline">SN: FCW2130L</span>
                              </div>
                            </td>
                            <td className="px-3 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md text-on-surface font-semibold">
                                  Cisco Catalyst 24-Port GE
                                </span>
                                <span className="font-body-sm text-body-sm text-outline">
                                  Switch mạng lõi trường học vùng cao
                                </span>
                              </div>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container font-code-num text-code-num text-on-surface-variant rounded px-2 py-0.5">
                                Kệ A2-T01-Ô02
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container font-code-num text-code-num text-on-surface-variant rounded px-2 py-0.5">
                                Kệ A2-T01-Ô02
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container text-tertiary font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold">
                                <span className="bg-tertiary h-1.5 w-1.5 rounded-full"></span> Khớp 100%
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container font-label-sm text-label-sm text-on-surface rounded px-2 py-0.5">
                                Grade A
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-right whitespace-nowrap">
                              <button
                                className="bg-surface hover:bg-surface-container text-outline hover:text-on-surface ml-auto flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
                                type="button"
                              >
                                <span className="material-symbols-outlined text-[18px]">more_vert</span>
                              </button>
                            </td>
                          </tr>
                          {/* ROW 6 (DISCREPANCY: Quantity Deficit) */}
                          <tr className="hover:bg-surface bg-error-container/10 transition-colors">
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <div className="flex flex-col">
                                <span className="font-code-num text-code-num text-error font-semibold">#ACC-8012</span>
                                <span className="font-code-num text-code-num text-outline">Lô phụ kiện sạc</span>
                              </div>
                            </td>
                            <td className="px-3 py-3.5">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md text-on-surface font-semibold">
                                  Bộ Sạc Laptop Type-C 65W
                                </span>
                                <span className="font-body-sm text-body-sm text-outline">
                                  Lô sạc cấp bù laptop tài trợ
                                </span>
                              </div>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container font-code-num text-code-num text-on-surface rounded px-2 py-0.5 font-semibold">
                                40 củ sạc
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-error-container font-code-num text-code-num text-error rounded px-2 py-0.5 font-bold">
                                38 củ sạc
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-error-container text-error font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold">
                                <span className="material-symbols-outlined text-[13px]">remove_circle</span> Thiếu 02 củ
                                sạc
                              </span>
                            </td>
                            <td className="px-3 py-3.5 whitespace-nowrap">
                              <span className="bg-surface-container font-label-sm text-label-sm text-on-surface rounded px-2 py-0.5">
                                Mới 100%
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-right whitespace-nowrap">
                              <button
                                className="bg-error text-on-error font-label-sm text-label-sm rounded px-2.5 py-1 transition-opacity hover:opacity-90"
                                type="button"
                              >
                                Lập biên bản thiếu
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Pagination Footer */}
                    <div className="bg-surface font-body-sm text-body-sm text-on-surface-variant flex flex-wrap items-center justify-between gap-3 p-4">
                      <span>
                        Hiển thị <strong>1 - 6</strong> trong số <strong>642</strong> thiết bị thuộc đợt #KK-2024-T10-A2
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          className="bg-surface-container-lowest text-outline hover:text-on-surface flex h-8 w-8 items-center justify-center rounded-lg disabled:opacity-40"
                          disabled
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                        </button>
                        <button
                          className="bg-primary text-on-primary font-code-num text-code-num h-8 w-8 rounded-lg font-semibold"
                          type="button"
                        >
                          1
                        </button>
                        <button
                          className="bg-surface-container-lowest hover:bg-surface-container text-on-surface font-code-num text-code-num h-8 w-8 rounded-lg"
                          type="button"
                        >
                          2
                        </button>
                        <button
                          className="bg-surface-container-lowest hover:bg-surface-container text-on-surface font-code-num text-code-num h-8 w-8 rounded-lg"
                          type="button"
                        >
                          3
                        </button>
                        <span className="text-outline px-1">...</span>
                        <button
                          className="bg-surface-container-lowest hover:bg-surface-container text-on-surface font-code-num text-code-num h-8 w-8 rounded-lg"
                          type="button"
                        >
                          65
                        </button>
                        <button
                          className="bg-surface-container-lowest text-on-surface hover:bg-surface-container flex h-8 w-8 items-center justify-center rounded-lg"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Photographic Evidence Preview Tiles */}
                  <div className="bg-surface-container-lowest flex flex-col gap-3 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-sm text-headline-sm text-on-surface">
                        Minh Chứng Hiện Trường Đợt Kiểm Kê (GPS Watermark)
                      </span>
                      <span className="font-label-sm text-label-sm text-primary cursor-pointer font-medium">
                        Thêm ảnh quét RFID khay
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <div className="bg-surface-container-low group relative aspect-video overflow-hidden rounded-lg">
                        <img
                          alt="Warehouse technician holding a handheld UHF RFID scanner pointed at organized metal shelves filled with laptops in protective sleeves inside a bright modern civic tech warehouse in Hanoi Vietnam."
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                        />
                        <div className="from-on-background/80 text-on-primary absolute inset-0 flex flex-col justify-end bg-gradient-to-t via-transparent to-transparent p-2.5">
                          <span className="font-label-sm text-label-sm font-semibold">Quét sóng Kệ A2-T04</span>
                          <span className="font-body-sm text-body-sm text-[10px] opacity-80">
                            21.0285° N, 105.8542° E • 09:15 AM
                          </span>
                        </div>
                      </div>
                      <div className="bg-surface-container-low group relative aspect-video overflow-hidden rounded-lg">
                        <img
                          alt="Close up view of tablet screen displaying battery diagnostic telemetry showing capacity degradation on an Apple iPad placed on anti-static mat in technical inspection bay."
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                        />
                        <div className="from-on-background/80 text-on-primary absolute inset-0 flex flex-col justify-end bg-gradient-to-t via-transparent to-transparent p-2.5">
                          <span className="font-label-sm text-label-sm font-semibold">Kiểm định pin iPad Gen 9</span>
                          <span className="font-body-sm text-body-sm text-[10px] opacity-80">
                            Hao hụt 78% • Yêu cầu đổi cell
                          </span>
                        </div>
                      </div>
                      <div className="bg-surface-container-low group relative aspect-video overflow-hidden rounded-lg">
                        <img
                          alt="Warehouse logistics manager in navy uniform reviewing paper audit checklist with digital tablet next to rows of neatly stacked cardboard boxes bearing educational donation logos."
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                        />
                        <div className="from-on-background/80 text-on-primary absolute inset-0 flex flex-col justify-end bg-gradient-to-t via-transparent to-transparent p-2.5">
                          <span className="font-label-sm text-label-sm font-semibold">Đối chiếu lô phụ kiện HP</span>
                          <span className="font-body-sm text-body-sm text-[10px] opacity-80">
                            Xác nhận thiếu 02 củ sạc
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN (5 / 12) - AUDIT REPORT DOSSIER & ADMIN PROPOSAL */}
                <div className="flex flex-col gap-4 xl:col-span-5">
                  {/* Audit Dossier Summary Card */}
                  <div className="bg-surface-container-lowest flex flex-col gap-4 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[22px]">assignment_turned_in</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Biên Bản Kiểm Kê #BBKK-2024-10-HUB01
                        </span>
                      </div>
                      <span className="bg-surface-container text-on-surface-variant font-code-num text-code-num rounded-full px-2 py-0.5">
                        ISO-27001
                      </span>
                    </div>
                    {/* Total Valuated Asset */}
                    <div className="bg-surface flex items-center justify-between rounded-lg p-3.5">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-outline uppercase">
                          Tổng giá trị hiện vật đối soát
                        </span>
                        <span className="font-headline-md text-headline-md text-primary font-bold">4.85 Tỷ VNĐ</span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="font-label-sm text-label-sm text-outline">Quy đổi viện trợ</span>
                        <span className="font-code-num text-code-num text-on-surface font-semibold">
                          3,420 Thiết bị tổng
                        </span>
                      </div>
                    </div>
                    {/* Discrepancy Breakdown Visual */}
                    <div className="flex flex-col gap-2.5">
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wider uppercase">
                        Bóc Tách Phân Luồng Sai Lệch Kỳ Này
                      </span>
                      <div className="font-body-sm text-body-sm flex flex-col gap-2">
                        <div className="bg-surface-container-low flex items-center justify-between rounded-lg p-2">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
                            <span className="text-on-surface">Khớp hoàn toàn sổ sách &amp; vị trí</span>
                          </div>
                          <strong className="font-code-num text-code-num text-tertiary font-bold">
                            3,402 máy (99.4%)
                          </strong>
                        </div>
                        <div className="bg-secondary-container/20 flex items-center justify-between rounded-lg p-2">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary text-[18px]">alt_route</span>
                            <span className="text-on-surface">Lệch vị trí ô kệ (đã trả về chuẩn)</span>
                          </div>
                          <strong className="font-code-num text-code-num text-on-secondary-fixed font-bold">
                            10 máy
                          </strong>
                        </div>
                        <div className="bg-error-container/20 flex items-center justify-between rounded-lg p-2">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-error text-[18px]">build_circle</span>
                            <span className="text-on-surface">Xuống cấp kỹ thuật (chuyển xưởng)</span>
                          </div>
                          <strong className="font-code-num text-code-num text-error font-bold">05 máy</strong>
                        </div>
                        <div className="bg-error-container/20 flex items-center justify-between rounded-lg p-2">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-error text-[18px]">search_off</span>
                            <span className="text-on-surface">Thiếu phụ kiện lô (rà soát an ninh)</span>
                          </div>
                          <strong className="font-code-num text-code-num text-error font-bold">03 mục</strong>
                        </div>
                      </div>
                    </div>
                    {/* Donor Allocation Transparency Source */}
                    <div className="flex flex-col gap-1.5 pt-1">
                      <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
                        Nguồn Tài Trợ Liên Quan Trong Đợt
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="bg-surface text-on-surface-variant font-label-sm text-label-sm rounded px-2 py-0.5">
                          FPT Corporation (1,200 máy)
                        </span>
                        <span className="bg-surface text-on-surface-variant font-label-sm text-label-sm rounded px-2 py-0.5">
                          Tập đoàn VNPT (1,500 máy)
                        </span>
                        <span className="bg-surface text-on-surface-variant font-label-sm text-label-sm rounded px-2 py-0.5">
                          Viettel Telecom (720 máy)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Discrepancy Explanation & Admin Proposal Form */}
                  <div className="bg-surface-container-lowest flex flex-col gap-4 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-[20px]">edit_note</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Giải Trình &amp; Đề Xuất Của Thủ Kho
                        </span>
                      </div>
                      <span className="font-code-num text-code-num text-tertiary font-semibold">KTV TRẦN HÙNG</span>
                    </div>
                    {/* Explanation Textarea */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface-variant">
                        Nội dung giải trình sai lệch gửi Ban Quản Trị Hệ Thống (Admin Tổng):
                      </label>
                      <textarea
                        className="bg-surface font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:bg-surface-container-lowest w-full resize-none rounded-lg p-3 shadow-inner focus:outline-none"
                        placeholder="Nhập ý kiến giải trình của kho..."
                        rows={4}
                        defaultValue={
                          "10 máy lệch vị trí do nhân viên kho chuyển tạm để vệ sinh xịt chống ẩm sàn khu A sáng ngày 14/10; hiện toàn bộ đã được quét sóng RFID và đưa về đúng khay Kệ A2.\n\nĐề xuất Admin Tổng:\n1. Phê duyệt hạ Grade kỹ thuật cho 05 máy iPad pin chai để chuyển sang bộ phận sửa chữa thay thế cell.\n2. Cho phép xuất bù 02 sạc Type-C 65W từ kiện phụ kiện dự phòng mã #ACC-8099 để bảo đảm đồng bộ gói bàn giao trường học."
                        }
                      ></textarea>
                    </div>
                    {/* Attachment & Cryptographic Hash */}
                    <div className="bg-surface flex flex-col gap-2 rounded-lg p-3">
                      <div className="text-body-sm font-body-sm flex items-center justify-between">
                        <span className="text-on-surface-variant flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-tertiary text-[18px]">attach_file</span>
                          Đã đính kèm: <strong>03 ảnh GPS + 01 Log RFID (.csv)</strong>
                        </span>
                        <button
                          className="text-primary font-label-sm text-label-sm font-semibold hover:underline"
                          type="button"
                        >
                          Tải thêm
                        </button>
                      </div>
                      <div className="text-outline font-code-num text-code-num flex items-center justify-between pt-2">
                        <span>Chuỗi khóa băm niêm phong:</span>
                        <span className="text-primary font-mono text-[11px] font-semibold">
                          SHA256: 8f9b42a...e71c4e21
                        </span>
                      </div>
                    </div>
                    {/* Critical Action Buttons */}
                    <div className="flex flex-col gap-2 pt-1">
                      <button
                        className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-semibold shadow-md transition-all"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">verified</span>
                        <span>KÝ SỐ THỦ KHO &amp; GỬI BÁO CÁO CHO ADMIN TỔNG</span>
                      </button>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          className="bg-surface hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 transition-colors"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-outline text-[16px]">print</span>
                          <span>In Bản Draft Đối Soát</span>
                        </button>
                        <button
                          className="bg-surface hover:bg-surface-container text-primary font-label-sm text-label-sm flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 transition-colors"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[16px]">sync_problem</span>
                          <span>Quét Lại Mục Lệch (18)</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Rbac Policy & Compliance Warning Card */}
                  <div className="bg-surface-container-low flex flex-col gap-2.5 rounded-xl p-4">
                    <div className="text-on-surface font-label-md text-label-md flex items-center gap-2 font-semibold">
                      <span className="material-symbols-outlined text-primary text-[20px]">policy</span>
                      <span>Quy Chuẩn Kiểm Kê &amp; Giám Sát Kho (RBAC v2.8.4)</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Thủ kho chỉ có thẩm quyền <strong>ghi nhận hiện vật thực tế</strong> qua đầu quét RFID/Barcode và
                      lập văn bản giải trình. Mọi quyết định xóa sổ tài sản, cân đối chênh lệch tồn sổ cái (EduLedger)
                      hoặc phân bổ hiện vật cho trường học đều thuộc thẩm quyền độc quyền của{" "}
                      <strong>Admin Tổng</strong> thông qua chữ ký số cấp 2. Mọi thao tác đều được ghi nhật ký bất biến
                      Audit Log.
                    </p>
                    <div className="text-outline font-label-sm text-label-sm flex items-center justify-between pt-1">
                      <span>Hệ thống bảo vệ dữ liệu 2 lớp</span>
                      <span className="text-tertiary font-medium">Bảo mật đạt chuẩn ISO/IEC 27001</span>
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

export default WarehouseAuditReportPage;
