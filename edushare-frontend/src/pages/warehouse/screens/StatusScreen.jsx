import { useCallback, useEffect, useState } from "react";
import { CheckCircle2, Clock3, Truck, XCircle } from "lucide-react";
import api, { apiError } from "@/lib/api";
import {
  Card, Chips, DataTable, Empty, GhostButton, KeyValue, Modal, Notice, PageHead, Pager, PrimaryButton, RequisitionJourney, SearchBox, Stat, StatusBadge, Timeline,
  downloadCsv, exportDonorWorkbook, fmtDateTime, orgName, rowsOf, totalOf, useNotice, useWaybills, waybillItems,
} from "@/pages/portals/kit";

const WAYBILL_STATUSES = ["PENDING_PICKUP", "IN_TRANSIT", "DELIVERED", "FAILED"];

export default function StatusScreen() {
  const [transfers, setTransfers] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [reloadKey, setReloadKey] = useState(0);
  const [pending, setPending] = useState(false);
  const [wbFilter, setWbFilter] = useState("all");
  const [wbSearch, setWbSearch] = useState("");
  const [wbTerm, setWbTerm] = useState("");
  const [wbPage, setWbPage] = useState(1);
  const [wbCounts, setWbCounts] = useState({ all: 0, PENDING_PICKUP: 0, IN_TRANSIT: 0, DELIVERED: 0, FAILED: 0 });
  const [wbDetail, setWbDetail] = useState(null);
  const { waybills, meta: wbMeta, error: wbError } = useWaybills(wbFilter === "all" ? undefined : wbFilter, { page: wbPage, limit: 20, search: wbTerm });
  const { notice, ok, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const response = await api.get("/transfers", { params: { limit: 100 } });
      const rows = rowsOf(response.data);
      setTransfers(rows);
      setSelectedId((current) => (rows.some((row) => row.id === current) ? current : rows[0]?.id || ""));
      setReloadKey((value) => value + 1);
    } catch (error) {
      fail(apiError(error, "Không tải được lệnh điều chuyển."));
    }
  }, []);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  useEffect(() => {
    const timer = window.setTimeout(() => { setWbTerm(wbSearch.trim()); setWbPage(1); }, 300);
    return () => window.clearTimeout(timer);
  }, [wbSearch]);
  useEffect(() => { setWbPage(1); }, [wbFilter]);

  useEffect(() => {
    Promise.all([
      api.get("/waybills", { params: { limit: 1 } }),
      ...WAYBILL_STATUSES.map((status) => api.get("/waybills", { params: { limit: 1, status } })),
    ]).then(([all, ...rest]) => {
      setWbCounts({ all: totalOf(all.data), ...Object.fromEntries(WAYBILL_STATUSES.map((status, index) => [status, totalOf(rest[index].data)])) });
    }).catch(() => {});
  }, [waybills]);

  const visible = transfers.filter((row) => {
    if (filter !== "all" && row.status !== filter) return false;
    const term = search.trim().toLowerCase();
    return !term || `${row.code} ${row.recipientName} ${orgName(row.targetSchool)} ${row.deliveryAddress || ""}`.toLowerCase().includes(term);
  });

  useEffect(() => {
    const handler = () => downloadCsv("lenh-dieu-chuyen.csv", ["Mã lệnh", "Trường nhận", "Địa chỉ giao", "Người nhận", "Điện thoại", "Số món", "Trạng thái", "Thời điểm"], visible.map((row) => [row.code, row.targetSchool ? orgName(row.targetSchool) : "", row.deliveryAddress || "", row.recipientName, row.recipientPhone, row.itemsCount, row.status, fmtDateTime(row.createdAt)]));
    window.addEventListener("portal:export", handler);
    return () => window.removeEventListener("portal:export", handler);
  }, [visible]);

  async function act(transfer, action, message) {
    setPending(true);
    try {
      await api.patch(`/transfers/${transfer.id}/${action}`);
      ok(message);
      await load();
    } catch (error) {
      fail(apiError(error, "Không cập nhật được lệnh."));
    } finally {
      setPending(false);
    }
  }

  async function exportDonors(transfer) {
    try {
      await exportDonorWorkbook(transfer.items || [], `${transfer.code}-theo-nha-hao-tam.xlsx`, {
        code: transfer.code,
        recipient: `${transfer.recipientName} · ${transfer.recipientPhone}`,
        volunteers: (transfer.volunteers || []).map((person) => person.fullName).join(", "),
      });
      ok("Đã xuất Excel theo từng nhà hảo tâm.");
    } catch (error) {
      fail(apiError(error, "Không xuất được file Excel."));
    }
  }

  const count = (status) => transfers.filter((row) => row.status === status).length;
  const wbCount = (status) => wbCounts[status] ?? 0;
  const selected = transfers.find((row) => row.id === selectedId);

  const rows = visible.map((row) => ({
    key: row.id,
    cells: [
      <button type="button" className="font-semibold text-blue-700 hover:underline" onClick={() => setSelectedId(row.id)}>{row.code}</button>,
      <div><p className="font-medium">{row.targetSchool ? orgName(row.targetSchool) : "—"}</p><p className="text-xs text-slate-500">{row.recipientName} · {row.recipientPhone}</p></div>,
      row.itemsCount,
      (row.volunteers || []).map((person) => person.fullName).filter(Boolean).join(", ") || "—",
      fmtDateTime(row.createdAt),
      <StatusBadge kind="transfer" value={row.status} />,
    ],
  }));

  return (
    <div>
      <PageHead eyebrow="Kho & tồn kho" title="Theo dõi trạng thái chuyển" subtitle="Cùng tiến trình vận đơn với admin. Khi tình nguyện viên xác nhận lấy hàng, đơn chuyển sang Đang vận chuyển." />
      <Notice notice={notice?.text ? notice : wbError ? { tone: "error", text: wbError } : null} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Chờ lấy hàng" value={wbCount("PENDING_PICKUP")} tone="amber" icon={Clock3} />
        <Stat label="Đang vận chuyển" value={wbCount("IN_TRANSIT")} tone="blue" icon={Truck} />
        <Stat label="Đã giao" value={wbCount("DELIVERED")} tone="emerald" icon={CheckCircle2} />
        <Stat label="Sự cố" value={wbCount("FAILED")} tone="rose" icon={XCircle} />
      </div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Chips value={wbFilter} onChange={setWbFilter} items={[["all", "Tất cả", wbCounts.all], ["PENDING_PICKUP", "Chờ lấy hàng", wbCount("PENDING_PICKUP")], ["IN_TRANSIT", "Đang vận chuyển", wbCount("IN_TRANSIT")], ["DELIVERED", "Đã giao", wbCount("DELIVERED")], ["FAILED", "Sự cố", wbCount("FAILED")]]} />
        <SearchBox value={wbSearch} onChange={setWbSearch} placeholder="Tìm mã vận đơn, mã yêu cầu, trường..." />
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <DataTable
          columns={["Mã vận đơn", "Trường nhận", "Hiện vật", "Tình nguyện viên", "Trạng thái", "Lấy hàng"]}
          rows={waybills.map((row) => ({
            key: row.id,
            cells: [
              <button type="button" className="text-left font-semibold text-blue-700 hover:underline" onClick={() => setWbDetail(row)}>{row.code}<span className="block text-[11px] font-normal text-slate-500">{row.allocationPlan?.requisition?.code}</span></button>,
              orgName(row.allocationPlan?.requisition?.school),
              `${waybillItems(row).length} món`,
              (row.volunteers || []).map((person) => person.fullName).join(", ") || "Chưa phân công",
              <StatusBadge kind="waybill" value={row.status} />,
              fmtDateTime(row.dispatchedAt),
            ],
          }))}
          empty="Chưa có vận đơn nào ở trạng thái này."
        />
        <Pager page={wbMeta.page || wbPage} totalPages={wbMeta.totalPages || 1} total={wbMeta.total || 0} onChange={setWbPage} />
      </div>

      <div className="mt-8">
        <h2 className="font-display text-lg font-semibold text-slate-900">Lệnh điều chuyển nội bộ</h2>
        <p className="mt-1 mb-4 text-sm text-slate-500">Hàng chuyển giữa kho và trường bằng lệnh điều chuyển. Đơn tình nguyện viên đã lấy hàng nằm ở danh sách phía trên.</p>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Chips value={filter} onChange={setFilter} items={[["all", "Tất cả", transfers.length], ["PENDING", "Chờ xuất", count("PENDING")], ["IN_TRANSIT", "Đang điều chuyển", count("IN_TRANSIT")], ["RECEIVED", "Hoàn tất", count("RECEIVED")], ["CANCELLED", "Đã hủy", count("CANCELLED")]]} />
          <SearchBox value={search} onChange={setSearch} placeholder="Tìm mã lệnh, trường, người nhận..." />
        </div>
      <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
        <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          <DataTable columns={["Mã lệnh", "Trường nhận / người nhận", "Số món", "Tình nguyện viên", "Tạo lúc", "Trạng thái"]} rows={rows} empty="Chưa có lệnh điều chuyển nào." />
        </div>
        <Card title={selected ? `Chi tiết ${selected.code}` : "Chi tiết lệnh"}>
          {selected ? (
            <>
              <KeyValue rows={[
                ["Trạng thái", <StatusBadge kind="transfer" value={selected.status} />],
                ["Kho xuất", selected.sourceWarehouse?.name],
                ["Trường nhận", selected.targetSchool ? orgName(selected.targetSchool) : "—"],
                ["Địa chỉ giao", selected.deliveryAddress],
                ["Yêu cầu của trường", selected.requisition ? `${selected.requisition.code} · ${selected.requisition.title}` : "—"],
                ["Người nhận", selected.recipientName],
                ["Điện thoại", selected.recipientPhone],
                ["Ghi chú", selected.recipientNote],
                ["Xuất lúc", fmtDateTime(selected.dispatchedAt)],
                ["Hoàn tất lúc", fmtDateTime(selected.receivedAt)],
              ]} />
              <p className="mb-1 mt-4 text-xs font-semibold text-slate-600">Hiện vật ({selected.items?.length || 0})</p>
              <ul className="max-h-40 space-y-1 overflow-y-auto text-xs">
                {(selected.items || []).map((line) => <li key={line.id} className="rounded bg-slate-50 px-2 py-1.5"><b className="font-mono">{line.qrCode}</b> · {line.name}</li>)}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                <GhostButton onClick={() => exportDonors(selected)} disabled={!selected.items?.length}>Xuất Excel theo nhà hảo tâm</GhostButton>
                {selected.status === "IN_TRANSIT" ? <PrimaryButton pending={pending} onClick={() => act(selected, "receive", `Lệnh ${selected.code} đã giao tới trường và hoàn tất.`)}>Xác nhận đã giao tới trường</PrimaryButton> : null}
                {selected.status === "PENDING" ? <GhostButton tone="danger" onClick={() => act(selected, "cancel", `Đã hủy lệnh ${selected.code}.`)}>Hủy lệnh</GhostButton> : null}
              </div>
              {selected.requisition?.id ? (
                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="mb-2 text-xs font-semibold uppercase text-slate-500">Hành trình đơn · đang đi đến đâu</p>
                  <RequisitionJourney requisitionId={selected.requisition.id} reloadKey={reloadKey} />
                </div>
              ) : null}
            </>
          ) : <Empty>Chọn một lệnh để xem chi tiết.</Empty>}
        </Card>
      </div>
      </div>

      {wbDetail ? (
        <Modal wide title={`Vận đơn ${wbDetail.code}`} subtitle={`${wbDetail.allocationPlan?.requisition?.code || ""} · ${orgName(wbDetail.allocationPlan?.requisition?.school)}`} onClose={() => setWbDetail(null)} footer={<GhostButton onClick={() => setWbDetail(null)}>Đóng</GhostButton>}>
          <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
            <Timeline steps={[
              { title: "Kho lập vận đơn", detail: fmtDateTime(wbDetail.createdAt), done: true },
              { title: "Tình nguyện viên xác nhận lấy hàng", detail: wbDetail.dispatchedAt ? fmtDateTime(wbDetail.dispatchedAt) : "Chưa lấy hàng", done: Boolean(wbDetail.dispatchedAt) },
              { title: "Đang vận chuyển tới trường", detail: wbDetail.status === "FAILED" ? "Chuyến gặp sự cố" : wbDetail.status === "DELIVERED" || wbDetail.proof ? "Đã tới trường" : wbDetail.status === "IN_TRANSIT" ? "Đang trên đường" : "Chưa xuất phát", done: ["IN_TRANSIT", "DELIVERED"].includes(wbDetail.status) },
              { title: "Trường ký nhận", detail: wbDetail.proof ? `${wbDetail.proof.recipientName} (${wbDetail.proof.recipientTitle}) · ${fmtDateTime(wbDetail.proof.signedAt)}` : "Chưa ký nhận", done: Boolean(wbDetail.proof) },
            ]} />
            <div>
              <KeyValue rows={[
                ["Trạng thái", <StatusBadge kind="waybill" value={wbDetail.status} />],
                ["Hiện vật", `${waybillItems(wbDetail).length} món`],
                ["Đội tình nguyện", (wbDetail.volunteers || []).map((person) => person.fullName).join(", ") || "—"],
              ]} />
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
