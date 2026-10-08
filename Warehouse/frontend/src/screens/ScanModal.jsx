import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import api, { apiError } from "@/lib/api";
import {
  CATEGORY_LABEL, CameraScanner, Field, GRADE_LABEL, GhostButton, ItemJourney, KeyValue, Notice, PrimaryButton, StatusBadge,
  fmtDateTime, inputClass, rowsOf, useNotice,
} from "@/pages/portals/kit";
import { DestinationPicker, VolunteerPicker, schoolAddress, useVolunteerUsers, useWarehouses } from "./common";

const LEFT_WAREHOUSE = new Set(["IN_TRANSIT", "DELIVERED"]);

function Popup({ tone = "blue", title, subtitle, children, footer }) {
  const accent = tone === "emerald" ? "border-emerald-500" : tone === "slate" ? "border-slate-500" : "border-blue-600";
  return (
    <section className={`flex max-h-[78vh] flex-col overflow-hidden rounded-xl border-t-4 bg-white shadow-2xl ${accent}`}>
      <header className="border-b border-slate-100 px-5 py-3">
        <h2 className="font-display text-base font-semibold text-slate-900">{title}</h2>
        {subtitle ? <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p> : null}
      </header>
      <div className="overflow-y-auto px-5 py-4">{children}</div>
      {footer ? <footer className="border-t border-slate-100 bg-slate-50 px-5 py-3">{footer}</footer> : null}
    </section>
  );
}

/**
 * Quét QR kho mở hai popup cùng lúc:
 *  1) Popup Nhập/Xuất: đã có thông tin nhập kho thì chỉ cho XUẤT, chưa nhập kho thì chỉ cho NHẬP.
 *  2) Popup Thông tin: chi tiết món hàng (hoặc phiếu) đang quét.
 */
