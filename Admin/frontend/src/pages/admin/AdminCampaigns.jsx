import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Trash2 } from "lucide-react";
import api, { apiError } from "../../lib/api";
import {
  CATEGORIES, CATEGORY_LABEL, Card, Chips, Empty, Field, GhostButton, Modal, Notice, PageHead, PrimaryButton, Progress, SearchBox, Stat,
  StatusBadge, fmtDate, inputClass, rowsOf, useNotice, usePortalRefresh,
} from "../portals/kit";

const STATUSES = [["ACTIVE", "Đang diễn ra"], ["UPCOMING", "Sắp mở"], ["PAUSED", "Tạm dừng"], ["COMPLETED", "Đã hoàn thành"]];
const today = () => new Date().toISOString().slice(0, 10);
const plusDays = (days) => new Date(Date.now() + days * 86400000).toISOString().slice(0, 10);
const slugify = (text) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 50);
const blank = () => ({ title: "", description: "", startDate: today(), endDate: plusDays(90), status: "ACTIVE", targets: [{ category: "IT_DEVICES", targetQuantity: 10 }] });

export default function AdminCampaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState(blank);
  const [adding, setAdding] = useState(null);
  const [extra, setExtra] = useState({ category: "BOOKS", targetQuantity: 10 });
  const [pending, setPending] = useState("");
  const { notice, ok, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const response = await api.get("/campaigns", { params: { limit: 100 } });
      setCampaigns(rowsOf(response.data));
    } catch (error) {
      fail(apiError(error, "Không tải được danh sách chiến dịch."));
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);
  usePortalRefresh(load);

  const visible = campaigns.filter((row) => (filter === "all" || row.status === filter) && (!search.trim() || `${row.title} ${row.slug}`.toLowerCase().includes(search.trim().toLowerCase())));
  const target = campaigns.reduce((sum, row) => sum + (row.summary?.targetQuantity || 0), 0);
  const received = campaigns.reduce((sum, row) => sum + (row.summary?.received || 0), 0);

  function setTarget(index, patch) {
    setForm((current) => ({ ...current, targets: current.targets.map((row, i) => (i === index ? { ...row, ...patch } : row)) }));
  }

  async function create() {
    setPending("create");
    try {
      await api.post("/campaigns", {
        slug: `${slugify(form.title) || "chien-dich"}-${Date.now().toString(36)}`,
        title: form.title.trim(),
        description: form.description.trim(),
        startDate: new Date(`${form.startDate}T00:00:00`).toISOString(),
        endDate: new Date(`${form.endDate}T23:59:59`).toISOString(),
        status: form.status,
        targets: form.targets.map((row) => ({ category: row.category, targetQuantity: Math.max(1, Number(row.targetQuantity) || 1) })),
      });
      ok("Đã tạo chiến dịch và các hạng mục cần quyên góp. Nhà hảo tâm sẽ thấy ngay trong cổng của họ.");
      setCreating(false);
      setForm(blank());
      await load();
    } catch (error) {
      fail(apiError(error, "Không tạo được chiến dịch."));
    } finally {
      setPending("");
    }
  }

  async function changeStatus(row, status) {
    try {
      await api.patch(`/campaigns/${row.id}/status`, { status });
      ok(`Đã chuyển "${row.title}" sang trạng thái mới.`);
      await load();
    } catch (error) {
      fail(apiError(error, "Không đổi được trạng thái chiến dịch."));
    }
  }

  async function addTarget() {
    setPending("target");
    try {
      await api.post(`/campaigns/${adding.id}/targets`, { category: extra.category, targetQuantity: Math.max(1, Number(extra.targetQuantity) || 1) });
      ok("Đã thêm hạng mục cần quyên góp.");
      setAdding(null);
      await load();
    } catch (error) {
      fail(apiError(error, "Không thêm được hạng mục."));
    } finally {
      setPending("");
    }
  }

  const formValid = form.title.trim().length >= 3 && form.description.trim().length >= 10 && form.targets.length > 0 && form.endDate >= form.startDate;

  return (
    <div className="mx-auto max-w-[1400px] p-4 md:p-6">
      <PageHead
        eyebrow="Trung tâm điều hành · Admin"
        title="Chiến dịch & hạng mục cần quyên góp"
        subtitle="Admin tạo đợt vận động và khai báo các hạng mục cần quyên góp. Tài khoản nhà hảo tâm không tạo từ trang này."
        actions={<PrimaryButton onClick={() => setCreating(true)}><Plus size={15} />Tạo chiến dịch</PrimaryButton>}
      />
      <Notice notice={notice} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Tổng chiến dịch" value={campaigns.length} />
        <Stat label="Đang diễn ra" value={campaigns.filter((row) => row.status === "ACTIVE").length} tone="emerald" />
        <Stat label="Mục tiêu quyên góp" value={target} tone="violet" />
        <Stat label="Đã tiếp nhận" value={received} hint={target ? `${Math.round((received / target) * 100)}% mục tiêu` : ""} tone="amber" />
      </div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Chips value={filter} onChange={setFilter} items={[["all", "Tất cả", campaigns.length], ...STATUSES.map(([key, label]) => [key, label, campaigns.filter((row) => row.status === key).length])]} />
        <SearchBox value={search} onChange={setSearch} placeholder="Tìm tên chiến dịch..." />
      </div>

      {!visible.length ? <Empty>Chưa có chiến dịch nào khớp bộ lọc.</Empty> : null}
      <div className="grid gap-4 lg:grid-cols-2">
        {visible.map((row) => (
          <Card key={row.id}>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-mono text-[11px] text-slate-500">{row.slug}</p>
                <h3 className="font-display text-lg font-semibold text-slate-900">{row.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-slate-600">{row.description}</p>
              </div>
              <StatusBadge kind="campaign" value={row.status} />
            </div>
            <p className="mt-2 text-xs text-slate-500">{fmtDate(row.startDate)} - {fmtDate(row.endDate)} · {row._count?.pledges ?? 0} phiếu trao tặng</p>
            <div className="mt-3 space-y-2">
              {(row.targets || []).map((item) => (
                <div key={item.id || item.category}>
                  <div className="mb-1 flex justify-between text-xs"><span className="font-semibold">{CATEGORY_LABEL[item.category] || item.category}</span><span>{item.currentReceivedQuantity ?? 0}/{item.targetQuantity}</span></div>
                  <Progress value={item.receivedRate ?? Math.round(((item.currentReceivedQuantity || 0) / item.targetQuantity) * 100)} />
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <select className={`${inputClass} !w-auto !py-1.5 !text-xs`} value={row.status} onChange={(event) => changeStatus(row, event.target.value)}>
                {STATUSES.map(([key, label]) => <option key={key} value={key}>{label}</option>)}
              </select>
              <GhostButton onClick={() => setAdding(row)}><Plus size={13} />Thêm hạng mục</GhostButton>
              <Link to="/tracking" className="ml-auto text-xs font-semibold text-blue-700 hover:underline">Tra cứu hành trình</Link>
            </div>
          </Card>
        ))}
      </div>

      {creating ? (
        <Modal wide title="Tạo chiến dịch mới" subtitle="Khai báo đợt vận động và các hạng mục cần quyên góp." onClose={() => setCreating(false)}
          footer={<><GhostButton onClick={() => setCreating(false)}>Hủy</GhostButton><PrimaryButton pending={pending === "create"} disabled={!formValid} onClick={create}>Tạo chiến dịch</PrimaryButton></>}>
          <div className="space-y-4">
            <Field label="Tên chiến dịch"><input className={inputClass} value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} placeholder="Ví dụ: Chắp cánh ước mơ tin học 2026" /></Field>
            <Field label="Mô tả (ít nhất 10 ký tự)"><textarea rows={3} className={inputClass} value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} placeholder="Điểm trường, mục đích và đối tượng thụ hưởng..." /></Field>
            <div className="grid gap-3 sm:grid-cols-3">
              <Field label="Ngày bắt đầu"><input type="date" className={inputClass} value={form.startDate} onChange={(event) => setForm({ ...form, startDate: event.target.value })} /></Field>
              <Field label="Ngày kết thúc"><input type="date" className={inputClass} min={form.startDate} value={form.endDate} onChange={(event) => setForm({ ...form, endDate: event.target.value })} /></Field>
              <Field label="Trạng thái"><select className={inputClass} value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })}>{STATUSES.map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></Field>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold text-slate-600">Hạng mục cần quyên góp</p>
              <div className="space-y-2">
                {form.targets.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <select className={inputClass} value={item.category} onChange={(event) => setTarget(index, { category: event.target.value })}>{CATEGORIES.map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select>
                    <input type="number" min="1" className={`${inputClass} !w-28`} value={item.targetQuantity} onChange={(event) => setTarget(index, { targetQuantity: event.target.value })} />
                    <button type="button" disabled={form.targets.length === 1} onClick={() => setForm({ ...form, targets: form.targets.filter((_, i) => i !== index) })} className="rounded p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600 disabled:opacity-30"><Trash2 size={15} /></button>
                  </div>
                ))}
              </div>
              <GhostButton className="mt-2" onClick={() => setForm({ ...form, targets: [...form.targets, { category: CATEGORIES.find(([key]) => !form.targets.some((row) => row.category === key))?.[0] || "BOOKS", targetQuantity: 10 }] })}><Plus size={13} />Thêm hạng mục</GhostButton>
            </div>
          </div>
        </Modal>
      ) : null}

      {adding ? (
        <Modal title="Thêm hạng mục cần quyên góp" subtitle={adding.title} onClose={() => setAdding(null)}
          footer={<><GhostButton onClick={() => setAdding(null)}>Hủy</GhostButton><PrimaryButton pending={pending === "target"} onClick={addTarget}>Thêm hạng mục</PrimaryButton></>}>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Hạng mục"><select className={inputClass} value={extra.category} onChange={(event) => setExtra({ ...extra, category: event.target.value })}>{CATEGORIES.map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></Field>
            <Field label="Số lượng mục tiêu"><input type="number" min="1" className={inputClass} value={extra.targetQuantity} onChange={(event) => setExtra({ ...extra, targetQuantity: event.target.value })} /></Field>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
