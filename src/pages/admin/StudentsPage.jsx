import { useState } from "react";
import {
  Bike, ChevronLeft, ChevronRight, Download, ExternalLink, FileText,
  GraduationCap, Laptop, MapPin, Monitor, RotateCcw, Search, ShieldCheck,
  Users,
} from "lucide-react";
import { Breadcrumb } from "../../components/system-ui";

const students = [
  ["HS-8273", "Nguyễn V*** A***", "Lớp 7A1", "PTDTBT THCS Trà Dơn", "Nam Trà My, Quảng Nam", ["Laptop", "Sách giáo khoa"], "24/10/2024"],
  ["HS-8274", "Trần T*** B***", "Lớp 8B", "PTDTBT THCS Trà Dơn", "Nam Trà My, Quảng Nam", ["Laptop"], "24/10/2024"],
  ["HS-8275", "Lò T*** M***", "Lớp 5A", "Tiểu học Mường Lát", "Mường Lát, Thanh Hóa", ["Xe đạp", "Sách giáo khoa"], "22/10/2024"],
  ["HS-8276", "Vàng A*** P***", "Lớp 9C", "THCS Vượt Đèo Hà Giang", "Đồng Văn, Hà Giang", ["Laptop", "Ba lô & Đồ dùng"], "20/10/2024"],
  ["HS-8277", "Giàng T*** S***", "Lớp 6A2", "THCS Vượt Đèo Hà Giang", "Mèo Vạc, Hà Giang", ["Xe đạp"], "19/10/2024"],
  ["HS-8278", "Phạm Đ*** K***", "Lớp 4B", "Tiểu học Pa Tần", "Sìn Hồ, Lai Châu", ["Sách giáo khoa", "Bàn học xếp"], "18/10/2024"],
  ["HS-8279", "Hoàng M*** T***", "Lớp 8A", "PTDTBT THCS Xín Mần", "Xín Mần, Hà Giang", ["Laptop", "Sách giáo khoa"], "15/10/2024"],
];

function Metric({ icon: Icon, value, title, subtitle, teal }) {
  return (
    <article className="min-h-48 rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <span className={`grid size-10 place-items-center rounded ${teal ? "bg-teal-100 text-teal-700" : "bg-blue-100 text-blue-600"}`}><Icon size={22}/></span>
        {title === "Tổng học sinh nhận hỗ trợ" && <b className="rounded-full bg-teal-100 px-2 py-1 text-[10px] text-teal-700">↗ +12.4%</b>}
        {title === "Danh tính được bảo vệ" && <b className="rounded-full bg-teal-50 px-2 py-1 text-[10px] text-teal-700">Chuẩn ISO-27701</b>}
        {title === "Hạng mục thiết bị / quà tặng" && <b className="rounded-full bg-blue-100 px-2 py-1 text-[10px] text-blue-700">Q3/2024</b>}
        {title === "Điểm trường tại 18 tỉnh thành" && <b className="rounded-full bg-blue-100 px-2 py-1 text-[10px] text-blue-700">Toàn quốc</b>}
      </div>
      <h2 className={`mt-6 font-display text-4xl font-semibold ${teal ? "text-teal-700" : ""}`}>{value}</h2>
      <h3 className="mt-2 font-display text-base font-semibold">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-slate-500">{subtitle}</p>
    </article>
  );
}

