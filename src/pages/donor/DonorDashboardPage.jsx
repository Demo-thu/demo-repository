import { useState } from "react";
import { Link } from "react-router-dom";

export default function DonorDashboardPage() {
  const [isNewDonationModalOpen, setIsNewDonationModalOpen] = useState(false);

  return (
    <div className="bg-background font-body-md text-on-surface flex antialiased">
      {/* Sidebar */}
      <aside className="bg-surface-container-lowest fixed top-0 left-0 z-50 flex h-screen w-72 flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-1 flex-col overflow-y-auto">
          <div className="px-space-lg bg-surface-container-lowest flex h-16 items-center justify-between">
            <div className="gap-space-sm flex items-center">
              <div className="bg-primary flex h-9 w-9 items-center justify-center rounded-lg">
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
              <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                Nhà Hảo Tâm
              </span>
            </div>
            <nav className="mt-space-xs flex flex-col space-y-1">
              <Link
                to="/donor/donation-details"
                className="gap-space-sm px-space-sm py-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center rounded-lg transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
                <span>Đăng ký trao tặng</span>
              </Link>
              <Link
                to="/donor/dashboard"
                className="gap-space-sm px-space-sm py-space-sm bg-primary-container text-on-primary-container font-body-md text-body-md flex items-center rounded-lg font-semibold shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">assignment</span>
                <span>Quản lý phiếu của tôi</span>
              </Link>
              <Link
                to="/donor/certificates"
                className="gap-space-sm px-space-sm py-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center rounded-lg transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <span>Biên nhận & Chứng nhận</span>
              </Link>
              <Link
                to="/donor/tracking"
                className="gap-space-sm px-space-sm py-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center rounded-lg transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                <span>Hành trình & Mã QR</span>
              </Link>
              <Link
                to="/donor/campaigns"
                className="gap-space-sm px-space-sm py-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center rounded-lg transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">campaign</span>
                <span>Đợt vận động đang chạy</span>
              </Link>
            </nav>
          </div>
        </div>
        <div className="p-space-md bg-surface-container-low">
          <div className="px-space-sm py-space-xs flex items-center justify-between">
            <div className="gap-space-xs flex items-center">
              <span className="bg-tertiary-container h-2 w-2 animate-pulse rounded-full"></span>
              <span className="font-label-sm text-label-sm text-tertiary font-semibold">Hệ thống Trực tuyến</span>
            </div>
            <span className="font-code-num text-code-num text-on-surface-variant">v2.4.0</span>
          </div>
          <div className="mt-space-xs px-space-sm">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Quốc gia Giáo dục © 2024</span>
          </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="w-full flex-1 pl-72">
        {/* Header */}
        <header className="bg-surface-container-lowest/90 px-space-lg fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
          <div className="gap-space-md flex w-96 items-center">
            <div className="relative flex w-full items-center">
              <span className="material-symbols-outlined text-on-surface-variant absolute left-3 text-[18px]">
                search
              </span>
              <input
                className="pr-space-md bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:bg-surface-container-lowest w-full rounded-lg py-1.5 pl-9 outline-none"
                placeholder="Tra cứu mã phiếu, số serial hoặc mã QR..."
                type="text"
              />
            </div>
          </div>
          <div className="gap-space-md flex items-center">
            <div className="gap-space-xs px-space-sm bg-secondary-container hidden items-center rounded-full py-1 sm:flex">
              <span className="material-symbols-outlined text-primary text-[16px]">corporate_fare</span>
              <span className="font-label-sm text-label-sm text-on-secondary-container">Tổ chức / Cá nhân Hảo tâm</span>
            </div>
            <button className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface relative rounded-lg p-2 transition-colors">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="bg-error absolute top-1.5 right-1.5 h-2 w-2 rounded-full"></span>
            </button>
            <div className="gap-space-sm pl-space-xs flex items-center">
              <div className="flex hidden flex-col text-right md:block">
                <span className="font-label-md text-label-md text-on-surface">Tập đoàn Vingroup</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">ID: NHT-78294</span>
              </div>
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Body */}
        <main className="bg-background relative min-h-screen w-full pt-16">
          <div className="flex w-full flex-col">
            {/* Content Container */}
            <div className="p-space-lg space-y-space-lg mx-auto w-full max-w-[1600px]">
              {/* Breadcrumb & Header Action Row */}
              <div className="gap-space-md flex flex-col justify-between md:flex-row md:items-center">
                <div className="flex flex-col gap-1">
                  <nav className="gap-space-xs text-on-surface-variant font-body-sm text-body-sm flex items-center">
                    <Link to="/" className="hover:text-primary cursor-pointer transition-colors">
                      EduShare VN
                    </Link>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="hover:text-primary cursor-pointer transition-colors">Nhà hảo tâm</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="text-on-surface font-medium">Quản lý phiếu & Trao tặng thiết bị</span>
                  </nav>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface mt-1 tracking-tight">
                    Cổng Nhà Hảo Tâm - Quản Lý Trao Tặng & Minh Bạch Dòng Thiết Bị
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Theo dõi vòng đời trang thiết bị học tập từ lúc tiếp nhận đến khi bàn giao tới tay học sinh vùng
                    cao.
                  </p>
                </div>
                {/* Quick Action Buttons */}
                <div className="gap-space-sm flex flex-wrap items-center">
                  <button
                    className="gap-space-xs px-space-md bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container inline-flex items-center rounded-lg py-2.5 shadow-sm transition-all"
                    onClick={() => setIsNewDonationModalOpen(true)}
                  >
                    <span className="material-symbols-outlined text-[18px]">add_circle</span>
                    <span>+ Đăng ký trao tặng mới</span>
                  </button>
                  <button className="gap-space-xs px-space-md bg-surface-container-low text-primary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md inline-flex items-center rounded-lg py-2.5 transition-all">
                    <span className="material-symbols-outlined text-[18px]">campaign</span>
                    <span>Xem đợt vận động đang cần</span>
                  </button>
                </div>
              </div>

              {/* Banner Business Rule / RBAC Policy */}
              <div className="bg-surface-container-low p-space-md gap-space-md relative flex flex-col items-start overflow-hidden rounded-xl shadow-sm sm:flex-row sm:items-center">
                <div className="bg-tertiary-container text-on-tertiary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-[24px]">verified_user</span>
                </div>
                <div className="text-on-surface flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-label-md text-label-md text-primary font-semibold">
                      Quy tắc nghiệp vụ trao tặng EduShare (RBAC Policy):
                    </span>
                    <span className="bg-surface-container-highest text-on-surface-variant rounded px-2 py-0.5 text-[11px] font-semibold">
                      Quy chế 72 Giờ
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
                    Phiếu trao tặng sau khi gửi sẽ không thể chỉnh sửa nội dung nhằm bảo đảm tính minh bạch chuỗi cung
                    ứng. Quý nhà hảo tâm chỉ có thể <strong className="text-error font-medium">HỦY PHIẾU</strong> khi
                    phiếu còn ở trạng thái <em>"Chờ tiếp nhận tại kho"</em> và được gửi trong vòng{" "}
                    <strong>72 giờ (3 ngày)</strong>.
                  </p>
                </div>
                <div className="gap-space-xs flex shrink-0 items-center">
                  <span className="font-code-num text-code-num text-tertiary flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[16px]">lock</span>
                    Chuỗi khối SHA-256
                  </span>
                </div>
              </div>

              {/* Section 1: 4 Stat Metrics */}
              <div className="gap-space-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {/* Stat 1 */}
                <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between rounded-xl shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                      Tổng thiết bị trao tặng
                    </span>
                    <div className="bg-primary-fixed text-primary flex h-9 w-9 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">laptop_mac</span>
                    </div>
                  </div>
                  <div className="mt-space-sm flex items-baseline gap-2">
                    <span className="font-headline-xl text-headline-xl text-on-surface">65</span>
                    <span className="font-label-sm text-label-sm text-primary font-semibold">thiết bị số</span>
                  </div>
                  <div className="mt-space-xs pt-space-xs text-on-surface-variant font-body-sm text-body-sm flex items-center justify-between">
                    <span>Laptop (45) • PC (5) • Màn hình (15)</span>
                    <span className="text-tertiary font-medium">100% kiểm định</span>
                  </div>
                </div>
                {/* Stat 2 */}
                <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between rounded-xl shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                      Đợt vận động tham gia
                    </span>
                    <div className="bg-secondary-container text-primary flex h-9 w-9 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">flag</span>
                    </div>
                  </div>
                  <div className="mt-space-sm flex items-baseline gap-2">
                    <span className="font-headline-xl text-headline-xl text-on-surface">04</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      chiến dịch vùng cao
                    </span>
                  </div>
                  <div className="mt-space-xs pt-space-xs text-on-surface-variant font-body-sm text-body-sm flex items-center justify-between">
                    <span>Hà Giang, Điện Biên, Quảng Nam</span>
                    <span className="text-primary font-medium">1 đang chạy</span>
                  </div>
                </div>
                {/* Stat 3 */}
                <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between rounded-xl shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                      Điểm trường & Học sinh
                    </span>
                    <div className="bg-surface-container-high text-tertiary flex h-9 w-9 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">groups</span>
                    </div>
                  </div>
                  <div className="mt-space-sm flex items-baseline gap-2">
                    <span className="font-headline-xl text-headline-xl text-on-surface">180</span>
                    <span className="font-label-sm text-label-sm text-tertiary font-semibold">em học sinh</span>
                  </div>
                  <div className="mt-space-xs pt-space-xs text-on-surface-variant font-body-sm text-body-sm flex items-center justify-between">
                    <span>Qua 3 điểm trường thụ hưởng</span>
                    <span className="text-tertiary font-medium">PoD đã xác thực</span>
                  </div>
                </div>
                {/* Stat 4 */}
                <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between rounded-xl shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                      Biên nhận điện tử cấp
                    </span>
                    <div className="bg-tertiary-fixed text-tertiary flex h-9 w-9 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </div>
                  </div>
                  <div className="mt-space-sm flex items-baseline gap-2">
                    <span className="font-headline-xl text-headline-xl text-on-surface">03</span>
                    <span className="font-label-sm text-label-sm text-tertiary font-semibold">e-Certificates</span>
                  </div>
                  <div className="mt-space-xs pt-space-xs text-on-surface-variant font-body-sm text-body-sm flex items-center justify-between">
                    <span>Chuỗi SHA-256 xác thực</span>
                    <span className="text-primary cursor-pointer font-medium hover:underline">Tải trọn bộ</span>
                  </div>
                </div>
              </div>

              {/* Visual Banner / Campaign Showcase Integration */}
              <div className="bg-surface-container-lowest flex flex-col items-stretch overflow-hidden rounded-xl shadow-sm md:flex-row">
                <div className="p-space-lg space-y-space-md flex flex-col justify-between md:w-7/12">
                  <div className="space-y-space-xs">
                    <div className="bg-primary-fixed text-primary font-label-sm text-label-sm inline-flex items-center gap-1.5 rounded-full px-2.5 py-1">
                      <span className="bg-primary h-2 w-2 animate-ping rounded-full"></span>
                      <span>Chiến dịch trọng điểm tháng này</span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      Ánh Sáng Tri Thức Miền Tây Xứ Quảng - Đợt 4
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Mục tiêu huy động 50 bộ máy vi tính cấu hình học tập cho học sinh 2 xã Tr'Hy và Axan, Huyện Tây
                      Giang. Hiện đã tiếp nhận được 38/50 thiết bị (đạt 76% mục tiêu tiếp nhận).
                    </p>
                  </div>
                  <div className="space-y-space-xs">
                    <div className="font-label-md text-label-md text-on-surface flex items-center justify-between">
                      <span>Tiến độ huy động chiến dịch</span>
                      <span className="text-primary font-semibold">38 / 50 thiết bị (76%)</span>
                    </div>
                    <div className="bg-surface-container h-2.5 w-full overflow-hidden rounded-full">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "76%" }}></div>
                    </div>
                  </div>
                  <div className="gap-space-md pt-space-xs flex items-center">
                    <button
                      className="px-space-md bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container inline-flex items-center gap-1.5 rounded-lg py-2 transition-all"
                      onClick={() => setIsNewDonationModalOpen(true)}
                    >
                      <span className="material-symbols-outlined text-[18px]">volunteer_activism</span>
                      <span>Trao tặng cho đợt này</span>
                    </button>
                    <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-tertiary text-[16px]">check_circle</span>
                      Kho tiếp nhận Đà Nẵng sẵn sàng
                    </span>
                  </div>
                </div>
                {/* Provided campaign banner image */}
                <div className="bg-surface-container relative min-h-[220px] overflow-hidden md:w-5/12">
                  <img
                    alt="Hình ảnh bàn giao thực tế tại điểm trường"
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                  />
                  <div className="p-space-md absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent">
                    <div className="font-label-sm text-label-sm flex items-center gap-1.5 rounded bg-black/60 px-3 py-1.5 text-white shadow-sm backdrop-blur-sm">
                      <span className="material-symbols-outlined text-tertiary-fixed text-[15px]">photo_camera</span>
                      <span>Hình ảnh thực tế bàn giao đợt 3 - Điểm trường THCS Pà Vị</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Tabs Navigation */}
              <div className="border-b-0">
                <div className="gap-space-xs flex items-center overflow-x-auto pb-1">
                  <button className="gap-space-xs px-space-md bg-primary-container text-on-primary-container font-label-md text-label-md inline-flex items-center rounded-lg py-2.5 whitespace-nowrap shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">assignment</span>
                    <span>Phiếu trao tặng của tôi</span>
                    <span className="bg-primary text-on-primary rounded-full px-2 py-0.5 text-[11px] font-semibold">
                      4
                    </span>
                  </button>
                  <button className="gap-space-xs px-space-md text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md inline-flex items-center rounded-lg py-2.5 whitespace-nowrap transition-all">
                    <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                    <span>Thiết bị & Mã QR định danh</span>
                    <span className="bg-surface-container-high text-on-surface rounded-full px-2 py-0.5 text-[11px] font-semibold">
                      65
                    </span>
                  </button>
                  <button className="gap-space-xs px-space-md text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md inline-flex items-center rounded-lg py-2.5 whitespace-nowrap transition-all">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>Biên nhận điện tử & Chứng nhận</span>
                    <span className="bg-surface-container-high text-on-surface rounded-full px-2 py-0.5 text-[11px] font-semibold">
                      3
                    </span>
                  </button>
                  <button className="gap-space-xs px-space-md text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md inline-flex items-center rounded-lg py-2.5 whitespace-nowrap transition-all">
                    <span className="material-symbols-outlined text-[18px]">travel_explore</span>
                    <span>Đợt vận động đang mở tiếp nhận</span>
                  </button>
                </div>
              </div>

              {/* Section 3: Main Table Area & Quick Device Live Tracker */}
              <div className="gap-space-lg grid grid-cols-1 items-start xl:grid-cols-4">
                {/* Left Column: Primary Data Table */}
                <div className="space-y-space-md xl:col-span-3">
                  {/* Table Filter & Toolbar */}
                  <div className="bg-surface-container-lowest p-space-md gap-space-md flex flex-col items-center justify-between rounded-xl shadow-sm sm:flex-row">
                    <div className="gap-space-sm flex w-full items-center sm:w-auto">
                      <div className="relative w-full sm:w-72">
                        <span className="material-symbols-outlined text-on-surface-variant absolute top-2.5 left-3 text-[18px]">
                          search
                        </span>
                        <input
                          className="bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:bg-surface-container-lowest w-full rounded-lg py-2 pr-3 pl-9 focus:outline-none"
                          placeholder="Tìm theo mã phiếu #DON..."
                          type="text"
                        />
                      </div>
                      <select className="bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg px-3 py-2 focus:outline-none">
                        <option value="">Tất cả trạng thái</option>
                        <option value="pending">Chờ tiếp nhận tại kho</option>
                        <option value="inspecting">Đang kiểm định</option>
                        <option value="completed">Đã bàn giao điểm trường</option>
                        <option value="cancelled">Đã hủy</option>
                      </select>
                    </div>
                    <div className="gap-space-xs flex w-full items-center justify-end sm:w-auto">
                      <button className="bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container flex items-center gap-1 rounded-lg px-3 py-2 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">filter_list</span>
                        <span>Lọc nâng cao</span>
                      </button>
                      <button className="bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container flex items-center gap-1 rounded-lg px-3 py-2 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        <span>Xuất Excel</span>
                      </button>
                    </div>
                  </div>
                  {/* Data Table Container */}
                  <div className="bg-surface-container-lowest overflow-hidden rounded-xl shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
                            <th className="px-space-md py-3">Mã phiếu</th>
                            <th className="px-space-md py-3">Đợt vận động</th>
                            <th className="px-space-md py-3">Thiết bị trao tặng</th>
                            <th className="px-space-md py-3">Thời gian & Hiệu lực hủy</th>
                            <th className="px-space-md py-3">Trạng thái</th>
                            <th className="px-space-md py-3">Biên nhận điện tử</th>
                            <th className="px-space-md py-3 text-right">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody className="text-on-surface font-body-sm text-body-sm divide-y-0">
                          {/* ROW 1: Chờ tiếp nhận */}
                          <tr className="hover:bg-surface-container-low group transition-colors">
                            <td className="py-space-md px-space-md">
                              <span className="font-code-num text-code-num text-primary font-semibold">
                                #DON-2024-8842
                              </span>
                              <span className="text-on-surface-variant block text-[11px]">Kho EduShare ĐN</span>
                            </td>
                            <td className="py-space-md px-space-md max-w-[200px]">
                              <span className="line-clamp-2 font-medium">
                                Ánh Sáng Tri Thức Miền Tây Xứ Quảng - Đợt 4
                              </span>
                              <span className="text-on-surface-variant text-[11px]">Huyện Tây Giang, Quảng Nam</span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="text-on-surface font-medium">20 Laptop Dell Latitude 5520</span>
                              <span className="text-on-surface-variant block text-[11px]">
                                + 10 Chuột máy tính quang
                              </span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span>14:20 • 23/10/2024</span>
                              <div className="text-error mt-0.5 flex items-center gap-1 text-[11px] font-medium">
                                <span className="material-symbols-outlined text-[13px]">timer</span>
                                <span>Còn 46h để hủy phiếu</span>
                              </div>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-800">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500"></span>
                                Chờ tiếp nhận tại kho
                              </span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="text-on-surface-variant flex items-center gap-1 text-[11px] italic">
                                <span className="material-symbols-outlined text-[14px]">hourglass_empty</span>
                                Chờ kiểm định tại kho
                              </span>
                            </td>
                            <td className="py-space-md px-space-md text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  className="bg-error-container text-on-error-container hover:bg-error hover:text-on-error font-label-sm text-label-sm rounded px-2 py-1 transition-colors"
                                  onClick={() => alert("Đã mở yêu cầu hủy phiếu #DON-2024-8842 theo quy chế 72h")}
                                  title="Hủy phiếu theo quy tắc 72h"
                                >
                                  Hủy phiếu (46h)
                                </button>
                                <Link
                                  to="/donor/donation-details"
                                  className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded p-1 transition-colors"
                                  title="Xem chi tiết phiếu"
                                >
                                  <span className="material-symbols-outlined text-[18px]">visibility</span>
                                </Link>
                              </div>
                            </td>
                          </tr>
                          {/* ROW 2: Đã bàn giao */}
                          <tr className="hover:bg-surface-container-low group transition-colors">
                            <td className="py-space-md px-space-md">
                              <span className="font-code-num text-code-num text-primary font-semibold">
                                #DON-2024-8815
                              </span>
                              <span className="text-on-surface-variant block text-[11px]">Kho EduShare HN</span>
                            </td>
                            <td className="py-space-md px-space-md max-w-[200px]">
                              <span className="line-clamp-2 font-medium">
                                Máy Tính Cho Em Vùng Cao Mèo Vạc - Hà Giang
                              </span>
                              <span className="text-on-surface-variant text-[11px]">Trường THCS Pà Vị, Mèo Vạc</span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="text-on-surface font-medium">25 Laptop Lenovo ThinkPad T480</span>
                              <span className="text-on-surface-variant block text-[11px]">i5, 8GB RAM, SSD 256GB</span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span>09:15 • 12/10/2024</span>
                              <span className="text-on-surface-variant block text-[11px]">
                                Đã qua thời hạn 72h (Đã khóa)
                              </span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-800">
                                <span className="material-symbols-outlined text-[13px] text-emerald-600">
                                  check_circle
                                </span>
                                Đã bàn giao điểm trường
                              </span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <div className="flex flex-col items-start gap-1">
                                <span className="bg-tertiary-fixed text-on-tertiary-fixed font-code-num rounded px-2 py-0.5 text-[11px] font-semibold">
                                  #CERT-2024-VNPT-08
                                </span>
                                <button className="text-primary flex items-center gap-0.5 text-[11px] font-medium hover:underline">
                                  <span className="material-symbols-outlined text-[13px]">picture_as_pdf</span>
                                  Tải biên nhận PDF
                                </button>
                              </div>
                            </td>
                            <td className="py-space-md px-space-md text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button className="bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary font-label-sm text-label-sm flex items-center gap-1 rounded px-2.5 py-1 transition-colors">
                                  <span className="material-symbols-outlined text-[14px]">qr_code</span>
                                  <span>Mã QR thiết bị</span>
                                </button>
                                <button
                                  className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded p-1 transition-colors"
                                  title="Xem Biên bản nghiệm thu PoD"
                                >
                                  <span className="material-symbols-outlined text-[18px]">history_edu</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                          {/* ROW 3: Đang kiểm định tại kho */}
                          <tr className="hover:bg-surface-container-low group transition-colors">
                            <td className="py-space-md px-space-md">
                              <span className="font-code-num text-code-num text-primary font-semibold">
                                #DON-2024-8790
                              </span>
                              <span className="text-on-surface-variant block text-[11px]">Kho EduShare HN</span>
                            </td>
                            <td className="py-space-md px-space-md max-w-[200px]">
                              <span className="line-clamp-2 font-medium">
                                Phòng Tin Học Em Nuôi Mường Nhé - Điện Biên
                              </span>
                              <span className="text-on-surface-variant text-[11px]">Xã Nậm Kè, Điện Biên</span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="text-on-surface font-medium">15 Màn hình LCD Samsung 24" FHD</span>
                              <span className="text-on-surface-variant block text-[11px]">
                                Tặng kèm cáp HDMI & nguồn
                              </span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span>16:30 • 18/10/2024</span>
                              <span className="text-on-surface-variant block text-[11px]">
                                Đã qua 72h (Đã vào luồng kho)
                              </span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-800">
                                <span className="material-symbols-outlined animate-spin text-[13px] text-blue-600">
                                  sync
                                </span>
                                Đang kiểm định tại kho
                              </span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="text-on-surface-variant flex items-center gap-1 text-[11px]">
                                <span className="material-symbols-outlined text-primary text-[14px]">engineering</span>
                                Đang xử lý kỹ thuật
                              </span>
                            </td>
                            <td className="py-space-md px-space-md text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button className="bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm rounded px-2.5 py-1 transition-colors">
                                  Xem chi tiết & QR
                                </button>
                              </div>
                            </td>
                          </tr>
                          {/* ROW 4: Đã hủy */}
                          <tr className="hover:bg-surface-container-low group opacity-75 transition-colors">
                            <td className="py-space-md px-space-md">
                              <span className="font-code-num text-code-num text-secondary font-semibold">
                                #DON-2024-8712
                              </span>
                              <span className="text-on-surface-variant block text-[11px]">Hủy tại hệ thống</span>
                            </td>
                            <td className="py-space-md px-space-md max-w-[200px]">
                              <span className="line-clamp-2 font-medium">Tủ Sách & Máy Tính Bản Làng Lạng Sơn</span>
                              <span className="text-on-surface-variant text-[11px]">Huyện Văn Quan, Lạng Sơn</span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="text-on-surface line-through">05 Bộ máy tính bàn PC HP ProDesk</span>
                              <span className="text-on-surface-variant block text-[11px]">
                                Thay đổi kế hoạch nâng cấp
                              </span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span>08:00 • 05/09/2024</span>
                              <span className="text-error block text-[11px]">Hủy lúc: 11:30 06/09/2024</span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                                <span className="material-symbols-outlined text-[13px] text-slate-500">cancel</span>
                                Đã hủy trong 72h
                              </span>
                            </td>
                            <td className="py-space-md px-space-md">
                              <span className="text-on-surface-variant text-[11px] italic">Không phát sinh</span>
                            </td>
                            <td className="py-space-md px-space-md text-right">
                              <span className="text-on-surface-variant font-label-sm text-label-sm">
                                Đã lưu trữ hồ sơ
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Table Footer Pagination */}
                    <div className="px-space-md py-space-sm bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm flex items-center justify-between">
                      <span>Hiển thị 4 trên 4 phiếu trao tặng</span>
                      <div className="flex items-center gap-1">
                        <button className="text-outline-variant cursor-not-allowed rounded p-1" disabled>
                          <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                        </button>
                        <button className="bg-primary text-on-primary h-7 w-7 rounded text-center text-xs font-semibold">
                          1
                        </button>
                        <button className="text-outline-variant cursor-not-allowed rounded p-1" disabled>
                          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Live QR Code Tracker & e-Proof Card */}
                <div className="space-y-space-md xl:col-span-1">
                  {/* Live Tracker Card */}
                  <div className="bg-surface-container-lowest p-space-md space-y-space-md rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary text-[20px]">qr_code_scanner</span>
                        Tra Cứu Nhanh Mã QR
                      </h3>
                      <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed rounded px-2 py-0.5 font-semibold">
                        Live GPS
                      </span>
                    </div>
                    {/* Quick QR search input */}
                    <div className="relative">
                      <input
                        className="bg-surface-container-low text-on-surface font-code-num text-code-num focus:bg-surface-container-lowest w-full rounded-lg py-2 pr-9 pl-3 font-semibold focus:outline-none"
                        type="text"
                        defaultValue="QR-8821-MEOVAC"
                      />
                      <button className="text-primary hover:text-primary-container absolute top-2 right-2">
                        <span className="material-symbols-outlined text-[20px]">search</span>
                      </button>
                    </div>
                    {/* Device Summary Identified */}
                    <div className="p-space-sm bg-surface-container-low gap-space-sm flex items-start rounded-lg">
                      <div className="bg-primary-container text-on-primary-container flex h-10 w-10 shrink-0 items-center justify-center rounded">
                        <span className="material-symbols-outlined text-[22px]">laptop</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="font-label-md text-label-md text-on-surface block truncate font-semibold">
                          Lenovo ThinkPad T480
                        </span>
                        <span className="font-code-num text-on-surface-variant block text-[11px]">
                          SN: PF19XYZ209 • Mã QR-8821
                        </span>
                        <span className="text-tertiary text-[11px] font-medium">Bàn giao: Trường THCS Pà Vị</span>
                      </div>
                    </div>
                    {/* 4-Step Linear Lifecycle Stepper */}
                    <div className="space-y-space-sm pt-space-xs">
                      <span className="font-label-sm text-label-sm text-on-surface-variant block tracking-wider uppercase">
                        Tiến trình vòng đời thiết bị
                      </span>
                      <div className="relative space-y-4 pl-6">
                        {/* Vertical Connecting Line */}
                        <div className="bg-tertiary absolute top-2 bottom-2 left-2.5 w-0.5"></div>
                        {/* Step 1 */}
                        <div className="gap-space-sm relative flex items-start">
                          <div className="bg-tertiary text-on-tertiary ring-surface-container-lowest absolute -left-6 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ring-4">
                            <span className="material-symbols-outlined text-[13px]">check</span>
                          </div>
                          <div>
                            <span className="font-label-md text-label-md text-on-surface block font-semibold">
                              1. Tiếp nhận tại kho
                            </span>
                            <span className="text-on-surface-variant text-[11px]">
                              Kho EduShare Hà Nội (12/10/2024)
                            </span>
                          </div>
                        </div>
                        {/* Step 2 */}
                        <div className="gap-space-sm relative flex items-start">
                          <div className="bg-tertiary text-on-tertiary ring-surface-container-lowest absolute -left-6 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ring-4">
                            <span className="material-symbols-outlined text-[13px]">check</span>
                          </div>
                          <div>
                            <span className="font-label-md text-label-md text-on-surface block font-semibold">
                              2. Kiểm định & Cấp tem QR
                            </span>
                            <span className="text-on-surface-variant text-[11px]">
                              Đạt chuẩn A+ (Pin 92%, SSD Good)
                            </span>
                          </div>
                        </div>
                        {/* Step 3 */}
                        <div className="gap-space-sm relative flex items-start">
                          <div className="bg-tertiary text-on-tertiary ring-surface-container-lowest absolute -left-6 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ring-4">
                            <span className="material-symbols-outlined text-[13px]">check</span>
                          </div>
                          <div>
                            <span className="font-label-md text-label-md text-on-surface block font-semibold">
                              3. Vận chuyển qua Đội TNV
                            </span>
                            <span className="text-on-surface-variant text-[11px]">Đoàn xe thiện nguyện Tây Bắc</span>
                          </div>
                        </div>
                        {/* Step 4 */}
                        <div className="gap-space-sm relative flex items-start">
                          <div className="bg-tertiary-container text-on-tertiary ring-surface-container-lowest absolute -left-6 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ring-4">
                            <span className="material-symbols-outlined text-[13px]">verified</span>
                          </div>
                          <div>
                            <span className="font-label-md text-label-md text-tertiary block font-semibold">
                              4. Điểm trường ký nhận PoD
                            </span>
                            <span className="text-on-surface-variant text-[11px]">
                              Thầy Hiệu trưởng ký nhận điện tử
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Digital Certificate Ledger Preview */}
                    <div className="p-space-sm bg-surface-container-high space-y-2 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Minh chứng sổ cái EduShare
                        </span>
                        <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                      </div>
                      <div className="bg-surface-container-lowest font-code-num text-on-surface-variant rounded p-2 text-[10px] leading-tight break-all">
                        SHA256: 8a7f4e91bc023d8...f89c02aa11e
                      </div>
                      <button className="bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container flex w-full items-center justify-center gap-1 rounded py-1.5 transition-colors">
                        <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                        <span>Kiểm tra giao dịch công khai</span>
                      </button>
                    </div>
                  </div>
                  {/* Quick Help & Hotline Support Card */}
                  <div className="bg-surface-container-lowest p-space-md space-y-space-sm rounded-xl shadow-sm">
                    <div className="gap-space-sm flex items-center">
                      <div className="bg-secondary-container text-primary flex h-8 w-8 items-center justify-center rounded-full">
                        <span className="material-symbols-outlined text-[18px]">support_agent</span>
                      </div>
                      <div>
                        <h4 className="font-label-md text-label-md text-on-surface font-semibold">
                          Hỗ trợ Điều phối viên
                        </h4>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Tư vấn quy chuẩn tiếp nhận
                        </span>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Bạn cần hỗ trợ tình nguyện viên tới tận nhà/công ty nhận thiết bị cồng kềnh?
                    </p>
                    <div className="font-label-md text-label-md flex items-center justify-between pt-1">
                      <span className="text-primary font-semibold">Hotline: 1900 6822</span>
                      <span className="text-tertiary">Nhánh 2 (24/7)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MODAL: Tạo phiếu đăng ký trao tặng mới */}
            {isNewDonationModalOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm"
                id="modal-new-donation"
              >
                <div className="bg-surface-container-lowest my-8 w-full max-w-2xl overflow-hidden rounded-xl shadow-xl">
                  {/* Modal Header */}
                  <div className="px-space-lg py-space-md bg-surface-container-low flex items-center justify-between">
                    <div className="gap-space-sm flex items-center">
                      <div className="bg-primary text-on-primary flex h-8 w-8 items-center justify-center rounded-lg">
                        <span className="material-symbols-outlined text-[20px]">add_task</span>
                      </div>
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">
                          Đăng Ký Phiếu Trao Tặng Thiết Bị
                        </h3>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Hệ thống phân luồng tiếp nhận minh bạch EduShare VN
                        </span>
                      </div>
                    </div>
                    <button
                      className="text-on-surface-variant hover:bg-surface-container-high rounded-lg p-1 transition-colors"
                      onClick={() => setIsNewDonationModalOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                  </div>
                  {/* Modal Body (Form) */}
                  <div className="p-space-lg space-y-space-md max-h-[75vh] overflow-y-auto">
                    {/* Important Notice */}
                    <div className="p-space-sm bg-surface-container-high gap-space-sm flex items-start rounded-lg">
                      <span className="material-symbols-outlined text-primary mt-0.5 shrink-0 text-[20px]">info</span>
                      <span className="font-body-sm text-body-sm text-on-surface leading-snug">
                        Sau khi ấn nút <strong>"Gửi phiếu trao tặng"</strong>, hệ thống sẽ tự động khởi tạo mã định danh
                        duy nhất. Phiếu chỉ có thể HỦY trong 72 giờ đầu tiên trước khi tổ kỹ thuật tiếp nhận tại kho.
                      </span>
                    </div>
                    {/* Campaign Selector */}
                    <div className="space-y-1">
                      <label className="font-label-md text-label-md text-on-surface font-medium">
                        Chọn Đợt Vận Động Tham Gia *
                      </label>
                      <select className="bg-surface-container-low text-on-surface font-body-md text-body-md w-full rounded-lg px-3 py-2 focus:outline-none">
                        <option value="1">Chiến dịch Ánh Sáng Tri Thức Miền Tây Xứ Quảng - Đợt 4 (Quảng Nam)</option>
                        <option value="2">Chiến dịch Máy Tính Cho Em Vùng Cao Mèo Vạc - Đợt 2 (Hà Giang)</option>
                        <option value="3">Chiến dịch Phòng Tin Học Em Nuôi Mường Nhé (Điện Biên)</option>
                        <option value="4">Quyên góp tự do vào Quỹ Dự Phòng Thiết Bị Quốc Gia</option>
                      </select>
                    </div>
                    {/* Device Line Items Section */}
                    <div className="space-y-space-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          Danh Mục Dòng Hàng & Thiết Bị Trao Tặng
                        </span>
                        <button
                          className="text-primary font-label-sm text-label-sm flex items-center gap-1 hover:underline"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[14px]">add</span>
                          <span>+ Thêm dòng thiết bị khác</span>
                        </button>
                      </div>
                      {/* Line item card */}
                      <div className="p-space-md bg-surface-container-low space-y-space-sm rounded-lg">
                        <div className="gap-space-sm grid grid-cols-1 sm:grid-cols-3">
                          <div className="space-y-1">
                            <label className="font-label-sm text-label-sm text-on-surface-variant">Loại thiết bị</label>
                            <select className="bg-surface-container-lowest text-on-surface font-body-sm text-body-sm w-full rounded-lg px-2.5 py-1.5 focus:outline-none">
                              <option>Laptop (Máy tính xách tay)</option>
                              <option>PC Đồng bộ (Thùng máy)</option>
                              <option>Màn hình máy tính (LCD/LED)</option>
                              <option>Máy tính bảng (Tablet)</option>
                              <option>Phụ kiện (Bàn phím, Chuột, Tai nghe)</option>
                            </select>
                          </div>
                          <div className="space-y-1">
                            <label className="font-label-sm text-label-sm text-on-surface-variant">
                              Số lượng trao tặng
                            </label>
                            <input
                              className="bg-surface-container-lowest text-on-surface font-body-sm text-body-sm w-full rounded-lg px-2.5 py-1.5 focus:outline-none"
                              min="1"
                              type="number"
                              defaultValue="10"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="font-label-sm text-label-sm text-on-surface-variant">
                              Tình trạng thực tế
                            </label>
                            <select className="bg-surface-container-lowest text-on-surface font-body-sm text-body-sm w-full rounded-lg px-2.5 py-1.5 focus:outline-none">
                              <option>Đã qua sử dụng (Còn hoạt động tốt)</option>
                              <option>Mới 100% nguyên hộp</option>
                              <option>Cần bảo dưỡng nhẹ (Cài lại OS)</option>
                            </select>
                          </div>
                        </div>
                        {/* Specs & Accessories */}
                        <div className="gap-space-sm grid grid-cols-1 pt-1 sm:grid-cols-2">
                          <div className="space-y-1">
                            <label className="font-label-sm text-label-sm text-on-surface-variant">
                              Cấu hình mô tả tóm tắt
                            </label>
                            <input
                              className="bg-surface-container-lowest text-on-surface font-body-sm text-body-sm w-full rounded-lg px-2.5 py-1.5 focus:outline-none"
                              placeholder="vd: Dell Latitude, Core i5, RAM 8GB, SSD 256GB"
                              type="text"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="font-label-sm text-label-sm text-on-surface-variant">
                              Phụ kiện kèm theo
                            </label>
                            <input
                              className="bg-surface-container-lowest text-on-surface font-body-sm text-body-sm w-full rounded-lg px-2.5 py-1.5 focus:outline-none"
                              placeholder="vd: Đầy đủ adapter sạc zin, chuột dây, túi chống sốc"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Handover Method */}
                    <div className="space-y-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-medium">
                        Phương thức gửi thiết bị *
                      </label>
                      <div className="gap-space-sm grid grid-cols-1 sm:grid-cols-2">
                        <label className="p-space-sm bg-surface-container-low hover:bg-surface-container gap-space-xs flex cursor-pointer items-start rounded-lg">
                          <input
                            defaultChecked
                            className="text-primary mt-1 focus:ring-0"
                            name="handover_type"
                            type="radio"
                          />
                          <div>
                            <span className="font-label-md text-label-md text-on-surface block font-semibold">
                              Mang đến kho EduShare gần nhất
                            </span>
                            <span className="text-on-surface-variant text-[11px]">
                              Tại Hà Nội, Đà Nẵng, hoặc TP. Hồ Chí Minh
                            </span>
                          </div>
                        </label>
                        <label className="p-space-sm bg-surface-container-low hover:bg-surface-container gap-space-xs flex cursor-pointer items-start rounded-lg">
                          <input className="text-primary mt-1 focus:ring-0" name="handover_type" type="radio" />
                          <div>
                            <span className="font-label-md text-label-md text-on-surface block font-semibold">
                              Đội TNV đến nhận tận nơi
                            </span>
                            <span className="text-on-surface-variant text-[11px]">
                              Áp dụng cho quyên góp từ 10 thiết bị trở lên
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                    {/* Legal Statement & Checkbox */}
                    <div className="p-space-sm bg-surface-container-high space-y-2 rounded-lg">
                      <label className="flex cursor-pointer items-start gap-2">
                        <input defaultChecked className="text-primary mt-1 rounded focus:ring-0" type="checkbox" />
                        <span className="font-body-sm text-body-sm text-on-surface leading-tight">
                          Tôi cam kết toàn bộ thiết bị trao tặng thuộc <strong>quyền sở hữu hợp pháp</strong> của cá
                          nhân/doanh nghiệp, không tranh chấp, đã xóa sạch dữ liệu cá nhân nội bộ và tự nguyện ủy quyền
                          hoàn toàn cho EduShare VN phân bổ tới các điểm trường khó khăn.
                        </span>
                      </label>
                    </div>
                  </div>
                  {/* Modal Footer */}
                  <div className="px-space-lg py-space-md bg-surface-container-low flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-tertiary text-[16px]">lock</span>
                      Ký số xác nhận định danh điện tử
                    </span>
                    <div className="gap-space-sm flex items-center">
                      <button
                        className="px-space-md bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high rounded-lg py-2 transition-colors"
                        onClick={() => setIsNewDonationModalOpen(false)}
                      >
                        Đóng
                      </button>
                      <button
                        className="px-space-md bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container flex items-center gap-1 rounded-lg py-2 shadow-sm transition-colors"
                        onClick={() => {
                          alert(
                            "Đã gửi phiếu trao tặng thành công! Mã phiếu: #DON-2024-8899. Bạn có 72h để hủy nếu cần.",
                          );
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
