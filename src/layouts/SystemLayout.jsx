import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Activity, Archive, Bell, Box, CheckCircle2, ClipboardCheck, FileText, GraduationCap,
  HeartHandshake, LayoutDashboard, Menu, Search, Settings, ShieldCheck,
  Truck, Users, Wrench, X, Zap,
} from "lucide-react";

const groups = [
  ["TRUNG TÂM ĐIỀU HÀNH", [["Tổng quan", "/", LayoutDashboard], ["Chiến dịch", "/campaigns", Zap], ["Phân quyền & Kiểm toán", "/audit", ShieldCheck]]],
  ["KHO & KỸ THUẬT", [["Kiểm định", "/inspection", Settings], ["Sửa chữa", "/repairs", Wrench], ["Tồn kho thiết bị", "/inventory", Archive]]],
  ["CỔNG TRƯỜNG HỌC", [["Yêu cầu tài trợ", "/school-requests", GraduationCap], ["Học sinh tiếp nhận", "/students", Users], ["Biên bản bàn giao", "/proofs", ClipboardCheck]]],
  ["NHÀ HẢO TÂM", [["Đợt quyên góp", "/donations", HeartHandshake], ["Tra cứu hành trình", "/tracking", Activity], ["QR & Biên lai số", "/receipts", FileText]]],
  ["TÌNH NGUYỆN VIÊN", [["Đội ngũ tiếp nhận", "/volunteers", Users], ["Tuyến đường & Phân công", "/dispatch", Truck]]],
];

const initialRequests = [
  { id: 1, school: "THCS Tân Lĩnh (Lục Yên, Yên Bái)", need: "25 Laptop bổ sung khẩn", priority: "ƯU TIÊN 1" },
  { id: 2, school: "Tiểu học Mường Xo (Lai Châu)", need: "15 Bộ máy tính bàn phòng lab", priority: "ƯU TIÊN 1" },
  { id: 3, school: "THCS Tạ Khoa (Bắc Yên, Sơn La)", need: "20 Tablet cho điểm lẻ", priority: "ƯU TIÊN 2" },
];

