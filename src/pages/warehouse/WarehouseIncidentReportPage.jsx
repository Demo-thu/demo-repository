import React from 'react';
import { Link } from 'react-router-dom';

const WarehouseIncidentReportPage = () => {
  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest z-50 flex flex-col shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 px-6 flex flex-col justify-center bg-surface-container-low">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-[20px]">warehouse</span>
            </div>
            <div>
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold block leading-none">EduShare VN</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mt-1">Kho &amp; Kỹ Thuật</span>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container inline-block"></span>
            <span className="font-body-sm text-body-sm text-on-surface-variant font-code-num text-[11px]">Hub-01 Hà Nội • 63 Tỉnh Thành</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto px-2 py-4 space-y-4">
          <section>
            <div className="px-2 pb-1 font-label-sm text-label-sm text-outline uppercase tracking-wider">Nhập kho &amp; Tiếp nhận</div>
            <nav className="space-y-1">
              <Link className="flex items-center gap-2 px-2 py-2 rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/warehouse/receive">
                <span className="material-symbols-outlined text-[20px]">fact_check</span>
                <span>Tiếp nhận &amp; Kiểm định</span>
              </Link>
              <Link className="flex items-center gap-2 px-2 py-2 rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/warehouse/scan-qr">
                <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                <span>Quét QR phân luồng</span>
              </Link>
              <Link className="flex items-center gap-2 px-2 py-2 rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/warehouse/donation-receipt">
                <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
                <span>Phiếu trao tặng</span>
              </Link>
            </nav>
          </section>
          
          <section>
            <div className="px-2 pb-1 font-label-sm text-label-sm text-outline uppercase tracking-wider">Quản lý kho bãi</div>
            <nav className="space-y-1">
              <Link className="flex items-center gap-2 px-2 py-2 rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/warehouse/inventory">
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span>Tồn kho thiết bị</span>
              </Link>
              <Link className="flex items-center justify-between px-2 py-2 rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/warehouse/racks">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">grid_view</span>
                  <span>Vị trí kệ định danh</span>
                </div>
                <span className="font-label-sm text-[10px] px-1.5 py-0.5 rounded bg-surface-container text-secondary font-medium">Chỉ xem</span>
              </Link>
              <Link className="flex items-center gap-2 px-2 py-2 rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/warehouse/audit-report">
                <span className="material-symbols-outlined text-[20px]">assignment</span>
                <span>Kiểm kê &amp; Báo cáo</span>
              </Link>
            </nav>
          </section>
          
          <section>
            <div className="px-2 pb-1 font-label-sm text-label-sm text-outline uppercase tracking-wider">Điều phối &amp; Vận chuyển</div>
            <nav className="space-y-1">
              <Link className="flex items-center gap-2 px-2 py-2 rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/warehouse/dispatch">
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span>Lệnh điều chuyển &amp; Vận đơn</span>
              </Link>
              <Link className="flex items-center gap-2 px-2 py-2 rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/warehouse/delivery-history">
                <span className="material-symbols-outlined text-[20px]">history</span>
                <span>Lịch sử đợt giao</span>
              </Link>
              <Link className="flex items-center gap-2 px-2 py-2 rounded-xl font-label-md text-label-md bg-primary text-on-primary shadow-sm" to="/warehouse/incident-report">
                <span className="material-symbols-outlined text-[20px]">warning</span>
                <span>Báo cáo sự cố kho</span>
              </Link>
            </nav>
          </section>
        </div>
        
        <div className="p-4 bg-surface-container-low/70 flex flex-col gap-1">
          <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">verified</span>Bản phát hành</span>
            <span className="font-code-num text-code-num text-primary font-semibold">v2.8.4-PROD</span>
          </div>
          <div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant pt-1">
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">support_agent</span>Kỹ thuật kho</span>
            <span className="font-code-num text-code-num font-semibold text-on-surface">1900 6829</span>
          </div>
        </div>
      </aside>
      
      <div className="pl-72 flex-1 flex flex-col">
        <header className="fixed top-0 left-72 right-0 h-20 bg-surface-container-lowest/90 backdrop-blur-xl z-40 shadow-[0_1px_8px_rgba(0,0,0,0.04)] px-6">
          <div className="h-full w-full flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1 min-w-[280px]">
              <div className="flex items-center gap-1 text-[12px] font-body-sm text-outline">
                <span className="text-primary font-medium">EduShare VN Kho</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span>Điều Phối &amp; Vận Chuyển</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-on-surface font-semibold">Báo Cáo Sự Cố Kho</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container text-primary font-label-sm text-[11px] font-semibold">TRẠNG THÁI</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Hệ thống toàn quốc 63 Tỉnh Thành</span>
              </div>
            </div>
            <div className="flex-1 max-w-xl mx-4">
              <div className="relative flex items-center w-full">
                <span className="material-symbols-outlined absolute left-3 text-outline text-[20px]">search</span>
                <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low rounded-xl font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all" placeholder="Tra cứu mã vận đơn, số lô hàng, serial hoặc sự cố..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <button className="w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-all" title="Quét mã QR/Barcode">
                  <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                </button>
                <button className="w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-all" title="Hỗ trợ kỹ thuật">
                  <span className="material-symbols-outlined text-[20px]">headset_mic</span>
                </button>
                <button className="w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-all relative" title="Thông báo hệ thống">
                  <span className="material-symbols-outlined text-[20px]">notifications</span>
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error"></span>
                </button>
              </div>
              <div className="h-8 w-px bg-surface-container-high"></div>
              <div className="flex items-center gap-2 pl-1">
                <div className="text-right">
                  <div className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Trần Hùng <span className="font-code-num text-secondary text-body-sm font-normal">(TK-MB-04)</span></div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight mt-0.5">Trưởng Kho Kỹ Thuật Hà Nội • Kho Tổng Miền Bắc (HUB-01 Hà Nội)</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <main className="w-full pt-20 px-6 py-8 bg-background flex-1 flex flex-col">
          <div className="flex flex-col w-full space-y-6">
            
            {/* TOP HEADER & OPERATIONAL TELEMETRY */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Kho Tổng Miền Bắc (HUB-01 Hà Nội) • Chuẩn Kiểm Soát Sự Cố ISO-Logistics 2024
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                  Báo Cáo Sự Cố Kho &amp; Vận Chuyển
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                  Ghi nhận và giám sát các sự cố hư hỏng thiết bị lưu kho, sai lệch kiện hàng, hoặc sự cố hành trình theo quy chuẩn bất biến RBAC v2.8.4. Gắn cứng danh tính số và mã băm toàn vẹn.
                </p>
              </div>
              {/* ACTION BUTTON GROUP */}
              <div className="flex flex-wrap items-center gap-2 pt-2 xl:pt-0">
                <button className="inline-flex items-center gap-1 px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-all">
                  <span className="material-symbols-outlined text-[18px]">file_download</span>
                  <span>Xuất Báo Cáo Sự Cố (.xlsx)</span>
                </button>
                <button className="inline-flex items-center gap-1 px-4 py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-surface-tint shadow-sm transition-all" onClick={() => document.getElementById('form-create-incident')?.scrollIntoView({behavior: 'smooth'})}>
                  <span className="material-symbols-outlined text-[18px]">add_alert</span>
                  <span>+ Tạo Báo Cáo Mới (Chính Mình)</span>
                </button>
              </div>
            </div>

            {/* BENTO 4 KPI TILES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* KPI 1 */}
              <div className="p-4 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">Tổng sự cố ghi nhận</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-headline-xl text-headline-xl font-bold text-on-surface font-code-num">18</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">vụ năm 2024</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">assignment_late</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 bg-surface-container-low/50 rounded p-2 flex items-center justify-between font-label-sm text-label-sm">
                  <span className="text-tertiary font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span> 14 đã khắc phục
                  </span>
                  <span className="font-code-num text-on-surface-variant">77.7% hoàn tất</span>
                </div>
              </div>
              {/* KPI 2 */}
              <div className="p-4 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">Đang xử lý tại kho</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-headline-xl text-headline-xl font-bold text-primary font-code-num">03</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">vụ cục bộ</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant">
                    <span className="material-symbols-outlined text-[22px]">build_circle</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 bg-surface-container-low/50 rounded p-2 flex items-center justify-between font-label-sm text-label-sm">
                  <span className="text-primary font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">priority_high</span> Cấp bù linh kiện khẩn
                  </span>
                  <span className="font-code-num text-on-surface-variant">Khu B2, D1</span>
                </div>
              </div>
              {/* KPI 3 */}
              <div className="p-4 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">Sự cố chuyến TNV (Failed)</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-headline-xl text-headline-xl font-bold text-error font-code-num">01</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">đơn vận hành</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-error-container flex items-center justify-center text-error">
                    <span className="material-symbols-outlined text-[22px]">minor_crash</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 bg-surface-container-low/50 rounded p-2 flex items-center justify-between font-label-sm text-label-sm">
                  <span className="text-error font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">lock</span> Chỉ xem biên bản TNV
                  </span>
                  <span className="font-code-num text-on-surface-variant">Kho cấm sửa</span>
                </div>
              </div>
              {/* KPI 4 */}
              <div className="p-4 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">Ràng buộc RBAC &amp; Audit</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-headline-md text-headline-md font-bold text-on-surface">Khóa Sửa</span>
                      <span className="font-body-sm text-body-sm text-tertiary font-semibold">Bất Biến</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-[22px]">shield</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 bg-surface-container-low/50 rounded p-2 flex items-center justify-between font-label-sm text-label-sm">
                  <span className="text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">key</span> SHA-256 Signature
                  </span>
                  <span className="font-code-num text-primary font-semibold">TK-MB-04</span>
                </div>
              </div>
            </div>

            {/* MAIN 2-COLUMN WORKSPACE: LEFT 7/12, RIGHT 5/12 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* LEFT COLUMN: INCIDENT REGISTRY & AUDIT TRAIL (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                {/* FILTER TABS & SEARCH */}
                <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
                    <div className="flex flex-wrap gap-1.5 p-1 bg-surface-container-low rounded-xl">
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md font-semibold shadow-sm transition-all">
                        Tất cả sự cố (18)
                      </button>
                      <button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all">
                        Sự cố tại Kho (11)
                      </button>
                      <button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all">
                        Chuyến TNV báo (7)
                      </button>
                      <button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all">
                        Chờ Admin duyệt
                      </button>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">sync</span> Tự động đồng bộ EduLedger
                    </span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <div className="relative flex-1">
                      <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">search</span>
                      <input className="w-full pl-9 pr-3 py-2 bg-surface-container-low rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all" placeholder="Tìm theo mã vụ việc (#INC-...), số vận đơn, kệ kho hoặc cán bộ..." type="text" />
                    </div>
                    <select className="px-3 py-2 bg-surface-container-low text-on-surface font-label-md text-label-md rounded-xl focus:outline-none focus:bg-surface-container transition-all">
                      <option>Mức độ: Tất cả</option>
                      <option>Nghiêm trọng (Cấp 1 &amp; 2)</option>
                      <option>Trung bình (Cấp 3)</option>
                      <option>Cảnh báo nhẹ</option>
                    </select>
                  </div>
                </div>

                {/* INCIDENT CARDS LIST */}
                <div className="space-y-2">
                  {/* INCIDENT 1: SELECTED STATE (#INC-2024-042) */}
                  <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm relative overflow-hidden transition-all bg-gradient-to-r from-primary/5 via-surface-container-lowest to-surface-container-lowest">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pl-2">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-code-num text-code-num font-bold text-primary px-2 py-0.5 rounded bg-primary-fixed">#INC-2024-042</span>
                          <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">Nghiêm trọng (Cấp 2)</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Đang chọn đối soát</span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface pt-1">
                          Linh kiện lưu kho hư hỏng do ẩm cục bộ tại Kệ B2 (Kho Máy Tính)
                        </h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                          Ảnh hưởng trực tiếp 05 Màn hình LCD Dell 24 inch thuộc lô hàng tiếp nhận FPT. Mưa tạt qua khe tôn thông gió tầng 02 kho B gây ẩm vỏ hộp và chập nguồn thứ cấp.
                        </p>
                      </div>
                      <div className="text-right sm:min-w-[140px] shrink-0 space-y-1">
                        <span className="inline-block px-2.5 py-1 rounded bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm font-medium">
                          Đang xử lý cấp bù
                        </span>
                        <div className="font-code-num text-body-sm text-outline">24/10/2024 • 09:15</div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 pl-2 flex flex-wrap items-center justify-between gap-2 bg-surface-container-low/60 rounded p-2">
                      <div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-sm text-[10px]">TH</div>
                        <span>Lập bởi: <strong className="font-semibold text-primary">Trần Hùng (Chính mình)</strong></span>
                        <span className="px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-code-num text-[10px] font-bold">TK-MB-04</span>
                      </div>
                      <div className="flex items-center gap-3 font-label-sm text-label-sm">
                        <span className="text-outline flex items-center gap-1">
                          <span className="material-symbols-outlined text-[15px]">photo_camera</span> 02 ảnh đính kèm
                        </span>
                        <span className="text-primary font-semibold cursor-pointer hover:underline flex items-center gap-0.5">
                          Xem chi tiết <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* INCIDENT 2: (#INC-2024-039) */}
                  <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:bg-surface-container-low/30 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-code-num text-code-num font-bold text-on-surface px-2 py-0.5 rounded bg-surface-container">#INC-2024-039</span>
                          <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">Cấp 3 - Kiểm kê</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-low text-tertiary font-label-sm text-label-sm font-medium">Đã xử lý xong</span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          Sai lệch số lượng khi tiếp nhận lô máy để bàn từ FPT Telecom
                        </h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Thùng niêm phong bàn giao ghi 15 bộ nhưng thực đếm tại bàn phân luồng kiểm định là 14 bộ PC HP ProDesk. Đã lập biên bản ghi nhận thiếu tại chỗ và được đối tác ký xác nhận bù.
                        </p>
                      </div>
                      <div className="text-right sm:min-w-[140px] shrink-0 space-y-1">
                        <span className="inline-block px-2.5 py-1 rounded bg-surface-container-high text-tertiary font-label-sm text-label-sm font-semibold">
                          Đóng hồ sơ (Có BB)
                        </span>
                        <div className="font-code-num text-body-sm text-outline">19/10/2024 • 14:30</div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 flex flex-wrap items-center justify-between gap-2 bg-surface-container-low/30 rounded p-2">
                      <div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant">
                        <span>Lập bởi: <strong className="text-on-surface font-medium">Trần Hùng (TK-MB-04)</strong></span>
                      </div>
                      <span className="font-code-num text-body-sm text-outline">Mã biên bản: BB-TN-00892</span>
                    </div>
                  </div>

                  {/* INCIDENT 3: TNV REPORT (#INC-TR-2024-015) - IMMUTABLE / READ-ONLY RULE */}
                  <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm relative overflow-hidden bg-gradient-to-r from-error/5 via-surface-container-lowest to-surface-container-lowest">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-error"></div>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pl-2">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-code-num text-code-num font-bold text-error px-2 py-0.5 rounded bg-error-container">#INC-TR-2024-015</span>
                          <span className="px-2 py-0.5 rounded bg-error text-on-error font-label-sm text-label-sm font-bold">Vận đơn: FAILED Tạm thời</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1 font-semibold">
                            <span className="material-symbols-outlined text-[13px] text-error">lock</span> [Kho Chỉ Xem - Cấm Sửa]
                          </span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          Sự cố hành trình: Xe bán tải TNV gặp sạt lở đèo Mã Pí Lèng (Hà Giang)
                        </h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Vận đơn số <strong className="font-code-num text-on-surface">#WB-2024-HG14</strong> hướng về Trường PTDTBT Mèo Vạc. Đường sạt lở cây cản đường, xe phải dừng 6 giờ. Thùng máy lót chống sốc nguyên vẹn, không hư hại phần cứng bên trong.
                        </p>
                      </div>
                      <div className="text-right sm:min-w-[140px] shrink-0 space-y-1">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-error-container text-error font-label-sm text-label-sm font-bold">
                          <span className="material-symbols-outlined text-[14px]">warning</span> TNV Báo Tuyến
                        </span>
                        <div className="font-code-num text-body-sm text-outline">22/10/2024 • 17:45</div>
                      </div>
                    </div>
                    {/* RBAC ENFORCEMENT CALLOUT FOR TNV INCIDENT */}
                    <div className="mt-3 pt-3 pl-2 flex flex-wrap items-center justify-between gap-2 bg-surface-container-low/70 rounded p-2.5">
                      <div className="flex items-center gap-2 font-body-sm text-body-sm">
                        <div className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-[10px]">LH</div>
                        <span>TNV lập: <strong className="font-semibold text-on-surface">Lê Hoàng Long (TNV-VCH-88)</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-[11px] text-error font-semibold px-2 py-0.5 rounded bg-surface-container-lowest">
                          Tuân thủ RBAC: Thủ kho &amp; Admin không được can thiệp sửa báo cáo TNV
                        </span>
                        <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all">
                          Xem định vị GPS
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* INCIDENT 4: (#INC-2024-031) */}
                  <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:bg-surface-container-low/30 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-code-num text-code-num font-bold text-on-surface px-2 py-0.5 rounded bg-surface-container">#INC-2024-031</span>
                          <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">Cấp 2 - An toàn cháy nổ</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-low text-tertiary font-label-sm text-label-sm font-medium">Đã cô lập</span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          Hỏng hóc trong kiểm định: 03 Pin phồng rộp dòng ThinkPad T480s
                        </h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Quá trình kiểm tra dung lượng pin phát hiện cell pin bị phồng, nguy cơ đoản mạch. Kỹ thuật viên đã tháo rời, chuyển sang thùng cát cách ly chuyên dụng tại khu vực PCCC Kho Tầng 1.
                        </p>
                      </div>
                      <div className="text-right sm:min-w-[140px] shrink-0 space-y-1">
                        <span className="inline-block px-2.5 py-1 rounded bg-surface-container-high text-tertiary font-label-sm text-label-sm font-semibold">
                          Đã xử lý &amp; Lưu kho an toàn
                        </span>
                        <div className="font-code-num text-body-sm text-outline">12/10/2024 • 11:00</div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 flex flex-wrap items-center justify-between gap-2 bg-surface-container-low/30 rounded p-2">
                      <div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant">
                        <span>Lập bởi: <strong className="text-on-surface font-medium">Nguyễn Văn Định (KTV-02)</strong></span>
                      </div>
                      <span className="font-code-num text-body-sm text-outline">Biên bản cách ly số: CL-2024-019</span>
                    </div>
                  </div>
                </div>

                {/* AUDIT INTEGRITY FOOTER */}
                <div className="p-4 bg-surface-container-low rounded-xl flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[24px]">verified_user</span>
                    <div>
                      <div className="font-label-md text-label-md font-semibold text-on-surface">Tính Bất Biến &amp; Toàn Vẹn Hồ Sơ Sự Cố</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">Mọi sự cố sau khi tạo lập tự động sinh khối chữ ký số và cập nhật sổ cái EduLedger. Không thể chỉnh sửa, ghi đè hoặc xóa bỏ.</div>
                    </div>
                  </div>
                  <span className="font-code-num text-label-sm text-outline font-mono">HASH: 4b9f..31c</span>
                </div>
              </div>

              {/* RIGHT COLUMN: INCIDENT DOSSIER (#INC-2024-042) & CREATION WORKFLOW (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* DOSSIER CARD: INCIDENT #INC-2024-042 */}
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm space-y-4">
                  {/* HEADER OF DOSSIER */}
                  <div className="flex items-center justify-between pb-3 bg-surface-container-low/40 -mx-6 -mt-6 p-6 rounded-t-xl">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary text-[22px]">folder_open</span>
                      <div>
                        <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Hồ Sơ Sự Cố #INC-2024-042</h2>
                        <span className="font-label-sm text-label-sm text-outline">Kho Tổng Miền Bắc • Phân khu Kệ B2-T02</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-surface-container text-primary font-code-num text-[11px] font-bold">
                      IMMUTABLE LOG
                    </span>
                  </div>
                  
                  {/* METADATA GRID */}
                  <div className="grid grid-cols-2 gap-2 text-body-sm">
                    <div className="p-2.5 bg-surface-container-low rounded-lg">
                      <span className="text-outline font-label-sm text-[11px] block">Người lập báo cáo:</span>
                      <span className="font-semibold text-on-surface">Trần Hùng</span>
                      <span className="font-code-num text-[11px] text-primary block">TK-MB-04 (Trưởng Kho)</span>
                    </div>
                    <div className="p-2.5 bg-surface-container-low rounded-lg">
                      <span className="text-outline font-label-sm text-[11px] block">Thời gian tạo lập:</span>
                      <span className="font-semibold text-on-surface font-code-num">09:15:22 24/10/2024</span>
                      <span className="font-label-sm text-[11px] text-tertiary block">Đã khóa sửa đổi</span>
                    </div>
                  </div>
                  
                  {/* IMPACTED ASSETS SPECIFICATION */}
                  <div className="space-y-1.5">
                    <div className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Thiết bị &amp; Lô hàng liên quan</div>
                    <div className="p-3 bg-surface-container-low rounded-xl space-y-2">
                      <div className="flex items-center justify-between font-body-sm">
                        <span className="font-medium text-on-surface">05 Màn hình LCD Dell Professional P2419H</span>
                        <span className="font-code-num font-bold text-error">Hỏng nguồn phụ</span>
                      </div>
                      <div className="flex items-center justify-between text-[12px] text-on-surface-variant font-code-num">
                        <span>Thuộc lô tiếp nhận: #DON-2024-8842 (Tập đoàn FPT)</span>
                        <span>Kệ B2 - Tầng 02</span>
                      </div>
                      <div className="text-[11px] text-secondary font-code-num">
                        Serials: CN-0N867N-74261-(411, 412, 413, 414, 415)
                      </div>
                    </div>
                  </div>
                  
                  {/* EVIDENCE PHOTOS */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Ảnh bằng chứng hiện trường (02 Ảnh)</span>
                      <span className="font-label-sm text-tertiary font-semibold flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[14px]">check</span> Đã đối soát GPS kho
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <div className="h-28 rounded-lg bg-surface-container overflow-hidden relative group">
                          <img className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform" alt="Chụp cận cảnh góc hộp các tông đựng màn hình máy tính Dell bị ố vàng loang lổ do nước mưa dột từ mái tôn kho bãi, nhãn kiểm định EduShare bị ẩm rách nhẹ, ánh sáng kỹ thuật kho bãi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABHhoGiywbu_plukrSMTZ99Ent_g9vDz6bgIMhHF7BhUUWWq0BHG5aR1Sy_q088Hp0va1_xwu2BPY5fPlIJQXHwS-XbtT1Lm2Gz6CjiItQ0RSbc7rMVRmOP76a5mAVKoprJ-VEXDQsia2jCY1lPab-XU2f6W7vkBVAVUx4RINQ6duPrzGkqKLkDXIZmAMB039DWsgmtdmRQRe9do4bSMoK-uJSIUUAKS8dSPuIhuQ3k_YoOMDhFG-WfQ" />
                          <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface font-code-num text-[10px]">
                            IMG_042_01.JPG
                          </div>
                        </div>
                        <span className="font-body-sm text-[11px] text-outline block">Vỏ hộp bị thấm ẩm tại Kệ B2</span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-28 rounded-lg bg-surface-container overflow-hidden relative group">
                          <img className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform" alt="Kỹ thuật viên phòng thí nghiệm kiểm định mạch nguồn bo mạch màn hình LCD mở bung nắp lưng, dấu vết ám đen đoản mạch do ẩm chân IC, dụng cụ đo đồng hồ vạn năng hiển thị lỗi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkZ9wd27WFMGa2yaKJ5mX3pafHhSEX86rH-X2f9WtBjtv1Xa0ENakgoIc-uxPH5O6hJFw2K2i6WwJdSIeqvU-WcWGHFtw4xZaTQ-in0F03LHt8sn80g5NpZDc9ezEPcOXKuZU7SaA_EdMEgDJ03lmRqVaQj2tPHcVa23aZDlA0QyXnKcTuMfZeImuDMZGhFIbF80XMZM9DA9twjq2MHdWMEcOWNVnM_RVo-jcaN5i9g7vLQop3ZIj-hQ" />
                          <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface font-code-num text-[10px]">
                            IMG_042_02.JPG
                          </div>
                        </div>
                        <span className="font-body-sm text-[11px] text-outline block">Kiểm tra mạch nguồn thứ cấp</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* DAMAGE ASSESSMENT & RECOVERY PLAN */}
                  <div className="p-3 bg-surface-container-low rounded-xl space-y-2">
                    <div className="flex items-center justify-between font-label-md text-label-md font-semibold text-on-surface">
                      <span>Đánh giá thiệt hại &amp; Phương án</span>
                      <span className="text-primary font-code-num">1.250.000 VNĐ</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Phương án kỹ thuật: Đặt thay thế 05 board mạch nguồn thứ cấp chuẩn tương thích. Đề xuất trích Quỹ linh kiện dự phòng EduShare VN. Đã cho chống thấm và trám khe mái tôn trên Kệ B2 trong sáng ngày 24/10.
                    </p>
                    <div className="flex items-center justify-between pt-1 font-body-sm text-[11px] text-outline">
                      <span>Admin phụ trách phê duyệt: <strong className="text-on-surface font-medium">Ban Điều Hành EduShare</strong></span>
                      <span className="text-tertiary font-semibold">Đã cấp ngân sách thay thế</span>
                    </div>
                  </div>
                  
                  {/* CRYPTOGRAPHIC IMMUTABILITY BADGE */}
                  <div className="p-2.5 bg-surface-container rounded-lg flex items-center justify-between font-code-num text-[11px]">
                    <div className="flex items-center gap-1.5 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">fingerprint</span>
                      <span>SHA-256: 8f4a9b21dc3790ea12...c7</span>
                    </div>
                    <span className="text-primary font-bold">Khóa Sửa RBAC</span>
                  </div>
                </div>

                {/* INCIDENT REPORT CREATION FORM (STRICT RBAC: AS ONESELF TK-MB-04) */}
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm space-y-4" id="form-create-incident">
                  <div className="flex items-center justify-between border-b pb-3 border-surface-container">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">post_add</span>
                      <div>
                        <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Tạo Báo Cáo Sự Cố Kho Mới</h2>
                        <span className="font-label-sm text-label-sm text-outline">Tư cách cá nhân: Trần Hùng (TK-MB-04)</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-bold">
                      RBAC LEVEL 3
                    </span>
                  </div>
                  
                  {/* STRICT RBAC NOTICE */}
                  <div className="p-3 bg-surface-container-low rounded-xl flex items-start gap-1">
                    <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5">verified</span>
                    <div className="font-body-sm text-body-sm text-on-surface">
                      <strong className="font-semibold text-error">Quy chuẩn RBAC bất biến:</strong> Bạn đang lập biên bản với tư cách cá nhân <span className="font-bold text-primary">Trần Hùng</span>. Hệ thống không cho phép sửa sau khi gửi và tuyệt đối <strong>không báo cáo thay cho người khác hoặc can thiệp chuyến TNV</strong>.
                    </div>
                  </div>
                  
                  {/* FORM FIELDS */}
                  <div className="space-y-2">
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                        Phân loại sự cố kho bãi <span className="text-error">*</span>
                      </label>
                      <select className="w-full px-3 py-2 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-xl focus:outline-none focus:bg-surface-container transition-all">
                        <option>Sự cố bảo quản kho bãi (Ẩm mốc, dột, côn trùng, nhiệt độ)</option>
                        <option>Hư hỏng linh kiện trong quá trình kiểm định kỹ thuật</option>
                        <option>Thất thoát / Sai lệch số lượng trong đợt tiếp nhận</option>
                        <option>Chập cháy, tai nạn an toàn lao động trong kho</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                          Vị trí Kệ / Khu vực <span className="text-error">*</span>
                        </label>
                        <input className="w-full px-3 py-2 bg-surface-container-low rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all" placeholder="VD: Kệ B2-T02 hoặc Bàn KĐ-03" type="text" defaultValue="Kệ B4 - Kho Laptop" />
                      </div>
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                          Lô hàng / Mã tài sản liên đới
                        </label>
                        <input className="w-full px-3 py-2 bg-surface-container-low rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all" placeholder="VD: #DON-2024-XXXX" type="text" defaultValue="#DON-2024-9102" />
                      </div>
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                        Lý do &amp; Diễn biến chi tiết sự cố <span className="text-error">* (Bắt buộc ghi rõ)</span>
                      </label>
                      <textarea className="w-full px-3 py-2 bg-surface-container-low rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all resize-none" placeholder="Mô tả cụ thể nguyên nhân xảy ra, tình trạng vật thể, mức độ hư hao và giải pháp xử lý ban đầu..." rows="3"></textarea>
                    </div>
                    
                    {/* UPLOAD EVIDENCE PLACEHOLDER */}
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                        Ảnh chụp hiện trường / Biên bản đính kèm
                      </label>
                      <div className="p-3 bg-surface-container-low rounded-xl flex items-center justify-between border border-dashed border-outline-variant hover:bg-surface-container cursor-pointer transition-all">
                        <div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
                          <span className="material-symbols-outlined text-[20px] text-primary">add_a_photo</span>
                          <span>Kéo thả tối đa 5 ảnh (PNG/JPG &lt; 10MB) hoặc chọn từ máy</span>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-surface-container-lowest font-label-sm text-label-sm text-primary font-semibold shadow-sm">Tải lên</span>
                      </div>
                    </div>
                    
                    {/* SUBMIT CTA */}
                    <div className="pt-2">
                      <button className="w-full py-3 px-6 rounded-xl bg-primary text-on-primary font-headline-sm text-headline-sm font-semibold hover:bg-surface-tint shadow-md transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">send_and_archive</span>
                        <span>GỬI BÁO CÁO SỰ CỐ BẤT BIẾN (TK-MB-04)</span>
                      </button>
                      <span className="block text-center font-body-sm text-[11px] text-outline mt-1.5">
                        Hệ thống sẽ gắn timestamp nguyên tử UTC+7 và mã định danh Trần Hùng (không thể hủy ngang).
                      </span>
                    </div>
                  </div>
                </div>

                {/* RBAC STANDARD LOGISTICS NOTICE */}
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">policy</span>
                    <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Quy Chuẩn RBAC Cổng Kho (v2.8.4)</h2>
                  </div>
                  <div className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-surface-container-low text-primary flex items-center justify-center shrink-0 font-code-num text-[11px] font-bold">1</span>
                      <span><strong>Tự chịu trách nhiệm:</strong> Mọi báo cáo do Trưởng Kho hoặc Kỹ thuật viên tạo đều mang giá trị pháp lý nội bộ, làm căn cứ thanh quyết toán quỹ hỗ trợ.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-surface-container-low text-primary flex items-center justify-center shrink-0 font-code-num text-[11px] font-bold">2</span>
                      <span><strong>Không can thiệp chuyến TNV:</strong> Chuyến xe gắn thẻ FAILED chỉ có TNV hiện trường được quyền cập nhật lý do và hình ảnh. Kho chỉ nhận dữ liệu chỉ đọc.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-surface-container-low text-primary flex items-center justify-center shrink-0 font-code-num text-[11px] font-bold">3</span>
                      <span><strong>Đối soát EduLedger:</strong> Bất kỳ sai lệch số lượng linh kiện kiểm định đều đồng bộ về Ban Điều Phối quốc gia để cấp bù từ đối tác bảo trợ.</span>
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

export default WarehouseIncidentReportPage;
