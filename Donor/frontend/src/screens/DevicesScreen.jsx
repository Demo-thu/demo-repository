import { useCallback, useEffect, useState } from "react";
import { Download } from "lucide-react";
import api, { apiError } from "@/lib/api";
import {
  CATEGORIES, CATEGORY_LABEL, Card, Chips, DataTable, Empty, GRADE_LABEL, GhostButton, ItemJourney, Notice, PageHead,
  SearchBox, StatusBadge, downloadCsv, rowsOf, useNotice,
} from "@/pages/portals/kit";

export default function DevicesScreen({ params }) {
  const [devices, setDevices] = useState([]);
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState(params.get("q") || "");
  const [selected, setSelected] = useState(params.get("q") || "");
  const { notice, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const response = await api.get("/pledges/devices", { params: { limit: 100, category: category === "all" ? undefined : category, search: search.trim() || undefined } });
      setDevices(rowsOf(response.data));
      setTotal(response.data.total ?? 0);
    } catch (error) {
      fail(apiError(error, "Không tải được danh sách thiết bị."));
    }
  }, [category, search]);

  useEffect(() => {
    const timer = window.setTimeout(load, 250);
    return () => window.clearTimeout(timer);
  }, [load]);

  useEffect(() => {
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  useEffect(() => {
    const code = params.get("q");
    if (code) {
      setSearch(code);
      setSelected(code);
    }
  }, [params]);

  function exportCsv() {
    downloadCsv("ma-qr-thiet-bi.csv", ["Mã QR", "Tên", "Nhóm", "Phân loại", "Trạng thái", "Phiếu", "Trường nhận"], devices.map((item) => [
      item.qrCode, item.name, CATEGORY_LABEL[item.category], GRADE_LABEL[item.grade] || "", item.status, item.pledgeItem?.pledge?.code || "",
      item.allocationItem?.allocationPlan?.requisition?.school?.fullName || "",
    ]));
  }

  const rows = devices.map((item) => ({
    key: item.id,
    cells: [
      <button type="button" className="font-mono text-xs font-semibold text-blue-700 hover:underline" onClick={() => setSelected(item.qrCode)}>{item.qrCode}</button>,
      item.name,
      CATEGORY_LABEL[item.category],
      GRADE_LABEL[item.grade] || "—",
      item.pledgeItem?.pledge?.code || "—",
      <StatusBadge kind="item" value={item.status} />,
      item.allocationItem?.allocationPlan?.requisition?.school?.fullName || "—",
    ],
  }));

  return (
    <div>
      <PageHead
        eyebrow="Truy vết thiết bị"
        title="Mã QR thiết bị của tôi"
        subtitle={`${total} thiết bị đã được kho cấp mã QR từ các phiếu trao tặng của bạn.`}
        actions={<GhostButton onClick={exportCsv} disabled={!devices.length}><Download size={14} />Xuất CSV</GhostButton>}
      />
      <Notice notice={notice} />
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Chips value={category} onChange={setCategory} items={[["all", "Tất cả"], ...CATEGORIES]} />
        <SearchBox value={search} onChange={setSearch} placeholder="Tìm mã QR hoặc tên thiết bị..." />
      </div>
      <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          <DataTable columns={["Mã QR", "Thiết bị", "Nhóm", "Phân loại", "Phiếu", "Trạng thái", "Trường nhận"]} rows={rows} empty="Chưa có thiết bị nào được cấp mã QR. Mã sẽ xuất hiện sau khi kho nhập phiếu của bạn." />
        </div>
        <Card title="Hành trình mã QR" hint="Chọn một mã trong bảng để xem hành trình từ kho tới học sinh.">
          {selected ? <ItemJourney qr={selected} /> : <Empty>Chưa chọn mã QR nào.</Empty>}
        </Card>
      </div>
    </div>
  );
}
