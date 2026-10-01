import React from 'react';
import { Heart, Laptop, TrendingUp, Award, ArrowRight, Activity, MapPin, Truck } from 'lucide-react';

export default function DonorDashboardPage() {
  return (
    <div className="p-6 md:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Xin chào, Tập đoàn Công nghệ VNPT
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">
            Tóm tắt hoạt động tài trợ & lan tỏa giá trị cộng đồng của bạn.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 active:translate-y-0">
          <Heart size={18} />
          <span>Tài trợ thiết bị mới</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <MetricCard icon={Laptop} color="blue" title="Thiết bị đã trao" value="1,245" suffix="máy" />
        <MetricCard icon={Award} color="emerald" title="Điểm trường hỗ trợ" value="14" suffix="trường" />
        <MetricCard icon={TrendingUp} color="indigo" title="Học sinh tiếp cận" value="8,400+" suffix="em" />
        <MetricCard icon={Activity} color="rose" title="Xếp hạng đóng góp" value="Top 5%" suffix="quốc gia" />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Campaigns & Tracking */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Tracking Section */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-800">Hành trình thiết bị (Live)</h2>
              <button className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1">
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
          <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-800">Chiến dịch nổi bật</h2>
              <button className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1">
                Khám phá <ArrowRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-xl shadow-blue-900/20 relative overflow-hidden group cursor-pointer">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md mb-4 border border-white/30">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-1">Chứng nhận vinh danh</h3>
              <p className="text-blue-100 text-sm mb-4">Nhà tài trợ Kim Cương năm 2024</p>
              <button className="bg-white text-blue-700 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-50 transition w-full">
                Tải chứng nhận số
              </button>
            </div>
          </div>

          {/* Recent Feed */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-5">Nhật ký tác động</h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
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
    <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${colors[color]}`}>
        <Icon size={22} strokeWidth={2.5} />
      </div>
      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">{title}</p>
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
      <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
        <Truck size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-sm font-bold text-slate-900">{id}</h4>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">{status}</span>
        </div>
        <p className="text-xs text-slate-600 truncate mb-1">{device}</p>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
          <MapPin size={12} /> <span className="truncate">{location}</span>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 rounded-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

function CampaignCard({ image, title, target, current, daysLeft }) {
  const percent = Math.round((current / parseInt(target)) * 100);
  return (
    <div className="group rounded-2xl border border-slate-100 overflow-hidden cursor-pointer hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all flex flex-col h-full">
      <div className="h-32 overflow-hidden relative shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded-lg text-slate-800 shadow-sm">
          Còn {daysLeft} ngày
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-slate-900 text-sm mb-3 line-clamp-2">{title}</h3>
        <div className="mt-auto">
          <div className="flex items-end justify-between mb-1.5">
            <span className="text-xs font-semibold text-blue-600">{current} / {target}</span>
            <span className="text-xs font-medium text-slate-500">{percent}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-3">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${percent}%` }}></div>
          </div>
          <button className="w-full py-2 bg-slate-50 hover:bg-blue-50 text-blue-600 text-xs font-bold rounded-xl transition-colors">
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
      <div className="md:hidden absolute left-0 top-1 w-2 h-2 rounded-full bg-blue-600 border-2 border-white"></div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start">
        <div className="hidden md:block w-24 shrink-0 text-right text-xs font-medium text-slate-400 pt-1">
          {date}
        </div>
        <div className="hidden md:block relative">
          <div className="w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow-sm mt-1 z-10 relative ring-4 ring-white"></div>
        </div>
        <div className="flex-1 pb-4">
          <div className="md:hidden text-[10px] font-medium text-slate-400 mb-1">{date}</div>
          <h4 className="text-sm font-bold text-slate-800">{title}</h4>
          <p className="text-xs text-slate-600 mt-1">{desc}</p>
        </div>
      </div>
    </div>
  );
}
