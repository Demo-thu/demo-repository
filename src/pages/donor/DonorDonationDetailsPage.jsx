import { useState, useEffect } from "react";
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
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-background font-body-md text-on-surface flex antialiased">
      {/* Sidebar */}
      <aside className="bg-surface-container-lowest fixed top-0 left-0 z-50 flex h-screen w-72 flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-1 flex-col overflow-y-auto">
          <div className="px-space-lg bg-surface-container-lowest flex h-16 items-center justify-between">
            <div className="gap-space-sm flex items-center">
              <div className="bg-primary flex h-9 w-9 items-center justify-center rounded-lg">
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
              <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                Nhà Hảo Tâm
              </span>
            </div>
            <nav className="mt-space-xs flex flex-col space-y-1">
              <Link
                to="/donor/donation-details"
                aria-current="page"
                className="px-space-md py-space-sm bg-primary-container text-on-primary-container flex items-center rounded-lg font-semibold shadow-sm transition-all"
              >
                Đăng ký trao tặng
              </Link>
              <Link
                to="/donor/dashboard"
                className="px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center rounded-lg transition-all"
              >
                Quản lý phiếu của tôi
              </Link>
              <Link
                to="/donor/certificates"
                className="px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center rounded-lg transition-all"
              >
                Biên nhận & Chứng nhận
              </Link>
              <Link
                to="/donor/tracking"
                className="px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center rounded-lg transition-all"
              >
                Hành trình & Mã QR
              </Link>
              <Link
                to="/donor/campaigns"
                className="px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md flex items-center rounded-lg transition-all"
              >
                Đợt vận động đang chạy
              </Link>
            </nav>
          </div>
        </div>
        <div className="p-space-md bg-surface-container-low">
          <div className="px-space-sm py-space-xs flex items-center justify-between">
            <div className="gap-space-xs flex items-center">
              <span className="bg-tertiary-container h-2 w-2 animate-pulse rounded-full"></span>
              <span className="font-label-sm text-label-sm text-tertiary font-semibold">Hệ thống Trực tuyến</span>
            </div>
            <span className="font-code-num text-code-num text-on-surface-variant">v2.4.0</span>
          </div>
          <div className="mt-space-xs px-space-sm">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Quốc gia Giáo dục © 2024</span>
          </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="w-full flex-1 pl-72">
        {/* Header */}
        <header className="bg-surface-container-lowest/90 px-space-lg fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
          <div className="gap-space-md flex items-center">
            <div className="relative flex w-80 items-center md:w-96">
              <span className="material-symbols-outlined text-on-surface-variant absolute left-3 text-[18px]">
                search
              </span>
              <input
                className="pr-space-md bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:bg-surface-container-lowest focus:ring-primary w-full rounded-lg py-1.5 pl-9 outline-none focus:ring-1"
                placeholder="Tra cứu mã phiếu, số serial hoặc mã QR..."
                type="text"
              />
            </div>
          </div>
          <div className="gap-space-md flex items-center">
            <div className="gap-space-xs px-space-sm bg-secondary-container hidden items-center rounded-full py-1 sm:flex">
              <span className="material-symbols-outlined text-primary text-[16px]">corporate_fare</span>
              <span className="font-label-sm text-label-sm text-on-secondary-container font-medium">
                Tổ chức / Cá nhân Hảo tâm
              </span>
            </div>
            <button className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface relative rounded-lg p-2 transition-colors">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="bg-error absolute top-1.5 right-1.5 h-2 w-2 rounded-full"></span>
            </button>
            <div className="gap-space-sm pl-space-xs flex items-center">
              <div className="flex hidden flex-col text-right md:block">
                <span className="font-label-md text-label-md text-on-surface font-medium">Tập đoàn Vingroup</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">ID: NHT-78294</span>
              </div>
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Body */}
        <main className="bg-background relative min-h-screen w-full pt-16">
          <div className="px-space-lg py-space-sm bg-surface-container-low/50 border-outline-variant/30 border-b">
            <nav
              aria-label="Breadcrumb"
              className="gap-space-xs text-on-surface-variant font-label-sm text-label-sm flex items-center"
            >
              <Link to="/" className="hover:text-primary transition-colors">
                EduShare VN
              </Link>
              <span className="material-symbols-outlined text-outline text-[14px]">chevron_right</span>
              <Link to="#" className="hover:text-primary transition-colors">
                Nhà hảo tâm
              </Link>
              <span className="material-symbols-outlined text-outline text-[14px]">chevron_right</span>
              <span className="text-on-surface font-semibold">Chi tiết đăng ký trao tặng</span>
            </nav>
          </div>

          <div className="flex w-full flex-col">
            {/* Rbac & Immutability Alert Banner */}
            <div className="px-space-lg pt-space-md">
              <div className="bg-surface-container-low p-space-md relative overflow-hidden rounded-xl shadow-sm">
                <div className="bg-tertiary absolute top-0 bottom-0 left-0 w-1.5"></div>
                <div className="gap-space-md pl-space-xs flex flex-col justify-between md:flex-row md:items-center">
                  <div className="gap-space-sm flex items-start">
                    <div className="bg-surface-container-lowest text-tertiary shrink-0 rounded-lg p-2 shadow-sm">
                      <span className="material-symbols-outlined text-[22px]">lock_clock</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="gap-space-xs flex flex-wrap items-center">
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Phiếu ghi nhận bất biến
                        </span>
                        <span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full px-2 py-0.5 font-semibold">
                          Quy chế RBAC: Không sửa phiếu đã gửi
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                        Theo quy định minh bạch dữ liệu trao tặng giáo dục, phiếu đã hoàn tất nộp sẽ khóa cập nhật nội
                        dung. Bạn có thể{" "}
                        <strong className="text-on-surface font-semibold">
                          yêu cầu HỦY PHIẾU trong vòng 46 giờ tới
                        </strong>{" "}
                        (hết hạn lúc{" "}
                        <span className="font-code-num text-code-num text-primary font-semibold">14:20 26/10/2024</span>
                        , tức 72h kể từ lúc lập).
                      </p>
                    </div>
                  </div>
                  <div className="gap-space-sm flex shrink-0 items-center">
                    <div className="mr-space-xs hidden flex-col items-end lg:flex">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                        Thời gian còn lại
                      </span>
                      <div className="font-code-num text-code-num text-tertiary flex items-center gap-1 font-bold">
                        <span className="material-symbols-outlined text-[16px]">timer</span>
                        <span>{formatTime(timeLeft)}</span>
                      </div>
                    </div>
                    <button
                      className="gap-space-xs px-space-md bg-error-container text-on-error-container hover:bg-error hover:text-on-error font-label-md text-label-md flex items-center rounded-lg py-2 font-semibold shadow-sm transition-all"
                      onClick={() => setIsCancelModalOpen(true)}
                    >
                      <span className="material-symbols-outlined text-[18px]">cancel</span>
                      <span>Yêu cầu Hủy phiếu này</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Viewport Content */}
            <div className="px-space-lg py-space-md space-y-space-lg">
              {/* Header Title & Metadata Bar */}
              <div className="gap-space-md bg-surface-container-lowest p-space-lg flex flex-col justify-between rounded-xl shadow-sm xl:flex-row xl:items-center">
                <div className="space-y-space-xs">
                  <div className="gap-space-xs text-on-surface-variant font-label-sm text-label-sm flex items-center">
                    <span>Mã số lưu trữ quốc gia:</span>
                    <span className="font-code-num text-code-num text-primary font-semibold">VN-EDU-QNM-2024-8842</span>
                    <span>•</span>
                    <span>Ngày tạo: 14:20 23/10/2024</span>
                  </div>
                  <div className="gap-space-md flex flex-wrap items-center">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      Chi Tiết Đăng Ký Trao Tặng #DON-2024-8842
                    </h1>
                    <span className="bg-surface-container-highest text-on-surface font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-3 py-1 font-semibold">
                      <span className="bg-primary h-2 w-2 animate-ping rounded-full"></span>
                      Chờ tiếp nhận tại kho
                    </span>
                  </div>
                  <div className="gap-space-sm pt-space-xs flex flex-wrap items-center">
                    <span className="bg-surface-container-low text-on-surface-variant font-code-num text-code-num inline-flex items-center gap-1 rounded-lg px-2.5 py-1">
                      <span className="material-symbols-outlined text-tertiary text-[15px]">fingerprint</span>
                      SHA-256: 0x8f4b7a90...c391ef4b
                    </span>
                    <span className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm inline-flex items-center gap-1 rounded-lg px-2.5 py-1">
                      <span className="material-symbols-outlined text-primary text-[15px]">verified_user</span>
                      Ký số bảo chứng điện tử cấp độ 3
                    </span>
                  </div>
                </div>
                {/* Action buttons */}
                <div className="gap-space-sm flex flex-wrap items-center self-start xl:self-center">
                  <button
                    className="gap-space-xs px-space-md bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md flex items-center rounded-lg py-2.5 transition-colors"
                    onClick={handlePrint}
                  >
                    <span className="material-symbols-outlined text-[18px]">print</span>
                    <span>In phiếu bàn giao</span>
                  </button>
                  <button
                    className="gap-space-xs px-space-md bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md flex items-center rounded-lg py-2.5 transition-colors"
                    onClick={() => alert("Đang tạo tệp hồ sơ PDF có chữ ký số SHA-256...")}
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>Tải hồ sơ PDF</span>
                  </button>
                  <button
                    className="gap-space-xs px-space-md bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary flex items-center rounded-lg py-2.5 shadow-sm transition-all"
                    onClick={() => setIsShippingLabelModalOpen(true)}
                  >
                    <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                    <span>Mã QR lô hàng & Vận đơn</span>
                  </button>
                </div>
              </div>

              {/* 5-stage Workflow Stepper */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                <div className="mb-space-md flex items-center justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-primary font-bold tracking-wider uppercase">
                      Hành trình phân bổ thiết bị
                    </span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Tiến trình kiểm định & trao tặng minh bạch
                    </h2>
                  </div>
                  <span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary-container rounded-full px-2.5 py-1 font-semibold">
                    Chặng 2 / 5
                  </span>
                </div>
                <div className="gap-space-md relative grid grid-cols-1 md:grid-cols-5">
                  {/* Step 1: Complete */}
                  <div className="p-space-md bg-surface-container-low relative flex flex-col rounded-xl">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="bg-tertiary-container text-on-tertiary flex h-8 w-8 items-center justify-center rounded-full font-bold">
                        <span className="material-symbols-outlined text-[18px]">check</span>
                      </span>
                      <span className="font-code-num text-code-num text-tertiary font-semibold">Chặng 1</span>
                    </div>
                    <span className="font-headline-sm text-on-surface text-[14px] font-semibold">
                      Đăng ký & Xác nhận
                    </span>
                    <span className="font-label-sm text-label-sm text-tertiary mt-1 font-medium">Đã hoàn tất</span>
                    <span className="font-code-num text-body-sm text-on-surface-variant mt-0.5">14:20 23/10/2024</span>
                    <div className="border-outline-variant/30 text-on-surface-variant font-body-sm mt-2 border-t pt-2 text-[11px]">
                      Hệ thống xác thực mã số định danh NHT
                    </div>
                  </div>
                  {/* Step 2: In-Progress Active */}
                  <div className="p-space-md bg-primary-fixed/30 ring-primary relative flex flex-col rounded-xl ring-2">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="bg-primary text-on-primary flex h-8 w-8 animate-pulse items-center justify-center rounded-full font-bold">
                        <span className="material-symbols-outlined text-[18px]">inventory_2</span>
                      </span>
                      <span className="font-code-num text-code-num text-primary font-bold">Chặng 2</span>
                    </div>
                    <span className="font-headline-sm text-primary text-[14px] font-bold">Tiếp nhận tại Kho</span>
                    <span className="font-label-sm text-label-sm text-primary mt-1 font-semibold">
                      Đang chờ điều phối xe
                    </span>
                    <span className="font-code-num text-body-sm text-on-surface-variant mt-0.5">
                      Dự kiến 25/10/2024
                    </span>
                    <div className="border-outline-variant/30 text-on-surface font-body-sm mt-2 border-t pt-2 text-[11px]">
                      Đội TNV tiếp nhận tại KCN Hòa Khánh Đà Nẵng
                    </div>
                  </div>
                  {/* Step 3: Pending */}
                  <div className="p-space-md bg-surface-container-low/50 flex flex-col rounded-xl opacity-75">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="bg-surface-container-high text-on-surface-variant flex h-8 w-8 items-center justify-center rounded-full font-bold">
                        3
                      </span>
                      <span className="font-code-num text-code-num text-on-surface-variant font-medium">Chặng 3</span>
                    </div>
                    <span className="font-headline-sm text-on-surface text-[14px] font-semibold">
                      Kiểm định & QR từng máy
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 font-medium">
                      Chưa thực hiện
                    </span>
                    <span className="font-code-num text-body-sm text-on-surface-variant mt-0.5">
                      Thời gian: ~24 giờ
                    </span>
                    <div className="border-outline-variant/30 text-on-surface-variant font-body-sm mt-2 border-t pt-2 text-[11px]">
                      Cài đặt phần mềm giáo dục EduOS và dán tem số
                    </div>
                  </div>
                  {/* Step 4: Pending */}
                  <div className="p-space-md bg-surface-container-low/50 flex flex-col rounded-xl opacity-75">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="bg-surface-container-high text-on-surface-variant flex h-8 w-8 items-center justify-center rounded-full font-bold">
                        4
                      </span>
                      <span className="font-code-num text-code-num text-on-surface-variant font-medium">Chặng 4</span>
                    </div>
                    <span className="font-headline-sm text-on-surface text-[14px] font-semibold">
                      Vận chuyển vùng cao
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 font-medium">
                      Chưa thực hiện
                    </span>
                    <span className="font-code-num text-body-sm text-on-surface-variant mt-0.5">
                      Xe chuyên dụng EduShare
                    </span>
                    <div className="border-outline-variant/30 text-on-surface-variant font-body-sm mt-2 border-t pt-2 text-[11px]">
                      Vượt đèo A Xan, Tây Giang (140km đường núi)
                    </div>
                  </div>
                  {/* Step 5: Pending */}
                  <div className="p-space-md bg-surface-container-low/50 flex flex-col rounded-xl opacity-75">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="bg-surface-container-high text-on-surface-variant flex h-8 w-8 items-center justify-center rounded-full font-bold">
                        5
                      </span>
                      <span className="font-code-num text-code-num text-on-surface-variant font-medium">Chặng 5</span>
                    </div>
                    <span className="font-headline-sm text-on-surface text-[14px] font-semibold">
                      Ký số & Bàn giao lớp học
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 font-medium">
                      Chưa thực hiện
                    </span>
                    <span className="font-code-num text-body-sm text-on-surface-variant mt-0.5">
                      Biên bản PoD minh bạch
                    </span>
                    <div className="border-outline-variant/30 text-on-surface-variant font-body-sm mt-2 border-t pt-2 text-[11px]">
                      GPS xác thực + Chữ ký Hiệu trưởng + Ảnh bàn giao
                    </div>
                  </div>
                </div>
              </div>

              {/* 2 COLUMNS: CAMPAIGN SPOTLIGHT & LOGISTICS DETAILS */}
              <div className="gap-space-lg grid grid-cols-1 lg:grid-cols-12">
                {/* LEFT 7 COLS: CAMPAIGN TARGET & PHOTO STORY */}
                <div className="space-y-space-md lg:col-span-7">
                  <div className="bg-surface-container-lowest p-space-lg space-y-space-md rounded-xl shadow-sm">
                    <div className="gap-space-xs flex flex-wrap items-center justify-between">
                      <div className="gap-space-xs flex items-center">
                        <span className="material-symbols-outlined text-primary text-[20px]">campaign</span>
                        <span className="font-label-sm text-label-sm text-primary font-bold tracking-wide uppercase">
                          Chiến dịch tài trợ gắn liền
                        </span>
                      </div>
                      <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm rounded-full px-2.5 py-0.5 font-semibold">
                        Đợt 4 / Năm học 2024-2025
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-md text-headline-md text-on-surface">
                        Ánh Sáng Tri Thức Miền Tây Xứ Quảng - Đợt 4
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        Chiến dịch trọng điểm cung cấp trang thiết bị phòng tin học tiêu chuẩn cho học sinh đồng bào dân
                        tộc thiểu số Cơ Tu tại các điểm trường biên giới khó khăn.
                      </p>
                    </div>
                    <div className="bg-surface-container relative overflow-hidden rounded-xl">
                      <img
                        className="h-56 w-full object-cover"
                        data-alt="A warm, authentic Vietnamese classroom in mountainous Tay Giang Quang Nam with wooden walls and large window overlooking terraced fields. Happy ethnic minority Co Tu students and female teacher smiling brightly as a friendly EduShare volunteer in a blue polo hands over a modern laptop, with desktop computers set up on school desks and a chalkboard in the background reading Le Trao Tang May Tinh."
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                        alt=""
                      />
                      <div className="from-on-surface/90 via-on-surface/40 p-space-md text-on-primary absolute inset-0 flex flex-col justify-end bg-gradient-to-t to-transparent">
                        <div className="gap-space-xs flex items-center">
                          <span className="material-symbols-outlined text-tertiary-fixed text-[16px]">location_on</span>
                          <span className="font-label-md text-label-md text-tertiary-fixed font-semibold">
                            Điểm tiếp nhận thụ hưởng: Trường THCS Bán trú Dân tộc Tr'Hy
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-inverse-on-surface mt-0.5 line-clamp-1">
                          Xã Tr'Hy, Huyện Tây Giang, Tỉnh Quảng Nam (Giáp biên giới Việt - Lào)
                        </p>
                      </div>
                    </div>
                    <div className="gap-space-sm pt-space-xs grid grid-cols-3">
                      <div className="p-space-sm bg-surface-container-low rounded-lg">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Quy mô trường</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface mt-0.5 block">
                          214 học sinh
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">100% người Cơ Tu</span>
                      </div>
                      <div className="p-space-sm bg-surface-container-low rounded-lg">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">
                          Hiện trạng phòng máy
                        </span>
                        <span className="font-headline-sm text-headline-sm text-error mt-0.5 block">0/15 máy cũ</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Đã hỏng sau bão</span>
                      </div>
                      <div className="p-space-sm bg-surface-container-low rounded-lg">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">
                          Mục tiêu đợt 4
                        </span>
                        <span className="font-headline-sm text-headline-sm text-tertiary mt-0.5 block">
                          20 Laptop mới
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Lắp mạng vệ tinh</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT 5 COLS: LOGISTICS & TRANSFER MODALITY */}
                <div className="space-y-space-md lg:col-span-5">
                  <div className="bg-surface-container-lowest p-space-lg space-y-space-md rounded-xl shadow-sm">
                    <div className="gap-space-xs text-primary flex items-center">
                      <span className="material-symbols-outlined text-[20px]">warehouse</span>
                      <span className="font-label-sm text-label-sm font-bold tracking-wide uppercase">
                        Trung tâm tiếp nhận & Kỹ thuật
                      </span>
                    </div>
                    <div className="space-y-space-xs">
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">
                        Tổng Kho Kỹ Thuật EduShare Đà Nẵng
                      </h4>
                      <div className="gap-space-xs text-on-surface-variant font-body-sm text-body-sm flex items-start">
                        <span className="material-symbols-outlined text-primary mt-0.5 shrink-0 text-[16px]">
                          pin_drop
                        </span>
                        <span>
                          Lô B2-14, Đường số 3, Khu công nghiệp Hòa Khánh, Phường Hòa Khánh Bắc, Quận Liên Chiểu, TP. Đà
                          Nẵng
                        </span>
                      </div>
                    </div>
                    <div className="p-space-md bg-surface-container-low space-y-space-xs rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">
                          Hình thức chuyển giao đã chọn
                        </span>
                        <span className="bg-primary text-on-primary font-label-sm text-label-sm rounded-full px-2 py-0.5">
                          Được hỗ trợ
                        </span>
                      </div>
                      <div className="gap-space-sm flex items-center pt-1">
                        <div className="bg-primary-fixed text-on-primary-fixed flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                          <span className="material-symbols-outlined text-[22px]">local_shipping</span>
                        </div>
                        <div>
                          <p className="font-headline-sm text-on-surface text-[14px]">
                            TNV EduShare hỗ trợ bốc dỡ & nhận tận nơi
                          </p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Nhà hảo tâm không cần tự vận chuyển qua bưu cục
                          </p>
                        </div>
                      </div>
                      <div className="mt-space-sm pt-space-xs border-outline-variant/30 text-body-sm flex items-center justify-between border-t">
                        <span className="text-on-surface-variant">Khung giờ tiếp nhận dự kiến:</span>
                        <span className="font-code-num text-code-num text-on-surface font-semibold">
                          08:30 - 11:30 | 25/10/2024
                        </span>
                      </div>
                    </div>
                    <div className="p-space-md bg-surface-container space-y-space-xs rounded-xl">
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">
                        Thông tin đơn vị trao tặng
                      </span>
                      <div className="gap-space-sm flex items-center pt-1">
                        <div className="bg-surface-container-lowest text-primary flex h-9 w-9 items-center justify-center rounded-lg font-bold shadow-sm">
                          VG
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-on-surface text-[14px]">Tập đoàn Vingroup</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Người đại diện: Bà Trần Thu Hằng (Ban CSR)
                          </span>
                        </div>
                      </div>
                      <div className="pt-space-xs font-code-num text-body-sm text-on-surface-variant flex items-center justify-between">
                        <span>SĐT: 0912.***.888</span>
                        <span>Email: donor@vingroup.net</span>
                      </div>
                    </div>
                    <div className="px-space-sm bg-surface-container-low text-on-surface-variant font-label-md text-label-md flex items-center justify-between rounded-lg py-2">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-tertiary text-[16px]">support_agent</span>
                        Hotline Điều phối Kho & Đội xe:
                      </span>
                      <span className="font-code-num text-code-num text-tertiary font-bold">1900 6822 (Phím 2)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Itemized List Of Donated Assets */}
              <div className="bg-surface-container-lowest overflow-hidden rounded-xl shadow-sm">
                <div className="p-space-lg gap-space-md bg-surface-container-lowest flex flex-col justify-between md:flex-row md:items-center">
                  <div>
                    <div className="gap-space-xs flex items-center">
                      <span className="material-symbols-outlined text-primary text-[20px]">devices</span>
                      <span className="font-label-sm text-label-sm text-primary font-bold tracking-wide uppercase">
                        Chi tiết thiết bị & Khai báo kỹ thuật
                      </span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-on-surface mt-0.5">
                      Danh mục thiết bị đăng ký trao tặng (3 dòng hàng)
                    </h2>
                  </div>
                  <div className="gap-space-md p-space-sm px-space-md bg-surface-container-low flex items-center self-start rounded-xl md:self-center">
                    <div className="flex flex-col text-right">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                        Tổng giá trị quy đổi ước tính
                      </span>
                      <span className="font-headline-md text-headline-md text-primary font-bold">168.500.000 VNĐ</span>
                    </div>
                    <div className="bg-primary-fixed text-primary flex h-10 w-10 items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-[20px]">price_check</span>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
                        <th className="px-space-lg py-3">STT & Mã Tạm</th>
                        <th className="px-space-md py-3">Thiết bị & Cấu hình chi tiết</th>
                        <th className="px-space-md py-3 text-center">Số lượng</th>
                        <th className="px-space-md py-3">Tình trạng vật lý</th>
                        <th className="px-space-md py-3">Phân bổ mục tiêu</th>
                        <th className="px-space-lg py-3 text-right">Định giá tham chiếu</th>
                      </tr>
                    </thead>
                    <tbody className="divide-outline-variant/20 font-body-md text-body-md text-on-surface divide-y">
                      {/* Row 1: Laptops */}
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="px-space-lg py-4 align-top">
                          <span className="font-code-num text-code-num text-on-surface font-bold">#01</span>
                          <div className="font-code-num text-body-sm text-primary">ITEM-LT-2041</div>
                          <span className="bg-surface-container text-on-surface-variant font-label-sm mt-1 inline-block rounded px-2 py-0.5 text-[10px]">
                            Lô 1
                          </span>
                        </td>
                        <td className="px-space-md py-4 align-top">
                          <div className="gap-space-sm flex items-start">
                            <div className="bg-surface-container flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg">
                              <img
                                className="h-full w-full object-cover"
                                data-alt="Dell Laptop"
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                                alt=""
                              />
                            </div>
                            <div className="space-y-1">
                              <div className="gap-space-xs flex items-center">
                                <span className="font-headline-sm text-headline-sm text-on-surface">
                                  Laptop Dell Latitude 5520
                                </span>
                                <span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded px-2 py-0.5">
                                  Đồng bộ
                                </span>
                              </div>
                              <p className="font-body-sm text-body-sm text-on-surface-variant">
                                <strong className="text-on-surface font-medium">Thông số:</strong> Intel Core i5-1145G7
                                | RAM 8GB DDR4 | SSD 256GB NVMe PCIe | Màn 15.6" FHD IPS Anti-Glare | Kèm sạc zin chính
                                hãng Dell 65W Type-C
                              </p>
                              <div className="text-tertiary flex items-center gap-1 text-[12px]">
                                <span className="material-symbols-outlined text-[14px]">comment</span>
                                <span>
                                  Ghi chú từ NHT: "Máy thu hồi từ dự án khối văn phòng tài chính, màn hình sắc nét, đã
                                  vệ sinh quạt tản nhiệt."
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-space-md py-4 text-center align-top">
                          <span className="font-headline-sm text-headline-sm text-on-surface">20</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant block">chiếc</span>
                        </td>
                        <td className="px-space-md py-4 align-top">
                          <span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-medium">
                            <span className="bg-tertiary h-1.5 w-1.5 rounded-full"></span>
                            Đã sử dụng (90-95%)
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 block">
                            Pin kiểm định &gt; 4.5h
                          </span>
                        </td>
                        <td className="px-space-md py-4 align-top">
                          <span className="font-headline-sm text-primary text-[13px] font-semibold">
                            Phòng máy THCS Tr'Hy
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant block">
                            Cần cài phần mềm Scratch & MS Office
                          </span>
                        </td>
                        <td className="px-space-lg py-4 text-right align-top">
                          <span className="font-code-num text-headline-sm text-on-surface font-semibold">
                            160.000.000 đ
                          </span>
                          <span className="font-code-num text-body-sm text-on-surface-variant block">
                            (8.000.000 đ / chiếc)
                          </span>
                        </td>
                      </tr>
                      {/* Row 2: Optical Mice */}
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="px-space-lg py-4 align-top">
                          <span className="font-code-num text-code-num text-on-surface font-bold">#02</span>
                          <div className="font-code-num text-body-sm text-primary">ITEM-AC-5510</div>
                          <span className="bg-surface-container text-on-surface-variant font-label-sm mt-1 inline-block rounded px-2 py-0.5 text-[10px]">
                            Phụ kiện
                          </span>
                        </td>
                        <td className="px-space-md py-4 align-top">
                          <div className="gap-space-sm flex items-start">
                            <div className="bg-surface-container flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg">
                              <img
                                className="h-full w-full object-cover"
                                data-alt="Mouse"
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                                alt=""
                              />
                            </div>
                            <div className="space-y-1">
                              <div className="gap-space-xs flex items-center">
                                <span className="font-headline-sm text-headline-sm text-on-surface">
                                  Chuột quang vi tính Fuhlen Pro USB
                                </span>
                                <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm rounded px-2 py-0.5">
                                  Phụ kiện mới
                                </span>
                              </div>
                              <p className="font-body-sm text-body-sm text-on-surface-variant">
                                Dây USB 1.8m siêu bền, độ nhạy 1200 DPI phù hợp giáo trình học tập thực hành tin học
                                thiếu nhi.
                              </p>
                              <div className="text-tertiary flex items-center gap-1 text-[12px]">
                                <span className="material-symbols-outlined text-[14px]">comment</span>
                                <span>Ghi chú: Nguyên seal nhà máy, xuất xứ Fuhlen Vietnam.</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-space-md py-4 text-center align-top">
                          <span className="font-headline-sm text-headline-sm text-on-surface">10</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant block">chiếc</span>
                        </td>
                        <td className="px-space-md py-4 align-top">
                          <span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-medium">
                            <span className="bg-primary h-1.5 w-1.5 rounded-full"></span>
                            Mới 100% nguyên hộp
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 block">
                            Bảo hành 24 tháng
                          </span>
                        </td>
                        <td className="px-space-md py-4 align-top">
                          <span className="font-headline-sm text-on-surface text-[13px] font-semibold">
                            Phòng máy THCS Tr'Hy
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant block">
                            Đi kèm bổ trợ dàn laptop
                          </span>
                        </td>
                        <td className="px-space-lg py-4 text-right align-top">
                          <span className="font-code-num text-headline-sm text-on-surface font-semibold">
                            2.500.000 đ
                          </span>
                          <span className="font-code-num text-body-sm text-on-surface-variant block">
                            (250.000 đ / chiếc)
                          </span>
                        </td>
                      </tr>
                      {/* Row 3: SSD Storage */}
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="px-space-lg py-4 align-top">
                          <span className="font-code-num text-code-num text-on-surface font-bold">#03</span>
                          <div className="font-code-num text-body-sm text-primary">ITEM-HD-8812</div>
                          <span className="bg-surface-container text-on-surface-variant font-label-sm mt-1 inline-block rounded px-2 py-0.5 text-[10px]">
                            Linh kiện
                          </span>
                        </td>
                        <td className="px-space-md py-4 align-top">
                          <div className="gap-space-sm flex items-start">
                            <div className="bg-surface-container flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg">
                              <img
                                className="h-full w-full object-cover"
                                data-alt="SSD"
                                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                                alt=""
                              />
                            </div>
                            <div className="space-y-1">
                              <div className="gap-space-xs flex items-center">
                                <span className="font-headline-sm text-headline-sm text-on-surface">
                                  Ổ cứng SSD Kingston NV2 PCIe 4.0 256GB
                                </span>
                                <span className="bg-surface-container-highest text-on-surface font-label-sm text-label-sm rounded px-2 py-0.5">
                                  Nâng cấp
                                </span>
                              </div>
                              <p className="font-body-sm text-body-sm text-on-surface-variant">
                                Tốc độ đọc 3500MB/s, dùng thay thế nâng cấp cho 05 bộ máy để bàn cũ tại phòng hiệu bộ
                                nhà trường.
                              </p>
                              <div className="text-tertiary flex items-center gap-1 text-[12px]">
                                <span className="material-symbols-outlined text-[14px]">comment</span>
                                <span>Ghi chú: Hỗ trợ thêm cho thầy cô giáo cập nhật cơ sở dữ liệu ngành.</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-space-md py-4 text-center align-top">
                          <span className="font-headline-sm text-headline-sm text-on-surface">05</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant block">chiếc</span>
                        </td>
                        <td className="px-space-md py-4 align-top">
                          <span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-medium">
                            <span className="bg-primary h-1.5 w-1.5 rounded-full"></span>
                            Mới 100% nguyên vỉ
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 block">
                            Bảo hành chính hãng 3 năm
                          </span>
                        </td>
                        <td className="px-space-md py-4 align-top">
                          <span className="font-headline-sm text-on-surface text-[13px] font-semibold">
                            Tổ Công nghệ Thông tin
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant block">
                            Kỹ thuật viên EduShare lắp đặt
                          </span>
                        </td>
                        <td className="px-space-lg py-4 text-right align-top">
                          <span className="font-code-num text-headline-sm text-on-surface font-semibold">
                            6.000.000 đ
                          </span>
                          <span className="font-code-num text-body-sm text-on-surface-variant block">
                            (1.200.000 đ / chiếc)
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-space-lg bg-surface-container-low gap-space-md border-outline-variant/30 flex flex-col justify-between border-t sm:flex-row sm:items-center">
                  <div className="gap-space-md flex items-center">
                    <div className="gap-space-xs text-on-surface-variant font-label-md text-label-md flex items-center">
                      <span>Tổng số lượng hiện vật:</span>
                      <strong className="text-on-surface font-headline-sm text-headline-sm">35 thiết bị</strong>
                    </div>
                    <span className="text-outline">|</span>
                    <div className="gap-space-xs text-on-surface-variant font-label-md text-label-md flex items-center">
                      <span>Đóng gói:</span>
                      <strong className="text-on-surface font-headline-sm text-headline-sm">04 thùng quy chuẩn</strong>
                    </div>
                  </div>
                  <div className="gap-space-sm text-on-surface-variant font-body-sm text-body-sm flex items-center">
                    <span className="material-symbols-outlined text-tertiary text-[16px]">verified</span>
                    <span>Bảo hiểm vận chuyển nội bộ: Đã kích hoạt bởi Quỹ Giáo dục Quốc gia</span>
                  </div>
                </div>
              </div>

              {/* Transparency Ledger & Shipping Label Download Section */}
              <div className="gap-space-md pb-space-xl grid grid-cols-1 md:grid-cols-3">
                <div className="bg-surface-container-lowest p-space-lg space-y-space-sm flex flex-col justify-between rounded-xl shadow-sm">
                  <div className="space-y-space-xs">
                    <div className="gap-space-xs text-primary flex items-center">
                      <span className="material-symbols-outlined text-[20px]">label</span>
                      <span className="font-label-sm text-label-sm font-bold tracking-wider uppercase">
                        Nhãn dán kiện hàng
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">Tải Shipping Label (Khổ A5)</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Nhà hảo tâm vui lòng in và dán nhãn định danh lên 04 thùng máy trước giờ nhân viên EduShare đến
                      lấy để việc quét mã QR đồng bộ tự động.
                    </p>
                  </div>
                  <button
                    className="gap-space-xs bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md mt-space-sm flex w-full items-center justify-center rounded-lg py-2.5 transition-colors"
                    onClick={() => setIsShippingLabelModalOpen(true)}
                  >
                    <span className="material-symbols-outlined text-[18px]">print</span>
                    <span>Xem & In 04 Tem dán QR</span>
                  </button>
                </div>
                <div className="bg-surface-container-lowest p-space-lg space-y-space-sm flex flex-col justify-between rounded-xl shadow-sm">
                  <div className="space-y-space-xs">
                    <div className="gap-space-xs text-tertiary flex items-center">
                      <span className="material-symbols-outlined text-[20px]">fact_check</span>
                      <span className="font-label-sm text-label-sm font-bold tracking-wider uppercase">
                        Tiêu chuẩn kiểm định 1 chạm
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">Quy chuẩn kỹ thuật EduShare</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Sau khi nhận máy tại Kho, đội ngũ kỹ sư sẽ kiểm tra theo 3 phân loại: Sẵn sàng trao tặng, Cần tân
                      trang bảo dưỡng, hoặc Tái chế an toàn để đảm bảo quyền lợi cao nhất cho học sinh.
                    </p>
                  </div>
                  <div className="p-space-xs px-space-sm bg-surface-container-low font-code-num text-tertiary gap-space-xs mt-space-sm flex items-center rounded-lg text-[12px]">
                    <span className="material-symbols-outlined text-[16px]">security_update_good</span>
                    <span>Chứng nhận Tiêu chuẩn GD-TCVN 2024</span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-lg space-y-space-sm flex flex-col justify-between rounded-xl shadow-sm">
                  <div className="space-y-space-xs">
                    <div className="gap-space-xs text-primary flex items-center">
                      <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                      <span className="font-label-sm text-label-sm font-bold tracking-wider uppercase">
                        Sổ cái phân bổ công khai
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">Minh bạch dòng thiết bị</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Mọi hành vi từ giao nhận, bảo dưỡng đến hình ảnh nhận máy của từng em học sinh sẽ được ký số và
                      niêm yết vĩnh viễn trên Cổng tra cứu cộng đồng EduShare Portal.
                    </p>
                  </div>
                  <Link
                    className="gap-space-xs bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md mt-space-sm flex w-full items-center justify-center rounded-lg py-2.5 transition-colors"
                    to="#"
                  >
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    <span>Tra cứu Sổ cái đợt 4</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* MODAL: YÊU CẦU HỦY PHIẾU BẢO MẬT */}
            {isCancelModalOpen && (
              <div className="bg-inverse-surface/60 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                <div className="bg-surface-container-lowest p-space-lg space-y-space-md w-full max-w-lg rounded-xl shadow-2xl">
                  <div className="pb-space-xs border-outline-variant/30 flex items-center justify-between border-b">
                    <div className="gap-space-xs text-error flex items-center">
                      <span className="material-symbols-outlined text-[24px]">warning</span>
                      <h3 className="font-headline-sm text-headline-sm text-error">Xác nhận yêu cầu Hủy Phiếu</h3>
                    </div>
                    <button
                      className="hover:bg-surface-container text-on-surface-variant rounded-lg p-1"
                      onClick={() => setIsCancelModalOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                  </div>
                  <div className="space-y-space-sm text-body-md text-on-surface">
                    <div className="p-space-sm bg-error-container text-on-error-container text-body-sm rounded-lg">
                      <strong>Lưu ý quan trọng:</strong> Hành động hủy phiếu sẽ dừng lập tức kế hoạch điều phối xe thu
                      gom của đội TNV EduShare Đà Nẵng tại Tây Giang.
                    </div>
                    <p>
                      Mã phiếu: <strong className="font-code-num text-code-num text-primary">#DON-2024-8842</strong>
                    </p>
                    <p className="text-on-surface-variant">
                      Phiếu của bạn hiện vẫn đủ điều kiện hủy do còn trong hạn{" "}
                      <strong className="text-on-surface">72 giờ (còn lại {formatTime(timeLeft)})</strong> và hàng chưa
                      làm thủ tục nhập kho trung chuyển.
                    </p>
                    <div className="pt-space-xs space-y-1">
                      <label className="font-label-md text-label-md text-on-surface block font-semibold">
                        Lý do yêu cầu hủy phiếu <span className="text-error">*</span>
                      </label>
                      <select className="bg-surface-container-low text-on-surface font-body-sm border-outline-variant/50 focus:ring-primary w-full rounded-lg border p-2.5 focus:ring-2 focus:outline-none">
                        <option>Thay đổi danh mục thiết bị / Cần cập nhật số lượng lớn hơn</option>
                        <option>Trùng lặp với kế hoạch trao tặng riêng của đơn vị</option>
                        <option>Chuyển đổi hình thức sang tài trợ kinh phí trực tiếp</option>
                        <option>Lý do đột xuất nội bộ doanh nghiệp</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="font-label-md text-label-md text-on-surface block font-semibold">
                        Ghi chú bổ sung cho Ban điều phối
                      </label>
                      <textarea
                        className="bg-surface-container-low text-on-surface font-body-sm border-outline-variant/50 focus:ring-primary w-full rounded-lg border p-2.5 focus:ring-2 focus:outline-none"
                        placeholder="Nhập lý do chi tiết..."
                        rows={2}
                      ></textarea>
                    </div>
                  </div>
                  <div className="gap-space-sm pt-space-sm border-outline-variant/30 flex items-center justify-end border-t">
                    <button
                      className="px-space-md bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high rounded-lg py-2 transition-colors"
                      onClick={() => setIsCancelModalOpen(false)}
                    >
                      Đóng & Giữ lại phiếu
                    </button>
                    <button
                      className="px-space-md bg-error text-on-error font-label-md text-label-md rounded-lg py-2 font-semibold transition-opacity hover:opacity-90"
                      onClick={() => {
                        alert(
                          "Đã gửi yêu cầu hủy phiếu #DON-2024-8842 thành công. Đội điều phối sẽ liên hệ xác nhận trong 15 phút.",
                        );
                        setIsCancelModalOpen(false);
                      }}
                    >
                      Xác nhận Hủy Đăng Ký
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* MODAL: SHIPPING LABEL & QR PREVIEW */}
            {isShippingLabelModalOpen && (
              <div className="bg-inverse-surface/60 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                <div className="bg-surface-container-lowest p-space-lg space-y-space-md max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl shadow-2xl">
                  <div className="pb-space-xs border-outline-variant/30 flex items-center justify-between border-b">
                    <div className="gap-space-xs text-primary flex items-center">
                      <span className="material-symbols-outlined text-[24px]">qr_code_scanner</span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Vận Đơn & Nhãn Kiện Hàng Khổ A5 (Mẫu 1/4)
                      </h3>
                    </div>
                    <button
                      className="hover:bg-surface-container text-on-surface-variant rounded-lg p-1"
                      onClick={() => setIsShippingLabelModalOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                  </div>
                  <div className="p-space-lg bg-surface-container-lowest border-outline-variant space-y-space-md rounded-xl border-2 border-dashed">
                    <div className="pb-space-sm border-outline-variant flex items-center justify-between border-b">
                      <div className="gap-space-xs flex items-center">
                        <span className="material-symbols-outlined text-primary text-[28px]">school</span>
                        <div>
                          <span className="font-headline-sm text-on-surface block text-[16px] leading-tight font-bold">
                            EDUSHARE VIETNAM
                          </span>
                          <span className="font-label-sm text-on-surface-variant text-[10px] uppercase">
                            Hệ thống Điều phối Tiếp nhận Giáo dục
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-code-num text-code-num text-primary font-bold">KIỆN: 01 / 04</span>
                        <span className="font-label-sm text-on-surface-variant block text-[10px]">
                          MÃ PHIẾU: #DON-2024-8842
                        </span>
                      </div>
                    </div>
                    <div className="gap-space-md grid grid-cols-2">
                      <div className="space-y-1">
                        <span className="font-label-sm text-on-surface-variant block text-[11px] font-bold uppercase">
                          1. Người gửi (Nhà Hảo Tâm):
                        </span>
                        <p className="font-headline-sm text-on-surface text-[13px] font-semibold">
                          Tập đoàn Vingroup (Ban CSR)
                        </p>
                        <p className="font-body-sm text-on-surface-variant text-[12px]">
                          Đ/D: Bà Trần Thu Hằng - 0912.***.888
                        </p>
                        <p className="font-body-sm text-on-surface-variant text-[12px]">
                          Hà Nội / Điểm tập kết TP. Đà Nẵng
                        </p>
                      </div>
                      <div className="space-y-1">
                        <span className="font-label-sm text-primary block text-[11px] font-bold uppercase">
                          2. Nơi nhận trung chuyển:
                        </span>
                        <p className="font-headline-sm text-on-surface text-[13px] font-semibold">
                          Kho Kỹ thuật EduShare Đà Nẵng
                        </p>
                        <p className="font-body-sm text-on-surface-variant text-[12px]">
                          KCN Hòa Khánh, Liên Chiểu, TP. Đà Nẵng
                        </p>
                        <p className="font-body-sm text-on-surface-variant text-[12px]">Hotline: 1900 6822 (Phím 2)</p>
                      </div>
                    </div>
                    <div className="p-space-sm bg-surface-container-low flex items-center justify-between rounded-lg">
                      <div className="space-y-1">
                        <span className="font-label-sm text-on-surface-variant block text-[11px] font-bold uppercase">
                          Chi tiết kiện 01:
                        </span>
                        <p className="font-body-sm text-on-surface text-[12px] font-semibold">
                          10x Laptop Dell Latitude 5520 + 10 Bộ sạc
                        </p>
                        <p className="font-label-sm text-tertiary text-[11px]">
                          Đích đến: Trường THCS Bán trú Dân tộc Tr'Hy
                        </p>
                      </div>
                      <div className="bg-surface-container-lowest rounded-lg p-2 shadow-sm">
                        <svg className="h-20 w-20" fill="currentColor" viewBox="0 0 100 100">
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
                    <div className="text-on-surface-variant font-code-num flex items-center justify-between text-[11px]">
                      <span>SHA-256 CHECK: 0x8f4b...c391</span>
                      <span>In ngày: 24/10/2024</span>
                    </div>
                  </div>
                  <div className="gap-space-sm pt-space-xs flex items-center justify-end">
                    <button
                      className="px-space-md bg-surface-container text-on-surface font-label-md text-label-md rounded-lg py-2"
                      onClick={() => setIsShippingLabelModalOpen(false)}
                    >
                      Đóng
                    </button>
                    <button
                      className="gap-space-xs px-space-md bg-primary text-on-primary font-label-md text-label-md flex items-center rounded-lg py-2 font-semibold"
                      onClick={handlePrint}
                    >
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
