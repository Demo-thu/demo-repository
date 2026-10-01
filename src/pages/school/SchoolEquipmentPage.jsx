import React from "react";
import { Link } from "react-router-dom";

export default function SchoolEquipmentPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed flex">
      {/* Left Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest border-r border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* App Brand Header */}
          <div className="px-space-lg pt-space-lg pb-space-md border-b border-surface-container-low">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-on-primary shadow-sm shadow-primary/20">
                <span className="material-symbols-outlined text-[24px]">
                  school
                </span>
              </div>
              <div>
                <div className="flex items-center gap-space-xs">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">
                    EduShare VN
                  </span>
                  <span className="font-label-sm text-[10px] bg-primary-fixed text-on-primary-fixed px-1.5 py-0.5 rounded-full font-bold">
                    CORE
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-tertiary"></span>
                  <span className="font-label-sm text-label-sm text-secondary">
                    Hệ thống Số hóa 63 Tỉnh
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Main Navigation Menu */}
          <nav className="px-space-md py-space-md space-y-space-md">
            {/* Section: CỔNG TRƯỜNG HỌC */}
            <div className="space-y-1">
              <div className="px-space-sm py-1 font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                Cổng Trường Học
              </div>
              <div className="space-y-0.5">
                <Link
                  className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-md text-[14px]"
                  to="/school/request"
                >
                  <span className="material-symbols-outlined text-[20px] text-secondary">
                    assignment_add
                  </span>
                  <span>Yêu cầu tài trợ</span>
                </Link>
                <Link
                  className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-md text-[14px]"
                  to="/school/student-details"
                >
                  <span className="material-symbols-outlined text-[20px] text-secondary">
                    groups
                  </span>
                  <span>Học sinh tiếp nhận</span>
                </Link>
                <Link
                  className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-md text-[14px]"
                  to="/school/pod"
                >
                  <span className="material-symbols-outlined text-[20px] text-secondary">
                    fact_check
                  </span>
                  <span>Biên bản bàn giao (PoD)</span>
                </Link>
              </div>
            </div>
            {/* Section: KHO & TIẾP NHẬN */}
            <div className="space-y-1">
              <div className="px-space-sm py-1 font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                Kho &amp; Tiếp Nhận
              </div>
              <div className="space-y-0.5">
                {/* Active item correctly highlighted */}
                <Link
                  className="flex items-center gap-space-sm px-space-sm py-2.5 bg-primary-container text-on-primary font-medium rounded-lg shadow-sm transition-all"
                  to="/school/equipment"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    devices
                  </span>
                  <span className="font-semibold">
                    Danh mục thiết bị phân bổ
                  </span>
                </Link>
                <Link
                  className="flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-md text-[14px]"
                  to="/school/delivery-history"
                >
                  <span className="material-symbols-outlined text-[20px] text-secondary">
                    history_edu
                  </span>
                  <span>Lịch sử đợt giao</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
        {/* Sidebar Footer Support Hotline Box */}
        <div className="p-space-md mx-space-md mb-space-md bg-surface-container-low rounded-xl border border-outline-variant/30">
          <div className="flex items-start gap-space-sm">
            <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[20px]">
                support_agent
              </span>
            </div>
            <div>
              <div className="font-label-md text-label-md text-on-surface font-semibold">
                Hỗ trợ kỹ thuật 24/7
              </div>
              <div className="font-code-num text-[15px] text-primary font-bold tracking-wide">
                1800 6868
              </div>
              <div className="font-body-sm text-[11px] text-secondary mt-0.5">
                Miễn phí cước cuộc gọi
              </div>
              <div className="font-label-sm text-[10px] text-outline mt-1">
                Phiên bản Quốc gia v2.8.4
              </div>
            </div>
          </div>
        </div>
      </aside>
      {/* Main Content Wrapper */}
      <div className="pl-72 min-h-screen flex flex-col flex-1">
        {/* Top Header Bar */}
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/95 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_1px_8px_rgba(0,0,0,0.03)] z-40 px-gutter-desktop flex items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative flex items-center w-full">
              <span className="material-symbols-outlined absolute left-3.5 text-secondary text-[20px]">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-transparent focus:border-primary/30 rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Tìm kiếm mã thiết bị, học sinh, số quyết định..."
                type="text"
              />
            </div>
          </div>
          {/* Right Header Actions */}
          <div className="flex items-center gap-space-md ml-space-md">
            {/* School & Teacher Info Badge */}
            <div className="hidden md:flex flex-col text-right">
              <div className="flex items-center justify-end gap-1.5">
                <span className="font-label-sm text-[11px] bg-secondary-container text-on-secondary-fixed-variant px-2 py-0.5 rounded font-semibold">
                  Đại diện Trường học (BGH)
                </span>
                <span className="font-body-md text-body-md text-on-surface font-bold">
                  Thầy Hà Văn Tiêu
                </span>
              </div>
              <span className="font-body-sm text-[12px] text-secondary">
                Trường PTDTBT THCS Mường Lát
              </span>
            </div>
            <div className="h-8 w-px bg-outline-variant/30 hidden md:block"></div>
            {/* Notification Bell */}
            <button
              className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors relative"
              title="Thông báo hệ thống"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">
                notifications
              </span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span>
            </button>
            {/* Account Avatar */}
            <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-sm shadow-sm ring-2 ring-primary/20 cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">
                person
              </span>
            </div>
          </div>
        </header>
        {/* Main Page Content */}
        <main className="w-full pt-16 bg-surface flex-1">
          <div className="px-gutter-desktop py-space-lg space-y-space-lg max-w-[1600px] mx-auto w-full">
            {/* Top Breadcrumbs & Page Action Header (Wide layout, prevents text squishing/vertical wrap) */}
            <div className="w-full pb-space-md border-b border-outline-variant/20 flex flex-col gap-4">
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 font-label-sm text-[12px] text-secondary">
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1 shrink-0"
                  to="#"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    home
                  </span>
                  <span>Cổng Trường Học</span>
                </Link>
                <span className="material-symbols-outlined text-[14px] text-outline shrink-0">
                  chevron_right
                </span>
                <span className="text-secondary shrink-0">
                  Kho &amp; Tiếp nhận
                </span>
                <span className="material-symbols-outlined text-[14px] text-outline shrink-0">
                  chevron_right
                </span>
                <span className="text-primary font-semibold shrink-0">
                  Danh mục thiết bị phân bổ
                </span>
              </nav>
              {/* Title & Action Bar */}
              <div className="flex flex-col 2xl:flex-row 2xl:items-center justify-between gap-4 w-full">
                <div className="space-y-1.5 min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="font-headline-lg text-[26px] md:text-[30px] font-bold text-on-surface tracking-tight whitespace-normal">
                      Danh Mục Thiết Bị Phân Bổ &amp; Quản Lý Tài Sản Học Đường
                    </h1>
                    <span className="font-label-sm text-[11px] bg-primary-fixed text-on-primary-fixed px-2.5 py-0.5 rounded-full font-bold tracking-wider shrink-0 uppercase">
                      Cấp cơ sở
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-secondary max-w-4xl leading-relaxed">
                    Toàn bộ danh mục máy tính, thiết bị điện và hạ tầng mạng
                    được các tập đoàn, nhà hảo tâm tài trợ theo các đợt vận động
                    giáo dục đã bàn giao chính thức cho Trường PTDTBT THCS Mường
                    Lát.
                  </p>
                </div>
                {/* Actions Toolbar */}
                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <button
                    className="inline-flex items-center gap-1.5 h-10 px-3.5 bg-surface-container-lowest text-on-surface hover:bg-surface-container-low border border-outline-variant/40 font-label-md text-label-md rounded-lg shadow-sm transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      download
                    </span>
                    <span>Xuất kiểm kê tài sản (Excel/PDF)</span>
                  </button>
                  <button
                    className="inline-flex items-center gap-1.5 h-10 px-3.5 bg-surface-container-lowest text-on-surface hover:bg-surface-container-low border border-outline-variant/40 font-label-md text-label-md rounded-lg shadow-sm transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      qr_code_2
                    </span>
                    <span>In mã QR / Tem nhãn hàng loạt</span>
                  </button>
                  <button
                    className="inline-flex items-center gap-1.5 h-10 px-4 bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md rounded-lg shadow-sm shadow-primary/20 transition-all font-semibold"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      qr_code_scanner
                    </span>
                    <span>Quét mã QR kiểm tra nhanh</span>
                  </button>
                </div>
              </div>
            </div>
            {/* 4 Bento Overview Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {/* Metric 1: Tổng thiết bị */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-outline-variant/30 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-lg bg-primary-fixed/50 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      devices
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-semibold">
                    100% Đạt chuẩn đợt 1
                  </span>
                </div>
                <div className="mt-space-md">
                  <div className="font-headline-xl text-[36px] text-on-surface font-bold tracking-tight">
                    37
                  </div>
                  <div className="font-label-md text-label-md text-secondary font-medium mt-0.5">
                    Tổng thiết bị đã nhận bàn giao
                  </div>
                  <div className="font-body-sm text-[13px] text-on-surface-variant mt-1.5 leading-snug">
                    25 PC HP ProDesk • 10 Santak UPS • 2 Cisco Switch
                  </div>
                </div>
                <div className="mt-space-md pt-2 bg-surface-container-low/60 -mx-space-md -mb-space-md px-space-md py-2 flex items-center justify-between text-secondary font-label-sm text-[12px] border-t border-surface-container-low">
                  <span>Tiếp nhận bàn giao đợt 1</span>
                  <span className="font-code-num text-code-num text-on-surface font-bold">
                    24/10/2024
                  </span>
                </div>
              </div>
              {/* Metric 2: Hoạt động tốt */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-outline-variant/30 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-lg bg-surface-container-low flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-[24px]">
                      check_circle
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container-low text-tertiary font-semibold flex items-center gap-1.5 border border-tertiary/20">
                    <span className="w-2 h-2 rounded-full bg-tertiary"></span>{" "}
                    97.3% sẵn sàng
                  </span>
                </div>
                <div className="mt-space-md">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-headline-xl text-[36px] text-on-surface font-bold tracking-tight">
                      36
                    </span>
                    <span className="font-headline-md text-headline-md text-secondary font-medium">
                      / 37 máy
                    </span>
                  </div>
                  <div className="font-label-md text-label-md text-secondary font-medium mt-0.5">
                    Tình trạng vận hành tốt
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full mt-2.5 overflow-hidden">
                    <div
                      className="bg-tertiary h-full rounded-full"
                      style={{ width: "97.3%" }}
                    ></div>
                  </div>
                </div>
                <div className="mt-space-md pt-2 bg-surface-container-low/60 -mx-space-md -mb-space-md px-space-md py-2 flex items-center justify-between text-secondary font-label-sm text-[12px] border-t border-surface-container-low">
                  <span>01 máy đang bảo dưỡng nguồn</span>
                  <span className="text-tertiary font-bold">Grade A chuẩn</span>
                </div>
              </div>
              {/* Metric 3: Học sinh được phân bổ */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-outline-variant/30 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-lg bg-primary-fixed/40 flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-[24px]">
                      school
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-semibold">
                    12 lớp THCS
                  </span>
                </div>
                <div className="mt-space-md">
                  <div className="font-headline-xl text-[36px] text-on-surface font-bold tracking-tight">
                    412
                  </div>
                  <div className="font-label-md text-label-md text-secondary font-medium mt-0.5">
                    Học sinh được phân bổ học tập
                  </div>
                  <div className="font-body-sm text-[13px] text-on-surface-variant mt-1.5 truncate">
                    Con em đồng bào H'Mông, Thái (Bán trú)
                  </div>
                </div>
                <div className="mt-space-md pt-2 bg-surface-container-low/60 -mx-space-md -mb-space-md px-space-md py-2 flex items-center justify-between text-secondary font-label-sm text-[12px] border-t border-surface-container-low">
                  <span>Định mức máy tính</span>
                  <span className="font-code-num text-code-num text-on-surface font-bold">
                    18 giờ / tuần
                  </span>
                </div>
              </div>
              {/* Metric 4: Bảo hành & Bảo trợ */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-outline-variant/30 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      verified_user
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-primary-fixed-variant font-semibold">
                    VNPT &amp; FPT bảo trợ
                  </span>
                </div>
                <div className="mt-space-md">
                  <div className="font-headline-xl text-[36px] text-on-surface font-bold tracking-tight">
                    36 Thg
                  </div>
                  <div className="font-label-md text-label-md text-secondary font-medium mt-0.5">
                    Bảo hành chính hãng 1-đổi-1
                  </div>
                  <div className="font-body-sm text-[13px] text-on-surface-variant mt-1.5 truncate">
                    Kỹ thuật viên EduShare hỗ trợ trực tuyến 24/7
                  </div>
                </div>
                <div className="mt-space-md pt-2 bg-surface-container-low/60 -mx-space-md -mb-space-md px-space-md py-2 flex items-center justify-between text-secondary font-label-sm text-[12px] border-t border-surface-container-low">
                  <span>Hỗ trợ tại chỗ đến</span>
                  <span className="font-code-num text-code-num text-on-surface font-bold">
                    Tháng 10/2027
                  </span>
                </div>
              </div>
            </div>
            {/* Search & Multi-Filter Controls Bar */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/30 space-y-space-md">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm">
                {/* Search field */}
                <div className="md:col-span-4 relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3.5 text-secondary text-[20px]">
                    search
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-transparent focus:border-primary/30 rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Tìm theo mã QR tem, số serial phần cứng, vị trí bàn học, tên học sinh..."
                    type="text"
                  />
                </div>
                {/* Filter 1: Đợt tài trợ */}
                <div className="md:col-span-2">
                  <select
                    className="w-full px-3 py-2 bg-surface-container-low border border-transparent focus:border-primary/30 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
                    defaultValue="Tất cả đợt tài trợ"
                  >
                    <option value="Tất cả đợt tài trợ">
                      Tất cả đợt tài trợ
                    </option>
                    <option value="Đợt IV/2024 Mường Lát">
                      Đợt IV/2024 Mường Lát
                    </option>
                    <option value="Đợt 1 - Chắp cánh Mường Lát 2024">
                      Đợt 1 - Chắp cánh Mường Lát 2024
                    </option>
                    <option value="Quỹ Hy Vọng FPT">Quỹ Hy Vọng FPT</option>
                    <option value="Hạ tầng VNPT Thanh Hoá">
                      Hạ tầng VNPT Thanh Hoá
                    </option>
                  </select>
                </div>
                {/* Filter 2: Loại thiết bị */}
                <div className="md:col-span-2">
                  <select
                    className="w-full px-3 py-2 bg-surface-container-low border border-transparent focus:border-primary/30 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
                    defaultValue="Tất cả loại thiết bị"
                  >
                    <option value="Tất cả loại thiết bị">
                      Tất cả loại thiết bị
                    </option>
                    <option value="PC để bàn (HP Desktop)">
                      PC để bàn (HP Desktop)
                    </option>
                    <option value="Bộ lưu điện (UPS Santak)">
                      Bộ lưu điện (UPS Santak)
                    </option>
                    <option value="Thiết bị mạng (Switch TP-Link/Cisco)">
                      Thiết bị mạng (Switch TP-Link/Cisco)
                    </option>
                    <option value="Máy tính bảng học tập">
                      Máy tính bảng học tập
                    </option>
                  </select>
                </div>
                {/* Filter 3: Trạng thái */}
                <div className="md:col-span-2">
                  <select
                    className="w-full px-3 py-2 bg-surface-container-low border border-transparent focus:border-primary/30 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
                    defaultValue="Tất cả trạng thái"
                  >
                    <option value="Tất cả trạng thái">Tất cả trạng thái</option>
                    <option value="Hoạt động tốt (Grade A)">
                      Hoạt động tốt (Grade A)
                    </option>
                    <option value="Cần bảo trì / Vệ sinh">
                      Cần bảo trì / Vệ sinh
                    </option>
                    <option value="Đang kiểm tra kỹ thuật">
                      Đang kiểm tra kỹ thuật
                    </option>
                  </select>
                </div>
                {/* Filter 4: Vị trí phòng máy */}
                <div className="md:col-span-2">
                  <select
                    className="w-full px-3 py-2 bg-surface-container-low border border-transparent focus:border-primary/30 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
                    defaultValue="Tất cả vị trí phòng máy"
                  >
                    <option value="Tất cả vị trí phòng máy">
                      Tất cả vị trí phòng máy
                    </option>
                    <option value="Phòng Tin học T2 - Dãy A">
                      Phòng Tin học T2 - Dãy A
                    </option>
                    <option value="Phòng Tin học T2 - Dãy B">
                      Phòng Tin học T2 - Dãy B
                    </option>
                    <option value="Phòng Tin học T2 - Dãy C">
                      Phòng Tin học T2 - Dãy C
                    </option>
                    <option value="Tủ trung tâm mạng T2">
                      Tủ trung tâm mạng T2
                    </option>
                    <option value="Ký túc xá học sinh bán trú">
                      Ký túc xá học sinh bán trú
                    </option>
                  </select>
                </div>
              </div>
              {/* Quick Tabs / Categorization */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-surface-container-low">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-label-sm text-label-sm text-secondary font-medium">
                    Phân loại nhanh:
                  </span>
                  <button
                    className="px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-sm"
                    type="button"
                  >
                    Tất cả (37)
                  </button>
                  <button
                    className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface font-label-md text-label-md transition-colors"
                    type="button"
                  >
                    PC Thực hành (25)
                  </button>
                  <button
                    className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface font-label-md text-label-md transition-colors"
                    type="button"
                  >
                    UPS Lưu điện (10)
                  </button>
                  <button
                    className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface font-label-md text-label-md transition-colors"
                    type="button"
                  >
                    Thiết bị mạng (2)
                  </button>
                </div>
                <div className="font-body-sm text-[13px] text-secondary">
                  Hiển thị{" "}
                  <span className="font-semibold text-on-surface">6</span> trong
                  tổng số 37 thiết bị nghiệm thu
                </div>
              </div>
            </div>
            {/* Main Content Workspace: 2-Column Split (Table 8 cols + Inspector Drawer 4 cols) */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
              {/* LEFT COLUMN (8 cols): Data Table of Devices */}
              <div className="xl:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col">
                {/* Table Header Bar */}
                <div className="px-space-md py-3.5 bg-surface-container-low/70 border-b border-outline-variant/20 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[22px]">
                      inventory_2
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Danh sách thiết bị nghiệm thu
                    </span>
                    <span className="font-label-sm text-[11px] bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full font-bold">
                      37 MÁY ĐÃ CẤP MÃ
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-secondary">
                    <span className="material-symbols-outlined text-[16px] text-outline">
                      schedule
                    </span>
                    <span>Cập nhật lúc: </span>
                    <span className="font-code-num text-code-num text-on-surface font-semibold">
                      08:45 AM - Hôm nay
                    </span>
                  </div>
                </div>
                {/* Table Responsive Container */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low text-secondary font-label-sm text-[11px] uppercase tracking-wider border-b border-outline-variant/30">
                        <th className="py-3 px-space-md font-bold whitespace-nowrap">
                          Mã QR / Tem
                        </th>
                        <th className="py-3 px-space-md font-bold min-w-[210px]">
                          Dòng máy &amp; Cấu hình
                        </th>
                        <th className="py-3 px-space-md font-bold whitespace-nowrap">
                          Vị trí bố trí
                        </th>
                        <th className="py-3 px-space-md font-bold whitespace-nowrap">
                          Nguồn tài trợ
                        </th>
                        <th className="py-3 px-space-md font-bold whitespace-nowrap">
                          Người dùng chính
                        </th>
                        <th className="py-3 px-space-md font-bold whitespace-nowrap">
                          Trạng thái
                        </th>
                        <th className="py-3 px-space-md text-right font-bold whitespace-nowrap">
                          Thao tác
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/15 text-body-md text-on-surface">
                      {/* Row 1: Selected / Active Row */}
                      <tr className="bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer group border-l-4 border-l-primary">
                        <td className="py-3.5 px-space-md">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded bg-primary/10 flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-primary text-[20px]">
                                qr_code
                              </span>
                            </div>
                            <div>
                              <div className="font-code-num text-[13px] font-bold text-primary">
                                #QR-PC-ML01
                              </div>
                              <span className="inline-block font-label-sm text-[10px] px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed font-bold leading-tight">
                                Grade A
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[14px]">
                            HP ProDesk 400 G6 MT
                          </div>
                          <div className="font-body-sm text-[12px] text-secondary mt-0.5">
                            Core i3-10100 • 8GB • SSD 256GB • Màn 21.5" IPS
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] font-medium text-on-surface">
                            Phòng Tin học T2
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            Bàn 01 - Dãy A
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] font-bold text-primary">
                            Tập đoàn FPT
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            Quỹ Hy Vọng #CERT-12
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] text-on-surface font-medium">
                            Em Thào A Súa
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            Lớp 8A (Trưởng nhóm tin)
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-tertiary font-label-sm text-[12px] font-bold border border-tertiary/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                            Hoạt động tốt
                          </span>
                        </td>
                        <td className="py-3.5 px-space-md text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors"
                              title="In tem mã QR"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                print
                              </span>
                            </button>
                            <button
                              className="p-1.5 rounded-lg text-primary bg-primary-fixed/50 hover:bg-primary-fixed transition-colors font-semibold"
                              title="Đang xem chi tiết"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                visibility
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Row 2 */}
                      <tr className="hover:bg-surface-container-low/70 transition-colors cursor-pointer group">
                        <td className="py-3.5 px-space-md">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded bg-surface-container-low flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-secondary text-[20px]">
                                qr_code
                              </span>
                            </div>
                            <div>
                              <div className="font-code-num text-[13px] font-bold text-on-surface">
                                #QR-PC-ML02
                              </div>
                              <span className="inline-block font-label-sm text-[10px] px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed font-bold leading-tight">
                                Grade A
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[14px]">
                            HP ProDesk 400 G6 MT
                          </div>
                          <div className="font-body-sm text-[12px] text-secondary mt-0.5">
                            Core i3-10100 • 8GB • SSD 256GB • Màn 21.5" IPS
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] font-medium text-on-surface">
                            Phòng Tin học T2
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            Bàn 02 - Dãy A
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] font-bold text-primary">
                            Tập đoàn FPT
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            Quỹ Hy Vọng #CERT-12
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] text-on-surface font-medium">
                            Em Hà Thị Mai
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            Lớp 8B
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-tertiary font-label-sm text-[12px] font-bold border border-tertiary/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                            Hoạt động tốt
                          </span>
                        </td>
                        <td className="py-3.5 px-space-md text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors"
                              title="In tem mã QR"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                print
                              </span>
                            </button>
                            <button
                              className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors"
                              title="Xem chi tiết"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                visibility
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Row 3 */}
                      <tr className="hover:bg-surface-container-low/70 transition-colors cursor-pointer group">
                        <td className="py-3.5 px-space-md">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded bg-surface-container-low flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-secondary text-[20px]">
                                qr_code
                              </span>
                            </div>
                            <div>
                              <div className="font-code-num text-[13px] font-bold text-on-surface">
                                #QR-PC-ML05
                              </div>
                              <span className="inline-block font-label-sm text-[10px] px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed font-bold leading-tight">
                                Grade A
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[14px]">
                            HP ProDesk 400 G6 MT
                          </div>
                          <div className="font-body-sm text-[12px] text-secondary mt-0.5">
                            Core i3-10100 • 8GB • SSD 256GB • Màn 21.5" IPS
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] font-medium text-on-surface">
                            Phòng Tin học T2
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            Bàn 05 - Dãy B
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] font-bold text-primary">
                            VNPT Thanh Hoá
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            Sóng &amp; Máy tính cho em
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] text-on-surface font-medium">
                            Thầy Lò Văn Thuận
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            Giáo viên phụ trách Tổ Tin
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-tertiary font-label-sm text-[12px] font-bold border border-tertiary/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                            Hoạt động tốt
                          </span>
                        </td>
                        <td className="py-3.5 px-space-md text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors"
                              title="In tem mã QR"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                print
                              </span>
                            </button>
                            <button
                              className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors"
                              title="Xem chi tiết"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                visibility
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Row 4: UPS */}
                      <tr className="hover:bg-surface-container-low/70 transition-colors cursor-pointer group">
                        <td className="py-3.5 px-space-md">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded bg-surface-container-low flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-secondary text-[20px]">
                                qr_code
                              </span>
                            </div>
                            <div>
                              <div className="font-code-num text-[13px] font-bold text-on-surface">
                                #QR-UPS-ML01
                              </div>
                              <span className="inline-block font-label-sm text-[10px] px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-fixed-variant font-bold leading-tight">
                                Lưu điện
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[14px]">
                            Santak Blazer 1000E Pro
                          </div>
                          <div className="font-body-sm text-[12px] text-secondary mt-0.5">
                            1000VA / 600W • Line Interactive AVR chống sụt áp
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] font-medium text-on-surface">
                            Tủ rack nguồn phòng máy
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            Khu bảo vệ trung tâm
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] font-bold text-primary">
                            Quỹ Bảo trợ GD
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            MB Bank tài trợ độc quyền
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] text-on-surface font-medium">
                            Bảo vệ nguồn chung
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            Thầy Hà Văn Tiêu QL
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-tertiary font-label-sm text-[12px] font-bold border border-tertiary/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                            Ắc quy 100%
                          </span>
                        </td>
                        <td className="py-3.5 px-space-md text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors"
                              title="In tem mã QR"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                print
                              </span>
                            </button>
                            <button
                              className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors"
                              title="Xem chi tiết"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                visibility
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Row 5: Switch Mạng */}
                      <tr className="hover:bg-surface-container-low/70 transition-colors cursor-pointer group">
                        <td className="py-3.5 px-space-md">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded bg-surface-container-low flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-secondary text-[20px]">
                                qr_code
                              </span>
                            </div>
                            <div>
                              <div className="font-code-num text-[13px] font-bold text-on-surface">
                                #QR-NET-ML01
                              </div>
                              <span className="inline-block font-label-sm text-[10px] px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-fixed-variant font-bold leading-tight">
                                Mạng LAN
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[14px]">
                            TP-Link TL-SG1024D
                          </div>
                          <div className="font-body-sm text-[12px] text-secondary mt-0.5">
                            24-Port Gigabit Rackmount Switch công nghiệp
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] font-medium text-on-surface">
                            Tủ trung tâm mạng T2
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            Rack Switch 01
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] font-bold text-primary">
                            VNPT Mường Lát
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            Cáp quang học đường 200Mbps
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] text-on-surface font-medium">
                            Hạ tầng mạng trường
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            Toàn bộ 25 PC kết nối
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-tertiary font-label-sm text-[12px] font-bold border border-tertiary/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                            Online 1.0 Gbps
                          </span>
                        </td>
                        <td className="py-3.5 px-space-md text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors"
                              title="In tem mã QR"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                print
                              </span>
                            </button>
                            <button
                              className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors"
                              title="Xem chi tiết"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                visibility
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Row 6: Needs Maintenance */}
                      <tr className="hover:bg-surface-container-low/70 transition-colors cursor-pointer group">
                        <td className="py-3.5 px-space-md">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded bg-surface-container-low flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-secondary text-[20px]">
                                qr_code
                              </span>
                            </div>
                            <div>
                              <div className="font-code-num text-[13px] font-bold text-on-surface">
                                #QR-PC-ML12
                              </div>
                              <span className="inline-block font-label-sm text-[10px] px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed font-bold leading-tight">
                                Grade A-
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[14px]">
                            HP ProDesk 400 G6 MT
                          </div>
                          <div className="font-body-sm text-[12px] text-secondary mt-0.5">
                            Core i3-10100 • 8GB • SSD 256GB • Màn 21.5" IPS
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] font-medium text-on-surface">
                            Phòng Tin học T2
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            Bàn 12 - Dãy C
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] font-bold text-primary">
                            Tập đoàn FPT
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            Quỹ Hy Vọng #CERT-12
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="font-body-sm text-[13px] text-on-surface font-medium">
                            Em Lò Văn Chiến
                          </div>
                          <div className="font-label-sm text-[11px] text-secondary">
                            Lớp 9A
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-[12px] font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            Cần vệ sinh quạt gió
                          </span>
                        </td>
                        <td className="py-3.5 px-space-md text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="p-1.5 rounded-lg text-error hover:bg-error-container/30 transition-colors"
                              title="Báo sự cố kỹ thuật"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                report_problem
                              </span>
                            </button>
                            <button
                              className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors"
                              title="Xem chi tiết"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                visibility
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Table Pagination & Footer */}
                <div className="px-space-md py-3.5 bg-surface-container-low/70 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-space-sm mt-auto">
                  <div className="font-body-sm text-[13px] text-secondary">
                    Đang hiển thị{" "}
                    <span className="font-semibold text-on-surface">1 - 6</span>{" "}
                    của{" "}
                    <span className="font-semibold text-on-surface">37</span>{" "}
                    thiết bị đã kiểm kê thực tế
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-secondary hover:bg-surface-container-lowest disabled:opacity-40 border border-outline-variant/30"
                      disabled
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        chevron_left
                      </span>
                    </button>
                    <button
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-label-md text-label-md bg-primary text-on-primary font-bold shadow-sm"
                      type="button"
                    >
                      1
                    </button>
                    <button
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-label-md text-label-md text-on-surface hover:bg-surface-container-lowest border border-outline-variant/30 transition-colors"
                      type="button"
                    >
                      2
                    </button>
                    <button
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-label-md text-label-md text-on-surface hover:bg-surface-container-lowest border border-outline-variant/30 transition-colors"
                      type="button"
                    >
                      3
                    </button>
                    <span className="px-1.5 text-secondary text-body-sm font-semibold">
                      ...
                    </span>
                    <button
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-label-md text-label-md text-on-surface hover:bg-surface-container-lowest border border-outline-variant/30 transition-colors"
                      type="button"
                    >
                      7
                    </button>
                    <button
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-secondary hover:bg-surface-container-lowest border border-outline-variant/30 transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        chevron_right
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* RIGHT COLUMN (4 cols): Detailed Device Inspection Drawer / Card View */}
              <div className="xl:col-span-4 space-y-space-md">
                {/* Selected Device Detail Card */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
                  <div className="p-space-md bg-surface-container-low/70 border-b border-outline-variant/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Chi Tiết Thiết Bị Đang Chọn
                      </span>
                    </div>
                    <span className="font-code-num text-code-num font-bold text-primary bg-primary-fixed px-2.5 py-0.5 rounded shadow-sm">
                      #QR-PC-ML01
                    </span>
                  </div>
                  {/* Classroom Photo */}
                  <div className="relative h-44 w-full bg-surface-container overflow-hidden">
                    <img
                      alt="Phòng tin học mới lắp đặt tại trường Phổ thông Dân tộc Bán trú THCS Mường Lát vùng cao Thanh Hoá với các máy tính để bàn HP ProDesk màn hình phẳng 21.5 inch đang mở bài giảng trực tuyến, các em học sinh dân tộc H'Mông và Thái đang chăm chú thao tác, ánh sáng tự nhiên qua cửa sổ nhìn ra đồi núi."
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/85 via-on-surface/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-on-primary">
                      <div>
                        <div className="font-headline-sm text-headline-sm font-bold leading-tight text-surface">
                          Bàn 01 - Dãy A
                        </div>
                        <div className="font-body-sm text-[12px] text-surface-variant">
                          Phòng thực hành Tin học Tầng 2
                        </div>
                      </div>
                      <span className="font-label-sm text-[11px] bg-tertiary text-on-tertiary px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">
                          check_circle
                        </span>
                        Đã test 4h liên tục
                      </span>
                    </div>
                  </div>
                  <div className="p-space-md space-y-space-md">
                    {/* QR Code & RFID Verification Card */}
                    <div className="flex items-center gap-space-md p-space-sm bg-surface-container-low rounded-xl border border-outline-variant/30">
                      <div className="w-20 h-20 bg-surface-container-lowest rounded-lg p-2 flex items-center justify-center shrink-0 shadow-sm border border-outline-variant/20">
                        <svg
                          className="w-full h-full text-on-surface"
                          fill="currentColor"
                          viewBox="0 0 100 100"
                        >
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
                      <div className="space-y-1 min-w-0">
                        <div className="font-label-sm text-[11px] text-secondary uppercase tracking-wider font-semibold">
                          Mã định danh PoD RFID
                        </div>
                        <div className="font-code-num text-[14px] text-on-surface font-bold truncate">
                          VN-EDUSHARE-ML01-88
                        </div>
                        <div className="font-body-sm text-[12px] text-secondary">
                          Trường PTDTBT THCS Mường Lát
                        </div>
                        <div className="font-label-sm text-[11px] text-primary font-bold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[15px]">
                            verified
                          </span>
                          <span>
                            Chứng thư số SHA-256 xác thực trên EduShare Ledger
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Hardware Specs details */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                          Cấu hình &amp; Phần mềm Giáo dục
                        </span>
                        <span className="font-label-sm text-[11px] text-tertiary bg-surface-container-low px-2 py-0.5 rounded font-semibold">
                          Grade A EduShare
                        </span>
                      </div>
                      <div className="bg-surface-container-low rounded-xl p-3 space-y-2 font-body-sm text-[13px] border border-outline-variant/20">
                        <div className="flex justify-between py-0.5 border-b border-outline-variant/15">
                          <span className="text-secondary">
                            Vi xử lý (CPU):
                          </span>
                          <span className="font-medium text-on-surface">
                            Intel Core i3-10100 (4C/8T, 4.3GHz)
                          </span>
                        </div>
                        <div className="flex justify-between py-0.5 border-b border-outline-variant/15">
                          <span className="text-secondary">Bộ nhớ RAM:</span>
                          <span className="font-medium text-on-surface">
                            8GB DDR4-2666MHz (Hỗ trợ 32GB)
                          </span>
                        </div>
                        <div className="flex justify-between py-0.5 border-b border-outline-variant/15">
                          <span className="text-secondary">
                            Ổ cứng lưu trữ:
                          </span>
                          <span className="font-medium text-on-surface">
                            SSD NVMe 256GB M.2 PCIe
                          </span>
                        </div>
                        <div className="flex justify-between py-0.5 border-b border-outline-variant/15">
                          <span className="text-secondary">
                            Màn hình hiển thị:
                          </span>
                          <span className="font-medium text-on-surface">
                            HP P22v G4 (21.5 inch FHD 1080p IPS)
                          </span>
                        </div>
                        <div className="flex justify-between py-0.5 border-b border-outline-variant/15">
                          <span className="text-secondary">Hệ điều hành:</span>
                          <span className="font-semibold text-primary">
                            EduOS Vietnam Core v3.2
                          </span>
                        </div>
                        <div className="flex justify-between py-0.5">
                          <span className="text-secondary">
                            Ứng dụng cài sẵn:
                          </span>
                          <span className="font-medium text-on-surface">
                            Scratch 3.0, Python 3, SGK Số 6-9
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Device Lifecycle Timeline (Audit Trail) */}
                    <div className="space-y-2.5">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                        Vòng đời phân bổ &amp; Kiểm định
                      </span>
                      <div className="relative pl-6 space-y-3.5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/40">
                        {/* Step 1 */}
                        <div className="relative">
                          <div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary shadow-sm">
                            <span className="material-symbols-outlined text-[10px]">
                              check
                            </span>
                          </div>
                          <div className="font-label-md text-[13px] font-bold text-on-surface">
                            15/10/2024: Tiếp nhận từ FPT
                          </div>
                          <div className="font-body-sm text-[12px] text-secondary mt-0.5">
                            Bàn giao tại Tổng kho EduShare Hà Nội, đợt tài trợ
                            #FPT-2024.
                          </div>
                        </div>
                        {/* Step 2 */}
                        <div className="relative">
                          <div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary shadow-sm">
                            <span className="material-symbols-outlined text-[10px]">
                              check
                            </span>
                          </div>
                          <div className="font-label-md text-[13px] font-bold text-on-surface">
                            18/10/2024: Kiểm định Grade A &amp; Nạp EduOS
                          </div>
                          <div className="font-body-sm text-[12px] text-secondary mt-0.5">
                            Chạy thử StressTest 4h, nạp EduOS và SGK số lớp 6-9.
                          </div>
                        </div>
                        {/* Step 3 */}
                        <div className="relative">
                          <div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary shadow-sm">
                            <span className="material-symbols-outlined text-[10px]">
                              check
                            </span>
                          </div>
                          <div className="font-label-md text-[13px] font-bold text-on-surface">
                            22/10/2024: Đội TNV vận chuyển vượt đèo Mường Lát
                          </div>
                          <div className="font-body-sm text-[12px] text-secondary mt-0.5">
                            Vận chuyển an toàn qua dốc Sài Khao đến điểm trường
                            Tam Chung.
                          </div>
                        </div>
                        {/* Step 4 */}
                        <div className="relative">
                          <div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm">
                            <span className="material-symbols-outlined text-[10px]">
                              verified
                            </span>
                          </div>
                          <div className="font-label-md text-[13px] font-bold text-primary">
                            24/10/2024: Nghiệm thu bàn giao &amp; ký số PoD
                          </div>
                          <div className="font-body-sm text-[12px] text-secondary mt-0.5">
                            Nghiệm thu hoàn tất. Thầy Hà Văn Tiêu xác nhận số
                            hiệu #POD-2024-ML08.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Action buttons in Inspector Drawer */}
                    <div className="space-y-2 pt-2 border-t border-outline-variant/20">
                      <button
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-primary text-on-primary hover:bg-primary-container rounded-lg font-label-md text-label-md font-bold shadow-sm shadow-primary/20 transition-all"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          build
                        </span>
                        <span>Gửi yêu cầu bảo trì / Thay linh kiện</span>
                      </button>
                      <button
                        className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-surface-container-low text-on-surface hover:bg-surface-container border border-outline-variant/30 rounded-lg font-label-md text-label-md font-semibold transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px] text-secondary">
                          description
                        </span>
                        <span>Tải biên bản bàn giao PoD (#POD-2024-ML08)</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Support Card for Teacher */}
                <div className="p-space-md bg-surface-container-high/40 rounded-xl border border-outline-variant/30 space-y-2">
                  <div className="flex items-center gap-2 text-on-surface font-headline-sm text-headline-sm font-bold">
                    <span className="material-symbols-outlined text-primary text-[22px]">
                      help_outline
                    </span>
                    <span>Hỗ trợ kỹ thuật tại chỗ</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    Khi phát hiện máy tính có hiện tượng quạt kêu to, chậm hoặc
                    lỗi nguồn, Thầy/Cô hãy chụp ảnh màn hình và bấm nút "Gửi yêu
                    cầu bảo trì" để Kỹ sư EduShare Thanh Hoá cử cán bộ hỗ trợ
                    ngay.
                  </p>
                </div>
              </div>
            </div>
            {/* 3-Step EduShare Warranty & Support Process (Footer Card) */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-outline-variant/30 space-y-space-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-1 border-b border-surface-container-low">
                <div>
                  <h2 className="font-headline-sm text-[18px] md:text-[20px] text-on-surface font-bold">
                    Quy Trình Bảo Trợ Kỹ Thuật Chuẩn Cấp Quốc Gia EduShare
                    Vietnam
                  </h2>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5">
                    Cam kết đồng hành 36 tháng giúp phòng máy luôn duy trì tỉ lệ
                    hoạt động trên 95% tại các trường vùng khó khăn.
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-bold">
                    Thời gian phản hồi SLA &lt; 2h
                  </span>
                  <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-bold">
                    Hotline: 1800 6868 Miễn cước
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                {/* Step 1 */}
                <div className="p-space-md bg-surface-container-low/70 rounded-xl space-y-2 border border-outline-variant/20 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-primary text-on-primary font-code-num text-code-num font-bold flex items-center justify-center shadow-sm">
                      01
                    </div>
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      contact_support
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold text-[15px] pt-1">
                    Báo sự cố trực tuyến qua Cổng
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    Nhà trường quét mã QR dán trên thùng máy, mô tả hiện tượng
                    kèm ảnh chụp gửi trực tiếp lên hệ thống quản lý tài sản học
                    đường.
                  </p>
                </div>
                {/* Step 2 */}
                <div className="p-space-md bg-surface-container-low/70 rounded-xl space-y-2 border border-outline-variant/20 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-primary text-on-primary font-code-num text-code-num font-bold flex items-center justify-center shadow-sm">
                      02
                    </div>
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      support_agent
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold text-[15px] pt-1">
                    Hỗ trợ kỹ thuật từ xa &amp; gửi linh kiện hỏa tốc (48h)
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    Kỹ sư EduShare kết nối UltraViewer xử lý phần mềm, hoặc bưu
                    điện gửi linh kiện thay thế 1-đổi-1 (nguồn, RAM, SSD) hỏa
                    tốc đến Mường Lát.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="p-space-md bg-surface-container-low/70 rounded-xl space-y-2 border border-outline-variant/20 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-tertiary text-on-tertiary font-code-num text-code-num font-bold flex items-center justify-center shadow-sm">
                      03
                    </div>
                    <span className="material-symbols-outlined text-tertiary text-[24px]">
                      task_alt
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold text-[15px] pt-1">
                    Nghiệm thu, ký số biên bản &amp; cập nhật hồ sơ tài sản
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    Sau khi máy hoạt động bình thường, đại diện BGH xác nhận qua
                    mã OTP điện thoại để hệ thống gia hạn bảo hành và đóng phiếu
                    bảo trì.
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
