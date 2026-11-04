import { useCallback, useEffect, useState } from "react";
import { ClipboardCheck, Download, ScanLine } from "lucide-react";
import api, { apiError } from "@/lib/api";
import {
  CATEGORIES, CATEGORY_LABEL, Card, Chips, Field, GRADE_LABEL, GhostButton, Notice, PageHead, PrimaryButton, SearchBox, Stat,
  StatusBadge, downloadCsv, fmtDateTime, inputClass, rowsOf, statusMeta, totalOf, useNotice,
} from "@/pages/portals/kit";

const STATUS_CHIPS = [
  ["stock", "Đang trong kho"],
  ["READY_FOR_ALLOCATION", "Sẵn sàng phân bổ"],
  ["PENDING_INTAKE", "Chờ kiểm định"],
  ["INSPECTED", "Đã kiểm định"],
  ["REFURBISHING", "Đang tân trang"],
  ["ALLOCATED", "Đã phân bổ"],
  ["reserve", "Kho dự trữ"],
  ["all", "Toàn bộ lịch sử"],
];

const PAGE = 20;

export default function InventoryScreen({ params, openTab, setParams }) {
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("stock");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [counts, setCounts] = useState({});
  const [summary, setSummary] = useState(null);
  const [selected, setSelected] = useState([]);
  const [audits, setAudits] = useState([]);
  const [auditNote, setAuditNote] = useState("");
  const [pending, setPending] = useState(false);
  const { notice, ok, fail } = useNotice();

  const query = useCallback(() => ({
    status: ["all", "stock", "reserve"].includes(status) ? undefined : status,
    inStock: status === "stock" || status === "reserve" ? true : undefined,
    reserve: status === "reserve" ? true : undefined,
    category: category || undefined,
    search: search.trim() || undefined,
  }), [status, category, search]);

  const load = useCallback(async () => {
    try {
      const response = await api.get("/items", { params: { ...query(), page, limit: PAGE } });
      setRows(rowsOf(response.data));
      setTotal(totalOf(response.data));
    } catch (error) {
      fail(apiError(error, "Không tải được tồn kho."));
    }
  }, [query, page]);

  // Số liệu tổng hợp lấy thẳng từ database (endpoint /items/summary), không tự cộng trên trình duyệt.
  const loadSide = useCallback(async () => {
    try {
      const [summaryResponse, auditResponse] = await Promise.all([
        api.get("/items/summary"),
        api.get("/audit-logs", { params: { limit: 5, action: "KIEM_KE" } }),
      ]);
      const data = summaryResponse.data;
      setSummary(data);
      setCounts({ ...data.status, stock: data.inStock, reserve: data.reserve.total, all: data.total });
      setAudits(rowsOf(auditResponse.data));
    } catch {
      /* số liệu phụ không chặn bảng chính */
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(load, 250);
    return () => window.clearTimeout(timer);
  }, [load]);

  useEffect(() => {
    loadSide();
    const refresh = () => { load(); loadSide(); };
    window.addEventListener("portal:refresh", refresh);
    return () => window.removeEventListener("portal:refresh", refresh);
  }, [load, loadSide]);

  useEffect(() => setPage(1), [status, category, search]);

  const exportRows = (list) => downloadCsv("ton-kho.csv", ["Mã QR", "Tên", "Nhóm", "Phân loại", "Vị trí kệ", "Trạng thái", "Nhập kho"], list.map((item) => [
    item.qrCode, item.name, CATEGORY_LABEL[item.category], GRADE_LABEL[item.grade] || "", item.binLocation || "", statusMeta("item", item.status)[0], fmtDateTime(item.receivedAt),
  ]));

  useEffect(() => {
    const handler = () => exportRows(rows);
    window.addEventListener("portal:export", handler);
    return () => window.removeEventListener("portal:export", handler);
  }, [rows]);

  function openScan(code) {
    const following = new URLSearchParams(params);
    following.set("scan", "1");
    following.set("q", code);
    setParams(following);
  }

  async function recordAudit() {
    setPending(true);
    try {
      const chosen = rows.filter((row) => selected.includes(row.id));
      const scope = chosen.length ? `${chosen.length} mã đã chọn` : `${rows.length} mã đang hiển thị`;
      await api.post("/audit-logs", { action: "KIEM_KE", resource: "Warehouse", note: `${auditNote.trim() || "Kiểm kê định kỳ"} (${scope})` });
      exportRows(chosen.length ? chosen : rows);
      setAuditNote("");
      ok("Đã ghi sổ kiểm kê và xuất biên bản kê kho.");
      loadSide();
    } catch (error) {
      fail(apiError(error, "Không ghi được sổ kiểm kê."));
    } finally {
      setPending(false);
    }
  }

  const pages = Math.max(1, Math.ceil(total / PAGE));
  const toggle = (id) => setSelected((current) => (current.includes(id) ? current.filter((value) => value !== id) : [...current, id]));

  return (
    <div>
      <PageHead eyebrow="Kho & tồn kho" title="Danh sách tồn kho" subtitle="Toàn bộ hiện vật đang được kho quản lý theo mã QR, phân loại và vị trí kệ." />
      <Notice notice={notice} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Đang trong kho" value={counts.stock ?? "…"} />
        <Stat label="Sẵn sàng phân bổ" value={counts.READY_FOR_ALLOCATION ?? "…"} tone="emerald" />
        <Stat label="Chờ kiểm định" value={counts.PENDING_INTAKE ?? "…"} tone="amber" />
        <Stat label="Kho dự trữ (nhà hảo tâm đồng ý lưu)" value={counts.reserve ?? "…"} tone="violet" />
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Chips value={status} onChange={setStatus} items={STATUS_CHIPS.map(([key, label]) => [key, label, counts[key]])} />
        <div className="flex flex-wrap gap-2">
          <select className={`${inputClass} !w-44`} value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">Mọi nhóm hàng</option>
            {CATEGORIES.map(([key, label]) => <option key={key} value={key}>{label}</option>)}
          </select>
          <SearchBox value={search} onChange={setSearch} placeholder="Tìm mã QR, tên, vị trí kệ..." />
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_300px]">
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <tr>
                <th className="w-10 px-3 py-2"><input type="checkbox" checked={rows.length > 0 && selected.length === rows.length} onChange={(event) => setSelected(event.target.checked ? rows.map((row) => row.id) : [])} aria-label="Chọn tất cả" /></th>
                {["Mã QR", "Hiện vật", "Phân loại", "Vị trí kệ", "Trạng thái", "Thao tác"].map((column) => <th key={column} className="px-3 py-2 font-semibold">{column}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((item) => (
                <tr key={item.id} className="border-t border-slate-100">
                  <td className="px-3 py-2"><input type="checkbox" checked={selected.includes(item.id)} onChange={() => toggle(item.id)} /></td>
                  <td className="px-3 py-2 font-mono text-xs font-semibold text-blue-700">{item.qrCode}</td>
                  <td className="px-3 py-2">
                    <p className="font-medium text-slate-800">{item.name}{item.pledgeItem?.pledge?.reserveStock ? <span className="ml-2 rounded-full bg-violet-50 px-2 py-0.5 text-[10px] font-semibold text-violet-700">Dự trữ</span> : null}</p>
                    <p className="text-xs text-slate-500">{CATEGORY_LABEL[item.category]}</p>
                  </td>
                  <td className="px-3 py-2">{GRADE_LABEL[item.grade] || "—"}</td>
                  <td className="px-3 py-2">{item.binLocation || "—"}</td>
                  <td className="px-3 py-2"><StatusBadge kind="item" value={item.status} /></td>
                  <td className="px-3 py-2">
                    <div className="flex gap-1.5">
                      <GhostButton onClick={() => openScan(item.qrCode)}><ScanLine size={12} />Quét</GhostButton>
                      {item.status === "PENDING_INTAKE" ? <GhostButton onClick={() => openTab("inspect", { item: item.id })}>Kiểm định</GhostButton> : null}
                    </div>
                  </td>
                </tr>
              ))}
              {!rows.length ? <tr><td colSpan={7} className="px-3 py-8 text-center text-sm text-slate-500">Không có hiện vật nào khớp bộ lọc.</td></tr> : null}
            </tbody>
          </table>
          <div className="flex items-center justify-between border-t border-slate-100 px-3 py-2 text-xs text-slate-500">
            <span>{total} hiện vật · trang {page}/{pages}</span>
            <div className="flex gap-2"><GhostButton disabled={page <= 1} onClick={() => setPage(page - 1)}>Trước</GhostButton><GhostButton disabled={page >= pages} onClick={() => setPage(page + 1)}>Sau</GhostButton></div>
          </div>
        </div>

        <div className="space-y-5">
          <Card title="Kiểm kê & biên bản" hint={selected.length ? `${selected.length} mã đã chọn` : "Chưa chọn mã nào: lấy toàn bộ trang hiện tại"}>
            <Field label="Ghi chú kiểm kê"><input className={inputClass} value={auditNote} onChange={(event) => setAuditNote(event.target.value)} placeholder="Kiểm kê cuối tháng..." /></Field>
            <PrimaryButton className="mt-3 w-full" pending={pending} onClick={recordAudit}><ClipboardCheck size={15} />Ghi sổ & xuất biên bản kê kho</PrimaryButton>
            <GhostButton className="mt-2 w-full" onClick={() => exportRows(rows)}><Download size={13} />Chỉ xuất CSV</GhostButton>
          </Card>
          <Card title="Tồn theo nhóm hàng" hint="Đang trong kho / sẵn sàng phân bổ / dự trữ">
            {summary?.byCategory?.length ? (
              <ul className="space-y-2 text-xs text-slate-600">
                {summary.byCategory.map((row) => (
                  <li key={row.category} className="flex items-center justify-between rounded bg-slate-50 px-2 py-1.5">
                    <span className="font-medium text-slate-700">{CATEGORY_LABEL[row.category] || row.category}</span>
                    <span className="font-mono">{row.inStock} / {row.ready} / {row.reserve}</span>
                  </li>
                ))}
              </ul>
            ) : <p className="text-xs text-slate-500">Kho chưa có hiện vật.</p>}
          </Card>
          <Card title="Sổ kiểm kê gần đây">
            {audits.length ? <ul className="space-y-2 text-xs text-slate-600">{audits.map((row) => <li key={row.id} className="rounded bg-slate-50 p-2">{row.details?.note || row.resource}<span className="block text-[10px] text-slate-400">{fmtDateTime(row.createdAt)}</span></li>)}</ul> : <p className="text-xs text-slate-500">Chưa có bản ghi kiểm kê.</p>}
          </Card>
        </div>
      </div>
    </div>
  );
}
