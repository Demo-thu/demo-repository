import { Link } from "react-router-dom";

const VolunteerLeaderboardPage = () => {
  return (
    <div className="bg-surface font-body-md text-on-surface flex min-h-screen flex-col antialiased">
      <aside className="bg-surface-container-low fixed top-0 left-0 z-50 flex h-full w-72 flex-col justify-between overflow-y-auto shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="px-space-md gap-space-sm bg-surface-container-lowest flex h-16 items-center">
            <div className="bg-primary text-on-primary font-headline-md flex h-9 w-9 items-center justify-center rounded-xl font-bold">
              <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary leading-none font-bold tracking-tight">
                EduShare VN
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5 font-semibold tracking-wider">
                CỔNG TÌNH NGUYỆN VIÊN
              </span>
            </div>
          </div>
          <div className="p-space-md gap-space-md flex max-h-[calc(100vh-140px)] flex-col overflow-y-auto">
            <nav className="gap-space-xs flex flex-col">
              <div className="px-space-sm py-1">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-bold tracking-wider uppercase">
                  ĐIỀU ĐỘNG &amp; CA TRỰC
                </span>
              </div>
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-body-md text-body-md flex items-center rounded-xl py-2 transition-colors"
                to="/volunteer/attendance"
              >
                <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                <span>Điểm danh ca trực</span>
              </Link>
              <Link
                className="gap-space-sm px-space-sm bg-primary text-on-primary font-body-md text-body-md flex items-center rounded-xl py-2 font-semibold shadow-sm transition-colors"
                to="/volunteer/leaderboard"
              >
                <span className="material-symbols-outlined text-[20px]">military_tech</span>
                <span>Bảng xếp hạng &amp; Giờ công</span>
              </Link>
            </nav>
            <nav className="gap-space-xs flex flex-col">
              <div className="px-space-sm py-1">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-bold tracking-wider uppercase">
                  VẬN CHUYỂN &amp; GIAO NHẬN
                </span>
              </div>
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-body-md text-body-md flex items-center rounded-xl py-2 transition-colors"
                to="/volunteer/assigned-waybills"
              >
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span>Vận đơn được gán</span>
              </Link>
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-body-md text-body-md flex items-center rounded-xl py-2 transition-colors"
                to="/volunteer/routes-gps"
              >
                <span className="material-symbols-outlined text-[20px]">navigation</span>
                <span>Tuyến đường &amp; GPS</span>
              </Link>
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-body-md text-body-md flex items-center rounded-xl py-2 transition-colors"
                to="/volunteer/pickup-confirmation"
              >
                <span className="material-symbols-outlined text-[20px]">inventory</span>
                <span>Xác nhận lấy hàng tại kho</span>
              </Link>
            </nav>
            <nav className="gap-space-xs flex flex-col">
              <div className="px-space-sm py-1">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-bold tracking-wider uppercase">
                  BIÊN BẢN &amp; SỰ CỐ
                </span>
              </div>
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-body-md text-body-md flex items-center rounded-xl py-2 transition-colors"
                to="/volunteer/incident-report"
              >
                <span className="material-symbols-outlined text-[20px]">warning</span>
                <span>Báo cáo sự cố chuyến đi</span>
              </Link>
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-body-md text-body-md flex items-center rounded-xl py-2 transition-colors"
                to="/volunteer/pod"
              >
                <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                <span>Hoàn thành &amp; Minh chứng PoD</span>
              </Link>
            </nav>
          </div>
        </div>
        <div className="p-space-md bg-surface-container-low">
          <div className="p-space-sm bg-surface-container gap-space-xs flex flex-col rounded-xl">
            <div className="gap-space-xs text-error font-label-sm text-label-sm flex items-center font-semibold">
              <span className="material-symbols-outlined text-[16px]">sos</span>
              <span>HỖ TRỢ KHẨN CẤP 24/7</span>
            </div>
            <div className="font-code-num text-code-num text-on-surface font-bold">1900 6829</div>
            <div className="font-body-sm text-body-sm text-on-surface-variant">EduShare Vietnam v2.8.4-PROD</div>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col pl-72">
        <header className="bg-surface/90 px-space-lg fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="gap-space-md flex max-w-lg flex-1 items-center">
            <div className="relative w-full">
              <span className="material-symbols-outlined text-on-surface-variant absolute top-1/2 left-3 -translate-y-1/2 text-[18px]">
                search
              </span>
              <input
                className="bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant pr-space-md text-body-md font-body-md focus:ring-primary w-full rounded-xl py-2 pl-10 shadow-[0_1px_4px_rgba(0,0,0,0.02)] outline-none focus:ring-2"
                placeholder="Tìm mã vận đơn, chuyến xe, bảng xếp hạng..."
                type="text"
              />
            </div>
          </div>
          <div className="gap-space-md flex items-center">
            <div className="gap-space-xs px-space-sm bg-surface-container text-tertiary font-label-md text-label-md flex items-center rounded-full py-1 font-medium">
              <span className="bg-tertiary-container h-2 w-2 animate-pulse rounded-full"></span>
              <span>Trực tuyến</span>
            </div>
            <button
              className="hover:bg-surface-container text-on-surface-variant hover:text-on-surface relative rounded-xl p-2 transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="bg-error absolute top-1.5 right-1.5 h-2 w-2 rounded-full"></span>
            </button>
            <div className="gap-space-sm pl-space-sm flex items-center">
              <div className="flex hidden flex-col text-right sm:flex">
                <span className="font-headline-sm text-headline-sm text-on-surface leading-tight font-semibold">
                  Lê Hoàng Long
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  TNV-VCH-88 · Đội Trưởng Đội Vượt Đèo Hà Giang &amp; Tây Bắc
                </span>
              </div>
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        <main className="px-space-lg py-space-lg bg-surface relative w-full flex-1 pt-16">
          <div className="gap-space-lg flex w-full flex-col">
            {/* Breadcrumb & Header Section */}
            <div className="gap-space-sm flex flex-col">
              {/* Breadcrumb */}
              <div className="gap-space-xs text-body-sm font-body-sm text-on-surface-variant flex items-center">
                <span className="hover:text-primary cursor-pointer transition-colors">EDUSHARE TNV</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="hover:text-primary cursor-pointer transition-colors">ĐIỀU ĐỘNG &amp; CA TRỰC</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-primary font-semibold">BẢNG XẾP HẠNG &amp; GIỜ CÔNG</span>
              </div>
              {/* Title & Action Bar */}
              <div className="gap-space-md flex flex-col justify-between lg:flex-row lg:items-center">
                <div className="gap-space-xs flex flex-col">
                  <h1 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
                    Bảng Xếp Hạng &amp; Giờ Công Cống Hiến
                  </h1>
                  <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                    Hệ thống ghi nhận và vinh danh giờ công tình nguyện viên, đối soát minh bạch chuỗi khối EduLedger và
                    xếp hạng cống hiến toàn quốc theo chuẩn RBAC v2.8.4.
                  </p>
                </div>
                <div className="gap-space-sm flex flex-wrap items-center">
                  <button
                    className="gap-space-xs px-space-md bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center rounded-lg py-2.5 shadow-sm transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-primary text-[18px]">help_outline</span>
                    <span>Quy chế vinh danh</span>
                  </button>
                  <button
                    className="gap-space-xs px-space-md bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center rounded-lg py-2.5 shadow-sm transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-secondary text-[18px]">event_repeat</span>
                    <span>Đổi ca / Nghỉ phép</span>
                  </button>
                  <button
                    className="gap-space-xs px-space-md bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md flex items-center rounded-lg py-2.5 shadow-sm transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                    <span>Xuất chứng nhận (.pdf)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bento 4 Thẻ Kpi Tổng Hợp */}
            <div className="gap-space-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {/* Kpi 1 */}
              <div className="bg-surface-container-lowest p-space-md relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm text-on-surface-variant font-bold tracking-wider uppercase">
                      Tổng Giờ Công Tích Lũy
                    </span>
                    <div className="gap-space-xs mt-1 flex items-baseline">
                      <span className="text-headline-xl font-headline-xl text-primary font-bold">240</span>
                      <span className="text-body-md font-body-md text-on-surface-variant font-medium">Giờ</span>
                      <span className="text-label-sm font-label-sm text-tertiary bg-surface-container ml-1 rounded px-1.5 py-0.5 font-semibold">
                        +16h tuần này
                      </span>
                    </div>
                  </div>
                  <div className="bg-primary-fixed text-on-primary-fixed-variant flex h-10 w-10 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[22px]">schedule</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-sm flex flex-col gap-1.5">
                  <div className="text-label-sm font-label-sm flex items-center justify-between">
                    <span className="text-on-surface-variant">Cấp 3 (Vàng) · Chiến dịch Thu 2024</span>
                    <span className="text-primary font-code-num font-bold">80%</span>
                  </div>
                  <div className="bg-surface-container h-1.5 w-full overflow-hidden rounded-full">
                    <div className="bg-primary h-full rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
              {/* Kpi 2 */}
              <div className="bg-surface-container-lowest p-space-md relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm text-on-surface-variant font-bold tracking-wider uppercase">
                      Thứ Hạng Toàn Quốc
                    </span>
                    <div className="gap-space-xs mt-1 flex items-baseline">
                      <span className="text-headline-xl font-headline-xl text-tertiary-container font-bold">#03</span>
                      <span className="text-body-md font-body-md text-on-surface-variant">/ 1,280 TNV</span>
                    </div>
                  </div>
                  <div className="bg-secondary-container text-on-secondary-container flex h-10 w-10 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[22px]">military_tech</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-sm text-label-sm font-label-sm flex items-center justify-between">
                  <span className="text-tertiary flex items-center gap-1 font-semibold">
                    <span className="bg-tertiary h-1.5 w-1.5 rounded-full"></span>
                    Tây Bắc: Hạng #1
                  </span>
                  <span className="bg-surface-container text-on-surface rounded-full px-2 py-0.5 font-medium">
                    Tay Lái Vàng
                  </span>
                </div>
              </div>
              {/* Kpi 3 */}
              <div className="bg-surface-container-lowest p-space-md relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm text-on-surface-variant font-bold tracking-wider uppercase">
                      Chuyến Đi &amp; Vận Đơn
                    </span>
                    <div className="gap-space-xs mt-1 flex items-baseline">
                      <span className="text-headline-xl font-headline-xl text-on-surface font-bold">28</span>
                      <span className="text-body-md font-body-md text-on-surface-variant">Chuyến xe</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-high text-primary flex h-10 w-10 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[22px]">local_shipping</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-sm text-label-sm font-label-sm flex items-center justify-between">
                  <span className="text-tertiary font-semibold">100% PoD Hợp Lệ</span>
                  <span className="text-on-surface-variant font-code-num">4,850 km an toàn</span>
                </div>
              </div>
              {/* Kpi 4 */}
              <div className="bg-surface-container-lowest p-space-md relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm text-on-surface-variant font-bold tracking-wider uppercase">
                      Giá Trị Quy Đổi Xã Hội
                    </span>
                    <div className="gap-space-xs mt-1 flex items-baseline">
                      <span className="text-headline-xl font-headline-xl text-primary font-bold">1,420</span>
                      <span className="text-body-md font-body-md text-on-surface-variant">Học Sinh</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-highest text-primary flex h-10 w-10 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[22px]">school</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-sm text-label-sm font-label-sm flex items-center justify-between">
                  <span className="text-on-surface-variant font-medium">520 Bộ PC &amp; Laptop</span>
                  <span className="text-primary font-semibold">18 Điểm Trường</span>
                </div>
              </div>
            </div>

            {/* BỘ LỌC THỜI GIAN & PHÂN HẠNG (TABS & TOOLBAR) */}
            <div className="gap-space-md bg-surface-container-lowest p-space-sm flex flex-col items-stretch justify-between rounded-xl shadow-sm lg:flex-row lg:items-center">
              {/* Tab navigation */}
              <div className="gap-space-xs flex items-center overflow-x-auto pb-1 lg:pb-0">
                <button
                  className="px-space-md bg-primary text-on-primary font-label-md text-label-md rounded-lg py-2 font-semibold whitespace-nowrap shadow-sm"
                  type="button"
                >
                  Xếp Hạng Cá Nhân
                </button>
                <button
                  className="px-space-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md rounded-lg py-2 font-medium whitespace-nowrap transition-colors"
                  type="button"
                >
                  Xếp Hạng Đội Nhóm Xe
                </button>
                <button
                  className="px-space-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md rounded-lg py-2 font-medium whitespace-nowrap transition-colors"
                  type="button"
                >
                  Kỷ Lục Vượt Đèo
                </button>
                <button
                  className="px-space-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md rounded-lg py-2 font-medium whitespace-nowrap transition-colors"
                  type="button"
                >
                  Lịch Sử Giờ Công Bản Thân
                </button>
              </div>
              {/* Filter selectors */}
              <div className="gap-space-sm flex flex-wrap items-center">
                <div className="gap-space-xs bg-surface-container-low px-space-sm text-body-sm font-body-sm text-on-surface flex items-center rounded-lg py-1.5">
                  <span className="material-symbols-outlined text-on-surface-variant text-[16px]">calendar_month</span>
                  <select
                    className="text-on-surface cursor-pointer bg-transparent pr-1 font-medium outline-none"
                    defaultValue="Tháng 10/2024"
                  >
                    <option value="Tháng 10/2024">Tháng 10/2024</option>
                    <option value="Quý 3/2024">Quý 3/2024</option>
                    <option value="Toàn niên 2024">Toàn niên 2024</option>
                  </select>
                </div>
                <div className="gap-space-xs bg-surface-container-low px-space-sm text-body-sm font-body-sm text-on-surface flex items-center rounded-lg py-1.5">
                  <span className="material-symbols-outlined text-on-surface-variant text-[16px]">location_on</span>
                  <select
                    className="text-on-surface cursor-pointer bg-transparent pr-1 font-medium outline-none"
                    defaultValue="Tây Bắc"
                  >
                    <option value="Toàn quốc">Toàn quốc (63 tỉnh thành)</option>
                    <option value="Tây Bắc">Tây Bắc (Hà Giang, Sơn La, Lai Châu)</option>
                    <option value="Miền Trung">Miền Trung &amp; Duyên hải</option>
                    <option value="Tây Nguyên">Tây Nguyên &amp; Nam Bộ</option>
                  </select>
                </div>
              </div>
            </div>

            {/* BỐ CỤC CHÍNH 7:5 */}
            <div className="gap-space-lg grid grid-cols-1 items-start lg:grid-cols-12">
              {/* CỘT TRÁI (7/12): PODIUM & BẢNG DANH SÁCH & NHẬT KÝ */}
              <div className="gap-space-lg flex flex-col lg:col-span-7">
                {/* Podium Top 3 */}
                <div className="bg-surface-container-lowest p-space-md gap-space-md flex flex-col rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="gap-space-xs flex items-center">
                      <span className="material-symbols-outlined text-primary text-[20px]">trophy</span>
                      <h3 className="text-headline-sm font-headline-sm text-on-surface">
                        Bục Vinh Danh Top 3 Toàn Quốc - Tháng 10
                      </h3>
                    </div>
                    <span className="text-label-sm font-label-sm text-tertiary bg-surface-container rounded-full px-2 py-0.5 font-semibold">
                      Đã kiểm toán EduLedger
                    </span>
                  </div>
                  {/* Visual Podium Display */}
                  <div className="gap-space-sm pt-space-md grid grid-cols-3 items-end">
                    {/* TOP 2: BẠC */}
                    <div className="flex flex-col items-center">
                      <div className="relative mb-2">
                        <div className="bg-secondary-fixed text-on-secondary-fixed flex h-14 w-14 items-center justify-center overflow-hidden rounded-full shadow-sm">
                          <img
                            className="h-full w-full object-cover"
                            alt="Trần Quốc Bảo"
                            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                          />
                        </div>
                        <span className="bg-secondary text-on-secondary font-code-num text-label-sm absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full font-bold shadow-sm">
                          2
                        </span>
                      </div>
                      <span className="font-headline-sm text-label-md text-on-surface max-w-full truncate text-center font-bold">
                        Trần Quốc Bảo
                      </span>
                      <span className="text-label-sm font-label-sm text-on-surface-variant">Đà Nẵng</span>
                      <div className="bg-surface-container mt-2 flex w-full flex-col items-center rounded-t-lg px-2 pt-3 pb-2 text-center">
                        <span className="font-code-num text-label-md text-on-surface font-bold">254 Giờ</span>
                        <span className="text-body-sm font-body-sm text-on-surface-variant text-[11px]">30 chuyến</span>
                      </div>
                    </div>
                    {/* TOP 1: VÀNG */}
                    <div className="flex flex-col items-center">
                      <div className="relative mb-2">
                        <div className="bg-primary-fixed text-primary flex h-18 w-18 items-center justify-center overflow-hidden rounded-full shadow-md">
                          <img
                            className="h-full w-full object-cover"
                            alt="Nguyễn Thị Mai Phương"
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                          />
                        </div>
                        <span className="bg-primary text-on-primary font-code-num text-label-md absolute -top-2 -right-1 flex h-7 w-7 items-center justify-center rounded-full font-bold shadow">
                          1
                        </span>
                      </div>
                      <span className="font-headline-sm text-label-md text-primary max-w-full truncate text-center font-bold">
                        Nguyễn Thị Mai Phương
                      </span>
                      <span className="text-label-sm font-label-sm text-on-surface-variant">
                        Hà Nội &amp; Bắc Giang
                      </span>
                      <div className="bg-primary-fixed mt-2 flex w-full flex-col items-center rounded-t-xl px-2 pt-5 pb-3 text-center">
                        <span className="font-code-num text-body-md text-on-primary-fixed-variant font-bold">
                          268 Giờ
                        </span>
                        <span className="text-body-sm font-body-sm text-on-primary-fixed-variant text-[12px] font-medium">
                          32 chuyến xe
                        </span>
                      </div>
                    </div>
                    {/* TOP 3: ĐỒNG (LÊ HOÀNG LONG - CHÍNH BẠN) */}
                    <div className="flex flex-col items-center">
                      <div className="relative mb-2">
                        <div className="bg-secondary-container text-on-secondary-container flex h-14 w-14 items-center justify-center overflow-hidden rounded-full shadow-sm">
                          <img
                            className="h-full w-full object-cover"
                            alt="Lê H. Long"
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                          />
                        </div>
                        <span className="bg-secondary text-on-secondary font-code-num text-label-sm absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full font-bold shadow-sm">
                          3
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-headline-sm text-label-md text-on-surface max-w-[90px] truncate font-bold">
                          Lê H. Long
                        </span>
                        <span className="bg-primary text-on-primary py-0.2 rounded px-1 text-[9px] font-bold">BẠN</span>
                      </div>
                      <span className="text-label-sm font-label-sm text-on-surface-variant">Hà Giang</span>
                      <div className="bg-surface-container-high mt-2 flex w-full flex-col items-center rounded-t-lg px-2 pt-2 pb-2 text-center">
                        <span className="font-code-num text-label-md text-primary font-bold">240 Giờ</span>
                        <span className="text-body-sm font-body-sm text-on-surface-variant text-[11px]">28 chuyến</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* BẢNG DANH SÁCH TÌNH NGUYỆN VIÊN (HẠNG 4 - HẠNG 8) */}
                <div className="bg-surface-container-lowest flex flex-col overflow-hidden rounded-xl shadow-sm">
                  <div className="p-space-md flex items-center justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-headline-sm font-headline-sm text-on-surface">Danh Sách Xếp Hạng Quốc Gia</h3>
                      <span className="text-body-sm font-body-sm text-on-surface-variant">
                        Cập nhật lúc 15:42 hôm nay · Tự động đối soát từ chuỗi nhật ký
                      </span>
                    </div>
                    <button
                      className="text-label-sm font-label-sm text-primary font-semibold hover:underline"
                      type="button"
                    >
                      Xem toàn bộ 1,280 TNV
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-surface-container-low text-on-surface-variant text-label-sm font-label-sm tracking-wider uppercase">
                          <th className="px-space-md py-2.5">Hạng</th>
                          <th className="px-space-md py-2.5">Tình Nguyện Viên</th>
                          <th className="px-space-md py-2.5">Kỹ Năng</th>
                          <th className="px-space-md py-2.5 text-center">Chuyến Xe</th>
                          <th className="px-space-md py-2.5 text-center">PoD Chuẩn</th>
                          <th className="px-space-md py-2.5 text-right">Tổng Giờ</th>
                          <th className="px-space-md py-2.5 text-center">Chi Tiết</th>
                        </tr>
                      </thead>
                      <tbody className="text-body-sm font-body-sm text-on-surface">
                        {/* Row 4 */}
                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="px-space-md font-code-num text-on-surface py-3 font-bold">#04</td>
                          <td className="px-space-md py-3">
                            <div className="gap-space-sm flex items-center">
                              <div className="bg-surface-container text-primary text-label-sm flex h-8 w-8 items-center justify-center rounded-full font-bold">
                                PM
                              </div>
                              <div className="flex flex-col">
                                <span className="text-on-surface font-medium">Phạm Đức Minh</span>
                                <span className="text-label-sm font-label-sm text-on-surface-variant">
                                  TNV-1203 · Sơn La
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="px-space-md py-3">
                            <span className="text-label-sm font-label-sm bg-surface-container text-on-surface-variant rounded px-2 py-0.5">
                              Tải nặng 3.5T
                            </span>
                          </td>
                          <td className="px-space-md font-code-num py-3 text-center">26</td>
                          <td className="px-space-md py-3 text-center">
                            <span className="text-label-sm font-label-sm text-tertiary font-semibold">100%</span>
                          </td>
                          <td className="px-space-md font-code-num text-primary py-3 text-right font-bold">218h</td>
                          <td className="px-space-md py-3 text-center">
                            <button
                              className="hover:bg-surface-container text-on-surface-variant hover:text-primary rounded p-1"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">visibility</span>
                            </button>
                          </td>
                        </tr>
                        {/* Row 5 */}
                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="px-space-md font-code-num text-on-surface py-3 font-bold">#05</td>
                          <td className="px-space-md py-3">
                            <div className="gap-space-sm flex items-center">
                              <div className="bg-surface-container text-secondary text-label-sm flex h-8 w-8 items-center justify-center rounded-full font-bold">
                                DH
                              </div>
                              <div className="flex flex-col">
                                <span className="text-on-surface font-medium">Đặng Quốc Hùng</span>
                                <span className="text-label-sm font-label-sm text-on-surface-variant">
                                  TNV-1452 · Lai Châu
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="px-space-md py-3">
                            <span className="text-label-sm font-label-sm bg-surface-container text-on-surface-variant rounded px-2 py-0.5">
                              Cứu hộ đèo
                            </span>
                          </td>
                          <td className="px-space-md font-code-num py-3 text-center">24</td>
                          <td className="px-space-md py-3 text-center">
                            <span className="text-label-sm font-label-sm text-tertiary font-semibold">98.5%</span>
                          </td>
                          <td className="px-space-md font-code-num text-primary py-3 text-right font-bold">205h</td>
                          <td className="px-space-md py-3 text-center">
                            <button
                              className="hover:bg-surface-container text-on-surface-variant hover:text-primary rounded p-1"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">visibility</span>
                            </button>
                          </td>
                        </tr>
                        {/* Row 6 */}
                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="px-space-md font-code-num text-on-surface py-3 font-bold">#06</td>
                          <td className="px-space-md py-3">
                            <div className="gap-space-sm flex items-center">
                              <div className="bg-surface-container text-primary text-label-sm flex h-8 w-8 items-center justify-center rounded-full font-bold">
                                VK
                              </div>
                              <div className="flex flex-col">
                                <span className="text-on-surface font-medium">Vũ Đình Khoa</span>
                                <span className="text-label-sm font-label-sm text-on-surface-variant">
                                  TNV-1455 · Nghệ An
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="px-space-md py-3">
                            <span className="text-label-sm font-label-sm bg-surface-container text-on-surface-variant rounded px-2 py-0.5">
                              Kỹ thuật viên PC
                            </span>
                          </td>
                          <td className="px-space-md font-code-num py-3 text-center">22</td>
                          <td className="px-space-md py-3 text-center">
                            <span className="text-label-sm font-label-sm text-tertiary font-semibold">100%</span>
                          </td>
                          <td className="px-space-md font-code-num text-primary py-3 text-right font-bold">192h</td>
                          <td className="px-space-md py-3 text-center">
                            <button
                              className="hover:bg-surface-container text-on-surface-variant hover:text-primary rounded p-1"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">visibility</span>
                            </button>
                          </td>
                        </tr>
                        {/* Row 7 */}
                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="px-space-md font-code-num text-on-surface py-3 font-bold">#07</td>
                          <td className="px-space-md py-3">
                            <div className="gap-space-sm flex items-center">
                              <div className="bg-surface-container text-secondary text-label-sm flex h-8 w-8 items-center justify-center rounded-full font-bold">
                                HT
                              </div>
                              <div className="flex flex-col">
                                <span className="text-on-surface font-medium">Hoàng Minh Tuấn</span>
                                <span className="text-label-sm font-label-sm text-on-surface-variant">
                                  TNV-1105 · Cao Bằng
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="px-space-md py-3">
                            <span className="text-label-sm font-label-sm bg-surface-container text-on-surface-variant rounded px-2 py-0.5">
                              Đoàn thể địa phương
                            </span>
                          </td>
                          <td className="px-space-md font-code-num py-3 text-center">21</td>
                          <td className="px-space-md py-3 text-center">
                            <span className="text-label-sm font-label-sm text-tertiary font-semibold">97.0%</span>
                          </td>
                          <td className="px-space-md font-code-num text-primary py-3 text-right font-bold">186h</td>
                          <td className="px-space-md py-3 text-center">
                            <button
                              className="hover:bg-surface-container text-on-surface-variant hover:text-primary rounded p-1"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">visibility</span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Nhật Ký Tích Lũy Giờ Công Cá Nhân Gần Đây */}
                <div className="bg-surface-container-lowest p-space-md gap-space-sm flex flex-col rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="gap-space-xs flex items-center">
                      <span className="material-symbols-outlined text-primary text-[20px]">history_edu</span>
                      <h3 className="text-headline-sm font-headline-sm text-on-surface">
                        Nhật Ký Tích Lũy Giờ Công Gần Đây
                      </h3>
                    </div>
                    <span className="text-label-sm font-label-sm text-on-surface-variant">
                      TNV: Lê Hoàng Long (TNV-VCH-88)
                    </span>
                  </div>
                  <div className="gap-space-sm mt-2 flex flex-col">
                    {/* Item 1 */}
                    <div className="p-space-sm bg-surface-container-low flex items-center justify-between rounded-lg">
                      <div className="gap-space-sm flex items-start">
                        <div className="bg-surface-container text-primary mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg">
                          <span className="material-symbols-outlined text-[18px]">pending</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-body-md text-on-surface font-medium">
                            Vận chuyển #WB-2024-NW08 THCS Mường Lát
                          </span>
                          <span className="text-label-sm font-label-sm text-on-surface-variant">
                            24/10/2024 · 07:00 - 15:00 · Đang duyệt PoD &amp; kiểm tra geofence
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-code-num text-body-md text-primary font-bold">+8 giờ</span>
                        <span className="text-label-sm font-label-sm text-secondary bg-surface-container rounded px-2 py-0.5">
                          Chờ duyệt
                        </span>
                      </div>
                    </div>
                    {/* Item 2 */}
                    <div className="p-space-sm bg-surface-container-low flex items-center justify-between rounded-lg">
                      <div className="gap-space-sm flex items-start">
                        <div className="bg-tertiary-fixed text-on-tertiary-fixed mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg">
                          <span className="material-symbols-outlined text-[18px]">verified</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-body-md text-on-surface font-medium">
                            Vận chuyển thiết bị Mèo Vạc, Hà Giang (35 Bộ PC)
                          </span>
                          <span className="text-label-sm font-label-sm text-on-surface-variant">
                            23/10/2024 · 05:30 - 15:30 · Đã đối soát chuỗi khối EduLedger
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-code-num text-body-md text-tertiary font-bold">+10 giờ</span>
                        <span className="text-label-sm font-label-sm text-tertiary bg-surface-container rounded px-2 py-0.5">
                          Đã xác nhận
                        </span>
                      </div>
                    </div>
                    {/* Item 3 */}
                    <div className="p-space-sm bg-surface-container-low flex items-center justify-between rounded-lg">
                      <div className="gap-space-sm flex items-start">
                        <div className="bg-surface-container text-primary mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg">
                          <span className="material-symbols-outlined text-[18px]">inventory_2</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-body-md text-on-surface font-medium">
                            Hỗ trợ phân loại &amp; đóng gói thiết bị tại Tổng Kho HUB-01
                          </span>
                          <span className="text-label-sm font-label-sm text-on-surface-variant">
                            21/10/2024 · 08:00 - 14:00 · Trực tiếp thủ kho ký nhận
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-code-num text-body-md text-tertiary font-bold">+6 giờ</span>
                        <span className="text-label-sm font-label-sm text-tertiary bg-surface-container rounded px-2 py-0.5">
                          Đã xác nhận
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* CỘT PHẢI (5/12): HỒ SƠ TÌNH NGUYỆN VIÊN, HUY HIỆU & RBAC POLICY */}
              <div className="gap-space-lg flex flex-col lg:col-span-5">
                {/* CARD 1: HỒ SƠ TÌNH NGUYỆN VIÊN ĐẠI DIỆN */}
                <div className="bg-surface-container-lowest p-space-md gap-space-md flex flex-col rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-label-sm font-label-sm text-on-surface-variant font-bold tracking-wider uppercase">
                      Hồ Sơ Cống Hiến Cá Nhân
                    </span>
                    <span className="text-label-sm font-label-sm text-tertiary flex items-center gap-1 font-semibold">
                      <span className="bg-tertiary h-2 w-2 rounded-full"></span>
                      Đang hoạt động
                    </span>
                  </div>
                  <div className="gap-space-md flex items-center">
                    <div className="bg-primary-fixed text-on-primary-fixed-variant flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl shadow">
                      <img
                        className="h-full w-full object-cover"
                        alt="Portrait"
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                      />
                    </div>
                    <div className="flex min-w-0 flex-col">
                      <div className="flex items-center gap-2">
                        <h4 className="text-headline-sm font-headline-sm text-on-surface truncate font-bold">
                          Lê Hoàng Long
                        </h4>
                        <span className="bg-primary text-on-primary py-0.2 font-code-num rounded px-1.5 text-[10px] font-bold">
                          TNV-VCH-88
                        </span>
                      </div>
                      <span className="text-body-sm font-body-sm text-on-surface-variant mt-0.5 font-medium">
                        Đội Trưởng Đội Vượt Đèo Hà Giang &amp; Tây Bắc
                      </span>
                      <div className="gap-space-xs text-label-sm font-label-sm text-secondary mt-1 flex items-center">
                        <span className="material-symbols-outlined text-[14px]">shield_person</span>
                        <span>Cấp 3: Tình Nguyện Viên Nòng Cốt Vàng</span>
                      </div>
                    </div>
                  </div>
                  {/* Level Up Stepper */}
                  <div className="p-space-sm bg-surface-container-low flex flex-col gap-1.5 rounded-lg">
                    <div className="text-label-sm font-label-sm flex items-center justify-between">
                      <span className="text-on-surface font-medium">Tiến trình lên Cấp 4 (Hiệp Sĩ Áo Xanh)</span>
                      <span className="font-code-num text-primary font-bold">240 / 300 Giờ</span>
                    </div>
                    <div className="bg-surface-container h-2 w-full overflow-hidden rounded-full">
                      <div
                        className="bg-primary h-full rounded-full transition-all duration-500"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                    <span className="text-label-sm font-label-sm text-on-surface-variant">
                      Cần thêm 60 giờ công để nhận danh xưng Hiệp Sĩ và huân chương cống hiến từ Bộ GD&amp;ĐT.
                    </span>
                  </div>
                </div>
                {/* CARD 2: BỘ HUY HIỆU & CHỨNG NHẬN ĐIỆN TỬ */}
                <div className="bg-surface-container-lowest p-space-md gap-space-md flex flex-col rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="gap-space-xs flex items-center">
                      <span className="material-symbols-outlined text-primary text-[20px]">military_tech</span>
                      <h3 className="text-headline-sm font-headline-sm text-on-surface">Bộ Huy Hiệu &amp; Vinh Danh</h3>
                    </div>
                    <span className="text-label-sm font-label-sm text-primary font-bold">3/4 Đã Đạt</span>
                  </div>
                  <div className="gap-space-sm grid grid-cols-2">
                    {/* Badge 1 */}
                    <div className="p-space-sm bg-surface-container-low flex flex-col items-center gap-1.5 rounded-lg text-center">
                      <div className="bg-tertiary-fixed text-on-tertiary-fixed flex h-10 w-10 items-center justify-center rounded-full">
                        <span className="material-symbols-outlined text-[20px]">terrain</span>
                      </div>
                      <span className="text-label-md font-label-md text-on-surface font-bold">10,000km Vùng Cao</span>
                      <span className="text-body-sm font-body-sm text-on-surface-variant text-[11px]">
                        Đã trao tặng
                      </span>
                    </div>
                    {/* Badge 2 */}
                    <div className="p-space-sm bg-surface-container-low flex flex-col items-center gap-1.5 rounded-lg text-center">
                      <div className="bg-primary-fixed text-on-primary-fixed-variant flex h-10 w-10 items-center justify-center rounded-full">
                        <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
                      </div>
                      <span className="text-label-md font-label-md text-on-surface font-bold">
                        Chiến Sĩ Áo Xanh 2024
                      </span>
                      <span className="text-body-sm font-body-sm text-on-surface-variant text-[11px]">
                        Đã trao tặng
                      </span>
                    </div>
                    {/* Badge 3 */}
                    <div className="p-space-sm bg-surface-container-low flex flex-col items-center gap-1.5 rounded-lg text-center">
                      <div className="bg-tertiary-fixed text-on-tertiary-fixed flex h-10 w-10 items-center justify-center rounded-full">
                        <span className="material-symbols-outlined text-[20px]">verified_user</span>
                      </div>
                      <span className="text-label-md font-label-md text-on-surface font-bold">100% PoD Hoàn Hảo</span>
                      <span className="text-body-sm font-body-sm text-on-surface-variant text-[11px]">
                        28/28 Biên bản
                      </span>
                    </div>
                    {/* Badge 4 (Locked) */}
                    <div className="p-space-sm bg-surface-container flex flex-col items-center gap-1.5 rounded-lg text-center opacity-70">
                      <div className="bg-surface-container-highest text-on-surface-variant flex h-10 w-10 items-center justify-center rounded-full">
                        <span className="material-symbols-outlined text-[20px]">emergency</span>
                      </div>
                      <span className="text-label-md font-label-md text-on-surface font-bold">Cứu Hộ Đèo Núi</span>
                      <span className="text-body-sm font-body-sm text-on-surface-variant text-[11px]">
                        Đang khóa (2/3 ca)
                      </span>
                    </div>
                  </div>
                  <button
                    className="gap-space-xs bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md flex w-full items-center justify-center rounded-lg py-2.5 font-bold transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>Tải Bằng Khen Kỹ Thuật Số (PDF)</span>
                  </button>
                </div>
                {/* CARD 3: QUY CHUẨN GIỜ CÔNG & PHÂN QUYỀN RBAC (DOCUMENT_55) */}
                <div className="bg-surface-container-lowest p-space-md gap-space-sm flex flex-col rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="gap-space-xs flex items-center">
                      <span className="material-symbols-outlined text-secondary text-[20px]">policy</span>
                      <h3 className="text-headline-sm font-headline-sm text-on-surface">
                        Quy Chuẩn Giờ Công RBAC v2.8.4
                      </h3>
                    </div>
                    <span className="text-label-sm font-label-sm font-code-num text-on-surface-variant font-semibold">
                      DOC-55
                    </span>
                  </div>
                  <div className="gap-space-sm text-body-sm font-body-sm text-on-surface-variant mt-1 flex flex-col">
                    <div className="gap-space-sm flex items-start">
                      <span className="bg-surface-container text-primary text-label-sm mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-bold">
                        1
                      </span>
                      <p>
                        <strong className="text-on-surface font-medium">Đối soát tự động Geofence:</strong> Giờ công chỉ
                        kích hoạt khi GPS phương tiện nằm trong phạm vi 500m của kho vận và điểm trường thụ hưởng.
                      </p>
                    </div>
                    <div className="gap-space-sm flex items-start">
                      <span className="bg-surface-container text-primary text-label-sm mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-bold">
                        2
                      </span>
                      <p>
                        <strong className="text-on-surface font-medium">Bảo chứng chuỗi EduLedger:</strong> Không cho
                        phép điều chỉnh giờ công thủ công. Mọi mốc thời gian đều được niêm phong mật mã SHA-256 đối soát
                        trực tiếp Admin Tổng.
                      </p>
                    </div>
                    <div className="gap-space-sm flex items-start">
                      <span className="bg-surface-container text-primary text-label-sm mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-bold">
                        3
                      </span>
                      <p>
                        <strong className="text-on-surface font-medium">Đặc quyền cấp bậc:</strong> TNV từ Cấp 3 trở lên
                        được bảo trợ 100% chi phí bảo hiểm tai nạn nghề nghiệp trong suốt các cung đường đèo hiểm trở.
                      </p>
                    </div>
                  </div>
                  {/* Audit Hash Stamp */}
                  <div className="mt-space-sm p-space-xs bg-surface-container-low font-code-num text-label-sm flex items-center justify-between rounded">
                    <span className="text-on-surface-variant">Audit Hash:</span>
                    <span className="text-primary max-w-[200px] truncate font-semibold">
                      SHA256: 7d8a901ff...f3b890a
                    </span>
                    <span className="material-symbols-outlined text-tertiary text-[14px]">lock</span>
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

export default VolunteerLeaderboardPage;
