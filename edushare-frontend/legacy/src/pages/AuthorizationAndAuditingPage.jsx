import { useState } from "react";
import {
  Download,
  UserPlus,
  Users,
  Clock,
  Zap,
  ShieldCheck,
  Search,
  CheckCircle2,
  MoreVertical,
  Eye,
  LockOpen,
  Filter,
  History,
  Truck,
  Monitor,
} from "lucide-react";
import { Breadcrumb } from "../components/system-ui";

const usersData = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    sub: "Ban Điều phối Quốc gia EduShare",
    email: "an.nguyen@edushare.vn",
    phone: "0912.839.201",
    date: "15/01/2023",
    role: "Admin (Quản trị viên)",
    roleValue: "admin",
    status: "Đã duyệt",
    type: "verified",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Thầy Lò Văn Huỳnh",
    sub: "PTDTBT THCS Trà Dơn (Nam Trà My)",
    email: "thcs.tradon@edu.quangnam.vn",
    phone: "0948.112.554",
    date: "04/09/2023",
    role: "School (Điểm trường)",
    roleValue: "school",
    status: "Đã duyệt",
    type: "verified",
    initials: "TĐ",
  },
  {
    id: 3,
    name: "Quỹ Hy Vọng (FPT Hope Foundation)",
    sub: "Đại diện: Bà Trương Thanh Thanh",
    email: "hope@fpt.com.vn",
    phone: "024.7300.7300",
    date: "12/11/2023",
    role: "Donor (Nhà hảo tâm)",
    roleValue: "donor",
    status: "Đã duyệt",
    type: "verified",
    initials: "FH",
  },
  {
    id: 4,
    name: "Lê Hoàng Long",
    sub: "Trưởng Đoàn TNV Vượt Đèo Hà Giang",
    email: "long.le@tnv-edushare.org",
    phone: "0977.452.190",
    date: "08/02/2024",
    role: "Volunteer (Tình nguyện viên)",
    roleValue: "volunteer",
    status: "Đã duyệt",
    type: "verified",
    initials: "HL",
  },
  {
    id: 5,
    name: "Cô Vi Thị Dung",
    sub: "Trường Tiểu học Mường Lát (Thanh Hóa)",
    email: "thmuonglat.th@moet.edu.vn",
    phone: "0983.334.198",
    date: "22/10/2024",
    role: "School (Điểm trường)",
    roleValue: "school",
    status: "Chờ xác minh",
    type: "pending",
    initials: "ML",
  },
  {
    id: 6,
    name: "Phạm Hồng Anh",
    sub: "Nhà hảo tâm cá nhân (Hà Nội)",
    email: "honganh.pham@gmail.com",
    phone: "0903.441.982",
    date: "10/05/2024",
    role: "Donor (Nhà hảo tâm)",
    roleValue: "donor",
    status: "Đã duyệt",
    type: "verified",
    initials: "PA",
  },
  {
    id: 7,
    name: "KTV Hoàng Sơn",
    sub: "Trưởng Kỹ Thuật Kho Tân Bình",
    email: "son.hoang@tech-edushare.org",
    phone: "0936.551.442",
    date: "20/03/2024",
    role: "Volunteer (Tình nguyện viên)",
    roleValue: "volunteer",
    status: "Đã duyệt",
    type: "verified",
    initials: "HS",
  },
];

const auditLogs = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    role: "Admin Quốc gia",
    time: "14:35:12 • Hôm nay",
    action: "Phê duyệt lệnh xuất kho",
    target: "#XK-2024-88",
    detail:
      "(50 bộ máy tính để bàn HP EliteDesk kèm màn hình đến điểm trường PTDTBT THCS Tà Tổng, Mường Tè, Lai Châu).",
    ip: "118.70.12.84 (Hà Nội, VN)",
    device: "Chrome 122 / MacOS Darwin",
    signature: "Ký số SHA-256 Valid",
    icon: <Truck size={20} />,
  },
  {
    id: 2,
    name: "Nguyễn Văn An",
    role: "Admin Quốc gia",
    time: "13:10:04 • Hôm nay",
    action: "Nâng quyền người dùng",
    target: "Lê Hoàng Long",
    detail:
      "từ [Volunteer] lên [Volunteer Leader] để điều phối đội xe lên Hà Giang.",
    ip: "118.70.12.84 (Hà Nội, VN)",
    device: "Chrome 122 / MacOS Darwin",
    signature: "Ký số SHA-256 Valid",
    icon: <ShieldCheck size={20} />,
  },
];

function Metric({ icon: Icon, label, value, children, red }) {
  return (
    <article className="flex min-h-36 flex-col justify-between rounded-lg bg-white p-5 shadow-sm">
      <div className="flex justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
            {label}
          </p>
          <h2
            className={`mt-2 font-display text-3xl font-semibold ${red ? "text-rose-600" : "text-slate-950"}`}
          >
            {value}
          </h2>
        </div>
        <span
          className={`grid size-10 place-items-center rounded ${red ? "bg-rose-100 text-rose-600" : "bg-blue-100 text-blue-600"}`}
        >
          <Icon size={21} />
        </span>
      </div>
      <div className="text-xs text-slate-600">{children}</div>
    </article>
  );
}

