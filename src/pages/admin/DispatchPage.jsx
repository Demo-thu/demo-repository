import React, { useState, useRef } from "react";

const journeyDatabase = {
  "#TN-NW-042": {
    code: "#TN-NW-042",
    logCode: "#LOG-9821",
    dispatchCode: "LỆNH ĐIỀU PHỐI #VN-LOG-9821",
    routeTitle: "Tuyến liên tỉnh: Hà Nội — Điện Biên",
    totalKm: "628 km",
    passedKm: "Đã qua 495 km (78%)",
    progressPercent: 78,
    departure: "05:00 - 18/10",
    departurePlace: "Kho Tổng Cầu Giấy, HN",
    goodsCount: "50 Thiết bị",
    goodsDesc: "Laptop & Hạ tầng mạng",
    schoolName: "Trường Tiểu học Xín Thầu - Xã Xín Thầu, H. Mường Nhé, Điện Biên",
    currentLocation: "Km 368 + 200, Đèo Pha Đin (Độ cao 1,000m)",
    vehicleSpeed: "42 km/h",
    driverName: "Anh Lê Hoàng Long",
    driverTeam: "Đội xe Tình nguyện Tây Bắc",
    driverPhone: "0988.xxx.123",
    vehicleType: "Ford Ranger (2 Cầu)",
    licensePlate: "29C-882.10",
  },
};

