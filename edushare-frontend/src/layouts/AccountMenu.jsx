import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, LogOut, Save, UserRound } from "lucide-react";
import api, { apiError, currentUser } from "../lib/api";
import { ROLE_LABEL } from "../lib/roles";
import { Modal } from "../pages/portals/kit";

const STATUS_LABEL = { ACTIVE: "Đang hoạt động", SUSPENDED: "Đã khóa", INACTIVE: "Ngừng hoạt động" };

function formatDate(value) {
  if (!value) return "—";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "—" : date.toLocaleDateString("vi-VN");
}

/**
 * Hồ sơ cá nhân: xem toàn bộ thông tin tài khoản; chỉ họ tên và số điện thoại được tự sửa.
 */
function ProfileModal({ onClose, onSaved }) {
  const stored = currentUser();
  const [profile, setProfile] = useState(stored);
  const [fullName, setFullName] = useState(stored?.fullName || "");
  const [phone, setPhone] = useState(stored?.phone || "");
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let alive = true;
    api.get("/auth/me").then(({ data }) => {
      if (!alive || !data) return;
      setProfile(data);
      setFullName(data.fullName || "");
      setPhone(data.phone || "");
    }).catch(() => {});
    return () => { alive = false; };
  }, []);

  const dirty = fullName.trim() !== (profile?.fullName || "") || phone.trim() !== (profile?.phone || "");
  const organization = profile?.profile || null;
  const address = organization ? [organization.address, organization.district, organization.city].filter(Boolean).join(", ") : "";

  async function save(event) {
    event.preventDefault();
    setPending(true);
    setMessage(null);
    try {
      const { data } = await api.patch("/auth/me", { fullName: fullName.trim(), phone: phone.trim() || undefined });
      const latest = currentUser() || {};
      localStorage.setItem("edushare_user", JSON.stringify({ ...latest, fullName: data.fullName, phone: data.phone }));
      setProfile((previous) => ({ ...previous, fullName: data.fullName, phone: data.phone }));
      setMessage({ tone: "ok", text: "Đã cập nhật họ tên và số điện thoại." });
      onSaved?.();
    } catch (error) {
      setMessage({ tone: "error", text: apiError(error, "Không cập nhật được thông tin.") });
    } finally {
      setPending(false);
    }
  }

  const editable = "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";
  const locked = "w-full cursor-not-allowed rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-500";
  const label = "mb-1 block text-xs font-semibold text-slate-600";
  const lockedLabel = "mb-1 block text-xs font-semibold text-slate-500";

  return (
    <Modal
      title="Hồ sơ của tôi"
      subtitle="Bạn có thể tự chỉnh họ tên và số điện thoại. Các thông tin còn lại do hệ thống quản lý."
      onClose={onClose}
      footer={(
        <>
          <button type="button" onClick={onClose} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">Đóng</button>
          <button type="submit" form="account-profile-form" disabled={pending || !dirty || fullName.trim().length < 2} className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"><Save size={14} />{pending ? "Đang lưu..." : "Lưu thay đổi"}</button>
        </>
      )}
    >
      <div className="mb-4 flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3">
        <span className="grid size-12 place-items-center rounded-full bg-blue-600 text-lg font-bold text-white">{(profile?.fullName || "?").trim().charAt(0).toUpperCase()}</span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900">{profile?.fullName}</p>
          <p className="text-xs font-medium text-blue-700">{ROLE_LABEL[profile?.role] || profile?.role}</p>
        </div>
      </div>

      <form id="account-profile-form" onSubmit={save} className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Họ và tên</span>
          <input required minLength={2} maxLength={120} value={fullName} onChange={(event) => setFullName(event.target.value)} className={editable} />
        </label>
        <label className="block">
          <span className={label}>Số điện thoại</span>
          <input maxLength={20} value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Chưa có số điện thoại" className={editable} />
        </label>
        <label className="block">
          <span className={lockedLabel}>Email (không đổi được)</span>
          <input value={profile?.email || ""} disabled readOnly className={locked} />
        </label>
        <label className="block">
          <span className={lockedLabel}>Vai trò (không đổi được)</span>
          <input value={ROLE_LABEL[profile?.role] || profile?.role || ""} disabled readOnly className={locked} />
        </label>
        <label className="block">
          <span className={lockedLabel}>Trạng thái tài khoản</span>
          <input value={STATUS_LABEL[profile?.status] || profile?.status || "—"} disabled readOnly className={locked} />
        </label>
        <label className="block">
          <span className={lockedLabel}>Ngày tạo tài khoản</span>
          <input value={formatDate(profile?.createdAt)} disabled readOnly className={locked} />
        </label>
        {organization?.organizationName ? (
          <label className="block sm:col-span-2">
            <span className={lockedLabel}>Tổ chức / đơn vị</span>
            <input value={organization.organizationName} disabled readOnly className={locked} />
          </label>
        ) : null}
        {address ? (
          <label className="block sm:col-span-2">
            <span className={lockedLabel}>Địa chỉ</span>
            <input value={address} disabled readOnly className={locked} />
          </label>
        ) : null}
      </form>

      {message ? <p className={`mt-3 rounded-lg px-3 py-2 text-xs ${message.tone === "ok" ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-700"}`}>{message.text}</p> : null}
    </Modal>
  );
}

/**
 * Menu tài khoản dùng chung cho mọi cổng: bấm vào tên sổ ra hai lựa chọn "Xem hồ sơ" và "Đăng xuất".
 * "Xem hồ sơ" mở popup hồ sơ cá nhân, tại đó chỉ họ tên và số điện thoại sửa được.
 */
export default function AccountMenu({ onLogout, onSaved }) {
  const user = currentUser();
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    function onDown(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) setOpen(false);
    }
    function onKey(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!user) return null;

  const item = "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-semibold transition";

  return (
    <div className="relative" ref={boxRef}>
      <button
        type="button"
        data-no-feedback
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 text-[11px] font-semibold text-slate-700 hover:bg-slate-100"
      >
        <span className="grid size-7 place-items-center rounded-full bg-blue-600 text-xs font-bold text-white">{(user.fullName || "?").trim().charAt(0).toUpperCase()}</span>
        <span className="hidden max-w-[10rem] truncate sm:block">{user.fullName}</span>
        <ChevronDown size={14} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div role="menu" aria-label="Tài khoản" className="absolute right-0 top-11 z-50 w-48 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl ring-1 ring-black/5">
          <button type="button" role="menuitem" onClick={() => { setOpen(false); setProfileOpen(true); }} className={`${item} text-slate-700 hover:bg-slate-100`}>
            <UserRound size={14} />Xem hồ sơ
          </button>
          <button type="button" role="menuitem" onClick={() => { setOpen(false); onLogout?.(); }} className={`${item} text-rose-700 hover:bg-rose-50`}>
            <LogOut size={14} />Đăng xuất
          </button>
        </div>
      ) : null}

      {profileOpen ? createPortal(<ProfileModal onClose={() => setProfileOpen(false)} onSaved={onSaved} />, document.body) : null}
    </div>
  );
}
