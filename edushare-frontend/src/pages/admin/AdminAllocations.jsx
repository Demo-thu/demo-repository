import { useCallback, useEffect, useState } from "react";
import { CheckCircle2, Link2, Lock, XCircle } from "lucide-react";
import api, { apiError } from "../../lib/api";
import {
  CATEGORIES, CATEGORY_LABEL, Card, Chips, Empty, GhostButton, Notice, PageHead, PrimaryButton, Stat, StatusBadge, fmtDateTime, orgName, rowsOf, totalOf, useNotice,
} from "../portals/kit";

export default function AdminAllocations() {
  const [stock, setStock] = useState({});
  const [approved, setApproved] = useState([]);
  const [plans, setPlans] = useState([]);
  const [filter, setFilter] = useState("PROPOSED");
  const [pending, setPending] = useState("");
  const { notice, ok, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const [stockRes, approvedRes, partialRes, planRes] = await Promise.all([
        Promise.all(CATEGORIES.map(([key]) => api.get("/items", { params: { status: "READY_FOR_ALLOCATION", category: key, limit: 1 } }))),
        api.get("/requisitions", { params: { status: "APPROVED", limit: 100 } }),
        api.get("/requisitions", { params: { status: "ALLOCATING", limit: 100 } }),
        api.get("/allocations", { params: { limit: 100 } }),
      ]);
      setStock(Object.fromEntries(CATEGORIES.map(([key], index) => [key, totalOf(stockRes[index].data)])));
      // Yeu cau da giao mot dot (da ky nhan) nhung chua du: cho ghep them dot tiep theo.
      const nextRound = rowsOf(partialRes.data).filter((row) => row.allocationPlan?.waybill?.status === "DELIVERED");
      setApproved([...rowsOf(approvedRes.data), ...nextRound]);
      setPlans(rowsOf(planRes.data));
    } catch (error) {
      fail(apiError(error, "Không tải được dữ liệu phân bổ."));
    }
  }, []);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  async function run(key, action, success, failure) {
    setPending(key);
    try {
      await action();
      ok(success);
      await load();
    } catch (error) {
      fail(apiError(error, failure));
    } finally {
      setPending("");
    }
  }

  const match = (row) => run(`match-${row.id}`, () => api.post(`/allocations/match/${row.id}`), `Đã ghép tồn kho cho ${row.code}. Bấm "Xác nhận và chuyển cho kho" để kho thấy đơn.`, "Không ghép được tồn kho.");
  const confirm = (plan) => run(`confirm-${plan.id}`, () => api.patch(`/allocations/${plan.id}/confirm`), `Đã xác nhận và chuyển ${plan.requisition?.code} cho kho lập vận đơn.`, "Không xác nhận được phương án.");
  const cancel = (plan) => {
    if (!window.confirm(`Hủy phương án ${plan.requisition?.code}? Các hiện vật sẽ trở về trạng thái sẵn sàng phân bổ.`)) return;
    run(`cancel-${plan.id}`, () => api.patch(`/allocations/${plan.id}/cancel`), `Đã hủy phương án ${plan.requisition?.code}.`, "Không hủy được phương án.");
  };

  const visible = plans.filter((plan) => filter === "all" || plan.status === filter);
  const count = (status) => plans.filter((plan) => plan.status === status).length;
  const readyTotal = Object.values(stock).reduce((sum, value) => sum + value, 0);

  return (
    <div className="mx-auto max-w-[1400px] p-4 md:p-6">
      <PageHead eyebrow="Kiểm kê & phân bổ · Admin" title="Ghép tồn kho & xác nhận phương án phân bổ" subtitle="Chỉ admin ghép tồn kho, xác nhận và hủy phương án. Kho không xác nhận hay hủy; kho chỉ lập vận đơn sau khi admin đã xác nhận." />
      <Notice notice={notice} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Tồn sẵn sàng phân bổ" value={readyTotal} tone="emerald" />
        <Stat label="Yêu cầu chờ ghép" value={approved.length} tone="amber" />
        <Stat label="Phương án chờ xác nhận" value={count("PROPOSED")} tone="violet" />
        <Stat label="Đã xác nhận" value={count("CONFIRMED")} tone="blue" />
      </div>

      <div className="mb-5 grid gap-5 xl:grid-cols-[320px_1fr]">
        <Card title="Tồn kho sẵn sàng theo hạng mục">
          <ul className="space-y-2 text-sm">
            {CATEGORIES.map(([key, label]) => (
              <li key={key} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"><span>{label}</span><b className={stock[key] ? "text-emerald-700" : "text-slate-400"}>{stock[key] ?? 0}</b></li>
            ))}
          </ul>
        </Card>
        <Card title="Yêu cầu đã duyệt, chờ ghép tồn kho">
          {!approved.length ? <Empty>Không có yêu cầu nào đang chờ ghép. Duyệt yêu cầu ở mục "Yêu cầu của trường".</Empty> : (
            <ul className="space-y-2">
              {approved.map((row) => (
                <li key={row.id} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 p-3 text-sm">
                  <div>
                    <b className="text-blue-700">{row.code}</b> · {orgName(row.school)}
                    {row.status === "ALLOCATING" ? <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-700">Giao đợt tiếp theo</span> : null}
                    <span className="block text-xs text-slate-500">{(row.items || []).map((item) => `${item.quantityNeeded - item.quantityFulfilled} ${CATEGORY_LABEL[item.category]}`).join(" · ")}</span>
                  </div>
                  <PrimaryButton pending={pending === `match-${row.id}`} onClick={() => match(row)}><Link2 size={14} />Ghép tồn kho</PrimaryButton>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>

      <div className="mb-4"><Chips value={filter} onChange={setFilter} items={[["PROPOSED", "Chờ xác nhận", count("PROPOSED")], ["CONFIRMED", "Đã xác nhận", count("CONFIRMED")], ["DISPATCHED", "Đã xuất kho", count("DISPATCHED")], ["CANCELLED", "Đã hủy", count("CANCELLED")], ["all", "Tất cả", plans.length]]} /></div>
      {!visible.length ? <Empty>Không có phương án nào ở trạng thái này.</Empty> : null}
      <div className="grid gap-4 lg:grid-cols-2">
        {visible.map((plan) => {
          const groups = (plan.items || []).reduce((acc, line) => {
            const item = line.resourceItem;
            if (item) acc[item.category] = [...(acc[item.category] || []), item];
            return acc;
          }, {});
          const locked = plan.waybill && !["PENDING_PICKUP", "FAILED"].includes(plan.waybill.status);
          return (
            <Card key={plan.id}>
              <div className="flex items-start justify-between gap-3">
                <div><p className="font-display text-lg font-semibold text-blue-700">{plan.requisition?.code}</p><p className="text-sm text-slate-700">{orgName(plan.requisition?.school)}</p></div>
                <StatusBadge kind="allocation" value={plan.status} />
              </div>
              <div className="mt-3 space-y-2">
                {Object.entries(groups).map(([category, items]) => (
                  <div key={category} className="rounded-lg bg-slate-50 p-3">
                    <p className="flex justify-between text-sm font-semibold"><span>{CATEGORY_LABEL[category]}</span><span>{items.length}</span></p>
                    <p className="mt-1 font-mono text-[11px] text-slate-500">{items.map((item) => item.qrCode).join(", ")}</p>
                  </div>
                ))}
                {!Object.keys(groups).length ? <p className="text-sm text-slate-500">Phương án chưa có hiện vật.</p> : null}
              </div>
              <p className="mt-3 text-xs text-slate-500">
                {plan.adminConfirmedAt ? `Admin xác nhận lúc ${fmtDateTime(plan.adminConfirmedAt)}` : "Chưa chuyển cho kho"}
                {plan.waybill ? ` · Vận đơn ${plan.waybill.code}` : plan.status === "CONFIRMED" ? " · Kho đã nhận, chờ lập vận đơn" : plan.status === "PROPOSED" ? " · Kho chưa thấy đơn này" : ""}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {plan.status === "PROPOSED" ? <PrimaryButton pending={pending === `confirm-${plan.id}`} disabled={!plan.totalItems} onClick={() => confirm(plan)}><CheckCircle2 size={14} />Xác nhận và chuyển cho kho</PrimaryButton> : null}
                {["PROPOSED", "CONFIRMED"].includes(plan.status) && !locked ? <GhostButton tone="danger" disabled={pending === `cancel-${plan.id}`} onClick={() => cancel(plan)}><XCircle size={14} />Hủy phương án</GhostButton> : null}
                {locked ? <span className="flex items-center gap-1 text-xs text-slate-500"><Lock size={12} />Vận đơn đã rời kho, không hủy được.</span> : null}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
