import React from "react";
import { Heart, Laptop, TrendingUp, Award, ArrowRight, Activity, MapPin, Truck } from "lucide-react";

export default function DonorDashboardPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 space-y-8 p-6 duration-500 md:p-8">
      {/* Header Section */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
            Xin chào, Tập đoàn Công nghệ VNPT
          </h1>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Tóm tắt hoạt động tài trợ & lan tỏa giá trị cộng đồng của bạn.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-700 active:translate-y-0">
          <Heart size={18} />
          <span>Tài trợ thiết bị mới</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
        <MetricCard icon={Laptop} color="blue" title="Thiết bị đã trao" value="1,245" suffix="máy" />
        <MetricCard icon={Award} color="emerald" title="Điểm trường hỗ trợ" value="14" suffix="trường" />
        <MetricCard icon={TrendingUp} color="indigo" title="Học sinh tiếp cận" value="8,400+" suffix="em" />
        <MetricCard icon={Activity} color="rose" title="Xếp hạng đóng góp" value="Top 5%" suffix="quốc gia" />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column: Campaigns & Tracking */}
        <div className="space-y-8 lg:col-span-2">
          {/* Tracking Section */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-800">Hành trình thiết bị (Live)</h2>
              <button className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline">
                Xem tất cả <ArrowRight size={16} />
              </button>
            </div>
            <div className="space-y-5">
              <TrackingItem
                id="#TRK-8821"
                status="Đang vận chuyển"
                location="Quốc lộ 6 - Hướng đi Sơn La"
                device="50 Laptop Dell Latitude"
                progress={70}
              />
              <TrackingItem
                id="#TRK-8819"
                status="Đã bàn giao"
                location="THCS Tạ Khoa, Bắc Yên"
                device="20 Tablet Samsung"
                progress={100}
              />
            </div>
          </div>

          {/* Active Campaigns */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-800">Chiến dịch nổi bật</h2>
              <button className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline">
                Khám phá <ArrowRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <CampaignCard
                image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400"
                title="Sóng và Máy tính cho em - Lai Châu"
                target="500 máy"
                current={320}
                daysLeft={12}
              />
              <CampaignCard
                image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400"
                title="Thắp sáng điểm trường Mèo Vạc"
                target="200 máy"
                current={85}
                daysLeft={4}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Certificates & Impact */}
        <div className="space-y-8">
          {/* Certificate */}
          <div className="group relative cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-xl shadow-blue-900/20">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-150"></div>
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-md">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="mb-1 text-xl font-bold">Chứng nhận vinh danh</h3>
              <p className="mb-4 text-sm text-blue-100">Nhà tài trợ Kim Cương năm 2024</p>
              <button className="w-full rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">
                Tải chứng nhận số
              </button>
            </div>
          </div>

          {/* Recent Feed */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h2 className="mb-5 text-lg font-bold text-slate-800">Nhật ký tác động</h2>
            <div className="relative space-y-6 before:absolute before:inset-0 before:ml-2.5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent md:before:mx-auto md:before:translate-x-0">
              <TimelineItem
                title="Bàn giao thành công"
                desc="20 máy tính đã đến tay các em học sinh tại Lai Châu."
                date="Hôm nay, 09:30"
              />
              <TimelineItem
                title="Kiểm định hoàn tất"
                desc="Lô 50 Laptop Dell đã đạt chuẩn phân phối."
                date="Hôm qua, 14:00"
              />
              <TimelineItem
                title="Phát hành biên lai số"
                desc="Biên lai điện tử cho đợt tài trợ tháng 9 đã được cấp."
                date="12 Thg 09, 2024"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ icon: Icon, color, title, value, suffix }) {
  const colors = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
    rose: "bg-rose-50 text-rose-600 border-rose-100",
  };
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border ${colors[color]}`}>
        <Icon size={22} strokeWidth={2.5} />
      </div>
      <p className="mb-1 text-xs font-semibold tracking-wider text-slate-500 uppercase">{title}</p>
      <div className="flex items-baseline gap-1">
        <h3 className="text-2xl font-extrabold text-slate-900">{value}</h3>
        <span className="text-sm font-medium text-slate-500">{suffix}</span>
      </div>
    </div>
  );
}

function TrackingItem({ id, status, location, device, progress }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-600">
        <Truck size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center justify-between">
          <h4 className="text-sm font-bold text-slate-900">{id}</h4>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
            {status}
          </span>
        </div>
        <p className="mb-1 truncate text-xs text-slate-600">{device}</p>
        <div className="mb-2 flex items-center gap-1.5 text-xs text-slate-500">
          <MapPin size={12} /> <span className="truncate">{location}</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-1000"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function CampaignCard({ image, title, target, current, daysLeft }) {
  const percent = Math.round((current / parseInt(target)) * 100);
  return (
    <div className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-100 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5">
      <div className="relative h-32 shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 rounded-lg bg-white/90 px-2 py-1 text-xs font-bold text-slate-800 shadow-sm backdrop-blur">
          Còn {daysLeft} ngày
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-3 line-clamp-2 text-sm font-bold text-slate-900">{title}</h3>
        <div className="mt-auto">
          <div className="mb-1.5 flex items-end justify-between">
            <span className="text-xs font-semibold text-blue-600">
              {current} / {target}
            </span>
            <span className="text-xs font-medium text-slate-500">{percent}%</span>
          </div>
          <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-blue-500" style={{ width: `${percent}%` }}></div>
          </div>
          <button className="w-full rounded-xl bg-slate-50 py-2 text-xs font-bold text-blue-600 transition-colors hover:bg-blue-50">
            Tài trợ ngay
          </button>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ title, desc, date }) {
  return (
    <div className="relative pl-6 md:pl-0">
      <div className="absolute top-1 left-0 h-2 w-2 rounded-full border-2 border-white bg-blue-600 md:hidden"></div>
      <div className="flex flex-col items-start gap-2 md:flex-row md:gap-4">
        <div className="hidden w-24 shrink-0 pt-1 text-right text-xs font-medium text-slate-400 md:block">{date}</div>
        <div className="relative hidden md:block">
          <div className="relative z-10 mt-1 h-3 w-3 rounded-full border-2 border-white bg-blue-600 shadow-sm ring-4 ring-white"></div>
        </div>
        <div className="flex-1 pb-4">
          <div className="mb-1 text-[10px] font-medium text-slate-400 md:hidden">{date}</div>
          <h4 className="text-sm font-bold text-slate-800">{title}</h4>
          <p className="mt-1 text-xs text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}