export default function StudentsPage() {
  const [selected, setSelected] = useState(null);
  return (
    <main>
      <Breadcrumb current="Học sinh tiếp nhận"/>
      <div className="w-full p-4 md:p-6">
        <section className="mb-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <span className="inline-flex rounded-xl bg-blue-100 px-3 py-1 text-[10px] font-semibold tracking-wide text-blue-700">♢ CỔNG TRƯỜNG HỌC & ĐIỂM BẢN · BẢO MẬT & MINH BẠCH DỮ LIỆU TRẺ EM (COPPA/GDPR-K)</span>
            <h1 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">Danh sách Học sinh Tiếp nhận Hỗ trợ</h1>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">Hệ thống quản lý và công khai danh sách học sinh vùng khó khăn đã nhận thiết bị & học bổng. Dữ liệu được mã hóa và ẩn danh hóa danh tính nhằm bảo vệ quyền riêng tư của trẻ em theo quy định pháp luật.</p>
          </div>
          <div className="flex flex-wrap gap-2"><button className="flex items-center gap-2 rounded bg-white px-4 py-2 text-xs font-medium shadow-sm"><Download size={16}/>Xuất báo cáo CSV</button><button className="rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white">↻ Đồng bộ dữ liệu KYC</button></div>
        </section>

        <section className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <Metric icon={Users} value="3,842" title="Tổng học sinh nhận hỗ trợ" subtitle="Đã qua thẩm định cấp trường & phòng GD"/>
          <Metric icon={ShieldCheck} value="100%" title="Danh tính được bảo vệ" subtitle="Che tên tự động & bảo mật hình ảnh" teal/>
          <Metric icon={Monitor} value="4,120" title="Hạng mục thiết bị / quà tặng" subtitle="Laptop, PC, Sách GK, Xe đạp"/>
          <Metric icon={GraduationCap} value="148" title="Điểm trường tại 18 tỉnh thành" subtitle="Khu vực biên giới, hải đảo & vùng cao"/>
        </section>

        <section className="mb-6 rounded-lg bg-white p-4 shadow-sm">
          <div className="flex flex-wrap gap-2">
            <label className="flex min-w-72 flex-1 items-center gap-2 rounded bg-blue-50 px-3 py-2 text-slate-500"><Search size={16}/><input className="w-full bg-transparent text-xs outline-none" placeholder="Tìm kiếm theo Mã số HS (vd: HS-8273), tên trường, lớp..."/></label>
            {["Tất cả Tỉnh/Thành", "Tất cả Trường học", "Tất cả Đợt chiến dịch"].map(item=><button key={item} className="rounded bg-blue-50 px-4 py-2 text-xs">{item}⌄</button>)}
            <button className="flex items-center gap-2 rounded bg-blue-50 px-4 py-2 text-xs"><RotateCcw size={14}/>Đặt lại</button>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2"><button className="rounded bg-blue-50 px-4 py-2 text-xs">Tất cả hạng mục⌄</button></div>
          <div className="mt-3 flex flex-wrap items-center gap-2 bg-blue-50 p-3 text-xs text-slate-600"><ShieldCheck size={18} className="text-blue-600"/><b className="text-blue-700">Quy chuẩn ẩn danh:</b><span>Tên học sinh được mã hóa định dạng <u className="font-semibold text-blue-700">Họ T*** Đ***</u> nhằm đảm bảo tính bảo mật trẻ em. Mã định danh gắn liền với hồ sơ gốc đã đóng dấu phê duyệt.</span><button className="ml-auto flex items-center gap-1 font-medium text-blue-700">Chính sách bảo vệ trẻ em <ExternalLink size={13}/></button></div>
        </section>

        <div className="mb-3 flex justify-end"><button onClick={() => setSelected(students[0])} className="rounded bg-blue-600 px-3 py-2 text-xs font-semibold text-white">Xem nhanh hồ sơ đầu tiên</button></div>
        <section className="overflow-hidden rounded-lg bg-white shadow-sm">
          <div className="overflow-auto">
            <table className="w-full min-w-300 text-left text-xs">
              <thead className="bg-blue-50 text-[10px] font-semibold tracking-wide text-slate-500"><tr>{["MÃ SỐ HS", "HỌ VÀ TÊN (ẨN DANH)", "LỚP & KHỐI", "TRƯỜNG HỌC", "VỊ TRÍ ĐỊA LÝ", "HẠNG MỤC NHẬN HỖ TRỢ", "NGÀY NHẬN", "TRẠNG THÁI", "THAO TÁC"].map(head=><th key={head} className="p-4">{head}</th>)}</tr></thead>
              <tbody>{students.map(student=><StudentRow key={student[0]} student={student}/>)}</tbody>
            </table>
          </div>
          <footer className="flex flex-wrap items-center justify-between gap-4 bg-blue-50 p-4 text-xs text-slate-500"><span>Hiển thị <b className="text-slate-800">1 - 7</b> trong tổng số <b className="text-slate-800">3,842</b> học sinh tiếp nhận</span><div className="flex items-center gap-3"><span>Hiển thị: <b className="text-slate-800">10</b> kết quả / trang</span><button><ChevronLeft size={16}/></button><button className="grid size-8 place-items-center rounded bg-blue-600 text-white">1</button><button>2</button><button>3</button><span>...</span><button>549</button><button><ChevronRight size={16}/></button></div></footer>
        </section>

        <section className="mt-6 rounded-lg bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="font-display text-base font-semibold">Quy trình Xác thực & Quản trị Dữ liệu Bảo trợ</h2><p className="mt-1 text-xs text-slate-500">Chuỗi xác minh minh bạch bảo đảm thiết bị đến đúng tay học sinh đủ điều kiện</p></div><b className="rounded bg-blue-50 px-3 py-1 text-[10px] text-blue-700">Mã Hash: #EDUSH-KYC-2024-X9</b></div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <GovernanceStep number="1" title="Xác thực Hồ sơ Cấp Trường" text="Ban giám hiệu đối soát hoàn cảnh gia đình, thành tích học tập và ký số điện tử trên hệ thống quản lý cơ sở."/>
            <GovernanceStep number="2" title="Thực địa Tình nguyện viên" text="Điều phối viên EduShare đến tận điểm bản thẩm định trang thiết bị sẵn có và nhu cầu sử dụng thực tế."/>
            <GovernanceStep number="3" title="Biên bản & QR Tra cứu" text="Biên bản bàn giao số lưu trữ với chữ ký giám hộ và mã QR công khai, mã hóa ảnh chân dung." teal/>
          </div>
        </section>
      </div>
      {selected && <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/35 p-4"><article className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl"><div className="flex justify-between"><h2 className="font-display text-xl font-semibold">Hồ sơ học sinh tiếp nhận</h2><button onClick={() => setSelected(null)}>×</button></div><div className="mt-4 space-y-3 text-sm"><p><b>Mã hồ sơ:</b> {selected[0]}</p><p><b>Học sinh:</b> {selected[1]}</p><p><b>Trường học:</b> {selected[3]}</p><p><b>Hạng mục hỗ trợ:</b> {selected[5].join(", ")}</p></div></article></div>}
    </main>
  );
}

