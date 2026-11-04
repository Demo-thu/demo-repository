import React, { useState } from "react";
import { Breadcrumb } from "../components/system-ui";
import {
  ChevronRight,
  Download,
  UserPlus,
  TrendingUp,
  Users,
  UserCheck,
  AlertTriangle,
  Clock,
  Search,
  MapPin,
  Wrench,
  SlidersHorizontal,
  RefreshCw,
  Route,
  Eye,
  RefreshCcw,
  Check,
  X,
  Badge,
  School,
  Truck,
  ChevronLeft,
  Network,
} from "lucide-react";

const volunteers = [
  {
    id: "TNV-1082",
    name: "Trần Nhật Quang",
    date: "12/03/2023",
    phone: "0912.834.567",
    email: "quang.trann@gmail.com",
    area: "Quảng Nam & Đà Nẵng",
    skills: [
      { name: "Lái xe tải", type: "primary" },
      { name: "Phân loại đồ", type: "secondary" },
    ],
    hours: 240,
    status: "Active",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: "TNV-1105",
    name: "Hoàng Minh Tuấn",
    date: "05/05/2023",
    phone: "0988.234.901",
    email: "tuan.hoang.tech@gmail.com",
    area: "Hà Nội & Tây Bắc",
    skills: [
      { name: "Sửa máy tính", type: "primary" },
      { name: "Kiểm thử phần cứng", type: "secondary" },
    ],
    hours: 312,
    status: "Active",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: "TNV-1450",
    name: "Nguyễn Lê Bảo Vy",
    date: "Hôm nay",
    phone: "0905.123.889",
    email: "baovy.edu@outlook.com",
    area: "Đà Nẵng",
    skills: [
      { name: "Phân loại đồ", type: "secondary" },
      { name: "Giao tiếp sư phạm", type: "tertiary" },
    ],
    hours: 0,
    status: "Pending",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: "TNV-1452",
    name: "Đặng Quốc Hùng",
    date: "Hôm qua",
    phone: "0934.789.201",
    email: "hung.dang.logistics@yahoo.com",
    area: "Nghệ An & Hà Tĩnh",
    skills: [
      { name: "Lái xe tải", type: "primary" },
      { name: "Sửa máy tính", type: "primary" },
    ],
    hours: 0,
    status: "Pending",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: "TNV-0984",
    name: "Lê Thị Mai Hoa",
    date: "18/11/2022",
    phone: "0976.456.123",
    email: "maihoa.le@gmail.com",
    area: "TP. Hồ Chí Minh",
    skills: [
      { name: "Phân loại đồ", type: "secondary" },
      { name: "Quản lý kho", type: "primary" },
    ],
    hours: 185,
    status: "Active",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: "TNV-1203",
    name: "Phạm Đức Anh",
    date: "14/08/2023",
    phone: "0961.998.223",
    email: "ducanh.pham@vnu.edu.vn",
    area: "Hà Giang",
    skills: [
      { name: "Sửa máy tính", type: "secondary" },
      { name: "Lái xe tải", type: "secondary" },
    ],
    hours: 64,
    status: "Inactive",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: "TNV-1455",
    name: "Vũ Đình Khoa",
    date: "2 giờ trước",
    phone: "0942.556.789",
    email: "khoavu.tech@gmail.com",
    area: "Gia Lai - Kon Tum",
    skills: [
      { name: "Sửa máy tính", type: "primary" },
      { name: "Phân loại đồ", type: "secondary" },
    ],
    hours: 0,
    status: "Pending",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
];

function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  colorClass,
  iconClass,
  trendIcon: TrendIcon,
}) {
  return (
    <div className="relative overflow-hidden bg-white rounded-xl p-6 shadow-sm flex items-start justify-between">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
          {title}
        </span>
        <div className="flex items-baseline gap-1 mt-1">
          <span className={`text-4xl font-display font-bold ${colorClass}`}>
            {value}
          </span>
          <span className="text-xs font-medium text-slate-500">{subtitle}</span>
        </div>
        <div className="flex items-center gap-1 mt-2 text-xs font-medium">
          {TrendIcon && <TrendIcon className="text-[16px] text-teal-700" />}
          {trend}
        </div>
      </div>
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconClass}`}
      >
        <Icon className="text-[26px]" />
      </div>
    </div>
  );
}

function VolunteerRow({ volunteer, onApprove, onReject }) {
  return (
    <tr
      className={`hover:bg-slate-100 transition-colors group ${volunteer.status === "Pending" ? "bg-slate-50/40" : ""} ${volunteer.status === "Inactive" ? "opacity-85" : ""}`}
    >
      <td className="py-4 px-6">
        <div className="flex items-center gap-2">
          <img
            className={`w-10 h-10 rounded-full object-cover shadow-sm bg-slate-200 ${volunteer.status === "Inactive" ? "filter grayscale-[30%]" : ""}`}
            src={volunteer.avatar}
          />
          <div className="flex flex-col min-w-0">
            <span className="text-base font-display font-semibold text-slate-900 truncate">
              {volunteer.name}
            </span>
            <div className="flex items-center gap-1 text-slate-500 text-sm font-mono">
              <span
                className={
                  volunteer.status === "Inactive"
                    ? "text-slate-500 font-semibold"
                    : "text-blue-700 font-semibold"
                }
              >
                #{volunteer.id}
              </span>
              <span className="">•</span>
              <span className="text-[11px]">Đăng ký {volunteer.date}</span>
            </div>
          </div>
        </div>
      </td>
      <td className="py-4 px-4">
        <div className="flex flex-col">
          <span className="text-sm font-mono text-slate-900 font-medium">
            {volunteer.phone}
          </span>
          <span className="text-slate-500 text-xs truncate">
            {volunteer.email}
          </span>
        </div>
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-1 text-slate-900">
          <MapPin className="text-[16px] text-slate-500 w-5 h-5" />
          <span className="font-medium">{volunteer.area}</span>
        </div>
      </td>
      <td className="py-4 px-4">
        <div className="flex flex-wrap gap-1">
          {volunteer.skills.map((skill, idx) => (
            <span
              key={idx}
              className={`px-2 py-0.5 rounded-full text-[11px] ${
                skill.type === "primary"
                  ? "bg-slate-200 text-slate-900 font-semibold"
                  : skill.type === "secondary"
                    ? "bg-slate-100 text-slate-600"
                    : "bg-teal-100 text-teal-900"
              }`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </td>
      <td className="py-4 px-4 text-center">
        <span className="inline-flex items-center gap-1 text-sm font-medium font-bold text-slate-900 bg-slate-50 px-2 py-1 rounded-lg">
          <span
            className={`text-[14px] ${volunteer.status === "Inactive" ? "text-amber-500/70" : volunteer.status === "Pending" ? "text-slate-500" : "text-amber-500"}`}
          >
            ★
          </span>{" "}
          {volunteer.hours} giờ
        </span>
      </td>
      <td className="py-4 px-4">
        {volunteer.status === "Active" && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-medium text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>{" "}
            Active
          </span>
        )}
        {volunteer.status === "Pending" && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-medium text-[11px] font-semibold">
            <Clock className="text-[12px] w-5 h-5" /> Pending
          </span>
        )}
        {volunteer.status === "Inactive" && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-300 text-slate-500 text-xs font-medium text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>{" "}
            Inactive
          </span>
        )}
      </td>
      <td className="py-4 px-6 text-right">
        <div className="flex items-center justify-end gap-1.5">
          {volunteer.status === "Pending" ? (
            <>
              <button
                className="w-8 h-8 rounded-lg bg-teal-100 text-teal-900 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-all shadow-sm"
                onClick={() => onApprove(volunteer.id, volunteer.name)}
                title="Phê duyệt TNV"
              >
                <Check className="text-[18px] w-5 h-5" />
              </button>
              <button
                className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-all shadow-sm"
                onClick={() => onReject(volunteer.id, volunteer.name)}
                title="Từ chối hồ sơ"
              >
                <X className="text-[18px] w-5 h-5" />
              </button>
            </>
          ) : volunteer.status === "Inactive" ? (
            <>
              <button
                className="px-2.5 py-1 text-slate-500 hover:text-blue-700 hover:bg-slate-200 rounded-lg text-xs font-medium font-label-sm text-label-sm flex items-center gap-1 transition-colors"
                title="Kích hoạt lại tài khoản"
              >
                <RefreshCcw className="text-[16px] w-5 h-5" /> Kích hoạt lại
              </button>
              <button
                className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors"
                title="Xem hồ sơ chi tiết"
              >
                <Eye className="text-[18px] w-5 h-5" />
              </button>
            </>
          ) : (
            <>
              <button
                className="px-2.5 py-1 text-blue-700 hover:bg-blue-100 rounded-lg text-xs font-medium font-label-sm text-label-sm flex items-center gap-1 transition-colors"
                title="Điều phối tuyến giao nhận"
              >
                <Route className="text-[16px] w-5 h-5" /> Điều phối
              </button>
              <button
                className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors"
                title="Xem hồ sơ chi tiết"
              >
                <Eye className="text-[18px] w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
}

function ProcessCard({
  number,
  title,
  text,
  colorClass,
  iconClass,
  icon: Icon,
}) {
  return (
    <div className="bg-slate-50 rounded-xl p-4 flex flex-col gap-2 relative">
      <div className="flex items-center justify-between">
        <span
          className={`w-7 h-7 rounded-full text-sm font-medium font-bold flex items-center justify-center ${colorClass}`}
        >
          {number}
        </span>
        <Icon className={`text-[20px] w-5 h-5 ${iconClass}`} />
      </div>
      <h4 className="text-base font-display font-semibold text-slate-900">
        {title}
      </h4>
      <p className="text-xs text-slate-600">{text}</p>
    </div>
  );
}

export default function VolunteerAndHandlerIntakePage() {
  const [toast, setToast] = useState({
    visible: false,
    type: "",
    title: "",
    message: "",
  });

  const showToast = (type, title, message) => {
    setToast({ visible: true, type, title, message });
    setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), 3000);
  };

  const approveVolunteer = (id, name) => {
    showToast(
      "success",
      "Đã phê duyệt",
      `Hồ sơ của TNV ${name} đã được duyệt.`,
    );
  };

  const rejectVolunteer = (id, name) => {
    showToast("error", "Đã từ chối", `Hồ sơ của TNV ${name} đã bị từ chối.`);
  };

  return (
    <main className="relative bg-canvas min-h-screen">
      <Breadcrumb current="Đội ngũ tiếp nhận" />
      <div className="w-full px-6 py-6">
        <div className="flex flex-col w-full space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <span className="hover:text-blue-700 transition-colors cursor-pointer">
                EduShare VN
              </span>
              <ChevronRight className="text-[16px] text-slate-300 w-5 h-5" />
              <span className="hover:text-blue-700 transition-colors cursor-pointer">
                Tình Nguyện Viên
              </span>
              <ChevronRight className="text-[16px] text-slate-300 w-5 h-5" />
              <span className="text-sm font-medium text-blue-700 font-semibold">
                Đội ngũ tiếp nhận
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 px-4 py-1 bg-white text-slate-900 hover:bg-slate-200 rounded-lg shadow-sm transition-all text-sm font-medium">
                <Download className="text-[18px] text-slate-500 w-5 h-5" /> Xuất
                danh sách CSV
              </button>
              <button className="flex items-center gap-1 px-4 py-1 bg-blue-600 hover:bg-blue-200 text-white rounded-lg shadow-sm transition-all text-sm font-medium">
                <UserPlus className="text-[18px] w-5 h-5" /> Thêm tình nguyện
                viên mới
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-display font-semibold text-slate-900 tracking-tight">
              {" "}
              Quản Lý Đội Ngũ Tình Nguyện Viên &amp; Tiếp Nhận{" "}
            </h1>
            <p className="text-sm text-slate-600 max-w-4xl">
              Hệ thống quản lý, phê duyệt và điều phối nhân sự tình nguyện viên
              phụ trách tiếp nhận, kiểm thử và vận chuyển thiết bị trên toàn
              quốc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              title="Tổng TNV Toàn Quốc"
              value="1.280"
              subtitle="nhân sự"
              trend={
                <span className="text-teal-700">+18% so với quý trước</span>
              }
              trendIcon={TrendingUp}
              colorClass="text-slate-900"
              iconClass="bg-blue-100 text-blue-700"
              icon={Users}
            />
            <StatCard
              title="Đang Hoạt Động"
              value="942"
              subtitle="sẵn sàng điều động"
              trend={
                <span className="px-1 py-0.5 rounded bg-teal-100 text-teal-900 text-xs font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>{" "}
                  Hoạt động tích cực
                </span>
              }
              colorClass="text-slate-900"
              iconClass="bg-teal-100/40 text-teal-700"
              icon={UserCheck}
            />
            <StatCard
              title="Chờ Duyệt Hồ Sơ"
              value="46"
              subtitle="hồ sơ mới nộp"
              trend={
                <span className="px-1 py-0.5 rounded bg-rose-100 text-rose-900 text-xs font-medium flex items-center gap-1">
                  <AlertTriangle className="text-[14px] w-5 h-5" /> Cần xử lý
                  ngay
                </span>
              }
              colorClass="text-rose-600"
              iconClass="bg-rose-100/60 text-rose-600"
              icon={Clock}
            />
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="w-full lg:w-96 flex items-center bg-slate-50 rounded-lg px-4 py-1 text-slate-900">
              <Search className="text-slate-500 text-[20px] mr-1 w-5 h-5" />
              <input
                className="w-full bg-transparent text-xs placeholder:text-slate-600 focus:outline-none"
                id="volunteerSearchInput"
                placeholder="Tìm theo tên, email, số điện thoại, kỹ năng..."
                type="text"
              />
            </div>
            <div className="w-full lg:w-auto flex flex-wrap items-center gap-2">
              <div className="relative flex items-center bg-slate-50 rounded-lg px-2 py-1">
                <MapPin className="text-[18px] text-slate-500 mr-1 w-5 h-5" />
                <select className="bg-transparent text-sm font-medium text-slate-900 focus:outline-none pr-4 cursor-pointer">
                  <option>Tất cả khu vực</option>
                  <option>Miền Bắc (Hà Nội, Tây Bắc)</option>
                  <option>Miền Trung (Đà Nẵng, Quảng Nam)</option>
                  <option>Miền Nam (TP.HCM, ĐBSCL)</option>
                  <option>Tây Nguyên (Đắk Lắk, Gia Lai)</option>
                </select>
              </div>
              <div className="relative flex items-center bg-slate-50 rounded-lg px-2 py-1">
                <Wrench className="text-[18px] text-slate-500 mr-1 w-5 h-5" />
                <select className="bg-transparent text-sm font-medium text-slate-900 focus:outline-none pr-4 cursor-pointer">
                  <option>Tất cả kỹ năng</option>
                  <option>Lái xe tải</option>
                  <option>Sửa máy tính</option>
                  <option>Phân loại đồ</option>
                  <option>Kiểm thử phần cứng</option>
                  <option>Quản lý kho</option>
                  <option>Giao tiếp sư phạm</option>
                </select>
              </div>
              <div className="relative flex items-center bg-slate-50 rounded-lg px-2 py-1">
                <SlidersHorizontal className="text-[18px] text-slate-500 mr-1 w-5 h-5" />
                <select className="bg-transparent text-sm font-medium text-slate-900 focus:outline-none pr-4 cursor-pointer">
                  <option>Tất cả trạng thái</option>
                  <option>Active (Đang hoạt động)</option>
                  <option>Pending (Chờ duyệt)</option>
                  <option>Inactive (Tạm nghỉ)</option>
                </select>
              </div>
              <button
                className="p-2 text-slate-500 hover:text-rose-600 hover:bg-slate-200 rounded-lg transition-colors"
                title="Đặt lại bộ lọc"
              >
                <RefreshCw className="text-[20px] w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-xs font-medium uppercase tracking-wider">
                    <th className="py-4 px-6">Tình nguyện viên</th>
                    <th className="py-4 px-4">Liên hệ</th>
                    <th className="py-4 px-4">Khu vực phụ trách</th>
                    <th className="py-4 px-4">Kỹ năng chuyên môn</th>
                    <th className="py-4 px-4 text-center">Cống hiến</th>
                    <th className="py-4 px-4">Trạng thái</th>
                    <th className="py-4 px-6 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-transparent text-xs">
                  {volunteers.map((volunteer) => (
                    <VolunteerRow
                      key={volunteer.id}
                      volunteer={volunteer}
                      onApprove={approveVolunteer}
                      onReject={rejectVolunteer}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Đang xem{" "}
                <span className="font-semibold text-slate-900">
                  1 - {volunteers.length}
                </span>{" "}
                trong tổng số{" "}
                <span className="font-semibold text-slate-900">1.280</span> tình
                nguyện viên
              </div>
              <div className="flex items-center gap-1">
                <button
                  className="px-3 py-1.5 rounded-lg text-slate-500 hover:bg-slate-200 disabled:opacity-40 transition-colors text-sm font-medium flex items-center gap-1"
                  disabled
                >
                  <ChevronLeft className="text-[16px] w-5 h-5" /> Trước
                </button>
                <button className="w-8 h-8 rounded-lg bg-blue-600 text-white text-sm font-medium font-semibold flex items-center justify-center">
                  1
                </button>
                <button className="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-900 text-sm font-medium flex items-center justify-center transition-colors">
                  2
                </button>
                <button className="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-900 text-sm font-medium flex items-center justify-center transition-colors">
                  3
                </button>
                <span className="px-1 text-slate-500">...</span>
                <button className="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-900 text-sm font-medium flex items-center justify-center transition-colors">
                  183
                </button>
                <button className="px-3 py-1.5 rounded-lg text-slate-500 hover:bg-slate-200 transition-colors text-sm font-medium flex items-center gap-1">
                  Sau <ChevronRight className="text-[16px] w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Network className="text-blue-700 text-[22px] w-5 h-5" />
                <h3 className="text-base font-display font-semibold text-slate-900">
                  Quy Trình Chuẩn Điều Phối Tình Nguyện Viên Tiếp Nhận EduShare
                </h3>
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Quy chuẩn ISO TNV-VN-2024
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              <ProcessCard
                number="1"
                title="Đăng ký & Thẩm định hồ sơ"
                text="Kiểm tra CCCD/VNeID, rà soát lịch sử đóng góp cộng đồng và xác minh vị trí địa lý thường trú để phân vùng tuyến."
                colorClass="bg-blue-600 text-white"
                iconClass="text-blue-700"
                icon={Badge}
              />
              <ProcessCard
                number="2"
                title="Phân loại kỹ năng & Tập huấn kỹ thuật"
                text="Cấp chứng chỉ kiểm thử thiết bị số, quy chuẩn đóng gói kiện hàng đạt chuẩn vận chuyển đèo dốc và sơ cấp cứu thực địa."
                colorClass="bg-slate-200 text-slate-900"
                iconClass="text-slate-500"
                icon={School}
              />
              <ProcessCard
                number="3"
                title="Nhận lệnh điều phối & Ký bàn giao thực địa"
                text="Nhận lệnh vận chuyển số trên ứng dụng EduShare, thực hiện quét QR niêm phong và ký số biên bản giao nhận với nhà trường."
                colorClass="bg-teal-100 text-teal-900"
                iconClass="text-teal-700"
                icon={Truck}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Toast */}
      <div
        className={`fixed bottom-6 right-6 transition-all duration-300 z-50 flex items-center gap-2 bg-white p-4 rounded-lg shadow-xl border-l-4 ${
          toast.type === "success" ? "border-teal-600" : "border-rose-600"
        } ${
          toast.visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-24 pointer-events-none"
        }`}
      >
        {toast.type === "success" ? (
          <Check className="w-6 h-6 text-teal-600" />
        ) : (
          <X className="w-6 h-6 text-rose-600" />
        )}
        <div className="flex flex-col">
          <span className="text-sm font-medium font-bold text-slate-900">
            {toast.title}
          </span>
          <span className="text-xs text-slate-500">{toast.message}</span>
        </div>
      </div>
    </main>
  );
}
