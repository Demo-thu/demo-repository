import React, { useState } from 'react';

export default function VolunteerWarehousePickupPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(true);
  const [scanInput, setScanInput] = useState('QR-EDUS-4830 (Khớp chuẩn Grade A • Đã xác thực)');

  const handleConfirmPickup = () => {
    if (!confirmed) {
      alert('Vui lòng xác nhận cam kết trước khi kích hoạt chuyến đi!');
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <div className="bg-surface font-sans text-on-surface antialiased flex min-h-screen">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto border-r border-outline-variant/30">
        <div className="flex flex-col">
          <div className="px-5 py-4 border-b border-outline-variant/30 bg-surface-container-low/40">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white shadow-sm ring-2 ring-primary/20">
                <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-sm text-primary tracking-tight">EduShare VN</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
                <span className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider">Cổng Tình Nguyện Viên</span>
              </div>
            </div>
          </div>

          <nav className="p-3.5 space-y-4">
            <div>
              <span className="px-3 text-[10px] font-bold text-outline uppercase tracking-wider">Điều động & Ca trực</span>
              <div className="mt-1.5 space-y-1">
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" href="/volunteer/attendance">
                  <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                  <span>Điểm danh ca trực</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" href="/volunteer/leaderboard">
                  <span className="material-symbols-outlined text-[18px]">leaderboard</span>
                  <span>Bảng xếp hạng & Giờ công</span>
                </a>
              </div>
            </div>

            <div>
              <span className="px-3 text-[10px] font-bold text-outline uppercase tracking-wider">Vận chuyển & Giao nhận</span>
              <div className="mt-1.5 space-y-1">
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" href="/volunteer/waybill">
                  <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  <span>Vận đơn được gán</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" href="/volunteer/route-gps">
                  <span className="material-symbols-outlined text-[18px]">near_me</span>
                  <span>Tuyến đường & GPS</span>
                </a>
                <a className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold bg-primary text-white shadow-sm ring-1 ring-primary-container" href="/volunteer/warehouse-pickup">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
                    <span>Xác nhận lấy hàng tại kho</span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                </a>
              </div>
            </div>

            <div>
              <span className="px-3 text-[10px] font-bold text-outline uppercase tracking-wider">Biên bản & Sự cố</span>
              <div className="mt-1.5 space-y-1">
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" href="/volunteer/incident">
                  <span className="material-symbols-outlined text-[18px]">report_problem</span>
                  <span>Báo cáo sự cố chuyến đi</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" href="/volunteer/pod">
                  <span className="material-symbols-outlined text-[18px]">task_alt</span>
                  <span>Hoàn thành & Minh chứng PoD</span>
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="p-3.5 border-t border-outline-variant/30 bg-surface-container-low/40 space-y-2">
          <div className="bg-red-50 border border-red-200/80 rounded-xl p-3 shadow-xs">
            <div className="flex items-center justify-between text-red-700">
              <span className="flex items-center gap-1.5 text-[11px] font-bold">
                <span className="material-symbols-outlined text-[16px] animate-pulse">phone_in_talk</span> ĐIỀU PHỐI KHẨN CẤP
              </span>
              <span className="text-[9px] bg-red-100 text-red-800 font-bold px-1.5 py-0.5 rounded">24/7</span>
            </div>
            <div className="text-base font-extrabold text-red-600 mt-1 font-mono tracking-wide">1900 6829</div>
            <p className="text-[10px] text-red-600/80 mt-0.5">Trực tuyến hỗ trợ cứu hộ sự cố đèo dốc</p>
          </div>
          <div className="text-[10px] text-center text-outline">Bản dựng v2.8.4-PROD • TNV Portal</div>
        </div>
      </aside>

      {/* MAIN WRAPPER */}
      <div className="pl-64 flex-1 flex flex-col min-w-0">
        {/* TOP HEADER */}
        <header className="h-16 bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/30 sticky top-0 z-40 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-80">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input className="w-full pl-9 pr-3 py-1.5 bg-surface-container-low hover:bg-surface-container-high/60 focus:bg-white rounded-lg text-xs text-on-surface placeholder:text-outline border border-outline-variant/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all font-mono" placeholder="Tìm mã vận đơn, kiện hàng, địa điểm..." type="text" defaultValue="#WB-2024-NW08" />
            </div>
            <div className="hidden xl:flex items-center gap-2 text-xs text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-lg border border-outline-variant/20">
              <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
              <span>Ca trực: <strong>06:30 - 18:30 (Đội 01)</strong></span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Trực tuyến • GPS kết nối</span>
            </div>
            <button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" title="Thông báo" type="button">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <div className="h-6 w-px bg-outline-variant/40"></div>
            <div className="flex items-center gap-3 pl-1">
              <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shadow-sm ring-2 ring-primary/20">HL</div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-xs text-on-surface">Lê Hoàng Long</span>
                  <span className="text-[9px] bg-primary/10 text-primary font-bold px-1.5 py-0.5 rounded font-mono">TNV-VCH-88</span>
                </div>
                <span className="text-[11px] text-on-surface-variant">Vai trò: Tình nguyện viên Vận chuyển (Trưởng đoàn)</span>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN PAGE CONTENT */}
        <main className="p-6 space-y-6">
          {/* PAGE HERO & ACTION BAR */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 space-y-5">
            <nav className="flex items-center gap-2 text-xs font-medium text-on-surface-variant">
              <span className="hover:text-primary cursor-pointer transition-colors">EduShare TNV</span>
              <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Vận Chuyển & Giao Nhận</span>
              <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
              <span className="text-primary font-semibold">Xác Nhận Nhận Hàng Tại Kho</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h1 className="font-display font-bold text-2xl text-on-surface tracking-tight">
                    Xác Nhận Nhận Hàng & Kiểm Đếm Thiết Bị Xuất Kho
                  </h1>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    Vận đơn: #WB-2024-NW08 • Ưu tiên Cấp 1 (Khẩn cấp)
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant">
                  TNV tiến hành đối soát, kiểm tra 50 kiện thiết bị thực tế, quét mã niêm phong và ký số bàn giao với Thủ kho trước khi xuất bãi.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-3 border-t border-outline-variant/20 bg-surface-container-low/50 p-3 rounded-xl">
              <div className="flex items-center gap-2.5 text-xs text-on-surface">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">warehouse</span>
                </div>
                <div>
                  <div className="font-semibold text-on-surface">Kho xuất phát: <strong>Tổng Hub Kỹ Thuật Hà Nội #01</strong></div>
                  <div className="text-[11px] text-on-surface-variant font-mono">Địa chỉ: Km12 Giải Phóng, Thanh Trì, TP. Hà Nội</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
                <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface text-xs font-semibold transition-colors border border-outline-variant/40" type="button">
                  <span className="material-symbols-outlined text-[17px] text-primary">picture_as_pdf</span>
                  <span>In Phiếu Kiểm Đếm (PDF)</span>
                </button>
                <a className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-error text-white text-xs font-semibold hover:bg-error/90 transition-all" href="tel:19006829">
                  <span className="material-symbols-outlined text-[17px] animate-pulse">phone_in_talk</span>
                  <span>Liên Hệ Điều Phối Kho (1900 6829)</span>
                </a>
              </div>
            </div>
          </div>

          {/* BENTO SUMMARY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Col 1: Route */}
            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col justify-between space-y-3 relative overflow-hidden">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-outline">Lộ trình & Điểm đến</span>
                  <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold font-mono">310 KM</span>
                </div>
                <div className="flex items-center gap-2 font-display font-bold text-base text-on-surface">
                  <span>Hà Nội</span>
                  <span className="material-symbols-outlined text-primary text-[18px]">trending_flat</span>
                  <span>Mường Lát, Thanh Hóa</span>
                </div>
                <div className="text-xs text-on-surface-variant flex items-start gap-1.5 pt-1">
                  <span className="material-symbols-outlined text-tertiary text-[17px] shrink-0 mt-0.5">pin_drop</span>
                  <span><strong>Đích nhận:</strong> Trường PTDTBT THCS Mường Lát, Huyện Mường Lát, Tỉnh Thanh Hóa</span>
                </div>
              </div>
              <div className="text-[11px] text-on-surface-variant/80 border-t border-outline-variant/20 pt-2 flex items-center justify-between">
                <span>Thời gian dự kiến: <strong>8 giờ di chuyển</strong></span>
                <span className="text-primary font-semibold">Địa hình đèo dốc cấp 2</span>
              </div>
            </div>

            {/* Col 2: Vehicle */}
            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-outline">Phương tiện & Tổ công tác</span>
                  <span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary text-[10px] font-bold">3 TÌNH NGUYỆN VIÊN</span>
                </div>
                <div className="flex items-center gap-2 font-display font-bold text-base text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]">directions_car</span>
                  <span>Bán tải Ford Ranger 29H-882.14</span>
                </div>
                <p className="text-xs text-on-surface-variant">
                  <strong>Tổ TNV áp tải:</strong> Lê Hoàng Long (Trưởng đoàn), Vũ Quốc Bảo (Kỹ thuật), Trần Mai Phương (Logistics).
                </p>
              </div>
              <div className="text-[11px] text-on-surface-variant/80 border-t border-outline-variant/20 pt-2 flex items-center justify-between">
                <span>Tải trọng thùng xe: <strong>Tối đa 750 kg</strong></span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span> Đã kiểm định xe
                </span>
              </div>
            </div>

            {/* Col 3: Status */}
            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-outline">Trạng thái vận chuyển</span>
                  <span className="font-mono text-[10px] text-outline">Quy chuẩn RBAC</span>
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-100 text-amber-900 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
                    CHỜ LẤY HÀNG TẠI KHO
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="text-xs text-on-surface-variant">Tổng trọng lượng: <strong className="text-on-surface text-sm">340 kg</strong></div>
                  <div className="text-xs text-on-surface-variant">Số lượng: <strong className="text-primary text-sm font-bold">50 kiện</strong></div>
                </div>
              </div>
              <div className="text-[11px] text-on-surface-variant/80 border-t border-outline-variant/20 pt-2 flex items-center justify-between">
                <span>Seal niêm phong xe:</span>
                <span className="font-mono font-bold text-primary">#HN-8842-OK</span>
              </div>
            </div>
          </div>

          {/* MAIN TWO-COLUMN */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT (7/12) */}
            <div className="lg:col-span-7 space-y-6">
              {/* AUDIT PROGRESS & SCANNER */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[24px]">fact_check</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-on-surface">Tiến trình kiểm đếm tại cửa kho</h3>
                      <p className="text-xs text-on-surface-variant">50 / 50 Kiện hàng hợp lệ (100% khớp dữ liệu hệ thống xuất)</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-display font-black text-2xl text-tertiary">100%</span>
                    <div className="text-xs text-tertiary font-semibold flex items-center justify-end gap-1">
                      <span className="material-symbols-outlined text-[15px]">check_circle</span> Hoàn tất kiểm đếm
                    </div>
                  </div>
                </div>

                <div className="w-full h-3 rounded-full bg-surface-container overflow-hidden">
                  <div className="h-full bg-tertiary rounded-full transition-all duration-500" style={{ width: '100%' }}></div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col sm:flex-row items-center gap-3">
                  <div className="relative flex-1 w-full">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">qr_code_scanner</span>
                    <input className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest rounded-lg font-mono text-xs text-on-surface border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none" readOnly type="text" value={scanInput} />
                  </div>
                  <button className="w-full sm:w-auto px-4 py-2 bg-primary text-white font-medium text-xs rounded-lg flex items-center justify-center gap-2 hover:bg-primary-container transition-colors shadow-sm shrink-0" type="button">
                    <span className="material-symbols-outlined text-[18px]">sensors</span>
                    <span>Quét Barcode / QR Tiếp</span>
                  </button>
                </div>
              </div>

              {/* DETAILED INVENTORY */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">inventory_2</span>
                    <h3 className="font-display font-bold text-base text-on-surface">Danh mục 50 kiện thiết bị bàn giao</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-surface-container text-on-surface-variant text-xs font-mono font-medium">Seal: #HN-8842-OK</span>
                    <span className="text-xs text-on-surface-variant">Tổng: <strong>340 kg</strong></span>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Item 1 */}
                  <div className="p-4 rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors border border-outline-variant/20 space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-xs text-on-surface">30 Laptop Lenovo ThinkPad T480s</span>
                          <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed text-[11px] font-bold">Grade A</span>
                          <span className="text-on-surface-variant text-xs">(Core i5 / 16GB / SSD 256GB)</span>
                        </div>
                        <div className="text-xs text-on-surface-variant">
                          Đã nạp hệ điều hành EduOS Linux & SGK số • Đóng gói: 30 thùng xốp chống sốc cá nhân • Tài trợ: Tập đoàn FPT
                        </div>
                        <div className="font-mono text-xs text-primary font-medium">
                          Dải mã QR: #QR-EDUS-4801 → #QR-EDUS-4830
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 flex items-center gap-1 border border-emerald-200">
                        <span className="material-symbols-outlined text-[15px]">done_all</span> Đã quét x30
                      </span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="p-4 rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors border border-outline-variant/20 space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-xs text-on-surface">20 Màn hình Dell Professional 24" P2419H</span>
                          <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed text-[11px] font-bold">Grade A</span>
                          <span className="text-on-surface-variant text-xs">(IPS Full HD)</span>
                        </div>
                        <div className="text-xs text-on-surface-variant">
                          Kèm chân đế xoay + cáp nguồn/HDMI zin • Đóng gói: Thùng carton 5 lớp nguyên niêm phong
                        </div>
                        <div className="font-mono text-xs text-primary font-medium">
                          Dải mã QR: #QR-EDUS-5101 → #QR-EDUS-5120
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 flex items-center gap-1 border border-emerald-200">
                        <span className="material-symbols-outlined text-[15px]">done_all</span> Đã quét x20
                      </span>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="p-4 rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors border border-outline-variant/20 space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-xs text-on-surface">02 Switch Cisco Gigabit 24 Port + 300m Cáp mạng Cat6</span>
                          <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed text-[11px] font-bold">Mới 100%</span>
                        </div>
                        <div className="text-xs text-on-surface-variant">
                          Kèm kìm bấm mạng, hạt mạng & patch cord phụ kiện hoàn chỉnh phòng lab trường học
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 flex items-center gap-1 border border-emerald-200">
                        <span className="material-symbols-outlined text-[15px]">done_all</span> Đã quét 01 bộ gộp
                      </span>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="p-4 rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors border border-outline-variant/20 space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-xs text-on-surface">10 Bộ lưu điện UPS Santak 1000VA</span>
                          <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed text-[11px] font-bold">Mới 100%</span>
                          <span className="text-on-surface-variant text-xs">(Bảo vệ điện lưới vùng cao)</span>
                        </div>
                        <div className="text-xs text-on-surface-variant">
                          Mã kiện phụ kiện: #HN-8842-UPS • Kèm cáp biến áp dự phòng
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 flex items-center gap-1 border border-emerald-200">
                        <span className="material-symbols-outlined text-[15px]">done_all</span> Đã quét x10
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PHOTOS */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">photo_camera</span>
                    <h3 className="font-display font-bold text-base text-on-surface">Ảnh Chụp Thực Tế Bốc Xếp & Niêm Phong Xe Bán Tải</h3>
                  </div>
                  <span className="text-xs text-outline font-medium">Đã đóng dấu watermark tự động</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative rounded-xl overflow-hidden group shadow-sm bg-surface-container border border-outline-variant/20">
                    <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxRw3ZQU4bf9f03sbnKRygeegtnxSTTZOcQQI8umYIxJ306w5o3FmdUk-w5NiKUHIL0l55bOS8Jy_E9jZSjyhR5ic8S52PvI9TD8PD5hyxfuwIUckaOaZZhmCf2VdRuhoKFpcIPBtOiPj551QcnlDz-sVq0pD4erkqxiSNR6Bux5SROg0EIuCW6UhcHTU25S8-33INJh_hO8MYabYsbZ7u_rKNOilZys4oyrBZp0zodlJ16VFHZH8Ifw" alt="Xếp dỡ pallet" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-3 text-white">
                      <div className="flex items-center gap-1.5 text-xs font-semibold">
                        <span className="material-symbols-outlined text-[15px] text-tertiary-fixed">verified</span>
                        Xếp dỡ pallet & chằng đai an toàn
                      </div>
                      <div className="text-[11px] opacity-90 font-mono">07:15:20 • 24/10/2024 • Kho HN Hub-01</div>
                    </div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden group shadow-sm bg-surface-container border border-outline-variant/20">
                    <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlA9YuK_w_uvJN_Kg2rcWuKkFFNjdsZFAeHlJKlpIGomOx1AdHtXEeV80j5vugJIriw6QPtFIdBE829jn14oRc1kv-Ub7qGYgd3ok0p17xXui6yO4MLbbPC_ln0uPk85RG8bEZtQtsnoqnonKfoxQP3Ahk6oj7PCDBqPafzVoUAH27LQCnqMhRvR_CD-NYbIgJ4wQc5YcGz0BexWIe_aF8-qipV8QTXl4_EMthOP-COUOCNTTeA4sxCg" alt="Niêm phong xe" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-3 text-white">
                      <div className="flex items-center gap-1.5 text-xs font-semibold">
                        <span className="material-symbols-outlined text-[15px] text-emerald-300">lock</span>
                        Phủ bạt chống thấm & kẹp chì niêm phong xe
                      </div>
                      <div className="text-[11px] opacity-90 font-mono">Seal: VN-SEAL-8842 • GPS: 21.0285° N, 105.7823° E</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT (5/12) */}
            <div className="lg:col-span-5 space-y-6">
              {/* RBAC POLICY */}
              <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-primary font-display font-bold text-sm">
                  <span className="material-symbols-outlined text-[20px]">policy</span>
                  <span>QUY CHUẨN RBAC LẤY HÀNG (DOCUMENT_72)</span>
                </div>
                <div className="space-y-2 text-on-surface-variant text-xs leading-relaxed">
                  <p><strong className="text-on-surface">Quyền TNV:</strong> Xác nhận đã nhận đủ hàng và bảo quản kiện hàng an toàn suốt lộ trình đến điểm trường.</p>
                  <p><strong className="text-error">Ràng buộc cấm:</strong> Tình nguyện viên không tạo vận đơn, không sửa phiếu, không nhập kho.</p>
                  <p><strong className="text-tertiary">Cơ chế tự động:</strong> Khi bấm xác nhận thành công, trạng thái vận đơn tự động chuyển thành <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-surface-container-highest font-bold text-on-surface">IN-TRANSIT</span> (Đang di chuyển).</p>
                </div>
              </div>

              {/* CREW ROSTER */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-sm text-on-surface uppercase tracking-wide">TỔ TNV ÁP TẢI VẬN ĐƠN (3 THÀNH VIÊN)</h3>
                  <span className="font-mono text-[10px] text-outline">waybill_volunteers</span>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs ring-2 ring-primary/20">HL</div>
                      <div>
                        <div className="text-xs font-bold text-on-surface">Lê Hoàng Long (Bạn)</div>
                        <div className="text-[11px] text-on-surface-variant">Trưởng đoàn • Lái chính (29H-882.14)</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold">Ký xác nhận</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low/60 border border-outline-variant/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xs">QB</div>
                      <div>
                        <div className="text-xs font-bold text-on-surface">Vũ Quốc Bảo</div>
                        <div className="text-[11px] text-on-surface-variant">Kỹ thuật viên IT & Kiểm đếm thiết bị</div>
                      </div>
                    </div>
                    <a className="font-mono text-[11px] text-primary hover:underline" href="tel:0988234888">0988.234.888</a>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low/60 border border-outline-variant/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xs">MP</div>
                      <div>
                        <div className="text-xs font-bold text-on-surface">Trần Mai Phương</div>
                        <div className="text-[11px] text-on-surface-variant">Logistics & Giao tiếp sư phạm</div>
                      </div>
                    </div>
                    <a className="font-mono text-[11px] text-primary hover:underline" href="tel:0905123999">0905.123.999</a>
                  </div>
                </div>
              </div>

              {/* DUAL E-SIGNATURES & SUBMISSION */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-display font-bold text-sm text-on-surface">
                    <span className="material-symbols-outlined text-primary text-[20px]">draw</span>
                    <span>CHỮ KÝ SỐ GIAO NHẬN TẠI KHO</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">Thủ kho đã ký</span>
                </div>

                {/* Signature 1: Warehouse Keeper */}
                <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-2">
                  <div className="flex items-center justify-between text-on-surface-variant text-xs">
                    <span className="font-bold">ĐẠI DIỆN THỦ KHO XUẤT</span>
                    <span className="font-mono text-[10px]">TIMESTAMP: 24/10/2024 07:18:02</span>
                  </div>
                  <div className="h-20 bg-surface-container-lowest rounded-lg flex items-center justify-between px-4 relative overflow-hidden border border-outline-variant/20">
                    <svg className="w-36 h-12 text-primary" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewBox="0 0 160 50">
                      <path d="M10,35 C30,10 40,45 60,20 C75,5 90,40 110,25 C125,15 135,35 150,20"></path>
                    </svg>
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-bold text-on-surface">Phạm Hoàng Nam</span>
                      <span className="text-[10px] text-tertiary font-semibold uppercase">KTV Trưởng • Đã xác thực OTP</span>
                    </div>
                    <div className="absolute right-24 top-2 w-14 h-14 rounded-full border-2 border-red-500/40 text-red-500/40 flex items-center justify-center text-[8px] font-bold rotate-[-15deg] uppercase pointer-events-none">
                      ĐÃ XUẤT KHO
                    </div>
                  </div>
                </div>

                {/* Signature 2: Volunteer Leader */}
                <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-2">
                  <div className="flex items-center justify-between text-on-surface-variant text-xs">
                    <span className="font-bold">ĐẠI DIỆN TỔ TNV NHẬN BÀN GIAO</span>
                    <span className="text-primary font-semibold text-xs cursor-pointer hover:underline">Ký lại</span>
                  </div>
                  <div className="h-20 bg-surface-container-lowest rounded-lg flex items-center justify-between px-4 relative overflow-hidden border border-outline-variant/20">
                    <svg className="w-36 h-12 text-on-surface" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewBox="0 0 160 50">
                      <path d="M12,28 C25,12 35,42 55,18 C70,2 85,38 105,15 C120,30 140,10 152,32"></path>
                    </svg>
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-bold text-on-surface">Lê Hoàng Long</span>
                      <span className="text-[10px] text-primary font-semibold uppercase">Trưởng đoàn áp tải</span>
                    </div>
                  </div>
                </div>

                {/* Acceptance Checkbox */}
                <label className="flex items-start gap-3 p-2 rounded cursor-pointer select-none">
                  <input checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} className="mt-0.5 w-4 h-4 rounded text-primary focus:ring-primary accent-primary" type="checkbox" />
                  <span className="text-xs text-on-surface leading-snug">
                    Tôi cam kết đã kiểm đếm đủ 50 kiện thiết bị theo biên bản, chì niêm phong xe còn nguyên vẹn và chịu trách nhiệm áp tải an toàn đến trường PTDTBT THCS Mường Lát.
                  </span>
                </label>

                {/* CTA Button */}
                <button className="w-full py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-container text-white font-display font-bold text-sm flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all transform active:scale-[0.99]" onClick={handleConfirmPickup} type="button">
                  <span className="material-symbols-outlined text-[22px]">local_shipping</span>
                  <span>Xác Nhận Đã Nhận Đủ Hàng & Kích Hoạt Chuyến Đi</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* SUCCESS MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-surface-container-lowest rounded-2xl max-w-md w-full p-6 text-center space-y-4 shadow-2xl border border-outline-variant/30">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h3 className="font-display font-bold text-lg text-on-surface">Kích Hoạt Chuyến Đi Thành Công!</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Vận đơn <strong>#WB-2024-NW08</strong> đã chính thức chuyển sang trạng thái <strong>IN-TRANSIT</strong>. Toàn bộ 50 kiện thiết bị đã được kích hoạt theo dõi lộ trình GPS thời gian thực.
            </p>
            <div className="p-3 bg-surface-container-low rounded-xl text-left text-xs text-on-surface space-y-1.5 border border-outline-variant/20">
              <div>• <strong>Biên bản điện tử:</strong> POD-2024-8842-SIGNED.pdf</div>
              <div>• <strong>Hotline cứu hộ đường đèo:</strong> 1900 6829</div>
              <div>• <strong>Giám sát lộ trình:</strong> Đang đồng bộ vệ tinh GPS</div>
            </div>
            <div className="pt-2 flex gap-3">
              <button className="flex-1 py-2.5 rounded-xl bg-primary text-white font-medium text-xs hover:bg-primary-container transition-colors shadow-sm" onClick={() => setIsModalOpen(false)} type="button">
                Chuyển Sang Bản Đồ GPS Tuyến Đường
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
