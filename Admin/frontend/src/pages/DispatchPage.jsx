import React, { useEffect, useState } from 'react';
import api, { apiError } from '../lib/api';
import { copyText, openPrint } from '../lib/actions';
import { WAYBILL_STATUS_LABEL, formatDateTime } from '../lib/labels';

const journeyDatabase = {
  '#TN-NW-042': {
    code: '#TN-NW-042', logCode: '#LOG-9821', dispatchCode: 'LỆNH ĐIỀU PHỐI #VN-LOG-9821',
    routeTitle: 'Tuyến liên tỉnh: Hà Nội — Điện Biên',
    totalKm: '628 km', passedKm: 'Đã qua 495 km (78%)', progressPercent: 78,
    departure: '05:00 - 18/10', departurePlace: 'Kho Tổng Cầu Giấy, HN',
    goodsCount: '50 Thiết bị', goodsDesc: 'Laptop & Hạ tầng mạng',
    schoolName: 'Trường Tiểu học Xín Thầu - Xã Xín Thầu, H. Mường Nhé, Điện Biên',
    currentLocation: 'Km 368 + 200, Đèo Pha Đin (Độ cao 1,000m)', vehicleSpeed: '42 km/h',
    driverName: 'Anh Lê Hoàng Long', driverTeam: 'Đội xe Tình nguyện Tây Bắc',
    driverPhone: '0988.xxx.123', vehicleType: 'Ford Ranger (2 Cầu)', licensePlate: '29C-882.10',
  },
};

