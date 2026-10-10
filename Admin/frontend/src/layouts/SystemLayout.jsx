import { useCallback, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import api, { apiError, clearSession, currentUser } from "../lib/api";
import {
  Activity, Archive, Bell, Box, CheckCircle2, GraduationCap,
  HeartHandshake, LayoutDashboard, Menu, Search, ShieldAlert, ShieldCheck,
  Truck, X, Zap,
} from "lucide-react";
import AccountMenu from "./AccountMenu";
import { usePortalRefresh } from "../pages/portals/kit";

const groups = [
  ["1. CHIẾN DỊCH & TÀI KHOẢN", [["Tổng quan", "/", LayoutDashboard], ["Tạo chiến dịch & hạng mục", "/campaigns", Zap], ["Tài khoản & vai trò", "/accounts", HeartHandshake]]],
  ["2. DUYỆT YÊU CẦU CỦA TRƯỜNG", [["Duyệt / từ chối yêu cầu", "/school-requests", GraduationCap]]],
  ["3. GHÉP TỒN KHO & PHÂN BỔ", [["Ghép tồn kho & xác nhận phương án", "/allocations", Archive]]],
  ["4. VẬN ĐƠN & SỰ CỐ (CHỈ XEM)", [["Vận đơn", "/waybills", Truck], ["Hồ sơ sự cố", "/incidents", ShieldAlert], ["Tra cứu hành trình", "/tracking", Activity]]],
  ["KIỂM TOÁN", [["Nhật ký kiểm toán", "/audit", ShieldCheck]]],
];

const priorityLabel = { CRITICAL: "ƯU TIÊN 1", HIGH: "ƯU TIÊN 2", MEDIUM: "ƯU TIÊN 3", LOW: "ƯU TIÊN 4" };

export default function SystemLayout() {
  const navigate = useNavigate();
  const user = currentUser();
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [query, setQuery] = useState("");
  const [requests, setRequests] = useState([]);
  const [viewing, setViewing] = useState(null);
  const [, setProfileVersion] = useState(0);
  const dropdownRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!feedback) return undefined;
    const timeout = window.setTimeout(() => setFeedback(""), 2600);
    return () => window.clearTimeout(timeout);
  }, [feedback]);

  const loadUrgent = useCallback(() => {
    api.get("/requisitions/urgent").then((response) => {
      setRequests((response.data.data ?? []).map((item) => ({
        id: item.id,
        school: item.school?.profile?.organizationName || item.school?.fullName || "Trường học",
        need: item.title,
        priority: priorityLabel[item.urgencyLevel] || item.urgencyLevel,
      })));
    }).catch(() => setRequests([]));
  }, []);

  useEffect(() => {
    loadUrgent();
  }, [loadUrgent]);
  usePortalRefresh(loadUrgent);

  // Đồng bộ dữ liệu giữa các cổng: tự làm mới mỗi 30 giây và ngay khi quay lại tab.
  useEffect(() => {
    const ping = () => {
      if (document.visibilityState === "visible") window.dispatchEvent(new CustomEvent("portal:refresh"));
    };
    const timer = window.setInterval(ping, 30000);
    document.addEventListener("visibilitychange", ping);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", ping);
    };
  }, []);

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

  async function viewRequest(id) {
    try {
      const response = await api.get(`/requisitions/${id}`);
      setViewing(response.data);
    } catch (error) {
      setFeedback(apiError(error, "Không mở được đề xuất."));
    }
  }

  const handleApprove = async (id, schoolName) => {
    try {
      await api.patch(`/requisitions/${id}/approve`);
      setRequests((prev) => prev.filter((req) => req.id !== id));
      setFeedback(`Đã phê duyệt khẩn cấp cho ${schoolName}`);
    } catch (error) {
      const message = error.response?.data?.message;
      setFeedback(typeof message === "string" ? message : "Không phê duyệt được yêu cầu");
    }
  };

  function search(event) {
    event.preventDefault();
    const term = query.trim();
    if (!term) return;
    navigate(`/tracking?q=${encodeURIComponent(term)}`);
  }

  async function logout() {
    try {
      await api.post("/auth/logout");
    } catch {
      /* Phiên local vẫn được xóa khi máy chủ không phản hồi. */
    }
    clearSession();
    navigate("/login", { replace: true });
  }

  async function handleReject(id, schoolName) {
    const reason = window.prompt("Lý do từ chối (ít nhất 5 ký tự)");
    if (!reason || reason.trim().length < 5) {
      setFeedback("Cần lý do từ chối trước khi gửi.");
      return;
    }
    try {
      await api.patch(`/requisitions/${id}/reject`, { reason: reason.trim() });
      setRequests((prev) => prev.filter((req) => req.id !== id));
      setFeedback(`Đã từ chối đề xuất của ${schoolName}`);
    } catch (error) {
      setFeedback(apiError(error, "Không từ chối được yêu cầu"));
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30]">
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
          <form onSubmit={search} className="flex w-full max-w-md items-center gap-2 rounded bg-blue-50 px-3 py-2 text-slate-500">
            <Search size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent text-xs outline-none" placeholder="Tìm mã QR, vận đơn, phiếu trao tặng..." />
          </form>

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
                            <button type="button" onClick={() => viewRequest(req.id)} className="text-[10px] font-medium text-blue-700 hover:underline">
                              ◉ Xem đề xuất
                            </button>
                            <span className="flex gap-1">
                              <button type="button" onClick={() => handleReject(req.id, req.school)} className="rounded bg-slate-200 px-2 py-0.5 text-[10px] font-medium text-slate-700">Từ chối</button>
                              <button
                                onClick={() => handleApprove(req.id, req.school)}
                                className="rounded bg-blue-600 px-2 py-0.5 text-[10px] font-medium text-white shadow-sm hover:bg-blue-700 transition"
                              >
                                Duyệt nhanh
                              </button>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <AccountMenu onLogout={logout} onSaved={() => setProfileVersion((value) => value + 1)} />
          </div>
        </header>

        <Outlet />
      </div>

      {viewing && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-slate-950/40 p-4">
          <article className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase text-slate-500">{viewing.code}</p>
                <h2 className="font-display text-xl font-semibold">{viewing.title}</h2>
              </div>
              <button type="button" onClick={() => setViewing(null)} className="rounded px-2 text-lg">×</button>
            </div>
            <dl className="mt-4 space-y-2 text-sm text-slate-700">
              <div className="flex justify-between gap-3"><dt>Trường</dt><dd className="text-right font-medium">{viewing.school?.profile?.organizationName || viewing.school?.fullName || "—"}</dd></div>
              <div className="flex justify-between gap-3"><dt>Mức khẩn</dt><dd>{priorityLabel[viewing.urgencyLevel] || viewing.urgencyLevel}</dd></div>
              <div className="flex justify-between gap-3"><dt>Trạng thái</dt><dd>{viewing.reviewStatus || viewing.status}</dd></div>
              <div className="flex justify-between gap-3"><dt>Số thứ tự</dt><dd>{viewing.queueOrder ?? "—"}</dd></div>
              <div className="flex justify-between gap-3"><dt>Giấy nhà trường</dt><dd className="max-w-[16rem] truncate text-right">{viewing.schoolConfirmationUrl || "—"}</dd></div>
              <div className="flex justify-between gap-3"><dt>Giấy ủy ban</dt><dd className="max-w-[16rem] truncate text-right">{viewing.committeeConfirmationUrl || "—"}</dd></div>
            </dl>
            <ul className="mt-4 space-y-1 text-sm text-slate-600">
              {(viewing.items ?? []).map((item) => <li key={item.id}>{item.quantityNeeded} · {item.category}</li>)}
            </ul>
            <button type="button" onClick={() => { setViewing(null); navigate("/school-requests"); }} className="mt-5 w-full rounded bg-blue-600 py-2 text-sm font-semibold text-white">Mở trang duyệt yêu cầu của trường</button>
          </article>
        </div>
      )}
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