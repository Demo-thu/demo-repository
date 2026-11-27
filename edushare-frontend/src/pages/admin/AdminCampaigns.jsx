import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pencil, Plus, Trash2 } from "lucide-react";
import api, { apiError } from "../../lib/api";
import DeliveryEvidence from "../portals/DeliveryEvidence";
import {
  CATEGORIES, CATEGORY_LABEL, Card, Chips, Empty, Field, GhostButton, Modal, Notice, PageHead, PrimaryButton, Progress, SearchBox, Stat,
  StatusBadge, fmtDate, fmtDateTime, inputClass, orgName, rowsOf, totalOf, useNotice, usePortalRefresh,
} from "../portals/kit";

const STATUSES = [["ACTIVE", "Đang diễn ra"], ["UPCOMING", "Sắp mở"], ["PAUSED", "Tạm dừng"], ["COMPLETED", "Đã hoàn thành"]];
const today = () => new Date().toISOString().slice(0, 10);
const plusDays = (days) => new Date(Date.now() + days * 86400000).toISOString().slice(0, 10);
const dateInputValue = (value) => new Date(value).toISOString().slice(0, 10);
const slugify = (text) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 50);
const blank = () => ({ title: "", description: "", bannerUrl: "", beneficiarySchoolId: "", startDate: today(), endDate: plusDays(90), status: "ACTIVE", targets: [{ category: "IT_DEVICES", targetQuantity: 10 }] });

