import { useMemo, useState } from "react";
import { Download, QrCode } from "lucide-react";
import {
  CATEGORIES, CATEGORY_LABEL, Chips, DataTable, GRADE_LABEL, GhostButton, Notice, PageHead, SearchBox, Stat, StatusBadge,
  downloadCsv, orgName, statusMeta, useNotice, useWaybills, waybillItems,
} from "@/pages/portals/kit";

function specText(item) {
  const spec = item.specifications;
  if (!spec || typeof spec !== "object") return "—";
  return Object.entries(spec).map(([key, value]) => `${key}: ${value}`).join(" · ") || "—";
}

export default function EquipmentScreen({ openTab }) {
  const { waybills, error } = useWaybills();
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [code, setCode] = useState("");
  const [checked, setChecked] = useState(null);
  const { notice, fail } = useNotice();

  const entries = useMemo(() => waybills.flatMap((waybill) => waybillItems(waybill).map((item) => ({ waybill, item }))), [waybills]);
  const donors = new Set(entries.map(({ item }) => item.pledgeItem?.pledge?.donor?.fullName).filter(Boolean));
  const origins = new Set(entries.map(({ item }) => item.warehouse?.name).filter(Boolean));

  const visible = entries.filter(({ item }) => {
    if (category !== "all" && item.category !== category) return false;
    const term = search.trim().toLowerCase();
    return !term || `${item.qrCode} ${item.name}`.toLowerCase().includes(term);
  });

  function verify(event) {
    event.preventDefault();
    const term = code.trim().toLowerCase();
    if (!term) return;
    const match = entries.find(({ item }) => item.qrCode.toLowerCase() === term);
    if (!match) {
      setChecked({ found: false, code: code.trim() });
      return;
    }
    setChecked({ found: true, code: match.item.qrCode, status: match.item.status, waybill: match.waybill.code });
  }

  function exportCsv() {
    downloadCsv("tai-nguyen-phan-bo.csv", ["Vận đơn", "Mã QR", "Tên", "Nhóm", "Quy cách", "Phân loại", "Nhà tài trợ", "Kho xuất", "Trạng thái"], visible.map(({ waybill, item }) => [
      waybill.code, item.qrCode, item.name, CATEGORY_LABEL[item.category], specText(item), GRADE_LABEL[item.grade] || "",
      item.pledgeItem?.pledge?.donor?.fullName || "", item.warehouse?.name || "", statusMeta("item", item.status)[0],
    ]));
  }

  const rows = visible.map(({ waybill, item }) => ({
    key: `${waybill.id}-${item.id}`,
    cells: [
      <button type="button" className="font-mono text-xs font-semibold text-blue-700 hover:underline" onClick={() => openTab("trace", { q: item.qrCode })}>{item.qrCode}</button>,
      <div><p className="font-medium text-slate-800">{item.name}</p><p className="text-xs text-slate-500">{specText(item)}</p></div>,
      CATEGORY_LABEL[item.category],
      GRADE_LABEL[item.grade] || "—",
      item.pledgeItem?.pledge?.donor ? orgName(item.pledgeItem.pledge.donor) : "—",
      <button type="button" className="text-xs font-semibold text-blue-700 hover:underline" onClick={() => openTab("waybill", { waybill: waybill.id })}>{waybill.code}</button>,
      <StatusBadge kind="item" value={item.status} />,
    ],
  }));

  return (
    <div>
      <PageHead
        eyebrow="2. Phân bổ & mã QR"
        title="Tài nguyên được phân bổ"
        subtitle="Danh sách thiết bị, học liệu kho đã phân bổ cho trường kèm mã QR để đối soát khi nhận hàng."
        actions={<GhostButton onClick={exportCsv} disabled={!visible.length}><Download size={14} />Xuất danh sách (CSV)</GhostButton>}
      />
      <Notice notice={error ? { tone: "error", text: error } : notice} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Tổng số món" value={entries.length} icon={QrCode} />
        <Stat label="Đã giao" value={entries.filter(({ item }) => item.status === "DELIVERED").length} tone="emerald" />
        <Stat label="Kho xuất hàng" value={origins.size} tone="violet" />
        <Stat label="Nhà tài trợ" value={donors.size} tone="amber" />
      </div>

      <form onSubmit={verify} className="mb-4 flex flex-wrap items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <QrCode size={18} className="text-blue-600" />
        <input value={code} onChange={(event) => setCode(event.target.value)} className="min-w-[220px] flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500" placeholder="Nhập hoặc quét mã QR để đối soát với danh sách" />
        <GhostButton type="submit">Đối soát</GhostButton>
        {checked ? (
          <p className={`text-sm font-medium ${checked.found ? "text-emerald-700" : "text-rose-700"}`}>
            {checked.found ? `✓ ${checked.code} thuộc vận đơn ${checked.waybill} (${statusMeta("item", checked.status)[0]})` : `✗ ${checked.code} không thuộc danh sách phân bổ cho trường bạn`}
          </p>
        ) : null}
      </form>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Chips value={category} onChange={setCategory} items={[["all", "Tất cả", entries.length], ...CATEGORIES.map(([key, label]) => [key, label, entries.filter(({ item }) => item.category === key).length]).filter((row) => row[2] > 0)]} />
        <SearchBox value={search} onChange={setSearch} placeholder="Tìm mã QR hoặc tên..." />
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <DataTable columns={["Mã QR", "Tài nguyên", "Nhóm", "Phân loại", "Nhà tài trợ", "Vận đơn", "Trạng thái"]} rows={rows} empty="Trường chưa được phân bổ tài nguyên nào." />
      </div>
    </div>
  );
}
