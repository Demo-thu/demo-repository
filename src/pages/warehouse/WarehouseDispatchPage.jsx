import React from "react";
import { Link } from "react-router-dom";

const WarehouseDispatchPage = () => {
  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col">
          <div className="h-16 px-6 flex items-center justify-between bg-surface-container-low">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary font-headline-sm text-headline-sm">
                E
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight">
                  EduShare VN
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Hệ Thống Thiết Bị Giáo Dục
                </span>
              </div>
            </div>
          </div>
          <div className="px-4 py-1">
            <div className="px-2 py-1 rounded-lg bg-surface-container flex items-center gap-1 text-primary">
              <span className="material-symbols-outlined text-[16px]">
                warehouse
              </span>
              <span className="font-label-sm text-label-sm tracking-wide uppercase font-semibold">
                HUB-01 KHO &amp; KỸ THUẬT
              </span>
            </div>
          </div>
          <nav className="flex flex-col gap-6 px-4 mt-4">
            <div className="flex flex-col gap-1">
              <span className="px-2 font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                1. Nhập Kho &amp; Tiếp Nhận
              </span>
              <Link
                className="flex items-center gap-2 px-2 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-md text-body-md"
                to="/warehouse/receive"
              >
                <span className="material-symbols-outlined text-[20px]">
                  verified
                </span>
                <span>Tiếp nhận &amp; Kiểm định</span>
              </Link>
              <Link
                className="flex items-center gap-2 px-2 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-md text-body-md"
                to="/warehouse/scan-qr"
              >
                <span className="material-symbols-outlined text-[20px]">
                  qr_code_scanner
                </span>
                <span>Quét QR phân luồng</span>
              </Link>
              <Link
                className="flex items-center gap-2 px-2 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-md text-body-md"
                to="/warehouse/donation-receipt"
              >
                <span className="material-symbols-outlined text-[20px]">
                  receipt_long
                </span>
                <span>Phiếu trao tặng</span>
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <span className="px-2 font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                2. Quản Lý Kho Bãi
              </span>
              <Link
                className="flex items-center gap-2 px-2 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-md text-body-md"
                to="/warehouse/inventory"
              >
                <span className="material-symbols-outlined text-[20px]">
                  inventory_2
                </span>
                <span>Tồn kho thiết bị</span>
              </Link>
              <Link
                className="flex items-center justify-between px-2 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-md text-body-md"
                to="/warehouse/racks"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">
                    shelves
                  </span>
                  <span>Vị trí kệ định danh</span>
                </div>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container-highest text-on-surface-variant">
                  Chỉ xem
                </span>
              </Link>
              <Link
                className="flex items-center gap-2 px-2 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-md text-body-md"
                to="/warehouse/audit-report"
              >
                <span className="material-symbols-outlined text-[20px]">
                  fact_check
                </span>
                <span>Kiểm kê &amp; Báo cáo</span>
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <span className="px-2 font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                3. Điều Phối &amp; Vận Chuyển
              </span>
              <Link
                className="flex items-center gap-2 px-2 py-2 rounded-xl bg-primary text-on-primary font-semibold shadow-sm transition-all text-body-md"
                to="/warehouse/dispatch"
              >
                <span className="material-symbols-outlined text-[20px]">
                  local_shipping
                </span>
                <span>Lệnh điều chuyển &amp; Vận đơn</span>
              </Link>
              <Link
                className="flex items-center gap-2 px-2 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-md text-body-md"
                to="/warehouse/delivery-history"
              >
                <span className="material-symbols-outlined text-[20px]">
                  history
                </span>
                <span>Lịch sử đợt giao</span>
              </Link>
              <Link
                className="flex items-center gap-2 px-2 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-md text-body-md"
                to="/warehouse/incident-report"
              >
                <span className="material-symbols-outlined text-[20px]">
                  report_problem
                </span>
                <span>Báo cáo sự cố kho</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="p-4 m-4 rounded-xl bg-surface-container">
          <div className="flex items-center justify-between mb-1">
            <span className="font-code-num text-code-num text-secondary">
              v2.8.4-PROD
            </span>
            <span className="font-label-sm text-label-sm text-tertiary font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-tertiary inline-block"></span>
              Hoạt động
            </span>
          </div>
          <div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
            <span className="material-symbols-outlined text-[16px]">
              support_agent
            </span>
            <span>
              Kỹ thuật kho:{" "}
              <span className="font-medium text-on-surface font-code-num">
                1900 6829
              </span>
            </span>
          </div>
        </div>
      </aside>

      <div className="pl-72 flex-1 flex flex-col">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <span className="font-medium text-primary">EduShare VN Kho</span>
              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>
              <span>Điều Phối &amp; Vận Chuyển</span>
              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>
              <span className="text-on-surface font-semibold">
                Lệnh Điều Chuyển &amp; Vận Đơn
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative w-80">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                search
              </span>
              <input
                className="w-full h-9 pl-9 pr-4 rounded-xl bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all"
                placeholder="Mã #ST, vận đơn #WB, điểm trường..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-2 pl-2">
              <div className="flex flex-col text-right">
                <span className="font-headline-sm text-headline-sm text-on-surface leading-tight">
                  Trần Hùng{" "}
                  <span className="font-code-num text-body-sm text-secondary">
                    (TK-MB-04)
                  </span>
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                  Trưởng Kho Kỹ Thuật Hà Nội • HUB-01 Hà Nội
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="w-full pt-16 bg-background min-h-screen px-6 py-6 flex-1 flex flex-col">
          <div className="flex flex-col w-full gap-6">
            {/* Top Bar / Command Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Lệnh Điều Chuyển &amp; Vận Đơn
                  </span>
                  <span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-semibold tracking-wide">
                    RBAC KHO V2.8
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                  Quản lý luồng xuất kho liên hub và vận đơn bàn giao thiết bị
                  trực tiếp về điểm trường học sinh vùng cao.
                </p>
              </div>
              {/* Action Buttons adhering strictly to RBAC: Transfer creates instant cleared, Waybill requires Admin Approval */}
              <div className="flex items-center gap-2 flex-wrap">
                <button className="h-10 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-sm text-headline-sm transition-all flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    download
                  </span>
                  <span>Xuất File Báo Cáo (.xlsx)</span>
                </button>
                <button className="h-10 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-headline-sm text-headline-sm transition-all flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    swap_horiz
                  </span>
                  <span>+ Lệnh Điều Chuyển Liên Kho</span>
                  <span className="px-1.5 py-0.5 text-[10px] font-code-num bg-primary-fixed text-on-primary-fixed-variant rounded">
                    Hoàn tất ngay
                  </span>
                </button>
                <button className="h-10 px-4 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-headline-sm transition-all flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    local_shipping
                  </span>
                  <span>+ Lập Vận Đơn Mới</span>
                  <span className="px-1.5 py-0.5 text-[10px] font-code-num bg-surface-container-lowest/20 text-on-primary rounded">
                    PA Đã Duyệt
                  </span>
                </button>
              </div>
            </div>

            {/* Bento 4 Metric Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1: Tổng đơn */}
              <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      Tổng lệnh &amp; Vận đơn
                    </span>
                    <span className="font-headline-xl text-headline-xl text-on-surface mt-1">
                      68
                    </span>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      assignment
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-3 flex items-center justify-between font-code-num text-code-num text-on-surface-variant">
                  <span>
                    <strong className="text-primary font-semibold">42</strong>{" "}
                    Vận đơn trường
                  </span>
                  <span className="text-outline">/</span>
                  <span>
                    <strong className="text-tertiary font-semibold">26</strong>{" "}
                    Lệnh liên kho
                  </span>
                </div>
                <div className="w-full bg-surface-container-high h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-primary h-full w-[62%]"></div>
                </div>
              </div>
              {/* Card 2: Điều chuyển hoàn tất ngay */}
              <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                        Điều chuyển liên kho
                      </span>
                      <span className="px-1.5 py-[0.1rem] rounded font-label-sm text-[10px] bg-tertiary-fixed text-on-tertiary-fixed font-bold">
                        TỨC THÌ
                      </span>
                    </div>
                    <span className="font-headline-xl text-headline-xl text-tertiary mt-1">
                      26 / 26
                    </span>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-surface-container-low flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-[24px]">
                      verified
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-3 flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
                  <span className="flex items-center gap-1 text-tertiary font-medium">
                    <span className="material-symbols-outlined text-[15px]">
                      bolt
                    </span>
                    Xuất là chốt - Ko chờ đích duyệt
                  </span>
                  <span className="font-code-num text-code-num font-semibold text-tertiary">
                    100%
                  </span>
                </div>
                <div className="w-full bg-surface-container-high h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-tertiary h-full w-full"></div>
                </div>
              </div>
              {/* Card 3: Vận đơn sẵn sàng xuất kho */}
              <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      Vận đơn sẵn sàng xuất
                    </span>
                    <span className="font-headline-xl text-headline-xl text-primary mt-1">
                      14
                    </span>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      fact_check
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-3 flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
                  <span className="flex items-center gap-1 text-primary font-medium">
                    <span className="material-symbols-outlined text-[15px]">
                      lock
                    </span>
                    100% Admin Đã Ký Phê Duyệt PA
                  </span>
                  <span className="font-code-num text-code-num font-semibold text-primary">
                    14/14 PA
                  </span>
                </div>
                <div className="w-full bg-surface-container-high h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-primary-container h-full w-[70%]"></div>
                </div>
              </div>
              {/* Card 4: TNV Đã Gán (waybill_volunteers) */}
              <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      TNV Vận chuyển đã gán
                    </span>
                    <span className="font-headline-xl text-headline-xl text-on-surface mt-1">
                      38
                    </span>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined text-[24px]">
                      diversity_3
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-3 flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
                  <span className="flex items-center gap-1 text-on-surface-variant font-medium">
                    <span className="material-symbols-outlined text-[15px]">
                      how_to_reg
                    </span>
                    Gán không giới hạn (Có role TNV)
                  </span>
                  <span className="font-code-num text-code-num font-semibold text-secondary">
                    12 Đội
                  </span>
                </div>
                <div className="w-full bg-surface-container-high h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-secondary h-full w-[85%]"></div>
                </div>
              </div>
            </div>

            {/* RBAC Compliance Banner Notice */}
            <div className="rounded-xl bg-surface-container-low p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    gavel
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      Đặc Tả Quyền Hạn Cổng Kho (RBAC DOC-47):
                    </span>
                    <span className="font-label-sm text-label-sm font-semibold text-primary bg-primary-fixed px-2 py-0.5 rounded">
                      HUB KỸ THUẬT
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    1. Lập vận đơn chỉ khi{" "}
                    <strong>Admin đã phê duyệt phương án phân bổ</strong> (Kho
                    không được tự hủy/sửa PA). • 2. Xuất điều chuyển liên kho{" "}
                    <strong>hoàn tất tức thì</strong> không cần kho đích xác
                    nhận. • 3. <strong>Gán không giới hạn TNV</strong> vận
                    chuyển cho mỗi đơn (role: Tình nguyện viên).
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-code-num text-code-num text-secondary bg-surface-container-lowest px-2.5 py-1 rounded shadow-sm">
                  HUB-01 • Hà Nội
                </span>
                <span className="material-symbols-outlined text-outline text-[18px]">
                  verified_user
                </span>
              </div>
            </div>

            {/* Navigation Filters & Search Ribbon */}
            <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              {/* Functional Tab Switching */}
              <div className="flex items-center bg-surface-container-low p-1 rounded-xl overflow-x-auto">
                <button className="px-4 py-1.5 rounded-lg bg-primary text-on-primary font-headline-sm text-headline-sm flex items-center gap-2 shadow-sm whitespace-nowrap">
                  <span className="material-symbols-outlined text-[18px]">
                    school
                  </span>
                  <span>Vận Đơn Bàn Giao Điểm Trường</span>
                  <span className="px-2 py-[0.1rem] rounded-full font-code-num text-[11px] bg-on-primary text-primary font-bold">
                    14
                  </span>
                </button>
                <button className="px-4 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-headline-sm text-headline-sm flex items-center gap-2 transition-colors whitespace-nowrap">
                  <span className="material-symbols-outlined text-[18px]">
                    sync_alt
                  </span>
                  <span>Lệnh Điều Chuyển Liên Kho</span>
                  <span className="px-2 py-[0.1rem] rounded-full font-code-num text-[11px] bg-surface-container-highest text-secondary font-bold">
                    26
                  </span>
                </button>
                <button className="px-4 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-headline-sm text-headline-sm flex items-center gap-2 transition-colors whitespace-nowrap">
                  <span className="material-symbols-outlined text-[18px]">
                    history
                  </span>
                  <span>Tất Cả Lịch Sử</span>
                </button>
              </div>
              {/* Search & Regional/Status Dropdown Filters */}
              <div className="flex items-center gap-2 flex-wrap lg:flex-nowrap">
                <div className="relative w-full sm:w-64">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                    search
                  </span>
                  <input
                    className="w-full h-9 pl-9 pr-3 rounded-lg bg-surface font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
                    placeholder="Tìm #WB, #ST, Mường Lát..."
                    type="text"
                    defaultValue="Mường Lát"
                  />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface text-on-surface-variant font-label-md text-label-md shadow-sm cursor-pointer">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    filter_list
                  </span>
                  <span>
                    Trạng thái: <strong>Admin Đã Duyệt</strong>
                  </span>
                  <span className="material-symbols-outlined text-[16px]">
                    expand_more
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface text-on-surface-variant font-label-md text-label-md shadow-sm cursor-pointer">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    share_location
                  </span>
                  <span>
                    Khu vực: <strong>Tây Bắc &amp; Bắc Miền Trung</strong>
                  </span>
                  <span className="material-symbols-outlined text-[16px]">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            {/* Main 2-Column Split Interface (7 : 5 ratio) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* LEFT COLUMN (7 Cols) - WAYBILLS & TRANSFER ORDERS MASTER TABLE */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                  <div className="px-6 py-4 bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-headline-sm text-headline-sm text-on-surface">
                        Danh Sách Vận Đơn &amp; Lệnh Điều Chuyển
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-code-num bg-surface-container text-on-surface-variant">
                        Trang 1 / 4
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Đang chọn: <strong>#WB-2024-NW08</strong>
                    </span>
                  </div>
                  {/* Table View */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-body-md text-body-md">
                      <thead>
                        <tr className="bg-surface-container-low text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                          <th className="py-3 px-4">Mã Đơn / Loại</th>
                          <th className="py-3 px-4">Điểm Đến / Đơn Vị Nhận</th>
                          <th className="py-3 px-4">Quy Cách Hàng</th>
                          <th className="py-3 px-4">TNV Phụ Trách</th>
                          <th className="py-3 px-4">Trạng Thái Admin</th>
                          <th className="py-3 px-4 text-right">Chi Tiết</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y-0 text-on-surface">
                        {/* Row 1: Selected Record (#WB-2024-NW08) */}
                        <tr className="bg-primary/5 hover:bg-primary/10 cursor-pointer transition-colors relative">
                          <td className="py-3.5 px-4">
                            <div className="flex flex-col">
                              <span className="font-code-num font-semibold text-primary">
                                #WB-2024-NW08
                              </span>
                              <span className="font-label-sm text-label-sm text-secondary flex items-center gap-0.5 mt-0.5">
                                <span className="material-symbols-outlined text-[13px]">
                                  school
                                </span>{" "}
                                Vận đơn trường
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex flex-col max-w-[190px]">
                              <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                                PTDTBT THCS Mường Lát
                              </span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant">
                                H. Mường Lát, Thanh Hóa
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex flex-col font-code-num text-code-num">
                              <span className="font-semibold text-on-surface">
                                50 Thiết bị
                              </span>
                              <span className="text-secondary font-body-sm text-[11px]">
                                30 Laptop, 20 Màn
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            {/* Unlimited Volunteer Avatars Display */}
                            <div className="flex items-center -space-x-2">
                              <div
                                className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-[11px] ring-2 ring-surface-container-lowest"
                                title="Lê Hoàng Long (Trưởng đoàn)"
                              >
                                HL
                              </div>
                              <div
                                className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-headline-sm text-[11px] ring-2 ring-surface-container-lowest"
                                title="Trần Đình Trọng (Kỹ thuật)"
                              >
                                TT
                              </div>
                              <div
                                className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-headline-sm text-[11px] ring-2 ring-surface-container-lowest"
                                title="Nguyễn Minh Tuấn (Điều phối)"
                              >
                                MT
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-semibold whitespace-nowrap">
                              <span className="material-symbols-outlined text-[13px]">
                                check_circle
                              </span>
                              PA #892 Đã Duyệt
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <span className="w-7 h-7 rounded-lg bg-primary text-on-primary inline-flex items-center justify-center">
                              <span className="material-symbols-outlined text-[16px]">
                                chevron_right
                              </span>
                            </span>
                          </td>
                        </tr>
                        {/* Row 2: Stock Transfer (Auto Cleared) */}
                        <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                          <td className="py-3.5 px-4">
                            <div className="flex flex-col">
                              <span className="font-code-num font-semibold text-tertiary">
                                #ST-2024-TR03
                              </span>
                              <span className="font-label-sm text-label-sm text-secondary flex items-center gap-0.5 mt-0.5">
                                <span className="material-symbols-outlined text-[13px]">
                                  swap_horiz
                                </span>{" "}
                                Lệnh điều chuyển
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex flex-col max-w-[190px]">
                              <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                                HUB-02 Tây Bắc (Yên Bái)
                              </span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant">
                                Kho Tiếp Vận Trung Chuyển
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex flex-col font-code-num text-code-num">
                              <span className="font-semibold text-on-surface">
                                45 Thiết bị
                              </span>
                              <span className="text-secondary font-body-sm text-[11px]">
                                15 PC Đồng bộ, 30 Chuột/Phím
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex items-center -space-x-2">
                              <div
                                className="w-7 h-7 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-headline-sm text-[11px]"
                                title="Vũ Viết Quân"
                              >
                                VQ
                              </div>
                              <div
                                className="w-7 h-7 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-headline-sm text-[11px]"
                                title="Đặng Nam"
                              >
                                +1
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant font-semibold whitespace-nowrap">
                              <span className="material-symbols-outlined text-[13px]">
                                bolt
                              </span>
                              Hoàn tất ngay (Auto)
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <span className="w-7 h-7 rounded-lg bg-surface-container text-on-surface-variant inline-flex items-center justify-center">
                              <span className="material-symbols-outlined text-[16px]">
                                chevron_right
                              </span>
                            </span>
                          </td>
                        </tr>
                        {/* Row 3: Waybill #WB-2024-NW09 */}
                        <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                          <td className="py-3.5 px-4">
                            <div className="flex flex-col">
                              <span className="font-code-num font-semibold text-primary">
                                #WB-2024-NW09
                              </span>
                              <span className="font-label-sm text-label-sm text-secondary flex items-center gap-0.5 mt-0.5">
                                <span className="material-symbols-outlined text-[13px]">
                                  school
                                </span>{" "}
                                Vận đơn trường
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex flex-col max-w-[190px]">
                              <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                                Trường Tiểu Học Nậm Kè
                              </span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant">
                                Huyện Mường Nhé, Điện Biên
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex flex-col font-code-num text-code-num">
                              <span className="font-semibold text-on-surface">
                                25 Laptop
                              </span>
                              <span className="text-secondary font-body-sm text-[11px]">
                                HP Probook 450 G5
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex items-center -space-x-2">
                              <div className="w-7 h-7 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-headline-sm text-[11px]">
                                BN
                              </div>
                              <div className="w-7 h-7 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-headline-sm text-[11px]">
                                HV
                              </div>
                              <div className="w-7 h-7 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-label-sm text-[10px]">
                                +2
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-semibold whitespace-nowrap">
                              <span className="material-symbols-outlined text-[13px]">
                                check_circle
                              </span>
                              PA #896 Đã Duyệt
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <span className="w-7 h-7 rounded-lg bg-surface-container text-on-surface-variant inline-flex items-center justify-center">
                              <span className="material-symbols-outlined text-[16px]">
                                chevron_right
                              </span>
                            </span>
                          </td>
                        </tr>
                        {/* Row 4: Waybill #WB-2024-BT02 */}
                        <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                          <td className="py-3.5 px-4">
                            <div className="flex flex-col">
                              <span className="font-code-num font-semibold text-primary">
                                #WB-2024-BT02
                              </span>
                              <span className="font-label-sm text-label-sm text-secondary flex items-center gap-0.5 mt-0.5">
                                <span className="material-symbols-outlined text-[13px]">
                                  school
                                </span>{" "}
                                Vận đơn trường
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex flex-col max-w-[190px]">
                              <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                                THCS Hướng Việt
                              </span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant">
                                Huyện Hướng Hóa, Quảng Trị
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex flex-col font-code-num text-code-num">
                              <span className="font-semibold text-on-surface">
                                35 Màn hình &amp; PC
                              </span>
                              <span className="text-secondary font-body-sm text-[11px]">
                                Phòng máy chuẩn tin học
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="font-body-sm text-body-sm text-outline italic">
                              Chưa gán đội TNV
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-semibold whitespace-nowrap">
                              <span className="material-symbols-outlined text-[13px]">
                                check_circle
                              </span>
                              PA #901 Đã Duyệt
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <span className="w-7 h-7 rounded-lg bg-surface-container text-on-surface-variant inline-flex items-center justify-center">
                              <span className="material-symbols-outlined text-[16px]">
                                chevron_right
                              </span>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Table Visual Footnote */}
                  <div className="p-4 bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-2 font-body-sm text-body-sm text-secondary">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                      <span>
                        Hiển thị 4 trên 40 bản ghi hoạt động trong tháng này
                      </span>
                    </div>
                    <div className="flex items-center gap-1 font-label-sm text-label-sm">
                      <button className="px-2 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors">
                        « Trước
                      </button>
                      <span className="px-2 py-1 font-code-num">1</span>
                      <span className="px-2 py-1 font-code-num">2</span>
                      <span className="px-2 py-1 font-code-num">3</span>
                      <button className="px-2 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors">
                        Tiếp »
                      </button>
                    </div>
                  </div>
                </div>

                {/* Route Visualizer Box & Packing Verification Map Insight */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Visual 1: Lộ trình vận tải & Trạm kiểm tra */}
                  <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          near_me
                        </span>
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Lộ Trình Bàn Giao Tuyến
                        </span>
                      </div>
                      <span className="font-code-num text-code-num text-secondary">
                        310 km
                      </span>
                    </div>
                    <div className="relative pl-6 space-y-4 my-2">
                      {/* Line indicator */}
                      <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-surface-container-high"></div>
                      <div className="relative flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-[10px] -ml-6 mt-0.5 ring-4 ring-surface-container-lowest">
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
                        <span className="w-5 h-5 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-sm text-[10px] -ml-6 mt-0.5 ring-4 ring-surface-container-lowest">
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
                        <span className="w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-label-sm text-[10px] -ml-6 mt-0.5 ring-4 ring-surface-container-lowest">
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
                    <div className="mt-3 pt-3 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low p-2 rounded-lg">
                      <span>
                        Dự báo thời tiết đèo:{" "}
                        <strong className="text-tertiary">Khô ráo</strong>
                      </span>
                      <span>
                        Phương tiện: <strong>Bán tải 4x4</strong>
                      </span>
                    </div>
                  </div>
                  {/* Visual 2: Map Static Preview */}
                  <div className="rounded-xl overflow-hidden shadow-sm flex flex-col justify-between relative min-h-[220px]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      data-location="Muong Lat, Thanh Hoa, Vietnam"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80')",
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent"></div>
                    <div className="relative p-4 flex items-center justify-between text-surface">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider bg-surface-container-lowest/20 backdrop-blur px-2 py-0.5 rounded">
                        Tọa độ đích đến
                      </span>
                      <span className="font-code-num text-code-num">
                        20.5186° N, 104.6231° E
                      </span>
                    </div>
                    <div className="relative p-4 flex flex-col text-inverse-on-surface">
                      <span className="font-headline-sm text-headline-sm font-bold">
                        Xã Tam Chung, Mường Lát
                      </span>
                      <span className="font-body-sm text-body-sm text-inverse-on-surface/80">
                        Điểm trường cắm bản vùng cao giáp biên giới Lào
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN (5 Cols) - SELECTED WAYBILL DETAIL (#WB-2024-NW08) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                {/* Primary Card: Dossier Detail */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                  {/* Dossier Header */}
                  <div className="p-6 bg-surface-container flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full font-code-num text-code-num bg-primary text-on-primary font-bold">
                        #WB-2024-NW08
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary">
                        Tạo lúc: 14/10/2024 • 07:45
                      </span>
                    </div>
                    <div className="flex flex-col mt-1">
                      <span className="font-headline-lg text-headline-lg text-on-surface leading-tight">
                        Trường PTDTBT THCS Mường Lát
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Thị trấn Mường Lát, Huyện Mường Lát, Tỉnh Thanh Hóa
                      </span>
                    </div>
                    {/* School Recipient Identity */}
                    <div className="flex items-center gap-2 pt-2">
                      <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-headline-sm text-headline-sm">
                        <span className="material-symbols-outlined text-[20px]">
                          person_pin
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Thầy Hà Văn Tiêu{" "}
                          <span className="font-body-sm text-body-sm text-secondary font-normal">
                            (Hiệu trưởng)
                          </span>
                        </span>
                        <span className="font-code-num text-code-num text-primary">
                          SĐT: 0984 219 xxx • CMND/CCCD: 038085xxxxxx
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Strict RBAC Proof: Admin Allocation Policy (Read Only for Warehouse) */}
                  <div className="px-6 py-3 bg-surface-container-high flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        verified
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Căn Cứ Phân Bổ: #PA-2024-892
                        </span>
                        <span className="font-body-sm text-[11px] text-on-surface-variant">
                          Ký duyệt số bởi: Ban Điều Hành EduShare TW
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded font-label-sm text-[11px] bg-tertiary-fixed text-on-tertiary-fixed font-bold tracking-wide">
                      ĐÃ KHÓA SỬA (LOCKED)
                    </span>
                  </div>

                  {/* Donor Allocation Breakdown Table (stock_transfer_items) */}
                  <div className="p-6 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Danh Mục &amp; Nguồn Gốc Tài Trợ
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">
                          (Bóc tách nhà hảo tâm)
                        </span>
                      </div>
                      <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1 transition-colors">
                        <span className="material-symbols-outlined text-[14px]">
                          table_view
                        </span>
                        <span>Xuất Excel Nhà Hảo Tâm</span>
                      </button>
                    </div>
                    <div className="rounded-xl overflow-hidden bg-surface-container-low">
                      <div className="p-3 bg-surface-container flex flex-col gap-2">
                        {/* Item 1 */}
                        <div className="flex items-start justify-between">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface">
                                30 Laptop Lenovo ThinkPad T480s
                              </span>
                              <span className="px-2 py-[0.1rem] rounded font-code-num text-[10px] bg-tertiary-fixed text-on-tertiary-fixed font-bold">
                                Loại A (Mới 95%)
                              </span>
                            </div>
                            <span className="font-body-sm text-body-sm text-primary flex items-center gap-1 mt-0.5">
                              <span className="material-symbols-outlined text-[14px]">
                                volunteer_activism
                              </span>
                              Nguồn ủng hộ:{" "}
                              <strong>
                                Tập đoàn FPT (Công đoàn FPT Software)
                              </strong>
                            </span>
                            <span className="font-code-num text-[11px] text-secondary">
                              Phiếu tiếp nhận nguồn: #DON-2024-8842 • Đã kiểm
                              định linh kiện
                            </span>
                          </div>
                          <span className="font-code-num text-headline-sm font-semibold text-on-surface">
                            30 Chiếc
                          </span>
                        </div>
                      </div>
                      <div className="p-3 flex flex-col gap-2">
                        {/* Item 2 */}
                        <div className="flex items-start justify-between">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface">
                                20 Màn hình Dell Professional 24" FHD
                              </span>
                              <span className="px-2 py-[0.1rem] rounded font-code-num text-[10px] bg-tertiary-fixed text-on-tertiary-fixed font-bold">
                                Loại A- (Mới 90%)
                              </span>
                            </div>
                            <span className="font-body-sm text-body-sm text-primary flex items-center gap-1 mt-0.5">
                              <span className="material-symbols-outlined text-[14px]">
                                volunteer_activism
                              </span>
                              Nguồn ủng hộ:{" "}
                              <strong>
                                VNPT Hưng Yên (Cựu SV K44 quyên góp)
                              </strong>
                            </span>
                            <span className="font-code-num text-[11px] text-secondary">
                              Phiếu tiếp nhận nguồn: #DON-2024-9115 • Đầy đủ cáp
                              HDMI &amp; Nguồn
                            </span>
                          </div>
                          <span className="font-code-num text-headline-sm font-semibold text-on-surface">
                            20 Chiếc
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Total Items Summary */}
                    <div className="flex items-center justify-between px-2 pt-1 font-headline-sm text-headline-sm">
                      <span className="text-secondary">
                        Tổng số lượng bàn giao:
                      </span>
                      <span className="text-primary font-bold font-code-num">
                        50 Thiết bị chuẩn hóa
                      </span>
                    </div>
                  </div>

                  {/* Section: Waybill Assigned Volunteers (waybill_volunteers) */}
                  <div className="px-6 pb-6 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Đội Ngũ TNV Vận Chuyển
                        </span>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container font-semibold text-primary">
                          Không giới hạn
                        </span>
                      </div>
                      <button className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1 transition-colors">
                        <span className="material-symbols-outlined text-[16px]">
                          person_add
                        </span>
                        <span>+ Gán Thêm TNV</span>
                      </button>
                    </div>
                    {/* Volunteer Cards Stack */}
                    <div className="flex flex-col gap-2">
                      {/* TNV 1: Leader */}
                      <div className="p-2.5 rounded-xl bg-surface-container-low flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-[12px]">
                            HL
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface">
                                Lê Hoàng Long
                              </span>
                              <span className="px-1.5 py-[0.1rem] rounded font-label-sm text-[10px] bg-primary-fixed text-on-primary-fixed font-bold">
                                TRƯỞNG ĐOÀN XE
                              </span>
                            </div>
                            <span className="font-body-sm text-[12px] text-secondary">
                              Ford Ranger 29H-882.14 • SĐT: 0912 345 678
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-outline text-[18px]">
                          verified
                        </span>
                      </div>
                      {/* TNV 2: Technician */}
                      <div className="p-2.5 rounded-xl bg-surface-container-low flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-headline-sm text-[12px]">
                            TT
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface">
                                Trần Đình Trọng
                              </span>
                              <span className="px-1.5 py-[0.1rem] rounded font-label-sm text-[10px] bg-tertiary-fixed text-on-tertiary-fixed font-bold">
                                KỸ THUẬT ÁP TẢI
                              </span>
                            </div>
                            <span className="font-body-sm text-[12px] text-secondary">
                              Cài đặt Win &amp; Hướng dẫn • SĐT: 0978 998 112
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-outline text-[18px]">
                          verified
                        </span>
                      </div>
                      {/* TNV 3: Coordinator */}
                      <div className="p-2.5 rounded-xl bg-surface-container-low flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-headline-sm text-[12px]">
                            MT
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface">
                                Nguyễn Minh Tuấn
                              </span>
                              <span className="px-1.5 py-[0.1rem] rounded font-label-sm text-[10px] bg-secondary-fixed text-on-secondary-fixed font-bold">
                                HẬU CẦN - LIÊN LẠC
                              </span>
                            </div>
                            <span className="font-body-sm text-[12px] text-secondary">
                              Ký biên bản • SĐT: 0945 667 889
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-outline text-[18px]">
                          verified
                        </span>
                      </div>
                    </div>
                    <span className="font-body-sm text-[11px] text-secondary italic">
                      * Chỉ tài khoản có vai trò Tình nguyện viên đã xác thực
                      thông tin CCCD mới được gán vào đơn.
                    </span>
                  </div>

                  {/* Packing & Seal Verification Card */}
                  <div className="px-6 py-3 bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary text-[20px]">
                        qr_code_2
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          Trạng thái đóng kiện &amp; Seal
                        </span>
                        <span className="font-body-sm text-[11px] text-secondary">
                          50/50 thiết bị đã quét mã QR định danh
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed font-code-num text-code-num font-bold">
                      SEAL #HN-8842-OK
                    </span>
                  </div>

                  {/* Action Execution Bottom Area */}
                  <div className="p-6 flex flex-col gap-2 bg-surface-container-lowest">
                    <button className="w-full h-11 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-headline-sm flex items-center justify-center gap-2 shadow-md transition-all">
                      <span className="material-symbols-outlined text-[20px]">
                        local_shipping
                      </span>
                      <span>Xác Nhận Xuất Kho &amp; Bàn Giao Cho Đội TNV</span>
                    </button>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="h-9 px-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors">
                        <span className="material-symbols-outlined text-[16px]">
                          print
                        </span>
                        <span>In Phiếu Vận Đơn (3 Liên)</span>
                      </button>
                      <button className="h-9 px-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors">
                        <span className="material-symbols-outlined text-[16px]">
                          label
                        </span>
                        <span>In Tem Niêm Phong Vận Chuyển</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Summary Notice for Stock Transfer Module (Inter-hub) */}
                <div className="p-4 rounded-xl bg-tertiary-fixed/30 flex items-start gap-2">
                  <span className="material-symbols-outlined text-tertiary text-[22px] shrink-0 mt-0.5">
                    info
                  </span>
                  <div className="flex flex-col font-body-sm text-body-sm text-on-tertiary-fixed">
                    <span className="font-headline-sm text-headline-sm text-tertiary">
                      Chính Sách Điều Chuyển Liên Kho:
                    </span>
                    <span>
                      Khi xuất điều chuyển hàng qua HUB-02 hoặc HUB-03, trạng
                      thái tồn kho trừ tức thì tại HUB-01 và ghi tăng ngay trên
                      hệ thống tập trung. Không áp dụng quy trình chờ xác nhận
                      từ thủ kho nhận.
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
