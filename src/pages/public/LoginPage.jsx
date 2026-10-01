import React, { useState, useEffect, useRef } from "react";
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
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
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
    <div className="min-h-screen flex flex-col justify-between antialiased text-slate-800 bg-[#f8fafc]">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo & Platform Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <i className="fa-solid fa-graduation-cap text-lg"></i>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-lg text-slate-900 tracking-tight">
                  EduShare
                </span>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-1.5 py-0.5 rounded">
                  VN
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                CỔNG XÁC THỰC GIÁO DỤC QUỐC GIA
              </p>
            </div>
          </div>

          {/* Main Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a
              href="#"
              className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 flex items-center gap-1.5"
            >
              <span>Đăng nhập</span>
            </a>
            <Link
              to="/register"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Đăng ký đơn vị
            </Link>
            <a
              href="#"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Tra cứu mã định danh
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Hướng dẫn xác thực
            </a>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center space-x-4">
            {/* Hotline badge */}
            <div className="hidden lg:flex items-center space-x-2 bg-blue-50/80 border border-blue-100 px-3 py-1.5 rounded-full text-blue-700 text-xs font-medium">
              <i className="fa-solid fa-headset text-blue-600"></i>
              <span>
                TỔNG ĐÀI HỖ TRỢ{" "}
                <strong className="font-bold text-blue-900">1900 6868</strong>
              </span>
            </div>

            {/* Language switch */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-xs font-semibold">
              <span className="px-2 py-1 bg-white rounded-md text-blue-600 shadow-sm">
                VN
              </span>
              <span className="px-2 py-1 text-slate-500 cursor-pointer hover:text-slate-800">
                EN
              </span>
            </div>

            {/* Header User Icon / State */}
            <div className="relative" ref={dropdownRef}>
              {/* Anonymous state button */}
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-600 transition relative"
              >
                <i className="fa-regular fa-user text-sm"></i>
                {isLoggedIn && (
                  <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                )}
              </button>

              {/* Dropdown Menu for Logout & Profile */}
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {!isLoggedIn ? (
                    <div>
                      <div className="text-center py-3">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 text-lg">
                          <i className="fa-solid fa-shield-halved"></i>
                        </div>
                        <h4 className="text-sm font-semibold text-slate-800">
                          Chưa đăng nhập
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">
                          Đăng nhập để vào cổng quản trị điều phối thiết bị.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                        <div className="w-11 h-11 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow">
                          AN
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-1.5">
                            <h4 className="text-sm font-bold text-slate-900 truncate">
                              Nguyễn Văn An
                            </h4>
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-800">
                              VNeID C2
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 truncate">
                            an.nguyen@edushare.vn
                          </p>
                          <span className="inline-block text-[11px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full mt-1">
                            Ban Điều phối Quốc gia
                          </span>
                        </div>
                      </div>

                      <div className="py-2 text-xs text-slate-600 space-y-1">
                        <button
                          onClick={goToDashboard}
                          className="w-full flex items-center px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 font-medium"
                        >
                          <i className="fa-solid fa-gauge-high w-5 text-slate-400"></i>
                          <span>Bảng điều khiển Trung tâm</span>
                        </button>
                        <a
                          href="#"
                          className="flex items-center px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 font-medium"
                        >
                          <i className="fa-solid fa-id-card-clip w-5 text-slate-400"></i>
                          <span>Hồ sơ định danh & Chứng thư số</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 font-medium"
                        >
                          <i className="fa-solid fa-clock-rotate-left w-5 text-slate-400"></i>
                          <span>Nhật ký phiên an toàn</span>
                        </a>
                      </div>

                      {/* Logout Button */}
                      <div className="pt-2 border-t border-slate-100">
                        <button
                          onClick={() => {
                            setIsUserDropdownOpen(false);
                            setShowLogoutModal(true);
                          }}
                          className="w-full flex items-center justify-center space-x-2 px-3 py-2.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold transition"
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
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: SYSTEM MISSION & SOCIAL PROOF */}
          <div className="lg:col-span-7 space-y-8 pt-2">
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>Hạ tầng Điều phối Số & Chuyển giao Thiết bị Học đường</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] tracking-tight">
                Kiến tạo cơ hội bình đẳng học tập cho mọi trẻ em Việt Nam.
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                EduShare Vietnam kết nối trực tiếp các tập đoàn, nhà hảo tâm và
                mạng lưới tình nguyện viên với các điểm trường khó khăn trên
                toàn quốc qua chuẩn xác thực định danh quốc gia.
              </p>
            </div>

            {/* 3 Highlight Metric Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04),0_20px_25px_-5px_rgba(37,99,235,0.04)]">
                <div className="flex items-center space-x-2 text-blue-600 text-xs font-medium mb-1.5">
                  <i className="fa-solid fa-laptop"></i>
                  <span>Trao tặng</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  18,450+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-normal">
                  Máy tính & máy tính bảng
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04),0_20px_25px_-5px_rgba(37,99,235,0.04)]">
                <div className="flex items-center space-x-2 text-emerald-600 text-xs font-medium mb-1.5">
                  <i className="fa-solid fa-school"></i>
                  <span>Tiếp nhận</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  380+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-normal">
                  Điểm trường vùng cao
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04),0_20px_25px_-5px_rgba(37,99,235,0.04)]">
                <div className="flex items-center space-x-2 text-indigo-600 text-xs font-medium mb-1.5">
                  <i className="fa-solid fa-shield-check"></i>
                  <span>Minh bạch</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-normal">
                  Sổ cái EduShare Ledger
                </div>
              </div>
            </div>

            {/* Testimonial Card with Quotes */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04),0_20px_25px_-5px_rgba(37,99,235,0.04)] relative overflow-hidden">
              <span className="absolute top-2 right-4 text-7xl font-serif text-blue-100 select-none pointer-events-none">
                “
              </span>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic relative z-10 pr-6">
                "Lần đầu tiên phòng tin học của trường có đủ máy tính mở đường
                truyền Internet cho các em nhỏ bản Mèo Vạc. Từng mã máy bàn giao
                đều được đối soát minh bạch, ấm áp nghĩa đồng bào."
              </p>
              <div className="mt-4 flex items-center space-x-3 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs border border-blue-200">
                  TL
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900">
                    Thầy Lương Văn Tuấn
                  </h5>
                  <p className="text-xs text-slate-500 font-medium">
                    Hiệu phó PTDTBT THCS Giàng Chu Phìn, Hà Giang
                  </p>
                </div>
              </div>
            </div>

            {/* National Partners & Affiliations */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs text-slate-500 font-semibold tracking-wide uppercase">
                <span>LIÊN KẾT HỆ THỐNG & ĐƠN VỊ ĐỒNG HÀNH QUỐC GIA</span>
                <span className="text-emerald-600 normal-case flex items-center gap-1 font-normal">
                  <i className="fa-regular fa-circle-check"></i> Đượcc chuẩn hóa
                  dữ liệu
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-white py-2.5 px-3 rounded-xl border border-slate-200 text-center flex items-center justify-center space-x-2 text-xs font-bold text-slate-700 hover:border-blue-400 transition cursor-pointer">
                  <i className="fa-solid fa-landmark text-blue-600"></i>
                  <span>Bộ GD&ĐT</span>
                </div>
                <div className="bg-white py-2.5 px-3 rounded-xl border border-slate-200 text-center flex items-center justify-center space-x-2 text-xs font-bold text-slate-700 hover:border-red-400 transition cursor-pointer">
                  <i className="fa-solid fa-id-badge text-red-600"></i>
                  <span>VNeID C06</span>
                </div>
                <div className="bg-white py-2.5 px-3 rounded-xl border border-slate-200 text-center flex items-center justify-center space-x-2 text-xs font-bold text-slate-700 hover:border-orange-400 transition cursor-pointer">
                  <i className="fa-solid fa-truck-fast text-orange-600"></i>
                  <span>Viettel Post</span>
                </div>
                <div className="bg-white py-2.5 px-3 rounded-xl border border-slate-200 text-center flex items-center justify-center space-x-2 text-xs font-bold text-slate-700 hover:border-blue-500 transition cursor-pointer">
                  <i className="fa-solid fa-network-wired text-blue-500"></i>
                  <span>VNPT Data</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: LOGIN FORM CARD */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04),0_20px_25px_-5px_rgba(37,99,235,0.04)] relative">
              {/* Card Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Đăng Nhập Cổng Điều Phối
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Truy cập hệ thống điều phối thiết bị giáo dục quốc gia
                </p>
              </div>

              {/* PRIMARY SSO OPTION: VNeID LEVEL 2 (Red Button) */}
              <div className="space-y-3 mb-5">
                <button
                  type="button"
                  onClick={() => performQuickLogin("vneid")}
                  className="w-full bg-[#991b1b] hover:bg-[#831818] active:scale-[0.99] text-white py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center space-x-2 shadow-sm shadow-red-900/10 transition"
                >
                  <i className="fa-solid fa-star text-amber-300 text-xs"></i>
                  <span>Đăng nhập nhanh với VNeID Cấp 2</span>
                </button>

                {/* USB Token PKI / Digital Signature */}
                <button
                  type="button"
                  onClick={() => performQuickLogin("token")}
                  className="w-full bg-blue-50/70 hover:bg-blue-100/70 active:scale-[0.99] border border-blue-200 text-blue-700 py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 transition"
                >
                  <i className="fa-solid fa-key text-blue-600"></i>
                  <span>Đăng nhập bằng USB Token PKI / Chữ ký số</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center my-6">
                <div className="border-t border-slate-200 w-full"></div>
                <span className="bg-white px-3 text-[11px] font-bold text-slate-400 tracking-wider uppercase absolute">
                  HOẶC ĐĂNG NHẬP BẰNG TÀI KHOẢN
                </span>
              </div>

              {/* Standard Login Form */}
              <form onSubmit={handleFormLogin} className="space-y-4">
                {/* Username / Email / Citizen ID */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Tên đăng nhập / Email / Mã định danh CCCD
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <i className="fa-regular fa-id-card"></i>
                    </span>
                    <input
                      type="text"
                      required
                      defaultValue="an.nguyen@edushare.vn"
                      placeholder="Nhập email, số CCCD hoặc mã định danh"
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-slate-800 placeholder-slate-400 transition"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <i className="fa-solid fa-lock text-xs"></i>
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      defaultValue="••••••••••••"
                      placeholder="Nhập mật khẩu an toàn"
                      className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-slate-800 placeholder-slate-400 transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                    >
                      <i
                        className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                      ></i>
                    </button>
                  </div>
                </div>

                {/* Options: Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center space-x-2 cursor-pointer select-none text-slate-600 font-medium">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Ghi nhớ phiên đăng nhập trên thiết bị này</span>
                  </label>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Quên mật khẩu?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isAuthenticating}
                  className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center space-x-2 shadow-md shadow-blue-500/20 transition mt-2"
                >
                  <span>
                    {isAuthenticating
                      ? "Đang xác thực bảo mật..."
                      : "Đăng Nhập Hệ Thống"}
                  </span>
                  {!isAuthenticating && (
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  )}
                  {isAuthenticating && (
                    <i className="fa-solid fa-circle-notch fa-spin"></i>
                  )}
                </button>
              </form>

              {/* Register Prompt */}
              <div className="mt-6 pt-5 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-600">
                  Chưa có tài khoản tham gia?
                  <Link
                    to="/register"
                    className="text-blue-600 font-bold hover:underline ml-1"
                  >
                    Đăng ký ngay
                  </Link>
                </p>
                <p className="text-[11px] text-slate-400 mt-1 font-normal">
                  (Dành cho Nhà tài trợ, Tình nguyện viên hoặc Trường học tiếp
                  nhận)
                </p>
              </div>

              {/* Security Badge Footer */}
              <div className="mt-5 bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-start space-x-2 text-[11px] text-slate-500 leading-tight">
                <i className="fa-solid fa-shield-halved text-blue-600 mt-0.5"></i>
                <span>
                  Mọi phiên truy cập được bảo vệ bởi mã hóa RSA 4096-bit & ghi
                  nhận nhật ký an ninh.
                </span>
              </div>

              {/* Logged in state view overlay */}
              {isLoggedIn && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-between z-20">
                  <div>
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <h3 className="text-xl font-bold text-center text-slate-900">
                      Đăng Nhập Thành Công!
                    </h3>
                    <p className="text-center text-xs text-slate-500 mt-1">
                      Phiên làm việc đã được mã hóa và xác thực an toàn.
                    </p>

                    <div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow">
                          AN
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">
                            Nguyễn Văn An
                          </h4>
                          <p className="text-xs text-slate-500">
                            Ban Điều phối Quốc gia
                          </p>
                        </div>
                      </div>
                      <div className="text-xs text-slate-600 pt-2 border-t border-slate-200/60 space-y-1.5">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Phương thức:</span>
                          <span className="font-medium text-slate-700">
                            {loginMethod}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">
                            Thời gian xác thực:
                          </span>
                          <span className="font-mono text-slate-700">
                            {timeString}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">
                            Mã phiên an toàn:
                          </span>
                          <span className="font-mono text-blue-600">
                            #AUTH-9921-VN
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mt-6">
                    <button
                      onClick={goToDashboard}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-center space-x-2"
                    >
                      <span>Vào Bảng Điều Phối Trung Tâm</span>
                      <i className="fa-solid fa-arrow-right text-xs"></i>
                    </button>
                    <button
                      onClick={() => setShowLogoutModal(true)}
                      className="w-full bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-700 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 transition"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 text-center transform transition-all animate-in fade-in zoom-in-95 duration-200">
            <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 border border-red-100">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>

            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Xác Nhận Đăng Xuất
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
              Bạn có chắc chắn muốn đăng xuất khỏi Cổng điều phối Quốc gia
              EduShare? Toàn bộ các phiên làm việc và mã xác thực tạm thời sẽ
              được khóa an toàn.
            </p>

            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 my-5 text-left text-xs space-y-1.5">
              <div className="flex items-center justify-between text-slate-500">
                <span>Tài khoản:</span>
                <strong className="text-slate-800">
                  Nguyễn Văn An (Giám đốc Điều phối)
                </strong>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <span>Trạng thái:</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>{" "}
                  Đang trực tuyến
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setShowLogoutModal(false)}
                className="py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-100 transition"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                onClick={confirmLogout}
                className="py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center space-x-1.5 shadow-md shadow-red-500/20 transition"
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
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 text-xs font-medium border border-slate-800">
          <div
            className={
              toast.type === "success"
                ? "text-emerald-400 text-sm"
                : "text-blue-400 text-sm"
            }
          >
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
      <footer className="bg-white border-t border-slate-200 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* System accreditation row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="text-center md:text-left">
              <span className="font-bold text-slate-800">
                HỆ THỐNG BẢO TRỢ & ĐIỀU HÀNH
              </span>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Sáng kiến hợp tác phát triển trang thiết bị học đường số hóa
                cùng mạng lưới giáo dục cộng lập toàn quốc. Nền tảng vận hành
                dưới quy chuẩn minh bạch phi lợi nhuận.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center space-x-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-700">
                <i className="fa-solid fa-shield-halved text-blue-600"></i>
                <span>Bảo mật SSL 256-Bit</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-700">
                <i className="fa-solid fa-certificate text-emerald-600"></i>
                <span>Tiêu chuẩn An toàn ISO 27001</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-700">
                <i className="fa-solid fa-id-card text-red-600"></i>
                <span>Xác thực Định danh Số VNeID</span>
              </div>
            </div>
          </div>

          {/* Copyright and bottom links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-[11px]">
            <p>
              © 2024 EduShare Vietnam. Bảo lưu mọi quyền theo quy định Cổng
              Thông Tin Dịch Vụ Công.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-blue-600 transition">
                Điều khoản dịch vụ
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Chính sách bảo mật
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Hỗ trợ kỹ thuật
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