export default function DispatchPage() {
  const [showPodModal, setShowPodModal] = useState(false);
  const [showIncidents, setShowIncidents] = useState(false);
  const [incidents, setIncidents] = useState([]);
  const [searchValue, setSearchValue] = useState('WB-20240926-0001');
  const [statusMsg, setStatusMsg] = useState('');
  const [data, setData] = useState(journeyDatabase['#TN-NW-042']);

  function toJourney(waybill) {
    const school = waybill.allocationPlan?.requisition?.school;
    const items = waybill.allocationPlan?.items ?? [];
    const progress = { PENDING_PICKUP: 15, IN_TRANSIT: 62, DELIVERED: 100, FAILED: 0 }[waybill.status] ?? 0;
    return {
      code: waybill.code,
      logCode: waybill.code,
      dispatchCode: waybill.code,
      routeTitle: school?.profile?.city ? `Tuyến tới ${school.profile.city}` : 'Tuyến giao tài nguyên giáo dục',
      totalKm: '—',
      passedKm: WAYBILL_STATUS_LABEL[waybill.status] || waybill.status,
      progressPercent: progress,
      departure: formatDateTime(waybill.dispatchedAt),
      departurePlace: 'Kho phân bổ',
      goodsCount: `${items.length} thiết bị`,
      goodsDesc: items.map((line) => line.resourceItem?.name).filter(Boolean).slice(0, 2).join(', ') || 'Tài nguyên giáo dục',
      schoolName: school?.profile?.organizationName || school?.fullName || 'Trường học',
      currentLocation: WAYBILL_STATUS_LABEL[waybill.status] || waybill.status,
      vehicleSpeed: '—',
      driverName: waybill.assignedVolunteer?.fullName || 'Chưa gán',
      driverTeam: 'Đội tình nguyện EduShare',
      driverPhone: waybill.assignedVolunteer?.phone || '—',
      vehicleType: 'Vận chuyển hiện vật',
      licensePlate: waybill.code,
      waybillId: waybill.id,
      status: waybill.status,
    };
  }

  useEffect(() => {
    api.get('/waybills?limit=1').then((response) => {
      const first = response.data.data?.[0];
      if (!first) return;
      setData(toJourney(first));
      setSearchValue(first.code);
    }).catch(() => undefined);
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const code = searchValue.replace('#', '').trim();
    try {
      const response = await api.get(`/waybills/code/${encodeURIComponent(code)}`);
      setData(toJourney(response.data));
      setStatusMsg(`Đã tìm thấy ${response.data.code}`);
    } catch {
      setStatusMsg('Không tìm thấy vận đơn');
    }
  };

  async function openIncidents() {
    try {
      const response = await api.get('/waybills?status=FAILED&limit=20');
      setIncidents(response.data.data ?? []);
      setShowIncidents(true);
    } catch (error) {
      setStatusMsg(apiError(error, 'Không tải được báo cáo sự cố.'));
    }
  }

  return (
    <main className="w-full pt-0 bg-surface px-gutter-desktop py-space-lg flex-1 min-h-screen">
      <div className="flex flex-col w-full">

        {/* Top Search Banner */}
        <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-lg border border-primary/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-sm pb-space-xs border-b border-surface-container-high">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-xs">
                <span className="material-symbols-outlined text-[20px]">travel_explore</span>
              </div>
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Tra cứu mã hành trình vận chuyển</h2>
                <span className="font-body-sm text-body-sm text-secondary">Nhập mã vận đơn hoặc chọn nhanh chuyến hàng để đồng bộ tiến trình giám sát trực tiếp</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              <span>{statusMsg || 'Dữ liệu trực tiếp: Trực tuyến'}</span>
            </div>
          </div>
          <form className="flex flex-col sm:flex-row items-center gap-2 w-full" onSubmit={handleSearch}>
            <div className="relative flex-1 w-full flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-primary text-[20px]">qr_code_scanner</span>
              <input type="text" className="w-full pl-10 pr-space-md py-2.5 bg-surface-container-low rounded-lg font-code-num text-body-md text-on-surface placeholder:text-outline border border-outline-variant/30 focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Nhập mã hành trình (vd: #TN-NW-042, #LOG-9821)..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <button type="submit" className="w-full sm:w-auto px-space-lg py-2.5 bg-primary text-on-primary hover:bg-primary-container rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer shrink-0">
              <span className="material-symbols-outlined text-[18px]">search</span>
              <span>Tra cứu</span>
            </button>
          </form>
        </div>

        {/* Operational Banner */}
        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm mb-space-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-space-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  {data.dispatchCode}
                </span>
                <span className="text-outline text-body-sm">•</span>
                <span className="font-code-num text-body-sm text-secondary">{data.routeTitle}</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface">Tuyến đường Vận chuyển &amp; Giám sát Chuyến hàng</h1>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Hành trình chuyên chở trang thiết bị công nghệ giáo dục tiếp sức điểm trường vùng cao biên giới Xín Thầu, Huyện Mường Nhé.
              </p>
            </div>
            <div className="flex items-center gap-space-sm flex-wrap">
              <a className="px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md flex items-center gap-2" href="tel:19006886">
                <span className="material-symbols-outlined text-primary text-[18px]">support_agent</span>
                Tổng đài Hỗ trợ Tuyến
              </a>
              <button type="button" className="px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-all font-label-md text-label-md flex items-center gap-2 shadow-sm" onClick={openIncidents}>
                <span className="material-symbols-outlined text-[18px]">warning</span>
                Xem báo cáo sự cố
              </button>
            </div>
          </div>

          {/* Quick Meta Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mt-space-lg pt-space-md bg-surface-container-low/50 rounded-lg p-space-md">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

          {/* LEFT COLUMN (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-space-lg">

            {/* Timeline Card */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
              <div className="flex items-center justify-between pb-space-md mb-space-md">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">alt_route</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">Tiến trình Lộ trình Vận chuyển</h2>
                </div>
                <span className="font-code-num text-label-sm text-secondary bg-surface-container px-2.5 py-1 rounded">Cập nhật GPS: 3 phút trước</span>
              </div>

              {/* Tracking Banner */}
              <div className="mb-space-md p-space-sm bg-surface-container-low rounded-xl border border-surface-container-high flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">tag</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Mã tra cứu hành trình:</span>
                      <span className="font-code-num text-body-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">#TN-NW-042 / #LOG-9821</span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary">Đơn vị giám sát: Trung tâm Điều phối Cứu trợ Quốc gia</span>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm bg-surface-container-lowest px-space-sm py-1.5 rounded-lg border border-outline-variant/30">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">school</span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">Trường tiếp nhận:</span>
                    <span className="font-label-md text-label-md text-on-surface font-semibold">{data.schoolName}</span>
                  </div>
                </div>
              </div>

              {/* GPS Map */}
              <div className="mb-space-lg rounded-xl overflow-hidden border border-surface-container-high shadow-sm relative group">
                <div className="relative h-56 w-full bg-surface-container-high overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Bản đồ vệ tinh địa hình tuyến đường Hà Nội - Đèo Pha Đin - Mường Nhé" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMjOXHWmvgATfyMYRosbSxFL_3wbNYjEkXnBij89RSrDldfYPHfJQJVel0azXKGkhs6ZHgWB1_RzlhUeO7QKNRbKgHCm5PzOkCUzxriqpw8nvtnmRR7w7833x_2ehvhvalS8sre-l0oVA53miS9csVfI5P6DCjWoI9GbhZjokJbbl8bhgj2OP7Pec5ry9dv5-7IO6EnGeA-YS0eBApn4-pqxul8rxnS8bnh2hci81hbsN1yIjoBCrA" />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/30 to-transparent"></div>

                  {/* Top floating status */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-2 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
                      <span className="material-symbols-outlined text-tertiary text-[16px]">satellite_alt</span>
                      <span className="font-label-sm text-label-sm text-tertiary font-bold">Tín hiệu vệ tinh Iridium ổn định</span>
                    </div>
                    <div className="flex items-center gap-2 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                      <span className="font-label-sm text-label-sm text-secondary">Vận tốc:</span>
                      <span className="font-code-num text-label-sm font-bold text-on-surface">{data.vehicleSpeed}</span>
                    </div>
                  </div>

                  {/* Live GPS Marker */}
                  <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-10 h-10 rounded-full bg-primary/30 animate-ping"></span>
                      <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg border-2 border-surface-container-lowest">
                        <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                      </div>
                    </div>
                    <div className="mt-1 bg-inverse-surface/90 text-inverse-on-surface text-[11px] font-medium px-2 py-0.5 rounded shadow-md whitespace-nowrap border border-white/20">
                      Xe {data.licensePlate} (Km 368 + 200, Đèo Pha Đin)
                    </div>
                  </div>

                  {/* Bottom telemetry */}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-inverse-on-surface">
                    <div className="flex items-center gap-2 font-label-sm text-label-sm bg-inverse-surface/70 backdrop-blur-sm px-3 py-1 rounded-lg">
                      <span className="material-symbols-outlined text-primary-fixed-dim text-[16px]">pin_drop</span>
                      <span>Hành trình: <strong className="text-primary-fixed">Hà Nội (0 km)</strong> → <span className="text-tertiary-fixed font-bold">Pha Đin (495 km)</span> → <strong className="text-primary-fixed">Mường Nhé (628 km)</strong></span>
                    </div>
                    <div className="font-label-sm text-[11px] text-inverse-on-surface/80 bg-inverse-surface/70 px-2 py-1 rounded">
                      Độ cao: 1,000m • Thời tiết: Nhiều sương, đường trơn
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Stages Timeline */}
              <div className="relative pl-6 space-y-space-xl">
                <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-surface-container-highest"></div>

                {/* Stage 1 */}
                <div className="relative flex items-start gap-space-md">
                  <div className="w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 z-10 shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">inventory</span>
                  </div>
                  <div className="flex-1 bg-surface-container-low rounded-lg p-space-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-label-sm text-tertiary font-bold tracking-wider">CHẶNG 1</span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">1. Đang chuẩn bị</h3>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-semibold">ĐÃ HOÀN THÀNH</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Kiểm định kỹ thuật chuyên sâu thiết bị, đóng thùng chống ẩm 3 lớp tiêu chuẩn IP65 và chằng buộc cố định an toàn trên sàn xe tại Kho Trung tâm Hà Nội.
                    </p>
                    <div className="mt-space-sm pt-space-xs flex flex-wrap gap-x-4 gap-y-1 text-secondary font-code-num text-body-sm">
                      <span><strong className="text-on-surface">Kỹ thuật trưởng:</strong> KS. Trần Quốc Hùng</span>
                      <span><strong className="text-on-surface">Mã niêm phong:</strong> SEAL-HN-8902</span>
                      <span><strong className="text-on-surface">Hoàn tất:</strong> 04:30 18/10/2024</span>
                    </div>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="relative flex items-start gap-space-md">
                  <div className="w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 z-10 shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">output</span>
                  </div>
                  <div className="flex-1 bg-surface-container-low rounded-lg p-space-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-label-sm text-tertiary font-bold tracking-wider">CHẶNG 2</span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">2. Xuất kho</h3>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-semibold">ĐÃ HOÀN THÀNH</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Ký số xác nhận biên bản xuất kho điều phối <span className="font-code-num font-semibold text-primary">#XK-HN-0842</span>. Xe nhận bàn giao hàng hóa nguyên đai nguyên kiện và xuất phát đúng 05:00 sáng.
                    </p>
                    <div className="mt-space-sm pt-space-xs flex flex-wrap gap-x-4 gap-y-1 text-secondary font-code-num text-body-sm">
                      <span><strong className="text-on-surface">Giám đốc Kho xác nhận:</strong> Vũ Hoàng Nam</span>
                      <span><strong className="text-on-surface">Giờ lăn bánh:</strong> 05:00 18/10/2024</span>
                      <span><strong className="text-on-surface">Trạng thái xe:</strong> Đầy tải 1.4 tấn</span>
                    </div>
                  </div>
                </div>

                {/* Stage 3: Active */}
                <div className="relative flex items-start gap-space-md">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 z-10 shadow-md ring-4 ring-primary/20 animate-bounce">
                    <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  </div>
                  <div className="flex-1 bg-surface-container rounded-lg p-space-md shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-label-sm text-primary font-bold tracking-wider">CHẶNG 3</span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">3. Đang trên đường vận chuyển</h3>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-semibold flex items-center gap-1.5 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-surface animate-ping"></span> ĐANG DIỄN RA
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface">
                      Xe tải chuyên dụng địa hình đang di chuyển an toàn qua <strong>Đèo Pha Đin / Quốc lộ 6</strong>. Dữ liệu cảm biến rung chấn thiết bị và GPS thời gian thực được đồng bộ liên tục về Trung tâm Điều hành Quốc gia.
                    </p>
                    <div className="mt-space-md p-space-sm bg-surface-container-lowest rounded-lg flex flex-col gap-2">
                      <div className="flex items-center justify-between font-label-sm text-label-sm text-secondary">
                        <span className="flex items-center gap-1 text-primary font-semibold">
                          <span className="material-symbols-outlined text-[16px]">location_on</span>
                          Vị trí hiện tại: {data.currentLocation}
                        </span>
                        <span className="font-code-num text-on-surface">Vận tốc: {data.vehicleSpeed}</span>
                      </div>
                      <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: `${data.progressPercent}%` }}></div>
                      </div>
                      <div className="flex justify-between text-body-sm font-code-num text-secondary pt-0.5">
                        <span>Hà Nội (0 km)</span>
                        <span className="text-primary font-bold">Vị trí xe (495 km)</span>
                        <span>Mường Nhé (628 km)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="relative flex items-start gap-space-md">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center shrink-0 z-10">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                  <div className="flex-1 bg-surface-container-low rounded-lg p-space-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-label-sm text-secondary font-bold tracking-wider">CHẶNG 4</span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">4. Hoàn thành</h3>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-label-sm text-label-sm font-semibold">ĐIỂM ĐÍCH</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Đích đến: <strong>Trường Tiểu học Xín Thầu</strong>, Xã Xín Thầu, Huyện Mường Nhé, Tỉnh Điện Biên. Đội tiền trạm và Ban Giám hiệu nhà trường đã sẵn sàng phòng máy để tiếp nhận kiểm thử.
                    </p>
                    <div className="mt-space-sm flex items-center gap-2 text-secondary font-body-sm">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                      <span>Thời gian dự kiến hoàn tất lắp đặt &amp; ký biên bản bàn giao: 16:30 cùng ngày.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PoD Button */}
            <div>
              <button className="w-full mt-4 py-3 px-4 bg-primary text-on-primary hover:bg-primary-container font-label-md rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer" onClick={() => setShowPodModal(true)}>
                <span className="material-symbols-outlined text-[22px]">verified</span>
                <span className="font-semibold">Xem Minh chứng Bàn giao &amp; Biên bản Ký số, Đóng dấu (PoD)</span>
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-space-lg">

            {/* Driver Info Card */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
              <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">badge</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Tình nguyện viên Vận chuyển</h3>
                </div>
                <span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-semibold">ONLINE</span>
              </div>
              <div className="flex items-center gap-space-md p-space-sm bg-surface-container-low rounded-lg mb-space-md">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center shrink-0 overflow-hidden ring-2 ring-primary">
                  <img className="w-full h-full object-cover" alt="Tình nguyện viên lái xe Lê Hoàng Long" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxqAGFaSzaF5lkwnA27icp6Q828dnJwnKt1OZT989r2yNo0Fb6l4otHKtsg73VpjEQlz3Iegrb4LBAIQErIXFmICj3u7evUB0A2_SElY5mTP4yTEpMIENpqP60HyKeAvzuDySJ-56GC1kebIeebzByK3N73b2gnjQHG7wBEVeuGpQo43XpNCRZXBHyF-e6wBYquf5auREUB2zCqNcseFhPM1Ut8d5KpqFqotbuJyasXl7ZPavC4Zw6lA" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">{data.driverName}</span>
                  <span className="font-label-sm text-label-sm text-primary font-semibold">{data.driverTeam}</span>
                  <span className="font-body-sm text-body-sm text-secondary">32 chuyến vùng cao an toàn</span>
                </div>
              </div>
              <div className="space-y-space-sm font-body-sm text-body-sm">
                {[
                  ['phone_iphone', 'Số điện thoại', data.driverPhone],
                  ['directions_car', 'Phương tiện', data.vehicleType],
                  ['pin', 'Biển kiểm soát', data.licensePlate],
                ].map(([icon, label, value]) => (
                  <div key={label} className="flex items-center justify-between py-1 bg-surface-container-low/40 px-2 rounded">
                    <span className="text-secondary flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary">{icon}</span> {label}
                    </span>
                    <span className="font-code-num text-on-surface font-semibold">{value}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between py-1 bg-surface-container-low/40 px-2 rounded">
                  <span className="text-secondary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">satellite_alt</span> Định vị GPS Vệ tinh
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-tertiary"></span> Iridium Active
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-space-sm mt-space-md pt-space-xs">
                <a className="px-space-sm py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md flex items-center justify-center gap-1.5" href="tel:0988000123">
                  <span className="material-symbols-outlined text-[16px]">call</span> Gọi trực tiếp
                </a>
                <button type="button" onClick={() => copyText(data.driverPhone || '').then(() => setStatusMsg(`Đã sao chép số ${data.driverPhone}. Mở Zalo và dán để nhắn điều phối.`))} className="px-space-sm py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-colors font-label-md text-label-md flex items-center justify-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">chat</span> Nhắn Zalo Điều phối
                </button>
              </div>
            </div>

            {/* Technical Stations */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
              <div className="flex items-center justify-between pb-space-sm mb-space-sm">
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
                <div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-on-surface">Trạm Kỹ thuật 01 - TP. Sơn La</span>
                    <span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-code-num text-[11px] font-semibold">Đã qua</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5">Số 120 Đường Chu Văn An, TP. Sơn La</p>
                  <div className="flex items-center justify-between mt-2 pt-1 font-body-sm text-secondary">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-primary">person</span> Anh Vũ Tuấn</span>
                    <span className="font-code-num text-on-surface">0912.441.xxx</span>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Trạm Kỹ thuật 02 - Tuần Giáo</span>
                    <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-code-num text-[11px] font-bold">Trạm tiếp theo</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Ngã 3 Tuần Giáo (Chân đèo Pha Đin)</p>
                  <div className="flex items-center justify-between mt-2 pt-1 font-body-sm">
                    <span className="flex items-center gap-1 text-on-surface"><span className="material-symbols-outlined text-[14px] text-primary">person</span> Anh Lò Văn Mười</span>
                    <a className="font-code-num text-primary font-bold hover:underline" href="tel:0978332111">0978.332.xxx</a>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-on-surface">Trạm Cứu trợ 03 - TX. Mường Lay</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-code-num text-[11px]">Chờ kết nối</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5">Khu 4, Phường Na Lay, Thị xã Mường Lay</p>
                  <div className="flex items-center justify-between mt-2 pt-1 font-body-sm text-secondary">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-primary">person</span> Anh Nguyễn Văn Cường</span>
                    <span className="font-code-num text-on-surface">0945.118.xxx</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Routes */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
              <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">calendar_month</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Các Chuyến Hàng Tiếp Theo</h3>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">T10 / 2024</span>
              </div>
              <div className="space-y-space-sm">
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                  <div className="w-10 h-10 rounded bg-primary-fixed flex flex-col items-center justify-center shrink-0">
                    <span className="font-label-sm text-[11px] text-on-primary-fixed uppercase leading-none font-bold">T10</span>
                    <span className="font-headline-sm text-[16px] text-primary font-extrabold leading-none mt-0.5">22</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-label-md text-label-md text-on-surface font-bold block truncate">Tuyến: Hà Giang - Mèo Vạc</span>
                    <span className="font-body-sm text-body-sm text-secondary block">Điểm đến: Tiểu học Sủng Trà (45 Máy)</span>
                    <span className="font-code-num text-[11px] text-tertiary">Đã xếp 2 xe 7 chỗ &amp; 1 bán tải</span>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                  <div className="w-10 h-10 rounded bg-surface-container-highest flex flex-col items-center justify-center shrink-0">
                    <span className="font-label-sm text-[11px] text-secondary uppercase leading-none font-bold">T10</span>
                    <span className="font-headline-sm text-[16px] text-secondary font-extrabold leading-none mt-0.5">26</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-label-md text-label-md text-on-surface font-bold block truncate">Tuyến: Cao Bằng - Bảo Lạc</span>
                    <span className="font-body-sm text-body-sm text-secondary block">Điểm đến: THCS Hồng An (35 Máy)</span>
                    <span className="font-code-num text-[11px] text-secondary">Đang thẩm định danh sách</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PoD Modal */}
        {showPodModal && (
          <div className="fixed inset-0 bg-inverse-surface/50 backdrop-blur-sm z-50 flex items-center justify-center p-gutter" onClick={(e) => { if (e.target === e.currentTarget) setShowPodModal(false); }}>
            <div className="bg-surface-container-lowest rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-xl border border-surface-container-high overflow-hidden">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-space-lg py-space-md bg-surface-container-low border-b border-surface-container-high">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">fact_check</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Minh chứng Bàn giao &amp; Biên bản Nghiệm thu</h3>
                      <span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">verified_user</span> ĐÃ XÁC THỰC BGH
                      </span>
                    </div>
                    <span className="font-code-num text-body-sm text-secondary">Mã lưu trữ: #BB-BG-2024-XINTHAU • Điểm trường Xín Thầu</span>
                  </div>
                </div>
                <button className="p-1.5 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer" onClick={() => setShowPodModal(false)}>
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              {/* Modal Body */}
              <div className="p-space-lg overflow-y-auto space-y-space-lg">
                {/* Summary Stats */}
                <div className="bg-surface-container-low rounded-xl p-space-md">
                  <div className="flex items-center justify-between mb-space-sm">
                    <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-wide font-bold">Tóm tắt số lượng thiết bị theo biên bản</h4>
                    <span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">task_alt</span> 100% Hoạt động tốt
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
                    {[
                      ['laptop_mac', '30', 'Laptop ThinkPad L580', 'primary'],
                      ['wifi_tethering', '20', 'Bộ Wifi & Máy chiếu HD', 'primary'],
                      ['sentiment_very_satisfied', '142', 'Học sinh hưởng lợi', 'tertiary'],
                    ].map(([icon, count, label, color]) => (
                      <div key={label} className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-sm shadow-sm">
                        <div className={`w-10 h-10 rounded-lg bg-${color}/10 text-${color} flex items-center justify-center shrink-0`}>
                          <span className="material-symbols-outlined text-[20px]">{icon}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className={`font-headline-md text-headline-md text-${color === 'tertiary' ? 'tertiary' : 'on-surface'} font-bold`}>{count}</span>
                          <span className="font-body-sm text-body-sm text-secondary">{label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photos */}
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-[18px]">photo_library</span>
                      Hình ảnh thực tế bàn giao tại phòng tin học
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary">3 ảnh chụp trực tiếp từ hiện trường</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                    {[
                      ['https://lh3.googleusercontent.com/aida-public/AB6AXuAUyC9fS9jT0cli64k1YMpBai-N-X-J5JvkPM0JRqhI2idScEvcM3ZO4dYaQdFcIQ8ewDcWhazpzG6pHHm1-oKg0mG0ASL4kF0ERV4_qCBj6YYwJui_8ugiky4JqANrv9gA5XVQ20bI9QbwIvjvgh-XNKmkVKZz26xmZl8L21vkKCNFyYKEWD4witg7f29gET3Veex7NVCO5maN5ytrBmy14an31MIvDagtojAB6ACCMBGl8OkV02X8_A', 'Học sinh hân hoan mở máy học tin', '18/10/2024 • Phòng máy số 01'],
                      ['https://lh3.googleusercontent.com/aida-public/AB6AXuC_QCNre4ffMPSaWQOIqWO6D99ofBVfBDARA86hlgtfHSHiVzvjInRlFRawPKftyhPEZocbuQDS8a8vSTyRrYX7Y4ymwcKbw8b7J5xcDrpdKZR32ZqITGj-nEKporjjhnzJJPFTnv3qtCmyMU5V8l7urFdIa9mFPueAWHccyUAHdgIwunitDaS5TNOBiiz4jhlRbr1bIvSFBIQ_fWZzMP-sSWEABuk6JY7Q2xp5AzA__fGV97IJrjVVog', 'TNV hướng dẫn học sinh thao tác máy', '18/10/2024 • Điểm trường Trung tâm'],
                      ['https://lh3.googleusercontent.com/aida-public/AB6AXuBJrEejGD_uOk8f6INNvoPJQTpLN2BgIWqDMTntqe3Nx2YXeVcE_gTv8DFO6d341CT3QL4Up1T8slxlrXfPcqonqLsLWXPz96gmxbyRymppfRIk5vgd_Wu6XmK1wBG6eCOqwgZVLgb7-FtRQPuTkyU0gmVmk9I8K4aDaDgcHwm2p3IGEPBLSJco3TLZEtktMH_eAUWBfeq5KtYVSohYpWHdQVyeTukoN-dZL1mKrCauBjTe5Kyxe4TN7w', 'Kiểm tra kết nối mạng và màn hình', '18/10/2024 • Kiểm nghiệm 100% OK'],
                    ].map(([src, caption, date]) => (
                      <div key={caption} className="group relative rounded-lg overflow-hidden bg-surface-container-high h-48 shadow-sm">
                        <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt={caption} src={src} />
                        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex flex-col justify-end p-2.5">
                          <span className="font-label-sm text-label-sm text-inverse-on-surface font-medium">{caption}</span>
                          <span className="font-code-num text-[10px] text-inverse-on-surface/80">{date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Official Document */}
                <div className="bg-surface-container-low rounded-xl p-space-md relative overflow-hidden border border-outline-variant/30">
                  <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">description</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Biên bản bàn giao số #BB-BG-2024-XINTHAU</span>
                    </div>
                    <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary transition-colors font-label-sm text-label-sm flex items-center gap-1 shadow-xs" onClick={openPrint}>
                      <span className="material-symbols-outlined text-[16px]">file_download</span> Tải bản PDF gốc
                    </button>
                  </div>
                  <div className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm border border-outline-variant/20">
                    <div className="text-center pb-space-sm mb-space-sm">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</span>
                      <p className="font-label-sm text-label-sm text-on-surface font-semibold">Độc lập - Tự do - Hạnh phúc</p>
                      <div className="w-16 h-0.5 bg-on-surface mx-auto my-1.5 opacity-30"></div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold uppercase mt-2">
                        BIÊN BẢN GIAO NHẬN TRANG THIẾT BỊ GIÁO DỤC CÔNG NGHỆ
                      </h3>
                      <p className="font-code-num text-body-sm text-secondary">Số lưu trữ: 1810/2024/BB-XINTHAU-EDUSHARE</p>
                    </div>
                    <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                      <p>Hôm nay, ngày 18 tháng 10 năm 2024, tại Trường Tiểu học Xín Thầu, Huyện Mường Nhé, Tỉnh Điện Biên. Chúng tôi gồm có:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm p-space-sm bg-surface-container-low rounded">
                        <div>
                          <span className="font-label-sm text-label-sm text-secondary font-bold">BÊN GIAO (EduShare VN &amp; Đội TNV):</span>
                          <p className="font-body-md text-on-surface font-semibold">Ông Lê Hoàng Long - Trưởng đoàn Điều phối TNV</p>
                          <p className="text-secondary">Phương tiện vận chuyển: Ford Ranger 29C-882.10</p>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-secondary font-bold">BÊN NHẬN (Đơn vị thụ hưởng):</span>
                          <p className="font-body-md text-on-surface font-semibold">Thầy Pờ Lóng Hờ - Hiệu trưởng Tiểu học Xín Thầu</p>
                          <p className="text-secondary">Địa chỉ: Xã Xín Thầu, H. Mường Nhé, T. Điện Biên</p>
                        </div>
                      </div>
                      <p className="pt-1">Hai bên cùng tiến hành nghiệm thu, đóng điện thử nghiệm toàn bộ <strong>30 máy tính xách tay ThinkPad</strong> và <strong>20 bộ hạ tầng phát Wifi / máy chiếu</strong>. Tình trạng kỹ thuật ghi nhận: Máy móc vận hành trơn tru, đầy đủ sạc nguồn và chuột quang, không trầy xước, tem kiểm định nguyên vẹn.</p>
                    </div>
                    {/* Signatures */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg mt-space-lg pt-space-md border-t border-surface-container">
                      <div className="flex flex-col items-center text-center">
                        <span className="font-label-sm text-label-sm font-semibold uppercase text-secondary">ĐẠI DIỆN ĐOÀN TÌNH NGUYỆN VIÊN</span>
                        <span className="font-body-sm text-body-sm text-secondary mb-2">(Ký và ghi rõ họ tên)</span>
                        <div className="h-20 flex items-center justify-center">
                          <span className="font-headline-lg text-primary italic select-none tracking-widest opacity-85" style={{ transform: 'rotate(-4deg)', fontFamily: 'serif' }}>
                            Lê Hoàng Long
                          </span>
                        </div>
                        <span className="font-headline-sm text-headline-sm text-on-surface mt-1 font-semibold">Lê Hoàng Long</span>
                        <span className="font-code-num text-[11px] text-tertiary">Xác thực OTP: 0988.xxx.123 (05:12)</span>
                      </div>
                      <div className="flex flex-col items-center text-center relative">
                        <span className="font-label-sm text-label-sm font-semibold uppercase text-secondary">ĐẠI DIỆN BAN GIÁM HIỆU NHÀ TRƯỜNG</span>
                        <span className="font-body-sm text-body-sm text-secondary mb-2">(Ký tên và đóng dấu tròn)</span>
                        <div className="h-20 relative flex items-center justify-center w-full">
                          <span className="font-headline-lg text-on-surface italic select-none tracking-wider opacity-90 z-10" style={{ transform: 'rotate(-2deg)', fontFamily: 'serif' }}>
                            Pờ Lóng Hờ
                          </span>
                          <div className="absolute right-6 -top-3 w-28 h-28 rounded-full border-4 border-error/85 flex items-center justify-center p-1 text-error pointer-events-none bg-error/5" style={{ transform: 'rotate(14deg)' }}>
                            <div className="w-full h-full rounded-full border border-dashed border-error/70 flex flex-col items-center justify-center text-center p-1">
                              <span className="text-[8px] font-bold uppercase leading-tight tracking-tighter">UBND HUYỆN MƯỜNG NHÉ</span>
                              <div className="w-4 h-4 my-0.5 text-error flex items-center justify-center">
                                <span className="material-symbols-outlined text-[14px]">star</span>
                              </div>
                              <span className="text-[8px] font-bold uppercase leading-tight tracking-tighter">TRƯỜNG TIỂU HỌC</span>
                              <span className="text-[9px] font-extrabold uppercase leading-tight">XÍN THẦU</span>
                            </div>
                          </div>
                        </div>
                        <span className="font-headline-sm text-headline-sm text-on-surface mt-1 font-semibold">Thầy Pờ Lóng Hờ</span>
                        <span className="font-label-sm text-label-sm text-secondary">Hiệu trưởng đơn vị tiếp nhận</span>
                      </div>
                    </div>
                    {/* Blockchain hash */}
                    <div className="mt-space-lg pt-space-sm bg-surface-container-low rounded-lg p-space-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-secondary">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">lock</span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold">Chữ ký số &amp; Mã băm lưu trữ Blockchain SHA-256</span>
                          <span className="font-code-num text-[11px] text-secondary break-all">
                            8f54b1d62c114e9f7a63080e7d95392cb34812a0fef4c09d8498ac16b9b3e107
                          </span>
                        </div>
                      </div>
                      <span className="font-label-sm text-label-sm bg-tertiary/10 text-tertiary font-bold px-2 py-1 rounded shrink-0">
                        TOÀN VẸN &amp; CHUẨN XÁC
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal Footer */}
              <div className="flex items-center justify-between px-space-lg py-space-sm bg-surface-container-low border-t border-surface-container-high">
                <button className="px-space-md py-2 rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary transition-colors font-label-md text-label-md flex items-center gap-1.5 shadow-xs" onClick={openPrint}>
                  <span className="material-symbols-outlined text-[18px]">download</span> Tải bản PDF gốc
                </button>
                <button className="px-space-lg py-2 rounded-lg bg-secondary text-on-secondary hover:bg-on-surface transition-colors font-label-md text-label-md cursor-pointer" onClick={() => setShowPodModal(false)}>
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}

        {showIncidents && (
          <div className="fixed inset-0 bg-inverse-surface/50 backdrop-blur-sm z-50 flex items-center justify-center p-gutter" onClick={(e) => { if (e.target === e.currentTarget) setShowIncidents(false); }}>
            <div className="bg-surface-container-lowest rounded-xl max-w-lg w-full p-space-lg shadow-xl relative">
              <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                <h3 className="font-headline-sm text-headline-sm font-bold">Báo cáo sự cố đã ghi nhận</h3>
                <button className="p-1 rounded-lg text-secondary hover:bg-surface-container transition-colors" onClick={() => setShowIncidents(false)}>
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Admin chỉ xem các chuyến đã bị dừng. Không tạo báo cáo mới từ trang này.</p>
              <ul className="max-h-72 space-y-2 overflow-auto text-sm">
                {incidents.length === 0 && <li className="rounded bg-slate-50 px-3 py-3 text-slate-500">Chưa có vận đơn nào ở trạng thái sự cố.</li>}
                {incidents.map((waybill) => (
                  <li key={waybill.id} className="rounded bg-slate-50 px-3 py-2">
                    <b>{waybill.code}</b>
                    <span className="ml-2 text-slate-500">{WAYBILL_STATUS_LABEL[waybill.status] || waybill.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
