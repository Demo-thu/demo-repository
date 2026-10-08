import { useState } from "react";
import { PackageCheck, Truck } from "lucide-react";
import api, { apiError } from "@/lib/api";
import { CATEGORY_LABEL, Card, Empty, Notice, PageHead, PrimaryButton, StatusBadge, fmtDateTime, orgName, useNotice, useWaybills, waybillItems } from "@/pages/portals/kit";

export default function PickupScreen({ params, openTab }) {
  const { waybills, error, loading, reload } = useWaybills();
  const [checked, setChecked] = useState({});
  const [pending, setPending] = useState("");
  const { notice, ok, fail } = useNotice();
  const focus = params.get("waybill");

  const waiting = waybills.filter((row) => row.status === "PENDING_PICKUP");
  const picked = waybills.filter((row) => row.status === "IN_TRANSIT");

  async function confirm(row) {
    setPending(row.id);
    try {
      await api.patch(`/waybills/${row.id}/pickup`);
      ok(`Đã xác nhận lấy hàng ${row.code}. Chuyến chuyển sang "Đang vận chuyển".`);
      await reload();
    } catch (failure) {
      fail(apiError(failure, "Không xác nhận lấy hàng được."));
    } finally {
      setPending("");
    }
  }

  return (
    <div>
      <PageHead eyebrow="Cổng tình nguyện viên" title="Xác nhận đã lấy hàng" subtitle="Đối chiếu từng món tại kho rồi xác nhận. Vận đơn sẽ chuyển sang Đang vận chuyển và hiện vật được ghi nhận rời kho." />
      <Notice notice={error ? { tone: "error", text: error } : notice} />
      {loading ? <Empty>Đang tải vận đơn...</Empty> : null}
      {!loading && !waiting.length ? <Empty>Không có chuyến nào đang chờ lấy hàng. Kho sẽ gán chuyến mới cho bạn sau khi admin xác nhận phương án.</Empty> : null}

      <div className="grid gap-4 lg:grid-cols-2">
        {waiting.map((row) => {
          const items = waybillItems(row);
          const school = row.allocationPlan?.requisition?.school;
          const origin = items.find((item) => item.warehouse)?.warehouse;
          return (
            <Card key={row.id} className={focus === row.id ? "ring-2 ring-blue-400" : ""}>
              <div className="flex items-start justify-between gap-3">
                <div><p className="font-display text-lg font-semibold text-blue-700">{row.code}</p><p className="text-xs text-slate-500">Lập {fmtDateTime(row.createdAt)}</p></div>
                <StatusBadge kind="waybill" value={row.status} />
              </div>
              <p className="mt-3 flex items-center gap-2 text-sm"><Truck size={15} className="text-blue-600" />{origin?.name || "Kho trung tâm"} → <b>{orgName(school)}</b></p>
              <ul className="mt-3 max-h-48 space-y-1 overflow-y-auto text-sm">
                {items.map((item) => (
                  <li key={item.id} className="flex items-center justify-between rounded bg-slate-50 px-3 py-1.5"><span>{item.name}<span className="ml-2 text-xs text-slate-500">{CATEGORY_LABEL[item.category]}</span></span><span className="font-mono text-xs text-slate-600">{item.qrCode}</span></li>
                ))}
              </ul>
              <label className="mt-4 flex items-start gap-2 text-sm text-slate-700">
                <input type="checkbox" className="mt-1" checked={Boolean(checked[row.id])} onChange={(event) => setChecked({ ...checked, [row.id]: event.target.checked })} />
                Tôi đã nhận đủ {items.length} món tại kho, đúng mã QR ở trên.
              </label>
              <div className="mt-4 flex flex-wrap gap-2">
                <PrimaryButton pending={pending === row.id} disabled={!checked[row.id]} onClick={() => confirm(row)}><PackageCheck size={15} />Xác nhận đã lấy hàng</PrimaryButton>
                <button type="button" className="text-sm font-semibold text-rose-600 hover:underline" onClick={() => openTab("incident", { waybill: row.id })}>Báo sự cố</button>
              </div>
            </Card>
          );
        })}
      </div>

      {picked.length ? (
        <Card title="Đã lấy hàng, đang vận chuyển" className="mt-5">
          <ul className="space-y-2 text-sm">
            {picked.map((row) => (
              <li key={row.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-slate-50 px-3 py-2">
                <span><b className="text-blue-700">{row.code}</b> · {orgName(row.allocationPlan?.requisition?.school)} · lấy lúc {fmtDateTime(row.dispatchedAt)}</span>
                <span className="flex gap-3"><button type="button" className="font-semibold text-rose-600 hover:underline" onClick={() => openTab("incident", { waybill: row.id })}>Báo sự cố</button><button type="button" className="font-semibold text-blue-700 hover:underline" onClick={() => openTab("proof", { waybill: row.id })}>Báo cáo sau khi trường ký</button></span>
              </li>
            ))}
          </ul>
        </Card>
      ) : null}
    </div>
  );
}
