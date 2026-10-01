import React from "react";
import { Link } from "react-router-dom";

export default function SchoolDonationRequestPage() {
  const handleScrollToPoD = (e) => {
    e.preventDefault();
    const target = document.getElementById("pod-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-background font-body-md text-on-surface antialiased flex">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto">
        <div className="p-space-lg flex flex-col gap-space-md">
          <div className="flex items-center gap-space-sm">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary font-headline-md">
              <span className="material-symbols-outlined text-[24px]">school</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-sm text-headline-sm text-primary">EduShare</span>
                <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-primary font-bold">VN</span>
              </div>
              <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant uppercase">VIETNAM CORE</span>
            </div>
          </div>
          <div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Trực tuyến • 63 Tỉnh Thành</span>
          </div>
          <nav className="mt-space-md flex flex-col gap-space-xs">
            <div className="px-space-sm pt-space-xs pb-1 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">CỔNG TRƯỜNG HỌC</div>
            
            <Link className="flex items-center gap-space-sm px-space-md py-2.5 rounded-lg font-body-md text-body-md bg-primary text-on-primary font-semibold shadow-sm transition-colors" to="/school/request">
              <span className="material-symbols-outlined text-[20px] text-on-primary">assignment_turned_in</span>
              <span>Yêu cầu tài trợ</span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-md py-2.5 rounded-lg font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" to="#">
              <span className="material-symbols-outlined text-[20px]">groups</span>
              <span>Học sinh tiếp nhận</span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-md py-2.5 rounded-lg font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" to="#">
              <span className="material-symbols-outlined text-[20px]">verified</span>
              <span>Biên bản bàn giao (PoD)</span>
            </Link>
            
            <div className="px-space-sm pt-space-md pb-1 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">KHO &amp; TIẾP NHẬN</div>
            
            <Link className="flex items-center gap-space-sm px-space-md py-2.5 rounded-lg font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" to="#">
              <span className="material-symbols-outlined text-[20px]">inventory_2</span>
              <span>Danh mục thiết bị phân bổ</span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-md py-2.5 rounded-lg font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" to="#">
              <span className="material-symbols-outlined text-[20px]">local_shipping</span>
              <span>Lịch sử đợt giao</span>
            </Link>
          </nav>
        </div>
        <div className="p-space-md m-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs text-tertiary font-label-md text-label-md">
            <span className="material-symbols-outlined text-[16px]">shield_with_heart</span>
            <span>Hỗ trợ kỹ thuật 24/7</span>
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant">Sở GD&amp;ĐT Thanh Hóa • Hotline: 1800 6868</div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="pl-72 flex-1 flex flex-col min-h-screen">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-gutter-desktop">
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">home</span>
              <span>/</span>
              <span>Trường học</span>
              <span>/</span>
              <span className="text-on-surface font-semibold">Tổng quan</span>
            </div>
            <div className="relative w-80">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">search</span>
              <input className="w-full pl-9 pr-space-md py-1.5 rounded bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-colors" placeholder="Tìm thiết bị, biên bản, học sinh..." type="search" />
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-secondary-container font-label-md text-label-md text-on-secondary-container">
              <span className="material-symbols-outlined text-[16px]">badge</span>
              <span>Vai trò: Đại diện Trường học (BGH)</span>
            </div>
            <button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error"></span>
            </button>
            <div className="flex items-center gap-space-sm pl-space-xs">
              <div className="flex flex-col text-right">
                <span className="font-headline-sm text-body-md text-on-surface leading-tight font-semibold">Thầy Hà Văn Tiêu</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">HT PTDTBT THCS Mường Lát</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        <main className="relative pt-16 bg-background w-full px-gutter-desktop min-h-screen">
          <div className="flex flex-col w-full">
            {/* Top Command & Status Ribbon */}
            <section className="w-full pb-space-lg mt-space-md">
              {/* Breadcrumb & Direct Action Bar */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-md">
                <div>
                  <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                    <span className="text-primary font-semibold">Cổng Trường Học</span>
                    <span>/</span>
                    <span>Yêu Cầu Tài Trợ Thiết Bị Tin Học</span>
                    <span>/</span>
                    <span className="text-on-surface font-code-num text-code-num font-semibold text-primary">#SCH-ML-2024-08</span>
                  </div>
                  <div className="flex items-center gap-space-sm flex-wrap">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                      Trường PTDTBT THCS Mường Lát
                    </h1>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-md text-label-md font-semibold">
                      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                      Mã định danh: ML-THCS-0104
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-low text-tertiary font-label-md text-label-md font-semibold">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      Đã Duyệt Phân Bổ &amp; Đang Vận Chuyển
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm">
                  <button className="px-space-md py-2.5 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-all flex items-center gap-2 shadow-sm font-label-md text-label-md font-medium" onClick={() => window.print()} type="button">
                    <span className="material-symbols-outlined text-[18px]">print</span>
                    <span>In Phiếu Theo Dõi</span>
                  </button>
                  <a className="px-space-md py-2.5 rounded bg-primary text-on-primary hover:bg-primary-container transition-all flex items-center gap-2 shadow-sm font-label-md text-label-md font-medium" href="#pod-section" onClick={handleScrollToPoD}>
                    <span className="material-symbols-outlined text-[18px]">ink_pen</span>
                    <span>Biên Bản Bàn Giao (PoD)</span>
                  </a>
                </div>
              </div>

              {/* National Queue & Dispatch Telemetry Card */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                <div className="flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[26px]">format_list_numbered</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Hàng Chờ Quốc Gia</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="font-headline-md text-headline-md text-primary font-bold">#12</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-code-num">/ 148 đơn đang thẩm định</span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Thời gian chờ dự kiến: 0 ngày</span>
                  </div>
                </div>
                <div className="flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-[26px]">local_shipping</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Mã Vận Đơn Phụ Trách</span>
                    <span className="font-headline-sm text-headline-sm font-code-num text-on-surface font-semibold mt-0.5">#WB-2024-NW08</span>
                    <span className="font-body-sm text-body-sm text-tertiary font-medium">Xe bán tải 29C-882.10</span>
                  </div>
                </div>
                <div className="flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-[26px]">desktop_windows</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Thiết Bị Cấp Phát</span>
                    <span className="font-headline-md text-headline-md text-on-surface font-bold mt-0.5">37 Danh mục</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">25 PC, 10 UPS, 2 Switch</span>
                  </div>
                </div>
                <div className="flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[26px]">schedule</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Thời Gian Dự Kiến Tới</span>
                    <span className="font-headline-sm text-headline-sm font-code-num text-primary font-bold mt-0.5">16:30 Chiều nay</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">24/10/2024 (Thời gian thực)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Documentation Section: Two Certificates Required */}
            <section className="w-full pb-space-lg">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md gap-space-sm">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">policy</span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Hồ Sơ Pháp Lý Đính Kèm</h2>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Quy định phân bổ tài trợ giáo dục: Hồ sơ thẩm định bắt buộc có đủ 02 văn bản công chứng gốc. Khi hồ sơ cần chỉnh sửa hoặc bổ sung, nhà trường phải thực hiện nộp và cập nhật đồng thời cả hai văn bản.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low text-tertiary font-label-md text-label-md font-semibold self-start md:self-auto">
                    <span className="material-symbols-outlined text-[16px]">task_alt</span>
                    2/2 Giấy Xác Nhận Hợp Lệ
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-sm">
                  {/* Certificate 1: School Needs Cert */}
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
                    <div className="flex items-start gap-space-md">
                      <div className="w-12 h-14 rounded-lg bg-surface-container-lowest flex flex-col items-center justify-center text-primary shadow-sm flex-shrink-0">
                        <span className="material-symbols-outlined text-[24px]">description</span>
                        <span className="font-code-num text-label-sm font-bold mt-0.5">PDF</span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Giấy xác nhận 1 (Bắt buộc)</span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate mt-0.5">
                          Giấy xác nhận nhu cầu của Nhà trường
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Số công văn: 84/CV-THCSML • Ký duyệt bởi: Thầy Hà Văn Tiêu • Mộc đỏ nhà trường đã xác nhận.
                        </p>
                        <div className="flex items-center gap-space-sm mt-2 text-on-surface-variant font-code-num text-label-sm">
                          <span>Dung lượng: 2.4 MB</span>
                          <span>•</span>
                          <span>Ngày ký: 12/10/2024</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-sm mt-space-md pt-space-sm">
                      <button className="px-space-md py-2 rounded bg-surface-container-lowest text-primary font-label-md text-label-md font-medium hover:bg-surface-container transition-all flex items-center gap-1.5 shadow-sm" type="button">
                        <span className="material-symbols-outlined text-[16px]">download</span>
                        <span>Tải xuống xem</span>
                      </button>
                      <button className="px-space-md py-2 rounded bg-surface-container-high text-on-surface font-label-md text-label-md font-medium hover:bg-surface-container transition-all flex items-center gap-1.5" type="button">
                        <span className="material-symbols-outlined text-[16px]">upload_file</span>
                        <span>Cập nhật file</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Certificate 2: Local People's Committee Cert */}
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
                    <div className="flex items-start gap-space-md">
                      <div className="w-12 h-14 rounded-lg bg-surface-container-lowest flex flex-col items-center justify-center text-tertiary shadow-sm flex-shrink-0">
                        <span className="material-symbols-outlined text-[24px]">verified_user</span>
                        <span className="font-code-num text-label-sm font-bold mt-0.5">PDF</span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-sm text-label-sm text-tertiary uppercase font-bold tracking-wider">Giấy xác nhận 2 (Bắt buộc)</span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate mt-0.5">
                          Giấy xác nhận UBND Xã Tam Chung - Mường Lát
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Số xác nhận: 142/UBND-VX • Chứng thực hoàn cảnh địa bàn biên giới đặc biệt khó khăn, thiếu thiết bị học tin.
                        </p>
                        <div className="flex items-center gap-space-sm mt-2 text-on-surface-variant font-code-num text-label-sm">
                          <span>Dung lượng: 3.1 MB</span>
                          <span>•</span>
                          <span>Ngày xác nhận: 14/10/2024</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-sm mt-space-md pt-space-sm">
                      <button className="px-space-md py-2 rounded bg-surface-container-lowest text-tertiary font-label-md text-label-md font-medium hover:bg-surface-container transition-all flex items-center gap-1.5 shadow-sm" type="button">
                        <span className="material-symbols-outlined text-[16px]">download</span>
                        <span>Tải xuống xem</span>
                      </button>
                      <button className="px-space-md py-2 rounded bg-surface-container-high text-on-surface font-label-md text-label-md font-medium hover:bg-surface-container transition-all flex items-center gap-1.5" type="button">
                        <span className="material-symbols-outlined text-[16px]">upload_file</span>
                        <span>Cập nhật file</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Synchronous Update Notice */}
                <div className="mt-space-md p-space-sm rounded-lg bg-secondary-container flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[20px] text-on-secondary-container flex-shrink-0">info</span>
                  <span className="font-body-sm text-body-sm text-on-secondary-container">
                    <strong className="font-semibold">Lưu ý quản trị viên:</strong> Hệ thống kích hoạt khóa toàn vẹn tài trợ. Nếu nhà trường nộp bản thay thế cho Giấy xác nhận 1 hoặc Giấy xác nhận 2, cả hai tệp phải được đính kèm và ký duyệt lại cùng lúc trước khi chuyển trạng thái sang thẩm định lại.
                  </span>
                </div>
              </div>
            </section>

            {/* Live Logistics & Real-Time Transit Tracking */}
            <section className="w-full pb-space-lg">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md gap-space-sm">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">route</span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Theo Dõi Đợt Giao Hàng &amp; Vận Đơn</h2>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Vận chuyển bởi Đội Tình Nguyện Viên EduShare Care Global • Chuyến vận tải số 08 cung Tây Bắc
                    </p>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-high font-code-num text-body-sm font-semibold text-primary">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-ping"></span>
                      GPS: 20.505°N, 104.622°E (Thời gian thực)
                    </div>
                  </div>
                </div>
                {/* Stepper / Route Timeline */}
                <div className="py-space-md">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md relative">
                    {/* Step 1 Completed */}
                    <div className="flex flex-col gap-2 p-space-md rounded-xl bg-surface-container-low">
                      <div className="flex items-center justify-between">
                        <span className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary">
                          <span className="material-symbols-outlined text-[18px]">check</span>
                        </span>
                        <span className="font-code-num text-label-sm text-tertiary font-semibold">05:30 • 24/10</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-1">Kho Tổng Hà Nội</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Đã kiểm định Grade A, dán nhãn niêm phong QR, bốc xếp lên xe bán tải chuyên dụng.</span>
                    </div>
                    {/* Step 2 Completed */}
                    <div className="flex flex-col gap-2 p-space-md rounded-xl bg-surface-container-low">
                      <div className="flex items-center justify-between">
                        <span className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary">
                          <span className="material-symbols-outlined text-[18px]">check</span>
                        </span>
                        <span className="font-code-num text-label-sm text-tertiary font-semibold">10:15 • 24/10</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-1">Trạm Hòa Bình - Mai Châu</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Kiểm tra gia cố thùng xốp chống ẩm, kiểm tra tình trạng sốc nhiệt thiết bị điện tử.</span>
                    </div>
                    {/* Step 3 Active / In Transit */}
                    <div className="flex flex-col gap-2 p-space-md rounded-xl bg-surface-container ring-2 ring-primary">
                      <div className="flex items-center justify-between">
                        <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
                          <span className="material-symbols-outlined text-[18px]">directions_car</span>
                        </span>
                        <span className="font-code-num text-label-sm text-primary font-bold">14:40 • ĐANG DI CHUYỂN</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-primary font-semibold mt-1">Vượt Đèo Mường Lát</span>
                      <span className="font-body-sm text-body-sm text-on-surface">Đoàn đang di chuyển qua dốc Pù Nhi, cách trường PTDTBT 18km. Thời tiết tạnh ráo, xe lăn bánh an toàn.</span>
                    </div>
                    {/* Step 4 Future */}
                    <div className="flex flex-col gap-2 p-space-md rounded-xl bg-surface-container-low opacity-75">
                      <div className="flex items-center justify-between">
                        <span className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
                          <span className="material-symbols-outlined text-[18px]">school</span>
                        </span>
                        <span className="font-code-num text-label-sm text-on-surface-variant font-semibold">Dự kiến 16:30</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-1">Bàn Giao Tại Trường</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Mở thùng kiểm thử 25 máy cùng BGH, ký điện tử biên bản bàn giao PoD và chụp ảnh thực địa.</span>
                    </div>
                  </div>
                </div>
                {/* Logistics Team & Vehicle Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-sm">
                  <div className="p-space-md rounded-xl bg-surface-container-low flex items-center gap-space-md">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-sm">
                      LH
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold">Trưởng Đoàn Vận Chuyển</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Lê Hoàng Long</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-code-num">SĐT: 0914 382 991 (Viber/Zalo)</span>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low flex items-center gap-space-md">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-headline-sm">
                      VB
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Kỹ Thuật Viên Đi Kèm</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Vũ Quốc Bảo</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-code-num">Kỹ sư mạng &amp; Cài đặt EduOS</span>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Phương Tiện &amp; Tải Trọng</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Bán tải Ford Ranger 4x4</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-code-num">BKS: 29C-882.10 • 780 kg hàng</span>
                    </div>
                    <a className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-all" href="tel:0914382991">
                      <span className="material-symbols-outlined text-[20px]">call</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Allocated Equipment Grid with Serial QR Identification */}
            <section className="w-full pb-space-lg">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md gap-space-sm">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">inventory</span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Danh Mục Thiết Bị Phân Bổ &amp; Mã QR Định Danh</h2>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Toàn bộ linh kiện đã được thẩm định chất lượng Grade A tại Lab kiểm định EduShare Hà Nội trước khi xuất kho.
                    </p>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <div className="relative w-64">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">qr_code_scanner</span>
                      <input className="w-full pl-9 pr-3 py-1.5 rounded bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container transition-colors" placeholder="Tìm theo mã QR, Serial..." type="text" />
                    </div>
                    <button className="px-space-md py-2 rounded bg-surface-container-high text-primary font-label-md text-label-md font-medium hover:bg-surface-container transition-all flex items-center gap-1.5" type="button">
                      <span className="material-symbols-outlined text-[16px]">file_download</span>
                      <span>Xuất Danh Sách QR</span>
                    </button>
                  </div>
                </div>
                {/* Equipment Table */}
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        <th className="py-3 px-space-md rounded-l">Mã Thiết Bị / QR</th>
                        <th className="py-3 px-space-md">Chủng Loại &amp; Cấu Hình Chi Tiết</th>
                        <th className="py-3 px-space-md text-center">Số Lượng</th>
                        <th className="py-3 px-space-md">Tiêu Chuẩn Kỹ Thuật</th>
                        <th className="py-3 px-space-md">Mã Dải Định Danh</th>
                        <th className="py-3 px-space-md text-right rounded-r">Tra Cứu</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container-low font-body-md text-body-md">
                      {/* Item 1: Desktop PCs */}
                      <tr className="hover:bg-surface-container-low/60 transition-colors">
                        <td className="py-space-md px-space-md font-code-num text-code-num text-primary font-semibold align-top">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary">
                              <span className="material-symbols-outlined text-[18px]">desktop_windows</span>
                            </div>
                            <div>
                              <div>#CAT-PC-01</div>
                              <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">25 Bộ đồng bộ</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-space-md px-space-md">
                          <div className="font-headline-sm text-body-md font-semibold text-on-surface">HP ProDesk 400 G6 Microtower</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                            Intel Core i3-10100 (4C/8T 3.6GHz) • RAM 8GB DDR4 • SSD 256GB NVMe siêu tốc
                          </div>
                          <div className="font-body-sm text-body-sm text-primary mt-0.5">
                            Màn hình HP P22v G4 21.5 inch Full HD (1920x1080), Bàn phím + Chuột quang đồng bộ
                          </div>
                        </td>
                        <td className="py-space-md px-space-md text-center font-headline-sm text-headline-sm font-code-num font-bold text-on-surface align-top">
                          25
                        </td>
                        <td className="py-space-md px-space-md align-top">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container text-tertiary font-label-md text-label-md font-medium">
                            <span className="material-symbols-outlined text-[14px]">verified</span>
                            Grade A Refurbished
                          </span>
                          <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Đã test 72h liên tục</div>
                        </td>
                        <td className="py-space-md px-space-md font-code-num text-code-num text-on-surface align-top">
                          <div className="font-semibold text-primary">#QR-PC-ML01 → #QR-PC-ML25</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">Serials HP Care Tagged</div>
                        </td>
                        <td className="py-space-md px-space-md text-right align-top">
                          <button className="px-3 py-1.5 rounded bg-surface-container text-primary font-label-md text-label-md font-semibold hover:bg-primary hover:text-on-primary transition-all" type="button">
                            Xem 25 QR
                          </button>
                        </td>
                      </tr>
                      {/* Item 2: UPS Units */}
                      <tr className="hover:bg-surface-container-low/60 transition-colors">
                        <td className="py-space-md px-space-md font-code-num text-code-num text-primary font-semibold align-top">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-primary">
                              <span className="material-symbols-outlined text-[18px]">bolt</span>
                            </div>
                            <div>
                              <div>#CAT-UPS-02</div>
                              <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">10 Bộ lưu điện</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-space-md px-space-md">
                          <div className="font-headline-sm text-body-md font-semibold text-on-surface">Bộ Lưu Điện Santak Blazer 1000E Pro (1000VA / 600W)</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                            Bảo vệ chống sụt áp đột ngột vùng cao, ổn áp tự động AVR, Ắc quy mới 100%
                          </div>
                          <div className="font-body-sm text-body-sm text-tertiary mt-0.5">
                            Thời gian lưu điện duy trì: 20-30 phút cho 2-3 PC/bộ
                          </div>
                        </td>
                        <td className="py-space-md px-space-md text-center font-headline-sm text-headline-sm font-code-num font-bold text-on-surface align-top">
                          10
                        </td>
                        <td className="py-space-md px-space-md align-top">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container text-tertiary font-label-md text-label-md font-medium">
                            <span className="material-symbols-outlined text-[14px]">battery_charging_full</span>
                            Ắc quy New 100%
                          </span>
                          <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Chứng chỉ an toàn PCCC</div>
                        </td>
                        <td className="py-space-md px-space-md font-code-num text-code-num text-on-surface align-top">
                          <div className="font-semibold text-primary">#QR-UPS-ML01 → #QR-UPS-ML10</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">Đã dán tem bảo hành 24T</div>
                        </td>
                        <td className="py-space-md px-space-md text-right align-top">
                          <button className="px-3 py-1.5 rounded bg-surface-container text-primary font-label-md text-label-md font-semibold hover:bg-primary hover:text-on-primary transition-all" type="button">
                            Xem 10 QR
                          </button>
                        </td>
                      </tr>
                      {/* Item 3: Network Switches */}
                      <tr className="hover:bg-surface-container-low/60 transition-colors">
                        <td className="py-space-md px-space-md font-code-num text-code-num text-primary font-semibold align-top">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary">
                              <span className="material-symbols-outlined text-[18px]">hub</span>
                            </div>
                            <div>
                              <div>#CAT-NET-03</div>
                              <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">Thiết bị mạng</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-space-md px-space-md">
                          <div className="font-headline-sm text-body-md font-semibold text-on-surface">Switch TP-Link TL-SG1024D 24 Cổng Gigabit + Cuộn cáp Cat6</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                            Băng thông chuyển mạch 48Gbps, vỏ thép gắn tủ rack, kèm 300m cáp AMP Cat6 UTP
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                            Đã bấm sẵn 50 đầu nối RJ45 bọc kim loại chống oxy hóa sương muối vùng núi
                          </div>
                        </td>
                        <td className="py-space-md px-space-md text-center font-headline-sm text-headline-sm font-code-num font-bold text-on-surface align-top">
                          02
                        </td>
                        <td className="py-space-md px-space-md align-top">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container text-tertiary font-label-md text-label-md font-medium">
                            <span className="material-symbols-outlined text-[14px]">speed</span>
                            Gigabit Enterprise
                          </span>
                          <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Đạt chuẩn ISO/IEC 11801</div>
                        </td>
                        <td className="py-space-md px-space-md font-code-num text-code-num text-on-surface align-top">
                          <div className="font-semibold text-primary">#QR-NET-ML01 / 02</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">Kèm sơ đồ mạng phòng máy</div>
                        </td>
                        <td className="py-space-md px-space-md text-right align-top">
                          <button className="px-3 py-1.5 rounded bg-surface-container text-primary font-label-md text-label-md font-semibold hover:bg-primary hover:text-on-primary transition-all" type="button">
                            Xem 02 QR
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Proof of Delivery (PoD) & Digital Signature Section */}
            <section className="w-full pb-space-lg" id="pod-section">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md gap-space-sm">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">verified</span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Biên Bản Bàn Giao (PoD) &amp; Ký Số Điện Tử</h2>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Xác thực giao nhận trực tiếp giữa Đoàn Thiện Nguyện EduShare và Ban Giám Hiệu Trường PTDTBT THCS Mường Lát.
                    </p>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <span className="font-label-sm text-label-sm uppercase px-2.5 py-1 rounded bg-surface-container-high text-primary font-semibold">
                      Biên bản số: POD-2024-ML08
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mt-space-sm">
                  {/* Visual Verification Photo */}
                  <div className="lg:col-span-6 flex flex-col gap-space-sm">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                      Ảnh chụp nghiệm thu thực địa với học sinh và phòng máy
                    </span>
                    <div className="relative w-full rounded-xl overflow-hidden shadow-sm bg-surface-container-low">
                      <img alt="Nghiệm thu thực địa" className="w-full h-80 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzuWQEGBBsAV57wwKBNzn2ZJUVCXffWBT0ya8zLluNwuW9vffIkxWF4h0BUkovDL0yJnlZ5qR46V0cPqAjIy5gEmGB0tQNeHFfUpmx7uyXbN_7WABP8Bu41CSWbtFB0xFfG2SqO5IFRyQyWmrKmJEDTWVTwCuE2JEy0w5Aq4erTH7zEcYVz9iwOsJP1-_pRHH5uOBGdIEUp5CJ4EyKEqdZxV-zGCvcw41kV44sHHYjKwg0NM9JY68t3Q" />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-on-surface/80 via-on-surface/40 to-transparent p-space-md text-on-primary">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-headline-sm text-headline-sm font-semibold text-on-primary">Phòng Tin học Điểm trường Bản Lát</div>
                            <div className="font-body-sm text-body-sm text-on-primary/80 font-code-num">20.505°N, 104.622°E • 24/10/2024</div>
                          </div>
                          <span className="px-2.5 py-1 rounded bg-tertiary text-on-tertiary font-label-sm text-label-sm font-semibold">Ảnh Chống Gian Lận (PoD)</span>
                        </div>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                      * Ảnh xác thực tự động gắn tem thời gian và tọa độ vệ tinh GPS, được lưu trữ vĩnh viễn trên sổ cái minh bạch của Bộ GD&amp;ĐT và Mạng lưới EduShare.
                    </p>
                  </div>
                  {/* Signature & Authorization Details */}
                  <div className="lg:col-span-6 flex flex-col justify-between bg-surface-container-low p-space-lg rounded-xl">
                    <div>
                      <div className="flex items-center justify-between pb-space-sm">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Thông tin đại diện ký nhận</span>
                        <span className="font-code-num text-label-sm text-tertiary font-semibold">Đã xác minh e-KYC</span>
                      </div>
                      <div className="grid grid-cols-2 gap-space-md py-space-sm">
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">Họ và tên người ký</span>
                          <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">Thầy Hà Văn Tiêu</div>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">Chức vụ đại diện</span>
                          <div className="font-body-md text-body-md text-on-surface font-semibold mt-0.5">Hiệu trưởng - Đại diện pháp lý</div>
                        </div>
                      </div>
                      {/* Digital Signature Container */}
                      <div className="mt-space-md p-space-md rounded-xl bg-surface-container-lowest flex flex-col items-center justify-center text-center relative overflow-hidden">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider mb-2">
                          Chữ Ký Số Điện Tử Hợp Lệ &amp; Con Dấu Mộc Đỏ
                        </span>
                        {/* Simulated Digital Seal & Signature Display */}
                        <div className="flex items-center justify-center gap-space-lg py-space-sm">
                          {/* Digital Signature Glyph */}
                          <div className="flex flex-col items-center">
                            <div className="font-headline-md text-primary italic font-serif select-none" style={{ fontFamily: "serif", transform: "rotate(-3deg)" }}>
                              Ha Van Tieu
                            </div>
                            <span className="font-code-num text-label-sm text-on-surface-variant mt-1">Ký lúc: 16:45:20 • 24/10/2024</span>
                          </div>
                          {/* Digital School Stamp */}
                          <div className="w-24 h-24 rounded-full bg-error-container/30 flex flex-col items-center justify-center text-error p-1 text-center select-none rotate-6">
                            <span className="text-[9px] font-bold uppercase leading-tight">UBND H. MƯỜNG LÁT</span>
                            <span className="material-symbols-outlined text-[20px] my-0.5">school</span>
                            <span className="text-[8px] font-bold uppercase leading-tight">PTDTBT THCS MƯỜNG LÁT</span>
                          </div>
                        </div>
                        <div className="w-full mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant font-code-num text-label-sm">
                          <span>Khóa định danh: 8F2A-09C3-7E11-94BD</span>
                          <span className="text-tertiary flex items-center gap-1 font-semibold">
                            <span className="material-symbols-outlined text-[14px]">verified</span>
                            Hợp pháp theo Luật GDĐT
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Action Buttons for PoD */}
                    <div className="flex flex-col sm:flex-row items-center gap-space-sm mt-space-lg pt-space-md">
                      <button className="w-full sm:w-auto flex-1 px-space-md py-3 rounded bg-primary text-on-primary hover:bg-primary-container transition-all flex items-center justify-center gap-2 font-label-md text-label-md font-semibold shadow-sm" type="button">
                        <span className="material-symbols-outlined text-[18px]">draw</span>
                        <span>Ký Xác Nhận Biên Bản Bàn Giao (PoD)</span>
                      </button>
                      <button className="w-full sm:w-auto px-space-md py-3 rounded bg-surface-container-high text-on-surface hover:bg-surface-container transition-all flex items-center justify-center gap-2 font-label-md text-label-md font-semibold" type="button">
                        <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                        <span>Xuất Biên Bản Bàn Giao PDF</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Previous Delivery Batches History */}
            <section className="w-full pb-space-xl">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md gap-space-sm">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">history_edu</span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Lịch Sử Các Lần Tiếp Nhận Trước Đây</h2>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Tổng hợp hồ sơ bàn giao, biên bản nghiệm thu các đợt tài trợ đã hoàn thành của Trường PTDTBT THCS Mường Lát.
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Lưu trữ: 02 đợt hoàn tất</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-sm">
                  {/* Past Batch 1 */}
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold uppercase">
                          Đợt II/2023 • Tháng 11/2023
                        </span>
                        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-semibold">
                          <span className="material-symbols-outlined text-[14px]">check_circle</span>
                          Đã Hoàn Tất
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-2">
                        Tủ Sách Tri Thức &amp; 200 Bộ Sách Giáo Khoa Mới
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Phân bổ 03 tủ sách gỗ composite chống ẩm, 200 bộ SGK Lớp 6, 7, 8 theo chương trình GDPT 2018 cùng 500 tập vở ô ly cho học sinh nội trú.
                      </p>
                      <div className="flex items-center gap-space-md mt-3 text-on-surface-variant font-code-num text-label-sm">
                        <span>Mã tiếp nhận: #REC-2023-ML02</span>
                        <span>•</span>
                        <span>Người giao: Quỹ Vì Tầm Vóc Việt</span>
                      </div>
                    </div>
                    <div className="mt-space-md pt-space-sm flex items-center justify-between">
                      <span className="font-body-sm text-body-sm text-tertiary font-medium">Biên bản nghiệm thu số: BB-2023-882</span>
                      <button className="px-3 py-1.5 rounded bg-surface-container-lowest text-primary font-label-md text-label-md font-semibold hover:bg-surface-container transition-all flex items-center gap-1 shadow-sm" type="button">
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        <span>Xem Lại Biên Bản Cũ</span>
                      </button>
                    </div>
                  </div>
                  {/* Past Batch 2 */}
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold uppercase">
                          Đợt I/2023 • Tháng 03/2023
                        </span>
                        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-semibold">
                          <span className="material-symbols-outlined text-[14px]">check_circle</span>
                          Đã Hoàn Tất
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-2">
                        10 Máy Tính Bảng Samsung Galaxy Tab A8 Học Ngoại Ngữ
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Hỗ trợ nhóm học sinh giỏi tiếng Anh và tài khoản học trực tuyến EdTech, kèm bao da chống sốc và tai nghe kiểm âm chuyên dụng.
                      </p>
                      <div className="flex items-center gap-space-md mt-3 text-on-surface-variant font-code-num text-label-sm">
                        <span>Mã tiếp nhận: #REC-2023-ML01</span>
                        <span>•</span>
                        <span>Tài trợ: Cựu sinh viên Bách Khoa</span>
                      </div>
                    </div>
                    <div className="mt-space-md pt-space-sm flex items-center justify-between">
                      <span className="font-body-sm text-body-sm text-tertiary font-medium">Biên bản nghiệm thu số: BB-2023-119</span>
                      <button className="px-3 py-1.5 rounded bg-surface-container-lowest text-primary font-label-md text-label-md font-semibold hover:bg-surface-container transition-all flex items-center gap-1 shadow-sm" type="button">
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        <span>Xem Lại Biên Bản Cũ</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