export default function AuthorizationAndAuditingPage() {
  const [tab, setTab] = useState("users");

  return (
    <>
      <Breadcrumb current="Phân quyền & Kiểm toán" />
      <main className="mx-auto max-w-[1540px] space-y-5 px-4 py-5 lg:px-6">
        <header className="flex flex-col justify-between gap-4 md:flex-row md:items-end relative">
          <div>
            <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wide">
              <span className="inline-flex items-center gap-1 rounded bg-teal-100 px-2 py-1 text-teal-800">
                <span className="size-1.5 rounded-full bg-teal-600 animate-pulse"></span>
                TRUNG TÂM PHÂN QUYỀN & KIỂM TOÁN HỆ THỐNG
              </span>
              <span className="text-slate-500">• RBAC & AUDIT TRAIL</span>
            </div>
            <h1 className="max-w-3xl font-display text-2xl font-semibold leading-tight md:text-[28px]">
              Phân Quyền Người Dùng & Nhật Ký Kiểm Toán
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">
              Quản lý vai trò (Role-Based Access Control), phê duyệt xác thực
              danh tính KYC cho các thực thể và giám sát toàn bộ hoạt động giao
              dịch, xuất nhập kho theo thời gian thực.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-1 rounded bg-white px-3 py-2.5 text-xs font-semibold shadow-sm border border-slate-200">
              <Download size={15} /> Xuất nhật ký (Audit Export)
            </button>
            <button className="inline-flex items-center gap-1 rounded bg-blue-600 px-3 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700">
              <UserPlus size={15} /> Thêm người dùng mới
            </button>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Metric icon={Users} label="Tổng Tài Khoản" value="1,420">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[10px] font-semibold text-teal-700 flex items-center gap-1">
                <CheckCircle2 size={12} /> Active 98.4%
              </span>
              <span className="text-[10px]">23 tài khoản tạm khóa</span>
            </div>
          </Metric>
          <Metric icon={Clock} label="Chờ Xác Thực KYC" value="18" red>
            <div className="flex items-center justify-between">
              <span>12 Trường học • 6 Tổ chức</span>
              <span className="text-[10px] font-semibold text-rose-600">
                Cần xử lý sớm
              </span>
            </div>
          </Metric>
          <Metric icon={Zap} label="Hành Động Hôm Nay" value="842">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700 flex items-center gap-1">
                <Zap size={12} /> Ghi log tự động
              </span>
              <span className="text-[10px]">Thời gian thực 100%</span>
            </div>
          </Metric>
          <Metric icon={ShieldCheck} label="Cảnh Báo Bảo Mật / IP Lạ" value="0">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 font-semibold text-teal-700">
                <CheckCircle2 size={14} /> An toàn tuyệt đối
              </span>
              <span className="text-[10px]">2FA Kích hoạt</span>
            </div>
          </Metric>
        </section>

        {/* Tab Navigation */}
        <section className="flex items-center gap-6 border-b border-slate-200">
          <button
            onClick={() => setTab("users")}
            className={`flex items-center gap-2 border-b-2 py-3 text-sm font-semibold transition-colors ${tab === "users" ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-900"}`}
          >
            <Users size={18} /> Quản lý Người dùng
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">
              1,420
            </span>
          </button>
          <button
            onClick={() => setTab("audit")}
            className={`flex items-center gap-2 border-b-2 py-3 text-sm font-semibold transition-colors ${tab === "audit" ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-900"}`}
          >
            <History size={18} /> Nhật ký Hệ thống (Audit Log)
            <span className="inline-flex items-center gap-1 rounded-full bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-700">
              <span className="size-1.5 rounded-full bg-teal-600 animate-pulse"></span>{" "}
              Real-time
            </span>
          </button>
        </section>

        {/* Tab Content */}
        {tab === "users" && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 rounded-lg bg-white p-3 shadow-sm xl:flex-row xl:items-center xl:justify-between">
              <label className="flex flex-1 max-w-md items-center gap-2 rounded bg-slate-50 px-3 py-2 text-slate-500 border border-slate-200">
                <Search size={16} />
                <input
                  className="w-full bg-transparent text-xs outline-none"
                  placeholder="Tìm theo tên, email, tổ chức, số CMND/CCCD..."
                />
              </label>
              <div className="flex flex-wrap gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Vai trò:</span>
                  <select className="rounded border border-slate-200 bg-slate-50 px-3 py-2 outline-none">
                    <option>Tất cả vai trò</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Trạng thái KYC:</span>
                  <select className="rounded border border-slate-200 bg-slate-50 px-3 py-2 outline-none">
                    <option>Tất cả trạng thái</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[1000px] text-left text-sm">
                  <thead className="bg-slate-50 text-[10px] uppercase text-slate-500 border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3">Người dùng / Đơn vị</th>
                      <th className="px-4 py-3">Liên hệ & Email</th>
                      <th className="px-4 py-3">Ngày tham gia</th>
                      <th className="px-4 py-3">Vai trò (Role)</th>
                      <th className="px-4 py-3">Trạng thái KYC</th>
                      <th className="px-4 py-3 text-right">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {usersData.map((user) => (
                      <tr
                        key={user.id}
                        className={`hover:bg-slate-50 ${user.type === "pending" ? "bg-rose-50/50" : ""}`}
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            {user.avatar ? (
                              <img
                                src={user.avatar}
                                className="size-9 rounded-full object-cover"
                                alt={user.name}
                              />
                            ) : (
                              <div
                                className={`flex size-9 items-center justify-center rounded-full text-xs font-bold ${user.type === "pending" ? "bg-rose-100 text-rose-700" : "bg-blue-100 text-blue-700"}`}
                              >
                                {user.initials}
                              </div>
                            )}
                            <div>
                              <div className="font-semibold">{user.name}</div>
                              <div className="text-[11px] text-slate-500">
                                {user.sub}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="font-medium text-slate-900">
                            {user.email}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {user.phone}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-xs text-slate-600">
                          {user.date}
                        </td>
                        <td className="px-4 py-3">
                          <select className="rounded border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 outline-none">
                            <option value={user.roleValue}>{user.role}</option>
                          </select>
                        </td>
                        <td className="px-4 py-3">
                          {user.type === "pending" ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-2 py-1 text-[10px] font-semibold text-rose-700">
                              <Clock size={12} /> {user.status}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded-full bg-teal-100 px-2 py-1 text-[10px] font-semibold text-teal-700">
                              <CheckCircle2 size={12} /> {user.status}
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex justify-end gap-2">
                            {user.type === "pending" && (
                              <button className="rounded bg-blue-600 px-2 py-1 text-[10px] font-semibold text-white hover:bg-blue-700">
                                Duyệt KYC
                              </button>
                            )}
                            <button className="p-1 text-slate-400 hover:text-slate-600">
                              <Eye size={16} />
                            </button>
                            <button className="p-1 text-slate-400 hover:text-rose-600">
                              <LockOpen size={16} />
                            </button>
                            <button className="p-1 text-slate-400 hover:text-slate-600">
                              <MoreVertical size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-500">
                <span>
                  Hiển thị <strong className="text-slate-900">1 - 7</strong>{" "}
                  trong tổng số{" "}
                  <strong className="text-slate-900">1,420</strong> người dùng
                </span>
                <div className="flex items-center gap-1">
                  <button className="rounded border border-slate-200 bg-white px-2 py-1">
                    Trước
                  </button>
                  <button className="rounded bg-blue-600 px-2 py-1 text-white">
                    1
                  </button>
                  <button className="rounded border border-slate-200 bg-white px-2 py-1">
                    2
                  </button>
                  <button className="rounded border border-slate-200 bg-white px-2 py-1">
                    3
                  </button>
                  <span>...</span>
                  <button className="rounded border border-slate-200 bg-white px-2 py-1">
                    Sau
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "audit" && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 rounded-lg bg-white p-3 shadow-sm xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Hành động:</span>
                  <select className="rounded border border-slate-200 bg-slate-50 px-3 py-2 outline-none">
                    <option>Tất cả hành động</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Thời gian:</span>
                  <select className="rounded border border-slate-200 bg-slate-50 px-3 py-2 outline-none">
                    <option>Hôm nay (24 giờ qua)</option>
                  </select>
                </div>
                <label className="flex items-center gap-2 rounded bg-slate-50 px-3 py-2 text-slate-500 border border-slate-200">
                  <Filter size={14} />
                  <input
                    className="w-full bg-transparent outline-none"
                    placeholder="Lọc theo IP..."
                  />
                </label>
              </div>
              <span className="flex items-center gap-2 text-xs font-semibold text-teal-700">
                <span className="size-2 rounded-full bg-teal-600 animate-pulse"></span>
                Hệ thống ghi nhận 842 sự kiện
              </span>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="relative border-l-2 border-slate-100 pl-6 space-y-6">
                {auditLogs.map((log) => (
                  <div key={log.id} className="relative">
                    <span className="absolute -left-[35px] top-1 flex size-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-sm ring-4 ring-white">
                      {log.icon}
                    </span>
                    <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-900">
                            {log.name}
                          </span>
                          <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
                            {log.role}
                          </span>
                          <span className="text-xs text-slate-500">
                            đã thực hiện thao tác:
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-xs font-medium text-slate-500">
                          <Clock size={14} /> {log.time}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-700">
                        {log.action}{" "}
                        <strong className="font-semibold text-blue-700">
                          {log.target}
                        </strong>{" "}
                        {log.detail}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-3 text-[10px] text-slate-500">
                        <span className="flex items-center gap-1">
                          <Zap size={14} /> IP: {log.ip}
                        </span>
                        <span className="flex items-center gap-1">
                          <Monitor size={14} /> {log.device}
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-teal-700">
                          <CheckCircle2 size={14} /> {log.signature}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
