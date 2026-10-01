import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DonorDonationDetailsPage() {
  const [timeLeft, setTimeLeft] = useState(46 * 3600 + 18 * 60 + 32);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isShippingLabelModalOpen, setIsShippingLabelModalOpen] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    if (seconds <= 0) return "00:00:00 (Hết hạn hủy)";
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-background font-body-md text-on-surface antialiased flex">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between">
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="h-16 px-space-lg flex items-center justify-between bg-surface-container-lowest">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[20px]">school</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface leading-tight">EduShare VN</span>
                <span className="font-label-sm text-label-sm text-primary uppercase">Cổng Nhà Hảo Tâm</span>
              </div>
            </div>
          </div>
          <div className="px-space-md py-space-sm">
            <div className="px-space-sm py-space-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Nhà Hảo Tâm</span>
            </div>
            <nav className="mt-space-xs space-y-1 flex flex-col">
              <Link to="/donor/donation-details" aria-current="page" className="flex items-center px-space-md py-space-sm transition-all bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-sm">Đăng ký trao tặng</Link>
              <Link to="/donor/dashboard" className="flex items-center px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-md text-body-md">Quản lý phiếu của tôi</Link>
              <Link to="/donor/certificates" className="flex items-center px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-md text-body-md">Biên nhận & Chứng nhận</Link>
              <Link to="/donor/tracking" className="flex items-center px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-md text-body-md">Hành trình & Mã QR</Link>
              <Link to="/donor/campaigns" className="flex items-center px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-md text-body-md">Đợt vận động đang chạy</Link>
            </nav>
          </div>
        </div>
        <div className="p-space-md bg-surface-container-low">
          <div className="flex items-center justify-between px-space-sm py-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-tertiary font-semibold">Hệ thống Trực tuyến</span>
            </div>
            <span className="font-code-num text-code-num text-on-surface-variant">v2.4.0</span>
          </div>
          <div className="mt-space-xs px-space-sm">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Quốc gia Giáo dục © 2024</span>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT WRAPPER */}
      <div className="pl-72 w-full flex-1">
        {/* HEADER */}
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
          <div className="flex items-center gap-space-md">
            <div className="relative w-80 md:w-96 flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]">search</span>
              <input className="w-full pl-9 pr-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary" placeholder="Tra cứu mã phiếu, số serial hoặc mã QR..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container">
              <span className="material-symbols-outlined text-primary text-[16px]">corporate_fare</span>
              <span className="font-label-sm text-label-sm text-on-secondary-container font-medium">Tổ chức / Cá nhân Hảo tâm</span>
            </div>
            <button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error"></span>
            </button>
            <div className="flex items-center gap-space-sm pl-space-xs">
              <div className="flex flex-col text-right hidden md:block">
                <span className="font-label-md text-label-md text-on-surface font-medium">Tập đoàn Vingroup</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">ID: NHT-78294</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN BODY */}
        <main className="relative pt-16 bg-background w-full min-h-screen">
          <div className="px-space-lg py-space-sm bg-surface-container-low/50 border-b border-outline-variant/30">
            <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
              <Link to="/" className="hover:text-primary transition-colors">EduShare VN</Link>
              <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
              <Link to="#" className="hover:text-primary transition-colors">Nhà hảo tâm</Link>
              <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
              <span className="text-on-surface font-semibold">Chi tiết đăng ký trao tặng</span>
            </nav>
          </div>
          
          <div className="flex flex-col w-full">
            {/* RBAC & IMMUTABILITY ALERT BANNER */}
            <div className="px-space-lg pt-space-md">
              <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-md shadow-sm">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pl-space-xs">
                  <div className="flex items-start gap-space-sm">
                    <div className="p-2 rounded-lg bg-surface-container-lowest text-tertiary shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-[22px]">lock_clock</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-space-xs flex-wrap">
                        <span className="font-headline-sm text-headline-sm text-on-surface">Phiếu ghi nhận bất biến</span>
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Quy chế RBAC: Không sửa phiếu đã gửi</span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                        Theo quy định minh bạch dữ liệu trao tặng giáo dục, phiếu đã hoàn tất nộp sẽ khóa cập nhật nội dung. Bạn có thể <strong className="text-on-surface font-semibold">yêu cầu HỦY PHIẾU trong vòng 46 giờ tới</strong> (hết hạn lúc <span className="font-code-num text-code-num text-primary font-semibold">14:20 26/10/2024</span>, tức 72h kể từ lúc lập).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm shrink-0">
                    <div className="hidden lg:flex flex-col items-end mr-space-xs">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Thời gian còn lại</span>
                      <div className="flex items-center gap-1 font-code-num text-code-num font-bold text-tertiary">
                        <span className="material-symbols-outlined text-[16px]">timer</span>
                        <span>{formatTime(timeLeft)}</span>
                      </div>
                    </div>
                    <button 
                      className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-error-container text-on-error-container hover:bg-error hover:text-on-error transition-all font-label-md text-label-md font-semibold shadow-sm"
                      onClick={() => setIsCancelModalOpen(true)}
                    >
                      <span className="material-symbols-outlined text-[18px]">cancel</span>
                      <span>Yêu cầu Hủy phiếu này</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* MAIN VIEWPORT CONTENT */}
            <div className="px-space-lg py-space-md space-y-space-lg">
              {/* HEADER TITLE & METADATA BAR */}
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                <div className="space-y-space-xs">
                  <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                    <span>Mã số lưu trữ quốc gia:</span>
                    <span className="font-code-num text-code-num text-primary font-semibold">VN-EDU-QNM-2024-8842</span>
                    <span>•</span>
                    <span>Ngày tạo: 14:20 23/10/2024</span>
                  </div>
                  <div className="flex items-center gap-space-md flex-wrap">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Chi Tiết Đăng Ký Trao Tặng #DON-2024-8842</h1>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold">
                      <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                      Chờ tiếp nhận tại kho
                    </span>
                  </div>
                  <div className="flex items-center gap-space-sm flex-wrap pt-space-xs">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container-low text-on-surface-variant font-code-num text-code-num">
                      <span className="material-symbols-outlined text-[15px] text-tertiary">fingerprint</span>
                      SHA-256: 0x8f4b7a90...c391ef4b
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[15px] text-primary">verified_user</span>
                      Ký số bảo chứng điện tử cấp độ 3
                    </span>
                  </div>
                </div>
                {/* Action buttons */}
                <div className="flex items-center gap-space-sm flex-wrap self-start xl:self-center">
                  <button className="flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md" onClick={handlePrint}>
                    <span className="material-symbols-outlined text-[18px]">print</span>
                    <span>In phiếu bàn giao</span>
                  </button>
                  <button className="flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md" onClick={() => alert('Đang tạo tệp hồ sơ PDF có chữ ký số SHA-256...')}>
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>Tải hồ sơ PDF</span>
                  </button>
                  <button 
                    className="flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-sm"
                    onClick={() => setIsShippingLabelModalOpen(true)}
                  >
                    <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                    <span>Mã QR lô hàng & Vận đơn</span>
                  </button>
                </div>
              </div>

              {/* 5-STAGE WORKFLOW STEPPER */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-space-md">
                  <div>
                    <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Hành trình phân bổ thiết bị</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Tiến trình kiểm định & trao tặng minh bạch</h2>
                  </div>
                  <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-semibold">Chặng 2 / 5</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-space-md relative">
                  {/* Step 1: Complete */}
                  <div className="flex flex-col p-space-md rounded-xl bg-surface-container-low relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center font-bold">
                        <span className="material-symbols-outlined text-[18px]">check</span>
                      </span>
                      <span className="font-code-num text-code-num text-tertiary font-semibold">Chặng 1</span>
                    </div>
                    <span className="font-headline-sm text-[14px] text-on-surface font-semibold">Đăng ký & Xác nhận</span>
                    <span className="font-label-sm text-label-sm text-tertiary font-medium mt-1">Đã hoàn tất</span>
                    <span className="font-code-num text-body-sm text-on-surface-variant mt-0.5">14:20 23/10/2024</span>
                    <div className="mt-2 pt-2 border-t border-outline-variant/30 text-on-surface-variant font-body-sm text-[11px]">
                      Hệ thống xác thực mã số định danh NHT
                    </div>
                  </div>
                  {/* Step 2: In-Progress Active */}
                  <div className="flex flex-col p-space-md rounded-xl bg-primary-fixed/30 relative ring-2 ring-primary">
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold animate-pulse">
                        <span className="material-symbols-outlined text-[18px]">inventory_2</span>
                      </span>
                      <span className="font-code-num text-code-num text-primary font-bold">Chặng 2</span>
                    </div>
                    <span className="font-headline-sm text-[14px] text-primary font-bold">Tiếp nhận tại Kho</span>
                    <span className="font-label-sm text-label-sm text-primary font-semibold mt-1">Đang chờ điều phối xe</span>
                    <span className="font-code-num text-body-sm text-on-surface-variant mt-0.5">Dự kiến 25/10/2024</span>
                    <div className="mt-2 pt-2 border-t border-outline-variant/30 text-on-surface font-body-sm text-[11px]">
                      Đội TNV tiếp nhận tại KCN Hòa Khánh Đà Nẵng
                    </div>
                  </div>
                  {/* Step 3: Pending */}
                  <div className="flex flex-col p-space-md rounded-xl bg-surface-container-low/50 opacity-75">
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold">3</span>
                      <span className="font-code-num text-code-num text-on-surface-variant font-medium">Chặng 3</span>
                    </div>
                    <span className="font-headline-sm text-[14px] text-on-surface font-semibold">Kiểm định & QR từng máy</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium mt-1">Chưa thực hiện</span>
                    <span className="font-code-num text-body-sm text-on-surface-variant mt-0.5">Thời gian: ~24 giờ</span>
                    <div className="mt-2 pt-2 border-t border-outline-variant/30 text-on-surface-variant font-body-sm text-[11px]">
                      Cài đặt phần mềm giáo dục EduOS và dán tem số
                    </div>
                  </div>
                  {/* Step 4: Pending */}
                  <div className="flex flex-col p-space-md rounded-xl bg-surface-container-low/50 opacity-75">
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold">4</span>
                      <span className="font-code-num text-code-num text-on-surface-variant font-medium">Chặng 4</span>
                    </div>
                    <span className="font-headline-sm text-[14px] text-on-surface font-semibold">Vận chuyển vùng cao</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium mt-1">Chưa thực hiện</span>
                    <span className="font-code-num text-body-sm text-on-surface-variant mt-0.5">Xe chuyên dụng EduShare</span>
                    <div className="mt-2 pt-2 border-t border-outline-variant/30 text-on-surface-variant font-body-sm text-[11px]">
                      Vượt đèo A Xan, Tây Giang (140km đường núi)
                    </div>
                  </div>
                  {/* Step 5: Pending */}
                  <div className="flex flex-col p-space-md rounded-xl bg-surface-container-low/50 opacity-75">
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold">5</span>
                      <span className="font-code-num text-code-num text-on-surface-variant font-medium">Chặng 5</span>
                    </div>
                    <span className="font-headline-sm text-[14px] text-on-surface font-semibold">Ký số & Bàn giao lớp học</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium mt-1">Chưa thực hiện</span>
                    <span className="font-code-num text-body-sm text-on-surface-variant mt-0.5">Biên bản PoD minh bạch</span>
                    <div className="mt-2 pt-2 border-t border-outline-variant/30 text-on-surface-variant font-body-sm text-[11px]">
                      GPS xác thực + Chữ ký Hiệu trưởng + Ảnh bàn giao
                    </div>
                  </div>
                </div>
              </div>

              {/* 2 COLUMNS: CAMPAIGN SPOTLIGHT & LOGISTICS DETAILS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                {/* LEFT 7 COLS: CAMPAIGN TARGET & PHOTO STORY */}
                <div className="lg:col-span-7 space-y-space-md">
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
                    <div className="flex items-center justify-between flex-wrap gap-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[20px]">campaign</span>
                        <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wide">Chiến dịch tài trợ gắn liền</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">Đợt 4 / Năm học 2024-2025</span>
                    </div>
                    <div>
                      <h3 className="font-headline-md text-headline-md text-on-surface">Ánh Sáng Tri Thức Miền Tây Xứ Quảng - Đợt 4</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        Chiến dịch trọng điểm cung cấp trang thiết bị phòng tin học tiêu chuẩn cho học sinh đồng bào dân tộc thiểu số Cơ Tu tại các điểm trường biên giới khó khăn.
                      </p>
                    </div>
                    <div className="relative overflow-hidden rounded-xl bg-surface-container">
                      <img className="w-full h-56 object-cover" data-alt="A warm, authentic Vietnamese classroom in mountainous Tay Giang Quang Nam with wooden walls and large window overlooking terraced fields. Happy ethnic minority Co Tu students and female teacher smiling brightly as a friendly EduShare volunteer in a blue polo hands over a modern laptop, with desktop computers set up on school desks and a chalkboard in the background reading Le Trao Tang May Tinh." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj3xgYnZ5BQlGHUIDJ4JXaDsYnEtU3BefEhuhMsibn2sktjHnQyNviQgxrT09SfI0Qh5KcZ-OtT_aCCYg95lwSPCde6r3ndrgWn2ZEdEgGNi8a9z8u7AyPGT0L4vr7jbdbNPd9ZVMv9tdVMawWjZa_CFsyCfyL0Mn74UDJFQxJEkrQqhqzHGcoC-7Xd32WQasST2kZmqNS0GunEwaturBwfJkeYCD7F2kvY86xqK-F5Kh7L5TEn7M0wQ" alt="" />
                      <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/40 to-transparent flex flex-col justify-end p-space-md text-on-primary">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">location_on</span>
                          <span className="font-label-md text-label-md font-semibold text-tertiary-fixed">Điểm tiếp nhận thụ hưởng: Trường THCS Bán trú Dân tộc Tr'Hy</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-inverse-on-surface mt-0.5 line-clamp-1">
                          Xã Tr'Hy, Huyện Tây Giang, Tỉnh Quảng Nam (Giáp biên giới Việt - Lào)
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-space-sm pt-space-xs">
                      <div className="p-space-sm rounded-lg bg-surface-container-low">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Quy mô trường</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface mt-0.5 block">214 học sinh</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">100% người Cơ Tu</span>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container-low">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Hiện trạng phòng máy</span>
                        <span className="font-headline-sm text-headline-sm text-error mt-0.5 block">0/15 máy cũ</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Đã hỏng sau bão</span>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container-low">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Mục tiêu đợt 4</span>
                        <span className="font-headline-sm text-headline-sm text-tertiary mt-0.5 block">20 Laptop mới</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Lắp mạng vệ tinh</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* RIGHT 5 COLS: LOGISTICS & TRANSFER MODALITY */}
                <div className="lg:col-span-5 space-y-space-md">
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
                    <div className="flex items-center gap-space-xs text-primary">
                      <span className="material-symbols-outlined text-[20px]">warehouse</span>
                      <span className="font-label-sm text-label-sm uppercase font-bold tracking-wide">Trung tâm tiếp nhận & Kỹ thuật</span>
                    </div>
                    <div className="space-y-space-xs">
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Tổng Kho Kỹ Thuật EduShare Đà Nẵng</h4>
                      <div className="flex items-start gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[16px] shrink-0 mt-0.5 text-primary">pin_drop</span>
                        <span>Lô B2-14, Đường số 3, Khu công nghiệp Hòa Khánh, Phường Hòa Khánh Bắc, Quận Liên Chiểu, TP. Đà Nẵng</span>
                      </div>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low space-y-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Hình thức chuyển giao đã chọn</span>
                        <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">Được hỗ trợ</span>
                      </div>
                      <div className="flex items-center gap-space-sm pt-1">
                        <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0">
                          <span className="material-symbols-outlined text-[22px]">local_shipping</span>
                        </div>
                        <div>
                          <p className="font-headline-sm text-[14px] text-on-surface">TNV EduShare hỗ trợ bốc dỡ & nhận tận nơi</p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Nhà hảo tâm không cần tự vận chuyển qua bưu cục</p>
                        </div>
                      </div>
                      <div className="mt-space-sm pt-space-xs border-t border-outline-variant/30 flex items-center justify-between text-body-sm">
                        <span className="text-on-surface-variant">Khung giờ tiếp nhận dự kiến:</span>
                        <span className="font-code-num text-code-num text-on-surface font-semibold">08:30 - 11:30 | 25/10/2024</span>
                      </div>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container space-y-space-xs">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Thông tin đơn vị trao tặng</span>
                      <div className="flex items-center gap-space-sm pt-1">
                        <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary font-bold shadow-sm">
                          VG
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-[14px] text-on-surface">Tập đoàn Vingroup</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Người đại diện: Bà Trần Thu Hằng (Ban CSR)</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-space-xs font-code-num text-body-sm text-on-surface-variant">
                        <span>SĐT: 0912.***.888</span>
                        <span>Email: donor@vingroup.net</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-space-sm py-2 rounded-lg bg-surface-container-low text-on-surface-variant font-label-md text-label-md">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">support_agent</span>
                        Hotline Điều phối Kho & Đội xe:
                      </span>
                      <span className="font-code-num text-code-num font-bold text-tertiary">1900 6822 (Phím 2)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* DETAILED ITEMIZED LIST OF DONATED ASSETS */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                <div className="p-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md bg-surface-container-lowest">
                  <div>
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px]">devices</span>
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wide">Chi tiết thiết bị & Khai báo kỹ thuật</span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-on-surface mt-0.5">Danh mục thiết bị đăng ký trao tặng (3 dòng hàng)</h2>
                  </div>
                  <div className="flex items-center gap-space-md p-space-sm px-space-md rounded-xl bg-surface-container-low self-start md:self-center">
                    <div className="flex flex-col text-right">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Tổng giá trị quy đổi ước tính</span>
                      <span className="font-headline-md text-headline-md text-primary font-bold">168.500.000 VNĐ</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">price_check</span>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                        <th className="py-3 px-space-lg">STT & Mã Tạm</th>
                        <th className="py-3 px-space-md">Thiết bị & Cấu hình chi tiết</th>
                        <th className="py-3 px-space-md text-center">Số lượng</th>
                        <th className="py-3 px-space-md">Tình trạng vật lý</th>
                        <th className="py-3 px-space-md">Phân bổ mục tiêu</th>
                        <th className="py-3 px-space-lg text-right">Định giá tham chiếu</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20 font-body-md text-body-md text-on-surface">
                      {/* Row 1: Laptops */}
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="py-4 px-space-lg align-top">
                          <span className="font-code-num text-code-num font-bold text-on-surface">#01</span>
                          <div className="font-code-num text-body-sm text-primary">ITEM-LT-2041</div>
                          <span className="inline-block mt-1 px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-[10px]">Lô 1</span>
                        </td>
                        <td className="py-4 px-space-md align-top">
                          <div className="flex items-start gap-space-sm">
                            <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center shrink-0 overflow-hidden">
                              <img className="w-full h-full object-cover" data-alt="Dell Laptop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLoLYBTOtWK0G3rX4WotzPik2HYp2uGN7GCje31qYix4DZVG34X1g0K5N_8ebaXiQhzEHvbGEMzSPU54CPaFy3ewKv8Ah8FmHttjSuCF7s6yiZ4uLj_ALYo6Q7lSnkIoiOmCoX9UhfQQJmv0NAdqQ9Hsmpfuk7DR4jHlgcKq8gCJ142hPw45LMoveBd7B8mRFwjpOHSy2Cf1iYPiAQ1blEQ-1fUFouleByVfaoVrspdA28NblELB2nMw" alt="" />
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-space-xs">
                                <span className="font-headline-sm text-headline-sm text-on-surface">Laptop Dell Latitude 5520</span>
                                <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Đồng bộ</span>
                              </div>
                              <p className="font-body-sm text-body-sm text-on-surface-variant">
                                <strong className="font-medium text-on-surface">Thông số:</strong> Intel Core i5-1145G7 | RAM 8GB DDR4 | SSD 256GB NVMe PCIe | Màn 15.6" FHD IPS Anti-Glare | Kèm sạc zin chính hãng Dell 65W Type-C
                              </p>
                              <div className="text-[12px] text-tertiary flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">comment</span>
                                <span>Ghi chú từ NHT: "Máy thu hồi từ dự án khối văn phòng tài chính, màn hình sắc nét, đã vệ sinh quạt tản nhiệt."</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-space-md align-top text-center">
                          <span className="font-headline-sm text-headline-sm text-on-surface">20</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant block">chiếc</span>
                        </td>
                        <td className="py-4 px-space-md align-top">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                            Đã sử dụng (90-95%)
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">Pin kiểm định &gt; 4.5h</span>
                        </td>
                        <td className="py-4 px-space-md align-top">
                          <span className="font-headline-sm text-[13px] text-primary font-semibold">Phòng máy THCS Tr'Hy</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant block">Cần cài phần mềm Scratch & MS Office</span>
                        </td>
                        <td className="py-4 px-space-lg align-top text-right">
                          <span className="font-code-num text-headline-sm text-on-surface font-semibold">160.000.000 đ</span>
                          <span className="font-code-num text-body-sm text-on-surface-variant block">(8.000.000 đ / chiếc)</span>
                        </td>
                      </tr>
                      {/* Row 2: Optical Mice */}
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="py-4 px-space-lg align-top">
                          <span className="font-code-num text-code-num font-bold text-on-surface">#02</span>
                          <div className="font-code-num text-body-sm text-primary">ITEM-AC-5510</div>
                          <span className="inline-block mt-1 px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-[10px]">Phụ kiện</span>
                        </td>
                        <td className="py-4 px-space-md align-top">
                          <div className="flex items-start gap-space-sm">
                            <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center shrink-0 overflow-hidden">
                              <img className="w-full h-full object-cover" data-alt="Mouse" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLrJiyA17HsZvrGGZhXttgBhZySrAFsZ6Gp6BXNGjaHl7P9hDVi6fqYkTqP0S_QM0FKMOTgqaEVKZo7qr6dEsjpM32NWmxi-CcJufR_14xkRgbPhJo5Kl2J5mZah40d_PpG4gFDITJ4XmekQiCV--pwhVd2gJF7G6ogb5C9Psq6j8oXBogneC9sOWq9y9wEW09cY07s8iuBNpE9KFrZm5w06RwdNFRJNThGv2YObsd8Tske9tu3VKFww" alt="" />
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-space-xs">
                                <span className="font-headline-sm text-headline-sm text-on-surface">Chuột quang vi tính Fuhlen Pro USB</span>
                                <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm">Phụ kiện mới</span>
                              </div>
                              <p className="font-body-sm text-body-sm text-on-surface-variant">
                                Dây USB 1.8m siêu bền, độ nhạy 1200 DPI phù hợp giáo trình học tập thực hành tin học thiếu nhi.
                              </p>
                              <div className="text-[12px] text-tertiary flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">comment</span>
                                <span>Ghi chú: Nguyên seal nhà máy, xuất xứ Fuhlen Vietnam.</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-space-md align-top text-center">
                          <span className="font-headline-sm text-headline-sm text-on-surface">10</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant block">chiếc</span>
                        </td>
                        <td className="py-4 px-space-md align-top">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            Mới 100% nguyên hộp
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">Bảo hành 24 tháng</span>
                        </td>
                        <td className="py-4 px-space-md align-top">
                          <span className="font-headline-sm text-[13px] text-on-surface font-semibold">Phòng máy THCS Tr'Hy</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant block">Đi kèm bổ trợ dàn laptop</span>
                        </td>
                        <td className="py-4 px-space-lg align-top text-right">
                          <span className="font-code-num text-headline-sm text-on-surface font-semibold">2.500.000 đ</span>
                          <span className="font-code-num text-body-sm text-on-surface-variant block">(250.000 đ / chiếc)</span>
                        </td>
                      </tr>
                      {/* Row 3: SSD Storage */}
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="py-4 px-space-lg align-top">
                          <span className="font-code-num text-code-num font-bold text-on-surface">#03</span>
                          <div className="font-code-num text-body-sm text-primary">ITEM-HD-8812</div>
                          <span className="inline-block mt-1 px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-[10px]">Linh kiện</span>
                        </td>
                        <td className="py-4 px-space-md align-top">
                          <div className="flex items-start gap-space-sm">
                            <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center shrink-0 overflow-hidden">
                              <img className="w-full h-full object-cover" data-alt="SSD" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMwqERodrsumItSen2Undj0ER4tqpcd2mk9znnhupTmEbPCVZLIdrJZzfBnxHFhMGqdf0YPr1lfGgJABt1GqgHV5rl7ixkb6_5GrHWZQUhBA3--qqSTLxHGdM2EdY03wynJtXksv6sGokF5BAVXCF3NBMF5Nrc5VlH6oTuZa3VhMju5ACSeoooMoYjf-B7xiK6nr6CZG1BqFlJofRQQJd0aDwyM6OCEVPLS7a_OFaF1N4r05ioI4ozhQ" alt="" />
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-space-xs">
                                <span className="font-headline-sm text-headline-sm text-on-surface">Ổ cứng SSD Kingston NV2 PCIe 4.0 256GB</span>
                                <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm">Nâng cấp</span>
                              </div>
                              <p className="font-body-sm text-body-sm text-on-surface-variant">
                                Tốc độ đọc 3500MB/s, dùng thay thế nâng cấp cho 05 bộ máy để bàn cũ tại phòng hiệu bộ nhà trường.
                              </p>
                              <div className="text-[12px] text-tertiary flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">comment</span>
                                <span>Ghi chú: Hỗ trợ thêm cho thầy cô giáo cập nhật cơ sở dữ liệu ngành.</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-space-md align-top text-center">
                          <span className="font-headline-sm text-headline-sm text-on-surface">05</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant block">chiếc</span>
                        </td>
                        <td className="py-4 px-space-md align-top">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            Mới 100% nguyên vỉ
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">Bảo hành chính hãng 3 năm</span>
                        </td>
                        <td className="py-4 px-space-md align-top">
                          <span className="font-headline-sm text-[13px] text-on-surface font-semibold">Tổ Công nghệ Thông tin</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant block">Kỹ thuật viên EduShare lắp đặt</span>
                        </td>
                        <td className="py-4 px-space-lg align-top text-right">
                          <span className="font-code-num text-headline-sm text-on-surface font-semibold">6.000.000 đ</span>
                          <span className="font-code-num text-body-sm text-on-surface-variant block">(1.200.000 đ / chiếc)</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-space-lg bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-md border-t border-outline-variant/30">
                  <div className="flex items-center gap-space-md">
                    <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
                      <span>Tổng số lượng hiện vật:</span>
                      <strong className="text-on-surface font-headline-sm text-headline-sm">35 thiết bị</strong>
                    </div>
                    <span className="text-outline">|</span>
                    <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
                      <span>Đóng gói:</span>
                      <strong className="text-on-surface font-headline-sm text-headline-sm">04 thùng quy chuẩn</strong>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">verified</span>
                    <span>Bảo hiểm vận chuyển nội bộ: Đã kích hoạt bởi Quỹ Giáo dục Quốc gia</span>
                  </div>
                </div>
              </div>

              {/* TRANSPARENCY LEDGER & SHIPPING LABEL DOWNLOAD SECTION */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pb-space-xl">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-sm flex flex-col justify-between">
                  <div className="space-y-space-xs">
                    <div className="flex items-center gap-space-xs text-primary">
                      <span className="material-symbols-outlined text-[20px]">label</span>
                      <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Nhãn dán kiện hàng</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">Tải Shipping Label (Khổ A5)</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Nhà hảo tâm vui lòng in và dán nhãn định danh lên 04 thùng máy trước giờ nhân viên EduShare đến lấy để việc quét mã QR đồng bộ tự động.
                    </p>
                  </div>
                  <button 
                    className="w-full flex items-center justify-center gap-space-xs py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors mt-space-sm"
                    onClick={() => setIsShippingLabelModalOpen(true)}
                  >
                    <span className="material-symbols-outlined text-[18px]">print</span>
                    <span>Xem & In 04 Tem dán QR</span>
                  </button>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-sm flex flex-col justify-between">
                  <div className="space-y-space-xs">
                    <div className="flex items-center gap-space-xs text-tertiary">
                      <span className="material-symbols-outlined text-[20px]">fact_check</span>
                      <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Tiêu chuẩn kiểm định 1 chạm</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">Quy chuẩn kỹ thuật EduShare</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Sau khi nhận máy tại Kho, đội ngũ kỹ sư sẽ kiểm tra theo 3 phân loại: Sẵn sàng trao tặng, Cần tân trang bảo dưỡng, hoặc Tái chế an toàn để đảm bảo quyền lợi cao nhất cho học sinh.
                    </p>
                  </div>
                  <div className="p-space-xs px-space-sm rounded-lg bg-surface-container-low font-code-num text-[12px] text-tertiary flex items-center gap-space-xs mt-space-sm">
                    <span className="material-symbols-outlined text-[16px]">security_update_good</span>
                    <span>Chứng nhận Tiêu chuẩn GD-TCVN 2024</span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-sm flex flex-col justify-between">
                  <div className="space-y-space-xs">
                    <div className="flex items-center gap-space-xs text-primary">
                      <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                      <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Sổ cái phân bổ công khai</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">Minh bạch dòng thiết bị</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Mọi hành vi từ giao nhận, bảo dưỡng đến hình ảnh nhận máy của từng em học sinh sẽ được ký số và niêm yết vĩnh viễn trên Cổng tra cứu cộng đồng EduShare Portal.
                    </p>
                  </div>
                  <Link className="w-full flex items-center justify-center gap-space-xs py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors mt-space-sm" to="#">
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    <span>Tra cứu Sổ cái đợt 4</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* MODAL: YÊU CẦU HỦY PHIẾU BẢO MẬT */}
            {isCancelModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/60 backdrop-blur-sm p-4">
                <div className="bg-surface-container-lowest rounded-xl max-w-lg w-full p-space-lg shadow-2xl space-y-space-md">
                  <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/30">
                    <div className="flex items-center gap-space-xs text-error">
                      <span className="material-symbols-outlined text-[24px]">warning</span>
                      <h3 className="font-headline-sm text-headline-sm text-error">Xác nhận yêu cầu Hủy Phiếu</h3>
                    </div>
                    <button className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant" onClick={() => setIsCancelModalOpen(false)}>
                      <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                  </div>
                  <div className="space-y-space-sm text-body-md text-on-surface">
                    <div className="p-space-sm rounded-lg bg-error-container text-on-error-container text-body-sm">
                      <strong>Lưu ý quan trọng:</strong> Hành động hủy phiếu sẽ dừng lập tức kế hoạch điều phối xe thu gom của đội TNV EduShare Đà Nẵng tại Tây Giang.
                    </div>
                    <p>Mã phiếu: <strong className="font-code-num text-code-num text-primary">#DON-2024-8842</strong></p>
                    <p className="text-on-surface-variant">
                      Phiếu của bạn hiện vẫn đủ điều kiện hủy do còn trong hạn <strong className="text-on-surface">72 giờ (còn lại {formatTime(timeLeft)})</strong> và hàng chưa làm thủ tục nhập kho trung chuyển.
                    </p>
                    <div className="space-y-1 pt-space-xs">
                      <label className="block font-label-md text-label-md text-on-surface font-semibold">Lý do yêu cầu hủy phiếu <span className="text-error">*</span></label>
                      <select className="w-full p-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm border border-outline-variant/50 focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Thay đổi danh mục thiết bị / Cần cập nhật số lượng lớn hơn</option>
                        <option>Trùng lặp với kế hoạch trao tặng riêng của đơn vị</option>
                        <option>Chuyển đổi hình thức sang tài trợ kinh phí trực tiếp</option>
                        <option>Lý do đột xuất nội bộ doanh nghiệp</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="block font-label-md text-label-md text-on-surface font-semibold">Ghi chú bổ sung cho Ban điều phối</label>
                      <textarea className="w-full p-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm border border-outline-variant/50 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Nhập lý do chi tiết..." rows={2}></textarea>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-space-sm pt-space-sm border-t border-outline-variant/30">
                    <button className="px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={() => setIsCancelModalOpen(false)}>
                      Đóng & Giữ lại phiếu
                    </button>
                    <button className="px-space-md py-2 rounded-lg bg-error text-on-error font-label-md text-label-md hover:opacity-90 transition-opacity font-semibold" onClick={() => {
                      alert('Đã gửi yêu cầu hủy phiếu #DON-2024-8842 thành công. Đội điều phối sẽ liên hệ xác nhận trong 15 phút.'); 
                      setIsCancelModalOpen(false);
                    }}>
                      Xác nhận Hủy Đăng Ký
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* MODAL: SHIPPING LABEL & QR PREVIEW */}
            {isShippingLabelModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/60 backdrop-blur-sm p-4">
                <div className="bg-surface-container-lowest rounded-xl max-w-2xl w-full p-space-lg shadow-2xl space-y-space-md max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/30">
                    <div className="flex items-center gap-space-xs text-primary">
                      <span className="material-symbols-outlined text-[24px]">qr_code_scanner</span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">Vận Đơn & Nhãn Kiện Hàng Khổ A5 (Mẫu 1/4)</h3>
                    </div>
                    <button className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant" onClick={() => setIsShippingLabelModalOpen(false)}>
                      <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                  </div>
                  <div className="p-space-lg rounded-xl bg-surface-container-lowest border-2 border-dashed border-outline-variant space-y-space-md">
                    <div className="flex items-center justify-between border-b pb-space-sm border-outline-variant">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[28px]">school</span>
                        <div>
                          <span className="font-headline-sm text-[16px] text-on-surface block font-bold leading-tight">EDUSHARE VIETNAM</span>
                          <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">Hệ thống Điều phối Tiếp nhận Giáo dục</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-code-num text-code-num text-primary font-bold">KIỆN: 01 / 04</span>
                        <span className="block font-label-sm text-[10px] text-on-surface-variant">MÃ PHIẾU: #DON-2024-8842</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-space-md">
                      <div className="space-y-1">
                        <span className="font-label-sm text-[11px] text-on-surface-variant uppercase font-bold block">1. Người gửi (Nhà Hảo Tâm):</span>
                        <p className="font-headline-sm text-[13px] text-on-surface font-semibold">Tập đoàn Vingroup (Ban CSR)</p>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">Đ/D: Bà Trần Thu Hằng - 0912.***.888</p>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">Hà Nội / Điểm tập kết TP. Đà Nẵng</p>
                      </div>
                      <div className="space-y-1">
                        <span className="font-label-sm text-[11px] text-primary uppercase font-bold block">2. Nơi nhận trung chuyển:</span>
                        <p className="font-headline-sm text-[13px] text-on-surface font-semibold">Kho Kỹ thuật EduShare Đà Nẵng</p>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">KCN Hòa Khánh, Liên Chiểu, TP. Đà Nẵng</p>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">Hotline: 1900 6822 (Phím 2)</p>
                      </div>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="font-label-sm text-[11px] text-on-surface-variant uppercase font-bold block">Chi tiết kiện 01:</span>
                        <p className="font-body-sm text-[12px] text-on-surface font-semibold">10x Laptop Dell Latitude 5520 + 10 Bộ sạc</p>
                        <p className="font-label-sm text-[11px] text-tertiary">Đích đến: Trường THCS Bán trú Dân tộc Tr'Hy</p>
                      </div>
                      <div className="p-2 bg-surface-container-lowest rounded-lg shadow-sm">
                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 100 100">
                          <rect className="text-on-surface" height="30" width="30" x="0" y="0"></rect>
                          <rect className="text-surface-container-lowest" height="20" width="20" x="5" y="5"></rect>
                          <rect className="text-on-surface" height="10" width="10" x="10" y="10"></rect>
                          <rect className="text-on-surface" height="30" width="30" x="70" y="0"></rect>
                          <rect className="text-surface-container-lowest" height="20" width="20" x="75" y="5"></rect>
                          <rect className="text-on-surface" height="10" width="10" x="80" y="10"></rect>
                          <rect className="text-on-surface" height="30" width="30" x="0" y="70"></rect>
                          <rect className="text-surface-container-lowest" height="20" width="20" x="5" y="75"></rect>
                          <rect className="text-on-surface" height="10" width="10" x="10" y="80"></rect>
                          <rect className="text-on-surface" height="15" width="15" x="40" y="10"></rect>
                          <rect className="text-primary" height="20" width="20" x="40" y="40"></rect>
                          <rect className="text-on-surface" height="15" width="15" x="70" y="45"></rect>
                          <rect className="text-on-surface" height="15" width="15" x="10" y="45"></rect>
                          <rect className="text-on-surface" height="15" width="15" x="40" y="75"></rect>
                          <rect className="text-on-surface" height="15" width="15" x="75" y="75"></rect>
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-on-surface-variant font-code-num">
                      <span>SHA-256 CHECK: 0x8f4b...c391</span>
                      <span>In ngày: 24/10/2024</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-space-sm pt-space-xs">
                    <button className="px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md" onClick={() => setIsShippingLabelModalOpen(false)}>
                      Đóng
                    </button>
                    <button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold" onClick={handlePrint}>
                      <span className="material-symbols-outlined text-[18px]">print</span>
                      <span>In Tất Cả 04 Tem A5</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
