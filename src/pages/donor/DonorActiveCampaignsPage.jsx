import { Link } from "react-router-dom";

export default function DonorActiveCampaignsPage() {
  return (
    <div className="bg-background font-body text-on-surface flex text-[14px] leading-relaxed antialiased">
      {/* 1. Thanh Sidebar Điều Hướng Của Cổng Nhà Hảo Tâm */}
      <aside className="bg-surface-container-lowest border-outline-variant/40 fixed top-0 left-0 z-50 flex h-full w-72 flex-col justify-between border-r shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <div className="flex flex-1 flex-col overflow-y-auto">
          {/* App Header / Logo */}
          <div className="px-space-lg border-outline-variant/30 flex h-20 items-center justify-between border-b">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-on-primary font-headline flex h-10 w-10 items-center justify-center rounded-xl text-xl font-bold shadow-sm">
                E
              </div>
              <div>
                <div className="font-headline text-primary text-[17px] leading-tight font-bold tracking-tight">
                  EduShare VN
                </div>
                <div className="text-secondary text-[12px] font-medium">Cổng Nhà Hảo Tâm</div>
              </div>
            </div>
            <span className="bg-tertiary-container/10 text-tertiary inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium">
              <span className="bg-tertiary h-2 w-2 animate-pulse rounded-full"></span>
              Trực tuyến
            </span>
          </div>

          {/* Navigation Section */}
          <div className="px-space-md pt-5 pb-2">
            <div className="px-space-sm text-secondary text-[11px] font-semibold tracking-wider uppercase">
              Nghiệp vụ tài trợ &amp; Giám sát
            </div>
          </div>
          <nav className="px-space-md flex flex-1 flex-col gap-1">
            {/* Đợt vận động đang chạy (Active Item) */}
            <Link
              className="px-space-md bg-primary text-on-primary flex items-center gap-3 rounded-xl py-2.5 font-medium shadow-sm transition-all"
              to="/donor/campaigns"
            >
              <span className="material-symbols-outlined text-[20px]">campaign</span>
              <span className="font-headline text-[13.5px]">Đợt vận động đang chạy</span>
            </Link>
            {/* Đăng ký trao tặng */}
            <Link
              className="px-space-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary flex items-center gap-3 rounded-xl py-2.5 font-medium transition-all"
              to="/donor/donation-details"
            >
              <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
              <span className="text-[13.5px]">Đăng ký trao tặng</span>
            </Link>
            {/* Quản lý phiếu của tôi */}
            <Link
              className="px-space-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary flex items-center gap-3 rounded-xl py-2.5 font-medium transition-all"
              to="/donor/dashboard"
            >
              <span className="material-symbols-outlined text-[20px]">receipt_long</span>
              <span className="text-[13.5px]">Quản lý phiếu của tôi</span>
              <span className="bg-secondary-container text-on-secondary-fixed ml-auto rounded-full px-1.5 py-0.5 text-[11px] font-semibold">
                03
              </span>
            </Link>
            {/* Biên nhận & Chứng nhận */}
            <Link
              className="px-space-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary flex items-center gap-3 rounded-xl py-2.5 font-medium transition-all"
              to="/donor/certificates"
            >
              <span className="material-symbols-outlined text-[20px]">verified</span>
              <span className="text-[13.5px]">Biên nhận &amp; Chứng nhận</span>
            </Link>
            {/* Hành trình & Mã QR */}
            <Link
              className="px-space-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary flex items-center gap-3 rounded-xl py-2.5 font-medium transition-all"
              to="/donor/tracking"
            >
              <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
              <span className="text-[13.5px]">Hành trình &amp; Mã QR</span>
            </Link>
          </nav>
        </div>

        {/* Footer Sidebar */}
        <div className="p-space-md border-outline-variant/30 bg-surface-container-low/60 border-t">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-secondary text-[11px] font-semibold tracking-wider uppercase">Hạ Tầng Dữ Liệu</span>
            <span className="text-tertiary inline-flex items-center gap-1 text-[11px] font-medium">
              <span className="bg-tertiary h-1.5 w-1.5 rounded-full"></span> 63 Tỉnh Thành
            </span>
          </div>
          <div className="text-on-surface text-[12px] font-medium">Phiên bản Quốc gia v2.8.4</div>
          <div className="text-secondary text-[11px]">Hệ thống EduShare Core - RBAC Protected</div>
        </div>
      </aside>

      {/* Main Wrapper */}
      <div className="flex min-h-screen flex-1 flex-col pl-72">
        {/* 2. Thanh Header Trên Cùng */}
        <header className="bg-surface-container-lowest/95 border-outline-variant/40 px-gutter-desktop gap-space-lg sticky top-0 z-40 flex h-20 items-center justify-between border-b shadow-sm backdrop-blur-md">
          <div className="max-w-xl flex-1">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined text-secondary absolute left-3.5 text-[20px]">search</span>
              <input
                className="bg-surface-container-low/80 hover:bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder:text-outline focus:border-primary-container w-full rounded-xl border border-transparent py-2 pr-4 pl-11 text-[13.5px] shadow-inner transition-all outline-none"
                placeholder="Tìm kiếm mã quyên góp, đợt vận động, thiết bị..."
                type="search"
              />
            </div>
          </div>
          <div className="gap-space-md flex items-center">
            {/* Account Badge */}
            <div className="bg-secondary-container/70 border-outline-variant/30 text-on-secondary-fixed hidden items-center gap-2 rounded-full border px-3 py-1.5 shadow-sm sm:flex">
              <span className="material-symbols-outlined text-primary text-[17px]">domain</span>
              <span className="font-headline text-[12.5px] font-semibold">Tập đoàn Vingroup</span>
              <span className="font-code-num text-on-secondary-container text-[11.5px] font-medium">#NHT-78294</span>
            </div>
            {/* Notification Bell */}
            <button
              className="text-on-surface-variant hover:bg-surface-container-low hover:text-primary relative rounded-xl p-2 transition-colors"
              title="Thông báo hệ thống"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="bg-error ring-surface-container-lowest absolute top-2 right-2 h-2.5 w-2.5 rounded-full ring-2"></span>
            </button>
            {/* User Profile Pill */}
            <div className="border-outline-variant/40 flex items-center gap-2.5 border-l pl-2">
              <div className="hidden flex-col text-right md:flex">
                <span className="text-on-surface font-headline text-[13px] leading-tight font-semibold">
                  Ban Điều Hành Quỹ
                </span>
                <span className="text-secondary text-[11px]">Nhà Hảo Tâm Đồng Hành</span>
              </div>
              <div className="from-primary to-primary-container text-on-primary flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr text-[14px] font-bold shadow-sm">
                <span className="material-symbols-outlined text-[19px]">person</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="bg-background px-gutter-desktop py-space-lg w-full flex-1">
          <div className="gap-space-lg pb-space-xl mx-auto flex max-w-[1400px] flex-col">
            {/* 3. Breadcrumbs & Banner Tiêu Đề Chiến Dịch */}
            <div className="flex flex-col gap-3">
              {/* Breadcrumb */}
              <div className="text-secondary flex items-center gap-1.5 text-[12.5px] font-medium">
                <Link className="hover:text-primary transition-colors" to="/">
                  EduShare VN
                </Link>
                <span className="material-symbols-outlined text-outline text-[15px]">chevron_right</span>
                <Link className="hover:text-primary transition-colors" to="/donor/dashboard">
                  Cổng Nhà Hảo Tâm
                </Link>
                <span className="material-symbols-outlined text-outline text-[15px]">chevron_right</span>
                <Link className="hover:text-primary transition-colors" to="/donor/campaigns">
                  Đợt vận động đang chạy
                </Link>
                <span className="material-symbols-outlined text-outline text-[15px]">chevron_right</span>
                <span className="font-code-num text-primary font-semibold">#CD-2024-ML08</span>
              </div>

              {/* Banner Tiêu Đề Chiến Dịch */}
              <div className="bg-surface-container-lowest border-outline-variant/50 flex flex-col justify-between gap-5 rounded-2xl border p-6 shadow-sm lg:flex-row lg:items-center">
                <div className="flex max-w-3xl flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-tertiary-container/15 text-tertiary inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-[11.5px] font-semibold shadow-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="bg-tertiary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                        <span className="bg-tertiary relative inline-flex h-2 w-2 rounded-full"></span>
                      </span>
                      ĐANG VẬN ĐỘNG (Còn 12 ngày)
                    </span>
                    <span className="bg-surface-container font-code-num text-on-surface-variant border-outline-variant/30 rounded-full border px-2.5 py-0.5 text-[11.5px] font-semibold">
                      Mã đợt: #CD-2024-ML08
                    </span>
                    <span className="bg-secondary-container text-on-secondary-fixed inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11.5px] font-medium">
                      <span className="material-symbols-outlined text-[14px]">landscape</span>
                      Ưu tiên cấp 1: Mường Lát, Thanh Hóa
                    </span>
                  </div>
                  <h1 className="font-headline text-on-surface text-[22px] leading-snug font-bold tracking-tight sm:text-[26px]">
                    Chiến Dịch: Chắp Cánh Ước Mơ Tin Học Mường Lát 2024
                  </h1>
                  <p className="text-on-surface-variant text-[13.5px] leading-relaxed">
                    Huy động 35 bộ máy vi tính &amp; nâng cấp hạ tầng phòng máy đạt chuẩn cho 02 điểm trường dân tộc bán
                    trú xã Tam Chung &amp; thị trấn Mường Lát, Thanh Hóa.
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-2.5">
                  <button
                    className="bg-surface-container-low hover:bg-surface-container text-on-surface border-outline-variant/40 inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-[13px] font-medium shadow-sm transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-secondary text-[17px]">share</span>
                    <span>Chia sẻ</span>
                  </button>
                  <button
                    className="bg-surface-container-low hover:bg-surface-container text-on-surface border-outline-variant/40 inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-[13px] font-medium shadow-sm transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-primary text-[17px]">download</span>
                    <span>Tải hồ sơ thẩm định PDF</span>
                  </button>
                  <Link
                    className="bg-primary hover:bg-primary-container text-on-primary font-headline ml-1 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-[13px] font-semibold shadow-sm transition-all"
                    to="/donor/donation-details"
                  >
                    <span className="material-symbols-outlined text-[18px]">volunteer_activism</span>
                    <span>Đăng Ký Quyên Góp</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. Hệ Thống Metric Cards Tiến Độ Thời Gian Thực */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {/* Card 1: Tổng mục tiêu thiết bị */}
              <div className="bg-surface-container-lowest border-outline-variant/40 hover:border-primary/40 flex flex-col justify-between rounded-2xl border p-4 shadow-sm transition-all">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-secondary text-[11.5px] font-semibold tracking-wider uppercase">
                    Mục tiêu thiết bị
                  </span>
                  <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[19px]">devices</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline text-primary text-[28px] leading-none font-bold">28</span>
                    <span className="text-on-surface-variant text-[14px] font-medium">/ 35 máy</span>
                  </div>
                  <div className="bg-surface-container-high mt-2.5 h-2 w-full overflow-hidden rounded-full">
                    <div
                      className="bg-primary h-full rounded-full transition-all duration-700"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <div className="text-secondary mt-2 flex items-center justify-between text-[11.5px]">
                    <span>Tiến độ tiếp nhận</span>
                    <span className="text-primary font-code-num font-bold">80.0% Đạt</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Điểm trường thụ hưởng */}
              <div className="bg-surface-container-lowest border-outline-variant/40 hover:border-tertiary/40 flex flex-col justify-between rounded-2xl border p-4 shadow-sm transition-all">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-secondary text-[11.5px] font-semibold tracking-wider uppercase">
                    Điểm trường thụ hưởng
                  </span>
                  <div className="bg-tertiary-container/15 text-tertiary flex h-8 w-8 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[19px]">school</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline text-on-surface text-[28px] leading-none font-bold">02</span>
                    <span className="text-on-surface-variant text-[13px] font-medium">Trường PTDTBT</span>
                  </div>
                  <div className="text-on-surface-variant mt-2 flex flex-col gap-0.5 text-[11.5px]">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-tertiary text-[14px]">check_circle</span>
                      <span>THCS Mường Lát (18 máy)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-tertiary text-[14px]">check_circle</span>
                      <span>Tiểu học Tam Chung (17 máy)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Học sinh tiếp cận */}
              <div className="bg-surface-container-lowest border-outline-variant/40 hover:border-secondary/40 flex flex-col justify-between rounded-2xl border p-4 shadow-sm transition-all">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-secondary text-[11.5px] font-semibold tracking-wider uppercase">
                    Học sinh tiếp cận
                  </span>
                  <div className="bg-secondary-container text-on-secondary-fixed flex h-8 w-8 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[19px]">groups</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline text-on-surface text-[28px] leading-none font-bold">412</span>
                    <span className="text-on-surface-variant text-[13px] font-medium">Em học sinh</span>
                  </div>
                  <p className="text-on-surface-variant mt-2 line-clamp-2 text-[11.5px] leading-relaxed">
                    100% học sinh người Mông, Thái, Mường khó khăn lần đầu thực hành máy tính.
                  </p>
                </div>
              </div>

              {/* Card 4: Quỹ linh kiện & Hỗ trợ kỹ thuật */}
              <div className="bg-surface-container-lowest border-outline-variant/40 hover:border-tertiary/40 flex flex-col justify-between rounded-2xl border p-4 shadow-sm transition-all">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-secondary text-[11.5px] font-semibold tracking-wider uppercase">
                    Quỹ linh kiện &amp; Kỹ thuật
                  </span>
                  <div className="bg-tertiary-container/15 text-tertiary flex h-8 w-8 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[19px]">account_balance_wallet</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline text-tertiary text-[25px] leading-none font-bold">148 Tr</span>
                    <span className="text-on-surface-variant font-code-num text-[12px]">/ 185 Tr VNĐ</span>
                  </div>
                  <div className="bg-surface-container-high mt-2.5 h-2 w-full overflow-hidden rounded-full">
                    <div
                      className="bg-tertiary h-full rounded-full transition-all duration-700"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <div className="text-secondary mt-2 flex items-center justify-between text-[11.5px]">
                    <span>Bảo trợ kỹ thuật &amp; bảo dưỡng</span>
                    <span className="text-tertiary font-code-num font-bold">36 Tháng</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. BỐ CỤC 2 CỘT CÂN XỨNG & HÀI HÒA (Layout 8/12 & 4/12) */}
            <div className="gap-space-lg grid grid-cols-1 items-start xl:grid-cols-12">
              {/* CỘT CHÍNH (Bên trái: 8/12) */}
              <div className="gap-space-lg flex flex-col xl:col-span-8">
                {/* 1. DANH MỤC HẠNG MỤC CẦN QUYÊN GÓP (Itemized Donation Needs) */}
                <div className="bg-surface-container-lowest border-outline-variant/40 flex flex-col gap-4 rounded-2xl border p-5 shadow-sm sm:p-6">
                  <div className="border-outline-variant/30 flex flex-col justify-between gap-2 border-b pb-3 sm:flex-row sm:items-center">
                    <div>
                      <h2 className="font-headline text-on-surface text-[17px] font-bold">
                        Danh Mục Hạng Mục Cần Quyên Góp
                      </h2>
                      <p className="text-secondary text-[12.5px]">
                        Kiểm định chuẩn theo tiêu chuẩn phòng tin học giáo dục của Bộ GD&amp;ĐT
                      </p>
                    </div>
                    <span className="bg-surface-container text-on-surface-variant flex items-center gap-1 self-start rounded-full px-2.5 py-1 text-[11.5px] font-medium sm:self-auto">
                      <span className="material-symbols-outlined text-[14px]">update</span>
                      Cập nhật 15 phút trước
                    </span>
                  </div>
                  {/* List Cards */}
                  <div className="flex flex-col gap-3">
                    {/* Item 1: Laptop Giáo Viên */}
                    <div className="bg-surface-container-low/60 border-outline-variant/30 hover:border-primary/40 flex flex-col gap-3 rounded-xl border p-3.5 transition-all sm:p-4">
                      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                        <div className="flex items-start gap-3">
                          <div className="bg-surface-container-lowest border-outline-variant/30 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-xs">
                            <span className="material-symbols-outlined text-[22px]">laptop_mac</span>
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-headline text-on-surface text-[14.5px] font-semibold">
                                Laptop Giáo Viên &amp; Bồi Dưỡng HSG
                              </h3>
                              <span className="bg-error-container text-on-error-container rounded-full px-2 py-0.5 text-[11px] font-semibold">
                                Còn thiếu 03 máy
                              </span>
                            </div>
                            <p className="text-secondary mt-0.5 text-[12px]">
                              Tiêu chuẩn tối thiểu: Core i5 gen 8+ (hoặc Ryzen 5), RAM 8GB, SSD 256GB NVMe, thời lượng
                              pin &gt; 1.5 giờ.
                            </p>
                          </div>
                        </div>
                        <Link
                          className="bg-primary-container text-on-primary font-headline hover:bg-primary shrink-0 self-start rounded-xl px-3.5 py-1.5 text-[12px] font-medium shadow-sm transition-colors sm:self-center"
                          to="/donor/donation-details"
                        >
                          Quyên góp mục này
                        </Link>
                      </div>
                      <div>
                        <div className="text-secondary mb-1 flex items-center justify-between text-[11.5px]">
                          <span>
                            Đã nhận: <b className="font-code-num text-on-surface font-semibold">12 / 15 máy</b>
                          </span>
                          <span className="font-code-num text-primary font-bold">80.0% Đạt</span>
                        </div>
                        <div className="bg-surface-container-high h-2 w-full overflow-hidden rounded-full">
                          <div
                            className="bg-primary h-full rounded-full transition-all duration-500"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {/* Item 2: Bộ Máy Vi Tính Để Bàn */}
                    <div className="bg-surface-container-low/60 border-outline-variant/30 hover:border-primary/40 flex flex-col gap-3 rounded-xl border p-3.5 transition-all sm:p-4">
                      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                        <div className="flex items-start gap-3">
                          <div className="bg-surface-container-lowest border-outline-variant/30 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-xs">
                            <span className="material-symbols-outlined text-[22px]">desktop_windows</span>
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-headline text-on-surface text-[14.5px] font-semibold">
                                Bộ Máy Vi Tính Để Bàn (Thùng PC + Màn hình 19-24 inch)
                              </h3>
                              <span className="bg-error-container text-on-error-container rounded-full px-2 py-0.5 text-[11px] font-semibold">
                                Còn thiếu 04 bộ
                              </span>
                            </div>
                            <p className="text-secondary mt-0.5 text-[12px]">
                              Đồng bộ linh kiện: Core i3/i5 gen 7+, RAM 8GB, SSD 128/256GB, màn hình LED FHD chống lóa
                              cho học sinh.
                            </p>
                          </div>
                        </div>
                        <Link
                          className="bg-primary-container text-on-primary font-headline hover:bg-primary shrink-0 self-start rounded-xl px-3.5 py-1.5 text-[12px] font-medium shadow-sm transition-colors sm:self-center"
                          to="/donor/donation-details"
                        >
                          Quyên góp mục này
                        </Link>
                      </div>
                      <div>
                        <div className="text-secondary mb-1 flex items-center justify-between text-[11.5px]">
                          <span>
                            Đã nhận: <b className="font-code-num text-on-surface font-semibold">16 / 20 bộ</b>
                          </span>
                          <span className="font-code-num text-primary font-bold">80.0% Đạt</span>
                        </div>
                        <div className="bg-surface-container-high h-2 w-full overflow-hidden rounded-full">
                          <div
                            className="bg-primary h-full rounded-full transition-all duration-500"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {/* Item 3: Bộ Lưu Điện UPS & Switch Mạng Gigabit */}
                    <div className="bg-surface-container-low/40 border-outline-variant/30 flex flex-col gap-3 rounded-xl border p-3.5 sm:p-4">
                      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                        <div className="flex items-start gap-3">
                          <div className="bg-surface-container-lowest border-outline-variant/30 text-tertiary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-xs">
                            <span className="material-symbols-outlined text-[22px]">router</span>
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-headline text-on-surface text-[14.5px] font-semibold">
                                Bộ Lưu Điện UPS 1000VA &amp; Switch Mạng Gigabit
                              </h3>
                              <span className="bg-tertiary-container/15 text-tertiary flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold">
                                <span className="material-symbols-outlined text-[13px]">check</span> Đã tiếp nhận đủ
                              </span>
                            </div>
                            <p className="text-secondary mt-0.5 text-[12px]">
                              02 Switch Gigabit TP-Link 24 cổng &amp; 04 Bộ lưu điện Santak 1000VA bảo vệ chống chập
                              cháy sụt áp vùng cao.
                            </p>
                          </div>
                        </div>
                        <button
                          className="bg-surface-container text-outline font-headline shrink-0 cursor-not-allowed self-start rounded-xl px-3.5 py-1.5 text-[12px] font-medium sm:self-center"
                          disabled=""
                          type="button"
                        >
                          Đã tiếp nhận đủ
                        </button>
                      </div>
                      <div>
                        <div className="text-secondary mb-1 flex items-center justify-between text-[11.5px]">
                          <span>
                            Đã nhận: <b className="font-code-num text-on-surface font-semibold">06 / 06 bộ</b>
                          </span>
                          <span className="font-code-num text-tertiary font-bold">100% Hoàn thành</span>
                        </div>
                        <div className="bg-surface-container-high h-2 w-full overflow-hidden rounded-full">
                          <div className="bg-tertiary h-full rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                    </div>
                    {/* Item 4: Bàn phím, Chuột Quang & Dây Mạng Cat6 */}
                    <div className="bg-surface-container-low/60 border-outline-variant/30 hover:border-primary/40 flex flex-col gap-3 rounded-xl border p-3.5 transition-all sm:p-4">
                      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                        <div className="flex items-start gap-3">
                          <div className="bg-surface-container-lowest border-outline-variant/30 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-xs">
                            <span className="material-symbols-outlined text-[22px]">keyboard</span>
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-headline text-on-surface text-[14.5px] font-semibold">
                                Bàn phím, Chuột Quang &amp; Dây Mạng Cat6
                              </h3>
                              <span className="bg-error-container text-on-error-container rounded-full px-2 py-0.5 text-[11px] font-semibold">
                                Còn thiếu 10 bộ
                              </span>
                            </div>
                            <p className="text-secondary mt-0.5 text-[12px]">
                              Bàn phím + chuột USB bền bỉ chịu ẩm tốt, kèm 01 cuộn cáp xoắn UTP Cat6 305m cho 02 phòng
                              thực hành.
                            </p>
                          </div>
                        </div>
                        <Link
                          className="bg-primary-container text-on-primary font-headline hover:bg-primary shrink-0 self-start rounded-xl px-3.5 py-1.5 text-[12px] font-medium shadow-sm transition-colors sm:self-center"
                          to="/donor/donation-details"
                        >
                          Quyên góp mục này
                        </Link>
                      </div>
                      <div>
                        <div className="text-secondary mb-1 flex items-center justify-between text-[11.5px]">
                          <span>
                            Đã nhận: <b className="font-code-num text-on-surface font-semibold">25 / 35 bộ</b>
                          </span>
                          <span className="font-code-num text-primary font-bold">71.4% Đạt</span>
                        </div>
                        <div className="bg-surface-container-high h-2 w-full overflow-hidden rounded-full">
                          <div
                            className="bg-primary h-full rounded-full transition-all duration-500"
                            style={{ width: "71.4%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. HỒ SƠ KHẢO SÁT & MINH CHỨNG THỰC ĐỊA (Field Survey & Evidence) */}
                <div className="bg-surface-container-lowest border-outline-variant/40 flex flex-col gap-4 rounded-2xl border p-5 shadow-sm sm:p-6">
                  <div className="border-outline-variant/30 flex flex-col justify-between gap-2 border-b pb-3 sm:flex-row sm:items-center">
                    <div>
                      <h2 className="font-headline text-on-surface text-[17px] font-bold">
                        Hồ Sơ Khảo Sát &amp; Minh Chứng Thực Địa
                      </h2>
                      <p className="text-secondary text-[12.5px]">
                        Đã thẩm định trực tiếp bởi Đội Công Tác Xã Hội EduShare &amp; UBND Huyện Mường Lát
                      </p>
                    </div>
                    <span className="bg-surface-container text-primary flex items-center gap-1.5 self-start rounded-full px-3 py-1 text-[11.5px] font-semibold sm:self-auto">
                      <span className="material-symbols-outlined text-[15px]">verified</span>
                      Đã Thẩm Tra 100%
                    </span>
                  </div>
                  {/* Ảnh thực địa 2 ảnh ngang hàng */}
                  <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
                    {/* Ảnh 1: Thư viện trao tặng */}
                    <div className="border-outline-variant/40 group bg-surface-container relative h-56 overflow-hidden rounded-xl border shadow-sm">
                      <img
                        alt="Học sinh dân tộc vui mừng nhận máy tính"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80"
                      />
                      <div className="from-on-background/85 via-on-background/30 absolute inset-0 flex flex-col justify-end bg-gradient-to-t to-transparent p-3.5">
                        <span className="bg-primary text-on-primary mb-1 self-start rounded px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                          Ảnh Khảo Sát Thực Địa
                        </span>
                        <p className="line-clamp-2 text-[12px] leading-snug text-white">
                          Điểm trường bán trú xã Tam Chung, Mường Lát - Thầy cô và các em học sinh hân hoan đón nhận
                          những thiết bị thử nghiệm.
                        </p>
                      </div>
                    </div>
                    {/* Ảnh 2: Không gian phòng máy & trường lớp */}
                    <div className="border-outline-variant/40 group bg-surface-container from-secondary-container/50 to-surface-container-high relative flex h-56 flex-col justify-end overflow-hidden rounded-xl border bg-gradient-to-br shadow-sm">
                      <div className="from-primary/10 to-on-background/70 absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] via-transparent"></div>
                      <div className="bg-surface-container-lowest/90 border-outline-variant/40 text-on-surface absolute top-3 right-3 flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11.5px] font-medium backdrop-blur-sm">
                        <span className="material-symbols-outlined text-tertiary text-[15px]">check_circle</span>
                        Phòng học sẵn sàng
                      </div>
                      <div className="relative z-10 flex flex-col gap-1 p-3.5">
                        <span className="bg-tertiary text-on-tertiary self-start rounded px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                          Hiện trạng phòng máy
                        </span>
                        <p className="text-[12px] leading-snug text-white">
                          02 phòng học kiên cố đã lợp tôn chống dột, hệ thống bàn ghế chuẩn và sẵn sàng tiếp nhận dây
                          điện và hệ thống giá đỡ chuyên dụng.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Các thẻ thông tin tóm tắt */}
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    <div className="bg-surface-container-low border-outline-variant/30 flex flex-col justify-between rounded-xl border p-3.5">
                      <div>
                        <div className="text-primary font-headline flex items-center gap-2 text-[13px] font-semibold">
                          <span className="material-symbols-outlined text-[17px]">verified_user</span>
                          <span>Phê duyệt địa phương</span>
                        </div>
                        <p className="text-on-surface-variant mt-1.5 text-[12px] leading-normal">
                          Công văn số 1142/GDĐT-ML của Phòng GD&amp;ĐT và UBND Huyện xác nhận tình trạng thiếu thốn và
                          phê duyệt danh mục tiếp nhận.
                        </p>
                      </div>
                      <span className="text-secondary mt-2 inline-flex items-center gap-1 text-[11px] font-medium">
                        <span className="material-symbols-outlined text-primary text-[13px]">task_alt</span> Hồ sơ lưu
                        trữ số #HS-ML08
                      </span>
                    </div>
                    <div className="bg-surface-container-low border-outline-variant/30 flex flex-col justify-between rounded-xl border p-3.5">
                      <div>
                        <div className="text-tertiary font-headline flex items-center gap-2 text-[13px] font-semibold">
                          <span className="material-symbols-outlined text-[17px]">bolt</span>
                          <span>Điện &amp; Cáp quang Viettel</span>
                        </div>
                        <p className="text-on-surface-variant mt-1.5 text-[12px] leading-normal">
                          Điện lưới 220V ổn định. Viettel Thanh Hóa đã kéo cáp quang Internet tốc độ cao miễn phí 24
                          tháng theo cam kết bảo trợ liên kết.
                        </p>
                      </div>
                      <span className="text-secondary mt-2 inline-flex items-center gap-1 text-[11px] font-medium">
                        <span className="material-symbols-outlined text-tertiary text-[13px]">wifi</span> Đã kết nối
                        băng thông rộng
                      </span>
                    </div>
                    <div className="bg-surface-container-low border-outline-variant/30 flex flex-col justify-between rounded-xl border p-3.5">
                      <div>
                        <div className="text-secondary font-headline flex items-center gap-2 text-[13px] font-semibold">
                          <span className="material-symbols-outlined text-[17px]">supervised_user_circle</span>
                          <span>Nhân sự phòng máy</span>
                        </div>
                        <p className="text-on-surface-variant mt-1.5 text-[12px] leading-normal">
                          02 Giáo viên Tin học chính quy đã hoàn thành khóa tập huấn điều phối và giám sát thiết bị số
                          của EduShare Hub.
                        </p>
                      </div>
                      <span className="text-secondary mt-2 inline-flex items-center gap-1 text-[11px] font-medium">
                        <span className="material-symbols-outlined text-secondary text-[13px]">school</span> Phụ trách:
                        Thầy Đỗ Văn Tuyên
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Danh Sách Nhà Hảo Tâm Đã Đồng Hành & Minh Chứng */}
                <div className="bg-surface-container-lowest border-outline-variant/40 flex flex-col gap-4 rounded-2xl border p-5 shadow-sm sm:p-6">
                  <div className="border-outline-variant/30 flex flex-col justify-between gap-2 border-b pb-3 sm:flex-row sm:items-center">
                    <div>
                      <h2 className="font-headline text-on-surface text-[17px] font-bold">
                        Nhà Hảo Tâm &amp; Doanh Nghiệp Đã Đồng Hành
                      </h2>
                      <p className="text-secondary text-[12.5px]">
                        Minh bạch dòng thiết bị quyên góp theo số định danh trên hệ thống sổ cái EduShare
                      </p>
                    </div>
                    <span className="font-code-num text-secondary text-[12px] font-medium">
                      Tổng số: 03 đợt giao nhận kho
                    </span>
                  </div>
                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                      <thead>
                        <tr className="bg-surface-container-low text-secondary text-[11px] font-semibold tracking-wider uppercase">
                          <th className="rounded-l-xl px-3.5 py-2.5">Mã Phiếu &amp; Thời Gian</th>
                          <th className="px-3.5 py-2.5">Nhà Hảo Tâm / Tổ Chức</th>
                          <th className="px-3.5 py-2.5">Hiện Vật Quyên Góp</th>
                          <th className="px-3.5 py-2.5">Trạng Thái Thẩm Định</th>
                          <th className="rounded-r-xl px-3.5 py-2.5 text-center">Tra Cứu QR</th>
                        </tr>
                      </thead>
                      <tbody className="divide-outline-variant/30 divide-y text-[13px]">
                        {/* Donor 1 */}
                        <tr className="hover:bg-surface-container-low/40 transition-colors">
                          <td className="px-3.5 py-3">
                            <div className="font-code-num text-primary font-semibold">#DON-2024-8801</div>
                            <div className="text-secondary text-[11.5px]">Hôm qua, 14:22</div>
                          </td>
                          <td className="px-3.5 py-3">
                            <div className="font-headline text-on-surface font-semibold">Tập đoàn FPT</div>
                            <div className="text-on-surface-variant text-[11.5px]">Khối CSR &amp; Công Nghệ</div>
                          </td>
                          <td className="px-3.5 py-3">
                            <div className="text-on-surface font-medium">15 Laptop Dell Latitude</div>
                            <div className="text-secondary text-[11.5px]">Kèm 15 thanh RAM 8GB DDR4</div>
                          </td>
                          <td className="px-3.5 py-3">
                            <span className="bg-tertiary-container/15 text-tertiary inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold">
                              <span className="material-symbols-outlined text-[13px]">done_all</span> Đã nghiệm thu kho
                            </span>
                          </td>
                          <td className="px-3.5 py-3 text-center">
                            <button
                              className="bg-surface-container hover:bg-surface-container-high text-primary inline-flex items-center justify-center rounded-lg p-1.5 transition-colors"
                              title="Mã QR định danh thiết bị"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                            </button>
                          </td>
                        </tr>
                        {/* Donor 2 */}
                        <tr className="hover:bg-surface-container-low/40 transition-colors">
                          <td className="px-3.5 py-3">
                            <div className="font-code-num text-primary font-semibold">#DON-2024-8812</div>
                            <div className="text-secondary text-[11.5px]">14/10/2024</div>
                          </td>
                          <td className="px-3.5 py-3">
                            <div className="font-headline text-on-surface font-semibold">Ngân hàng Quân Đội (MB)</div>
                            <div className="text-on-surface-variant text-[11.5px]">Chi nhánh Thanh Hóa</div>
                          </td>
                          <td className="px-3.5 py-3">
                            <div className="text-on-surface font-medium">10 Bộ PC HP ProDesk 400 G6</div>
                            <div className="text-secondary text-[11.5px]">Kèm màn hình HP 21.5 inch FHD</div>
                          </td>
                          <td className="px-3.5 py-3">
                            <span className="bg-tertiary-container/15 text-tertiary inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold">
                              <span className="material-symbols-outlined text-[13px]">done_all</span> Đã nghiệm thu kho
                            </span>
                          </td>
                          <td className="px-3.5 py-3 text-center">
                            <button
                              className="bg-surface-container hover:bg-surface-container-high text-primary inline-flex items-center justify-center rounded-lg p-1.5 transition-colors"
                              title="Mã QR định danh thiết bị"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                            </button>
                          </td>
                        </tr>
                        {/* Donor 3 */}
                        <tr className="hover:bg-surface-container-low/40 transition-colors">
                          <td className="px-3.5 py-3">
                            <div className="font-code-num text-primary font-semibold">#DON-2024-8835</div>
                            <div className="text-secondary text-[11.5px]">12/10/2024</div>
                          </td>
                          <td className="px-3.5 py-3">
                            <div className="font-headline text-on-surface font-semibold">
                              Trần Thị Mai &amp; Nhóm Bạn
                            </div>
                            <div className="text-on-surface-variant text-[11.5px]">Cá nhân hảo tâm (Cầu Giấy, HN)</div>
                          </td>
                          <td className="px-3.5 py-3">
                            <div className="text-on-surface font-medium">03 Laptop ThinkPad T480</div>
                            <div className="text-secondary text-[11.5px]">Kèm chuột Logitech &amp; sạc zin</div>
                          </td>
                          <td className="px-3.5 py-3">
                            <span className="bg-secondary-container text-on-secondary-fixed inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold">
                              <span className="material-symbols-outlined text-[13px]">build</span> Đang vệ sinh tra keo
                            </span>
                          </td>
                          <td className="px-3.5 py-3 text-center">
                            <button
                              className="bg-surface-container hover:bg-surface-container-high text-primary inline-flex items-center justify-center rounded-lg p-1.5 transition-colors"
                              title="Mã QR định danh thiết bị"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* CỘT PHỤ (Bên phải: 4/12) */}
              <div className="gap-space-lg flex flex-col xl:col-span-4">
                {/* 1. Form Đăng Ký Trao Tặng Nhanh */}
                <div
                  className="bg-surface-container-lowest border-primary/20 flex flex-col gap-3.5 rounded-2xl border-2 p-5 shadow-sm"
                  id="dang-ky-trao-tang"
                >
                  <div className="text-primary border-outline-variant/30 flex items-center gap-2.5 border-b pb-3">
                    <div className="bg-primary/10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
                      <span className="material-symbols-outlined text-[22px]">volunteer_activism</span>
                    </div>
                    <div>
                      <h3 className="font-headline text-on-surface text-[16px] leading-tight font-bold">
                        Đăng Ký Trao Tặng Nhanh
                      </h3>
                      <p className="text-secondary text-[11.5px]">Xe EduShare nhận máy tận nơi miễn phí</p>
                    </div>
                  </div>
                  <form
                    className="flex flex-col gap-3"
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Cảm ơn Quý Nhà Hảo Tâm! EduShare sẽ liên hệ xác nhận trong 30 phút.");
                    }}
                  >
                    {/* Mã chiến dịch tự động áp dụng */}
                    <div>
                      <label className="text-secondary mb-1 block text-[11.5px] font-semibold tracking-wider uppercase">
                        Mã chiến dịch
                      </label>
                      <input
                        className="bg-surface-container-low font-code-num text-primary border-outline-variant/30 w-full cursor-not-allowed rounded-xl border px-3 py-1.5 text-[12.5px] font-bold outline-none"
                        readOnly
                        type="text"
                        defaultValue="#CD-2024-ML08 (Mường Lát 2024)"
                      />
                    </div>
                    {/* Tên cá nhân / tổ chức */}
                    <div>
                      <label className="text-on-surface mb-1 block text-[12px] font-medium">
                        Tổ chức / Cá nhân trao tặng <span className="text-error">*</span>
                      </label>
                      <input
                        className="bg-surface-container-lowest text-on-surface border-outline-variant focus:border-primary focus:ring-primary w-full rounded-xl border px-3 py-2 text-[13px] transition-all outline-none focus:ring-1"
                        placeholder="VD: Tập đoàn Vingroup / Nguyễn Văn A"
                        required
                        type="text"
                      />
                    </div>
                    {/* Số điện thoại & Người phụ trách */}
                    <div>
                      <label className="text-on-surface mb-1 block text-[12px] font-medium">
                        Số điện thoại liên hệ <span className="text-error">*</span>
                      </label>
                      <input
                        className="bg-surface-container-lowest text-on-surface border-outline-variant focus:border-primary focus:ring-primary w-full rounded-xl border px-3 py-2 text-[13px] transition-all outline-none focus:ring-1"
                        placeholder="090x xxx xxx (Anh Nam)"
                        required
                        type="text"
                      />
                    </div>
                    {/* Chủng loại thiết bị */}
                    <div>
                      <label className="text-on-surface mb-1 block text-[12px] font-medium">
                        Loại thiết bị trao tặng <span className="text-error">*</span>
                      </label>
                      <select className="bg-surface-container-lowest text-on-surface border-outline-variant focus:border-primary focus:ring-primary w-full rounded-xl border px-3 py-2 text-[13px] transition-all outline-none focus:ring-1">
                        <option>Laptop cũ còn sử dụng tốt</option>
                        <option>Máy tính để bàn (PC Desktop)</option>
                        <option>Màn hình máy tính (LCD/LED)</option>
                        <option>Máy tính bảng học tập</option>
                        <option>Phụ kiện (Chuột, phím, UPS, Cáp)</option>
                      </select>
                    </div>
                    {/* Số lượng */}
                    <div>
                      <label className="text-on-surface mb-1 block text-[12px] font-medium">Số lượng dự kiến</label>
                      <div className="flex items-center gap-2">
                        <input
                          className="bg-surface-container-lowest font-code-num text-on-surface border-outline-variant focus:border-primary focus:ring-primary w-24 rounded-xl border px-3 py-2 text-[13px] font-semibold transition-all outline-none focus:ring-1"
                          min="1"
                          type="number"
                          defaultValue="2"
                        />
                        <span className="text-secondary text-[12px]">thiết bị / bộ</span>
                      </div>
                    </div>
                    {/* Địa chỉ lấy hàng */}
                    <div>
                      <label className="text-on-surface mb-1 block text-[12px] font-medium">
                        Địa chỉ lấy thiết bị tận nơi <span className="text-error">*</span>
                      </label>
                      <textarea
                        className="bg-surface-container-lowest text-on-surface border-outline-variant focus:border-primary focus:ring-primary w-full rounded-xl border px-3 py-2 text-[12.5px] transition-all outline-none focus:ring-1"
                        placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành..."
                        required
                        rows="2"
                      ></textarea>
                    </div>
                    {/* Nút CTA gửi */}
                    <button
                      className="bg-primary hover:bg-primary-container text-on-primary font-headline focus:ring-primary mt-1 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-[13.5px] font-bold shadow-sm transition-all hover:shadow focus:ring-2 focus:outline-none"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[19px]">send</span>
                      <span>Gửi Yêu Cầu Trao Tặng Ngay</span>
                    </button>
                    {/* Ghi chú bảo chứng thuế */}
                    <div className="bg-surface-container-low border-outline-variant/30 flex items-start gap-2 rounded-xl border p-2.5">
                      <span className="material-symbols-outlined text-tertiary mt-0.5 shrink-0 text-[17px]">
                        verified_user
                      </span>
                      <p className="text-on-surface-variant text-[11.5px] leading-tight">
                        EduShare hỗ trợ xe vận chuyển miễn phí 100% &amp; xuất biên lai tài trợ khấu trừ thuế TNDN hợp
                        pháp.
                      </p>
                    </div>
                  </form>
                </div>

                {/* 2. Cam Kết Minh Bạch 4 Bước Của Edushare */}
                <div className="bg-surface-container-lowest border-outline-variant/40 flex flex-col gap-3.5 rounded-2xl border p-5 shadow-sm">
                  <div className="border-outline-variant/30 border-b pb-2">
                    <h3 className="font-headline text-on-surface text-[15px] font-bold">
                      Quy Trình Minh Bạch 4 Bước EduShare
                    </h3>
                    <p className="text-secondary text-[11.5px]">Chuẩn mực giám sát thiết bị từ thiện quốc gia</p>
                  </div>
                  <div className="relative flex flex-col gap-3">
                    {/* Step 1 */}
                    <div className="flex items-start gap-3">
                      <div className="bg-tertiary text-on-tertiary font-code-num flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold shadow-sm">
                        1
                      </div>
                      <div>
                        <div className="font-headline text-on-surface text-[12.5px] leading-tight font-semibold">
                          Đăng ký &amp; Tiếp nhận tận nơi
                        </div>
                        <p className="text-on-surface-variant mt-0.5 text-[11.5px]">
                          Đội logistics đến nhận máy, gắn mã QR niêm phong và bàn giao biên nhận điện tử tạm thời.
                        </p>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="flex items-start gap-3">
                      <div className="bg-primary text-on-primary font-code-num ring-primary/20 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold shadow-sm ring-2">
                        2
                      </div>
                      <div>
                        <div className="font-headline text-primary text-[12.5px] leading-tight font-semibold">
                          Kiểm định 7 bước &amp; Tân trang
                        </div>
                        <p className="text-on-surface-variant mt-0.5 text-[11.5px]">
                          Kỹ thuật viên test phần cứng, vệ sinh tra keo tản nhiệt, nâng cấp SSD và nạp hệ điều hành
                          chuẩn GD.
                        </p>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="flex items-start gap-3">
                      <div className="bg-surface-container-high text-secondary font-code-num flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold">
                        3
                      </div>
                      <div>
                        <div className="font-headline text-on-surface text-[12.5px] leading-tight font-semibold">
                          Vận chuyển vượt đèo &amp; Lắp đặt
                        </div>
                        <p className="text-on-surface-variant mt-0.5 text-[11.5px]">
                          Vận tải lên Mường Lát, phối hợp cùng ban giám hiệu thi công hệ thống mạng LAN và bàn máy.
                        </p>
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="flex items-start gap-3">
                      <div className="bg-surface-container-high text-secondary font-code-num flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold">
                        4
                      </div>
                      <div>
                        <div className="font-headline text-on-surface text-[12.5px] leading-tight font-semibold">
                          Nghiệm thu ký số &amp; Cấp chứng nhận
                        </div>
                        <p className="text-on-surface-variant mt-0.5 text-[11.5px]">
                          Nhà trường ký biên bản bàn giao điện tử, cập nhật ảnh trao thực tế và phát hành chứng nhận tài
                          trợ.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Khối Thông Tin Hỗ Trợ Chiến Dịch */}
                <div className="bg-surface-container-low border-outline-variant/40 flex flex-col gap-2 rounded-2xl border p-4">
                  <div className="text-on-surface font-headline flex items-center gap-2 text-[13.5px] font-bold">
                    <span className="material-symbols-outlined text-primary text-[19px]">support_agent</span>
                    <span>Thông Tin Hỗ Trợ Chiến Dịch</span>
                  </div>
                  <div className="border-outline-variant/30 flex items-center justify-between border-t pt-1.5 text-[12px]">
                    <span className="text-secondary">Hotline điều phối:</span>
                    <span className="text-primary font-code-num font-bold">1900 6868 (Phím 1)</span>
                  </div>
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-secondary">Email tiếp nhận:</span>
                    <span className="text-on-surface font-code-num font-medium">quyengop@edushare.vn</span>
                  </div>
                  <div className="border-outline-variant/30 flex items-center justify-between border-t pt-1 text-[12px]">
                    <span className="text-secondary">Cam kết kỹ thuật:</span>
                    <span className="text-tertiary font-semibold">Bảo trợ kỹ thuật 36 tháng</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
