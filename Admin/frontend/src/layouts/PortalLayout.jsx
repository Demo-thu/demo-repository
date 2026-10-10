import { useCallback, useEffect, useState } from "react";
import { Link, Navigate, Outlet, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  Archive, ArrowRightLeft, Award, Box, ClipboardCheck, ClipboardList, FilePenLine, FileSignature, FileText,
  Gift, HandHeart, History, Images, LayoutList, Menu, PackageCheck, PackagePlus, PenLine, QrCode, ScanLine,
  RefreshCw, Search, ShieldAlert, Sparkles, Timer, Truck, UserCheck, Users, Warehouse, X, Zap,
} from "lucide-react";
import api, { clearSession, currentUser } from "../lib/api";
import { PORTAL_ACCESS, homeForRole, portalOf } from "../lib/roles";
import { orgName, shortId } from "../pages/portals/kit";
import AccountMenu from "./AccountMenu";

const NAV = {
  donor: [
    ["CỔNG NHÀ HẢO TÂM", [
      ["Khám phá chiến dịch", "campaigns", Sparkles],
      ["Tạo phiếu trao tặng", "pledge", Gift],
      ["Phiếu đã gửi", "mine", ClipboardList],
      ["Biên nhận điện tử", "receipt", FileText],
      ["Mã QR thiết bị", "track", QrCode],
      ["Tác động xã hội", "impact", Award],
    ]],
  ],
  school: [
    ["1. YÊU CẦU HỖ TRỢ", [
      ["Tạo yêu cầu mới", "request", FilePenLine],
      ["Hàng chờ xét duyệt", "queue", ClipboardList],
    ]],
    ["2. PHÂN BỔ & MÃ QR", [
      ["Tài nguyên phân bổ", "equipment", Archive],
      ["Truy vết vòng đời QR", "trace", ScanLine],
    ]],
    ["3. VẬN CHUYỂN & KÝ NHẬN", [
      ["Theo dõi vận đơn", "waybill", Truck],
      ["Ký biên bản PoD", "sign", PenLine],
    ]],
    ["4. LỊCH SỬ & LƯU TRỮ", [
      ["Lịch sử giao hàng", "history", History],
    ]],
  ],
  warehouse: [
    ["TIẾP NHẬN & KIỂM ĐỊNH", [
      ["Xác minh phiếu trao tặng", "verify", ClipboardCheck],
      ["Kiểm định 1 chạm", "inspect", Zap],
      ["Nhập kho đã xác minh", "receive", PackagePlus],
    ]],
    ["KHO & TỒN KHO", [
      ["Danh sách tồn kho", "inventory", LayoutList],
      ["Theo dõi trạng thái chuyển", "status", ArrowRightLeft],
    ]],
    ["ĐIỀU PHỐI & VẬN CHUYỂN", [
      ["Tạo lệnh điều chuyển", "dispatch", PackageCheck],
      ["Lập vận đơn", "waybill", Truck],
      ["Báo cáo sự cố", "incident", ShieldAlert],
    ]],
  ],
  volunteer: [
    ["1. CA TRỰC", [
      ["Điểm danh vào ca / ra ca", "shift", UserCheck],
    ]],
    ["2. CHUYẾN ĐƯỢC GÁN", [
      ["Vận đơn được gán", "waybills", Truck],
      ["Xác nhận đã lấy hàng", "pickup", PackageCheck],
      ["Báo sự cố trên chuyến", "incident", ShieldAlert],
    ]],
    ["3. SAU KHI TRƯỜNG KÝ", [
      ["Báo cáo & ảnh minh chứng", "proof", FileSignature],
      ["Thư viện ảnh trao tặng", "gallery", Images],
    ]],
    ["4. GIỜ CÔNG", [
      ["Giờ công & bảng xếp hạng", "board", Award],
    ]],
  ],
};

const TITLE = {
  donor: "CỔNG NHÀ HẢO TÂM",
  school: "CỔNG THỤ HƯỞNG",
  warehouse: "CỔNG KHO GỘP",
  volunteer: "CỔNG TÌNH NGUYỆN VIÊN",
};

const SEARCH = {
  donor: "Tìm mã QR thiết bị, mã phiếu trao tặng...",
  school: "Tìm mã QR, vận đơn, yêu cầu...",
  warehouse: "Tìm mã QR, mã phiếu, vận đơn...",
  volunteer: "Tìm mã vận đơn, trường nhận hàng...",
};

const SEARCH_TAB = { donor: "track", school: "trace", warehouse: null, volunteer: "waybills" };

