import React from "react";
import {
  Activity,
  AlertTriangle,
  Archive,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Download,
  Eye,
  FileText,
  GraduationCap,
  Laptop,
  MapPin,
  PackageOpen,
  Settings,
  Truck,
  Zap,
} from "lucide-react";

const shipments = [
  {
    id: "ĐP-2024-88",
    school: "Trường THCS Pà Vị",
    location: "Huyện Mèo Vạc, Hà Giang",
    device: "45 Laptop Dell Latitude",
    detail: "i5 8GB RAM · Đã test 100%",
    volunteer: "Lê Hoàng Long",
    initials: "HL",
    status: "Đang vận chuyển",
    action: Eye,
  },
  {
    id: "ĐP-2024-87",
    school: "Tiểu Học Nậm Tý",
    location: "Sông Mã, Sơn La",
    device: "30 iPad Gen 9 & Cáp sạc",
    detail: "Kèm 30 bao chống sốc",
    volunteer: "Trần Mai Anh",
    initials: "TM",
    status: "Đã bàn giao",
    action: FileText,
  },
  {
    id: "ĐP-2024-86",
    school: "PTDTBT THCS Tà Tổng",
    location: "Mường Tè, Lai Châu",
    device: "50 PC Để Bàn HP EliteDesk",
    detail: "Màn hình 22 inch trọn bộ",
    volunteer: "Vũ Quốc Bảo",
    initials: "VQ",
    status: "Chờ xác nhận",
    action: Eye,
  },
  {
    id: "ĐP-2024-85",
    school: "Trường THCS Đắk Nang",
    location: "Krông Nô, Đắk Nông",
    device: "25 Laptop ThinkPad T480",
    detail: "Được tài trợ bởi VNG Corp",
    volunteer: "Đặng Hải Triều",
    initials: "ĐH",
    status: "Đã bàn giao",
    action: FileText,
  },
];

const evidence = [
  [
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400",
    "Pà Vị, Hà Giang",
    "Bàn giao Phòng tin học số 02",
    "08:30 hôm nay",
  ],
  [
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400",
    "Lục Yên, Yên Bái",
    "Ký biên bản & Gắn QR code",
    "16:45 hôm qua",
  ],
  [
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400",
    "Kho Trung Tâm HN",
    "Đóng gói 80 máy chuẩn bị xuất",
    "14:10 hôm qua",
  ],
];

function StatusBadge({ children }) {
  const isDone = children === "Đã bàn giao";
  const isShipping = children === "Đang vận chuyển";
  return (
    <span
      className={`inline-flex whitespace-nowrap items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${isDone ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20" : isShipping ? "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20" : "bg-amber-50 text-amber-700 ring-1 ring-amber-600/20"}`}
    >
      <span
        className={`size-1.5 rounded-full ${isDone ? "bg-emerald-600" : isShipping ? "bg-blue-600 animate-pulse" : "bg-amber-500"}`}
      />
      {children}
    </span>
  );
}

function KpiCard({ label, value, icon: Icon, children }) {
  return (
    <article className="min-h-44 rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400">
            {label}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800">
            {value}
          </h2>
        </div>
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600">
          <Icon size={20} />
        </span>
      </div>
      <div className="mt-4 text-xs text-slate-500">{children}</div>
    </article>
  );
}

