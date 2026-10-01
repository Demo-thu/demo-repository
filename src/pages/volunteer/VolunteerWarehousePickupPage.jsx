import { useState } from "react";

export default function VolunteerWarehousePickupPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(true);
  const [scanInput, setScanInput] = useState("QR-EDUS-4830 (Khớp chuẩn Grade A • Đã xác thực)");

  const handleConfirmPickup = () => {
    if (!confirmed) {
      alert("Vui lòng xác nhận cam kết trước khi kích hoạt chuyến đi!");
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <div className="bg-surface text-on-surface flex min-h-screen font-sans antialiased">
      {/* Sidebar */}
      <aside className="bg-surface-container-lowest border-outline-variant/30 fixed top-0 left-0 z-50 flex h-screen w-64 flex-col justify-between overflow-y-auto border-r shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="border-outline-variant/30 bg-surface-container-low/40 border-b px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary ring-primary/20 flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-sm ring-2">
                <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-primary text-sm font-extrabold tracking-tight">EduShare VN</span>
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
                </div>
                <span className="text-on-surface-variant text-[10px] font-semibold tracking-wider uppercase">
                  Cổng Tình Nguyện Viên
                </span>
              </div>
            </div>
          </div>

          <nav className="space-y-4 p-3.5">
            <div>
              <span className="text-outline px-3 text-[10px] font-bold tracking-wider uppercase">
                Điều động & Ca trực
              </span>
              <div className="mt-1.5 space-y-1">
                <a
                  className="text-on-surface-variant hover:bg-surface-container-low hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors"
                  href="/volunteer/attendance"
                >
                  <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                  <span>Điểm danh ca trực</span>
                </a>
                <a
                  className="text-on-surface-variant hover:bg-surface-container-low hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors"
                  href="/volunteer/leaderboard"
                >
                  <span className="material-symbols-outlined text-[18px]">leaderboard</span>
                  <span>Bảng xếp hạng & Giờ công</span>
                </a>
              </div>
            </div>

            <div>
              <span className="text-outline px-3 text-[10px] font-bold tracking-wider uppercase">
                Vận chuyển & Giao nhận
              </span>
              <div className="mt-1.5 space-y-1">
                <a
                  className="text-on-surface-variant hover:bg-surface-container-low hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors"
                  href="/volunteer/waybill"
                >
                  <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  <span>Vận đơn được gán</span>
                </a>
                <a
                  className="text-on-surface-variant hover:bg-surface-container-low hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors"
                  href="/volunteer/route-gps"
                >
                  <span className="material-symbols-outlined text-[18px]">near_me</span>
                  <span>Tuyến đường & GPS</span>
                </a>
                <a
                  className="bg-primary ring-primary-container flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-semibold text-white shadow-sm ring-1"
                  href="/volunteer/warehouse-pickup"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
                    <span>Xác nhận lấy hàng tại kho</span>
                  </div>
                  <span className="h-1.5 w-1.5 animate-ping rounded-full bg-white"></span>
                </a>
              </div>
            </div>

            <div>
              <span className="text-outline px-3 text-[10px] font-bold tracking-wider uppercase">Biên bản & Sự cố</span>
              <div className="mt-1.5 space-y-1">
                <a
                  className="text-on-surface-variant hover:bg-surface-container-low hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors"
                  href="/volunteer/incident"
                >
                  <span className="material-symbols-outlined text-[18px]">report_problem</span>
                  <span>Báo cáo sự cố chuyến đi</span>
                </a>
                <a
                  className="text-on-surface-variant hover:bg-surface-container-low hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors"
                  href="/volunteer/pod"
                >
                  <span className="material-symbols-outlined text-[18px]">task_alt</span>
                  <span>Hoàn thành & Minh chứng PoD</span>
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="border-outline-variant/30 bg-surface-container-low/40 space-y-2 border-t p-3.5">
          <div className="rounded-xl border border-red-200/80 bg-red-50 p-3 shadow-xs">
            <div className="flex items-center justify-between text-red-700">
              <span className="flex items-center gap-1.5 text-[11px] font-bold">
                <span className="material-symbols-outlined animate-pulse text-[16px]">phone_in_talk</span> ĐIỀU PHỐI
                KHẨN CẤP
              </span>
              <span className="rounded bg-red-100 px-1.5 py-0.5 text-[9px] font-bold text-red-800">24/7</span>
            </div>
            <div className="mt-1 font-mono text-base font-extrabold tracking-wide text-red-600">1900 6829</div>
            <p className="mt-0.5 text-[10px] text-red-600/80">Trực tuyến hỗ trợ cứu hộ sự cố đèo dốc</p>
          </div>
          <div className="text-outline text-center text-[10px]">Bản dựng v2.8.4-PROD • TNV Portal</div>
        </div>
      </aside>

      {/* Main Wrapper */}
      <div className="flex min-w-0 flex-1 flex-col pl-64">
        {/* Top Header */}
        <header className="bg-surface-container-lowest/95 border-outline-variant/30 sticky top-0 z-40 flex h-16 items-center justify-between border-b px-6 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="relative w-80">
              <span className="material-symbols-outlined text-outline absolute top-1/2 left-3 -translate-y-1/2 text-[18px]">
                search
              </span>
              <input
                className="bg-surface-container-low hover:bg-surface-container-high/60 text-on-surface placeholder:text-outline border-outline-variant/30 focus:border-primary/50 focus:ring-primary/20 w-full rounded-lg border py-1.5 pr-3 pl-9 font-mono text-xs transition-all focus:bg-white focus:ring-2"
                placeholder="Tìm mã vận đơn, kiện hàng, địa điểm..."
                type="text"
                defaultValue="#WB-2024-NW08"
              />
            </div>
            <div className="text-on-surface-variant bg-surface-container-low border-outline-variant/20 hidden items-center gap-2 rounded-lg border px-3 py-1.5 text-xs xl:flex">
              <span className="material-symbols-outlined text-primary text-[16px]">schedule</span>
              <span>
                Ca trực: <strong>06:30 - 18:30 (Đội 01)</strong>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
              <span>Trực tuyến • GPS kết nối</span>
            </div>
            <button
              className="text-on-surface-variant hover:bg-surface-container-low relative rounded-lg p-2 transition-colors"
              title="Thông báo"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <div className="bg-outline-variant/40 h-6 w-px"></div>
            <div className="flex items-center gap-3 pl-1">
              <div className="bg-primary ring-primary/20 flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm ring-2">
                HL
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-on-surface text-xs font-bold">Lê Hoàng Long</span>
                  <span className="bg-primary/10 text-primary rounded px-1.5 py-0.5 font-mono text-[9px] font-bold">
                    TNV-VCH-88
                  </span>
                </div>
                <span className="text-on-surface-variant text-[11px]">
                  Vai trò: Tình nguyện viên Vận chuyển (Trưởng đoàn)
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Page Content */}
        <main className="space-y-6 p-6">
          {/* Page Hero & Action Bar */}
          <div className="bg-surface-container-lowest border-outline-variant/30 space-y-5 rounded-2xl border p-6 shadow-sm">
            <nav className="text-on-surface-variant flex items-center gap-2 text-xs font-medium">
              <span className="hover:text-primary cursor-pointer transition-colors">EduShare TNV</span>
              <span className="material-symbols-outlined text-outline text-[14px]">chevron_right</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Vận Chuyển & Giao Nhận</span>
              <span className="material-symbols-outlined text-outline text-[14px]">chevron_right</span>
              <span className="text-primary font-semibold">Xác Nhận Nhận Hàng Tại Kho</span>
            </nav>

            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h1 className="font-display text-on-surface text-2xl font-bold tracking-tight">
                    Xác Nhận Nhận Hàng & Kiểm Đếm Thiết Bị Xuất Kho
                  </h1>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500"></span>
                    Vận đơn: #WB-2024-NW08 • Ưu tiên Cấp 1 (Khẩn cấp)
                  </span>
                </div>
                <p className="text-on-surface-variant text-xs">
                  TNV tiến hành đối soát, kiểm tra 50 kiện thiết bị thực tế, quét mã niêm phong và ký số bàn giao với
                  Thủ kho trước khi xuất bãi.
                </p>
              </div>
            </div>

            <div className="border-outline-variant/20 bg-surface-container-low/50 flex flex-col items-stretch justify-between gap-3 rounded-xl border-t p-3 pt-3 md:flex-row md:items-center">
              <div className="text-on-surface flex items-center gap-2.5 text-xs">
                <div className="bg-primary/10 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-[18px]">warehouse</span>
                </div>
                <div>
                  <div className="text-on-surface font-semibold">
                    Kho xuất phát: <strong>Tổng Hub Kỹ Thuật Hà Nội #01</strong>
                  </div>
                  <div className="text-on-surface-variant font-mono text-[11px]">
                    Địa chỉ: Km12 Giải Phóng, Thanh Trì, TP. Hà Nội
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-2.5">
                <button
                  className="bg-surface-container-lowest hover:bg-surface-container text-on-surface border-outline-variant/40 inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors"
                  type="button"
                >
                  <span className="material-symbols-outlined text-primary text-[17px]">picture_as_pdf</span>
                  <span>In Phiếu Kiểm Đếm (PDF)</span>
                </button>
                <a
                  className="bg-error hover:bg-error/90 inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold text-white transition-all"
                  href="tel:19006829"
                >
                  <span className="material-symbols-outlined animate-pulse text-[17px]">phone_in_talk</span>
                  <span>Liên Hệ Điều Phối Kho (1900 6829)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bento Summary Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Col 1: Route */}
            <div className="bg-surface-container-lowest border-outline-variant/30 relative flex flex-col justify-between space-y-3 overflow-hidden rounded-2xl border p-5 shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-outline text-[11px] font-bold tracking-wider uppercase">
                    Lộ trình & Điểm đến
                  </span>
                  <span className="bg-primary/10 text-primary rounded px-2 py-0.5 font-mono text-[10px] font-bold">
                    310 KM
                  </span>
                </div>
                <div className="font-display text-on-surface flex items-center gap-2 text-base font-bold">
                  <span>Hà Nội</span>
                  <span className="material-symbols-outlined text-primary text-[18px]">trending_flat</span>
                  <span>Mường Lát, Thanh Hóa</span>
                </div>
                <div className="text-on-surface-variant flex items-start gap-1.5 pt-1 text-xs">
                  <span className="material-symbols-outlined text-tertiary mt-0.5 shrink-0 text-[17px]">pin_drop</span>
                  <span>
                    <strong>Đích nhận:</strong> Trường PTDTBT THCS Mường Lát, Huyện Mường Lát, Tỉnh Thanh Hóa
                  </span>
                </div>
              </div>
              <div className="text-on-surface-variant/80 border-outline-variant/20 flex items-center justify-between border-t pt-2 text-[11px]">
                <span>
                  Thời gian dự kiến: <strong>8 giờ di chuyển</strong>
                </span>
                <span className="text-primary font-semibold">Địa hình đèo dốc cấp 2</span>
              </div>
            </div>

            {/* Col 2: Vehicle */}
            <div className="bg-surface-container-lowest border-outline-variant/30 flex flex-col justify-between space-y-3 rounded-2xl border p-5 shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-outline text-[11px] font-bold tracking-wider uppercase">
                    Phương tiện & Tổ công tác
                  </span>
                  <span className="bg-tertiary/10 text-tertiary rounded px-2 py-0.5 text-[10px] font-bold">
                    3 TÌNH NGUYỆN VIÊN
                  </span>
                </div>
                <div className="font-display text-on-surface flex items-center gap-2 text-base font-bold">
                  <span className="material-symbols-outlined text-primary text-[20px]">directions_car</span>
                  <span>Bán tải Ford Ranger 29H-882.14</span>
                </div>
                <p className="text-on-surface-variant text-xs">
                  <strong>Tổ TNV áp tải:</strong> Lê Hoàng Long (Trưởng đoàn), Vũ Quốc Bảo (Kỹ thuật), Trần Mai Phương
                  (Logistics).
                </p>
              </div>
              <div className="text-on-surface-variant/80 border-outline-variant/20 flex items-center justify-between border-t pt-2 text-[11px]">
                <span>
                  Tải trọng thùng xe: <strong>Tối đa 750 kg</strong>
                </span>
                <span className="flex items-center gap-1 font-semibold text-emerald-700">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span> Đã kiểm định xe
                </span>
              </div>
            </div>

            {/* Col 3: Status */}
            <div className="bg-surface-container-lowest border-outline-variant/30 flex flex-col justify-between space-y-3 rounded-2xl border p-5 shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-outline text-[11px] font-bold tracking-wider uppercase">
                    Trạng thái vận chuyển
                  </span>
                  <span className="text-outline font-mono text-[10px]">Quy chuẩn RBAC</span>
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-900">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-amber-600"></span>
                    CHỜ LẤY HÀNG TẠI KHO
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="text-on-surface-variant text-xs">
                    Tổng trọng lượng: <strong className="text-on-surface text-sm">340 kg</strong>
                  </div>
                  <div className="text-on-surface-variant text-xs">
                    Số lượng: <strong className="text-primary text-sm font-bold">50 kiện</strong>
                  </div>
                </div>
              </div>
              <div className="text-on-surface-variant/80 border-outline-variant/20 flex items-center justify-between border-t pt-2 text-[11px]">
                <span>Seal niêm phong xe:</span>
                <span className="text-primary font-mono font-bold">#HN-8842-OK</span>
              </div>
            </div>
          </div>

          {/* Main Two-column */}
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
            {/* LEFT (7/12) */}
            <div className="space-y-6 lg:col-span-7">
              {/* Audit Progress & Scanner */}
              <div className="bg-surface-container-lowest border-outline-variant/30 space-y-5 rounded-2xl border p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-tertiary/10 text-tertiary flex h-10 w-10 items-center justify-center rounded-xl">
                      <span className="material-symbols-outlined text-[24px]">fact_check</span>
                    </div>
                    <div>
                      <h3 className="font-display text-on-surface text-base font-bold">
                        Tiến trình kiểm đếm tại cửa kho
                      </h3>
                      <p className="text-on-surface-variant text-xs">
                        50 / 50 Kiện hàng hợp lệ (100% khớp dữ liệu hệ thống xuất)
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-display text-tertiary text-2xl font-black">100%</span>
                    <div className="text-tertiary flex items-center justify-end gap-1 text-xs font-semibold">
                      <span className="material-symbols-outlined text-[15px]">check_circle</span> Hoàn tất kiểm đếm
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container h-3 w-full overflow-hidden rounded-full">
                  <div
                    className="bg-tertiary h-full rounded-full transition-all duration-500"
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <div className="bg-surface-container-low border-outline-variant/20 flex flex-col items-center gap-3 rounded-xl border p-3.5 sm:flex-row">
                  <div className="relative w-full flex-1">
                    <span className="material-symbols-outlined text-on-surface-variant absolute top-1/2 left-3 -translate-y-1/2 text-[18px]">
                      qr_code_scanner
                    </span>
                    <input
                      className="bg-surface-container-lowest text-on-surface border-outline-variant/30 focus:border-primary focus:ring-primary w-full rounded-lg border py-2 pr-3 pl-9 font-mono text-xs outline-none focus:ring-1"
                      readOnly
                      type="text"
                      value={scanInput}
                    />
                  </div>
                  <button
                    className="bg-primary hover:bg-primary-container flex w-full shrink-0 items-center justify-center gap-2 rounded-lg px-4 py-2 text-xs font-medium text-white shadow-sm transition-colors sm:w-auto"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">sensors</span>
                    <span>Quét Barcode / QR Tiếp</span>
                  </button>
                </div>
              </div>

              {/* Detailed Inventory */}
              <div className="bg-surface-container-lowest border-outline-variant/30 space-y-4 rounded-2xl border p-6 shadow-sm">
                <div className="border-outline-variant/20 flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">inventory_2</span>
                    <h3 className="font-display text-on-surface text-base font-bold">
                      Danh mục 50 kiện thiết bị bàn giao
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-surface-container text-on-surface-variant rounded px-2.5 py-0.5 font-mono text-xs font-medium">
                      Seal: #HN-8842-OK
                    </span>
                    <span className="text-on-surface-variant text-xs">
                      Tổng: <strong>340 kg</strong>
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Item 1 */}
                  <div className="bg-surface-container-low/70 hover:bg-surface-container-low border-outline-variant/20 space-y-2 rounded-xl border p-4 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-on-surface text-xs font-bold">30 Laptop Lenovo ThinkPad T480s</span>
                          <span className="bg-tertiary-fixed text-on-tertiary-fixed rounded px-2 py-0.5 text-[11px] font-bold">
                            Grade A
                          </span>
                          <span className="text-on-surface-variant text-xs">(Core i5 / 16GB / SSD 256GB)</span>
                        </div>
                        <div className="text-on-surface-variant text-xs">
                          Đã nạp hệ điều hành EduOS Linux & SGK số • Đóng gói: 30 thùng xốp chống sốc cá nhân • Tài trợ:
                          Tập đoàn FPT
                        </div>
                        <div className="text-primary font-mono text-xs font-medium">
                          Dải mã QR: #QR-EDUS-4801 → #QR-EDUS-4830
                        </div>
                      </div>
                      <span className="flex shrink-0 items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
                        <span className="material-symbols-outlined text-[15px]">done_all</span> Đã quét x30
                      </span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-surface-container-low/70 hover:bg-surface-container-low border-outline-variant/20 space-y-2 rounded-xl border p-4 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-on-surface text-xs font-bold">
                            20 Màn hình Dell Professional 24" P2419H
                          </span>
                          <span className="bg-tertiary-fixed text-on-tertiary-fixed rounded px-2 py-0.5 text-[11px] font-bold">
                            Grade A
                          </span>
                          <span className="text-on-surface-variant text-xs">(IPS Full HD)</span>
                        </div>
                        <div className="text-on-surface-variant text-xs">
                          Kèm chân đế xoay + cáp nguồn/HDMI zin • Đóng gói: Thùng carton 5 lớp nguyên niêm phong
                        </div>
                        <div className="text-primary font-mono text-xs font-medium">
                          Dải mã QR: #QR-EDUS-5101 → #QR-EDUS-5120
                        </div>
                      </div>
                      <span className="flex shrink-0 items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
                        <span className="material-symbols-outlined text-[15px]">done_all</span> Đã quét x20
                      </span>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-surface-container-low/70 hover:bg-surface-container-low border-outline-variant/20 space-y-2 rounded-xl border p-4 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-on-surface text-xs font-bold">
                            02 Switch Cisco Gigabit 24 Port + 300m Cáp mạng Cat6
                          </span>
                          <span className="bg-primary-fixed text-on-primary-fixed rounded px-2 py-0.5 text-[11px] font-bold">
                            Mới 100%
                          </span>
                        </div>
                        <div className="text-on-surface-variant text-xs">
                          Kèm kìm bấm mạng, hạt mạng & patch cord phụ kiện hoàn chỉnh phòng lab trường học
                        </div>
                      </div>
                      <span className="flex shrink-0 items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
                        <span className="material-symbols-outlined text-[15px]">done_all</span> Đã quét 01 bộ gộp
                      </span>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="bg-surface-container-low/70 hover:bg-surface-container-low border-outline-variant/20 space-y-2 rounded-xl border p-4 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-on-surface text-xs font-bold">10 Bộ lưu điện UPS Santak 1000VA</span>
                          <span className="bg-primary-fixed text-on-primary-fixed rounded px-2 py-0.5 text-[11px] font-bold">
                            Mới 100%
                          </span>
                          <span className="text-on-surface-variant text-xs">(Bảo vệ điện lưới vùng cao)</span>
                        </div>
                        <div className="text-on-surface-variant text-xs">
                          Mã kiện phụ kiện: #HN-8842-UPS • Kèm cáp biến áp dự phòng
                        </div>
                      </div>
                      <span className="flex shrink-0 items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
                        <span className="material-symbols-outlined text-[15px]">done_all</span> Đã quét x10
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photos */}
              <div className="bg-surface-container-lowest border-outline-variant/30 space-y-4 rounded-2xl border p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">photo_camera</span>
                    <h3 className="font-display text-on-surface text-base font-bold">
                      Ảnh Chụp Thực Tế Bốc Xếp & Niêm Phong Xe Bán Tải
                    </h3>
                  </div>
                  <span className="text-outline text-xs font-medium">Đã đóng dấu watermark tự động</span>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="group bg-surface-container border-outline-variant/20 relative overflow-hidden rounded-xl border shadow-sm">
                    <img
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                      alt="Xếp dỡ pallet"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-3 text-white">
                      <div className="flex items-center gap-1.5 text-xs font-semibold">
                        <span className="material-symbols-outlined text-tertiary-fixed text-[15px]">verified</span>
                        Xếp dỡ pallet & chằng đai an toàn
                      </div>
                      <div className="font-mono text-[11px] opacity-90">07:15:20 • 24/10/2024 • Kho HN Hub-01</div>
                    </div>
                  </div>
                  <div className="group bg-surface-container border-outline-variant/20 relative overflow-hidden rounded-xl border shadow-sm">
                    <img
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                      alt="Niêm phong xe"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-3 text-white">
                      <div className="flex items-center gap-1.5 text-xs font-semibold">
                        <span className="material-symbols-outlined text-[15px] text-emerald-300">lock</span>
                        Phủ bạt chống thấm & kẹp chì niêm phong xe
                      </div>
                      <div className="font-mono text-[11px] opacity-90">
                        Seal: VN-SEAL-8842 • GPS: 21.0285° N, 105.7823° E
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT (5/12) */}
            <div className="space-y-6 lg:col-span-5">
              {/* Rbac Policy */}
              <div className="bg-surface-container-low border-outline-variant/30 space-y-3 rounded-2xl border p-5 shadow-sm">
                <div className="text-primary font-display flex items-center gap-2 text-sm font-bold">
                  <span className="material-symbols-outlined text-[20px]">policy</span>
                  <span>QUY CHUẨN RBAC LẤY HÀNG (DOCUMENT_72)</span>
                </div>
                <div className="text-on-surface-variant space-y-2 text-xs leading-relaxed">
                  <p>
                    <strong className="text-on-surface">Quyền TNV:</strong> Xác nhận đã nhận đủ hàng và bảo quản kiện
                    hàng an toàn suốt lộ trình đến điểm trường.
                  </p>
                  <p>
                    <strong className="text-error">Ràng buộc cấm:</strong> Tình nguyện viên không tạo vận đơn, không sửa
                    phiếu, không nhập kho.
                  </p>
                  <p>
                    <strong className="text-tertiary">Cơ chế tự động:</strong> Khi bấm xác nhận thành công, trạng thái
                    vận đơn tự động chuyển thành{" "}
                    <span className="bg-surface-container-highest text-on-surface rounded px-1.5 py-0.5 font-mono text-xs font-bold">
                      IN-TRANSIT
                    </span>{" "}
                    (Đang di chuyển).
                  </p>
                </div>
              </div>

              {/* Crew Roster */}
              <div className="bg-surface-container-lowest border-outline-variant/30 space-y-4 rounded-2xl border p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-on-surface text-sm font-bold tracking-wide uppercase">
                    TỔ TNV ÁP TẢI VẬN ĐƠN (3 THÀNH VIÊN)
                  </h3>
                  <span className="text-outline font-mono text-[10px]">waybill_volunteers</span>
                </div>
                <div className="space-y-2.5">
                  <div className="bg-surface-container-low border-outline-variant/20 flex items-center justify-between rounded-xl border p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary ring-primary/20 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ring-2">
                        HL
                      </div>
                      <div>
                        <div className="text-on-surface text-xs font-bold">Lê Hoàng Long (Bạn)</div>
                        <div className="text-on-surface-variant text-[11px]">Trưởng đoàn • Lái chính (29H-882.14)</div>
                      </div>
                    </div>
                    <span className="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 text-[11px] font-bold">
                      Ký xác nhận
                    </span>
                  </div>
                  <div className="bg-surface-container-low/60 border-outline-variant/10 flex items-center justify-between rounded-xl border p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary-container text-on-secondary-container flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold">
                        QB
                      </div>
                      <div>
                        <div className="text-on-surface text-xs font-bold">Vũ Quốc Bảo</div>
                        <div className="text-on-surface-variant text-[11px]">Kỹ thuật viên IT & Kiểm đếm thiết bị</div>
                      </div>
                    </div>
                    <a className="text-primary font-mono text-[11px] hover:underline" href="tel:0988234888">
                      0988.234.888
                    </a>
                  </div>
                  <div className="bg-surface-container-low/60 border-outline-variant/10 flex items-center justify-between rounded-xl border p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary-container text-on-secondary-container flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold">
                        MP
                      </div>
                      <div>
                        <div className="text-on-surface text-xs font-bold">Trần Mai Phương</div>
                        <div className="text-on-surface-variant text-[11px]">Logistics & Giao tiếp sư phạm</div>
                      </div>
                    </div>
                    <a className="text-primary font-mono text-[11px] hover:underline" href="tel:0905123999">
                      0905.123.999
                    </a>
                  </div>
                </div>
              </div>

              {/* Dual E-signatures & Submission */}
              <div className="bg-surface-container-lowest border-outline-variant/30 space-y-5 rounded-2xl border p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="font-display text-on-surface flex items-center gap-2 text-sm font-bold">
                    <span className="material-symbols-outlined text-primary text-[20px]">draw</span>
                    <span>CHỮ KÝ SỐ GIAO NHẬN TẠI KHO</span>
                  </div>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                    Thủ kho đã ký
                  </span>
                </div>

                {/* Signature 1: Warehouse Keeper */}
                <div className="bg-surface-container-low border-outline-variant/20 space-y-2 rounded-xl border p-3.5">
                  <div className="text-on-surface-variant flex items-center justify-between text-xs">
                    <span className="font-bold">ĐẠI DIỆN THỦ KHO XUẤT</span>
                    <span className="font-mono text-[10px]">TIMESTAMP: 24/10/2024 07:18:02</span>
                  </div>
                  <div className="bg-surface-container-lowest border-outline-variant/20 relative flex h-20 items-center justify-between overflow-hidden rounded-lg border px-4">
                    <svg
                      className="text-primary h-12 w-36"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      viewBox="0 0 160 50"
                    >
                      <path d="M10,35 C30,10 40,45 60,20 C75,5 90,40 110,25 C125,15 135,35 150,20"></path>
                    </svg>
                    <div className="flex flex-col items-end">
                      <span className="text-on-surface text-xs font-bold">Phạm Hoàng Nam</span>
                      <span className="text-tertiary text-[10px] font-semibold uppercase">
                        KTV Trưởng • Đã xác thực OTP
                      </span>
                    </div>
                    <div className="pointer-events-none absolute top-2 right-24 flex h-14 w-14 rotate-[-15deg] items-center justify-center rounded-full border-2 border-red-500/40 text-[8px] font-bold text-red-500/40 uppercase">
                      ĐÃ XUẤT KHO
                    </div>
                  </div>
                </div>

                {/* Signature 2: Volunteer Leader */}
                <div className="bg-surface-container-low border-outline-variant/20 space-y-2 rounded-xl border p-3.5">
                  <div className="text-on-surface-variant flex items-center justify-between text-xs">
                    <span className="font-bold">ĐẠI DIỆN TỔ TNV NHẬN BÀN GIAO</span>
                    <span className="text-primary cursor-pointer text-xs font-semibold hover:underline">Ký lại</span>
                  </div>
                  <div className="bg-surface-container-lowest border-outline-variant/20 relative flex h-20 items-center justify-between overflow-hidden rounded-lg border px-4">
                    <svg
                      className="text-on-surface h-12 w-36"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      viewBox="0 0 160 50"
                    >
                      <path d="M12,28 C25,12 35,42 55,18 C70,2 85,38 105,15 C120,30 140,10 152,32"></path>
                    </svg>
                    <div className="flex flex-col items-end">
                      <span className="text-on-surface text-xs font-bold">Lê Hoàng Long</span>
                      <span className="text-primary text-[10px] font-semibold uppercase">Trưởng đoàn áp tải</span>
                    </div>
                  </div>
                </div>

                {/* Acceptance Checkbox */}
                <label className="flex cursor-pointer items-start gap-3 rounded p-2 select-none">
                  <input
                    checked={confirmed}
                    onChange={(e) => setConfirmed(e.target.checked)}
                    className="text-primary focus:ring-primary accent-primary mt-0.5 h-4 w-4 rounded"
                    type="checkbox"
                  />
                  <span className="text-on-surface text-xs leading-snug">
                    Tôi cam kết đã kiểm đếm đủ 50 kiện thiết bị theo biên bản, chì niêm phong xe còn nguyên vẹn và chịu
                    trách nhiệm áp tải an toàn đến trường PTDTBT THCS Mường Lát.
                  </span>
                </label>

                {/* CTA Button */}
                <button
                  className="bg-primary hover:bg-primary-container font-display flex w-full transform items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg active:scale-[0.99]"
                  onClick={handleConfirmPickup}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[22px]">local_shipping</span>
                  <span>Xác Nhận Đã Nhận Đủ Hàng & Kích Hoạt Chuyến Đi</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="bg-surface-container-lowest border-outline-variant/30 w-full max-w-md space-y-4 rounded-2xl border p-6 text-center shadow-2xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h3 className="font-display text-on-surface text-lg font-bold">Kích Hoạt Chuyến Đi Thành Công!</h3>
            <p className="text-on-surface-variant text-xs leading-relaxed">
              Vận đơn <strong>#WB-2024-NW08</strong> đã chính thức chuyển sang trạng thái <strong>IN-TRANSIT</strong>.
              Toàn bộ 50 kiện thiết bị đã được kích hoạt theo dõi lộ trình GPS thời gian thực.
            </p>
            <div className="bg-surface-container-low text-on-surface border-outline-variant/20 space-y-1.5 rounded-xl border p-3 text-left text-xs">
              <div>
                • <strong>Biên bản điện tử:</strong> POD-2024-8842-SIGNED.pdf
              </div>
              <div>
                • <strong>Hotline cứu hộ đường đèo:</strong> 1900 6829
              </div>
              <div>
                • <strong>Giám sát lộ trình:</strong> Đang đồng bộ vệ tinh GPS
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                className="bg-primary hover:bg-primary-container flex-1 rounded-xl py-2.5 text-xs font-medium text-white shadow-sm transition-colors"
                onClick={() => setIsModalOpen(false)}
                type="button"
              >
                Chuyển Sang Bản Đồ GPS Tuyến Đường
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