function StudentRow({ student: [id, name, grade, school, location, items, date] }) {
  return <tr className="border-b border-slate-100 last:border-0"><td className="p-4"><b className="rounded bg-blue-50 px-2 py-1 font-semibold text-blue-700">{id}</b></td><td className="p-4"><div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-full bg-blue-50 text-slate-500"><Users size={14}/></span><div><b>{name}</b><small className="block text-[10px] text-teal-700">Đã ẩn danh</small></div></div></td><td className="p-4">{grade}</td><td className="p-4 font-medium text-slate-700">{school}</td><td className="p-4 text-slate-500"><MapPin className="mr-1 inline text-slate-400" size={13}/>{location}</td><td className="p-4">{items.map(item=><span key={item} className="mr-1 inline-flex rounded-full bg-blue-100 px-2 py-1 text-[10px] text-blue-700">{item === "Xe đạp" ? <Bike className="mr-1" size={12}/> : item === "Laptop" ? <Laptop className="mr-1" size={12}/> : null}{item}</span>)}</td><td className="p-4 text-slate-500">{date}</td><td className="p-4"><span className="inline-flex items-center gap-1 rounded-xl bg-teal-100 px-2 py-1 text-[10px] font-semibold text-teal-700"><ShieldCheck size={12}/>Đã xác thực</span></td><td className="p-4"><button className="flex items-center gap-1 font-medium text-blue-700"><FileText size={15}/>Biên bản</button></td></tr>;
}

function GovernanceStep({ number, title, text, teal }) {
  return <article className="rounded bg-blue-50 p-4"><div className="flex items-center gap-2"><i className={`grid size-6 place-items-center rounded-full text-[10px] not-italic text-white ${teal ? "bg-teal-700" : "bg-blue-600"}`}>{number}</i><b className="text-xs">{title}</b></div><p className="mt-3 text-[11px] leading-5 text-slate-500">{text}</p></article>;
}
