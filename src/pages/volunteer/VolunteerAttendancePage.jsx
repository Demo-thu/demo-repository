import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const VolunteerAttendancePage = () => {
  const [liveTimer, setLiveTimer] = useState("06:45:20");
  const [totalSeconds, setTotalSeconds] = useState(6 * 3600 + 45 * 60 + 20);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [noIncidentChecked, setNoIncidentChecked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prev) => {
        const next = prev + 1;
        const hrs = String(Math.floor(next / 3600)).padStart(2, "0");
        const mins = String(Math.floor((next % 3600) / 60)).padStart(2, "0");
        const secs = String(next % 60).padStart(2, "0");
        setLiveTimer(`${hrs}:${mins}:${secs}`);
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleShiftCheckout = () => {
    if (!noIncidentChecked) {
      alert(
        'Vui lòng tích xác nhận "Không phát sinh sự cố cơ giới / hàng hóa" hoặc lập biên bản sự cố trước khi chốt ca!',
      );
      return;
    }

    const confirmed = window.confirm(
      "XÁC NHẬN RA CA & CHỐT GIỜ CÔNG:\n\n• Ca trực: Ca Sáng - Chi Viện Biên Giới\n• Tổng thời lượng ghi nhận: ~8.5 Giờ công cống hiến\n• Vận đơn liên kết: #WB-2024-NW08\n\nBạn có chắc chắn muốn ký số và kết thúc ca làm việc hôm nay?",
    );
    if (confirmed) {
      setIsCheckingOut(true);
      setTimeout(() => {
        alert(
          "Thành công! Đã chốt ca làm việc và ghi nhận 8.5 giờ công vào Sổ Cái Cống Hiến của Tình Nguyện Viên Lê Hoàng Long.",
        );
        window.location.reload();
      }, 1200);
    }
  };

  return (
    <div className="bg-surface font-body-md text-on-surface flex min-h-screen flex-col antialiased">
      <aside className="bg-surface-container-low fixed top-0 left-0 z-50 flex h-full w-72 flex-col justify-between overflow-y-auto shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="bg-surface-container-low flex h-16 items-center gap-3 px-6">
            <div className="bg-primary text-on-primary flex h-9 w-9 items-center justify-center rounded-xl shadow-sm">
              <span className="material-symbols-outlined text-[20px]">school</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight">EduShare VN</span>
              <span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase">
                Cổng Tình Nguyện
              </span>
            </div>
          </div>
          <div className="px-4 py-4">
            <nav className="flex flex-col gap-1">
              <div className="font-label-sm text-label-sm text-on-surface-variant px-3 pt-3 pb-1 tracking-wider uppercase">
                Điều Động &amp; Ca Trực
              </div>
              <Link
                className="bg-primary text-on-primary flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium shadow-sm transition-all"
                to="/volunteer/attendance"
              >
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  how_to_reg
                </span>
                <span className="font-body-md text-body-md">Điểm danh ca trực</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all"
                to="/volunteer/leaderboard"
              >
                <span className="material-symbols-outlined text-[20px]">leaderboard</span>
                <span className="font-body-md text-body-md">Bảng xếp hạng &amp; Giờ công</span>
              </Link>

              <div className="font-label-sm text-label-sm text-on-surface-variant px-3 pt-5 pb-1 tracking-wider uppercase">
                Vận Chuyển &amp; Giao Nhận
              </div>
              <Link
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all"
                to="/volunteer/assigned-waybills"
              >
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span className="font-body-md text-body-md flex-1">Vận đơn được gán</span>
                <span className="bg-primary-container h-2 w-2 rounded-full"></span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all"
                to="/volunteer/routes-gps"
              >
                <span className="material-symbols-outlined text-[20px]">near_me</span>
                <span className="font-body-md text-body-md">Tuyến đường &amp; GPS</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all"
                to="/volunteer/pickup-confirmation"
              >
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span className="font-body-md text-body-md">Xác nhận lấy hàng tại kho</span>
              </Link>

              <div className="font-label-sm text-label-sm text-on-surface-variant px-3 pt-5 pb-1 tracking-wider uppercase">
                Biên Bản &amp; Sự Cố
              </div>
              <Link
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all"
                to="/volunteer/incident-report"
              >
                <span className="material-symbols-outlined text-[20px]">warning</span>
                <span className="font-body-md text-body-md">Báo cáo sự cố chuyến đi</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all"
                to="/volunteer/pod"
              >
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <span className="font-body-md text-body-md">Hoàn thành &amp; Minh chứng PoD</span>
              </Link>
            </nav>
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="bg-surface-container flex flex-col gap-2.5 rounded-xl p-3.5">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                Điều phối khẩn cấp
              </span>
              <span className="bg-error-container text-on-error-container font-label-sm text-label-sm inline-flex items-center rounded-full px-1.5 py-0.5">
                24/7
              </span>
            </div>
            <div className="text-primary font-headline-sm text-headline-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
              <span>1900 6829</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="font-label-sm text-label-sm text-secondary">Bản dựng</span>
              <span className="font-code-num text-code-num text-on-surface-variant">v2.8.4-PROD</span>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col pl-72">
        <header className="bg-surface/85 fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between px-8 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="flex w-96 items-center gap-4">
            <div className="relative w-full">
              <span className="material-symbols-outlined text-outline absolute top-1/2 left-3 -translate-y-1/2 text-[20px]">
                search
              </span>
              <input
                className="bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:bg-surface-container-low w-full rounded-lg py-2 pr-4 pl-10 transition-all outline-none"
                placeholder="Tìm mã vận đơn, chuyến xe, điểm trường..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-surface-container-lowest flex items-center gap-2 rounded-full px-2.5 py-1 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
              <span className="bg-tertiary-container h-2.5 w-2.5 animate-pulse rounded-full"></span>
              <span className="font-label-sm text-label-sm text-on-surface font-medium">Trực tuyến</span>
            </div>
            <button
              aria-label="Thông báo"
              className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface relative rounded-lg p-2 transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="bg-error absolute top-1.5 right-1.5 h-2 w-2 rounded-full"></span>
            </button>
            <div className="bg-outline-variant/30 h-7 w-[1px]"></div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col text-right">
                <div className="flex items-center justify-end gap-1.5">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">Lê Hoàng Long</span>
                  <span className="py-0.2 bg-primary-fixed text-on-primary-fixed font-code-num text-label-sm rounded-lg px-1.5">
                    TNV-VCH-88
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-secondary max-w-[210px] truncate">
                  Đội Trưởng VC Vượt Đèo Hà Giang
                </span>
              </div>
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-surface relative flex-1 pt-16">
          <div className="flex w-full flex-col">
            <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 p-6 md:p-8">
              {/* Breadcrumb & Administrative Header Bar */}
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="flex flex-col gap-1.5">
                  <div className="font-label-sm text-label-sm text-secondary flex items-center gap-2 tracking-wide uppercase">
                    <span className="hover:text-primary cursor-pointer transition-colors">EduShare TNV</span>
                    <span className="material-symbols-outlined text-outline text-[14px]">chevron_right</span>
                    <span>Điều Động &amp; Ca Trực</span>
                    <span className="material-symbols-outlined text-outline text-[14px]">chevron_right</span>
                    <span className="text-primary font-semibold">Điểm Danh Ca Trực</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      Điểm Danh Ca Trực &amp; Ghi Nhận Giờ Công
                    </h1>
                    <span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-semibold">
                      <span className="bg-primary h-1.5 w-1.5 animate-ping rounded-full"></span>
                      GEOFENCE ACTIVE
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-secondary max-w-3xl">
                    Hệ thống xác thực vào/ra ca tự động qua định vị GPS trạm điều phối, nhận diện sinh trắc học thực địa
                    và liên kết trực tiếp vào sổ cái giờ công cống hiến EduShare.
                  </p>
                </div>
                <div className="flex items-center gap-3 self-start md:self-auto">
                  <button
                    className="bg-surface-container-lowest text-on-surface hover:bg-surface-container-high font-label-md text-label-md flex items-center gap-2 rounded-xl px-4 py-2.5 shadow-sm transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-secondary text-[18px]">history</span>
                    <span>Lịch sử ca trực</span>
                  </button>
                  <button
                    className="bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md flex items-center gap-2 rounded-xl px-4 py-2.5 shadow-sm transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">event_repeat</span>
                    <span>Đổi ca / Xin nghỉ</span>
                  </button>
                </div>
              </div>

              {/* Bento 4 Metric Summary Board */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Metric 1: Status & Realtime Shift Timer */}
                <div className="bg-surface-container-lowest group relative flex flex-col justify-between gap-3 overflow-hidden rounded-2xl p-5 shadow-sm transition-shadow hover:shadow-md">
                  <div className="bg-primary/5 pointer-events-none absolute -top-4 -right-4 h-20 w-20 rounded-full"></div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase">
                      Trạng thái ca hôm nay
                    </span>
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-semibold">
                      <span className="bg-tertiary h-2 w-2 animate-pulse rounded-full"></span>
                      ĐANG TRONG CA
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-headline-xl text-headline-xl text-primary font-code-num flex items-baseline gap-1 font-bold tracking-tight">
                      {liveTimer}
                    </div>
                    <div className="text-secondary font-body-sm text-body-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-tertiary text-[16px]">check_circle</span>
                      <span>Check-in: 07:15:32 (24/10/2024)</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-high h-1.5 w-full overflow-hidden rounded-full">
                    <div className="bg-primary h-full rounded-full" style={{ width: "68%" }}></div>
                  </div>
                </div>
                {/* Metric 2: Assembly Point & Vehicle */}
                <div className="bg-surface-container-lowest group relative flex flex-col justify-between gap-3 overflow-hidden rounded-2xl p-5 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase">
                      Trạm tập kết &amp; Xe gán
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px]">pin_drop</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                      HUB-01 Hà Nội (Kho Tổng)
                    </span>
                    <span className="font-code-num text-body-sm text-secondary flex items-center gap-1">
                      <span className="material-symbols-outlined text-tertiary text-[15px]">my_location</span>
                      Bán kính Geofence: 25m / 100m (Hợp lệ)
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="bg-surface-container text-on-surface-variant font-code-num text-label-sm inline-flex items-center gap-1 rounded-lg px-2 py-0.5">
                      <span className="material-symbols-outlined text-[14px]">local_shipping</span>
                      Ford Ranger 29H-882.14
                    </span>
                    <span className="font-label-sm text-label-sm text-tertiary font-medium">Xe đã kiểm định</span>
                  </div>
                </div>
                {/* Metric 3: Active Mission & Waybill */}
                <div className="bg-surface-container-lowest group relative flex flex-col justify-between gap-3 overflow-hidden rounded-2xl p-5 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase">
                      Nhiệm vụ trong ca
                    </span>
                    <span className="bg-secondary-fixed text-on-secondary-fixed font-code-num text-label-sm rounded-md px-2 py-0.5">
                      #WB-2024-NW08
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                      Áp tải 50 kiện máy tính
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary truncate">
                      Đích đến: THCS Mường Lát (Thanh Hóa)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="bg-primary-container h-2 w-2 animate-ping rounded-full"></span>
                    <span className="font-label-sm text-label-sm text-primary-container font-semibold">
                      Đang vượt đèo an toàn
                    </span>
                    <span className="font-body-sm text-body-sm text-outline ml-auto">Tiến độ 65%</span>
                  </div>
                </div>
                {/* Metric 4: Accumulated Volunteer Hours */}
                <div className="bg-surface-container-lowest group relative flex flex-col justify-between gap-3 overflow-hidden rounded-2xl p-5 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase">
                      Tích lũy tháng 10/2024
                    </span>
                    <span className="material-symbols-outlined text-tertiary text-[20px]">workspace_premium</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-xl text-headline-xl text-on-surface font-code-num font-bold">
                        240
                      </span>
                      <span className="font-body-md text-body-md text-secondary">Giờ công (+8h hôm nay)</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-tertiary font-medium">
                      Top #3 Toàn Quốc - Cấp bậc Cống hiến 3
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex -space-x-1 overflow-hidden">
                      <div className="ring-surface bg-primary text-on-primary flex inline-block h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ring-2">
                        1
                      </div>
                      <div className="ring-surface bg-tertiary text-on-tertiary flex inline-block h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ring-2">
                        2
                      </div>
                      <div className="ring-surface bg-primary-fixed-dim text-on-primary-fixed flex inline-block h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ring-2">
                        3
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary">Kỳ xét duyệt: 31/10</span>
                  </div>
                </div>
              </div>

              {/* Main Operational Workspace: 7 cols (Left) vs 5 cols (Right) on 12-col Desktop */}
              <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
                {/* LEFT COLUMN: Operational Check-in / Out Console & GPS Verification (8 Cols) */}
                <div className="flex flex-col gap-6 lg:col-span-8">
                  {/* Console Block 1: Shift Control Center */}
                  <div className="bg-surface-container-lowest flex flex-col gap-6 rounded-2xl p-6 shadow-sm">
                    <div className="bg-surface-container-low/40 -mx-6 -mt-6 flex flex-col justify-between gap-4 rounded-t-2xl p-6 pb-4 sm:flex-row sm:items-center">
                      <div className="flex items-center gap-3.5">
                        <div className="bg-primary text-on-primary flex h-12 w-12 items-center justify-center rounded-xl shadow-sm">
                          <span className="material-symbols-outlined text-[26px]">badge</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="font-headline-md text-headline-md text-on-surface">
                              Ca Sáng - Chi Viện Điểm Trường Biên Giới
                            </span>
                            <span className="bg-tertiary-fixed text-on-tertiary-fixed font-code-num text-label-sm rounded-full px-2 py-0.5 font-semibold">
                              CA-SG-2410
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-secondary">
                            Thời gian phân bổ: 07:00 - 18:00 (11 giờ làm việc) | Trạm phát lệnh: HUB-01 Kho Miền Bắc
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase">
                          Phiên số:
                        </span>
                        <span className="font-code-num text-label-md text-primary bg-surface-container-lowest rounded-lg px-2.5 py-1 font-semibold shadow-sm">
                          #SFT-88910
                        </span>
                      </div>
                    </div>
                    {/* Dual Shift State Comparison: Into Shift (Verified) vs Exit Shift (Pending) */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      {/* Left: Check-in Completed Card */}
                      <div className="bg-surface-container-low flex flex-col justify-between gap-4 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span
                              className="material-symbols-outlined text-tertiary text-[20px]"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              login
                            </span>
                            <span className="font-headline-sm text-headline-sm text-on-surface">Vào Ca (Check-In)</span>
                          </div>
                          <span className="bg-tertiary text-on-tertiary font-label-sm text-label-sm flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold">
                            <span className="material-symbols-outlined text-[14px]">check</span>
                            Đã Xác Thực
                          </span>
                        </div>
                        {/* Biometric & Photo Capture Preview */}
                        <div className="bg-inverse-surface group relative h-36 overflow-hidden rounded-lg">
                          <img
                            className="h-full w-full object-cover opacity-85"
                            alt="Volunteer driver taking official selfie check-in"
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                          />
                          <div className="text-on-primary absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-2.5">
                            <div className="font-code-num text-body-sm flex items-center justify-between">
                              <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-tertiary-fixed text-[14px]">
                                  fmd_good
                                </span>
                                21.0285° N, 105.8542° E
                              </span>
                              <span className="text-label-sm text-on-primary-container">07:15:32 AM</span>
                            </div>
                            <span className="font-label-sm text-outline-variant text-[10px] tracking-wider uppercase">
                              HUB-01 Tam Trinh - Định Danh VNeID Cấp 2
                            </span>
                          </div>
                          <div className="bg-inverse-surface/80 text-on-primary font-code-num absolute top-2 right-2 rounded px-1.5 py-0.5 text-[10px] backdrop-blur-md">
                            FaceMatch: 99.4%
                          </div>
                        </div>
                        <div className="text-secondary font-body-sm text-body-sm flex flex-col gap-1">
                          <div className="flex justify-between">
                            <span>Trạm thực địa:</span>
                            <span className="text-on-surface font-medium">HUB-01 Hà Nội</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Thiết bị ghi nhận:</span>
                            <span className="font-code-num text-on-surface">iPhone 14 Pro (GPS Lock)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Mã hash điểm danh:</span>
                            <span className="font-code-num text-primary max-w-[170px] truncate">0x78ab9e4210cf9</span>
                          </div>
                        </div>
                      </div>
                      {/* Right: Check-out Interactive Form & Pre-requisites */}
                      <div className="bg-surface-container-high/40 flex flex-col justify-between gap-4 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-[20px]">logout</span>
                            <span className="font-headline-sm text-headline-sm text-on-surface">Ra Ca (Check-Out)</span>
                          </div>
                          <span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full px-2 py-0.5 font-semibold">
                            Chờ Nghiệm Thu
                          </span>
                        </div>
                        {/* Mandatory Pre-Checkout Checklist */}
                        <div className="flex flex-col gap-2.5">
                          <span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase">
                            Tiêu chuẩn chốt giờ công:
                          </span>
                          <label className="flex cursor-pointer items-start gap-2.5 select-none">
                            <input
                              defaultChecked
                              className="text-primary focus:ring-primary accent-primary mt-0.5 h-4 w-4 rounded"
                              type="checkbox"
                            />
                            <span className="font-body-sm text-body-sm text-on-surface">
                              Bàn giao phương tiện &amp; thẻ nhiên liệu xe 29H-882.14
                            </span>
                          </label>
                          <label className="flex cursor-pointer items-start gap-2.5 select-none">
                            <input
                              defaultChecked
                              className="text-primary focus:ring-primary accent-primary mt-0.5 h-4 w-4 rounded"
                              type="checkbox"
                            />
                            <span className="font-body-sm text-body-sm text-on-surface">
                              Đồng bộ PoD ký nhận điểm trường THCS Mường Lát
                            </span>
                          </label>
                          <label className="flex cursor-pointer items-start gap-2.5 select-none">
                            <input
                              className="text-primary focus:ring-primary accent-primary mt-0.5 h-4 w-4 rounded"
                              type="checkbox"
                              checked={noIncidentChecked}
                              onChange={(e) => setNoIncidentChecked(e.target.checked)}
                            />
                            <span className="font-body-sm text-body-sm text-on-surface">
                              Xác nhận không phát sinh sự cố cơ giới / hàng hóa
                            </span>
                          </label>
                        </div>
                        <div className="bg-surface-container-lowest text-body-sm flex items-center justify-between rounded-lg p-2.5">
                          <span className="text-secondary font-label-sm text-label-sm">Dự kiến kết thúc:</span>
                          <span className="font-code-num text-on-surface font-semibold">18:00 (Hôm nay)</span>
                        </div>
                      </div>
                    </div>
                    {/* Checkout Trigger Button & Digital Signature Confirmation */}
                    <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
                      <div className="text-secondary font-body-sm text-body-sm flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-tertiary text-[20px]">verified_user</span>
                        <span>
                          Chữ ký số TNV đã liên kết SmartCA. Giờ công được ghi nhận ngay lập tức sau khi bấm chốt.
                        </span>
                      </div>
                      <button
                        className={`bg-primary text-on-primary font-headline-sm text-headline-sm flex w-full items-center justify-center gap-2.5 rounded-xl px-6 py-3 shadow-md transition-all sm:w-auto ${isCheckingOut ? "opacity-75" : "hover:bg-primary/90"}`}
                        onClick={handleShiftCheckout}
                        disabled={isCheckingOut}
                        type="button"
                      >
                        {isCheckingOut ? (
                          <>
                            <span className="material-symbols-outlined animate-spin text-[20px]">refresh</span>
                            <span>Đang Ký Số &amp; Chốt Giờ Công...</span>
                          </>
                        ) : (
                          <>
                            <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                            <span>Điểm Danh Ra Ca &amp; Chốt Giờ Công</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  {/* Console Block 2: GPS Geofencing Validation & In-Shift Telemetry */}
                  <div className="bg-surface-container-lowest flex flex-col gap-6 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-primary text-[24px]">near_me</span>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            Định Vị GPS Geofence &amp; Hành Trình Thực Địa
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary">
                            Ranh giới hợp lệ trạm điều phối trung tâm &amp; trạm kiểm soát dọc tuyến
                          </span>
                        </div>
                      </div>
                      <span className="bg-surface-container-low text-primary font-code-num text-label-md flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-semibold">
                        <span className="bg-tertiary h-2 w-2 rounded-full"></span>
                        20.8421° N, 105.1219° E
                      </span>
                    </div>
                    {/* Map and Live Coordinates Section */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                      {/* Map Card with Static Pin Point */}
                      <div className="bg-surface-container relative min-h-[240px] overflow-hidden rounded-xl shadow-inner md:col-span-7">
                        <div
                          className="h-full min-h-[240px] w-full bg-cover bg-center"
                          style={{
                            backgroundImage:
                              "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80')",
                          }}
                        ></div>
                        {/* Floating Geofence Status Badge */}
                        <div className="bg-surface/90 absolute top-3 left-3 flex items-center gap-2 rounded-lg px-3 py-1.5 shadow-sm backdrop-blur-md">
                          <span className="material-symbols-outlined text-primary text-[18px]">radar</span>
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                            Geofence: Trong Vùng Hoạt Động (Mường Lát)
                          </span>
                        </div>
                        {/* Live Coordinate Overlay Marker */}
                        <div className="bg-inverse-surface/85 text-on-primary font-code-num text-body-sm absolute right-3 bottom-3 flex items-center gap-2 rounded-md px-2.5 py-1 backdrop-blur-md">
                          <span className="bg-tertiary-fixed h-2 w-2 animate-ping rounded-full"></span>
                          <span>Vận tốc: 42 km/h</span>
                          <span className="text-outline-variant">|</span>
                          <span>Độ cao: 820m</span>
                        </div>
                      </div>
                      {/* Team & Vehicle Allocation Details */}
                      <div className="bg-surface-container-low flex flex-col justify-between gap-3 rounded-xl p-4 md:col-span-5">
                        <div className="flex flex-col gap-2">
                          <span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase">
                            Đội Ngũ Phối Hợp Trong Ca
                          </span>
                          {/* Member 1: Long (Captain) */}
                          <div className="bg-surface-container-lowest flex items-center justify-between rounded-lg p-2 shadow-sm">
                            <div className="flex items-center gap-2.5">
                              <div className="bg-primary text-on-primary flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold">
                                HL
                              </div>
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md text-on-surface font-semibold">
                                  Lê Hoàng Long
                                </span>
                                <span className="font-body-sm text-body-sm text-secondary">Đội Trưởng - Lái chính</span>
                              </div>
                            </div>
                            <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm rounded px-2 py-0.5">
                              Đã Check-in
                            </span>
                          </div>
                          {/* Member 2: Trong (Technical) */}
                          <div className="bg-surface-container-lowest flex items-center justify-between rounded-lg p-2 shadow-sm">
                            <div className="flex items-center gap-2.5">
                              <div className="bg-secondary text-on-secondary flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold">
                                ĐT
                              </div>
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md text-on-surface font-semibold">
                                  Trần Đình Trọng
                                </span>
                                <span className="font-body-sm text-body-sm text-secondary">TNV Kỹ thuật phần cứng</span>
                              </div>
                            </div>
                            <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm rounded px-2 py-0.5">
                              Đã Check-in
                            </span>
                          </div>
                          {/* Member 3: Tuan (Logistics) */}
                          <div className="bg-surface-container-lowest flex items-center justify-between rounded-lg p-2 shadow-sm">
                            <div className="flex items-center gap-2.5">
                              <div className="bg-secondary-container text-on-secondary-container flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold">
                                MT
                              </div>
                              <div className="flex flex-col">
                                <span className="font-label-md text-label-md text-on-surface font-semibold">
                                  Nguyễn Minh Tuấn
                                </span>
                                <span className="font-body-sm text-body-sm text-secondary">
                                  TNV Hậu cần &amp; Kiểm đếm
                                </span>
                              </div>
                            </div>
                            <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm rounded px-2 py-0.5">
                              Đã Check-in
                            </span>
                          </div>
                        </div>
                        <div className="bg-surface-container-lowest flex items-center justify-between rounded-lg border-t-0 p-2.5 pt-2">
                          <span className="font-body-sm text-body-sm text-secondary">Giấy đi đường khẩn cấp:</span>
                          <span className="font-code-num text-label-sm text-primary font-semibold">
                            EDU-PERMIT-2024-88
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Console Block 3: Timeline Work Log (Nhật ký thực địa trong ca) */}
                  <div className="bg-surface-container-lowest flex flex-col gap-5 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-primary text-[24px]">schedule</span>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface">
                          Nhật Ký Tiến Độ Ca Trực Thực Địa
                        </h2>
                      </div>
                      <button
                        className="text-primary font-label-sm text-label-sm flex items-center gap-1 font-semibold hover:underline"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">add</span>
                        Ghi chú phát sinh
                      </button>
                    </div>
                    <div className="before:bg-surface-container-high relative flex flex-col gap-4 pl-6 before:absolute before:top-2 before:bottom-2 before:left-2.5 before:w-0.5 before:content-['']">
                      {/* Timeline Item 1 */}
                      <div className="relative flex flex-col gap-1">
                        <div className="bg-tertiary ring-surface-container-lowest absolute top-1 -left-6 h-3.5 w-3.5 rounded-full ring-4"></div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-code-num text-label-md text-on-surface font-bold">07:15</span>
                          <span className="font-headline-sm text-body-md text-on-surface font-semibold">
                            Check-in điểm danh ca tại HUB-01 Hà Nội
                          </span>
                          <span className="py-0.2 bg-surface-container text-secondary font-label-sm text-label-sm rounded px-2">
                            GPS Hợp lệ
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-secondary">
                          Lê Hoàng Long, Trần Đình Trọng và Nguyễn Minh Tuấn tập hợp đầy đủ, kiểm tra cồn và nhận lệnh
                          điều động xe 29H-882.14.
                        </p>
                      </div>
                      {/* Timeline Item 2 */}
                      <div className="relative flex flex-col gap-1">
                        <div className="bg-tertiary ring-surface-container-lowest absolute top-1 -left-6 h-3.5 w-3.5 rounded-full ring-4"></div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-code-num text-label-md text-on-surface font-bold">08:30</span>
                          <span className="font-headline-sm text-body-md text-on-surface font-semibold">
                            Quét QR Seal nhận 50 kiện thiết bị tại cửa kho B1
                          </span>
                          <span className="py-0.2 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm rounded px-2">
                            Niêm phong 50/50
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-secondary">
                          Kiểm tra nguyên đai nguyên kiện 30 màn hình máy tính và 20 case PC học tập tài trợ cho THCS
                          Mường Lát. Ký bàn giao kho hoàn tất.
                        </p>
                      </div>
                      {/* Timeline Item 3 */}
                      <div className="relative flex flex-col gap-1">
                        <div className="bg-primary ring-surface-container-lowest absolute top-1 -left-6 h-3.5 w-3.5 rounded-full ring-4"></div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-code-num text-label-md text-on-surface font-bold">12:30</span>
                          <span className="font-headline-sm text-body-md text-on-surface font-semibold">
                            Dừng chân kiểm tra cơ giới tại Trạm tiếp nhiên liệu TP. Thanh Hóa
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-secondary">
                          Áp suất lốp chuẩn, dây chằng hàng an toàn, không có hiện tượng xô lệch kiện hàng. Đội nghỉ
                          ngơi 30 phút.
                        </p>
                      </div>
                      {/* Timeline Item 4 (Current) */}
                      <div className="relative flex flex-col gap-1">
                        <div className="bg-primary-container ring-surface-container-lowest absolute top-1 -left-6 h-3.5 w-3.5 animate-pulse rounded-full ring-4"></div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-code-num text-label-md text-primary font-bold">14:00 (Hiện tại)</span>
                          <span className="font-headline-sm text-body-md text-primary font-semibold">
                            Di chuyển vượt đèo vào địa phận Huyện Mường Lát
                          </span>
                          <span className="py-0.2 bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm rounded px-2">
                            Đang vận hành
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-secondary">
                          Thời tiết khô ráo, vận tốc trung bình 35km/h trên đoạn cua dốc. Dự kiến tiếp cận điểm trường
                          lúc 16:30 để tiến hành bàn giao.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* RIGHT COLUMN: Volunteer Profile & RBAC Regulations (4 Cols) */}
                <div className="flex flex-col gap-6 lg:col-span-4">
                  {/* Block 1: Volunteer Profile & Accreditation Badge */}
                  <div className="bg-surface-container-lowest flex flex-col gap-5 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          className="h-16 w-16 rounded-2xl object-cover shadow-sm"
                          alt="Portrait"
                          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                        />
                        <div className="bg-tertiary text-on-tertiary absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full">
                          <span className="material-symbols-outlined text-[14px]">check</span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-headline-md text-headline-md text-on-surface">Lê Hoàng Long</h3>
                          <span className="bg-primary-fixed text-on-primary-fixed font-code-num rounded px-1.5 py-0.5 text-[11px] font-bold">
                            #TNV-88
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-secondary">
                          Đội Trưởng Đội Xe Vượt Đèo Tây Bắc
                        </span>
                        <span className="font-label-sm text-label-sm text-tertiary font-semibold">
                          Tình Nguyện Viên Nòng Cốt Cấp 3
                        </span>
                      </div>
                    </div>
                    {/* Credential Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm inline-flex items-center gap-1 rounded-lg px-2.5 py-1">
                        <span className="material-symbols-outlined text-tertiary text-[14px]">verified</span>
                        VNeID Mức 2 (Đã KYC)
                      </span>
                      <span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm inline-flex items-center gap-1 rounded-lg px-2.5 py-1">
                        <span className="material-symbols-outlined text-primary text-[14px]">directions_car</span>
                        GPLX Hạng D (2029)
                      </span>
                      <span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm inline-flex items-center gap-1 rounded-lg px-2.5 py-1">
                        <span className="material-symbols-outlined text-error text-[14px]">medical_services</span>
                        Sơ Cấp Cứu Chữ Thập Đỏ
                      </span>
                      <span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm inline-flex items-center gap-1 rounded-lg px-2.5 py-1">
                        <span className="material-symbols-outlined text-tertiary text-[14px]">lan</span>
                        Kỹ Thuật Hạ Tầng Lab PC
                      </span>
                    </div>
                    {/* Honor Badges */}
                    <div className="bg-surface-container-low flex flex-col gap-2 rounded-xl p-3.5 pt-2">
                      <span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase">
                        Huy Hiệu Cống Hiến Đã Đạt
                      </span>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-surface-container-lowest flex flex-col items-center gap-1 rounded-lg p-2">
                          <span
                            className="material-symbols-outlined text-primary text-[24px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            military_tech
                          </span>
                          <span className="font-label-sm text-on-surface text-[10px] leading-tight font-semibold">
                            Vượt 10,000km Vùng Cao
                          </span>
                        </div>
                        <div className="bg-surface-container-lowest flex flex-col items-center gap-1 rounded-lg p-2">
                          <span
                            className="material-symbols-outlined text-tertiary text-[24px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            volunteer_activism
                          </span>
                          <span className="font-label-sm text-on-surface text-[10px] leading-tight font-semibold">
                            Chiến Sĩ Áo Xanh 2024
                          </span>
                        </div>
                        <div className="bg-surface-container-lowest flex flex-col items-center gap-1 rounded-lg p-2">
                          <span
                            className="material-symbols-outlined text-tertiary-container text-[24px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            star
                          </span>
                          <span className="font-label-sm text-on-surface text-[10px] leading-tight font-semibold">
                            100% PoD Hoàn Hảo
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Block 2: Recent 5 Shifts Ledger */}
                  <div className="bg-surface-container-lowest flex flex-col gap-4 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">event_available</span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">Ca Trực Hoàn Tất Gần Đây</h3>
                      </div>
                      <Link className="font-label-sm text-label-sm text-primary hover:underline" to="#">
                        Xem tất cả
                      </Link>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {/* Shift Record 1 */}
                      <div className="bg-surface-container-low hover:bg-surface-container flex flex-col gap-1.5 rounded-xl p-3 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-code-num text-label-md text-on-surface font-semibold">23/10/2024</span>
                          <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm rounded-full px-2 py-0.5 text-[11px] font-semibold">
                            +10 Giờ Công
                          </span>
                        </div>
                        <div className="text-body-sm flex items-center justify-between">
                          <span className="text-on-surface truncate">Vận chuyển thiết bị Mèo Vạc (Hà Giang)</span>
                          <span
                            className="material-symbols-outlined text-tertiary text-[16px]"
                            title="Đã duyệt giờ công"
                          >
                            check_circle
                          </span>
                        </div>
                        <span className="font-label-sm text-secondary text-[11px]">
                          Ký xác nhận: Điều Phối Viên Kho HUB-01
                        </span>
                      </div>
                      {/* Shift Record 2 */}
                      <div className="bg-surface-container-low hover:bg-surface-container flex flex-col gap-1.5 rounded-xl p-3 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-code-num text-label-md text-on-surface font-semibold">21/10/2024</span>
                          <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm rounded-full px-2 py-0.5 text-[11px] font-semibold">
                            +6 Giờ Công
                          </span>
                        </div>
                        <div className="text-body-sm flex items-center justify-between">
                          <span className="text-on-surface truncate">Kiểm định &amp; Đóng gói máy tính HUB-01</span>
                          <span
                            className="material-symbols-outlined text-tertiary text-[16px]"
                            title="Đã duyệt giờ công"
                          >
                            check_circle
                          </span>
                        </div>
                        <span className="font-label-sm text-secondary text-[11px]">
                          Ký xác nhận: Thủ Kho Tổng Miền Bắc
                        </span>
                      </div>
                      {/* Shift Record 3 */}
                      <div className="bg-surface-container-low hover:bg-surface-container flex flex-col gap-1.5 rounded-xl p-3 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-code-num text-label-md text-on-surface font-semibold">19/10/2024</span>
                          <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm rounded-full px-2 py-0.5 text-[11px] font-semibold">
                            +8 Giờ Công
                          </span>
                        </div>
                        <div className="text-body-sm flex items-center justify-between">
                          <span className="text-on-surface truncate">Vận chuyển Sa Pa - Bát Xát (Lào Cai)</span>
                          <span
                            className="material-symbols-outlined text-tertiary text-[16px]"
                            title="Đã duyệt giờ công"
                          >
                            check_circle
                          </span>
                        </div>
                        <span className="font-label-sm text-secondary text-[11px]">
                          Ký xác nhận: Điều Phối Viên Vùng Tây Bắc
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Block 3: RBAC Protocol & Attendance Governance (DOCUMENT_55) */}
                  <div className="bg-surface-container-lowest flex flex-col gap-4 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">gavel</span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Quy Chuẩn Giờ Công &amp; RBAC
                      </h3>
                    </div>
                    <div className="font-body-sm text-body-sm text-secondary flex flex-col gap-3">
                      <div className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-primary mt-0.5 shrink-0 text-[18px]">
                          policy
                        </span>
                        <span>
                          <strong>Quyền hạn Role TNV:</strong> Điểm danh vào ca/ra ca độc lập, xem sổ cái giờ công, gửi
                          yêu cầu phúc khảo nếu sai lệch tọa độ.
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-primary mt-0.5 shrink-0 text-[18px]">
                          lock_clock
                        </span>
                        <span>
                          <strong>Ràng buộc Geofence:</strong> Chỉ được check-in/out trong bán kính tối đa 100m quanh
                          trạm xuất phát hoặc điểm đích bàn giao đã phê duyệt.
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-error mt-0.5 shrink-0 text-[18px]">
                          security
                        </span>
                        <span>
                          <strong>Chống gian lận:</strong> Tự động khóa tài khoản nếu phát hiện Fake GPS, điểm danh hộ,
                          hoặc chốt ca khi chưa bàn giao xong phương tiện.
                        </span>
                      </div>
                    </div>
                    <div className="bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center justify-between rounded-lg p-3">
                      <span>Phiên bản tài liệu kiểm soát:</span>
                      <span className="font-code-num text-primary font-semibold">DOC-55-RBAC-REV4</span>
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

export default VolunteerAttendancePage;