export default function ScanModal({ initialCode, onClose, openTab }) {
  const { home } = useWarehouses();
  const volunteers = useVolunteerUsers();
  const [requisition, setRequisition] = useState(null);
  const [code, setCode] = useState(initialCode || "");
  const [result, setResult] = useState(null);
  const [recipient, setRecipient] = useState({ name: "", phone: "", note: "" });
  const [volunteerIds, setVolunteerIds] = useState([]);
  const [pending, setPending] = useState(false);
  const [camera, setCamera] = useState(false);
  const { notice, ok, fail } = useNotice();

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const lookup = useCallback(async (raw) => {
    const term = String(raw || "").trim();
    if (!term) return;
    setResult(null);
    try {
      const { data } = await api.get(`/items/lookup/${encodeURIComponent(term)}`);
      setResult({ mode: "out", item: data });
    } catch (error) {
      if (error.response?.status !== 404) {
        fail(apiError(error, "Không đọc được mã QR."));
        return;
      }
      try {
        const { data } = await api.get("/pledges", { params: { search: term, limit: 5 } });
        const match = rowsOf(data).find((row) => row.code.toLowerCase() === term.toLowerCase());
        if (match) setResult({ mode: "in", pledge: match });
        else fail(`Không tìm thấy hiện vật hay phiếu trao tặng nào với mã "${term}".`);
      } catch (inner) {
        fail(apiError(inner, "Không tra cứu được mã."));
      }
    }
  }, []);

  useEffect(() => {
    if (initialCode) lookup(initialCode);
  }, [initialCode, lookup]);

  const onDetect = useCallback((value) => {
    setCode(value);
    setCamera(false);
    lookup(value);
  }, [lookup]);

  async function stockOut(event) {
    event.preventDefault();
    const item = result.item;
    const sourceId = item.warehouseId || home?.id;
    if (!sourceId) {
      fail("Chưa xác định được kho xuất.");
      return;
    }
    if (!requisition) {
      fail("Chọn địa chỉ nơi cần giao đến (trường đã đề xuất) trước khi xuất kho.");
      return;
    }
    if (!volunteerIds.length) {
      fail("Cần chọn ít nhất một tình nguyện viên phụ trách chuyến xuất kho.");
      return;
    }
    setPending(true);
    try {
      const created = await api.post("/transfers", {
        sourceWarehouseId: sourceId,
        requisitionId: requisition.id,
        deliveryAddress: schoolAddress(requisition) || undefined,
        resourceItemIds: [item.id],
        recipientName: recipient.name.trim(),
        recipientPhone: recipient.phone.trim(),
        recipientNote: recipient.note.trim() || undefined,
        volunteerIds,
      });
      await api.patch(`/transfers/${created.data.id}/dispatch`);
      ok(`Đã xuất ${item.qrCode}. Lệnh ${created.data.code} đang vận chuyển, theo dõi ở "Theo dõi trạng thái chuyển".`);
      setResult(null);
      setCode("");
      setRequisition(null);
      setRecipient({ name: "", phone: "", note: "" });
      setVolunteerIds([]);
      window.dispatchEvent(new CustomEvent("portal:refresh"));
    } catch (error) {
      fail(apiError(error, "Không xuất kho được."));
    } finally {
      setPending(false);
    }
  }

  const item = result?.item;
  const pledge = result?.pledge;
  const hasLeft = item ? LEFT_WAREHOUSE.has(item.status) : false;

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-slate-950/45 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="mx-auto max-w-6xl space-y-4">
        <div className="rounded-xl border-t-4 border-blue-600 bg-white p-4 shadow-2xl">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <h2 className="font-display text-lg font-semibold text-slate-900">Quét mã QR kho</h2>
              <p className="text-xs text-slate-500">Mỗi lần quét mở 2 popup: (1) Nhập / Xuất kho, (2) Thông tin hiện vật.</p>
            </div>
            <button type="button" onClick={onClose} className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label="Đóng"><X size={18} /></button>
          </div>
          <Notice notice={notice} />
          <form onSubmit={(event) => { event.preventDefault(); lookup(code); }} className="flex flex-wrap gap-2">
            <input autoFocus value={code} onChange={(event) => setCode(event.target.value)} className={`${inputClass} min-w-[220px] flex-1`} placeholder="Mã QR hiện vật (IT001...) hoặc mã phiếu (DN001)" />
            <PrimaryButton type="submit">Tra cứu</PrimaryButton>
            <GhostButton onClick={() => setCamera((value) => !value)}>{camera ? "Tắt camera" : "Camera"}</GhostButton>
          </form>
          {camera ? <div className="mt-3"><CameraScanner onDetect={onDetect} /></div> : null}
        </div>

        {result ? (
          <div className="grid items-start gap-4 lg:grid-cols-2">
            {pledge ? (
              <Popup title="Popup 1 · Nhập kho" subtitle="Phiếu chưa nhập kho nên chỉ có thao tác NHẬP." tone="blue">
                <p className="text-xs font-semibold uppercase text-blue-700">Nhập kho · phiếu trao tặng</p>
                <h3 className="font-display text-lg font-semibold">{pledge.code}</h3>
                <div className="my-2"><StatusBadge kind="pledge" value={pledge.status} /></div>
                {["VERIFIED", "PARTIALLY_RECEIVED"].includes(pledge.status)
                  ? <PrimaryButton onClick={() => openTab("receive", { pledge: pledge.id })}>Nhập kho phiếu này</PrimaryButton>
                  : pledge.status === "PENDING"
                    ? <PrimaryButton onClick={() => openTab("verify", { pledge: pledge.id })}>Xác minh phiếu trước khi nhập</PrimaryButton>
                    : <p className="text-sm text-slate-500">Phiếu ở trạng thái này không còn nhập kho được.</p>}
              </Popup>
            ) : hasLeft ? (
              <Popup title="Popup 1 · Xuất kho" subtitle="Hiện vật đã có thông tin nhập kho nên chỉ có thao tác XUẤT." tone="emerald">
                <p className="rounded bg-amber-50 px-3 py-2 text-sm text-amber-800">Hiện vật {item.qrCode} đã rời kho ({item.status === "DELIVERED" ? "đã giao" : "đang vận chuyển"}), không xuất lại được.</p>
              </Popup>
            ) : (
              <Popup title="Popup 1 · Xuất kho" subtitle="Hiện vật đã có thông tin nhập kho nên chỉ có thao tác XUẤT. Xuất xong lệnh chuyển sang Đang vận chuyển." tone="emerald">
                <form onSubmit={stockOut} className="space-y-4">
                  <DestinationPicker value={requisition} onChange={(row) => {
                    setRequisition(row);
                    setRecipient((current) => ({ ...current, name: current.name || row.school?.fullName || "", phone: current.phone || row.school?.phone || "" }));
                  }} />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field label="Người nhận hàng"><input required minLength={2} className={inputClass} value={recipient.name} onChange={(event) => setRecipient({ ...recipient, name: event.target.value })} /></Field>
                    <Field label="Số điện thoại"><input required minLength={8} maxLength={20} className={inputClass} value={recipient.phone} onChange={(event) => setRecipient({ ...recipient, phone: event.target.value })} /></Field>
                  </div>
                  <Field label="Ghi chú xuất kho"><input className={inputClass} value={recipient.note} onChange={(event) => setRecipient({ ...recipient, note: event.target.value })} /></Field>
                  <VolunteerPicker volunteers={volunteers} value={volunteerIds} onChange={setVolunteerIds} />
                  <PrimaryButton type="submit" pending={pending}>Xác nhận xuất kho</PrimaryButton>
                </form>
              </Popup>
            )}

            {pledge ? (
              <Popup title="Popup 2 · Thông tin phiếu" tone="slate">
                <KeyValue rows={[
                  ["Mã phiếu", pledge.code],
                  ["Nhà hảo tâm", pledge.donor?.profile?.organizationName || pledge.donor?.fullName],
                  ["Chiến dịch", pledge.campaign?.title],
                  ["Ngày gửi", fmtDateTime(pledge.createdAt)],
                  ["Hình thức bàn giao", pledge.handoverMethod],
                ]} />
                <ul className="mt-3 text-sm text-slate-700">
                  {pledge.items.map((line) => <li key={line.id}>• {line.estimatedQuantity} {line.name} (đã nhập {line._count?.resourceItems || 0})</li>)}
                </ul>
              </Popup>
            ) : (
              <Popup title="Popup 2 · Thông tin hiện vật" subtitle={item.qrCode} tone="slate">
                <KeyValue rows={[
                  ["Mã QR", item.qrCode],
                  ["Hiện vật", item.name],
                  ["Nhóm", CATEGORY_LABEL[item.category]],
                  ["Phân loại", GRADE_LABEL[item.grade] || "Chưa kiểm định"],
                  ["Trạng thái", <StatusBadge kind="item" value={item.status} />],
                  ["Vị trí kệ", item.binLocation],
                  ["Nhà hảo tâm", item.pledgeItem?.pledge?.donor?.profile?.organizationName || item.pledgeItem?.pledge?.donor?.fullName],
                ]} />
                <div className="mt-4 border-t border-slate-100 pt-4"><ItemJourney qr={item.qrCode} /></div>
              </Popup>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