export default function SystemLayout() {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [requests, setRequests] = useState(initialRequests);
  const dropdownRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!feedback) return undefined;
    const timeout = window.setTimeout(() => setFeedback(""), 2600);
    return () => window.clearTimeout(timeout);
  }, [feedback]);

  // Tự động đóng dropdown thông báo khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }
    if (showNotifications) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showNotifications]);

  function handleButtonFeedback(event) {
    const button = event.target.closest("button");
    if (!button || button.disabled || button.dataset.noFeedback) return;
    const label = button.innerText.replace(/\s+/g, " ").trim();
    if (label) setFeedback(`${label.slice(0, 58)}: đã ghi nhận thao tác.`);
  }

  const handleApprove = (id, schoolName) => {
    setRequests((prev) => prev.filter((req) => req.id !== id));
    setFeedback(`Đã phê duyệt khẩn cấp cho ${schoolName}`);
  };

  return (
    <div onClickCapture={handleButtonFeedback} className="min-h-screen bg-[#f8f9ff] text-[#0b1c30]">
      {/* SIDEBAR NAVIGATION */}
      <aside className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-slate-200 bg-[#eff4ff] transition-transform md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-16 shrink-0 items-center border-b border-slate-100 bg-white px-4">
          <div className="flex items-center gap-2 text-blue-700">
            <span className="grid size-6 place-items-center rounded bg-blue-600 text-white"><Box size={15} /></span>
            <div><b className="font-display text-sm">EduShare VN</b><small className="block text-[9px] font-bold tracking-widest text-slate-500">VIETNAM CORE</small></div>
          </div>
          <button className="ml-auto md:hidden" onClick={() => setOpen(false)}><X size={20} /></button>
        </div>
        <div className="mx-3 mt-3 w-fit rounded-full bg-teal-50 px-2 py-1 text-[10px] font-semibold text-teal-700">● Trực tuyến · 63 Tỉnh Thành</div>
        <nav className="mt-2 flex-1 overflow-y-auto px-2 pb-4">
          {groups.map(([title, items]) => (
            <section key={title}>
              <p className="px-2 pb-1 pt-3 text-[9px] font-semibold tracking-wider text-slate-500">{title}</p>
              {items.map(([label, to, Icon]) => (
                <Link key={to} to={to} onClick={() => setOpen(false)} className={`mb-0.5 flex items-center gap-3 rounded px-2 py-2 text-xs ${pathname === to ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:bg-blue-100"}`}>
                  <Icon size={16} />{label}
                </Link>
              ))}
            </section>
          ))}
        </nav>
        <div className="shrink-0 bg-blue-100 px-4 py-4 text-[10px] text-slate-500">Phiên bản Quốc gia <b className="float-right text-teal-700">v2.8.4</b></div>
      </aside>

      {/* HEADER & MAIN CONTENT */}
      <div className="md:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-slate-100 bg-white px-4 md:px-6">
          <button className="md:hidden" onClick={() => setOpen(true)}><Menu /></button>
          <label className="flex w-full max-w-md items-center gap-2 rounded bg-blue-50 px-3 py-2 text-slate-500">
            <Search size={18} />
            <input className="w-full bg-transparent text-xs outline-none" placeholder="Tìm kiếm mã quyên góp, thiết bị, điểm trường..." />
          </label>

          <div className="ml-auto flex items-center gap-3">
            <span className="hidden rounded bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-700 sm:block">
              <ShieldCheck className="mr-1 inline" size={14} />Điều phối Quốc gia
            </span>

            {/* CHUÔNG THÔNG BÁO KHẨN CẤP */}
            <div className="relative" ref={dropdownRef}>
              <button
                data-no-feedback
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative grid size-8 place-items-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition focus:outline-none"
                aria-label="Thông báo khẩn cấp"
              >
                <Bell size={18} />
                {requests.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-red-600 text-[9px] font-bold text-white ring-2 ring-white">
                    {requests.length}
                  </span>
                )}
              </button>

              {/* DROPDOWN MENU */}
              {showNotifications && (
                <div className="absolute right-0 top-10 z-50 w-80 sm:w-96 rounded-xl border border-slate-200 bg-white p-4 shadow-xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <div className="flex items-center gap-2">
                      <Bell size={16} className="text-red-600" />
                      <h3 className="font-semibold text-slate-800 text-xs">Cần Phê Duyệt Khẩn Cấp</h3>
                      <span className="rounded-full bg-red-100 px-2 py-0.5 text-[9px] font-bold text-red-700">
                        {requests.length} YÊU CẦU
                      </span>
                    </div>
                    <button
                      data-no-feedback
                      onClick={() => setShowNotifications(false)}
                      className="rounded p-1 text-slate-400 hover:bg-slate-100"
                    >
                      <X size={14} />
                    </button>
                  </div>

                  <p className="my-2.5 text-[11px] leading-4 text-slate-500">
                    Các điểm trường chịu ảnh hưởng thiên tai lũ quét cần trang bị máy tính gấp phục vụ học sinh.
                  </p>

                  {requests.length === 0 ? (
                    <div className="py-6 text-center text-xs text-slate-400">
                      <CheckCircle2 className="mx-auto mb-1 text-emerald-500" size={20} />
                      Đã xử lý xong toàn bộ yêu cầu khẩn cấp!
                    </div>
                  ) : (
                    <div className="max-h-72 space-y-2 overflow-y-auto pr-1">
                      {requests.map((req) => (
                        <div key={req.id} className="rounded-lg border border-slate-100 bg-blue-50/60 p-2.5 text-xs">
                          <div className="flex items-start justify-between gap-2">
                            <b className="font-semibold text-slate-800 text-[11px]">{req.school}</b>
                            <strong className="shrink-0 rounded bg-red-100 px-1.5 py-0.5 text-[8px] font-bold text-red-600">
                              {req.priority}
                            </strong>
                          </div>
                          <p className="mt-1 text-[10px] text-slate-600">Yêu cầu: {req.need}</p>
                          <div className="mt-2 flex items-center justify-between border-t border-slate-200/50 pt-1.5">
                            <span className="text-[10px] font-medium text-slate-500 cursor-pointer hover:underline">
                              ◉ Xem hồ sơ
                            </span>
                            <button
                              onClick={() => handleApprove(req.id, req.school)}
                              className="rounded bg-blue-600 px-2 py-0.5 text-[10px] font-medium text-white shadow-sm hover:bg-blue-700 transition"
                            >
                              Duyệt nhanh
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <img
              alt="Nguyễn Văn An"
              className="size-8 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg9yqHMBlmEcQ5x0aoReL2tNODanMGfsazXFF0AB8BpDWoYm2KqPQfIpHsDEq2ixkTx_66D-9Bs5a2H_8hTUCtzQbS3wGjCXhvMfptRP7kQESVv3yc95GSm09AF9yIG44g3TEI5UMVPWF_VZixbzo00ShHblq9X47c6Q2ZwCWBqXv2zKAnXRWUzMib6vwNpVQevUFdEXuO1Btv_a73pVr99bi3MidA4vqv0txmeaE4DwQxWzlkGskk"
            />
          </div>
        </header>

        <Outlet />
      </div>

      {feedback && (
        <div className="fixed bottom-5 right-5 z-[100] flex max-w-sm items-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm text-white shadow-xl">
          <CheckCircle2 size={17} className="shrink-0 text-teal-300" />
          {feedback}
          <button data-no-feedback onClick={() => setFeedback("")} className="ml-1 text-lg leading-none text-slate-300 hover:text-white">×</button>
        </div>
      )}
    </div>
  );
}