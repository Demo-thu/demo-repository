import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import api, { apiError } from "@/lib/api";
import {
  CATEGORY_LABEL, Card, Empty, Field, GRADE_LABEL, GhostButton, Notice, PageHead, PrimaryButton, SearchBox, SubmitBar,
  exportDonorWorkbook, inputClass, orgName, rowsOf, useNotice,
} from "@/pages/portals/kit";
import { DestinationPicker, VolunteerPicker, schoolAddress, useVolunteerUsers, useWarehouses } from "./common";

export default function DispatchScreen({ openTab }) {
  const { home } = useWarehouses();
  const [requisition, setRequisition] = useState(null);
  const volunteers = useVolunteerUsers();
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [picked, setPicked] = useState([]);
  const [recipient, setRecipient] = useState({ name: "", phone: "", note: "" });
  const [volunteerIds, setVolunteerIds] = useState([]);
  const [pending, setPending] = useState(false);
  const { notice, ok, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const response = await api.get("/items", { params: { status: "READY_FOR_ALLOCATION", limit: 100 } });
      setItems(rowsOf(response.data));
    } catch (error) {
      fail(apiError(error, "Không tải được hiện vật sẵn sàng."));
    }
  }, []);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  const visible = useMemo(() => items.filter((item) => {
    const term = search.trim().toLowerCase();
    return !term || `${item.qrCode} ${item.name}`.toLowerCase().includes(term);
  }), [items, search]);
  const chosen = items.filter((item) => picked.includes(item.id));
  const byCategory = chosen.reduce((groups, item) => ({ ...groups, [item.category]: (groups[item.category] || 0) + 1 }), {});

  const toggle = (id) => setPicked((current) => (current.includes(id) ? current.filter((value) => value !== id) : [...current, id]));

  async function submit(event) {
    event.preventDefault();
    if (!home) {
      fail("Chưa xác định được kho xuất.");
      return;
    }
    if (!requisition) {
      fail("Chọn địa chỉ nơi cần giao đến (trường đã đề xuất) trước khi xuất kho.");
      return;
    }
    if (!chosen.length) {
      fail("Chọn ít nhất một hiện vật để điều chuyển.");
      return;
    }
    if (!volunteerIds.length) {
      fail("Cần chọn ít nhất một tình nguyện viên phụ trách chuyến.");
      return;
    }
    setPending(true);
    try {
      const created = await api.post("/transfers", {
        sourceWarehouseId: home.id,
        requisitionId: requisition.id,
        deliveryAddress: schoolAddress(requisition) || undefined,
        resourceItemIds: picked,
        recipientName: recipient.name.trim(),
        recipientPhone: recipient.phone.trim(),
        recipientNote: recipient.note.trim() || undefined,
        volunteerIds,
      });
      await api.patch(`/transfers/${created.data.id}/dispatch`);
      ok(`Đã xuất ${picked.length} hiện vật. Lệnh ${created.data.code} đang vận chuyển tới ${orgName(requisition.school)}.`);
      setPicked([]);
      setRequisition(null);
      setRecipient({ name: "", phone: "", note: "" });
      await load();
      openTab("status");
    } catch (error) {
      fail(apiError(error, "Không điều chuyển được."));
    } finally {
      setPending(false);
    }
  }

  async function exportManifest() {
    try {
      const names = volunteers.filter((row) => volunteerIds.includes(row.id)).map((row) => row.fullName).join(", ");
      await exportDonorWorkbook(chosen, `xuat-kho-theo-nha-hao-tam-${new Date().toISOString().slice(0, 10)}.xlsx`, { recipient: [recipient.name, recipient.phone].filter(Boolean).join(" · "), volunteers: names });
      ok("Đã xuất file Excel theo từng nhà hảo tâm.");
    } catch (error) {
      fail(apiError(error, "Không xuất được file Excel."));
    }
  }

  return (
    <form onSubmit={submit}>
      <PageHead eyebrow="Điều phối & vận chuyển" title="Tạo lệnh điều chuyển" subtitle="Chọn hiện vật đã đạt kiểm định, chọn trường và địa chỉ cần giao, ghi người nhận và tình nguyện viên. Sau khi xuất, lệnh chuyển sang “Đang vận chuyển”." />
      <Notice notice={notice} />
      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <div className="space-y-5">
          <Card title="1. Tuyến điều chuyển">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <div className="flex-1 rounded-lg bg-slate-50 p-3"><p className="text-[10px] font-semibold uppercase text-slate-500">Kho xuất</p><p className="font-semibold">{home?.name || "Đang tải..."}</p><p className="text-[11px] text-slate-500">Kho xuất duy nhất của hệ thống</p></div>
              <ArrowRight className="text-blue-600" />
              <div className="flex-1 rounded-lg bg-blue-50 p-3">
                <p className="text-[10px] font-semibold uppercase text-blue-700">Điểm nhận</p>
                <p className="font-semibold">{requisition ? orgName(requisition.school) : "Trường học"}</p>
                <p className="text-[11px] text-slate-500">{requisition ? schoolAddress(requisition) || "Chưa có địa chỉ" : "Chọn nơi giao ở mục 2 bên dưới"}</p>
              </div>
            </div>
          </Card>
          <Card title="2. Người nhận & tình nguyện viên">
            <div className="mb-4">
              <DestinationPicker value={requisition} onChange={(row) => {
                setRequisition(row);
                setRecipient((current) => ({ ...current, name: current.name || row.school?.fullName || "", phone: current.phone || row.school?.phone || "" }));
              }} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Người nhận hàng"><input required minLength={2} className={inputClass} value={recipient.name} onChange={(event) => setRecipient({ ...recipient, name: event.target.value })} /></Field>
              <Field label="Số điện thoại"><input required minLength={8} maxLength={20} className={inputClass} value={recipient.phone} onChange={(event) => setRecipient({ ...recipient, phone: event.target.value })} /></Field>
            </div>
            <div className="mt-4"><Field label="Ghi chú"><input maxLength={240} className={inputClass} value={recipient.note} onChange={(event) => setRecipient({ ...recipient, note: event.target.value })} /></Field></div>
            <div className="mt-4"><VolunteerPicker volunteers={volunteers} value={volunteerIds} onChange={setVolunteerIds} /></div>
          </Card>
          <Card title="3. Chọn hiện vật" actions={<SearchBox value={search} onChange={setSearch} placeholder="Tìm mã QR, tên..." />}>
            {visible.length ? (
              <div className="max-h-96 space-y-1 overflow-y-auto pr-1">
                <label className="flex items-center gap-2 rounded bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">
                  <input type="checkbox" checked={visible.every((item) => picked.includes(item.id))} onChange={(event) => setPicked(event.target.checked ? [...new Set([...picked, ...visible.map((item) => item.id)])] : picked.filter((id) => !visible.some((item) => item.id === id)))} />Chọn tất cả {visible.length} món đang hiển thị
                </label>
                {visible.map((item) => (
                  <label key={item.id} className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 text-sm ${picked.includes(item.id) ? "border-blue-300 bg-blue-50/50" : "border-slate-100"}`}>
                    <input type="checkbox" checked={picked.includes(item.id)} onChange={() => toggle(item.id)} />
                    <span className="font-mono text-xs font-semibold text-blue-700">{item.qrCode}</span>
                    <span className="flex-1 truncate">{item.name}</span>
                    <span className="text-xs text-slate-500">{GRADE_LABEL[item.grade]} · {item.binLocation || "chưa gắn kệ"}</span>
                  </label>
                ))}
              </div>
            ) : <Empty>Không có hiện vật nào sẵn sàng. Hãy kiểm định hiện vật đạt chuẩn trước.</Empty>}
          </Card>
        </div>
        <aside>
          <Card title="Tóm tắt lệnh">
            <p className="font-display text-3xl font-semibold text-blue-700">{chosen.length}</p>
            <p className="mb-3 text-xs text-slate-500">hiện vật được chọn</p>
            <ul className="mb-4 space-y-1 text-sm text-slate-700">{Object.entries(byCategory).map(([category, count]) => <li key={category} className="flex justify-between"><span>{CATEGORY_LABEL[category]}</span><b>{count}</b></li>)}</ul>
            <GhostButton className="w-full" onClick={exportManifest} disabled={!chosen.length}><Download size={13} />Xuất Excel theo nhà hảo tâm</GhostButton>
          </Card>
        </aside>
      </div>
      <SubmitBar>
        <p className="text-xs text-slate-500">Sau khi xác nhận, hiện vật rời kho và lệnh chuyển sang "Đang vận chuyển".</p>
        <PrimaryButton type="submit" pending={pending} disabled={!chosen.length || !requisition}>Xuất điều chuyển ngay</PrimaryButton>
      </SubmitBar>
    </form>
  );
}