const ROLE_LINE = {
  donor: "Nhà hảo tâm",
  school: "Đại diện nhà trường",
  warehouse: "Thủ kho điều phối",
  volunteer: "Tình nguyện viên",
};

const ID_PREFIX = { donor: "DONOR", school: "SCH", warehouse: "KHO", volunteer: "TNV" };

export default function PortalLayout() {
  const user = currentUser();
  const portal = portalOf(useLocation().pathname);
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(params.get("q") || "");
  const [facility, setFacility] = useState(null);
  const [activeShift, setActiveShift] = useState(null);
  const [badges, setBadges] = useState({});
  const [, setProfileVersion] = useState(0);
  const groups = NAV[portal] || [];
  const tab = params.get("tab") || groups[0]?.[1]?.[0]?.[1];

  useEffect(() => {
    setQuery(params.get("q") || "");
  }, [params]);

  useEffect(() => {
    if (portal !== "warehouse") return;
    api.get("/warehouses?limit=50").then((response) => {
      const rows = response.data?.data ?? [];
      setFacility(rows.find((row) => row.code === "WH-HAN") || rows[0] || null);
    }).catch(() => setFacility(null));
  }, [portal]);

  const refreshShift = useCallback(() => {
    if (portal !== "volunteer") return;
    api.get("/volunteers/shifts?limit=10").then((response) => {
      const rows = response.data?.data ?? [];
      setActiveShift(rows.find((row) => row.checkInAt && !row.checkOutAt) || null);
    }).catch(() => setActiveShift(null));
  }, [portal]);

  // Số việc cần xử lý hiện trên menu: Kho thấy phiếu chờ xác minh, Nhà hảo tâm thấy phiếu kho đang chờ mình xác nhận.
  const refreshBadges = useCallback(() => {
    const status = portal === "warehouse" ? "PENDING" : portal === "donor" ? "AWAITING_DONOR" : "";
    if (!status) return;
    api.get("/pledges", { params: { status, limit: 1 } })
      .then((response) => setBadges({ [portal === "warehouse" ? "verify" : "mine"]: response.data?.meta?.total ?? 0 }))
      .catch(() => setBadges({}));
  }, [portal]);

  useEffect(() => {
    refreshBadges();
    window.addEventListener("portal:refresh", refreshBadges);
    return () => window.removeEventListener("portal:refresh", refreshBadges);
  }, [refreshBadges]);

  // Đồng bộ dữ liệu giữa các cổng: tự làm mới mỗi 30 giây và ngay khi người dùng quay lại tab.
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

  useEffect(() => {
    refreshShift();
    window.addEventListener("portal:refresh", refreshShift);
    const timer = window.setInterval(refreshShift, 60000);
    return () => {
      window.removeEventListener("portal:refresh", refreshShift);
      window.clearInterval(timer);
    };
  }, [refreshShift]);

  if (!portal || !PORTAL_ACCESS[portal]?.includes(user?.role)) {
    return <Navigate to={homeForRole(user?.role)} replace />;
  }

  function openTab(next, extra = {}) {
    const following = new URLSearchParams();
    following.set("tab", next);
    Object.entries(extra).forEach(([key, value]) => {
      if (value) following.set(key, value);
    });
    setParams(following);
    setOpen(false);
  }

  function search(event) {
    event.preventDefault();
    const term = query.trim();
    if (!term) return;
    if (portal === "warehouse") {
      const following = new URLSearchParams(params);
      following.set("scan", "1");
      following.set("q", term);
      setParams(following);
      return;
    }
    openTab(SEARCH_TAB[portal], { q: term });
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

  const profileName = portal === "warehouse" || portal === "volunteer" ? user.fullName : orgName(user);

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30]">
      <aside className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-slate-200 bg-[#eff4ff] transition-transform md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-16 shrink-0 items-center border-b border-slate-100 bg-white px-4">
          <Link to={homeForRole(user.role)} className="flex items-center gap-2 text-blue-700">
            <span className="grid size-6 place-items-center rounded bg-blue-600 text-white"><Box size={15} /></span>
            <div><b className="font-display text-sm">EduShare VN</b><small className="block text-[9px] font-bold tracking-widest text-slate-500">{TITLE[portal]}</small></div>
          </Link>
          <button className="ml-auto md:hidden" onClick={() => setOpen(false)} type="button"><X size={20} /></button>
        </div>

        {portal === "donor" || portal === "school" ? (
          <div className="mx-3 mt-3 rounded-lg border border-blue-100 bg-white p-3">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-teal-700">{portal === "donor" ? "● Đối tác tài trợ" : "● Điểm trường hoạt động"}</p>
            <p className="mt-1 text-xs font-semibold text-slate-800">{profileName}</p>
            <p className="text-[10px] text-slate-500">{shortId(ID_PREFIX[portal], user.id)}</p>
          </div>
        ) : null}
        {portal === "warehouse" ? (
          <div className="mx-3 mt-3 w-fit rounded-full bg-teal-50 px-2 py-1 text-[10px] font-semibold text-teal-700">● {facility?.name || "Kho trung tâm"}</div>
        ) : null}

        <nav className="mt-1 flex-1 overflow-y-auto px-2 pb-4">
          {groups.map(([title, items]) => (
            <section key={title}>
              <p className="px-2 pb-1 pt-3 text-[9px] font-semibold tracking-wider text-slate-500">{title}</p>
              {items.map(([label, key, Icon]) => (
                <button key={key} type="button" onClick={() => openTab(key)} className={`mb-0.5 flex w-full items-center gap-3 rounded px-2 py-2 text-left text-xs ${tab === key ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:bg-blue-100"}`}>
                  <Icon size={16} />{label}
                  {badges[key] ? <span className={`ml-auto grid min-w-5 place-items-center rounded-full px-1.5 py-0.5 text-[10px] font-bold ${tab === key ? "bg-white text-blue-700" : "bg-rose-500 text-white"}`}>{badges[key]}</span> : null}
                </button>
              ))}
            </section>
          ))}
        </nav>

        {portal === "volunteer" ? (
          <div className="mx-3 mb-2 rounded-lg border border-blue-100 bg-white p-3 text-[11px]">
            <p className="flex items-center gap-1 font-semibold text-slate-700"><Timer size={13} className="text-blue-600" />Ca trực</p>
            {activeShift ? (
              <p className="mt-1 text-teal-700">Đang trực tại {activeShift.warehouse?.name || "kho"}</p>
            ) : (
              <p className="mt-1 text-slate-500">Chưa điểm danh ca nào đang mở</p>
            )}
          </div>
        ) : null}

        <div className="shrink-0 border-t border-slate-200 bg-blue-100 px-4 py-3 text-[10px] text-slate-600">
          <p className="truncate font-semibold text-slate-800">{user.fullName}</p>
          <p>{ROLE_LINE[portal]} · {shortId(ID_PREFIX[portal], user.id)}</p>
        </div>
      </aside>

      <div className="md:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-slate-100 bg-white px-4 md:px-6">
          <button className="md:hidden" type="button" onClick={() => setOpen(true)}><Menu /></button>
          {portal === "warehouse" ? (
            <div className="hidden min-w-0 shrink-0 lg:block">
              <p className="flex items-center gap-1 text-[11px] font-semibold text-slate-800"><Warehouse size={14} className="text-blue-600" />{facility?.name || "Kho trung tâm"}</p>
              <p className="text-[10px] text-slate-500">{facility?.code ? `#${facility.code}` : ""} · {ROLE_LINE.warehouse}</p>
            </div>
          ) : null}
          <form onSubmit={search} className="flex w-full max-w-md items-center gap-2 rounded bg-blue-50 px-3 py-2 text-slate-500">
            <Search size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent text-xs outline-none" placeholder={SEARCH[portal]} />
          </form>

          <div className="ml-auto flex items-center gap-2">
            {portal === "donor" ? (
              <button type="button" onClick={() => openTab("pledge")} className="hidden items-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 sm:flex"><HandHeart size={14} />Tạo phiếu trao tặng</button>
            ) : null}
            {portal === "warehouse" ? (
              <>
                <button type="button" onClick={() => { const following = new URLSearchParams(params); following.set("scan", "1"); following.delete("q"); setParams(following); }} className="hidden items-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 sm:flex"><ScanLine size={14} />Quét mã QR kho</button>
                <button type="button" onClick={() => window.dispatchEvent(new CustomEvent("portal:export"))} className="hidden items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 sm:flex"><FileText size={14} />Xuất nhanh</button>
              </>
            ) : null}
            <span className="hidden rounded bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-700 md:block">
              <Users className="mr-1 inline" size={14} />{ROLE_LINE[portal]}
            </span>
            <button type="button" onClick={() => window.dispatchEvent(new CustomEvent("portal:refresh"))} className="grid size-8 place-items-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200" aria-label="Làm mới dữ liệu"><RefreshCw size={16} /></button>
            <AccountMenu onLogout={logout} onSaved={() => setProfileVersion((value) => value + 1)} />
          </div>
        </header>
        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
