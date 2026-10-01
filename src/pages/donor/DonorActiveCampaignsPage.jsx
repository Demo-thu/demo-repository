import React from "react";
import { Link } from "react-router-dom";

export default function DonorActiveCampaignsPage() {
  return (
    <div className="bg-background font-body text-on-surface text-[14px] leading-relaxed antialiased flex">
      {/* 1. THANH SIDEBAR ĐIỀU HƯỚNG CỦA CỔNG NHÀ HẢO TÂM */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest border-r border-outline-variant/40 shadow-[0_2px_12px_rgba(0,0,0,0.03)] z-50 flex flex-col justify-between">
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* App Header / Logo */}
          <div className="h-20 px-space-lg flex items-center justify-between border-b border-outline-variant/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-headline font-bold text-xl shadow-sm">
                E
              </div>
              <div>
                <div className="font-headline font-bold text-[17px] text-primary tracking-tight leading-tight">EduShare VN</div>
                <div className="text-[12px] font-medium text-secondary">Cổng Nhà Hảo Tâm</div>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary font-medium text-[11px]">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              Trực tuyến
            </span>
          </div>
          
          {/* Navigation Section */}
          <div className="px-space-md pt-5 pb-2">
            <div className="px-space-sm text-[11px] font-semibold text-secondary uppercase tracking-wider">Nghiệp vụ tài trợ &amp; Giám sát</div>
          </div>
          <nav className="flex flex-col px-space-md gap-1 flex-1">
            {/* Đợt vận động đang chạy (Active Item) */}
            <Link className="flex items-center gap-3 px-space-md py-2.5 rounded-xl bg-primary text-on-primary font-medium shadow-sm transition-all" to="/donor/campaigns">
              <span className="material-symbols-outlined text-[20px]">campaign</span>
              <span className="font-headline text-[13.5px]">Đợt vận động đang chạy</span>
            </Link>
            {/* Đăng ký trao tặng */}
            <Link className="flex items-center gap-3 px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-medium" to="/donor/donation-details">
              <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
              <span className="text-[13.5px]">Đăng ký trao tặng</span>
            </Link>
            {/* Quản lý phiếu của tôi */}
            <Link className="flex items-center gap-3 px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-medium" to="/donor/dashboard">
              <span className="material-symbols-outlined text-[20px]">receipt_long</span>
              <span className="text-[13.5px]">Quản lý phiếu của tôi</span>
              <span className="ml-auto px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed text-[11px] font-semibold">03</span>
            </Link>
            {/* Biên nhận & Chứng nhận */}
            <Link className="flex items-center gap-3 px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-medium" to="/donor/certificates">
              <span className="material-symbols-outlined text-[20px]">verified</span>
              <span className="text-[13.5px]">Biên nhận &amp; Chứng nhận</span>
            </Link>
            {/* Hành trình & Mã QR */}
            <Link className="flex items-center gap-3 px-space-md py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-medium" to="/donor/tracking">
              <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
              <span className="text-[13.5px]">Hành trình &amp; Mã QR</span>
            </Link>
          </nav>
        </div>
        
        {/* Footer Sidebar */}
        <div className="p-space-md border-t border-outline-variant/30 bg-surface-container-low/60">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-semibold uppercase text-secondary tracking-wider">Hạ Tầng Dữ Liệu</span>
            <span className="inline-flex items-center gap-1 text-[11px] text-tertiary font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> 63 Tỉnh Thành
            </span>
          </div>
          <div className="text-[12px] font-medium text-on-surface">Phiên bản Quốc gia v2.8.4</div>
          <div className="text-[11px] text-secondary">Hệ thống EduShare Core - RBAC Protected</div>
        </div>
      </aside>

      {/* MAIN WRAPPER */}
      <div className="pl-72 flex-1 flex flex-col min-h-screen">
        {/* 2. THANH HEADER TRÊN CÙNG */}
        <header className="sticky top-0 h-20 bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/40 shadow-sm z-40 px-gutter-desktop flex items-center justify-between gap-space-lg">
          <div className="flex-1 max-w-xl">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-secondary text-[20px]">search</span>
              <input className="w-full pl-11 pr-4 py-2 bg-surface-container-low/80 hover:bg-surface-container-low focus:bg-surface-container-lowest rounded-xl text-[13.5px] text-on-surface placeholder:text-outline border border-transparent focus:border-primary-container outline-none transition-all shadow-inner" placeholder="Tìm kiếm mã quyên góp, đợt vận động, thiết bị..." type="search" />
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            {/* Account Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-secondary-container/70 border border-outline-variant/30 text-on-secondary-fixed rounded-full shadow-sm">
              <span className="material-symbols-outlined text-[17px] text-primary">domain</span>
              <span className="text-[12.5px] font-semibold font-headline">Tập đoàn Vingroup</span>
              <span className="text-[11.5px] font-code-num text-on-secondary-container font-medium">#NHT-78294</span>
            </div>
            {/* Notification Bell */}
            <button className="relative p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors" title="Thông báo hệ thống" type="button">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-error rounded-full ring-2 ring-surface-container-lowest"></span>
            </button>
            {/* User Profile Pill */}
            <div className="flex items-center gap-2.5 pl-2 border-l border-outline-variant/40">
              <div className="hidden md:flex flex-col text-right">
                <span className="text-[13px] font-semibold text-on-surface leading-tight font-headline">Ban Điều Hành Quỹ</span>
                <span className="text-[11px] text-secondary">Nhà Hảo Tâm Đồng Hành</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary to-primary-container text-on-primary flex items-center justify-center font-bold text-[14px] shadow-sm">
                <span className="material-symbols-outlined text-[19px]">person</span>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="w-full flex-1 bg-background px-gutter-desktop py-space-lg">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-space-lg pb-space-xl">
            {/* 3. BREADCRUMBS & BANNER TIÊU ĐỀ CHIẾN DỊCH */}
            <div className="flex flex-col gap-3">
              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 text-secondary text-[12.5px] font-medium">
                <Link className="hover:text-primary transition-colors" to="/">EduShare VN</Link>
                <span className="material-symbols-outlined text-[15px] text-outline">chevron_right</span>
                <Link className="hover:text-primary transition-colors" to="/donor/dashboard">Cổng Nhà Hảo Tâm</Link>
                <span className="material-symbols-outlined text-[15px] text-outline">chevron_right</span>
                <Link className="hover:text-primary transition-colors" to="/donor/campaigns">Đợt vận động đang chạy</Link>
                <span className="material-symbols-outlined text-[15px] text-outline">chevron_right</span>
                <span className="font-code-num text-primary font-semibold">#CD-2024-ML08</span>
              </div>

              {/* Banner Tiêu Đề Chiến Dịch */}
              <div className="bg-surface-container-lowest border border-outline-variant/50 p-6 rounded-2xl shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                <div className="flex flex-col gap-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary text-[11.5px] font-semibold inline-flex items-center gap-1.5 shadow-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
                      </span>
                      ĐANG VẬN ĐỘNG (Còn 12 ngày)
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-code-num text-[11.5px] text-on-surface-variant font-semibold border border-outline-variant/30">
                      Mã đợt: #CD-2024-ML08
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed text-[11.5px] font-medium inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">landscape</span>
                      Ưu tiên cấp 1: Mường Lát, Thanh Hóa
                    </span>
                  </div>
                  <h1 className="font-headline font-bold text-[22px] sm:text-[26px] text-on-surface tracking-tight leading-snug">
                    Chiến Dịch: Chắp Cánh Ước Mơ Tin Học Mường Lát 2024
                  </h1>
                  <p className="text-[13.5px] text-on-surface-variant leading-relaxed">
                    Huy động 35 bộ máy vi tính &amp; nâng cấp hạ tầng phòng máy đạt chuẩn cho 02 điểm trường dân tộc bán trú xã Tam Chung &amp; thị trấn Mường Lát, Thanh Hóa.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface border border-outline-variant/40 transition-colors text-[13px] font-medium shadow-sm" type="button">
                    <span className="material-symbols-outlined text-[17px] text-secondary">share</span>
                    <span>Chia sẻ</span>
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface border border-outline-variant/40 transition-colors text-[13px] font-medium shadow-sm" type="button">
                    <span className="material-symbols-outlined text-[17px] text-primary">download</span>
                    <span>Tải hồ sơ thẩm định PDF</span>
                  </button>
                  <Link className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary-container text-on-primary transition-all font-headline font-semibold text-[13px] shadow-sm ml-1" to="/donor/donation-details">
                    <span className="material-symbols-outlined text-[18px]">volunteer_activism</span>
                    <span>Đăng Ký Quyên Góp</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. HỆ THỐNG METRIC CARDS TIẾN ĐỘ THỜI GIAN THỰC */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {/* Card 1: Tổng mục tiêu thiết bị */}
              <div className="bg-surface-container-lowest border border-outline-variant/40 p-4 rounded-2xl shadow-sm flex flex-col justify-between hover:border-primary/40 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11.5px] font-semibold text-secondary uppercase tracking-wider">Mục tiêu thiết bị</span>
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[19px]">devices</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline font-bold text-[28px] text-primary leading-none">28</span>
                    <span className="text-[14px] text-on-surface-variant font-medium">/ 35 máy</span>
                  </div>
                  <div className="mt-2.5 w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-700" style={{ width: "80%" }}></div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11.5px] text-secondary">
                    <span>Tiến độ tiếp nhận</span>
                    <span className="font-bold text-primary font-code-num">80.0% Đạt</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Điểm trường thụ hưởng */}
              <div className="bg-surface-container-lowest border border-outline-variant/40 p-4 rounded-2xl shadow-sm flex flex-col justify-between hover:border-tertiary/40 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11.5px] font-semibold text-secondary uppercase tracking-wider">Điểm trường thụ hưởng</span>
                  <div className="w-8 h-8 rounded-lg bg-tertiary-container/15 text-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[19px]">school</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline font-bold text-[28px] text-on-surface leading-none">02</span>
                    <span className="text-[13px] text-on-surface-variant font-medium">Trường PTDTBT</span>
                  </div>
                  <div className="mt-2 flex flex-col gap-0.5 text-[11.5px] text-on-surface-variant">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-tertiary">check_circle</span>
                      <span>THCS Mường Lát (18 máy)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-tertiary">check_circle</span>
                      <span>Tiểu học Tam Chung (17 máy)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Học sinh tiếp cận */}
              <div className="bg-surface-container-lowest border border-outline-variant/40 p-4 rounded-2xl shadow-sm flex flex-col justify-between hover:border-secondary/40 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11.5px] font-semibold text-secondary uppercase tracking-wider">Học sinh tiếp cận</span>
                  <div className="w-8 h-8 rounded-lg bg-secondary-container text-on-secondary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[19px]">groups</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline font-bold text-[28px] text-on-surface leading-none">412</span>
                    <span className="text-[13px] text-on-surface-variant font-medium">Em học sinh</span>
                  </div>
                  <p className="mt-2 text-[11.5px] text-on-surface-variant line-clamp-2 leading-relaxed">
                    100% học sinh người Mông, Thái, Mường khó khăn lần đầu thực hành máy tính.
                  </p>
                </div>
              </div>

              {/* Card 4: Quỹ linh kiện & Hỗ trợ kỹ thuật */}
              <div className="bg-surface-container-lowest border border-outline-variant/40 p-4 rounded-2xl shadow-sm flex flex-col justify-between hover:border-tertiary/40 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11.5px] font-semibold text-secondary uppercase tracking-wider">Quỹ linh kiện &amp; Kỹ thuật</span>
                  <div className="w-8 h-8 rounded-lg bg-tertiary-container/15 text-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[19px]">account_balance_wallet</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline font-bold text-[25px] text-tertiary leading-none">148 Tr</span>
                    <span className="text-[12px] text-on-surface-variant font-code-num">/ 185 Tr VNĐ</span>
                  </div>
                  <div className="mt-2.5 w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div className="bg-tertiary h-full rounded-full transition-all duration-700" style={{ width: "80%" }}></div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11.5px] text-secondary">
                    <span>Bảo trợ kỹ thuật &amp; bảo dưỡng</span>
                    <span className="font-bold text-tertiary font-code-num">36 Tháng</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. BỐ CỤC 2 CỘT CÂN XỨNG & HÀI HÒA (Layout 8/12 & 4/12) */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
              {/* CỘT CHÍNH (Bên trái: 8/12) */}
              <div className="xl:col-span-8 flex flex-col gap-space-lg">
                {/* 1. DANH MỤC HẠNG MỤC CẦN QUYÊN GÓP (Itemized Donation Needs) */}
                <div className="bg-surface-container-lowest border border-outline-variant/40 p-5 sm:p-6 rounded-2xl shadow-sm flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/30 pb-3">
                    <div>
                      <h2 className="font-headline font-bold text-[17px] text-on-surface">Danh Mục Hạng Mục Cần Quyên Góp</h2>
                      <p className="text-[12.5px] text-secondary">Kiểm định chuẩn theo tiêu chuẩn phòng tin học giáo dục của Bộ GD&amp;ĐT</p>
                    </div>
                    <span className="self-start sm:self-auto px-2.5 py-1 bg-surface-container rounded-full text-[11.5px] text-on-surface-variant font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">update</span>
                      Cập nhật 15 phút trước
                    </span>
                  </div>
                  {/* List Cards */}
                  <div className="flex flex-col gap-3">
                    {/* Item 1: Laptop Giáo Viên */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col gap-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-primary flex items-center justify-center shrink-0 shadow-xs">
                            <span className="material-symbols-outlined text-[22px]">laptop_mac</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-headline font-semibold text-[14.5px] text-on-surface">Laptop Giáo Viên &amp; Bồi Dưỡng HSG</h3>
                              <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container text-[11px] font-semibold">
                                Còn thiếu 03 máy
                              </span>
                            </div>
                            <p className="text-[12px] text-secondary mt-0.5">
                              Tiêu chuẩn tối thiểu: Core i5 gen 8+ (hoặc Ryzen 5), RAM 8GB, SSD 256GB NVMe, thời lượng pin &gt; 1.5 giờ.
                            </p>
                          </div>
                        </div>
                        <Link className="shrink-0 px-3.5 py-1.5 bg-primary-container text-on-primary rounded-xl font-headline font-medium text-[12px] hover:bg-primary transition-colors shadow-sm self-start sm:self-center" to="/donor/donation-details">
                          Quyên góp mục này
                        </Link>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-[11.5px] text-secondary mb-1">
                          <span>Đã nhận: <b className="font-code-num text-on-surface font-semibold">12 / 15 máy</b></span>
                          <span className="font-code-num font-bold text-primary">80.0% Đạt</span>
                        </div>
                        <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                    </div>
                    {/* Item 2: Bộ Máy Vi Tính Để Bàn */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col gap-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-primary flex items-center justify-center shrink-0 shadow-xs">
                            <span className="material-symbols-outlined text-[22px]">desktop_windows</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-headline font-semibold text-[14.5px] text-on-surface">Bộ Máy Vi Tính Để Bàn (Thùng PC + Màn hình 19-24 inch)</h3>
                              <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container text-[11px] font-semibold">
                                Còn thiếu 04 bộ
                              </span>
                            </div>
                            <p className="text-[12px] text-secondary mt-0.5">
                              Đồng bộ linh kiện: Core i3/i5 gen 7+, RAM 8GB, SSD 128/256GB, màn hình LED FHD chống lóa cho học sinh.
                            </p>
                          </div>
                        </div>
                        <Link className="shrink-0 px-3.5 py-1.5 bg-primary-container text-on-primary rounded-xl font-headline font-medium text-[12px] hover:bg-primary transition-colors shadow-sm self-start sm:self-center" to="/donor/donation-details">
                          Quyên góp mục này
                        </Link>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-[11.5px] text-secondary mb-1">
                          <span>Đã nhận: <b className="font-code-num text-on-surface font-semibold">16 / 20 bộ</b></span>
                          <span className="font-code-num font-bold text-primary">80.0% Đạt</span>
                        </div>
                        <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                    </div>
                    {/* Item 3: Bộ Lưu Điện UPS & Switch Mạng Gigabit */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low/40 border border-outline-variant/30 flex flex-col gap-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-tertiary flex items-center justify-center shrink-0 shadow-xs">
                            <span className="material-symbols-outlined text-[22px]">router</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-headline font-semibold text-[14.5px] text-on-surface">Bộ Lưu Điện UPS 1000VA &amp; Switch Mạng Gigabit</h3>
                              <span className="px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary text-[11px] font-semibold flex items-center gap-1">
                                <span className="material-symbols-outlined text-[13px]">check</span> Đã tiếp nhận đủ
                              </span>
                            </div>
                            <p className="text-[12px] text-secondary mt-0.5">
                              02 Switch Gigabit TP-Link 24 cổng &amp; 04 Bộ lưu điện Santak 1000VA bảo vệ chống chập cháy sụt áp vùng cao.
                            </p>
                          </div>
                        </div>
                        <button className="shrink-0 px-3.5 py-1.5 bg-surface-container text-outline rounded-xl font-headline font-medium text-[12px] cursor-not-allowed self-start sm:self-center" disabled="" type="button">
                          Đã tiếp nhận đủ
                        </button>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-[11.5px] text-secondary mb-1">
                          <span>Đã nhận: <b className="font-code-num text-on-surface font-semibold">06 / 06 bộ</b></span>
                          <span className="font-code-num font-bold text-tertiary">100% Hoàn thành</span>
                        </div>
                        <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                          <div className="bg-tertiary h-full rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                    </div>
                    {/* Item 4: Bàn phím, Chuột Quang & Dây Mạng Cat6 */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col gap-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-primary flex items-center justify-center shrink-0 shadow-xs">
                            <span className="material-symbols-outlined text-[22px]">keyboard</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-headline font-semibold text-[14.5px] text-on-surface">Bàn phím, Chuột Quang &amp; Dây Mạng Cat6</h3>
                              <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container text-[11px] font-semibold">
                                Còn thiếu 10 bộ
                              </span>
                            </div>
                            <p className="text-[12px] text-secondary mt-0.5">
                              Bàn phím + chuột USB bền bỉ chịu ẩm tốt, kèm 01 cuộn cáp xoắn UTP Cat6 305m cho 02 phòng thực hành.
                            </p>
                          </div>
                        </div>
                        <Link className="shrink-0 px-3.5 py-1.5 bg-primary-container text-on-primary rounded-xl font-headline font-medium text-[12px] hover:bg-primary transition-colors shadow-sm self-start sm:self-center" to="/donor/donation-details">
                          Quyên góp mục này
                        </Link>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-[11.5px] text-secondary mb-1">
                          <span>Đã nhận: <b className="font-code-num text-on-surface font-semibold">25 / 35 bộ</b></span>
                          <span className="font-code-num font-bold text-primary">71.4% Đạt</span>
                        </div>
                        <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: "71.4%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. HỒ SƠ KHẢO SÁT & MINH CHỨNG THỰC ĐỊA (Field Survey & Evidence) */}
                <div className="bg-surface-container-lowest border border-outline-variant/40 p-5 sm:p-6 rounded-2xl shadow-sm flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/30 pb-3">
                    <div>
                      <h2 className="font-headline font-bold text-[17px] text-on-surface">Hồ Sơ Khảo Sát &amp; Minh Chứng Thực Địa</h2>
                      <p className="text-[12.5px] text-secondary">Đã thẩm định trực tiếp bởi Đội Công Tác Xã Hội EduShare &amp; UBND Huyện Mường Lát</p>
                    </div>
                    <span className="self-start sm:self-auto px-3 py-1 bg-surface-container rounded-full text-[11.5px] text-primary font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px]">verified</span>
                      Đã Thẩm Tra 100%
                    </span>
                  </div>
                  {/* Ảnh thực địa 2 ảnh ngang hàng */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {/* Ảnh 1: Thư viện trao tặng */}
                    <div className="rounded-xl overflow-hidden border border-outline-variant/40 relative group bg-surface-container shadow-sm h-56">
                      <img alt="Học sinh dân tộc vui mừng nhận máy tính" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida/AEtjO1X2qnp50DsbRE5-Z30LQj-QNmjKpPYbEBdP9nU8VLqvPK9F5mrFgpoYH08CYECxjvz7heD7TenQHbfiKDSorgQmY-8RFiMTSxKCYTmtFU072QS7GITuPQTqx_yRM_7ZbNZdHTPdDeUYXNZzcqt1L6cf1BnIuTBrND_USXi6Q7fMzkVFjJ3yWDT8tDSxurL-JhH7ZXgKyEiHjL0M6Mt8Jh-HGbmz2gBp5zy-FLQLG9ky3sgLoZSC9H8ri_iz" />
                      <div className="absolute inset-0 bg-gradient-to-t from-on-background/85 via-on-background/30 to-transparent flex flex-col justify-end p-3.5">
                        <span className="self-start px-2 py-0.5 rounded bg-primary text-on-primary text-[10px] font-bold uppercase tracking-wider mb-1">Ảnh Khảo Sát Thực Địa</span>
                        <p className="text-white text-[12px] leading-snug line-clamp-2">Điểm trường bán trú xã Tam Chung, Mường Lát - Thầy cô và các em học sinh hân hoan đón nhận những thiết bị thử nghiệm.</p>
                      </div>
                    </div>
                    {/* Ảnh 2: Không gian phòng máy & trường lớp */}
                    <div className="rounded-xl overflow-hidden border border-outline-variant/40 relative group bg-surface-container shadow-sm h-56 flex flex-col justify-end bg-gradient-to-br from-secondary-container/50 to-surface-container-high">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-on-background/70"></div>
                      <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-outline-variant/40 flex items-center gap-1.5 text-[11.5px] font-medium text-on-surface">
                        <span className="material-symbols-outlined text-[15px] text-tertiary">check_circle</span>
                        Phòng học sẵn sàng
                      </div>
                      <div className="relative z-10 p-3.5 flex flex-col gap-1">
                        <span className="self-start px-2 py-0.5 rounded bg-tertiary text-on-tertiary text-[10px] font-bold uppercase tracking-wider">Hiện trạng phòng máy</span>
                        <p className="text-white text-[12px] leading-snug">02 phòng học kiên cố đã lợp tôn chống dột, hệ thống bàn ghế chuẩn và sẵn sàng tiếp nhận dây điện và hệ thống giá đỡ chuyên dụng.</p>
                      </div>
                    </div>
                  </div>
                  {/* Các thẻ thông tin tóm tắt */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-primary font-headline font-semibold text-[13px]">
                          <span className="material-symbols-outlined text-[17px]">verified_user</span>
                          <span>Phê duyệt địa phương</span>
                        </div>
                        <p className="text-[12px] text-on-surface-variant mt-1.5 leading-normal">
                          Công văn số 1142/GDĐT-ML của Phòng GD&amp;ĐT và UBND Huyện xác nhận tình trạng thiếu thốn và phê duyệt danh mục tiếp nhận.
                        </p>
                      </div>
                      <span className="mt-2 text-[11px] font-medium text-secondary inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-primary">task_alt</span> Hồ sơ lưu trữ số #HS-ML08
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-tertiary font-headline font-semibold text-[13px]">
                          <span className="material-symbols-outlined text-[17px]">bolt</span>
                          <span>Điện &amp; Cáp quang Viettel</span>
                        </div>
                        <p className="text-[12px] text-on-surface-variant mt-1.5 leading-normal">
                          Điện lưới 220V ổn định. Viettel Thanh Hóa đã kéo cáp quang Internet tốc độ cao miễn phí 24 tháng theo cam kết bảo trợ liên kết.
                        </p>
                      </div>
                      <span className="mt-2 text-[11px] font-medium text-secondary inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-tertiary">wifi</span> Đã kết nối băng thông rộng
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-secondary font-headline font-semibold text-[13px]">
                          <span className="material-symbols-outlined text-[17px]">supervised_user_circle</span>
                          <span>Nhân sự phòng máy</span>
                        </div>
                        <p className="text-[12px] text-on-surface-variant mt-1.5 leading-normal">
                          02 Giáo viên Tin học chính quy đã hoàn thành khóa tập huấn điều phối và giám sát thiết bị số của EduShare Hub.
                        </p>
                      </div>
                      <span className="mt-2 text-[11px] font-medium text-secondary inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-secondary">school</span> Phụ trách: Thầy Đỗ Văn Tuyên
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. DANH SÁCH NHÀ HẢO TÂM ĐÃ ĐỒNG HÀNH & MINH CHỨNG */}
                <div className="bg-surface-container-lowest border border-outline-variant/40 p-5 sm:p-6 rounded-2xl shadow-sm flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/30 pb-3">
                    <div>
                      <h2 className="font-headline font-bold text-[17px] text-on-surface">Nhà Hảo Tâm &amp; Doanh Nghiệp Đã Đồng Hành</h2>
                      <p className="text-[12.5px] text-secondary">Minh bạch dòng thiết bị quyên góp theo số định danh trên hệ thống sổ cái EduShare</p>
                    </div>
                    <span className="font-code-num text-[12px] text-secondary font-medium">Tổng số: 03 đợt giao nhận kho</span>
                  </div>
                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-surface-container-low text-secondary text-[11px] font-semibold uppercase tracking-wider">
                          <th className="py-2.5 px-3.5 rounded-l-xl">Mã Phiếu &amp; Thời Gian</th>
                          <th className="py-2.5 px-3.5">Nhà Hảo Tâm / Tổ Chức</th>
                          <th className="py-2.5 px-3.5">Hiện Vật Quyên Góp</th>
                          <th className="py-2.5 px-3.5">Trạng Thái Thẩm Định</th>
                          <th className="py-2.5 px-3.5 rounded-r-xl text-center">Tra Cứu QR</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant/30 text-[13px]">
                        {/* Donor 1 */}
                        <tr className="hover:bg-surface-container-low/40 transition-colors">
                          <td className="py-3 px-3.5">
                            <div className="font-code-num font-semibold text-primary">#DON-2024-8801</div>
                            <div className="text-[11.5px] text-secondary">Hôm qua, 14:22</div>
                          </td>
                          <td className="py-3 px-3.5">
                            <div className="font-headline font-semibold text-on-surface">Tập đoàn FPT</div>
                            <div className="text-[11.5px] text-on-surface-variant">Khối CSR &amp; Công Nghệ</div>
                          </td>
                          <td className="py-3 px-3.5">
                            <div className="font-medium text-on-surface">15 Laptop Dell Latitude</div>
                            <div className="text-[11.5px] text-secondary">Kèm 15 thanh RAM 8GB DDR4</div>
                          </td>
                          <td className="py-3 px-3.5">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary text-[11.5px] font-semibold">
                              <span className="material-symbols-outlined text-[13px]">done_all</span> Đã nghiệm thu kho
                            </span>
                          </td>
                          <td className="py-3 px-3.5 text-center">
                            <button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors inline-flex items-center justify-center" title="Mã QR định danh thiết bị" type="button">
                              <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                            </button>
                          </td>
                        </tr>
                        {/* Donor 2 */}
                        <tr className="hover:bg-surface-container-low/40 transition-colors">
                          <td className="py-3 px-3.5">
                            <div className="font-code-num font-semibold text-primary">#DON-2024-8812</div>
                            <div className="text-[11.5px] text-secondary">14/10/2024</div>
                          </td>
                          <td className="py-3 px-3.5">
                            <div className="font-headline font-semibold text-on-surface">Ngân hàng Quân Đội (MB)</div>
                            <div className="text-[11.5px] text-on-surface-variant">Chi nhánh Thanh Hóa</div>
                          </td>
                          <td className="py-3 px-3.5">
                            <div className="font-medium text-on-surface">10 Bộ PC HP ProDesk 400 G6</div>
                            <div className="text-[11.5px] text-secondary">Kèm màn hình HP 21.5 inch FHD</div>
                          </td>
                          <td className="py-3 px-3.5">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary text-[11.5px] font-semibold">
                              <span className="material-symbols-outlined text-[13px]">done_all</span> Đã nghiệm thu kho
                            </span>
                          </td>
                          <td className="py-3 px-3.5 text-center">
                            <button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors inline-flex items-center justify-center" title="Mã QR định danh thiết bị" type="button">
                              <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                            </button>
                          </td>
                        </tr>
                        {/* Donor 3 */}
                        <tr className="hover:bg-surface-container-low/40 transition-colors">
                          <td className="py-3 px-3.5">
                            <div className="font-code-num font-semibold text-primary">#DON-2024-8835</div>
                            <div className="text-[11.5px] text-secondary">12/10/2024</div>
                          </td>
                          <td className="py-3 px-3.5">
                            <div className="font-headline font-semibold text-on-surface">Trần Thị Mai &amp; Nhóm Bạn</div>
                            <div className="text-[11.5px] text-on-surface-variant">Cá nhân hảo tâm (Cầu Giấy, HN)</div>
                          </td>
                          <td className="py-3 px-3.5">
                            <div className="font-medium text-on-surface">03 Laptop ThinkPad T480</div>
                            <div className="text-[11.5px] text-secondary">Kèm chuột Logitech &amp; sạc zin</div>
                          </td>
                          <td className="py-3 px-3.5">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed text-[11.5px] font-semibold">
                              <span className="material-symbols-outlined text-[13px]">build</span> Đang vệ sinh tra keo
                            </span>
                          </td>
                          <td className="py-3 px-3.5 text-center">
                            <button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors inline-flex items-center justify-center" title="Mã QR định danh thiết bị" type="button">
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
              <div className="xl:col-span-4 flex flex-col gap-space-lg">
                {/* 1. FORM ĐĂNG KÝ TRAO TẶNG NHANH */}
                <div className="bg-surface-container-lowest border-2 border-primary/20 p-5 rounded-2xl shadow-sm flex flex-col gap-3.5" id="dang-ky-trao-tang">
                  <div className="flex items-center gap-2.5 text-primary border-b border-outline-variant/30 pb-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px]">volunteer_activism</span>
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-[16px] text-on-surface leading-tight">Đăng Ký Trao Tặng Nhanh</h3>
                      <p className="text-[11.5px] text-secondary">Xe EduShare nhận máy tận nơi miễn phí</p>
                    </div>
                  </div>
                  <form className="flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); alert('Cảm ơn Quý Nhà Hảo Tâm! EduShare sẽ liên hệ xác nhận trong 30 phút.'); }}>
                    {/* Mã chiến dịch tự động áp dụng */}
                    <div>
                      <label className="block text-[11.5px] font-semibold text-secondary uppercase tracking-wider mb-1">Mã chiến dịch</label>
                      <input className="w-full px-3 py-1.5 bg-surface-container-low rounded-xl font-code-num text-[12.5px] text-primary font-bold border border-outline-variant/30 outline-none cursor-not-allowed" readOnly type="text" defaultValue="#CD-2024-ML08 (Mường Lát 2024)" />
                    </div>
                    {/* Tên cá nhân / tổ chức */}
                    <div>
                      <label className="block text-[12px] font-medium text-on-surface mb-1">Tổ chức / Cá nhân trao tặng <span className="text-error">*</span></label>
                      <input className="w-full px-3 py-2 bg-surface-container-lowest rounded-xl text-[13px] text-on-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="VD: Tập đoàn Vingroup / Nguyễn Văn A" required type="text" />
                    </div>
                    {/* Số điện thoại & Người phụ trách */}
                    <div>
                      <label className="block text-[12px] font-medium text-on-surface mb-1">Số điện thoại liên hệ <span className="text-error">*</span></label>
                      <input className="w-full px-3 py-2 bg-surface-container-lowest rounded-xl text-[13px] text-on-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="090x xxx xxx (Anh Nam)" required type="text" />
                    </div>
                    {/* Chủng loại thiết bị */}
                    <div>
                      <label className="block text-[12px] font-medium text-on-surface mb-1">Loại thiết bị trao tặng <span className="text-error">*</span></label>
                      <select className="w-full px-3 py-2 bg-surface-container-lowest rounded-xl text-[13px] text-on-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                        <option>Laptop cũ còn sử dụng tốt</option>
                        <option>Máy tính để bàn (PC Desktop)</option>
                        <option>Màn hình máy tính (LCD/LED)</option>
                        <option>Máy tính bảng học tập</option>
                        <option>Phụ kiện (Chuột, phím, UPS, Cáp)</option>
                      </select>
                    </div>
                    {/* Số lượng */}
                    <div>
                      <label className="block text-[12px] font-medium text-on-surface mb-1">Số lượng dự kiến</label>
                      <div className="flex items-center gap-2">
                        <input className="w-24 px-3 py-2 bg-surface-container-lowest rounded-xl font-code-num text-[13px] font-semibold text-on-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" min="1" type="number" defaultValue="2" />
                        <span className="text-[12px] text-secondary">thiết bị / bộ</span>
                      </div>
                    </div>
                    {/* Địa chỉ lấy hàng */}
                    <div>
                      <label className="block text-[12px] font-medium text-on-surface mb-1">Địa chỉ lấy thiết bị tận nơi <span className="text-error">*</span></label>
                      <textarea className="w-full px-3 py-2 bg-surface-container-lowest rounded-xl text-[12.5px] text-on-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành..." required rows="2"></textarea>
                    </div>
                    {/* Nút CTA gửi */}
                    <button className="w-full mt-1 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-headline font-bold text-[13.5px] shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 focus:ring-2 focus:ring-primary focus:outline-none" type="submit">
                      <span className="material-symbols-outlined text-[19px]">send</span>
                      <span>Gửi Yêu Cầu Trao Tặng Ngay</span>
                    </button>
                    {/* Ghi chú bảo chứng thuế */}
                    <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-start gap-2">
                      <span className="material-symbols-outlined text-tertiary text-[17px] shrink-0 mt-0.5">verified_user</span>
                      <p className="text-[11.5px] text-on-surface-variant leading-tight">
                        EduShare hỗ trợ xe vận chuyển miễn phí 100% &amp; xuất biên lai tài trợ khấu trừ thuế TNDN hợp pháp.
                      </p>
                    </div>
                  </form>
                </div>

                {/* 2. CAM KẾT MINH BẠCH 4 BƯỚC CỦA EDUSHARE */}
                <div className="bg-surface-container-lowest border border-outline-variant/40 p-5 rounded-2xl shadow-sm flex flex-col gap-3.5">
                  <div className="border-b border-outline-variant/30 pb-2">
                    <h3 className="font-headline font-bold text-[15px] text-on-surface">Quy Trình Minh Bạch 4 Bước EduShare</h3>
                    <p className="text-[11.5px] text-secondary">Chuẩn mực giám sát thiết bị từ thiện quốc gia</p>
                  </div>
                  <div className="flex flex-col gap-3 relative">
                    {/* Step 1 */}
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 font-code-num font-bold text-[11px] shadow-sm">
                        1
                      </div>
                      <div>
                        <div className="font-headline font-semibold text-[12.5px] text-on-surface leading-tight">Đăng ký &amp; Tiếp nhận tận nơi</div>
                        <p className="text-[11.5px] text-on-surface-variant mt-0.5">
                          Đội logistics đến nhận máy, gắn mã QR niêm phong và bàn giao biên nhận điện tử tạm thời.
                        </p>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 font-code-num font-bold text-[11px] shadow-sm ring-2 ring-primary/20">
                        2
                      </div>
                      <div>
                        <div className="font-headline font-semibold text-[12.5px] text-primary leading-tight">Kiểm định 7 bước &amp; Tân trang</div>
                        <p className="text-[11.5px] text-on-surface-variant mt-0.5">
                          Kỹ thuật viên test phần cứng, vệ sinh tra keo tản nhiệt, nâng cấp SSD và nạp hệ điều hành chuẩn GD.
                        </p>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center shrink-0 font-code-num font-bold text-[11px]">
                        3
                      </div>
                      <div>
                        <div className="font-headline font-semibold text-[12.5px] text-on-surface leading-tight">Vận chuyển vượt đèo &amp; Lắp đặt</div>
                        <p className="text-[11.5px] text-on-surface-variant mt-0.5">
                          Vận tải lên Mường Lát, phối hợp cùng ban giám hiệu thi công hệ thống mạng LAN và bàn máy.
                        </p>
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center shrink-0 font-code-num font-bold text-[11px]">
                        4
                      </div>
                      <div>
                        <div className="font-headline font-semibold text-[12.5px] text-on-surface leading-tight">Nghiệm thu ký số &amp; Cấp chứng nhận</div>
                        <p className="text-[11.5px] text-on-surface-variant mt-0.5">
                          Nhà trường ký biên bản bàn giao điện tử, cập nhật ảnh trao thực tế và phát hành chứng nhận tài trợ.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. KHỐI THÔNG TIN HỖ TRỢ CHIẾN DỊCH */}
                <div className="bg-surface-container-low border border-outline-variant/40 p-4 rounded-2xl flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-on-surface font-headline font-bold text-[13.5px]">
                    <span className="material-symbols-outlined text-primary text-[19px]">support_agent</span>
                    <span>Thông Tin Hỗ Trợ Chiến Dịch</span>
                  </div>
                  <div className="flex items-center justify-between text-[12px] pt-1.5 border-t border-outline-variant/30">
                    <span className="text-secondary">Hotline điều phối:</span>
                    <span className="font-bold text-primary font-code-num">1900 6868 (Phím 1)</span>
                  </div>
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-secondary">Email tiếp nhận:</span>
                    <span className="font-medium text-on-surface font-code-num">quyengop@edushare.vn</span>
                  </div>
                  <div className="flex items-center justify-between text-[12px] pt-1 border-t border-outline-variant/30">
                    <span className="text-secondary">Cam kết kỹ thuật:</span>
                    <span className="font-semibold text-tertiary">Bảo trợ kỹ thuật 36 tháng</span>
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
