import { useEffect, useState } from "react";
import { PackageCheck, ShieldAlert, Truck } from "lucide-react";
import api from "@/lib/api";
import {
  CATEGORY_LABEL, Card, Chips, Empty, GhostButton, Notice, PageHead, Pager, PrimaryButton, SearchBox, StatusBadge, fmtDateTime, orgName, totalOf, useWaybills, waybillItems,
} from "@/pages/portals/kit";

const WAYBILL_STATUSES = ["PENDING_PICKUP", "IN_TRANSIT", "FAILED", "DELIVERED"];

export default function WaybillsScreen({ params, openTab }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState(params.get("q") || "");
  const [term, setTerm] = useState(params.get("q") || "");
  const [page, setPage] = useState(1);
  const [counts, setCounts] = useState({ all: 0, PENDING_PICKUP: 0, IN_TRANSIT: 0, FAILED: 0, DELIVERED: 0 });
  const { waybills, meta, error } = useWaybills(filter === "all" ? undefined : filter, { page, limit: 20, search: term });

  useEffect(() => {
    if (params.get("q")) setSearch(params.get("q"));
  }, [params]);
  useEffect(() => {
    const timer = window.setTimeout(() => { setTerm(search.trim()); setPage(1); }, 300);
    return () => window.clearTimeout(timer);
  }, [search]);
  useEffect(() => { setPage(1); }, [filter]);
  useEffect(() => {
    Promise.all([
      api.get("/waybills", { params: { limit: 1 } }),
      ...WAYBILL_STATUSES.map((status) => api.get("/waybills", { params: { limit: 1, status } })),
    ]).then(([all, ...parts]) => {
      setCounts({ all: totalOf(all.data), ...Object.fromEntries(WAYBILL_STATUSES.map((status, index) => [status, totalOf(parts[index].data)])) });
    }).catch(() => {});
  }, [waybills]);

  const count = (status) => counts[status] ?? 0;
  const visible = waybills;

  return (
    <div>
      <PageHead eyebrow="Cổng tình nguyện viên" title="Vận đơn được gán" subtitle="Danh sách chuyến của riêng bạn. Từ đây chuyển sang xác nhận lấy hàng, báo sự cố hoặc báo cáo sau khi trường đã ký." />
      <Notice notice={error ? { tone: "error", text: error } : null} />
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Chips value={filter} onChange={setFilter} items={[["all", "Tất cả", counts.all], ["PENDING_PICKUP", "Chờ lấy hàng", count("PENDING_PICKUP")], ["IN_TRANSIT", "Đang vận chuyển", count("IN_TRANSIT")], ["FAILED", "Sự cố", count("FAILED")], ["DELIVERED", "Đã hoàn thành", count("DELIVERED")]]} />
        <SearchBox value={search} onChange={setSearch} placeholder="Tìm mã vận đơn, trường..." />
      </div>

      {!visible.length ? <Empty>Không có vận đơn nào khớp bộ lọc.</Empty> : null}
      <div className="grid gap-4 lg:grid-cols-2">
        {visible.map((row) => {
          const items = waybillItems(row);
          const school = row.allocationPlan?.requisition?.school;
          const origin = items.find((item) => item.warehouse)?.warehouse;
          const lastIncident = row.incidents?.[0];
          return (
            <Card key={row.id}>
              <div className="flex items-start justify-between gap-3">
                <div><p className="font-display text-lg font-semibold text-blue-700">{row.code}</p><p className="text-xs text-slate-500">Lập {fmtDateTime(row.createdAt)}</p></div>
                <StatusBadge kind="waybill" value={row.status} />
              </div>
              <div className="my-3 flex items-center gap-2 text-sm">
                <span className="flex-1 rounded bg-slate-50 px-3 py-2"><b>{origin?.name || "Kho trung tâm"}</b></span>
                <Truck size={16} className="text-blue-600" />
                <span className="flex-1 rounded bg-blue-50 px-3 py-2"><b>{orgName(school)}</b><span className="block text-xs text-slate-500">{[school?.profile?.district, school?.profile?.city].filter(Boolean).join(", ")}</span></span>
              </div>
              <p className="text-xs text-slate-600"><PackageCheck size={13} className="mr-1 inline" />{items.length} món: {Object.entries(items.reduce((groups, item) => ({ ...groups, [item.category]: (groups[item.category] || 0) + 1 }), {})).map(([category, total]) => `${total} ${CATEGORY_LABEL[category]}`).join(" · ")}</p>
              <p className="mt-1 text-xs text-slate-500">Đội: {(row.volunteers || []).map((person) => person.fullName).join(", ") || "Chưa phân công"}</p>
              {row.status === "FAILED" && lastIncident ? <p className="mt-3 rounded-lg bg-rose-50 p-3 text-sm text-rose-800"><ShieldAlert size={14} className="mr-1 inline" />{lastIncident.reason}</p> : null}
              <div className="mt-4 flex flex-wrap gap-2">
                {row.status === "PENDING_PICKUP" ? <PrimaryButton onClick={() => openTab("pickup", { waybill: row.id })}>Xác nhận lấy hàng</PrimaryButton> : null}
                {["PENDING_PICKUP", "IN_TRANSIT"].includes(row.status) ? <GhostButton tone="danger" onClick={() => openTab("incident", { waybill: row.id })}><ShieldAlert size={13} />Báo sự cố</GhostButton> : null}
                {["IN_TRANSIT", "DELIVERED"].includes(row.status) ? <GhostButton onClick={() => openTab("proof", { waybill: row.id })}>Báo cáo & ảnh minh chứng</GhostButton> : null}
              </div>
            </Card>
          );
        })}
      </div>
      <Pager page={meta.page || page} totalPages={meta.totalPages || 1} total={meta.total || 0} onChange={setPage} />
    </div>
  );
}
