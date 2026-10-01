import { useState } from "react";
import { Link } from "react-router-dom";

export default function DonorCertificatesPage() {
  const [shareText, setShareText] = useState("Chia sẻ");

  const handleShareClick = () => {
    const shareUrl = "https://edushare.vn/verify/CERT-2024-VNPT-08";
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => {
          setShareText("Đã chép link!");
          setTimeout(() => {
            setShareText("Chia sẻ");
          }, 2200);
        })
        .catch(() => {
          prompt("Sao chép liên kết chứng nhận công khai:", shareUrl);
        });
    } else {
      prompt("Sao chép liên kết chứng nhận công khai:", shareUrl);
    }
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface flex antialiased">
      <aside className="bg-surface-container-lowest fixed top-0 left-0 z-50 flex h-full w-72 flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-1 flex-col">
          <div className="px-space-lg gap-space-sm bg-surface-container-lowest flex h-16 items-center">
            <div className="bg-primary text-on-primary flex h-9 w-9 items-center justify-center rounded-xl shadow-sm">
              <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface leading-tight">EduShare VN</span>
              <span className="font-label-sm text-label-sm text-primary font-bold tracking-wider uppercase">
                Cổng Nhà Hảo Tâm
              </span>
            </div>
          </div>
          <div className="px-space-md py-space-sm">
            <div className="px-space-sm py-space-xs font-label-sm text-label-sm text-secondary font-semibold uppercase">
              Bảng điều khiển Nhà Hảo Tâm
            </div>
          </div>
          <nav className="px-space-md flex-1 space-y-1">
            <Link
              className="gap-space-sm px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center rounded-xl transition-all"
              to="/donor/donation-details"
            >
              <span className="material-symbols-outlined text-[20px]">add_box</span>
              <span className="font-label-md text-label-md">Đăng ký trao tặng</span>
            </Link>
            <Link
              className="gap-space-sm px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center rounded-xl transition-all"
              to="/donor/dashboard"
            >
              <span className="material-symbols-outlined text-[20px]">inventory_2</span>
              <span className="font-label-md text-label-md">Quản lý phiếu của tôi</span>
            </Link>
            <Link
              className="gap-space-sm px-space-md py-space-sm bg-primary-container text-on-primary-container flex items-center rounded-xl font-semibold shadow-sm transition-all"
              to="/donor/certificates"
            >
              <span className="material-symbols-outlined text-[20px]">verified</span>
              <span className="font-label-md text-label-md">Biên nhận &amp; Chứng nhận</span>
            </Link>
            <Link
              className="gap-space-sm px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center rounded-xl transition-all"
              to="/donor/tracking"
            >
              <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
              <span className="font-label-md text-label-md">Hành trình &amp; Mã QR</span>
            </Link>
            <Link
              className="gap-space-sm px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center rounded-xl transition-all"
              to="/donor/campaigns"
            >
              <span className="material-symbols-outlined text-[20px]">campaign</span>
              <span className="font-label-md text-label-md">Đợt vận động đang chạy</span>
            </Link>
          </nav>
        </div>
        <div className="p-space-md bg-surface-container-low mx-space-md mb-space-md rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="gap-space-xs text-tertiary mb-1 flex items-center">
            <span className="material-symbols-outlined text-[16px]">fiber_manual_record</span>
            <span className="font-label-sm text-label-sm font-semibold">Trực tuyến 63 Tỉnh Thành</span>
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center justify-between">
            <span className="">Hạ tầng GD Quốc gia</span>
            <span className="font-code-num text-code-num text-primary font-medium">v2.8.4</span>
          </div>
        </div>
      </aside>

      <div className="w-full flex-1 pl-72">
        <header className="bg-surface-container-lowest/90 px-space-xl fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="gap-space-md flex max-w-xl flex-1 items-center">
            <div className="relative w-full">
              <span className="material-symbols-outlined left-space-md text-on-surface-variant absolute top-1/2 -translate-y-1/2 text-[20px]">
                search
              </span>
              <input
                className="pr-space-md py-space-sm bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:bg-surface-container-lowest w-full rounded-xl pl-11 transition-all focus:outline-none"
                placeholder="Tìm kiếm mã phiếu, số serial thiết bị, số biên lai..."
                type="search"
              />
            </div>
          </div>
          <div className="gap-space-lg flex items-center">
            <button className="p-space-sm text-on-surface-variant hover:bg-surface-container-low relative rounded-xl transition-colors">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="bg-error absolute top-2 right-2 h-2 w-2 rounded-full"></span>
            </button>
            <div className="gap-space-md pl-space-md flex items-center">
              <div className="flex hidden flex-col text-right sm:flex">
                <span className="font-label-md text-label-md text-on-surface font-semibold">Tập đoàn Vingroup</span>
                <span className="font-code-num text-code-num text-secondary">ID: NHT-78294</span>
              </div>
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-surface w-full pt-16">
          <div className="flex w-full flex-col">
            {/* Top Breadcrumbs Bar */}
            <div className="px-space-xl py-space-sm bg-surface-container-low flex items-center justify-between shadow-sm">
              <div className="gap-space-xs font-body-sm text-body-sm text-secondary flex items-center">
                <Link to="/" className="hover:text-primary cursor-pointer transition-colors">
                  EduShare VN
                </Link>
                <span className="material-symbols-outlined text-outline-variant text-[16px]">chevron_right</span>
                <span className="hover:text-primary cursor-pointer transition-colors">Nhà Hảo Tâm</span>
                <span className="material-symbols-outlined text-outline-variant text-[16px]">chevron_right</span>
                <span className="hover:text-primary cursor-pointer transition-colors">Biên nhận &amp; Chứng nhận</span>
                <span className="material-symbols-outlined text-outline-variant text-[16px]">chevron_right</span>
                <span className="font-code-num text-code-num text-primary font-semibold">#CERT-2024-VNPT-08</span>
              </div>
              <div className="gap-space-sm flex items-center">
                <span className="px-space-sm bg-surface-container text-primary font-code-num text-code-num inline-flex items-center gap-1.5 rounded-full py-0.5 font-medium">
                  <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full"></span>
                  Sổ Cái Quốc Gia: Block #19,842,109
                </span>
              </div>
            </div>

            {/* Main View Container */}
            <div className="px-space-xl py-space-lg space-y-space-lg mx-auto w-full max-w-[1560px]">
              {/* 1. Header & Actions Bar */}
              <div className="bg-surface-container-lowest p-space-lg gap-space-md flex flex-col justify-between rounded-xl shadow-sm xl:flex-row xl:items-center">
                <div className="space-y-space-xs">
                  <div className="gap-space-xs flex flex-wrap items-center">
                    <span className="px-space-sm bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full py-0.5 font-semibold">
                      <span
                        className="material-symbols-outlined text-[15px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        verified
                      </span>
                      ĐÃ CẤP CHỨNG NHẬN CHÍNH THỨC
                    </span>
                    <span className="px-space-sm bg-surface-container text-primary font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full py-0.5 font-semibold">
                      <span className="material-symbols-outlined text-[15px]">verified_user</span>
                      CHỮ KÝ SỐ CA BỘ GD&amp;ĐT HỢP LỆ
                    </span>
                    <span className="px-space-sm bg-surface-container-low text-secondary font-code-num text-body-sm inline-flex items-center gap-1 rounded-full py-0.5 font-medium">
                      <span className="material-symbols-outlined text-[15px]">lock</span>
                      SHA-256: 8a7f4e91bc...
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Chứng Nhận Đóng Góp Số &amp; Biên Lai Tiếp Nhận Điện Tử
                  </h1>
                  <div className="gap-x-space-md font-body-sm text-body-sm text-on-surface-variant flex flex-wrap items-center gap-y-1">
                    <span className="">
                      Mã chứng nhận:{" "}
                      <strong className="font-code-num text-on-surface font-semibold">#CERT-2024-VNPT-08</strong>
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span className="">
                      Phiếu trao tặng gốc:{" "}
                      <Link className="font-code-num text-primary font-semibold hover:underline" to="/donor/dashboard">
                        #DON-2024-8815
                      </Link>
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span className="">
                      Ngày phát hành: <strong className="text-on-surface font-medium">24/10/2024</strong> (16:30 GMT+7)
                    </span>
                  </div>
                </div>
                {/* Actions Button Set */}
                <div className="gap-space-sm flex flex-wrap items-center pt-2 xl:pt-0">
                  <button
                    className="px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-1.5 rounded-lg transition-colors"
                    onClick={() => window.print()}
                  >
                    <span className="material-symbols-outlined text-[18px]">print</span>
                    In Bản Đẹp A4
                  </button>
                  <button
                    className="px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-1.5 rounded-lg transition-colors"
                    onClick={handleShareClick}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {shareText === "Đã chép link!" ? "check" : "share"}
                    </span>
                    {shareText}
                  </button>
                  <a
                    className="px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md flex items-center gap-1.5 rounded-lg transition-colors"
                    href="https://edushare.vn/verify/CERT-2024-VNPT-08"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    Sổ Cái QG
                  </a>
                  <button className="px-space-lg py-space-sm bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md flex items-center gap-2 rounded-lg shadow-sm transition-all">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Tải PDF Bản Gốc (Ký Số CA)
                  </button>
                </div>
              </div>

              {/* 2. Impact Cards Bar */}
              <div className="gap-space-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {/* Card 1 */}
                <div className="bg-surface-container-lowest p-space-md relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm">
                  <div className="bg-primary/5 pointer-events-none absolute -top-3 -right-3 h-20 w-20 rounded-full"></div>
                  <div>
                    <div className="text-secondary mb-1 flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-semibold uppercase">Tổng giá trị hiện vật</span>
                      <span className="material-symbols-outlined text-primary text-[20px]">account_balance_wallet</span>
                    </div>
                    <div className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
                      480.000.000 <span className="font-label-md text-label-md text-secondary font-normal">VNĐ</span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm pt-space-xs bg-surface-container-low/70 rounded border-t-0 px-2 py-1">
                    40 Laptop Dell Latitude + 20 Màn hình IPS LG
                  </p>
                </div>
                {/* Card 2 */}
                <div className="bg-surface-container-lowest p-space-md relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm">
                  <div className="bg-tertiary-container/10 pointer-events-none absolute -top-3 -right-3 h-20 w-20 rounded-full"></div>
                  <div>
                    <div className="text-secondary mb-1 flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-semibold uppercase">Điểm trường thụ hưởng</span>
                      <span className="material-symbols-outlined text-tertiary text-[20px]">school</span>
                    </div>
                    <div className="font-headline-md text-headline-md text-on-surface leading-snug font-bold">
                      PTDTBT THCS Trà Dơn
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm pt-space-xs bg-surface-container-low/70 flex items-center gap-1 rounded px-2 py-1">
                    <span className="material-symbols-outlined text-tertiary text-[15px]">place</span>
                    Huyện Nam Trà My, Tỉnh Quảng Nam
                  </p>
                </div>
                {/* Card 3 */}
                <div className="bg-surface-container-lowest p-space-md relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm">
                  <div className="bg-primary-container/10 pointer-events-none absolute -top-3 -right-3 h-20 w-20 rounded-full"></div>
                  <div>
                    <div className="text-secondary mb-1 flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-semibold uppercase">Tác động nhân văn</span>
                      <span className="material-symbols-outlined text-primary-container text-[20px]">groups</span>
                    </div>
                    <div className="font-headline-lg text-headline-lg text-on-surface font-bold">
                      180 <span className="font-label-md text-label-md text-secondary font-normal">Em học sinh</span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm pt-space-xs bg-surface-container-low/70 rounded px-2 py-1">
                    Đồng bào Ca Dong, Bh'noong tiếp cận số
                  </p>
                </div>
                {/* Card 4 */}
                <div className="bg-surface-container-lowest p-space-md relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm">
                  <div className="bg-secondary/10 pointer-events-none absolute -top-3 -right-3 h-20 w-20 rounded-full"></div>
                  <div>
                    <div className="text-secondary mb-1 flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-semibold uppercase">
                        Khấu trừ Thuế Doanh Nghiệp
                      </span>
                      <span className="material-symbols-outlined text-tertiary text-[20px]">task_alt</span>
                    </div>
                    <div className="font-label-md text-label-md text-on-surface text-tertiary flex items-center gap-1 font-semibold">
                      <span className="bg-tertiary h-2 w-2 rounded-full"></span>
                      Hóa đơn điện tử VAT-0% Hợp lệ
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm pt-space-xs bg-surface-container-low/70 rounded px-2 py-1">
                    Khấu trừ thuế TNDN theo Nghị định 123/2020/NĐ-CP
                  </p>
                </div>
              </div>

              {/* 3. Central Two-Column Area */}
              <div className="gap-space-lg grid grid-cols-1 items-start lg:grid-cols-12">
                {/* LEFT COLUMN: Official Certificate Preview */}
                <div className="space-y-space-md lg:col-span-6 xl:col-span-5">
                  <div className="px-space-xs flex items-center justify-between">
                    <div className="gap-space-xs flex items-center">
                      <span className="material-symbols-outlined text-primary text-[20px]">workspace_premium</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface">
                        Bản Thể Hiện Chứng Nhận Số A4
                      </span>
                    </div>
                    <span className="font-code-num text-code-num text-secondary">PDF A4 • 300 DPI</span>
                  </div>
                  {/* Certificate Outer Canvas */}
                  <div
                    className="bg-surface-container-lowest relative overflow-hidden rounded-2xl p-6 shadow-xl select-none"
                    style={{
                      boxShadow: "0 10px 35px -5px rgba(0, 50, 150, 0.1)",
                    }}
                  >
                    {/* Decorative Certificate Borders */}
                    <div className="bg-surface-container-low/30 relative h-full w-full rounded-xl p-4">
                      <div
                        className="pointer-events-none absolute inset-2 rounded-lg"
                        style={{
                          boxShadow:
                            "inset 0 0 0 2px #dbe1ff, inset 0 0 0 6px rgba(255,255,255,0.7), inset 0 0 0 8px #dbe1ff",
                        }}
                      ></div>
                      {/* Background National Emblem Watermark SVG */}
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-4">
                        <svg className="text-primary" fill="currentColor" height="280" viewBox="0 0 24 24" width="280">
                          <path d="M12 2L1 21h22L12 2zm0 3.84L19.43 19H4.57L12 5.84zM11 10h2v4h-2zm0 6h2v2h-2z"></path>
                        </svg>
                      </div>
                      {/* Inner Certificate Content */}
                      <div className="relative z-10 space-y-3 px-2 py-4 text-center">
                        <div className="mb-1 flex items-center justify-center gap-2">
                          <div className="bg-primary text-on-primary flex h-8 w-8 items-center justify-center rounded-full">
                            <span className="material-symbols-outlined text-[18px]">school</span>
                          </div>
                          <div className="text-center">
                            <p className="font-label-sm text-label-sm text-secondary font-bold tracking-widest uppercase">
                              CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                            </p>
                            <p className="font-label-sm text-label-sm text-secondary">Độc lập - Tự do - Hạnh phúc</p>
                          </div>
                        </div>
                        <div className="bg-primary/30 mx-auto h-0.5 w-24"></div>
                        <div className="pt-2">
                          <p className="font-label-sm text-label-sm text-primary font-bold tracking-wider uppercase">
                            MẠNG LƯỚI ĐIỀU PHỐI THIẾT BỊ GIÁO DỤC QUỐC GIA - EDUSHARE VIETNAM
                          </p>
                          <h2 className="font-headline-lg text-headline-lg text-primary mt-1 font-bold tracking-tight">
                            GIẤY CHỨNG NHẬN ĐÓNG GÓP SỐ
                          </h2>
                          <p className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">
                            DIGITAL CERTIFICATE OF PHILANTHROPY
                          </p>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mx-auto max-w-sm pt-1 leading-relaxed italic">
                          Ban Điều Hành Quỹ &amp; Hệ Thống Bảo Trợ Giáo Dục EduShare Việt Nam trân trọng tri ân và vinh
                          danh:
                        </p>
                        <div className="bg-surface-container/60 p-space-md mx-1 my-2 rounded-xl shadow-sm">
                          <p className="font-headline-sm text-headline-sm text-primary font-bold tracking-wide uppercase">
                            TẬP ĐOÀN BƯU CHÍNH VIỄN THÔNG VIỆT NAM (VNPT)
                          </p>
                          <p className="font-label-md text-label-md text-secondary mt-0.5 font-medium">
                            CHI NHÁNH THÀNH PHỐ ĐÀ NẴNG • MST: NHT-78294
                          </p>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface mx-auto max-w-md px-2 text-left leading-normal">
                          Đã có đóng góp tài trợ đặc biệt ý nghĩa gồm{" "}
                          <strong>40 Bộ Laptop &amp; 20 Màn hình tin học chuẩn quốc gia</strong>, trực tiếp kiến tạo
                          Phòng Máy Học Đường cho học sinh vùng cao trong khuôn khổ chiến dịch{" "}
                          <em>"Ánh Sáng Tri Thức Miền Tây Xứ Quảng"</em>.
                        </p>
                        <div className="flex items-center justify-center gap-2 py-1">
                          <span className="font-label-md text-label-md text-secondary font-semibold">
                            Giá trị ghi nhận:
                          </span>
                          <span className="font-headline-md text-headline-md text-tertiary font-code-num font-bold">
                            480.000.000 VNĐ
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary italic">
                            (Bốn trăm tám mươi triệu đồng chẵn)
                          </span>
                        </div>
                        <div className="bg-surface-container-lowest/80 mt-4 grid grid-cols-2 items-end gap-3 rounded-xl border-t-0 p-3 pt-4 text-left shadow-sm">
                          <div className="flex items-center gap-2.5">
                            <div className="bg-on-surface flex h-16 w-16 shrink-0 items-center justify-center rounded p-1">
                              <svg
                                className="text-surface-container-lowest h-full w-full"
                                fill="currentColor"
                                viewBox="0 0 33 33"
                              >
                                <path d="M0 0h11v11H0zm2 2v7h7V2zm2 2h3v3H4zM22 0h11v11H22zm2 2v7h7V2zm2 2h3v3h-3zM0 22h11v11H0zm2 2v7h7v-7zm2 2h3v3H4zm14-14h2v2h-2zm4 0h3v2h-3zm-4 4h4v2h-4zm6 0h2v4h-2zm-6 4h2v2h-2zm4 0h4v2h-4zm-2 2h2v4h-2zm4 2h3v3h-3zm-6 2h2v2h-2zm-2-4h2v2h-2zm-2-6h2v2h-2zM14 0h3v3h-3zm2 4h2v3h-2zm2-4h2v3h-2zm-4 8h2v2h-2z"></path>
                              </svg>
                            </div>
                            <div className="min-w-0 space-y-0.5">
                              <p className="font-label-sm text-label-sm text-on-surface font-bold">
                                TRA CỨU TRỰC TUYẾN
                              </p>
                              <p className="font-code-num text-secondary truncate text-[10px]">
                                edushare.vn/verify/CERT-2024-VNPT-08
                              </p>
                              <p className="font-code-num text-primary text-[10px] font-medium">
                                Hash: 8a7f4e91bc023d8...
                              </p>
                            </div>
                          </div>
                          <div className="relative space-y-0.5 pr-1 text-right">
                            <div
                              className="pointer-events-none absolute -top-6 right-2 flex h-20 w-20 rotate-[-12deg] transform items-center justify-center rounded-full opacity-85"
                              style={{
                                background:
                                  "radial-gradient(circle, rgba(186, 26, 26, 0.08) 0%, rgba(186, 26, 26, 0.22) 100%)",
                              }}
                            >
                              <div
                                className="flex h-18 w-18 flex-col items-center justify-center rounded-full p-1 text-center"
                                style={{
                                  boxShadow: "inset 0 0 0 1.5px #ba1a1a",
                                }}
                              >
                                <span className="font-label-sm text-error text-[8px] leading-tight font-bold uppercase">
                                  BỘ GD&amp;ĐT
                                </span>
                                <span className="font-label-sm text-error text-[7px] font-semibold uppercase">
                                  EDUSHARE VN
                                </span>
                                <span className="material-symbols-outlined text-error text-[14px]">verified</span>
                                <span className="font-code-num text-error text-[7px] font-bold">★ 24-10-2024 ★</span>
                              </div>
                            </div>
                            <p className="font-label-sm text-label-sm text-secondary">Đại diện điều phối phê duyệt</p>
                            <p className="font-headline-sm text-headline-sm text-primary font-semibold">
                              Nguyễn Văn An
                            </p>
                            <p className="font-label-sm text-label-sm text-on-surface-variant">
                              Giám Đốc Điều Phối Quốc Gia
                            </p>
                            <span className="bg-tertiary-container/15 text-tertiary font-code-num mt-0.5 inline-block rounded px-1.5 py-0.5 text-[10px] font-medium">
                              ✓ Ký số CA SmartSign: 24/10/2024 16:30
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container-low gap-space-md flex items-center rounded-xl">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-[22px]">fingerprint</span>
                    </div>
                    <div className="space-y-0.5 text-left">
                      <p className="font-label-md text-label-md text-on-surface font-semibold">
                        Minh chứng lưu trữ bất biến (Immutable Audit)
                      </p>
                      <p className="font-body-sm text-body-sm text-secondary">
                        Chứng nhận này được bảo đảm bằng thuật toán mã hóa phân tán, có thể đối soát đối chiếu trên Cổng
                        Dịch Vụ Công Quốc Gia.
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: PoD, Physical Equipment List & Legal Accounting */}
                <div className="space-y-space-lg lg:col-span-6 xl:col-span-7">
                  {/* BLOCK 1: Proof of Delivery (PoD) */}
                  <div className="bg-surface-container-lowest p-space-lg space-y-space-md rounded-xl shadow-sm">
                    <div className="pb-space-xs flex items-center justify-between">
                      <div className="gap-space-sm flex items-center">
                        <span className="bg-tertiary-container/15 text-tertiary rounded-lg p-2">
                          <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                        </span>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface">
                            Minh Chứng Bàn Giao Thực Địa (PoD)
                          </h3>
                          <p className="font-body-sm text-body-sm text-secondary">
                            Nghiệm thu trực tiếp tại trường học với đầy đủ biên bản có thẩm quyền
                          </p>
                        </div>
                      </div>
                      <span className="font-code-num text-code-num px-space-sm bg-surface-container text-primary rounded-lg py-1 font-semibold">
                        #BB-TRA-DON-01
                      </span>
                    </div>
                    <div className="gap-space-md grid grid-cols-1 items-stretch md:grid-cols-12">
                      <div className="group bg-surface-container-low relative min-h-[220px] overflow-hidden rounded-xl md:col-span-7">
                        <img
                          alt="A genuine delivery ceremony photo"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                        />
                        <div className="from-on-background/90 via-on-background/40 p-space-md text-surface-container-lowest absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent">
                          <span className="bg-primary font-label-sm rounded px-2 py-0.5 text-[11px] font-semibold uppercase">
                            Ảnh thực địa xác thực
                          </span>
                          <p className="font-body-sm text-body-sm text-surface-bright mt-1">
                            Phòng máy trường PTDTBT THCS Trà Dơn, Nam Trà My
                          </p>
                        </div>
                      </div>
                      <div className="bg-surface-container-low p-space-md flex flex-col justify-between space-y-3 rounded-xl md:col-span-5">
                        <div className="space-y-2">
                          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                            Đại diện tiếp nhận:
                          </span>
                          <div className="gap-space-sm flex items-center">
                            <div className="bg-surface-container-lowest text-primary font-code-num flex h-9 w-9 items-center justify-center rounded-full font-bold shadow-sm">
                              HH
                            </div>
                            <div>
                              <p className="font-label-md text-label-md text-on-surface font-bold">Thầy Hồ Văn Hạnh</p>
                              <p className="font-body-sm text-body-sm text-secondary">
                                Hiệu trưởng trường PTDTBT THCS Trà Dơn
                              </p>
                            </div>
                          </div>
                          <div className="font-body-sm text-body-sm space-y-1.5 pt-2">
                            <div className="text-on-surface-variant flex items-center justify-between">
                              <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-tertiary text-[16px]">location_on</span>{" "}
                                Tọa độ GPS:
                              </span>
                              <span className="font-code-num text-on-surface font-medium">15.082°N, 108.051°E</span>
                            </div>
                            <div className="text-on-surface-variant flex items-center justify-between">
                              <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-primary text-[16px]">schedule</span>{" "}
                                Thời gian:
                              </span>
                              <span className="font-code-num text-on-surface font-medium">14:30 - 20/10/2024</span>
                            </div>
                            <div className="text-on-surface-variant flex items-center justify-between">
                              <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-secondary text-[16px]">fact_check</span>{" "}
                                Tình trạng:
                              </span>
                              <span className="font-label-sm text-label-sm text-tertiary font-semibold">
                                100% Khớp danh mục
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="pt-2">
                          <button className="px-space-sm bg-surface-container-lowest hover:bg-surface-container text-primary font-label-md text-label-md flex w-full items-center justify-center gap-1 rounded-lg py-2 shadow-sm transition-colors">
                            <span className="material-symbols-outlined text-[18px]">description</span>
                            Xem Toàn Văn Biên Bản (#BB-01)
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BLOCK 2: Equipment Itemized Roster */}
                  <div className="bg-surface-container-lowest p-space-lg space-y-space-md rounded-xl shadow-sm">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <div className="gap-space-sm flex items-center">
                        <span className="bg-primary-container/10 text-primary rounded-lg p-2">
                          <span className="material-symbols-outlined text-[20px]">devices</span>
                        </span>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface">
                            Danh Mục Thiết Bị Được Gắn Mã Định Danh
                          </h3>
                          <p className="font-body-sm text-body-sm text-secondary">
                            60 thiết bị đã nạp mã tài sản số và phân quyền quản trị giáo dục
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="bg-surface-container text-primary font-code-num text-body-sm rounded px-2 py-1 font-semibold">
                          40 Laptop
                        </span>
                        <span className="bg-surface-container text-secondary font-code-num text-body-sm rounded px-2 py-1 font-semibold">
                          20 Màn hình
                        </span>
                      </div>
                    </div>
                    <div className="bg-surface-container-low/40 overflow-x-auto rounded-xl">
                      <table className="font-body-sm text-body-sm w-full text-left">
                        <thead className="bg-surface-container-low text-secondary font-label-sm text-label-sm tracking-wider uppercase">
                          <tr>
                            <th className="py-space-sm px-space-md">Chủng loại thiết bị &amp; Model</th>
                            <th className="py-space-sm px-space-md">Số lượng</th>
                            <th className="py-space-sm px-space-md">Dải Serial &amp; Định danh số</th>
                            <th className="py-space-sm px-space-md">Tình trạng vật lý</th>
                            <th className="py-space-sm px-space-md">Vị trí lắp đặt</th>
                          </tr>
                        </thead>
                        <tbody className="text-on-surface divide-y-0">
                          <tr className="hover:bg-surface-container-low/80 bg-surface-container-lowest transition-colors">
                            <td className="px-space-md py-3 font-medium">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-[18px]">laptop_mac</span>
                                <div>
                                  <p className="font-label-md text-label-md text-on-surface font-semibold">
                                    Laptop Dell Latitude 5520
                                  </p>
                                  <p className="text-body-sm text-secondary font-code-num">
                                    Intel Core i5-1145G7 | 16GB RAM | 256GB SSD
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-space-md font-code-num text-on-surface py-3 font-bold">40 máy</td>
                            <td className="px-space-md font-code-num text-secondary py-3">
                              <span className="text-primary font-semibold">PF-19A821</span> →{" "}
                              <span className="text-primary font-semibold">PF-19A860</span>
                              <span className="text-tertiary block text-[11px]">Tem QR EduShare: #EDS-TD-001..040</span>
                            </td>
                            <td className="px-space-md py-3">
                              <span className="bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold">
                                Loại A+ (Kiểm định 100%)
                              </span>
                            </td>
                            <td className="px-space-md font-body-sm text-on-surface-variant py-3">
                              Phòng Tin Học Lầu 2 (Bàn 01 - 40)
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low/80 bg-surface-container-lowest transition-colors">
                            <td className="px-space-md py-3 font-medium">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-[18px]">
                                  desktop_windows
                                </span>
                                <div>
                                  <p className="font-label-md text-label-md text-on-surface font-semibold">
                                    Màn hình LG IPS 24" 24MP59G
                                  </p>
                                  <p className="text-body-sm text-secondary font-code-num">
                                    FHD IPS 75Hz | HDMI/VGA Full Box Cable
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-space-md font-code-num text-on-surface py-3 font-bold">20 màn</td>
                            <td className="px-space-md font-code-num text-secondary py-3">
                              <span className="text-primary font-semibold">LG-24MP-8812</span> →{" "}
                              <span className="text-primary font-semibold">LG-24MP-8831</span>
                              <span className="text-tertiary block text-[11px]">Tem QR EduShare: #EDS-MN-001..020</span>
                            </td>
                            <td className="px-space-md py-3">
                              <span className="bg-primary-container/10 text-primary font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold">
                                Mới 100% Nguyên Hộp
                              </span>
                            </td>
                            <td className="px-space-md font-body-sm text-on-surface-variant py-3">
                              Bàn Thực Hành Đa Năng 01 - 20
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-body-sm text-secondary bg-surface-container-low p-space-sm flex items-center justify-between rounded-lg">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-tertiary text-[17px]">qr_code_scanner</span>
                        Mỗi thiết bị đều được đồng bộ hồ sơ số với CSDL Thiết bị Giáo dục Quốc gia
                      </span>
                      <Link
                        className="text-primary font-label-md text-label-md flex items-center gap-0.5 font-semibold hover:underline"
                        to="#"
                      >
                        Xuất file Excel Serial (.xlsx)
                        <span className="material-symbols-outlined text-[16px]">file_download</span>
                      </Link>
                    </div>
                  </div>

                  {/* BLOCK 3: Accounting & Tax Exemption Records */}
                  <div className="bg-surface-container-lowest p-space-lg space-y-space-md rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="gap-space-sm flex items-center">
                        <span className="bg-tertiary-container/15 text-tertiary rounded-lg p-2">
                          <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                        </span>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface">
                            Hồ Sơ Thuế &amp; Chứng Từ Kế Toán Hợp Lệ
                          </h3>
                          <p className="font-body-sm text-body-sm text-secondary">
                            Được chấp thuận để trừ khi tính thuế TNDN căn cứ theo luật định
                          </p>
                        </div>
                      </div>
                      <span className="px-space-sm bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm inline-flex items-center gap-1 rounded py-1 font-semibold">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        Đã Hạch Toán
                      </span>
                    </div>
                    <div className="p-space-md bg-surface-container-low gap-space-md flex flex-col justify-between rounded-xl md:flex-row md:items-center">
                      <div>
                        <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                          Mã Biên Lai Thuế Điện Tử (Cơ quan Thuế xác nhận):
                        </span>
                        <p className="font-code-num text-headline-sm text-primary mt-0.5 font-bold">BL-2024-8815-EDU</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Thuộc diện:{" "}
                          <em>
                            Tài trợ giáo dục theo chương trình mục tiêu quốc gia (Khoản 2.22 Điều 4 Thông tư
                            96/2015/TT-BTC)
                          </em>
                          .
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-[32px]">format_image_left</span>
                        <div className="text-right">
                          <p className="font-label-sm text-label-sm text-tertiary font-bold">VAT Suất: 0%</p>
                          <p className="font-body-sm text-body-sm text-secondary">Chi phí được trừ 100%</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                        Bộ tài liệu kế toán đính kèm:
                      </span>
                      <div className="gap-space-sm grid grid-cols-1 pt-1 sm:grid-cols-3">
                        <Link
                          className="p-space-sm bg-surface-container-low hover:bg-surface-container group flex items-center justify-between rounded-lg transition-colors"
                          to="#"
                        >
                          <div className="flex min-w-0 items-center gap-2">
                            <span className="material-symbols-outlined text-error text-[20px]">picture_as_pdf</span>
                            <div className="truncate">
                              <p className="font-label-md text-label-md text-on-surface group-hover:text-primary truncate font-medium">
                                1. Biên lai thuế CQT
                              </p>
                              <p className="font-code-num text-secondary text-[11px]">1.2 MB • Ký số</p>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-secondary group-hover:text-primary text-[18px]">
                            download
                          </span>
                        </Link>
                        <Link
                          className="p-space-sm bg-surface-container-low hover:bg-surface-container group flex items-center justify-between rounded-lg transition-colors"
                          to="#"
                        >
                          <div className="flex min-w-0 items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-[20px]">picture_as_pdf</span>
                            <div className="truncate">
                              <p className="font-label-md text-label-md text-on-surface group-hover:text-primary truncate font-medium">
                                2. Biên bản nghiệm thu
                              </p>
                              <p className="font-code-num text-secondary text-[11px]">2.8 MB • Ký 2 bên</p>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-secondary group-hover:text-primary text-[18px]">
                            download
                          </span>
                        </Link>
                        <Link
                          className="p-space-sm bg-surface-container-low hover:bg-surface-container group flex items-center justify-between rounded-lg transition-colors"
                          to="#"
                        >
                          <div className="flex min-w-0 items-center gap-2">
                            <span className="material-symbols-outlined text-tertiary text-[20px]">table_view</span>
                            <div className="truncate">
                              <p className="font-label-md text-label-md text-on-surface group-hover:text-primary truncate font-medium">
                                3. Bảng kê Serial số
                              </p>
                              <p className="font-code-num text-secondary text-[11px]">420 KB • .xlsx</p>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-secondary group-hover:text-primary text-[18px]">
                            download
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Post-Audit & Technical Support Warranty Commitment */}
              <div className="bg-surface-container-lowest p-space-lg gap-space-lg grid grid-cols-1 items-center rounded-xl shadow-sm md:grid-cols-12">
                <div className="gap-space-md flex items-start md:col-span-8">
                  <div className="bg-tertiary-container/15 text-tertiary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[26px]">health_and_safety</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">
                      Cam Kết Bảo Trợ Kỹ Thuật 36 Tháng Từ EduShare &amp; Đội Ngũ Tình Nguyện
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl leading-relaxed">
                      Toàn bộ 60 thiết bị thuộc chứng nhận này được đội ngũ kỹ sư IT EduShare định kỳ đến điểm trường
                      bảo dưỡng, kiểm tra đường truyền và cập nhật phần mềm học liệu <strong>6 tháng một lần</strong>.
                      Mọi hỏng hóc phần cứng được cam kết bảo hành 1 đổi 1 tận nơi.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-low p-space-md flex flex-col justify-center space-y-2 rounded-xl md:col-span-4">
                  <div className="gap-space-sm text-primary flex items-center">
                    <span className="material-symbols-outlined text-[20px]">support_agent</span>
                    <span className="font-label-md text-label-md font-bold uppercase">
                      Kênh Hỗ Trợ Độc Quyền Nhà Hảo Tâm
                    </span>
                  </div>
                  <div className="font-body-sm text-body-sm space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-secondary">Hotline 24/7:</span>
                      <span className="font-code-num text-code-num text-on-surface font-bold">1900 6868 (Nhánh 1)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary">Email Điều Phối:</span>
                      <span className="font-code-num text-code-num text-primary font-medium">
                        donor.support@edushare.vn
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Footer Metadata Bar */}
              <div className="text-body-sm text-secondary pb-space-lg px-space-xs flex flex-col items-center justify-between gap-2 sm:flex-row">
                <div className="gap-space-xs font-code-num flex items-center text-[12px]">
                  <span className="">Chữ ký số hợp chuẩn eIDAS &amp; Luật Giao Dịch Điện Tử Việt Nam 2023.</span>
                </div>
                <div className="gap-space-md flex items-center text-[12px]">
                  <span className="text-tertiary flex items-center gap-1 font-medium">
                    <span className="bg-tertiary h-2 w-2 rounded-full"></span>
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
