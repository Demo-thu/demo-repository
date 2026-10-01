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
    <div className="bg-background font-body-md text-on-surface flex antialiased">
      {/* Sidebar */}
      <aside className="bg-surface-container-lowest fixed top-0 left-0 z-50 flex h-full w-72 flex-col justify-between overflow-y-auto shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="p-space-lg gap-space-md flex flex-col">
          <div className="gap-space-sm flex items-center">
            <div className="bg-primary text-on-primary font-headline-md flex h-10 w-10 items-center justify-center rounded-xl">
              <span className="material-symbols-outlined text-[24px]">school</span>
            </div>
            <div className="flex flex-col">
              <div className="gap-space-xs flex items-center">
                <span className="font-headline-sm text-headline-sm text-primary">EduShare</span>
                <span className="font-label-sm text-label-sm bg-surface-container-high text-primary rounded px-1.5 py-0.5 font-bold">
                  VN
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant tracking-widest uppercase">
                VIETNAM CORE
              </span>
            </div>
          </div>
          <div className="gap-space-xs bg-surface-container-low px-space-sm flex w-fit items-center rounded-full py-1">
            <span className="bg-tertiary-container h-2 w-2 animate-pulse rounded-full"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Trực tuyến • 63 Tỉnh Thành</span>
          </div>
          <nav className="mt-space-md gap-space-xs flex flex-col">
            <div className="px-space-sm pt-space-xs font-label-sm text-label-sm text-on-surface-variant pb-1 tracking-wider uppercase">
              CỔNG TRƯỜNG HỌC
            </div>

            <Link
              className="gap-space-sm px-space-md font-body-md text-body-md bg-primary text-on-primary flex items-center rounded-lg py-2.5 font-semibold shadow-sm transition-colors"
              to="/school/request"
            >
              <span className="material-symbols-outlined text-on-primary text-[20px]">assignment_turned_in</span>
              <span>Yêu cầu tài trợ</span>
            </Link>
            <Link
              className="gap-space-sm px-space-md font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center rounded-lg py-2.5 transition-colors"
              to="#"
            >
              <span className="material-symbols-outlined text-[20px]">groups</span>
              <span>Học sinh tiếp nhận</span>
            </Link>
            <Link
              className="gap-space-sm px-space-md font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center rounded-lg py-2.5 transition-colors"
              to="#"
            >
              <span className="material-symbols-outlined text-[20px]">verified</span>
              <span>Biên bản bàn giao (PoD)</span>
            </Link>

            <div className="px-space-sm pt-space-md font-label-sm text-label-sm text-on-surface-variant pb-1 tracking-wider uppercase">
              KHO &amp; TIẾP NHẬN
            </div>

            <Link
              className="gap-space-sm px-space-md font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center rounded-lg py-2.5 transition-colors"
              to="#"
            >
              <span className="material-symbols-outlined text-[20px]">inventory_2</span>
              <span>Danh mục thiết bị phân bổ</span>
            </Link>
            <Link
              className="gap-space-sm px-space-md font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center rounded-lg py-2.5 transition-colors"
              to="#"
            >
              <span className="material-symbols-outlined text-[20px]">local_shipping</span>
              <span>Lịch sử đợt giao</span>
            </Link>
          </nav>
        </div>
        <div className="p-space-md m-space-md bg-surface-container-low gap-space-xs flex flex-col rounded-xl">
          <div className="gap-space-xs text-tertiary font-label-md text-label-md flex items-center">
            <span className="material-symbols-outlined text-[16px]">shield_with_heart</span>
            <span>Hỗ trợ kỹ thuật 24/7</span>
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant">
            Sở GD&amp;ĐT Thanh Hóa • Hotline: 1800 6868
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex min-h-screen flex-1 flex-col pl-72">
        <header className="bg-surface-container-lowest/90 px-gutter-desktop fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="gap-space-md flex items-center">
            <div className="gap-space-xs font-body-sm text-body-sm text-on-surface-variant flex items-center">
              <span className="material-symbols-outlined text-[18px]">home</span>
              <span>/</span>
              <span>Trường học</span>
              <span>/</span>
              <span className="text-on-surface font-semibold">Tổng quan</span>
            </div>
            <div className="relative w-80">
              <span className="material-symbols-outlined text-on-surface-variant absolute top-1/2 left-3 -translate-y-1/2 text-[18px]">
                search
              </span>
              <input
                className="pr-space-md bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:bg-surface-container-lowest w-full rounded py-1.5 pl-9 transition-colors focus:outline-none"
                placeholder="Tìm thiết bị, biên bản, học sinh..."
                type="search"
              />
            </div>
          </div>
          <div className="gap-space-md flex items-center">
            <div className="gap-space-xs px-space-sm bg-secondary-container font-label-md text-label-md text-on-secondary-container flex items-center rounded py-1">
              <span className="material-symbols-outlined text-[16px]">badge</span>
              <span>Vai trò: Đại diện Trường học (BGH)</span>
            </div>
            <button
              className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface relative rounded-lg p-2 transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="bg-error absolute top-1.5 right-1.5 h-2 w-2 rounded-full"></span>
            </button>
            <div className="gap-space-sm pl-space-xs flex items-center">
              <div className="flex flex-col text-right">
                <span className="font-headline-sm text-body-md text-on-surface leading-tight font-semibold">
                  Thầy Hà Văn Tiêu
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                  HT PTDTBT THCS Mường Lát
                </span>
              </div>
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-background px-gutter-desktop relative min-h-screen w-full pt-16">
          <div className="flex w-full flex-col">
            {/* Top Command & Status Ribbon */}
            <section className="pb-space-lg mt-space-md w-full">
              {/* Breadcrumb & Direct Action Bar */}
              <div className="gap-space-md mb-space-md flex flex-col justify-between lg:flex-row lg:items-center">
                <div>
                  <div className="gap-space-xs font-label-sm text-label-sm text-on-surface-variant mb-1 flex items-center tracking-wider uppercase">
                    <span className="text-primary font-semibold">Cổng Trường Học</span>
                    <span>/</span>
                    <span>Yêu Cầu Tài Trợ Thiết Bị Tin Học</span>
                    <span>/</span>
                    <span className="text-on-surface font-code-num text-code-num text-primary font-semibold">
                      #SCH-ML-2024-08
                    </span>
                  </div>
                  <div className="gap-space-sm flex flex-wrap items-center">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                      Trường PTDTBT THCS Mường Lát
                    </h1>
                    <span className="bg-surface-container-high text-primary font-label-md text-label-md inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-semibold">
                      <span className="bg-primary-container h-2 w-2 rounded-full"></span>
                      Mã định danh: ML-THCS-0104
                    </span>
                    <span className="bg-surface-container-low text-tertiary font-label-md text-label-md inline-flex items-center gap-1 rounded-full px-3 py-1 font-semibold">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      Đã Duyệt Phân Bổ &amp; Đang Vận Chuyển
                    </span>
                  </div>
                </div>
                <div className="gap-space-sm flex items-center">
                  <button
                    className="px-space-md bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2 rounded py-2.5 font-medium shadow-sm transition-all"
                    onClick={() => window.print()}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">print</span>
                    <span>In Phiếu Theo Dõi</span>
                  </button>
                  <a
                    className="px-space-md bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md flex items-center gap-2 rounded py-2.5 font-medium shadow-sm transition-all"
                    href="#pod-section"
                    onClick={handleScrollToPoD}
                  >
                    <span className="material-symbols-outlined text-[18px]">ink_pen</span>
                    <span>Biên Bản Bàn Giao (PoD)</span>
                  </a>
                </div>
              </div>

              {/* National Queue & Dispatch Telemetry Card */}
              <div className="gap-space-md bg-surface-container-lowest p-space-lg grid grid-cols-1 rounded-xl shadow-sm md:grid-cols-4">
                <div className="gap-space-md flex items-center">
                  <div className="bg-surface-container-high text-primary flex h-12 w-12 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[26px]">format_list_numbered</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                      Hàng Chờ Quốc Gia
                    </span>
                    <div className="mt-0.5 flex items-baseline gap-1">
                      <span className="font-headline-md text-headline-md text-primary font-bold">#12</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-code-num">
                        / 148 đơn đang thẩm định
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Thời gian chờ dự kiến: 0 ngày
                    </span>
                  </div>
                </div>
                <div className="gap-space-md flex items-center">
                  <div className="bg-surface-container-low text-tertiary flex h-12 w-12 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[26px]">local_shipping</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                      Mã Vận Đơn Phụ Trách
                    </span>
                    <span className="font-headline-sm text-headline-sm font-code-num text-on-surface mt-0.5 font-semibold">
                      #WB-2024-NW08
                    </span>
                    <span className="font-body-sm text-body-sm text-tertiary font-medium">Xe bán tải 29C-882.10</span>
                  </div>
                </div>
                <div className="gap-space-md flex items-center">
                  <div className="bg-surface-container text-primary-container flex h-12 w-12 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[26px]">desktop_windows</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                      Thiết Bị Cấp Phát
                    </span>
                    <span className="font-headline-md text-headline-md text-on-surface mt-0.5 font-bold">
                      37 Danh mục
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">25 PC, 10 UPS, 2 Switch</span>
                  </div>
                </div>
                <div className="gap-space-md flex items-center">
                  <div className="bg-surface-container-high text-primary flex h-12 w-12 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[26px]">schedule</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                      Thời Gian Dự Kiến Tới
                    </span>
                    <span className="font-headline-sm text-headline-sm font-code-num text-primary mt-0.5 font-bold">
                      16:30 Chiều nay
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      24/10/2024 (Thời gian thực)
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Documentation Section: Two Certificates Required */}
            <section className="pb-space-lg w-full">
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                <div className="pb-space-md gap-space-sm flex flex-col justify-between md:flex-row md:items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">policy</span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Hồ Sơ Pháp Lý Đính Kèm
                      </h2>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Quy định phân bổ tài trợ giáo dục: Hồ sơ thẩm định bắt buộc có đủ 02 văn bản công chứng gốc. Khi
                      hồ sơ cần chỉnh sửa hoặc bổ sung, nhà trường phải thực hiện nộp và cập nhật đồng thời cả hai văn
                      bản.
                    </p>
                  </div>
                  <span className="bg-surface-container-low text-tertiary font-label-md text-label-md inline-flex items-center gap-1.5 self-start rounded-full px-3 py-1.5 font-semibold md:self-auto">
                    <span className="material-symbols-outlined text-[16px]">task_alt</span>
                    2/2 Giấy Xác Nhận Hợp Lệ
                  </span>
                </div>
                <div className="gap-space-md mt-space-sm grid grid-cols-1 md:grid-cols-2">
                  {/* Certificate 1: School Needs Cert */}
                  <div className="p-space-md bg-surface-container-low flex flex-col justify-between rounded-xl">
                    <div className="gap-space-md flex items-start">
                      <div className="bg-surface-container-lowest text-primary flex h-14 w-12 flex-shrink-0 flex-col items-center justify-center rounded-lg shadow-sm">
                        <span className="material-symbols-outlined text-[24px]">description</span>
                        <span className="font-code-num text-label-sm mt-0.5 font-bold">PDF</span>
                      </div>
                      <div className="flex min-w-0 flex-col">
                        <span className="font-label-sm text-label-sm text-primary font-bold tracking-wider uppercase">
                          Giấy xác nhận 1 (Bắt buộc)
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5 truncate font-semibold">
                          Giấy xác nhận nhu cầu của Nhà trường
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Số công văn: 84/CV-THCSML • Ký duyệt bởi: Thầy Hà Văn Tiêu • Mộc đỏ nhà trường đã xác nhận.
                        </p>
                        <div className="gap-space-sm text-on-surface-variant font-code-num text-label-sm mt-2 flex items-center">
                          <span>Dung lượng: 2.4 MB</span>
                          <span>•</span>
                          <span>Ngày ký: 12/10/2024</span>
                        </div>
                      </div>
                    </div>
                    <div className="gap-space-sm mt-space-md pt-space-sm flex items-center">
                      <button
                        className="px-space-md bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container flex items-center gap-1.5 rounded py-2 font-medium shadow-sm transition-all"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">download</span>
                        <span>Tải xuống xem</span>
                      </button>
                      <button
                        className="px-space-md bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container flex items-center gap-1.5 rounded py-2 font-medium transition-all"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">upload_file</span>
                        <span>Cập nhật file</span>
                      </button>
                    </div>
                  </div>

                  {/* Certificate 2: Local People's Committee Cert */}
                  <div className="p-space-md bg-surface-container-low flex flex-col justify-between rounded-xl">
                    <div className="gap-space-md flex items-start">
                      <div className="bg-surface-container-lowest text-tertiary flex h-14 w-12 flex-shrink-0 flex-col items-center justify-center rounded-lg shadow-sm">
                        <span className="material-symbols-outlined text-[24px]">verified_user</span>
                        <span className="font-code-num text-label-sm mt-0.5 font-bold">PDF</span>
                      </div>
                      <div className="flex min-w-0 flex-col">
                        <span className="font-label-sm text-label-sm text-tertiary font-bold tracking-wider uppercase">
                          Giấy xác nhận 2 (Bắt buộc)
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5 truncate font-semibold">
                          Giấy xác nhận UBND Xã Tam Chung - Mường Lát
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Số xác nhận: 142/UBND-VX • Chứng thực hoàn cảnh địa bàn biên giới đặc biệt khó khăn, thiếu
                          thiết bị học tin.
                        </p>
                        <div className="gap-space-sm text-on-surface-variant font-code-num text-label-sm mt-2 flex items-center">
                          <span>Dung lượng: 3.1 MB</span>
                          <span>•</span>
                          <span>Ngày xác nhận: 14/10/2024</span>
                        </div>
                      </div>
                    </div>
                    <div className="gap-space-sm mt-space-md pt-space-sm flex items-center">
                      <button
                        className="px-space-md bg-surface-container-lowest text-tertiary font-label-md text-label-md hover:bg-surface-container flex items-center gap-1.5 rounded py-2 font-medium shadow-sm transition-all"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">download</span>
                        <span>Tải xuống xem</span>
                      </button>
                      <button
                        className="px-space-md bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container flex items-center gap-1.5 rounded py-2 font-medium transition-all"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">upload_file</span>
                        <span>Cập nhật file</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Synchronous Update Notice */}
                <div className="mt-space-md p-space-sm bg-secondary-container gap-space-sm flex items-center rounded-lg">
                  <span className="material-symbols-outlined text-on-secondary-container flex-shrink-0 text-[20px]">
                    info
                  </span>
                  <span className="font-body-sm text-body-sm text-on-secondary-container">
                    <strong className="font-semibold">Lưu ý quản trị viên:</strong> Hệ thống kích hoạt khóa toàn vẹn tài
                    trợ. Nếu nhà trường nộp bản thay thế cho Giấy xác nhận 1 hoặc Giấy xác nhận 2, cả hai tệp phải được
                    đính kèm và ký duyệt lại cùng lúc trước khi chuyển trạng thái sang thẩm định lại.
                  </span>
                </div>
              </div>
            </section>

            {/* Live Logistics & Real-Time Transit Tracking */}
            <section className="pb-space-lg w-full">
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                <div className="pb-space-md gap-space-sm flex flex-col justify-between md:flex-row md:items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">route</span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Theo Dõi Đợt Giao Hàng &amp; Vận Đơn
                      </h2>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Vận chuyển bởi Đội Tình Nguyện Viên EduShare Care Global • Chuyến vận tải số 08 cung Tây Bắc
                    </p>
                  </div>
                  <div className="gap-space-sm flex items-center">
                    <div className="bg-surface-container-high font-code-num text-body-sm text-primary flex items-center gap-2 rounded-lg px-3 py-1.5 font-semibold">
                      <span className="bg-primary-container h-2.5 w-2.5 animate-ping rounded-full"></span>
                      GPS: 20.505°N, 104.622°E (Thời gian thực)
                    </div>
                  </div>
                </div>
                {/* Stepper / Route Timeline */}
                <div className="py-space-md">
                  <div className="gap-space-md relative grid grid-cols-1 md:grid-cols-4">
                    {/* Step 1 Completed */}
                    <div className="p-space-md bg-surface-container-low flex flex-col gap-2 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="bg-tertiary text-on-tertiary flex h-8 w-8 items-center justify-center rounded-full">
                          <span className="material-symbols-outlined text-[18px]">check</span>
                        </span>
                        <span className="font-code-num text-label-sm text-tertiary font-semibold">05:30 • 24/10</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-on-surface mt-1 font-semibold">
                        Kho Tổng Hà Nội
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Đã kiểm định Grade A, dán nhãn niêm phong QR, bốc xếp lên xe bán tải chuyên dụng.
                      </span>
                    </div>
                    {/* Step 2 Completed */}
                    <div className="p-space-md bg-surface-container-low flex flex-col gap-2 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="bg-tertiary text-on-tertiary flex h-8 w-8 items-center justify-center rounded-full">
                          <span className="material-symbols-outlined text-[18px]">check</span>
                        </span>
                        <span className="font-code-num text-label-sm text-tertiary font-semibold">10:15 • 24/10</span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-on-surface mt-1 font-semibold">
                        Trạm Hòa Bình - Mai Châu
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Kiểm tra gia cố thùng xốp chống ẩm, kiểm tra tình trạng sốc nhiệt thiết bị điện tử.
                      </span>
                    </div>
                    {/* Step 3 Active / In Transit */}
                    <div className="p-space-md bg-surface-container ring-primary flex flex-col gap-2 rounded-xl ring-2">
                      <div className="flex items-center justify-between">
                        <span className="bg-primary text-on-primary flex h-8 w-8 items-center justify-center rounded-full">
                          <span className="material-symbols-outlined text-[18px]">directions_car</span>
                        </span>
                        <span className="font-code-num text-label-sm text-primary font-bold">
                          14:40 • ĐANG DI CHUYỂN
                        </span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-primary mt-1 font-semibold">
                        Vượt Đèo Mường Lát
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface">
                        Đoàn đang di chuyển qua dốc Pù Nhi, cách trường PTDTBT 18km. Thời tiết tạnh ráo, xe lăn bánh an
                        toàn.
                      </span>
                    </div>
                    {/* Step 4 Future */}
                    <div className="p-space-md bg-surface-container-low flex flex-col gap-2 rounded-xl opacity-75">
                      <div className="flex items-center justify-between">
                        <span className="bg-surface-container-highest text-on-surface-variant flex h-8 w-8 items-center justify-center rounded-full">
                          <span className="material-symbols-outlined text-[18px]">school</span>
                        </span>
                        <span className="font-code-num text-label-sm text-on-surface-variant font-semibold">
                          Dự kiến 16:30
                        </span>
                      </div>
                      <span className="font-headline-sm text-headline-sm text-on-surface mt-1 font-semibold">
                        Bàn Giao Tại Trường
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Mở thùng kiểm thử 25 máy cùng BGH, ký điện tử biên bản bàn giao PoD và chụp ảnh thực địa.
                      </span>
                    </div>
                  </div>
                </div>
                {/* Logistics Team & Vehicle Details */}
                <div className="gap-space-md pt-space-sm grid grid-cols-1 md:grid-cols-3">
                  <div className="p-space-md bg-surface-container-low gap-space-md flex items-center rounded-xl">
                    <div className="bg-primary text-on-primary font-headline-sm flex h-12 w-12 items-center justify-center rounded-full">
                      LH
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-primary font-bold uppercase">
                        Trưởng Đoàn Vận Chuyển
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Lê Hoàng Long
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-code-num">
                        SĐT: 0914 382 991 (Viber/Zalo)
                      </span>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container-low gap-space-md flex items-center rounded-xl">
                    <div className="bg-surface-container-high text-primary font-headline-sm flex h-12 w-12 items-center justify-center rounded-full">
                      VB
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">
                        Kỹ Thuật Viên Đi Kèm
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Vũ Quốc Bảo
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-code-num">
                        Kỹ sư mạng &amp; Cài đặt EduOS
                      </span>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container-low flex items-center justify-between rounded-xl">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">
                        Phương Tiện &amp; Tải Trọng
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Bán tải Ford Ranger 4x4
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-code-num">
                        BKS: 29C-882.10 • 780 kg hàng
                      </span>
                    </div>
                    <a
                      className="bg-primary text-on-primary hover:bg-primary-container flex h-10 w-10 items-center justify-center rounded-full transition-all"
                      href="tel:0914382991"
                    >
                      <span className="material-symbols-outlined text-[20px]">call</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Allocated Equipment Grid with Serial QR Identification */}
            <section className="pb-space-lg w-full">
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                <div className="pb-space-md gap-space-sm flex flex-col justify-between md:flex-row md:items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">inventory</span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Danh Mục Thiết Bị Phân Bổ &amp; Mã QR Định Danh
                      </h2>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Toàn bộ linh kiện đã được thẩm định chất lượng Grade A tại Lab kiểm định EduShare Hà Nội trước khi
                      xuất kho.
                    </p>
                  </div>
                  <div className="gap-space-sm flex items-center">
                    <div className="relative w-64">
                      <span className="material-symbols-outlined text-on-surface-variant absolute top-1/2 left-3 -translate-y-1/2 text-[18px]">
                        qr_code_scanner
                      </span>
                      <input
                        className="bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:bg-surface-container w-full rounded py-1.5 pr-3 pl-9 transition-colors focus:outline-none"
                        placeholder="Tìm theo mã QR, Serial..."
                        type="text"
                      />
                    </div>
                    <button
                      className="px-space-md bg-surface-container-high text-primary font-label-md text-label-md hover:bg-surface-container flex items-center gap-1.5 rounded py-2 font-medium transition-all"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">file_download</span>
                      <span>Xuất Danh Sách QR</span>
                    </button>
                  </div>
                </div>
                {/* Equipment Table */}
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                        <th className="px-space-md rounded-l py-3">Mã Thiết Bị / QR</th>
                        <th className="px-space-md py-3">Chủng Loại &amp; Cấu Hình Chi Tiết</th>
                        <th className="px-space-md py-3 text-center">Số Lượng</th>
                        <th className="px-space-md py-3">Tiêu Chuẩn Kỹ Thuật</th>
                        <th className="px-space-md py-3">Mã Dải Định Danh</th>
                        <th className="px-space-md rounded-r py-3 text-right">Tra Cứu</th>
                      </tr>
                    </thead>
                    <tbody className="divide-surface-container-low font-body-md text-body-md divide-y">
                      {/* Item 1: Desktop PCs */}
                      <tr className="hover:bg-surface-container-low/60 transition-colors">
                        <td className="py-space-md px-space-md font-code-num text-code-num text-primary align-top font-semibold">
                          <div className="flex items-center gap-2">
                            <div className="bg-surface-container text-primary flex h-8 w-8 items-center justify-center rounded">
                              <span className="material-symbols-outlined text-[18px]">desktop_windows</span>
                            </div>
                            <div>
                              <div>#CAT-PC-01</div>
                              <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">
                                25 Bộ đồng bộ
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-space-md px-space-md">
                          <div className="font-headline-sm text-body-md text-on-surface font-semibold">
                            HP ProDesk 400 G6 Microtower
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                            Intel Core i3-10100 (4C/8T 3.6GHz) • RAM 8GB DDR4 • SSD 256GB NVMe siêu tốc
                          </div>
                          <div className="font-body-sm text-body-sm text-primary mt-0.5">
                            Màn hình HP P22v G4 21.5 inch Full HD (1920x1080), Bàn phím + Chuột quang đồng bộ
                          </div>
                        </td>
                        <td className="py-space-md px-space-md font-headline-sm text-headline-sm font-code-num text-on-surface text-center align-top font-bold">
                          25
                        </td>
                        <td className="py-space-md px-space-md align-top">
                          <span className="bg-surface-container text-tertiary font-label-md text-label-md inline-flex items-center gap-1 rounded px-2.5 py-1 font-medium">
                            <span className="material-symbols-outlined text-[14px]">verified</span>
                            Grade A Refurbished
                          </span>
                          <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            Đã test 72h liên tục
                          </div>
                        </td>
                        <td className="py-space-md px-space-md font-code-num text-code-num text-on-surface align-top">
                          <div className="text-primary font-semibold">#QR-PC-ML01 → #QR-PC-ML25</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">
                            Serials HP Care Tagged
                          </div>
                        </td>
                        <td className="py-space-md px-space-md text-right align-top">
                          <button
                            className="bg-surface-container text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary rounded px-3 py-1.5 font-semibold transition-all"
                            type="button"
                          >
                            Xem 25 QR
                          </button>
                        </td>
                      </tr>
                      {/* Item 2: UPS Units */}
                      <tr className="hover:bg-surface-container-low/60 transition-colors">
                        <td className="py-space-md px-space-md font-code-num text-code-num text-primary align-top font-semibold">
                          <div className="flex items-center gap-2">
                            <div className="bg-surface-container-high text-primary flex h-8 w-8 items-center justify-center rounded">
                              <span className="material-symbols-outlined text-[18px]">bolt</span>
                            </div>
                            <div>
                              <div>#CAT-UPS-02</div>
                              <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">
                                10 Bộ lưu điện
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-space-md px-space-md">
                          <div className="font-headline-sm text-body-md text-on-surface font-semibold">
                            Bộ Lưu Điện Santak Blazer 1000E Pro (1000VA / 600W)
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                            Bảo vệ chống sụt áp đột ngột vùng cao, ổn áp tự động AVR, Ắc quy mới 100%
                          </div>
                          <div className="font-body-sm text-body-sm text-tertiary mt-0.5">
                            Thời gian lưu điện duy trì: 20-30 phút cho 2-3 PC/bộ
                          </div>
                        </td>
                        <td className="py-space-md px-space-md font-headline-sm text-headline-sm font-code-num text-on-surface text-center align-top font-bold">
                          10
                        </td>
                        <td className="py-space-md px-space-md align-top">
                          <span className="bg-surface-container text-tertiary font-label-md text-label-md inline-flex items-center gap-1 rounded px-2.5 py-1 font-medium">
                            <span className="material-symbols-outlined text-[14px]">battery_charging_full</span>
                            Ắc quy New 100%
                          </span>
                          <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            Chứng chỉ an toàn PCCC
                          </div>
                        </td>
                        <td className="py-space-md px-space-md font-code-num text-code-num text-on-surface align-top">
                          <div className="text-primary font-semibold">#QR-UPS-ML01 → #QR-UPS-ML10</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">
                            Đã dán tem bảo hành 24T
                          </div>
                        </td>
                        <td className="py-space-md px-space-md text-right align-top">
                          <button
                            className="bg-surface-container text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary rounded px-3 py-1.5 font-semibold transition-all"
                            type="button"
                          >
                            Xem 10 QR
                          </button>
                        </td>
                      </tr>
                      {/* Item 3: Network Switches */}
                      <tr className="hover:bg-surface-container-low/60 transition-colors">
                        <td className="py-space-md px-space-md font-code-num text-code-num text-primary align-top font-semibold">
                          <div className="flex items-center gap-2">
                            <div className="bg-surface-container text-primary flex h-8 w-8 items-center justify-center rounded">
                              <span className="material-symbols-outlined text-[18px]">hub</span>
                            </div>
                            <div>
                              <div>#CAT-NET-03</div>
                              <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">
                                Thiết bị mạng
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-space-md px-space-md">
                          <div className="font-headline-sm text-body-md text-on-surface font-semibold">
                            Switch TP-Link TL-SG1024D 24 Cổng Gigabit + Cuộn cáp Cat6
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                            Băng thông chuyển mạch 48Gbps, vỏ thép gắn tủ rack, kèm 300m cáp AMP Cat6 UTP
                          </div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                            Đã bấm sẵn 50 đầu nối RJ45 bọc kim loại chống oxy hóa sương muối vùng núi
                          </div>
                        </td>
                        <td className="py-space-md px-space-md font-headline-sm text-headline-sm font-code-num text-on-surface text-center align-top font-bold">
                          02
                        </td>
                        <td className="py-space-md px-space-md align-top">
                          <span className="bg-surface-container text-tertiary font-label-md text-label-md inline-flex items-center gap-1 rounded px-2.5 py-1 font-medium">
                            <span className="material-symbols-outlined text-[14px]">speed</span>
                            Gigabit Enterprise
                          </span>
                          <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            Đạt chuẩn ISO/IEC 11801
                          </div>
                        </td>
                        <td className="py-space-md px-space-md font-code-num text-code-num text-on-surface align-top">
                          <div className="text-primary font-semibold">#QR-NET-ML01 / 02</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">
                            Kèm sơ đồ mạng phòng máy
                          </div>
                        </td>
                        <td className="py-space-md px-space-md text-right align-top">
                          <button
                            className="bg-surface-container text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary rounded px-3 py-1.5 font-semibold transition-all"
                            type="button"
                          >
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
            <section className="pb-space-lg w-full" id="pod-section">
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                <div className="pb-space-md gap-space-sm flex flex-col justify-between md:flex-row md:items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">verified</span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Biên Bản Bàn Giao (PoD) &amp; Ký Số Điện Tử
                      </h2>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Xác thực giao nhận trực tiếp giữa Đoàn Thiện Nguyện EduShare và Ban Giám Hiệu Trường PTDTBT THCS
                      Mường Lát.
                    </p>
                  </div>
                  <div className="gap-space-sm flex items-center">
                    <span className="font-label-sm text-label-sm bg-surface-container-high text-primary rounded px-2.5 py-1 font-semibold uppercase">
                      Biên bản số: POD-2024-ML08
                    </span>
                  </div>
                </div>
                <div className="gap-space-lg mt-space-sm grid grid-cols-1 lg:grid-cols-12">
                  {/* Visual Verification Photo */}
                  <div className="gap-space-sm flex flex-col lg:col-span-6">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">
                      Ảnh chụp nghiệm thu thực địa với học sinh và phòng máy
                    </span>
                    <div className="bg-surface-container-low relative w-full overflow-hidden rounded-xl shadow-sm">
                      <img
                        alt="Nghiệm thu thực địa"
                        className="h-80 w-full object-cover"
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                      />
                      <div className="from-on-surface/80 via-on-surface/40 p-space-md text-on-primary absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-headline-sm text-headline-sm text-on-primary font-semibold">
                              Phòng Tin học Điểm trường Bản Lát
                            </div>
                            <div className="font-body-sm text-body-sm text-on-primary/80 font-code-num">
                              20.505°N, 104.622°E • 24/10/2024
                            </div>
                          </div>
                          <span className="bg-tertiary text-on-tertiary font-label-sm text-label-sm rounded px-2.5 py-1 font-semibold">
                            Ảnh Chống Gian Lận (PoD)
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                      * Ảnh xác thực tự động gắn tem thời gian và tọa độ vệ tinh GPS, được lưu trữ vĩnh viễn trên sổ cái
                      minh bạch của Bộ GD&amp;ĐT và Mạng lưới EduShare.
                    </p>
                  </div>
                  {/* Signature & Authorization Details */}
                  <div className="bg-surface-container-low p-space-lg flex flex-col justify-between rounded-xl lg:col-span-6">
                    <div>
                      <div className="pb-space-sm flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">
                          Thông tin đại diện ký nhận
                        </span>
                        <span className="font-code-num text-label-sm text-tertiary font-semibold">
                          Đã xác minh e-KYC
                        </span>
                      </div>
                      <div className="gap-space-md py-space-sm grid grid-cols-2">
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            Họ và tên người ký
                          </span>
                          <div className="font-headline-sm text-headline-sm text-on-surface mt-0.5 font-bold">
                            Thầy Hà Văn Tiêu
                          </div>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">Chức vụ đại diện</span>
                          <div className="font-body-md text-body-md text-on-surface mt-0.5 font-semibold">
                            Hiệu trưởng - Đại diện pháp lý
                          </div>
                        </div>
                      </div>
                      {/* Digital Signature Container */}
                      <div className="mt-space-md p-space-md bg-surface-container-lowest relative flex flex-col items-center justify-center overflow-hidden rounded-xl text-center">
                        <span className="font-label-sm text-label-sm text-on-surface-variant mb-2 font-bold tracking-wider uppercase">
                          Chữ Ký Số Điện Tử Hợp Lệ &amp; Con Dấu Mộc Đỏ
                        </span>
                        {/* Simulated Digital Seal & Signature Display */}
                        <div className="gap-space-lg py-space-sm flex items-center justify-center">
                          {/* Digital Signature Glyph */}
                          <div className="flex flex-col items-center">
                            <div
                              className="font-headline-md text-primary font-serif italic select-none"
                              style={{
                                fontFamily: "serif",
                                transform: "rotate(-3deg)",
                              }}
                            >
                              Ha Van Tieu
                            </div>
                            <span className="font-code-num text-label-sm text-on-surface-variant mt-1">
                              Ký lúc: 16:45:20 • 24/10/2024
                            </span>
                          </div>
                          {/* Digital School Stamp */}
                          <div className="bg-error-container/30 text-error flex h-24 w-24 rotate-6 flex-col items-center justify-center rounded-full p-1 text-center select-none">
                            <span className="text-[9px] leading-tight font-bold uppercase">UBND H. MƯỜNG LÁT</span>
                            <span className="material-symbols-outlined my-0.5 text-[20px]">school</span>
                            <span className="text-[8px] leading-tight font-bold uppercase">PTDTBT THCS MƯỜNG LÁT</span>
                          </div>
                        </div>
                        <div className="mt-space-sm pt-space-xs text-on-surface-variant font-code-num text-label-sm flex w-full items-center justify-between">
                          <span>Khóa định danh: 8F2A-09C3-7E11-94BD</span>
                          <span className="text-tertiary flex items-center gap-1 font-semibold">
                            <span className="material-symbols-outlined text-[14px]">verified</span>
                            Hợp pháp theo Luật GDĐT
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Action Buttons for PoD */}
                    <div className="gap-space-sm mt-space-lg pt-space-md flex flex-col items-center sm:flex-row">
                      <button
                        className="px-space-md bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md flex w-full flex-1 items-center justify-center gap-2 rounded py-3 font-semibold shadow-sm transition-all sm:w-auto"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">draw</span>
                        <span>Ký Xác Nhận Biên Bản Bàn Giao (PoD)</span>
                      </button>
                      <button
                        className="px-space-md bg-surface-container-high text-on-surface hover:bg-surface-container font-label-md text-label-md flex w-full items-center justify-center gap-2 rounded py-3 font-semibold transition-all sm:w-auto"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                        <span>Xuất Biên Bản Bàn Giao PDF</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Previous Delivery Batches History */}
            <section className="pb-space-xl w-full">
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                <div className="pb-space-md gap-space-sm flex flex-col justify-between md:flex-row md:items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">history_edu</span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Lịch Sử Các Lần Tiếp Nhận Trước Đây
                      </h2>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Tổng hợp hồ sơ bàn giao, biên bản nghiệm thu các đợt tài trợ đã hoàn thành của Trường PTDTBT THCS
                      Mường Lát.
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Lưu trữ: 02 đợt hoàn tất</span>
                </div>
                <div className="gap-space-md mt-space-sm grid grid-cols-1 md:grid-cols-2">
                  {/* Past Batch 1 */}
                  <div className="p-space-md bg-surface-container-low flex flex-col justify-between rounded-xl">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="bg-surface-container-high text-primary font-label-sm text-label-sm rounded px-2.5 py-0.5 font-semibold uppercase">
                          Đợt II/2023 • Tháng 11/2023
                        </span>
                        <span className="font-label-sm text-label-sm text-tertiary inline-flex items-center gap-1 font-semibold">
                          <span className="material-symbols-outlined text-[14px]">check_circle</span>
                          Đã Hoàn Tất
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 font-bold">
                        Tủ Sách Tri Thức &amp; 200 Bộ Sách Giáo Khoa Mới
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Phân bổ 03 tủ sách gỗ composite chống ẩm, 200 bộ SGK Lớp 6, 7, 8 theo chương trình GDPT 2018
                        cùng 500 tập vở ô ly cho học sinh nội trú.
                      </p>
                      <div className="gap-space-md text-on-surface-variant font-code-num text-label-sm mt-3 flex items-center">
                        <span>Mã tiếp nhận: #REC-2023-ML02</span>
                        <span>•</span>
                        <span>Người giao: Quỹ Vì Tầm Vóc Việt</span>
                      </div>
                    </div>
                    <div className="mt-space-md pt-space-sm flex items-center justify-between">
                      <span className="font-body-sm text-body-sm text-tertiary font-medium">
                        Biên bản nghiệm thu số: BB-2023-882
                      </span>
                      <button
                        className="bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container flex items-center gap-1 rounded px-3 py-1.5 font-semibold shadow-sm transition-all"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        <span>Xem Lại Biên Bản Cũ</span>
                      </button>
                    </div>
                  </div>
                  {/* Past Batch 2 */}
                  <div className="p-space-md bg-surface-container-low flex flex-col justify-between rounded-xl">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="bg-surface-container-high text-primary font-label-sm text-label-sm rounded px-2.5 py-0.5 font-semibold uppercase">
                          Đợt I/2023 • Tháng 03/2023
                        </span>
                        <span className="font-label-sm text-label-sm text-tertiary inline-flex items-center gap-1 font-semibold">
                          <span className="material-symbols-outlined text-[14px]">check_circle</span>
                          Đã Hoàn Tất
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 font-bold">
                        10 Máy Tính Bảng Samsung Galaxy Tab A8 Học Ngoại Ngữ
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Hỗ trợ nhóm học sinh giỏi tiếng Anh và tài khoản học trực tuyến EdTech, kèm bao da chống sốc và
                        tai nghe kiểm âm chuyên dụng.
                      </p>
                      <div className="gap-space-md text-on-surface-variant font-code-num text-label-sm mt-3 flex items-center">
                        <span>Mã tiếp nhận: #REC-2023-ML01</span>
                        <span>•</span>
                        <span>Tài trợ: Cựu sinh viên Bách Khoa</span>
                      </div>
                    </div>
                    <div className="mt-space-md pt-space-sm flex items-center justify-between">
                      <span className="font-body-sm text-body-sm text-tertiary font-medium">
                        Biên bản nghiệm thu số: BB-2023-119
                      </span>
                      <button
                        className="bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container flex items-center gap-1 rounded px-3 py-1.5 font-semibold shadow-sm transition-all"
                        type="button"
                      >
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
