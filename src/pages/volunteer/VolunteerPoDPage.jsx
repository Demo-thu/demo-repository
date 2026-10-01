import React, { useState } from 'react';

export default function VolunteerPoDPage() {
  const [sealCondition, setSealCondition] = useState('intact');
  const [checks, setChecks] = useState({ boot: true, lan: true, accessories: true });
  const [notes, setNotes] = useState('Đoàn xe vượt cung đèo Mường Lát an toàn lúc 14:15. Toàn bộ thiết bị được đưa lên phòng học bộ môn tin học tại tầng 2, tiến hành mở hộp và test cùng thầy Hà Văn Tiêu (Hiệu trưởng). Các em học sinh bán trú rất háo hức. Đề xuất ban dự án hỗ trợ thêm 01 ổn áp Lioa do điện lưới bản Tam Chung thường sụt áp vào buổi tối.');
  const [confirmTruth, setConfirmTruth] = useState(true);

  const handleSubmitPoD = () => {
    if (!confirmTruth) {
      alert('Vui lòng xác nhận cam đoan trước khi gửi báo cáo PoD!');
      return;
    }
    alert('Đã gửi thành công Biên bản PoD và tích lũy +16 giờ công vào hồ sơ tình nguyện viên!');
  };

  const toggleCheck = (key) => {
    setChecks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col">
          <div className="px-4 py-4 bg-surface-container-low border-b border-surface-container-high/40">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-on-primary text-[20px]">school</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">EduShare VN</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">CỔNG TÌNH NGUYỆN VIÊN</span>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Trực tuyến • Đội Vượt Đèo Tây Bắc</span>
            </div>
          </div>

          <nav className="px-2 py-4 flex flex-col gap-2">
            <div className="px-2 pt-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Điều Động & Ca Trực</span>
            </div>
            <div className="flex flex-col gap-1">
              <a className="flex items-center gap-2 px-2 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" href="/volunteer/attendance">
                <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                <span className="font-body-md text-body-md">Điểm danh ca trực</span>
              </a>
              <a className="flex items-center gap-2 px-2 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" href="/volunteer/leaderboard">
                <span className="material-symbols-outlined text-[20px]">military_tech</span>
                <span className="font-body-md text-body-md">Bảng xếp hạng & Giờ công</span>
              </a>
            </div>

            <div className="px-2 pt-2">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Vận Chuyển & Giao Nhận</span>
            </div>
            <div className="flex flex-col gap-1">
              <a className="flex items-center gap-2 px-2 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" href="/volunteer/waybill">
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span className="font-body-md text-body-md">Vận đơn được gán</span>
              </a>
              <a className="flex items-center gap-2 px-2 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" href="/volunteer/route-gps">
                <span className="material-symbols-outlined text-[20px]">near_me</span>
                <span className="font-body-md text-body-md">Tuyến đường & GPS</span>
              </a>
              <a className="flex items-center gap-2 px-2 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span className="font-body-md text-body-md">Xác nhận lấy hàng tại kho</span>
              </a>
            </div>

            <div className="px-2 pt-2">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Biên Bản & Sự Cố</span>
            </div>
            <div className="flex flex-col gap-1">
              <a className="flex items-center gap-2 px-2 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">warning</span>
                <span className="font-body-md text-body-md">Báo cáo sự cố chuyến đi</span>
              </a>
              {/* ACTIVE ITEM */}
              <a className="flex items-center gap-2 px-2 py-2 rounded-lg bg-primary-container text-on-primary font-medium shadow-sm transition-colors" href="/volunteer/pod">
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <span className="font-body-md text-body-md font-semibold">Hoàn thành & Minh chứng PoD</span>
              </a>
            </div>
          </nav>
        </div>

        {/* FOOTER SIDEBAR */}
        <div className="p-4 bg-surface-container-low border-t border-surface-container-high/40">
          <div className="p-2 rounded-lg bg-surface-container-lowest border border-error/20 flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-error font-semibold text-xs">
              <span className="material-symbols-outlined text-[16px]">emergency</span>
              <span>HỖ TRỢ KHẨN CẤP 24/7</span>
            </div>
            <span className="font-headline-sm text-headline-sm text-error font-bold">1900 6829</span>
            <span className="text-[11px] text-on-surface-variant">Ứng cứu đường đèo & tai nạn nghề nghiệp</span>
          </div>
          <div className="mt-2 text-[11px] text-on-surface-variant flex justify-between">
            <span>EduShare VN</span>
            <span className="font-code-num text-code-num">v2.8.4-PROD</span>
          </div>
        </div>
      </aside>

      {/* TOP HEADER */}
      <div className="pl-72">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-6">
          <div className="flex items-center flex-1 max-w-lg">
            <div className="relative w-full flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[20px]">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant" placeholder="Tìm mã vận đơn, chuyến xe, bảng xếp hạng..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1.5 rounded-lg text-on-surface">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="font-label-md text-label-md font-medium text-tertiary">Trực tuyến</span>
            </div>
            <button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" type="button">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span>
            </button>
            <div className="flex items-center gap-2 pl-4 border-l border-surface-container-high">
              <div className="flex flex-col text-right">
                <span className="font-label-md text-label-md text-on-surface font-bold leading-none">Lê Hoàng Long</span>
                <span className="font-label-sm text-label-sm text-primary mt-1 font-semibold">TNV-VCH-88 • Đội Trưởng Vượt Đèo Hà Giang</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold shadow-sm">
                LH
              </div>
            </div>
          </div>
        </header>

        {/* MAIN BODY */}
        <main className="w-full pt-20 px-6 pb-16 min-h-screen">
          {/* BREADCRUMB & TITLES */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-1">
                <span>EduShare TNV</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span>Biên Bản & Sự Cố</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-primary font-semibold">Hoàn Thành & Minh Chứng PoD</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                Hoàn Thành Chuyến Đi & Minh Chứng Bàn Giao (PoD)
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                Xác thực chuyển giao hiện vật học đường thực địa. Minh chứng ảnh kèm Watermark GPS và chữ ký số Ban Giám Hiệu để đối soát giờ công tự động.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface text-xs font-semibold transition-colors border border-outline-variant/60" type="button">
                <span className="material-symbols-outlined text-[16px] text-primary">menu_book</span>
                <span>Quy chuẩn PoD RBAC</span>
              </button>
              <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface text-xs font-semibold transition-colors border border-outline-variant/60" type="button">
                <span className="material-symbols-outlined text-[16px] text-tertiary">history</span>
                <span>Xem lịch sử 28 đợt trước</span>
              </button>
            </div>
          </div>

          {/* 4 BENTO KPI METRICS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-surface-container-high/40 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Tổng PoD hợp lệ</span>
                <div className="text-2xl font-bold font-headline-md text-on-surface mt-1">28 / 28 <span className="text-xs font-normal text-tertiary font-semibold">(100%)</span></div>
                <span className="text-[11px] text-tertiary flex items-center gap-1 mt-1 font-medium">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span> Không có vi phạm thực địa
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[24px]">task_alt</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-surface-container-high/40 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Trạng thái BGH ký số</span>
                <div className="text-2xl font-bold font-headline-md text-primary mt-1">ĐÃ KÝ SỐ CA</div>
                <span className="text-[11px] text-primary flex items-center gap-1 mt-1 font-medium">
                  <span className="material-symbols-outlined text-[14px]">lock</span> Đã khoá bảo vệ Read-only
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">draw</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-surface-container-high/40 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Tích lũy giờ công</span>
                <div className="text-2xl font-bold font-headline-md text-on-surface mt-1">+16 Giờ Công</div>
                <span className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[14px] text-tertiary">trending_up</span> Sẽ cộng ngay sau khi nộp
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[24px]">schedule</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-surface-container-high/40 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Chuỗi khối EduLedger</span>
                <div className="text-sm font-bold font-mono text-primary mt-1 truncate max-w-[150px]">SHA256: 8a7c29...</div>
                <span className="text-[11px] text-tertiary flex items-center gap-1 mt-1 font-medium">
                  <span className="material-symbols-outlined text-[14px]">verified_user</span> Hợp thức hóa công khai
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed/60 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[24px]">token</span>
              </div>
            </div>
          </div>

          {/* VẬN ĐƠN BANNER HEADER */}
          <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-surface-container-high/40 mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[26px]">local_shipping</span>
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono font-bold text-sm px-2.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed">#WB-2024-NW08</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-tertiary-fixed text-on-tertiary-fixed-variant">
                    Đã tiếp cận điểm trường an toàn
                  </span>
                  <span className="text-xs text-on-surface-variant">• Quyết định điều phối số 194/QĐ-EDUSHARE</span>
                </div>
                <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Chuyến xe Chi Viện: Điểm Trường PTDTBT THCS Mường Lát (Thanh Hóa)
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-on-surface-variant">
                  <span><strong>Lô thiết bị:</strong> 50 Kiện (30 Laptop ThinkPad + 20 Màn Dell + Switch)</span>
                  <span><strong>Mã RFID Seal:</strong> HN-8842-OK (Nguyên vẹn)</span>
                  <span><strong>Phương tiện:</strong> Ford Ranger 29H-882.14</span>
                </div>
              </div>
            </div>

            {/* DANH SÁCH TNV */}
            <div className="bg-surface-container-low px-4 py-2.5 rounded-xl border border-surface-container-high/60 flex flex-col gap-1.5 shrink-0">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant">Tổ TNV Áp Tải (waybill_volunteers)</span>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="inline-flex h-7 w-7 rounded-full bg-primary text-on-primary text-xs font-bold items-center justify-center ring-2 ring-surface-container-lowest" title="Lê Hoàng Long (Đội trưởng)">LH</div>
                  <div className="inline-flex h-7 w-7 rounded-full bg-tertiary text-on-tertiary text-xs font-bold items-center justify-center ring-2 ring-surface-container-lowest" title="Trần Quốc Bảo">TB</div>
                  <div className="inline-flex h-7 w-7 rounded-full bg-secondary text-on-secondary text-xs font-bold items-center justify-center ring-2 ring-surface-container-lowest" title="Nguyễn Mai Phương">MP</div>
                </div>
                <span className="text-xs font-medium text-on-surface">03 Thành viên phụ trách</span>
              </div>
            </div>
          </div>

          {/* 2 CỘT CHÍNH: 7/12 & 5/12 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

            {/* CỘT TRÁI (7/12): BÁO CÁO & MINH CHỨNG CỦA TNV */}
            <div className="lg:col-span-7 space-y-6">

              {/* KHỐI 1: THƯ VIỆN ẢNH NGHIỆM THU */}
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-surface-container-high/40 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-container-low pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">add_photo_alternate</span>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Ảnh Minh Chứng Bàn Giao Thực Địa</h3>
                    </div>
                    <p className="text-xs text-on-surface-variant mt-0.5">Tự động gắn chìm toạ độ GPS, mã vận đơn, con dấu niêm phong và dấu thời gian thực.</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded bg-surface-container text-xs font-semibold text-primary">
                    3/4 Ảnh đã thẩm định
                  </span>
                </div>

                {/* GRID ẢNH */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Ảnh 1 */}
                  <div className="relative group rounded-xl overflow-hidden aspect-[4/3] bg-surface-container border border-surface-container-high">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOIRi0gdrp3lMRroQuD6GxOebUmMEYPbu3cb4b7NH7WUVZqcDOM8ZiS7nymkJDcE078JJFPQnVZf4zpC_RrcrgawSopC3CWr4x5K3yrzNy0bjb8MyOf501ua0e0a96_miDrdG8mb7SGeEhG0Fgmrt94dWMTXEaJ4nq7UONIW6s6PYUx6X9GpbcTYemnkWiS47rrH1aYvrW26hDAW5zDHBs5-30idPqRKBB5txd0nSygKb5X7_Fkw122A" alt="Trao tặng máy tính cho học sinh Mường Lát" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-between p-2.5 text-white pointer-events-none">
                      <div className="flex justify-between items-start">
                        <span className="px-2 py-0.5 rounded bg-primary/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider">Ảnh 01 • Bàn giao lớp học</span>
                        <span className="px-1.5 py-0.5 rounded bg-black/60 text-[10px] font-mono text-tertiary-fixed">Geofence Pass</span>
                      </div>
                      <div className="font-mono text-[10px] space-y-0.5 bg-black/40 backdrop-blur-sm p-1.5 rounded">
                        <div>📍 20.5086° N, 104.6231° E (THCS Mường Lát)</div>
                        <div>🕒 24/10/2024 • 15:30:12 GMT+7</div>
                        <div>📦 #WB-2024-NW08 • Seal #HN-8842-OK</div>
                      </div>
                    </div>
                  </div>

                  {/* Ảnh 2 */}
                  <div className="relative group rounded-xl overflow-hidden aspect-[4/3] bg-surface-container border border-surface-container-high">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDufzeHitPQKCBWgkd9FqoRmrFGrg9rk73-tOJrH5sT24FLQH-oQyhdkI-wZfk06OoGkYGTWZfarSKjS6uXF8v1JfYOQrPoYIe-fyKrPXSwyCPhXms1dW-nFgMXip9_XNBMIiLbZy211v9YjZdHBccri5ZnOR6LO1-4nvk7vm1gGAMRqYm4b2ENtcBS6_1sZ70T9HusX_mqJ_iybH3zg6CIn59YXTdC0ESDdpx-9T4XG3ysULSuWhWm2A" alt="Kiểm tra kết nối phòng máy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-between p-2.5 text-white pointer-events-none">
                      <div className="flex justify-between items-start">
                        <span className="px-2 py-0.5 rounded bg-primary/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider">Ảnh 02 • Kiểm thử máy tính</span>
                        <span className="px-1.5 py-0.5 rounded bg-black/60 text-[10px] font-mono text-tertiary-fixed">Geofence Pass</span>
                      </div>
                      <div className="font-mono text-[10px] space-y-0.5 bg-black/40 backdrop-blur-sm p-1.5 rounded">
                        <div>📍 20.5086° N, 104.6231° E (Phòng Tin Học)</div>
                        <div>🕒 24/10/2024 • 15:42:05 GMT+7</div>
                        <div>📦 50/50 Bộ PC Khởi động tốt</div>
                      </div>
                    </div>
                  </div>

                  {/* Ảnh 3 */}
                  <div className="relative group rounded-xl overflow-hidden aspect-[4/3] bg-surface-container border border-surface-container-high">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI2PJ8YVDvF9jYUouQBEoLiBsKTVq0pZrcSEmjyYv5ne5B3N_iY2wMvBxt3K5AGsz2uDMt9jgpZktSqqeTRNjxn7qdp4TxijquhhFN1zp80IL-JHUp8WNWA3S0bU2GRUOKiavSsBTO0GTnFxeUNzgyfBCKcWIx9XnepqMy3BKD8uwQbp17SKicbc4OFhAEHnNiUEUJxRMIySm8dy7CwZ2Pv3tMndzQm6Z6imReWFesorJFj0sc1K9S0Q" alt="Kiện hàng có dán tem QR niêm phong" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-between p-2.5 text-white pointer-events-none">
                      <div className="flex justify-between items-start">
                        <span className="px-2 py-0.5 rounded bg-primary/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider">Ảnh 03 • Tem niêm phong kho</span>
                        <span className="px-1.5 py-0.5 rounded bg-black/60 text-[10px] font-mono text-tertiary-fixed">Đã kiểm tra</span>
                      </div>
                      <div className="font-mono text-[10px] space-y-0.5 bg-black/40 backdrop-blur-sm p-1.5 rounded">
                        <div>📍 20.5086° N, 104.6231° E • Mường Lát</div>
                        <div>🕒 24/10/2024 • 15:20:44 GMT+7</div>
                        <div>📦 Tem kiểm định nguyên vẹn</div>
                      </div>
                    </div>
                  </div>

                  {/* Nút Tải thêm ảnh */}
                  <div className="rounded-xl border-2 border-dashed border-primary/30 hover:border-primary bg-surface-container-low hover:bg-surface-container-high/60 transition-all flex flex-col items-center justify-center p-6 text-center cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-2">
                      <span className="material-symbols-outlined text-[24px]">add_a_photo</span>
                    </div>
                    <span className="font-headline-sm text-xs font-bold text-primary">Tải Lên Ảnh Minh Chứng Mới</span>
                    <span className="text-[11px] text-on-surface-variant mt-1">Hỗ trợ JPG, PNG (Tối đa 15MB). Tự động lấy toạ độ máy ảnh GPS.</span>
                  </div>
                </div>
              </div>

              {/* KHỐI 2: FORM BÁO CÁO NGHIỆM THU */}
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-surface-container-high/40 space-y-4">
                <div className="flex items-center gap-2 border-b border-surface-container-low pb-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">assignment</span>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Báo Cáo Nghiệm Thu & Ghi Chú Của Đội Áp Tải</h3>
                </div>

                {/* Tình trạng kiện hàng */}
                <div className="space-y-2">
                  <label className="font-label-md text-label-md font-semibold text-on-surface">1. Tình trạng niêm phong khi bàn giao tại trường</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <label className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${sealCondition === 'intact' ? 'border-primary bg-primary/5' : 'border-surface-container-high bg-surface-container-low hover:bg-surface-container'}`}>
                      <input type="radio" name="seal_condition" checked={sealCondition === 'intact'} onChange={() => setSealCondition('intact')} className="accent-primary" />
                      <span className="font-medium text-on-surface">Nguyên vẹn 100%, mã seal khớp tuyệt đối</span>
                    </label>
                    <label className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${sealCondition === 'damaged' ? 'border-primary bg-primary/5' : 'border-surface-container-high bg-surface-container-low hover:bg-surface-container'}`}>
                      <input type="radio" name="seal_condition" checked={sealCondition === 'damaged'} onChange={() => setSealCondition('damaged')} className="accent-primary" />
                      <span className="font-medium text-on-surface">Có hiện tượng rách mép ngoài (đã lập biên bản)</span>
                    </label>
                  </div>
                </div>

                {/* Các hạng mục kiểm thử */}
                <div className="space-y-2">
                  <label className="font-label-md text-label-md font-semibold text-on-surface">2. Kết quả kiểm tra thiết bị cùng giáo viên tin học trường</label>
                  <div className="space-y-2 text-xs">
                    <label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer">
                      <input type="checkbox" checked={checks.boot} onChange={() => toggleCheck('boot')} className="accent-primary rounded" />
                      <span className="text-on-surface font-medium">100% 50 bộ thiết bị đã khởi động vào màn hình chính hệ điều hành EduOS Vietnam Core.</span>
                    </label>
                    <label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer">
                      <input type="checkbox" checked={checks.lan} onChange={() => toggleCheck('lan')} className="accent-primary rounded" />
                      <span className="text-on-surface font-medium">Đã kết nối dây LAN từ Switch Cisco và đo tín hiệu mạng internet ổn định.</span>
                    </label>
                    <label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer">
                      <input type="checkbox" checked={checks.accessories} onChange={() => toggleCheck('accessories')} className="accent-primary rounded" />
                      <span className="text-on-surface font-medium">Bàn giao đầy đủ 50 củ sạc zin, chuột quang, lót chuột và 10 bộ lưu điện Santak.</span>
                    </label>
                  </div>
                </div>

                {/* Textarea ghi chú */}
                <div className="space-y-1.5">
                  <label className="font-label-md text-label-md font-semibold text-on-surface">3. Ghi chú chi tiết của đội áp tải (Lê Hoàng Long)</label>
                  <textarea
                    rows="3"
                    className="w-full p-3 rounded-lg bg-surface-container-low border border-surface-container-high font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Nhập ghi chú hiện trường..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                </div>

                {/* Cam kết trung thực */}
                <div className="p-3 rounded-lg bg-tertiary-fixed/30 border border-tertiary-fixed flex items-start gap-2.5">
                  <input type="checkbox" checked={confirmTruth} onChange={(e) => setConfirmTruth(e.target.checked)} id="confirm_truth" className="accent-tertiary rounded mt-0.5" />
                  <label htmlFor="confirm_truth" className="text-xs text-on-tertiary-fixed-variant leading-relaxed cursor-pointer font-medium">
                    Tôi xin cam đoan các hình ảnh và nội dung bàn giao trên là hoàn toàn chính xác, chụp tại điểm trường thực tế, tuân thủ đúng Quy chế Tình nguyện viên EduShare và quy định bảo vệ dữ liệu trẻ em.
                  </label>
                </div>
              </div>
            </div>

            {/* CỘT PHẢI (5/12): CHỮ KÝ BGH & NỘP POD */}
            <div className="lg:col-span-5 space-y-6">

              {/* KHỐI 1: CHỮ KÝ SỐ NHÀ TRƯỜNG */}
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-surface-container-high/40 space-y-4">
                <div className="flex items-center justify-between border-b border-surface-container-low pb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Chữ Ký Số Nhà Trường (PoD)</h3>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-tertiary-fixed text-on-tertiary-fixed-variant">
                    ĐÃ HOÀN TẤT KÝ
                  </span>
                </div>

                {/* Cảnh báo RBAC */}
                <div className="p-3 rounded-lg bg-primary-fixed/30 border border-primary-fixed flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">info</span>
                  <p className="text-xs text-on-primary-fixed leading-tight">
                    <strong>Ràng buộc RBAC:</strong> Tình nguyện viên chỉ nộp minh chứng SAU KHI trường đã ký nhận. Bạn tuyệt đối không thể can thiệp hoặc sửa đổi thông tin chữ ký của trường.
                  </p>
                </div>

                {/* Khung chữ ký số */}
                <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container-high/70 relative overflow-hidden flex flex-col items-center justify-center min-h-[160px]">
                  {/* Dấu mộc đỏ */}
                  <div className="absolute right-4 top-2 pointer-events-none opacity-90 rotate-[-6deg]">
                    <div className="w-32 h-32 rounded-full border-2 border-red-600/70 p-1 flex items-center justify-center text-center">
                      <div className="w-full h-full rounded-full border border-red-500/60 flex flex-col items-center justify-center text-[8px] font-bold text-red-600 uppercase leading-tight tracking-tighter">
                        <span>TRƯỜNG PTDTBT</span>
                        <span className="my-0.5 text-[9px] text-red-700">THCS MƯỜNG LÁT</span>
                        <span className="text-[7px] text-red-500 font-normal">ĐÃ KÝ SỐ TOKEN CA</span>
                        <span className="text-[6px] text-red-400">24/10/2024 • 15:45</span>
                      </div>
                    </div>
                  </div>

                  {/* Nét chữ ký SVG */}
                  <svg className="w-56 h-20 text-primary drop-shadow-sm" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewBox="0 0 220 70">
                    <path d="M20 40 C 35 15, 50 60, 65 30 C 80 10, 85 45, 100 35 C 115 25, 135 55, 155 20 C 170 5, 180 50, 195 32"></path>
                    <path d="M45 52 C 85 55, 140 52, 190 46" strokeDasharray="2 3" strokeWidth="1.5"></path>
                  </svg>

                  <div className="mt-2 text-center z-10">
                    <div className="font-bold text-xs text-on-surface">Thầy Hà Văn Tiêu</div>
                    <div className="text-[11px] text-on-surface-variant font-medium">Hiệu trưởng - Đại diện thụ hưởng điểm trường</div>
                    <div className="font-mono text-[10px] text-outline mt-1">Căn cước / Token CA: 038081****** (VNPT-CA Hợp Lệ)</div>
                  </div>
                </div>

                {/* Mã kiểm tra toàn vẹn */}
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Thời điểm ký:</span>
                    <span className="font-mono font-medium text-on-surface">15:45:20 • 24/10/2024</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Mã xác thực PoD:</span>
                    <span className="font-mono font-bold text-primary">#POD-2024-8892</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Chuỗi Hash bất biến:</span>
                    <span className="font-mono text-[11px] text-outline truncate max-w-[190px]">SHA256: 99A1-F4B2-880C</span>
                  </div>
                </div>
              </div>

              {/* KHỐI 2: ĐỐI SOÁT GEOFENCE */}
              <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-surface-container-high/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">near_me</span>
                    <h4 className="font-headline-sm text-sm font-bold text-on-surface">Đối Soát Tự Động Geofence</h4>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant text-[11px] font-bold">
                    100% Khớp Vị Trí
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-surface-container-low flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0">
                    <span className="material-symbols-outlined text-[22px]">radar</span>
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-on-surface">Khoảng cách đến tâm trường: 42 mét</div>
                    <div className="text-on-surface-variant text-[11px]">Nằm hoàn toàn trong phạm vi an toàn 500m của điểm trường xã Tam Chung.</div>
                  </div>
                </div>
              </div>

              {/* KHỐI 3: NÚT GỬI BÁO CÁO POD */}
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-surface-container-high/40 space-y-3 text-center">
                <button
                  className="w-full py-3.5 px-4 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base group"
                  type="button"
                  onClick={handleSubmitPoD}
                >
                  <span className="material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform">task_alt</span>
                  <span>Gửi Báo Cáo PoD & Hoàn Tất Chuyến Đi</span>
                </button>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Sau khi bấm gửi, hệ thống tự động:
                  <br />• Đóng trạng thái vận đơn sang <strong className="text-tertiary">HOÀN TẤT</strong>.
                  <br />• Ghi nhận <strong className="text-primary">+16 giờ công</strong> vào Bảng xếp hạng của bạn.
                  <br />• Phát hành Biên nhận số và gửi thông báo tới Nhà hảo tâm & Admin.
                </p>
              </div>

              {/* KHỐI 4: QUY CHUẨN PHÂN QUYỀN TNV */}
              <div className="bg-surface-container-low p-4 rounded-xl space-y-2 text-xs">
                <span className="font-bold text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  Quy chuẩn Phân quyền Tình nguyện viên
                </span>
                <ul className="space-y-1.5 text-on-surface-variant text-[11px]">
                  <li className="flex items-start gap-1.5">
                    <span className="material-symbols-outlined text-tertiary text-[14px] mt-0.5">check_circle</span>
                    <span><strong>Được phép:</strong> Chụp ảnh thực tế, ghi chú hiện trường, gửi hoàn tất để nhận giờ công.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="material-symbols-outlined text-tertiary text-[14px] mt-0.5">check_circle</span>
                    <span><strong>Được phép:</strong> Tự động tích lũy giờ công vào EduLedger ngay khi PoD hợp lệ.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="material-symbols-outlined text-error text-[14px] mt-0.5">cancel</span>
                    <span><strong>Nghiêm cấm:</strong> Không sửa chữ ký nhà trường, không tạo hộ sự cố, không tự sửa mã vận đơn.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
