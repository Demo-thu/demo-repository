import { useCallback, useEffect, useState } from "react";
import { CheckCircle2, MapPin } from "lucide-react";
import api, { apiError } from "@/lib/api";
import { CATEGORY_LABEL, Card, Empty, Notice, PageHead, PrimaryButton, fmtDateTime, orgName, rowsOf, useNotice } from "@/pages/portals/kit";
import { VolunteerPicker, useVolunteerUsers } from "./common";

export default function WaybillScreen() {
  const volunteers = useVolunteerUsers();
  const [plans, setPlans] = useState([]);
  const [planId, setPlanId] = useState("");
  const [volunteerIds, setVolunteerIds] = useState([]);
  const [pending, setPending] = useState(false);
  const { notice, ok, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const response = await api.get("/allocations", { params: { readyForWaybill: true, limit: 100 } });
      const rows = rowsOf(response.data).filter((row) => row.status === "CONFIRMED" && row.adminConfirmedAt && !row.waybill);
      setPlans(rows);
      setPlanId((current) => (rows.some((row) => row.id === current) ? current : rows[0]?.id || ""));
    } catch (error) {
      fail(apiError(error, "Không tải được phương án phân bổ."));
    }
  }, []);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  const ready = plans;
  const plan = ready.find((row) => row.id === planId);
  const school = plan?.requisition?.school;
  const byCategory = Object.entries((plan?.items || []).reduce((groups, line) => ({ ...groups, [line.resourceItem.category]: [...(groups[line.resourceItem.category] || []), line.resourceItem] }), {}));

  async function submit() {
    if (!plan) return;
    if (!volunteerIds.length) {
      fail("Cần giao chuyến cho ít nhất một tình nguyện viên.");
      return;
    }
    setPending(true);
    try {
      const { data } = await api.post("/waybills", { allocationPlanId: plan.id, volunteerIds });
      ok(`Đã phát hành vận đơn ${data.code}. Tình nguyện viên được giao sẽ thấy chuyến trong cổng của họ.`);
      setVolunteerIds([]);
      await load();
    } catch (error) {
      fail(apiError(error, "Chỉ lập vận đơn khi quản trị viên đã xác nhận phương án."));
    } finally {
      setPending(false);
    }
  }

  return (
    <div>
      <PageHead eyebrow="Điều phối & vận chuyển" title="Lập vận đơn" subtitle="Chỉ phương án phân bổ đã được quản trị viên xác nhận mới được phát hành vận đơn." />
      <Notice notice={notice} />
      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <div className="space-y-5">
          <Card title="1. Chọn phương án đã duyệt">
            {ready.length ? (
              <div className="grid gap-3 md:grid-cols-2">
                {ready.map((row) => (
                  <button key={row.id} type="button" onClick={() => setPlanId(row.id)} className={`rounded-xl border p-4 text-left ${row.id === planId ? "border-blue-500 bg-blue-50/50 ring-1 ring-blue-300" : "border-slate-200 hover:border-blue-300"}`}>
                    <p className="flex items-center justify-between text-xs font-semibold text-blue-700">{row.requisition.code}<CheckCircle2 size={14} className="text-emerald-600" /></p>
                    <p className="mt-1 font-semibold text-slate-800">{row.requisition.title}</p>
                    <p className="text-xs text-slate-500">{orgName(row.requisition.school)} · {row.totalItems} hiện vật</p>
                  </button>
                ))}
              </div>
            ) : <Empty>Chưa có đơn nào được admin xác nhận và chuyển cho kho.</Empty>}
          </Card>

          {plan ? (
            <>
              <Card title="2. Trường nhận hàng">
                <p className="font-semibold text-slate-800">{orgName(school)}</p>
                <p className="mt-1 flex items-center gap-1 text-sm text-slate-600"><MapPin size={14} />{[school?.profile?.address, school?.profile?.district, school?.profile?.city].filter(Boolean).join(", ") || "Chưa có địa chỉ"}</p>
                <p className="text-sm text-slate-600">Liên hệ: {school?.fullName} · {school?.phone || school?.email}</p>
              </Card>
              <Card title="3. Giao tình nguyện viên"><VolunteerPicker volunteers={volunteers} value={volunteerIds} onChange={setVolunteerIds} label="Đội phụ trách (người đầu tiên là trưởng đoàn)" /></Card>
              <Card title="4. Danh sách hiện vật trên xe">
                {byCategory.map(([category, items]) => (
                  <div key={category} className="mb-3 rounded-lg border border-slate-200 p-3 last:mb-0">
                    <p className="flex justify-between text-sm font-semibold"><span>{CATEGORY_LABEL[category]}</span><span>{items.length} món</span></p>
                    <p className="mt-1 font-mono text-[11px] text-slate-500">{items.map((item) => item.qrCode).join(", ")}</p>
                  </div>
                ))}
              </Card>
            </>
          ) : null}
        </div>

        <aside className="space-y-5">
          <Card title="Kiểm tra trước khi phát hành">
            <ul className="space-y-2 text-sm">
              {[
                ["Phương án đã được admin xác nhận", Boolean(plan)],
                ["Đã chọn tình nguyện viên", volunteerIds.length > 0],
                ["Có hiện vật trong phương án", Boolean(plan?.items?.length)],
              ].map(([label, done]) => <li key={label} className={`flex items-center gap-2 ${done ? "text-emerald-700" : "text-slate-400"}`}><CheckCircle2 size={15} />{label}</li>)}
            </ul>
            {plan ? <p className="mt-3 text-xs text-slate-500">Xác nhận lúc {fmtDateTime(plan.adminConfirmedAt)}</p> : null}
            <PrimaryButton className="mt-4 w-full" pending={pending} disabled={!plan || !volunteerIds.length} onClick={submit}>Xác nhận phát hành vận đơn</PrimaryButton>
          </Card>
        </aside>
      </div>
    </div>
  );
}
