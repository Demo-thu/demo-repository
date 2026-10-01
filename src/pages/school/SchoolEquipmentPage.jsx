import { Link } from "react-router-dom";

export default function SchoolEquipmentPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md selection:bg-primary-fixed selection:text-on-primary-fixed flex antialiased">
      {/* Left Sidebar Navigation */}
      <aside className="bg-surface-container-lowest border-outline-variant/30 fixed top-0 left-0 z-50 flex h-screen w-72 flex-col justify-between overflow-hidden border-r shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-1 flex-col overflow-y-auto">
          {/* App Brand Header */}
          <div className="px-space-lg pt-space-lg pb-space-md border-surface-container-low border-b">
            <div className="gap-space-sm flex items-center">
              <div className="from-primary to-primary-container text-on-primary shadow-primary/20 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr shadow-sm">
                <span className="material-symbols-outlined text-[24px]">school</span>
              </div>
              <div>
                <div className="gap-space-xs flex items-center">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">
                    EduShare VN
                  </span>
                  <span className="font-label-sm bg-primary-fixed text-on-primary-fixed rounded-full px-1.5 py-0.5 text-[10px] font-bold">
                    CORE
                  </span>
                </div>
                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="bg-tertiary inline-block h-2 w-2 rounded-full"></span>
                  <span className="font-label-sm text-label-sm text-secondary">Hệ thống Số hóa 63 Tỉnh</span>
                </div>
              </div>
            </div>
          </div>
          {/* Main Navigation Menu */}
          <nav className="px-space-md py-space-md space-y-space-md">
            {/* Section: CỔNG TRƯỜNG HỌC */}
            <div className="space-y-1">
              <div className="px-space-sm font-label-sm text-label-sm text-secondary py-1 font-semibold tracking-wider uppercase">
                Cổng Trường Học
              </div>
              <div className="space-y-0.5">
                <Link
                  className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-body-md flex items-center rounded-lg py-2.5 text-[14px] transition-colors"
                  to="/school/request"
                >
                  <span className="material-symbols-outlined text-secondary text-[20px]">assignment_add</span>
                  <span>Yêu cầu tài trợ</span>
                </Link>
                <Link
                  className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-body-md flex items-center rounded-lg py-2.5 text-[14px] transition-colors"
                  to="/school/student-details"
                >
                  <span className="material-symbols-outlined text-secondary text-[20px]">groups</span>
                  <span>Học sinh tiếp nhận</span>
                </Link>
                <Link
                  className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-body-md flex items-center rounded-lg py-2.5 text-[14px] transition-colors"
                  to="/school/pod"
                >
                  <span className="material-symbols-outlined text-secondary text-[20px]">fact_check</span>
                  <span>Biên bản bàn giao (PoD)</span>
                </Link>
              </div>
            </div>
            {/* Section: KHO & TIẾP NHẬN */}
            <div className="space-y-1">
              <div className="px-space-sm font-label-sm text-label-sm text-secondary py-1 font-semibold tracking-wider uppercase">
                Kho &amp; Tiếp Nhận
              </div>
              <div className="space-y-0.5">
                {/* Active item correctly highlighted */}
                <Link
                  className="gap-space-sm px-space-sm bg-primary-container text-on-primary flex items-center rounded-lg py-2.5 font-medium shadow-sm transition-all"
                  to="/school/equipment"
                >
                  <span className="material-symbols-outlined text-[20px]">devices</span>
                  <span className="font-semibold">Danh mục thiết bị phân bổ</span>
                </Link>
                <Link
                  className="gap-space-sm px-space-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-body-md flex items-center rounded-lg py-2.5 text-[14px] transition-colors"
                  to="/school/delivery-history"
                >
                  <span className="material-symbols-outlined text-secondary text-[20px]">history_edu</span>
                  <span>Lịch sử đợt giao</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
        {/* Sidebar Footer Support Hotline Box */}
        <div className="p-space-md mx-space-md mb-space-md bg-surface-container-low border-outline-variant/30 rounded-xl border">
          <div className="gap-space-sm flex items-start">
            <div className="bg-primary-fixed text-primary mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
              <span className="material-symbols-outlined text-[20px]">support_agent</span>
            </div>
            <div>
              <div className="font-label-md text-label-md text-on-surface font-semibold">Hỗ trợ kỹ thuật 24/7</div>
              <div className="font-code-num text-primary text-[15px] font-bold tracking-wide">1800 6868</div>
              <div className="font-body-sm text-secondary mt-0.5 text-[11px]">Miễn phí cước cuộc gọi</div>
              <div className="font-label-sm text-outline mt-1 text-[10px]">Phiên bản Quốc gia v2.8.4</div>
            </div>
          </div>
        </div>
      </aside>
      {/* Main Content Wrapper */}
      <div className="flex min-h-screen flex-1 flex-col pl-72">
        {/* Top Header Bar */}
        <header className="bg-surface-container-lowest/95 border-outline-variant/20 px-gutter-desktop fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between border-b shadow-[0_1px_8px_rgba(0,0,0,0.03)] backdrop-blur-xl">
          <div className="max-w-md flex-1">
            <div className="relative flex w-full items-center">
              <span className="material-symbols-outlined text-secondary absolute left-3.5 text-[20px]">search</span>
              <input
                className="bg-surface-container-low focus:border-primary/30 font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:ring-primary/20 w-full rounded-lg border border-transparent py-2 pr-4 pl-10 transition-all focus:ring-2 focus:outline-none"
                placeholder="Tìm kiếm mã thiết bị, học sinh, số quyết định..."
                type="text"
              />
            </div>
          </div>
          {/* Right Header Actions */}
          <div className="gap-space-md ml-space-md flex items-center">
            {/* School & Teacher Info Badge */}
            <div className="hidden flex-col text-right md:flex">
              <div className="flex items-center justify-end gap-1.5">
                <span className="font-label-sm bg-secondary-container text-on-secondary-fixed-variant rounded px-2 py-0.5 text-[11px] font-semibold">
                  Đại diện Trường học (BGH)
                </span>
                <span className="font-body-md text-body-md text-on-surface font-bold">Thầy Hà Văn Tiêu</span>
              </div>
              <span className="font-body-sm text-secondary text-[12px]">Trường PTDTBT THCS Mường Lát</span>
            </div>
            <div className="bg-outline-variant/30 hidden h-8 w-px md:block"></div>
            {/* Notification Bell */}
            <button
              className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
              title="Thông báo hệ thống"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="bg-error ring-surface-container-lowest absolute top-2 right-2 h-2 w-2 rounded-full ring-2"></span>
            </button>
            {/* Account Avatar */}
            <div className="bg-primary-container text-on-primary ring-primary/20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-sm font-bold shadow-sm ring-2">
              <span className="material-symbols-outlined text-[20px]">person</span>
            </div>
          </div>
        </header>
        {/* Main Page Content */}
        <main className="bg-surface w-full flex-1 pt-16">
          <div className="px-gutter-desktop py-space-lg space-y-space-lg mx-auto w-full max-w-[1600px]">
            {/* Top Breadcrumbs & Page Action Header (Wide layout, prevents text squishing/vertical wrap) */}
            <div className="pb-space-md border-outline-variant/20 flex w-full flex-col gap-4 border-b">
              {/* Breadcrumbs */}
              <nav className="font-label-sm text-secondary flex items-center gap-2 text-[12px]">
                <Link className="hover:text-primary flex shrink-0 items-center gap-1 transition-colors" to="#">
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  <span>Cổng Trường Học</span>
                </Link>
                <span className="material-symbols-outlined text-outline shrink-0 text-[14px]">chevron_right</span>
                <span className="text-secondary shrink-0">Kho &amp; Tiếp nhận</span>
                <span className="material-symbols-outlined text-outline shrink-0 text-[14px]">chevron_right</span>
                <span className="text-primary shrink-0 font-semibold">Danh mục thiết bị phân bổ</span>
              </nav>
              {/* Title & Action Bar */}
              <div className="flex w-full flex-col justify-between gap-4 2xl:flex-row 2xl:items-center">
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="font-headline-lg text-on-surface text-[26px] font-bold tracking-tight whitespace-normal md:text-[30px]">
                      Danh Mục Thiết Bị Phân Bổ &amp; Quản Lý Tài Sản Học Đường
                    </h1>
                    <span className="font-label-sm bg-primary-fixed text-on-primary-fixed shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-wider uppercase">
                      Cấp cơ sở
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-secondary max-w-4xl leading-relaxed">
                    Toàn bộ danh mục máy tính, thiết bị điện và hạ tầng mạng được các tập đoàn, nhà hảo tâm tài trợ theo
                    các đợt vận động giáo dục đã bàn giao chính thức cho Trường PTDTBT THCS Mường Lát.
                  </p>
                </div>
                {/* Actions Toolbar */}
                <div className="flex shrink-0 flex-wrap items-center gap-2.5">
                  <button
                    className="bg-surface-container-lowest text-on-surface hover:bg-surface-container-low border-outline-variant/40 font-label-md text-label-md inline-flex h-10 items-center gap-1.5 rounded-lg border px-3.5 shadow-sm transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-primary text-[18px]">download</span>
                    <span>Xuất kiểm kê tài sản (Excel/PDF)</span>
                  </button>
                  <button
                    className="bg-surface-container-lowest text-on-surface hover:bg-surface-container-low border-outline-variant/40 font-label-md text-label-md inline-flex h-10 items-center gap-1.5 rounded-lg border px-3.5 shadow-sm transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-primary text-[18px]">qr_code_2</span>
                    <span>In mã QR / Tem nhãn hàng loạt</span>
                  </button>
                  <button
                    className="bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md shadow-primary/20 inline-flex h-10 items-center gap-1.5 rounded-lg px-4 font-semibold shadow-sm transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
                    <span>Quét mã QR kiểm tra nhanh</span>
                  </button>
                </div>
              </div>
            </div>
            {/* 4 Bento Overview Metrics */}
            <div className="gap-space-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {/* Metric 1: Tổng thiết bị */}
              <div className="bg-surface-container-lowest p-space-md border-outline-variant/30 relative flex flex-col justify-between overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div className="bg-primary-fixed/50 text-primary flex h-11 w-11 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[24px]">devices</span>
                  </div>
                  <span className="font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed rounded-full px-2.5 py-0.5 font-semibold">
                    100% Đạt chuẩn đợt 1
                  </span>
                </div>
                <div className="mt-space-md">
                  <div className="font-headline-xl text-on-surface text-[36px] font-bold tracking-tight">37</div>
                  <div className="font-label-md text-label-md text-secondary mt-0.5 font-medium">
                    Tổng thiết bị đã nhận bàn giao
                  </div>
                  <div className="font-body-sm text-on-surface-variant mt-1.5 text-[13px] leading-snug">
                    25 PC HP ProDesk • 10 Santak UPS • 2 Cisco Switch
                  </div>
                </div>
                <div className="mt-space-md bg-surface-container-low/60 -mx-space-md -mb-space-md px-space-md text-secondary font-label-sm border-surface-container-low flex items-center justify-between border-t py-2 pt-2 text-[12px]">
                  <span>Tiếp nhận bàn giao đợt 1</span>
                  <span className="font-code-num text-code-num text-on-surface font-bold">24/10/2024</span>
                </div>
              </div>
              {/* Metric 2: Hoạt động tốt */}
              <div className="bg-surface-container-lowest p-space-md border-outline-variant/30 relative flex flex-col justify-between overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div className="bg-surface-container-low text-tertiary flex h-11 w-11 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[24px]">check_circle</span>
                  </div>
                  <span className="font-label-sm text-label-sm bg-surface-container-low text-tertiary border-tertiary/20 flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-semibold">
                    <span className="bg-tertiary h-2 w-2 rounded-full"></span> 97.3% sẵn sàng
                  </span>
                </div>
                <div className="mt-space-md">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-headline-xl text-on-surface text-[36px] font-bold tracking-tight">36</span>
                    <span className="font-headline-md text-headline-md text-secondary font-medium">/ 37 máy</span>
                  </div>
                  <div className="font-label-md text-label-md text-secondary mt-0.5 font-medium">
                    Tình trạng vận hành tốt
                  </div>
                  <div className="bg-surface-container-high mt-2.5 h-2 w-full overflow-hidden rounded-full">
                    <div className="bg-tertiary h-full rounded-full" style={{ width: "97.3%" }}></div>
                  </div>
                </div>
                <div className="mt-space-md bg-surface-container-low/60 -mx-space-md -mb-space-md px-space-md text-secondary font-label-sm border-surface-container-low flex items-center justify-between border-t py-2 pt-2 text-[12px]">
                  <span>01 máy đang bảo dưỡng nguồn</span>
                  <span className="text-tertiary font-bold">Grade A chuẩn</span>
                </div>
              </div>
              {/* Metric 3: Học sinh được phân bổ */}
              <div className="bg-surface-container-lowest p-space-md border-outline-variant/30 relative flex flex-col justify-between overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div className="bg-primary-fixed/40 text-primary-container flex h-11 w-11 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[24px]">school</span>
                  </div>
                  <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed rounded-full px-2.5 py-0.5 font-semibold">
                    12 lớp THCS
                  </span>
                </div>
                <div className="mt-space-md">
                  <div className="font-headline-xl text-on-surface text-[36px] font-bold tracking-tight">412</div>
                  <div className="font-label-md text-label-md text-secondary mt-0.5 font-medium">
                    Học sinh được phân bổ học tập
                  </div>
                  <div className="font-body-sm text-on-surface-variant mt-1.5 truncate text-[13px]">
                    Con em đồng bào H'Mông, Thái (Bán trú)
                  </div>
                </div>
                <div className="mt-space-md bg-surface-container-low/60 -mx-space-md -mb-space-md px-space-md text-secondary font-label-sm border-surface-container-low flex items-center justify-between border-t py-2 pt-2 text-[12px]">
                  <span>Định mức máy tính</span>
                  <span className="font-code-num text-code-num text-on-surface font-bold">18 giờ / tuần</span>
                </div>
              </div>
              {/* Metric 4: Bảo hành & Bảo trợ */}
              <div className="bg-surface-container-lowest p-space-md border-outline-variant/30 relative flex flex-col justify-between overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div className="bg-secondary-fixed/50 text-primary flex h-11 w-11 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[24px]">verified_user</span>
                  </div>
                  <span className="font-label-sm text-label-sm bg-surface-container-high text-on-primary-fixed-variant rounded-full px-2.5 py-0.5 font-semibold">
                    VNPT &amp; FPT bảo trợ
                  </span>
                </div>
                <div className="mt-space-md">
                  <div className="font-headline-xl text-on-surface text-[36px] font-bold tracking-tight">36 Thg</div>
                  <div className="font-label-md text-label-md text-secondary mt-0.5 font-medium">
                    Bảo hành chính hãng 1-đổi-1
                  </div>
                  <div className="font-body-sm text-on-surface-variant mt-1.5 truncate text-[13px]">
                    Kỹ thuật viên EduShare hỗ trợ trực tuyến 24/7
                  </div>
                </div>
                <div className="mt-space-md bg-surface-container-low/60 -mx-space-md -mb-space-md px-space-md text-secondary font-label-sm border-surface-container-low flex items-center justify-between border-t py-2 pt-2 text-[12px]">
                  <span>Hỗ trợ tại chỗ đến</span>
                  <span className="font-code-num text-code-num text-on-surface font-bold">Tháng 10/2027</span>
                </div>
              </div>
            </div>
            {/* Search & Multi-Filter Controls Bar */}
            <div className="bg-surface-container-lowest p-space-md border-outline-variant/30 space-y-space-md rounded-xl border shadow-sm">
              <div className="gap-space-sm grid grid-cols-1 md:grid-cols-12">
                {/* Search field */}
                <div className="relative flex items-center md:col-span-4">
                  <span className="material-symbols-outlined text-secondary absolute left-3.5 text-[20px]">search</span>
                  <input
                    className="bg-surface-container-low focus:border-primary/30 font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:ring-primary/20 w-full rounded-lg border border-transparent py-2 pr-4 pl-10 transition-all focus:ring-2 focus:outline-none"
                    placeholder="Tìm theo mã QR tem, số serial phần cứng, vị trí bàn học, tên học sinh..."
                    type="text"
                  />
                </div>
                {/* Filter 1: Đợt tài trợ */}
                <div className="md:col-span-2">
                  <select
                    className="bg-surface-container-low focus:border-primary/30 font-body-sm text-body-sm text-on-surface focus:ring-primary/20 w-full cursor-pointer rounded-lg border border-transparent px-3 py-2 focus:ring-2 focus:outline-none"
                    defaultValue="Tất cả đợt tài trợ"
                  >
                    <option value="Tất cả đợt tài trợ">Tất cả đợt tài trợ</option>
                    <option value="Đợt IV/2024 Mường Lát">Đợt IV/2024 Mường Lát</option>
                    <option value="Đợt 1 - Chắp cánh Mường Lát 2024">Đợt 1 - Chắp cánh Mường Lát 2024</option>
                    <option value="Quỹ Hy Vọng FPT">Quỹ Hy Vọng FPT</option>
                    <option value="Hạ tầng VNPT Thanh Hoá">Hạ tầng VNPT Thanh Hoá</option>
                  </select>
                </div>
                {/* Filter 2: Loại thiết bị */}
                <div className="md:col-span-2">
                  <select
                    className="bg-surface-container-low focus:border-primary/30 font-body-sm text-body-sm text-on-surface focus:ring-primary/20 w-full cursor-pointer rounded-lg border border-transparent px-3 py-2 focus:ring-2 focus:outline-none"
                    defaultValue="Tất cả loại thiết bị"
                  >
                    <option value="Tất cả loại thiết bị">Tất cả loại thiết bị</option>
                    <option value="PC để bàn (HP Desktop)">PC để bàn (HP Desktop)</option>
                    <option value="Bộ lưu điện (UPS Santak)">Bộ lưu điện (UPS Santak)</option>
                    <option value="Thiết bị mạng (Switch TP-Link/Cisco)">Thiết bị mạng (Switch TP-Link/Cisco)</option>
                    <option value="Máy tính bảng học tập">Máy tính bảng học tập</option>
                  </select>
                </div>
                {/* Filter 3: Trạng thái */}
                <div className="md:col-span-2">
                  <select
                    className="bg-surface-container-low focus:border-primary/30 font-body-sm text-body-sm text-on-surface focus:ring-primary/20 w-full cursor-pointer rounded-lg border border-transparent px-3 py-2 focus:ring-2 focus:outline-none"
                    defaultValue="Tất cả trạng thái"
                  >
                    <option value="Tất cả trạng thái">Tất cả trạng thái</option>
                    <option value="Hoạt động tốt (Grade A)">Hoạt động tốt (Grade A)</option>
                    <option value="Cần bảo trì / Vệ sinh">Cần bảo trì / Vệ sinh</option>
                    <option value="Đang kiểm tra kỹ thuật">Đang kiểm tra kỹ thuật</option>
                  </select>
                </div>
                {/* Filter 4: Vị trí phòng máy */}
                <div className="md:col-span-2">
                  <select
                    className="bg-surface-container-low focus:border-primary/30 font-body-sm text-body-sm text-on-surface focus:ring-primary/20 w-full cursor-pointer rounded-lg border border-transparent px-3 py-2 focus:ring-2 focus:outline-none"
                    defaultValue="Tất cả vị trí phòng máy"
                  >
                    <option value="Tất cả vị trí phòng máy">Tất cả vị trí phòng máy</option>
                    <option value="Phòng Tin học T2 - Dãy A">Phòng Tin học T2 - Dãy A</option>
                    <option value="Phòng Tin học T2 - Dãy B">Phòng Tin học T2 - Dãy B</option>
                    <option value="Phòng Tin học T2 - Dãy C">Phòng Tin học T2 - Dãy C</option>
                    <option value="Tủ trung tâm mạng T2">Tủ trung tâm mạng T2</option>
                    <option value="Ký túc xá học sinh bán trú">Ký túc xá học sinh bán trú</option>
                  </select>
                </div>
              </div>
              {/* Quick Tabs / Categorization */}
              <div className="border-surface-container-low flex flex-wrap items-center justify-between gap-3 border-t pt-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-label-sm text-label-sm text-secondary font-medium">Phân loại nhanh:</span>
                  <button
                    className="bg-primary-container text-on-primary font-label-md text-label-md rounded-full px-3 py-1 font-semibold shadow-sm"
                    type="button"
                  >
                    Tất cả (37)
                  </button>
                  <button
                    className="bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface font-label-md text-label-md rounded-full px-3 py-1 transition-colors"
                    type="button"
                  >
                    PC Thực hành (25)
                  </button>
                  <button
                    className="bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface font-label-md text-label-md rounded-full px-3 py-1 transition-colors"
                    type="button"
                  >
                    UPS Lưu điện (10)
                  </button>
                  <button
                    className="bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface font-label-md text-label-md rounded-full px-3 py-1 transition-colors"
                    type="button"
                  >
                    Thiết bị mạng (2)
                  </button>
                </div>
                <div className="font-body-sm text-secondary text-[13px]">
                  Hiển thị <span className="text-on-surface font-semibold">6</span> trong tổng số 37 thiết bị nghiệm thu
                </div>
              </div>
            </div>
            {/* Main Content Workspace: 2-Column Split (Table 8 cols + Inspector Drawer 4 cols) */}
            <div className="gap-space-lg grid grid-cols-1 items-start xl:grid-cols-12">
              {/* LEFT COLUMN (8 cols): Data Table of Devices */}
              <div className="bg-surface-container-lowest border-outline-variant/30 flex flex-col overflow-hidden rounded-xl border shadow-sm xl:col-span-8">
                {/* Table Header Bar */}
                <div className="px-space-md bg-surface-container-low/70 border-outline-variant/20 flex flex-wrap items-center justify-between gap-2 border-b py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[22px]">inventory_2</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Danh sách thiết bị nghiệm thu
                    </span>
                    <span className="font-label-sm bg-secondary-fixed text-on-secondary-fixed rounded-full px-2 py-0.5 text-[11px] font-bold">
                      37 MÁY ĐÃ CẤP MÃ
                    </span>
                  </div>
                  <div className="font-label-sm text-label-sm text-secondary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-outline text-[16px]">schedule</span>
                    <span>Cập nhật lúc: </span>
                    <span className="font-code-num text-code-num text-on-surface font-semibold">
                      08:45 AM - Hôm nay
                    </span>
                  </div>
                </div>
                {/* Table Responsive Container */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-surface-container-low text-secondary font-label-sm border-outline-variant/30 border-b text-[11px] tracking-wider uppercase">
                        <th className="px-space-md py-3 font-bold whitespace-nowrap">Mã QR / Tem</th>
                        <th className="px-space-md min-w-[210px] py-3 font-bold">Dòng máy &amp; Cấu hình</th>
                        <th className="px-space-md py-3 font-bold whitespace-nowrap">Vị trí bố trí</th>
                        <th className="px-space-md py-3 font-bold whitespace-nowrap">Nguồn tài trợ</th>
                        <th className="px-space-md py-3 font-bold whitespace-nowrap">Người dùng chính</th>
                        <th className="px-space-md py-3 font-bold whitespace-nowrap">Trạng thái</th>
                        <th className="px-space-md py-3 text-right font-bold whitespace-nowrap">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody className="divide-outline-variant/15 text-body-md text-on-surface divide-y">
                      {/* Row 1: Selected / Active Row */}
                      <tr className="bg-primary/5 hover:bg-primary/10 group border-l-primary cursor-pointer border-l-4 transition-colors">
                        <td className="px-space-md py-3.5">
                          <div className="flex items-center gap-2">
                            <div className="bg-primary/10 flex h-7 w-7 shrink-0 items-center justify-center rounded">
                              <span className="material-symbols-outlined text-primary text-[20px]">qr_code</span>
                            </div>
                            <div>
                              <div className="font-code-num text-primary text-[13px] font-bold">#QR-PC-ML01</div>
                              <span className="font-label-sm py-0.2 bg-tertiary-fixed text-on-tertiary-fixed inline-block rounded px-1.5 text-[10px] leading-tight font-bold">
                                Grade A
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-headline-sm text-headline-sm text-on-surface text-[14px] font-semibold">
                            HP ProDesk 400 G6 MT
                          </div>
                          <div className="font-body-sm text-secondary mt-0.5 text-[12px]">
                            Core i3-10100 • 8GB • SSD 256GB • Màn 21.5" IPS
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-on-surface text-[13px] font-medium">Phòng Tin học T2</div>
                          <div className="font-label-sm text-secondary text-[11px]">Bàn 01 - Dãy A</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-primary text-[13px] font-bold">Tập đoàn FPT</div>
                          <div className="font-label-sm text-secondary text-[11px]">Quỹ Hy Vọng #CERT-12</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-on-surface text-[13px] font-medium">Em Thào A Súa</div>
                          <div className="font-label-sm text-secondary text-[11px]">Lớp 8A (Trưởng nhóm tin)</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <span className="bg-surface-container-low text-tertiary font-label-sm border-tertiary/20 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[12px] font-bold">
                            <span className="bg-tertiary h-1.5 w-1.5 rounded-full"></span>
                            Hoạt động tốt
                          </span>
                        </td>
                        <td className="px-space-md py-3.5 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="text-secondary hover:text-primary hover:bg-surface-container rounded-lg p-1.5 transition-colors"
                              title="In tem mã QR"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">print</span>
                            </button>
                            <button
                              className="text-primary bg-primary-fixed/50 hover:bg-primary-fixed rounded-lg p-1.5 font-semibold transition-colors"
                              title="Đang xem chi tiết"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">visibility</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Row 2 */}
                      <tr className="hover:bg-surface-container-low/70 group cursor-pointer transition-colors">
                        <td className="px-space-md py-3.5">
                          <div className="flex items-center gap-2">
                            <div className="bg-surface-container-low flex h-7 w-7 shrink-0 items-center justify-center rounded">
                              <span className="material-symbols-outlined text-secondary text-[20px]">qr_code</span>
                            </div>
                            <div>
                              <div className="font-code-num text-on-surface text-[13px] font-bold">#QR-PC-ML02</div>
                              <span className="font-label-sm py-0.2 bg-tertiary-fixed text-on-tertiary-fixed inline-block rounded px-1.5 text-[10px] leading-tight font-bold">
                                Grade A
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-headline-sm text-headline-sm text-on-surface text-[14px] font-semibold">
                            HP ProDesk 400 G6 MT
                          </div>
                          <div className="font-body-sm text-secondary mt-0.5 text-[12px]">
                            Core i3-10100 • 8GB • SSD 256GB • Màn 21.5" IPS
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-on-surface text-[13px] font-medium">Phòng Tin học T2</div>
                          <div className="font-label-sm text-secondary text-[11px]">Bàn 02 - Dãy A</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-primary text-[13px] font-bold">Tập đoàn FPT</div>
                          <div className="font-label-sm text-secondary text-[11px]">Quỹ Hy Vọng #CERT-12</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-on-surface text-[13px] font-medium">Em Hà Thị Mai</div>
                          <div className="font-label-sm text-secondary text-[11px]">Lớp 8B</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <span className="bg-surface-container-low text-tertiary font-label-sm border-tertiary/20 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[12px] font-bold">
                            <span className="bg-tertiary h-1.5 w-1.5 rounded-full"></span>
                            Hoạt động tốt
                          </span>
                        </td>
                        <td className="px-space-md py-3.5 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="text-secondary hover:text-primary hover:bg-surface-container rounded-lg p-1.5 transition-colors"
                              title="In tem mã QR"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">print</span>
                            </button>
                            <button
                              className="text-secondary hover:text-primary hover:bg-surface-container rounded-lg p-1.5 transition-colors"
                              title="Xem chi tiết"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">visibility</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Row 3 */}
                      <tr className="hover:bg-surface-container-low/70 group cursor-pointer transition-colors">
                        <td className="px-space-md py-3.5">
                          <div className="flex items-center gap-2">
                            <div className="bg-surface-container-low flex h-7 w-7 shrink-0 items-center justify-center rounded">
                              <span className="material-symbols-outlined text-secondary text-[20px]">qr_code</span>
                            </div>
                            <div>
                              <div className="font-code-num text-on-surface text-[13px] font-bold">#QR-PC-ML05</div>
                              <span className="font-label-sm py-0.2 bg-tertiary-fixed text-on-tertiary-fixed inline-block rounded px-1.5 text-[10px] leading-tight font-bold">
                                Grade A
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-headline-sm text-headline-sm text-on-surface text-[14px] font-semibold">
                            HP ProDesk 400 G6 MT
                          </div>
                          <div className="font-body-sm text-secondary mt-0.5 text-[12px]">
                            Core i3-10100 • 8GB • SSD 256GB • Màn 21.5" IPS
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-on-surface text-[13px] font-medium">Phòng Tin học T2</div>
                          <div className="font-label-sm text-secondary text-[11px]">Bàn 05 - Dãy B</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-primary text-[13px] font-bold">VNPT Thanh Hoá</div>
                          <div className="font-label-sm text-secondary text-[11px]">Sóng &amp; Máy tính cho em</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-on-surface text-[13px] font-medium">Thầy Lò Văn Thuận</div>
                          <div className="font-label-sm text-secondary text-[11px]">Giáo viên phụ trách Tổ Tin</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <span className="bg-surface-container-low text-tertiary font-label-sm border-tertiary/20 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[12px] font-bold">
                            <span className="bg-tertiary h-1.5 w-1.5 rounded-full"></span>
                            Hoạt động tốt
                          </span>
                        </td>
                        <td className="px-space-md py-3.5 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="text-secondary hover:text-primary hover:bg-surface-container rounded-lg p-1.5 transition-colors"
                              title="In tem mã QR"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">print</span>
                            </button>
                            <button
                              className="text-secondary hover:text-primary hover:bg-surface-container rounded-lg p-1.5 transition-colors"
                              title="Xem chi tiết"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">visibility</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Row 4: UPS */}
                      <tr className="hover:bg-surface-container-low/70 group cursor-pointer transition-colors">
                        <td className="px-space-md py-3.5">
                          <div className="flex items-center gap-2">
                            <div className="bg-surface-container-low flex h-7 w-7 shrink-0 items-center justify-center rounded">
                              <span className="material-symbols-outlined text-secondary text-[20px]">qr_code</span>
                            </div>
                            <div>
                              <div className="font-code-num text-on-surface text-[13px] font-bold">#QR-UPS-ML01</div>
                              <span className="font-label-sm py-0.2 bg-secondary-container text-on-secondary-fixed-variant inline-block rounded px-1.5 text-[10px] leading-tight font-bold">
                                Lưu điện
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-headline-sm text-headline-sm text-on-surface text-[14px] font-semibold">
                            Santak Blazer 1000E Pro
                          </div>
                          <div className="font-body-sm text-secondary mt-0.5 text-[12px]">
                            1000VA / 600W • Line Interactive AVR chống sụt áp
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-on-surface text-[13px] font-medium">
                            Tủ rack nguồn phòng máy
                          </div>
                          <div className="font-label-sm text-secondary text-[11px]">Khu bảo vệ trung tâm</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-primary text-[13px] font-bold">Quỹ Bảo trợ GD</div>
                          <div className="font-label-sm text-secondary text-[11px]">MB Bank tài trợ độc quyền</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-on-surface text-[13px] font-medium">Bảo vệ nguồn chung</div>
                          <div className="font-label-sm text-secondary text-[11px]">Thầy Hà Văn Tiêu QL</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <span className="bg-surface-container-low text-tertiary font-label-sm border-tertiary/20 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[12px] font-bold">
                            <span className="bg-tertiary h-1.5 w-1.5 rounded-full"></span>
                            Ắc quy 100%
                          </span>
                        </td>
                        <td className="px-space-md py-3.5 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="text-secondary hover:text-primary hover:bg-surface-container rounded-lg p-1.5 transition-colors"
                              title="In tem mã QR"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">print</span>
                            </button>
                            <button
                              className="text-secondary hover:text-primary hover:bg-surface-container rounded-lg p-1.5 transition-colors"
                              title="Xem chi tiết"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">visibility</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Row 5: Switch Mạng */}
                      <tr className="hover:bg-surface-container-low/70 group cursor-pointer transition-colors">
                        <td className="px-space-md py-3.5">
                          <div className="flex items-center gap-2">
                            <div className="bg-surface-container-low flex h-7 w-7 shrink-0 items-center justify-center rounded">
                              <span className="material-symbols-outlined text-secondary text-[20px]">qr_code</span>
                            </div>
                            <div>
                              <div className="font-code-num text-on-surface text-[13px] font-bold">#QR-NET-ML01</div>
                              <span className="font-label-sm py-0.2 bg-secondary-container text-on-secondary-fixed-variant inline-block rounded px-1.5 text-[10px] leading-tight font-bold">
                                Mạng LAN
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-headline-sm text-headline-sm text-on-surface text-[14px] font-semibold">
                            TP-Link TL-SG1024D
                          </div>
                          <div className="font-body-sm text-secondary mt-0.5 text-[12px]">
                            24-Port Gigabit Rackmount Switch công nghiệp
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-on-surface text-[13px] font-medium">
                            Tủ trung tâm mạng T2
                          </div>
                          <div className="font-label-sm text-secondary text-[11px]">Rack Switch 01</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-primary text-[13px] font-bold">VNPT Mường Lát</div>
                          <div className="font-label-sm text-secondary text-[11px]">Cáp quang học đường 200Mbps</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-on-surface text-[13px] font-medium">
                            Hạ tầng mạng trường
                          </div>
                          <div className="font-label-sm text-secondary text-[11px]">Toàn bộ 25 PC kết nối</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <span className="bg-surface-container-low text-tertiary font-label-sm border-tertiary/20 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[12px] font-bold">
                            <span className="bg-tertiary h-1.5 w-1.5 rounded-full"></span>
                            Online 1.0 Gbps
                          </span>
                        </td>
                        <td className="px-space-md py-3.5 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="text-secondary hover:text-primary hover:bg-surface-container rounded-lg p-1.5 transition-colors"
                              title="In tem mã QR"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">print</span>
                            </button>
                            <button
                              className="text-secondary hover:text-primary hover:bg-surface-container rounded-lg p-1.5 transition-colors"
                              title="Xem chi tiết"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">visibility</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Row 6: Needs Maintenance */}
                      <tr className="hover:bg-surface-container-low/70 group cursor-pointer transition-colors">
                        <td className="px-space-md py-3.5">
                          <div className="flex items-center gap-2">
                            <div className="bg-surface-container-low flex h-7 w-7 shrink-0 items-center justify-center rounded">
                              <span className="material-symbols-outlined text-secondary text-[20px]">qr_code</span>
                            </div>
                            <div>
                              <div className="font-code-num text-on-surface text-[13px] font-bold">#QR-PC-ML12</div>
                              <span className="font-label-sm py-0.2 bg-tertiary-fixed text-on-tertiary-fixed inline-block rounded px-1.5 text-[10px] leading-tight font-bold">
                                Grade A-
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-headline-sm text-headline-sm text-on-surface text-[14px] font-semibold">
                            HP ProDesk 400 G6 MT
                          </div>
                          <div className="font-body-sm text-secondary mt-0.5 text-[12px]">
                            Core i3-10100 • 8GB • SSD 256GB • Màn 21.5" IPS
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-on-surface text-[13px] font-medium">Phòng Tin học T2</div>
                          <div className="font-label-sm text-secondary text-[11px]">Bàn 12 - Dãy C</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-primary text-[13px] font-bold">Tập đoàn FPT</div>
                          <div className="font-label-sm text-secondary text-[11px]">Quỹ Hy Vọng #CERT-12</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="font-body-sm text-on-surface text-[13px] font-medium">Em Lò Văn Chiến</div>
                          <div className="font-label-sm text-secondary text-[11px]">Lớp 9A</div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <span className="bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-bold">
                            <span className="bg-secondary h-1.5 w-1.5 rounded-full"></span>
                            Cần vệ sinh quạt gió
                          </span>
                        </td>
                        <td className="px-space-md py-3.5 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="text-error hover:bg-error-container/30 rounded-lg p-1.5 transition-colors"
                              title="Báo sự cố kỹ thuật"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">report_problem</span>
                            </button>
                            <button
                              className="text-secondary hover:text-primary hover:bg-surface-container rounded-lg p-1.5 transition-colors"
                              title="Xem chi tiết"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">visibility</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Table Pagination & Footer */}
                <div className="px-space-md bg-surface-container-low/70 border-outline-variant/20 gap-space-sm mt-auto flex flex-col items-center justify-between border-t py-3.5 sm:flex-row">
                  <div className="font-body-sm text-secondary text-[13px]">
                    Đang hiển thị <span className="text-on-surface font-semibold">1 - 6</span> của{" "}
                    <span className="text-on-surface font-semibold">37</span> thiết bị đã kiểm kê thực tế
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      className="text-secondary hover:bg-surface-container-lowest border-outline-variant/30 flex h-8 w-8 items-center justify-center rounded-lg border disabled:opacity-40"
                      disabled
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                    </button>
                    <button
                      className="font-label-md text-label-md bg-primary text-on-primary flex h-8 w-8 items-center justify-center rounded-lg font-bold shadow-sm"
                      type="button"
                    >
                      1
                    </button>
                    <button
                      className="font-label-md text-label-md text-on-surface hover:bg-surface-container-lowest border-outline-variant/30 flex h-8 w-8 items-center justify-center rounded-lg border transition-colors"
                      type="button"
                    >
                      2
                    </button>
                    <button
                      className="font-label-md text-label-md text-on-surface hover:bg-surface-container-lowest border-outline-variant/30 flex h-8 w-8 items-center justify-center rounded-lg border transition-colors"
                      type="button"
                    >
                      3
                    </button>
                    <span className="text-secondary text-body-sm px-1.5 font-semibold">...</span>
                    <button
                      className="font-label-md text-label-md text-on-surface hover:bg-surface-container-lowest border-outline-variant/30 flex h-8 w-8 items-center justify-center rounded-lg border transition-colors"
                      type="button"
                    >
                      7
                    </button>
                    <button
                      className="text-secondary hover:bg-surface-container-lowest border-outline-variant/30 flex h-8 w-8 items-center justify-center rounded-lg border transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* RIGHT COLUMN (4 cols): Detailed Device Inspection Drawer / Card View */}
              <div className="space-y-space-md xl:col-span-4">
                {/* Selected Device Detail Card */}
                <div className="bg-surface-container-lowest border-outline-variant/30 overflow-hidden rounded-xl border shadow-sm">
                  <div className="p-space-md bg-surface-container-low/70 border-outline-variant/20 flex items-center justify-between border-b">
                    <div className="flex items-center gap-2">
                      <span className="bg-tertiary h-2.5 w-2.5 animate-pulse rounded-full"></span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Chi Tiết Thiết Bị Đang Chọn
                      </span>
                    </div>
                    <span className="font-code-num text-code-num text-primary bg-primary-fixed rounded px-2.5 py-0.5 font-bold shadow-sm">
                      #QR-PC-ML01
                    </span>
                  </div>
                  {/* Classroom Photo */}
                  <div className="bg-surface-container relative h-44 w-full overflow-hidden">
                    <img
                      alt="Phòng tin học mới lắp đặt tại trường Phổ thông Dân tộc Bán trú THCS Mường Lát vùng cao Thanh Hoá với các máy tính để bàn HP ProDesk màn hình phẳng 21.5 inch đang mở bài giảng trực tuyến, các em học sinh dân tộc H'Mông và Thái đang chăm chú thao tác, ánh sáng tự nhiên qua cửa sổ nhìn ra đồi núi."
                      className="h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                    />
                    <div className="from-on-surface/85 via-on-surface/20 absolute inset-0 bg-gradient-to-t to-transparent"></div>
                    <div className="text-on-primary absolute right-3.5 bottom-3 left-3.5 flex items-center justify-between">
                      <div>
                        <div className="font-headline-sm text-headline-sm text-surface leading-tight font-bold">
                          Bàn 01 - Dãy A
                        </div>
                        <div className="font-body-sm text-surface-variant text-[12px]">
                          Phòng thực hành Tin học Tầng 2
                        </div>
                      </div>
                      <span className="font-label-sm bg-tertiary text-on-tertiary flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        Đã test 4h liên tục
                      </span>
                    </div>
                  </div>
                  <div className="p-space-md space-y-space-md">
                    {/* QR Code & RFID Verification Card */}
                    <div className="gap-space-md p-space-sm bg-surface-container-low border-outline-variant/30 flex items-center rounded-xl border">
                      <div className="bg-surface-container-lowest border-outline-variant/20 flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border p-2 shadow-sm">
                        <svg className="text-on-surface h-full w-full" fill="currentColor" viewBox="0 0 100 100">
                          <rect
                            fill="none"
                            height="28"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="6"
                            width="28"
                            x="5"
                            y="5"
                          ></rect>
                          <rect height="12" width="12" x="13" y="13"></rect>
                          <rect
                            fill="none"
                            height="28"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="6"
                            width="28"
                            x="67"
                            y="5"
                          ></rect>
                          <rect height="12" width="12" x="75" y="13"></rect>
                          <rect
                            fill="none"
                            height="28"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="6"
                            width="28"
                            x="5"
                            y="67"
                          ></rect>
                          <rect height="12" width="12" x="13" y="75"></rect>
                          <rect height="16" width="8" x="42" y="10"></rect>
                          <rect height="8" width="16" x="42" y="38"></rect>
                          <rect height="8" width="16" x="10" y="42"></rect>
                          <rect height="8" width="18" x="72" y="42"></rect>
                          <rect height="25" width="8" x="42" y="65"></rect>
                          <rect height="8" width="25" x="65" y="65"></rect>
                          <rect height="8" width="16" x="65" y="82"></rect>
                          <rect height="15" width="8" x="85" y="75"></rect>
                        </svg>
                      </div>
                      <div className="min-w-0 space-y-1">
                        <div className="font-label-sm text-secondary text-[11px] font-semibold tracking-wider uppercase">
                          Mã định danh PoD RFID
                        </div>
                        <div className="font-code-num text-on-surface truncate text-[14px] font-bold">
                          VN-EDUSHARE-ML01-88
                        </div>
                        <div className="font-body-sm text-secondary text-[12px]">Trường PTDTBT THCS Mường Lát</div>
                        <div className="font-label-sm text-primary flex items-center gap-1 text-[11px] font-bold">
                          <span className="material-symbols-outlined text-[15px]">verified</span>
                          <span>Chứng thư số SHA-256 xác thực trên EduShare Ledger</span>
                        </div>
                      </div>
                    </div>
                    {/* Hardware Specs details */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary font-bold tracking-wider uppercase">
                          Cấu hình &amp; Phần mềm Giáo dục
                        </span>
                        <span className="font-label-sm text-tertiary bg-surface-container-low rounded px-2 py-0.5 text-[11px] font-semibold">
                          Grade A EduShare
                        </span>
                      </div>
                      <div className="bg-surface-container-low font-body-sm border-outline-variant/20 space-y-2 rounded-xl border p-3 text-[13px]">
                        <div className="border-outline-variant/15 flex justify-between border-b py-0.5">
                          <span className="text-secondary">Vi xử lý (CPU):</span>
                          <span className="text-on-surface font-medium">Intel Core i3-10100 (4C/8T, 4.3GHz)</span>
                        </div>
                        <div className="border-outline-variant/15 flex justify-between border-b py-0.5">
                          <span className="text-secondary">Bộ nhớ RAM:</span>
                          <span className="text-on-surface font-medium">8GB DDR4-2666MHz (Hỗ trợ 32GB)</span>
                        </div>
                        <div className="border-outline-variant/15 flex justify-between border-b py-0.5">
                          <span className="text-secondary">Ổ cứng lưu trữ:</span>
                          <span className="text-on-surface font-medium">SSD NVMe 256GB M.2 PCIe</span>
                        </div>
                        <div className="border-outline-variant/15 flex justify-between border-b py-0.5">
                          <span className="text-secondary">Màn hình hiển thị:</span>
                          <span className="text-on-surface font-medium">HP P22v G4 (21.5 inch FHD 1080p IPS)</span>
                        </div>
                        <div className="border-outline-variant/15 flex justify-between border-b py-0.5">
                          <span className="text-secondary">Hệ điều hành:</span>
                          <span className="text-primary font-semibold">EduOS Vietnam Core v3.2</span>
                        </div>
                        <div className="flex justify-between py-0.5">
                          <span className="text-secondary">Ứng dụng cài sẵn:</span>
                          <span className="text-on-surface font-medium">Scratch 3.0, Python 3, SGK Số 6-9</span>
                        </div>
                      </div>
                    </div>
                    {/* Device Lifecycle Timeline (Audit Trail) */}
                    <div className="space-y-2.5">
                      <span className="font-label-sm text-label-sm text-secondary font-bold tracking-wider uppercase">
                        Vòng đời phân bổ &amp; Kiểm định
                      </span>
                      <div className="before:bg-outline-variant/40 relative space-y-3.5 pl-6 before:absolute before:top-2 before:bottom-2 before:left-2 before:w-0.5">
                        {/* Step 1 */}
                        <div className="relative">
                          <div className="bg-tertiary text-on-tertiary absolute top-0.5 -left-6 flex h-4 w-4 items-center justify-center rounded-full shadow-sm">
                            <span className="material-symbols-outlined text-[10px]">check</span>
                          </div>
                          <div className="font-label-md text-on-surface text-[13px] font-bold">
                            15/10/2024: Tiếp nhận từ FPT
                          </div>
                          <div className="font-body-sm text-secondary mt-0.5 text-[12px]">
                            Bàn giao tại Tổng kho EduShare Hà Nội, đợt tài trợ #FPT-2024.
                          </div>
                        </div>
                        {/* Step 2 */}
                        <div className="relative">
                          <div className="bg-tertiary text-on-tertiary absolute top-0.5 -left-6 flex h-4 w-4 items-center justify-center rounded-full shadow-sm">
                            <span className="material-symbols-outlined text-[10px]">check</span>
                          </div>
                          <div className="font-label-md text-on-surface text-[13px] font-bold">
                            18/10/2024: Kiểm định Grade A &amp; Nạp EduOS
                          </div>
                          <div className="font-body-sm text-secondary mt-0.5 text-[12px]">
                            Chạy thử StressTest 4h, nạp EduOS và SGK số lớp 6-9.
                          </div>
                        </div>
                        {/* Step 3 */}
                        <div className="relative">
                          <div className="bg-tertiary text-on-tertiary absolute top-0.5 -left-6 flex h-4 w-4 items-center justify-center rounded-full shadow-sm">
                            <span className="material-symbols-outlined text-[10px]">check</span>
                          </div>
                          <div className="font-label-md text-on-surface text-[13px] font-bold">
                            22/10/2024: Đội TNV vận chuyển vượt đèo Mường Lát
                          </div>
                          <div className="font-body-sm text-secondary mt-0.5 text-[12px]">
                            Vận chuyển an toàn qua dốc Sài Khao đến điểm trường Tam Chung.
                          </div>
                        </div>
                        {/* Step 4 */}
                        <div className="relative">
                          <div className="bg-primary text-on-primary absolute top-0.5 -left-6 flex h-4 w-4 items-center justify-center rounded-full shadow-sm">
                            <span className="material-symbols-outlined text-[10px]">verified</span>
                          </div>
                          <div className="font-label-md text-primary text-[13px] font-bold">
                            24/10/2024: Nghiệm thu bàn giao &amp; ký số PoD
                          </div>
                          <div className="font-body-sm text-secondary mt-0.5 text-[12px]">
                            Nghiệm thu hoàn tất. Thầy Hà Văn Tiêu xác nhận số hiệu #POD-2024-ML08.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Action buttons in Inspector Drawer */}
                    <div className="border-outline-variant/20 space-y-2 border-t pt-2">
                      <button
                        className="bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md shadow-primary/20 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 font-bold shadow-sm transition-all"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">build</span>
                        <span>Gửi yêu cầu bảo trì / Thay linh kiện</span>
                      </button>
                      <button
                        className="bg-surface-container-low text-on-surface hover:bg-surface-container border-outline-variant/30 font-label-md text-label-md flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2 font-semibold transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-secondary text-[18px]">description</span>
                        <span>Tải biên bản bàn giao PoD (#POD-2024-ML08)</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Support Card for Teacher */}
                <div className="p-space-md bg-surface-container-high/40 border-outline-variant/30 space-y-2 rounded-xl border">
                  <div className="text-on-surface font-headline-sm text-headline-sm flex items-center gap-2 font-bold">
                    <span className="material-symbols-outlined text-primary text-[22px]">help_outline</span>
                    <span>Hỗ trợ kỹ thuật tại chỗ</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    Khi phát hiện máy tính có hiện tượng quạt kêu to, chậm hoặc lỗi nguồn, Thầy/Cô hãy chụp ảnh màn hình
                    và bấm nút "Gửi yêu cầu bảo trì" để Kỹ sư EduShare Thanh Hoá cử cán bộ hỗ trợ ngay.
                  </p>
                </div>
              </div>
            </div>
            {/* 3-Step EduShare Warranty & Support Process (Footer Card) */}
            <div className="bg-surface-container-lowest p-space-lg border-outline-variant/30 space-y-space-md rounded-xl border shadow-sm">
              <div className="gap-space-sm border-surface-container-low flex flex-col justify-between border-b pb-1 md:flex-row md:items-center">
                <div>
                  <h2 className="font-headline-sm text-on-surface text-[18px] font-bold md:text-[20px]">
                    Quy Trình Bảo Trợ Kỹ Thuật Chuẩn Cấp Quốc Gia EduShare Vietnam
                  </h2>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5">
                    Cam kết đồng hành 36 tháng giúp phòng máy luôn duy trì tỉ lệ hoạt động trên 95% tại các trường vùng
                    khó khăn.
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed rounded-full px-3 py-1 font-bold">
                    Thời gian phản hồi SLA &lt; 2h
                  </span>
                  <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed rounded-full px-3 py-1 font-bold">
                    Hotline: 1800 6868 Miễn cước
                  </span>
                </div>
              </div>
              <div className="gap-space-md grid grid-cols-1 md:grid-cols-3">
                {/* Step 1 */}
                <div className="p-space-md bg-surface-container-low/70 border-outline-variant/20 hover:border-primary/30 space-y-2 rounded-xl border transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="bg-primary text-on-primary font-code-num text-code-num flex h-8 w-8 items-center justify-center rounded-lg font-bold shadow-sm">
                      01
                    </div>
                    <span className="material-symbols-outlined text-primary text-[24px]">contact_support</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface pt-1 text-[15px] font-bold">
                    Báo sự cố trực tuyến qua Cổng
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    Nhà trường quét mã QR dán trên thùng máy, mô tả hiện tượng kèm ảnh chụp gửi trực tiếp lên hệ thống
                    quản lý tài sản học đường.
                  </p>
                </div>
                {/* Step 2 */}
                <div className="p-space-md bg-surface-container-low/70 border-outline-variant/20 hover:border-primary/30 space-y-2 rounded-xl border transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="bg-primary text-on-primary font-code-num text-code-num flex h-8 w-8 items-center justify-center rounded-lg font-bold shadow-sm">
                      02
                    </div>
                    <span className="material-symbols-outlined text-primary text-[24px]">support_agent</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface pt-1 text-[15px] font-bold">
                    Hỗ trợ kỹ thuật từ xa &amp; gửi linh kiện hỏa tốc (48h)
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    Kỹ sư EduShare kết nối UltraViewer xử lý phần mềm, hoặc bưu điện gửi linh kiện thay thế 1-đổi-1
                    (nguồn, RAM, SSD) hỏa tốc đến Mường Lát.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="p-space-md bg-surface-container-low/70 border-outline-variant/20 hover:border-primary/30 space-y-2 rounded-xl border transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="bg-tertiary text-on-tertiary font-code-num text-code-num flex h-8 w-8 items-center justify-center rounded-lg font-bold shadow-sm">
                      03
                    </div>
                    <span className="material-symbols-outlined text-tertiary text-[24px]">task_alt</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface pt-1 text-[15px] font-bold">
                    Nghiệm thu, ký số biên bản &amp; cập nhật hồ sơ tài sản
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    Sau khi máy hoạt động bình thường, đại diện BGH xác nhận qua mã OTP điện thoại để hệ thống gia hạn
                    bảo hành và đóng phiếu bảo trì.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
