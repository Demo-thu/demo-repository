import { useState } from "react";

export default function VolunteerPoDPage() {
  const [sealCondition, setSealCondition] = useState("intact");
  const [checks, setChecks] = useState({
    boot: true,
    lan: true,
    accessories: true,
  });
  const [notes, setNotes] = useState(
    "Đoàn xe vượt cung đèo Mường Lát an toàn lúc 14:15. Toàn bộ thiết bị được đưa lên phòng học bộ môn tin học tại tầng 2, tiến hành mở hộp và test cùng thầy Hà Văn Tiêu (Hiệu trưởng). Các em học sinh bán trú rất háo hức. Đề xuất ban dự án hỗ trợ thêm 01 ổn áp Lioa do điện lưới bản Tam Chung thường sụt áp vào buổi tối.",
  );
  const [confirmTruth, setConfirmTruth] = useState(true);

  const handleSubmitPoD = () => {
    if (!confirmTruth) {
      alert("Vui lòng xác nhận cam đoan trước khi gửi báo cáo PoD!");
      return;
    }
    alert("Đã gửi thành công Biên bản PoD và tích lũy +16 giờ công vào hồ sơ tình nguyện viên!");
  };

  const toggleCheck = (key) => {
    setChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface min-h-screen antialiased">
      {/* Sidebar */}
      <aside className="bg-surface-container-lowest fixed top-0 left-0 z-50 flex h-screen w-72 flex-col justify-between overflow-y-auto shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="bg-surface-container-low border-surface-container-high/40 border-b px-4 py-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-on-primary text-[20px]">school</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">
                  EduShare VN
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                  CỔNG TÌNH NGUYỆN VIÊN
                </span>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1">
              <span className="bg-tertiary h-2 w-2 animate-pulse rounded-full"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Trực tuyến • Đội Vượt Đèo Tây Bắc
              </span>
            </div>
          </div>

          <nav className="flex flex-col gap-2 px-2 py-4">
            <div className="px-2 pt-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wider uppercase">
                Điều Động & Ca Trực
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <a
                className="text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                href="/volunteer/attendance"
              >
                <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                <span className="font-body-md text-body-md">Điểm danh ca trực</span>
              </a>
              <a
                className="text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                href="/volunteer/leaderboard"
              >
                <span className="material-symbols-outlined text-[20px]">military_tech</span>
                <span className="font-body-md text-body-md">Bảng xếp hạng & Giờ công</span>
              </a>
            </div>

            <div className="px-2 pt-2">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wider uppercase">
                Vận Chuyển & Giao Nhận
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <a
                className="text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                href="/volunteer/waybill"
              >
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span className="font-body-md text-body-md">Vận đơn được gán</span>
              </a>
              <a
                className="text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                href="/volunteer/route-gps"
              >
                <span className="material-symbols-outlined text-[20px]">near_me</span>
                <span className="font-body-md text-body-md">Tuyến đường & GPS</span>
              </a>
              <a
                className="text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span className="font-body-md text-body-md">Xác nhận lấy hàng tại kho</span>
              </a>
            </div>

            <div className="px-2 pt-2">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wider uppercase">
                Biên Bản & Sự Cố
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <a
                className="text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface flex items-center gap-2 rounded-lg px-2 py-2 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">warning</span>
                <span className="font-body-md text-body-md">Báo cáo sự cố chuyến đi</span>
              </a>
              {/* Active Item */}
              <a
                className="bg-primary-container text-on-primary flex items-center gap-2 rounded-lg px-2 py-2 font-medium shadow-sm transition-colors"
                href="/volunteer/pod"
              >
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <span className="font-body-md text-body-md font-semibold">Hoàn thành & Minh chứng PoD</span>
              </a>
            </div>
          </nav>
        </div>

        {/* Footer Sidebar */}
        <div className="bg-surface-container-low border-surface-container-high/40 border-t p-4">
          <div className="bg-surface-container-lowest border-error/20 flex flex-col gap-1 rounded-lg border p-2">
            <div className="text-error flex items-center gap-1.5 text-xs font-semibold">
              <span className="material-symbols-outlined text-[16px]">emergency</span>
              <span>HỖ TRỢ KHẨN CẤP 24/7</span>
            </div>
            <span className="font-headline-sm text-headline-sm text-error font-bold">1900 6829</span>
            <span className="text-on-surface-variant text-[11px]">Ứng cứu đường đèo & tai nạn nghề nghiệp</span>
          </div>
          <div className="text-on-surface-variant mt-2 flex justify-between text-[11px]">
            <span>EduShare VN</span>
            <span className="font-code-num text-code-num">v2.8.4-PROD</span>
          </div>
        </div>
      </aside>

      {/* Top Header */}
      <div className="pl-72">
        <header className="bg-surface-container-lowest/90 fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between px-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="flex max-w-lg flex-1 items-center">
            <div className="relative flex w-full items-center">
              <span className="material-symbols-outlined text-on-surface-variant absolute left-3 text-[20px]">
                search
              </span>
              <input
                className="bg-surface-container-low text-on-surface font-body-md text-body-md focus:ring-primary/20 placeholder:text-on-surface-variant w-full rounded-lg py-2 pr-4 pl-10 transition-all focus:ring-2 focus:outline-none"
                placeholder="Tìm mã vận đơn, chuyến xe, bảng xếp hạng..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-surface-container-low text-on-surface flex items-center gap-1 rounded-lg px-2 py-1.5">
              <span className="bg-tertiary h-2 w-2 rounded-full"></span>
              <span className="font-label-md text-label-md text-tertiary font-medium">Trực tuyến</span>
            </div>
            <button
              className="text-on-surface-variant hover:bg-surface-container-low relative rounded-lg p-2 transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="bg-error ring-surface-container-lowest absolute top-2 right-2 h-2 w-2 rounded-full ring-2"></span>
            </button>
            <div className="border-surface-container-high flex items-center gap-2 border-l pl-4">
              <div className="flex flex-col text-right">
                <span className="font-label-md text-label-md text-on-surface leading-none font-bold">
                  Lê Hoàng Long
                </span>
                <span className="font-label-sm text-label-sm text-primary mt-1 font-semibold">
                  TNV-VCH-88 • Đội Trưởng Vượt Đèo Hà Giang
                </span>
              </div>
              <div className="bg-primary text-on-primary flex h-9 w-9 items-center justify-center rounded-full font-bold shadow-sm">
                LH
              </div>
            </div>
          </div>
        </header>

        {/* Main Body */}
        <main className="min-h-screen w-full px-6 pt-20 pb-16">
          {/* Breadcrumb & Titles */}
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="text-on-surface-variant mb-1 flex items-center gap-2 text-xs">
                <span>EduShare TNV</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span>Biên Bản & Sự Cố</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-primary font-semibold">Hoàn Thành & Minh Chứng PoD</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                Hoàn Thành Chuyến Đi & Minh Chứng Bàn Giao (PoD)
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                Xác thực chuyển giao hiện vật học đường thực địa. Minh chứng ảnh kèm Watermark GPS và chữ ký số Ban Giám
                Hiệu để đối soát giờ công tự động.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="bg-surface-container-low hover:bg-surface-container text-on-surface border-outline-variant/60 inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-primary text-[16px]">menu_book</span>
                <span>Quy chuẩn PoD RBAC</span>
              </button>
              <button
                className="bg-surface-container-low hover:bg-surface-container text-on-surface border-outline-variant/60 inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-tertiary text-[16px]">history</span>
                <span>Xem lịch sử 28 đợt trước</span>
              </button>
            </div>
          </div>

          {/* 4 Bento Kpi Metrics */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="bg-surface-container-lowest border-surface-container-high/40 flex items-center justify-between rounded-xl border p-5 shadow-sm">
              <div>
                <span className="text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                  Tổng PoD hợp lệ
                </span>
                <div className="font-headline-md text-on-surface mt-1 text-2xl font-bold">
                  28 / 28 <span className="text-tertiary text-xs font-normal font-semibold">(100%)</span>
                </div>
                <span className="text-tertiary mt-1 flex items-center gap-1 text-[11px] font-medium">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span> Không có vi phạm thực địa
                </span>
              </div>
              <div className="bg-tertiary-fixed text-tertiary flex h-12 w-12 items-center justify-center rounded-xl">
                <span className="material-symbols-outlined text-[24px]">task_alt</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest border-surface-container-high/40 flex items-center justify-between rounded-xl border p-5 shadow-sm">
              <div>
                <span className="text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                  Trạng thái BGH ký số
                </span>
                <div className="font-headline-md text-primary mt-1 text-2xl font-bold">ĐÃ KÝ SỐ CA</div>
                <span className="text-primary mt-1 flex items-center gap-1 text-[11px] font-medium">
                  <span className="material-symbols-outlined text-[14px]">lock</span> Đã khoá bảo vệ Read-only
                </span>
              </div>
              <div className="bg-primary-fixed text-primary flex h-12 w-12 items-center justify-center rounded-xl">
                <span className="material-symbols-outlined text-[24px]">draw</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest border-surface-container-high/40 flex items-center justify-between rounded-xl border p-5 shadow-sm">
              <div>
                <span className="text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                  Tích lũy giờ công
                </span>
                <div className="font-headline-md text-on-surface mt-1 text-2xl font-bold">+16 Giờ Công</div>
                <span className="text-on-surface-variant mt-1 flex items-center gap-1 text-[11px]">
                  <span className="material-symbols-outlined text-tertiary text-[14px]">trending_up</span> Sẽ cộng ngay
                  sau khi nộp
                </span>
              </div>
              <div className="bg-secondary-container text-secondary flex h-12 w-12 items-center justify-center rounded-xl">
                <span className="material-symbols-outlined text-[24px]">schedule</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest border-surface-container-high/40 flex items-center justify-between rounded-xl border p-5 shadow-sm">
              <div>
                <span className="text-on-surface-variant text-xs font-semibold tracking-wider uppercase">
                  Chuỗi khối EduLedger
                </span>
                <div className="text-primary mt-1 max-w-[150px] truncate font-mono text-sm font-bold">
                  SHA256: 8a7c29...
                </div>
                <span className="text-tertiary mt-1 flex items-center gap-1 text-[11px] font-medium">
                  <span className="material-symbols-outlined text-[14px]">verified_user</span> Hợp thức hóa công khai
                </span>
              </div>
              <div className="bg-tertiary-fixed/60 text-tertiary flex h-12 w-12 items-center justify-center rounded-xl">
                <span className="material-symbols-outlined text-[24px]">token</span>
              </div>
            </div>
          </div>

          {/* Vận Đơn Banner Header */}
          <div className="bg-surface-container-lowest border-surface-container-high/40 mb-6 flex flex-col justify-between gap-4 rounded-xl border p-5 shadow-sm lg:flex-row lg:items-center">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-on-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-[26px]">local_shipping</span>
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-primary-fixed text-on-primary-fixed rounded px-2.5 py-0.5 font-mono text-sm font-bold">
                    #WB-2024-NW08
                  </span>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold">
                    Đã tiếp cận điểm trường an toàn
                  </span>
                  <span className="text-on-surface-variant text-xs">• Quyết định điều phối số 194/QĐ-EDUSHARE</span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Chuyến xe Chi Viện: Điểm Trường PTDTBT THCS Mường Lát (Thanh Hóa)
                </h2>
                <div className="text-on-surface-variant flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                  <span>
                    <strong>Lô thiết bị:</strong> 50 Kiện (30 Laptop ThinkPad + 20 Màn Dell + Switch)
                  </span>
                  <span>
                    <strong>Mã RFID Seal:</strong> HN-8842-OK (Nguyên vẹn)
                  </span>
                  <span>
                    <strong>Phương tiện:</strong> Ford Ranger 29H-882.14
                  </span>
                </div>
              </div>
            </div>

            {/* Danh Sách Tnv */}
            <div className="bg-surface-container-low border-surface-container-high/60 flex shrink-0 flex-col gap-1.5 rounded-xl border px-4 py-2.5">
              <span className="text-on-surface-variant text-[11px] font-semibold tracking-wider uppercase">
                Tổ TNV Áp Tải (waybill_volunteers)
              </span>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 overflow-hidden">
                  <div
                    className="bg-primary text-on-primary ring-surface-container-lowest inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ring-2"
                    title="Lê Hoàng Long (Đội trưởng)"
                  >
                    LH
                  </div>
                  <div
                    className="bg-tertiary text-on-tertiary ring-surface-container-lowest inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ring-2"
                    title="Trần Quốc Bảo"
                  >
                    TB
                  </div>
                  <div
                    className="bg-secondary text-on-secondary ring-surface-container-lowest inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ring-2"
                    title="Nguyễn Mai Phương"
                  >
                    MP
                  </div>
                </div>
                <span className="text-on-surface text-xs font-medium">03 Thành viên phụ trách</span>
              </div>
            </div>
          </div>

          {/* 2 CỘT CHÍNH: 7/12 & 5/12 */}
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
            {/* CỘT TRÁI (7/12): BÁO CÁO & MINH CHỨNG CỦA TNV */}
            <div className="space-y-6 lg:col-span-7">
              {/* KHỐI 1: THƯ VIỆN ẢNH NGHIỆM THU */}
              <div className="bg-surface-container-lowest border-surface-container-high/40 space-y-4 rounded-xl border p-6 shadow-sm">
                <div className="border-surface-container-low flex flex-col justify-between gap-2 border-b pb-3 sm:flex-row sm:items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">add_photo_alternate</span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Ảnh Minh Chứng Bàn Giao Thực Địa
                      </h3>
                    </div>
                    <p className="text-on-surface-variant mt-0.5 text-xs">
                      Tự động gắn chìm toạ độ GPS, mã vận đơn, con dấu niêm phong và dấu thời gian thực.
                    </p>
                  </div>
                  <span className="bg-surface-container text-primary inline-flex items-center rounded px-2.5 py-1 text-xs font-semibold">
                    3/4 Ảnh đã thẩm định
                  </span>
                </div>

                {/* Grid Ảnh */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {/* Ảnh 1 */}
                  <div className="group bg-surface-container border-surface-container-high relative aspect-[4/3] overflow-hidden rounded-xl border">
                    <img
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                      alt="Trao tặng máy tính cho học sinh Mường Lát"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/85 via-black/20 to-transparent p-2.5 text-white">
                      <div className="flex items-start justify-between">
                        <span className="bg-primary/80 rounded px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase backdrop-blur-md">
                          Ảnh 01 • Bàn giao lớp học
                        </span>
                        <span className="text-tertiary-fixed rounded bg-black/60 px-1.5 py-0.5 font-mono text-[10px]">
                          Geofence Pass
                        </span>
                      </div>
                      <div className="space-y-0.5 rounded bg-black/40 p-1.5 font-mono text-[10px] backdrop-blur-sm">
                        <div>📍 20.5086° N, 104.6231° E (THCS Mường Lát)</div>
                        <div>🕒 24/10/2024 • 15:30:12 GMT+7</div>
                        <div>📦 #WB-2024-NW08 • Seal #HN-8842-OK</div>
                      </div>
                    </div>
                  </div>

                  {/* Ảnh 2 */}
                  <div className="group bg-surface-container border-surface-container-high relative aspect-[4/3] overflow-hidden rounded-xl border">
                    <img
                      src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80"
                      alt="Kiểm tra kết nối phòng máy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/85 via-black/20 to-transparent p-2.5 text-white">
                      <div className="flex items-start justify-between">
                        <span className="bg-primary/80 rounded px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase backdrop-blur-md">
                          Ảnh 02 • Kiểm thử máy tính
                        </span>
                        <span className="text-tertiary-fixed rounded bg-black/60 px-1.5 py-0.5 font-mono text-[10px]">
                          Geofence Pass
                        </span>
                      </div>
                      <div className="space-y-0.5 rounded bg-black/40 p-1.5 font-mono text-[10px] backdrop-blur-sm">
                        <div>📍 20.5086° N, 104.6231° E (Phòng Tin Học)</div>
                        <div>🕒 24/10/2024 • 15:42:05 GMT+7</div>
                        <div>📦 50/50 Bộ PC Khởi động tốt</div>
                      </div>
                    </div>
                  </div>

                  {/* Ảnh 3 */}
                  <div className="group bg-surface-container border-surface-container-high relative aspect-[4/3] overflow-hidden rounded-xl border">
                    <img
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                      alt="Kiện hàng có dán tem QR niêm phong"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/85 via-black/20 to-transparent p-2.5 text-white">
                      <div className="flex items-start justify-between">
                        <span className="bg-primary/80 rounded px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase backdrop-blur-md">
                          Ảnh 03 • Tem niêm phong kho
                        </span>
                        <span className="text-tertiary-fixed rounded bg-black/60 px-1.5 py-0.5 font-mono text-[10px]">
                          Đã kiểm tra
                        </span>
                      </div>
                      <div className="space-y-0.5 rounded bg-black/40 p-1.5 font-mono text-[10px] backdrop-blur-sm">
                        <div>📍 20.5086° N, 104.6231° E • Mường Lát</div>
                        <div>🕒 24/10/2024 • 15:20:44 GMT+7</div>
                        <div>📦 Tem kiểm định nguyên vẹn</div>
                      </div>
                    </div>
                  </div>

                  {/* Nút Tải thêm ảnh */}
                  <div className="border-primary/30 hover:border-primary bg-surface-container-low hover:bg-surface-container-high/60 group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center transition-all">
                    <div className="bg-primary/10 text-primary mb-2 flex h-12 w-12 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                      <span className="material-symbols-outlined text-[24px]">add_a_photo</span>
                    </div>
                    <span className="font-headline-sm text-primary text-xs font-bold">Tải Lên Ảnh Minh Chứng Mới</span>
                    <span className="text-on-surface-variant mt-1 text-[11px]">
                      Hỗ trợ JPG, PNG (Tối đa 15MB). Tự động lấy toạ độ máy ảnh GPS.
                    </span>
                  </div>
                </div>
              </div>

              {/* KHỐI 2: FORM BÁO CÁO NGHIỆM THU */}
              <div className="bg-surface-container-lowest border-surface-container-high/40 space-y-4 rounded-xl border p-6 shadow-sm">
                <div className="border-surface-container-low flex items-center gap-2 border-b pb-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">assignment</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Báo Cáo Nghiệm Thu & Ghi Chú Của Đội Áp Tải
                  </h3>
                </div>

                {/* Tình trạng kiện hàng */}
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface font-semibold">
                    1. Tình trạng niêm phong khi bàn giao tại trường
                  </label>
                  <div className="grid grid-cols-1 gap-3 text-xs sm:grid-cols-2">
                    <label
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border p-3 transition-colors ${sealCondition === "intact" ? "border-primary bg-primary/5" : "border-surface-container-high bg-surface-container-low hover:bg-surface-container"}`}
                    >
                      <input
                        type="radio"
                        name="seal_condition"
                        checked={sealCondition === "intact"}
                        onChange={() => setSealCondition("intact")}
                        className="accent-primary"
                      />
                      <span className="text-on-surface font-medium">Nguyên vẹn 100%, mã seal khớp tuyệt đối</span>
                    </label>
                    <label
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border p-3 transition-colors ${sealCondition === "damaged" ? "border-primary bg-primary/5" : "border-surface-container-high bg-surface-container-low hover:bg-surface-container"}`}
                    >
                      <input
                        type="radio"
                        name="seal_condition"
                        checked={sealCondition === "damaged"}
                        onChange={() => setSealCondition("damaged")}
                        className="accent-primary"
                      />
                      <span className="text-on-surface font-medium">
                        Có hiện tượng rách mép ngoài (đã lập biên bản)
                      </span>
                    </label>
                  </div>
                </div>

                {/* Các hạng mục kiểm thử */}
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface font-semibold">
                    2. Kết quả kiểm tra thiết bị cùng giáo viên tin học trường
                  </label>
                  <div className="space-y-2 text-xs">
                    <label className="bg-surface-container-low hover:bg-surface-container flex cursor-pointer items-center gap-2 rounded-lg p-2.5 transition-colors">
                      <input
                        type="checkbox"
                        checked={checks.boot}
                        onChange={() => toggleCheck("boot")}
                        className="accent-primary rounded"
                      />
                      <span className="text-on-surface font-medium">
                        100% 50 bộ thiết bị đã khởi động vào màn hình chính hệ điều hành EduOS Vietnam Core.
                      </span>
                    </label>
                    <label className="bg-surface-container-low hover:bg-surface-container flex cursor-pointer items-center gap-2 rounded-lg p-2.5 transition-colors">
                      <input
                        type="checkbox"
                        checked={checks.lan}
                        onChange={() => toggleCheck("lan")}
                        className="accent-primary rounded"
                      />
                      <span className="text-on-surface font-medium">
                        Đã kết nối dây LAN từ Switch Cisco và đo tín hiệu mạng internet ổn định.
                      </span>
                    </label>
                    <label className="bg-surface-container-low hover:bg-surface-container flex cursor-pointer items-center gap-2 rounded-lg p-2.5 transition-colors">
                      <input
                        type="checkbox"
                        checked={checks.accessories}
                        onChange={() => toggleCheck("accessories")}
                        className="accent-primary rounded"
                      />
                      <span className="text-on-surface font-medium">
                        Bàn giao đầy đủ 50 củ sạc zin, chuột quang, lót chuột và 10 bộ lưu điện Santak.
                      </span>
                    </label>
                  </div>
                </div>

                {/* Textarea ghi chú */}
                <div className="space-y-1.5">
                  <label className="font-label-md text-label-md text-on-surface font-semibold">
                    3. Ghi chú chi tiết của đội áp tải (Lê Hoàng Long)
                  </label>
                  <textarea
                    rows="3"
                    className="bg-surface-container-low border-surface-container-high font-body-md text-body-md text-on-surface focus:ring-primary/20 w-full resize-none rounded-lg border p-3 transition-all focus:ring-2 focus:outline-none"
                    placeholder="Nhập ghi chú hiện trường..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                </div>

                {/* Cam kết trung thực */}
                <div className="bg-tertiary-fixed/30 border-tertiary-fixed flex items-start gap-2.5 rounded-lg border p-3">
                  <input
                    type="checkbox"
                    checked={confirmTruth}
                    onChange={(e) => setConfirmTruth(e.target.checked)}
                    id="confirm_truth"
                    className="accent-tertiary mt-0.5 rounded"
                  />
                  <label
                    htmlFor="confirm_truth"
                    className="text-on-tertiary-fixed-variant cursor-pointer text-xs leading-relaxed font-medium"
                  >
                    Tôi xin cam đoan các hình ảnh và nội dung bàn giao trên là hoàn toàn chính xác, chụp tại điểm trường
                    thực tế, tuân thủ đúng Quy chế Tình nguyện viên EduShare và quy định bảo vệ dữ liệu trẻ em.
                  </label>
                </div>
              </div>
            </div>

            {/* CỘT PHẢI (5/12): CHỮ KÝ BGH & NỘP POD */}
            <div className="space-y-6 lg:col-span-5">
              {/* KHỐI 1: CHỮ KÝ SỐ NHÀ TRƯỜNG */}
              <div className="bg-surface-container-lowest border-surface-container-high/40 space-y-4 rounded-xl border p-6 shadow-sm">
                <div className="border-surface-container-low flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Chữ Ký Số Nhà Trường (PoD)
                    </h3>
                  </div>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant inline-flex items-center rounded px-2 py-0.5 text-[11px] font-bold">
                    ĐÃ HOÀN TẤT KÝ
                  </span>
                </div>

                {/* Cảnh báo RBAC */}
                <div className="bg-primary-fixed/30 border-primary-fixed flex items-start gap-2 rounded-lg border p-3">
                  <span className="material-symbols-outlined text-primary mt-0.5 shrink-0 text-[18px]">info</span>
                  <p className="text-on-primary-fixed text-xs leading-tight">
                    <strong>Ràng buộc RBAC:</strong> Tình nguyện viên chỉ nộp minh chứng SAU KHI trường đã ký nhận. Bạn
                    tuyệt đối không thể can thiệp hoặc sửa đổi thông tin chữ ký của trường.
                  </p>
                </div>

                {/* Khung chữ ký số */}
                <div className="bg-surface-container-low border-surface-container-high/70 relative flex min-h-[160px] flex-col items-center justify-center overflow-hidden rounded-xl border p-4">
                  {/* Dấu mộc đỏ */}
                  <div className="pointer-events-none absolute top-2 right-4 rotate-[-6deg] opacity-90">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-red-600/70 p-1 text-center">
                      <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-red-500/60 text-[8px] leading-tight font-bold tracking-tighter text-red-600 uppercase">
                        <span>TRƯỜNG PTDTBT</span>
                        <span className="my-0.5 text-[9px] text-red-700">THCS MƯỜNG LÁT</span>
                        <span className="text-[7px] font-normal text-red-500">ĐÃ KÝ SỐ TOKEN CA</span>
                        <span className="text-[6px] text-red-400">24/10/2024 • 15:45</span>
                      </div>
                    </div>
                  </div>

                  {/* Nét chữ ký SVG */}
                  <svg
                    className="text-primary h-20 w-56 drop-shadow-sm"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    viewBox="0 0 220 70"
                  >
                    <path d="M20 40 C 35 15, 50 60, 65 30 C 80 10, 85 45, 100 35 C 115 25, 135 55, 155 20 C 170 5, 180 50, 195 32"></path>
                    <path d="M45 52 C 85 55, 140 52, 190 46" strokeDasharray="2 3" strokeWidth="1.5"></path>
                  </svg>

                  <div className="z-10 mt-2 text-center">
                    <div className="text-on-surface text-xs font-bold">Thầy Hà Văn Tiêu</div>
                    <div className="text-on-surface-variant text-[11px] font-medium">
                      Hiệu trưởng - Đại diện thụ hưởng điểm trường
                    </div>
                    <div className="text-outline mt-1 font-mono text-[10px]">
                      Căn cước / Token CA: 038081****** (VNPT-CA Hợp Lệ)
                    </div>
                  </div>
                </div>

                {/* Mã kiểm tra toàn vẹn */}
                <div className="space-y-1 text-xs">
                  <div className="text-on-surface-variant flex justify-between">
                    <span>Thời điểm ký:</span>
                    <span className="text-on-surface font-mono font-medium">15:45:20 • 24/10/2024</span>
                  </div>
                  <div className="text-on-surface-variant flex justify-between">
                    <span>Mã xác thực PoD:</span>
                    <span className="text-primary font-mono font-bold">#POD-2024-8892</span>
                  </div>
                  <div className="text-on-surface-variant flex justify-between">
                    <span>Chuỗi Hash bất biến:</span>
                    <span className="text-outline max-w-[190px] truncate font-mono text-[11px]">
                      SHA256: 99A1-F4B2-880C
                    </span>
                  </div>
                </div>
              </div>

              {/* KHỐI 2: ĐỐI SOÁT GEOFENCE */}
              <div className="bg-surface-container-lowest border-surface-container-high/40 space-y-3 rounded-xl border p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">near_me</span>
                    <h4 className="font-headline-sm text-on-surface text-sm font-bold">Đối Soát Tự Động Geofence</h4>
                  </div>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant rounded px-2 py-0.5 text-[11px] font-bold">
                    100% Khớp Vị Trí
                  </span>
                </div>
                <div className="bg-surface-container-low flex items-center gap-3 rounded-lg p-3">
                  <div className="bg-tertiary/10 text-tertiary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[22px]">radar</span>
                  </div>
                  <div className="text-xs">
                    <div className="text-on-surface font-semibold">Khoảng cách đến tâm trường: 42 mét</div>
                    <div className="text-on-surface-variant text-[11px]">
                      Nằm hoàn toàn trong phạm vi an toàn 500m của điểm trường xã Tam Chung.
                    </div>
                  </div>
                </div>
              </div>

              {/* KHỐI 3: NÚT GỬI BÁO CÁO POD */}
              <div className="bg-surface-container-lowest border-surface-container-high/40 space-y-3 rounded-xl border p-6 text-center shadow-sm">
                <button
                  className="bg-primary hover:bg-primary-container text-on-primary group flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-base font-bold shadow-md transition-all hover:shadow-lg"
                  type="button"
                  onClick={handleSubmitPoD}
                >
                  <span className="material-symbols-outlined text-[22px] transition-transform group-hover:scale-110">
                    task_alt
                  </span>
                  <span>Gửi Báo Cáo PoD & Hoàn Tất Chuyến Đi</span>
                </button>
                <p className="text-on-surface-variant text-[11px] leading-relaxed">
                  Sau khi bấm gửi, hệ thống tự động:
                  <br />• Đóng trạng thái vận đơn sang <strong className="text-tertiary">HOÀN TẤT</strong>.
                  <br />• Ghi nhận <strong className="text-primary">+16 giờ công</strong> vào Bảng xếp hạng của bạn.
                  <br />• Phát hành Biên nhận số và gửi thông báo tới Nhà hảo tâm & Admin.
                </p>
              </div>

              {/* KHỐI 4: QUY CHUẨN PHÂN QUYỀN TNV */}
              <div className="bg-surface-container-low space-y-2 rounded-xl p-4 text-xs">
                <span className="text-on-surface flex items-center gap-1.5 font-bold">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  Quy chuẩn Phân quyền Tình nguyện viên
                </span>
                <ul className="text-on-surface-variant space-y-1.5 text-[11px]">
                  <li className="flex items-start gap-1.5">
                    <span className="material-symbols-outlined text-tertiary mt-0.5 text-[14px]">check_circle</span>
                    <span>
                      <strong>Được phép:</strong> Chụp ảnh thực tế, ghi chú hiện trường, gửi hoàn tất để nhận giờ công.
                    </span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="material-symbols-outlined text-tertiary mt-0.5 text-[14px]">check_circle</span>
                    <span>
                      <strong>Được phép:</strong> Tự động tích lũy giờ công vào EduLedger ngay khi PoD hợp lệ.
                    </span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="material-symbols-outlined text-error mt-0.5 text-[14px]">cancel</span>
                    <span>
                      <strong>Nghiêm cấm:</strong> Không sửa chữ ký nhà trường, không tạo hộ sự cố, không tự sửa mã vận
                      đơn.
                    </span>
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