function FlowNode({ icon: Icon, eyebrow, title, text, badge, teal }) {
  return (
    <div className="w-full min-w-[15rem] max-w-[20rem] shrink-0 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:border-blue-300">
      <div className="flex items-start gap-3">
        <span
          className={`grid size-10 shrink-0 place-items-center rounded-lg ${teal ? "bg-teal-50 text-teal-700" : "bg-blue-50 text-blue-600"}`}
        >
          <Icon size={22} />
        </span>
        <div className="min-w-0">
          <small className="block text-[10px] font-bold tracking-wider text-slate-400">
            {eyebrow}
          </small>
          <b className="block text-sm font-bold text-slate-800 truncate">
            {title}
          </b>
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-500">{text}</p>
      <span
        className={`mt-3 inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold ${teal ? "bg-teal-100 text-teal-800" : "bg-blue-600 text-white"}`}
      >
        {badge}
      </span>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="p-4 md:p-6 space-y-5">
      {/* Banner Nổi Bật */}
      <section className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-[10px] font-bold text-teal-700 ring-1 ring-teal-600/20">
              ● DỮ LIỆU ĐỒNG BỘ THỜI GIAN THỰC
            </span>
            <span className="text-[10px] text-slate-400 font-medium">
              • CẬP NHẬT 2 PHÚT TRƯỚC
            </span>
          </div>
          <h1 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            Trung tâm Điều hành & Thống kê Toàn quốc
          </h1>
          <p className="mt-1 max-w-2xl text-xs md:text-sm leading-relaxed text-slate-500">
            Tổng hợp dữ liệu luân chuyển thiết bị học tập, kiểm định kho và kế
            hoạch tài trợ điểm trường học sinh vùng cao.
          </p>
        </div>
        <div className="relative z-10 flex flex-wrap gap-2 shrink-0">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">
            <CalendarDays size={15} /> Quý 4 - 2024
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 transition">
            <Download size={15} /> Xuất Báo Cáo Quốc Gia
          </button>
        </div>
        <div className="absolute -right-12 -top-12 size-60 rounded-full bg-blue-100/50 blur-3xl" />
      </section>

      {/* Kpi Cards */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="TỔNG THIẾT BỊ TIẾP NHẬN" value="18,450" icon={Laptop}>
          <div className="flex justify-between items-center">
            <b className="rounded-full bg-teal-50 px-2 py-0.5 text-[11px] font-bold text-teal-700">
              ↗ +14.2%
            </b>
            <span className="text-slate-400">So với tháng trước</span>
          </div>
          <svg
            className="mt-3 h-7 w-full text-blue-600"
            viewBox="0 0 100 24"
            preserveAspectRatio="none"
          >
            <path
              d="M0 18 Q20 22 35 12 T70 8 T100 2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <path
              d="M0 18 Q20 22 35 12 T70 8 T100 2 L100 24 L0 24Z"
              fill="currentColor"
              opacity=".08"
            />
          </svg>
        </KpiCard>
        <KpiCard label="ĐÃ KIỂM ĐỊNH & SỬA CHỮA" value="14,820" icon={Settings}>
          <div className="flex justify-between">
            <span>Năng suất kỹ thuật</span>
            <b className="text-teal-700 font-semibold">80.3% mục tiêu</b>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-blue-100 overflow-hidden">
            <div className="h-full w-4/5 rounded-full bg-teal-700" />
          </div>
          <p className="mt-3 flex items-center gap-1 text-[11px] text-slate-600">
            <CheckCircle2 size={13} className="text-teal-700 shrink-0" /> 1,240
            máy sẵn sàng xuất kho
          </p>
        </KpiCard>
        <KpiCard
          label="ĐÃ BÀN GIAO ĐIỂM TRƯỜNG"
          value="12,390"
          icon={GraduationCap}
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {["HC", "LC", "SL"].map((x) => (
                <span
                  key={x}
                  className="grid size-6 place-items-center rounded-full bg-blue-600 text-[8px] font-bold text-white ring-2 ring-white"
                >
                  {x}
                </span>
              ))}
            </div>
            <span className="text-xs">94 cụm trường thụ hưởng</span>
          </div>
          <div className="mt-4 flex justify-between text-xs text-slate-500">
            <span>Laptop: 8,420</span>
            <span>•</span>
            <span>Tablet: 3,970</span>
          </div>
        </KpiCard>
        <KpiCard
          label="CHIẾN DỊCH ĐANG VẬN HÀNH"
          value="28 / 32"
          icon={Activity}
        >
          <p className="flex items-center gap-1 font-medium text-slate-700">
            <MapPin size={13} className="text-blue-600 shrink-0" /> 19 tỉnh
            thành vùng sâu
          </p>
          <div className="mt-4 flex justify-between text-xs">
            <b className="text-teal-700">4 chiến dịch vừa hoàn tất</b>
            <span className="text-slate-400">240 TNV</span>
          </div>
        </KpiCard>
      </section>

      {/* Thao Tác Nổi Bật */}
      <section className="flex flex-wrap items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mr-auto flex items-center gap-2 text-xs font-semibold text-slate-800">
          <Zap size={16} className="text-blue-600 shrink-0" />
          <span>Thao tác Quản trị Khẩn cấp:</span>
        </div>
        <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 transition">
          ⊕ Phê duyệt chiến dịch mới
        </button>
        <button className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-200 transition">
          ◉ Phân quyền người dùng
        </button>
        <button className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-200 transition">
          ↻ Cập nhật hệ thống kho
        </button>
        <button className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-200 transition">
          ▣ Xuất biên bản đối soát
        </button>
      </section>

      {/* BỐ CỤC ĐÃ ĐƯỢC CẢI TIẾN: SỬ DỤNG xl:grid-cols-12 VA min-w-0 */}
      <div className="grid w-full min-w-0 items-start gap-5 xl:grid-cols-12">
        {/* CỘT TRÁI (8 CỘT TRÊN MÀN HÌNH LỚN) */}
        <div className="grid w-full min-w-0 gap-5 xl:col-span-8">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">
                Luồng Điều Phối Thiết Bị Trực Tiếp
              </h3>
              <div className="flex text-xs bg-slate-100 p-1 rounded-lg">
                <button className="rounded bg-white px-3 py-1 font-semibold text-blue-700 shadow-sm">
                  Toàn bộ 63 Tỉnh
                </button>
                <button className="px-3 py-1 font-medium text-slate-600">
                  Miền Bắc
                </button>
                <button className="px-3 py-1 font-medium text-slate-600">
                  Tây Nguyên
                </button>
              </div>
            </div>

            <div className="my-5 flex items-center justify-between gap-3 overflow-x-auto rounded-xl bg-blue-50/50 p-4 border border-blue-100">
              <FlowNode
                icon={Archive}
                eyebrow="ĐIỂM KHỞI HÀNH"
                title="Tổng Kho Hà Nội"
                text="3,420 máy sẵn sàng lưu kho"
                badge="● 9 xe đang xuất phát"
              />
              <div className="shrink-0 text-blue-600">
                <ArrowRight size={20} />
              </div>
              <FlowNode
                icon={Truck}
                eyebrow="TRẠM TRUNG CHUYỂN"
                title="Cụm Trạm Hà Giang"
                text="Huyện Mèo Vạc - Đồng Văn"
                badge="◉ Nhận 92% · 180 máy"
                teal
              />
              <div className="shrink-0 text-teal-700">
                <ArrowRight size={20} />
              </div>
              <FlowNode
                icon={GraduationCap}
                eyebrow="ĐIỂM TIẾP NHẬN"
                title="Điểm THCS Pà Vị"
                text="Xã Pà Vị, H. Mèo Vạc"
                badge="▣ 45 Laptop Dell"
                teal
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs min-w-[600px]">
                <thead className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase">
                  <tr>
                    {[
                      "MÃ ĐƠN",
                      "ĐIỂM TRƯỜNG TIẾP NHẬN",
                      "LOẠI THIẾT BỊ",
                      "TÌNH NGUYỆN VIÊN",
                      "TRẠNG THÁI",
                      "THAO TÁC",
                    ].map((h) => (
                      <th key={h} className="p-3">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {shipments.map((row) => {
                    const Action = row.action;
                    return (
                      <tr key={row.id} className="hover:bg-slate-50/80">
                        <td className="p-3 font-semibold text-blue-700 whitespace-nowrap">
                          {row.id}
                        </td>
                        <td className="p-3">
                          <b className="font-semibold text-slate-800">
                            {row.school}
                          </b>
                          <small className="block text-[10px] text-slate-400">
                            {row.location}
                          </small>
                        </td>
                        <td className="p-3">
                          <b className="font-semibold text-slate-800">
                            {row.device}
                          </b>
                          <small className="block text-[10px] text-slate-400">
                            {row.detail}
                          </small>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-blue-100 text-[9px] font-bold text-blue-700">
                              {row.initials}
                            </span>
                            <span className="whitespace-nowrap">
                              {row.volunteer}
                            </span>
                          </div>
                        </td>
                        <td className="p-3">
                          <StatusBadge>{row.status}</StatusBadge>
                        </td>
                        <td className="p-3 text-slate-400 hover:text-slate-600">
                          <Action size={16} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <footer className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500">
              <span>Hiển thị 4 trên 142 đơn điều phối</span>
              <button className="flex items-center gap-1 font-semibold text-blue-700 hover:underline">
                Xem toàn bộ danh sách <ArrowRight size={14} />
              </button>
            </footer>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm min-w-0">
            <div className="flex items-center justify-between pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Minh Chứng Bàn Giao Vừa Xác Thực
                </h3>
                <p className="text-xs text-slate-400">
                  Hình ảnh học sinh và đại diện nhà trường ký nhận máy tính
                </p>
              </div>
              <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500 shrink-0">
                KHO CHỨNG TỪ SỐ
              </span>
            </div>
            <div className="mt-3 grid gap-4 sm:grid-cols-3">
              {evidence.map(([src, place, title, time]) => (
                <div key={title} className="group cursor-pointer min-w-0">
                  <div className="relative h-32 overflow-hidden rounded-lg bg-slate-100">
                    <img
                      src={src}
                      alt={title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <span className="absolute bottom-2 left-2 rounded-md bg-white/90 backdrop-blur px-2 py-0.5 text-[10px] font-bold text-blue-700 shadow-sm">
                      {place}
                    </span>
                  </div>
                  <b className="mt-2 block text-xs font-semibold text-slate-800 truncate">
                    {title}
                  </b>
                  <small className="text-[10px] text-slate-400">
                    Xác thực: {time}
                  </small>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* CỘT PHẢI (4 CỘT TRÊN MÀN HÌNH LỚN) - TỰ XUỐNG DÒNG NẾU MÀN HÌNH BỊ THU HẸP/ZOOM */}
        <aside className="grid w-full min-w-0 gap-5 xl:col-span-4">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm min-w-0">
            <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <AlertTriangle size={18} className="text-amber-500 shrink-0" />
              Cảnh Báo Tồn Kho Linh Kiện
            </h3>
            <div className="mt-3 rounded-lg bg-red-50/80 p-3.5 border border-red-100 text-xs text-red-900">
              <b className="font-semibold block mb-1">
                Thiếu hụt linh kiện nâng cấp
              </b>
              <p className="leading-relaxed text-slate-600 break-words">
                Thiếu 85 thanh RAM DDR4 8GB và 40 ổ SSD 256GB tại Kho Miền Bắc
                để kịp xuất xưởng lô 120 laptop.
              </p>
              <div className="mt-3 flex flex-col gap-1.5">
                <button className="rounded-lg bg-red-600 px-3 py-1.5 text-center text-[11px] font-semibold text-white shadow-sm hover:bg-red-700 transition">
                  Tạo Đề Xuất Mua / Kêu Gọi
                </button>
                <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-center text-[11px] font-medium text-slate-700 hover:bg-slate-50 transition">
                  Điều chuyển từ Kho SG
                </button>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm min-w-0">
            <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-2">
              <PackageOpen size={18} className="text-teal-600 shrink-0" />
              Nhật Ký Hoạt Động Trực Tuyến
            </h3>
            <div className="space-y-3">
              {[
                "Nguyễn Văn An vừa phê duyệt lệnh bàn giao 50 PC đến Mường Tè.",
                "Kho Kỹ Thuật Tân Bình đã dán nhãn kiểm định QR cho 112 máy tính.",
                "Tập đoàn Viettel Solutions đăng ký tài trợ lô 200 laptop Dell cũ.",
                "Xe vận tải VNPost 29C-882.10 hoàn tất ký gửi tại Đồng Văn.",
              ].map((item, i) => (
                <div key={item} className="flex gap-2.5 text-xs min-w-0">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700 mt-0.5">
                    <CheckCircle2 size={12} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-slate-700 leading-snug break-words">
                      {item}
                    </p>
                    <small className="text-[10px] text-slate-400">
                      {i + 2} phút trước · Hệ thống Tự động
                    </small>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full rounded-lg bg-slate-100 py-2 text-center text-[11px] font-semibold text-slate-600 hover:bg-slate-200 transition">
              Xem lịch sử kiểm toán đầy đủ (Audit Log)
            </button>
          </article>
        </aside>
      </div>
    </div>
  );
}
