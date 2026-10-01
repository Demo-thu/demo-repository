import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WarehouseDeliveryHistoryPage = () => {
  const [expandedAccordions, setExpandedAccordions] = useState({});

  const toggleAccordion = (id) => {
    setExpandedAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col">
          <div className="px-space-lg pt-space-lg pb-space-md flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-sm">
                <span className="material-symbols-outlined text-[22px]">inventory_2</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary leading-tight font-bold tracking-tight">EduShare VN</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Kho &amp; Kỹ Thuật</span>
              </div>
            </div>
            <div className="mt-space-sm px-space-sm py-space-xs rounded bg-surface-container inline-flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Kho Tổng Miền Bắc (TK-MB)</span>
            </div>
          </div>
          <nav className="flex flex-col px-space-sm space-y-space-md mt-space-sm">
            <div className="flex flex-col gap-space-xs">
              <div className="px-space-md py-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Nhập Kho &amp; Tiếp Nhận</div>
              <Link className="flex items-center px-space-md py-space-sm rounded-lg font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-space-sm" to="/warehouse/receive">
                <span className="material-symbols-outlined text-[20px]">fact_check</span>
                <span>Tiếp nhận &amp; Kiểm định</span>
              </Link>
              <Link className="flex items-center px-space-md py-space-sm rounded-lg font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-space-sm" to="/warehouse/scan-qr">
                <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                <span>Quét QR phân luồng</span>
              </Link>
              <Link className="flex items-center px-space-md py-space-sm rounded-lg font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-space-sm" to="/warehouse/donation-receipt">
                <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                <span>Phiếu trao tặng</span>
              </Link>
            </div>
            <div className="flex flex-col gap-space-xs">
              <div className="px-space-md py-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Quản Lý Kho Bãi</div>
              <Link className="flex items-center px-space-md py-space-sm rounded-lg font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-space-sm" to="/warehouse/inventory">
                <span className="material-symbols-outlined text-[20px]">devices</span>
                <span>Tồn kho thiết bị</span>
              </Link>
              <Link className="flex items-center px-space-md py-space-sm rounded-lg font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-space-sm justify-between" to="/warehouse/racks">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[20px]">grid_view</span>
                  <span>Vị trí kệ định danh</span>
                </div>
                <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant">Xem</span>
              </Link>
              <Link className="flex items-center px-space-md py-space-sm rounded-lg font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-space-sm" to="/warehouse/audit-report">
                <span className="material-symbols-outlined text-[20px]">assessment</span>
                <span>Kiểm kê &amp; Báo cáo</span>
              </Link>
            </div>
            <div className="flex flex-col gap-space-xs">
              <div className="px-space-md py-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Điều Phối &amp; Vận Chuyển</div>
              <Link className="flex items-center px-space-md py-space-sm rounded-lg font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-space-sm" to="/warehouse/dispatch">
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span>Lệnh điều chuyển &amp; Vận đơn</span>
              </Link>
              <Link className="flex items-center px-space-md py-space-sm rounded-lg font-body-md text-body-md bg-primary-container text-on-primary-container font-medium shadow-sm transition-all gap-space-sm" to="/warehouse/delivery-history">
                <span className="material-symbols-outlined text-[20px]">history_edu</span>
                <span>Lịch sử đợt giao</span>
              </Link>
              <Link className="flex items-center px-space-md py-space-sm rounded-lg font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all gap-space-sm" to="/warehouse/incident-report">
                <span className="material-symbols-outlined text-[20px]">report_problem</span>
                <span>Báo cáo sự cố cá nhân</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="p-space-md m-space-sm bg-surface-container rounded-xl flex flex-col gap-space-xs">
          <div className="flex items-center justify-between text-on-surface-variant">
            <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider">Cổng Kho Vận</span>
            <span className="font-code-num text-code-num font-medium text-primary">v2.8.4</span>
          </div>
          <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
            <span className="material-symbols-outlined text-[16px] text-tertiary-container">support_agent</span>
            <span>Kỹ thuật kho:</span>
            <span className="font-medium text-on-surface font-code-num">1900 6829</span>
          </div>
        </div>
      </aside>
      <div className="pl-72">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-gutter-desktop">
          <div className="flex items-center gap-space-md w-full max-w-xl">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
              <input className="w-full pl-10 pr-space-md py-space-xs bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline border-0 shadow-[0_1px_3px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tra cứu mã vận đơn, số lô hàng, serial hoặc quét mã QR thiết bị..." type="text" />
              <div className="absolute right-space-sm top-1/2 -translate-y-1/2 flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 font-code-num text-[10px] rounded bg-surface-container text-on-surface-variant">⌘K</kbd>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <button className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" title="Quét nhanh QR code" type="button">
              <span className="material-symbols-outlined text-[20px]">center_focus_strong</span>
            </button>
            <button className="relative w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" title="Thông báo điều phối" type="button">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error"></span>
            </button>
            <div className="h-8 w-px bg-outline-variant/30"></div>
            <div className="flex items-center gap-space-sm pl-space-xs">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-tertiary-container ring-2 ring-surface-container-lowest"></span>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-space-xs">
                  <span className="font-label-md text-label-md font-semibold text-on-surface leading-none">Trần Hùng</span>
                  <span className="font-code-num text-[11px] px-1.5 py-0.5 rounded bg-surface-container-high text-primary font-medium leading-none">TK-MB-04</span>
                </div>
                <span className="font-body-sm text-[11px] text-on-surface-variant leading-tight mt-0.5">Trưởng Kho Kỹ Thuật Hà Nội</span>
              </div>
            </div>
          </div>
        </header>
        <main className="relative pt-16 bg-surface min-h-screen">
          <div className="flex flex-col w-full">
            <div className="px-gutter-desktop py-space-lg flex flex-col gap-space-lg">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                    <span className="hover:text-primary transition-colors cursor-pointer">EduShare VN Kho</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="hover:text-primary transition-colors cursor-pointer">Điều Phối &amp; Vận Chuyển</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="text-primary font-semibold">Lịch Sử Các Đợt Xuất Giao Hàng</span>
                  </div>
                  <div className="flex items-center gap-space-sm mt-1">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                      Lịch Sử Đợt Giao &amp; Xuất Kho
                    </h1>
                    <span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-code-num text-[11px] font-semibold tracking-wide">
                      PORTAL THỦ KHO
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-md p-space-sm px-space-md bg-surface-container-lowest rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">warehouse</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-label-md text-label-md text-on-surface font-bold">Kho Tổng Miền Bắc (HUB-01 Hà Nội)</span>
                      <span className="w-2 h-2 rounded-full bg-tertiary-container" title="Kho đang trực tuyến"></span>
                    </div>
                    <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-[12px]">
                      <span>Phụ trách: <strong className="text-on-surface font-medium">Trần Hùng</strong></span>
                      <span className="text-outline">•</span>
                      <span className="font-code-num font-semibold text-primary">Mã: TK-MB-04</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
                <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full pointer-events-none"></div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Tổng Chuyến Xuất Giao</span>
                    <span className="p-1.5 rounded-lg bg-surface-container text-primary">
                      <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                    </span>
                  </div>
                  <div className="mt-space-md">
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-headline-xl text-headline-xl text-on-surface font-extrabold font-code-num">142</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">đợt giao</span>
                    </div>
                    <div className="mt-space-xs flex items-center gap-1.5 text-[12px] font-body-sm text-tertiary-container font-medium">
                      <span className="material-symbols-outlined text-[16px]">check_circle</span>
                      <span>100% khớp niêm phong RFID Seal</span>
                    </div>
                  </div>
                </div>
                <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-tertiary/5 rounded-full pointer-events-none"></div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Thiết Bị Xuất Chuyển Trường</span>
                    <span className="p-1.5 rounded-lg bg-surface-container text-tertiary-container">
                      <span className="material-symbols-outlined text-[20px]">computer</span>
                    </span>
                  </div>
                  <div className="mt-space-md">
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-headline-xl text-headline-xl text-on-surface font-extrabold font-code-num">3,420</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">thiết bị</span>
                    </div>
                    <div className="mt-space-xs flex flex-wrap gap-1 text-[11px] font-code-num text-on-surface-variant">
                      <span className="px-1.5 py-0.5 rounded bg-surface-container">1.85k PC</span>
                      <span className="px-1.5 py-0.5 rounded bg-surface-container">920 Laptop</span>
                      <span className="px-1.5 py-0.5 rounded bg-surface-container">450 UPS</span>
                      <span className="px-1.5 py-0.5 rounded bg-surface-container">200 SW</span>
                    </div>
                  </div>
                </div>
                <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-secondary-container/40 rounded-full pointer-events-none"></div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Lệnh Điều Chuyển Tức Thì</span>
                    <span className="p-1.5 rounded-lg bg-surface-container text-secondary">
                      <span className="material-symbols-outlined text-[20px]">sync_alt</span>
                    </span>
                  </div>
                  <div className="mt-space-md">
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-headline-xl text-headline-xl text-on-surface font-extrabold font-code-num">68</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">lệnh hoàn tất</span>
                    </div>
                    <div className="mt-space-xs flex items-center gap-1.5 text-[12px] font-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px] text-primary">bolt</span>
                      <span>Hoàn tất ngay, không chờ xác nhận đích</span>
                    </div>
                  </div>
                </div>
                <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full pointer-events-none"></div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Tỷ Lệ Nghiệm Thu PoD</span>
                    <span className="p-1.5 rounded-lg bg-surface-container text-primary">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </span>
                  </div>
                  <div className="mt-space-md">
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-headline-xl text-headline-xl text-primary font-extrabold font-code-num">99.2%</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">(141/142)</span>
                    </div>
                    <div className="mt-space-xs flex items-center gap-1.5 text-[12px] font-body-sm text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
                      <span>Chữ ký số BGH + Định vị GPS TNV</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-md">
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-space-sm flex-1">
                  <div className="relative flex-1 min-w-[280px]">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
                    <input className="w-full pl-10 pr-space-md py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" placeholder="Tìm mã xuất #EXP, vận đơn #WB, tên trường nhận, TNV..." type="text" />
                  </div>
                  <div className="relative min-w-[190px]">
                    <select className="w-full appearance-none pl-3 pr-8 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="Xuất cho trường thụ hưởng">
                      <option value="Tất cả loại đợt xuất">Tất cả loại đợt xuất</option>
                      <option value="Xuất cho trường thụ hưởng">Xuất cho trường thụ hưởng</option>
                      <option value="Xuất điều chuyển liên kho">Xuất điều chuyển liên kho</option>
                      <option value="Xuất trả bảo hành linh kiện">Xuất trả bảo hành linh kiện</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]">expand_more</span>
                  </div>
                  <div className="relative min-w-[160px]">
                    <select className="w-full appearance-none pl-3 pr-8 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="Tháng này (10/2024)">
                      <option value="Học kỳ 1 (2024-2025)">Học kỳ 1 (2024-2025)</option>
                      <option value="Tháng này (10/2024)">Tháng này (10/2024)</option>
                      <option value="Quý III / 2024">Quý III / 2024</option>
                      <option value="Toàn bộ năm 2024">Toàn bộ năm 2024</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]">calendar_today</span>
                  </div>
                  <div className="relative min-w-[160px]">
                    <select className="w-full appearance-none pl-3 pr-8 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="Đã giao &amp; Đã có PoD">
                      <option value="Mọi trạng thái">Mọi trạng thái</option>
                      <option value="Đã giao &amp; Đã có PoD">Đã giao &amp; Đã có PoD</option>
                      <option value="Đang trên hành trình">Đang trên hành trình</option>
                      <option value="Đã xuất niêm phong kho">Đã xuất niêm phong kho</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]">filter_list</span>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm shrink-0">
                  <button className="inline-flex items-center gap-2 px-space-md py-2 bg-tertiary text-on-tertiary rounded-lg font-label-md text-label-md hover:bg-tertiary-container transition-colors shadow-sm" title="Xuất dữ liệu đối soát bóc tách chi tiết từng Nhà Hảo Tâm và danh mục sản phẩm" type="button">
                    <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
                    <span>Xuất Excel Đối Soát Hảo Tâm</span>
                  </button>
                  <button className="inline-flex items-center gap-2 px-space-md py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md transition-colors" title="In lệnh xuất kho" type="button">
                    <span className="material-symbols-outlined text-[18px]">print</span>
                    <span>In Phiếu Xuất (PDF)</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Danh Sách Lô Hàng Đã Xuất Kho</span>
                      <span className="font-code-num text-label-sm px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-bold">Tháng 10/2024</span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Hiển thị 4 đợt gần nhất</span>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm pl-2">
                      <div className="flex flex-col">
                        <div className="flex items-center flex-wrap gap-space-xs">
                          <span className="font-code-num text-[15px] font-bold text-primary">#EXP-2024-110</span>
                          <span className="text-outline">•</span>
                          <span className="font-code-num text-body-sm text-on-surface-variant font-medium">Vận Đơn: #WB-2024-NW08</span>
                          <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[11px] font-semibold">
                            Đã Nghiệm Thu PoD
                          </span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1 font-bold">
                          Trường PTDTBT THCS Mường Lát (Thanh Hóa)
                        </h2>
                        <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-[12px] mt-0.5">
                          <span className="material-symbols-outlined text-[15px] text-tertiary-container">location_on</span>
                          <span>Khu 2, Thị trấn Mường Lát, Huyện Mường Lát, Tỉnh Thanh Hóa</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end shrink-0">
                        <span className="font-code-num text-[12px] text-on-surface-variant font-medium">Xuất: 08:30 • 24/10/2024</span>
                        <div className="mt-1 px-2.5 py-1 rounded bg-surface-container-high text-primary font-code-num text-[11px] font-semibold flex items-center gap-1" title="Quy tắc RBAC: Lập vận đơn chỉ sau khi admin duyệt phương án">
                          <span className="material-symbols-outlined text-[14px]">fact_check</span>
                          <span>PA Phân Bổ #PA-2024-892 (Admin đã duyệt)</span>
                        </div>
                      </div>
                    </div>
                    <div className="pl-2 pt-2 pb-1">
                      <div className="relative flex items-center justify-between">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-surface-container-high -z-0"></div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-tertiary-container -z-0"></div>
                        <div className="flex flex-col items-center bg-surface-container-lowest px-1 z-10">
                          <div className="w-7 h-7 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center text-xs shadow-sm">
                            <span className="material-symbols-outlined text-[16px]">inventory_2</span>
                          </div>
                          <span className="font-label-sm text-[11px] text-on-surface font-semibold mt-1">Xuất Kho TK-MB</span>
                          <span className="font-code-num text-[10px] text-on-surface-variant">24/10 08:30</span>
                        </div>
                        <div className="flex flex-col items-center bg-surface-container-lowest px-1 z-10">
                          <div className="w-7 h-7 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center text-xs shadow-sm">
                            <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                          </div>
                          <span className="font-label-sm text-[11px] text-on-surface font-semibold mt-1">Vận Chuyển</span>
                          <span className="font-code-num text-[10px] text-on-surface-variant">Xe 29C-882.10</span>
                        </div>
                        <div className="flex flex-col items-center bg-surface-container-lowest px-1 z-10">
                          <div className="w-7 h-7 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center text-xs shadow-sm">
                            <span className="material-symbols-outlined text-[16px]">school</span>
                          </div>
                          <span className="font-label-sm text-[11px] text-on-surface font-semibold mt-1">Đến Mường Lát</span>
                          <span className="font-code-num text-[10px] text-on-surface-variant">25/10 14:15</span>
                        </div>
                        <div className="flex flex-col items-center bg-surface-container-lowest px-1 z-10">
                          <div className="w-7 h-7 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center text-xs shadow-sm">
                            <span className="material-symbols-outlined text-[16px]">verified</span>
                          </div>
                          <span className="font-label-sm text-[11px] text-tertiary-container font-bold mt-1">Ký PoD Số Hóa</span>
                          <span className="font-code-num text-[10px] text-tertiary-container font-semibold">25/10 16:40</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-sm pl-4 ml-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                          Danh Mục Thiết Bị Bàn Giao (37 Kiện hàng)
                        </span>
                        <span className="font-code-num text-label-sm text-primary font-medium">Tem niêm phong: RFID-VN-9842</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
                        <div className="p-space-sm bg-surface-container-lowest rounded-lg flex flex-col gap-1 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-headline-sm text-[13px] font-bold text-on-surface">25 Bộ Máy Tính PC</span>
                            <span className="font-code-num text-[11px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-semibold">Grade A</span>
                          </div>
                          <p className="font-body-sm text-[12px] text-on-surface-variant">HP ProDesk 400 G6 MT / Core i5 / 16GB / SSD 256GB</p>
                          <div className="mt-1 pt-1.5 flex items-center justify-between text-[11px] text-on-surface-variant">
                            <span>Nguồn tài trợ:</span>
                            <span className="font-semibold text-primary">Tập đoàn FPT</span>
                          </div>
                        </div>
                        <div className="p-space-sm bg-surface-container-lowest rounded-lg flex flex-col gap-1 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-headline-sm text-[13px] font-bold text-on-surface">10 Bộ Lưu Điện UPS</span>
                            <span className="font-code-num text-[11px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-semibold">Mới 100%</span>
                          </div>
                          <p className="font-body-sm text-[12px] text-on-surface-variant">Santak 1000E Pro LCD 600W bảo vệ phòng Lab</p>
                          <div className="mt-1 pt-1.5 flex items-center justify-between text-[11px] text-on-surface-variant">
                            <span>Nguồn tài trợ:</span>
                            <span className="font-semibold text-primary">Quỹ Hy Vọng</span>
                          </div>
                        </div>
                        <div className="p-space-sm bg-surface-container-lowest rounded-lg flex flex-col gap-1 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-headline-sm text-[13px] font-bold text-on-surface">02 Cisco Switch 24P</span>
                            <span className="font-code-num text-[11px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-semibold">Grade A</span>
                          </div>
                          <p className="font-body-sm text-[12px] text-on-surface-variant">Cisco Catalyst 2960X Gigabit POE+ Kèm cáp</p>
                          <div className="mt-1 pt-1.5 flex items-center justify-between text-[11px] text-on-surface-variant">
                            <span>Nguồn tài trợ:</span>
                            <span className="font-semibold text-primary">VNPT Hưng Yên</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pl-2">
                      <div className="p-space-sm bg-surface-container rounded-lg flex flex-col gap-space-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">
                            Đội Ngũ Tình Nguyện Viên Vận Chuyển
                          </span>
                          <span className="font-code-num text-[11px] font-bold text-primary">3 Tình Nguyện Viên</span>
                        </div>
                        <div className="flex flex-col gap-1.5 mt-1">
                          <div className="flex items-center justify-between text-body-sm text-[12px]">
                            <div className="flex items-center gap-1.5">
                              <span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-[10px]">HL</span>
                              <span className="font-medium text-on-surface">Lê Hoàng Long</span>
                              <span className="px-1.5 py-0.2 rounded bg-primary-fixed text-primary font-semibold text-[10px]">Trưởng đoàn</span>
                            </div>
                            <span className="font-code-num text-on-surface-variant">0912.839.201</span>
                          </div>
                          <div className="flex items-center justify-between text-body-sm text-[12px]">
                            <div className="flex items-center gap-1.5">
                              <span className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-[10px]">VN</span>
                              <span className="font-medium text-on-surface">Trần Văn Nam</span>
                              <span className="text-on-surface-variant text-[10px]">Kỹ thuật viên đi kèm</span>
                            </div>
                            <span className="font-code-num text-on-surface-variant">0984.112.339</span>
                          </div>
                          <div className="flex items-center justify-between text-body-sm text-[12px]">
                            <div className="flex items-center gap-1.5">
                              <span className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-[10px]">HĐ</span>
                              <span className="font-medium text-on-surface">Đỗ Hữu Đạt</span>
                              <span className="text-on-surface-variant text-[10px]">Tài xế xe 29C-882.10</span>
                            </div>
                            <span className="font-code-num text-on-surface-variant">0977.561.022</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-space-sm bg-surface-container rounded-lg flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">Biên Bản Nghiệm Thu PoD</span>
                            <span className="font-code-num text-[11px] text-tertiary-container font-semibold">Khớp 100% Số Serial</span>
                          </div>
                          <div className="flex items-center gap-space-sm mt-2">
                            <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-tertiary-container shrink-0">
                              <span className="material-symbols-outlined text-[28px]">draw</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="font-body-sm text-[12px] font-bold text-on-surface">Đã ký số: Thầy Hà Văn Tiêu</span>
                              <span className="font-body-sm text-[11px] text-on-surface-variant">Hiệu trưởng THCS Mường Lát</span>
                              <div className="flex items-center gap-1 font-code-num text-[11px] text-tertiary-container mt-0.5">
                                <span className="material-symbols-outlined text-[13px]">pin_drop</span>
                                <span>GPS: 20.5052° N, 104.6221° E</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 pt-1 flex items-center justify-between font-body-sm text-[11px]">
                          <span className="text-on-surface-variant">Thời gian xác thực PoD:</span>
                          <span className="font-code-num font-semibold text-on-surface">25/10/2024 • 16:40</span>
                        </div>
                      </div>
                    </div>
                    <div className="pl-2 pt-2 flex flex-wrap items-center justify-between gap-space-sm">
                      <div className="flex items-center gap-space-xs">
                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-[12px] hover:bg-primary/90 transition-colors shadow-sm" type="button">
                          <span className="material-symbols-outlined text-[16px]">qr_code_2</span>
                          <span>Xem 37 Mã QR Serial Lô Này</span>
                        </button>
                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-[12px] transition-colors" type="button">
                          <span className="material-symbols-outlined text-[16px]">description</span>
                          <span>Phiếu Bàn Giao Thiết Bị</span>
                        </button>
                      </div>
                      <button className="inline-flex items-center gap-1 font-label-md text-[12px] text-primary hover:underline" type="button">
                        <span>Hồ sơ đóng góp của Nhà Hảo Tâm</span>
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAccordion('acc-098')}>
                        <div className="flex items-center gap-space-md">
                          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                            <span className="material-symbols-outlined text-[18px]">laptop_mac</span>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-space-xs">
                              <span className="font-code-num text-label-md font-bold text-primary">#EXP-2024-098</span>
                              <span className="text-outline">•</span>
                              <span className="font-code-num text-[12px] text-on-surface-variant font-medium">#WB-2024-HG14</span>
                              <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[10px] font-semibold">Đã có PoD</span>
                            </div>
                            <span className="font-headline-sm text-body-md text-on-surface font-semibold">PTDTBT Pả Vi (Mèo Vạc, Hà Giang)</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-space-md">
                          <div className="hidden sm:flex flex-col text-right">
                            <span className="font-code-num text-[12px] text-on-surface font-semibold">45 Laptop Dell Latitude 5520</span>
                            <span className="font-body-sm text-[11px] text-on-surface-variant">Tài trợ: Viettel &amp; BIDV • TNV Hoàng Sơn</span>
                          </div>
                          <span className="material-symbols-outlined text-on-surface-variant transition-transform" style={{ transform: expandedAccordions['acc-098'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                        </div>
                      </div>
                      <div className={`pt-space-sm mt-space-xs bg-surface-container-low p-space-sm rounded-lg text-body-sm text-[12px] flex flex-col gap-1 ${expandedAccordions['acc-098'] ? '' : 'hidden'}`}>
                        <div className="flex justify-between text-on-surface-variant">
                          <span>Xuất kho: <strong>18/10/2024 - 07:45</strong></span>
                          <span>Phương án phân bổ: <strong>#PA-2024-870 (Đã duyệt)</strong></span>
                          <span>Hiệu trưởng ký nhận: <strong>Cô Vàng Thị Mai</strong></span>
                        </div>
                      </div>
                    </div>
                    <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAccordion('acc-085')}>
                        <div className="flex items-center gap-space-md">
                          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                            <span className="material-symbols-outlined text-[18px]">desktop_windows</span>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-space-xs">
                              <span className="font-code-num text-label-md font-bold text-primary">#EXP-2024-085</span>
                              <span className="text-outline">•</span>
                              <span className="font-code-num text-[12px] text-on-surface-variant font-medium">#WB-2024-SL02</span>
                              <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[10px] font-semibold">Đã giao</span>
                            </div>
                            <span className="font-headline-sm text-body-md text-on-surface font-semibold">Trường Phổ Thông Số 2 Bắc Yên (Sơn La)</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-space-md">
                          <div className="hidden sm:flex flex-col text-right">
                            <span className="font-code-num text-[12px] text-on-surface font-semibold">15 Bộ PC HP + Màn Hình IPS</span>
                            <span className="font-body-sm text-[11px] text-on-surface-variant">Tài trợ: Công ty Cổ phần MISA</span>
                          </div>
                          <span className="material-symbols-outlined text-on-surface-variant transition-transform" style={{ transform: expandedAccordions['acc-085'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                        </div>
                      </div>
                      <div className={`pt-space-sm mt-space-xs bg-surface-container-low p-space-sm rounded-lg text-body-sm text-[12px] flex flex-col gap-1 ${expandedAccordions['acc-085'] ? '' : 'hidden'}`}>
                        <div className="flex justify-between text-on-surface-variant">
                          <span>Xuất kho: <strong>12/10/2024 - 09:10</strong></span>
                          <span>Phương án: <strong>#PA-2024-851</strong></span>
                          <span>Biên bản PoD: <strong>#POD-SL-0021 (Đạt yêu cầu)</strong></span>
                        </div>
                      </div>
                    </div>
                    <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAccordion('acc-072')}>
                        <div className="flex items-center gap-space-md">
                          <div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                            <span className="material-symbols-outlined text-[18px]">sync_alt</span>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-space-xs">
                              <span className="font-code-num text-label-md font-bold text-primary">#EXP-2024-072</span>
                              <span className="text-outline">•</span>
                              <span className="font-code-num text-[12px] text-secondary font-medium">Lệnh Chuyển Liên Kho #TRANS-2024-05</span>
                              <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-[10px] font-semibold">
                                Xuất Hoàn Tất Ngay
                              </span>
                            </div>
                            <span className="font-headline-sm text-body-md text-on-surface font-semibold">Chi Viện Kho Tiếp Vận Miền Trung (Đà Nẵng - HUB-02)</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-space-md">
                          <div className="hidden sm:flex flex-col text-right">
                            <span className="font-code-num text-[12px] text-on-surface font-semibold">50 iPad Gen 9 &amp; 20 ThinkPad T480</span>
                            <span className="font-body-sm text-[11px] text-on-surface-variant">Quy tắc: Không cần kho đích xác nhận</span>
                          </div>
                          <span className="material-symbols-outlined text-on-surface-variant transition-transform" style={{ transform: expandedAccordions['acc-072'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                        </div>
                      </div>
                      <div className={`pt-space-sm mt-space-xs bg-surface-container-low p-space-sm rounded-lg text-body-sm text-[12px] flex flex-col gap-1 ${expandedAccordions['acc-072'] ? '' : 'hidden'}`}>
                        <div className="flex justify-between text-on-surface-variant">
                          <span>Ký xuất kho gửi: <strong>Trần Hùng (TK-MB-04)</strong></span>
                          <span>Phương thức vận chuyển: <strong>Viettel Post Logistics #VTP-8842199</strong></span>
                          <span>Tình trạng: <strong>Hàng đã rời kho Miền Bắc 06/10/2024</strong></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container rounded-xl flex items-center gap-space-md">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[22px]">info</span>
                    </div>
                    <div className="flex flex-col text-body-sm text-[13px] text-on-surface-variant">
                      <span className="font-bold text-on-surface">Đồng Bộ Hồ Sơ Thiết Bị Tự Động</span>
                      <span>Mọi đợt xuất giao sau khi có PoD hợp lệ sẽ tự động cập nhật tình trạng thiết bị sang <em>"Đã Bàn Giao Thụ Hưởng"</em> trên Sổ Cái Tài Sản Giáo Dục Quốc Gia.</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-space-md">
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-sm">
                    <div className="flex items-center gap-space-xs text-primary">
                      <span className="material-symbols-outlined text-[20px]">policy</span>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                        Quy Chuẩn Xuất Kho &amp; Kiểm Toán (Audit)
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Đặc tả thẩm quyền tài khoản Thủ Kho (<strong className="text-on-surface">Trần Hùng - TK-MB</strong>) theo tài liệu RBAC:
                    </p>
                    <div className="flex flex-col gap-space-xs mt-1">
                      <div className="p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">link</span>
                        <div className="flex flex-col text-body-sm text-[12px]">
                          <strong className="text-on-surface">Căn Cứ Lập Vận Đơn:</strong>
                          <span className="text-on-surface-variant">Chỉ được đóng gói và xuất giao khi Phương Án Phân Bổ đã được Admin phê duyệt số hóa.</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">group_add</span>
                        <div className="flex flex-col text-body-sm text-[12px]">
                          <strong className="text-on-surface">Gán Đội Ngũ Tình Nguyện Viên:</strong>
                          <span className="text-on-surface-variant">Kho có quyền gán nhiều TNV và phương tiện cho một đợt xuất giao mà không bị giới hạn.</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-tertiary-container text-[18px] mt-0.5">grid_view</span>
                        <div className="flex flex-col text-body-sm text-[12px]">
                          <strong className="text-on-surface">Vị Trí Kệ Định Danh (Racks):</strong>
                          <span className="text-on-surface-variant">Kho chỉ có quyền xem trực quan vị trí kệ (Tầng/Dãy), không can thiệp tái cấu trúc phân vùng tại màn này.</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-error text-[18px] mt-0.5">lock_person</span>
                        <div className="flex flex-col text-body-sm text-[12px]">
                          <strong className="text-on-surface">Báo Cáo Sự Cố Chuyến Đi:</strong>
                          <span className="text-on-surface-variant">Thủ kho chỉ có quyền xem hồ sơ sự cố do TNV gửi về; tuyệt đối không tạo mới và không sửa thay TNV.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-space-xs text-tertiary-container">
                        <span className="material-symbols-outlined text-[20px]">table_view</span>
                        <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                          Bóc Tách Nguồn Nhà Hảo Tâm
                        </h3>
                      </div>
                      <span className="font-code-num text-[11px] px-2 py-0.5 rounded bg-surface-container text-on-surface font-semibold">
                        Lô #EXP-2024-110
                      </span>
                    </div>
                    <p className="font-body-sm text-[12px] text-on-surface-variant">
                      Đối soát danh sách sản phẩm bàn giao tương ứng với từng hồ sơ đóng góp ban đầu để xuất chứng nhận tri ân:
                    </p>
                    <div className="mt-space-xs overflow-hidden rounded-lg">
                      <table className="w-full text-left text-[12px]">
                        <thead className="bg-surface-container-high text-on-surface-variant font-label-sm uppercase tracking-wider">
                          <tr>
                            <th className="py-2 px-2.5">Nhà Hảo Tâm</th>
                            <th className="py-2 px-2">Thiết Bị</th>
                            <th className="py-2 px-2.5 text-right">Mã Đóng Góp</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-container font-body-sm">
                          <tr className="hover:bg-surface-container-low transition-colors">
                            <td className="py-2.5 px-2.5">
                              <span className="font-semibold text-on-surface block">Tập đoàn FPT</span>
                              <span className="text-[11px] text-on-surface-variant font-code-num">25 Bộ PC ProDesk</span>
                            </td>
                            <td className="py-2.5 px-2">
                              <span className="px-1.5 py-0.5 rounded bg-surface-container text-[11px] font-semibold text-on-surface">25 bộ</span>
                            </td>
                            <td className="py-2.5 px-2.5 text-right font-code-num text-primary font-medium">
                              #DON-2024-8842
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low transition-colors">
                            <td className="py-2.5 px-2.5">
                              <span className="font-semibold text-on-surface block">Quỹ Hy Vọng</span>
                              <span className="text-[11px] text-on-surface-variant font-code-num">10 Bộ UPS Santak</span>
                            </td>
                            <td className="py-2.5 px-2">
                              <span className="px-1.5 py-0.5 rounded bg-surface-container text-[11px] font-semibold text-on-surface">10 cái</span>
                            </td>
                            <td className="py-2.5 px-2.5 text-right font-code-num text-primary font-medium">
                              #DON-2024-9102
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low transition-colors">
                            <td className="py-2.5 px-2.5">
                              <span className="font-semibold text-on-surface block">VNPT Hưng Yên</span>
                              <span className="text-[11px] text-on-surface-variant font-code-num">02 Cisco Switch 24P</span>
                            </td>
                            <td className="py-2.5 px-2">
                              <span className="px-1.5 py-0.5 rounded bg-surface-container text-[11px] font-semibold text-on-surface">02 cái</span>
                            </td>
                            <td className="py-2.5 px-2.5 text-right font-code-num text-primary font-medium">
                              #DON-2024-9115
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-space-xs p-2.5 rounded-lg bg-surface-container flex items-center justify-between text-[12px]">
                      <div className="flex items-center gap-1.5 text-tertiary-container font-medium">
                        <span className="material-symbols-outlined text-[16px]">verified</span>
                        <span>100% Cài Đặt EduOS &amp; SGK Số</span>
                      </div>
                      <span className="font-code-num text-on-surface-variant">KTV: Lê Tiến Đạt</span>
                    </div>
                    <button className="w-full mt-1 py-2 bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md rounded-lg flex items-center justify-center gap-1.5 transition-colors" type="button">
                      <span className="material-symbols-outlined text-[18px]">file_download</span>
                      <span>Tải Bảng Kê Đối Soát Hảo Tâm Đợt Này (.xlsx)</span>
                    </button>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-space-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[20px]">report</span>
                        <h3 className="font-headline-sm text-headline-sm font-bold">
                          Báo Cáo Sự Cố Vận Chuyển
                        </h3>
                      </div>
                      <span className="font-label-sm text-[11px] text-tertiary-container font-bold px-2 py-0.5 rounded bg-tertiary-fixed">
                        An Toàn 100%
                      </span>
                    </div>
                    <div className="p-space-sm bg-surface-container rounded-lg flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-tertiary-container text-[16px]">check_circle</span>
                          <span className="font-headline-sm text-[12px] font-bold text-on-surface">Ghi nhận từ TNV Lê Hoàng Long:</span>
                        </div>
                        <span className="font-code-num text-[11px] text-on-surface-variant">25/10 16:50</span>
                      </div>
                      <p className="font-body-sm text-[12px] text-on-surface-variant italic pl-5">
                        "Toàn bộ 37 kiện hàng vận chuyển đường đèo Mường Lát an toàn, bao bọc xốp chống sốc nguyên vẹn. Đã bàn giao phòng máy đúng cấu hình và kích hoạt mạng nội bộ hoàn tất."
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-on-surface-variant text-[11px]">
                      <span className="material-symbols-outlined text-[14px]">shield</span>
                      <span>Chế độ: <strong className="text-on-surface">Chỉ Xem</strong>. Báo cáo sự cố độc quyền quản lý bởi TNV &amp; Hội đồng Điều Phối.</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-xs">
                    <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">
                      Đường Dây Nóng Kỹ Thuật Đợt Giao
                    </span>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                          <span className="material-symbols-outlined text-[18px]">support_agent</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-body-sm text-[12px] font-bold text-on-surface">Trực Kỹ Thuật Kho Tổng (24/7)</span>
                          <span className="font-code-num text-[11px] text-on-surface-variant">Hotline: 1900 6829 (Máy lẻ 104)</span>
                        </div>
                      </div>
                      <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-[11px]" type="button">
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