export default function AdminCampaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [schools, setSchools] = useState([]);
  const [pendingTransfers, setPendingTransfers] = useState([]);
  const [campaignTransfers, setCampaignTransfers] = useState([]);
  const [transferEvidence, setTransferEvidence] = useState(null);
  const [transferEvidenceLoading, setTransferEvidenceLoading] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(blank);
  const [adding, setAdding] = useState(null);
  const [extra, setExtra] = useState({ category: "BOOKS", targetQuantity: 10 });
  const [pending, setPending] = useState("");
  const { notice, ok, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const [response, schoolResponse] = await Promise.all([
        api.get("/campaigns", { params: { limit: 100 } }),
        api.get("/users", { params: { role: "SCHOOL_REP", limit: 100 } }),
      ]);
      const transfers = [];
      let page = 1;
      let total = 0;
      do {
        const transferResponse = await api.get("/transfers", { params: { campaignOnly: true, limit: 100, page } });
        const pageRows = rowsOf(transferResponse.data);
        transfers.push(...pageRows);
        total = totalOf(transferResponse.data);
        page += 1;
        if (!pageRows.length) break;
      } while (transfers.length < total);
      setCampaigns(rowsOf(response.data));
      setSchools(rowsOf(schoolResponse.data).filter((school) => school.status === "ACTIVE"));
      setCampaignTransfers(transfers);
      setPendingTransfers(transfers.filter((transfer) => transfer.status === "PENDING_APPROVAL"));
    } catch (error) {
      fail(apiError(error, "Không tải được chiến dịch, trường thụ hưởng hoặc lệnh chờ duyệt."));
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

  function openCreate() {
    setEditing(null);
    setForm(blank());
    setCreating(true);
  }

  function openEdit(row) {
    setEditing(row);
    setForm({
      ...blank(),
      title: row.title,
      description: row.description,
      bannerUrl: row.bannerUrl || "",
      beneficiarySchoolId: row.beneficiarySchoolId || "",
      startDate: dateInputValue(row.startDate),
      endDate: dateInputValue(row.endDate),
      status: row.status,
    });
    setCreating(true);
  }

  function closeForm() {
    setCreating(false);
    setEditing(null);
    setForm(blank());
  }

  async function saveCampaign() {
    const body = {
      title: form.title.trim(),
      description: form.description.trim(),
      bannerUrl: form.bannerUrl.trim() || (editing ? null : undefined),
      beneficiarySchoolId: form.beneficiarySchoolId,
      startDate: new Date(`${form.startDate}T00:00:00`).toISOString(),
      endDate: new Date(`${form.endDate}T23:59:59`).toISOString(),
    };
    setPending("create");
    try {
      if (editing) {
        await api.patch(`/campaigns/${editing.id}`, body);
        ok("Đã cập nhật chiến dịch.");
      } else {
        await api.post("/campaigns", {
          ...body,
          slug: `${slugify(form.title) || "chien-dich"}-${Date.now().toString(36)}`,
          status: form.status,
          targets: form.targets.map((row) => ({ category: row.category, targetQuantity: Math.max(1, Number(row.targetQuantity) || 1) })),
        });
        ok("Đã tạo chiến dịch và các hạng mục cần quyên góp. Nhà hảo tâm sẽ thấy ngay trong cổng của họ.");
      }
      closeForm();
      await load();
    } catch (error) {
      fail(apiError(error, editing ? "Không cập nhật được chiến dịch." : "Không tạo được chiến dịch."));
    } finally {
      setPending("");
    }
  }

  function removeDraftTarget(index) {
    if (form.targets.length === 1) {
      fail("Chiến dịch phải có ít nhất một mục tiêu; không thể xóa mục tiêu mặc định cuối cùng.");
      return;
    }
    setForm((current) => ({ ...current, targets: current.targets.filter((_, i) => i !== index) }));
  }

  async function deleteTarget(row, targetRow) {
    if (!window.confirm(`Xóa mục tiêu "${CATEGORY_LABEL[targetRow.category] || targetRow.category}" khỏi chiến dịch này?`)) return;
    setPending(`target-${targetRow.id}`);
    try {
      await api.delete(`/campaigns/${row.id}/targets/${targetRow.id}`);
      ok("Đã xóa mục tiêu của chiến dịch.");
      await load();
    } catch (error) {
      fail(apiError(error, "Không xóa được mục tiêu."));
    } finally {
      setPending("");
    }
  }

  async function deleteCampaign(row) {
    if (!window.confirm(`Bạn có chắc muốn xóa chiến dịch "${row.title}"?`)) return;
    setPending(`campaign-${row.id}`);
    try {
      await api.delete(`/campaigns/${row.id}`);
      ok("Đã xóa chiến dịch.");
      await load();
    } catch (error) {
      fail(apiError(error, "Không xóa được chiến dịch."));
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

  async function approveCampaignTransfer(transfer) {
    setPending(`transfer-${transfer.id}`);
    try {
      await api.patch(`/transfers/${transfer.id}/approve`);
      ok(`Đã duyệt lệnh ${transfer.code}. Kho có thể xuất hàng.`);
      await load();
    } catch (error) {
      fail(apiError(error, "Không duyệt được lệnh điều chuyển."));
    } finally {
      setPending("");
    }
  }

  async function viewTransferEvidence(transfer) {
    setTransferEvidenceLoading(transfer.id);
    try {
      const response = await api.get(`/transfers/${transfer.id}`);
      setTransferEvidence(response.data);
    } catch (error) {
      fail(apiError(error, "Không tải được chữ ký và ảnh bàn giao."));
    } finally {
      setTransferEvidenceLoading("");
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

  const formValid = form.title.trim().length >= 3 && form.description.trim().length >= 10 && Boolean(form.beneficiarySchoolId) && (editing || form.targets.length > 0) && form.endDate >= form.startDate;

  return (
    <div className="mx-auto max-w-[1400px] p-4 md:p-6">
      <PageHead
        eyebrow="Trung tâm điều hành · Admin"
        title="Chiến dịch & hạng mục cần quyên góp"
        subtitle="Admin tạo đợt vận động và khai báo các hạng mục cần quyên góp. Tài khoản nhà hảo tâm không tạo từ trang này."
        actions={<PrimaryButton onClick={openCreate}><Plus size={15} />Tạo chiến dịch</PrimaryButton>}
      />
      <Notice notice={notice} />
      {pendingTransfers.length ? (
        <Card title="Lệnh phân phối chiến dịch chờ duyệt">
          <div className="space-y-2">
            {pendingTransfers.map((transfer) => (
              <div key={transfer.id} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-amber-200 bg-amber-50/50 p-3">
                <div className="text-sm">
                  <p className="font-semibold">{transfer.code} · {transfer.campaign?.title}</p>
                  <p className="text-xs text-slate-600">{orgName(transfer.targetSchool)} · {transfer.itemsCount} hiện vật · {transfer.recipientName}</p>
                  <p className="mt-1 text-xs text-slate-500">{(transfer.items || []).map((item) => item.qrCode).join(", ")}</p>
                </div>
                <PrimaryButton pending={pending === `transfer-${transfer.id}`} onClick={() => approveCampaignTransfer(transfer)}>Duyệt lệnh</PrimaryButton>
              </div>
            ))}
          </div>
        </Card>
      ) : null}
      <Card title="Tra cứu lệnh phân phối chiến dịch" hint="Mở biên nhận để xem chữ ký và ảnh sau khi trường hoàn tất ký nhận.">
        {campaignTransfers.length ? (
          <div className="max-h-80 space-y-2 overflow-y-auto">
            {campaignTransfers.map((transfer) => (
              <div key={transfer.id} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 p-3">
                <div className="text-sm">
                  <p className="font-semibold">{transfer.code} · {transfer.campaign?.title}</p>
                  <p className="text-xs text-slate-600">{orgName(transfer.targetSchool)} · {transfer.itemsCount} hiện vật · {fmtDateTime(transfer.receivedAt || transfer.dispatchedAt || transfer.createdAt)}</p>
                  <StatusBadge kind="transfer" value={transfer.status} />
                </div>
                <GhostButton
                  disabled={transferEvidenceLoading === transfer.id}
                  onClick={() => viewTransferEvidence(transfer)}
                >
                  {transferEvidenceLoading === transfer.id ? "Đang tải..." : "Xem chữ ký và ảnh"}
                </GhostButton>
              </div>
            ))}
          </div>
        ) : <Empty>Chưa có lệnh phân phối chiến dịch nào.</Empty>}
      </Card>
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
                <p className="mt-1 text-xs text-blue-700">Trường thụ hưởng: {orgName(row.beneficiarySchool)}</p>
              </div>
              <StatusBadge kind="campaign" value={row.status} />
            </div>
            {row.bannerUrl ? <img src={row.bannerUrl} alt={`Ảnh chiến dịch ${row.title}`} className="mt-3 h-36 w-full rounded-lg object-cover" /> : null}
            <p className="mt-2 text-xs text-slate-500">{fmtDate(row.startDate)} - {fmtDate(row.endDate)} · {row._count?.pledges ?? 0} phiếu trao tặng</p>
            <div className="mt-3 space-y-2">
              {(row.targets || []).map((item) => (
                <div key={item.id || item.category}>
                  <div className="mb-1 flex items-center justify-between gap-2 text-xs">
                    <span className="font-semibold">{CATEGORY_LABEL[item.category] || item.category}</span>
                    <span className="ml-auto">{item.currentReceivedQuantity ?? 0}/{item.targetQuantity}</span>
                    {item.id ? <button type="button" disabled={pending === `target-${item.id}`} onClick={() => deleteTarget(row, item)} aria-label={`Xóa mục tiêu ${CATEGORY_LABEL[item.category] || item.category}`} className="rounded p-1 text-slate-400 hover:bg-rose-50 hover:text-rose-600 disabled:opacity-40"><Trash2 size={13} /></button> : null}
                  </div>
                  <Progress value={item.receivedRate ?? Math.round(((item.currentReceivedQuantity || 0) / item.targetQuantity) * 100)} />
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <select className={`${inputClass} !w-auto !py-1.5 !text-xs`} value={row.status} onChange={(event) => changeStatus(row, event.target.value)}>
                {STATUSES.map(([key, label]) => <option key={key} value={key}>{label}</option>)}
              </select>
              <GhostButton onClick={() => openEdit(row)}><Pencil size={13} />Chỉnh sửa</GhostButton>
              <GhostButton onClick={() => setAdding(row)}><Plus size={13} />Thêm hạng mục</GhostButton>
              <GhostButton disabled={pending === `campaign-${row.id}`} onClick={() => deleteCampaign(row)}><Trash2 size={13} />Xóa</GhostButton>
              <Link to="/tracking" className="ml-auto text-xs font-semibold text-blue-700 hover:underline">Tra cứu hành trình</Link>
            </div>
          </Card>
        ))}
      </div>

      {creating ? (
        <Modal wide title={editing ? "Chỉnh sửa chiến dịch" : "Tạo chiến dịch mới"} subtitle={editing ? "Cập nhật thông tin chiến dịch và đường dẫn ảnh." : "Khai báo đợt vận động và các hạng mục cần quyên góp."} onClose={closeForm}
          footer={<><GhostButton onClick={closeForm}>Hủy</GhostButton><PrimaryButton pending={pending === "create"} disabled={!formValid} onClick={saveCampaign}>{editing ? "Lưu thay đổi" : "Tạo chiến dịch"}</PrimaryButton></>}>
          <div className="space-y-4">
            <Field label="Tên chiến dịch"><input className={inputClass} value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} placeholder="Ví dụ: Chắp cánh ước mơ tin học 2026" /></Field>
            <Field label="Mô tả (ít nhất 10 ký tự)"><textarea rows={3} className={inputClass} value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} placeholder="Điểm trường, mục đích và đối tượng thụ hưởng..." /></Field>
            <Field label="Đường dẫn ảnh chiến dịch (URL, không bắt buộc)"><input type="url" maxLength={400} className={inputClass} value={form.bannerUrl} onChange={(event) => setForm({ ...form, bannerUrl: event.target.value })} placeholder="https://example.com/anh-chien-dich.jpg" /></Field>
            {form.bannerUrl.trim() ? <img src={form.bannerUrl} alt="Xem trước ảnh chiến dịch" className="h-40 w-full rounded-lg object-cover" /> : null}
            <Field label="Trường thụ hưởng"><select className={inputClass} value={form.beneficiarySchoolId} onChange={(event) => setForm({ ...form, beneficiarySchoolId: event.target.value })}><option value="">Chọn trường thụ hưởng...</option>{schools.map((school) => <option key={school.id} value={school.id}>{orgName(school)}{school.profile?.city ? ` · ${school.profile.city}` : ""}</option>)}</select></Field>
            <div className="grid gap-3 sm:grid-cols-3">
              <Field label="Ngày bắt đầu"><input type="date" className={inputClass} value={form.startDate} onChange={(event) => setForm({ ...form, startDate: event.target.value })} /></Field>
              <Field label="Ngày kết thúc"><input type="date" className={inputClass} min={form.startDate} value={form.endDate} onChange={(event) => setForm({ ...form, endDate: event.target.value })} /></Field>
              {!editing ? <Field label="Trạng thái"><select className={inputClass} value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })}>{STATUSES.map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></Field> : null}
            </div>
            {!editing ? <div>
              <p className="mb-2 text-xs font-semibold text-slate-600">Hạng mục cần quyên góp</p>
              <div className="space-y-2">
                {form.targets.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <select className={inputClass} value={item.category} onChange={(event) => setTarget(index, { category: event.target.value })}>{CATEGORIES.map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select>
                    <input type="number" min="1" className={`${inputClass} !w-28`} value={item.targetQuantity} onChange={(event) => setTarget(index, { targetQuantity: event.target.value })} />
                    <button type="button" onClick={() => removeDraftTarget(index)} aria-label="Xóa mục tiêu" className="rounded p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600"><Trash2 size={15} /></button>
                  </div>
                ))}
              </div>
              <GhostButton className="mt-2" onClick={() => setForm({ ...form, targets: [...form.targets, { category: CATEGORIES.find(([key]) => !form.targets.some((row) => row.category === key))?.[0] || "BOOKS", targetQuantity: 10 }] })}><Plus size={13} />Thêm hạng mục</GhostButton>
            </div> : null}
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

      {transferEvidence ? (
        <Modal
          wide
          title={`Biên nhận điều chuyển · ${transferEvidence.code}`}
          subtitle={`${transferEvidence.campaign?.title || ""} · ${orgName(transferEvidence.targetSchool)}`}
          onClose={() => setTransferEvidence(null)}
          footer={<GhostButton onClick={() => setTransferEvidence(null)}>Đóng</GhostButton>}
        >
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <p className="text-sm"><span className="text-slate-500">Trạng thái:</span> <StatusBadge kind="transfer" value={transferEvidence.status} /></p>
              <p className="text-sm"><span className="text-slate-500">Hoàn tất lúc:</span> {fmtDateTime(transferEvidence.receivedAt)}</p>
            </div>
            <DeliveryEvidence proof={transferEvidence.proof} showVolunteer={false} />
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
