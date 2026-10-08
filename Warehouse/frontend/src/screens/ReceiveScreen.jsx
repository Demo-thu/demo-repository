import { useCallback, useEffect, useMemo, useState } from "react";
import { PackagePlus } from "lucide-react";
import api, { apiError } from "@/lib/api";
import { CATEGORY_LABEL, CATEGORY_RACK, Empty, Notice, PageHead, PrimaryButton, Stat, SubmitBar, inputClass, orgName, rowsOf, useNotice } from "@/pages/portals/kit";
import { useWarehouses } from "./common";

export default function ReceiveScreen({ params, openTab }) {
  const { home } = useWarehouses();
  const [pledges, setPledges] = useState([]);
  const [picked, setPicked] = useState({});
  const [pending, setPending] = useState(false);
  const { notice, ok, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const response = await api.get("/pledges?limit=100");
      const rows = rowsOf(response.data).filter((row) => ["VERIFIED", "PARTIALLY_RECEIVED"].includes(row.status));
      setPledges(rows);
      const focus = params.get("pledge");
      setPicked((current) => {
        const next = {};
        rows.forEach((pledge) => pledge.items.forEach((item) => {
          const remaining = item.estimatedQuantity - (item._count?.resourceItems || 0);
          if (remaining <= 0) return;
          next[item.id] = current[item.id] || { checked: focus ? pledge.id === focus : false, quantity: remaining, bin: CATEGORY_RACK[item.category] };
        }));
        return next;
      });
    } catch (error) {
      fail(apiError(error, "Không tải được phiếu chờ nhập kho."));
    }
  }, [params]);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  const lines = useMemo(() => pledges.flatMap((pledge) => pledge.items
    .map((item) => ({ pledge, item, remaining: item.estimatedQuantity - (item._count?.resourceItems || 0) }))
    .filter((line) => line.remaining > 0)), [pledges]);

  const selected = lines.filter((line) => picked[line.item.id]?.checked);
  const totalSelected = selected.reduce((sum, line) => sum + (Number(picked[line.item.id].quantity) || 0), 0);

  const patch = (id, change) => setPicked((current) => ({ ...current, [id]: { ...current[id], ...change } }));

  async function receive() {
    if (!home) {
      fail("Chưa xác định được kho nhận hàng.");
      return;
    }
    const invalid = selected.find((line) => {
      const quantity = Number(picked[line.item.id].quantity);
      return !Number.isInteger(quantity) || quantity < 1 || quantity > line.remaining;
    });
    if (invalid) {
      fail(`Số lượng nhập của "${invalid.item.name}" phải từ 1 đến ${invalid.remaining}.`);
      return;
    }
    setPending(true);
    try {
      const byPledge = new Map();
      selected.forEach((line) => byPledge.set(line.pledge.id, [...(byPledge.get(line.pledge.id) || []), line]));
      let created = 0;
      for (const [pledgeId, group] of byPledge) {
        const { data } = await api.post(`/pledges/${pledgeId}/receive`, {
          lines: group.map((line) => ({
            pledgeItemId: line.item.id,
            receivedQuantity: Number(picked[line.item.id].quantity),
            warehouseId: home.id,
            binLocation: picked[line.item.id].bin || undefined,
          })),
        });
        created += data.created ?? 0;
      }
      ok(`Đã nhập kho ${created} hiện vật và cấp mã QR. Chuyển sang kiểm định.`);
      await load();
      openTab("inspect");
    } catch (error) {
      fail(apiError(error, "Không nhập kho được."));
    } finally {
      setPending(false);
    }
  }

  return (
    <div>
      <PageHead eyebrow="Tiếp nhận & kiểm định" title="Nhập kho phiếu đã xác minh" subtitle="Chọn các dòng hiện vật thực nhận, kiểm tra số lượng rồi nhập kho; vị trí kệ do hệ thống tự gán theo nhóm hiện vật. Mỗi hiện vật nhận một mã QR riêng." />
      <Notice notice={notice} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Phiếu chờ nhập" value={pledges.length} icon={PackagePlus} />
        <Stat label="Dòng hiện vật chờ" value={lines.length} tone="violet" />
        <Stat label="Số lượng còn phải nhập" value={lines.reduce((sum, line) => sum + line.remaining, 0)} tone="amber" />
        <Stat label="Đang chọn nhập" value={totalSelected} tone="emerald" />
      </div>

      {!lines.length ? <Empty>Không có dòng nào chờ nhập kho. Hãy xác minh phiếu ở màn "Xác minh phiếu trao tặng" trước.</Empty> : (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <tr>
                <th className="w-10 px-3 py-2"><input type="checkbox" checked={selected.length === lines.length} onChange={(event) => setPicked((current) => Object.fromEntries(Object.entries(current).map(([id, value]) => [id, { ...value, checked: event.target.checked }])))} aria-label="Chọn tất cả" /></th>
                {["Phiếu", "Nhà hảo tâm", "Hiện vật", "Còn lại", "SL nhập", "Vị trí kệ"].map((column) => <th key={column} className="px-3 py-2 font-semibold">{column}</th>)}
              </tr>
            </thead>
            <tbody>
              {lines.map(({ pledge, item, remaining }) => {
                const state = picked[item.id];
                if (!state) return null;
                return (
                  <tr key={item.id} className={`border-t border-slate-100 ${state.checked ? "bg-blue-50/40" : ""}`}>
                    <td className="px-3 py-2"><input type="checkbox" checked={state.checked} onChange={(event) => patch(item.id, { checked: event.target.checked })} /></td>
                    <td className="px-3 py-2 font-semibold text-blue-700">{pledge.code}</td>
                    <td className="px-3 py-2">{orgName(pledge.donor)}</td>
                    <td className="px-3 py-2"><p className="font-medium text-slate-800">{item.name}</p><p className="text-xs text-slate-500">{CATEGORY_LABEL[item.category]} · {item.declaredCondition || "—"}</p></td>
                    <td className="px-3 py-2">{remaining}/{item.estimatedQuantity}</td>
                    <td className="px-3 py-2"><input type="number" min="1" max={remaining} value={state.quantity} onChange={(event) => patch(item.id, { quantity: event.target.value })} className={`${inputClass} !w-24`} /></td>
                    <td className="px-3 py-2 text-xs text-slate-600" title="Vị trí kệ do hệ thống tự gán theo nhóm hiện vật"><span className="rounded bg-slate-100 px-2 py-1 font-mono">{state.bin}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <SubmitBar>
        <p className="text-sm text-slate-600">Đã chọn <b>{selected.length}</b>/{lines.length} dòng · <b>{totalSelected}</b> hiện vật sẽ được cấp mã QR</p>
        <PrimaryButton pending={pending} disabled={!selected.length} onClick={receive}>Nhập các dòng đã chọn vào kho</PrimaryButton>
      </SubmitBar>
    </div>
  );
}
