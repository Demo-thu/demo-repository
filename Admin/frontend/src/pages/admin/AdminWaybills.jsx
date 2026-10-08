import { useEffect, useState } from "react";
import { Lock } from "lucide-react";
import api from "../../lib/api";
import {
  CATEGORY_LABEL, Card, Chips, DataTable, GhostButton, KeyValue, Modal, Notice, PageHead, SearchBox, Stat, StatusBadge, fmtDateTime, orgName,
  rowsOf, useWaybills, waybillItems,
} from "../portals/kit";

export default function AdminWaybills() {
  const { waybills, error } = useWaybills();
  const [waitingPlans, setWaitingPlans] = useState(0);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    api.get("/allocations", { params: { status: "CONFIRMED", limit: 100 } })
      .then((response) => setWaitingPlans(rowsOf(response.data).filter((plan) => !plan.waybill).length))
      .catch(() => setWaitingPlans(0));
  }, [waybills.length]);

  const count = (status) => waybills.filter((row) => row.status === status).length;
  const visible = waybills.filter((row) => {
    if (filter !== "all" && row.status !== filter) return false;
    const term = search.trim().toLowerCase();
    return !term || `${row.code} ${orgName(row.allocationPlan?.requisition?.school)}`.toLowerCase().includes(term);
  });

  const table = visible.map((row) => ({
    key: row.id,
    cells: [
      <button type="button" onClick={() => setDetail(row)} className="font-semibold text-blue-700 hover:underline">{row.code}</button>,
      orgName(row.allocationPlan?.requisition?.school),
      `${waybillItems(row).length} món`,
      (row.volunteers || []).map((person) => person.fullName).join(", ") || "Chưa phân công",
      <StatusBadge kind="waybill" value={row.status} />,
      fmtDateTime(row.createdAt),
    ],
  }));
  const items = waybillItems(detail);

  return (
    <div className="mx-auto max-w-[1400px] p-4 md:p-6">
      <PageHead eyebrow="Vận chuyển · Admin" title="Vận đơn" subtitle="Theo dõi vận đơn. Vận đơn do cổng Kho lập, và chỉ được lập sau khi admin đã xác nhận phương án phân bổ." />
      <Notice notice={error ? { tone: "error", text: error } : null} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-5">
        <Stat label="Chờ kho lập vận đơn" value={waitingPlans} hint="Phương án đã xác nhận" tone="violet" />
        <Stat label="Chờ lấy hàng" value={count("PENDING_PICKUP")} tone="amber" />
        <Stat label="Đang vận chuyển" value={count("IN_TRANSIT")} tone="blue" />
        <Stat label="Đã giao" value={count("DELIVERED")} tone="emerald" />
        <Stat label="Sự cố" value={count("FAILED")} tone="rose" />
      </div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Chips value={filter} onChange={setFilter} items={[["all", "Tất cả", waybills.length], ["PENDING_PICKUP", "Chờ lấy hàng", count("PENDING_PICKUP")], ["IN_TRANSIT", "Đang vận chuyển", count("IN_TRANSIT")], ["DELIVERED", "Đã giao", count("DELIVERED")], ["FAILED", "Sự cố", count("FAILED")]]} />
        <SearchBox value={search} onChange={setSearch} placeholder="Tìm mã vận đơn, trường..." />
      </div>
      <Card>
        <p className="mb-3 flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600"><Lock size={13} />Trang chỉ để xem. Admin không lập hay sửa vận đơn.</p>
        <DataTable columns={["Mã vận đơn", "Trường nhận", "Hiện vật", "Tình nguyện viên", "Trạng thái", "Ngày lập"]} rows={table} empty="Chưa có vận đơn nào." />
      </Card>

      {detail ? (
        <Modal wide title={`Vận đơn ${detail.code}`} subtitle={orgName(detail.allocationPlan?.requisition?.school)} onClose={() => setDetail(null)} footer={<GhostButton onClick={() => setDetail(null)}>Đóng</GhostButton>}>
          <div className="space-y-4">
            <KeyValue rows={[
              ["Trạng thái", <StatusBadge kind="waybill" value={detail.status} />],
              ["Admin xác nhận phương án", fmtDateTime(detail.allocationPlan?.adminConfirmedAt)],
              ["Lập vận đơn", fmtDateTime(detail.createdAt)],
              ["Lấy hàng", fmtDateTime(detail.dispatchedAt)],
              ["Giao hàng", fmtDateTime(detail.deliveredAt)],
              ["Đội tình nguyện", (detail.volunteers || []).map((person) => person.fullName).join(", ") || "—"],
              ["Người ký nhận", detail.proof ? `${detail.proof.recipientName} (${detail.proof.recipientTitle})` : "Chưa ký"],
            ]} />
            <div className="space-y-2">
              {Object.entries(items.reduce((acc, item) => ({ ...acc, [item.category]: [...(acc[item.category] || []), item] }), {})).map(([category, rows]) => (
                <div key={category} className="rounded-lg bg-slate-50 p-3"><p className="flex justify-between text-sm font-semibold"><span>{CATEGORY_LABEL[category]}</span><span>{rows.length}</span></p><p className="mt-1 font-mono text-[11px] text-slate-500">{rows.map((row) => row.qrCode).join(", ")}</p></div>
              ))}
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
