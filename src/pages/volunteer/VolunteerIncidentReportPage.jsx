import { useState } from "react";

export default function VolunteerIncidentReportPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [incidentType, setIncidentType] = useState("landslide");
  const [description, setDescription] = useState(
    "Đoạn Đèo Sài Khao (cách trung tâm xã Tam Chung 18km) vừa xuất hiện sạt lở nghiêm trọng taluy dương do mưa kéo dài 3 ngày. Khối lượng đất đá ước tính hơn 120m3 tràn kín lòng đường, xe bán tải Ford Ranger 29H-882.14 không thể vượt qua. Đội đã tấp xe vào lề an toàn, chằng lại bạt 2 lớp bảo vệ nguyên vẹn 50 kiện máy tính. Cần xe cơ giới của huyện hỗ trợ giải phóng mặt đường hoặc trung chuyển bằng xe máy chuyên dụng.",
  );
  const [milestone, setMilestone] = useState("Km 42+300, ĐT158, Dốc Bò Vàng");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) {
      alert("Vui lòng mô tả chi tiết sự cố trước khi gửi!");
      return;
    }
    setIsModalOpen(true);
  };

  const incidentTypes = [
    {
      value: "landslide",
      icon: "landslide",
      color: "text-red-600",
      label: "Sạt lở / Tắc đường đèo",
      desc: "Mưa bão gây sạt taluy âm/dương, xe không thể tiếp cận điểm trường",
    },
    {
      value: "vehicle_breakdown",
      icon: "car_crash",
      color: "text-amber-600",
      label: "Sự cố phương tiện xe bán tải",
      desc: "Hỏng động cơ, vỡ lốp đá hộc, chết máy giữa dốc cao",
    },
    {
      value: "cargo_damage",
      icon: "package_2",
      color: "text-orange-600",
      label: "Rách bạt / Thấm nước kiện hàng",
      desc: "Thời tiết mưa lũ làm ảnh hưởng niêm phong thùng xe",
    },
    {
      value: "health_other",
      icon: "medical_services",
      color: "text-purple-600",
      label: "Sức khỏe TNV / Bất khả kháng",
      desc: "Chấn thương, đau sốt vùng rừng núi cần hỗ trợ y tế khẩn",
    },
  ];

  return (
    <div className="bg-surface text-on-surface flex min-h-screen font-sans antialiased">
      {/* Sidebar */}
      <aside className="bg-surface-container-lowest border-outline-variant/30 fixed top-0 left-0 z-50 flex h-screen w-64 flex-col justify-between overflow-y-auto border-r shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="border-outline-variant/30 bg-surface-container-low/50 border-b px-5 py-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg text-white shadow-sm">
                <span className="material-symbols-outlined text-[19px]">volunteer_activism</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-primary text-sm font-bold">EduShare VN</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                </div>
                <span className="text-on-surface-variant text-[11px] font-medium tracking-wider uppercase">
                  CỔNG TÌNH NGUYỆN VIÊN
                </span>
              </div>
            </div>
          </div>

          <nav className="space-y-4 p-3">
            <div>
              <span className="text-outline px-3 text-[10px] font-bold tracking-wider uppercase">
                ĐIỀU ĐỘNG & CA TRỰC
              </span>
              <div className="mt-1 space-y-0.5">
                <a
                  href="/volunteer/attendance"
                  className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                  <span>Điểm danh ca trực</span>
                </a>
                <a
                  href="/volunteer/leaderboard"
                  className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">leaderboard</span>
                  <span>Bảng xếp hạng & Giờ công</span>
                </a>
              </div>
            </div>

            <div>
              <span className="text-outline px-3 text-[10px] font-bold tracking-wider uppercase">
                VẬN CHUYỂN & GIAO NHẬN
              </span>
              <div className="mt-1 space-y-0.5">
                <a
                  href="/volunteer/waybill"
                  className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  <span>Vận đơn được gán</span>
                </a>
                <a
                  href="/volunteer/route-gps"
                  className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">near_me</span>
                  <span>Tuyến đường & GPS</span>
                </a>
                <a
                  href="#"
                  className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
                  <span>Xác nhận lấy hàng tại kho</span>
                </a>
              </div>
            </div>

            <div>
              <span className="text-outline px-3 text-[10px] font-bold tracking-wider uppercase">BIÊN BẢN & SỰ CỐ</span>
              <div className="mt-1 space-y-0.5">
                <a
                  href="/volunteer/incident"
                  className="bg-primary flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-white shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]">report_problem</span>
                    <span>Báo cáo sự cố chuyến đi</span>
                  </div>
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white"></span>
                </a>
                <a
                  href="/volunteer/pod"
                  className="text-on-surface-variant hover:bg-surface-container-low flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">task_alt</span>
                  <span>Hoàn thành & Minh chứng PoD</span>
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="border-outline-variant/30 bg-surface-container-low/40 border-t p-3">
          <div className="rounded-lg border border-red-200/80 bg-red-50 p-2.5">
            <div className="flex items-center justify-between text-red-700">
              <span className="flex items-center gap-1.5 text-[11px] font-bold">
                <span className="material-symbols-outlined text-[16px]">phone_in_talk</span> ĐIỀU PHỐI KHẨN CẤP
              </span>
              <span className="rounded bg-red-100 px-1.5 py-0.5 text-[9px] font-semibold text-red-800">24/7</span>
            </div>
            <div className="mt-1 font-mono text-sm font-bold text-red-600">1900 6829</div>
          </div>
          <div className="text-outline mt-2 text-center text-[10px]">Bản dựng v2.8.4-PROD • TNV Portal</div>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex min-w-0 flex-1 flex-col pl-64">
        {/* Top Header */}
        <header className="bg-surface-container-lowest/90 border-outline-variant/30 sticky top-0 z-40 flex h-16 items-center justify-between border-b px-6 backdrop-blur-md">
          <div className="relative w-80">
            <span className="material-symbols-outlined text-on-surface-variant absolute top-1/2 left-3 -translate-y-1/2 text-[18px]">
              search
            </span>
            <input
              type="text"
              placeholder="#WB-2024-NW08, Mường Lát..."
              defaultValue="#WB-2024-NW08"
              className="bg-surface-container-low text-on-surface placeholder:text-outline focus:ring-primary/20 focus:border-primary/30 w-full rounded-lg border border-transparent py-1.5 pr-3 pl-9 font-mono text-xs transition-all focus:ring-2 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
              <span>Trực tuyến</span>
            </div>
            <button
              className="text-on-surface-variant hover:bg-surface-container-low relative rounded-lg p-2 transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <div className="bg-outline-variant/40 h-6 w-px"></div>
            <div className="flex items-center gap-2.5 pl-1">
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm">
                HL
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-on-surface text-xs font-bold">Lê Hoàng Long</span>
                  <span className="bg-primary/10 text-primary rounded px-1.5 py-0.5 font-mono text-[9px] font-bold">
                    TNV-VCH-88
                  </span>
                </div>
                <span className="text-on-surface-variant text-[10px]">Đội Trưởng Đội Vượt Đèo Hà Giang</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Body */}
        <main className="space-y-6 p-6">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-on-surface-variant flex items-center gap-2 text-xs">
              <span className="cursor-pointer hover:underline">EduShare TNV</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="cursor-pointer hover:underline">Vận Chuyển & Giao Nhận</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-on-surface font-bold">Báo Cáo Sự Cố Chuyến Đi</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-surface-container-lowest border-outline-variant/40 text-on-surface-variant flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs">
                <span className="material-symbols-outlined text-primary text-[15px]">pin_drop</span>
                <span className="font-mono font-medium">GPS: 20.5218° N, 104.9912° E (Km 42 Đèo Sài Khao)</span>
              </div>
              <div className="flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                <span className="material-symbols-outlined text-[15px]">sync</span>
                <span>Đồng bộ máy bay điều phối</span>
              </div>
            </div>
          </div>

          {/* Title & RBAC Banner */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-full bg-red-100 px-2.5 py-0.5 text-[11px] font-bold text-red-800">
                  <span className="h-1.5 w-1.5 animate-ping rounded-full bg-red-600"></span>
                  QUY CHUẨN RBAC BẮT BUỘC
                </span>
                <span className="text-on-surface-variant text-xs font-medium">DOCUMENT_68 • Mục 5 & 6</span>
              </div>
              <h1 className="font-display text-on-surface mt-1 text-xl font-bold">
                Báo Cáo Sự Cố Chuyến Đi & Khẩn Cấp Trên Tuyến Vận Chuyển
              </h1>
              <p className="text-on-surface-variant mt-0.5 text-xs">
                Khi tình nguyện viên kích hoạt báo cáo sự cố hợp lệ, vận đơn sẽ tự động chuyển trạng thái{" "}
                <span className="rounded border border-red-200 bg-red-50 px-1 py-0.5 font-mono font-bold text-red-700">
                  FAILED
                </span>{" "}
                và thông báo tức thời tới Trung tâm Điều phối Toàn quốc.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2 self-start md:self-auto">
              <button
                type="button"
                className="bg-surface-container-lowest hover:bg-surface-container border-outline-variant/50 text-on-surface inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold shadow-sm transition-colors"
              >
                <span className="material-symbols-outlined text-primary text-[16px]">history</span>
                <span>Lịch sử sự cố đã báo</span>
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-red-700"
                onClick={() => alert("Đang kết nối đường dây nóng cứu hộ 1900 6829...")}
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Gọi Cứu Hộ Khẩn Cấp</span>
              </button>
            </div>
          </div>

          {/* Hero Banner */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 p-5 text-white shadow-sm">
            <div className="relative z-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="max-w-2xl space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded bg-white/20 px-2.5 py-0.5 font-mono text-xs font-bold text-white backdrop-blur-sm">
                    Vận đơn: #WB-2024-NW08
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                    ƯU TIÊN CẤP 1 - KHẨN CẤP
                  </span>
                  <span className="rounded bg-emerald-500/90 px-2 py-0.5 text-xs font-semibold text-white">
                    Tuyến: Hà Nội ➔ Mường Lát (310 km)
                  </span>
                </div>
                <h2 className="font-display text-lg font-bold">
                  Chuyến Vận Chuyển: 50 Kiện Thiết Bị Tin Học Về Điểm Trường PTDTBT THCS Mường Lát
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-blue-100">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>Điểm đích: Bản Chiềng Cống, Xã Tam Chung, Huyện Mường Lát, Tỉnh Thanh Hóa</span>
                </div>
              </div>
              <div className="flex shrink-0 flex-col gap-2 rounded-lg border border-white/15 bg-white/10 p-3 backdrop-blur-md">
                <div className="flex items-center justify-between gap-4 text-xs">
                  <span className="text-blue-200">Phương tiện:</span>
                  <span className="flex items-center gap-1 font-mono font-bold text-white">
                    <span className="material-symbols-outlined text-[16px]">airport_shuttle</span> Ford Ranger
                    29H-882.14
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 text-xs">
                  <span className="text-blue-200">Tổ TNV áp tải:</span>
                  <div className="flex items-center gap-1.5">
                    <div className="flex -space-x-1.5">
                      <span
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-white bg-blue-500 text-[10px] font-bold"
                        title="Lê Hoàng Long"
                      >
                        HL
                      </span>
                      <span
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-white bg-emerald-500 text-[10px] font-bold"
                        title="Quốc Bảo"
                      >
                        QB
                      </span>
                      <span
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-white bg-amber-500 text-[10px] font-bold"
                        title="Mai Phương"
                      >
                        MP
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-300">Đã gán 3 TNV</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-1 text-xs">
                  <span className="text-blue-200">Trạng thái hiện tại:</span>
                  <span className="flex items-center gap-1 font-mono font-bold text-amber-300">
                    <span className="material-symbols-outlined text-[14px]">local_shipping</span> IN-TRANSIT (Đang di
                    chuyển)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main 2-column */}
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
            {/* LEFT: FORM BÁO CÁO SỰ CỐ (7/12) */}
            <div className="space-y-6 lg:col-span-7">
              <div className="bg-surface-container-lowest border-outline-variant/30 space-y-5 rounded-xl border p-5 shadow-sm">
                <div className="border-outline-variant/30 flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-100 text-red-700">
                      <span className="material-symbols-outlined text-[18px]">emergency</span>
                    </div>
                    <div>
                      <h3 className="font-display text-on-surface text-sm font-bold">Nhập Thông Tin Báo Cáo Sự Cố</h3>
                      <span className="text-on-surface-variant text-[11px]">
                        Lưu ý: Báo cáo gắn cứng định danh cá nhân TNV, không thể sửa sau khi gửi
                      </span>
                    </div>
                  </div>
                  <span className="bg-surface-container text-outline rounded px-2 py-0.5 font-mono text-[11px] font-bold">
                    ID Tạm: #INC-2024-NW08-99
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Định danh người báo cáo */}
                  <div className="bg-surface-container-low/60 border-outline-variant/30 flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white">
                        HL
                      </div>
                      <div>
                        <div className="text-on-surface flex items-center gap-1.5 text-xs font-bold">
                          Lê Hoàng Long (Đội trưởng áp tải)
                          <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-800">
                            Tư cách chính chủ
                          </span>
                        </div>
                        <div className="text-on-surface-variant font-mono text-[11px]">
                          CCCD: 00109400**** • SĐT: 0912.834.567 • Chuyến: #WB-2024-NW08
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-outline block text-[10px] font-semibold">CƠ CHẾ RBAC</span>
                      <span className="text-[11px] font-bold text-emerald-700">Khóa cố định ID</span>
                    </div>
                  </div>

                  {/* Phân loại sự cố */}
                  <div>
                    <label className="text-on-surface mb-2 block text-xs font-bold">
                      1. Phân Loại Sự Cố Trên Tuyến <span className="text-red-600">*</span>
                    </label>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {incidentTypes.map((type) => (
                        <label
                          key={type.value}
                          className={`flex cursor-pointer items-start gap-2.5 rounded-lg border p-3 transition-colors ${incidentType === type.value ? "border-red-300 bg-red-50/50 hover:bg-red-50" : "border-outline-variant/40 bg-surface-container-low/40 hover:bg-surface-container-low"}`}
                        >
                          <input
                            type="radio"
                            name="incident_type"
                            value={type.value}
                            checked={incidentType === type.value}
                            onChange={() => setIncidentType(type.value)}
                            className="mt-0.5 accent-red-600"
                          />
                          <div className="flex flex-col">
                            <span className="text-on-surface flex items-center gap-1 text-xs font-bold">
                              <span className={`material-symbols-outlined text-[16px] ${type.color}`}>{type.icon}</span>{" "}
                              {type.label}
                            </span>
                            <span className="text-on-surface-variant mt-0.5 text-[11px]">{type.desc}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Mô tả chi tiết */}
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-on-surface flex items-center gap-1 text-xs font-bold">
                        2. Mô Tả Chi Tiết Lý Do & Hiện Trạng Thực Địa <span className="text-red-600">* (Bắt buộc)</span>
                      </label>
                      <span className="rounded bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-600">
                        Ràng buộc hệ thống
                      </span>
                    </div>
                    <textarea
                      rows="3"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Ghi rõ địa điểm xảy ra, mức độ thiệt hại, nguy cơ đối với người và lô hàng 50 kiện thiết bị..."
                      className="bg-surface-container-low text-on-surface placeholder:text-outline border-outline-variant/40 w-full rounded-lg border px-3 py-2 font-sans text-xs leading-relaxed transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                    ></textarea>
                  </div>

                  {/* GPS & Cột mốc */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="text-on-surface mb-1 block text-xs font-bold">
                        3. Tọa Độ GPS Tự Động Ghi Nhận
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined text-primary absolute top-1/2 left-2.5 -translate-y-1/2 text-[17px]">
                          my_location
                        </span>
                        <input
                          type="text"
                          readOnly
                          value="20.521844° N, 104.991208° E"
                          className="bg-surface-container-low text-on-surface border-outline-variant/40 w-full rounded-lg border py-1.5 pr-3 pl-8 font-mono text-xs font-semibold"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-on-surface mb-1 block text-xs font-bold">
                        Cột mốc / Điểm mốc nhận diện
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined text-outline absolute top-1/2 left-2.5 -translate-y-1/2 text-[17px]">
                          navigation
                        </span>
                        <input
                          type="text"
                          value={milestone}
                          onChange={(e) => setMilestone(e.target.value)}
                          className="bg-surface-container-low text-on-surface border-outline-variant/40 w-full rounded-lg border py-1.5 pr-3 pl-8 text-xs font-semibold"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hình ảnh hiện trường */}
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-on-surface flex items-center gap-1 text-xs font-bold">
                        4. Hình Ảnh Chụp Hiện Trường & Kiện Hàng <span className="text-red-600">*</span>
                      </label>
                      <span className="text-on-surface-variant text-[11px] font-medium">
                        Đã chụp 2 ảnh kèm Watermark thời gian & GPS
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="border-outline-variant/40 bg-surface-container group relative aspect-[4/3] overflow-hidden rounded-lg border">
                        <img
                          src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80"
                          alt="Hiện trường sự cố"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-1.5 text-[10px] text-white">
                          <span className="font-bold">Ảnh 1: Cung đường bị nghẽn</span>
                          <span className="font-mono text-[9px] text-slate-200">10:15:32 • GPS Khớp</span>
                        </div>
                      </div>
                      <div className="border-outline-variant/40 bg-surface-container group relative aspect-[4/3] overflow-hidden rounded-lg border">
                        <img
                          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                          alt="Kiểm tra thùng xe"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-1.5 text-[10px] text-white">
                          <span className="font-bold">Ảnh 2: Niêm phong kiện nguyên vẹn</span>
                          <span className="font-mono text-[9px] text-slate-200">10:17:04 • GPS Khớp</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="border-outline-variant/60 hover:border-primary/60 bg-surface-container-low/40 hover:bg-surface-container-low text-on-surface-variant group flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-2 transition-colors"
                      >
                        <span className="material-symbols-outlined text-primary text-[24px] transition-transform group-hover:scale-110">
                          add_a_photo
                        </span>
                        <span className="mt-1 text-[10px] font-semibold">Chụp / Thêm ảnh</span>
                        <span className="text-outline text-[8px]">Tối đa 5 ảnh</span>
                      </button>
                    </div>
                  </div>

                  {/* Cảnh báo */}
                  <div className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-3">
                    <span className="material-symbols-outlined mt-0.5 shrink-0 text-[20px] text-red-600">warning</span>
                    <div className="text-xs leading-relaxed text-red-900">
                      <span className="font-bold">Cảnh báo hệ thống:</span> Ngay khi nhấn{" "}
                      <strong>"Gửi Báo Cáo & Chuyển Trạng Thái FAILED"</strong>, vận đơn <strong>#WB-2024-NW08</strong>{" "}
                      sẽ dừng lộ trình, chuyển sang trạng thái cảnh báo khẩn cấp màu đỏ trên Dashboard Admin & Kho, đồng
                      thời kích hoạt chuông cảnh báo tới đội điều phối ứng cứu.
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="font-display flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.99]"
                    >
                      <span className="material-symbols-outlined text-[18px]">report</span>
                      <span>Gửi Báo Cáo Sự Cố & Chuyển Trạng Thái Vận Đơn FAILED</span>
                    </button>
                    <button
                      type="button"
                      className="bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl px-4 py-3 text-xs font-semibold transition-colors"
                    >
                      Hủy bỏ
                    </button>
                  </div>
                </form>
              </div>

              {/* Lịch Sử Sự Cố */}
              <div className="bg-surface-container-lowest border-outline-variant/30 space-y-3 rounded-xl border p-5 shadow-sm">
                <div className="border-outline-variant/30 flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[19px]">receipt_long</span>
                    <h3 className="font-display text-on-surface text-sm font-bold">
                      Nhật Ký Sự Cố Gắn Với Vận Đơn #WB-2024-NW08
                    </h3>
                  </div>
                  <span className="text-on-surface-variant text-xs font-semibold">Bảng incident_reports</span>
                </div>
                <div className="bg-surface-container-low/50 border-outline-variant/30 space-y-2 rounded-lg border p-3.5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                      <span className="font-mono text-xs font-bold text-red-700">#INC-2024-NW08-01</span>
                      <span className="rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-red-800 uppercase">
                        Sạt Lở Tuyến Đèo
                      </span>
                    </div>
                    <span className="text-outline font-mono text-[11px]">10:20:15 • 24/10/2024</span>
                  </div>
                  <p className="text-on-surface text-xs leading-relaxed">
                    Đất đá sạt lở tại Km 42 ĐT158, xe Ford Ranger 29H-882.14 dừng an toàn. Lô 50 kiện thiết bị được che
                    chắn bảo quản nguyên vẹn.
                  </p>
                  <div className="text-on-surface-variant border-outline-variant/20 flex items-center justify-between border-t pt-1 text-[11px]">
                    <span className="flex items-center gap-1 font-medium">
                      <span className="material-symbols-outlined text-primary text-[14px]">person</span>
                      Người lập: Lê Hoàng Long (TNV Áp tải chính)
                    </span>
                    <span className="rounded border border-red-200 bg-red-50 px-2 py-0.5 font-bold text-red-600">
                      Trạng thái vận đơn: FAILED (Chờ cứu hộ)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT (5/12) */}
            <div className="space-y-6 lg:col-span-5">
              {/* Quy Chuẩn Rbac */}
              <div className="bg-surface-container-lowest border-outline-variant/30 space-y-3.5 rounded-xl border p-5 shadow-sm">
                <div className="border-outline-variant/30 flex items-center justify-between border-b pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[19px] text-red-600">gavel</span>
                    <h4 className="font-display text-on-surface text-xs font-bold tracking-wider uppercase">
                      Quy Chuẩn Phân Quyền Sự Cố (RBAC)
                    </h4>
                  </div>
                  <span className="text-primary bg-primary/10 rounded px-2 py-0.5 text-[10px] font-bold">BẤT BIẾN</span>
                </div>
                <div className="text-on-surface space-y-2.5 text-xs">
                  <div className="flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-2">
                    <span className="material-symbols-outlined mt-0.5 shrink-0 text-[17px] text-emerald-700">
                      check_circle
                    </span>
                    <div className="text-[11px] leading-relaxed text-emerald-950">
                      <strong>Quyền TNV:</strong> Được quyền báo sự cố trên chuyến đi của chính mình. Bắt buộc phải ghi
                      rõ lý do chi tiết và tải ảnh hiện trường.
                    </div>
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-2">
                    <span className="material-symbols-outlined mt-0.5 shrink-0 text-[17px] text-red-700">cancel</span>
                    <div className="text-[11px] leading-relaxed text-red-950">
                      <strong>Nghiêm cấm:</strong> Kho và Admin <strong>chỉ có quyền xem</strong> hồ sơ sự cố. Không
                      được tự ý tạo hộ và không được sửa nội dung báo cáo của TNV.
                    </div>
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-2">
                    <span className="material-symbols-outlined mt-0.5 shrink-0 text-[17px] text-amber-800">
                      swap_horiz
                    </span>
                    <div className="text-[11px] leading-relaxed text-amber-950">
                      <strong>Cơ chế tự động:</strong> Khi gửi báo cáo sự cố thành công, hệ thống tự động cập nhật trạng
                      thái vận đơn thành <strong>FAILED</strong> trên toàn chuỗi cung ứng.
                    </div>
                  </div>
                </div>
              </div>

              {/* Tổ Tnv */}
              <div className="bg-surface-container-lowest border-outline-variant/30 space-y-3 rounded-xl border p-5 shadow-sm">
                <div className="border-outline-variant/30 flex items-center justify-between border-b pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[19px]">group</span>
                    <h4 className="font-display text-on-surface text-xs font-bold">
                      Tổ TNV Áp Tải Vận Đơn (3 Thành Viên)
                    </h4>
                  </div>
                  <span className="text-outline font-mono text-[10px]">waybill_volunteers</span>
                </div>
                <div className="divide-outline-variant/20 divide-y">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                        HL
                      </div>
                      <div>
                        <div className="text-on-surface text-xs font-bold">Lê Hoàng Long</div>
                        <div className="text-on-surface-variant text-[10px]">Trưởng đoàn • Lái chính (29H-882.14)</div>
                      </div>
                    </div>
                    <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold text-blue-800">
                      Người báo
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                        QB
                      </div>
                      <div>
                        <div className="text-on-surface text-xs font-bold">Vũ Quốc Bảo</div>
                        <div className="text-on-surface-variant text-[10px]">Kỹ thuật viên IT & Kiểm đếm</div>
                      </div>
                    </div>
                    <span className="text-outline font-mono text-[10px]">0988.234.xxx</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">
                        MP
                      </div>
                      <div>
                        <div className="text-on-surface text-xs font-bold">Trần Mai Phương</div>
                        <div className="text-on-surface-variant text-[10px]">Logistics & Giao tiếp sư phạm</div>
                      </div>
                    </div>
                    <span className="text-outline font-mono text-[10px]">0905.123.xxx</span>
                  </div>
                </div>
              </div>

              {/* Danh Mục Thiết Bị */}
              <div className="bg-surface-container-lowest border-outline-variant/30 space-y-3 rounded-xl border p-5 shadow-sm">
                <div className="border-outline-variant/30 flex items-center justify-between border-b pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[19px]">inventory_2</span>
                    <h4 className="font-display text-on-surface text-xs font-bold">
                      Danh Mục 50 Kiện Hàng Trên Xe Cần Bảo Toàn
                    </h4>
                  </div>
                  <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                    Niêm Phong #HN-8842-OK
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="bg-surface-container-low flex items-center justify-between rounded-lg p-2.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">laptop_mac</span>
                      <div>
                        <div className="text-on-surface font-bold">30 Laptop ThinkPad T480s (Core i5/16GB)</div>
                        <div className="text-on-surface-variant text-[10px]">
                          Tài trợ: Tập đoàn FPT • Đã nạp EduOS Linux
                        </div>
                      </div>
                    </div>
                    <span className="text-primary font-mono font-bold">x30</span>
                  </div>
                  <div className="bg-surface-container-low flex items-center justify-between rounded-lg p-2.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">desktop_windows</span>
                      <div>
                        <div className="text-on-surface font-bold">20 Màn hình Dell Professional 24" P2419H</div>
                        <div className="text-on-surface-variant text-[10px]">
                          Tài trợ: VNPT Thanh Hóa • Nguyên thùng
                        </div>
                      </div>
                    </div>
                    <span className="text-primary font-mono font-bold">x20</span>
                  </div>
                  <div className="bg-surface-container-low flex items-center justify-between rounded-lg p-2.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">router</span>
                      <div>
                        <div className="text-on-surface font-bold">02 Switch Cisco + 300m Cáp Mạng + 10 Bộ UPS</div>
                        <div className="text-on-surface-variant text-[10px]">
                          Phụ kiện thi công phòng lab hoàn chỉnh
                        </div>
                      </div>
                    </div>
                    <span className="text-primary font-mono font-bold">01 bộ gộp</span>
                  </div>
                </div>
              </div>

              {/* Bản Đồ Vị Trí Sự Cố */}
              <div className="bg-surface-container-lowest border-outline-variant/30 space-y-3 rounded-xl border p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-on-surface flex items-center gap-1.5 text-xs font-bold">
                    <span className="material-symbols-outlined text-primary text-[18px]">map</span>
                    Vị Trí Hiện Trường Sự Cố Trên Bản Đồ
                  </h4>
                  <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[10px] text-emerald-700">
                    GPS Live Ping
                  </span>
                </div>
                <div className="border-outline-variant/40 relative flex h-36 items-center justify-center overflow-hidden rounded-lg border bg-slate-100">
                  <svg className="h-full w-full text-slate-300" viewBox="0 0 400 150" fill="none">
                    <path
                      d="M 20 80 Q 100 20, 180 70 T 320 60 T 380 90"
                      stroke="#cbd5e1"
                      strokeWidth="8"
                      strokeLinecap="round"
                    ></path>
                    <path d="M 20 80 Q 100 20, 180 70" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round"></path>
                    <path
                      d="M 180 70 L 220 75"
                      stroke="#ef4444"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray="4 4"
                    ></path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 animate-bounce items-center justify-center rounded-full bg-red-600 text-white shadow-lg ring-4 ring-red-200">
                        <span className="material-symbols-outlined text-[18px]">landslide</span>
                      </div>
                      <span className="mt-1 rounded border border-red-200 bg-white px-2 py-0.5 text-[10px] font-bold text-red-700 shadow">
                        Sạt lở Đèo Sài Khao (Km 42)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-on-surface-variant flex items-center justify-between text-[11px]">
                  <span>
                    Cách Kho Hub Hà Nội: <strong>268 km</strong>
                  </span>
                  <span>
                    Cách Điểm trường: <strong>42 km</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modal Xác Nhận */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="bg-surface-container-lowest w-full max-w-md space-y-4 rounded-2xl border border-red-200 p-6 text-center shadow-2xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 shadow-inner">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <div>
              <span className="text-xs font-bold tracking-wider text-red-600 uppercase">
                HỆ THỐNG ĐÃ KÍCH HOẠT THÀNH CÔNG
              </span>
              <h3 className="font-display text-on-surface mt-1 text-lg font-bold">
                Đã Gửi Báo Cáo & Chuyển Vận Đơn Sang FAILED
              </h3>
              <p className="text-on-surface-variant mt-2 text-xs leading-relaxed">
                Mã sự cố <strong>#INC-2024-NW08-99</strong> đã được ghi vào bảng{" "}
                <code className="text-primary font-mono">incident_reports</code> gắn cứng với tài khoản TNV{" "}
                <strong>Lê Hoàng Long</strong>. Tín hiệu cảnh báo đỏ và tọa độ thực tế đã truyền tới Trung tâm Điều phối
                EduShare.
              </p>
            </div>
            <div className="bg-surface-container-low border-outline-variant/30 space-y-1.5 rounded-xl border p-3 text-left text-xs">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Trạng thái vận đơn:</span>
                <span className="font-mono font-bold text-red-600">FAILED (Tạm hoãn do sự cố)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Quyền can thiệp:</span>
                <span className="text-on-surface font-semibold">Chỉ xem (Admin & Kho)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Đội cứu trợ địa phương:</span>
                <span className="font-semibold text-emerald-700">Đã nhận thông báo (Tam Chung)</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="bg-primary hover:bg-primary-container font-display w-full rounded-xl px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all"
              >
                Đã Hiểu & Quay Lại Tuyến Đường
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
