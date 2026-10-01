import React, { useState } from "react";
import { Breadcrumb } from "../../components/system-ui";
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

function StatCard({ title, value, subtitle, icon: Icon, trend, colorClass, iconClass, trendIcon: TrendIcon }) {
  return (
    <div className="relative flex items-start justify-between overflow-hidden rounded-xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium tracking-wider text-slate-500 uppercase">{title}</span>
        <div className="mt-1 flex items-baseline gap-1">
          <span className={`font-display text-4xl font-bold ${colorClass}`}>{value}</span>
          <span className="text-xs font-medium text-slate-500">{subtitle}</span>
        </div>
        <div className="mt-2 flex items-center gap-1 text-xs font-medium">
          {TrendIcon && <TrendIcon className="text-[16px] text-teal-700" />}
          {trend}
        </div>
      </div>
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconClass}`}>
        <Icon className="text-[26px]" />
      </div>
    </div>
  );
}

function VolunteerRow({ volunteer, onApprove, onReject }) {
  return (
    <tr
      className={`group transition-colors hover:bg-slate-100 ${volunteer.status === "Pending" ? "bg-slate-50/40" : ""} ${volunteer.status === "Inactive" ? "opacity-85" : ""}`}
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <img
            className={`h-10 w-10 rounded-full bg-slate-200 object-cover shadow-sm ${volunteer.status === "Inactive" ? "grayscale-[30%] filter" : ""}`}
            src={volunteer.avatar}
          />
          <div className="flex min-w-0 flex-col">
            <span className="font-display truncate text-base font-semibold text-slate-900">{volunteer.name}</span>
            <div className="flex items-center gap-1 font-mono text-sm text-slate-500">
              <span
                className={
                  volunteer.status === "Inactive" ? "font-semibold text-slate-500" : "font-semibold text-blue-700"
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
      <td className="px-4 py-4">
        <div className="flex flex-col">
          <span className="font-mono text-sm font-medium text-slate-900">{volunteer.phone}</span>
          <span className="truncate text-xs text-slate-500">{volunteer.email}</span>
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-1 text-slate-900">
          <MapPin className="h-5 w-5 text-[16px] text-slate-500" />
          <span className="font-medium">{volunteer.area}</span>
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="flex flex-wrap gap-1">
          {volunteer.skills.map((skill, idx) => (
            <span
              key={idx}
              className={`rounded-full px-2 py-0.5 text-[11px] ${
                skill.type === "primary"
                  ? "bg-slate-200 font-semibold text-slate-900"
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
      <td className="px-4 py-4 text-center">
        <span className="inline-flex items-center gap-1 rounded-lg bg-slate-50 px-2 py-1 text-sm font-bold font-medium text-slate-900">
          <span
            className={`text-[14px] ${volunteer.status === "Inactive" ? "text-amber-500/70" : volunteer.status === "Pending" ? "text-slate-500" : "text-amber-500"}`}
          >
            ★
          </span>{" "}
          {volunteer.hours} giờ
        </span>
      </td>
      <td className="px-4 py-4">
        {volunteer.status === "Active" && (
          <span className="inline-flex items-center gap-1 rounded-full bg-teal-100 px-2.5 py-1 text-xs text-[11px] font-medium text-teal-900">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-600"></span> Active
          </span>
        )}
        {volunteer.status === "Pending" && (
          <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-2.5 py-1 text-xs text-[11px] font-medium font-semibold text-rose-900">
            <Clock className="h-5 w-5 text-[12px]" /> Pending
          </span>
        )}
        {volunteer.status === "Inactive" && (
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-300 px-2.5 py-1 text-xs text-[11px] font-medium text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span> Inactive
          </span>
        )}
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex items-center justify-end gap-1.5">
          {volunteer.status === "Pending" ? (
            <>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-100 text-teal-900 shadow-sm transition-all hover:bg-teal-600 hover:text-white"
                onClick={() => onApprove(volunteer.id, volunteer.name)}
                title="Phê duyệt TNV"
              >
                <Check className="h-5 w-5 text-[18px]" />
              </button>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-rose-600 shadow-sm transition-all hover:bg-rose-600 hover:text-white"
                onClick={() => onReject(volunteer.id, volunteer.name)}
                title="Từ chối hồ sơ"
              >
                <X className="h-5 w-5 text-[18px]" />
              </button>
            </>
          ) : volunteer.status === "Inactive" ? (
            <>
              <button
                className="font-label-sm text-label-sm flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-200 hover:text-blue-700"
                title="Kích hoạt lại tài khoản"
              >
                <RefreshCcw className="h-5 w-5 text-[16px]" /> Kích hoạt lại
              </button>
              <button
                className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900"
                title="Xem hồ sơ chi tiết"
              >
                <Eye className="h-5 w-5 text-[18px]" />
              </button>
            </>
          ) : (
            <>
              <button
                className="font-label-sm text-label-sm flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-100"
                title="Điều phối tuyến giao nhận"
              >
                <Route className="h-5 w-5 text-[16px]" /> Điều phối
              </button>
              <button
                className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900"
                title="Xem hồ sơ chi tiết"
              >
                <Eye className="h-5 w-5 text-[18px]" />
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
}

function ProcessCard({ number, title, text, colorClass, iconClass, icon: Icon }) {
  return (
    <div className="relative flex flex-col gap-2 rounded-xl bg-slate-50 p-4">
      <div className="flex items-center justify-between">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold font-medium ${colorClass}`}
        >
          {number}
        </span>
        <Icon className={`h-5 w-5 text-[20px] ${iconClass}`} />
      </div>
      <h4 className="font-display text-base font-semibold text-slate-900">{title}</h4>
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
    showToast("success", "Đã phê duyệt", `Hồ sơ của TNV ${name} đã được duyệt.`);
  };

  const rejectVolunteer = (id, name) => {
    showToast("error", "Đã từ chối", `Hồ sơ của TNV ${name} đã bị từ chối.`);
  };

  return (
    <main className="bg-canvas relative min-h-screen">
      <Breadcrumb current="Đội ngũ tiếp nhận" />
      <div className="w-full px-6 py-6">
        <div className="flex w-full flex-col space-y-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <span className="cursor-pointer transition-colors hover:text-blue-700">EduShare VN</span>
              <ChevronRight className="h-5 w-5 text-[16px] text-slate-300" />
              <span className="cursor-pointer transition-colors hover:text-blue-700">Tình Nguyện Viên</span>
              <ChevronRight className="h-5 w-5 text-[16px] text-slate-300" />
              <span className="text-sm font-medium font-semibold text-blue-700">Đội ngũ tiếp nhận</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 rounded-lg bg-white px-4 py-1 text-sm font-medium text-slate-900 shadow-sm transition-all hover:bg-slate-200">
                <Download className="h-5 w-5 text-[18px] text-slate-500" /> Xuất danh sách CSV
              </button>
              <button className="flex items-center gap-1 rounded-lg bg-blue-600 px-4 py-1 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-200">
                <UserPlus className="h-5 w-5 text-[18px]" /> Thêm tình nguyện viên mới
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900">
              {" "}
              Quản Lý Đội Ngũ Tình Nguyện Viên &amp; Tiếp Nhận{" "}
            </h1>
            <p className="max-w-4xl text-sm text-slate-600">
              Hệ thống quản lý, phê duyệt và điều phối nhân sự tình nguyện viên phụ trách tiếp nhận, kiểm thử và vận
              chuyển thiết bị trên toàn quốc.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <StatCard
              title="Tổng TNV Toàn Quốc"
              value="1.280"
              subtitle="nhân sự"
              trend={<span className="text-teal-700">+18% so với quý trước</span>}
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
                <span className="flex items-center gap-1 rounded bg-teal-100 px-1 py-0.5 text-xs font-medium text-teal-900">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600"></span> Hoạt động tích cực
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
                <span className="flex items-center gap-1 rounded bg-rose-100 px-1 py-0.5 text-xs font-medium text-rose-900">
                  <AlertTriangle className="h-5 w-5 text-[14px]" /> Cần xử lý ngay
                </span>
              }
              colorClass="text-rose-600"
              iconClass="bg-rose-100/60 text-rose-600"
              icon={Clock}
            />
          </div>

          <div className="flex flex-col items-center justify-between gap-4 rounded-xl bg-white p-4 shadow-sm lg:flex-row">
            <div className="flex w-full items-center rounded-lg bg-slate-50 px-4 py-1 text-slate-900 lg:w-96">
              <Search className="mr-1 h-5 w-5 text-[20px] text-slate-500" />
              <input
                className="w-full bg-transparent text-xs placeholder:text-slate-600 focus:outline-none"
                id="volunteerSearchInput"
                placeholder="Tìm theo tên, email, số điện thoại, kỹ năng..."
                type="text"
              />
            </div>
            <div className="flex w-full flex-wrap items-center gap-2 lg:w-auto">
              <div className="relative flex items-center rounded-lg bg-slate-50 px-2 py-1">
                <MapPin className="mr-1 h-5 w-5 text-[18px] text-slate-500" />
                <select className="cursor-pointer bg-transparent pr-4 text-sm font-medium text-slate-900 focus:outline-none">
                  <option>Tất cả khu vực</option>
                  <option>Miền Bắc (Hà Nội, Tây Bắc)</option>
                  <option>Miền Trung (Đà Nẵng, Quảng Nam)</option>
                  <option>Miền Nam (TP.HCM, ĐBSCL)</option>
                  <option>Tây Nguyên (Đắk Lắk, Gia Lai)</option>
                </select>
              </div>
              <div className="relative flex items-center rounded-lg bg-slate-50 px-2 py-1">
                <Wrench className="mr-1 h-5 w-5 text-[18px] text-slate-500" />
                <select className="cursor-pointer bg-transparent pr-4 text-sm font-medium text-slate-900 focus:outline-none">
                  <option>Tất cả kỹ năng</option>
                  <option>Lái xe tải</option>
                  <option>Sửa máy tính</option>
                  <option>Phân loại đồ</option>
                  <option>Kiểm thử phần cứng</option>
                  <option>Quản lý kho</option>
                  <option>Giao tiếp sư phạm</option>
                </select>
              </div>
              <div className="relative flex items-center rounded-lg bg-slate-50 px-2 py-1">
                <SlidersHorizontal className="mr-1 h-5 w-5 text-[18px] text-slate-500" />
                <select className="cursor-pointer bg-transparent pr-4 text-sm font-medium text-slate-900 focus:outline-none">
                  <option>Tất cả trạng thái</option>
                  <option>Active (Đang hoạt động)</option>
                  <option>Pending (Chờ duyệt)</option>
                  <option>Inactive (Tạm nghỉ)</option>
                </select>
              </div>
              <button
                className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-rose-600"
                title="Đặt lại bộ lọc"
              >
                <RefreshCw className="h-5 w-5 text-[20px]" />
              </button>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-50 text-xs font-medium tracking-wider text-slate-500 uppercase">
                    <th className="px-6 py-4">Tình nguyện viên</th>
                    <th className="px-4 py-4">Liên hệ</th>
                    <th className="px-4 py-4">Khu vực phụ trách</th>
                    <th className="px-4 py-4">Kỹ năng chuyên môn</th>
                    <th className="px-4 py-4 text-center">Cống hiến</th>
                    <th className="px-4 py-4">Trạng thái</th>
                    <th className="px-6 py-4 text-right">Thao tác</th>
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

            <div className="flex flex-col items-center justify-between gap-4 bg-slate-50/50 px-6 py-4 sm:flex-row">
              <div className="text-xs text-slate-500">
                Đang xem <span className="font-semibold text-slate-900">1 - {volunteers.length}</span> trong tổng số{" "}
                <span className="font-semibold text-slate-900">1.280</span> tình nguyện viên
              </div>
              <div className="flex items-center gap-1">
                <button
                  className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-200 disabled:opacity-40"
                  disabled
                >
                  <ChevronLeft className="h-5 w-5 text-[16px]" /> Trước
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-medium font-semibold text-white">
                  1
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium text-slate-900 transition-colors hover:bg-slate-200">
                  2
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium text-slate-900 transition-colors hover:bg-slate-200">
                  3
                </button>
                <span className="px-1 text-slate-500">...</span>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium text-slate-900 transition-colors hover:bg-slate-200">
                  183
                </button>
                <button className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-200">
                  Sau <ChevronRight className="h-5 w-5 text-[16px]" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Network className="h-5 w-5 text-[22px] text-blue-700" />
                <h3 className="font-display text-base font-semibold text-slate-900">
                  Quy Trình Chuẩn Điều Phối Tình Nguyện Viên Tiếp Nhận EduShare
                </h3>
              </div>
              <span className="text-xs font-medium tracking-wider text-slate-500 uppercase">
                Quy chuẩn ISO TNV-VN-2024
              </span>
            </div>

            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
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
        className={`fixed right-6 bottom-6 z-50 flex items-center gap-2 rounded-lg border-l-4 bg-white p-4 shadow-xl transition-all duration-300 ${
          toast.type === "success" ? "border-teal-600" : "border-rose-600"
        } ${toast.visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"}`}
      >
        {toast.type === "success" ? (
          <Check className="h-6 w-6 text-teal-600" />
        ) : (
          <X className="h-6 w-6 text-rose-600" />
        )}
        <div className="flex flex-col">
          <span className="text-sm font-bold font-medium text-slate-900">{toast.title}</span>
          <span className="text-xs text-slate-500">{toast.message}</span>
        </div>
      </div>
    </main>
  );
}