export default function DispatchPage() {
  const [showPodModal, setShowPodModal] = useState(false);
  const [showUrgentModal, setShowUrgentModal] = useState(false);
  const [searchValue, setSearchValue] = useState("#TN-NW-042");
  const [statusMsg, setStatusMsg] = useState("");
  const data = journeyDatabase["#TN-NW-042"];

  const handleSearch = (e) => {
    e.preventDefault();
    setStatusMsg(`Đã tìm thấy mã: ${searchValue}`);
    setTimeout(() => setStatusMsg(""), 3000);
  };

  const handleEmergencySubmit = (e) => {
    e.preventDefault();
    alert(
      "Tín hiệu khẩn cấp đã được phát thành công kèm tọa độ GPS vệ tinh! Cán bộ điều phối sẽ liên hệ lái xe trong 60 giây.",
    );
    setShowUrgentModal(false);
  };

  return (
    <main className="bg-surface px-gutter-desktop py-space-lg min-h-screen w-full flex-1 pt-0">
      <div className="flex w-full flex-col">
        {/* Top Search Banner */}
        <div className="bg-surface-container-lowest p-space-md mb-space-lg border-primary/20 rounded-xl border shadow-sm">
          <div className="gap-space-sm mb-space-sm pb-space-xs border-surface-container-high flex flex-col justify-between border-b md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-on-primary flex h-9 w-9 items-center justify-center rounded-lg shadow-xs">
                <span className="material-symbols-outlined text-[20px]">travel_explore</span>
              </div>
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Tra cứu mã hành trình vận chuyển
                </h2>
                <span className="font-body-sm text-body-sm text-secondary">
                  Nhập mã vận đơn hoặc chọn nhanh chuyến hàng để đồng bộ tiến trình giám sát trực tiếp
                </span>
              </div>
            </div>
            <div className="bg-tertiary/10 text-tertiary font-label-sm text-label-sm hidden items-center gap-1.5 rounded px-2.5 py-1 font-semibold md:flex">
              <span className="bg-tertiary h-2 w-2 animate-pulse rounded-full"></span>
              <span>{statusMsg || "Dữ liệu trực tiếp: Trực tuyến"}</span>
            </div>
          </div>
          <form className="flex w-full flex-col items-center gap-2 sm:flex-row" onSubmit={handleSearch}>
            <div className="relative flex w-full flex-1 items-center">
              <span className="material-symbols-outlined text-primary absolute left-3 text-[20px]">
                qr_code_scanner
              </span>
              <input
                type="text"
                className="pr-space-md bg-surface-container-low font-code-num text-body-md text-on-surface placeholder:text-outline border-outline-variant/30 focus:bg-surface-container-lowest focus:ring-primary/20 w-full rounded-lg border py-2.5 pl-10 transition-all focus:ring-2 focus:outline-none"
                placeholder="Nhập mã hành trình (vd: #TN-NW-042, #LOG-9821)..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="px-space-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg py-2.5 font-semibold shadow-xs transition-all sm:w-auto"
            >
              <span className="material-symbols-outlined text-[18px]">search</span>
              <span>Tra cứu</span>
            </button>
          </form>
        </div>

        {/* Operational Banner */}
        <div className="bg-surface-container-lowest p-space-lg mb-space-lg rounded-xl shadow-sm">
          <div className="gap-space-md flex flex-col justify-between lg:flex-row lg:items-center">
            <div className="flex flex-col gap-1">
              <div className="gap-space-xs flex items-center">
                <span className="bg-primary/10 text-primary font-label-sm text-label-sm inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5">
                  <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full"></span>
                  {data.dispatchCode}
                </span>
                <span className="text-outline text-body-sm">•</span>
                <span className="font-code-num text-body-sm text-secondary">{data.routeTitle}</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface">
                Tuyến đường Vận chuyển &amp; Giám sát Chuyến hàng
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Hành trình chuyên chở trang thiết bị công nghệ giáo dục tiếp sức điểm trường vùng cao biên giới Xín
                Thầu, Huyện Mường Nhé.
              </p>
            </div>
            <div className="gap-space-sm flex flex-wrap items-center">
              <a
                className="px-space-md bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2 rounded-lg py-2.5 transition-colors"
                href="tel:19006886"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">support_agent</span>
                Tổng đài Hỗ trợ Tuyến
              </a>
              <button
                className="px-space-md bg-error text-on-error hover:bg-error/90 font-label-md text-label-md flex items-center gap-2 rounded-lg py-2.5 shadow-sm transition-all"
                onClick={() => setShowUrgentModal(true)}
              >
                <span className="material-symbols-outlined text-[18px]">warning</span>
                Báo cáo sự cố khẩn cấp
              </button>
            </div>
          </div>

          {/* Quick Meta Ribbon */}
          <div className="gap-space-md mt-space-lg pt-space-md bg-surface-container-low/50 p-space-md grid grid-cols-2 rounded-lg md:grid-cols-4">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-secondary uppercase">Tổng cự ly</span>
              <span className="font-headline-sm text-headline-sm text-on-surface">{data.totalKm}</span>
              <span className="font-body-sm text-body-sm text-secondary">{data.passedKm}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-secondary uppercase">Khởi hành</span>
              <span className="font-headline-sm text-headline-sm text-on-surface">{data.departure}</span>
              <span className="font-body-sm text-body-sm text-secondary">{data.departurePlace}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-secondary uppercase">Hàng hóa bàn giao</span>
              <span className="font-headline-sm text-headline-sm text-tertiary font-bold">{data.goodsCount}</span>
              <span className="font-body-sm text-body-sm text-secondary">{data.goodsDesc}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-secondary uppercase">Mức độ an toàn</span>
              <span className="font-headline-sm text-headline-sm text-primary flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">check_circle</span> 100% An toàn
              </span>
              <span className="font-body-sm text-body-sm text-secondary">Niêm phong cảm biến QR-Tag</span>
            </div>
          </div>
        </div>

        {/* Primary 2-Column Split */}
        <div className="gap-space-lg grid grid-cols-1 items-start lg:grid-cols-12">
          {/* LEFT COLUMN (8 Cols) */}
          <div className="gap-space-lg flex flex-col lg:col-span-8">
            {/* Timeline Card */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
              <div className="pb-space-md mb-space-md flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">alt_route</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">Tiến trình Lộ trình Vận chuyển</h2>
                </div>
                <span className="font-code-num text-label-sm text-secondary bg-surface-container rounded px-2.5 py-1">
                  Cập nhật GPS: 3 phút trước
                </span>
              </div>

              {/* Tracking Banner */}
              <div className="mb-space-md p-space-sm bg-surface-container-low border-surface-container-high gap-space-sm flex flex-col items-start justify-between rounded-xl border md:flex-row md:items-center">
                <div className="gap-space-sm flex items-center">
                  <div className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[20px]">tag</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                        Mã tra cứu hành trình:
                      </span>
                      <span className="font-code-num text-body-sm text-primary bg-primary/10 rounded px-2 py-0.5 font-bold">
                        #TN-NW-042 / #LOG-9821
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Đơn vị giám sát: Trung tâm Điều phối Cứu trợ Quốc gia
                    </span>
                  </div>
                </div>
                <div className="gap-space-sm bg-surface-container-lowest px-space-sm border-outline-variant/30 flex items-center rounded-lg border py-1.5">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">school</span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-secondary text-[10px] font-bold uppercase">
                      Trường tiếp nhận:
                    </span>
                    <span className="font-label-md text-label-md text-on-surface font-semibold">{data.schoolName}</span>
                  </div>
                </div>
              </div>

              {/* GPS Map */}
              <div className="mb-space-lg border-surface-container-high group relative overflow-hidden rounded-xl border shadow-sm">
                <div className="bg-surface-container-high relative h-56 w-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    alt="Bản đồ vệ tinh địa hình tuyến đường Hà Nội - Đèo Pha Đin - Mường Nhé"
                    src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80"
                  />
                  <div className="from-inverse-surface/80 via-inverse-surface/30 absolute inset-0 bg-gradient-to-t to-transparent"></div>

                  {/* Top floating status */}
                  <div className="pointer-events-none absolute top-3 right-3 left-3 flex items-center justify-between">
                    <div className="bg-surface-container-lowest/90 flex items-center gap-2 rounded-full px-3 py-1 shadow-sm backdrop-blur-md">
                      <span className="bg-tertiary h-2 w-2 animate-ping rounded-full"></span>
                      <span className="material-symbols-outlined text-tertiary text-[16px]">satellite_alt</span>
                      <span className="font-label-sm text-label-sm text-tertiary font-bold">
                        Tín hiệu vệ tinh Iridium ổn định
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest/90 flex items-center gap-2 rounded-full px-3 py-1 shadow-sm backdrop-blur-md">
                      <span className="font-label-sm text-label-sm text-secondary">Vận tốc:</span>
                      <span className="font-code-num text-label-sm text-on-surface font-bold">{data.vehicleSpeed}</span>
                    </div>
                  </div>

                  {/* Live GPS Marker */}
                  <div className="absolute top-1/2 left-2/3 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                    <div className="relative flex items-center justify-center">
                      <span className="bg-primary/30 absolute h-10 w-10 animate-ping rounded-full"></span>
                      <div className="bg-primary text-on-primary border-surface-container-lowest flex h-8 w-8 items-center justify-center rounded-full border-2 shadow-lg">
                        <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                      </div>
                    </div>
                    <div className="bg-inverse-surface/90 text-inverse-on-surface mt-1 rounded border border-white/20 px-2 py-0.5 text-[11px] font-medium whitespace-nowrap shadow-md">
                      Xe {data.licensePlate} (Km 368 + 200, Đèo Pha Đin)
                    </div>
                  </div>

                  {/* Bottom telemetry */}
                  <div className="text-inverse-on-surface absolute right-3 bottom-3 left-3 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                    <div className="font-label-sm text-label-sm bg-inverse-surface/70 flex items-center gap-2 rounded-lg px-3 py-1 backdrop-blur-sm">
                      <span className="material-symbols-outlined text-primary-fixed-dim text-[16px]">pin_drop</span>
                      <span>
                        Hành trình: <strong className="text-primary-fixed">Hà Nội (0 km)</strong> →{" "}
                        <span className="text-tertiary-fixed font-bold">Pha Đin (495 km)</span> →{" "}
                        <strong className="text-primary-fixed">Mường Nhé (628 km)</strong>
                      </span>
                    </div>
                    <div className="font-label-sm text-inverse-on-surface/80 bg-inverse-surface/70 rounded px-2 py-1 text-[11px]">
                      Độ cao: 1,000m • Thời tiết: Nhiều sương, đường trơn
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Stages Timeline */}
              <div className="space-y-space-xl relative pl-6">
                <div className="bg-surface-container-highest absolute top-3 bottom-3 left-[19px] w-0.5"></div>

                {/* Stage 1 */}
                <div className="gap-space-md relative flex items-start">
                  <div className="bg-tertiary text-on-tertiary z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">inventory</span>
                  </div>
                  <div className="bg-surface-container-low p-space-md flex-1 rounded-lg">
                    <div className="mb-1 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-label-sm text-tertiary font-bold tracking-wider">
                          CHẶNG 1
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">1. Đang chuẩn bị</h3>
                      </div>
                      <span className="bg-tertiary/10 text-tertiary font-label-sm text-label-sm rounded px-2 py-0.5 font-semibold">
                        ĐÃ HOÀN THÀNH
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Kiểm định kỹ thuật chuyên sâu thiết bị, đóng thùng chống ẩm 3 lớp tiêu chuẩn IP65 và chằng buộc cố
                      định an toàn trên sàn xe tại Kho Trung tâm Hà Nội.
                    </p>
                    <div className="mt-space-sm pt-space-xs text-secondary font-code-num text-body-sm flex flex-wrap gap-x-4 gap-y-1">
                      <span>
                        <strong className="text-on-surface">Kỹ thuật trưởng:</strong> KS. Trần Quốc Hùng
                      </span>
                      <span>
                        <strong className="text-on-surface">Mã niêm phong:</strong> SEAL-HN-8902
                      </span>
                      <span>
                        <strong className="text-on-surface">Hoàn tất:</strong> 04:30 18/10/2024
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="gap-space-md relative flex items-start">
                  <div className="bg-tertiary text-on-tertiary z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">output</span>
                  </div>
                  <div className="bg-surface-container-low p-space-md flex-1 rounded-lg">
                    <div className="mb-1 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-label-sm text-tertiary font-bold tracking-wider">
                          CHẶNG 2
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">2. Xuất kho</h3>
                      </div>
                      <span className="bg-tertiary/10 text-tertiary font-label-sm text-label-sm rounded px-2 py-0.5 font-semibold">
                        ĐÃ HOÀN THÀNH
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Ký số xác nhận biên bản xuất kho điều phối{" "}
                      <span className="font-code-num text-primary font-semibold">#XK-HN-0842</span>. Xe nhận bàn giao
                      hàng hóa nguyên đai nguyên kiện và xuất phát đúng 05:00 sáng.
                    </p>
                    <div className="mt-space-sm pt-space-xs text-secondary font-code-num text-body-sm flex flex-wrap gap-x-4 gap-y-1">
                      <span>
                        <strong className="text-on-surface">Giám đốc Kho xác nhận:</strong> Vũ Hoàng Nam
                      </span>
                      <span>
                        <strong className="text-on-surface">Giờ lăn bánh:</strong> 05:00 18/10/2024
                      </span>
                      <span>
                        <strong className="text-on-surface">Trạng thái xe:</strong> Đầy tải 1.4 tấn
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stage 3: Active */}
                <div className="gap-space-md relative flex items-start">
                  <div className="bg-primary text-on-primary ring-primary/20 z-10 flex h-8 w-8 shrink-0 animate-bounce items-center justify-center rounded-full shadow-md ring-4">
                    <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  </div>
                  <div className="bg-surface-container p-space-md flex-1 rounded-lg shadow-sm">
                    <div className="mb-1 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-label-sm text-primary font-bold tracking-wider">
                          CHẶNG 3
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">
                          3. Đang trên đường vận chuyển
                        </h3>
                      </div>
                      <span className="bg-primary text-on-primary font-label-sm text-label-sm flex w-fit items-center gap-1.5 rounded-full px-2.5 py-0.5 font-semibold">
                        <span className="bg-surface h-1.5 w-1.5 animate-ping rounded-full"></span> ĐANG DIỄN RA
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface">
                      Xe tải chuyên dụng địa hình đang di chuyển an toàn qua <strong>Đèo Pha Đin / Quốc lộ 6</strong>.
                      Dữ liệu cảm biến rung chấn thiết bị và GPS thời gian thực được đồng bộ liên tục về Trung tâm Điều
                      hành Quốc gia.
                    </p>
                    <div className="mt-space-md p-space-sm bg-surface-container-lowest flex flex-col gap-2 rounded-lg">
                      <div className="font-label-sm text-label-sm text-secondary flex items-center justify-between">
                        <span className="text-primary flex items-center gap-1 font-semibold">
                          <span className="material-symbols-outlined text-[16px]">location_on</span>
                          Vị trí hiện tại: {data.currentLocation}
                        </span>
                        <span className="font-code-num text-on-surface">Vận tốc: {data.vehicleSpeed}</span>
                      </div>
                      <div className="bg-surface-container-high h-2 w-full overflow-hidden rounded-full">
                        <div
                          className="bg-primary h-full rounded-full transition-all duration-500"
                          style={{ width: `${data.progressPercent}%` }}
                        ></div>
                      </div>
                      <div className="text-body-sm font-code-num text-secondary flex justify-between pt-0.5">
                        <span>Hà Nội (0 km)</span>
                        <span className="text-primary font-bold">Vị trí xe (495 km)</span>
                        <span>Mường Nhé (628 km)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="gap-space-md relative flex items-start">
                  <div className="bg-surface-container-highest text-secondary z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                  <div className="bg-surface-container-low p-space-md flex-1 rounded-lg">
                    <div className="mb-1 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-label-sm text-secondary font-bold tracking-wider">
                          CHẶNG 4
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">4. Hoàn thành</h3>
                      </div>
                      <span className="bg-surface-container-high text-secondary font-label-sm text-label-sm rounded px-2 py-0.5 font-semibold">
                        ĐIỂM ĐÍCH
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Đích đến: <strong>Trường Tiểu học Xín Thầu</strong>, Xã Xín Thầu, Huyện Mường Nhé, Tỉnh Điện Biên.
                      Đội tiền trạm và Ban Giám hiệu nhà trường đã sẵn sàng phòng máy để tiếp nhận kiểm thử.
                    </p>
                    <div className="mt-space-sm text-secondary font-body-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary text-[16px]">check_circle</span>
                      <span>Thời gian dự kiến hoàn tất lắp đặt &amp; ký biên bản bàn giao: 16:30 cùng ngày.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PoD Button */}
            <div>
              <button
                className="bg-primary text-on-primary hover:bg-primary-container font-label-md mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 shadow-sm transition-all"
                onClick={() => setShowPodModal(true)}
              >
                <span className="material-symbols-outlined text-[22px]">verified</span>
                <span className="font-semibold">Xem Minh chứng Bàn giao &amp; Biên bản Ký số, Đóng dấu (PoD)</span>
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN (4 Cols) */}
          <div className="gap-space-lg flex flex-col lg:col-span-4">
            {/* Driver Info Card */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
              <div className="pb-space-sm mb-space-sm flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">badge</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Tình nguyện viên Vận chuyển</h3>
                </div>
                <span className="bg-tertiary/10 text-tertiary font-label-sm text-label-sm rounded px-2 py-0.5 font-semibold">
                  ONLINE
                </span>
              </div>
              <div className="gap-space-md p-space-sm bg-surface-container-low mb-space-md flex items-center rounded-lg">
                <div className="bg-primary/20 ring-primary flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full ring-2">
                  <img
                    className="h-full w-full object-cover"
                    alt="Tình nguyện viên lái xe Lê Hoàng Long"
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                  />
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface truncate font-bold">
                    {data.driverName}
                  </span>
                  <span className="font-label-sm text-label-sm text-primary font-semibold">{data.driverTeam}</span>
                  <span className="font-body-sm text-body-sm text-secondary">32 chuyến vùng cao an toàn</span>
                </div>
              </div>
              <div className="space-y-space-sm font-body-sm text-body-sm">
                {[
                  ["phone_iphone", "Số điện thoại", data.driverPhone],
                  ["directions_car", "Phương tiện", data.vehicleType],
                  ["pin", "Biển kiểm soát", data.licensePlate],
                ].map(([icon, label, value]) => (
                  <div
                    key={label}
                    className="bg-surface-container-low/40 flex items-center justify-between rounded px-2 py-1"
                  >
                    <span className="text-secondary flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-[16px]">{icon}</span> {label}
                    </span>
                    <span className="font-code-num text-on-surface font-semibold">{value}</span>
                  </div>
                ))}
                <div className="bg-surface-container-low/40 flex items-center justify-between rounded px-2 py-1">
                  <span className="text-secondary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-tertiary text-[16px]">satellite_alt</span> Định vị
                    GPS Vệ tinh
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1 font-bold">
                    <span className="bg-tertiary h-2 w-2 rounded-full"></span> Iridium Active
                  </span>
                </div>
              </div>
              <div className="gap-space-sm mt-space-md pt-space-xs grid grid-cols-2">
                <a
                  className="px-space-sm bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md flex items-center justify-center gap-1.5 rounded-lg py-2 transition-colors"
                  href="tel:0988000123"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span> Gọi trực tiếp
                </a>
                <button className="px-space-sm bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md flex items-center justify-center gap-1.5 rounded-lg py-2 transition-colors">
                  <span className="material-symbols-outlined text-[16px]">chat</span> Nhắn Zalo Điều phối
                </button>
              </div>
            </div>

            {/* Technical Stations */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
              <div className="pb-space-sm mb-space-sm flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">home_repair_service</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Điểm trạm Hỗ trợ Kỹ thuật Tuyến</h3>
                </div>
                <span className="font-label-sm text-label-sm text-secondary">3 Trạm sẵn sàng</span>
              </div>
              <p className="font-body-sm text-body-sm text-secondary mb-space-md">
                Các cơ sở đối tác cung cấp dịch vụ cứu hộ lốp, nạp ắc-quy và kiểm tra va đập kiện hàng:
              </p>
              <div className="space-y-space-sm">
                <div className="p-space-sm bg-surface-container-low hover:bg-surface-container rounded-lg transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      Trạm Kỹ thuật 01 - TP. Sơn La
                    </span>
                    <span className="bg-tertiary/10 text-tertiary font-code-num rounded px-2 py-0.5 text-[11px] font-semibold">
                      Đã qua
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5">Số 120 Đường Chu Văn An, TP. Sơn La</p>
                  <div className="font-body-sm text-secondary mt-2 flex items-center justify-between pt-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary text-[14px]">person</span> Anh Vũ Tuấn
                    </span>
                    <span className="font-code-num text-on-surface">0912.441.xxx</span>
                  </div>
                </div>
                <div className="p-space-sm bg-surface-container rounded-lg shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Trạm Kỹ thuật 02 - Tuần Giáo
                    </span>
                    <span className="bg-primary text-on-primary font-code-num rounded px-2 py-0.5 text-[11px] font-bold">
                      Trạm tiếp theo
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Ngã 3 Tuần Giáo (Chân đèo Pha Đin)
                  </p>
                  <div className="font-body-sm mt-2 flex items-center justify-between pt-1">
                    <span className="text-on-surface flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary text-[14px]">person</span> Anh Lò Văn Mười
                    </span>
                    <a className="font-code-num text-primary font-bold hover:underline" href="tel:0978332111">
                      0978.332.xxx
                    </a>
                  </div>
                </div>
                <div className="p-space-sm bg-surface-container-low hover:bg-surface-container rounded-lg transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      Trạm Cứu trợ 03 - TX. Mường Lay
                    </span>
                    <span className="bg-surface-container-high text-secondary font-code-num rounded px-2 py-0.5 text-[11px]">
                      Chờ kết nối
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5">
                    Khu 4, Phường Na Lay, Thị xã Mường Lay
                  </p>
                  <div className="font-body-sm text-secondary mt-2 flex items-center justify-between pt-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary text-[14px]">person</span> Anh Nguyễn Văn
                      Cường
                    </span>
                    <span className="font-code-num text-on-surface">0945.118.xxx</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Routes */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
              <div className="pb-space-sm mb-space-sm flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">calendar_month</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Các Chuyến Hàng Tiếp Theo</h3>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">T10 / 2024</span>
              </div>
              <div className="space-y-space-sm">
                <div className="p-space-sm bg-surface-container-low gap-space-sm flex items-start rounded-lg">
                  <div className="bg-primary-fixed flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded">
                    <span className="font-label-sm text-on-primary-fixed text-[11px] leading-none font-bold uppercase">
                      T10
                    </span>
                    <span className="font-headline-sm text-primary mt-0.5 text-[16px] leading-none font-extrabold">
                      22
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-label-md text-label-md text-on-surface block truncate font-bold">
                      Tuyến: Hà Giang - Mèo Vạc
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary block">
                      Điểm đến: Tiểu học Sủng Trà (45 Máy)
                    </span>
                    <span className="font-code-num text-tertiary text-[11px]">Đã xếp 2 xe 7 chỗ &amp; 1 bán tải</span>
                  </div>
                </div>
                <div className="p-space-sm bg-surface-container-low gap-space-sm flex items-start rounded-lg">
                  <div className="bg-surface-container-highest flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded">
                    <span className="font-label-sm text-secondary text-[11px] leading-none font-bold uppercase">
                      T10
                    </span>
                    <span className="font-headline-sm text-secondary mt-0.5 text-[16px] leading-none font-extrabold">
                      26
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-label-md text-label-md text-on-surface block truncate font-bold">
                      Tuyến: Cao Bằng - Bảo Lạc
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary block">
                      Điểm đến: THCS Hồng An (35 Máy)
                    </span>
                    <span className="font-code-num text-secondary text-[11px]">Đang thẩm định danh sách</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PoD Modal */}
        {showPodModal && (
          <div
            className="bg-inverse-surface/50 p-gutter fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowPodModal(false);
            }}
          >
            <div className="bg-surface-container-lowest border-surface-container-high flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border shadow-xl">
              {/* Modal Header */}
              <div className="px-space-lg py-space-md bg-surface-container-low border-surface-container-high flex items-center justify-between border-b">
                <div className="gap-space-sm flex items-center">
                  <div className="bg-tertiary/10 text-tertiary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[24px]">fact_check</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Minh chứng Bàn giao &amp; Biên bản Nghiệm thu
                      </h3>
                      <span className="bg-tertiary/10 text-tertiary font-label-sm text-label-sm flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold">
                        <span className="material-symbols-outlined text-[14px]">verified_user</span> ĐÃ XÁC THỰC BGH
                      </span>
                    </div>
                    <span className="font-code-num text-body-sm text-secondary">
                      Mã lưu trữ: #BB-BG-2024-XINTHAU • Điểm trường Xín Thầu
                    </span>
                  </div>
                </div>
                <button
                  className="text-secondary hover:bg-surface-container hover:text-on-surface cursor-pointer rounded-lg p-1.5 transition-colors"
                  onClick={() => setShowPodModal(false)}
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              {/* Modal Body */}
              <div className="p-space-lg space-y-space-lg overflow-y-auto">
                {/* Summary Stats */}
                <div className="bg-surface-container-low p-space-md rounded-xl">
                  <div className="mb-space-sm flex items-center justify-between">
                    <h4 className="font-label-md text-label-md text-on-surface font-bold tracking-wide uppercase">
                      Tóm tắt số lượng thiết bị theo biên bản
                    </h4>
                    <span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1 font-semibold">
                      <span className="material-symbols-outlined text-[14px]">task_alt</span> 100% Hoạt động tốt
                    </span>
                  </div>
                  <div className="gap-space-md grid grid-cols-1 sm:grid-cols-3">
                    {[
                      ["laptop_mac", "30", "Laptop ThinkPad L580", "primary"],
                      ["wifi_tethering", "20", "Bộ Wifi & Máy chiếu HD", "primary"],
                      ["sentiment_very_satisfied", "142", "Học sinh hưởng lợi", "tertiary"],
                    ].map(([icon, count, label, color]) => (
                      <div
                        key={label}
                        className="bg-surface-container-lowest p-space-sm gap-space-sm flex items-center rounded-lg shadow-sm"
                      >
                        <div
                          className={`h-10 w-10 rounded-lg bg-${color}/10 text-${color} flex shrink-0 items-center justify-center`}
                        >
                          <span className="material-symbols-outlined text-[20px]">{icon}</span>
                        </div>
                        <div className="flex flex-col">
                          <span
                            className={`font-headline-md text-headline-md text-${color === "tertiary" ? "tertiary" : "on-surface"} font-bold`}
                          >
                            {count}
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary">{label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photos */}
                <div>
                  <div className="mb-space-sm flex items-center justify-between">
                    <span className="font-label-md text-label-md text-on-surface flex items-center gap-1.5 font-semibold">
                      <span className="material-symbols-outlined text-primary text-[18px]">photo_library</span>
                      Hình ảnh thực tế bàn giao tại phòng tin học
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary">
                      3 ảnh chụp trực tiếp từ hiện trường
                    </span>
                  </div>
                  <div className="gap-space-md grid grid-cols-1 md:grid-cols-3">
                    {[
                      [
                        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
                        "Học sinh hân hoan mở máy học tin",
                        "18/10/2024 • Phòng máy số 01",
                      ],
                      [
                        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
                        "TNV hướng dẫn học sinh thao tác máy",
                        "18/10/2024 • Điểm trường Trung tâm",
                      ],
                      [
                        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
                        "Kiểm tra kết nối mạng và màn hình",
                        "18/10/2024 • Kiểm nghiệm 100% OK",
                      ],
                    ].map(([src, caption, date]) => (
                      <div
                        key={caption}
                        className="group bg-surface-container-high relative h-48 overflow-hidden rounded-lg shadow-sm"
                      >
                        <img
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          alt={caption}
                          src={src}
                        />
                        <div className="from-inverse-surface/80 absolute inset-0 flex flex-col justify-end bg-gradient-to-t via-transparent to-transparent p-2.5">
                          <span className="font-label-sm text-label-sm text-inverse-on-surface font-medium">
                            {caption}
                          </span>
                          <span className="font-code-num text-inverse-on-surface/80 text-[10px]">{date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Official Document */}
                <div className="bg-surface-container-low p-space-md border-outline-variant/30 relative overflow-hidden rounded-xl border">
                  <div className="pb-space-sm mb-space-sm flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">description</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Biên bản bàn giao số #BB-BG-2024-XINTHAU
                      </span>
                    </div>
                    <button
                      className="bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary font-label-sm text-label-sm flex items-center gap-1 rounded px-2.5 py-1 shadow-xs transition-colors"
                      onClick={() => alert("Đang tải bản PDF có chứng thực số...")}
                    >
                      <span className="material-symbols-outlined text-[16px]">file_download</span> Tải bản PDF gốc
                    </button>
                  </div>
                  <div className="bg-surface-container-lowest p-space-lg border-outline-variant/20 rounded-lg border shadow-sm">
                    <div className="pb-space-sm mb-space-sm text-center">
                      <span className="font-label-sm text-label-sm text-secondary font-bold tracking-widest uppercase">
                        CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                      </span>
                      <p className="font-label-sm text-label-sm text-on-surface font-semibold">
                        Độc lập - Tự do - Hạnh phúc
                      </p>
                      <div className="bg-on-surface mx-auto my-1.5 h-0.5 w-16 opacity-30"></div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mt-2 font-bold uppercase">
                        BIÊN BẢN GIAO NHẬN TRANG THIẾT BỊ GIÁO DỤC CÔNG NGHỆ
                      </h3>
                      <p className="font-code-num text-body-sm text-secondary">
                        Số lưu trữ: 1810/2024/BB-XINTHAU-EDUSHARE
                      </p>
                    </div>
                    <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                      <p>
                        Hôm nay, ngày 18 tháng 10 năm 2024, tại Trường Tiểu học Xín Thầu, Huyện Mường Nhé, Tỉnh Điện
                        Biên. Chúng tôi gồm có:
                      </p>
                      <div className="gap-space-sm p-space-sm bg-surface-container-low grid grid-cols-1 rounded md:grid-cols-2">
                        <div>
                          <span className="font-label-sm text-label-sm text-secondary font-bold">
                            BÊN GIAO (EduShare VN &amp; Đội TNV):
                          </span>
                          <p className="font-body-md text-on-surface font-semibold">
                            Ông Lê Hoàng Long - Trưởng đoàn Điều phối TNV
                          </p>
                          <p className="text-secondary">Phương tiện vận chuyển: Ford Ranger 29C-882.10</p>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-secondary font-bold">
                            BÊN NHẬN (Đơn vị thụ hưởng):
                          </span>
                          <p className="font-body-md text-on-surface font-semibold">
                            Thầy Pờ Lóng Hờ - Hiệu trưởng Tiểu học Xín Thầu
                          </p>
                          <p className="text-secondary">Địa chỉ: Xã Xín Thầu, H. Mường Nhé, T. Điện Biên</p>
                        </div>
                      </div>
                      <p className="pt-1">
                        Hai bên cùng tiến hành nghiệm thu, đóng điện thử nghiệm toàn bộ{" "}
                        <strong>30 máy tính xách tay ThinkPad</strong> và{" "}
                        <strong>20 bộ hạ tầng phát Wifi / máy chiếu</strong>. Tình trạng kỹ thuật ghi nhận: Máy móc vận
                        hành trơn tru, đầy đủ sạc nguồn và chuột quang, không trầy xước, tem kiểm định nguyên vẹn.
                      </p>
                    </div>
                    {/* Signatures */}
                    <div className="gap-space-lg mt-space-lg pt-space-md border-surface-container grid grid-cols-1 border-t md:grid-cols-2">
                      <div className="flex flex-col items-center text-center">
                        <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                          ĐẠI DIỆN ĐOÀN TÌNH NGUYỆN VIÊN
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary mb-2">(Ký và ghi rõ họ tên)</span>
                        <div className="flex h-20 items-center justify-center">
                          <span
                            className="font-headline-lg text-primary tracking-widest italic opacity-85 select-none"
                            style={{
                              transform: "rotate(-4deg)",
                              fontFamily: "serif",
                            }}
                          >
                            Lê Hoàng Long
                          </span>
                        </div>
                        <span className="font-headline-sm text-headline-sm text-on-surface mt-1 font-semibold">
                          Lê Hoàng Long
                        </span>
                        <span className="font-code-num text-tertiary text-[11px]">
                          Xác thực OTP: 0988.xxx.123 (05:12)
                        </span>
                      </div>
                      <div className="relative flex flex-col items-center text-center">
                        <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                          ĐẠI DIỆN BAN GIÁM HIỆU NHÀ TRƯỜNG
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary mb-2">(Ký tên và đóng dấu tròn)</span>
                        <div className="relative flex h-20 w-full items-center justify-center">
                          <span
                            className="font-headline-lg text-on-surface z-10 tracking-wider italic opacity-90 select-none"
                            style={{
                              transform: "rotate(-2deg)",
                              fontFamily: "serif",
                            }}
                          >
                            Pờ Lóng Hờ
                          </span>
                          <div
                            className="border-error/85 text-error bg-error/5 pointer-events-none absolute -top-3 right-6 flex h-28 w-28 items-center justify-center rounded-full border-4 p-1"
                            style={{ transform: "rotate(14deg)" }}
                          >
                            <div className="border-error/70 flex h-full w-full flex-col items-center justify-center rounded-full border border-dashed p-1 text-center">
                              <span className="text-[8px] leading-tight font-bold tracking-tighter uppercase">
                                UBND HUYỆN MƯỜNG NHÉ
                              </span>
                              <div className="text-error my-0.5 flex h-4 w-4 items-center justify-center">
                                <span className="material-symbols-outlined text-[14px]">star</span>
                              </div>
                              <span className="text-[8px] leading-tight font-bold tracking-tighter uppercase">
                                TRƯỜNG TIỂU HỌC
                              </span>
                              <span className="text-[9px] leading-tight font-extrabold uppercase">XÍN THẦU</span>
                            </div>
                          </div>
                        </div>
                        <span className="font-headline-sm text-headline-sm text-on-surface mt-1 font-semibold">
                          Thầy Pờ Lóng Hờ
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">Hiệu trưởng đơn vị tiếp nhận</span>
                      </div>
                    </div>
                    {/* Blockchain hash */}
                    <div className="mt-space-lg pt-space-sm bg-surface-container-low p-space-sm text-secondary flex flex-col items-start justify-between gap-2 rounded-lg sm:flex-row sm:items-center">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">lock</span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                            Chữ ký số &amp; Mã băm lưu trữ Blockchain SHA-256
                          </span>
                          <span className="font-code-num text-secondary text-[11px] break-all">
                            8f54b1d62c114e9f7a63080e7d95392cb34812a0fef4c09d8498ac16b9b3e107
                          </span>
                        </div>
                      </div>
                      <span className="font-label-sm text-label-sm bg-tertiary/10 text-tertiary shrink-0 rounded px-2 py-1 font-bold">
                        TOÀN VẸN &amp; CHUẨN XÁC
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal Footer */}
              <div className="px-space-lg py-space-sm bg-surface-container-low border-surface-container-high flex items-center justify-between border-t">
                <button
                  className="px-space-md bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md flex items-center gap-1.5 rounded-lg py-2 shadow-xs transition-colors"
                  onClick={() => alert("Đang tải bản PDF kèm con dấu đỏ...")}
                >
                  <span className="material-symbols-outlined text-[18px]">download</span> Tải bản PDF gốc
                </button>
                <button
                  className="px-space-lg bg-secondary text-on-secondary hover:bg-on-surface font-label-md text-label-md cursor-pointer rounded-lg py-2 transition-colors"
                  onClick={() => setShowPodModal(false)}
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Urgent Modal */}
        {showUrgentModal && (
          <div
            className="bg-inverse-surface/50 p-gutter fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowUrgentModal(false);
            }}
          >
            <div className="bg-surface-container-lowest p-space-lg relative w-full max-w-lg rounded-xl shadow-xl">
              <div className="pb-space-sm mb-space-sm flex items-center justify-between">
                <div className="text-error flex items-center gap-2">
                  <span className="material-symbols-outlined text-[24px]">crisis_alert</span>
                  <h3 className="font-headline-sm text-headline-sm font-bold">Kích hoạt Báo cáo Sự cố Tuyến</h3>
                </div>
                <button
                  className="text-secondary hover:bg-surface-container rounded-lg p-1 transition-colors"
                  onClick={() => setShowUrgentModal(false)}
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Hệ thống sẽ gửi tọa độ GPS vệ tinh hiện thời và cảnh báo khẩn cấp SMS tới Trung tâm Điều hành Quốc gia
                cùng Đội cứu hộ khu vực gần nhất.
              </p>
              <form className="space-y-space-md" onSubmit={handleEmergencySubmit}>
                <div>
                  <label className="font-label-md text-label-md text-on-surface mb-1 block font-semibold">
                    Loại sự cố khẩn cấp
                  </label>
                  <select className="px-space-sm bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:bg-surface-container-lowest w-full rounded-lg py-2 focus:outline-none">
                    <option>Sạt lở đèo / Tắc đường hoàn toàn (Đèo Pha Đin)</option>
                    <option>Hỏng hóc động cơ / Lốp phương tiện không thể di chuyển</option>
                    <option>Kiện hàng gặp rủi ro thời tiết (Mưa lũ, nước tràn thùng)</option>
                    <option>Sự cố sức khỏe tình nguyện viên</option>
                    <option>Khác</option>
                  </select>
                </div>
                <div>
                  <label className="font-label-md text-label-md text-on-surface mb-1 block font-semibold">
                    Mô tả tình trạng hiện trường
                  </label>
                  <textarea
                    className="px-space-sm bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:bg-surface-container-lowest w-full rounded-lg py-2 focus:outline-none"
                    placeholder="Ghi chú cụ thể cột km, tình trạng an toàn của xe và thiết bị..."
                    rows="3"
                  ></textarea>
                </div>
                <div className="gap-space-sm pt-space-xs flex items-center justify-end">
                  <button
                    className="px-space-md bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high rounded-lg py-2 transition-colors"
                    type="button"
                    onClick={() => setShowUrgentModal(false)}
                  >
                    Hủy bỏ
                  </button>
                  <button
                    className="px-space-md bg-error text-on-error font-label-md text-label-md hover:bg-error/90 flex items-center gap-1.5 rounded-lg py-2 shadow-sm transition-colors"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[16px]">send</span> Phát tín hiệu khẩn cấp
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
