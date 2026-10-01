import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DonorCertificatesPage() {
  const [shareText, setShareText] = useState("Chia sẻ");

  const handleShareClick = () => {
    const shareUrl = "https://edushare.vn/verify/CERT-2024-VNPT-08";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setShareText("Đã chép link!");
        setTimeout(() => {
          setShareText("Chia sẻ");
        }, 2200);
      }).catch(() => {
        prompt("Sao chép liên kết chứng nhận công khai:", shareUrl);
      });
    } else {
      prompt("Sao chép liên kết chứng nhận công khai:", shareUrl);
    }
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased flex">
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between">
        <div className="flex flex-col flex-1">
          <div className="h-16 px-space-lg flex items-center gap-space-sm bg-surface-container-lowest">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface leading-tight">EduShare VN</span>
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Cổng Nhà Hảo Tâm</span>
            </div>
          </div>
          <div className="px-space-md py-space-sm">
            <div className="px-space-sm py-space-xs font-label-sm text-label-sm text-secondary uppercase font-semibold">Bảng điều khiển Nhà Hảo Tâm</div>
          </div>
          <nav className="flex-1 px-space-md space-y-1">
            <Link className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/donor/donation-details">
              <span className="material-symbols-outlined text-[20px]">add_box</span>
              <span className="font-label-md text-label-md">Đăng ký trao tặng</span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/donor/dashboard">
              <span className="material-symbols-outlined text-[20px]">inventory_2</span>
              <span className="font-label-md text-label-md">Quản lý phiếu của tôi</span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl bg-primary-container text-on-primary-container font-semibold shadow-sm transition-all" to="/donor/certificates">
              <span className="material-symbols-outlined text-[20px]">verified</span>
              <span className="font-label-md text-label-md">Biên nhận &amp; Chứng nhận</span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/donor/tracking">
              <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
              <span className="font-label-md text-label-md">Hành trình &amp; Mã QR</span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/donor/campaigns">
              <span className="material-symbols-outlined text-[20px]">campaign</span>
              <span className="font-label-md text-label-md">Đợt vận động đang chạy</span>
            </Link>
          </nav>
        </div>
        <div className="p-space-md bg-surface-container-low mx-space-md mb-space-md rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-space-xs text-tertiary mb-1">
            <span className="material-symbols-outlined text-[16px]">fiber_manual_record</span>
            <span className="font-label-sm text-label-sm font-semibold">Trực tuyến 63 Tỉnh Thành</span>
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center justify-between">
            <span className="">Hạ tầng GD Quốc gia</span>
            <span className="font-code-num text-code-num font-medium text-primary">v2.8.4</span>
          </div>
        </div>
      </aside>
      
      <div className="pl-72 w-full flex-1">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-xl">
          <div className="flex items-center gap-space-md flex-1 max-w-xl">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
              <input className="w-full pl-11 pr-space-md py-space-sm bg-surface-container-low rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all" placeholder="Tìm kiếm mã phiếu, số serial thiết bị, số biên lai..." type="search" />
            </div>
          </div>
          <div className="flex items-center gap-space-lg">
            <button className="relative p-space-sm text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-colors">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <div className="flex items-center gap-space-md pl-space-md">
              <div className="flex flex-col text-right hidden sm:flex">
                <span className="font-label-md text-label-md text-on-surface font-semibold">Tập đoàn Vingroup</span>
                <span className="font-code-num text-code-num text-secondary">ID: NHT-78294</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>
        
        <main className="w-full pt-16 bg-surface">
          <div className="flex flex-col w-full">
            {/* Top Breadcrumbs Bar */}
            <div className="px-space-xl py-space-sm bg-surface-container-low flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-secondary">
                <Link to="/" className="hover:text-primary cursor-pointer transition-colors">EduShare VN</Link>
                <span className="material-symbols-outlined text-[16px] text-outline-variant">chevron_right</span>
                <span className="hover:text-primary cursor-pointer transition-colors">Nhà Hảo Tâm</span>
                <span className="material-symbols-outlined text-[16px] text-outline-variant">chevron_right</span>
                <span className="hover:text-primary cursor-pointer transition-colors">Biên nhận &amp; Chứng nhận</span>
                <span className="material-symbols-outlined text-[16px] text-outline-variant">chevron_right</span>
                <span className="font-code-num text-code-num font-semibold text-primary">#CERT-2024-VNPT-08</span>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container text-primary font-code-num text-code-num font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  Sổ Cái Quốc Gia: Block #19,842,109
                </span>
              </div>
            </div>
            
            {/* Main View Container */}
            <div className="px-space-xl py-space-lg space-y-space-lg max-w-[1560px] mx-auto w-full">
              {/* 1. Header & Actions Bar */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
                <div className="space-y-space-xs">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                      ĐÃ CẤP CHỨNG NHẬN CHÍNH THỨC
                    </span>
                    <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[15px]">verified_user</span>
                      CHỮ KÝ SỐ CA BỘ GD&amp;ĐT HỢP LỆ
                    </span>
                    <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container-low text-secondary font-code-num text-body-sm font-medium">
                      <span className="material-symbols-outlined text-[15px]">lock</span>
                      SHA-256: 8a7f4e91bc...
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Chứng Nhận Đóng Góp Số &amp; Biên Lai Tiếp Nhận Điện Tử
                  </h1>
                  <div className="flex flex-wrap items-center gap-x-space-md gap-y-1 font-body-sm text-body-sm text-on-surface-variant">
                    <span className="">Mã chứng nhận: <strong className="font-code-num text-on-surface font-semibold">#CERT-2024-VNPT-08</strong></span>
                    <span className="text-outline-variant">•</span>
                    <span className="">Phiếu trao tặng gốc: <Link className="font-code-num text-primary hover:underline font-semibold" to="/donor/dashboard">#DON-2024-8815</Link></span>
                    <span className="text-outline-variant">•</span>
                    <span className="">Ngày phát hành: <strong className="text-on-surface font-medium">24/10/2024</strong> (16:30 GMT+7)</span>
                  </div>
                </div>
                {/* Actions Button Set */}
                <div className="flex flex-wrap items-center gap-space-sm pt-2 xl:pt-0">
                  <button className="px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container text-on-surface rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-colors" onClick={() => window.print()}>
                    <span className="material-symbols-outlined text-[18px]">print</span>
                    In Bản Đẹp A4
                  </button>
                  <button className="px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container text-on-surface rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-colors" onClick={handleShareClick}>
                    <span className="material-symbols-outlined text-[18px]">
                      {shareText === "Đã chép link!" ? "check" : "share"}
                    </span>
                    {shareText}
                  </button>
                  <a className="px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container text-primary rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-colors" href="https://edushare.vn/verify/CERT-2024-VNPT-08" rel="noopener noreferrer" target="_blank">
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    Sổ Cái QG
                  </a>
                  <button className="px-space-lg py-space-sm bg-primary-container hover:bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center gap-2 shadow-sm transition-all">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Tải PDF Bản Gốc (Ký Số CA)
                  </button>
                </div>
              </div>
              
              {/* 2. Impact Cards Bar */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {/* Card 1 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute -right-3 -top-3 w-20 h-20 bg-primary/5 rounded-full pointer-events-none"></div>
                  <div>
                    <div className="flex items-center justify-between text-secondary mb-1">
                      <span className="font-label-sm text-label-sm uppercase font-semibold">Tổng giá trị hiện vật</span>
                      <span className="material-symbols-outlined text-primary text-[20px]">account_balance_wallet</span>
                    </div>
                    <div className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
                      480.000.000 <span className="font-label-md text-label-md font-normal text-secondary">VNĐ</span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm pt-space-xs border-t-0 bg-surface-container-low/70 px-2 py-1 rounded">
                    40 Laptop Dell Latitude + 20 Màn hình IPS LG
                  </p>
                </div>
                {/* Card 2 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute -right-3 -top-3 w-20 h-20 bg-tertiary-container/10 rounded-full pointer-events-none"></div>
                  <div>
                    <div className="flex items-center justify-between text-secondary mb-1">
                      <span className="font-label-sm text-label-sm uppercase font-semibold">Điểm trường thụ hưởng</span>
                      <span className="material-symbols-outlined text-tertiary text-[20px]">school</span>
                    </div>
                    <div className="font-headline-md text-headline-md text-on-surface font-bold leading-snug">
                      PTDTBT THCS Trà Dơn
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm pt-space-xs bg-surface-container-low/70 px-2 py-1 rounded flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-tertiary">place</span>
                    Huyện Nam Trà My, Tỉnh Quảng Nam
                  </p>
                </div>
                {/* Card 3 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute -right-3 -top-3 w-20 h-20 bg-primary-container/10 rounded-full pointer-events-none"></div>
                  <div>
                    <div className="flex items-center justify-between text-secondary mb-1">
                      <span className="font-label-sm text-label-sm uppercase font-semibold">Tác động nhân văn</span>
                      <span className="material-symbols-outlined text-primary-container text-[20px]">groups</span>
                    </div>
                    <div className="font-headline-lg text-headline-lg text-on-surface font-bold">
                      180 <span className="font-label-md text-label-md font-normal text-secondary">Em học sinh</span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm pt-space-xs bg-surface-container-low/70 px-2 py-1 rounded">
                    Đồng bào Ca Dong, Bh'noong tiếp cận số
                  </p>
                </div>
                {/* Card 4 */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute -right-3 -top-3 w-20 h-20 bg-secondary/10 rounded-full pointer-events-none"></div>
                  <div>
                    <div className="flex items-center justify-between text-secondary mb-1">
                      <span className="font-label-sm text-label-sm uppercase font-semibold">Khấu trừ Thuế Doanh Nghiệp</span>
                      <span className="material-symbols-outlined text-tertiary text-[20px]">task_alt</span>
                    </div>
                    <div className="font-label-md text-label-md text-on-surface font-semibold text-tertiary flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                      Hóa đơn điện tử VAT-0% Hợp lệ
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm pt-space-xs bg-surface-container-low/70 px-2 py-1 rounded">
                    Khấu trừ thuế TNDN theo Nghị định 123/2020/NĐ-CP
                  </p>
                </div>
              </div>
              
              {/* 3. Central Two-Column Area */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
                {/* LEFT COLUMN: Official Certificate Preview */}
                <div className="lg:col-span-6 xl:col-span-5 space-y-space-md">
                  <div className="flex items-center justify-between px-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px]">workspace_premium</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface">Bản Thể Hiện Chứng Nhận Số A4</span>
                    </div>
                    <span className="font-code-num text-code-num text-secondary">PDF A4 • 300 DPI</span>
                  </div>
                  {/* Certificate Outer Canvas */}
                  <div className="relative bg-surface-container-lowest p-6 rounded-2xl shadow-xl overflow-hidden select-none" style={{ boxShadow: "0 10px 35px -5px rgba(0, 50, 150, 0.1)" }}>
                    {/* Decorative Certificate Borders */}
                    <div className="w-full h-full p-4 bg-surface-container-low/30 rounded-xl relative">
                      <div className="absolute inset-2 pointer-events-none rounded-lg" style={{ boxShadow: "inset 0 0 0 2px #dbe1ff, inset 0 0 0 6px rgba(255,255,255,0.7), inset 0 0 0 8px #dbe1ff" }}></div>
                      {/* Background National Emblem Watermark SVG */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-4 pointer-events-none">
                        <svg className="text-primary" fill="currentColor" height="280" viewBox="0 0 24 24" width="280">
                          <path d="M12 2L1 21h22L12 2zm0 3.84L19.43 19H4.57L12 5.84zM11 10h2v4h-2zm0 6h2v2h-2z"></path>
                        </svg>
                      </div>
                      {/* Inner Certificate Content */}
                      <div className="relative z-10 text-center py-4 px-2 space-y-3">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
                            <span className="material-symbols-outlined text-[18px]">school</span>
                          </div>
                          <div className="text-center">
                            <p className="font-label-sm text-label-sm font-bold tracking-widest text-secondary uppercase">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                            <p className="font-label-sm text-label-sm text-secondary">Độc lập - Tự do - Hạnh phúc</p>
                          </div>
                        </div>
                        <div className="h-0.5 w-24 bg-primary/30 mx-auto"></div>
                        <div className="pt-2">
                          <p className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">MẠNG LƯỚI ĐIỀU PHỐI THIẾT BỊ GIÁO DỤC QUỐC GIA - EDUSHARE VIETNAM</p>
                          <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight mt-1">GIẤY CHỨNG NHẬN ĐÓNG GÓP SỐ</h2>
                          <p className="font-label-sm text-label-sm tracking-widest text-secondary uppercase">DIGITAL CERTIFICATE OF PHILANTHROPY</p>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed italic pt-1">
                          Ban Điều Hành Quỹ &amp; Hệ Thống Bảo Trợ Giáo Dục EduShare Việt Nam trân trọng tri ân và vinh danh:
                        </p>
                        <div className="bg-surface-container/60 p-space-md rounded-xl my-2 mx-1 shadow-sm">
                          <p className="font-headline-sm text-headline-sm text-primary font-bold tracking-wide uppercase">
                            TẬP ĐOÀN BƯU CHÍNH VIỄN THÔNG VIỆT NAM (VNPT)
                          </p>
                          <p className="font-label-md text-label-md text-secondary font-medium mt-0.5">
                            CHI NHÁNH THÀNH PHỐ ĐÀ NẴNG • MST: NHT-78294
                          </p>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface max-w-md mx-auto leading-normal text-left px-2">
                          Đã có đóng góp tài trợ đặc biệt ý nghĩa gồm <strong>40 Bộ Laptop &amp; 20 Màn hình tin học chuẩn quốc gia</strong>, trực tiếp kiến tạo Phòng Máy Học Đường cho học sinh vùng cao trong khuôn khổ chiến dịch <em>"Ánh Sáng Tri Thức Miền Tây Xứ Quảng"</em>.
                        </p>
                        <div className="flex items-center justify-center gap-2 py-1">
                          <span className="font-label-md text-label-md text-secondary font-semibold">Giá trị ghi nhận:</span>
                          <span className="font-headline-md text-headline-md text-tertiary font-bold font-code-num">480.000.000 VNĐ</span>
                          <span className="font-body-sm text-body-sm text-secondary italic">(Bốn trăm tám mươi triệu đồng chẵn)</span>
                        </div>
                        <div className="pt-4 grid grid-cols-2 gap-3 items-end text-left border-t-0 mt-4 bg-surface-container-lowest/80 p-3 rounded-xl shadow-sm">
                          <div className="flex items-center gap-2.5">
                            <div className="w-16 h-16 bg-on-surface p-1 rounded flex items-center justify-center shrink-0">
                              <svg className="w-full h-full text-surface-container-lowest" fill="currentColor" viewBox="0 0 33 33">
                                <path d="M0 0h11v11H0zm2 2v7h7V2zm2 2h3v3H4zM22 0h11v11H22zm2 2v7h7V2zm2 2h3v3h-3zM0 22h11v11H0zm2 2v7h7v-7zm2 2h3v3H4zm14-14h2v2h-2zm4 0h3v2h-3zm-4 4h4v2h-4zm6 0h2v4h-2zm-6 4h2v2h-2zm4 0h4v2h-4zm-2 2h2v4h-2zm4 2h3v3h-3zm-6 2h2v2h-2zm-2-4h2v2h-2zm-2-6h2v2h-2zM14 0h3v3h-3zm2 4h2v3h-2zm2-4h2v3h-2zm-4 8h2v2h-2z"></path>
                              </svg>
                            </div>
                            <div className="space-y-0.5 min-w-0">
                              <p className="font-label-sm text-label-sm font-bold text-on-surface">TRA CỨU TRỰC TUYẾN</p>
                              <p className="font-code-num text-[10px] text-secondary truncate">edushare.vn/verify/CERT-2024-VNPT-08</p>
                              <p className="font-code-num text-[10px] text-primary font-medium">Hash: 8a7f4e91bc023d8...</p>
                            </div>
                          </div>
                          <div className="text-right space-y-0.5 relative pr-1">
                            <div className="absolute -top-6 right-2 w-20 h-20 rounded-full pointer-events-none opacity-85 flex items-center justify-center transform rotate-[-12deg]" style={{ background: "radial-gradient(circle, rgba(186, 26, 26, 0.08) 0%, rgba(186, 26, 26, 0.22) 100%)" }}>
                              <div className="w-18 h-18 rounded-full flex flex-col items-center justify-center text-center p-1" style={{ boxShadow: "inset 0 0 0 1.5px #ba1a1a" }}>
                                <span className="font-label-sm text-[8px] font-bold text-error uppercase leading-tight">BỘ GD&amp;ĐT</span>
                                <span className="font-label-sm text-[7px] text-error uppercase font-semibold">EDUSHARE VN</span>
                                <span className="material-symbols-outlined text-error text-[14px]">verified</span>
                                <span className="font-code-num text-[7px] text-error font-bold">★ 24-10-2024 ★</span>
                              </div>
                            </div>
                            <p className="font-label-sm text-label-sm text-secondary">Đại diện điều phối phê duyệt</p>
                            <p className="font-headline-sm text-headline-sm text-primary font-semibold">Nguyễn Văn An</p>
                            <p className="font-label-sm text-label-sm text-on-surface-variant">Giám Đốc Điều Phối Quốc Gia</p>
                            <span className="inline-block mt-0.5 px-1.5 py-0.5 rounded bg-tertiary-container/15 text-tertiary font-code-num text-[10px] font-medium">
                              ✓ Ký số CA SmartSign: 24/10/2024 16:30
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container-low rounded-xl flex items-center gap-space-md">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[22px]">fingerprint</span>
                    </div>
                    <div className="space-y-0.5 text-left">
                      <p className="font-label-md text-label-md font-semibold text-on-surface">Minh chứng lưu trữ bất biến (Immutable Audit)</p>
                      <p className="font-body-sm text-body-sm text-secondary">Chứng nhận này được bảo đảm bằng thuật toán mã hóa phân tán, có thể đối soát đối chiếu trên Cổng Dịch Vụ Công Quốc Gia.</p>
                    </div>
                  </div>
                </div>
                
                {/* RIGHT COLUMN: PoD, Physical Equipment List & Legal Accounting */}
                <div className="lg:col-span-6 xl:col-span-7 space-y-space-lg">
                  {/* BLOCK 1: Proof of Delivery (PoD) */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
                    <div className="flex items-center justify-between pb-space-xs">
                      <div className="flex items-center gap-space-sm">
                        <span className="p-2 rounded-lg bg-tertiary-container/15 text-tertiary">
                          <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                        </span>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface">Minh Chứng Bàn Giao Thực Địa (PoD)</h3>
                          <p className="font-body-sm text-body-sm text-secondary">Nghiệm thu trực tiếp tại trường học với đầy đủ biên bản có thẩm quyền</p>
                        </div>
                      </div>
                      <span className="font-code-num text-code-num font-semibold px-space-sm py-1 bg-surface-container rounded-lg text-primary">
                        #BB-TRA-DON-01
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-stretch">
                      <div className="md:col-span-7 relative group overflow-hidden rounded-xl bg-surface-container-low min-h-[220px]">
                        <img alt="A genuine delivery ceremony photo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwDF-7dNHaOCz5cW841fNG6PIlScjZoEbHO6q4CZMMDjIL8x9D6ZjRw_vMPNr80ES1ZA-oH0Gk9YAPvaPkZNrFxMUwZMudfjW--slDbrqeKO0lpZrUyzchcQRrEZeCVViL9bzwEGnVGNOpBfaHZt1AECQ9uNTej2Q2TAXbebFEjtMIP5rqR3yWqdIYjLJWXjNUA22EUarzdHPYzV76rJNh4nchOP2-lMRP_6X7vnDfZdmRANmGi1uMig" />
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-on-background/90 via-on-background/40 to-transparent p-space-md text-surface-container-lowest">
                          <span className="px-2 py-0.5 rounded bg-primary text-[11px] font-label-sm font-semibold uppercase">Ảnh thực địa xác thực</span>
                          <p className="font-body-sm text-body-sm mt-1 text-surface-bright">Phòng máy trường PTDTBT THCS Trà Dơn, Nam Trà My</p>
                        </div>
                      </div>
                      <div className="md:col-span-5 bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between space-y-3">
                        <div className="space-y-2">
                          <span className="font-label-sm text-label-sm font-bold uppercase text-secondary">Đại diện tiếp nhận:</span>
                          <div className="flex items-center gap-space-sm">
                            <div className="w-9 h-9 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary font-bold shadow-sm font-code-num">
                              HH
                            </div>
                            <div>
                              <p className="font-label-md text-label-md font-bold text-on-surface">Thầy Hồ Văn Hạnh</p>
                              <p className="font-body-sm text-body-sm text-secondary">Hiệu trưởng trường PTDTBT THCS Trà Dơn</p>
                            </div>
                          </div>
                          <div className="pt-2 space-y-1.5 font-body-sm text-body-sm">
                            <div className="flex items-center justify-between text-on-surface-variant">
                              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-tertiary">location_on</span> Tọa độ GPS:</span>
                              <span className="font-code-num font-medium text-on-surface">15.082°N, 108.051°E</span>
                            </div>
                            <div className="flex items-center justify-between text-on-surface-variant">
                              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-primary">schedule</span> Thời gian:</span>
                              <span className="font-code-num font-medium text-on-surface">14:30 - 20/10/2024</span>
                            </div>
                            <div className="flex items-center justify-between text-on-surface-variant">
                              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary">fact_check</span> Tình trạng:</span>
                              <span className="font-label-sm text-label-sm font-semibold text-tertiary">100% Khớp danh mục</span>
                            </div>
                          </div>
                        </div>
                        <div className="pt-2">
                          <button className="w-full py-2 px-space-sm bg-surface-container-lowest hover:bg-surface-container text-primary font-label-md text-label-md rounded-lg shadow-sm flex items-center justify-center gap-1 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">description</span>
                            Xem Toàn Văn Biên Bản (#BB-01)
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* BLOCK 2: Equipment Itemized Roster */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-space-sm">
                        <span className="p-2 rounded-lg bg-primary-container/10 text-primary">
                          <span className="material-symbols-outlined text-[20px]">devices</span>
                        </span>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface">Danh Mục Thiết Bị Được Gắn Mã Định Danh</h3>
                          <p className="font-body-sm text-body-sm text-secondary">60 thiết bị đã nạp mã tài sản số và phân quyền quản trị giáo dục</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="px-2 py-1 rounded bg-surface-container text-primary font-code-num text-body-sm font-semibold">40 Laptop</span>
                        <span className="px-2 py-1 rounded bg-surface-container text-secondary font-code-num text-body-sm font-semibold">20 Màn hình</span>
                      </div>
                    </div>
                    <div className="overflow-x-auto rounded-xl bg-surface-container-low/40">
                      <table className="w-full text-left font-body-sm text-body-sm">
                        <thead className="bg-surface-container-low text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                          <tr>
                            <th className="py-space-sm px-space-md">Chủng loại thiết bị &amp; Model</th>
                            <th className="py-space-sm px-space-md">Số lượng</th>
                            <th className="py-space-sm px-space-md">Dải Serial &amp; Định danh số</th>
                            <th className="py-space-sm px-space-md">Tình trạng vật lý</th>
                            <th className="py-space-sm px-space-md">Vị trí lắp đặt</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y-0 text-on-surface">
                          <tr className="hover:bg-surface-container-low/80 transition-colors bg-surface-container-lowest">
                            <td className="py-3 px-space-md font-medium">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-[18px]">laptop_mac</span>
                                <div>
                                  <p className="font-label-md text-label-md font-semibold text-on-surface">Laptop Dell Latitude 5520</p>
                                  <p className="text-body-sm text-secondary font-code-num">Intel Core i5-1145G7 | 16GB RAM | 256GB SSD</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-space-md font-code-num font-bold text-on-surface">40 máy</td>
                            <td className="py-3 px-space-md font-code-num text-secondary">
                              <span className="text-primary font-semibold">PF-19A821</span> → <span className="text-primary font-semibold">PF-19A860</span>
                              <span className="block text-[11px] text-tertiary">Tem QR EduShare: #EDS-TD-001..040</span>
                            </td>
                            <td className="py-3 px-space-md">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold">
                                Loại A+ (Kiểm định 100%)
                              </span>
                            </td>
                            <td className="py-3 px-space-md font-body-sm text-on-surface-variant">
                              Phòng Tin Học Lầu 2 (Bàn 01 - 40)
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low/80 transition-colors bg-surface-container-lowest">
                            <td className="py-3 px-space-md font-medium">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-[18px]">desktop_windows</span>
                                <div>
                                  <p className="font-label-md text-label-md font-semibold text-on-surface">Màn hình LG IPS 24" 24MP59G</p>
                                  <p className="text-body-sm text-secondary font-code-num">FHD IPS 75Hz | HDMI/VGA Full Box Cable</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-space-md font-code-num font-bold text-on-surface">20 màn</td>
                            <td className="py-3 px-space-md font-code-num text-secondary">
                              <span className="text-primary font-semibold">LG-24MP-8812</span> → <span className="text-primary font-semibold">LG-24MP-8831</span>
                              <span className="block text-[11px] text-tertiary">Tem QR EduShare: #EDS-MN-001..020</span>
                            </td>
                            <td className="py-3 px-space-md">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-container/10 text-primary font-label-sm text-label-sm font-semibold">
                                Mới 100% Nguyên Hộp
                              </span>
                            </td>
                            <td className="py-3 px-space-md font-body-sm text-on-surface-variant">
                              Bàn Thực Hành Đa Năng 01 - 20
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex items-center justify-between text-body-sm text-secondary bg-surface-container-low p-space-sm rounded-lg">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[17px] text-tertiary">qr_code_scanner</span>
                        Mỗi thiết bị đều được đồng bộ hồ sơ số với CSDL Thiết bị Giáo dục Quốc gia
                      </span>
                      <Link className="text-primary font-label-md text-label-md hover:underline font-semibold flex items-center gap-0.5" to="#">
                        Xuất file Excel Serial (.xlsx)
                        <span className="material-symbols-outlined text-[16px]">file_download</span>
                      </Link>
                    </div>
                  </div>
                  
                  {/* BLOCK 3: Accounting & Tax Exemption Records */}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-space-sm">
                        <span className="p-2 rounded-lg bg-tertiary-container/15 text-tertiary">
                          <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                        </span>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface">Hồ Sơ Thuế &amp; Chứng Từ Kế Toán Hợp Lệ</h3>
                          <p className="font-body-sm text-body-sm text-secondary">Được chấp thuận để trừ khi tính thuế TNDN căn cứ theo luật định</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        Đã Hạch Toán
                      </span>
                    </div>
                    <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div>
                        <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Mã Biên Lai Thuế Điện Tử (Cơ quan Thuế xác nhận):</span>
                        <p className="font-code-num text-headline-sm text-primary font-bold mt-0.5">BL-2024-8815-EDU</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Thuộc diện: <em>Tài trợ giáo dục theo chương trình mục tiêu quốc gia (Khoản 2.22 Điều 4 Thông tư 96/2015/TT-BTC)</em>.
                        </p>
                      </div>
                      <div className="shrink-0 flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-[32px]">format_image_left</span>
                        <div className="text-right">
                          <p className="font-label-sm text-label-sm font-bold text-tertiary">VAT Suất: 0%</p>
                          <p className="font-body-sm text-body-sm text-secondary">Chi phí được trừ 100%</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-space-xs">
                      <span className="font-label-sm text-label-sm uppercase font-semibold text-secondary">Bộ tài liệu kế toán đính kèm:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-1">
                        <Link className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container flex items-center justify-between group transition-colors" to="#">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="material-symbols-outlined text-error text-[20px]">picture_as_pdf</span>
                            <div className="truncate">
                              <p className="font-label-md text-label-md font-medium text-on-surface truncate group-hover:text-primary">1. Biên lai thuế CQT</p>
                              <p className="font-code-num text-[11px] text-secondary">1.2 MB • Ký số</p>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-[18px] text-secondary group-hover:text-primary">download</span>
                        </Link>
                        <Link className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container flex items-center justify-between group transition-colors" to="#">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="material-symbols-outlined text-primary text-[20px]">picture_as_pdf</span>
                            <div className="truncate">
                              <p className="font-label-md text-label-md font-medium text-on-surface truncate group-hover:text-primary">2. Biên bản nghiệm thu</p>
                              <p className="font-code-num text-[11px] text-secondary">2.8 MB • Ký 2 bên</p>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-[18px] text-secondary group-hover:text-primary">download</span>
                        </Link>
                        <Link className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container flex items-center justify-between group transition-colors" to="#">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="material-symbols-outlined text-tertiary text-[20px]">table_view</span>
                            <div className="truncate">
                              <p className="font-label-md text-label-md font-medium text-on-surface truncate group-hover:text-primary">3. Bảng kê Serial số</p>
                              <p className="font-code-num text-[11px] text-secondary">420 KB • .xlsx</p>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-[18px] text-secondary group-hover:text-primary">download</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 4. Post-Audit & Technical Support Warranty Commitment */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-12 gap-space-lg items-center">
                <div className="md:col-span-8 flex items-start gap-space-md">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-container/15 text-tertiary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[26px]">health_and_safety</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">
                      Cam Kết Bảo Trợ Kỹ Thuật 36 Tháng Từ EduShare &amp; Đội Ngũ Tình Nguyện
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl leading-relaxed">
                      Toàn bộ 60 thiết bị thuộc chứng nhận này được đội ngũ kỹ sư IT EduShare định kỳ đến điểm trường bảo dưỡng, kiểm tra đường truyền và cập nhật phần mềm học liệu <strong>6 tháng một lần</strong>. Mọi hỏng hóc phần cứng được cam kết bảo hành 1 đổi 1 tận nơi.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-4 bg-surface-container-low p-space-md rounded-xl flex flex-col justify-center space-y-2">
                  <div className="flex items-center gap-space-sm text-primary">
                    <span className="material-symbols-outlined text-[20px]">support_agent</span>
                    <span className="font-label-md text-label-md font-bold uppercase">Kênh Hỗ Trợ Độc Quyền Nhà Hảo Tâm</span>
                  </div>
                  <div className="space-y-1 font-body-sm text-body-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-secondary">Hotline 24/7:</span>
                      <span className="font-code-num text-code-num font-bold text-on-surface">1900 6868 (Nhánh 1)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary">Email Điều Phối:</span>
                      <span className="font-code-num text-code-num font-medium text-primary">donor.support@edushare.vn</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Footer Metadata Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between text-body-sm text-secondary pb-space-lg px-space-xs gap-2">
                <div className="flex items-center gap-space-xs font-code-num text-[12px]">
                  <span className="">Chữ ký số hợp chuẩn eIDAS &amp; Luật Giao Dịch Điện Tử Việt Nam 2023.</span>
                </div>
                <div className="flex items-center gap-space-md text-[12px]">
                  <span className="text-tertiary flex items-center gap-1 font-medium">
                    <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                    Đã mã hóa toàn trình
                  </span>
                  <span className="">Thời gian in trang: 24/10/2024</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
