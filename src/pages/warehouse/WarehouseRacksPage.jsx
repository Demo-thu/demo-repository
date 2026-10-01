import React from "react";
import { Link } from "react-router-dom";

const WarehouseRacksPage = () => {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none">
        <div className="flex flex-col">
          <div className="px-4 py-6 flex items-center gap-2 bg-surface-container-low">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[22px]">
                inventory_2
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1">
                <span className="font-headline-sm text-headline-sm font-bold text-on-surface truncate tracking-tight">
                  EduShare VN
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary-fixed text-on-primary-fixed">
                  HUB-01
                </span>
              </div>
              <span className="font-label-sm text-label-sm uppercase font-semibold text-primary tracking-wider truncate">
                Kho &amp; Kỹ Thuật
              </span>
            </div>
          </div>
          <div className="px-4 py-1 bg-surface-container-lowest flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                Hệ thống toàn quốc
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-tertiary font-semibold">
              63 Tỉnh Thành
            </span>
          </div>
          <div className="h-[calc(100vh-210px)] overflow-y-auto px-2 py-2">
            <nav className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <div className="px-2 py-1 font-label-sm text-label-sm uppercase font-bold text-outline tracking-wider">
                  Nhập Kho &amp; Tiếp Nhận
                </div>
                <Link
                  className="flex items-center gap-2 px-2 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                  to="/warehouse/receive"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    verified
                  </span>
                  <span className="font-body-md text-body-md">
                    Tiếp nhận &amp; Kiểm định
                  </span>
                </Link>
                <Link
                  className="flex items-center gap-2 px-2 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                  to="/warehouse/scan-qr"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    qr_code_scanner
                  </span>
                  <span className="font-body-md text-body-md">
                    Quét QR phân luồng
                  </span>
                </Link>
                <Link
                  className="flex items-center gap-2 px-2 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                  to="/warehouse/donation-receipt"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    volunteer_activism
                  </span>
                  <span className="font-body-md text-body-md">
                    Phiếu trao tặng
                  </span>
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <div className="px-2 py-1 font-label-sm text-label-sm uppercase font-bold text-outline tracking-wider">
                  Quản Lý Kho Bãi
                </div>
                <Link
                  className="flex items-center gap-2 px-2 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                  to="/warehouse/inventory"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    shelves
                  </span>
                  <span className="font-body-md text-body-md">
                    Tồn kho thiết bị
                  </span>
                </Link>
                <Link
                  className="flex items-center justify-between px-2 py-2 rounded-lg bg-primary-container text-on-primary-container font-semibold shadow-sm transition-colors"
                  to="/warehouse/racks"
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-on-primary-container">
                      grid_view
                    </span>
                    <span className="font-body-md text-body-md text-on-primary-container font-semibold">
                      Vị trí kệ định danh
                    </span>
                  </div>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-surface-container-lowest text-primary shadow-sm">
                    Chỉ xem
                  </span>
                </Link>
                <Link
                  className="flex items-center gap-2 px-2 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                  to="/warehouse/audit-report"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    fact_check
                  </span>
                  <span className="font-body-md text-body-md">
                    Kiểm kê &amp; Báo cáo
                  </span>
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <div className="px-2 py-1 font-label-sm text-label-sm uppercase font-bold text-outline tracking-wider">
                  Điều Phối &amp; Vận Chuyển
                </div>
                <Link
                  className="flex items-center gap-2 px-2 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                  to="/warehouse/dispatch"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    local_shipping
                  </span>
                  <span className="font-body-md text-body-md">
                    Lệnh điều chuyển &amp; Vận đơn
                  </span>
                </Link>
                <Link
                  className="flex items-center gap-2 px-2 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                  to="/warehouse/delivery-history"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    history
                  </span>
                  <span className="font-body-md text-body-md">
                    Lịch sử đợt giao
                  </span>
                </Link>
                <Link
                  className="flex items-center gap-2 px-2 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                  to="/warehouse/incident-report"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    report_problem
                  </span>
                  <span className="font-body-md text-body-md">
                    Báo cáo sự cố kho
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <div className="p-2 bg-surface-container-low flex flex-col gap-1">
          <div className="flex items-center justify-between text-on-surface-variant px-1">
            <span className="font-body-sm text-body-sm">Phiên bản</span>
            <span className="font-code-num text-code-num font-semibold text-secondary">
              v2.8.4-PROD
            </span>
          </div>
          <div className="flex items-center justify-between text-on-surface-variant px-1">
            <span className="font-body-sm text-body-sm">Kỹ thuật kho</span>
            <a
              className="font-code-num text-code-num font-bold text-primary hover:underline"
              href="tel:19006829"
            >
              1900 6829
            </a>
          </div>
        </div>
      </aside>

      <div className="pl-72 flex-1 flex flex-col">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-6">
          <div className="flex items-center gap-4 min-w-0 max-w-xl flex-1">
            <div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md shrink-0">
              <span className="hover:text-primary cursor-pointer transition-colors">
                EduShare VN Kho
              </span>
              <span className="material-symbols-outlined text-[16px] text-outline-variant">
                chevron_right
              </span>
              <span className="hover:text-primary cursor-pointer transition-colors">
                Quản Lý Kho Bãi
              </span>
              <span className="material-symbols-outlined text-[16px] text-outline-variant">
                chevron_right
              </span>
              <span className="text-on-surface font-semibold truncate">
                Vị Trí Kệ Định Danh
              </span>
            </div>
            <div className="relative flex-1 max-w-md hidden xl:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                search
              </span>
              <input
                className="w-full bg-surface-container-lowest border-0 rounded-lg pl-9 pr-3 py-1.5 text-body-sm font-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
                placeholder="Tra cứu mã vận đơn, số lô hàng, serial hoặc vị trí kệ (vd: Kệ A2, Ô 12)..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <button
                className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors"
                title="Quét nhanh QR"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">
                  barcode_scanner
                </span>
              </button>
              <button
                className="relative w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors"
                title="Thông báo hệ thống"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">
                  notifications
                </span>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error ring-2 ring-surface"></span>
              </button>
              <button
                className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors"
                title="Trợ giúp &amp; Tài liệu quy trình"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">
                  help_outline
                </span>
              </button>
            </div>
            <div className="flex items-center gap-2 pl-2 border-l border-outline-variant/30">
              <div className="flex flex-col text-right hidden sm:flex">
                <div className="flex items-center justify-end gap-1">
                  <span className="font-label-md text-label-md font-semibold text-on-surface truncate">
                    Trần Hùng
                  </span>
                  <span className="font-code-num text-[11px] font-bold text-primary bg-primary-fixed px-1 rounded">
                    (TK-MB-04)
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Trưởng Kho Kỹ Thuật • HUB-01 Hà Nội
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="relative pt-16 w-full min-h-screen bg-surface flex-1">
          <div className="flex flex-col w-full">
            <div className="px-8 py-6 flex flex-col gap-6 max-w-[1720px] mx-auto w-full">
              {/* Header Section & Subheader */}
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 pb-1">
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      KHO TỔNG MIỀN BẮC (HUB-01 HÀ NỘI) • QUY CHUẨN
                      ISO-LOGISTICS 2024
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[14px]">
                        lock
                      </span>
                      CHẾ ĐỘ CHỈ XEM (READ-ONLY RACK MATRIX) - RBAC v2.8.4
                    </span>
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                    Bản Đồ Vị Trí Kệ Định Danh &amp; Khay Lưu Trữ
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-4xl">
                    Sơ đồ trực quan hệ thống kệ phân tầng, mã khay định danh
                    phục vụ định vị thiết bị nhập kho, kiểm định và soạn hàng
                    theo lệnh điều phối đã duyệt của Admin Tổng.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 self-start xl:self-center shrink-0">
                  <button
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors shadow-sm"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      download
                    </span>
                    Xuất Sơ Đồ Kệ (.pdf/.xlsx)
                  </button>
                  <button
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors shadow-sm"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      qr_code_scanner
                    </span>
                    Quét Barcode / RFID Tra Cứu
                  </button>
                  <button
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-colors shadow-sm"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      print
                    </span>
                    In Tem Mã Kệ Đồng Loạt
                  </button>
                </div>
              </div>

              {/* Bento 4 Metric KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-4 relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full bg-primary/5 pointer-events-none"></div>
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                        Tổng Sức Chứa Kho
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg font-bold text-on-surface">
                          24 Kệ
                        </span>
                        <span className="font-headline-md text-headline-md text-secondary">
                          / 192 Ô Khay
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px]">
                        warehouse
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-2">
                    <div className="flex items-center justify-between text-body-sm font-body-sm">
                      <span className="text-on-surface-variant">
                        Tải trọng sử dụng
                      </span>
                      <span className="font-code-num text-code-num font-semibold text-primary">
                        81.2% công suất
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: "81.2%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-4 relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full bg-tertiary/5 pointer-events-none"></div>
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                        Thiết Bị Đang Định Danh Kệ
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg font-bold text-on-surface">
                          3,420
                        </span>
                        <span className="font-body-md text-body-md text-on-surface-variant">
                          thiết bị
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-tertiary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px]">
                        qr_code_2
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm font-body-sm text-tertiary font-medium pt-2">
                    <span className="material-symbols-outlined text-[16px]">
                      check_circle
                    </span>
                    <span className="">100% gắn mã QR/RFID chuẩn vị trí</span>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-4 relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full bg-primary-container/5 pointer-events-none"></div>
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                        Khu Vực Đang Chọn
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg font-bold text-primary">
                          Khu A - Kệ A2
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px]">
                        shelves
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant pt-2">
                    <span className="">Laptop &amp; Linh kiện kiểm định</span>
                    <span className="font-code-num text-code-num font-semibold text-on-surface">
                      16/16 Ô lưu
                    </span>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-4 relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full bg-secondary/5 pointer-events-none"></div>
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                        Ràng Buộc Thẩm Quyền (RBAC)
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-headline-sm text-headline-sm font-bold text-secondary">
                          Khóa Sửa Kệ
                        </span>
                        <span className="material-symbols-outlined text-[18px] text-secondary">
                          lock_outline
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest text-secondary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px]">
                        admin_panel_settings
                      </span>
                    </div>
                  </div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant pt-2 leading-tight">
                    Chỉ Admin Tổng có quyền quy hoạch cấu trúc; Kho chỉ tra cứu
                    vị trí lấy hàng.
                  </div>
                </div>
              </div>

              {/* MAIN WORKSPACE: Split 7/12 & 5/12 */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                {/* LEFT COLUMN: Rack Matrix Visualizer (7/12) */}
                <div className="xl:col-span-7 flex flex-col gap-4">
                  {/* Zone Tabs Navigation */}
                  <div className="flex items-center gap-2 overflow-x-auto p-1 bg-surface-container-low rounded-xl">
                    <button
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md font-semibold shadow-sm shrink-0 transition-all"
                      type="button"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Khu A: Laptop &amp; Tablet (Kệ A1 - A6)
                    </button>
                    <button
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md shrink-0 transition-all"
                      type="button"
                    >
                      <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                      Khu B: PC &amp; Màn Hình (Kệ B1 - B6)
                    </button>
                    <button
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md shrink-0 transition-all"
                      type="button"
                    >
                      <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                      Khu C: Thiết Bị Mạng (Kệ C1 - C6)
                    </button>
                    <button
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md shrink-0 transition-all"
                      type="button"
                    >
                      <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                      Khu D: Sách &amp; Vật Phẩm (Kệ D1 - D6)
                    </button>
                  </div>

                  {/* Interactive Rack Matrix Board */}
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-6 flex flex-col gap-4">
                    {/* Rack Info Bar */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 bg-surface-container-low rounded-xl">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="font-code-num text-code-num font-bold text-on-primary bg-primary px-2 py-0.5 rounded">
                            RACK-MB-A2
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Kệ Chuyên Dụng A2
                          </span>
                          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-tertiary-fixed text-on-tertiary-fixed">
                            Đang Hoạt Động
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Chủng loại: Laptop Giáo Dục &amp; SSD Nâng Cấp • Tải
                          trọng an toàn: 850kg
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-body-sm font-body-sm shrink-0">
                        <div className="flex items-center gap-1.5 text-on-surface-variant">
                          <span className="material-symbols-outlined text-[18px] text-tertiary">
                            thermostat
                          </span>
                          <span className="">22.4°C</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-on-surface-variant">
                          <span className="material-symbols-outlined text-[18px] text-primary">
                            humidity_percentage
                          </span>
                          <span className="">52% RH</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-on-surface-variant">
                          <span className="material-symbols-outlined text-[18px] text-secondary">
                            weight
                          </span>
                          <span className="font-code-num text-code-num">
                            640 / 850 kg
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Color Coding Legend */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-label-sm font-label-sm py-1">
                      <span className="text-outline uppercase tracking-wider">
                        Trạng thái ô khay:
                      </span>
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                          <span className="text-on-surface-variant">
                            Đạt chuẩn sẵn sàng xuất
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-primary"></span>
                          <span className="text-on-surface-variant">
                            Đang kiểm định / Nâng cấp
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></span>
                          <span className="text-on-surface-variant">
                            Chờ đối soát tiếp nhận
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-surface-container-highest"></span>
                          <span className="text-on-surface-variant">
                            Ô khay còn trống
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Physical Rack Structure Visualizer (4 Tầng x 4 Ô) */}
                    <div className="flex flex-col gap-3 p-4 bg-surface-container rounded-xl">
                      {/* Tầng 04 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between px-1">
                          <span className="font-label-sm text-label-sm font-bold text-on-surface-variant uppercase tracking-wider flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              layers
                            </span>
                            TẦNG 04 (Tải trọng tầng: 120/200 kg)
                          </span>
                          <span className="font-code-num text-[11px] text-secondary">
                            Vị trí cao - Cần thang cơ khí
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                          {/* Ô 13 */}
                          <div className="p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-all flex flex-col gap-1.5 cursor-pointer shadow-sm">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num font-bold text-on-surface">
                                Ô A2-13
                              </span>
                              <span
                                className="w-2.5 h-2.5 rounded-full bg-tertiary"
                                title="Đạt chuẩn"
                              ></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              25 HP ProBook 440 G5
                            </span>
                            <div className="flex items-center justify-between text-[11px] font-code-num text-secondary">
                              <span className="">Lô: #DON-8810</span>
                              <span className="text-tertiary font-semibold">
                                100%
                              </span>
                            </div>
                          </div>
                          {/* Ô 14 */}
                          <div className="p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-all flex flex-col gap-1.5 cursor-pointer shadow-sm">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num font-bold text-on-surface">
                                Ô A2-14
                              </span>
                              <span
                                className="w-2.5 h-2.5 rounded-full bg-primary"
                                title="Đang kiểm tra"
                              ></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              18 Dell Latitude 7490
                            </span>
                            <div className="flex items-center justify-between text-[11px] font-code-num text-secondary">
                              <span className="">Lô: #DON-8824</span>
                              <span className="text-primary font-semibold">
                                75%
                              </span>
                            </div>
                          </div>
                          {/* Ô 15 */}
                          <div className="p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-all flex flex-col gap-1.5 cursor-pointer shadow-sm">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num font-bold text-on-surface">
                                Ô A2-15
                              </span>
                              <span
                                className="w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim"
                                title="Mới tiếp nhận"
                              ></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              20 Asus Vivobook X409
                            </span>
                            <div className="flex items-center justify-between text-[11px] font-code-num text-secondary">
                              <span className="">Lô: #DON-8833</span>
                              <span className="text-secondary font-semibold">
                                80%
                              </span>
                            </div>
                          </div>
                          {/* Ô 16 */}
                          <div className="p-3 rounded-lg bg-surface-container-highest/60 hover:bg-surface-container-highest transition-all flex flex-col gap-1.5 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num font-bold text-outline">
                                Ô A2-16
                              </span>
                              <span
                                className="w-2.5 h-2.5 rounded-full bg-outline-variant"
                                title="Trống"
                              ></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-outline italic">
                              Khay còn trống
                            </span>
                            <div className="flex items-center justify-between text-[11px] font-code-num text-outline">
                              <span className="">Sức chứa: 30 máy</span>
                              <span className="">0%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tầng 03 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between px-1">
                          <span className="font-label-sm text-label-sm font-bold text-on-surface-variant uppercase tracking-wider flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              layers
                            </span>
                            TẦNG 03 (Tải trọng tầng: 185/220 kg)
                          </span>
                          <span className="font-code-num text-[11px] text-secondary">
                            Tầng trọng tâm thao tác
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                          {/* Ô 09 */}
                          <div className="p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-all flex flex-col gap-1.5 cursor-pointer shadow-sm">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num font-bold text-on-surface">
                                Ô A2-09
                              </span>
                              <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              30 Lenovo L480
                            </span>
                            <div className="flex items-center justify-between text-[11px] font-code-num text-secondary">
                              <span className="">Lô: #DON-8790</span>
                              <span className="text-tertiary font-semibold">
                                100%
                              </span>
                            </div>
                          </div>
                          {/* Ô 10 */}
                          <div className="p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-all flex flex-col gap-1.5 cursor-pointer shadow-sm">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num font-bold text-on-surface">
                                Ô A2-10
                              </span>
                              <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              28 ThinkPad X270
                            </span>
                            <div className="flex items-center justify-between text-[11px] font-code-num text-secondary">
                              <span className="">Lô: #DON-8802</span>
                              <span className="text-tertiary font-semibold">
                                95%
                              </span>
                            </div>
                          </div>
                          {/* Ô 11 */}
                          <div className="p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-all flex flex-col gap-1.5 cursor-pointer shadow-sm">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num font-bold text-on-surface">
                                Ô A2-11
                              </span>
                              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              24 Acer Aspire 5 A514
                            </span>
                            <div className="flex items-center justify-between text-[11px] font-code-num text-secondary">
                              <span className="">Lô: #DON-8818</span>
                              <span className="text-primary font-semibold">
                                80%
                              </span>
                            </div>
                          </div>
                          {/* Ô 12 (ACTIVE / HIGHLIGHTED) */}
                          <div className="p-3 rounded-lg bg-primary-fixed text-on-primary-fixed shadow-md flex flex-col gap-1.5 cursor-pointer transform scale-[1.02] transition-all">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-[16px] text-primary">
                                  stars
                                </span>
                                <span className="font-code-num text-code-num font-bold text-primary">
                                  Ô A2-12
                                </span>
                              </div>
                              <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-primary text-on-primary uppercase tracking-wider">
                                ĐANG CHỌN
                              </span>
                            </div>
                            <span className="font-headline-sm text-[13px] font-bold text-on-primary-fixed line-clamp-1">
                              30 ThinkPad T480s (FPT)
                            </span>
                            <div className="flex items-center justify-between text-[11px] font-code-num text-primary">
                              <span className="">Lệnh: Mường Lát</span>
                              <span className="font-bold">100% CÔNG SUẤT</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tầng 02 */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between px-1">
                          <span className="font-label-sm text-label-sm font-bold text-on-surface-variant uppercase tracking-wider flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              layers
                            </span>
                            TẦNG 02 (Tải trọng tầng: 195/240 kg)
                          </span>
                          <span className="font-code-num text-[11px] text-secondary">
                            Tầng tiếp nhận nhanh
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                          {/* Ô 05 */}
                          <div className="p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-all flex flex-col gap-1.5 cursor-pointer shadow-sm">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num font-bold text-on-surface">
                                Ô A2-05
                              </span>
                              <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              26 Dell Vostro 3400
                            </span>
                            <div className="flex items-center justify-between text-[11px] font-code-num text-secondary">
                              <span className="">Lô: #DON-8755</span>
                              <span className="text-tertiary font-semibold">
                                90%
                              </span>
                            </div>
                          </div>
                          {/* Ô 06 */}
                          <div className="p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-all flex flex-col gap-1.5 cursor-pointer shadow-sm">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num font-bold text-on-surface">
                                Ô A2-06
                              </span>
                              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              20 HP EliteBook 840
                            </span>
                            <div className="flex items-center justify-between text-[11px] font-code-num text-secondary">
                              <span className="">Lô: #DON-8761</span>
                              <span className="text-primary font-semibold">
                                70%
                              </span>
                            </div>
                          </div>
                          {/* Ô 07 */}
                          <div className="p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-all flex flex-col gap-1.5 cursor-pointer shadow-sm">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num font-bold text-on-surface">
                                Ô A2-07
                              </span>
                              <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              15 Macbook Air 2017
                            </span>
                            <div className="flex items-center justify-between text-[11px] font-code-num text-secondary">
                              <span className="">Lô: #DON-8809</span>
                              <span className="text-secondary font-semibold">
                                50%
                              </span>
                            </div>
                          </div>
                          {/* Ô 08 */}
                          <div className="p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-all flex flex-col gap-1.5 cursor-pointer shadow-sm">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num font-bold text-on-surface">
                                Ô A2-08
                              </span>
                              <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              32 Fujitsu Lifebook
                            </span>
                            <div className="flex items-center justify-between text-[11px] font-code-num text-secondary">
                              <span className="">Lô: #DON-8780</span>
                              <span className="text-tertiary font-semibold">
                                100%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* TẦNG 01 (SÀN KỆ) */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between px-1">
                          <span className="font-label-sm text-label-sm font-bold text-on-surface-variant uppercase tracking-wider flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              layers
                            </span>
                            TẦNG 01 (SÀN KỆ) (Tải trọng tầng: 210/250 kg)
                          </span>
                          <span className="font-code-num text-[11px] text-secondary">
                            Hàng nặng / Thùng sạc lưu động
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                          {/* Ô 01 */}
                          <div className="p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-all flex flex-col gap-1.5 cursor-pointer shadow-sm">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num font-bold text-on-surface">
                                Ô A2-01
                              </span>
                              <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              8 Thùng Sạc Di Động 30 Cổng
                            </span>
                            <div className="flex items-center justify-between text-[11px] font-code-num text-secondary">
                              <span className="">Lô: #ACC-8012</span>
                              <span className="text-tertiary font-semibold">
                                100%
                              </span>
                            </div>
                          </div>
                          {/* Ô 02 */}
                          <div className="p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-all flex flex-col gap-1.5 cursor-pointer shadow-sm">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num font-bold text-on-surface">
                                Ô A2-02
                              </span>
                              <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              120 Bộ Sạc Nguồn Type-C
                            </span>
                            <div className="flex items-center justify-between text-[11px] font-code-num text-secondary">
                              <span className="">Lô: #ACC-8019</span>
                              <span className="text-tertiary font-semibold">
                                95%
                              </span>
                            </div>
                          </div>
                          {/* Ô 03 */}
                          <div className="p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-all flex flex-col gap-1.5 cursor-pointer shadow-sm">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num font-bold text-on-surface">
                                Ô A2-03
                              </span>
                              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              45 Pin Dự Phòng Laptop
                            </span>
                            <div className="flex items-center justify-between text-[11px] font-code-num text-secondary">
                              <span className="">Lô: #BAT-9002</span>
                              <span className="text-primary font-semibold">
                                75%
                              </span>
                            </div>
                          </div>
                          {/* Ô 04 */}
                          <div className="p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-all flex flex-col gap-1.5 cursor-pointer shadow-sm">
                            <div className="flex items-center justify-between">
                              <span className="font-code-num text-code-num font-bold text-on-surface">
                                Ô A2-04
                              </span>
                              <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
                            </div>
                            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                              50 Ram DDR4 &amp; SSD 256GB
                            </span>
                            <div className="flex items-center justify-between text-[11px] font-code-num text-secondary">
                              <span className="">Lô: #RAM-3341</span>
                              <span className="text-tertiary font-semibold">
                                100%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Rack Switcher Strip */}
                    <div className="flex flex-col gap-2 pt-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                        Chuyển nhanh các kệ trong Khu A:
                      </span>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        <div className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-all flex flex-col gap-1 text-center">
                          <span className="font-code-num text-code-num font-bold text-on-surface">
                            Kệ A1
                          </span>
                          <span className="text-[11px] text-on-surface-variant">
                            14/16 Ô
                          </span>
                          <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                            <div
                              className="h-full bg-tertiary rounded-full"
                              style={{ width: "87%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-primary-container text-on-primary-container cursor-default flex flex-col gap-1 text-center shadow-sm">
                          <span className="font-code-num text-code-num font-bold">
                            Kệ A2 (Đang xem)
                          </span>
                          <span className="text-[11px] font-medium opacity-90">
                            15/16 Ô
                          </span>
                          <div className="w-full h-1 bg-primary/30 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-surface-container-lowest rounded-full"
                              style={{ width: "94%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-all flex flex-col gap-1 text-center">
                          <span className="font-code-num text-code-num font-bold text-on-surface">
                            Kệ A3
                          </span>
                          <span className="text-[11px] text-on-surface-variant">
                            12/16 Ô
                          </span>
                          <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                            <div
                              className="h-full bg-tertiary rounded-full"
                              style={{ width: "75%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-all flex flex-col gap-1 text-center">
                          <span className="font-code-num text-code-num font-bold text-on-surface">
                            Kệ A4
                          </span>
                          <span className="text-[11px] text-on-surface-variant">
                            16/16 Ô
                          </span>
                          <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                            <div
                              className="h-full bg-tertiary rounded-full"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-all flex flex-col gap-1 text-center">
                          <span className="font-code-num text-code-num font-bold text-on-surface">
                            Kệ A5
                          </span>
                          <span className="text-[11px] text-on-surface-variant">
                            10/16 Ô
                          </span>
                          <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                            <div
                              className="h-full bg-tertiary rounded-full"
                              style={{ width: "62%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-all flex flex-col gap-1 text-center">
                          <span className="font-code-num text-code-num font-bold text-on-surface">
                            Kệ A6
                          </span>
                          <span className="text-[11px] text-on-surface-variant">
                            11/16 Ô
                          </span>
                          <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                            <div
                              className="h-full bg-tertiary rounded-full"
                              style={{ width: "68%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Inspection & Bin Detail Panel (5/12) */}
                <div className="xl:col-span-5 flex flex-col gap-4">
                  {/* Box 1: Selected Bin Dossier */}
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-6 flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-3 border-b-0 pb-1">
                      <div className="flex flex-col gap-1">
                        <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                          Hồ Sơ Chi Tiết Khay Định Vị
                        </span>
                        <div className="flex items-center gap-2">
                          <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                            Kệ A2 - Tầng 04 (Ô 12)
                          </h3>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold shrink-0">
                        <span className="material-symbols-outlined text-[14px]">
                          verified
                        </span>
                        Đạt Chuẩn Xuất
                      </span>
                    </div>

                    {/* Realistic Warehouse Shelf / Bin Image Card */}
                    <div className="relative w-full h-44 rounded-lg overflow-hidden bg-surface-container-high shadow-inner">
                      <img
                        alt="Close-up realistic view of organized industrial warehouse storage rack shelves in a clean modern logistics depot with labeled blue plastic bins containing neatly stacked refurbished enterprise laptops, warm focused LED ceiling lighting, clear high-contrast QR barcode stickers visible on shelf rails."
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent flex items-end p-4">
                        <div className="flex items-center justify-between w-full text-inverse-on-surface">
                          <div className="flex flex-col">
                            <span className="font-code-num text-code-num font-bold tracking-wider">
                              BIN-MB-A2-T04-O12
                            </span>
                            <span className="text-[12px] opacity-90">
                              Niêm phong RFID: VN-DON-8842-MB
                            </span>
                          </div>
                          <div className="w-9 h-9 rounded bg-surface-container-lowest text-on-surface flex items-center justify-center shadow-md">
                            <span className="material-symbols-outlined text-[24px]">
                              qr_code_2
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Specifications Matrix */}
                    <div className="grid grid-cols-2 gap-3 text-body-sm font-body-sm">
                      <div className="p-2 rounded-lg bg-surface-container-low flex flex-col gap-0.5">
                        <span className="text-outline font-label-sm text-label-sm">
                          VẬT PHẨM LƯU TRỮ
                        </span>
                        <span className="font-semibold text-on-surface">
                          30 Laptop ThinkPad T480s
                        </span>
                        <span className="text-[11px] text-on-surface-variant font-code-num">
                          i5-8350U • RAM 8G • SSD 256G
                        </span>
                      </div>
                      <div className="p-2 rounded-lg bg-surface-container-low flex flex-col gap-0.5">
                        <span className="text-outline font-label-sm text-label-sm">
                          NGUỒN QUYÊN GÓP
                        </span>
                        <span className="font-semibold text-on-surface">
                          Tập đoàn FPT
                        </span>
                        <span className="text-[11px] text-primary font-code-num">
                          Lô: #DON-2024-8842
                        </span>
                      </div>
                      <div className="p-2 rounded-lg bg-surface-container-low flex flex-col gap-0.5">
                        <span className="text-outline font-label-sm text-label-sm">
                          PHƯƠNG ÁN PHÂN BỔ
                        </span>
                        <span className="font-semibold text-on-surface">
                          Trường THCS Mường Lát
                        </span>
                        <span className="text-[11px] text-tertiary font-code-num">
                          Mã PA: #PA-2024-892 (Đã Duyệt)
                        </span>
                      </div>
                      <div className="p-2 rounded-lg bg-surface-container-low flex flex-col gap-0.5">
                        <span className="text-outline font-label-sm text-label-sm">
                          LỆNH ĐIỀU CHUYỂN / VẬN ĐƠN
                        </span>
                        <span className="font-semibold text-on-surface">
                          Xe tải chuyên dụng #03
                        </span>
                        <span className="text-[11px] text-primary font-code-num">
                          Vận đơn: #WB-2024-NW08
                        </span>
                      </div>
                    </div>

                    {/* Table of Devices in this Bin */}
                    <div className="flex flex-col gap-2 pt-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                          Danh Sách Serial Máy Trong Khay (5 / 30 máy)
                        </span>
                        <span className="font-code-num text-[11px] text-primary font-semibold cursor-pointer hover:underline">
                          Xem toàn bộ 30 máy →
                        </span>
                      </div>
                      <div className="w-full overflow-hidden rounded-lg bg-surface-container-low">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                              <th className="py-2.5 px-3">
                                Mã Serial Thiết Bị
                              </th>
                              <th className="py-2.5 px-2">Kiểm Định</th>
                              <th className="py-2.5 px-3 text-right">
                                Trạng Thái Xuất
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-none font-code-num text-code-num text-on-surface text-[12px]">
                            <tr className="hover:bg-surface-container transition-colors">
                              <td className="py-2 px-3 font-semibold text-primary">
                                SN-VNPT-2024-99812
                              </td>
                              <td className="py-2 px-2 text-tertiary font-medium">
                                Grade A (98%)
                              </td>
                              <td className="py-2 px-3 text-right">
                                <span className="inline-flex px-1.5 py-0.5 rounded text-[10px] font-bold bg-tertiary-fixed text-on-tertiary-fixed">
                                  Đã Dán Seal
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-surface-container transition-colors">
                              <td className="py-2 px-3 font-semibold text-primary">
                                SN-FPT-4820-01
                              </td>
                              <td className="py-2 px-2 text-tertiary font-medium">
                                Grade A (95%)
                              </td>
                              <td className="py-2 px-3 text-right">
                                <span className="inline-flex px-1.5 py-0.5 rounded text-[10px] font-bold bg-tertiary-fixed text-on-tertiary-fixed">
                                  Đã Dán Seal
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-surface-container transition-colors">
                              <td className="py-2 px-3 font-semibold text-primary">
                                SN-FPT-4820-02
                              </td>
                              <td className="py-2 px-2 text-tertiary font-medium">
                                Grade A (96%)
                              </td>
                              <td className="py-2 px-3 text-right">
                                <span className="inline-flex px-1.5 py-0.5 rounded text-[10px] font-bold bg-tertiary-fixed text-on-tertiary-fixed">
                                  Đã Dán Seal
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-surface-container transition-colors">
                              <td className="py-2 px-3 font-semibold text-primary">
                                SN-FPT-4820-03
                              </td>
                              <td className="py-2 px-2 text-tertiary font-medium">
                                Grade B+ (92%)
                              </td>
                              <td className="py-2 px-3 text-right">
                                <span className="inline-flex px-1.5 py-0.5 rounded text-[10px] font-bold bg-tertiary-fixed text-on-tertiary-fixed">
                                  Đã Dán Seal
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-surface-container transition-colors">
                              <td className="py-2 px-3 font-semibold text-primary">
                                SN-FPT-4820-04
                              </td>
                              <td className="py-2 px-2 text-tertiary font-medium">
                                Grade A (97%)
                              </td>
                              <td className="py-2 px-3 text-right">
                                <span className="inline-flex px-1.5 py-0.5 rounded text-[10px] font-bold bg-tertiary-fixed text-on-tertiary-fixed">
                                  Đã Dán Seal
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Bottom Action Buttons for Warehouse Operator */}
                    <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
                      <button
                        className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-colors shadow-sm"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          receipt_long
                        </span>
                        In Phiếu Định Vị Lấy Hàng
                      </button>
                      <button
                        className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px] text-tertiary">
                          check_circle_outline
                        </span>
                        Quét Xác Nhận Rời Kệ
                      </button>
                    </div>
                  </div>

                  {/* Box 2: RBAC Policy Compliance Notice */}
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2.5 text-on-surface">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest text-secondary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          shield
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm font-bold">
                          Quy Chuẩn Phân Quyền Kho
                        </span>
                        <span className="font-code-num text-[11px] text-secondary">
                          RBAC-POL-2024-V2.8.4 (Chỉ Đọc Cấu Trúc)
                        </span>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-surface-container-low text-body-sm font-body-sm text-on-surface-variant flex flex-col gap-2">
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                          policy
                        </span>
                        <p className="leading-relaxed">
                          <strong className="text-on-surface font-semibold">
                            Lưu ý kiểm toán:
                          </strong>{" "}
                          Chức năng sửa vị trí kệ, đổi mã ô, ghép máy tự do đã
                          được gỡ bỏ hoàn toàn khỏi Cổng Nhà Kho. Thủ kho thao
                          tác quét mã để xác nhận lấy đúng vật phẩm theo vận đơn
                          đã được Admin phê duyệt.
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[11px] pt-1 text-outline">
                        <span className="">
                          Mã kiểm toán phiên:{" "}
                          <code className="font-code-num font-semibold text-on-surface">
                            LOG-TK-MB04-992A
                          </code>
                        </span>
                        <span className="text-tertiary font-semibold">
                          Toàn vẹn CSDL 100%
                        </span>
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
