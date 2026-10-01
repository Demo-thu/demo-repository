import React, { useState } from 'react';

export default function VolunteerIncidentReportPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [incidentType, setIncidentType] = useState('landslide');
  const [description, setDescription] = useState('Đoạn Đèo Sài Khao (cách trung tâm xã Tam Chung 18km) vừa xuất hiện sạt lở nghiêm trọng taluy dương do mưa kéo dài 3 ngày. Khối lượng đất đá ước tính hơn 120m3 tràn kín lòng đường, xe bán tải Ford Ranger 29H-882.14 không thể vượt qua. Đội đã tấp xe vào lề an toàn, chằng lại bạt 2 lớp bảo vệ nguyên vẹn 50 kiện máy tính. Cần xe cơ giới của huyện hỗ trợ giải phóng mặt đường hoặc trung chuyển bằng xe máy chuyên dụng.');
  const [milestone, setMilestone] = useState('Km 42+300, ĐT158, Dốc Bò Vàng');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) {
      alert('Vui lòng mô tả chi tiết sự cố trước khi gửi!');
      return;
    }
    setIsModalOpen(true);
  };

  const incidentTypes = [
    { value: 'landslide', icon: 'landslide', color: 'text-red-600', label: 'Sạt lở / Tắc đường đèo', desc: 'Mưa bão gây sạt taluy âm/dương, xe không thể tiếp cận điểm trường' },
    { value: 'vehicle_breakdown', icon: 'car_crash', color: 'text-amber-600', label: 'Sự cố phương tiện xe bán tải', desc: 'Hỏng động cơ, vỡ lốp đá hộc, chết máy giữa dốc cao' },
    { value: 'cargo_damage', icon: 'package_2', color: 'text-orange-600', label: 'Rách bạt / Thấm nước kiện hàng', desc: 'Thời tiết mưa lũ làm ảnh hưởng niêm phong thùng xe' },
    { value: 'health_other', icon: 'medical_services', color: 'text-purple-600', label: 'Sức khỏe TNV / Bất khả kháng', desc: 'Chấn thương, đau sốt vùng rừng núi cần hỗ trợ y tế khẩn' },
  ];

  return (
    <div className="bg-surface font-sans text-on-surface antialiased flex min-h-screen">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto border-r border-outline-variant/30">
        <div className="flex flex-col">
          <div className="px-5 py-4 border-b border-outline-variant/30 bg-surface-container-low/50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-[19px]">volunteer_activism</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-sm text-primary">EduShare VN</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
                <span className="text-[11px] font-medium text-on-surface-variant uppercase tracking-wider">CỔNG TÌNH NGUYỆN VIÊN</span>
              </div>
            </div>
          </div>

          <nav className="p-3 space-y-4">
            <div>
              <span className="px-3 text-[10px] font-bold text-outline uppercase tracking-wider">ĐIỀU ĐỘNG & CA TRỰC</span>
              <div className="mt-1 space-y-0.5">
                <a href="/volunteer/attendance" className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                  <span>Điểm danh ca trực</span>
                </a>
                <a href="/volunteer/leaderboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[18px]">leaderboard</span>
                  <span>Bảng xếp hạng & Giờ công</span>
                </a>
              </div>
            </div>

            <div>
              <span className="px-3 text-[10px] font-bold text-outline uppercase tracking-wider">VẬN CHUYỂN & GIAO NHẬN</span>
              <div className="mt-1 space-y-0.5">
                <a href="/volunteer/waybill" className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  <span>Vận đơn được gán</span>
                </a>
                <a href="/volunteer/route-gps" className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[18px]">near_me</span>
                  <span>Tuyến đường & GPS</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
                  <span>Xác nhận lấy hàng tại kho</span>
                </a>
              </div>
            </div>

            <div>
              <span className="px-3 text-[10px] font-bold text-outline uppercase tracking-wider">BIÊN BẢN & SỰ CỐ</span>
              <div className="mt-1 space-y-0.5">
                <a href="/volunteer/incident" className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold bg-primary text-white shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]">report_problem</span>
                    <span>Báo cáo sự cố chuyến đi</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                </a>
                <a href="/volunteer/pod" className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[18px]">task_alt</span>
                  <span>Hoàn thành & Minh chứng PoD</span>
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="p-3 border-t border-outline-variant/30 bg-surface-container-low/40">
          <div className="bg-red-50 border border-red-200/80 rounded-lg p-2.5">
            <div className="flex items-center justify-between text-red-700">
              <span className="flex items-center gap-1.5 text-[11px] font-bold">
                <span className="material-symbols-outlined text-[16px]">phone_in_talk</span> ĐIỀU PHỐI KHẨN CẤP
              </span>
              <span className="text-[9px] bg-red-100 text-red-800 font-semibold px-1.5 py-0.5 rounded">24/7</span>
            </div>
            <div className="text-sm font-bold text-red-600 mt-1 font-mono">1900 6829</div>
          </div>
          <div className="mt-2 text-[10px] text-center text-outline">Bản dựng v2.8.4-PROD • TNV Portal</div>
        </div>
      </aside>

      {/* MAIN AREA */}
      <div className="pl-64 flex-1 flex flex-col min-w-0">
        {/* TOP HEADER */}
        <header className="h-16 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 sticky top-0 z-40 px-6 flex items-center justify-between">
          <div className="relative w-80">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
            <input type="text" placeholder="#WB-2024-NW08, Mường Lát..." defaultValue="#WB-2024-NW08" className="w-full pl-9 pr-3 py-1.5 bg-surface-container-low rounded-lg text-xs text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 border border-transparent focus:border-primary/30 transition-all font-mono" />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Trực tuyến</span>
            </div>
            <button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <div className="h-6 w-px bg-outline-variant/40"></div>
            <div className="flex items-center gap-2.5 pl-1">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shadow-sm">HL</div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-xs text-on-surface">Lê Hoàng Long</span>
                  <span className="text-[9px] bg-primary/10 text-primary font-bold px-1.5 py-0.5 rounded font-mono">TNV-VCH-88</span>
                </div>
                <span className="text-[10px] text-on-surface-variant">Đội Trưởng Đội Vượt Đèo Hà Giang</span>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN BODY */}
        <main className="p-6 space-y-6">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-on-surface-variant">
              <span className="hover:underline cursor-pointer">EduShare TNV</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="hover:underline cursor-pointer">Vận Chuyển & Giao Nhận</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="font-bold text-on-surface">Báo Cáo Sự Cố Chuyến Đi</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-lowest border border-outline-variant/40 rounded-full text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-[15px] text-primary">pin_drop</span>
                <span className="font-mono font-medium">GPS: 20.5218° N, 104.9912° E (Km 42 Đèo Sài Khao)</span>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-semibold">
                <span className="material-symbols-outlined text-[15px]">sync</span>
                <span>Đồng bộ máy bay điều phối</span>
              </div>
            </div>
          </div>

          {/* Title & RBAC Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-red-100 text-red-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
                  QUY CHUẨN RBAC BẮT BUỘC
                </span>
                <span className="text-xs text-on-surface-variant font-medium">DOCUMENT_68 • Mục 5 & 6</span>
              </div>
              <h1 className="text-xl font-display font-bold text-on-surface mt-1">
                Báo Cáo Sự Cố Chuyến Đi & Khẩn Cấp Trên Tuyến Vận Chuyển
              </h1>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Khi tình nguyện viên kích hoạt báo cáo sự cố hợp lệ, vận đơn sẽ tự động chuyển trạng thái <span className="font-mono font-bold text-red-700 bg-red-50 px-1 py-0.5 rounded border border-red-200">FAILED</span> và thông báo tức thời tới Trung tâm Điều phối Toàn quốc.
              </p>
            </div>
            <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
              <button type="button" className="inline-flex items-center gap-1.5 px-3 py-2 bg-surface-container-lowest hover:bg-surface-container border border-outline-variant/50 rounded-lg text-xs font-semibold text-on-surface transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-primary">history</span>
                <span>Lịch sử sự cố đã báo</span>
              </button>
              <button type="button" className="inline-flex items-center gap-1.5 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-all shadow-sm" onClick={() => alert('Đang kết nối đường dây nóng cứu hộ 1900 6829...')}>
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Gọi Cứu Hộ Khẩn Cấp</span>
              </button>
            </div>
          </div>

          {/* HERO BANNER */}
          <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 rounded-xl text-white p-5 shadow-sm relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-0.5 rounded font-mono">Vận đơn: #WB-2024-NW08</span>
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    ƯU TIÊN CẤP 1 - KHẨN CẤP
                  </span>
                  <span className="bg-emerald-500/90 text-white text-xs font-semibold px-2 py-0.5 rounded">Tuyến: Hà Nội ➔ Mường Lát (310 km)</span>
                </div>
                <h2 className="text-lg font-display font-bold">Chuyến Vận Chuyển: 50 Kiện Thiết Bị Tin Học Về Điểm Trường PTDTBT THCS Mường Lát</h2>
                <div className="flex items-center gap-1.5 text-xs text-blue-100">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>Điểm đích: Bản Chiềng Cống, Xã Tam Chung, Huyện Mường Lát, Tỉnh Thanh Hóa</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/15 flex flex-col gap-2 shrink-0">
                <div className="flex items-center justify-between gap-4 text-xs">
                  <span className="text-blue-200">Phương tiện:</span>
                  <span className="font-bold text-white font-mono flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">airport_shuttle</span> Ford Ranger 29H-882.14
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 text-xs">
                  <span className="text-blue-200">Tổ TNV áp tải:</span>
                  <div className="flex items-center gap-1.5">
                    <div className="flex -space-x-1.5">
                      <span className="w-6 h-6 rounded-full bg-blue-500 text-[10px] font-bold flex items-center justify-center border border-white" title="Lê Hoàng Long">HL</span>
                      <span className="w-6 h-6 rounded-full bg-emerald-500 text-[10px] font-bold flex items-center justify-center border border-white" title="Quốc Bảo">QB</span>
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-[10px] font-bold flex items-center justify-center border border-white" title="Mai Phương">MP</span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-300">Đã gán 3 TNV</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 text-xs pt-1 border-t border-white/10">
                  <span className="text-blue-200">Trạng thái hiện tại:</span>
                  <span className="font-bold text-amber-300 font-mono flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">local_shipping</span> IN-TRANSIT (Đang di chuyển)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN 2-COLUMN */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

            {/* LEFT: FORM BÁO CÁO SỰ CỐ (7/12) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 space-y-5">
                <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-red-100 text-red-700 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">emergency</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-on-surface">Nhập Thông Tin Báo Cáo Sự Cố</h3>
                      <span className="text-[11px] text-on-surface-variant">Lưu ý: Báo cáo gắn cứng định danh cá nhân TNV, không thể sửa sau khi gửi</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-bold bg-surface-container px-2 py-0.5 rounded text-outline">ID Tạm: #INC-2024-NW08-99</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Định danh người báo cáo */}
                  <div className="bg-surface-container-low/60 p-3 rounded-lg border border-outline-variant/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs">HL</div>
                      <div>
                        <div className="text-xs font-bold text-on-surface flex items-center gap-1.5">
                          Lê Hoàng Long (Đội trưởng áp tải)
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-1.5 py-0.5 rounded">Tư cách chính chủ</span>
                        </div>
                        <div className="text-[11px] text-on-surface-variant font-mono">CCCD: 00109400**** • SĐT: 0912.834.567 • Chuyến: #WB-2024-NW08</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-semibold text-outline block">CƠ CHẾ RBAC</span>
                      <span className="text-[11px] font-bold text-emerald-700">Khóa cố định ID</span>
                    </div>
                  </div>

                  {/* Phân loại sự cố */}
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-2">
                      1. Phân Loại Sự Cố Trên Tuyến <span className="text-red-600">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {incidentTypes.map((type) => (
                        <label key={type.value} className={`flex items-start gap-2.5 p-3 rounded-lg border cursor-pointer transition-colors ${incidentType === type.value ? 'border-red-300 bg-red-50/50 hover:bg-red-50' : 'border-outline-variant/40 bg-surface-container-low/40 hover:bg-surface-container-low'}`}>
                          <input type="radio" name="incident_type" value={type.value} checked={incidentType === type.value} onChange={() => setIncidentType(type.value)} className="mt-0.5 accent-red-600" />
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-on-surface flex items-center gap-1">
                              <span className={`material-symbols-outlined text-[16px] ${type.color}`}>{type.icon}</span> {type.label}
                            </span>
                            <span className="text-[11px] text-on-surface-variant mt-0.5">{type.desc}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Mô tả chi tiết */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-on-surface flex items-center gap-1">
                        2. Mô Tả Chi Tiết Lý Do & Hiện Trạng Thực Địa <span className="text-red-600">* (Bắt buộc)</span>
                      </label>
                      <span className="text-[10px] text-red-600 font-semibold bg-red-50 px-2 py-0.5 rounded">Ràng buộc hệ thống</span>
                    </div>
                    <textarea rows="3" required value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ghi rõ địa điểm xảy ra, mức độ thiệt hại, nguy cơ đối với người và lô hàng 50 kiện thiết bị..." className="w-full px-3 py-2 bg-surface-container-low rounded-lg text-xs text-on-surface placeholder:text-outline border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all font-sans leading-relaxed"></textarea>
                  </div>

                  {/* GPS & Cột mốc */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-on-surface mb-1">3. Tọa Độ GPS Tự Động Ghi Nhận</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-primary text-[17px]">my_location</span>
                        <input type="text" readOnly value="20.521844° N, 104.991208° E" className="w-full pl-8 pr-3 py-1.5 bg-surface-container-low rounded-lg text-xs font-mono font-semibold text-on-surface border border-outline-variant/40" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-on-surface mb-1">Cột mốc / Điểm mốc nhận diện</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-[17px]">navigation</span>
                        <input type="text" value={milestone} onChange={(e) => setMilestone(e.target.value)} className="w-full pl-8 pr-3 py-1.5 bg-surface-container-low rounded-lg text-xs font-semibold text-on-surface border border-outline-variant/40" />
                      </div>
                    </div>
                  </div>

                  {/* Hình ảnh hiện trường */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-on-surface flex items-center gap-1">
                        4. Hình Ảnh Chụp Hiện Trường & Kiện Hàng <span className="text-red-600">*</span>
                      </label>
                      <span className="text-[11px] text-on-surface-variant font-medium">Đã chụp 2 ảnh kèm Watermark thời gian & GPS</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="relative rounded-lg overflow-hidden border border-outline-variant/40 aspect-[4/3] bg-surface-container group">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI2PJ8YVDvF9jYUouQBEoLiBsKTVq0pZrcSEmjyYv5ne5B3N_iY2wMvBxt3K5AGsz2uDMt9jgpZktSqqeTRNjxn7qdp4TxijquhhFN1zp80IL-JHUp8WNWA3S0bU2GRUOKiavSsBTO0GTnFxeUNzgyfBCKcWIx9XnepqMy3BKD8uwQbp17SKicbc4OFhAEHnNiUEUJxRMIySm8dy7CwZ2Pv3tMndzQm6Z6imReWFesorJFj0sc1K9S0Q" alt="Hiện trường sự cố" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-1.5 text-white text-[10px]">
                          <span className="font-bold">Ảnh 1: Cung đường bị nghẽn</span>
                          <span className="font-mono text-[9px] text-slate-200">10:15:32 • GPS Khớp</span>
                        </div>
                      </div>
                      <div className="relative rounded-lg overflow-hidden border border-outline-variant/40 aspect-[4/3] bg-surface-container group">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDufzeHitPQKCBWgkd9FqoRmrFGrg9rk73-tOJrH5sT24FLQH-oQyhdkI-wZfk06OoGkYGTWZfarSKjS6uXF8v1JfYOQrPoYIe-fyKrPXSwyCPhXms1dW-nFgMXip9_XNBMIiLbZy211v9YjZdHBccri5ZnOR6LO1-4nvk7vm1gGAMRqYm4b2ENtcBS6_1sZ70T9HusX_mqJ_iybH3zg6CIn59YXTdC0ESDdpx-9T4XG3ysULSuWhWm2A" alt="Kiểm tra thùng xe" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-1.5 text-white text-[10px]">
                          <span className="font-bold">Ảnh 2: Niêm phong kiện nguyên vẹn</span>
                          <span className="font-mono text-[9px] text-slate-200">10:17:04 • GPS Khớp</span>
                        </div>
                      </div>
                      <button type="button" className="rounded-lg border-2 border-dashed border-outline-variant/60 hover:border-primary/60 bg-surface-container-low/40 hover:bg-surface-container-low flex flex-col items-center justify-center p-2 text-on-surface-variant transition-colors group">
                        <span className="material-symbols-outlined text-[24px] text-primary group-hover:scale-110 transition-transform">add_a_photo</span>
                        <span className="text-[10px] font-semibold mt-1">Chụp / Thêm ảnh</span>
                        <span className="text-[8px] text-outline">Tối đa 5 ảnh</span>
                      </button>
                    </div>
                  </div>

                  {/* Cảnh báo */}
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-red-600 text-[20px] shrink-0 mt-0.5">warning</span>
                    <div className="text-xs text-red-900 leading-relaxed">
                      <span className="font-bold">Cảnh báo hệ thống:</span> Ngay khi nhấn <strong>"Gửi Báo Cáo & Chuyển Trạng Thái FAILED"</strong>, vận đơn <strong>#WB-2024-NW08</strong> sẽ dừng lộ trình, chuyển sang trạng thái cảnh báo khẩn cấp màu đỏ trên Dashboard Admin & Kho, đồng thời kích hoạt chuông cảnh báo tới đội điều phối ứng cứu.
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex items-center gap-3 pt-2">
                    <button type="submit" className="flex-1 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-display font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">report</span>
                      <span>Gửi Báo Cáo Sự Cố & Chuyển Trạng Thái Vận Đơn FAILED</span>
                    </button>
                    <button type="button" className="px-4 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-xs transition-colors">
                      Hủy bỏ
                    </button>
                  </div>
                </form>
              </div>

              {/* LỊCH SỬ SỰ CỐ */}
              <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 space-y-3">
                <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[19px]">receipt_long</span>
                    <h3 className="font-display font-bold text-sm text-on-surface">Nhật Ký Sự Cố Gắn Với Vận Đơn #WB-2024-NW08</h3>
                  </div>
                  <span className="text-xs text-on-surface-variant font-semibold">Bảng incident_reports</span>
                </div>
                <div className="p-3.5 rounded-lg bg-surface-container-low/50 border border-outline-variant/30 space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      <span className="font-mono font-bold text-xs text-red-700">#INC-2024-NW08-01</span>
                      <span className="text-[10px] bg-red-100 text-red-800 font-bold px-1.5 py-0.5 rounded uppercase">Sạt Lở Tuyến Đèo</span>
                    </div>
                    <span className="text-[11px] font-mono text-outline">10:20:15 • 24/10/2024</span>
                  </div>
                  <p className="text-xs text-on-surface leading-relaxed">
                    Đất đá sạt lở tại Km 42 ĐT158, xe Ford Ranger 29H-882.14 dừng an toàn. Lô 50 kiện thiết bị được che chắn bảo quản nguyên vẹn.
                  </p>
                  <div className="flex items-center justify-between pt-1 text-[11px] text-on-surface-variant border-t border-outline-variant/20">
                    <span className="flex items-center gap-1 font-medium">
                      <span className="material-symbols-outlined text-[14px] text-primary">person</span>
                      Người lập: Lê Hoàng Long (TNV Áp tải chính)
                    </span>
                    <span className="font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                      Trạng thái vận đơn: FAILED (Chờ cứu hộ)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT (5/12) */}
            <div className="lg:col-span-5 space-y-6">
              {/* QUY CHUẨN RBAC */}
              <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 space-y-3.5">
                <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-600 text-[19px]">gavel</span>
                    <h4 className="font-display font-bold text-xs text-on-surface uppercase tracking-wider">Quy Chuẩn Phân Quyền Sự Cố (RBAC)</h4>
                  </div>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">BẤT BIẾN</span>
                </div>
                <div className="space-y-2.5 text-xs text-on-surface">
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-emerald-50 border border-emerald-200">
                    <span className="material-symbols-outlined text-emerald-700 text-[17px] shrink-0 mt-0.5">check_circle</span>
                    <div className="text-[11px] leading-relaxed text-emerald-950">
                      <strong>Quyền TNV:</strong> Được quyền báo sự cố trên chuyến đi của chính mình. Bắt buộc phải ghi rõ lý do chi tiết và tải ảnh hiện trường.
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-red-50 border border-red-200">
                    <span className="material-symbols-outlined text-red-700 text-[17px] shrink-0 mt-0.5">cancel</span>
                    <div className="text-[11px] leading-relaxed text-red-950">
                      <strong>Nghiêm cấm:</strong> Kho và Admin <strong>chỉ có quyền xem</strong> hồ sơ sự cố. Không được tự ý tạo hộ và không được sửa nội dung báo cáo của TNV.
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-amber-50 border border-amber-200">
                    <span className="material-symbols-outlined text-amber-800 text-[17px] shrink-0 mt-0.5">swap_horiz</span>
                    <div className="text-[11px] leading-relaxed text-amber-950">
                      <strong>Cơ chế tự động:</strong> Khi gửi báo cáo sự cố thành công, hệ thống tự động cập nhật trạng thái vận đơn thành <strong>FAILED</strong> trên toàn chuỗi cung ứng.
                    </div>
                  </div>
                </div>
              </div>

              {/* TỔ TNV */}
              <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 space-y-3">
                <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[19px]">group</span>
                    <h4 className="font-display font-bold text-xs text-on-surface">Tổ TNV Áp Tải Vận Đơn (3 Thành Viên)</h4>
                  </div>
                  <span className="text-[10px] font-mono text-outline">waybill_volunteers</span>
                </div>
                <div className="divide-y divide-outline-variant/20">
                  <div className="py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">HL</div>
                      <div>
                        <div className="text-xs font-bold text-on-surface">Lê Hoàng Long</div>
                        <div className="text-[10px] text-on-surface-variant">Trưởng đoàn • Lái chính (29H-882.14)</div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">Người báo</span>
                  </div>
                  <div className="py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">QB</div>
                      <div>
                        <div className="text-xs font-bold text-on-surface">Vũ Quốc Bảo</div>
                        <div className="text-[10px] text-on-surface-variant">Kỹ thuật viên IT & Kiểm đếm</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-outline font-mono">0988.234.xxx</span>
                  </div>
                  <div className="py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs">MP</div>
                      <div>
                        <div className="text-xs font-bold text-on-surface">Trần Mai Phương</div>
                        <div className="text-[10px] text-on-surface-variant">Logistics & Giao tiếp sư phạm</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-outline font-mono">0905.123.xxx</span>
                  </div>
                </div>
              </div>

              {/* DANH MỤC THIẾT BỊ */}
              <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 space-y-3">
                <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[19px]">inventory_2</span>
                    <h4 className="font-display font-bold text-xs text-on-surface">Danh Mục 50 Kiện Hàng Trên Xe Cần Bảo Toàn</h4>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Niêm Phong #HN-8842-OK</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">laptop_mac</span>
                      <div>
                        <div className="font-bold text-on-surface">30 Laptop ThinkPad T480s (Core i5/16GB)</div>
                        <div className="text-[10px] text-on-surface-variant">Tài trợ: Tập đoàn FPT • Đã nạp EduOS Linux</div>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-primary">x30</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">desktop_windows</span>
                      <div>
                        <div className="font-bold text-on-surface">20 Màn hình Dell Professional 24" P2419H</div>
                        <div className="text-[10px] text-on-surface-variant">Tài trợ: VNPT Thanh Hóa • Nguyên thùng</div>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-primary">x20</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">router</span>
                      <div>
                        <div className="font-bold text-on-surface">02 Switch Cisco + 300m Cáp Mạng + 10 Bộ UPS</div>
                        <div className="text-[10px] text-on-surface-variant">Phụ kiện thi công phòng lab hoàn chỉnh</div>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-primary">01 bộ gộp</span>
                  </div>
                </div>
              </div>

              {/* BẢN ĐỒ VỊ TRÍ SỰ CỐ */}
              <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-xs text-on-surface flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">map</span>
                    Vị Trí Hiện Trường Sự Cố Trên Bản Đồ
                  </h4>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">GPS Live Ping</span>
                </div>
                <div className="relative rounded-lg overflow-hidden bg-slate-100 border border-outline-variant/40 h-36 flex items-center justify-center">
                  <svg className="w-full h-full text-slate-300" viewBox="0 0 400 150" fill="none">
                    <path d="M 20 80 Q 100 20, 180 70 T 320 60 T 380 90" stroke="#cbd5e1" strokeWidth="8" strokeLinecap="round"></path>
                    <path d="M 20 80 Q 100 20, 180 70" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round"></path>
                    <path d="M 180 70 L 220 75" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" strokeDasharray="4 4"></path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg ring-4 ring-red-200 animate-bounce">
                        <span className="material-symbols-outlined text-[18px]">landslide</span>
                      </div>
                      <span className="mt-1 text-[10px] font-bold bg-white text-red-700 px-2 py-0.5 rounded shadow border border-red-200">
                        Sạt lở Đèo Sài Khao (Km 42)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-[11px] text-on-surface-variant flex items-center justify-between">
                  <span>Cách Kho Hub Hà Nội: <strong>268 km</strong></span>
                  <span>Cách Điểm trường: <strong>42 km</strong></span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* MODAL XÁC NHẬN */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-2xl max-w-md w-full p-6 shadow-2xl border border-red-200 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto shadow-inner">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">HỆ THỐNG ĐÃ KÍCH HOẠT THÀNH CÔNG</span>
              <h3 className="text-lg font-display font-bold text-on-surface mt-1">Đã Gửi Báo Cáo & Chuyển Vận Đơn Sang FAILED</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Mã sự cố <strong>#INC-2024-NW08-99</strong> đã được ghi vào bảng <code className="font-mono text-primary">incident_reports</code> gắn cứng với tài khoản TNV <strong>Lê Hoàng Long</strong>. Tín hiệu cảnh báo đỏ và tọa độ thực tế đã truyền tới Trung tâm Điều phối EduShare.
              </p>
            </div>
            <div className="p-3 bg-surface-container-low rounded-xl text-left text-xs space-y-1.5 border border-outline-variant/30">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Trạng thái vận đơn:</span>
                <span className="font-bold text-red-600 font-mono">FAILED (Tạm hoãn do sự cố)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Quyền can thiệp:</span>
                <span className="font-semibold text-on-surface">Chỉ xem (Admin & Kho)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Đội cứu trợ địa phương:</span>
                <span className="font-semibold text-emerald-700">Đã nhận thông báo (Tam Chung)</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button type="button" onClick={() => setIsModalOpen(false)} className="w-full py-2.5 px-4 rounded-xl bg-primary hover:bg-primary-container text-white font-display font-bold text-xs shadow-sm transition-all">
                Đã Hiểu & Quay Lại Tuyến Đường
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
