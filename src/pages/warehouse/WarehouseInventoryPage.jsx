import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WarehouseInventoryPage = () => {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col">
          <div className="px-6 py-5 bg-surface-container-low/60 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary font-headline-md font-bold tracking-tight shadow-sm">ES</div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">EduShare VN</span>
                <span className="font-label-sm text-[10px] tracking-wider uppercase bg-primary-fixed text-on-primary-fixed-variant px-1.5 py-0.5 rounded font-semibold">Kho</span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Kho &amp; Kỹ Thuật</span>
            </div>
          </div>
          <div className="px-6 py-3 bg-surface-container-low flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface font-medium">Kho Tổng Miền Bắc (TK-MB)</span>
              <span className="font-body-sm text-[11px] text-on-surface-variant">Trực tuyến 63 Tỉnh Thành</span>
            </div>
          </div>
          <nav className="flex-1 px-4 py-4 space-y-6">
            <div className="space-y-1">
              <div className="px-3 pb-1 font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">Nhập Kho &amp; Tiếp Nhận</div>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" to="/warehouse/receive">
                <span className="material-symbols-outlined text-[20px]">fact_check</span>
                <span className="font-body-md text-body-md">Tiếp nhận &amp; Kiểm định</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" to="/warehouse/scan-qr">
                <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                <span className="font-body-md text-body-md">Quét QR phân luồng</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" to="/warehouse/donation-receipt">
                <span className="material-symbols-outlined text-[20px]">description</span>
                <span className="font-body-md text-body-md">Phiếu trao tặng</span>
              </Link>
            </div>
            <div className="space-y-1">
              <div className="px-3 pb-1 font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">Quản Lý Kho Bãi</div>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-container hover:text-on-surface transition-colors bg-primary text-on-primary font-medium shadow-sm" to="/warehouse/inventory">
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span className="font-body-md text-body-md">Tồn kho thiết bị</span>
              </Link>
              <Link className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" to="/warehouse/racks">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px]">shelves</span>
                  <span className="font-body-md text-body-md">Vị trí kệ định danh</span>
                </div>
                <span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant px-1.5 py-0.5 rounded">Xem</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" to="/warehouse/audit-report">
                <span className="material-symbols-outlined text-[20px]">assignment</span>
                <span className="font-body-md text-body-md">Kiểm kê &amp; Báo cáo</span>
              </Link>
            </div>
            <div className="space-y-1">
              <div className="px-3 pb-1 font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">Điều Phối &amp; Vận Chuyển</div>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" to="/warehouse/dispatch">
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span className="font-body-md text-body-md">Lệnh điều chuyển &amp; Vận đơn</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" to="/warehouse/delivery-history">
                <span className="material-symbols-outlined text-[20px]">history</span>
                <span className="font-body-md text-body-md">Lịch sử đợt giao</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" to="/warehouse/incident-report">
                <span className="material-symbols-outlined text-[20px]">warning</span>
                <span className="font-body-md text-body-md">Báo cáo sự cố cá nhân</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="p-4 mx-4 mb-4 rounded-xl bg-surface-container-low text-on-surface-variant space-y-1">
          <div className="flex items-center justify-between font-label-sm text-label-sm font-semibold">
            <span className="text-on-surface">CỔNG KHO VẬN</span>
            <span className="text-outline">v2.8.4</span>
          </div>
          <div className="flex items-center gap-2 pt-1 text-on-surface-variant font-body-sm text-body-sm">
            <span className="material-symbols-outlined text-[16px] text-primary">support_agent</span>
            <span className="">Kỹ thuật kho: <strong className="font-semibold text-on-surface">1900 6829</strong></span>
          </div>
        </div>
      </aside>

      <div className="pl-72 flex flex-col flex-1">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-body-md text-body-md text-on-surface-variant">
              <span className="hover:text-primary cursor-pointer transition-colors">EduShare VN Kho</span>
              <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Nhập Kho &amp; Tiếp Nhận</span>
              <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
              <span className="text-primary font-medium">Quét QR Phân Luồng</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">search</span>
              <input className="w-96 pl-9 pr-14 py-2 text-body-md font-body-md bg-surface-container-low text-on-surface placeholder:text-outline rounded-lg outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Mã vận đơn, số lô hàng, serial hoặc quét mã QR thiết bị..." type="text" />
              <span className="absolute right-3 px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-code-num text-[11px] font-semibold tracking-wide">⌘K</span>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-2 bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary font-label-md text-label-md rounded-lg transition-colors">
              <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
              <span className="">Quét QR</span>
            </button>
            <button className="relative p-2 rounded-lg hover:bg-surface-container-low text-on-surface-variant transition-colors">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error"></span>
            </button>
            <div className="flex items-center gap-3 pl-3">
              <div className="flex flex-col text-right">
                <span className="font-label-md text-label-md text-on-surface font-semibold">Trần Hùng (TK-MB-04)</span>
                <span className="font-body-sm text-[11px] text-on-surface-variant">Trưởng Kho Kỹ Thuật Hà Nội • Kho Tổng Miền Bắc (HUB-01 Hà Nội)</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        <main className="w-full pt-16 flex-1 bg-surface">
          <div className="flex flex-col w-full">
            {/* Subtle Ambient Glow */}
            <div className="relative w-full overflow-hidden px-8 py-6 space-y-6">
              <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
              <div className="absolute top-96 -left-32 w-80 h-80 rounded-full bg-tertiary/5 blur-3xl pointer-events-none"></div>
              
              {/* 1. Page Title & Action Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                      Chế độ Thủ Kho • Kho Tổng HUB-01
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-code-num text-body-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span>
                      RFID Cổng Đang Hoạt Động
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                    Tồn Kho Thiết Bị &amp; Quản Lý Lưu Trữ
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Quản trị chi tiết 15,240 thiết bị giáo dục đã thẩm định, mã hóa QR định danh và phân loại theo Grade kiểm chuẩn.
                  </p>
                </div>
                {/* Action Buttons */}
                <div className="flex items-center gap-2 flex-wrap">
                  <button className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container transition-all text-label-md font-label-md">
                    <span className="material-symbols-outlined text-[18px] text-primary">download</span>
                    <span className="">Xuất Báo Cáo Tồn (.xlsx)</span>
                  </button>
                  <button className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-all text-label-md font-label-md">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">sensors</span>
                    <span className="">Kiểm Kê RFID Nhanh</span>
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-on-primary shadow hover:bg-surface-tint transition-all text-label-md font-label-md">
                    <span className="material-symbols-outlined text-[18px]">sync</span>
                    <span className="">Đồng Bộ Quét Mã</span>
                  </button>
                </div>
              </div>

              {/* 2. Bento Grid 4 Thẻ KPI Kho */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
                {/* KPI 1 */}
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex flex-col justify-between space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Tổng Thiết Bị Lưu Kho</span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-headline-xl text-headline-xl font-bold text-on-surface">15,240</span>
                        <span className="font-label-md text-label-md text-tertiary font-semibold flex items-center">
                          <span className="material-symbols-outlined text-[16px]">trending_up</span> +340
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">inventory_2</span>
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
                      <span className="">PC &amp; Laptop: <strong className="font-semibold text-on-surface">8,420</strong></span>
                      <span className="">Tablet: <strong className="font-semibold text-on-surface">3,820</strong></span>
                    </div>
                    <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden flex">
                      <div className="bg-primary h-full" style={{ width: '55%' }}></div>
                      <div className="bg-tertiary-container h-full" style={{ width: '25%' }}></div>
                      <div className="bg-surface-dim h-full" style={{ width: '20%' }}></div>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-outline font-code-num">
                      <span className="">55% Máy tính</span>
                      <span className="">25% Máy tính bảng</span>
                      <span className="">20% Mạng/UPS</span>
                    </div>
                  </div>
                </div>
                {/* KPI 2 */}
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex flex-col justify-between space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Đạt Chuẩn Phân Bổ (A/B)</span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-headline-xl text-headline-xl font-bold text-tertiary">12,180</span>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-semibold">79.9%</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">verified</span>
                    </div>
                  </div>
                  <div className="space-y-1 pt-2">
                    <div className="flex items-center gap-1.5 text-on-surface font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                      <span className="">Sẵn sàng đóng kiện xuất trường học</span>
                    </div>
                    <p className="font-body-sm text-[11px] text-on-surface-variant line-clamp-1">
                      Đã dán niêm phong kiểm định và kiểm tra pin &gt; 80%
                    </p>
                  </div>
                </div>
                {/* KPI 3 */}
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex flex-col justify-between space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Xưởng Nâng Cấp &amp; Sửa Chữa</span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-headline-xl text-headline-xl font-bold text-on-surface">185</span>
                        <span className="font-label-sm text-label-sm text-secondary font-code-num">Khu Vực Kỹ Thuật</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">build_circle</span>
                    </div>
                  </div>
                  <div className="space-y-1 pt-2">
                    <div className="flex items-center gap-1.5 text-secondary font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-[16px]">autorenew</span>
                      <span className="">Chờ linh kiện SSD / Pin thay thế</span>
                    </div>
                    <p className="font-body-sm text-[11px] text-on-surface-variant">
                      Thời gian chu chuyển TB: <strong className="font-semibold text-on-surface">3.2 ngày/thiết bị</strong>
                    </p>
                  </div>
                </div>
                {/* KPI 4 */}
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex flex-col justify-between space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-error font-semibold">Cảnh Báo Tồn &gt; 45 Ngày</span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-headline-xl text-headline-xl font-bold text-error">84</span>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-semibold">Ưu tiên phân bổ</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-error-container text-on-error-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">hourglass_empty</span>
                    </div>
                  </div>
                  <div className="space-y-1 pt-2">
                    <div className="flex items-center gap-1.5 text-error font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-[16px]">priority_high</span>
                      <span className="">Đề xuất Admin lập phương án gấp</span>
                    </div>
                    <p className="font-body-sm text-[11px] text-on-surface-variant line-clamp-1">
                      Chủ yếu: Sách giáo khoa &amp; màn hình CRT lưu kho
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Thanh Công Cụ Lọc Nâng Cao */}
              <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm space-y-3 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
                  {/* Search Field */}
                  <div className="relative flex-1 w-full">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
                    <input className="w-full pl-10 pr-12 py-2.5 rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md outline-none focus:bg-surface-container transition-colors" placeholder="Tìm kiếm theo mã QR thiết bị, Serial, Model máy, hoặc Tên Nhà hảo tâm..." type="text" defaultValue="DELL-5520" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 font-code-num text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant">
                      ESC để xóa
                    </span>
                  </div>
                  {/* Filter Dropdowns / Chips */}
                  <div className="flex items-center gap-2 flex-wrap w-full lg:w-auto">
                    {/* Phân Loại */}
                    <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container-low text-on-surface text-label-md font-label-md cursor-pointer hover:bg-surface-container transition-colors">
                      <span className="material-symbols-outlined text-[18px] text-outline">devices</span>
                      <span className="">Loại: <strong>Laptop &amp; PC</strong></span>
                      <span className="material-symbols-outlined text-[16px] text-outline">expand_more</span>
                    </div>
                    {/* Grade */}
                    <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container-low text-on-surface text-label-md font-label-md cursor-pointer hover:bg-surface-container transition-colors">
                      <span className="material-symbols-outlined text-[18px] text-tertiary">check_circle</span>
                      <span className="">Chuẩn: <strong>Grade A &amp; B</strong></span>
                      <span className="material-symbols-outlined text-[16px] text-outline">expand_more</span>
                    </div>
                    {/* Kho */}
                    <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container-low text-on-surface text-label-md font-label-md cursor-pointer hover:bg-surface-container transition-colors">
                      <span className="material-symbols-outlined text-[18px] text-primary">warehouse</span>
                      <span className="">Kho: <strong>HUB-01 Miền Bắc</strong></span>
                      <span className="material-symbols-outlined text-[16px] text-outline">expand_more</span>
                    </div>
                    {/* Khu Kệ */}
                    <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container-low text-on-surface text-label-md font-label-md cursor-pointer hover:bg-surface-container transition-colors">
                      <span className="material-symbols-outlined text-[18px] text-secondary">shelves</span>
                      <span className="">Khu: <strong>Tất cả (A, B, C, D)</strong></span>
                      <span className="material-symbols-outlined text-[16px] text-outline">expand_more</span>
                    </div>
                    {/* Clear Filter */}
                    <button className="p-2 rounded-xl text-outline hover:text-error hover:bg-error-container/30 transition-colors" title="Đặt lại bộ lọc">
                      <span className="material-symbols-outlined text-[20px]">filter_alt_off</span>
                    </button>
                  </div>
                </div>
                {/* Quick Category Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 text-label-md font-label-md whitespace-nowrap">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider pr-1">Lọc nhanh:</span>
                  <button className="px-3 py-1 rounded-full bg-primary text-on-primary shadow-xs">Tất cả (15,240)</button>
                  <button className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-colors">Laptops (5,120)</button>
                  <button className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-colors">Máy Bàn Desktop (3,300)</button>
                  <button className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-colors">Máy Tính Bảng (3,820)</button>
                  <button className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-colors">Thiết bị mạng (1,850)</button>
                  <button className="px-3 py-1 rounded-full bg-error-container text-on-error-container hover:bg-error/20 transition-colors">Tồn quá hạn &gt; 45 ngày (84)</button>
                </div>
              </div>

              {/* 4. Two-Column Layout (7/12 & 5/12) */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 relative z-10 items-start">
                {/* CỘT TRÁI (7/12): Danh mục thiết bị tồn kho thời gian thực */}
                <div className="xl:col-span-7 flex flex-col space-y-4">
                  <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden flex flex-col">
                    {/* Table Header Controls */}
                    <div className="p-4 bg-surface-container-low/40 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px] text-primary">view_list</span>
                        <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Danh Mục Thiết Bị Đang Lưu Bãi</h2>
                        <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-code-num text-label-sm">
                          15,240 máy
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-label-sm font-label-sm text-outline">
                        <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                        <span className="">Cập nhật 4 phút trước</span>
                      </div>
                    </div>
                    {/* Table Container with Horizontal Scroll */}
                    <div className="overflow-x-auto w-full">
                      <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                          <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
                            <th className="py-3 px-4">Thiết Bị &amp; Mã QR</th>
                            <th className="py-3 px-4">Nguồn Tài Trợ</th>
                            <th className="py-3 px-4">Kiểm Định</th>
                            <th className="py-3 px-4">
                              <div className="flex items-center gap-1">
                                <span className="">Vị Trí Lưu Kho</span>
                                <span className="px-1 py-0.2 rounded bg-surface-container-high text-[9px] text-outline font-bold">Chỉ xem</span>
                              </div>
                            </th>
                            <th className="py-3 px-4">Tồn Kho</th>
                            <th className="py-3 px-3 text-right">Chi Tiết</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y-0 text-body-md font-body-md">
                          {/* ROW 1 (ACTIVE / SELECTED) */}
                          <tr className="bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer relative">
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-10 rounded-full bg-primary -ml-2"></div>
                                <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                                  <span className="material-symbols-outlined text-[22px]">laptop_mac</span>
                                </div>
                                <div className="flex flex-col min-w-0">
                                  <span className="font-headline-sm text-[14px] font-bold text-on-surface truncate">Laptop Dell Latitude 5520</span>
                                  <div className="flex items-center gap-2 font-code-num text-body-sm text-on-surface-variant">
                                    <span className="text-primary font-semibold">#QR-DELL-5520</span>
                                    <span className="">•</span>
                                    <span className="">SN: 7X89KL2</span>
                                  </div>
                                  <span className="text-[11px] text-outline truncate">i5-1135G7 • 8GB • SSD 256GB</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md font-semibold text-on-surface">Tập đoàn VNPT</span>
                                <span className="text-[11px] text-on-surface-variant">Lô trao tặng #8842</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary/10 text-tertiary font-label-md text-label-md font-semibold whitespace-nowrap">
                                <span className="material-symbols-outlined text-[15px]">verified</span> Grade A
                              </span>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="flex flex-col">
                                <span className="font-code-num text-label-md font-bold text-primary">Kệ A2 - Tầng 04</span>
                                <span className="text-[11px] text-outline">Ô định danh 12</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4 font-code-num">
                              <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-semibold text-body-sm whitespace-nowrap">12 ngày</span>
                            </td>
                            <td className="py-3.5 px-3 text-right">
                              <span className="material-symbols-outlined text-primary text-[22px]">arrow_forward_ios</span>
                            </td>
                          </tr>
                          {/* ROW 2 */}
                          <tr className="hover:bg-surface-container-low transition-colors cursor-pointer">
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary shrink-0">
                                  <span className="material-symbols-outlined text-[22px]">desktop_windows</span>
                                </div>
                                <div className="flex flex-col min-w-0">
                                  <span className="font-headline-sm text-[14px] font-semibold text-on-surface truncate">Bộ PC HP ProDesk 400 G6</span>
                                  <div className="flex items-center gap-2 font-code-num text-body-sm text-on-surface-variant">
                                    <span className="text-secondary font-semibold">#QR-HP-400-G6</span>
                                    <span className="">•</span>
                                    <span className="">SN: HP984210</span>
                                  </div>
                                  <span className="text-[11px] text-outline truncate">i3-9100 • 8GB • Kèm Màn HP 21.5"</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md font-semibold text-on-surface">FPT Software</span>
                                <span className="text-[11px] text-on-surface-variant">Chương trình nối tri thức</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary/10 text-tertiary font-label-md text-label-md font-semibold whitespace-nowrap">
                                <span className="material-symbols-outlined text-[15px]">verified</span> Grade A
                              </span>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="flex flex-col">
                                <span className="font-code-num text-label-md font-semibold text-on-surface">Kệ B1 - Tầng 01</span>
                                <span className="text-[11px] text-outline">Ô định danh 05</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4 font-code-num">
                              <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-body-sm whitespace-nowrap">18 ngày</span>
                            </td>
                            <td className="py-3.5 px-3 text-right">
                              <span className="material-symbols-outlined text-outline text-[20px]">chevron_right</span>
                            </td>
                          </tr>
                          {/* ROW 3 */}
                          <tr className="hover:bg-surface-container-low transition-colors cursor-pointer">
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-on-secondary-fixed shrink-0">
                                  <span className="material-symbols-outlined text-[22px]">laptop</span>
                                </div>
                                <div className="flex flex-col min-w-0">
                                  <span className="font-headline-sm text-[14px] font-semibold text-on-surface truncate">Lenovo ThinkPad T480s</span>
                                  <div className="flex items-center gap-2 font-code-num text-body-sm text-on-surface-variant">
                                    <span className="text-secondary font-semibold">#QR-LEN-T480</span>
                                    <span className="">•</span>
                                    <span className="">SN: PF19920A</span>
                                  </div>
                                  <span className="text-[11px] text-outline truncate">Core i5-8350U • Chờ pin mới</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md font-semibold text-on-surface">Viettel Solutions</span>
                                <span className="text-[11px] text-on-surface-variant">Tài trợ kỹ thuật số</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-semibold whitespace-nowrap">
                                <span className="material-symbols-outlined text-[15px]">build</span> Đang sửa chữa
                              </span>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="flex flex-col">
                                <span className="font-code-num text-label-md font-semibold text-on-surface">Kệ A1 - Tầng 02</span>
                                <span className="text-[11px] text-outline">Khu Kỹ Thuật</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4 font-code-num">
                              <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-body-sm whitespace-nowrap">5 ngày</span>
                            </td>
                            <td className="py-3.5 px-3 text-right">
                              <span className="material-symbols-outlined text-outline text-[20px]">chevron_right</span>
                            </td>
                          </tr>
                          {/* ROW 4 */}
                          <tr className="hover:bg-surface-container-low transition-colors cursor-pointer">
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                                  <span className="material-symbols-outlined text-[22px]">tablet_mac</span>
                                </div>
                                <div className="flex flex-col min-w-0">
                                  <span className="font-headline-sm text-[14px] font-semibold text-on-surface truncate">Apple iPad Gen 9 (64GB)</span>
                                  <div className="flex items-center gap-2 font-code-num text-body-sm text-on-surface-variant">
                                    <span className="text-primary font-semibold">#QR-IPAD-G9-08</span>
                                    <span className="">•</span>
                                    <span className="">SN: DMPZ9182</span>
                                  </div>
                                  <span className="text-[11px] text-outline truncate">Wi-Fi • Pin 91% • Kèm Củ Sạc</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md font-semibold text-on-surface">Trần Kim Ngân</span>
                                <span className="text-[11px] text-on-surface-variant">Hảo tâm cá nhân (Hà Nội)</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-md text-label-md font-semibold whitespace-nowrap">
                                <span className="material-symbols-outlined text-[15px]">school</span> Grade B+
                              </span>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="flex flex-col">
                                <span className="font-code-num text-label-md font-semibold text-on-surface">Kệ B2 - Tầng 03</span>
                                <span className="text-[11px] text-outline">Khu Máy Tính Bảng</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4 font-code-num">
                              <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-body-sm whitespace-nowrap">22 ngày</span>
                            </td>
                            <td className="py-3.5 px-3 text-right">
                              <span className="material-symbols-outlined text-outline text-[20px]">chevron_right</span>
                            </td>
                          </tr>
                          {/* ROW 5 */}
                          <tr className="hover:bg-surface-container-low transition-colors cursor-pointer">
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-tertiary shrink-0">
                                  <span className="material-symbols-outlined text-[22px]">router</span>
                                </div>
                                <div className="flex flex-col min-w-0">
                                  <span className="font-headline-sm text-[14px] font-semibold text-on-surface truncate">Cisco Catalyst 24-Port GE</span>
                                  <div className="flex items-center gap-2 font-code-num text-body-sm text-on-surface-variant">
                                    <span className="text-tertiary font-semibold">#QR-SW-CISCO24</span>
                                    <span className="">•</span>
                                    <span className="">SN: FCW2248A</span>
                                  </div>
                                  <span className="text-[11px] text-outline truncate">WS-C2960X-24TD-L • 24 Port PoE</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md font-semibold text-on-surface">VNPT Hưng Yên</span>
                                <span className="text-[11px] text-on-surface-variant">Thiết bị phòng tin học</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary/10 text-tertiary font-label-md text-label-md font-semibold whitespace-nowrap">
                                <span className="material-symbols-outlined text-[15px]">verified</span> Grade A
                              </span>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="flex flex-col">
                                <span className="font-code-num text-label-md font-semibold text-on-surface">Kệ C3 - Tầng 02</span>
                                <span className="text-[11px] text-outline">Khu Thiết Bị Mạng</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4 font-code-num">
                              <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-body-sm whitespace-nowrap">8 ngày</span>
                            </td>
                            <td className="py-3.5 px-3 text-right">
                              <span className="material-symbols-outlined text-outline text-[20px]">chevron_right</span>
                            </td>
                          </tr>
                          {/* ROW 6 (CẢNH BÁO TỒN LÂU) */}
                          <tr className="hover:bg-error-container/20 transition-colors cursor-pointer bg-error-container/10">
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-error-container text-error flex items-center justify-center shrink-0">
                                  <span className="material-symbols-outlined text-[22px]">auto_stories</span>
                                </div>
                                <div className="flex flex-col min-w-0">
                                  <span className="font-headline-sm text-[14px] font-semibold text-on-surface truncate">Bộ 50 Cuốn SGK Lớp 7 &amp; Ghế Xếp</span>
                                  <div className="flex items-center gap-2 font-code-num text-body-sm text-error">
                                    <span className="font-bold">#QR-SGK-701</span>
                                    <span className="">•</span>
                                    <span className="bg-error text-on-error px-1 rounded text-[10px]">Tồn &gt; 45 ngày</span>
                                  </div>
                                  <span className="text-[11px] text-on-surface-variant truncate">Sách Cánh Diều + 10 Bộ bàn ghế lắp ghép</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md font-semibold text-on-surface">Hội Cựu SV ĐH Kinh Tế</span>
                                <span className="text-[11px] text-on-surface-variant">Chi viện trường xã biên giới</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-md text-label-md font-medium whitespace-nowrap">
                                <span className="material-symbols-outlined text-[15px]">inventory</span> Sẵn sàng
                              </span>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="flex flex-col">
                                <span className="font-code-num text-label-md font-semibold text-on-surface">Pallet D2 - Sàn 01</span>
                                <span className="text-[11px] text-outline">Kho Sách &amp; Cơ Sở Vật</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4 font-code-num">
                              <span className="px-2 py-0.5 rounded bg-error text-on-error font-bold text-body-sm whitespace-nowrap">48 ngày</span>
                            </td>
                            <td className="py-3.5 px-3 text-right">
                              <span className="material-symbols-outlined text-outline text-[20px]">chevron_right</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Pagination Bar */}
                    <div className="p-4 bg-surface-container-low/40 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
                      <div className="flex items-center gap-2">
                        <span className="">Hiển thị</span>
                        <select className="bg-surface-container-lowest px-2 py-1 rounded-lg text-on-surface font-code-num outline-none cursor-pointer">
                          <option>6</option>
                          <option>12</option>
                          <option>24</option>
                          <option>50</option>
                        </select>
                        <span className="">trên <strong>15,240</strong> thiết bị</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-label-md">
                        <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container flex items-center justify-center transition-colors">
                          <span className="material-symbols-outlined text-[18px]">first_page</span>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container flex items-center justify-center transition-colors">
                          <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-bold flex items-center justify-center shadow-xs">1</button>
                        <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container flex items-center justify-center transition-colors">2</button>
                        <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container flex items-center justify-center transition-colors">3</button>
                        <span className="px-1 text-outline">...</span>
                        <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container flex items-center justify-center transition-colors">2,540</button>
                        <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container flex items-center justify-center transition-colors">
                          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container flex items-center justify-center transition-colors">
                          <span className="material-symbols-outlined text-[18px]">last_page</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Technical Telemetry & Environmental Sensor Box */}
                  <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined text-[28px]">thermostat</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Cảm Biến Môi Trường Khu Kệ A &amp; B</span>
                        <div className="flex items-center gap-3 mt-0.5 flex-wrap">
                          <span className="font-headline-sm text-headline-sm font-bold text-on-surface">22.4°C</span>
                          <span className="text-outline hidden sm:inline">•</span>
                          <span className="font-headline-sm text-headline-sm font-bold text-tertiary">48% Độ Ẩm</span>
                          <span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-label-sm text-[11px] font-semibold hidden sm:inline-block">Lý tưởng lưu kho IT</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                      {/* Mini Sparkline inline SVG */}
                      <div className="flex flex-col items-end">
                        <span className="text-[11px] text-outline font-code-num">24h Biến thiên ẩm</span>
                        <svg className="w-28 h-6 text-tertiary" fill="none" viewBox="0 0 100 24">
                          <path d="M0 16 L20 14 L40 18 L60 10 L80 12 L100 8" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                          <circle cx="100" cy="8" fill="currentColor" r="3"></circle>
                        </svg>
                      </div>
                      <button className="p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Xem sơ đồ nhiệt độ các dãy kệ">
                        <span className="material-symbols-outlined text-[20px]">grid_view</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* CỘT PHẢI (5/12): Thẻ chi tiết thiết bị đang chọn & Quy chuẩn RBAC */}
                <div className="xl:col-span-5 flex flex-col space-y-4">
                  {/* Main Inspection Panel */}
                  <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden flex flex-col">
                    {/* Card Header */}
                    <div className="p-5 bg-gradient-to-r from-primary/10 via-surface-container-low to-surface-container-low flex items-start justify-between">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-code-num text-label-sm font-bold">
                            #QR-DELL-5520
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">verified</span> Đạt Grade A
                          </span>
                        </div>
                        <h3 className="font-headline-md text-headline-md font-bold text-on-surface mt-1.5">
                          Laptop Dell Latitude 5520
                        </h3>
                        <span className="font-code-num text-body-sm text-on-surface-variant">Serial: 7X89KL2 • Asset Tag: EDU-VN-2024-00441</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <button className="p-2 rounded-xl bg-surface-container-lowest text-on-surface shadow-xs hover:bg-surface-container transition-colors" title="In tem dán nhãn định danh">
                          <span className="material-symbols-outlined text-[20px] text-primary">print</span>
                        </button>
                      </div>
                    </div>
                    {/* Inspection Photo & QR Preview */}
                    <div className="p-5 space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Physical Inspection Photo */}
                        <div className="relative rounded-xl overflow-hidden bg-surface-container-low group aspect-video sm:aspect-auto h-40">
                          <img alt="Close up inspection photo of a modern black Dell Latitude 5520 laptop resting on an industrial clean warehouse calibration workbench under bright neutral studio lighting, showing spotless keyboard, intact screen, with an official tamper-evident EduShare verification sticker on the palmrest, sharp macro photography in blue and slate grey tones." className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_bIcR5t3bzT6gyeMBJDebDwCZZ2e5HBukYcqra9nZ5Bxzq2R51XBb7NqjPsZanK2Brgxa9ObP3r9dbN6Cv0b7Zbqv1NK0mfIsk9AMYpaAZQVHj1SK_AnblqKlTMV_AMOVUg7IAnTbjzqLJuWBeJd_MC0Fq-QXVf8txZ2wR8Ia_RkpTImJdpKkjrSr7izqPcbVqVg-EblSBHvZ5T3MvzY0NcIyZWD7C2r6rRtSJC-HOHbos2Lnx-i9UA" />
                          <div className="absolute bottom-2 left-2 right-2 bg-on-background/70 backdrop-blur-md px-2.5 py-1 rounded-lg text-inverse-on-surface flex items-center justify-between text-[11px] font-code-num">
                            <span className="">Ảnh giám định: 14/11/2024</span>
                            <span className="text-tertiary-fixed">KT: Hoàng Văn Nam</span>
                          </div>
                        </div>
                        {/* Big QR Code Box */}
                        <div className="rounded-xl bg-surface-container-low p-3.5 flex flex-col items-center justify-center text-center space-y-2">
                          {/* Inline SVG QR Code Visual */}
                          <div className="p-2 bg-white rounded-xl shadow-xs">
                            <svg className="w-24 h-24 text-on-background" fill="currentColor" viewBox="0 0 100 100">
                              {/* QR Finder Patterns */}
                              <rect fill="currentColor" height="28" rx="4" width="28" x="5" y="5"></rect>
                              <rect fill="white" height="18" rx="2" width="18" x="10" y="10"></rect>
                              <rect fill="currentColor" height="10" width="10" x="14" y="14"></rect>
                              <rect fill="currentColor" height="28" rx="4" width="28" x="67" y="5"></rect>
                              <rect fill="white" height="18" rx="2" width="18" x="72" y="10"></rect>
                              <rect fill="currentColor" height="10" width="10" x="76" y="14"></rect>
                              <rect fill="currentColor" height="28" rx="4" width="28" x="5" y="67"></rect>
                              <rect fill="white" height="18" rx="2" width="18" x="10" y="72"></rect>
                              <rect fill="currentColor" height="10" width="10" x="14" y="76"></rect>
                              {/* Data Blocks */}
                              <rect fill="currentColor" height="8" width="8" x="38" y="8"></rect>
                              <rect fill="currentColor" height="8" width="8" x="50" y="12"></rect>
                              <rect fill="currentColor" height="8" width="8" x="42" y="24"></rect>
                              <rect fill="currentColor" height="8" width="8" x="8" y="42"></rect>
                              <rect fill="currentColor" height="8" width="8" x="22" y="48"></rect>
                              <rect fill="currentColor" height="24" rx="2" width="24" x="38" y="40"></rect>
                              <circle cx="50" cy="52" fill="white" r="6"></circle>
                              <rect fill="currentColor" height="8" width="8" x="70" y="42"></rect>
                              <rect fill="currentColor" height="8" width="8" x="84" y="54"></rect>
                              <rect fill="currentColor" height="8" width="8" x="40" y="72"></rect>
                              <rect fill="currentColor" height="8" width="8" x="54" y="80"></rect>
                              <rect fill="currentColor" height="8" width="8" x="72" y="72"></rect>
                              <rect fill="currentColor" height="8" width="8" x="84" y="84"></rect>
                            </svg>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-code-num text-label-sm font-semibold text-on-surface">RFID-UHF-915-00441</span>
                            <span className="text-[11px] text-outline">Tần số UHF EPC Class1 Gen2</span>
                          </div>
                        </div>
                      </div>
                      {/* Bóc tách chi tiết nguồn đóng góp của Nhà Hảo Tâm */}
                      <div className="p-4 rounded-xl bg-surface-container-low space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Bóc Tách Nguồn Đóng Góp</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-code-num text-[11px] font-semibold">
                            #DON-2024-8842
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-headline-sm shrink-0">
                            VN
                          </div>
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md font-bold text-on-surface">Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT)</span>
                            <p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">
                              Tài trợ theo khuôn khổ chương trình "Sóng và Máy tính cho Em" đợt 6. Bàn giao nguyên kiện vào kho ngày 02/11/2024. Đã đối soát thuế và cấp chứng nhận đóng góp xã hội.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Kết Quả Thẩm Định Kỹ Thuật (Grade A Details) */}
                      <div className="space-y-3">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Kết Quả Thẩm Định Kỹ Thuật (Grade A)</span>
                        <div className="grid grid-cols-2 gap-2 text-body-sm font-body-sm">
                          <div className="p-2.5 rounded-xl bg-surface-container flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-tertiary shrink-0">check_circle</span>
                            <div className="flex flex-col min-w-0">
                              <span className="text-[11px] text-outline truncate">Màn hình 15.6" FHD</span>
                              <span className="font-semibold text-on-surface truncate">IPS Sáng rõ 100%</span>
                            </div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-surface-container flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-tertiary shrink-0">battery_charging_full</span>
                            <div className="flex flex-col min-w-0">
                              <span className="text-[11px] text-outline truncate">Tình trạng Pin</span>
                              <span className="font-semibold text-on-surface truncate">Zin 94% (5h30p)</span>
                            </div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-surface-container flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-tertiary shrink-0">memory</span>
                            <div className="flex flex-col min-w-0">
                              <span className="text-[11px] text-outline truncate">Ổ Cứng SSD NVMe</span>
                              <span className="font-semibold text-on-surface truncate">256GB Mới 100%</span>
                            </div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-surface-container flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-tertiary shrink-0">keyboard</span>
                            <div className="flex flex-col min-w-0">
                              <span className="text-[11px] text-outline truncate">Bàn phím &amp; Touchpad</span>
                              <span className="font-semibold text-on-surface truncate">Nguyên bản 100%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* VỊ TRÍ KỆ LƯU TRỮ (RBAC TĨNH: CHỈ XEM) */}
                      <div className="p-4 rounded-xl bg-surface-container-high/60 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[18px] text-secondary">shelves</span>
                            <span className="font-label-md text-label-md font-bold text-on-surface">Vị Trí Kệ Lưu Trữ Hiện Tại</span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-bold uppercase shrink-0 ml-2">
                            Chỉ Xem (Read-only)
                          </span>
                        </div>
                        {/* Static Shelf Coordinate Display */}
                        <div className="p-3 bg-surface-container-lowest rounded-xl flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold font-code-num text-headline-sm shrink-0">
                              A2
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="font-headline-sm text-body-lg font-bold text-on-surface truncate">Dãy A2 • Kệ Tầng 04 (Ô 12)</span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Kho Tổng Miền Bắc (HUB-01 Hà Nội)</span>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-outline text-[22px] shrink-0 ml-2">lock</span>
                        </div>
                        {/* RBAC DOCUMENT_41 Compliance Notice */}
                        <div className="p-2.5 rounded-lg bg-surface-container flex items-start gap-2 text-on-surface-variant">
                          <span className="material-symbols-outlined text-[16px] text-outline mt-0.5 shrink-0">info</span>
                          <p className="font-body-sm text-[11px] leading-relaxed">
                            <strong>Theo phân quyền hệ thống (DOCUMENT_41):</strong> Cổng Nhà Kho chỉ hiển thị toạ độ vị trí kệ định danh để phục vụ thao tác lấy máy đóng gói. Quyền tạo mới hoặc di dời cấu trúc kệ do Trưởng Ban Vận Hành Trung Ương phê duyệt.
                          </p>
                        </div>
                      </div>
                      {/* Trạng Thái Điều Phối & Phân Bổ (Admin Authority Rule) */}
                      <div className="p-4 rounded-xl bg-surface-container-low space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Trạng Thái Điều Phối Dự Án</span>
                          <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-semibold shrink-0 ml-2">
                            Chờ Phương Án Admin
                          </span>
                        </div>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">
                          Thiết bị chưa gán đến điểm trường cụ thể. Ghép tồn kho và kích hoạt lệnh xuất kho thuộc thẩm quyền của Admin Tổng trên hệ thống phê duyệt.
                        </p>
                      </div>
                      {/* Bottom Actions */}
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <button className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors">
                          <span className="material-symbols-outlined text-[18px]">history</span>
                          <span className="">Lịch Sử Kiểm Định</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-primary text-on-primary hover:bg-surface-tint font-label-md text-label-md transition-colors shadow-sm">
                          <span className="material-symbols-outlined text-[18px]">qr_code</span>
                          <span className="">In Tem Mã Dán Máy</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Khối Quy Định Kiểm Toán Tồn Kho (Kho Logistics Standard) */}
                  <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm space-y-3">
                    <div className="flex items-center gap-2 text-on-surface">
                      <span className="material-symbols-outlined text-[20px] text-primary">policy</span>
                      <h4 className="font-headline-sm text-headline-sm font-bold">Quy Chuẩn Kiểm Toán &amp; Bảo Quản</h4>
                    </div>
                    <ul className="space-y-2.5 text-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                        <span className=""><strong>Kiểm đếm thực tế:</strong> Nhân viên kho chỉ ghi nhận tình trạng vật lý (trầy xước, nứt vỡ, cạn pin), không được can thiệp vào tình trạng tài sản trên hệ thống sổ cái.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                        <span className=""><strong>Nguyên tắc Một Chiều:</strong> Bất kỳ thao tác chuyển vị trí trong kho phải được quét qua cổng RFID Barcode Scanner để duy trì tính toàn vẹn của chuỗi minh bạch EduShare Ledger.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-error mt-2 shrink-0"></span>
                        <span className=""><strong>Quy chuẩn tồn &gt; 45 ngày:</strong> Sau 45 ngày lưu kho không có lệnh xuất, hệ thống tự động gắn cờ báo động để Ban Điều Phối ưu tiên điều chuyển chi viện các điểm trường vùng cao.</span>
                      </li>
                    </ul>
                    <div className="pt-2 flex items-center justify-between text-outline text-[11px] font-code-num">
                      <span className="">Tiêu chuẩn ISO 27001 / EduLedger v2.8</span>
                      <span className="">Kho vận số #HUB-01-HN</span>
                    </div>
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

export default WarehouseInventoryPage;
