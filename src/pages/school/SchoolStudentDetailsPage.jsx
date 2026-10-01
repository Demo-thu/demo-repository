import { Link } from "react-router-dom";

export default function SchoolStudentDetailsPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface flex antialiased">
      {/* Sidebar */}
      <aside className="bg-surface-container-low fixed top-0 left-0 z-50 flex h-full w-72 flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="px-space-md gap-space-sm bg-surface-container flex h-16 items-center">
            <div className="bg-primary text-on-primary flex h-9 w-9 items-center justify-center rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-[22px]">school</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary leading-tight font-bold tracking-tight">
                EduShare VN
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                Cổng Trường Học
              </span>
            </div>
          </div>

          <div className="px-space-md py-space-sm">
            <span className="font-label-sm text-label-sm text-secondary px-space-xs font-semibold tracking-wider uppercase">
              Cổng Trường Học
            </span>
            <nav className="mt-space-xs flex flex-col gap-1">
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface flex items-center rounded-lg py-2 transition-colors"
                to="/school/request"
              >
                <span className="material-symbols-outlined text-[20px]">assignment</span>
                <span className="font-body-md text-body-md">Yêu cầu tài trợ</span>
              </Link>
              <Link
                className="gap-space-sm px-space-sm bg-primary-container text-on-primary flex items-center rounded-lg py-2 font-medium shadow-sm transition-colors"
                to="/school/student-details"
              >
                <span className="material-symbols-outlined text-[20px]">groups</span>
                <span className="font-body-md text-body-md">Học sinh tiếp nhận</span>
              </Link>
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center rounded-lg py-2 transition-all"
                to="#"
              >
                <span className="material-symbols-outlined text-[20px]">description</span>
                <span className="font-body-md text-body-md">Biên bản bàn giao (PoD)</span>
              </Link>
            </nav>
          </div>

          <div className="px-space-md py-space-xs">
            <span className="font-label-sm text-label-sm text-secondary px-space-xs font-semibold tracking-wider uppercase">
              Kho &amp; Tiếp Nhận
            </span>
            <nav className="mt-space-xs flex flex-col gap-1">
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center rounded-lg py-2 transition-all"
                to="#"
              >
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span className="font-body-md text-body-md">Danh mục thiết bị phân bổ</span>
              </Link>
              <Link
                className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center rounded-lg py-2 transition-all"
                to="#"
              >
                <span className="material-symbols-outlined text-[20px]">history</span>
                <span className="font-body-md text-body-md">Lịch sử đợt giao</span>
              </Link>
            </nav>
          </div>
        </div>

        <div className="p-space-md m-space-sm bg-surface-container gap-space-xs flex flex-col rounded-xl">
          <div className="gap-space-xs text-primary flex items-center font-semibold">
            <span className="material-symbols-outlined text-[18px]">support_agent</span>
            <span className="font-label-md text-label-md">Hỗ trợ kỹ thuật 24/7</span>
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant flex flex-col">
            <span>Tổng đài: 1800 6868 (Miễn phí)</span>
            <span>Email: support@edushare.edu.vn</span>
          </div>
          <div className="mt-space-xs pt-space-xs text-on-surface-variant font-code-num text-body-sm flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-secondary">Phiên bản Quốc gia</span>
            <span className="font-label-sm text-label-sm text-primary font-semibold">v2.8.4</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex min-h-screen flex-1 flex-col pl-72">
        <header className="bg-surface/90 px-space-md gap-space-md fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="max-w-xl flex-1">
            <div className="relative flex w-full items-center">
              <span className="material-symbols-outlined text-secondary absolute left-3 text-[20px]">search</span>
              <input
                className="bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:bg-surface-container w-full rounded-lg py-2 pr-4 pl-10 transition-colors outline-none"
                placeholder="Tìm kiếm học sinh, mã hồ sơ, mã định danh thiết bị..."
                type="text"
              />
            </div>
          </div>
          <div className="gap-space-md flex items-center">
            <div className="px-space-sm bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm hidden items-center rounded-full py-1 font-medium xl:flex">
              <span className="bg-tertiary mr-2 h-2 w-2 rounded-full"></span>
              Vai trò: Đại diện Trường học (BGH)
            </div>
            <button
              className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface relative rounded-lg p-2 transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="bg-error absolute top-1.5 right-1.5 h-2 w-2 rounded-full"></span>
            </button>
            <div className="gap-space-sm pl-space-xs flex items-center">
              <div className="flex hidden flex-col text-right sm:flex">
                <span className="font-label-md text-label-md text-on-surface font-semibold">Thầy Hà Văn Tiêu</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant max-w-[220px] truncate">
                  Hiệu trưởng - PTDTBT THCS Mường Lát
                </span>
              </div>
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-surface relative min-h-screen pt-16">
          <div className="px-space-md py-space-md lg:px-space-xl lg:py-space-lg gap-space-lg text-on-surface flex w-full flex-col">
            {/* Breadcrumb & Action Toolbar */}
            <div className="gap-space-md flex flex-col justify-between md:flex-row md:items-center">
              <div className="flex flex-col gap-1">
                <nav className="gap-space-xs text-body-sm font-body-sm text-secondary flex items-center">
                  <Link className="hover:text-primary transition-colors" to="#">
                    Cổng Trường Học
                  </Link>
                  <span className="material-symbols-outlined text-outline text-[16px]">chevron_right</span>
                  <Link className="hover:text-primary transition-colors" to="#">
                    Học sinh tiếp nhận
                  </Link>
                  <span className="material-symbols-outlined text-outline text-[16px]">chevron_right</span>
                  <span className="text-on-surface font-semibold">Hồ sơ #HS-ML-2024-001</span>
                </nav>
                <div className="gap-space-sm mt-1 flex items-center">
                  <Link
                    className="bg-surface-container hover:bg-surface-container-high text-on-surface inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
                    to="#"
                  >
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  </Link>
                  <h1 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                    Chi tiết Tiếp nhận Thiết bị &amp; Học tập
                  </h1>
                  <span className="bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm rounded-full px-2.5 py-0.5 font-semibold tracking-wide">
                    DỰ ÁN #SCH-ML-2024-08
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="gap-space-xs sm:gap-space-sm flex flex-wrap items-center">
                <button
                  className="bg-surface-container hover:bg-surface-container-high text-on-surface text-label-md font-label-md inline-flex items-center gap-1.5 rounded-lg px-3 py-2 shadow-sm transition-all"
                  type="button"
                  onClick={() => window.print()}
                >
                  <span className="material-symbols-outlined text-secondary text-[18px]">print</span>
                  <span>In phiếu bàn giao</span>
                </button>
                <button
                  className="bg-surface-container hover:bg-surface-container-high text-on-surface text-label-md font-label-md inline-flex items-center gap-1.5 rounded-lg px-3 py-2 shadow-sm transition-all"
                  type="button"
                >
                  <span className="material-symbols-outlined text-secondary text-[18px]">picture_as_pdf</span>
                  <span>Xuất PDF</span>
                </button>
                <button
                  className="bg-primary-container hover:bg-primary text-on-primary text-label-md font-label-md inline-flex items-center gap-1.5 rounded-lg px-4 py-2 shadow-sm transition-all"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">edit_note</span>
                  <span>Cập nhật học tập</span>
                </button>
              </div>
            </div>

            {/* Student Profile Hero Card */}
            <div className="bg-surface-container-lowest p-space-md sm:p-space-lg gap-space-md relative flex w-full flex-col overflow-hidden rounded-xl shadow-sm">
              <div className="bg-primary/5 pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full blur-3xl"></div>
              <div className="gap-space-lg relative z-10 grid grid-cols-1 items-stretch lg:grid-cols-12">
                {/* Col 1: Avatar & Identity (5 cols on lg) -> changed to 4 in html */}
                <div className="gap-space-md border-surface-container pb-space-md lg:pr-space-md flex flex-col items-center border-b sm:flex-row sm:items-start lg:col-span-4 lg:border-r lg:border-b-0 lg:pb-0">
                  <div className="bg-surface-container ring-primary/10 relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-xl shadow-inner ring-2 sm:h-32 sm:w-32">
                    <img
                      alt="Portrait"
                      className="h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                    />
                    <div
                      className="bg-tertiary text-on-tertiary absolute right-1.5 bottom-1.5 flex items-center justify-center rounded-md p-1 shadow"
                      title="Đã đối soát VNeID"
                    >
                      <span className="material-symbols-outlined text-[16px]">verified_user</span>
                    </div>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-1 text-center sm:text-left">
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                      <h2 className="font-headline-md text-headline-md text-on-surface leading-tight font-bold">
                        Thào A Súa
                      </h2>
                      <span className="bg-surface-container text-primary font-code-num text-label-sm rounded px-2 py-0.5 font-bold">
                        #HS-ML-2024-001
                      </span>
                    </div>
                    <span className="text-body-sm font-body-sm text-secondary">
                      Sinh ngày: 15/05/2010 (14 tuổi) • Dân tộc: Mông
                    </span>
                    <div className="mt-2 flex flex-wrap justify-center gap-1.5 sm:justify-start">
                      <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm inline-flex items-center gap-1 rounded-md px-2.5 py-1 font-semibold">
                        <span className="material-symbols-outlined text-[14px]">fact_check</span> Xác nhận Hộ nghèo
                      </span>
                      <span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm inline-flex items-center gap-1 rounded-md px-2.5 py-1 font-semibold">
                        <span className="material-symbols-outlined text-[14px]">school</span> Lớp 8A Bán Trú
                      </span>
                    </div>
                  </div>
                </div>

                {/* Col 2: Residence & Background (3 cols on lg) */}
                <div className="bg-surface-container-low border-surface-container flex flex-col justify-between gap-2 rounded-xl border p-3.5 lg:col-span-3">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1.5 font-semibold tracking-wider uppercase">
                      <span className="material-symbols-outlined text-primary text-[18px]">home_pin</span> Địa bàn cư
                      trú
                    </span>
                    <span className="font-body-md text-body-md text-on-surface leading-snug font-semibold">
                      Thôn Bản Lát, Xã Tam Chung, Huyện Mường Lát, Tỉnh Thanh Hóa
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant bg-surface-container-lowest/60 border-surface-container/50 rounded-lg border p-2.5 leading-relaxed">
                    Bố mẹ làm nương rẫy thu nhập bấp bênh, nhà cách trường 14km đường đèo hiểm trở, thuộc diện bán trú
                    toàn phần tại ký túc xá trường.
                  </p>
                </div>

                {/* Col 3: Guardians & Representatives (3 cols on lg) */}
                <div className="bg-surface-container-low border-surface-container flex flex-col justify-between gap-2 rounded-xl border p-3.5 lg:col-span-3">
                  <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1.5 font-semibold tracking-wider uppercase">
                    <span className="material-symbols-outlined text-primary text-[18px]">shield_person</span> Bảo trợ
                    &amp; Phụ trách
                  </span>
                  <div className="text-body-sm font-body-sm flex flex-col gap-2">
                    <div className="border-surface-container/70 flex items-center justify-between border-b py-1">
                      <span className="text-secondary text-[12px]">GV Chủ nhiệm:</span>
                      <span className="text-on-surface font-semibold">Thầy Lò Văn Thuận</span>
                    </div>
                    <div className="border-surface-container/70 flex items-center justify-between border-b py-1">
                      <span className="text-secondary text-[12px]">Đại diện BGH:</span>
                      <span className="text-on-surface font-semibold">Thầy Hà Văn Tiêu</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-secondary text-[12px]">Người giám hộ:</span>
                      <span className="text-on-surface font-semibold">Thào A Páo (Bố)</span>
                    </div>
                  </div>
                </div>

                {/* Col 4: Beneficiary Status & Batch (2 cols on lg) */}
                <div className="gap-space-sm bg-surface-container-low border-surface-container flex flex-col items-center justify-between rounded-xl border p-3.5 text-center sm:items-start lg:col-span-2 lg:items-end lg:text-right">
                  <div className="flex w-full flex-col items-center gap-1.5 lg:items-end">
                    <div className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#f0fdf4] px-3 py-1.5 text-[#166534] shadow-sm lg:w-auto">
                      <span className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-[#16a34a]"></span>
                      <span className="font-label-sm text-label-sm text-[11px] font-bold tracking-tight">
                        ĐANG THỤ HƯỞNG
                      </span>
                    </div>
                    <span className="font-label-sm text-secondary mt-1 text-[11px] tracking-wider uppercase">
                      Đợt cấp phát gần nhất
                    </span>
                    <span className="font-code-num text-body-md text-primary font-bold">24/10/2024</span>
                    <span className="text-label-sm font-label-sm text-secondary bg-surface-container rounded px-2 py-0.5">
                      Đợt 3 • 2024
                    </span>
                  </div>
                  <div className="font-label-sm text-tertiary flex items-center gap-1 pt-1 text-[11px] font-medium">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    <span>Hồ sơ hợp lệ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Stats Grid (4 key telemetry indicators) */}
            <div className="gap-space-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest p-space-md gap-space-sm flex flex-col justify-between rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold tracking-wider uppercase">
                    Gói Hỗ Trợ Đã Cấp
                  </span>
                  <div className="bg-surface-container text-primary flex h-8 w-8 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[18px]">laptop_mac</span>
                  </div>
                </div>
                <div>
                  <span className="font-headline-sm text-headline-sm text-on-surface block leading-tight font-bold">
                    Laptop &amp; Học Liệu
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary mt-0.5 block truncate">
                    Dell 5520 + Ba lô + Giáo trình Tin 8
                  </span>
                </div>
                <div className="text-label-sm font-label-sm text-tertiary flex items-center gap-1.5 pt-2">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>Phân bổ 100% đầy đủ phụ kiện</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-surface-container-lowest p-space-md gap-space-sm flex flex-col justify-between rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold tracking-wider uppercase">
                    Thời Gian Thực Hành
                  </span>
                  <div className="bg-secondary-container text-on-secondary-fixed flex h-8 w-8 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline-lg text-headline-lg text-on-surface font-bold">18.5</span>
                    <span className="font-body-md text-body-md text-secondary">Giờ / tuần</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-secondary mt-0.5 block">
                    Vượt chỉ tiêu tối thiểu (15h/tuần)
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="bg-surface-container h-1.5 w-full overflow-hidden rounded-full">
                  <div className="bg-primary h-full rounded-full" style={{ width: "82%" }}></div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-surface-container-lowest p-space-md gap-space-sm flex flex-col justify-between rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold tracking-wider uppercase">
                    Kết Quả Môn Tin Học
                  </span>
                  <div className="bg-surface-container-high text-primary flex h-8 w-8 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[18px]">trending_up</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline-lg text-headline-lg text-primary font-bold">8.5</span>
                    <span className="font-body-md text-body-md text-secondary">/ 10 Điểm</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-secondary mt-0.5 block">
                    +2.0 điểm so với đầu học kỳ I
                  </span>
                </div>
                <div className="text-label-sm font-label-sm text-tertiary flex items-center gap-1.5 pt-2">
                  <span className="material-symbols-outlined text-[16px]">military_tech</span>
                  <span>Học sinh giỏi bộ môn Tin học</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-surface-container-lowest p-space-md gap-space-sm flex flex-col justify-between rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold tracking-wider uppercase">
                    Tình Trạng Phần Cứng
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f0fdf4] text-[#166534]">
                    <span className="material-symbols-outlined text-[18px]">health_and_safety</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline-lg text-headline-lg font-bold text-[#166534]">100%</span>
                    <span className="font-body-md text-body-md text-secondary">Ổn định</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-secondary mt-0.5 block">
                    Kiểm định bởi KTV EduShare
                  </span>
                </div>
                <div className="text-label-sm font-label-sm text-secondary flex items-center gap-1.5 pt-2">
                  <span className="material-symbols-outlined text-[16px]">event_repeat</span>
                  <span>Kỳ bảo dưỡng kế tiếp: 15/12/2024</span>
                </div>
              </div>
            </div>

            {/* Main Asymmetric Workspace (7 : 5 ratio) */}
            <div className="gap-space-lg grid grid-cols-1 items-start lg:grid-cols-12">
              {/* LEFT WORKSPACE (7 cols): Hardware details, Verified Docs, Handover Evidence */}
              <div className="gap-space-lg flex min-w-0 flex-col lg:col-span-7">
                {/* Section: Equipment & Digital QR Passport */}
                <div className="bg-surface-container-lowest p-space-md sm:p-space-lg gap-space-md flex flex-col rounded-xl shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">devices</span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Thiết Bị Được Phân Bổ &amp; Mã QR Định Danh
                      </h2>
                    </div>
                    <span className="text-label-sm font-code-num rounded bg-[#eff6ff] px-2.5 py-1 font-semibold text-[#1e40af]">
                      ASSET-ID: #QR-PC-ML01
                    </span>
                  </div>
                  {/* Hardware Detail Grid */}
                  <div className="p-space-md bg-surface-container-low gap-space-md flex flex-col items-center rounded-lg sm:flex-row">
                    <div className="bg-surface-container-lowest flex h-24 w-24 flex-shrink-0 flex-col items-center justify-center rounded-lg p-2 text-center shadow-inner">
                      {/* Inline Stylized QR code representation */}
                      <svg className="text-on-surface h-full w-full" fill="currentColor" viewBox="0 0 100 100">
                        <rect
                          fill="none"
                          height="24"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="4"
                          width="24"
                          x="10"
                          y="10"
                        ></rect>
                        <rect height="12" width="12" x="16" y="16"></rect>
                        <rect
                          fill="none"
                          height="24"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="4"
                          width="24"
                          x="66"
                          y="10"
                        ></rect>
                        <rect height="12" width="12" x="72" y="16"></rect>
                        <rect
                          fill="none"
                          height="24"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="4"
                          width="24"
                          x="10"
                          y="66"
                        ></rect>
                        <rect height="12" width="12" x="16" y="72"></rect>
                        <rect height="8" width="8" x="42" y="14"></rect>
                        <rect height="6" width="6" x="52" y="24"></rect>
                        <rect height="16" width="16" x="42" y="44"></rect>
                        <rect height="8" width="8" x="66" y="44"></rect>
                        <rect height="12" width="12" x="78" y="66"></rect>
                        <rect height="12" width="8" x="44" y="76"></rect>
                      </svg>
                      <span className="font-code-num text-label-sm text-secondary mt-1 font-bold">7X89KL2</span>
                    </div>
                    <div className="gap-x-space-md text-body-sm font-body-sm grid flex-1 grid-cols-1 gap-y-2 sm:grid-cols-2">
                      <div>
                        <span className="text-secondary block">Dòng máy &amp; Thông số:</span>
                        <span className="text-on-surface font-semibold">Dell Latitude 5520 (Grade A)</span>
                        <span className="text-on-surface-variant text-label-sm font-code-num block">
                          Core i5-1145G7 | RAM 8GB | SSD 256GB
                        </span>
                      </div>
                      <div>
                        <span className="text-secondary block">Đơn vị tài trợ chính:</span>
                        <span className="text-primary font-semibold">Tập đoàn FPT &amp; Quỹ Hy Vọng</span>
                        <span className="text-on-surface-variant text-label-sm block">Chiến dịch Vì Em Hiếu Học</span>
                      </div>
                      <div>
                        <span className="text-secondary block">Tình trạng pin &amp; Sạc:</span>
                        <span className="text-tertiary font-medium">Pin 98% (Health OK) • Adapter 65W zin</span>
                      </div>
                      <div>
                        <span className="text-secondary block">Thời hạn bảo trợ kỹ thuật:</span>
                        <span className="text-on-surface font-medium">36 tháng (Đến 24/10/2027)</span>
                      </div>
                    </div>
                  </div>
                  <div className="gap-space-xs text-label-sm font-label-sm grid grid-cols-1 sm:grid-cols-3">
                    <div className="bg-surface-container-low flex items-center gap-2 rounded p-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">terminal</span>
                      <span>Hệ điều hành EduOS Vietnam Core</span>
                    </div>
                    <div className="bg-surface-container-low flex items-center gap-2 rounded p-2">
                      <span className="material-symbols-outlined text-tertiary text-[18px]">extension</span>
                      <span>Tích hợp sẵn Scratch 3.0 &amp; Python 3</span>
                    </div>
                    <div className="bg-surface-container-low flex items-center gap-2 rounded p-2">
                      <span className="material-symbols-outlined text-secondary text-[18px]">menu_book</span>
                      <span>Kho SGK Số Bộ GD&amp;ĐT offline</span>
                    </div>
                  </div>
                </div>

                {/* Section: Photographic Verification at Mountain School Point */}
                <div className="bg-surface-container-lowest p-space-md sm:p-space-lg gap-space-md flex flex-col rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">photo_camera</span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Hình Ảnh Bàn Giao Thực Tế Tại Điểm Trường
                      </h2>
                    </div>
                    <span className="font-code-num text-label-sm text-secondary">GEO: 20.505°N - 104.622°E</span>
                  </div>
                  {/* Large Photo Canvas matching the inspiration ceremony */}
                  <div className="bg-surface-container relative w-full overflow-hidden rounded-xl shadow-inner">
                    <img
                      alt="Bàn giao"
                      className="h-80 w-full object-cover sm:h-96"
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                    />
                    <div className="p-space-md from-inverse-surface/90 via-inverse-surface/50 text-inverse-on-surface absolute inset-x-0 bottom-0 flex flex-col justify-between gap-2 bg-gradient-to-t to-transparent sm:flex-row sm:items-end">
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-on-primary font-bold">
                          Lễ trao tặng phòng máy &amp; thiết bị học tập cá nhân
                        </span>
                        <span className="font-body-sm text-body-sm opacity-90">
                          Điểm trường chính PTDTBT THCS Mường Lát - Xã Tam Chung, Thanh Hóa
                        </span>
                      </div>
                      <div className="bg-surface/20 text-label-sm font-code-num flex items-center gap-2 self-start rounded-full px-3 py-1 backdrop-blur-md sm:self-auto">
                        <span className="material-symbols-outlined text-tertiary-fixed text-[16px]">verified</span>
                        <span>EduShare Ledger #TX-8921-ML</span>
                      </div>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Biên bản xác nhận: Thiết bị được mở hộp niêm phong, kích hoạt hệ điều hành giáo dục và trao tận tay
                    em Thào A Súa với sự hiện diện của Hiệu trưởng, Giáo viên chủ nhiệm và phụ huynh học sinh.
                  </p>
                </div>

                {/* Section: Verified Legal Documents & Social Security Proof */}
                <div className="bg-surface-container-lowest p-space-md sm:p-space-lg gap-space-md flex flex-col rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">policy</span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Hồ Sơ Pháp Lý &amp; Minh Chứng Hoàn Cảnh
                      </h2>
                    </div>
                    <span className="text-label-sm font-label-sm text-tertiary flex items-center gap-1 font-semibold">
                      <span className="material-symbols-outlined text-[16px]">lock</span>
                      Bảo mật GDPR/VNeID
                    </span>
                  </div>
                  <div className="gap-space-sm flex flex-col">
                    {/* Item 1 */}
                    <div className="bg-surface-container-low hover:bg-surface-container flex items-center justify-between rounded-lg p-3 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="bg-surface-container-high text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                          <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-body-md text-body-md text-on-surface font-semibold">
                            Giấy xác nhận Hộ nghèo UBND Xã Tam Chung
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary">
                            Số: 142/UBND-XN • Ngày cấp: 10/09/2024 • Có mộc đỏ chính quyền
                          </span>
                        </div>
                      </div>
                      <button
                        className="bg-surface-container hover:bg-primary hover:text-on-primary text-primary text-label-sm font-label-sm inline-flex items-center gap-1 rounded-lg px-3 py-1.5 font-semibold transition-all"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        <span>Xem tài liệu</span>
                      </button>
                    </div>
                    {/* Item 2 */}
                    <div className="bg-surface-container-low hover:bg-surface-container flex items-center justify-between rounded-lg p-3 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="bg-surface-container-high text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                          <span className="material-symbols-outlined text-[20px]">draw</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-body-md text-body-md text-on-surface font-semibold">
                            Đơn xin hỗ trợ thiết bị Tin học của Phụ huynh
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary">
                            Chữ ký điểm chỉ của ông Thào A Páo &amp; Cam kết của GVCN Lò Văn Thuận
                          </span>
                        </div>
                      </div>
                      <button
                        className="bg-surface-container hover:bg-primary hover:text-on-primary text-primary text-label-sm font-label-sm inline-flex items-center gap-1 rounded-lg px-3 py-1.5 font-semibold transition-all"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        <span>Xem tài liệu</span>
                      </button>
                    </div>
                    {/* Item 3 */}
                    <div className="bg-surface-container-low hover:bg-surface-container flex items-center justify-between rounded-lg p-3 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="bg-surface-container-high text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                          <span className="material-symbols-outlined text-[20px]">fingerprint</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-body-md text-body-md text-on-surface font-semibold">
                            Trích lục Mã định danh VNeID CSDL Ngành GD&amp;ĐT
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary">
                            Đã đối khớp với hệ thống CSDL Giáo dục Quốc gia (EMIS)
                          </span>
                        </div>
                      </div>
                      <span className="text-label-sm inline-flex items-center gap-1 rounded bg-[#f0fdf4] px-2.5 py-1 font-semibold text-[#166534]">
                        <span className="material-symbols-outlined text-[14px]">check</span> Hợp lệ
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT WORKSPACE (5 cols): Lifecycle Stepper, Commitment agreement, Learning Log, Rapid Support */}
              <div className="gap-space-lg flex min-w-0 flex-col lg:col-span-5">
                {/* Section: Distribution & Lifecycle Stepper */}
                <div className="bg-surface-container-lowest p-space-md sm:p-space-lg gap-space-md flex flex-col rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">linear_scale</span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Tiến Trình Cấp Phát Thiết Bị
                      </h2>
                    </div>
                    <span className="text-label-sm font-label-sm text-tertiary font-semibold">5/5 Hoàn thành</span>
                  </div>
                  {/* Vertical Stepper */}
                  <div className="gap-space-md relative flex flex-col pl-6">
                    {/* Continuous Track Line */}
                    <div className="bg-surface-container-highest absolute top-3 bottom-3 left-2.5 w-0.5"></div>
                    {/* Step 1 */}
                    <div className="gap-space-sm relative flex items-start">
                      <div className="bg-tertiary text-on-tertiary absolute top-0.5 -left-6 flex h-5 w-5 items-center justify-center rounded-full text-[12px] shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">check</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-body-md text-body-md text-on-surface font-semibold">
                          1. Xét duyệt hoàn cảnh tại trường
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          15/10/2024 • BGH &amp; UBND Xã Tam Chung rà soát
                        </span>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="gap-space-sm relative flex items-start">
                      <div className="bg-tertiary text-on-tertiary absolute top-0.5 -left-6 flex h-5 w-5 items-center justify-center rounded-full text-[12px] shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">check</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-body-md text-body-md text-on-surface font-semibold">
                          2. Điều phối từ Quỹ Trung ương
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          18/10/2024 • Hệ thống EduShare cấp quota máy
                        </span>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="gap-space-sm relative flex items-start">
                      <div className="bg-tertiary text-on-tertiary absolute top-0.5 -left-6 flex h-5 w-5 items-center justify-center rounded-full text-[12px] shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">check</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-body-md text-body-md text-on-surface font-semibold">
                          3. Kiểm định &amp; Dán nhãn QR định danh
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          21/10/2024 • Kho Kỹ thuật EduShare Hà Nội nghiệm thu
                        </span>
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="gap-space-sm relative flex items-start">
                      <div className="bg-tertiary text-on-tertiary absolute top-0.5 -left-6 flex h-5 w-5 items-center justify-center rounded-full text-[12px] shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">check</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-body-md text-body-md text-on-surface font-semibold">
                          4. Vận chuyển chuyên dụng vùng cao
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          23/10/2024 • Đội xe bán tải thiện nguyện cập bến
                        </span>
                      </div>
                    </div>
                    {/* Step 5 (Current active/completed) */}
                    <div className="gap-space-sm relative flex items-start">
                      <div className="bg-primary text-on-primary ring-primary-fixed absolute top-0.5 -left-6 flex h-5 w-5 items-center justify-center rounded-full text-[12px] shadow-sm ring-4">
                        <span className="material-symbols-outlined text-[14px]">how_to_reg</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-body-md text-body-md text-primary font-bold">
                          5. Bàn giao trực tiếp &amp; Ký biên bản
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                          24/10/2024 • Hoàn thành kiểm tra và phát máy
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section: Tripartite Commitment & Digital Seal */}
                <div className="bg-surface-container-lowest p-space-md sm:p-space-lg gap-space-md flex flex-col rounded-xl shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[22px]">gavel</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Cam Kết Sử Dụng 3 Bên
                    </h2>
                  </div>
                  <div className="bg-surface-container-low font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-2 rounded-lg p-3">
                    <p className="leading-relaxed">
                      Thiết bị thuộc chương trình hỗ trợ học tập vùng cao. Gia đình và học sinh cam kết:
                    </p>
                    <ul className="list-disc space-y-1 pl-5">
                      <li>Sử dụng đúng mục đích: Luyện tập Tin học, học trực tuyến và làm bài tập.</li>
                      <li>Không tự ý mua bán, trao đổi hoặc cầm cố dưới mọi hình thức.</li>
                      <li>Bảo quản thiết bị tại ký túc xá nhà trường, chỉ mang về nhà dịp lễ tết khi có xác nhận.</li>
                    </ul>
                  </div>
                  <div className="bg-surface-container flex items-center justify-between rounded-lg p-3">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-tertiary text-[24px]">verified</span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-on-surface font-bold">
                          Ký số điện tử: Thầy Hà Văn Tiêu
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          Hiệu trưởng - PTDTBT THCS Mường Lát
                        </span>
                      </div>
                    </div>
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed text-label-sm font-code-num rounded px-2 py-0.5 font-semibold">
                      ĐÃ KÝ SỐ
                    </span>
                  </div>
                </div>

                {/* Section: Academic Progress & Teacher Observation Log */}
                <div className="bg-surface-container-lowest p-space-md sm:p-space-lg gap-space-md flex flex-col rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">auto_stories</span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Nhật Ký Học Tập Của Em Súa
                      </h2>
                    </div>
                    <button
                      className="text-primary font-label-sm text-label-sm font-semibold hover:underline"
                      type="button"
                    >
                      + Viết nhận xét
                    </button>
                  </div>
                  <div className="gap-space-sm flex flex-col">
                    {/* Log 1 */}
                    <div className="bg-surface-container-low flex flex-col gap-1.5 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-primary font-semibold">
                          Tuần 4 - Tháng 10/2024
                        </span>
                        <span className="font-code-num text-label-sm text-tertiary font-bold">9.0 Điểm</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface font-medium">
                        Hoàn thành bài tập lập trình Scratch: "Mô phỏng ngã tư đường và đèn giao thông thông minh".
                      </p>
                      <span className="font-body-sm text-body-sm text-secondary italic">
                        "Em Súa thực hành rất say mê, nắm vững câu lệnh lặp và biến số." — GVCN Lò Văn Thuận
                      </span>
                    </div>
                    {/* Log 2 */}
                    <div className="bg-surface-container-low flex flex-col gap-1.5 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary font-semibold">
                          Tuần 3 - Tháng 10/2024
                        </span>
                        <span className="font-code-num text-label-sm text-primary font-bold">Sơ khảo</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface font-medium">
                        Được lựa chọn tham gia đội tuyển bồi dưỡng Tin học trẻ cấp Huyện năm học 2024-2025.
                      </p>
                      <span className="font-body-sm text-body-sm text-secondary italic">
                        "Đạt tốc độ gõ phím 42 WPM chuẩn 10 ngón trên máy tính mới."
                      </span>
                    </div>
                  </div>
                </div>

                {/* Section: Rapid Maintenance & Support Dispatch */}
                <div className="bg-surface-container-lowest p-space-md sm:p-space-lg gap-space-sm flex flex-col rounded-xl shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">build_circle</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Yêu Cầu Hỗ Trợ Kỹ Thuật
                    </h2>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    Nếu máy gặp sự cố mạng, hỏng sạc hoặc cần cài thêm phần mềm phục vụ học tập, Nhà trường gửi phản hồi
                    trực tiếp tới Đội hỗ trợ EduShare vùng cao.
                  </p>
                  <button
                    className="px-space-md bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md flex w-full items-center justify-center gap-2 rounded-lg py-2.5 font-semibold transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">contact_support</span>
                    <span>Báo sự cố thiết bị này</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
