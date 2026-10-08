import { useCallback, useEffect, useRef, useState } from "react";
import { Check, ScanLine, Wrench, XCircle } from "lucide-react";
import api, { apiError } from "@/lib/api";
import {
  CATEGORY_LABEL, Card, Empty, Field, GRADE_LABEL, KeyValue, Notice, PageHead, PrimaryButton, Stat, StatusBadge, fmtDateTime,
  inputClass, rowsOf, useNotice,
} from "@/pages/portals/kit";

const CHECKS = [
  ["appearance", "Ngoại quan nguyên vẹn"],
  ["function", "Hoạt động bình thường"],
  ["accessories", "Đủ phụ kiện / nội dung"],
  ["safety", "An toàn sử dụng"],
];

function specLine(item) {
  const spec = item?.specifications;
  if (!spec || typeof spec !== "object") return "";
  return Object.entries(spec).map(([key, value]) => `${key}: ${value}`).join(" · ");
}

export default function InspectScreen({ params }) {
  const [queue, setQueue] = useState([]);
  const [selectedId, setSelectedId] = useState(params.get("item") || "");
  const [scanCode, setScanCode] = useState("");
  const [checks, setChecks] = useState({ appearance: true, function: true, accessories: true, safety: true });
  const [specs, setSpecs] = useState({ ram: "", cpu: "", battery: "" });
  const [defects, setDefects] = useState("");
  const [done, setDone] = useState(0);
  const [pending, setPending] = useState(false);
  const startedAt = useRef(Date.now());
  const { notice, ok, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const [intake, refurbishing] = await Promise.all([
        api.get("/items", { params: { status: "PENDING_INTAKE", limit: 100 } }),
        api.get("/items", { params: { status: "REFURBISHING", limit: 100 } }),
      ]);
      const rows = [...rowsOf(intake.data), ...rowsOf(refurbishing.data)];
      setQueue(rows);
      setSelectedId((current) => (rows.some((row) => row.id === current) ? current : params.get("item") || rows[0]?.id || ""));
    } catch (error) {
      fail(apiError(error, "Không tải được hàng chờ kiểm định."));
    }
  }, [params]);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  const item = queue.find((row) => row.id === selectedId);

  function select(id) {
    setSelectedId(id);
    setChecks({ appearance: true, function: true, accessories: true, safety: true });
    setSpecs({ ram: "", cpu: "", battery: "" });
    setDefects("");
  }

  function scan(event) {
    event.preventDefault();
    const term = scanCode.trim().toLowerCase();
    if (!term) return;
    const match = queue.find((row) => row.qrCode.toLowerCase() === term);
    if (match) {
      select(match.id);
      setScanCode("");
    } else {
      fail(`Mã "${scanCode.trim()}" không nằm trong hàng chờ kiểm định (có thể đã kiểm hoặc chưa nhập kho).`);
    }
  }

  async function decide(grade, action) {
    if (!item) return;
    const failed = CHECKS.filter(([key]) => !checks[key]).map(([, label]) => label);
    if (action === "ALLOCATE" && failed.length) {
      fail(`Còn mục chưa đạt (${failed.join(", ")}). Hãy chọn tân trang hoặc loại bỏ.`);
      return;
    }
    setPending(true);
    try {
      const filled = Object.fromEntries(Object.entries(specs).filter(([, value]) => value.trim()));
      if (Object.keys(filled).length && item.category === "IT_DEVICES") {
        await api.patch(`/items/${item.id}`, { specifications: filled });
      }
      const defectText = [...failed.map((label) => `Không đạt: ${label}`), defects.trim()].filter(Boolean).join("; ");
      await api.post("/inspections", {
        resourceItemId: item.id,
        isFunctional: action === "ALLOCATE",
        grade,
        recommendedAction: action,
        physicalDefects: defectText || undefined,
      });
      ok(`${item.qrCode}: ${action === "ALLOCATE" ? `Đạt ${GRADE_LABEL[grade]}, sẵn sàng phân bổ` : action === "REFURBISH" ? "chuyển tân trang" : "loại bỏ / tái chế"}.`);
      setDone((count) => count + 1);
      await load();
    } catch (error) {
      fail(apiError(error, "Không lưu được kiểm định."));
    } finally {
      setPending(false);
    }
  }

  const minutes = Math.max(1, Math.round((Date.now() - startedAt.current) / 60000));

  return (
    <div>
      <PageHead eyebrow="Tiếp nhận & kiểm định" title="Kiểm định 1 chạm" subtitle="Quét mã, tick các mục kiểm tra rồi chốt kết quả: một thao tác ghi cả phân loại và hướng xử lý." />
      <Notice notice={notice} />
      <div className="mb-5 grid grid-cols-3 gap-3">
        <Stat label="Chờ kiểm định" value={queue.length} tone="amber" />
        <Stat label="Đã kiểm trong phiên" value={done} tone="emerald" />
        <Stat label="Thời gian phiên" value={`${minutes} phút`} tone="violet" />
      </div>

      <div className="grid gap-5 xl:grid-cols-[320px_1fr]">
        <Card title="Hàng chờ">
          <form onSubmit={scan} className="mb-3 flex gap-2">
            <div className="relative flex-1"><ScanLine size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><input value={scanCode} onChange={(event) => setScanCode(event.target.value)} className={`${inputClass} pl-9`} placeholder="Quét / nhập mã QR" /></div>
            <PrimaryButton type="submit">Chọn</PrimaryButton>
          </form>
          {queue.length ? (
            <ul className="max-h-[520px] space-y-1 overflow-y-auto pr-1">
              {queue.map((row) => (
                <li key={row.id}>
                  <button type="button" onClick={() => select(row.id)} className={`w-full rounded-lg px-3 py-2 text-left text-sm ${row.id === selectedId ? "bg-blue-50 ring-1 ring-blue-300" : "bg-slate-50 hover:bg-blue-50/60"}`}>
                    <b className="font-mono text-xs">{row.qrCode}</b>
                    <span className="block text-xs text-slate-600">{row.name}</span>
                    <StatusBadge kind="item" value={row.status} />
                  </button>
                </li>
              ))}
            </ul>
          ) : <Empty>Hàng chờ trống. Nhập kho phiếu mới để có hiện vật cần kiểm định.</Empty>}
        </Card>

        {item ? (
          <div className="space-y-5">
            <Card>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs font-semibold text-blue-700">{item.qrCode}</p>
                  <h2 className="font-display text-xl font-semibold text-slate-900">{item.name}</h2>
                  <p className="text-xs text-slate-500">{CATEGORY_LABEL[item.category]} · nhập {fmtDateTime(item.receivedAt)}</p>
                </div>
                <StatusBadge kind="item" value={item.status} />
              </div>
              <div className="mt-3"><KeyValue rows={[["Phiếu nguồn", item.pledgeItem?.pledge?.code], ["Vị trí kệ", item.binLocation], ["Thông số", specLine(item) || "Chưa khai báo"]]} /></div>
            </Card>

            <Card title="Danh mục kiểm tra">
              <div className="grid gap-2 sm:grid-cols-2">
                {CHECKS.map(([key, label]) => (
                  <label key={key} className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-sm ${checks[key] ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-rose-200 bg-rose-50 text-rose-800"}`}>
                    <input type="checkbox" checked={checks[key]} onChange={(event) => setChecks({ ...checks, [key]: event.target.checked })} />{label}
                  </label>
                ))}
              </div>
              {item.category === "IT_DEVICES" ? (
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <Field label="RAM"><input className={inputClass} value={specs.ram} onChange={(event) => setSpecs({ ...specs, ram: event.target.value })} placeholder="8GB" /></Field>
                  <Field label="CPU"><input className={inputClass} value={specs.cpu} onChange={(event) => setSpecs({ ...specs, cpu: event.target.value })} placeholder="Core i5" /></Field>
                  <Field label="Pin"><input className={inputClass} value={specs.battery} onChange={(event) => setSpecs({ ...specs, battery: event.target.value })} placeholder="85%" /></Field>
                </div>
              ) : null}
              <div className="mt-4"><Field label="Ghi chú hư hỏng (nếu có)"><textarea rows={2} maxLength={800} className={inputClass} value={defects} onChange={(event) => setDefects(event.target.value)} /></Field></div>
            </Card>

            <div className="grid gap-3 sm:grid-cols-4">
              <PrimaryButton pending={pending} className="!bg-emerald-600 hover:!bg-emerald-700" onClick={() => decide("GRADE_A", "ALLOCATE")}><Check size={15} />Đạt · Loại A</PrimaryButton>
              <PrimaryButton pending={pending} onClick={() => decide("GRADE_B", "ALLOCATE")}><Check size={15} />Đạt · Loại B</PrimaryButton>
              <PrimaryButton pending={pending} className="!bg-amber-500 hover:!bg-amber-600" onClick={() => decide("GRADE_C", "REFURBISH")}><Wrench size={15} />Tân trang · Loại C</PrimaryButton>
              <PrimaryButton pending={pending} className="!bg-rose-600 hover:!bg-rose-700" onClick={() => decide("REJECTED", "RECYCLE")}><XCircle size={15} />Loại bỏ / tái chế</PrimaryButton>
            </div>
          </div>
        ) : <Empty>Chọn một mã QR trong hàng chờ để kiểm định.</Empty>}
      </div>
    </div>
  );
}
