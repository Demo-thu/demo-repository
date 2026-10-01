import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DonorDashboardPage() {
  const [isNewDonationModalOpen, setIsNewDonationModalOpen] = useState(false);

  return (
    <div className="bg-background font-body-md text-on-surface antialiased flex">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between">
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="h-16 px-space-lg flex items-center justify-between bg-surface-container-lowest">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[20px]">school</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface leading-tight">EduShare VN</span>
                <span className="font-label-sm text-label-sm text-primary uppercase">Cổng Nhà Hảo Tâm</span>
              </div>
            </div>
          </div>
          <div className="px-space-md py-space-sm">
            <div className="px-space-sm py-space-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Nhà Hảo Tâm</span>
            </div>
            <nav className="mt-space-xs space-y-1 flex flex-col">
              <Link to="/donor/donation-details" className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-md text-body-md">
                <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
                <span>Đăng ký trao tặng</span>
              </Link>
              <Link to="/donor/dashboard" className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg bg-primary-container text-on-primary-container font-semibold transition-all font-body-md text-body-md shadow-sm">
                <span className="material-symbols-outlined text-[20px]">assignment</span>
                <span>Quản lý phiếu của tôi</span>
              </Link>
              <Link to="/donor/certificates" className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-md text-body-md">
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <span>Biên nhận & Chứng nhận</span>
              </Link>
              <Link to="/donor/tracking" className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-md text-body-md">
                <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                <span>Hành trình & Mã QR</span>
              </Link>
              <Link to="/donor/campaigns" className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-md text-body-md">
                <span className="material-symbols-outlined text-[20px]">campaign</span>
                <span>Đợt vận động đang chạy</span>
              </Link>
            </nav>
          </div>
        </div>
        <div className="p-space-md bg-surface-container-low">
          <div className="flex items-center justify-between px-space-sm py-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-tertiary font-semibold">Hệ thống Trực tuyến</span>
            </div>
            <span className="font-code-num text-code-num text-on-surface-variant">v2.4.0</span>
          </div>
          <div className="mt-space-xs px-space-sm">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Quốc gia Giáo dục © 2024</span>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT WRAPPER */}
      <div className="pl-72 w-full flex-1">
        {/* HEADER */}
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
          <div className="flex items-center gap-space-md w-96">
            <div className="relative w-full flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]">search</span>
              <input className="w-full pl-9 pr-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest" placeholder="Tra cứu mã phiếu, số serial hoặc mã QR..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container">
              <span className="material-symbols-outlined text-primary text-[16px]">corporate_fare</span>
              <span className="font-label-sm text-label-sm text-on-secondary-container">Tổ chức / Cá nhân Hảo tâm</span>
            </div>
            <button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error"></span>
            </button>
            <div className="flex items-center gap-space-sm pl-space-xs">
              <div className="flex flex-col text-right hidden md:block">
                <span className="font-label-md text-label-md text-on-surface">Tập đoàn Vingroup</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">ID: NHT-78294</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN BODY */}
        <main className="relative pt-16 bg-background w-full min-h-screen">
          <div className="flex flex-col w-full">
            {/* Content Container */}
            <div className="p-space-lg max-w-[1600px] mx-auto w-full space-y-space-lg">
              {/* Breadcrumb & Header Action Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                <div className="flex flex-col gap-1">
                  <nav className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                    <Link to="/" className="hover:text-primary transition-colors cursor-pointer">EduShare VN</Link>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="hover:text-primary transition-colors cursor-pointer">Nhà hảo tâm</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="font-medium text-on-surface">Quản lý phiếu & Trao tặng thiết bị</span>
                  </nav>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
                    Cổng Nhà Hảo Tâm - Quản Lý Trao Tặng & Minh Bạch Dòng Thiết Bị
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Theo dõi vòng đời trang thiết bị học tập từ lúc tiếp nhận đến khi bàn giao tới tay học sinh vùng cao.
                  </p>
                </div>
                {/* Quick Action Buttons */}
                <div className="flex items-center gap-space-sm flex-wrap">
                  <button 
                    className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all shadow-sm"
                    onClick={() => setIsNewDonationModalOpen(true)}
                  >
                    <span className="material-symbols-outlined text-[18px]">add_circle</span>
                    <span>+ Đăng ký trao tặng mới</span>
                  </button>
                  <button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-low text-primary hover:bg-surface-container hover:text-on-surface transition-all font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[18px]">campaign</span>
                    <span>Xem đợt vận động đang cần</span>
                  </button>
                </div>
              </div>

              {/* Banner Business Rule / RBAC Policy */}
              <div className="rounded-xl bg-surface-container-low p-space-md flex flex-col sm:flex-row items-start sm:items-center gap-space-md relative overflow-hidden shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">verified_user</span>
                </div>
                <div className="flex-1 text-on-surface">
                  <div className="flex items-center gap-2">
                    <span className="font-label-md text-label-md font-semibold text-primary">Quy tắc nghiệp vụ trao tặng EduShare (RBAC Policy):</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-surface-container-highest text-on-surface-variant">Quy chế 72 Giờ</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
                    Phiếu trao tặng sau khi gửi sẽ không thể chỉnh sửa nội dung nhằm bảo đảm tính minh bạch chuỗi cung ứng. Quý nhà hảo tâm chỉ có thể <strong className="text-error font-medium">HỦY PHIẾU</strong> khi phiếu còn ở trạng thái <em>"Chờ tiếp nhận tại kho"</em> và được gửi trong vòng <strong>72 giờ (3 ngày)</strong>.
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-space-xs">
                  <span className="font-code-num text-code-num text-tertiary font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">lock</span>
                    Chuỗi khối SHA-256
                  </span>
                </div>
              </div>

              {/* Section 1: 4 Stat Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Stat 1 */}
                <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">Tổng thiết bị trao tặng</span>
                    <div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">laptop_mac</span>
                    </div>
                  </div>
                  <div className="mt-space-sm flex items-baseline gap-2">
                    <span className="font-headline-xl text-headline-xl text-on-surface">65</span>
                    <span className="font-label-sm text-label-sm text-primary font-semibold">thiết bị số</span>
                  </div>
                  <div className="mt-space-xs pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                    <span>Laptop (45) • PC (5) • Màn hình (15)</span>
                    <span className="text-tertiary font-medium">100% kiểm định</span>
                  </div>
                </div>
                {/* Stat 2 */}
                <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">Đợt vận động tham gia</span>
                    <div className="w-9 h-9 rounded-lg bg-secondary-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">flag</span>
                    </div>
                  </div>
                  <div className="mt-space-sm flex items-baseline gap-2">
                    <span className="font-headline-xl text-headline-xl text-on-surface">04</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">chiến dịch vùng cao</span>
                  </div>
                  <div className="mt-space-xs pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                    <span>Hà Giang, Điện Biên, Quảng Nam</span>
                    <span className="text-primary font-medium">1 đang chạy</span>
                  </div>
                </div>
                {/* Stat 3 */}
                <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">Điểm trường & Học sinh</span>
                    <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-[20px]">groups</span>
                    </div>
                  </div>
                  <div className="mt-space-sm flex items-baseline gap-2">
                    <span className="font-headline-xl text-headline-xl text-on-surface">180</span>
                    <span className="font-label-sm text-label-sm text-tertiary font-semibold">em học sinh</span>
                  </div>
                  <div className="mt-space-xs pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                    <span>Qua 3 điểm trường thụ hưởng</span>
                    <span className="text-tertiary font-medium">PoD đã xác thực</span>
                  </div>
                </div>
                {/* Stat 4 */}
                <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">Biên nhận điện tử cấp</span>
                    <div className="w-9 h-9 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </div>
                  </div>
                  <div className="mt-space-sm flex items-baseline gap-2">
                    <span className="font-headline-xl text-headline-xl text-on-surface">03</span>
                    <span className="font-label-sm text-label-sm text-tertiary font-semibold">e-Certificates</span>
                  </div>
                  <div className="mt-space-xs pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                    <span>Chuỗi SHA-256 xác thực</span>
                    <span className="text-primary font-medium cursor-pointer hover:underline">Tải trọn bộ</span>
                  </div>
                </div>
              </div>

              {/* Visual Banner / Campaign Showcase Integration */}
              <div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col md:flex-row items-stretch">
                <div className="md:w-7/12 p-space-lg flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-xs">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm">
                      <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                      <span>Chiến dịch trọng điểm tháng này</span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      Ánh Sáng Tri Thức Miền Tây Xứ Quảng - Đợt 4
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Mục tiêu huy động 50 bộ máy vi tính cấu hình học tập cho học sinh 2 xã Tr'Hy và Axan, Huyện Tây Giang. Hiện đã tiếp nhận được 38/50 thiết bị (đạt 76% mục tiêu tiếp nhận).
                    </p>
                  </div>
                  <div className="space-y-space-xs">
                    <div className="flex justify-between items-center font-label-md text-label-md text-on-surface">
                      <span>Tiến độ huy động chiến dịch</span>
                      <span className="text-primary font-semibold">38 / 50 thiết bị (76%)</span>
                    </div>
                    <div className="w-full bg-surface-container rounded-full h-2.5 overflow-hidden">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '76%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-md pt-space-xs">
                    <button 
                      className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all"
                      onClick={() => setIsNewDonationModalOpen(true)}
                    >
                      <span className="material-symbols-outlined text-[18px]">volunteer_activism</span>
                      <span>Trao tặng cho đợt này</span>
                    </button>
                    <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                      Kho tiếp nhận Đà Nẵng sẵn sàng
                    </span>
                  </div>
                </div>
                {/* Provided campaign banner image */}
                <div className="md:w-5/12 min-h-[220px] relative bg-surface-container overflow-hidden">
                  <img alt="Hình ảnh bàn giao thực tế tại điểm trường" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMYjjzlVGNtN18QzgiiLjynUo31HXgrLedXQq0fU9sOsiZkERv-23kRWO6nMasqmrbWpucuaUtowmkW0tn3GqHx7gUViOyq_ca46iIqR3pUpv2BzDRtqSq2SCo9J9sT76kIkyJ7sCHVQ3wwEjL82tOgGlAPsZqIsqwKtZqLMy0ofO8i4kv3_oQBJbZ9aofqOxq_LnUttHbNQ8XxMsZkvNboUXSk3Mh47O6IBPZnBgdOGeCQzLDLW8WVg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-space-md">
                    <div className="flex items-center gap-1.5 text-white font-label-sm text-label-sm bg-black/60 px-3 py-1.5 rounded backdrop-blur-sm shadow-sm">
                      <span className="material-symbols-outlined text-[15px] text-tertiary-fixed">photo_camera</span>
                      <span>Hình ảnh thực tế bàn giao đợt 3 - Điểm trường THCS Pà Vị</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Tabs Navigation */}
              <div className="border-b-0">
                <div className="flex items-center gap-space-xs overflow-x-auto pb-1">
                  <button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md shadow-sm whitespace-nowrap">
                    <span className="material-symbols-outlined text-[18px]">assignment</span>
                    <span>Phiếu trao tặng của tôi</span>
                    <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary text-[11px] font-semibold">4</span>
                  </button>
                  <button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-all font-label-md text-label-md whitespace-nowrap">
                    <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                    <span>Thiết bị & Mã QR định danh</span>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface text-[11px] font-semibold">65</span>
                  </button>
                  <button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-all font-label-md text-label-md whitespace-nowrap">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>Biên nhận điện tử & Chứng nhận</span>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface text-[11px] font-semibold">3</span>
                  </button>
                  <button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-all font-label-md text-label-md whitespace-nowrap">
                    <span className="material-symbols-outlined text-[18px]">travel_explore</span>
                    <span>Đợt vận động đang mở tiếp nhận</span>
                  </button>
                </div>
              </div>

              {/* Section 3: Main Table Area & Quick Device Live Tracker */}
              <div className="grid grid-cols-1 xl:grid-cols-4 gap-space-lg items-start">
                {/* Left Column: Primary Data Table */}
                <div className="xl:col-span-3 space-y-space-md">
                  {/* Table Filter & Toolbar */}
                  <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-sm w-full sm:w-auto">
                      <div className="relative w-full sm:w-72">
                        <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[18px]">search</span>
                        <input className="w-full pl-9 pr-3 py-2 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest" placeholder="Tìm theo mã phiếu #DON..." type="text" />
                      </div>
                      <select className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none">
                        <option value="">Tất cả trạng thái</option>
                        <option value="pending">Chờ tiếp nhận tại kho</option>
                        <option value="inspecting">Đang kiểm định</option>
                        <option value="completed">Đã bàn giao điểm trường</option>
                        <option value="cancelled">Đã hủy</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-space-xs w-full sm:w-auto justify-end">
                      <button className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">filter_list</span>
                        <span>Lọc nâng cao</span>
                      </button>
                      <button className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        <span>Xuất Excel</span>
                      </button>
                    </div>
                  </div>
                  {/* Data Table Container */}
                  <div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                            <th className="py-3 px-space-md">Mã phiếu</th>
                            <th className="py-3 px-space-md">Đợt vận động</th>
                            <th className="py-3 px-space-md">Thiết bị trao tặng</th>
                            <th className="py-3 px-space-md">Thời gian & Hiệu lực hủy</th>
                            <th className="py-3 px-space-md">Trạng thái</th>
                            <th className="py-3 px-space-md">Biên nhận điện tử</th>
                            <th className="py-3 px-space-md text-right">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y-0 text-on-surface font-body-sm text-body-sm">
                          {/* ROW 1: Chờ tiếp nhận */}
                          <tr className="hover:bg-surface-container-low transition-colors group">
                            <td className="py-space-md px-space-md">
                              <span className="font-code-num text-code-num font-semibold text-primary">#DON-2024-8842</span>
                              <span className="block text-[11px] text-on-surface-variant">Kho EduShare ĐN</span>
                            </td>
                            <td className="py-space-md px-space-md max-w-[200px]">
                              <span className="font-medium line-clamp-2">Ánh Sáng Tri Thức Miền Tây Xứ Quảng - Đợt 4</span>
                              <span className="text-[11px] text-on-surface-variant">Huyện Tây Giang, Quảng Nam</span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="font-medium text-on-surface">20 Laptop Dell Latitude 5520</span>
                              <span className="block text-[11px] text-on-surface-variant">+ 10 Chuột máy tính quang</span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span>14:20 • 23/10/2024</span>
                              <div className="flex items-center gap-1 text-[11px] text-error font-medium mt-0.5">
                                <span className="material-symbols-outlined text-[13px]">timer</span>
                                <span>Còn 46h để hủy phiếu</span>
                              </div>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-[11px] font-semibold">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                                Chờ tiếp nhận tại kho
                              </span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="text-on-surface-variant italic text-[11px] flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">hourglass_empty</span>
                                Chờ kiểm định tại kho
                              </span>
                            </td>
                            <td className="py-space-md px-space-md text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button className="px-2 py-1 rounded bg-error-container text-on-error-container hover:bg-error hover:text-on-error transition-colors font-label-sm text-label-sm" onClick={() => alert('Đã mở yêu cầu hủy phiếu #DON-2024-8842 theo quy chế 72h')} title="Hủy phiếu theo quy tắc 72h">
                                  Hủy phiếu (46h)
                                </button>
                                <Link to="/donor/donation-details" className="p-1 rounded text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Xem chi tiết phiếu">
                                  <span className="material-symbols-outlined text-[18px]">visibility</span>
                                </Link>
                              </div>
                            </td>
                          </tr>
                          {/* ROW 2: Đã bàn giao */}
                          <tr className="hover:bg-surface-container-low transition-colors group">
                            <td className="py-space-md px-space-md">
                              <span className="font-code-num text-code-num font-semibold text-primary">#DON-2024-8815</span>
                              <span className="block text-[11px] text-on-surface-variant">Kho EduShare HN</span>
                            </td>
                            <td className="py-space-md px-space-md max-w-[200px]">
                              <span className="font-medium line-clamp-2">Máy Tính Cho Em Vùng Cao Mèo Vạc - Hà Giang</span>
                              <span className="text-[11px] text-on-surface-variant">Trường THCS Pà Vị, Mèo Vạc</span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="font-medium text-on-surface">25 Laptop Lenovo ThinkPad T480</span>
                              <span className="block text-[11px] text-on-surface-variant">i5, 8GB RAM, SSD 256GB</span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span>09:15 • 12/10/2024</span>
                              <span className="block text-[11px] text-on-surface-variant">Đã qua thời hạn 72h (Đã khóa)</span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold">
                                <span className="material-symbols-outlined text-[13px] text-emerald-600">check_circle</span>
                                Đã bàn giao điểm trường
                              </span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <div className="flex flex-col gap-1 items-start">
                                <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-code-num text-[11px] font-semibold">
                                  #CERT-2024-VNPT-08
                                </span>
                                <button className="text-primary hover:underline text-[11px] font-medium flex items-center gap-0.5">
                                  <span className="material-symbols-outlined text-[13px]">picture_as_pdf</span>
                                  Tải biên nhận PDF
                                </button>
                              </div>
                            </td>
                            <td className="py-space-md px-space-md text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button className="px-2.5 py-1 rounded bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary transition-colors font-label-sm text-label-sm flex items-center gap-1">
                                  <span className="material-symbols-outlined text-[14px]">qr_code</span>
                                  <span>Mã QR thiết bị</span>
                                </button>
                                <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Xem Biên bản nghiệm thu PoD">
                                  <span className="material-symbols-outlined text-[18px]">history_edu</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                          {/* ROW 3: Đang kiểm định tại kho */}
                          <tr className="hover:bg-surface-container-low transition-colors group">
                            <td className="py-space-md px-space-md">
                              <span className="font-code-num text-code-num font-semibold text-primary">#DON-2024-8790</span>
                              <span className="block text-[11px] text-on-surface-variant">Kho EduShare HN</span>
                            </td>
                            <td className="py-space-md px-space-md max-w-[200px]">
                              <span className="font-medium line-clamp-2">Phòng Tin Học Em Nuôi Mường Nhé - Điện Biên</span>
                              <span className="text-[11px] text-on-surface-variant">Xã Nậm Kè, Điện Biên</span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="font-medium text-on-surface">15 Màn hình LCD Samsung 24" FHD</span>
                              <span className="block text-[11px] text-on-surface-variant">Tặng kèm cáp HDMI & nguồn</span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span>16:30 • 18/10/2024</span>
                              <span className="block text-[11px] text-on-surface-variant">Đã qua 72h (Đã vào luồng kho)</span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 text-[11px] font-semibold">
                                <span className="material-symbols-outlined text-[13px] text-blue-600 animate-spin">sync</span>
                                Đang kiểm định tại kho
                              </span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="text-on-surface-variant text-[11px] flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px] text-primary">engineering</span>
                                Đang xử lý kỹ thuật
                              </span>
                            </td>
                            <td className="py-space-md px-space-md text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-sm text-label-sm">
                                  Xem chi tiết & QR
                                </button>
                              </div>
                            </td>
                          </tr>
                          {/* ROW 4: Đã hủy */}
                          <tr className="hover:bg-surface-container-low transition-colors group opacity-75">
                            <td className="py-space-md px-space-md">
                              <span className="font-code-num text-code-num font-semibold text-secondary">#DON-2024-8712</span>
                              <span className="block text-[11px] text-on-surface-variant">Hủy tại hệ thống</span>
                            </td>
                            <td className="py-space-md px-space-md max-w-[200px]">
                              <span className="font-medium line-clamp-2">Tủ Sách & Máy Tính Bản Làng Lạng Sơn</span>
                              <span className="text-[11px] text-on-surface-variant">Huyện Văn Quan, Lạng Sơn</span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="text-on-surface line-through">05 Bộ máy tính bàn PC HP ProDesk</span>
                              <span className="block text-[11px] text-on-surface-variant">Thay đổi kế hoạch nâng cấp</span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span>08:00 • 05/09/2024</span>
                              <span className="block text-[11px] text-error">Hủy lúc: 11:30 06/09/2024</span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">
                                <span className="material-symbols-outlined text-[13px] text-slate-500">cancel</span>
                                Đã hủy trong 72h
                              </span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="text-on-surface-variant text-[11px] italic">Không phát sinh</span>
                            </td>
                            <td className="py-space-md px-space-md text-right">
                              <span className="text-on-surface-variant font-label-sm text-label-sm">Đã lưu trữ hồ sơ</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Table Footer Pagination */}
                    <div className="px-space-md py-space-sm bg-surface-container-low flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                      <span>Hiển thị 4 trên 4 phiếu trao tặng</span>
                      <div className="flex items-center gap-1">
                        <button className="p-1 rounded text-outline-variant cursor-not-allowed" disabled>
                          <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                        </button>
                        <button className="w-7 h-7 rounded bg-primary text-on-primary font-semibold text-center text-xs">1</button>
                        <button className="p-1 rounded text-outline-variant cursor-not-allowed" disabled>
                          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Live QR Code Tracker & e-Proof Card */}
                <div className="xl:col-span-1 space-y-space-md">
                  {/* Live Tracker Card */}
                  <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-md">
                    <div className="flex items-center justify-between">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary text-[20px]">qr_code_scanner</span>
                        Tra Cứu Nhanh Mã QR
                      </h3>
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-semibold">Live GPS</span>
                    </div>
                    {/* Quick QR search input */}
                    <div className="relative">
                      <input className="w-full pl-3 pr-9 py-2 rounded-lg bg-surface-container-low text-on-surface font-code-num text-code-num font-semibold focus:outline-none focus:bg-surface-container-lowest" type="text" defaultValue="QR-8821-MEOVAC" />
                      <button className="absolute right-2 top-2 text-primary hover:text-primary-container">
                        <span className="material-symbols-outlined text-[20px]">search</span>
                      </button>
                    </div>
                    {/* Device Summary Identified */}
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                      <div className="w-10 h-10 rounded bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[22px]">laptop</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="font-label-md text-label-md text-on-surface font-semibold block truncate">Lenovo ThinkPad T480</span>
                        <span className="font-code-num text-[11px] text-on-surface-variant block">SN: PF19XYZ209 • Mã QR-8821</span>
                        <span className="text-[11px] text-tertiary font-medium">Bàn giao: Trường THCS Pà Vị</span>
                      </div>
                    </div>
                    {/* 4-Step Linear Lifecycle Stepper */}
                    <div className="space-y-space-sm pt-space-xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block">Tiến trình vòng đời thiết bị</span>
                      <div className="relative pl-6 space-y-4">
                        {/* Vertical Connecting Line */}
                        <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-tertiary"></div>
                        {/* Step 1 */}
                        <div className="relative flex items-start gap-space-sm">
                          <div className="absolute -left-6 mt-0.5 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-4 ring-surface-container-lowest">
                            <span className="material-symbols-outlined text-[13px]">check</span>
                          </div>
                          <div>
                            <span className="font-label-md text-label-md font-semibold text-on-surface block">1. Tiếp nhận tại kho</span>
                            <span className="text-[11px] text-on-surface-variant">Kho EduShare Hà Nội (12/10/2024)</span>
                          </div>
                        </div>
                        {/* Step 2 */}
                        <div className="relative flex items-start gap-space-sm">
                          <div className="absolute -left-6 mt-0.5 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-4 ring-surface-container-lowest">
                            <span className="material-symbols-outlined text-[13px]">check</span>
                          </div>
                          <div>
                            <span className="font-label-md text-label-md font-semibold text-on-surface block">2. Kiểm định & Cấp tem QR</span>
                            <span className="text-[11px] text-on-surface-variant">Đạt chuẩn A+ (Pin 92%, SSD Good)</span>
                          </div>
                        </div>
                        {/* Step 3 */}
                        <div className="relative flex items-start gap-space-sm">
                          <div className="absolute -left-6 mt-0.5 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-4 ring-surface-container-lowest">
                            <span className="material-symbols-outlined text-[13px]">check</span>
                          </div>
                          <div>
                            <span className="font-label-md text-label-md font-semibold text-on-surface block">3. Vận chuyển qua Đội TNV</span>
                            <span className="text-[11px] text-on-surface-variant">Đoàn xe thiện nguyện Tây Bắc</span>
                          </div>
                        </div>
                        {/* Step 4 */}
                        <div className="relative flex items-start gap-space-sm">
                          <div className="absolute -left-6 mt-0.5 w-5 h-5 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center ring-4 ring-surface-container-lowest">
                            <span className="material-symbols-outlined text-[13px]">verified</span>
                          </div>
                          <div>
                            <span className="font-label-md text-label-md font-semibold text-tertiary block">4. Điểm trường ký nhận PoD</span>
                            <span className="text-[11px] text-on-surface-variant">Thầy Hiệu trưởng ký nhận điện tử</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Digital Certificate Ledger Preview */}
                    <div className="p-space-sm rounded-lg bg-surface-container-high space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-semibold text-on-surface">Minh chứng sổ cái EduShare</span>
                        <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                      </div>
                      <div className="p-2 rounded bg-surface-container-lowest font-code-num text-[10px] text-on-surface-variant break-all leading-tight">
                        SHA256: 8a7f4e91bc023d8...f89c02aa11e
                      </div>
                      <button className="w-full py-1.5 rounded bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-colors flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                        <span>Kiểm tra giao dịch công khai</span>
                      </button>
                    </div>
                  </div>
                  {/* Quick Help & Hotline Support Card */}
                  <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-full bg-secondary-container text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">support_agent</span>
                      </div>
                      <div>
                        <h4 className="font-label-md text-label-md font-semibold text-on-surface">Hỗ trợ Điều phối viên</h4>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Tư vấn quy chuẩn tiếp nhận</span>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Bạn cần hỗ trợ tình nguyện viên tới tận nhà/công ty nhận thiết bị cồng kềnh?
                    </p>
                    <div className="pt-1 flex items-center justify-between font-label-md text-label-md">
                      <span className="text-primary font-semibold">Hotline: 1900 6822</span>
                      <span className="text-tertiary">Nhánh 2 (24/7)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MODAL: Tạo phiếu đăng ký trao tặng mới */}
            {isNewDonationModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto" id="modal-new-donation">
                <div className="bg-surface-container-lowest rounded-xl shadow-xl w-full max-w-2xl overflow-hidden my-8">
                  {/* Modal Header */}
                  <div className="px-space-lg py-space-md bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[20px]">add_task</span>
                      </div>
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">Đăng Ký Phiếu Trao Tặng Thiết Bị</h3>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Hệ thống phân luồng tiếp nhận minh bạch EduShare VN</span>
                      </div>
                    </div>
                    <button 
                      className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors"
                      onClick={() => setIsNewDonationModalOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                  </div>
                  {/* Modal Body (Form) */}
                  <div className="p-space-lg space-y-space-md max-h-[75vh] overflow-y-auto">
                    {/* Important Notice */}
                    <div className="p-space-sm rounded-lg bg-surface-container-high flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">info</span>
                      <span className="font-body-sm text-body-sm text-on-surface leading-snug">
                        Sau khi ấn nút <strong>"Gửi phiếu trao tặng"</strong>, hệ thống sẽ tự động khởi tạo mã định danh duy nhất. Phiếu chỉ có thể HỦY trong 72 giờ đầu tiên trước khi tổ kỹ thuật tiếp nhận tại kho.
                      </span>
                    </div>
                    {/* Campaign Selector */}
                    <div className="space-y-1">
                      <label className="font-label-md text-label-md font-medium text-on-surface">Chọn Đợt Vận Động Tham Gia *</label>
                      <select className="w-full px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none">
                        <option value="1">Chiến dịch Ánh Sáng Tri Thức Miền Tây Xứ Quảng - Đợt 4 (Quảng Nam)</option>
                        <option value="2">Chiến dịch Máy Tính Cho Em Vùng Cao Mèo Vạc - Đợt 2 (Hà Giang)</option>
                        <option value="3">Chiến dịch Phòng Tin Học Em Nuôi Mường Nhé (Điện Biên)</option>
                        <option value="4">Quyên góp tự do vào Quỹ Dự Phòng Thiết Bị Quốc Gia</option>
                      </select>
                    </div>
                    {/* Device Line Items Section */}
                    <div className="space-y-space-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">Danh Mục Dòng Hàng & Thiết Bị Trao Tặng</span>
                        <button className="text-primary hover:underline font-label-sm text-label-sm flex items-center gap-1" type="button">
                          <span className="material-symbols-outlined text-[14px]">add</span>
                          <span>+ Thêm dòng thiết bị khác</span>
                        </button>
                      </div>
                      {/* Line item card */}
                      <div className="p-space-md rounded-lg bg-surface-container-low space-y-space-sm">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                          <div className="space-y-1">
                            <label className="font-label-sm text-label-sm text-on-surface-variant">Loại thiết bị</label>
                            <select className="w-full px-2.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none">
                              <option>Laptop (Máy tính xách tay)</option>
                              <option>PC Đồng bộ (Thùng máy)</option>
                              <option>Màn hình máy tính (LCD/LED)</option>
                              <option>Máy tính bảng (Tablet)</option>
                              <option>Phụ kiện (Bàn phím, Chuột, Tai nghe)</option>
                            </select>
                          </div>
                          <div className="space-y-1">
                            <label className="font-label-sm text-label-sm text-on-surface-variant">Số lượng trao tặng</label>
                            <input className="w-full px-2.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none" min="1" type="number" defaultValue="10" />
                          </div>
                          <div className="space-y-1">
                            <label className="font-label-sm text-label-sm text-on-surface-variant">Tình trạng thực tế</label>
                            <select className="w-full px-2.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none">
                              <option>Đã qua sử dụng (Còn hoạt động tốt)</option>
                              <option>Mới 100% nguyên hộp</option>
                              <option>Cần bảo dưỡng nhẹ (Cài lại OS)</option>
                            </select>
                          </div>
                        </div>
                        {/* Specs & Accessories */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
                          <div className="space-y-1">
                            <label className="font-label-sm text-label-sm text-on-surface-variant">Cấu hình mô tả tóm tắt</label>
                            <input className="w-full px-2.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none" placeholder="vd: Dell Latitude, Core i5, RAM 8GB, SSD 256GB" type="text" />
                          </div>
                          <div className="space-y-1">
                            <label className="font-label-sm text-label-sm text-on-surface-variant">Phụ kiện kèm theo</label>
                            <input className="w-full px-2.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none" placeholder="vd: Đầy đủ adapter sạc zin, chuột dây, túi chống sốc" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Handover Method */}
                    <div className="space-y-1.5">
                      <label className="font-label-md text-label-md font-medium text-on-surface">Phương thức gửi thiết bị *</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                        <label className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container flex items-start gap-space-xs cursor-pointer">
                          <input defaultChecked className="mt-1 text-primary focus:ring-0" name="handover_type" type="radio" />
                          <div>
                            <span className="font-label-md text-label-md font-semibold text-on-surface block">Mang đến kho EduShare gần nhất</span>
                            <span className="text-[11px] text-on-surface-variant">Tại Hà Nội, Đà Nẵng, hoặc TP. Hồ Chí Minh</span>
                          </div>
                        </label>
                        <label className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container flex items-start gap-space-xs cursor-pointer">
                          <input className="mt-1 text-primary focus:ring-0" name="handover_type" type="radio" />
                          <div>
                            <span className="font-label-md text-label-md font-semibold text-on-surface block">Đội TNV đến nhận tận nơi</span>
                            <span className="text-[11px] text-on-surface-variant">Áp dụng cho quyên góp từ 10 thiết bị trở lên</span>
                          </div>
                        </label>
                      </div>
                    </div>
                    {/* Legal Statement & Checkbox */}
                    <div className="p-space-sm rounded-lg bg-surface-container-high space-y-2">
                      <label className="flex items-start gap-2 cursor-pointer">
                        <input defaultChecked className="mt-1 rounded text-primary focus:ring-0" type="checkbox" />
                        <span className="font-body-sm text-body-sm text-on-surface leading-tight">
                          Tôi cam kết toàn bộ thiết bị trao tặng thuộc <strong>quyền sở hữu hợp pháp</strong> của cá nhân/doanh nghiệp, không tranh chấp, đã xóa sạch dữ liệu cá nhân nội bộ và tự nguyện ủy quyền hoàn toàn cho EduShare VN phân bổ tới các điểm trường khó khăn.
                        </span>
                      </label>
                    </div>
                  </div>
                  {/* Modal Footer */}
                  <div className="px-space-lg py-space-md bg-surface-container-low flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">lock</span>
                      Ký số xác nhận định danh điện tử
                    </span>
                    <div className="flex items-center gap-space-sm">
                      <button 
                        className="px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors"
                        onClick={() => setIsNewDonationModalOpen(false)}
                      >
                        Đóng
                      </button>
                      <button 
                        className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm flex items-center gap-1"
                        onClick={() => {
                          alert('Đã gửi phiếu trao tặng thành công! Mã phiếu: #DON-2024-8899. Bạn có 72h để hủy nếu cần.');
                          setIsNewDonationModalOpen(false);
                        }}
                      >
                        <span className="material-symbols-outlined text-[18px]">send</span>
                        <span>Gửi phiếu trao tặng</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
