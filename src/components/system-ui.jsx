import { ChevronRight, Search } from "lucide-react";

export function Breadcrumb({ current }) {
  return (
    <div className="flex h-9 items-center gap-1 bg-blue-50 px-4 text-xs text-slate-600">
      <span>EduShare VN</span>
      <ChevronRight size={14} />
      <span>Cổng Trường Học</span>
      <ChevronRight size={14} />
      <b className="text-blue-700">{current}</b>
    </div>
  );
}

export function MetricCard({ icon: Icon, label, value, children, teal }) {
  return (
    <article className="rounded-lg bg-white p-5 shadow-sm">
      <div className="flex justify-between">
        <p className="max-w-36 text-[10px] font-semibold tracking-wide text-slate-500">
          {label}
        </p>
        <span
          className={`grid size-9 place-items-center rounded ${teal ? "bg-teal-100 text-teal-700" : "bg-blue-100 text-blue-600"}`}
        >
          <Icon size={20} />
        </span>
      </div>
      <h2 className="mt-5 font-display text-3xl font-semibold">{value}</h2>
      <div className="mt-3 text-xs text-slate-500">{children}</div>
    </article>
  );
}

export function Status({ children }) {
  const color = children.includes("vận")
    ? "bg-blue-100 text-blue-700"
    : children.includes("Chờ")
      ? "bg-slate-100 text-slate-600"
      : "bg-teal-100 text-teal-700";
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-[10px] font-semibold ${color}`}
    >
      {children}
    </span>
  );
}

export function Filters({ proof }) {
  return (
    <div className="mb-5 flex flex-wrap gap-2 rounded-lg bg-white p-4 shadow-sm">
      <label className="flex min-w-60 flex-1 items-center gap-2 rounded bg-blue-50 px-3 py-2 text-slate-500">
        <Search size={16} />
        <input
          className="w-full bg-transparent text-xs outline-none"
          placeholder={
            proof
              ? "Tìm kiếm mã PoD, tên trường..."
              : "Tìm kiếm Mã số HS, tên trường..."
          }
        />
      </label>
      {[
        "Tất cả Tỉnh/Thành",
        "Tất cả Trường học",
        proof ? "Trạng thái: Đã ký điện tử" : "Tất cả Đợt chiến dịch",
      ].map((item) => (
        <button
          key={item}
          className="rounded bg-blue-50 px-3 py-2 text-xs text-slate-700"
        >
          {item}⌄
        </button>
      ))}
      {proof && <div className="ml-auto flex rounded bg-blue-50 p-1"><button className="rounded bg-white px-3 py-1 text-[10px] font-semibold text-blue-700 shadow-sm">Thẻ ảnh PoD</button><button className="px-3 py-1 text-[10px] text-slate-500">Bảng đối soát</button></div>}
    </div>
  );
}
