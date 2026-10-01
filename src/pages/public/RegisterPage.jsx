import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [role, setRole] = useState("sponsor");
  const [vneidActive, setVneidActive] = useState(true);

  const toggleVNeID = () => setVneidActive(!vneidActive);

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#f7f9fc] font-sans text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-700">
      {/* BEGIN: MainHeader */}
      <header
        className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm"
        data-purpose="site-navigation-header"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* EduShare Logo & Tagline */}
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 text-white shadow-md shadow-blue-500/20">
              {/* Graduation Cap Icon */}
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
              </svg>
            </div>
            <div>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900">EduShare</span>
                <span className="rounded border border-blue-200 bg-blue-50 px-1.5 py-0.5 text-xs font-semibold text-blue-600">
                  VN
                </span>
              </div>
              <p className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                Cổng xác thực giáo dục quốc gia
              </p>
            </div>
          </div>
          {/* Navigation Links */}
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link className="text-slate-600 transition-colors hover:text-blue-600" to="/">
              Đăng nhập
            </Link>
            <Link className="flex items-center space-x-1 font-semibold text-blue-600" to="/register">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              <span>Đăng ký tài khoản</span>
            </Link>
            <Link className="text-slate-600 transition-colors hover:text-blue-600" to="#">
              Tra cứu mã định danh
            </Link>
            <Link className="text-slate-600 transition-colors hover:text-blue-600" to="#">
              Hướng dẫn xác thực
            </Link>
          </nav>
          {/* Utility: Hotline, Language & User Profile */}
          <div className="flex items-center space-x-3">
            {/* Hotline Badge */}
            <a
              className="hidden items-center space-x-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 transition-all hover:bg-blue-100 sm:flex"
              href="tel:19006868"
            >
              <svg className="h-3.5 w-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <span>
                TỔNG ĐÀI HỖ TRỢ <strong className="text-slate-900">1900 6868</strong>
              </span>
            </a>
            {/* Language Selector */}
            <div className="flex items-center rounded-lg border border-slate-200 bg-slate-100 p-1 text-xs font-semibold">
              <span className="cursor-pointer rounded bg-white px-2 py-0.5 text-slate-800 shadow-sm">VN</span>
              <span className="cursor-pointer px-2 py-0.5 text-slate-500 hover:text-slate-800">EN</span>
            </div>
            {/* User Avatar Circle */}
            <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white shadow-sm transition-colors hover:bg-blue-700">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </header>
      {/* END: MainHeader */}

      {/* BEGIN: StepperSection */}
      <section className="mx-auto w-full max-w-5xl px-4 pt-8 pb-4" data-purpose="stepper-progress-bar">
        <div className="relative py-2">
          {/* Connection Lines */}
          <div className="absolute top-[20px] right-[15%] left-[15%] z-10 hidden h-[2px] bg-slate-200 md:block"></div>
          <div className="absolute top-[20px] left-[15%] z-20 hidden h-[2px] w-[35%] bg-blue-600 md:block"></div>
          {/* Steps Nodes */}
          <div className="relative z-30 grid grid-cols-3 gap-2 text-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <span className="mt-2 text-[11px] font-bold tracking-wider text-blue-600 uppercase">Bước 1</span>
              <span className="mt-0.5 max-w-[130px] text-xs leading-tight font-semibold text-slate-900">
                Chọn vai trò đồng hành
              </span>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-600 shadow-sm">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  ></path>
                </svg>
              </div>
              <span className="mt-2 text-[11px] font-bold tracking-wider text-blue-600 uppercase">Bước 2</span>
              <span className="mt-0.5 max-w-[140px] text-xs leading-tight font-medium text-slate-700">
                Thông tin định danh &amp; nhu cầu
              </span>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-300 bg-slate-100 text-slate-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <span className="mt-2 text-[11px] font-bold tracking-wider text-slate-400 uppercase">Bước 3</span>
              <span className="mt-0.5 max-w-[130px] text-xs leading-tight font-medium text-slate-500">
                Xác thực &amp; Kích hoạt
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* END: StepperSection */}

      {/* BEGIN: MainContent */}
      <main className="mx-auto w-full max-w-7xl flex-grow px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* LEFT COLUMN: Thông tin & Uy tín (width 4/12) */}
          <aside className="space-y-5 lg:col-span-4" data-purpose="portal-overview-column">
            {/* Main Intro Card */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-blue-50 blur-2xl"></div>
              {/* Public Service Badge */}
              <div className="relative z-10 mb-4 inline-flex items-center space-x-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                <svg className="h-3.5 w-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
                <span>CỔNG DỊCH VỤ CÔNG SỐ HOÁ</span>
              </div>
              <h1 className="relative z-10 text-2xl leading-snug font-extrabold tracking-tight text-slate-900">
                Đăng Ký Tài Khoản Đồng Hành
              </h1>
              <p className="relative z-10 mt-3 text-xs leading-relaxed text-slate-600">
                Chung tay xây dựng mạng lưới phòng máy tin học đường đường minh bạch. Kết nối trực tiếp nguồn lực tài
                trợ tới từng điểm trường vùng sâu vùng xa trên cả nước.
              </p>
              {/* Live Stats Widget */}
              <div className="relative z-10 mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="mb-3 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="tracking-wide uppercase">MẠNG LƯỚI GHI NHẬN</span>
                  <span className="flex items-center space-x-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-medium text-emerald-600">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></span>
                    <span>Trực tuyến</span>
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-black text-blue-600">14.820+</p>
                    <p className="mt-0.5 text-[11px] text-slate-500">Máy tính đã trao</p>
                  </div>
                  <div className="border-l border-slate-200 pl-4">
                    <p className="text-2xl font-black text-slate-800">380+</p>
                    <p className="mt-0.5 text-[11px] text-slate-500">Điểm trường bản cao</p>
                  </div>
                </div>
              </div>
              {/* Transparency Notice */}
              <div className="relative z-10 mt-5 flex items-start space-x-3 rounded-xl border border-blue-100 bg-blue-50/70 p-3.5">
                <div className="mt-0.5 shrink-0 rounded-lg bg-blue-600 p-2 text-white">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Minh bạch mã định danh &amp; VNeID</h4>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-slate-600">
                    Toàn bộ trang thiết bị và điểm nhận được số hoá nhiệt ký bằng mã QR định danh, giám sát công khai
                    theo chuẩn quốc gia.
                  </p>
                </div>
              </div>
              {/* Already have account link */}
              <div className="relative z-10 mt-6 border-t border-slate-100 pt-4 text-center">
                <span className="text-xs text-slate-500">Đã có tài khoản hệ thống? </span>
                <Link
                  className="ml-1 inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
                  to="/"
                >
                  Đăng nhập ngay
                  <svg className="ml-1 h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            {/* 24/7 Support Card */}
            <div className="flex items-center space-x-3.5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-800">Hỗ trợ đối tác đăng ký</h5>
                <p className="text-[11px] text-slate-500">Kỹ thuật viên EduShare thường trực 24/7 qua 1900 6868</p>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: Các bước biểu mẫu (width 8/12) */}
          <section className="space-y-6 lg:col-span-8" data-purpose="registration-form-column">
            {/* ================= BƯỚC 1 ================= */}
            <article
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              data-purpose="step-1-role-selection"
            >
              {/* Step Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    1
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Bước 1: Chọn vai trò của bạn cùng EduShare</h3>
                    <p className="text-xs text-slate-500">
                      Vui lòng chọn 1 trong 2 nhóm vai trò chính để thiết lập biểu mẫu định danh phù hợp
                    </p>
                  </div>
                </div>
                <span className="rounded border border-rose-200 bg-rose-50 px-2 py-0.5 text-[10px] font-bold tracking-wider text-rose-600 uppercase">
                  Bắt buộc
                </span>
              </div>
              {/* Role Cards Grid */}
              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Role 1 */}
                <div
                  className={`relative cursor-pointer rounded-xl p-4 transition-all ${
                    role === "sponsor"
                      ? "border-2 border-blue-600 bg-blue-50/30 hover:shadow-md"
                      : "border border-slate-200 bg-white opacity-90 hover:border-slate-300 hover:shadow-sm"
                  }`}
                  onClick={() => setRole("sponsor")}
                >
                  {role === "sponsor" && (
                    <div className="absolute top-3 right-3 text-blue-600">
                      <svg className="h-5 w-5 fill-blue-600 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        ></path>
                      </svg>
                    </div>
                  )}
                  <span
                    className={`rounded px-2 py-0.5 text-[10px] font-extrabold ${role === "sponsor" ? "bg-blue-100/80 text-blue-700" : "bg-slate-100 text-slate-600"}`}
                  >
                    VAI TRÒ 01
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-slate-900">Nhà Tài Trợ &amp; TNV</h4>
                  <p className={`text-[11px] font-semibold ${role === "sponsor" ? "text-blue-600" : "text-slate-500"}`}>
                    Cung ứng thiết bị, kinh phí &amp; Hỗ trợ kỹ thuật
                  </p>
                  <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
                    Dành cho Cá nhân, Doanh nghiệp hảo tâm tài trợ máy tính, linh kiện, hoặc Tình nguyện viên kỹ thuật
                    IT tham gia vận chuyển, kiểm định và cài đặt phòng máy học đường.
                  </p>
                  <div
                    className={`mt-3 border-t pt-3 ${role === "sponsor" ? "border-slate-200/60" : "border-slate-100"}`}
                  >
                    <p className="mb-1.5 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      Quyền lợi &amp; Định danh:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="rounded border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-700">
                        Cá nhân / Doanh nghiệp
                      </span>
                      <span className="rounded border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-700">
                        Đội IT &amp; Logistics
                      </span>
                      <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                        Cấp chứng nhận đồng hành
                      </span>
                    </div>
                  </div>
                </div>
                {/* Role 2 */}
                <div
                  className={`relative cursor-pointer rounded-xl p-4 transition-all ${
                    role === "school"
                      ? "border-2 border-blue-600 bg-blue-50/30 hover:shadow-md"
                      : "border border-slate-200 bg-white opacity-90 hover:border-slate-300 hover:shadow-sm"
                  }`}
                  onClick={() => setRole("school")}
                >
                  {role === "school" && (
                    <div className="absolute top-3 right-3 text-blue-600">
                      <svg className="h-5 w-5 fill-blue-600 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        ></path>
                      </svg>
                    </div>
                  )}
                  <span
                    className={`rounded px-2 py-0.5 text-[10px] font-extrabold ${role === "school" ? "bg-blue-100/80 text-blue-700" : "bg-slate-100 text-slate-600"}`}
                  >
                    VAI TRÒ 02
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-slate-900">Trường Học &amp; Điểm Tiếp Nhận</h4>
                  <p className={`text-[11px] font-semibold ${role === "school" ? "text-blue-600" : "text-slate-500"}`}>
                    Đăng ký tiếp nhận tài trợ phòng tin học
                  </p>
                  <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
                    Dành cho Trường học vùng cao, vùng biên giới hải đảo, điểm trường bán trú khó khăn hoặc các cơ sở
                    bảo trợ xã hội có nhu cầu hỗ trợ máy tính cho học sinh thực hành.
                  </p>
                  <div
                    className={`mt-3 border-t pt-3 ${role === "school" ? "border-slate-200/60" : "border-slate-100"}`}
                  >
                    <p className="mb-1.5 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      Quy chuẩn xét duyệt:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                        Tiểu học / THCS / THPT
                      </span>
                      <span className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                        Cơ sở bảo trợ xã hội
                      </span>
                      <span className="rounded border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
                        Xác thực Bộ GD&amp;ĐT
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* ================= BƯỚC 2 ================= */}
            <article
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              data-purpose="step-2-identity-form"
            >
              {/* Step Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    2
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Bước 2: Thông tin định danh &amp; Nguồn lực đóng góp
                    </h3>
                    <p className="text-xs text-slate-500">Dành cho Nhà tài trợ và Tình nguyện viên tham gia dự án</p>
                  </div>
                </div>
                <span className="rounded border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-bold tracking-wider text-blue-700 uppercase">
                  {role === "sponsor" ? "Nhà tài trợ & TNV" : "Trường học & Cơ sở"}
                </span>
              </div>
              <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
                {/* Tư cách tham gia (Radio groups) */}
                <div>
                  <label className="mb-2 block text-xs font-bold text-slate-700">
                    Hình thức tư cách tham gia <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                    {/* Radio Option 1 */}
                    <label className="flex cursor-pointer items-start rounded-lg border border-blue-500 bg-blue-50/40 p-3">
                      <input
                        defaultChecked
                        className="mt-0.5 h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
                        name="entity_type"
                        type="radio"
                        value="enterprise"
                      />
                      <div className="ml-2.5 text-xs">
                        <span className="block leading-tight font-bold text-slate-900">Doanh nghiệp / Tổ chức</span>
                        <span className="text-[10px] text-slate-500">Tài trợ cơ bản lớn &amp; GTGT</span>
                      </div>
                    </label>
                    {/* Radio Option 2 */}
                    <label className="flex cursor-pointer items-start rounded-lg border border-slate-200 bg-white p-3 hover:border-slate-300">
                      <input
                        className="mt-0.5 h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
                        name="entity_type"
                        type="radio"
                        value="individual"
                      />
                      <div className="ml-2.5 text-xs">
                        <span className="block leading-tight font-semibold text-slate-800">Cá nhân hảo tâm</span>
                        <span className="text-[10px] text-slate-500">Đóng góp độc lập</span>
                      </div>
                    </label>
                    {/* Radio Option 3 */}
                    <label className="flex cursor-pointer items-start rounded-lg border border-slate-200 bg-white p-3 hover:border-slate-300">
                      <input
                        className="mt-0.5 h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
                        name="entity_type"
                        type="radio"
                        value="volunteer"
                      />
                      <div className="ml-2.5 text-xs">
                        <span className="block leading-tight font-semibold text-slate-800">
                          Tình nguyện viên thực địa
                        </span>
                        <span className="text-[10px] text-slate-500">Hỗ trợ IT &amp; Vận chuyển</span>
                      </div>
                    </label>
                  </div>
                </div>
                {/* Input Fields Grid */}
                <div className="grid grid-cols-1 gap-4 pt-1 md:grid-cols-2">
                  {/* Field 1 */}
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-700" htmlFor="org_name">
                      Họ và tên / Tên đơn vị đại diện <span className="text-rose-500">*</span>
                    </label>
                    <input
                      className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-xs outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      id="org_name"
                      placeholder="Ví dụ: Nguyễn Văn A hoặc Công ty CP Công Nghệ.."
                      type="text"
                    />
                  </div>
                  {/* Field 2 */}
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-700" htmlFor="tax_id">
                      Mã số thuế / Số CCCD định danh <span className="text-rose-500">*</span>
                    </label>
                    <input
                      className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-xs outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      id="tax_id"
                      placeholder="Nhập mã số thuế (DN) hoặc CCCD 12 số"
                      type="text"
                    />
                  </div>
                  {/* Field 3 */}
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-700" htmlFor="email">
                      Email liên hệ xác thực <span className="text-rose-500">*</span>
                    </label>
                    <input
                      className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-xs outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      id="email"
                      placeholder="partner@domain.com"
                      type="email"
                    />
                  </div>
                  {/* Field 4 */}
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-700" htmlFor="phone">
                      Số điện thoại di động <span className="text-rose-500">*</span>
                    </label>
                    <input
                      className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-xs outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      id="phone"
                      placeholder="0912 345 678"
                      type="tel"
                    />
                  </div>
                </div>
              </form>
            </article>

            {/* ================= BƯỚC 3 ================= */}
            <article
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              data-purpose="step-3-verification-submit"
            >
              {/* Step Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    3
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Bước 3: Xác thực an toàn &amp; Kích hoạt tài khoản
                    </h3>
                    <p className="text-xs text-slate-500">
                      Đảm bảo tính chính danh và bảo mật tuyệt đối cho hệ thống học đường
                    </p>
                  </div>
                </div>
                <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold tracking-wider text-emerald-700 uppercase">
                  Bảo mật ISO 27001
                </span>
              </div>
              <div className="mt-5 space-y-5">
                {/* VNeID Level 2 Callout Box */}
                <div className="flex flex-col justify-between gap-4 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50/80 via-indigo-50/40 to-white p-4 sm:flex-row sm:items-center">
                  <div className="flex items-start space-x-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-500 text-white shadow-md shadow-rose-500/20">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="text-xs font-bold text-slate-900">Liên kết xác thực VNeID Cấp 2</h4>
                        <span className="rounded bg-emerald-600 px-1.5 py-0.5 text-[9px] font-extrabold tracking-wider text-white uppercase">
                          KHUYẾN DÙNG
                        </span>
                      </div>
                      <p className="mt-1 max-w-lg text-[11px] leading-relaxed text-slate-600">
                        Kích hoạt tích xanh minh bạch ngay lập tức, tự động chuẩn hoá hồ sơ tài trợ và tiếp nhận trang
                        thiết bị.
                      </p>
                    </div>
                  </div>
                  {/* Toggle Switch */}
                  <div className="flex shrink-0 items-center space-x-2.5 self-end sm:self-center">
                    <button
                      aria-checked={vneidActive}
                      className={`${vneidActive ? "bg-blue-600" : "bg-slate-300"} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none`}
                      onClick={toggleVNeID}
                      role="switch"
                      type="button"
                    >
                      <span
                        className={`${vneidActive ? "translate-x-5" : "translate-x-0"} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                      ></span>
                    </button>
                    <span
                      className={
                        vneidActive ? "text-xs font-bold text-blue-700" : "text-xs font-semibold text-slate-500"
                      }
                    >
                      {vneidActive ? "Liên kết ngay" : "Chưa liên kết"}
                    </span>
                  </div>
                </div>
                {/* Agreement Checkbox */}
                <div className="flex items-start space-x-3 pt-1">
                  <input
                    defaultChecked
                    className="mt-0.5 h-4 w-4 cursor-pointer rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    id="terms"
                    type="checkbox"
                  />
                  <label className="cursor-pointer text-xs leading-relaxed text-slate-600 select-none" htmlFor="terms">
                    Tôi cam kết toàn bộ thông tin đăng ký là hoàn toàn chính xác, đồng ý tuân thủ{" "}
                    <Link className="font-semibold text-blue-600 hover:underline" to="#">
                      Quy chế tiếp nhận &amp; tài trợ giáo dục phi lợi nhuận
                    </Link>{" "}
                    và chấp thuận{" "}
                    <Link className="font-semibold text-blue-600 hover:underline" to="#">
                      Điều khoản Bảo mật Dữ liệu Quốc gia
                    </Link>{" "}
                    của EduShare Vietnam.
                  </label>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row">
                  <button
                    className="group flex w-full items-center justify-center space-x-2 rounded-xl bg-blue-600 px-6 py-3 text-xs font-bold text-white shadow-md shadow-blue-600/30 transition-all hover:bg-blue-700 sm:flex-1"
                    type="button"
                  >
                    <span>Hoàn Tất Đăng Ký Tài Khoản</span>
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                  <button
                    className="flex w-full items-center justify-center space-x-1.5 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
                    type="button"
                  >
                    <svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      ></path>
                    </svg>
                    <span>Làm mới biểu mẫu</span>
                  </button>
                </div>
                {/* Bottom redirect link */}
                <div className="pt-2 text-center">
                  <span className="text-xs text-slate-500">Đã có tài khoản hệ thống? </span>
                  <Link className="text-xs font-bold text-blue-600 hover:underline" to="/">
                    Đăng nhập ngay →
                  </Link>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
      {/* END: MainContent */}

      {/* BEGIN: MainFooter */}
      <footer className="mt-12 border-t border-slate-200 bg-white py-8" data-purpose="system-footer">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          {/* Top Row: Description & Security Badges */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            {/* Logo & Description */}
            <div className="max-w-2xl">
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
                <h4 className="text-xs font-bold tracking-wide text-slate-900 uppercase">
                  EduShare Vietnam - Hệ thống bảo trợ &amp; Điều hành Giáo dục số
                </h4>
              </div>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                Sáng kiến hợp tác phát triển trang thiết bị học đường số hóa cùng mạng lưới giáo dục cộng lập toàn quốc.
                Nền tảng vận hành dưới quy chuẩn minh bạch phi lợi nhuận.
              </p>
            </div>
            {/* 3 Security Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {/* SSL Badge */}
              <div className="flex items-center space-x-1.5 rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                <svg className="h-3.5 w-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
                <span>Bảo mật SSL 256-Bit</span>
              </div>
              {/* ISO Badge */}
              <div className="flex items-center space-x-1.5 rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                <svg className="h-3.5 w-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
                <span>Tiêu chuẩn ISO 27001</span>
              </div>
              {/* VNeID Badge */}
              <div className="flex items-center space-x-1.5 rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                <svg className="h-3.5 w-3.5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  ></path>
                </svg>
                <span>Tích hợp VNeID Cấp 2</span>
              </div>
            </div>
          </div>
          {/* Bottom Row: Copyright & Legal Links */}
          <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-100 pt-4 text-[11px] text-slate-400 sm:flex-row">
            <p>© 2024 EduShare Vietnam. Bảo lưu mọi quyền theo quy định Cổng Thông Tin Dịch Vụ Công.</p>
            <div className="flex items-center space-x-4">
              <Link className="transition-colors hover:text-slate-600" to="#">
                Điều khoản dịch vụ
              </Link>
              <span>•</span>
              <Link className="transition-colors hover:text-slate-600" to="#">
                Chính sách bảo mật
              </Link>
              <span>•</span>
              <Link className="transition-colors hover:text-slate-600" to="#">
                Hỗ trợ kỹ thuật
              </Link>
            </div>
          </div>
        </div>
      </footer>
      {/* END: MainFooter */}
    </div>
  );
}
