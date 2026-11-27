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
  const [destinationType, setDestinationType] = useState("requisition");
  const [requisition, setRequisition] = useState(null);
  const [campaign, setCampaign] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const volunteers = useVolunteerUsers();
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [picked, setPicked] = useState([]);
  const [recipient, setRecipient] = useState({ name: "", phone: "", note: "" });
  const [volunteerIds, setVolunteerIds] = useState([]);
  const [pending, setPending] = useState(false);
  const { notice, ok, fail } = useNotice();

  const load = useCallback(async () => {
    if (destinationType === "campaign" && !campaign) {
      setItems([]);
      setPicked([]);
      return;
    }
    try {
      const campaignParams = destinationType === "campaign" ? { campaignId: campaign.id } : {};
      const [ready, uninspected] = await Promise.all([
        api.get("/items", { params: { status: "READY_FOR_ALLOCATION", limit: 100, ...campaignParams } }),
        api.get("/items", { params: { status: "PENDING_INTAKE", limit: 100, ...campaignParams } }),
      ]);
      setItems([...rowsOf(ready.data), ...rowsOf(uninspected.data)]);
      setPicked((current) => current.filter((id) => rowsOf(ready.data).some((item) => item.id === id)));
    } catch (error) {
      fail(apiError(error, "Không tải được hiện vật sẵn sàng."));
    }
  }, [campaign, destinationType]);

  const loadCampaigns = useCallback(async () => {
    try {
      const response = await api.get("/campaigns", { params: { limit: 100 } });
      setCampaigns(rowsOf(response.data).filter((row) => row.beneficiarySchool && row.targets?.length && row.targets.every((item) => item.currentReceivedQuantity >= item.targetQuantity)));
    } catch (error) {
      fail(apiError(error, "Không tải được chiến dịch đã đủ vật tư."));
    }
  }, []);

  useEffect(() => {
    load();
    loadCampaigns();
    const refresh = () => {
      load();
      loadCampaigns();
    };
    window.addEventListener("portal:refresh", refresh);
    return () => window.removeEventListener("portal:refresh", refresh);
  }, [load, loadCampaigns]);

  const visible = useMemo(() => items.filter((item) => {
    const term = search.trim().toLowerCase();
    return !term || `${item.qrCode} ${item.name}`.toLowerCase().includes(term);
  }), [items, search]);
  const selectable = visible.filter((item) => item.status === "READY_FOR_ALLOCATION");
  const chosen = items.filter((item) => picked.includes(item.id) && item.status === "READY_FOR_ALLOCATION");
  const byCategory = chosen.reduce((groups, item) => ({ ...groups, [item.category]: (groups[item.category] || 0) + 1 }), {});

  const toggle = (id) => setPicked((current) => (current.includes(id) ? current.filter((value) => value !== id) : [...current, id]));

  async function submit(event) {
    event.preventDefault();
    if (!home) {
      fail("Chưa xác định được kho xuất.");
      return;
    }
    if (destinationType === "requisition" && !requisition) {
      fail("Chọn yêu cầu đã được Admin duyệt trước khi xuất kho.");
      return;
    }
    if (destinationType === "campaign" && !campaign) {
      fail("Chọn chiến dịch đã đủ mục tiêu và có trường thụ hưởng.");
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
      const school = destinationType === "campaign" ? campaign.beneficiarySchool : requisition.school;
      const created = await api.post("/transfers", {
        sourceWarehouseId: home.id,
        ...(destinationType === "campaign" ? { campaignId: campaign.id } : { requisitionId: requisition.id }),
        deliveryAddress: schoolAddress({ school }) || undefined,
        resourceItemIds: picked,
        recipientName: recipient.name.trim(),
        recipientPhone: recipient.phone.trim(),
        recipientNote: recipient.note.trim() || undefined,
        volunteerIds,
      });
      if (destinationType === "campaign") {
        ok(`Đã gửi lệnh ${created.data.code} của chiến dịch "${campaign.title}" chờ Admin duyệt.`);
      } else {
        await api.patch(`/transfers/${created.data.id}/dispatch`);
        ok(`Đã xuất ${picked.length} hiện vật. Lệnh ${created.data.code} đang vận chuyển tới ${orgName(requisition.school)}.`);
      }
      setPicked([]);
      setRequisition(null);
      setCampaign(null);
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
      <PageHead eyebrow="Điều phối & vận chuyển" title="Tạo lệnh điều chuyển" subtitle="Chọn nguồn hàng, trường nhận và các hiện vật đã đạt kiểm định. Lệnh phân phối chiến dịch cần Admin duyệt trước khi xuất kho." />
      <Notice notice={notice} />
      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <div className="space-y-5">
          <Card title="1. Tuyến điều chuyển">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <div className="flex-1 rounded-lg bg-slate-50 p-3"><p className="text-[10px] font-semibold uppercase text-slate-500">Kho xuất</p><p className="font-semibold">{home?.name || "Đang tải..."}</p><p className="text-[11px] text-slate-500">Kho xuất duy nhất của hệ thống</p></div>
              <ArrowRight className="text-blue-600" />
              <div className="flex-1 rounded-lg bg-blue-50 p-3">
                <p className="text-[10px] font-semibold uppercase text-blue-700">Điểm nhận</p>
                <p className="font-semibold">{requisition ? orgName(requisition.school) : campaign ? orgName(campaign.beneficiarySchool) : "Trường học"}</p>
                <p className="text-[11px] text-slate-500">{requisition ? schoolAddress(requisition) || "Chưa có địa chỉ" : campaign ? schoolAddress({ school: campaign.beneficiarySchool }) || "Chưa có địa chỉ" : "Chọn nơi giao ở mục 2 bên dưới"}</p>
              </div>
            </div>
          </Card>
          <Card title="2. Người nhận & tình nguyện viên">
            <Field label="Nguồn phân phối">
              <select className={inputClass} value={destinationType} onChange={(event) => {
                setDestinationType(event.target.value);
                setPicked([]);
              }}>
                <option value="requisition">Yêu cầu hỗ trợ đã được duyệt</option>
                <option value="campaign">Chiến dịch đã đủ mục tiêu</option>
              </select>
            </Field>
            {destinationType === "requisition" ? (
              <div className="mt-4">
                <DestinationPicker value={requisition} onChange={(row) => {
                  setRequisition(row);
                  setRecipient((current) => ({ ...current, name: current.name || row.school?.fullName || "", phone: current.phone || row.school?.phone || "" }));
                }} />
              </div>
            ) : (
              <div className="mt-4">
                <Field label="Chiến dịch và trường thụ hưởng">
                  <select className={inputClass} value={campaign?.id || ""} onChange={(event) => {
                    const selected = campaigns.find((row) => row.id === event.target.value) || null;
                    setCampaign(selected);
                    setItems([]);
                    setPicked([]);
                    if (selected) {
                      setRecipient((current) => ({ ...current, name: current.name || selected.beneficiarySchool?.fullName || "", phone: current.phone || selected.beneficiarySchool?.phone || "" }));
                    }
                  }}>
                    <option value="">Chọn chiến dịch...</option>
                    {campaigns.map((row) => <option key={row.id} value={row.id}>{row.title} · {orgName(row.beneficiarySchool)}</option>)}
                  </select>
                </Field>
                {!campaigns.length ? <p className="mt-2 text-xs text-amber-700">Chưa có chiến dịch đủ mục tiêu hoặc chưa được gán trường thụ hưởng.</p> : null}
                {campaign ? <p className="mt-2 text-xs text-blue-700">Lệnh này sẽ chờ Admin duyệt trước khi Kho xuất hàng.</p> : null}
              </div>
            )}
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
                  <input type="checkbox" disabled={!selectable.length} checked={selectable.length > 0 && selectable.every((item) => picked.includes(item.id))} onChange={(event) => setPicked(event.target.checked ? [...new Set([...picked, ...selectable.map((item) => item.id)])] : picked.filter((id) => !selectable.some((item) => item.id === id)))} />Chọn tất cả {selectable.length} món đã kiểm định đang hiển thị
                </label>
                {visible.map((item) => {
                  const uninspected = item.status !== "READY_FOR_ALLOCATION";
                  return (
                    <label key={item.id} className={`flex items-center gap-3 rounded-lg border px-3 py-2 text-sm ${uninspected ? "cursor-not-allowed border-amber-200 bg-amber-50/60 text-slate-500" : `cursor-pointer ${picked.includes(item.id) ? "border-blue-300 bg-blue-50/50" : "border-slate-100"}`}`}>
                      <input type="checkbox" disabled={uninspected} checked={!uninspected && picked.includes(item.id)} onChange={() => toggle(item.id)} />
                      <span className="font-mono text-xs font-semibold text-blue-700">{item.qrCode}</span>
                      <span className="flex-1 truncate">{item.name}</span>
                      {uninspected
                        ? <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-700">Chưa kiểm định · không được xuất kho</span>
                        : <span className="text-xs text-slate-500">{GRADE_LABEL[item.grade]} · {item.binLocation || "chưa gắn kệ"}</span>}
                    </label>
                  );
                })}
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
        <p className="text-xs text-slate-500">{destinationType === "campaign" ? "Lệnh chiến dịch sẽ chờ Admin duyệt trước khi xuất kho." : "Sau khi xác nhận, hiện vật rời kho và lệnh chuyển sang Đang vận chuyển."}</p>
        <PrimaryButton type="submit" pending={pending} disabled={!chosen.length || (destinationType === "requisition" ? !requisition : !campaign)}>{destinationType === "campaign" ? "Gửi Admin duyệt" : "Xuất điều chuyển ngay"}</PrimaryButton>
      </SubmitBar>
    </form>
  );
}
