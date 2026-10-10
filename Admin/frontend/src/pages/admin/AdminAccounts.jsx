import { useCallback, useEffect, useState } from "react";
import { Lock, Plus } from "lucide-react";
import api, { apiError, currentUser } from "../../lib/api";
import { ROLE_LABEL } from "../../lib/roles";
import { Badge, Card, Chips, DataTable, Field, GhostButton, KeyValue, Modal, Notice, PageHead, PrimaryButton, SearchBox, Stat, fmtDate, inputClass, orgName, rowsOf, totalOf, useNotice, usePortalRefresh } from "../portals/kit";

const blank = { fullName: "", email: "", password: "", phone: "", organizationName: "", address: "", city: "", district: "", role: "WAREHOUSE_STAFF" };

const ROLE_OPTIONS = ["DONOR", "SCHOOL_REP", "WAREHOUSE_STAFF", "VOLUNTEER", "ADMIN"];
const CREATE_ROLES = ["WAREHOUSE_STAFF", "VOLUNTEER", "ADMIN"];

export default function AdminAccounts() {
  const me = currentUser();
  const [accounts, setAccounts] = useState([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("DONOR");
  const [creating, setCreating] = useState(false);
  const [viewing, setViewing] = useState(null);
  const [changing, setChanging] = useState(null);
  const [nextRole, setNextRole] = useState("");
  const [form, setForm] = useState(blank);
  const [pending, setPending] = useState(false);
  const { notice, ok, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const response = await api.get("/users", { params: { role: roleFilter === "all" ? undefined : roleFilter, limit: 100, search: search.trim() || undefined } });
      setAccounts(rowsOf(response.data));
      setTotal(totalOf(response.data));
    } catch (error) {
      fail(apiError(error, "Không tải được danh sách tài khoản."));
    }
  }, [search, roleFilter]);

  useEffect(() => {
    const timer = window.setTimeout(load, 250);
    return () => window.clearTimeout(timer);
  }, [load]);
  usePortalRefresh(load);

  async function create() {
    setPending(true);
    try {
      const profile = Object.fromEntries(Object.entries({ organizationName: form.organizationName, address: form.address, city: form.city, district: form.district }).filter(([, value]) => value.trim()));
      await api.post("/users", {
        email: form.email.trim(),
        password: form.password,
        fullName: form.fullName.trim(),
        phone: form.phone.trim() || undefined,
        role: form.role,
        profile: Object.keys(profile).length ? profile : undefined,
      });
      ok(`Đã tạo tài khoản ${ROLE_LABEL[form.role]}. Tài khoản dùng email và mật khẩu này để vào đúng cổng.`);
      setRoleFilter(form.role);
      setCreating(false);
      setForm(blank);
      await load();
    } catch (error) {
      fail(apiError(error, "Không tạo được tài khoản."));
    } finally {
      setPending(false);
    }
  }

  async function changeRole() {
    setPending(true);
    try {
      await api.patch(`/users/${changing.id}/role`, { role: nextRole });
      ok(`Đã đổi vai trò của ${changing.fullName} thành ${ROLE_LABEL[nextRole]}. Tài khoản cần đăng nhập lại để vào đúng cổng mới.`);
      setChanging(null);
      await load();
    } catch (error) {
      fail(apiError(error, "Không đổi được vai trò."));
    } finally {
      setPending(false);
    }
  }

  const valid = form.fullName.trim().length >= 2 && /\S+@\S+\.\S+/.test(form.email) && form.password.length >= 8;
  const rows = accounts.map((row) => ({
    key: row.id,
    cells: [
      <div><b>{row.fullName}</b><span className="block text-xs text-slate-500">{row.email}</span></div>,
      <Badge tone={row.role === "ADMIN" ? "rose" : "blue"}>{ROLE_LABEL[row.role] || row.role}</Badge>,
      orgName(row) === row.fullName ? "—" : orgName(row),
      row.phone || "—",
      <Badge tone={row.status === "ACTIVE" ? "emerald" : "rose"}>{row.status === "ACTIVE" ? "Đang hoạt động" : "Bị khóa"}</Badge>,
      fmtDate(row.createdAt),
      <div className="flex flex-wrap gap-1.5">
        <GhostButton onClick={() => setViewing(row)}>Xem hồ sơ</GhostButton>
        <GhostButton disabled={row.id === me?.id} onClick={() => { setChanging(row); setNextRole(row.role === "INTAKE_STAFF" || row.role === "COORDINATOR" ? "WAREHOUSE_STAFF" : row.role); }}>Đổi vai trò</GhostButton>
      </div>,
    ],
  }));

  return (
    <div className="mx-auto max-w-[1400px] p-4 md:p-6">
      <PageHead
        eyebrow="Trung tâm điều hành · Quản lý tài khoản"
        title="Tài khoản"
        subtitle="Admin tạo tài khoản cho các cổng không tự đăng ký được: thủ kho, tình nguyện viên và quản trị. Nhà hảo tâm và nhà trường tự đăng ký."
        actions={<PrimaryButton onClick={() => setCreating(true)}><Plus size={15} />Tạo tài khoản</PrimaryButton>}
      />
      <Notice notice={notice} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Tổng tài khoản (bộ lọc)" value={total} />
        <Stat label="Đang hoạt động" value={accounts.filter((row) => row.status === "ACTIVE").length} tone="emerald" />
        <Stat label="Là tổ chức" value={accounts.filter((row) => row.profile?.organizationName).length} tone="violet" />
      </div>
      <div className="mb-4">
        <Chips value={roleFilter} onChange={setRoleFilter} items={[["DONOR", "Nhà hảo tâm"], ["SCHOOL_REP", "Nhà trường"], ["WAREHOUSE_STAFF", "Thủ kho"], ["VOLUNTEER", "Tình nguyện viên"], ["ADMIN", "Quản trị"], ["all", "Tất cả"]]} />
      </div>
      <Card title="Danh sách tài khoản" actions={<SearchBox value={search} onChange={setSearch} placeholder="Tìm tên, email, tổ chức..." />}>
        <p className="mb-3 flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600"><Lock size={13} />Admin chỉ đổi vai trò và xem hồ sơ. Không sửa tên, số điện thoại hay trạng thái của tài khoản khác.</p>
        <DataTable columns={["Tài khoản", "Vai trò", "Tổ chức", "Điện thoại", "Trạng thái", "Ngày tạo", ""]} rows={rows} empty="Không có tài khoản nào khớp bộ lọc." />
      </Card>

      {viewing ? (
        <Modal wide title={`Hồ sơ · ${viewing.fullName}`} subtitle={ROLE_LABEL[viewing.role] || viewing.role} onClose={() => setViewing(null)} footer={<GhostButton onClick={() => setViewing(null)}>Đóng</GhostButton>}>
          <KeyValue rows={[
            ["Họ và tên", viewing.fullName],
            ["Email", viewing.email],
            ["Số điện thoại", viewing.phone || "—"],
            ["Vai trò", ROLE_LABEL[viewing.role] || viewing.role],
            ["Trạng thái", viewing.status === "ACTIVE" ? "Đang hoạt động" : "Bị khóa"],
            ["Tổ chức", viewing.profile?.organizationName || "—"],
            ["Địa chỉ", viewing.profile?.address || "—"],
            ["Quận / huyện", viewing.profile?.district || "—"],
            ["Tỉnh / thành phố", viewing.profile?.city || "—"],
            ["Ngày tạo", fmtDate(viewing.createdAt)],
          ]} />
        </Modal>
      ) : null}

      {changing ? (
        <Modal title="Đổi vai trò tài khoản" subtitle={`${changing.fullName} · ${changing.email}`} onClose={() => setChanging(null)}
          footer={<><GhostButton onClick={() => setChanging(null)}>Hủy</GhostButton><PrimaryButton pending={pending} disabled={nextRole === changing.role} onClick={changeRole}>Lưu vai trò</PrimaryButton></>}>
          <Field label="Vai trò mới">
            <select className={inputClass} value={nextRole} onChange={(event) => setNextRole(event.target.value)}>
              {ROLE_OPTIONS.map((role) => <option key={role} value={role}>{ROLE_LABEL[role]}</option>)}
            </select>
          </Field>
          <p className="mt-3 text-xs text-slate-500">Vai trò quyết định cổng mà tài khoản được vào. Admin không thể tự đổi vai trò của chính mình.</p>
        </Modal>
      ) : null}

      {creating ? (
        <Modal wide title="Tạo tài khoản" subtitle="Chọn cổng mà tài khoản được vào. Kho, tình nguyện viên và quản trị chỉ do admin tạo." onClose={() => setCreating(false)}
          footer={<><GhostButton onClick={() => setCreating(false)}>Hủy</GhostButton><PrimaryButton pending={pending} disabled={!valid} onClick={create}>Tạo tài khoản</PrimaryButton></>}>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Cổng truy cập">
              <select className={inputClass} value={form.role} onChange={(event) => setForm({ ...form, role: event.target.value })}>
                {CREATE_ROLES.map((role) => <option key={role} value={role}>{ROLE_LABEL[role]}</option>)}
              </select>
            </Field>
            <Field label="Họ và tên"><input className={inputClass} value={form.fullName} onChange={(event) => setForm({ ...form, fullName: event.target.value })} /></Field>
            <Field label="Email đăng nhập"><input type="email" className={inputClass} value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></Field>
            <Field label="Mật khẩu tạm (ít nhất 8 ký tự)"><input type="password" autoComplete="new-password" className={inputClass} value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} /></Field>
            <Field label="Số điện thoại"><input className={inputClass} maxLength={20} value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} /></Field>
            <Field label="Tên tổ chức (nếu có)"><input className={inputClass} value={form.organizationName} onChange={(event) => setForm({ ...form, organizationName: event.target.value })} /></Field>
            <Field label="Địa chỉ"><input className={inputClass} value={form.address} onChange={(event) => setForm({ ...form, address: event.target.value })} /></Field>
            <Field label="Quận / huyện"><input className={inputClass} value={form.district} onChange={(event) => setForm({ ...form, district: event.target.value })} /></Field>
            <Field label="Tỉnh / thành phố"><input className={inputClass} value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value })} /></Field>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
