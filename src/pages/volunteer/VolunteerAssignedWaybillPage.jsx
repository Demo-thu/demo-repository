import React, { useState, useEffect } from 'react';

export default function VolunteerAssignedWaybillPage() {
  const [isIncidentModalOpen, setIsIncidentModalOpen] = useState(false);
  const [incidentReason, setIncidentReason] = useState('');
  const [incidentType, setIncidentType] = useState('Sạt lở đất đá chắn ngang đường đèo (Bất khả kháng)');
  const [shiftSeconds, setShiftSeconds] = useState(22965);

  useEffect(() => {
    const interval = setInterval(() => {
      setShiftSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds) => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  const handleOpenIncidentModal = () => setIsIncidentModalOpen(true);
  const handleCloseIncidentModal = () => setIsIncidentModalOpen(false);

  const handleSubmitIncident = () => {
    if (!incidentReason || incidentReason.trim() === '') {
      alert('Vui lòng nhập chi tiết sự cố thực địa theo quy định RBAC!');
      return;
    }
    alert('ĐÃ PHÁT LỆNH BÁO CÁO SỰ CỐ! Trạng thái vận đơn #WB-2024-NW08 chuyển thành: FAILED. Trung tâm điều phối EduShare đã tiếp nhận và đang điều xe cứu hộ.');
    setIsIncidentModalOpen(false);
  };

  const handleCheckout = () => {
    if (window.confirm('Xác nhận hoàn tất ca trực và điểm danh ra ca lúc này?')) {
      alert('Đã ghi nhận điểm danh ra ca thành công vào CSDL hệ thống!');
    }
  };

  const handleSyncData = () => {
    alert('Đã đồng bộ dữ liệu ngoại tuyến với trạm vệ tinh VNPT');
  };

  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col">
          <div className="px-6 h-16 flex items-center gap-3 bg-surface-container-low">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-[20px]">school</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight">EduShare VN</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Cổng Tình Nguyện</span>
            </div>
          </div>
          <div className="px-4 py-4">
            <nav className="flex flex-col gap-1">
              <div className="px-3 pt-3 pb-1 font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">Điều Động & Ca Trực</div>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" href="/volunteer/attendance">
                <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                <span className="font-body-md text-body-md">Điểm danh ca trực</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" href="/volunteer/leaderboard">
                <span className="material-symbols-outlined text-[20px]">leaderboard</span>
                <span className="font-body-md text-body-md">Bảng xếp hạng & Giờ công</span>
              </a>
              
              <div className="px-3 pt-5 pb-1 font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">Vận Chuyển & Giao Nhận</div>
              <a aria-current="page" className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all bg-primary-container text-on-primary font-medium shadow-sm" href="/volunteer/waybill">
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span className="font-body-md text-body-md flex-1">Vận đơn được gán</span>
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" href="/volunteer/route-gps">
                <span className="material-symbols-outlined text-[20px]">near_me</span>
                <span className="font-body-md text-body-md">Tuyến đường & GPS</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span className="font-body-md text-body-md">Xác nhận lấy hàng tại kho</span>
              </a>

              <div className="px-3 pt-5 pb-1 font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">Biên Bản & Sự Cố</div>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">warning</span>
                <span className="font-body-md text-body-md">Báo cáo sự cố chuyến đi</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <span className="font-body-md text-body-md">Hoàn thành & Minh chứng PoD</span>
              </a>
            </nav>
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="p-3.5 bg-surface-container rounded-xl flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Điều phối khẩn cấp</span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">24/7</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
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
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-8">
          <div className="flex items-center gap-4 w-96">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
              <input className="w-full bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm pl-10 pr-4 py-2 rounded-lg outline-none focus:bg-surface-container-low transition-all" placeholder="Tìm mã vận đơn, chuyến xe, điểm trường..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-2.5 py-1 bg-surface-container-lowest rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface font-medium">Trực tuyến</span>
            </div>
            <button aria-label="Thông báo" className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error"></span>
            </button>
            <div className="h-7 w-[1px] bg-outline-variant/30"></div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col text-right">
                <div className="flex items-center justify-end gap-1.5">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">Lê Hoàng Long</span>
                  <span className="px-1.5 py-0.2 bg-primary-fixed text-on-primary-fixed font-code-num text-label-sm rounded-lg">TNV-VCH-88</span>
                </div>
                <span className="font-body-sm text-body-sm text-secondary truncate max-w-[210px]">Đội Trưởng VC Vượt Đèo Hà Giang</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        <main className="relative pt-16 bg-surface min-h-screen">
          <div className="w-full px-8 py-6">
            <div id="volunteer-portal-content-slot">
              <div className="flex flex-col w-full gap-6">
                
                {/* Breadcrumb & Top Bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 font-label-md text-label-md text-secondary">
                    <span className="flex items-center gap-1 text-on-surface hover:text-primary transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-[18px]">volunteer_activism</span>
                      EduShare TNV
                    </span>
                    <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
                    <span>Vận Chuyển & Giao Nhận</span>
                    <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
                    <span className="font-code-num text-on-surface font-semibold bg-surface-container-high px-2 py-0.5 rounded-lg text-primary">#WB-2024-NW08</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-code-num text-label-sm">
                      <span className="w-2 h-2 rounded-full bg-tertiary-container animate-ping"></span>
                      GPS Realtime Sync: 104.6231° E
                    </span>
                    <button 
                      className="px-3 py-1.5 bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-lg flex items-center gap-1.5 shadow-sm transition-all" 
                      onClick={handleSyncData}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px] text-primary">sync</span>
                      Đồng bộ dữ liệu
                    </button>
                  </div>
                </div>

                {/* Operational Duty Shift Banner (RBAC Check-in/Check-out) */}
                <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm p-5">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-10">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0 shadow-sm">
                        <span className="material-symbols-outlined text-[26px]">badge</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span className="font-headline-sm text-headline-sm text-on-surface">Ca Trực Cơ Động Vùng Cao</span>
                          <span className="px-2 py-0.5 rounded-md bg-secondary-container text-on-secondary-container font-code-num text-label-sm">#CA-2024-1024</span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-label-sm font-label-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                            Đang hoạt động (Checked-in)
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-secondary mt-1">
                          Đã điểm danh vào ca lúc <strong className="text-on-surface font-semibold">07:15 (24/10/2024)</strong> tại <strong className="text-on-surface font-semibold">Tổng Kho Giáo Dục HUB-01 Hà Nội</strong> • Phương tiện: <span className="font-code-num text-primary font-medium">Ford Ranger 29H-882.14</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 self-end lg:self-center">
                      <div className="text-right hidden sm:block">
                        <div className="font-label-sm text-label-sm uppercase text-outline">Thời gian ca hôm nay</div>
                        <div className="font-code-num text-headline-sm text-on-surface font-bold tracking-tight">
                          {formatTime(shiftSeconds)}
                        </div>
                      </div>
                      <button 
                        className="px-4 py-2.5 rounded-lg bg-surface-container-high hover:bg-error-container hover:text-on-error-container text-on-surface-variant font-label-md text-label-md flex items-center gap-2 transition-all" 
                        onClick={handleCheckout}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px] text-error">logout</span>
                        <span>Điểm danh ra ca (Kết thúc)</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Primary Task Identity & Status Strip */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-surface-container-low p-6 rounded-xl shadow-sm">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm tracking-wider uppercase font-semibold">
                        <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                        Đang Vận Chuyển (In-Transit)
                      </span>
                      <span className="font-code-num text-label-md text-secondary">Mã vận đơn: <strong className="text-on-surface font-bold">#WB-2024-NW08</strong></span>
                      <span className="px-2 py-0.5 rounded-md bg-surface-container-highest text-on-surface-variant font-code-num text-label-sm">Độ ưu tiên: Khẩn cấp</span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
                      Chi Viện Thiết Bị Tin Học: Điểm Trường PTDTBT THCS Mường Lát
                    </h1>
                    <p className="font-body-md text-body-md text-secondary">
                      Nhiệm vụ cấp bách theo Quyết định điều phối số 194/QĐ-EDUSHARE: Bàn giao phòng máy tính thực hành trước kỳ thi học kỳ I.
                    </p>
                  </div>
                  
                  {/* Quick Warehouse Pickup Verification Stamp */}
                  <div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-xl shadow-sm border-l-4 border-primary shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[24px]">verified_user</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase text-secondary">Xác nhận lấy hàng tại kho</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-code-num text-label-md font-bold text-on-surface">Seal #HN-8842-OK</span>
                        <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
                      </div>
                      <span className="font-body-sm text-body-sm text-secondary">Quét QR lúc 08:30 (HUB-01)</span>
                    </div>
                  </div>
                </div>

                {/* Bento Stats & Mission Telemetry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Stat 1: Route Distance */}
                  <div className="p-5 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Lộ Trình Đèo Núi</span>
                      <span className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">explore</span>
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg font-bold text-on-surface">185</span>
                        <span className="font-body-md text-body-md text-secondary">/ 310 km</span>
                      </div>
                      <div className="w-full bg-surface-container-high h-2 rounded-full mt-2 overflow-hidden">
                        <div className="bg-primary h-full rounded-full transition-all" style={{ width: '59.6%' }}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between font-body-sm text-body-sm text-secondary mt-3 pt-2 bg-surface-container-low px-2.5 py-1.5 rounded-lg">
                      <span>Đã đi: <strong>60%</strong></span>
                      <span className="text-primary font-medium">Còn 125 km (Dốc Sài Khao)</span>
                    </div>
                  </div>

                  {/* Stat 2: Escorted Cargo */}
                  <div className="p-5 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Hiện Vật Áp Tải</span>
                      <span className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
                        <span className="material-symbols-outlined text-[20px]">devices</span>
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg font-bold text-on-surface">50</span>
                        <span className="font-body-md text-body-md text-secondary">Kiện thiết bị</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-secondary truncate mt-1">30 Laptop Lenovo + 20 Màn Dell 24"</p>
                    </div>
                    <div className="flex items-center justify-between font-body-sm text-body-sm text-emerald-800 bg-emerald-50 px-2.5 py-1.5 rounded-lg mt-3">
                      <span className="flex items-center gap-1 font-label-md text-label-md">
                        <span className="material-symbols-outlined text-[16px]">qr_code_2</span>
                        RFID Seal Khóa
                      </span>
                      <span className="font-code-num text-label-sm font-semibold">100% Nguyên vẹn</span>
                    </div>
                  </div>

                  {/* Stat 3: Escort Team RBAC */}
                  <div className="p-5 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Tổ TNV Áp Tải</span>
                      <span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface">
                        <span className="material-symbols-outlined text-[20px]">groups</span>
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg font-bold text-on-surface">03</span>
                        <span className="font-body-md text-body-md text-secondary">Tình nguyện viên</span>
                      </div>
                      <div className="flex items-center -space-x-2 mt-2">
                        <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center text-[11px] font-bold ring-2 ring-surface-container-lowest" title="Lê Hoàng Long (Trưởng đoàn)">LHL</div>
                        <div className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center text-[11px] font-bold ring-2 ring-surface-container-lowest" title="Trần Đình Trọng (Kỹ thuật)">TĐT</div>
                        <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-[11px] font-bold ring-2 ring-surface-container-lowest" title="Nguyễn Minh Tuấn (Hậu cần)">NMT</div>
                        <span className="pl-3 font-label-sm text-label-sm text-on-surface-variant font-medium">waybill_volunteers</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between font-body-sm text-body-sm text-secondary bg-surface-container-low px-2.5 py-1.5 rounded-lg mt-3">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                        VNeID Xác Thực
                      </span>
                      <span className="font-code-num text-label-sm font-semibold">Bảo hiểm 100%</span>
                    </div>
                  </div>

                  {/* Stat 4: Volunteer Rank & Hours */}
                  <div className="p-5 bg-gradient-to-br from-primary-fixed to-surface-container-low rounded-xl shadow-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary-fixed-variant font-semibold">Cống Hiến Cá Nhân</span>
                      <span className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">military_tech</span>
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg font-bold text-on-primary-fixed">240</span>
                        <span className="font-body-md text-body-md text-on-primary-fixed-variant">Giờ công</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-primary-fixed-variant mt-1 font-medium">+16 giờ dự kiến tích lũy chuyến này</p>
                    </div>
                    <div className="flex items-center justify-between bg-surface-container-lowest/80 px-2.5 py-1.5 rounded-lg mt-3 text-on-surface">
                      <span className="font-label-sm text-label-sm uppercase font-semibold text-primary">Toàn Quốc Tháng 10</span>
                      <span className="font-headline-sm text-headline-sm font-bold text-primary flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[18px] text-amber-500">trophy</span>
                        Top #3
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main Grid: 7 Cols (Operation & Cargo) : 5 Cols (PoD, Destination & Strict RBAC) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* LEFT COLUMN: 7 / 12 */}
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    {/* Route Stepper Timeline */}
                    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                      <div className="flex items-center justify-between pb-4">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[22px]">alt_route</span>
                          <h2 className="font-headline-sm text-headline-sm text-on-surface">Tiến Trình Chuyến Đi (Hành Trình 4 Chặng)</h2>
                        </div>
                        <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2.5 py-1 rounded-full">Telemetry Trực Tiếp</span>
                      </div>
                      
                      {/* 4-step vertical timeline */}
                      <div className="relative pl-6 flex flex-col gap-6 mt-3">
                        {/* Timeline Track Line */}
                        <div className="absolute left-2.5 top-3 bottom-4 w-0.5 bg-surface-container-highest"></div>
                        
                        {/* Stage 1: Completed */}
                        <div className="relative flex items-start gap-3">
                          <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm">
                            <span className="material-symbols-outlined text-[14px]">check</span>
                          </div>
                          <div className="flex-1 bg-surface-container-low p-3.5 rounded-lg">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <span className="font-label-md text-label-md font-semibold text-on-surface">Chặng 1: Xuất Kho Tổng HUB-01 Hà Nội</span>
                              <span className="font-code-num text-body-sm text-secondary">08:30 (24/10) • Đã Hoàn Tất</span>
                            </div>
                            <p className="font-body-sm text-body-sm text-secondary mt-1">
                              Tổ TNV kiểm kê 50/50 kiện hàng. Quét mã vạch xuất kho & niêm phong chì RFID kẹp tại cửa xe bán tải.
                            </p>
                            <div className="mt-2 flex items-center gap-2">
                              <span className="inline-flex items-center gap-1 font-code-num text-[11px] bg-surface-container-lowest px-2 py-0.5 rounded text-tertiary font-semibold">
                                <span className="material-symbols-outlined text-[13px]">tag</span> SEAL-HN-8842
                              </span>
                              <span className="text-body-sm text-secondary text-[11px]">• Xác nhận bởi Thủ kho HUB-01</span>
                            </div>
                          </div>
                        </div>

                        {/* Stage 2: Completed */}
                        <div className="relative flex items-start gap-3">
                          <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm">
                            <span className="material-symbols-outlined text-[14px]">check</span>
                          </div>
                          <div className="flex-1 bg-surface-container-low p-3.5 rounded-lg">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <span className="font-label-md text-label-md font-semibold text-on-surface">Chặng 2: Trạm Dừng Chân Cơ Động TP. Thanh Hóa</span>
                              <span className="font-code-num text-body-sm text-secondary">12:30 (24/10) • Đã Hoàn Tất</span>
                            </div>
                            <p className="font-body-sm text-body-sm text-secondary mt-1">
                              Kiểm tra dây đai chằng buộc chống sốc màn hình LCD. Cảm biến thùng xe ghi nhận nhiệt độ 21.5°C, độ ẩm 62% đạt chuẩn lưu chuyển thiết bị nhạy cảm.
                            </p>
                          </div>
                        </div>

                        {/* Stage 3: Current Active */}
                        <div className="relative flex items-start gap-3">
                          <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md animate-pulse">
                            <span className="material-symbols-outlined text-[14px]">near_me</span>
                          </div>
                          <div className="flex-1 bg-primary-fixed/30 p-4 rounded-lg">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <div className="flex items-center gap-2">
                                <span className="font-label-md text-label-md font-bold text-primary">Chặng 3: Đèo Mã Pí Lèng / Dốc Cổng Trời Tam Chung</span>
                                <span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary text-[10px] font-bold uppercase tracking-wider">Đang Di Chuyển</span>
                              </div>
                              <span className="font-code-num text-body-sm font-semibold text-primary">Hiện tại (13:52)</span>
                            </div>
                            <p className="font-body-sm text-body-sm text-on-surface mt-1.5 font-medium">
                              Tốc độ đo được: 35 km/h • Tọa độ: 20.5186° N, 104.6231° E. Mặt đường trơn ướt sương mù vùng cao, tài xế Lê Hoàng Long đang duy trì số thấp.
                            </p>
                            <div className="mt-3 flex items-center gap-2 flex-wrap">
                              <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-secondary font-code-num text-[12px] flex items-center gap-1 shadow-sm">
                                <span className="material-symbols-outlined text-[15px] text-tertiary">speed</span> 35 km/h
                              </span>
                              <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-secondary font-code-num text-[12px] flex items-center gap-1 shadow-sm">
                                <span className="material-symbols-outlined text-[15px] text-primary">battery_charging_full</span> Xe 94% Pin/Nhiên liệu
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Stage 4: Upcoming Destination */}
                        <div className="relative flex items-start gap-3">
                          <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-surface-container-high text-outline flex items-center justify-center">
                            <span className="material-symbols-outlined text-[14px]">flag</span>
                          </div>
                          <div className="flex-1 bg-surface-container-low/60 p-3.5 rounded-lg opacity-80">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <span className="font-label-md text-label-md font-medium text-on-surface">Chặng 4: Điểm Trường PTDTBT THCS Mường Lát</span>
                              <span className="font-code-num text-body-sm text-secondary">Dự kiến 16:30 chiều nay</span>
                            </div>
                            <p className="font-body-sm text-body-sm text-secondary mt-1">
                              Giao nhận bàn giao trực tiếp tại Phòng Tin Học số 2. Hiệu trưởng trường sẵn sàng tiếp nhận & chuẩn bị ký số PoD.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Manifest & Equipment Specifications (50 units) */}
                    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-[22px]">inventory_2</span>
                            <h2 className="font-headline-sm text-headline-sm text-on-surface">Danh Mục Thiết Bị Áp Tải (50 Kiện)</h2>
                          </div>
                          <p className="font-body-sm text-body-sm text-secondary">Toàn bộ đã được kiểm thử Burn-in 72h & dán tem QR Quản lý Nhà nước</p>
                        </div>
                        <span className="font-code-num text-label-sm bg-surface-container text-on-surface-variant px-2.5 py-1 rounded-md self-start sm:self-center">
                          Seal RFID: HN-8842-OK
                        </span>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full text-left font-body-sm text-body-sm">
                          <thead>
                            <tr className="bg-surface-container-low text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                              <th className="py-2.5 px-3 rounded-l-lg">STT / Mã Lô</th>
                              <th className="py-2.5 px-3">Loại Thiết Bị & Cấu Hình</th>
                              <th className="py-2.5 px-3">Đơn Vị Tài Trợ</th>
                              <th className="py-2.5 px-3 text-center">SL</th>
                              <th className="py-2.5 px-3 rounded-r-lg text-right">Tình Trạng</th>
                            </tr>
                          </thead>
                          <tbody className="text-on-surface">
                            <tr className="hover:bg-surface-container-low transition-colors">
                              <td className="py-3 px-3 font-code-num text-label-md font-semibold text-primary">#LOT-LENOVO-01</td>
                              <td className="py-3 px-3">
                                <div className="font-label-md text-label-md font-medium text-on-surface">Lenovo ThinkPad T480s</div>
                                <div className="text-secondary text-[11px] font-code-num">Core i5 8th / 16GB RAM / SSD 256GB / Đã cài Win11 Edu</div>
                              </td>
                              <td className="py-3 px-3">
                                <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface font-medium">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                                  Tập đoàn FPT
                                </span>
                              </td>
                              <td className="py-3 px-3 text-center font-code-num font-bold">30 máy</td>
                              <td className="py-3 px-3 text-right">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-semibold">
                                  Đã niêm phong
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-surface-container-low transition-colors">
                              <td className="py-3 px-3 font-code-num text-label-md font-semibold text-primary">#LOT-DELL-MON-02</td>
                              <td className="py-3 px-3">
                                <div className="font-label-md text-label-md font-medium text-on-surface">Màn hình Dell Professional 24" P2419H</div>
                                <div className="text-secondary text-[11px] font-code-num">Full HD IPS kèm cáp HDMI & chân đế xoay công thái học</div>
                              </td>
                              <td className="py-3 px-3">
                                <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface font-medium">
                                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                  VNPT Thanh Hóa
                                </span>
                              </td>
                              <td className="py-3 px-3 text-center font-code-num font-bold">20 chiếc</td>
                              <td className="py-3 px-3 text-right">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-semibold">
                                  Đã niêm phong
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-surface-container-low transition-colors">
                              <td className="py-3 px-3 font-code-num text-label-md font-semibold text-secondary">#ACC-NET-HUB-03</td>
                              <td className="py-3 px-3">
                                <div className="font-label-md text-label-md font-medium text-on-surface">Bộ chuyển mạch Switch Cisco 24 Port Gigabit + 300m Dây Mạng CAT6</div>
                                <div className="text-secondary text-[11px] font-code-num">Vật tư phụ trợ thi công phòng lab</div>
                              </td>
                              <td className="py-3 px-3">
                                <span className="font-label-sm text-label-sm text-secondary font-medium">Quỹ Khuyến Học VN</span>
                              </td>
                              <td className="py-3 px-3 text-center font-code-num font-bold">01 bộ</td>
                              <td className="py-3 px-3 text-right">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-semibold">
                                  Đã niêm phong
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Action Panel: Emergency Incident Reporting (RBAC Controlled) */}
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-5 shadow-sm">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-error text-on-error flex items-center justify-center shrink-0 shadow-sm">
                            <span className="material-symbols-outlined text-[24px]">crisis_alert</span>
                          </div>
                          <div>
                            <h3 className="font-headline-sm text-headline-sm text-error">Báo Cáo Sự Cố Chuyến Đi (Chuyển Trạng Thái FAILED)</h3>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                              Khi kích hoạt, vận đơn sẽ <strong>ngay lập tức chuyển FAILED</strong> để kích hoạt đội cứu hộ phản ứng nhanh.
                              Theo DOCUMENT_53: Quyền này thuộc duy nhất TNV áp tải; Kho và Admin chỉ được xem ghi chú, không có quyền sửa đổi hộ.
                            </p>
                          </div>
                        </div>
                        <button 
                          className="shrink-0 px-4 py-2.5 rounded-lg bg-error hover:bg-error/90 text-on-error font-label-md text-label-md flex items-center gap-2 shadow-sm transition-all" 
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
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    {/* Destination School Profile Card */}
                    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                      <div className="flex items-center justify-between pb-3">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Đích Đến Tiếp Nhận</span>
                        <span className="px-2 py-0.5 rounded bg-primary-fixed text-primary font-code-num text-label-sm font-semibold">Mã Trường: THCS-ML-01</span>
                      </div>
                      <div className="mt-2">
                        <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Trường PTDTBT THCS Mường Lát</h2>
                        <p className="font-body-sm text-body-sm text-secondary flex items-start gap-1.5 mt-1.5">
                          <span className="material-symbols-outlined text-[18px] text-primary shrink-0">location_on</span>
                          <span>Bản Chiềng Cồng, Xã Tam Chung, Huyện Mường Lát, Tỉnh Thanh Hóa (Cách trung tâm huyện 12km)</span>
                        </p>
                      </div>
                      
                      <div className="mt-4 p-3.5 bg-surface-container-low rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold">
                            HT
                          </div>
                          <div>
                            <div className="font-label-md text-label-md text-on-surface font-semibold">Thầy Hà Văn Tiêu</div>
                            <div className="font-body-sm text-body-sm text-secondary">Hiệu Trưởng Tiếp Nhận</div>
                          </div>
                        </div>
                        <a href="tel:0984219888" className="p-2 rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary shadow-sm transition-all flex items-center gap-1 font-label-md text-label-md">
                          <span className="material-symbols-outlined text-[18px]">call</span>
                          Gọi
                        </a>
                      </div>

                      {/* School Site Photo Reference */}
                      <div className="mt-4 overflow-hidden rounded-lg bg-surface-container relative">
                        <img 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyaElQSCyBxw6VUt110y1sR13Qd2OANoiZZ4zW3czRZzrW_Jm9bv2-PCN-X8BNuYI6_3lP-1qlAH_0I-5q0o3DjKfDGokHKc3vFSrq4GrQMEXUu6P_y6JyaGHDpE7AbouIAZhpAzgK0K_a6pexXm9dohbztOvVprMY_Hkt0Emse3G4Q2GGU0ZaxxVGdT5b1YjZjAmhBjeu6y4VZcQn36mS74jXi9aD0Fr-u_zn-NEOJi_T-4dBdlcaFw" 
                          data-alt="Vietnamese ethnic minority boarding school in mountainous Muong Lat Thanh Hoa surrounded by mist and green mountains, modern rural school building with children waiting happily in traditional attire" 
                          className="w-full h-36 object-cover" 
                        />
                        <div className="absolute bottom-2 left-2 bg-inverse-surface/80 text-inverse-on-surface px-2.5 py-1 rounded text-label-sm font-label-sm backdrop-blur-sm">
                          Điểm trường chính: 420 học sinh nội trú
                        </div>
                      </div>
                    </div>

                    {/* Proof of Delivery (PoD) Section with strict RBAC Lock */}
                    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                      <div className="flex items-center justify-between pb-3">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[22px]">assignment_turned_in</span>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface">Minh Chứng Bàn Giao (PoD)</h3>
                        </div>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[11px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                          Chờ Tiếp Cận Đích
                        </span>
                      </div>
                      
                      {/* RBAC Crucial Note */}
                      <div className="p-3 bg-blue-50/70 rounded-lg font-body-sm text-body-sm text-primary flex items-start gap-2 mb-4">
                        <span className="material-symbols-outlined text-[18px] shrink-0 text-primary">policy</span>
                        <div>
                          <strong className="font-semibold">Ràng buộc RBAC DOCUMENT_53:</strong>
                          Chỉ được bấm "Gửi Báo Cáo Nghiệm Thu Hoàn Thành" sau khi Nhà trường hoàn tất ký số/ký tay. Tình nguyện viên <em>tuyệt đối không được chỉnh sửa chữ ký của nhà trường</em>.
                        </div>
                      </div>

                      {/* School Signature Status (Read-Only to Volunteer) */}
                      <div className="p-4 bg-surface-container-low rounded-lg mb-4">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">1. Chữ Ký Số Nhà Trường (Read-Only)</span>
                          <span className="font-code-num text-label-sm text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded">Chờ ký khi xe tới</span>
                        </div>
                        <div className="mt-3 p-3 bg-surface-container-lowest rounded border border-dashed border-outline-variant/60 flex flex-col items-center justify-center text-center py-4">
                          <span className="material-symbols-outlined text-outline text-[32px]">draw</span>
                          <span className="font-body-sm text-body-sm text-secondary mt-1">Biên bản sẽ hiển thị ký số điện tử của Thầy Hà Văn Tiêu</span>
                          <span className="text-[11px] text-outline italic">Khóa bảo mật: TNV không có quyền thao tác vùng này</span>
                        </div>
                      </div>

                      {/* Volunteer PoD Photo Upload & Notes */}
                      <div className="space-y-4">
                        <div>
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold block mb-2">2. Ảnh Thực Địa & Tọa Độ GPS Watermark</span>
                          <div className="flex items-center justify-center border-2 border-dashed border-outline-variant/60 hover:border-primary rounded-lg p-5 bg-surface transition-colors cursor-pointer text-center">
                            <div className="flex flex-col items-center">
                              <span className="material-symbols-outlined text-primary text-[32px]">add_a_photo</span>
                              <span className="font-label-md text-label-md text-on-surface font-medium mt-1">Chụp ảnh bàn giao tại trường</span>
                              <span className="font-body-sm text-body-sm text-secondary">Tự động gắn tem toạ độ (Timestamp + GPS + Seal ID)</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="handover-notes" className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold block mb-1.5">3. Ghi Chú Của Đội Áp Tải</label>
                          <textarea 
                            id="handover-notes" 
                            rows="3" 
                            className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary transition-all resize-none placeholder:text-outline" 
                            placeholder="Ghi nhận tình trạng thùng máy, hỗ trợ trường cắm điện kiểm tra ban đầu..."
                          ></textarea>
                        </div>
                        
                        <button 
                          type="button" 
                          disabled 
                          title="Cần có chữ ký của nhà trường để kích hoạt" 
                          className="w-full py-3 rounded-lg bg-surface-container-high text-outline cursor-not-allowed font-label-md text-label-md flex items-center justify-center gap-2 transition-all"
                        >
                          <span className="material-symbols-outlined text-[20px]">task_alt</span>
                          <span>Nghiệm Thu & Hoàn Thành Vận Đơn (Chờ Trường Ký)</span>
                        </button>
                      </div>
                    </div>

                    {/* Volunteer RBAC Rule Reminder Box */}
                    <div className="bg-surface-container-low rounded-xl p-5 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-primary text-[20px]">shield</span>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface">Quy Chuẩn Phân Quyền TNV (DOCUMENT_53)</h4>
                      </div>
                      <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-emerald-600 text-[18px] shrink-0">check_circle</span>
                          <span><strong>Được phép:</strong> Báo cáo sự cố khẩn cấp trên tuyến; hệ thống lập tức đánh dấu FAILED chuyến xe mà không cần Admin duyệt.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-emerald-600 text-[18px] shrink-0">check_circle</span>
                          <span><strong>Được phép:</strong> Tự động tích lũy <strong className="text-primary font-bold">+16 giờ công</strong> vào hồ sơ cá nhân ngay khi biên bản PoD hoàn tất.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-error text-[18px] shrink-0">cancel</span>
                          <span><strong>Nghiêm cấm:</strong> Không tự tạo mã vận đơn mới, không can thiệp kho, không giả mạo chữ ký của điểm trường.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Incident Reporting Modal */}
                {isIncidentModalOpen && (
                  <div id="incident-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-sm">
                    <div className="w-full max-w-lg bg-surface-container-lowest rounded-2xl shadow-2xl p-6 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex items-center justify-between pb-2">
                        <div className="flex items-center gap-2 text-error">
                          <span className="material-symbols-outlined text-[26px]">warning</span>
                          <h3 className="font-headline-md text-headline-md text-error font-bold">Khai Báo Sự Cố Chuyến Xe</h3>
                        </div>
                        <button 
                          type="button" 
                          className="p-1 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container" 
                          onClick={handleCloseIncidentModal}
                        >
                          <span className="material-symbols-outlined text-[20px]">close</span>
                        </button>
                      </div>
                      
                      <div className="p-3 bg-error-container text-on-error-container rounded-lg text-body-sm font-body-sm">
                        <strong>CẢNH BÁO QUAN TRỌNG:</strong> Khi bạn bấm "Gửi Khẩn Cấp", mã vận đơn <strong>#WB-2024-NW08</strong> sẽ ngay lập tức được hệ thống gắn nhãn <span className="font-code-num font-bold underline">FAILED</span>. Lệnh điều phối xe dự phòng sẽ tự động kích hoạt.
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label htmlFor="incident-type" className="font-label-md text-label-md text-on-surface font-semibold block mb-1">Loại Sự Cố Thực Địa</label>
                          <select 
                            id="incident-type" 
                            className="w-full bg-surface-container-low text-on-surface p-2.5 rounded-lg text-body-md font-body-md outline-none focus:ring-2 focus:ring-error"
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
                          <label htmlFor="incident-reason" className="font-label-md text-label-md text-on-surface font-semibold block mb-1">Mô Tả Chi Tiết & Tọa Độ Hiện Tại</label>
                          <textarea 
                            id="incident-reason" 
                            className="w-full bg-surface-container-low text-on-surface p-2.5 rounded-lg text-body-sm font-body-sm outline-none focus:ring-2 focus:ring-error resize-none" 
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
                          className="px-4 py-2 rounded-lg bg-surface-container text-secondary hover:text-on-surface font-label-md text-label-md" 
                          onClick={handleCloseIncidentModal}
                        >
                          Hủy bỏ
                        </button>
                        <button 
                          type="button" 
                          className="px-5 py-2 rounded-lg bg-error hover:bg-error/90 text-on-error font-label-md text-label-md flex items-center gap-1.5 shadow-sm" 
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
