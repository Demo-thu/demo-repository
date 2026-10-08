import { useEffect, useState } from "react";
import { MapPin, PenLine, Phone, Truck } from "lucide-react";
import {
  CATEGORY_LABEL, Card, Empty, Notice, PageHead, PrimaryButton, Stat, StatusBadge, Timeline, fmtDateTime, inputClass,
  orgName, useWaybills, waybillItems,
} from "@/pages/portals/kit";

const BANNER = {
  PENDING_PICKUP: ["bg-amber-50 text-amber-900 border-amber-200", "Kho đã lập vận đơn, đang chờ tình nguyện viên lấy hàng."],
  IN_TRANSIT: ["bg-blue-50 text-blue-900 border-blue-200", "Hàng đang trên đường tới trường. Chuẩn bị người nhận để ký biên bản khi xe tới."],
  DELIVERED: ["bg-emerald-50 text-emerald-900 border-emerald-200", "Hàng đã giao và biên bản bàn giao đã được ký."],
  FAILED: ["bg-rose-50 text-rose-900 border-rose-200", "Chuyến hàng gặp sự cố. Kho sẽ lập lại phương án giao."],
};

export default function WaybillScreen({ params, openTab }) {
  const { waybills, error, loading } = useWaybills();
  const [selected, setSelected] = useState(params.get("waybill") || "");

  useEffect(() => {
    setSelected((current) => params.get("waybill") || current || waybills.find((row) => row.status !== "DELIVERED")?.id || waybills[0]?.id || "");
  }, [waybills, params]);

  const waybill = waybills.find((row) => row.id === selected);
  const items = waybillItems(waybill);
  const byCategory = Object.entries(items.reduce((groups, item) => ({ ...groups, [item.category]: [...(groups[item.category] || []), item] }), {}));
  const origin = items.find((item) => item.warehouse)?.warehouse;
  const school = waybill?.allocationPlan?.requisition?.school;

  return (
    <div>
      <PageHead eyebrow="3. Vận chuyển & ký nhận" title="Theo dõi vận đơn" subtitle="Theo dõi chuyến hàng từ kho tới trường và chuẩn bị ký biên bản bàn giao." />
      <Notice notice={error ? { tone: "error", text: error } : null} />
      {loading ? <Empty>Đang tải vận đơn...</Empty> : null}
      {!loading && !waybills.length ? <Empty>Trường chưa có vận đơn nào. Khi kho lập vận đơn cho yêu cầu đã duyệt, chuyến hàng sẽ xuất hiện tại đây.</Empty> : null}

      {waybill ? (
        <>
          <div className="mb-4 max-w-md">
            <select className={inputClass} value={selected} onChange={(event) => setSelected(event.target.value)}>
              {waybills.map((row) => <option key={row.id} value={row.id}>{row.code} · {row.allocationPlan?.requisition?.code}</option>)}
            </select>
          </div>
          <div className={`mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm ${BANNER[waybill.status][0]}`}>
            <p className="flex items-center gap-2"><Truck size={18} /><b>{waybill.code}</b> · {BANNER[waybill.status][1]}</p>
            {waybill.status === "IN_TRANSIT" && !waybill.proof ? <PrimaryButton onClick={() => openTab("sign", { waybill: waybill.id })}><PenLine size={14} />Tiến hành ký biên bản PoD</PrimaryButton> : null}
          </div>

          <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            <Stat label="Trạng thái" value={<StatusBadge kind="waybill" value={waybill.status} />} />
            <Stat label="Số món" value={items.length} tone="violet" />
            <Stat label="Lập vận đơn" value={fmtDateTime(waybill.createdAt).split(" ")[0]} hint={fmtDateTime(waybill.createdAt).split(" ")[1]} tone="amber" />
            <Stat label="Đội tình nguyện" value={waybill.volunteers.length} tone="emerald" />
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_380px]">
            <div className="space-y-5">
              <Card title="Lộ trình">
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex-1 rounded-lg bg-slate-50 p-3"><p className="text-[10px] font-semibold uppercase text-slate-500">Điểm đi</p><p className="font-semibold">{origin?.name || "Kho trung tâm"}</p><p className="text-xs text-slate-500">{origin?.city}</p></div>
                  <Truck className="text-blue-600" />
                  <div className="flex-1 rounded-lg bg-blue-50 p-3"><p className="text-[10px] font-semibold uppercase text-blue-700">Điểm đến</p><p className="font-semibold">{orgName(school)}</p><p className="flex items-center gap-1 text-xs text-slate-500"><MapPin size={12} />{[school?.profile?.address, school?.profile?.district, school?.profile?.city].filter(Boolean).join(", ") || "—"}</p></div>
                </div>
              </Card>
              <Card title="Hàng hóa trên xe">
                {byCategory.map(([category, rows]) => (
                  <div key={category} className="mb-3 rounded-lg border border-slate-200 p-3 last:mb-0">
                    <p className="flex justify-between text-sm font-semibold"><span>{CATEGORY_LABEL[category]}</span><span>{rows.length} món</span></p>
                    <p className="mt-1 font-mono text-[11px] text-slate-500">{rows.map((row) => row.qrCode).join(", ")}</p>
                  </div>
                ))}
              </Card>
            </div>
            <div className="space-y-5">
              <Card title="Tiến trình">
                <Timeline steps={[
                  { title: "Kho lập vận đơn", detail: fmtDateTime(waybill.createdAt), done: true },
                  { title: "Đã lấy hàng, đang vận chuyển", detail: waybill.dispatchedAt ? fmtDateTime(waybill.dispatchedAt) : "Chưa lấy hàng", done: Boolean(waybill.dispatchedAt) },
                  { title: "Giao và ký biên bản", detail: waybill.proof ? `${waybill.proof.recipientName} · ${fmtDateTime(waybill.proof.signedAt)}` : "Chưa ký", done: Boolean(waybill.proof) },
                ]} />
              </Card>
              <Card title="Đội tình nguyện viên">
                {waybill.volunteers.length ? waybill.volunteers.map((person) => (
                  <div key={person.id} className="mb-2 flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm last:mb-0">
                    <b>{person.fullName}</b>
                    {person.phone ? <a href={`tel:${person.phone}`} className="flex items-center gap-1 text-xs text-blue-700"><Phone size={12} />{person.phone}</a> : null}
                  </div>
                )) : <Empty>Chưa phân công tình nguyện viên.</Empty>}
              </Card>
              {waybill.incidents.length ? (
                <Card title="Sự cố đã ghi nhận">
                  {waybill.incidents.map((incident) => <p key={incident.id} className="mb-2 rounded-lg bg-rose-50 p-3 text-sm text-rose-800">{incident.reason}<span className="mt-1 block text-xs text-rose-600">{fmtDateTime(incident.createdAt)}</span></p>)}
                </Card>
              ) : null}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
