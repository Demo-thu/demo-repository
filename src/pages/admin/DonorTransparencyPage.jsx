import { useState } from "react";
import {
  BadgeCheck,
  Box,
  Check,
  ChevronDown,
  ClipboardCheck,
  Download,
  FileDown,
  Gift,
  Laptop,
  MapPin,
  PackageCheck,
  Plus,
  QrCode,
  RefreshCw,
  Search,
  Share2,
  ShieldCheck,
  Truck,
  Wrench,
  X,
} from "lucide-react";
import { Breadcrumb } from "../../components/system-ui";

const proofImages = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
];

const devices = [
  [
    "#EDUS-2024-001",
    "ThinkPad T480 (Core i5 8350U)",
    "PF-19A821",
    "Loại A (Tốt 98%)",
    "SSD 256GB NVMe mới 100%",
    "Phòng Tin học Lầu 2 (Máy 01)",
  ],
  [
    "#EDUS-2024-002",
    "ThinkPad T480 (Core i5 8350U)",
    "PF-19A822",
    "Loại A (Tốt 95%)",
    "SSD 256GB NVMe mới + Pin ngoài 24Wh",
    "Phòng Tin học Lầu 2 (Máy 02)",
  ],
  [
    "#EDUS-2024-003",
    "ThinkPad T480 (Core i5 8350U)",
    "PF-19A840",
    "Loại B+ (Tốt 90%)",
    "SSD 256GB NVMe mới + Cụm bàn phím mới",
    "Phòng Tin học Lầu 2 (Máy 03)",
  ],
  [
    "#EDUS-2024-004",
    "ThinkPad T480 (Core i5 8350U)",
    "PF-19A855",
    "Loại A (Tốt 96%)",
    "SSD 256GB NVMe mới 100%",
    "Phòng Tin học Lầu 2 (Máy 04)",
  ],
];

function TimelineStep({ icon: Icon, title, date, state, children, active, last }) {
  return (
    <div className="relative grid grid-cols-[34px_1fr] gap-3 pb-4 last:pb-0">
      {!last && <span className="absolute top-9 left-[16px] h-[calc(100%-22px)] w-px bg-blue-200" />}
      <span
        className={`z-10 grid size-[34px] place-items-center rounded-md ${active ? "bg-blue-600 text-white" : "bg-teal-700 text-white"}`}
      >
        <Icon size={17} />
      </span>
      <article className={`rounded-md p-3 ${active ? "bg-blue-50 ring-1 ring-blue-100" : "bg-blue-50/80"}`}>
        <div className="flex flex-wrap items-start justify-between gap-1">
          <h3 className={`font-display text-sm font-semibold ${active ? "text-blue-700" : "text-slate-900"}`}>
            {title}
          </h3>
          <div className="flex items-center gap-1 text-[10px] text-slate-500">
            <span
              className={`rounded px-1.5 py-0.5 font-semibold ${active ? "bg-blue-600 text-white" : "bg-teal-100 text-teal-800"}`}
            >
              {state}
            </span>
            <span>{date}</span>
          </div>
        </div>
        <div className="mt-1 text-xs leading-4 text-slate-600">{children}</div>
      </article>
    </div>
  );
}

