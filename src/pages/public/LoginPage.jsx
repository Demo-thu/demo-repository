import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginMethod, setLoginMethod] = useState("Tài khoản thường");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "success",
  });

  const dropdownRef = useRef(null);

  useEffect(() => {
    // Add FontAwesome if not present
    if (!document.getElementById("font-awesome-cdn")) {
      const link = document.createElement("link");
      link.id = "font-awesome-cdn";
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
      document.head.appendChild(link);
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showToastMsg = (message, type = "success") => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3500);
  };

  const handleFormLogin = (e) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      setLoggedInState(true, "Mật khẩu & Mã hóa SSL");
    }, 700);
  };

  const performQuickLogin = (type) => {
    if (type === "vneid") {
      showToastMsg("Đang kết nối Cổng định danh VNeID C06...", "info");
      setTimeout(() => {
        setLoggedInState(true, "VNeID Cấp 2 (Bộ Công An)");
      }, 600);
    } else if (type === "token") {
      showToastMsg("Đang đọc chữ ký số PKI Token...", "info");
      setTimeout(() => {
        setLoggedInState(true, "USB Token PKI / Chữ ký số CA");
      }, 600);
    }
  };

  const setLoggedInState = (loggedIn, method = "Tài khoản thường") => {
    setIsLoggedIn(loggedIn);
    setLoginMethod(method);
    if (loggedIn) {
      showToastMsg("Đăng nhập thành công! Chào mừng Nguyễn Văn An.", "success");
    }
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    setLoggedInState(false);
    showToastMsg("Đã đăng xuất an toàn khỏi EduShare Vietnam.", "info");
  };

  const goToDashboard = () => {
    showToastMsg("Chuyển hướng đến Trung tâm Điều hành EduShare...", "info");
    navigate("/");
  };

  const now = new Date();
  const timeString = `Hôm nay ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#f8fafc] text-slate-800 antialiased">
      {/* Top Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo & Platform Name */}
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
              <i className="fa-solid fa-graduation-cap text-lg"></i>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-lg font-bold tracking-tight text-slate-900">EduShare</span>
                <span className="rounded bg-blue-50 px-1.5 py-0.5 text-xs font-bold tracking-wider text-blue-600 uppercase">
                  VN
                </span>
              </div>
              <p className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                CỔNG XÁC THỰC GIÁO DỤC QUỐC GIA
              </p>
            </div>
          </div>

          {/* Main Navigation Links */}
          <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
            <a
              href="#"
              className="flex items-center gap-1.5 border-b-2 border-blue-600 pb-1 font-semibold text-blue-600"
            >
              <span>Đăng nhập</span>
            </a>
            <Link to="/register" className="text-slate-600 transition hover:text-blue-600">
              Đăng ký đơn vị
            </Link>
            <a href="#" className="text-slate-600 transition hover:text-blue-600">
              Tra cứu mã định danh
            </a>
            <a href="#" className="text-slate-600 transition hover:text-blue-600">
              Hướng dẫn xác thực
            </a>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center space-x-4">
            {/* Hotline badge */}
            <div className="hidden items-center space-x-2 rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1.5 text-xs font-medium text-blue-700 lg:flex">
              <i className="fa-solid fa-headset text-blue-600"></i>
              <span>
                TỔNG ĐÀI HỖ TRỢ <strong className="font-bold text-blue-900">1900 6868</strong>
              </span>
            </div>

            {/* Language switch */}
            <div className="flex items-center rounded-lg bg-slate-100 p-0.5 text-xs font-semibold">
              <span className="rounded-md bg-white px-2 py-1 text-blue-600 shadow-sm">VN</span>
              <span className="cursor-pointer px-2 py-1 text-slate-500 hover:text-slate-800">EN</span>
            </div>

            {/* Header User Icon / State */}
            <div className="relative" ref={dropdownRef}>
              {/* Anonymous state button */}
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-600 transition hover:bg-slate-200"
              >
                <i className="fa-regular fa-user text-sm"></i>
                {isLoggedIn && (
                  <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500"></span>
                )}
              </button>

              {/* Dropdown Menu for Logout & Profile */}
              {isUserDropdownOpen && (
                <div className="animate-in fade-in zoom-in-95 absolute right-0 z-50 mt-2 w-72 rounded-xl border border-slate-100 bg-white p-3 shadow-xl duration-150">
                  {!isLoggedIn ? (
                    <div>
                      <div className="py-3 text-center">
                        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-lg text-blue-600">
                          <i className="fa-solid fa-shield-halved"></i>
                        </div>
                        <h4 className="text-sm font-semibold text-slate-800">Chưa đăng nhập</h4>
                        <p className="mt-1 text-xs text-slate-500">
                          Đăng nhập để vào cổng quản trị điều phối thiết bị.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center space-x-3 border-b border-slate-100 pb-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow">
                          AN
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center space-x-1.5">
                            <h4 className="truncate text-sm font-bold text-slate-900">Nguyễn Văn An</h4>
                            <span className="inline-flex items-center rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-medium text-emerald-800">
                              VNeID C2
                            </span>
                          </div>
                          <p className="truncate text-xs text-slate-500">an.nguyen@edushare.vn</p>
                          <span className="mt-1 inline-block rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-600">
                            Ban Điều phối Quốc gia
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1 py-2 text-xs text-slate-600">
                        <button
                          onClick={goToDashboard}
                          className="flex w-full items-center rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-50"
                        >
                          <i className="fa-solid fa-gauge-high w-5 text-slate-400"></i>
                          <span>Bảng điều khiển Trung tâm</span>
                        </button>
                        <a
                          href="#"
                          className="flex items-center rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-50"
                        >
                          <i className="fa-solid fa-id-card-clip w-5 text-slate-400"></i>
                          <span>Hồ sơ định danh & Chứng thư số</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-50"
                        >
                          <i className="fa-solid fa-clock-rotate-left w-5 text-slate-400"></i>
                          <span>Nhật ký phiên an toàn</span>
                        </a>
                      </div>

                      {/* Logout Button */}
                      <div className="border-t border-slate-100 pt-2">
                        <button
                          onClick={() => {
                            setIsUserDropdownOpen(false);
                            setShowLogoutModal(true);
                          }}
                          className="flex w-full items-center justify-center space-x-2 rounded-lg bg-red-50 px-3 py-2.5 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                        >
                          <i className="fa-solid fa-arrow-right-from-bracket"></i>
                          <span>Đăng Xuất Khỏi Hệ Thống</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* MAIN BODY LAYOUT (TWO COLUMNS 1:1) */}
      <main className="mx-auto w-full max-w-7xl flex-grow px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT COLUMN: SYSTEM MISSION & SOCIAL PROOF */}
          <div className="space-y-8 pt-2 lg:col-span-7">
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 rounded-full border border-blue-200/60 bg-blue-50 px-3.5 py-1.5 text-xs font-medium text-blue-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600"></span>
              <span>Hạ tầng Điều phối Số & Chuyển giao Thiết bị Học đường</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl leading-[1.2] font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Kiến tạo cơ hội bình đẳng học tập cho mọi trẻ em Việt Nam.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed font-normal text-slate-600 sm:text-lg">
                EduShare Vietnam kết nối trực tiếp các tập đoàn, nhà hảo tâm và mạng lưới tình nguyện viên với các điểm
                trường khó khăn trên toàn quốc qua chuẩn xác thực định danh quốc gia.
              </p>
            </div>

            {/* 3 Highlight Metric Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04),0_20px_25px_-5px_rgba(37,99,235,0.04)] sm:p-5">
                <div className="mb-1.5 flex items-center space-x-2 text-xs font-medium text-blue-600">
                  <i className="fa-solid fa-laptop"></i>
                  <span>Trao tặng</span>
                </div>
                <div className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">18,450+</div>
                <div className="mt-1 text-[11px] font-normal text-slate-500 sm:text-xs">Máy tính & máy tính bảng</div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04),0_20px_25px_-5px_rgba(37,99,235,0.04)] sm:p-5">
                <div className="mb-1.5 flex items-center space-x-2 text-xs font-medium text-emerald-600">
                  <i className="fa-solid fa-school"></i>
                  <span>Tiếp nhận</span>
                </div>
                <div className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">380+</div>
                <div className="mt-1 text-[11px] font-normal text-slate-500 sm:text-xs">Điểm trường vùng cao</div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04),0_20px_25px_-5px_rgba(37,99,235,0.04)] sm:p-5">
                <div className="mb-1.5 flex items-center space-x-2 text-xs font-medium text-indigo-600">
                  <i className="fa-solid fa-shield-check"></i>
                  <span>Minh bạch</span>
                </div>
                <div className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">100%</div>
                <div className="mt-1 text-[11px] font-normal text-slate-500 sm:text-xs">Sổ cái EduShare Ledger</div>
              </div>
            </div>

            {/* Testimonial Card with Quotes */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04),0_20px_25px_-5px_rgba(37,99,235,0.04)]">
              <span className="pointer-events-none absolute top-2 right-4 font-serif text-7xl text-blue-100 select-none">
                “
              </span>
              <p className="relative z-10 pr-6 text-sm leading-relaxed text-slate-700 italic sm:text-base">
                "Lần đầu tiên phòng tin học của trường có đủ máy tính mở đường truyền Internet cho các em nhỏ bản Mèo
                Vạc. Từng mã máy bàn giao đều được đối soát minh bạch, ấm áp nghĩa đồng bào."
              </p>
              <div className="mt-4 flex items-center space-x-3 border-t border-slate-100 pt-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-blue-100 text-xs font-bold text-blue-700">
                  TL
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900">Thầy Lương Văn Tuấn</h5>
                  <p className="text-xs font-medium text-slate-500">Hiệu phó PTDTBT THCS Giàng Chu Phìn, Hà Giang</p>
                </div>
              </div>
            </div>

            {/* National Partners & Affiliations */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs font-semibold tracking-wide text-slate-500 uppercase">
                <span>LIÊN KẾT HỆ THỐNG & ĐƠN VỊ ĐỒNG HÀNH QUỐC GIA</span>
                <span className="flex items-center gap-1 font-normal text-emerald-600 normal-case">
                  <i className="fa-regular fa-circle-check"></i> Đượcc chuẩn hóa dữ liệu
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="flex cursor-pointer items-center justify-center space-x-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-xs font-bold text-slate-700 transition hover:border-blue-400">
                  <i className="fa-solid fa-landmark text-blue-600"></i>
                  <span>Bộ GD&ĐT</span>
                </div>
                <div className="flex cursor-pointer items-center justify-center space-x-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-xs font-bold text-slate-700 transition hover:border-red-400">
                  <i className="fa-solid fa-id-badge text-red-600"></i>
                  <span>VNeID C06</span>
                </div>
                <div className="flex cursor-pointer items-center justify-center space-x-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-xs font-bold text-slate-700 transition hover:border-orange-400">
                  <i className="fa-solid fa-truck-fast text-orange-600"></i>
                  <span>Viettel Post</span>
                </div>
                <div className="flex cursor-pointer items-center justify-center space-x-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-xs font-bold text-slate-700 transition hover:border-blue-500">
                  <i className="fa-solid fa-network-wired text-blue-500"></i>
                  <span>VNPT Data</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: LOGIN FORM CARD */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04),0_20px_25px_-5px_rgba(37,99,235,0.04)] sm:p-8">
              {/* Card Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Đăng Nhập Cổng Điều Phối</h2>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Truy cập hệ thống điều phối thiết bị giáo dục quốc gia
                </p>
              </div>

              {/* PRIMARY SSO OPTION: VNeID LEVEL 2 (Red Button) */}
              <div className="mb-5 space-y-3">
                <button
                  type="button"
                  onClick={() => performQuickLogin("vneid")}
                  className="flex w-full items-center justify-center space-x-2 rounded-xl bg-[#991b1b] px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-red-900/10 transition hover:bg-[#831818] active:scale-[0.99]"
                >
                  <i className="fa-solid fa-star text-xs text-amber-300"></i>
                  <span>Đăng nhập nhanh với VNeID Cấp 2</span>
                </button>

                {/* USB Token PKI / Digital Signature */}
                <button
                  type="button"
                  onClick={() => performQuickLogin("token")}
                  className="flex w-full items-center justify-center space-x-2 rounded-xl border border-blue-200 bg-blue-50/70 px-4 py-2.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-100/70 active:scale-[0.99]"
                >
                  <i className="fa-solid fa-key text-blue-600"></i>
                  <span>Đăng nhập bằng USB Token PKI / Chữ ký số</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative my-6 flex items-center justify-center">
                <div className="w-full border-t border-slate-200"></div>
                <span className="absolute bg-white px-3 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  HOẶC ĐĂNG NHẬP BẰNG TÀI KHOẢN
                </span>
              </div>

              {/* Standard Login Form */}
              <form onSubmit={handleFormLogin} className="space-y-4">
                {/* Username / Email / Citizen ID */}
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Tên đăng nhập / Email / Mã định danh CCCD
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                      <i className="fa-regular fa-id-card"></i>
                    </span>
                    <input
                      type="text"
                      required
                      defaultValue="an.nguyen@edushare.vn"
                      placeholder="Nhập email, số CCCD hoặc mã định danh"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-4 pl-10 text-sm text-slate-800 placeholder-slate-400 transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">Mật khẩu</label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                      <i className="fa-solid fa-lock text-xs"></i>
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      defaultValue="••••••••••••"
                      placeholder="Nhập mật khẩu an toàn"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-10 pl-10 text-sm text-slate-800 placeholder-slate-400 transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600"
                    >
                      <i className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                    </button>
                  </div>
                </div>

                {/* Options: Remember Me & Forgot Password */}
                <div className="flex items-center justify-between pt-1 text-xs">
                  <label className="flex cursor-pointer items-center space-x-2 font-medium text-slate-600 select-none">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Ghi nhớ phiên đăng nhập trên thiết bị này</span>
                  </label>
                  <a href="#" className="font-semibold text-blue-600 hover:underline">
                    Quên mật khẩu?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isAuthenticating}
                  className="mt-2 flex w-full items-center justify-center space-x-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700 active:scale-[0.99]"
                >
                  <span>{isAuthenticating ? "Đang xác thực bảo mật..." : "Đăng Nhập Hệ Thống"}</span>
                  {!isAuthenticating && <i className="fa-solid fa-arrow-right text-xs"></i>}
                  {isAuthenticating && <i className="fa-solid fa-circle-notch fa-spin"></i>}
                </button>
              </form>

              {/* Register Prompt */}
              <div className="mt-6 border-t border-slate-100 pt-5 text-center">
                <p className="text-xs text-slate-600">
                  Chưa có tài khoản tham gia?
                  <Link to="/register" className="ml-1 font-bold text-blue-600 hover:underline">
                    Đăng ký ngay
                  </Link>
                </p>
                <p className="mt-1 text-[11px] font-normal text-slate-400">
                  (Dành cho Nhà tài trợ, Tình nguyện viên hoặc Trường học tiếp nhận)
                </p>
              </div>

              {/* Security Badge Footer */}
              <div className="mt-5 flex items-start space-x-2 rounded-xl border border-slate-100 bg-slate-50 p-3 text-[11px] leading-tight text-slate-500">
                <i className="fa-solid fa-shield-halved mt-0.5 text-blue-600"></i>
                <span>Mọi phiên truy cập được bảo vệ bởi mã hóa RSA 4096-bit & ghi nhận nhật ký an ninh.</span>
              </div>

              {/* Logged in state view overlay */}
              {isLoggedIn && (
                <div className="absolute inset-0 z-20 flex flex-col justify-between rounded-3xl bg-white/95 p-8 backdrop-blur-sm">
                  <div>
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-600">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <h3 className="text-center text-xl font-bold text-slate-900">Đăng Nhập Thành Công!</h3>
                    <p className="mt-1 text-center text-xs text-slate-500">
                      Phiên làm việc đã được mã hóa và xác thực an toàn.
                    </p>

                    <div className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow">
                          AN
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">Nguyễn Văn An</h4>
                          <p className="text-xs text-slate-500">Ban Điều phối Quốc gia</p>
                        </div>
                      </div>
                      <div className="space-y-1.5 border-t border-slate-200/60 pt-2 text-xs text-slate-600">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Phương thức:</span>
                          <span className="font-medium text-slate-700">{loginMethod}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Thời gian xác thực:</span>
                          <span className="font-mono text-slate-700">{timeString}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Mã phiên an toàn:</span>
                          <span className="font-mono text-blue-600">#AUTH-9921-VN</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <button
                      onClick={goToDashboard}
                      className="flex w-full items-center justify-center space-x-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                      <span>Vào Bảng Điều Phối Trung Tâm</span>
                      <i className="fa-solid fa-arrow-right text-xs"></i>
                    </button>
                    <button
                      onClick={() => setShowLogoutModal(true)}
                      className="flex w-full items-center justify-center space-x-2 rounded-xl bg-slate-100 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-red-50 hover:text-red-600"
                    >
                      <i className="fa-solid fa-arrow-right-from-bracket"></i>
                      <span>Đăng xuất phiên làm việc này</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* MODAL DIALOG XÁC NHẬN ĐĂNG XUẤT (LOGOUT CONFIRMATION) */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
          <div className="animate-in fade-in zoom-in-95 w-full max-w-md transform rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-2xl transition-all duration-200 sm:p-7">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-100 bg-red-50 text-2xl text-red-600">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>

            <h3 className="text-xl font-bold tracking-tight text-slate-900">Xác Nhận Đăng Xuất</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Bạn có chắc chắn muốn đăng xuất khỏi Cổng điều phối Quốc gia EduShare? Toàn bộ các phiên làm việc và mã
              xác thực tạm thời sẽ được khóa an toàn.
            </p>

            <div className="my-5 space-y-1.5 rounded-xl border border-slate-200/80 bg-slate-50 p-3 text-left text-xs">
              <div className="flex items-center justify-between text-slate-500">
                <span>Tài khoản:</span>
                <strong className="text-slate-800">Nguyễn Văn An (Giám đốc Điều phối)</strong>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <span>Trạng thái:</span>
                <span className="flex items-center gap-1 font-semibold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Đang trực tuyến
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setShowLogoutModal(false)}
                className="rounded-xl border border-slate-300 px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 sm:text-sm"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                onClick={confirmLogout}
                className="flex items-center justify-center space-x-1.5 rounded-xl bg-red-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-red-500/20 transition hover:bg-red-700 sm:text-sm"
              >
                <i className="fa-solid fa-power-off text-xs"></i>
                <span>Đăng Xuất Ngay</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast.visible && (
        <div className="fixed right-6 bottom-6 z-50 flex items-center space-x-3 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-xs font-medium text-white shadow-2xl">
          <div className={toast.type === "success" ? "text-sm text-emerald-400" : "text-sm text-blue-400"}>
            {toast.type === "success" ? (
              <i className="fa-solid fa-circle-check"></i>
            ) : (
              <i className="fa-solid fa-circle-info"></i>
            )}
          </div>
          <span>{toast.message}</span>
        </div>
      )}

      {/* Bottom Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-xs text-slate-500">
        <div className="mx-auto max-w-7xl space-y-4 px-4 sm:px-6 lg:px-8">
          {/* System accreditation row */}
          <div className="flex flex-col items-center justify-between gap-4 border-b border-slate-100 pb-4 md:flex-row">
            <div className="text-center md:text-left">
              <span className="font-bold text-slate-800">HỆ THỐNG BẢO TRỢ & ĐIỀU HÀNH</span>
              <p className="mt-0.5 text-[11px] text-slate-500">
                Sáng kiến hợp tác phát triển trang thiết bị học đường số hóa cùng mạng lưới giáo dục cộng lập toàn quốc.
                Nền tảng vận hành dưới quy chuẩn minh bạch phi lợi nhuận.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center space-x-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                <i className="fa-solid fa-shield-halved text-blue-600"></i>
                <span>Bảo mật SSL 256-Bit</span>
              </div>
              <div className="flex items-center space-x-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                <i className="fa-solid fa-certificate text-emerald-600"></i>
                <span>Tiêu chuẩn An toàn ISO 27001</span>
              </div>
              <div className="flex items-center space-x-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                <i className="fa-solid fa-id-card text-red-600"></i>
                <span>Xác thực Định danh Số VNeID</span>
              </div>
            </div>
          </div>

          {/* Copyright and bottom links */}
          <div className="flex flex-col items-center justify-between gap-2 text-[11px] md:flex-row">
            <p>© 2024 EduShare Vietnam. Bảo lưu mọi quyền theo quy định Cổng Thông Tin Dịch Vụ Công.</p>
            <div className="flex items-center space-x-6">
              <a href="#" className="transition hover:text-blue-600">
                Điều khoản dịch vụ
              </a>
              <a href="#" className="transition hover:text-blue-600">
                Chính sách bảo mật
              </a>
              <a href="#" className="transition hover:text-blue-600">
                Hỗ trợ kỹ thuật
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
