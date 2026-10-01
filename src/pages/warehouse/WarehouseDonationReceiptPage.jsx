import React, { useState } from "react";
import { Link } from "react-router-dom";

const WarehouseDonationReceiptPage = () => {
  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="p-space-lg bg-surface-container">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-sm">
                <span className="material-symbols-outlined text-[20px]">
                  warehouse
                </span>
              </div>
              <div>
                <span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight block">
                  EduShare VN
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold block">
                  Kho &amp; Kỹ Thuật
                </span>
              </div>
            </div>
            <div className="mt-space-md flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-lowest rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Trực tuyến 63 Tỉnh Thành
              </span>
            </div>
          </div>
          <nav className="flex-1 px-space-md py-space-md space-y-space-lg">
            <div className="space-y-space-xs">
              <span className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold block">
                Nhập Kho &amp; Tiếp Nhận
              </span>
              <Link
                className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-body-md text-body-md"
                to="/warehouse/receive"
              >
                <span className="material-symbols-outlined text-[20px]">
                  fact_check
                </span>
                <span className="">Tiếp nhận &amp; Kiểm định</span>
              </Link>
              <Link
                className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-body-md text-body-md"
                to="/warehouse/scan-qr"
              >
                <span className="material-symbols-outlined text-[20px]">
                  qr_code_scanner
                </span>
                <span className="">Quét QR phân luồng</span>
              </Link>
              <Link
                className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg bg-primary text-on-primary font-medium shadow-sm transition-colors"
                to="/warehouse/donation-receipt"
              >
                <span className="material-symbols-outlined text-[20px] text-on-primary">
                  inventory
                </span>
                <span className="text-on-primary">Phiếu trao tặng</span>
              </Link>
            </div>
            <div className="space-y-space-xs">
              <span className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold block">
                Quản Lý Kho Bãi
              </span>
              <Link
                className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-body-md text-body-md"
                to="/warehouse/inventory"
              >
                <span className="material-symbols-outlined text-[20px]">
                  inventory_2
                </span>
                <span className="">Tồn kho thiết bị</span>
              </Link>
              <Link
                className="flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-body-md text-body-md"
                to="/warehouse/racks"
              >
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    shelves
                  </span>
                  <span className="">Vị trí kệ định danh</span>
                </div>
                <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-medium">
                  Xem
                </span>
              </Link>
              <Link
                className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-body-md text-body-md"
                to="/warehouse/audit-report"
              >
                <span className="material-symbols-outlined text-[20px]">
                  assignment
                </span>
                <span className="">Kiểm kê &amp; Báo cáo</span>
              </Link>
            </div>
            <div className="space-y-space-xs">
              <span className="px-space-sm font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold block">
                Điều Phối &amp; Vận Chuyển
              </span>
              <Link
                className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-body-md text-body-md"
                to="/warehouse/dispatch"
              >
                <span className="material-symbols-outlined text-[20px]">
                  local_shipping
                </span>
                <span className="">Lệnh điều chuyển &amp; Vận đơn</span>
              </Link>
              <Link
                className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-body-md text-body-md"
                to="/warehouse/delivery-history"
              >
                <span className="material-symbols-outlined text-[20px]">
                  history
                </span>
                <span className="">Lịch sử đợt giao</span>
              </Link>
              <Link
                className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-body-md text-body-md"
                to="/warehouse/incident-report"
              >
                <span className="material-symbols-outlined text-[20px]">
                  report_problem
                </span>
                <span className="">Báo cáo sự cố cá nhân</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="p-space-md bg-surface-container-lowest mx-space-md mb-space-md rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between text-outline">
            <span className="font-label-sm text-label-sm">Phiên bản</span>
            <span className="font-code-num text-code-num text-on-surface font-semibold">
              v2.8.4
            </span>
          </div>
          <div className="flex items-center justify-between mt-1 text-outline">
            <span className="font-label-sm text-label-sm">Kỹ thuật kho</span>
            <span className="font-code-num text-code-num text-primary font-semibold">
              1900 6829
            </span>
          </div>
        </div>
      </aside>

      <div className="pl-72 flex flex-col flex-1">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface/90 backdrop-blur-xl z-40 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="w-full h-16 px-space-lg flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md min-w-0">
              <nav className="flex items-center gap-1.5 font-label-md text-label-md text-outline truncate">
                <span className="hover:text-on-surface cursor-pointer transition-colors">
                  EduShare VN Kho
                </span>
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
                <span className="hover:text-on-surface cursor-pointer transition-colors">
                  Nhập Kho &amp; Tiếp Nhận
                </span>
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
                <span className="text-primary font-semibold truncate">
                  Phiếu Trao Tặng
                </span>
              </nav>
            </div>
            <div className="flex items-center gap-space-md flex-1 max-w-xl mx-space-md">
              <div className="relative w-full">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                  search
                </span>
                <input
                  className="w-full pl-9 pr-4 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Mã phiếu #DON, serial thiết bị, nhà tài trợ..."
                  type="text"
                />
              </div>
              <button
                className="flex items-center gap-1.5 px-3 py-2 bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md font-medium whitespace-nowrap hover:bg-primary transition-colors shadow-sm"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  qr_code_scanner
                </span>
                <span className="">Quét QR nhanh</span>
              </button>
            </div>
            <div className="flex items-center gap-space-md">
              <button
                className="relative p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-full transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[22px]">
                  notifications
                </span>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error"></span>
              </button>
              <div className="flex items-center gap-space-sm pl-space-sm">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-primary text-[18px]">
                    person
                  </span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">
                    Trần Hùng (TK-MB-04)
                  </span>
                  <span className="font-label-sm text-label-sm text-outline leading-tight">
                    Trưởng Kho Kỹ Thuật Hà Nội • Kho Tổng Miền Bắc (HUB-01 Hà
                    Nội)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="relative pt-16 w-full flex-1 bg-background">
          <div className="flex flex-col w-full">
            <div className="px-space-lg py-space-md space-y-space-md">
              {/* Header Title & Quick Actions */}
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-space-sm">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      Quản Lý &amp; Xác Minh Phiếu Trao Tặng
                    </h1>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold tracking-wide">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        verified
                      </span>
                      Kho HUB-01 Miền Bắc • Quy Chuẩn Tiếp Nhận ISO-2024
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-code-num text-label-sm">
                      RBAC: Thủ kho / KTV
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-outline">
                    Quy trình tiếp nhận hiện vật đóng góp từ nhà hảo tâm, rà
                    soát đối chiếu số lượng thực tế, dán mã QR định danh và nhập
                    kho chính ngạch.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-space-sm shrink-0">
                  <button
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container hover:text-primary transition-colors font-label-md text-label-md font-semibold"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      file_download
                    </span>
                    <span className="">Tải Bảng Kê Tiếp Nhận (.xlsx)</span>
                  </button>
                  <button
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-container transition-colors font-label-md text-label-md font-semibold"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      qr_code_scanner
                    </span>
                    <span className="">Quét QR Phiếu Trao Tặng</span>
                  </button>
                  <button
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-colors font-label-md text-label-md font-semibold shadow-sm"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      add_box
                    </span>
                    <span className="">+ Nhận Kiện Hàng Mới</span>
                  </button>
                </div>
              </div>

              {/* Bento 4 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Metric 1 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                      Tổng Phiếu Tiếp Nhận
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        assignment
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-sm">
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-headline-xl text-headline-xl text-on-surface font-bold">
                        128
                      </span>
                      <span className="font-label-md text-label-md text-outline">
                        phiếu
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 font-body-sm text-body-sm text-outline">
                      <span className="inline-block w-2 h-2 rounded-full bg-tertiary"></span>
                      <span className="">
                        <strong className="text-on-surface">96 phiếu</strong> đã
                        nhập kho hoàn tất
                      </span>
                    </div>
                  </div>
                </div>
                {/* Metric 2 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                      Phiếu Chờ Xác Minh
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-error-container flex items-center justify-center text-error">
                      <span className="material-symbols-outlined text-[20px]">
                        pending_actions
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-sm">
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-headline-xl text-headline-xl text-error font-bold">
                        24
                      </span>
                      <span className="font-label-md text-label-md text-outline">
                        phiếu
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 font-body-sm text-body-sm text-outline">
                      <span className="material-symbols-outlined text-[15px] text-error">
                        alarm
                      </span>
                      <span className="">
                        <strong className="text-on-surface">8 kiện hàng</strong>{" "}
                        vừa cập bến sáng nay
                      </span>
                    </div>
                  </div>
                </div>
                {/* Metric 3 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                      Hiện Vật Vừa Xác Minh
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        devices
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-sm">
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-headline-xl text-headline-xl text-primary font-bold">
                        430
                      </span>
                      <span className="font-label-md text-label-md text-outline">
                        thiết bị
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 font-body-sm text-body-sm text-tertiary font-medium">
                      <span className="material-symbols-outlined text-[15px]">
                        verified_user
                      </span>
                      <span className="">Khớp 100% niêm phong nhà tài trợ</span>
                    </div>
                  </div>
                </div>
                {/* Metric 4 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                      Tỷ Lệ Khớp Khai Báo
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
                      <span className="material-symbols-outlined text-[20px]">
                        rule
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-sm">
                    <div className="flex items-baseline gap-space-xs">
                      <span className="font-headline-xl text-headline-xl text-on-surface font-bold">
                        98.6%
                      </span>
                      <span className="font-label-md text-label-md text-tertiary font-semibold">
                        +1.2%
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 font-body-sm text-body-sm text-outline">
                      <span className="material-symbols-outlined text-[15px] text-tertiary">
                        check_circle
                      </span>
                      <span className="">Chuẩn minh bạch EduShare VN</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter & Search Bar */}
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
                <div className="flex flex-1 flex-col lg:flex-row lg:items-center gap-space-sm">
                  <div className="relative flex-1 max-w-lg w-full">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                      search
                    </span>
                    <input
                      className="w-full pl-9 pr-4 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Tìm kiếm theo mã phiếu (#DON-2024-xxxx), nhà hảo tâm, SĐT, chủng loại..."
                      type="text"
                    />
                  </div>
                  <div className="flex items-center gap-space-xs overflow-x-auto w-full lg:w-auto">
                    <select className="px-3 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer shrink-0">
                      <option>Tất cả trạng thái đối soát</option>
                      <option>Chờ xác minh thực tế</option>
                      <option>Đã xác minh 1 phần</option>
                      <option>Hoàn tất nhập kho</option>
                      <option>Có ghi chú sai lệch</option>
                    </select>
                    <select className="px-3 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer shrink-0">
                      <option>Tất cả nguồn tài trợ</option>
                      <option>Doanh nghiệp &amp; Tập đoàn</option>
                      <option>Cá nhân / Nhà hảo tâm</option>
                      <option>Tổ chức giáo dục / Cựu SV</option>
                    </select>
                    <select className="px-3 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer shrink-0">
                      <option>Kho: HUB-01 Miền Bắc</option>
                      <option>Kho: HUB-02 Miền Trung</option>
                      <option>Kho: HUB-03 Miền Nam</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs justify-end shrink-0 mt-3 lg:mt-0">
                  <button
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      tune
                    </span>
                    <span className="">Bộ lọc nâng cao</span>
                  </button>
                  <button
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      receipt_long
                    </span>
                    <span className="">Xuất Báo Cáo Đối Soát</span>
                  </button>
                </div>
              </div>

              {/* MAIN TWO-COLUMN WORKSPACE (7 : 5) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
                {/* LEFT COLUMN (7 COLS): LIST OF DONATION TICKETS */}
                <div className="lg:col-span-7 space-y-space-md overflow-hidden">
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                    {/* Tab Switcher */}
                    <div className="flex items-center gap-space-sm px-space-md pt-space-md border-b-0 overflow-x-auto bg-surface-container-low/40">
                      <button className="px-space-md py-2.5 text-primary font-headline-sm text-headline-sm border-b-2 border-primary whitespace-nowrap">
                        Tất cả phiếu (24)
                      </button>
                      <button className="px-space-md py-2.5 text-outline hover:text-on-surface font-body-md text-body-md whitespace-nowrap flex items-center gap-1">
                        <span className="">Chờ đối soát thực tế</span>
                        <span className="px-1.5 py-0.5 rounded-full bg-error-container text-error text-label-sm font-semibold">
                          16
                        </span>
                      </button>
                      <button className="px-space-md py-2.5 text-outline hover:text-on-surface font-body-md text-body-md whitespace-nowrap flex items-center gap-1">
                        <span className="">Đã xác minh chờ nhập</span>
                        <span className="px-1.5 py-0.5 rounded-full bg-surface-container text-primary text-label-sm font-semibold">
                          8
                        </span>
                      </button>
                      <button className="px-space-md py-2.5 text-outline hover:text-on-surface font-body-md text-body-md whitespace-nowrap flex items-center gap-1">
                        <span className="">Có sai lệch số lượng</span>
                        <span className="px-1.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm font-semibold">
                          1
                        </span>
                      </button>
                    </div>
                    {/* Table Records */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                          <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                            <th className="py-3 px-space-md">
                              Mã Phiếu &amp; Thời Gian
                            </th>
                            <th className="py-3 px-space-md">
                              Nhà Hảo Tâm / Đơn Vị
                            </th>
                            <th className="py-3 px-space-md">
                              Hiện Vật Khai Báo
                            </th>
                            <th className="py-3 px-space-md">
                              Tình Trạng Niêm Phong
                            </th>
                            <th className="py-3 px-space-md text-right">
                              Trạng Thái
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-transparent font-body-md text-body-md">
                          {/* ROW 1 (SELECTED / CURRENTLY ACTIVE) */}
                          <tr className="bg-surface-container-high/60 cursor-pointer transition-colors border-l-4 border-l-primary relative">
                            <td className="py-3.5 px-space-md">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px] text-primary">
                                  radio_button_checked
                                </span>
                                <div>
                                  <span className="font-code-num text-code-num text-primary font-bold block">
                                    #DON-2024-8842
                                  </span>
                                  <span className="font-body-sm text-body-sm text-outline">
                                    22/10/2024 • 08:30
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <div>
                                <span className="font-headline-sm text-headline-sm text-on-surface block">
                                  Tập đoàn FPT
                                </span>
                                <span className="font-body-sm text-body-sm text-outline">
                                  Đại diện: Ông Trần Minh Tuấn (0912.839.xxx)
                                </span>
                              </div>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <span className="font-label-md text-label-md font-semibold text-on-surface block">
                                30 ThinkPad T480s
                              </span>
                              <span className="font-body-sm text-body-sm text-outline">
                                20 Màn hình Dell 24" IPS
                              </span>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <span className="inline-flex items-center gap-1 font-body-sm text-body-sm text-tertiary">
                                <span className="material-symbols-outlined text-[15px]">
                                  security
                                </span>
                                2 kiện niêm phong tốt
                              </span>
                            </td>
                            <td className="py-3.5 px-space-md text-right">
                              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-error-container text-error font-label-sm text-label-sm font-semibold whitespace-nowrap">
                                Chờ đối soát thực tế
                              </span>
                            </td>
                          </tr>
                          {/* Row 2 */}
                          <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                            <td className="py-3.5 px-space-md">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px] text-outline">
                                  radio_button_unchecked
                                </span>
                                <div>
                                  <span className="font-code-num text-code-num text-on-surface font-semibold block">
                                    #DON-2024-9102
                                  </span>
                                  <span className="font-body-sm text-body-sm text-outline">
                                    23/10/2024 • 14:15
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <div>
                                <span className="font-headline-sm text-headline-sm text-on-surface block">
                                  Quỹ Hy Vọng (FPT Hope)
                                </span>
                                <span className="font-body-sm text-body-sm text-outline">
                                  Chương trình: Máy tính cho em
                                </span>
                              </div>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <span className="font-label-md text-label-md font-semibold text-on-surface block">
                                10 Bộ lưu điện Santak
                              </span>
                              <span className="font-body-sm text-body-sm text-outline">
                                Model 1000E Pro (Mới 100%)
                              </span>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <span className="inline-flex items-center gap-1 font-body-sm text-body-sm text-tertiary">
                                <span className="material-symbols-outlined text-[15px]">
                                  security
                                </span>
                                1 Pallet thùng gỗ
                              </span>
                            </td>
                            <td className="py-3.5 px-space-md text-right">
                              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold whitespace-nowrap">
                                Đã xác minh một phần
                              </span>
                            </td>
                          </tr>
                          {/* Row 3 */}
                          <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                            <td className="py-3.5 px-space-md">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px] text-outline">
                                  radio_button_unchecked
                                </span>
                                <div>
                                  <span className="font-code-num text-code-num text-on-surface font-semibold block">
                                    #DON-2024-9115
                                  </span>
                                  <span className="font-body-sm text-body-sm text-outline">
                                    24/10/2024 • 09:10
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <div>
                                <span className="font-headline-sm text-headline-sm text-on-surface block">
                                  VNPT Hưng Yên
                                </span>
                                <span className="font-body-sm text-body-sm text-outline">
                                  Đơn vị viễn thông tỉnh
                                </span>
                              </div>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <span className="font-label-md text-label-md font-semibold text-on-surface block">
                                02 Switch Cisco 24-Port
                              </span>
                              <span className="font-body-sm text-body-sm text-outline">
                                05 Cuộn cáp UTP Cat6
                              </span>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <span className="inline-flex items-center gap-1 font-body-sm text-body-sm text-tertiary">
                                <span className="material-symbols-outlined text-[15px]">
                                  security
                                </span>
                                Nguyên đai tem VNPT
                              </span>
                            </td>
                            <td className="py-3.5 px-space-md text-right">
                              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold whitespace-nowrap">
                                Đã xác minh xong
                              </span>
                            </td>
                          </tr>
                          {/* Row 4 */}
                          <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                            <td className="py-3.5 px-space-md">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px] text-outline">
                                  radio_button_unchecked
                                </span>
                                <div>
                                  <span className="font-code-num text-code-num text-on-surface font-semibold block">
                                    #DON-2024-9120
                                  </span>
                                  <span className="font-body-sm text-body-sm text-outline">
                                    24/10/2024 • 11:20
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <div>
                                <span className="font-headline-sm text-headline-sm text-on-surface block">
                                  Hội Cựu SV ĐH Bách Khoa
                                </span>
                                <span className="font-body-sm text-body-sm text-outline">
                                  Khoa CNTT - Khóa 52
                                </span>
                              </div>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <span className="font-label-md text-label-md font-semibold text-on-surface block">
                                15 Bộ PC Dell OptiPlex
                              </span>
                              <span className="font-body-sm text-body-sm text-outline">
                                Đầy đủ bàn phím &amp; chuột
                              </span>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <span className="inline-flex items-center gap-1 font-body-sm text-body-sm text-tertiary">
                                <span className="material-symbols-outlined text-[15px]">
                                  security
                                </span>
                                Thùng carton dán băng dính
                              </span>
                            </td>
                            <td className="py-3.5 px-space-md text-right">
                              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-error-container text-error font-label-sm text-label-sm font-semibold whitespace-nowrap">
                                Chờ đối soát thực tế
                              </span>
                            </td>
                          </tr>
                          {/* Row 5 */}
                          <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
                            <td className="py-3.5 px-space-md">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px] text-outline">
                                  radio_button_unchecked
                                </span>
                                <div>
                                  <span className="font-code-num text-code-num text-on-surface font-semibold block">
                                    #DON-2024-9088
                                  </span>
                                  <span className="font-body-sm text-body-sm text-outline">
                                    20/10/2024 • 16:40
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <div>
                                <span className="font-headline-sm text-headline-sm text-on-surface block">
                                  Chị Phạm Hồng Anh
                                </span>
                                <span className="font-body-sm text-body-sm text-outline">
                                  Cá nhân hảo tâm (Q. Hoàn Kiếm, HN)
                                </span>
                              </div>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <span className="font-label-md text-label-md font-semibold text-on-surface block">
                                05 Apple iPad Gen 9
                              </span>
                              <span className="font-body-sm text-body-sm text-outline">
                                Kèm bút cảm ứng &amp; bao da
                              </span>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <span className="inline-flex items-center gap-1 font-body-sm text-body-sm text-tertiary">
                                <span className="material-symbols-outlined text-[15px]">
                                  verified
                                </span>
                                Nguyên seal hộp Apple
                              </span>
                            </td>
                            <td className="py-3.5 px-space-md text-right">
                              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container text-outline font-label-sm text-label-sm font-semibold whitespace-nowrap">
                                Hoàn tất nhập kho
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Pagination */}
                    <div className="flex items-center justify-between p-space-md bg-surface-container-low/60 font-body-sm text-body-sm text-outline">
                      <span className="">
                        Hiển thị <strong>1 - 5</strong> trên <strong>24</strong>{" "}
                        phiếu chờ xử lý
                      </span>
                      <div className="flex items-center gap-1">
                        <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-outline hover:text-on-surface transition-colors">
                          Trước
                        </button>
                        <button className="px-2.5 py-1 rounded bg-primary text-on-primary font-semibold">
                          1
                        </button>
                        <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-outline hover:text-on-surface transition-colors">
                          2
                        </button>
                        <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-outline hover:text-on-surface transition-colors">
                          3
                        </button>
                        <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-outline hover:text-on-surface transition-colors">
                          Sau
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Quick Guideline Note On Warehouse Receipt */}
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start gap-space-md">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[24px]">
                        verified
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Lưu ý khi đối soát tiếp nhận hiện vật
                      </h4>
                      <p className="font-body-sm text-body-sm text-outline">
                        Mỗi thiết bị khi mở kiện cần được đối chiếu ngay với
                        thông tin serial trên bao bì. Trong trường hợp phụ kiện
                        (sạc, cáp kết nối) bị thiếu hoặc hiện vật bị cấn móp do
                        vận chuyển, thủ kho ghi nhận trực tiếp vào ô sai lệch
                        trước khi thực hiện cấp mã QR.
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN (5 COLS): DETAILED RECONCILIATION FOR SELECTED TICKET */}
                <div className="lg:col-span-5 space-y-space-md">
                  {/* CARD 1: DONATION PROFILE SUMMARY */}
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-sm border-b-0 gap-2">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-on-primary shrink-0">
                          <span className="material-symbols-outlined text-[20px]">
                            inventory_2
                          </span>
                        </div>
                        <div>
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Hồ Sơ Phiếu #DON-2024-8842
                          </span>
                          <span className="font-label-sm text-label-sm text-outline block">
                            Nhà hảo tâm: Doanh Nghiệp Tài Trợ
                          </span>
                        </div>
                      </div>
                      <span className="inline-flex items-center justify-center gap-1 px-2.5 py-1 rounded-full bg-error-container text-error font-label-sm text-label-sm font-semibold shrink-0">
                        <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                        Đang Chờ Xác Minh
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm bg-surface-container-low p-space-md rounded-lg">
                      <div>
                        <span className="font-label-sm text-label-sm text-outline block uppercase tracking-wider">
                          Đơn vị gửi
                        </span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold block">
                          Tập đoàn FPT
                        </span>
                        <span className="font-body-sm text-body-sm text-outline">
                          Trụ sở Duy Tân, Cầu Giấy, HN
                        </span>
                      </div>
                      <div>
                        <span className="font-label-sm text-label-sm text-outline block uppercase tracking-wider">
                          Người đại diện
                        </span>
                        <span className="font-label-md text-label-md text-on-surface font-semibold block">
                          Ông Trần Minh Tuấn
                        </span>
                        <span className="font-code-num text-code-num text-outline">
                          0912.839.xxx (Đã xác thực OTP)
                        </span>
                      </div>
                    </div>
                    {/* Photo Of Arrived Packages */}
                    <div className="space-y-space-xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline block">
                        Ảnh Thực Tế Kiện Hàng Tại Sảnh Tiếp Nhận
                      </span>
                      <div className="relative rounded-lg overflow-hidden h-36 bg-surface-container">
                        <img
                          alt="A clean industrial warehouse receiving dock in Hanoi with cardboard pallets and tech boxes clearly sealed with security tape. Morning sunlight streams through high warehouse windows highlighting Lenovo and Dell logos on outer packaging, strictly adhering to realistic corporate photo style."
                          className="w-full h-full object-cover"
                          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                        />
                        <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-on-background/80 text-surface font-label-sm text-label-sm flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">
                            photo_camera
                          </span>
                          <span className="">
                            Ảnh chụp tiếp nhận 08:35 AM • KTV Nguyễn Đức Thành
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2: ITEM-BY-ITEM VERIFICATION */}
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Bảng Đối Soát Từng Dòng Hàng Thực Tế
                        </h3>
                        <p className="font-body-sm text-body-sm text-outline">
                          KTV kiểm tra số lượng thực tế trước khi cấp mã QR
                        </p>
                      </div>
                      <span className="font-label-md text-label-md font-bold text-primary whitespace-nowrap">
                        2 / 2 Dòng Hàng
                      </span>
                    </div>
                    {/* Item Line 1 */}
                    <div className="p-space-md rounded-lg bg-surface-container-low space-y-space-sm border-l-4 border-l-tertiary">
                      <div className="flex items-start justify-between gap-space-sm">
                        <div className="flex items-start gap-space-xs">
                          <input
                            defaultChecked
                            className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer shrink-0"
                            id="item-check-1"
                            type="checkbox"
                          />
                          <div>
                            <label
                              className="font-headline-sm text-headline-sm text-on-surface font-bold cursor-pointer"
                              htmlFor="item-check-1"
                            >
                              Laptop Lenovo ThinkPad T480s
                            </label>
                            <span className="font-body-sm text-body-sm text-outline block">
                              Core i5-8350U, RAM 8GB, SSD 256GB
                            </span>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold shrink-0">
                          <span className="material-symbols-outlined text-[14px]">
                            check
                          </span>
                          Đã Khớp Số Lượng
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-space-sm bg-surface-container-lowest p-space-sm rounded">
                        <div>
                          <span className="font-label-sm text-label-sm text-outline block">
                            Số lượng khai báo
                          </span>
                          <span className="font-code-num text-headline-sm font-bold text-on-surface">
                            30 máy
                          </span>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-outline block">
                            Thực tế tiếp nhận
                          </span>
                          <span className="font-code-num text-headline-sm font-bold text-tertiary">
                            30 máy (Đủ 100%)
                          </span>
                        </div>
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-tertiary shrink-0">
                          check_circle
                        </span>
                        <span className="">
                          Đầy đủ 30 bộ sạc cáp 65W Zin, ngoại quan Grade A/B
                          nguyên vẹn.
                        </span>
                      </div>
                      {/* Static Shelf Position */}
                      <div className="flex items-center justify-between p-2 rounded bg-surface-container-high/70">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="material-symbols-outlined text-[18px] text-primary shrink-0">
                            shelves
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface truncate">
                            Vị trí kệ định danh dự kiến:{" "}
                            <strong className="font-code-num text-primary">
                              Kệ A2 - Tầng 04 (Ô 12)
                            </strong>
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-lowest text-outline font-semibold shrink-0 ml-2">
                          <span className="material-symbols-outlined text-[12px]">
                            lock
                          </span>
                          Chế độ chỉ xem
                        </span>
                      </div>
                    </div>
                    {/* Item Line 2 */}
                    <div className="p-space-md rounded-lg bg-surface-container-low space-y-space-sm border-l-4 border-l-tertiary">
                      <div className="flex items-start justify-between gap-space-sm">
                        <div className="flex items-start gap-space-xs">
                          <input
                            defaultChecked
                            className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer shrink-0"
                            id="item-check-2"
                            type="checkbox"
                          />
                          <div>
                            <label
                              className="font-headline-sm text-headline-sm text-on-surface font-bold cursor-pointer"
                              htmlFor="item-check-2"
                            >
                              Màn Hình Dell 24 inch FHD IPS
                            </label>
                            <span className="font-body-sm text-body-sm text-outline block">
                              Model P2419H (Chân đế nâng hạ, xoay dọc)
                            </span>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold shrink-0">
                          <span className="material-symbols-outlined text-[14px]">
                            check
                          </span>
                          Đã Khớp Số Lượng
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-space-sm bg-surface-container-lowest p-space-sm rounded">
                        <div>
                          <span className="font-label-sm text-label-sm text-outline block">
                            Số lượng khai báo
                          </span>
                          <span className="font-code-num text-headline-sm font-bold text-on-surface">
                            20 chiếc
                          </span>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-outline block">
                            Thực tế tiếp nhận
                          </span>
                          <span className="font-code-num text-headline-sm font-bold text-tertiary">
                            20 chiếc (Đủ 100%)
                          </span>
                        </div>
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-tertiary shrink-0">
                          check_circle
                        </span>
                        <span className="">
                          20 thùng carton nguyên seal xốp, kèm đầy đủ dây nguồn
                          và cáp HDMI.
                        </span>
                      </div>
                      {/* Static Shelf Position */}
                      <div className="flex items-center justify-between p-2 rounded bg-surface-container-high/70">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="material-symbols-outlined text-[18px] text-primary shrink-0">
                            shelves
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface truncate">
                            Vị trí kệ định danh dự kiến:{" "}
                            <strong className="font-code-num text-primary">
                              Kệ B1 - Tầng 01 (Ô 05)
                            </strong>
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-lowest text-outline font-semibold shrink-0 ml-2">
                          <span className="material-symbols-outlined text-[12px]">
                            lock
                          </span>
                          Chế độ chỉ xem
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CARD 3: AUDIT SEAL & WAREHOUSE DISPATCH NOTE */}
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-md">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Ghi Chú Tiếp Nhận &amp; Lập Biên Nhận Điện Tử
                      </span>
                      <span className="font-code-num text-label-sm text-primary font-bold">
                        RFID: RFID-VN-DON-8842-MB
                      </span>
                    </div>
                    <div className="space-y-space-xs">
                      <label className="font-label-sm text-label-sm uppercase tracking-wider text-outline block">
                        Ý Kiến Đánh Giá Ngoại Quan Của Thủ Kho
                      </label>
                      <textarea
                        className="w-full p-2.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none cursor-default resize-none"
                        defaultValue="Kiện hàng nguyên niêm phong nhà tài trợ FPT, ngoại quan sạch đẹp, đầy đủ phụ kiện. Sẵn sàng chuyển tiếp luồng Kiểm định kỹ thuật và dán nhãn EduShare Code."
                        readOnly
                        rows="3"
                      ></textarea>
                    </div>
                    {/* Primary Action Buttons */}
                    <div className="space-y-space-xs pt-space-xs">
                      <button
                        className="w-full py-3 px-space-md bg-primary text-on-primary hover:bg-primary-container rounded-lg font-headline-sm text-headline-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          inventory
                        </span>
                        <span className="">
                          XÁC NHẬN NHẬP CÁC DÒNG ĐÃ XÁC MINH VÀO KHO
                        </span>
                      </button>
                      <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                        <button
                          className="py-2.5 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 transition-colors"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            print
                          </span>
                          <span className="">In Biên Nhận Tạm Thời</span>
                        </button>
                        <button
                          className="py-2.5 px-3 rounded-lg bg-surface-container-low hover:bg-error-container hover:text-error text-outline font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 transition-colors"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            report_problem
                          </span>
                          <span className="">Báo Cáo Sai Lệch Cho Admin</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* CARD 4: RBAC OPERATIONAL CONSTRAINTS */}
                  <div className="bg-surface-container-low/70 p-space-md rounded-xl space-y-space-xs">
                    <div className="flex items-center gap-2 text-outline">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        policy
                      </span>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold text-on-surface">
                        Ràng Buộc Nghiệp Vụ Cổng Kho (RBAC v2.8.4)
                      </span>
                    </div>
                    <ul className="font-body-sm text-body-sm text-outline space-y-1 list-disc pl-5">
                      <li className="">
                        Vị trí kệ định danh hiển thị tĩnh (chế độ chỉ xem), KTV
                        không tự ý chỉnh sửa quy hoạch kệ lưu trữ.
                      </li>
                      <li className="">
                        Kho không có quyền sửa đổi nội dung cam kết của nhà tài
                        trợ (chỉ đối soát và ghi chú thừa/thiếu).
                      </li>
                      <li className="">
                        Sau khi bấm xác nhận nhập kho, hệ thống tự động sinh{" "}
                        <strong>Biên nhận điện tử</strong> đồng bộ lên App nhà
                        hảo tâm.
                      </li>
                      <li className="">
                        Nghiêm cấm tự ý điều chuyển hoặc xuất kho khi chưa có
                        Lệnh Điều Phối được Admin duyệt.
                      </li>
                    </ul>
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

export default WarehouseDonationReceiptPage;
