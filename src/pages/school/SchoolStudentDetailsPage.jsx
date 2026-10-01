import React from "react";
import { Link } from "react-router-dom";

export default function SchoolStudentDetailsPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased flex">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="h-16 px-space-md flex items-center gap-space-sm bg-surface-container">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-[22px]">school</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary leading-tight font-bold tracking-tight">EduShare VN</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Cổng Trường Học</span>
            </div>
          </div>
          
          <div className="px-space-md py-space-sm">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary px-space-xs font-semibold">Cổng Trường Học</span>
            <nav className="mt-space-xs flex flex-col gap-1">
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" to="/school/request">
                <span className="material-symbols-outlined text-[20px]">assignment</span>
                <span className="font-body-md text-body-md">Yêu cầu tài trợ</span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg bg-primary-container text-on-primary font-medium shadow-sm transition-colors" to="/school/student-details">
                <span className="material-symbols-outlined text-[20px]">groups</span>
                <span className="font-body-md text-body-md">Học sinh tiếp nhận</span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" to="#">
                <span className="material-symbols-outlined text-[20px]">description</span>
                <span className="font-body-md text-body-md">Biên bản bàn giao (PoD)</span>
              </Link>
            </nav>
          </div>
          
          <div className="px-space-md py-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary px-space-xs font-semibold">Kho &amp; Tiếp Nhận</span>
            <nav className="mt-space-xs flex flex-col gap-1">
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" to="#">
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span className="font-body-md text-body-md">Danh mục thiết bị phân bổ</span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" to="#">
                <span className="material-symbols-outlined text-[20px]">history</span>
                <span className="font-body-md text-body-md">Lịch sử đợt giao</span>
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="p-space-md m-space-sm bg-surface-container rounded-xl flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs text-primary font-semibold">
            <span className="material-symbols-outlined text-[18px]">support_agent</span>
            <span className="font-label-md text-label-md">Hỗ trợ kỹ thuật 24/7</span>
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant flex flex-col">
            <span>Tổng đài: 1800 6868 (Miễn phí)</span>
            <span>Email: support@edushare.edu.vn</span>
          </div>
          <div className="mt-space-xs pt-space-xs text-on-surface-variant font-code-num text-body-sm flex justify-between items-center">
            <span className="font-label-sm text-label-sm text-secondary">Phiên bản Quốc gia</span>
            <span className="font-label-sm text-label-sm font-semibold text-primary">v2.8.4</span>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="pl-72 flex-1 flex flex-col min-h-screen">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-md flex items-center justify-between gap-space-md">
          <div className="flex-1 max-w-xl">
            <div className="relative flex items-center w-full">
              <span className="material-symbols-outlined absolute left-3 text-secondary text-[20px]">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low rounded-lg text-on-surface placeholder:text-outline font-body-sm text-body-sm outline-none focus:bg-surface-container transition-colors" placeholder="Tìm kiếm học sinh, mã hồ sơ, mã định danh thiết bị..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden xl:flex items-center px-space-sm py-1 bg-secondary-container text-on-secondary-fixed rounded-full text-label-sm font-label-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-tertiary mr-2"></span>
              Vai trò: Đại diện Trường học (BGH)
            </div>
            <button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <div className="flex items-center gap-space-sm pl-space-xs">
              <div className="flex flex-col text-right hidden sm:flex">
                <span className="font-label-md text-label-md font-semibold text-on-surface">Thầy Hà Văn Tiêu</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant max-w-[220px] truncate">Hiệu trưởng - PTDTBT THCS Mường Lát</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        <main className="relative pt-16 bg-surface min-h-screen">
          <div className="flex flex-col w-full px-space-md py-space-md lg:px-space-xl lg:py-space-lg gap-space-lg text-on-surface">
            
            {/* Breadcrumb & Action Toolbar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              <div className="flex flex-col gap-1">
                <nav className="flex items-center gap-space-xs text-body-sm font-body-sm text-secondary">
                  <Link className="hover:text-primary transition-colors" to="#">Cổng Trường Học</Link>
                  <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
                  <Link className="hover:text-primary transition-colors" to="#">Học sinh tiếp nhận</Link>
                  <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
                  <span className="text-on-surface font-semibold">Hồ sơ #HS-ML-2024-001</span>
                </nav>
                <div className="flex items-center gap-space-sm mt-1">
                  <Link className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" to="#">
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  </Link>
                  <h1 className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface">
                    Chi tiết Tiếp nhận Thiết bị &amp; Học tập
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm font-semibold tracking-wide">
                    DỰ ÁN #SCH-ML-2024-08
                  </span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-space-xs sm:gap-space-sm">
                <button className="inline-flex items-center gap-1.5 px-3 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-label-md font-label-md transition-all shadow-sm" type="button" onClick={() => window.print()}>
                  <span className="material-symbols-outlined text-[18px] text-secondary">print</span>
                  <span>In phiếu bàn giao</span>
                </button>
                <button className="inline-flex items-center gap-1.5 px-3 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-label-md font-label-md transition-all shadow-sm" type="button">
                  <span className="material-symbols-outlined text-[18px] text-secondary">picture_as_pdf</span>
                  <span>Xuất PDF</span>
                </button>
                <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-container hover:bg-primary text-on-primary rounded-lg text-label-md font-label-md transition-all shadow-sm" type="button">
                  <span className="material-symbols-outlined text-[18px]">edit_note</span>
                  <span>Cập nhật học tập</span>
                </button>
              </div>
            </div>

            {/* Student Profile Hero Card */}
            <div className="w-full bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-sm relative overflow-hidden flex flex-col gap-space-md">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch relative z-10">
                {/* Col 1: Avatar & Identity (5 cols on lg) -> changed to 4 in html */}
                <div className="lg:col-span-4 flex flex-col sm:flex-row items-center sm:items-start gap-space-md border-b lg:border-b-0 lg:border-r border-surface-container pb-space-md lg:pb-0 lg:pr-space-md">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-surface-container flex-shrink-0 shadow-inner ring-2 ring-primary/10">
                    <img alt="Portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQQnABYrIHt9ux6ERz-KtbNb-O6U1lQtbGxdyurZR6-c0tbv9sDCBBZg_4jqo-l3KR8Io8odAy1DLhaWvnLSjCRRD08YGlokhBX8Xitp7sbFEGHfsQyowk1EW0yg-xqeTjIZJWMUyTHuFrp8fWNhxlqFhUE1shU88neX35RLw6rcfprt-iQcvzDF9YEIFp4vC1hmA8jxnFbJ_BWHYY_6T3z9K0vCwppCdO3kuKqQevOUBkilKKn8-AFQ" />
                    <div className="absolute bottom-1.5 right-1.5 bg-tertiary text-on-tertiary p-1 rounded-md shadow flex items-center justify-center" title="Đã đối soát VNeID">
                      <span className="material-symbols-outlined text-[16px]">verified_user</span>
                    </div>
                  </div>
                  <div className="flex flex-col text-center sm:text-left gap-1 min-w-0 flex-1">
                    <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                      <h2 className="font-headline-md text-headline-md font-bold text-on-surface leading-tight">Thào A Súa</h2>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-code-num text-label-sm font-bold">#HS-ML-2024-001</span>
                    </div>
                    <span className="text-body-sm font-body-sm text-secondary">Sinh ngày: 15/05/2010 (14 tuổi) • Dân tộc: Mông</span>
                    <div className="mt-2 flex flex-wrap gap-1.5 justify-center sm:justify-start">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-[14px]">fact_check</span> Xác nhận Hộ nghèo
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-[14px]">school</span> Lớp 8A Bán Trú
                      </span>
                    </div>
                  </div>
                </div>

                {/* Col 2: Residence & Background (3 cols on lg) */}
                <div className="lg:col-span-3 flex flex-col justify-between p-3.5 rounded-xl bg-surface-container-low border border-surface-container gap-2">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px] text-primary">home_pin</span> Địa bàn cư trú
                    </span>
                    <span className="font-body-md text-body-md font-semibold text-on-surface leading-snug">
                      Thôn Bản Lát, Xã Tam Chung, Huyện Mường Lát, Tỉnh Thanh Hóa
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed bg-surface-container-lowest/60 p-2.5 rounded-lg border border-surface-container/50">
                    Bố mẹ làm nương rẫy thu nhập bấp bênh, nhà cách trường 14km đường đèo hiểm trở, thuộc diện bán trú toàn phần tại ký túc xá trường.
                  </p>
                </div>

                {/* Col 3: Guardians & Representatives (3 cols on lg) */}
                <div className="lg:col-span-3 flex flex-col justify-between p-3.5 rounded-xl bg-surface-container-low border border-surface-container gap-2">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary">shield_person</span> Bảo trợ &amp; Phụ trách
                  </span>
                  <div className="flex flex-col gap-2 text-body-sm font-body-sm">
                    <div className="flex items-center justify-between py-1 border-b border-surface-container/70">
                      <span className="text-secondary text-[12px]">GV Chủ nhiệm:</span>
                      <span className="font-semibold text-on-surface">Thầy Lò Văn Thuận</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-surface-container/70">
                      <span className="text-secondary text-[12px]">Đại diện BGH:</span>
                      <span className="font-semibold text-on-surface">Thầy Hà Văn Tiêu</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-secondary text-[12px]">Người giám hộ:</span>
                      <span className="font-semibold text-on-surface">Thào A Páo (Bố)</span>
                    </div>
                  </div>
                </div>

                {/* Col 4: Beneficiary Status & Batch (2 cols on lg) */}
                <div className="lg:col-span-2 flex flex-col justify-between items-center sm:items-start lg:items-end gap-space-sm p-3.5 rounded-xl bg-surface-container-low border border-surface-container text-center lg:text-right">
                  <div className="flex flex-col items-center lg:items-end gap-1.5 w-full">
                    <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0fdf4] text-[#166534] shadow-sm w-full lg:w-auto">
                      <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse flex-shrink-0"></span>
                      <span className="font-label-sm text-label-sm font-bold tracking-tight text-[11px]">ĐANG THỤ HƯỞNG</span>
                    </div>
                    <span className="text-[11px] font-label-sm text-secondary uppercase tracking-wider mt-1">Đợt cấp phát gần nhất</span>
                    <span className="font-code-num text-body-md font-bold text-primary">24/10/2024</span>
                    <span className="text-label-sm font-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded">Đợt 3 • 2024</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-label-sm text-tertiary font-medium pt-1">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    <span>Hồ sơ hợp lệ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Stats Grid (4 key telemetry indicators) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">Gói Hỗ Trợ Đã Cấp</span>
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[18px]">laptop_mac</span>
                  </div>
                </div>
                <div>
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface block leading-tight">Laptop &amp; Học Liệu</span>
                  <span className="font-body-sm text-body-sm text-secondary mt-0.5 block truncate">Dell 5520 + Ba lô + Giáo trình Tin 8</span>
                </div>
                <div className="flex items-center gap-1.5 pt-2 text-label-sm font-label-sm text-tertiary">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>Phân bổ 100% đầy đủ phụ kiện</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">Thời Gian Thực Hành</span>
                  <div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline-lg text-headline-lg font-bold text-on-surface">18.5</span>
                    <span className="font-body-md text-body-md text-secondary">Giờ / tuần</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-secondary block mt-0.5">Vượt chỉ tiêu tối thiểu (15h/tuần)</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: "82%" }}></div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">Kết Quả Môn Tin Học</span>
                  <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[18px]">trending_up</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline-lg text-headline-lg font-bold text-primary">8.5</span>
                    <span className="font-body-md text-body-md text-secondary">/ 10 Điểm</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-secondary block mt-0.5">+2.0 điểm so với đầu học kỳ I</span>
                </div>
                <div className="flex items-center gap-1.5 pt-2 text-label-sm font-label-sm text-tertiary">
                  <span className="material-symbols-outlined text-[16px]">military_tech</span>
                  <span>Học sinh giỏi bộ môn Tin học</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">Tình Trạng Phần Cứng</span>
                  <div className="w-8 h-8 rounded-lg bg-[#f0fdf4] flex items-center justify-center text-[#166534]">
                    <span className="material-symbols-outlined text-[18px]">health_and_safety</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline-lg text-headline-lg font-bold text-[#166534]">100%</span>
                    <span className="font-body-md text-body-md text-secondary">Ổn định</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-secondary block mt-0.5">Kiểm định bởi KTV EduShare</span>
                </div>
                <div className="flex items-center gap-1.5 pt-2 text-label-sm font-label-sm text-secondary">
                  <span className="material-symbols-outlined text-[16px]">event_repeat</span>
                  <span>Kỳ bảo dưỡng kế tiếp: 15/12/2024</span>
                </div>
              </div>
            </div>

            {/* Main Asymmetric Workspace (7 : 5 ratio) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              
              {/* LEFT WORKSPACE (7 cols): Hardware details, Verified Docs, Handover Evidence */}
              <div className="lg:col-span-7 flex flex-col gap-space-lg min-w-0">
                {/* Section: Equipment & Digital QR Passport */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">devices</span>
                      <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Thiết Bị Được Phân Bổ &amp; Mã QR Định Danh</h2>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#eff6ff] text-[#1e40af] text-label-sm font-code-num font-semibold">
                      ASSET-ID: #QR-PC-ML01
                    </span>
                  </div>
                  {/* Hardware Detail Grid */}
                  <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col sm:flex-row gap-space-md items-center">
                    <div className="w-24 h-24 rounded-lg bg-surface-container-lowest p-2 flex flex-col items-center justify-center shadow-inner flex-shrink-0 text-center">
                      {/* Inline Stylized QR code representation */}
                      <svg className="w-full h-full text-on-surface" fill="currentColor" viewBox="0 0 100 100">
                        <rect fill="none" height="24" rx="2" stroke="currentColor" strokeWidth="4" width="24" x="10" y="10"></rect>
                        <rect height="12" width="12" x="16" y="16"></rect>
                        <rect fill="none" height="24" rx="2" stroke="currentColor" strokeWidth="4" width="24" x="66" y="10"></rect>
                        <rect height="12" width="12" x="72" y="16"></rect>
                        <rect fill="none" height="24" rx="2" stroke="currentColor" strokeWidth="4" width="24" x="10" y="66"></rect>
                        <rect height="12" width="12" x="16" y="72"></rect>
                        <rect height="8" width="8" x="42" y="14"></rect>
                        <rect height="6" width="6" x="52" y="24"></rect>
                        <rect height="16" width="16" x="42" y="44"></rect>
                        <rect height="8" width="8" x="66" y="44"></rect>
                        <rect height="12" width="12" x="78" y="66"></rect>
                        <rect height="12" width="8" x="44" y="76"></rect>
                      </svg>
                      <span className="font-code-num text-label-sm font-bold text-secondary mt-1">7X89KL2</span>
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-space-md gap-y-2 text-body-sm font-body-sm">
                      <div>
                        <span className="text-secondary block">Dòng máy &amp; Thông số:</span>
                        <span className="font-semibold text-on-surface">Dell Latitude 5520 (Grade A)</span>
                        <span className="text-on-surface-variant block text-label-sm font-code-num">Core i5-1145G7 | RAM 8GB | SSD 256GB</span>
                      </div>
                      <div>
                        <span className="text-secondary block">Đơn vị tài trợ chính:</span>
                        <span className="font-semibold text-primary">Tập đoàn FPT &amp; Quỹ Hy Vọng</span>
                        <span className="text-on-surface-variant block text-label-sm">Chiến dịch Vì Em Hiếu Học</span>
                      </div>
                      <div>
                        <span className="text-secondary block">Tình trạng pin &amp; Sạc:</span>
                        <span className="font-medium text-tertiary">Pin 98% (Health OK) • Adapter 65W zin</span>
                      </div>
                      <div>
                        <span className="text-secondary block">Thời hạn bảo trợ kỹ thuật:</span>
                        <span className="font-medium text-on-surface">36 tháng (Đến 24/10/2027)</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs text-label-sm font-label-sm">
                    <div className="p-2 rounded bg-surface-container-low flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">terminal</span>
                      <span>Hệ điều hành EduOS Vietnam Core</span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-low flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary text-[18px]">extension</span>
                      <span>Tích hợp sẵn Scratch 3.0 &amp; Python 3</span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-low flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px]">menu_book</span>
                      <span>Kho SGK Số Bộ GD&amp;ĐT offline</span>
                    </div>
                  </div>
                </div>

                {/* Section: Photographic Verification at Mountain School Point */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">photo_camera</span>
                      <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Hình Ảnh Bàn Giao Thực Tế Tại Điểm Trường</h2>
                    </div>
                    <span className="font-code-num text-label-sm text-secondary">GEO: 20.505°N - 104.622°E</span>
                  </div>
                  {/* Large Photo Canvas matching the inspiration ceremony */}
                  <div className="relative w-full rounded-xl overflow-hidden bg-surface-container shadow-inner">
                    <img alt="Bàn giao" className="w-full h-80 sm:h-96 object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1X2qnp50DsbRE5-Z30LQj-QNmjKpPYbEBdP9nU8VLqvPK9F5mrFgpoYH08CYECxjvz7heD7TenQHbfiKDSorgQmY-8RFiMTSxKCYTmtFU072QS7GITuPQTqx_yRM_7ZbNZdHTPdDeUYXNZzcqt1L6cf1BnIuTBrND_USXi6Q7fMzkVFjJ3yWDT8tDSxurL-JhH7ZXgKyEiHjL0M6Mt8Jh-HGbmz2gBp5zy-FLQLG9ky3sgLoZSC9H8ri_iz" />
                    <div className="absolute inset-x-0 bottom-0 p-space-md bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/50 to-transparent text-inverse-on-surface flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-bold text-on-primary">Lễ trao tặng phòng máy &amp; thiết bị học tập cá nhân</span>
                        <span className="font-body-sm text-body-sm opacity-90">Điểm trường chính PTDTBT THCS Mường Lát - Xã Tam Chung, Thanh Hóa</span>
                      </div>
                      <div className="flex items-center gap-2 self-start sm:self-auto bg-surface/20 backdrop-blur-md px-3 py-1 rounded-full text-label-sm font-code-num">
                        <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">verified</span>
                        <span>EduShare Ledger #TX-8921-ML</span>
                      </div>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Biên bản xác nhận: Thiết bị được mở hộp niêm phong, kích hoạt hệ điều hành giáo dục và trao tận tay em Thào A Súa với sự hiện diện của Hiệu trưởng, Giáo viên chủ nhiệm và phụ huynh học sinh.
                  </p>
                </div>

                {/* Section: Verified Legal Documents & Social Security Proof */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">policy</span>
                      <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Hồ Sơ Pháp Lý &amp; Minh Chứng Hoàn Cảnh</h2>
                    </div>
                    <span className="text-label-sm font-label-sm text-tertiary font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">lock</span>
                      Bảo mật GDPR/VNeID
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-sm">
                    {/* Item 1 */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-body-md text-body-md font-semibold text-on-surface">Giấy xác nhận Hộ nghèo UBND Xã Tam Chung</span>
                          <span className="font-body-sm text-body-sm text-secondary">Số: 142/UBND-XN • Ngày cấp: 10/09/2024 • Có mộc đỏ chính quyền</span>
                        </div>
                      </div>
                      <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary text-label-sm font-label-sm font-semibold transition-all" type="button">
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        <span>Xem tài liệu</span>
                      </button>
                    </div>
                    {/* Item 2 */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">draw</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-body-md text-body-md font-semibold text-on-surface">Đơn xin hỗ trợ thiết bị Tin học của Phụ huynh</span>
                          <span className="font-body-sm text-body-sm text-secondary">Chữ ký điểm chỉ của ông Thào A Páo &amp; Cam kết của GVCN Lò Văn Thuận</span>
                        </div>
                      </div>
                      <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary text-label-sm font-label-sm font-semibold transition-all" type="button">
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        <span>Xem tài liệu</span>
                      </button>
                    </div>
                    {/* Item 3 */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">fingerprint</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-body-md text-body-md font-semibold text-on-surface">Trích lục Mã định danh VNeID CSDL Ngành GD&amp;ĐT</span>
                          <span className="font-body-sm text-body-sm text-secondary">Đã đối khớp với hệ thống CSDL Giáo dục Quốc gia (EMIS)</span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#f0fdf4] text-[#166534] text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-[14px]">check</span> Hợp lệ
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT WORKSPACE (5 cols): Lifecycle Stepper, Commitment agreement, Learning Log, Rapid Support */}
              <div className="lg:col-span-5 flex flex-col gap-space-lg min-w-0">
                {/* Section: Distribution & Lifecycle Stepper */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">linear_scale</span>
                      <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Tiến Trình Cấp Phát Thiết Bị</h2>
                    </div>
                    <span className="text-label-sm font-label-sm font-semibold text-tertiary">5/5 Hoàn thành</span>
                  </div>
                  {/* Vertical Stepper */}
                  <div className="relative pl-6 flex flex-col gap-space-md">
                    {/* Continuous Track Line */}
                    <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-surface-container-highest"></div>
                    {/* Step 1 */}
                    <div className="relative flex items-start gap-space-sm">
                      <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center text-[12px] shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">check</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-body-md text-body-md font-semibold text-on-surface">1. Xét duyệt hoàn cảnh tại trường</span>
                        <span className="font-body-sm text-body-sm text-secondary">15/10/2024 • BGH &amp; UBND Xã Tam Chung rà soát</span>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="relative flex items-start gap-space-sm">
                      <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center text-[12px] shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">check</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-body-md text-body-md font-semibold text-on-surface">2. Điều phối từ Quỹ Trung ương</span>
                        <span className="font-body-sm text-body-sm text-secondary">18/10/2024 • Hệ thống EduShare cấp quota máy</span>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="relative flex items-start gap-space-sm">
                      <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center text-[12px] shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">check</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-body-md text-body-md font-semibold text-on-surface">3. Kiểm định &amp; Dán nhãn QR định danh</span>
                        <span className="font-body-sm text-body-sm text-secondary">21/10/2024 • Kho Kỹ thuật EduShare Hà Nội nghiệm thu</span>
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="relative flex items-start gap-space-sm">
                      <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center text-[12px] shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">check</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-body-md text-body-md font-semibold text-on-surface">4. Vận chuyển chuyên dụng vùng cao</span>
                        <span className="font-body-sm text-body-sm text-secondary">23/10/2024 • Đội xe bán tải thiện nguyện cập bến</span>
                      </div>
                    </div>
                    {/* Step 5 (Current active/completed) */}
                    <div className="relative flex items-start gap-space-sm">
                      <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-primary text-on-primary ring-4 ring-primary-fixed flex items-center justify-center text-[12px] shadow-sm">
                        <span className="material-symbols-outlined text-[14px]">how_to_reg</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-body-md text-body-md font-bold text-primary">5. Bàn giao trực tiếp &amp; Ký biên bản</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">24/10/2024 • Hoàn thành kiểm tra và phát máy</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section: Tripartite Commitment & Digital Seal */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[22px]">gavel</span>
                    <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Cam Kết Sử Dụng 3 Bên</h2>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                    <p className="leading-relaxed">
                      Thiết bị thuộc chương trình hỗ trợ học tập vùng cao. Gia đình và học sinh cam kết:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Sử dụng đúng mục đích: Luyện tập Tin học, học trực tuyến và làm bài tập.</li>
                      <li>Không tự ý mua bán, trao đổi hoặc cầm cố dưới mọi hình thức.</li>
                      <li>Bảo quản thiết bị tại ký túc xá nhà trường, chỉ mang về nhà dịp lễ tết khi có xác nhận.</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-tertiary text-[24px]">verified</span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-bold text-on-surface">Ký số điện tử: Thầy Hà Văn Tiêu</span>
                        <span className="font-body-sm text-body-sm text-secondary">Hiệu trưởng - PTDTBT THCS Mường Lát</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed text-label-sm font-code-num font-semibold">
                      ĐÃ KÝ SỐ
                    </span>
                  </div>
                </div>

                {/* Section: Academic Progress & Teacher Observation Log */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">auto_stories</span>
                      <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Nhật Ký Học Tập Của Em Súa</h2>
                    </div>
                    <button className="text-primary hover:underline font-label-sm text-label-sm font-semibold" type="button">
                      + Viết nhận xét
                    </button>
                  </div>
                  <div className="flex flex-col gap-space-sm">
                    {/* Log 1 */}
                    <div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-semibold text-primary">Tuần 4 - Tháng 10/2024</span>
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
                    <div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-semibold text-secondary">Tuần 3 - Tháng 10/2024</span>
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
                <div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">build_circle</span>
                    <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Yêu Cầu Hỗ Trợ Kỹ Thuật</h2>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    Nếu máy gặp sự cố mạng, hỏng sạc hoặc cần cài thêm phần mềm phục vụ học tập, Nhà trường gửi phản hồi trực tiếp tới Đội hỗ trợ EduShare vùng cao.
                  </p>
                  <button className="w-full py-2.5 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md font-semibold transition-colors flex items-center justify-center gap-2" type="button">
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
