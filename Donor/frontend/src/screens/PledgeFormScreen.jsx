import { useEffect, useMemo, useState } from "react";
import { Building2, Plus, Truck, Trash2 } from "lucide-react";
import api, { apiError, currentUser } from "@/lib/api";
import {
  CATEGORIES, CATEGORY_LABEL, CATEGORY_UNIT, Card, Field, GhostButton, Notice, PageHead, PhotoPicker, PrimaryButton, SubmitBar,
  inputClass, rowsOf, useNotice,
} from "@/pages/portals/kit";

const CONDITIONS = ["Mới 100%", "Đã dùng - hoạt động tốt", "Cần sửa chữa nhẹ"];

function emptyLine() {
  return { category: "IT_DEVICES", name: "", quantity: 1, condition: CONDITIONS[1], photos: [] };
}

export default function PledgeFormScreen({ params, openTab }) {
  const user = currentUser();
  const draftKey = `edushare_pledge_draft_${user?.id}`;
  const [campaigns, setCampaigns] = useState([]);
  const [form, setForm] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(draftKey) || "null");
      if (saved) return saved;
    } catch {
      /* bản nháp hỏng thì bỏ qua */
    }
    return { campaignId: "", handover: "PICK_UP", contactName: user?.fullName || "", contactPhone: user?.phone || "", address: user?.profile?.address || "", date: "", time: "08:00", notes: "", lines: [emptyLine()], consent: false };
  });
  const [pending, setPending] = useState(false);
  const [savedAt, setSavedAt] = useState("");
  const { notice, ok, fail } = useNotice();

  useEffect(() => {
    api.get("/campaigns/active").then((response) => setCampaigns(rowsOf(response.data))).catch(() => setCampaigns([]));
  }, []);

  useEffect(() => {
    const campaign = params.get("campaign");
    if (campaign) setForm((current) => ({ ...current, campaignId: campaign }));
  }, [params]);

  const set = (patch) => setForm((current) => ({ ...current, ...patch }));
  const setLine = (index, patch) => setForm((current) => ({ ...current, lines: current.lines.map((line, position) => (position === index ? { ...line, ...patch } : line)) }));

  const totalQuantity = useMemo(() => form.lines.reduce((sum, line) => sum + (Number(line.quantity) || 0), 0), [form.lines]);
  const campaign = campaigns.find((row) => row.id === form.campaignId);

  function saveDraft() {
    localStorage.setItem(draftKey, JSON.stringify({ ...form, consent: false }));
    setSavedAt(new Date().toLocaleTimeString("vi-VN"));
    ok("Đã lưu bản nháp trên trình duyệt này. Phiếu chưa được gửi.");
  }

  async function submit(event) {
    event.preventDefault();
    if (!form.consent) {
      fail("Vui lòng xác nhận cam kết về nguồn gốc và tình trạng hiện vật.");
      return;
    }
    if (form.lines.some((line) => line.name.trim().length < 2 || Number(line.quantity) < 1)) {
      fail("Mỗi dòng hiện vật cần tên (từ 2 ký tự) và số lượng tối thiểu là 1.");
      return;
    }
    setPending(true);
    try {
      const scheduledAt = form.date ? new Date(`${form.date}T${form.time || "08:00"}`).toISOString() : undefined;
      const { data } = await api.post("/pledges", {
        campaignId: form.campaignId || undefined,
        handoverMethod: form.handover,
        contactName: form.contactName.trim() || undefined,
        contactPhone: form.contactPhone.trim() || undefined,
        address: form.address.trim() || undefined,
        scheduledAt,
        notes: form.notes.trim() || undefined,
        items: form.lines.map((line) => ({
          category: line.category,
          name: line.name.trim(),
          estimatedQuantity: Number(line.quantity),
          declaredCondition: line.condition,
          photoUrls: line.photos,
          unit: CATEGORY_UNIT[line.category],
        })),
      });
      localStorage.removeItem(draftKey);
      openTab("mine", { pledge: data.id });
    } catch (error) {
      fail(apiError(error, "Không tạo được phiếu trao tặng."));
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={submit}>
      <PageHead eyebrow="Phiếu trao tặng" title="Đăng ký trao tặng mới" subtitle="Khai báo hiện vật, cách bàn giao và thông tin liên hệ. Sau khi gửi, phiếu không sửa được; bạn có thể hủy trong 72 giờ khi phiếu còn chờ tiếp nhận." />
      <Notice notice={notice} />

      <div className="grid gap-5 xl:grid-cols-[1fr_320px]">
        <div className="space-y-5">
          <Card title="1. Chiến dịch & cách bàn giao">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Chiến dịch hướng tới">
                <select className={inputClass} value={form.campaignId} onChange={(event) => set({ campaignId: event.target.value })}>
                  <option value="">Trao tặng chung (không gắn chiến dịch)</option>
                  {campaigns.map((row) => <option key={row.id} value={row.id}>{row.slug} · {row.title}</option>)}
                </select>
              </Field>
              <div>
                <p className="text-xs font-semibold text-slate-600">Phương thức bàn giao</p>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  {[["PICK_UP", "Kho đến lấy tận nơi", Truck], ["DROP_OFF", "Tự mang đến kho", Building2]].map(([key, label, Icon]) => (
                    <button key={key} type="button" onClick={() => set({ handover: key })} className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-xs font-semibold ${form.handover === key ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600"}`}>
                      <Icon size={16} />{label}
                    </button>
                  ))}
                </div>
              </div>
              <Field label="Người liên hệ"><input className={inputClass} value={form.contactName} onChange={(event) => set({ contactName: event.target.value })} /></Field>
              <Field label="Số điện thoại"><input className={inputClass} value={form.contactPhone} onChange={(event) => set({ contactPhone: event.target.value })} /></Field>
              <div className="sm:col-span-2">
                <Field label={form.handover === "PICK_UP" ? "Địa chỉ lấy hàng" : "Địa chỉ/đơn vị tặng"}><input className={inputClass} value={form.address} onChange={(event) => set({ address: event.target.value })} placeholder="Số nhà, đường, phường/xã, quận/huyện" /></Field>
              </div>
              <Field label="Ngày hẹn"><input type="date" className={inputClass} value={form.date} onChange={(event) => set({ date: event.target.value })} min={new Date().toISOString().slice(0, 10)} /></Field>
              <Field label="Giờ hẹn"><input type="time" className={inputClass} value={form.time} onChange={(event) => set({ time: event.target.value })} /></Field>
              <div className="sm:col-span-2">
                <Field label="Ghi chú cho đội tiếp nhận"><textarea rows={2} className={inputClass} value={form.notes} onChange={(event) => set({ notes: event.target.value })} placeholder="Ví dụ: gọi trước 30 phút, giao tại tầng 1..." /></Field>
              </div>
            </div>
          </Card>

          <Card title="2. Danh sách hiện vật" actions={<GhostButton onClick={() => set({ lines: [...form.lines, emptyLine()] })}><Plus size={14} />Thêm dòng</GhostButton>}>
            <div className="space-y-4">
              {form.lines.map((line, index) => (
                <div key={index} className="rounded-lg border border-slate-200 p-3">
                  <div className="grid gap-3 sm:grid-cols-[170px_1fr_90px_190px]">
                    <Field label="Nhóm hiện vật">
                      <select className={inputClass} value={line.category} onChange={(event) => setLine(index, { category: event.target.value })}>
                        {CATEGORIES.map(([key, label]) => <option key={key} value={key}>{label}</option>)}
                      </select>
                    </Field>
                    <Field label="Tên / cấu hình"><input className={inputClass} value={line.name} onChange={(event) => setLine(index, { name: event.target.value })} placeholder="Ví dụ: Laptop Dell Latitude i5 8GB" /></Field>
                    <Field label={`SL (${CATEGORY_UNIT[line.category]})`}><input type="number" min="1" max="5000" className={inputClass} value={line.quantity} onChange={(event) => setLine(index, { quantity: event.target.value })} /></Field>
                    <Field label="Tình trạng khai báo">
                      <select className={inputClass} value={line.condition} onChange={(event) => setLine(index, { condition: event.target.value })}>
                        {CONDITIONS.map((item) => <option key={item}>{item}</option>)}
                      </select>
                    </Field>
                  </div>
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <PhotoPicker photos={line.photos} onChange={(photos) => setLine(index, { photos })} max={3} label="Ảnh" />
                    {form.lines.length > 1 ? <GhostButton tone="danger" onClick={() => set({ lines: form.lines.filter((_, position) => position !== index) })}><Trash2 size={13} />Xóa dòng</GhostButton> : null}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <aside className="space-y-5">
          <Card title="Tóm tắt phiếu">
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between"><dt className="text-slate-500">Chiến dịch</dt><dd className="text-right font-medium">{campaign?.slug || "Chung"}</dd></div>
              <div className="flex justify-between"><dt className="text-slate-500">Số dòng</dt><dd className="font-medium">{form.lines.length}</dd></div>
              <div className="flex justify-between"><dt className="text-slate-500">Tổng số lượng</dt><dd className="font-medium">{totalQuantity}</dd></div>
            </dl>
            <ul className="mt-3 space-y-1 border-t border-slate-100 pt-3 text-xs text-slate-600">
              {form.lines.map((line, index) => <li key={index}>• {line.quantity} {CATEGORY_UNIT[line.category]} · {line.name || CATEGORY_LABEL[line.category]}</li>)}
            </ul>
          </Card>
          <Card title="Quy định cần nhớ">
            <ul className="space-y-2 text-xs text-slate-600">
              <li>• Phiếu hủy được khi còn trạng thái "Chờ tiếp nhận" và trong 72 giờ kể từ lúc gửi.</li>
              <li>• Mỗi thiết bị nhập kho được cấp mã QR riêng để theo dõi tới tay học sinh.</li>
              <li>• Kho có quyền từ chối hiện vật không đạt kiểm định an toàn.</li>
            </ul>
          </Card>
          <label className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-600">
            <input type="checkbox" className="mt-0.5" checked={form.consent} onChange={(event) => set({ consent: event.target.checked })} />
            Tôi cam kết hiện vật có nguồn gốc rõ ràng, an toàn, đúng tình trạng đã khai báo và đồng ý để EduShare lưu hồ sơ trao tặng.
          </label>
        </aside>
      </div>

      <SubmitBar>
        <p className="text-xs text-slate-500">{savedAt ? `Đã lưu nháp lúc ${savedAt}` : "Bản nháp chỉ lưu trên trình duyệt này."}</p>
        <div className="flex gap-2">
          <GhostButton onClick={() => openTab("campaigns")}>Hủy</GhostButton>
          <GhostButton onClick={saveDraft}>Lưu bản nháp</GhostButton>
          <PrimaryButton type="submit" pending={pending}>Xác nhận & gửi phiếu</PrimaryButton>
        </div>
      </SubmitBar>
    </form>
  );
}
