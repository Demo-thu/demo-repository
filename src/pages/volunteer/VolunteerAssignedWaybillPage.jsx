import { useState, useEffect } from "react";

export default function VolunteerAssignedWaybillPage() {
  const [isIncidentModalOpen, setIsIncidentModalOpen] = useState(false);
  const [incidentReason, setIncidentReason] = useState("");
  const [incidentType, setIncidentType] = useState("Sạt lở đất đá chắn ngang đường đèo (Bất khả kháng)");
  const [shiftSeconds, setShiftSeconds] = useState(22965);

  useEffect(() => {
    const interval = setInterval(() => {
      setShiftSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds) => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  const handleOpenIncidentModal = () => setIsIncidentModalOpen(true);
  const handleCloseIncidentModal = () => setIsIncidentModalOpen(false);

  const handleSubmitIncident = () => {
    if (!incidentReason || incidentReason.trim() === "") {
      alert("Vui lòng nhập chi tiết sự cố thực địa theo quy định RBAC!");
      return;
    }
    alert(
      "ĐÃ PHÁT LỆNH BÁO CÁO SỰ CỐ! Trạng thái vận đơn #WB-2024-NW08 chuyển thành: FAILED. Trung tâm điều phối EduShare đã tiếp nhận và đang điều xe cứu hộ.",
    );
    setIsIncidentModalOpen(false);
  };

  const handleCheckout = () => {
    if (window.confirm("Xác nhận hoàn tất ca trực và điểm danh ra ca lúc này?")) {
      alert("Đã ghi nhận điểm danh ra ca thành công vào CSDL hệ thống!");
    }
  };

  const handleSyncData = () => {
    alert("Đã đồng bộ dữ liệu ngoại tuyến với trạm vệ tinh VNPT");
  };

  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen">
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
                Điều Động & Ca Trực
              </div>
              <a
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all"
                href="/volunteer/attendance"
              >
                <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                <span className="font-body-md text-body-md">Điểm danh ca trực</span>
              </a>
              <a
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all"
                href="/volunteer/leaderboard"
              >
                <span className="material-symbols-outlined text-[20px]">leaderboard</span>
                <span className="font-body-md text-body-md">Bảng xếp hạng & Giờ công</span>
              </a>

              <div className="font-label-sm text-label-sm text-on-surface-variant px-3 pt-5 pb-1 tracking-wider uppercase">
                Vận Chuyển & Giao Nhận
              </div>
              <a
                aria-current="page"
                className="bg-primary-container text-on-primary flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium shadow-sm transition-all"
                href="/volunteer/waybill"
              >
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span className="font-body-md text-body-md flex-1">Vận đơn được gán</span>
                <span className="bg-primary-container h-2 w-2 rounded-full"></span>
              </a>
              <a
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all"
                href="/volunteer/route-gps"
              >
                <span className="material-symbols-outlined text-[20px]">near_me</span>
                <span className="font-body-md text-body-md">Tuyến đường & GPS</span>
              </a>
              <a
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span className="font-body-md text-body-md">Xác nhận lấy hàng tại kho</span>
              </a>

              <div className="font-label-sm text-label-sm text-on-surface-variant px-3 pt-5 pb-1 tracking-wider uppercase">
                Biên Bản & Sự Cố
              </div>
              <a
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">warning</span>
                <span className="font-body-md text-body-md">Báo cáo sự cố chuyến đi</span>
              </a>
              <a
                className="text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <span className="font-body-md text-body-md">Hoàn thành & Minh chứng PoD</span>
              </a>
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

      <div className="pl-72">
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

        <main className="bg-surface relative min-h-screen pt-16">
          <div className="w-full px-8 py-6">
            <div id="volunteer-portal-content-slot">
              <div className="flex w-full flex-col gap-6">
                {/* Breadcrumb & Top Bar */}
                <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                  <div className="font-label-md text-label-md text-secondary flex items-center gap-2">
                    <span className="text-on-surface hover:text-primary flex cursor-pointer items-center gap-1 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">volunteer_activism</span>
                      EduShare TNV
                    </span>
                    <span className="material-symbols-outlined text-outline text-[14px]">chevron_right</span>
                    <span>Vận Chuyển & Giao Nhận</span>
                    <span className="material-symbols-outlined text-outline text-[14px]">chevron_right</span>
                    <span className="font-code-num text-on-surface bg-surface-container-high text-primary rounded-lg px-2 py-0.5 font-semibold">
                      #WB-2024-NW08
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-secondary-fixed text-on-secondary-fixed font-code-num text-label-sm inline-flex items-center gap-1.5 rounded-full px-3 py-1">
                      <span className="bg-tertiary-container h-2 w-2 animate-ping rounded-full"></span>
                      GPS Realtime Sync: 104.6231° E
                    </span>
                    <button
                      className="bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-1.5 rounded-lg px-3 py-1.5 shadow-sm transition-all"
                      onClick={handleSyncData}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-primary text-[16px]">sync</span>
                      Đồng bộ dữ liệu
                    </button>
                  </div>
                </div>

                {/* Operational Duty Shift Banner (RBAC Check-in/Check-out) */}
                <div className="bg-surface-container-lowest relative overflow-hidden rounded-xl p-5 shadow-sm">
                  <div className="relative z-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                    <div className="flex items-start gap-4 sm:items-center">
                      <div className="bg-primary-fixed text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm">
                        <span className="material-symbols-outlined text-[26px]">badge</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            Ca Trực Cơ Động Vùng Cao
                          </span>
                          <span className="bg-secondary-container text-on-secondary-container font-code-num text-label-sm rounded-md px-2 py-0.5">
                            #CA-2024-1024
                          </span>
                          <span className="text-label-sm font-label-sm inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-emerald-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
                            Đang hoạt động (Checked-in)
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-secondary mt-1">
                          Đã điểm danh vào ca lúc{" "}
                          <strong className="text-on-surface font-semibold">07:15 (24/10/2024)</strong> tại{" "}
                          <strong className="text-on-surface font-semibold">Tổng Kho Giáo Dục HUB-01 Hà Nội</strong> •
                          Phương tiện:{" "}
                          <span className="font-code-num text-primary font-medium">Ford Ranger 29H-882.14</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-3 self-end lg:self-center">
                      <div className="hidden text-right sm:block">
                        <div className="font-label-sm text-label-sm text-outline uppercase">Thời gian ca hôm nay</div>
                        <div className="font-code-num text-headline-sm text-on-surface font-bold tracking-tight">
                          {formatTime(shiftSeconds)}
                        </div>
                      </div>
                      <button
                        className="bg-surface-container-high hover:bg-error-container hover:text-on-error-container text-on-surface-variant font-label-md text-label-md flex items-center gap-2 rounded-lg px-4 py-2.5 transition-all"
                        onClick={handleCheckout}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-error text-[18px]">logout</span>
                        <span>Điểm danh ra ca (Kết thúc)</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Primary Task Identity & Status Strip */}
                <div className="bg-surface-container-low flex flex-col justify-between gap-4 rounded-xl p-6 shadow-sm md:flex-row md:items-center">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="bg-primary-container text-on-primary font-label-sm text-label-sm inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-semibold tracking-wider uppercase">
                        <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                        Đang Vận Chuyển (In-Transit)
                      </span>
                      <span className="font-code-num text-label-md text-secondary">
                        Mã vận đơn: <strong className="text-on-surface font-bold">#WB-2024-NW08</strong>
                      </span>
                      <span className="bg-surface-container-highest text-on-surface-variant font-code-num text-label-sm rounded-md px-2 py-0.5">
                        Độ ưu tiên: Khẩn cấp
                      </span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface mt-1 tracking-tight">
                      Chi Viện Thiết Bị Tin Học: Điểm Trường PTDTBT THCS Mường Lát
                    </h1>
                    <p className="font-body-md text-body-md text-secondary">
                      Nhiệm vụ cấp bách theo Quyết định điều phối số 194/QĐ-EDUSHARE: Bàn giao phòng máy tính thực hành
                      trước kỳ thi học kỳ I.
                    </p>
                  </div>

                  {/* Quick Warehouse Pickup Verification Stamp */}
                  <div className="bg-surface-container-lowest border-primary flex shrink-0 items-center gap-3 rounded-xl border-l-4 p-3 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                      <span className="material-symbols-outlined text-[24px]">verified_user</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary uppercase">
                        Xác nhận lấy hàng tại kho
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-code-num text-label-md text-on-surface font-bold">Seal #HN-8842-OK</span>
                        <span className="material-symbols-outlined text-[16px] text-emerald-600">check_circle</span>
                      </div>
                      <span className="font-body-sm text-body-sm text-secondary">Quét QR lúc 08:30 (HUB-01)</span>
                    </div>
                  </div>
                </div>

                {/* Bento Stats & Mission Telemetry */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {/* Stat 1: Route Distance */}
                  <div className="bg-surface-container-lowest flex flex-col justify-between rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-secondary font-semibold tracking-wider uppercase">
                        Lộ Trình Đèo Núi
                      </span>
                      <span className="bg-primary-fixed text-primary flex h-8 w-8 items-center justify-center rounded-lg">
                        <span className="material-symbols-outlined text-[20px]">explore</span>
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg text-on-surface font-bold">185</span>
                        <span className="font-body-md text-body-md text-secondary">/ 310 km</span>
                      </div>
                      <div className="bg-surface-container-high mt-2 h-2 w-full overflow-hidden rounded-full">
                        <div className="bg-primary h-full rounded-full transition-all" style={{ width: "59.6%" }}></div>
                      </div>
                    </div>
                    <div className="font-body-sm text-body-sm text-secondary bg-surface-container-low mt-3 flex items-center justify-between rounded-lg px-2.5 py-1.5 pt-2">
                      <span>
                        Đã đi: <strong>60%</strong>
                      </span>
                      <span className="text-primary font-medium">Còn 125 km (Dốc Sài Khao)</span>
                    </div>
                  </div>

                  {/* Stat 2: Escorted Cargo */}
                  <div className="bg-surface-container-lowest flex flex-col justify-between rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-secondary font-semibold tracking-wider uppercase">
                        Hiện Vật Áp Tải
                      </span>
                      <span className="bg-tertiary-fixed text-tertiary flex h-8 w-8 items-center justify-center rounded-lg">
                        <span className="material-symbols-outlined text-[20px]">devices</span>
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg text-on-surface font-bold">50</span>
                        <span className="font-body-md text-body-md text-secondary">Kiện thiết bị</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-secondary mt-1 truncate">
                        30 Laptop Lenovo + 20 Màn Dell 24"
                      </p>
                    </div>
                    <div className="font-body-sm text-body-sm mt-3 flex items-center justify-between rounded-lg bg-emerald-50 px-2.5 py-1.5 text-emerald-800">
                      <span className="font-label-md text-label-md flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">qr_code_2</span>
                        RFID Seal Khóa
                      </span>
                      <span className="font-code-num text-label-sm font-semibold">100% Nguyên vẹn</span>
                    </div>
                  </div>

                  {/* Stat 3: Escort Team RBAC */}
                  <div className="bg-surface-container-lowest flex flex-col justify-between rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-secondary font-semibold tracking-wider uppercase">
                        Tổ TNV Áp Tải
                      </span>
                      <span className="bg-surface-container-high text-on-surface flex h-8 w-8 items-center justify-center rounded-lg">
                        <span className="material-symbols-outlined text-[20px]">groups</span>
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg text-on-surface font-bold">03</span>
                        <span className="font-body-md text-body-md text-secondary">Tình nguyện viên</span>
                      </div>
                      <div className="mt-2 flex items-center -space-x-2">
                        <div
                          className="bg-primary text-on-primary ring-surface-container-lowest flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold ring-2"
                          title="Lê Hoàng Long (Trưởng đoàn)"
                        >
                          LHL
                        </div>
                        <div
                          className="bg-tertiary text-on-tertiary ring-surface-container-lowest flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold ring-2"
                          title="Trần Đình Trọng (Kỹ thuật)"
                        >
                          TĐT
                        </div>
                        <div
                          className="bg-secondary text-on-secondary ring-surface-container-lowest flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold ring-2"
                          title="Nguyễn Minh Tuấn (Hậu cần)"
                        >
                          NMT
                        </div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant pl-3 font-medium">
                          waybill_volunteers
                        </span>
                      </div>
                    </div>
                    <div className="font-body-sm text-body-sm text-secondary bg-surface-container-low mt-3 flex items-center justify-between rounded-lg px-2.5 py-1.5">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-tertiary text-[16px]">check_circle</span>
                        VNeID Xác Thực
                      </span>
                      <span className="font-code-num text-label-sm font-semibold">Bảo hiểm 100%</span>
                    </div>
                  </div>

                  {/* Stat 4: Volunteer Rank & Hours */}
                  <div className="from-primary-fixed to-surface-container-low flex flex-col justify-between rounded-xl bg-gradient-to-br p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-primary-fixed-variant font-semibold tracking-wider uppercase">
                        Cống Hiến Cá Nhân
                      </span>
                      <span className="bg-surface-container-lowest text-primary flex h-8 w-8 items-center justify-center rounded-lg shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">military_tech</span>
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg text-on-primary-fixed font-bold">240</span>
                        <span className="font-body-md text-body-md text-on-primary-fixed-variant">Giờ công</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-primary-fixed-variant mt-1 font-medium">
                        +16 giờ dự kiến tích lũy chuyến này
                      </p>
                    </div>
                    <div className="bg-surface-container-lowest/80 text-on-surface mt-3 flex items-center justify-between rounded-lg px-2.5 py-1.5">
                      <span className="font-label-sm text-label-sm text-primary font-semibold uppercase">
                        Toàn Quốc Tháng 10
                      </span>
                      <span className="font-headline-sm text-headline-sm text-primary flex items-center gap-0.5 font-bold">
                        <span className="material-symbols-outlined text-[18px] text-amber-500">trophy</span>
                        Top #3
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main Grid: 7 Cols (Operation & Cargo) : 5 Cols (PoD, Destination & Strict RBAC) */}
                <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
                  {/* LEFT COLUMN: 7 / 12 */}
                  <div className="flex flex-col gap-6 lg:col-span-7">
                    {/* Route Stepper Timeline */}
                    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                      <div className="flex items-center justify-between pb-4">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[22px]">alt_route</span>
                          <h2 className="font-headline-sm text-headline-sm text-on-surface">
                            Tiến Trình Chuyến Đi (Hành Trình 4 Chặng)
                          </h2>
                        </div>
                        <span className="font-label-sm text-label-sm text-secondary bg-surface-container rounded-full px-2.5 py-1">
                          Telemetry Trực Tiếp
                        </span>
                      </div>

                      {/* 4-step vertical timeline */}
                      <div className="relative mt-3 flex flex-col gap-6 pl-6">
                        {/* Timeline Track Line */}
                        <div className="bg-surface-container-highest absolute top-3 bottom-4 left-2.5 w-0.5"></div>

                        {/* Stage 1: Completed */}
                        <div className="relative flex items-start gap-3">
                          <div className="bg-tertiary text-on-tertiary absolute top-0.5 -left-6 flex h-5 w-5 items-center justify-center rounded-full shadow-sm">
                            <span className="material-symbols-outlined text-[14px]">check</span>
                          </div>
                          <div className="bg-surface-container-low flex-1 rounded-lg p-3.5">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="font-label-md text-label-md text-on-surface font-semibold">
                                Chặng 1: Xuất Kho Tổng HUB-01 Hà Nội
                              </span>
                              <span className="font-code-num text-body-sm text-secondary">
                                08:30 (24/10) • Đã Hoàn Tất
                              </span>
                            </div>
                            <p className="font-body-sm text-body-sm text-secondary mt-1">
                              Tổ TNV kiểm kê 50/50 kiện hàng. Quét mã vạch xuất kho & niêm phong chì RFID kẹp tại cửa xe
                              bán tải.
                            </p>
                            <div className="mt-2 flex items-center gap-2">
                              <span className="font-code-num bg-surface-container-lowest text-tertiary inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px] font-semibold">
                                <span className="material-symbols-outlined text-[13px]">tag</span> SEAL-HN-8842
                              </span>
                              <span className="text-body-sm text-secondary text-[11px]">
                                • Xác nhận bởi Thủ kho HUB-01
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Stage 2: Completed */}
                        <div className="relative flex items-start gap-3">
                          <div className="bg-tertiary text-on-tertiary absolute top-0.5 -left-6 flex h-5 w-5 items-center justify-center rounded-full shadow-sm">
                            <span className="material-symbols-outlined text-[14px]">check</span>
                          </div>
                          <div className="bg-surface-container-low flex-1 rounded-lg p-3.5">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="font-label-md text-label-md text-on-surface font-semibold">
                                Chặng 2: Trạm Dừng Chân Cơ Động TP. Thanh Hóa
                              </span>
                              <span className="font-code-num text-body-sm text-secondary">
                                12:30 (24/10) • Đã Hoàn Tất
                              </span>
                            </div>
                            <p className="font-body-sm text-body-sm text-secondary mt-1">
                              Kiểm tra dây đai chằng buộc chống sốc màn hình LCD. Cảm biến thùng xe ghi nhận nhiệt độ
                              21.5°C, độ ẩm 62% đạt chuẩn lưu chuyển thiết bị nhạy cảm.
                            </p>
                          </div>
                        </div>

                        {/* Stage 3: Current Active */}
                        <div className="relative flex items-start gap-3">
                          <div className="bg-primary-container text-on-primary absolute top-0.5 -left-6 flex h-5 w-5 animate-pulse items-center justify-center rounded-full shadow-md">
                            <span className="material-symbols-outlined text-[14px]">near_me</span>
                          </div>
                          <div className="bg-primary-fixed/30 flex-1 rounded-lg p-4">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <span className="font-label-md text-label-md text-primary font-bold">
                                  Chặng 3: Đèo Mã Pí Lèng / Dốc Cổng Trời Tam Chung
                                </span>
                                <span className="bg-primary-container text-on-primary rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                                  Đang Di Chuyển
                                </span>
                              </div>
                              <span className="font-code-num text-body-sm text-primary font-semibold">
                                Hiện tại (13:52)
                              </span>
                            </div>
                            <p className="font-body-sm text-body-sm text-on-surface mt-1.5 font-medium">
                              Tốc độ đo được: 35 km/h • Tọa độ: 20.5186° N, 104.6231° E. Mặt đường trơn ướt sương mù
                              vùng cao, tài xế Lê Hoàng Long đang duy trì số thấp.
                            </p>
                            <div className="mt-3 flex flex-wrap items-center gap-2">
                              <span className="bg-surface-container-lowest text-secondary font-code-num flex items-center gap-1 rounded px-2.5 py-1 text-[12px] shadow-sm">
                                <span className="material-symbols-outlined text-tertiary text-[15px]">speed</span> 35
                                km/h
                              </span>
                              <span className="bg-surface-container-lowest text-secondary font-code-num flex items-center gap-1 rounded px-2.5 py-1 text-[12px] shadow-sm">
                                <span className="material-symbols-outlined text-primary text-[15px]">
                                  battery_charging_full
                                </span>{" "}
                                Xe 94% Pin/Nhiên liệu
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Stage 4: Upcoming Destination */}
                        <div className="relative flex items-start gap-3">
                          <div className="bg-surface-container-high text-outline absolute top-0.5 -left-6 flex h-5 w-5 items-center justify-center rounded-full">
                            <span className="material-symbols-outlined text-[14px]">flag</span>
                          </div>
                          <div className="bg-surface-container-low/60 flex-1 rounded-lg p-3.5 opacity-80">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="font-label-md text-label-md text-on-surface font-medium">
                                Chặng 4: Điểm Trường PTDTBT THCS Mường Lát
                              </span>
                              <span className="font-code-num text-body-sm text-secondary">Dự kiến 16:30 chiều nay</span>
                            </div>
                            <p className="font-body-sm text-body-sm text-secondary mt-1">
                              Giao nhận bàn giao trực tiếp tại Phòng Tin Học số 2. Hiệu trưởng trường sẵn sàng tiếp nhận
                              & chuẩn bị ký số PoD.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Manifest & Equipment Specifications (50 units) */}
                    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                      <div className="flex flex-col justify-between gap-3 pb-4 sm:flex-row sm:items-center">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-[22px]">inventory_2</span>
                            <h2 className="font-headline-sm text-headline-sm text-on-surface">
                              Danh Mục Thiết Bị Áp Tải (50 Kiện)
                            </h2>
                          </div>
                          <p className="font-body-sm text-body-sm text-secondary">
                            Toàn bộ đã được kiểm thử Burn-in 72h & dán tem QR Quản lý Nhà nước
                          </p>
                        </div>
                        <span className="font-code-num text-label-sm bg-surface-container text-on-surface-variant self-start rounded-md px-2.5 py-1 sm:self-center">
                          Seal RFID: HN-8842-OK
                        </span>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="font-body-sm text-body-sm w-full text-left">
                          <thead>
                            <tr className="bg-surface-container-low text-secondary font-label-sm text-label-sm tracking-wider uppercase">
                              <th className="rounded-l-lg px-3 py-2.5">STT / Mã Lô</th>
                              <th className="px-3 py-2.5">Loại Thiết Bị & Cấu Hình</th>
                              <th className="px-3 py-2.5">Đơn Vị Tài Trợ</th>
                              <th className="px-3 py-2.5 text-center">SL</th>
                              <th className="rounded-r-lg px-3 py-2.5 text-right">Tình Trạng</th>
                            </tr>
                          </thead>
                          <tbody className="text-on-surface">
                            <tr className="hover:bg-surface-container-low transition-colors">
                              <td className="font-code-num text-label-md text-primary px-3 py-3 font-semibold">
                                #LOT-LENOVO-01
                              </td>
                              <td className="px-3 py-3">
                                <div className="font-label-md text-label-md text-on-surface font-medium">
                                  Lenovo ThinkPad T480s
                                </div>
                                <div className="text-secondary font-code-num text-[11px]">
                                  Core i5 8th / 16GB RAM / SSD 256GB / Đã cài Win11 Edu
                                </div>
                              </td>
                              <td className="px-3 py-3">
                                <span className="font-label-sm text-label-sm text-on-surface inline-flex items-center gap-1 font-medium">
                                  <span className="bg-primary-container h-1.5 w-1.5 rounded-full"></span>
                                  Tập đoàn FPT
                                </span>
                              </td>
                              <td className="font-code-num px-3 py-3 text-center font-bold">30 máy</td>
                              <td className="px-3 py-3 text-right">
                                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-800">
                                  Đã niêm phong
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-surface-container-low transition-colors">
                              <td className="font-code-num text-label-md text-primary px-3 py-3 font-semibold">
                                #LOT-DELL-MON-02
                              </td>
                              <td className="px-3 py-3">
                                <div className="font-label-md text-label-md text-on-surface font-medium">
                                  Màn hình Dell Professional 24" P2419H
                                </div>
                                <div className="text-secondary font-code-num text-[11px]">
                                  Full HD IPS kèm cáp HDMI & chân đế xoay công thái học
                                </div>
                              </td>
                              <td className="px-3 py-3">
                                <span className="font-label-sm text-label-sm text-on-surface inline-flex items-center gap-1 font-medium">
                                  <span className="bg-tertiary h-1.5 w-1.5 rounded-full"></span>
                                  VNPT Thanh Hóa
                                </span>
                              </td>
                              <td className="font-code-num px-3 py-3 text-center font-bold">20 chiếc</td>
                              <td className="px-3 py-3 text-right">
                                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-800">
                                  Đã niêm phong
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-surface-container-low transition-colors">
                              <td className="font-code-num text-label-md text-secondary px-3 py-3 font-semibold">
                                #ACC-NET-HUB-03
                              </td>
                              <td className="px-3 py-3">
                                <div className="font-label-md text-label-md text-on-surface font-medium">
                                  Bộ chuyển mạch Switch Cisco 24 Port Gigabit + 300m Dây Mạng CAT6
                                </div>
                                <div className="text-secondary font-code-num text-[11px]">
                                  Vật tư phụ trợ thi công phòng lab
                                </div>
                              </td>
                              <td className="px-3 py-3">
                                <span className="font-label-sm text-label-sm text-secondary font-medium">
                                  Quỹ Khuyến Học VN
                                </span>
                              </td>
                              <td className="font-code-num px-3 py-3 text-center font-bold">01 bộ</td>
                              <td className="px-3 py-3 text-right">
                                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-800">
                                  Đã niêm phong
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Action Panel: Emergency Incident Reporting (RBAC Controlled) */}
                    <div className="rounded-xl bg-gradient-to-r from-red-50 to-orange-50 p-5 shadow-sm">
                      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                        <div className="flex items-start gap-3">
                          <div className="bg-error text-on-error flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm">
                            <span className="material-symbols-outlined text-[24px]">crisis_alert</span>
                          </div>
                          <div>
                            <h3 className="font-headline-sm text-headline-sm text-error">
                              Báo Cáo Sự Cố Chuyến Đi (Chuyển Trạng Thái FAILED)
                            </h3>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                              Khi kích hoạt, vận đơn sẽ <strong>ngay lập tức chuyển FAILED</strong> để kích hoạt đội cứu
                              hộ phản ứng nhanh. Theo DOCUMENT_53: Quyền này thuộc duy nhất TNV áp tải; Kho và Admin chỉ
                              được xem ghi chú, không có quyền sửa đổi hộ.
                            </p>
                          </div>
                        </div>
                        <button
                          className="bg-error hover:bg-error/90 text-on-error font-label-md text-label-md flex shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 shadow-sm transition-all"
                          onClick={handleOpenIncidentModal}
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">report_problem</span>
                          Báo Sự Cố Khẩn Cấp
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: 5 / 12 */}
                  <div className="flex flex-col gap-6 lg:col-span-5">
                    {/* Destination School Profile Card */}
                    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                      <div className="flex items-center justify-between pb-3">
                        <span className="font-label-sm text-label-sm text-secondary font-semibold tracking-wider uppercase">
                          Đích Đến Tiếp Nhận
                        </span>
                        <span className="bg-primary-fixed text-primary font-code-num text-label-sm rounded px-2 py-0.5 font-semibold">
                          Mã Trường: THCS-ML-01
                        </span>
                      </div>
                      <div className="mt-2">
                        <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                          Trường PTDTBT THCS Mường Lát
                        </h2>
                        <p className="font-body-sm text-body-sm text-secondary mt-1.5 flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-primary shrink-0 text-[18px]">
                            location_on
                          </span>
                          <span>
                            Bản Chiềng Cồng, Xã Tam Chung, Huyện Mường Lát, Tỉnh Thanh Hóa (Cách trung tâm huyện 12km)
                          </span>
                        </p>
                      </div>

                      <div className="bg-surface-container-low mt-4 flex items-center justify-between rounded-lg p-3.5">
                        <div className="flex items-center gap-3">
                          <div className="bg-surface-container-high text-primary flex h-10 w-10 items-center justify-center rounded-full font-bold">
                            HT
                          </div>
                          <div>
                            <div className="font-label-md text-label-md text-on-surface font-semibold">
                              Thầy Hà Văn Tiêu
                            </div>
                            <div className="font-body-sm text-body-sm text-secondary">Hiệu Trưởng Tiếp Nhận</div>
                          </div>
                        </div>
                        <a
                          href="tel:0984219888"
                          className="bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md flex items-center gap-1 rounded-lg p-2 shadow-sm transition-all"
                        >
                          <span className="material-symbols-outlined text-[18px]">call</span>
                          Gọi
                        </a>
                      </div>

                      {/* School Site Photo Reference */}
                      <div className="bg-surface-container relative mt-4 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                          data-alt="Vietnamese ethnic minority boarding school in mountainous Muong Lat Thanh Hoa surrounded by mist and green mountains, modern rural school building with children waiting happily in traditional attire"
                          className="h-36 w-full object-cover"
                        />
                        <div className="bg-inverse-surface/80 text-inverse-on-surface text-label-sm font-label-sm absolute bottom-2 left-2 rounded px-2.5 py-1 backdrop-blur-sm">
                          Điểm trường chính: 420 học sinh nội trú
                        </div>
                      </div>
                    </div>

                    {/* Proof of Delivery (PoD) Section with strict RBAC Lock */}
                    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                      <div className="flex items-center justify-between pb-3">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[22px]">
                            assignment_turned_in
                          </span>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface">
                            Minh Chứng Bàn Giao (PoD)
                          </h3>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-800">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500"></span>
                          Chờ Tiếp Cận Đích
                        </span>
                      </div>

                      {/* RBAC Crucial Note */}
                      <div className="font-body-sm text-body-sm text-primary mb-4 flex items-start gap-2 rounded-lg bg-blue-50/70 p-3">
                        <span className="material-symbols-outlined text-primary shrink-0 text-[18px]">policy</span>
                        <div>
                          <strong className="font-semibold">Ràng buộc RBAC DOCUMENT_53:</strong>
                          Chỉ được bấm "Gửi Báo Cáo Nghiệm Thu Hoàn Thành" sau khi Nhà trường hoàn tất ký số/ký tay.
                          Tình nguyện viên <em>tuyệt đối không được chỉnh sửa chữ ký của nhà trường</em>.
                        </div>
                      </div>

                      {/* School Signature Status (Read-Only to Volunteer) */}
                      <div className="bg-surface-container-low mb-4 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-label-sm text-secondary font-semibold tracking-wider uppercase">
                            1. Chữ Ký Số Nhà Trường (Read-Only)
                          </span>
                          <span className="font-code-num text-label-sm rounded bg-amber-100/60 px-2 py-0.5 text-amber-700">
                            Chờ ký khi xe tới
                          </span>
                        </div>
                        <div className="bg-surface-container-lowest border-outline-variant/60 mt-3 flex flex-col items-center justify-center rounded border border-dashed p-3 py-4 text-center">
                          <span className="material-symbols-outlined text-outline text-[32px]">draw</span>
                          <span className="font-body-sm text-body-sm text-secondary mt-1">
                            Biên bản sẽ hiển thị ký số điện tử của Thầy Hà Văn Tiêu
                          </span>
                          <span className="text-outline text-[11px] italic">
                            Khóa bảo mật: TNV không có quyền thao tác vùng này
                          </span>
                        </div>
                      </div>

                      {/* Volunteer PoD Photo Upload & Notes */}
                      <div className="space-y-4">
                        <div>
                          <span className="font-label-sm text-label-sm text-secondary mb-2 block font-semibold tracking-wider uppercase">
                            2. Ảnh Thực Địa & Tọa Độ GPS Watermark
                          </span>
                          <div className="border-outline-variant/60 hover:border-primary bg-surface flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed p-5 text-center transition-colors">
                            <div className="flex flex-col items-center">
                              <span className="material-symbols-outlined text-primary text-[32px]">add_a_photo</span>
                              <span className="font-label-md text-label-md text-on-surface mt-1 font-medium">
                                Chụp ảnh bàn giao tại trường
                              </span>
                              <span className="font-body-sm text-body-sm text-secondary">
                                Tự động gắn tem toạ độ (Timestamp + GPS + Seal ID)
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="handover-notes"
                            className="font-label-sm text-label-sm text-secondary mb-1.5 block font-semibold tracking-wider uppercase"
                          >
                            3. Ghi Chú Của Đội Áp Tải
                          </label>
                          <textarea
                            id="handover-notes"
                            rows="3"
                            className="bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:ring-primary placeholder:text-outline w-full resize-none rounded-lg p-3 transition-all outline-none focus:ring-2"
                            placeholder="Ghi nhận tình trạng thùng máy, hỗ trợ trường cắm điện kiểm tra ban đầu..."
                          ></textarea>
                        </div>

                        <button
                          type="button"
                          disabled
                          title="Cần có chữ ký của nhà trường để kích hoạt"
                          className="bg-surface-container-high text-outline font-label-md text-label-md flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg py-3 transition-all"
                        >
                          <span className="material-symbols-outlined text-[20px]">task_alt</span>
                          <span>Nghiệm Thu & Hoàn Thành Vận Đơn (Chờ Trường Ký)</span>
                        </button>
                      </div>
                    </div>

                    {/* Volunteer RBAC Rule Reminder Box */}
                    <div className="bg-surface-container-low rounded-xl p-5 shadow-sm">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">shield</span>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface">
                          Quy Chuẩn Phân Quyền TNV (DOCUMENT_53)
                        </h4>
                      </div>
                      <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined shrink-0 text-[18px] text-emerald-600">
                            check_circle
                          </span>
                          <span>
                            <strong>Được phép:</strong> Báo cáo sự cố khẩn cấp trên tuyến; hệ thống lập tức đánh dấu
                            FAILED chuyến xe mà không cần Admin duyệt.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined shrink-0 text-[18px] text-emerald-600">
                            check_circle
                          </span>
                          <span>
                            <strong>Được phép:</strong> Tự động tích lũy{" "}
                            <strong className="text-primary font-bold">+16 giờ công</strong> vào hồ sơ cá nhân ngay khi
                            biên bản PoD hoàn tất.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-error shrink-0 text-[18px]">cancel</span>
                          <span>
                            <strong>Nghiêm cấm:</strong> Không tự tạo mã vận đơn mới, không can thiệp kho, không giả mạo
                            chữ ký của điểm trường.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Incident Reporting Modal */}
                {isIncidentModalOpen && (
                  <div
                    id="incident-modal"
                    className="bg-inverse-surface/60 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                  >
                    <div className="bg-surface-container-lowest animate-in fade-in zoom-in-95 flex w-full max-w-lg flex-col gap-4 rounded-2xl p-6 shadow-2xl duration-200">
                      <div className="flex items-center justify-between pb-2">
                        <div className="text-error flex items-center gap-2">
                          <span className="material-symbols-outlined text-[26px]">warning</span>
                          <h3 className="font-headline-md text-headline-md text-error font-bold">
                            Khai Báo Sự Cố Chuyến Xe
                          </h3>
                        </div>
                        <button
                          type="button"
                          className="text-secondary hover:text-on-surface hover:bg-surface-container rounded-lg p-1"
                          onClick={handleCloseIncidentModal}
                        >
                          <span className="material-symbols-outlined text-[20px]">close</span>
                        </button>
                      </div>

                      <div className="bg-error-container text-on-error-container text-body-sm font-body-sm rounded-lg p-3">
                        <strong>CẢNH BÁO QUAN TRỌNG:</strong> Khi bạn bấm "Gửi Khẩn Cấp", mã vận đơn{" "}
                        <strong>#WB-2024-NW08</strong> sẽ ngay lập tức được hệ thống gắn nhãn{" "}
                        <span className="font-code-num font-bold underline">FAILED</span>. Lệnh điều phối xe dự phòng sẽ
                        tự động kích hoạt.
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label
                            htmlFor="incident-type"
                            className="font-label-md text-label-md text-on-surface mb-1 block font-semibold"
                          >
                            Loại Sự Cố Thực Địa
                          </label>
                          <select
                            id="incident-type"
                            className="bg-surface-container-low text-on-surface text-body-md font-body-md focus:ring-error w-full rounded-lg p-2.5 outline-none focus:ring-2"
                            value={incidentType}
                            onChange={(e) => setIncidentType(e.target.value)}
                          >
                            <option>Sạt lở đất đá chắn ngang đường đèo (Bất khả kháng)</option>
                            <option>Hỏng hóc động cơ / Lật xe / Va chạm giao thông</option>
                            <option>Hư hỏng niêm phong kiện hàng (Seal RFID bị vỡ)</option>
                            <option>Thời tiết giông lốc / Lũ quét cô lập điểm trường</option>
                            <option>Vấn đề sức khỏe của thành viên đoàn áp tải</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="incident-reason"
                            className="font-label-md text-label-md text-on-surface mb-1 block font-semibold"
                          >
                            Mô Tả Chi Tiết & Tọa Độ Hiện Tại
                          </label>
                          <textarea
                            id="incident-reason"
                            className="bg-surface-container-low text-on-surface text-body-sm font-body-sm focus:ring-error w-full resize-none rounded-lg p-2.5 outline-none focus:ring-2"
                            placeholder="Ghi rõ vị trí sạt lở km số mấy, tình trạng 50 kiện máy tính và yêu cầu cứu hộ cụ thể..."
                            rows="3"
                            value={incidentReason}
                            onChange={(e) => setIncidentReason(e.target.value)}
                          ></textarea>
                        </div>
                      </div>

                      <div className="flex items-center justify-end gap-3 pt-2">
                        <button
                          type="button"
                          className="bg-surface-container text-secondary hover:text-on-surface font-label-md text-label-md rounded-lg px-4 py-2"
                          onClick={handleCloseIncidentModal}
                        >
                          Hủy bỏ
                        </button>
                        <button
                          type="button"
                          className="bg-error hover:bg-error/90 text-on-error font-label-md text-label-md flex items-center gap-1.5 rounded-lg px-5 py-2 shadow-sm"
                          onClick={handleSubmitIncident}
                        >
                          <span className="material-symbols-outlined text-[18px]">crisis_alert</span>
                          Gửi Khẩn Cấp (Chuyển FAILED)
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
