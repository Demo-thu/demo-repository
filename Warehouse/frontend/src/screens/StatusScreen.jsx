import { useCallback, useEffect, useState } from "react";
import { ArrowRightLeft, CheckCircle2, Clock3, Truck, XCircle } from "lucide-react";
import api, { apiError } from "@/lib/api";
import {
  Card, Chips, DataTable, Empty, GhostButton, KeyValue, Notice, PageHead, PrimaryButton, RequisitionJourney, SearchBox, Stat, StatusBadge,
  downloadCsv, exportDonorWorkbook, fmtDateTime, orgName, rowsOf, useNotice,
} from "@/pages/portals/kit";

export default function StatusScreen() {
  const [transfers, setTransfers] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [reloadKey, setReloadKey] = useState(0);
  const [pending, setPending] = useState(false);
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
      <PageHead eyebrow="Kho & tồn kho" title="Theo dõi trạng thái chuyển" subtitle="Mọi lệnh điều chuyển hàng ra khỏi kho tới trường. Lệnh đã xuất chuyển sang “Đang vận chuyển” để kho và admin theo dõi đơn đang đi đến đâu." />
      <Notice notice={notice} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-5">
        <Stat label="Tổng lệnh" value={transfers.length} icon={ArrowRightLeft} />
        <Stat label="Chờ xuất" value={count("PENDING")} tone="amber" icon={Clock3} />
        <Stat label="Đang vận chuyển" value={count("IN_TRANSIT")} tone="blue" icon={Truck} />
        <Stat label="Đã hoàn tất" value={count("RECEIVED")} tone="emerald" icon={CheckCircle2} />
        <Stat label="Đã hủy" value={count("CANCELLED")} tone="rose" icon={XCircle} />
      </div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Chips value={filter} onChange={setFilter} items={[["all", "Tất cả", transfers.length], ["PENDING", "Chờ xuất", count("PENDING")], ["IN_TRANSIT", "Đang vận chuyển", count("IN_TRANSIT")], ["RECEIVED", "Hoàn tất", count("RECEIVED")], ["CANCELLED", "Đã hủy", count("CANCELLED")]]} />
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
  );
}
