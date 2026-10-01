import { useState } from "react";
import { Link } from "react-router-dom";

const WarehouseDeliveryHistoryPage = () => {
  const [expandedAccordions, setExpandedAccordions] = useState({});

  const toggleAccordion = (id) => {
    setExpandedAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-background font-body-md text-on-surface min-h-screen antialiased">
      <aside className="bg-surface-container-low fixed top-0 left-0 z-50 flex h-full w-72 flex-col justify-between overflow-y-auto shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="px-space-lg pt-space-lg pb-space-md gap-space-xs flex flex-col">
            <div className="gap-space-sm flex items-center">
              <div className="bg-primary text-on-primary flex h-9 w-9 items-center justify-center rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-[22px]">inventory_2</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary leading-tight font-bold tracking-tight">
                  EduShare VN
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                  Kho &amp; Kỹ Thuật
                </span>
              </div>
            </div>
            <div className="mt-space-sm px-space-sm py-space-xs bg-surface-container gap-space-xs inline-flex items-center rounded">
              <span className="bg-tertiary-container h-2 w-2 animate-pulse rounded-full"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Kho Tổng Miền Bắc (TK-MB)
              </span>
            </div>
          </div>
          <nav className="px-space-sm space-y-space-md mt-space-sm flex flex-col">
            <div className="gap-space-xs flex flex-col">
              <div className="px-space-md py-space-xs font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wider uppercase">
                Nhập Kho &amp; Tiếp Nhận
              </div>
              <Link
                className="px-space-md py-space-sm font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface gap-space-sm flex items-center rounded-lg transition-all"
                to="/warehouse/receive"
              >
                <span className="material-symbols-outlined text-[20px]">fact_check</span>
                <span>Tiếp nhận &amp; Kiểm định</span>
              </Link>
              <Link
                className="px-space-md py-space-sm font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface gap-space-sm flex items-center rounded-lg transition-all"
                to="/warehouse/scan-qr"
              >
                <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                <span>Quét QR phân luồng</span>
              </Link>
              <Link
                className="px-space-md py-space-sm font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface gap-space-sm flex items-center rounded-lg transition-all"
                to="/warehouse/donation-receipt"
              >
                <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                <span>Phiếu trao tặng</span>
              </Link>
            </div>
            <div className="gap-space-xs flex flex-col">
              <div className="px-space-md py-space-xs font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wider uppercase">
                Quản Lý Kho Bãi
              </div>
              <Link
                className="px-space-md py-space-sm font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface gap-space-sm flex items-center rounded-lg transition-all"
                to="/warehouse/inventory"
              >
                <span className="material-symbols-outlined text-[20px]">devices</span>
                <span>Tồn kho thiết bị</span>
              </Link>
              <Link
                className="px-space-md py-space-sm font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface gap-space-sm flex items-center justify-between rounded-lg transition-all"
                to="/warehouse/racks"
              >
                <div className="gap-space-sm flex items-center">
                  <span className="material-symbols-outlined text-[20px]">grid_view</span>
                  <span>Vị trí kệ định danh</span>
                </div>
                <span className="font-label-sm text-label-sm px-space-xs bg-surface-container text-on-surface-variant rounded py-0.5">
                  Xem
                </span>
              </Link>
              <Link
                className="px-space-md py-space-sm font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface gap-space-sm flex items-center rounded-lg transition-all"
                to="/warehouse/audit-report"
              >
                <span className="material-symbols-outlined text-[20px]">assessment</span>
                <span>Kiểm kê &amp; Báo cáo</span>
              </Link>
            </div>
            <div className="gap-space-xs flex flex-col">
              <div className="px-space-md py-space-xs font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wider uppercase">
                Điều Phối &amp; Vận Chuyển
              </div>
              <Link
                className="px-space-md py-space-sm font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface gap-space-sm flex items-center rounded-lg transition-all"
                to="/warehouse/dispatch"
              >
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span>Lệnh điều chuyển &amp; Vận đơn</span>
              </Link>
              <Link
                className="px-space-md py-space-sm font-body-md text-body-md bg-primary-container text-on-primary-container gap-space-sm flex items-center rounded-lg font-medium shadow-sm transition-all"
                to="/warehouse/delivery-history"
              >
                <span className="material-symbols-outlined text-[20px]">history_edu</span>
                <span>Lịch sử đợt giao</span>
              </Link>
              <Link
                className="px-space-md py-space-sm font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface gap-space-sm flex items-center rounded-lg transition-all"
                to="/warehouse/incident-report"
              >
                <span className="material-symbols-outlined text-[20px]">report_problem</span>
                <span>Báo cáo sự cố cá nhân</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="p-space-md m-space-sm bg-surface-container gap-space-xs flex flex-col rounded-xl">
          <div className="text-on-surface-variant flex items-center justify-between">
            <span className="font-label-sm text-label-sm font-semibold tracking-wider uppercase">Cổng Kho Vận</span>
            <span className="font-code-num text-code-num text-primary font-medium">v2.8.4</span>
          </div>
          <div className="gap-space-xs text-on-surface-variant font-body-sm text-body-sm flex items-center">
            <span className="material-symbols-outlined text-tertiary-container text-[16px]">support_agent</span>
            <span>Kỹ thuật kho:</span>
            <span className="text-on-surface font-code-num font-medium">1900 6829</span>
          </div>
        </div>
      </aside>
      <div className="pl-72">
        <header className="bg-surface/90 px-gutter-desktop fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="gap-space-md flex w-full max-w-xl items-center">
            <div className="relative w-full">
              <span className="material-symbols-outlined left-space-md text-on-surface-variant absolute top-1/2 -translate-y-1/2 text-[20px]">
                search
              </span>
              <input
                className="pr-space-md py-space-xs bg-surface-container-lowest font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:ring-primary w-full rounded-lg border-0 pl-10 shadow-[0_1px_3px_rgba(0,0,0,0.05)] focus:ring-2 focus:outline-none"
                placeholder="Tra cứu mã vận đơn, số lô hàng, serial hoặc quét mã QR thiết bị..."
                type="text"
              />
              <div className="right-space-sm absolute top-1/2 flex -translate-y-1/2 items-center gap-1">
                <kbd className="font-code-num bg-surface-container text-on-surface-variant rounded px-1.5 py-0.5 text-[10px]">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>
          <div className="gap-space-md flex items-center">
            <button
              className="bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
              title="Quét nhanh QR code"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">center_focus_strong</span>
            </button>
            <button
              className="bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface relative flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
              title="Thông báo điều phối"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="bg-error absolute top-2 right-2 h-2 w-2 rounded-full"></span>
            </button>
            <div className="bg-outline-variant/30 h-8 w-px"></div>
            <div className="gap-space-sm pl-space-xs flex items-center">
              <div className="relative">
                <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
                </div>
                <span className="bg-tertiary-container ring-surface-container-lowest absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full ring-2"></span>
              </div>
              <div className="flex flex-col text-left">
                <div className="gap-space-xs flex items-center">
                  <span className="font-label-md text-label-md text-on-surface leading-none font-semibold">
                    Trần Hùng
                  </span>
                  <span className="font-code-num bg-surface-container-high text-primary rounded px-1.5 py-0.5 text-[11px] leading-none font-medium">
                    TK-MB-04
                  </span>
                </div>
                <span className="font-body-sm text-on-surface-variant mt-0.5 text-[11px] leading-tight">
                  Trưởng Kho Kỹ Thuật Hà Nội
                </span>
              </div>
            </div>
          </div>
        </header>
        <main className="bg-surface relative min-h-screen pt-16">
          <div className="flex w-full flex-col">
            <div className="px-gutter-desktop py-space-lg gap-space-lg flex flex-col">
              <div className="gap-space-md flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="gap-space-xs flex flex-col">
                  <div className="gap-space-xs text-on-surface-variant font-body-sm text-body-sm flex items-center">
                    <span className="hover:text-primary cursor-pointer transition-colors">EduShare VN Kho</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="hover:text-primary cursor-pointer transition-colors">
                      Điều Phối &amp; Vận Chuyển
                    </span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="text-primary font-semibold">Lịch Sử Các Đợt Xuất Giao Hàng</span>
                  </div>
                  <div className="gap-space-sm mt-1 flex items-center">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                      Lịch Sử Đợt Giao &amp; Xuất Kho
                    </h1>
                    <span className="bg-secondary-container text-on-secondary-container font-code-num rounded px-2.5 py-1 text-[11px] font-semibold tracking-wide">
                      PORTAL THỦ KHO
                    </span>
                  </div>
                </div>
                <div className="gap-space-md p-space-sm px-space-md bg-surface-container-lowest flex items-center rounded-xl shadow-sm">
                  <div className="bg-surface-container text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[24px]">warehouse</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="gap-space-xs flex items-center">
                      <span className="font-label-md text-label-md text-on-surface font-bold">
                        Kho Tổng Miền Bắc (HUB-01 Hà Nội)
                      </span>
                      <span className="bg-tertiary-container h-2 w-2 rounded-full" title="Kho đang trực tuyến"></span>
                    </div>
                    <div className="gap-space-xs text-on-surface-variant font-body-sm flex items-center text-[12px]">
                      <span>
                        Phụ trách: <strong className="text-on-surface font-medium">Trần Hùng</strong>
                      </span>
                      <span className="text-outline">•</span>
                      <span className="font-code-num text-primary font-semibold">Mã: TK-MB-04</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-space-md grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                <div className="p-space-lg bg-surface-container-lowest group relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-md">
                  <div className="bg-primary/5 pointer-events-none absolute -right-4 -bottom-4 h-24 w-24 rounded-full"></div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wider uppercase">
                      Tổng Chuyến Xuất Giao
                    </span>
                    <span className="bg-surface-container text-primary rounded-lg p-1.5">
                      <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                    </span>
                  </div>
                  <div className="mt-space-md">
                    <div className="gap-space-xs flex items-baseline">
                      <span className="font-headline-xl text-headline-xl text-on-surface font-code-num font-extrabold">
                        142
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">đợt giao</span>
                    </div>
                    <div className="mt-space-xs font-body-sm text-tertiary-container flex items-center gap-1.5 text-[12px] font-medium">
                      <span className="material-symbols-outlined text-[16px]">check_circle</span>
                      <span>100% khớp niêm phong RFID Seal</span>
                    </div>
                  </div>
                </div>
                <div className="p-space-lg bg-surface-container-lowest group relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-md">
                  <div className="bg-tertiary/5 pointer-events-none absolute -right-4 -bottom-4 h-24 w-24 rounded-full"></div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wider uppercase">
                      Thiết Bị Xuất Chuyển Trường
                    </span>
                    <span className="bg-surface-container text-tertiary-container rounded-lg p-1.5">
                      <span className="material-symbols-outlined text-[20px]">computer</span>
                    </span>
                  </div>
                  <div className="mt-space-md">
                    <div className="gap-space-xs flex items-baseline">
                      <span className="font-headline-xl text-headline-xl text-on-surface font-code-num font-extrabold">
                        3,420
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">thiết bị</span>
                    </div>
                    <div className="mt-space-xs font-code-num text-on-surface-variant flex flex-wrap gap-1 text-[11px]">
                      <span className="bg-surface-container rounded px-1.5 py-0.5">1.85k PC</span>
                      <span className="bg-surface-container rounded px-1.5 py-0.5">920 Laptop</span>
                      <span className="bg-surface-container rounded px-1.5 py-0.5">450 UPS</span>
                      <span className="bg-surface-container rounded px-1.5 py-0.5">200 SW</span>
                    </div>
                  </div>
                </div>
                <div className="p-space-lg bg-surface-container-lowest group relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-md">
                  <div className="bg-secondary-container/40 pointer-events-none absolute -right-4 -bottom-4 h-24 w-24 rounded-full"></div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wider uppercase">
                      Lệnh Điều Chuyển Tức Thì
                    </span>
                    <span className="bg-surface-container text-secondary rounded-lg p-1.5">
                      <span className="material-symbols-outlined text-[20px]">sync_alt</span>
                    </span>
                  </div>
                  <div className="mt-space-md">
                    <div className="gap-space-xs flex items-baseline">
                      <span className="font-headline-xl text-headline-xl text-on-surface font-code-num font-extrabold">
                        68
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                        lệnh hoàn tất
                      </span>
                    </div>
                    <div className="mt-space-xs font-body-sm text-on-surface-variant flex items-center gap-1.5 text-[12px]">
                      <span className="material-symbols-outlined text-primary text-[16px]">bolt</span>
                      <span>Hoàn tất ngay, không chờ xác nhận đích</span>
                    </div>
                  </div>
                </div>
                <div className="p-space-lg bg-surface-container-lowest group relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-md">
                  <div className="bg-primary/5 pointer-events-none absolute -right-4 -bottom-4 h-24 w-24 rounded-full"></div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wider uppercase">
                      Tỷ Lệ Nghiệm Thu PoD
                    </span>
                    <span className="bg-surface-container text-primary rounded-lg p-1.5">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </span>
                  </div>
                  <div className="mt-space-md">
                    <div className="gap-space-xs flex items-baseline">
                      <span className="font-headline-xl text-headline-xl text-primary font-code-num font-extrabold">
                        99.2%
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">(141/142)</span>
                    </div>
                    <div className="mt-space-xs font-body-sm text-on-surface-variant flex items-center gap-1.5 text-[12px]">
                      <span className="bg-tertiary-container h-1.5 w-1.5 rounded-full"></span>
                      <span>Chữ ký số BGH + Định vị GPS TNV</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-space-md bg-surface-container-lowest gap-space-md flex flex-col items-stretch justify-between rounded-xl shadow-sm xl:flex-row xl:items-center">
                <div className="gap-space-sm flex flex-1 flex-col items-stretch md:flex-row md:items-center">
                  <div className="relative min-w-[280px] flex-1">
                    <span className="material-symbols-outlined text-on-surface-variant absolute top-1/2 left-3 -translate-y-1/2 text-[20px]">
                      search
                    </span>
                    <input
                      className="pr-space-md bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:ring-primary w-full rounded-lg py-2 pl-10 shadow-inner focus:ring-2 focus:outline-none"
                      placeholder="Tìm mã xuất #EXP, vận đơn #WB, tên trường nhận, TNV..."
                      type="text"
                    />
                  </div>
                  <div className="relative min-w-[190px]">
                    <select
                      className="bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:ring-primary w-full appearance-none rounded-lg py-2 pr-8 pl-3 focus:ring-2 focus:outline-none"
                      defaultValue="Xuất cho trường thụ hưởng"
                    >
                      <option value="Tất cả loại đợt xuất">Tất cả loại đợt xuất</option>
                      <option value="Xuất cho trường thụ hưởng">Xuất cho trường thụ hưởng</option>
                      <option value="Xuất điều chuyển liên kho">Xuất điều chuyển liên kho</option>
                      <option value="Xuất trả bảo hành linh kiện">Xuất trả bảo hành linh kiện</option>
                    </select>
                    <span className="material-symbols-outlined text-on-surface-variant pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-[18px]">
                      expand_more
                    </span>
                  </div>
                  <div className="relative min-w-[160px]">
                    <select
                      className="bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:ring-primary w-full appearance-none rounded-lg py-2 pr-8 pl-3 focus:ring-2 focus:outline-none"
                      defaultValue="Tháng này (10/2024)"
                    >
                      <option value="Học kỳ 1 (2024-2025)">Học kỳ 1 (2024-2025)</option>
                      <option value="Tháng này (10/2024)">Tháng này (10/2024)</option>
                      <option value="Quý III / 2024">Quý III / 2024</option>
                      <option value="Toàn bộ năm 2024">Toàn bộ năm 2024</option>
                    </select>
                    <span className="material-symbols-outlined text-on-surface-variant pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-[18px]">
                      calendar_today
                    </span>
                  </div>
                  <div className="relative min-w-[160px]">
                    <select
                      className="bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:ring-primary w-full appearance-none rounded-lg py-2 pr-8 pl-3 focus:ring-2 focus:outline-none"
                      defaultValue="Đã giao &amp; Đã có PoD"
                    >
                      <option value="Mọi trạng thái">Mọi trạng thái</option>
                      <option value="Đã giao &amp; Đã có PoD">Đã giao &amp; Đã có PoD</option>
                      <option value="Đang trên hành trình">Đang trên hành trình</option>
                      <option value="Đã xuất niêm phong kho">Đã xuất niêm phong kho</option>
                    </select>
                    <span className="material-symbols-outlined text-on-surface-variant pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-[18px]">
                      filter_list
                    </span>
                  </div>
                </div>
                <div className="gap-space-sm flex shrink-0 items-center">
                  <button
                    className="px-space-md bg-tertiary text-on-tertiary font-label-md text-label-md hover:bg-tertiary-container inline-flex items-center gap-2 rounded-lg py-2 shadow-sm transition-colors"
                    title="Xuất dữ liệu đối soát bóc tách chi tiết từng Nhà Hảo Tâm và danh mục sản phẩm"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
                    <span>Xuất Excel Đối Soát Hảo Tâm</span>
                  </button>
                  <button
                    className="px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md inline-flex items-center gap-2 rounded-lg py-2 transition-colors"
                    title="In lệnh xuất kho"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">print</span>
                    <span>In Phiếu Xuất (PDF)</span>
                  </button>
                </div>
              </div>
              <div className="gap-space-lg grid grid-cols-1 items-start lg:grid-cols-12">
                <div className="gap-space-md flex flex-col lg:col-span-7">
                  <div className="flex items-center justify-between">
                    <div className="gap-space-xs flex items-center">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Danh Sách Lô Hàng Đã Xuất Kho
                      </span>
                      <span className="font-code-num text-label-sm bg-primary-fixed text-primary rounded-full px-2 py-0.5 font-bold">
                        Tháng 10/2024
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Hiển thị 4 đợt gần nhất</span>
                  </div>
                  <div className="bg-surface-container-lowest p-space-lg gap-space-md relative flex flex-col overflow-hidden rounded-xl shadow-sm">
                    <div className="bg-primary absolute top-0 bottom-0 left-0 w-1.5"></div>
                    <div className="gap-space-sm flex flex-col justify-between pl-2 sm:flex-row sm:items-start">
                      <div className="flex flex-col">
                        <div className="gap-space-xs flex flex-wrap items-center">
                          <span className="font-code-num text-primary text-[15px] font-bold">#EXP-2024-110</span>
                          <span className="text-outline">•</span>
                          <span className="font-code-num text-body-sm text-on-surface-variant font-medium">
                            Vận Đơn: #WB-2024-NW08
                          </span>
                          <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm rounded px-2 py-0.5 text-[11px] font-semibold">
                            Đã Nghiệm Thu PoD
                          </span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1 font-bold">
                          Trường PTDTBT THCS Mường Lát (Thanh Hóa)
                        </h2>
                        <div className="text-on-surface-variant font-body-sm mt-0.5 flex items-center gap-1.5 text-[12px]">
                          <span className="material-symbols-outlined text-tertiary-container text-[15px]">
                            location_on
                          </span>
                          <span>Khu 2, Thị trấn Mường Lát, Huyện Mường Lát, Tỉnh Thanh Hóa</span>
                        </div>
                      </div>
                      <div className="flex shrink-0 flex-col items-start sm:items-end">
                        <span className="font-code-num text-on-surface-variant text-[12px] font-medium">
                          Xuất: 08:30 • 24/10/2024
                        </span>
                        <div
                          className="bg-surface-container-high text-primary font-code-num mt-1 flex items-center gap-1 rounded px-2.5 py-1 text-[11px] font-semibold"
                          title="Quy tắc RBAC: Lập vận đơn chỉ sau khi admin duyệt phương án"
                        >
                          <span className="material-symbols-outlined text-[14px]">fact_check</span>
                          <span>PA Phân Bổ #PA-2024-892 (Admin đã duyệt)</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 pb-1 pl-2">
                      <div className="relative flex items-center justify-between">
                        <div className="bg-surface-container-high absolute top-1/2 left-0 -z-0 h-1 w-full -translate-y-1/2"></div>
                        <div className="bg-tertiary-container absolute top-1/2 left-0 -z-0 h-1 w-full -translate-y-1/2"></div>
                        <div className="bg-surface-container-lowest z-10 flex flex-col items-center px-1">
                          <div className="bg-tertiary-container text-on-tertiary flex h-7 w-7 items-center justify-center rounded-full text-xs shadow-sm">
                            <span className="material-symbols-outlined text-[16px]">inventory_2</span>
                          </div>
                          <span className="font-label-sm text-on-surface mt-1 text-[11px] font-semibold">
                            Xuất Kho TK-MB
                          </span>
                          <span className="font-code-num text-on-surface-variant text-[10px]">24/10 08:30</span>
                        </div>
                        <div className="bg-surface-container-lowest z-10 flex flex-col items-center px-1">
                          <div className="bg-tertiary-container text-on-tertiary flex h-7 w-7 items-center justify-center rounded-full text-xs shadow-sm">
                            <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                          </div>
                          <span className="font-label-sm text-on-surface mt-1 text-[11px] font-semibold">
                            Vận Chuyển
                          </span>
                          <span className="font-code-num text-on-surface-variant text-[10px]">Xe 29C-882.10</span>
                        </div>
                        <div className="bg-surface-container-lowest z-10 flex flex-col items-center px-1">
                          <div className="bg-tertiary-container text-on-tertiary flex h-7 w-7 items-center justify-center rounded-full text-xs shadow-sm">
                            <span className="material-symbols-outlined text-[16px]">school</span>
                          </div>
                          <span className="font-label-sm text-on-surface mt-1 text-[11px] font-semibold">
                            Đến Mường Lát
                          </span>
                          <span className="font-code-num text-on-surface-variant text-[10px]">25/10 14:15</span>
                        </div>
                        <div className="bg-surface-container-lowest z-10 flex flex-col items-center px-1">
                          <div className="bg-tertiary-container text-on-tertiary flex h-7 w-7 items-center justify-center rounded-full text-xs shadow-sm">
                            <span className="material-symbols-outlined text-[16px]">verified</span>
                          </div>
                          <span className="font-label-sm text-tertiary-container mt-1 text-[11px] font-bold">
                            Ký PoD Số Hóa
                          </span>
                          <span className="font-code-num text-tertiary-container text-[10px] font-semibold">
                            25/10 16:40
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-space-md bg-surface-container-low gap-space-sm ml-2 flex flex-col rounded-xl pl-4">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wider uppercase">
                          Danh Mục Thiết Bị Bàn Giao (37 Kiện hàng)
                        </span>
                        <span className="font-code-num text-label-sm text-primary font-medium">
                          Tem niêm phong: RFID-VN-9842
                        </span>
                      </div>
                      <div className="gap-space-sm grid grid-cols-1 md:grid-cols-3">
                        <div className="p-space-sm bg-surface-container-lowest flex flex-col gap-1 rounded-lg shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-headline-sm text-on-surface text-[13px] font-bold">
                              25 Bộ Máy Tính PC
                            </span>
                            <span className="font-code-num bg-surface-container text-on-surface-variant rounded px-1.5 py-0.5 text-[11px] font-semibold">
                              Grade A
                            </span>
                          </div>
                          <p className="font-body-sm text-on-surface-variant text-[12px]">
                            HP ProDesk 400 G6 MT / Core i5 / 16GB / SSD 256GB
                          </p>
                          <div className="text-on-surface-variant mt-1 flex items-center justify-between pt-1.5 text-[11px]">
                            <span>Nguồn tài trợ:</span>
                            <span className="text-primary font-semibold">Tập đoàn FPT</span>
                          </div>
                        </div>
                        <div className="p-space-sm bg-surface-container-lowest flex flex-col gap-1 rounded-lg shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-headline-sm text-on-surface text-[13px] font-bold">
                              10 Bộ Lưu Điện UPS
                            </span>
                            <span className="font-code-num bg-surface-container text-on-surface-variant rounded px-1.5 py-0.5 text-[11px] font-semibold">
                              Mới 100%
                            </span>
                          </div>
                          <p className="font-body-sm text-on-surface-variant text-[12px]">
                            Santak 1000E Pro LCD 600W bảo vệ phòng Lab
                          </p>
                          <div className="text-on-surface-variant mt-1 flex items-center justify-between pt-1.5 text-[11px]">
                            <span>Nguồn tài trợ:</span>
                            <span className="text-primary font-semibold">Quỹ Hy Vọng</span>
                          </div>
                        </div>
                        <div className="p-space-sm bg-surface-container-lowest flex flex-col gap-1 rounded-lg shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-headline-sm text-on-surface text-[13px] font-bold">
                              02 Cisco Switch 24P
                            </span>
                            <span className="font-code-num bg-surface-container text-on-surface-variant rounded px-1.5 py-0.5 text-[11px] font-semibold">
                              Grade A
                            </span>
                          </div>
                          <p className="font-body-sm text-on-surface-variant text-[12px]">
                            Cisco Catalyst 2960X Gigabit POE+ Kèm cáp
                          </p>
                          <div className="text-on-surface-variant mt-1 flex items-center justify-between pt-1.5 text-[11px]">
                            <span>Nguồn tài trợ:</span>
                            <span className="text-primary font-semibold">VNPT Hưng Yên</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gap-space-md grid grid-cols-1 pl-2 md:grid-cols-2">
                      <div className="p-space-sm bg-surface-container gap-space-xs flex flex-col rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-on-surface-variant text-[11px] font-bold tracking-wider uppercase">
                            Đội Ngũ Tình Nguyện Viên Vận Chuyển
                          </span>
                          <span className="font-code-num text-primary text-[11px] font-bold">3 Tình Nguyện Viên</span>
                        </div>
                        <div className="mt-1 flex flex-col gap-1.5">
                          <div className="text-body-sm flex items-center justify-between text-[12px]">
                            <div className="flex items-center gap-1.5">
                              <span className="bg-primary text-on-primary flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold">
                                HL
                              </span>
                              <span className="text-on-surface font-medium">Lê Hoàng Long</span>
                              <span className="py-0.2 bg-primary-fixed text-primary rounded px-1.5 text-[10px] font-semibold">
                                Trưởng đoàn
                              </span>
                            </div>
                            <span className="font-code-num text-on-surface-variant">0912.839.201</span>
                          </div>
                          <div className="text-body-sm flex items-center justify-between text-[12px]">
                            <div className="flex items-center gap-1.5">
                              <span className="bg-secondary text-on-secondary flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold">
                                VN
                              </span>
                              <span className="text-on-surface font-medium">Trần Văn Nam</span>
                              <span className="text-on-surface-variant text-[10px]">Kỹ thuật viên đi kèm</span>
                            </div>
                            <span className="font-code-num text-on-surface-variant">0984.112.339</span>
                          </div>
                          <div className="text-body-sm flex items-center justify-between text-[12px]">
                            <div className="flex items-center gap-1.5">
                              <span className="bg-secondary text-on-secondary flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold">
                                HĐ
                              </span>
                              <span className="text-on-surface font-medium">Đỗ Hữu Đạt</span>
                              <span className="text-on-surface-variant text-[10px]">Tài xế xe 29C-882.10</span>
                            </div>
                            <span className="font-code-num text-on-surface-variant">0977.561.022</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-space-sm bg-surface-container flex flex-col justify-between rounded-lg">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-label-sm text-on-surface-variant text-[11px] font-bold tracking-wider uppercase">
                              Biên Bản Nghiệm Thu PoD
                            </span>
                            <span className="font-code-num text-tertiary-container text-[11px] font-semibold">
                              Khớp 100% Số Serial
                            </span>
                          </div>
                          <div className="gap-space-sm mt-2 flex items-center">
                            <div className="bg-surface-container-lowest text-tertiary-container flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                              <span className="material-symbols-outlined text-[28px]">draw</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="font-body-sm text-on-surface text-[12px] font-bold">
                                Đã ký số: Thầy Hà Văn Tiêu
                              </span>
                              <span className="font-body-sm text-on-surface-variant text-[11px]">
                                Hiệu trưởng THCS Mường Lát
                              </span>
                              <div className="font-code-num text-tertiary-container mt-0.5 flex items-center gap-1 text-[11px]">
                                <span className="material-symbols-outlined text-[13px]">pin_drop</span>
                                <span>GPS: 20.5052° N, 104.6221° E</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="font-body-sm mt-2 flex items-center justify-between pt-1 text-[11px]">
                          <span className="text-on-surface-variant">Thời gian xác thực PoD:</span>
                          <span className="font-code-num text-on-surface font-semibold">25/10/2024 • 16:40</span>
                        </div>
                      </div>
                    </div>
                    <div className="gap-space-sm flex flex-wrap items-center justify-between pt-2 pl-2">
                      <div className="gap-space-xs flex items-center">
                        <button
                          className="bg-primary text-on-primary font-label-md hover:bg-primary/90 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] shadow-sm transition-colors"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[16px]">qr_code_2</span>
                          <span>Xem 37 Mã QR Serial Lô Này</span>
                        </button>
                        <button
                          className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] transition-colors"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[16px]">description</span>
                          <span>Phiếu Bàn Giao Thiết Bị</span>
                        </button>
                      </div>
                      <button
                        className="font-label-md text-primary inline-flex items-center gap-1 text-[12px] hover:underline"
                        type="button"
                      >
                        <span>Hồ sơ đóng góp của Nhà Hảo Tâm</span>
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                  <div className="gap-space-xs flex flex-col">
                    <div className="p-space-md bg-surface-container-lowest gap-space-xs flex flex-col rounded-xl shadow-sm transition-shadow hover:shadow-md">
                      <div
                        className="flex cursor-pointer items-center justify-between"
                        onClick={() => toggleAccordion("acc-098")}
                      >
                        <div className="gap-space-md flex items-center">
                          <div className="bg-surface-container text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                            <span className="material-symbols-outlined text-[18px]">laptop_mac</span>
                          </div>
                          <div className="flex flex-col">
                            <div className="gap-space-xs flex items-center">
                              <span className="font-code-num text-label-md text-primary font-bold">#EXP-2024-098</span>
                              <span className="text-outline">•</span>
                              <span className="font-code-num text-on-surface-variant text-[12px] font-medium">
                                #WB-2024-HG14
                              </span>
                              <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm rounded px-2 py-0.5 text-[10px] font-semibold">
                                Đã có PoD
                              </span>
                            </div>
                            <span className="font-headline-sm text-body-md text-on-surface font-semibold">
                              PTDTBT Pả Vi (Mèo Vạc, Hà Giang)
                            </span>
                          </div>
                        </div>
                        <div className="gap-space-md flex items-center">
                          <div className="hidden flex-col text-right sm:flex">
                            <span className="font-code-num text-on-surface text-[12px] font-semibold">
                              45 Laptop Dell Latitude 5520
                            </span>
                            <span className="font-body-sm text-on-surface-variant text-[11px]">
                              Tài trợ: Viettel &amp; BIDV • TNV Hoàng Sơn
                            </span>
                          </div>
                          <span
                            className="material-symbols-outlined text-on-surface-variant transition-transform"
                            style={{
                              transform: expandedAccordions["acc-098"] ? "rotate(180deg)" : "rotate(0deg)",
                            }}
                          >
                            expand_more
                          </span>
                        </div>
                      </div>
                      <div
                        className={`pt-space-sm mt-space-xs bg-surface-container-low p-space-sm text-body-sm flex flex-col gap-1 rounded-lg text-[12px] ${expandedAccordions["acc-098"] ? "" : "hidden"}`}
                      >
                        <div className="text-on-surface-variant flex justify-between">
                          <span>
                            Xuất kho: <strong>18/10/2024 - 07:45</strong>
                          </span>
                          <span>
                            Phương án phân bổ: <strong>#PA-2024-870 (Đã duyệt)</strong>
                          </span>
                          <span>
                            Hiệu trưởng ký nhận: <strong>Cô Vàng Thị Mai</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-space-md bg-surface-container-lowest gap-space-xs flex flex-col rounded-xl shadow-sm transition-shadow hover:shadow-md">
                      <div
                        className="flex cursor-pointer items-center justify-between"
                        onClick={() => toggleAccordion("acc-085")}
                      >
                        <div className="gap-space-md flex items-center">
                          <div className="bg-surface-container text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                            <span className="material-symbols-outlined text-[18px]">desktop_windows</span>
                          </div>
                          <div className="flex flex-col">
                            <div className="gap-space-xs flex items-center">
                              <span className="font-code-num text-label-md text-primary font-bold">#EXP-2024-085</span>
                              <span className="text-outline">•</span>
                              <span className="font-code-num text-on-surface-variant text-[12px] font-medium">
                                #WB-2024-SL02
                              </span>
                              <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm rounded px-2 py-0.5 text-[10px] font-semibold">
                                Đã giao
                              </span>
                            </div>
                            <span className="font-headline-sm text-body-md text-on-surface font-semibold">
                              Trường Phổ Thông Số 2 Bắc Yên (Sơn La)
                            </span>
                          </div>
                        </div>
                        <div className="gap-space-md flex items-center">
                          <div className="hidden flex-col text-right sm:flex">
                            <span className="font-code-num text-on-surface text-[12px] font-semibold">
                              15 Bộ PC HP + Màn Hình IPS
                            </span>
                            <span className="font-body-sm text-on-surface-variant text-[11px]">
                              Tài trợ: Công ty Cổ phần MISA
                            </span>
                          </div>
                          <span
                            className="material-symbols-outlined text-on-surface-variant transition-transform"
                            style={{
                              transform: expandedAccordions["acc-085"] ? "rotate(180deg)" : "rotate(0deg)",
                            }}
                          >
                            expand_more
                          </span>
                        </div>
                      </div>
                      <div
                        className={`pt-space-sm mt-space-xs bg-surface-container-low p-space-sm text-body-sm flex flex-col gap-1 rounded-lg text-[12px] ${expandedAccordions["acc-085"] ? "" : "hidden"}`}
                      >
                        <div className="text-on-surface-variant flex justify-between">
                          <span>
                            Xuất kho: <strong>12/10/2024 - 09:10</strong>
                          </span>
                          <span>
                            Phương án: <strong>#PA-2024-851</strong>
                          </span>
                          <span>
                            Biên bản PoD: <strong>#POD-SL-0021 (Đạt yêu cầu)</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-space-md bg-surface-container-lowest gap-space-xs flex flex-col rounded-xl shadow-sm transition-shadow hover:shadow-md">
                      <div
                        className="flex cursor-pointer items-center justify-between"
                        onClick={() => toggleAccordion("acc-072")}
                      >
                        <div className="gap-space-md flex items-center">
                          <div className="bg-secondary-container text-on-secondary-container flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                            <span className="material-symbols-outlined text-[18px]">sync_alt</span>
                          </div>
                          <div className="flex flex-col">
                            <div className="gap-space-xs flex items-center">
                              <span className="font-code-num text-label-md text-primary font-bold">#EXP-2024-072</span>
                              <span className="text-outline">•</span>
                              <span className="font-code-num text-secondary text-[12px] font-medium">
                                Lệnh Chuyển Liên Kho #TRANS-2024-05
                              </span>
                              <span className="bg-surface-container text-on-surface-variant font-label-sm rounded px-2 py-0.5 text-[10px] font-semibold">
                                Xuất Hoàn Tất Ngay
                              </span>
                            </div>
                            <span className="font-headline-sm text-body-md text-on-surface font-semibold">
                              Chi Viện Kho Tiếp Vận Miền Trung (Đà Nẵng - HUB-02)
                            </span>
                          </div>
                        </div>
                        <div className="gap-space-md flex items-center">
                          <div className="hidden flex-col text-right sm:flex">
                            <span className="font-code-num text-on-surface text-[12px] font-semibold">
                              50 iPad Gen 9 &amp; 20 ThinkPad T480
                            </span>
                            <span className="font-body-sm text-on-surface-variant text-[11px]">
                              Quy tắc: Không cần kho đích xác nhận
                            </span>
                          </div>
                          <span
                            className="material-symbols-outlined text-on-surface-variant transition-transform"
                            style={{
                              transform: expandedAccordions["acc-072"] ? "rotate(180deg)" : "rotate(0deg)",
                            }}
                          >
                            expand_more
                          </span>
                        </div>
                      </div>
                      <div
                        className={`pt-space-sm mt-space-xs bg-surface-container-low p-space-sm text-body-sm flex flex-col gap-1 rounded-lg text-[12px] ${expandedAccordions["acc-072"] ? "" : "hidden"}`}
                      >
                        <div className="text-on-surface-variant flex justify-between">
                          <span>
                            Ký xuất kho gửi: <strong>Trần Hùng (TK-MB-04)</strong>
                          </span>
                          <span>
                            Phương thức vận chuyển: <strong>Viettel Post Logistics #VTP-8842199</strong>
                          </span>
                          <span>
                            Tình trạng: <strong>Hàng đã rời kho Miền Bắc 06/10/2024</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container gap-space-md flex items-center rounded-xl">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-[22px]">info</span>
                    </div>
                    <div className="text-body-sm text-on-surface-variant flex flex-col text-[13px]">
                      <span className="text-on-surface font-bold">Đồng Bộ Hồ Sơ Thiết Bị Tự Động</span>
                      <span>
                        Mọi đợt xuất giao sau khi có PoD hợp lệ sẽ tự động cập nhật tình trạng thiết bị sang{" "}
                        <em>"Đã Bàn Giao Thụ Hưởng"</em> trên Sổ Cái Tài Sản Giáo Dục Quốc Gia.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="gap-space-md flex flex-col lg:col-span-5">
                  <div className="bg-surface-container-lowest p-space-lg gap-space-sm flex flex-col rounded-xl shadow-sm">
                    <div className="gap-space-xs text-primary flex items-center">
                      <span className="material-symbols-outlined text-[20px]">policy</span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Quy Chuẩn Xuất Kho &amp; Kiểm Toán (Audit)
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Đặc tả thẩm quyền tài khoản Thủ Kho (
                      <strong className="text-on-surface">Trần Hùng - TK-MB</strong>) theo tài liệu RBAC:
                    </p>
                    <div className="gap-space-xs mt-1 flex flex-col">
                      <div className="bg-surface-container-low flex items-start gap-2.5 rounded-lg p-2.5">
                        <span className="material-symbols-outlined text-primary mt-0.5 text-[18px]">link</span>
                        <div className="text-body-sm flex flex-col text-[12px]">
                          <strong className="text-on-surface">Căn Cứ Lập Vận Đơn:</strong>
                          <span className="text-on-surface-variant">
                            Chỉ được đóng gói và xuất giao khi Phương Án Phân Bổ đã được Admin phê duyệt số hóa.
                          </span>
                        </div>
                      </div>
                      <div className="bg-surface-container-low flex items-start gap-2.5 rounded-lg p-2.5">
                        <span className="material-symbols-outlined text-primary mt-0.5 text-[18px]">group_add</span>
                        <div className="text-body-sm flex flex-col text-[12px]">
                          <strong className="text-on-surface">Gán Đội Ngũ Tình Nguyện Viên:</strong>
                          <span className="text-on-surface-variant">
                            Kho có quyền gán nhiều TNV và phương tiện cho một đợt xuất giao mà không bị giới hạn.
                          </span>
                        </div>
                      </div>
                      <div className="bg-surface-container-low flex items-start gap-2.5 rounded-lg p-2.5">
                        <span className="material-symbols-outlined text-tertiary-container mt-0.5 text-[18px]">
                          grid_view
                        </span>
                        <div className="text-body-sm flex flex-col text-[12px]">
                          <strong className="text-on-surface">Vị Trí Kệ Định Danh (Racks):</strong>
                          <span className="text-on-surface-variant">
                            Kho chỉ có quyền xem trực quan vị trí kệ (Tầng/Dãy), không can thiệp tái cấu trúc phân vùng
                            tại màn này.
                          </span>
                        </div>
                      </div>
                      <div className="bg-surface-container-low flex items-start gap-2.5 rounded-lg p-2.5">
                        <span className="material-symbols-outlined text-error mt-0.5 text-[18px]">lock_person</span>
                        <div className="text-body-sm flex flex-col text-[12px]">
                          <strong className="text-on-surface">Báo Cáo Sự Cố Chuyến Đi:</strong>
                          <span className="text-on-surface-variant">
                            Thủ kho chỉ có quyền xem hồ sơ sự cố do TNV gửi về; tuyệt đối không tạo mới và không sửa
                            thay TNV.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-space-lg gap-space-sm flex flex-col rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="gap-space-xs text-tertiary-container flex items-center">
                        <span className="material-symbols-outlined text-[20px]">table_view</span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Bóc Tách Nguồn Nhà Hảo Tâm
                        </h3>
                      </div>
                      <span className="font-code-num bg-surface-container text-on-surface rounded px-2 py-0.5 text-[11px] font-semibold">
                        Lô #EXP-2024-110
                      </span>
                    </div>
                    <p className="font-body-sm text-on-surface-variant text-[12px]">
                      Đối soát danh sách sản phẩm bàn giao tương ứng với từng hồ sơ đóng góp ban đầu để xuất chứng nhận
                      tri ân:
                    </p>
                    <div className="mt-space-xs overflow-hidden rounded-lg">
                      <table className="w-full text-left text-[12px]">
                        <thead className="bg-surface-container-high text-on-surface-variant font-label-sm tracking-wider uppercase">
                          <tr>
                            <th className="px-2.5 py-2">Nhà Hảo Tâm</th>
                            <th className="px-2 py-2">Thiết Bị</th>
                            <th className="px-2.5 py-2 text-right">Mã Đóng Góp</th>
                          </tr>
                        </thead>
                        <tbody className="divide-surface-container font-body-sm divide-y">
                          <tr className="hover:bg-surface-container-low transition-colors">
                            <td className="px-2.5 py-2.5">
                              <span className="text-on-surface block font-semibold">Tập đoàn FPT</span>
                              <span className="text-on-surface-variant font-code-num text-[11px]">
                                25 Bộ PC ProDesk
                              </span>
                            </td>
                            <td className="px-2 py-2.5">
                              <span className="bg-surface-container text-on-surface rounded px-1.5 py-0.5 text-[11px] font-semibold">
                                25 bộ
                              </span>
                            </td>
                            <td className="font-code-num text-primary px-2.5 py-2.5 text-right font-medium">
                              #DON-2024-8842
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low transition-colors">
                            <td className="px-2.5 py-2.5">
                              <span className="text-on-surface block font-semibold">Quỹ Hy Vọng</span>
                              <span className="text-on-surface-variant font-code-num text-[11px]">
                                10 Bộ UPS Santak
                              </span>
                            </td>
                            <td className="px-2 py-2.5">
                              <span className="bg-surface-container text-on-surface rounded px-1.5 py-0.5 text-[11px] font-semibold">
                                10 cái
                              </span>
                            </td>
                            <td className="font-code-num text-primary px-2.5 py-2.5 text-right font-medium">
                              #DON-2024-9102
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low transition-colors">
                            <td className="px-2.5 py-2.5">
                              <span className="text-on-surface block font-semibold">VNPT Hưng Yên</span>
                              <span className="text-on-surface-variant font-code-num text-[11px]">
                                02 Cisco Switch 24P
                              </span>
                            </td>
                            <td className="px-2 py-2.5">
                              <span className="bg-surface-container text-on-surface rounded px-1.5 py-0.5 text-[11px] font-semibold">
                                02 cái
                              </span>
                            </td>
                            <td className="font-code-num text-primary px-2.5 py-2.5 text-right font-medium">
                              #DON-2024-9115
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-space-xs bg-surface-container flex items-center justify-between rounded-lg p-2.5 text-[12px]">
                      <div className="text-tertiary-container flex items-center gap-1.5 font-medium">
                        <span className="material-symbols-outlined text-[16px]">verified</span>
                        <span>100% Cài Đặt EduOS &amp; SGK Số</span>
                      </div>
                      <span className="font-code-num text-on-surface-variant">KTV: Lê Tiến Đạt</span>
                    </div>
                    <button
                      className="bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md mt-1 flex w-full items-center justify-center gap-1.5 rounded-lg py-2 transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">file_download</span>
                      <span>Tải Bảng Kê Đối Soát Hảo Tâm Đợt Này (.xlsx)</span>
                    </button>
                  </div>
                  <div className="bg-surface-container-lowest p-space-lg gap-space-sm flex flex-col rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="gap-space-xs text-on-surface flex items-center">
                        <span className="material-symbols-outlined text-secondary text-[20px]">report</span>
                        <h3 className="font-headline-sm text-headline-sm font-bold">Báo Cáo Sự Cố Vận Chuyển</h3>
                      </div>
                      <span className="font-label-sm text-tertiary-container bg-tertiary-fixed rounded px-2 py-0.5 text-[11px] font-bold">
                        An Toàn 100%
                      </span>
                    </div>
                    <div className="p-space-sm bg-surface-container flex flex-col gap-1 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-tertiary-container text-[16px]">
                            check_circle
                          </span>
                          <span className="font-headline-sm text-on-surface text-[12px] font-bold">
                            Ghi nhận từ TNV Lê Hoàng Long:
                          </span>
                        </div>
                        <span className="font-code-num text-on-surface-variant text-[11px]">25/10 16:50</span>
                      </div>
                      <p className="font-body-sm text-on-surface-variant pl-5 text-[12px] italic">
                        "Toàn bộ 37 kiện hàng vận chuyển đường đèo Mường Lát an toàn, bao bọc xốp chống sốc nguyên vẹn.
                        Đã bàn giao phòng máy đúng cấu hình và kích hoạt mạng nội bộ hoàn tất."
                      </p>
                    </div>
                    <div className="text-on-surface-variant flex items-center gap-1.5 text-[11px]">
                      <span className="material-symbols-outlined text-[14px]">shield</span>
                      <span>
                        Chế độ: <strong className="text-on-surface">Chỉ Xem</strong>. Báo cáo sự cố độc quyền quản lý
                        bởi TNV &amp; Hội đồng Điều Phối.
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-space-md gap-space-xs flex flex-col rounded-xl shadow-sm">
                    <span className="font-label-sm text-on-surface-variant text-[11px] font-bold tracking-wider uppercase">
                      Đường Dây Nóng Kỹ Thuật Đợt Giao
                    </span>
                    <div className="flex items-center justify-between pt-1">
                      <div className="gap-space-sm flex items-center">
                        <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full">
                          <span className="material-symbols-outlined text-[18px]">support_agent</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-body-sm text-on-surface text-[12px] font-bold">
                            Trực Kỹ Thuật Kho Tổng (24/7)
                          </span>
                          <span className="font-code-num text-on-surface-variant text-[11px]">
                            Hotline: 1900 6829 (Máy lẻ 104)
                          </span>
                        </div>
                      </div>
                      <button
                        className="bg-surface-container hover:bg-surface-container-high text-primary font-label-md rounded px-2.5 py-1 text-[11px]"
                        type="button"
                      >
                        Gọi Nhanh
                      </button>
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

export default WarehouseDeliveryHistoryPage;