export default function DonorTransparencyPage() {
  const [showRegister, setShowRegister] = useState(false);
  const [message, setMessage] = useState("");

  function submitRegistration(event) {
    event.preventDefault();
    setShowRegister(false);
    setMessage("Đã ghi nhận yêu cầu đăng ký đợt đóng góp mới.");
  }

  return (
    <>
      <Breadcrumb current="Hành trình quyên góp minh bạch" />
      <main className="mx-auto max-w-[1540px] space-y-4 px-4 py-5 lg:px-6">
        <section className="rounded-lg bg-white px-5 py-4 shadow-sm">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <span className="inline-flex items-center gap-1 rounded-full bg-teal-100 px-2 py-1 text-[10px] font-semibold text-teal-800">
                <ShieldCheck size={12} /> CỔNG NHÀ HẢO TÂM ĐỘC LẬP • MINH BẠCH CHUỖI CUNG ỨNG
              </span>
              <h1 className="font-display mt-2 max-w-3xl text-2xl leading-tight font-semibold text-slate-950 md:text-[28px]">
                Tra Cứu Hành Trình Thiết Bị & Quyên Góp Minh Bạch
              </h1>
              <p className="mt-1 max-w-3xl text-sm text-slate-600">
                Hệ thống truy vết thời gian thực từng thiết bị từ khâu tiếp nhận, kiểm thử, nâng cấp linh kiện đến lúc
                tặng tay học sinh vùng cao.
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={() => setShowRegister(true)}
                className="inline-flex items-center gap-1.5 rounded bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                <Plus size={16} /> Đăng ký đợt đóng góp mới
              </button>
              <button className="inline-flex items-center gap-1.5 rounded bg-blue-50 px-3 py-2 text-xs font-semibold text-slate-700">
                <FileDown size={15} /> Lịch sử hồ sơ
              </button>
            </div>
          </div>
        </section>

        {message && (
          <div className="flex items-center justify-between rounded-md bg-teal-50 px-4 py-3 text-sm text-teal-800">
            <span className="flex items-center gap-2">
              <Check size={16} />
              {message}
            </span>
            <button onClick={() => setMessage("")}>
              <X size={16} />
            </button>
          </div>
        )}

        <section className="grid gap-4 md:grid-cols-12">
          <article className="rounded-lg bg-white p-4 shadow-sm md:col-span-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold tracking-wide text-slate-500 uppercase">
                Hồ sơ bảo trợ danh dự
              </span>
              <span className="rounded-full bg-teal-100 px-2 py-1 text-[10px] font-semibold text-teal-800">
                Huy hiệu Vàng 2024
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <span className="font-display grid size-14 place-items-center rounded-lg bg-blue-100 text-lg font-semibold text-blue-700">
                FPT
              </span>
              <div>
                <h2 className="font-display text-base font-semibold">Công ty CP Công nghệ FPT</h2>
                <p className="text-xs text-slate-600">Đại diện: Anh Trần Minh Tuấn</p>
                <p className="mt-1 text-[10px] text-slate-500">Mã đối tác: #EDU-PARTNER-094</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded bg-blue-50 px-3 py-2 text-[10px]">
              <span className="flex items-center gap-1 text-slate-600">
                <BadgeCheck size={14} className="text-teal-700" /> Xác thực định danh doanh nghiệp
              </span>
              <b className="text-teal-700">100% Verified</b>
            </div>
          </article>
          <StatCard
            className="md:col-span-2"
            icon={Laptop}
            label="Thiết bị đóng góp"
            value="120"
            footer="↗ +25 tháng này"
            description="Laptop, PC & Máy tính bảng"
          />
          <StatCard
            className="md:col-span-3"
            icon={Gift}
            teal
            label="Điểm trường thụ hưởng"
            value="3 Điểm trường"
            description="Điện Biên, Hà Giang, Sơn La"
            footer="740 học sinh được tiếp cận tin học"
          />
          <StatCard
            className="md:col-span-3"
            icon={BadgeCheck}
            label="Giá trị tương đương"
            value="450"
            suffix="Triệu VNĐ"
            footer="Bao gồm kiểm thử & nâng cấp"
            progress
          />
        </section>

        <section className="flex flex-col justify-between gap-3 rounded-lg bg-white p-3 shadow-sm md:flex-row md:items-center">
          <label className="flex items-center gap-2 text-[11px] font-semibold tracking-wide text-slate-500 uppercase">
            Đợt quyên góp:
            <span className="relative">
              <select className="appearance-none rounded bg-blue-50 py-2 pr-8 pl-3 text-xs font-medium tracking-normal text-slate-800 normal-case outline-none">
                <option>Đợt 04: 25 Laptop Lenovo ThinkPad T480 (Điện Biên - 10/2024)</option>
                <option>Đợt 03: 40 Màn hình Dell & Case máy tính (Hà Giang - 07/2024)</option>
              </select>
              <ChevronDown className="pointer-events-none absolute top-2 right-2 size-4 text-slate-500" />
            </span>
          </label>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded bg-teal-50 px-2.5 py-1.5 text-[10px] font-semibold text-teal-800">
              <span className="size-1.5 rounded-full bg-teal-600" /> Cập nhật vệ tinh lúc 14:32:05 hôm nay
            </span>
            <button className="rounded bg-blue-50 p-2 text-slate-600">
              <RefreshCw size={15} />
            </button>
          </div>
        </section>

        <section className="grid items-start gap-4 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <article className="rounded-lg bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-blue-50 pb-3">
                <h2 className="font-display flex items-center gap-2 text-base font-semibold">
                  <ClipboardCheck size={18} className="text-blue-600" /> Biên Lai Điện Tử Số{" "}
                  <span className="rounded bg-blue-100 px-2 py-1 text-[10px] text-blue-700">#VN-EDU-2024-9042</span>
                </h2>
              </div>
              <div className="mx-auto mt-4 grid max-w-[280px] place-items-center rounded bg-blue-50 p-4">
                <QrCode size={118} strokeWidth={1.7} />
                <p className="mt-3 text-center text-[10px] text-slate-600">
                  Quét để xem trang báo cáo công khai
                  <br />
                  Tích hợp chữ ký số đã đối chiếu quốc gia
                </p>
              </div>
              <dl className="mt-3 space-y-2 rounded bg-slate-50 p-3 text-[11px]">
                <Info label="Ngày gửi đóng góp:" value="12/10/2024 - 08:30" />
                <Info label="Chi tiết kiện hàng:" value="25 Laptop Lenovo ThinkPad T480" />
                <Info label="Cấu hình xuất kho:" value="Intel Core i5, 16GB RAM, SSD 256GB" />
                <Info label="Trường nhận đăng ký:" value="THCS Mường Nhé (Điện Biên)" blue />
                <Info label="Giám sát kỹ thuật:" value="Hoàng Văn Đức (KTV Trưởng)" />
              </dl>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 rounded bg-blue-100 px-2 py-2 text-[10px] font-semibold text-blue-700">
                  Tải E-Certificate (Tấm Lòng Vàng)
                </button>
                <button className="rounded bg-blue-50 p-2 text-slate-600">
                  <Download size={14} />
                </button>
                <button className="rounded bg-blue-50 p-2 text-slate-600">
                  <Share2 size={14} />
                </button>
              </div>
            </article>
            <article className="rounded-lg bg-white p-4 shadow-sm">
              <h2 className="font-display flex items-center gap-2 text-sm font-semibold">
                <ShieldCheck size={17} className="text-teal-700" /> Cam kết bảo trợ chu kỳ 36 tháng
              </h2>
              <p className="mt-2 text-xs leading-4 text-slate-600">
                EduShare & FPT hỗ trợ bảo dưỡng định kỳ 6 tháng/lần cho toàn bộ 25 máy tại điểm trường Mường Nhé.
              </p>
            </article>
          </div>

          <article className="rounded-lg bg-white p-4 shadow-sm lg:col-span-7">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="font-display flex items-center gap-2 text-lg font-semibold">
                  <Truck size={19} className="text-teal-700" /> Tiến Độ Điều Phối & Minh Bạch 100%
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Truy xuất chuỗi xử lý khép kín từ kho kỹ thuật đến học sinh thụ hưởng.
                </p>
              </div>
              <span className="rounded bg-blue-100 px-2 py-1 text-[10px] font-semibold text-blue-700">
                Trạng thái: Đang vận chuyển
              </span>
            </div>
            <TimelineStep
              icon={Box}
              title="Bước 1: Tiếp nhận tại Kho Hà Nội"
              state="Đã hoàn tất"
              date="12/10/2024 - 09:15"
            >
              Tiếp nhận đủ 25 kiện từ nhà tài trợ FPT. Thủ kho Nguyễn Hải Đăng đã quét mã vạch và niêm phong lô thiết bị
              vào pallet số #PL-HN-44.
              <p className="mt-1 text-[10px] text-teal-700">✓ Biên bản bàn giao kho: #KHO-REC-9042.pdf (Đã ký)</p>
            </TimelineStep>
            <TimelineStep
              icon={Wrench}
              title="Bước 2: Kiểm định kỹ thuật & Vệ sinh"
              state="Đã hoàn tất"
              date="14/10/2024 - 16:40"
            >
              100% máy đạt chuẩn hiệu năng giảng dạy. Đã thay mới 25 ổ SSD Kingston 256GB. Kỹ thuật viên trưởng: Hoàng
              Văn Đức.
            </TimelineStep>
            <TimelineStep
              icon={PackageCheck}
              title="Bước 3: Đóng gói & Gán tem bảo trợ"
              state="Sẵn sàng xuất kho"
              date="16/10/2024 - 11:20"
            >
              Dán nhãn số định danh EduShare RFID, cải sẵn hệ điều hành Linux Mint Giáo Dục cùng bộ phần mềm Scratch,
              GCompris và tài liệu học offline.
              <p className="mt-1 text-[10px] text-teal-700">✓ 25/25 máy đã kiểm tra chuẩn đóng gói chống sốc 3 lớp</p>
            </TimelineStep>
            <TimelineStep
              icon={Truck}
              title="Bước 4: Điều phối vận chuyển bởi Đội TNV Sao Xanh"
              state="Đang diễn ra"
              date="18/10/2024 - Hiện tại"
              active
            >
              Chuyến xe đã rời trạm điều phối DC-DIENBIEN-03, đang di chuyển qua đèo Pha Đin. Dự kiến đến thị trấn Mường
              Nhé vào chiều mai.
              <div className="mt-3 rounded bg-white p-2">
                <div className="flex justify-between text-[10px]">
                  <span>
                    <MapPin size={11} className="inline text-blue-600" /> Vị trí hiện tại: Km 362 Quốc lộ 6 (Điện Biên)
                  </span>
                  <b className="text-teal-700">Tốc độ: 48 km/h</b>
                </div>
                <div className="my-1 h-1.5 overflow-hidden rounded bg-blue-100">
                  <span className="block h-full w-[72%] rounded bg-blue-600" />
                </div>
                <div className="flex justify-between text-[9px] text-slate-500">
                  <span>Hà Nội (0 km)</span>
                  <b className="text-blue-700">Đã hoàn thành 72% lộ trình</b>
                  <span>Mường Nhé (530 km)</span>
                </div>
              </div>
            </TimelineStep>
            <TimelineStep
              icon={ClipboardCheck}
              title="Bước 5: Bàn giao trực tiếp tại Trường THCS Mường Nhé"
              state="Dự kiến"
              date="20/10/2024 - 09:00 Sáng"
              last
            >
              Lễ khánh thành máy tính “EduShare - Ươm Mầm Tri Thức”. Thầy Hiệu trưởng Lò Văn Chừ và đại diện phụ huynh
              sẽ ký xác nhận biên bản số hóa tại hiện trường.
              <div className="mt-3 grid grid-cols-2 gap-2">
                {proofImages.map((image, index) => (
                  <figure key={image} className="relative h-24 overflow-hidden rounded">
                    <img src={image} className="size-full object-cover" />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-slate-950/60 px-2 py-1 text-[9px] text-white">
                      {index ? "Điểm trường THCS Mường Nhé" : "Phòng tin học chuẩn bị đón nhận 25 máy"}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </TimelineStep>
          </article>
        </section>

        <section className="overflow-hidden rounded-lg bg-white shadow-sm">
          <div className="flex flex-col justify-between gap-3 border-b border-blue-50 p-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-base font-semibold">
                Danh Mục 25 Thiết Bị Trong Kiện Hàng #VN-EDU-2024-9042
              </h2>
              <p className="text-[10px] text-slate-500">
                Mỗi thiết bị được theo dõi độc lập bằng số Serial Number và mã định danh nội bộ
              </p>
            </div>
            <div className="flex gap-2">
              <label className="flex items-center gap-1 rounded bg-blue-50 px-2 text-xs text-slate-500">
                <Search size={14} />
                <input className="w-32 bg-transparent py-2 outline-none" placeholder="Tra nhanh Serial hoặc Tag..." />
              </label>
              <button className="inline-flex items-center gap-1 rounded bg-blue-50 px-3 py-2 text-[10px] font-semibold text-slate-700">
                <Download size={13} /> Xuất Excel (CSV)
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left">
              <thead className="bg-blue-50 text-[9px] tracking-wide text-slate-500 uppercase">
                <tr>
                  {[
                    "Mã Tag EduShare",
                    "Dòng máy & Số Serial",
                    "Tình trạng kiểm thử",
                    "Linh kiện nâng cấp",
                    "Phòng học chỉ định",
                    "Chi tiết",
                  ].map((head) => (
                    <th key={head} className="px-4 py-3 font-semibold">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[11px]">
                {devices.map((device) => (
                  <tr key={device[0]} className="border-t border-blue-50">
                    <td className="px-4 py-3 font-semibold text-blue-700">{device[0]}</td>
                    <td className="px-4 py-3">
                      <b>{device[1]}</b>
                      <br />
                      <span className="text-[9px] text-slate-500">S/N: {device[2]}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-teal-100 px-2 py-1 text-[10px] font-semibold text-teal-800">
                        ◉ {device[3]}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{device[4]}</td>
                    <td className="px-4 py-3 text-slate-600">{device[5]}</td>
                    <td className="px-4 py-3">
                      <button className="font-semibold text-blue-700">Xem Log Kỹ Thuật</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <footer className="flex items-center justify-between p-3 text-[10px] text-slate-500">
            <span>Hiển thị 4 trong tổng số 25 thiết bị thuộc đợt #VN-EDU-2024-9042</span>
            <span>
              <button className="rounded bg-blue-50 px-2 py-1">Trước</button>{" "}
              <b className="px-2 text-slate-800">Trang 1 / 7</b>
              <button className="rounded bg-blue-50 px-2 py-1">Tiếp</button>
            </span>
          </footer>
        </section>
      </main>

      {showRegister && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/35 p-4">
          <form onSubmit={submitRegistration} className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-display text-xl font-semibold">Đăng ký đợt đóng góp mới</h2>
                <p className="mt-1 text-sm text-slate-500">Tạo hồ sơ để theo dõi minh bạch toàn bộ hành trình.</p>
              </div>
              <button
                type="button"
                onClick={() => setShowRegister(false)}
                className="rounded p-1 text-slate-500 hover:bg-slate-100"
              >
                <X />
              </button>
            </div>
            <div className="mt-5 grid gap-4">
              <Field label="Tên tổ chức / nhà hảo tâm" placeholder="Ví dụ: Công ty CP Công nghệ FPT" />
              <Field label="Loại thiết bị và số lượng dự kiến" placeholder="Ví dụ: 25 Laptop ThinkPad T480" />
              <Field label="Điểm trường hoặc khu vực mong muốn" placeholder="Ví dụ: Mường Nhé, Điện Biên" />
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowRegister(false)}
                className="rounded bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                Hủy
              </button>
              <button className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Gửi đăng ký</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

function StatCard({ className, icon: Icon, label, value, suffix, footer, description, teal, progress }) {
  return (
    <article className={`flex min-h-36 flex-col justify-between rounded-lg bg-white p-4 shadow-sm ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold tracking-wide text-slate-500 uppercase">{label}</span>
        <Icon size={18} className={teal ? "text-teal-700" : "text-blue-600"} />
      </div>
      <div>
        <div className="font-display text-[28px] leading-none font-semibold">
          {value} {suffix && <span className="text-sm font-medium text-slate-600">{suffix}</span>}
        </div>
        {description && <p className="mt-2 text-[10px] text-slate-500">{description}</p>}
      </div>
      <div>
        {footer && <p className={`text-[10px] font-semibold ${teal ? "text-blue-700" : "text-teal-700"}`}>{footer}</p>}
        {progress && (
          <div className="mt-3 h-1.5 rounded-full bg-blue-100">
            <span className="block h-full w-[85%] rounded-full bg-blue-600" />
          </div>
        )}
      </div>
    </article>
  );
}

function Info({ label, value, blue }) {
  return (
    <div className="grid grid-cols-[92px_1fr] gap-2">
      <dt className="text-slate-500">{label}</dt>
      <dd className={blue ? "font-medium text-blue-700" : "font-medium text-slate-700"}>{value}</dd>
    </div>
  );
}

function Field({ label, placeholder }) {
  return (
    <label className="grid gap-1.5 text-sm font-medium text-slate-700">
      {label}
      <input
        required
        className="rounded border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        placeholder={placeholder}
      />
    </label>
  );
}
