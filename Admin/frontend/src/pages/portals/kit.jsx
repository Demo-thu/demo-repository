import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import QRCode from "qrcode";
import api, { apiError } from "../../lib/api";
import { Camera, CheckCircle2, ImagePlus, TriangleAlert, X } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Hằng số & nhãn dùng chung cho 4 cổng (cùng bộ màu với trang Admin)   */
/* ------------------------------------------------------------------ */

export const inputClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50 disabled:text-slate-400";

export const CATEGORIES = [
  ["IT_DEVICES", "Thiết bị tin học"],
  ["BOOKS", "Sách giáo khoa"],
  ["STATIONERY", "Văn phòng phẩm"],
  ["UNIFORMS", "Đồng phục"],
  ["FURNITURE", "Bàn ghế"],
  ["VEHICLES", "Phương tiện"],
];

export const CATEGORY_LABEL = Object.fromEntries(CATEGORIES);

export const CATEGORY_UNIT = {
  IT_DEVICES: "cái",
  BOOKS: "cuốn",
  STATIONERY: "bộ",
  UNIFORMS: "bộ",
  FURNITURE: "bộ",
  VEHICLES: "chiếc",
};

export const CATEGORY_RACK = {
  IT_DEVICES: "Kệ IT-A",
  BOOKS: "Kệ SGK-B",
  STATIONERY: "Kệ VPP-C",
  UNIFORMS: "Kệ DP-D",
  FURNITURE: "Khu BG-E",
  VEHICLES: "Khu XE-F",
};

export const GRADE_LABEL = {
  GRADE_A: "Loại A",
  GRADE_B: "Loại B",
  GRADE_C: "Loại C",
  REJECTED: "Loại bỏ",
};

export const URGENCY_LABEL = { LOW: "Thấp", MEDIUM: "Trung bình", HIGH: "Cao", CRITICAL: "Khẩn cấp" };

const STATUS_META = {
  pledge: {
    PENDING: ["Chờ tiếp nhận", "amber"],
    VERIFIED: ["Đã xác minh", "blue"],
    PARTIALLY_RECEIVED: ["Nhận một phần", "violet"],
    COMPLETED: ["Hoàn tất", "emerald"],
    CANCELLED: ["Đã hủy", "slate"],
  },
  item: {
    PENDING_INTAKE: ["Chờ kiểm định", "amber"],
    INSPECTED: ["Đã kiểm định", "blue"],
    REFURBISHING: ["Đang tân trang", "violet"],
    READY_FOR_ALLOCATION: ["Sẵn sàng phân bổ", "emerald"],
    ALLOCATED: ["Đã phân bổ", "blue"],
    IN_TRANSIT: ["Đang vận chuyển", "violet"],
    DELIVERED: ["Đã giao", "emerald"],
    RECYCLED: ["Tái chế", "slate"],
  },
  waybill: {
    PENDING_PICKUP: ["Chờ lấy hàng", "amber"],
    IN_TRANSIT: ["Đang vận chuyển", "blue"],
    DELIVERED: ["Đã giao", "emerald"],
    FAILED: ["Sự cố", "rose"],
  },
  requisition: {
    PENDING: ["Chờ xét duyệt", "amber"],
    APPROVED: ["Đã duyệt", "emerald"],
    ALLOCATING: ["Đang điều phối", "blue"],
    COMPLETED: ["Hoàn tất", "emerald"],
    REJECTED: ["Từ chối", "rose"],
  },
  transfer: {
    PENDING: ["Chờ xuất", "amber"],
    IN_TRANSIT: ["Đang vận chuyển", "blue"],
    RECEIVED: ["Đã hoàn tất", "emerald"],
    CANCELLED: ["Đã hủy", "slate"],
  },
  allocation: {
    PROPOSED: ["Chờ admin xác nhận", "amber"],
    CONFIRMED: ["Admin đã xác nhận", "emerald"],
    DISPATCHED: ["Đã xuất kho", "blue"],
    CANCELLED: ["Đã hủy", "slate"],
  },
  campaign: {
    UPCOMING: ["Sắp mở", "violet"],
    ACTIVE: ["Đang diễn ra", "emerald"],
    PAUSED: ["Tạm dừng", "amber"],
    COMPLETED: ["Đã hoàn thành", "slate"],
  },
  shift: {
    SORTING: ["Phân loại hàng", "blue"],
    PACKING: ["Đóng gói", "violet"],
    DELIVERY: ["Giao hàng", "emerald"],
  },
};

export function statusMeta(kind, value) {
  return STATUS_META[kind]?.[value] || [value || "—", "slate"];
}

/* ------------------------------------------------------------------ */
/* Hàm tiện ích                                                         */
/* ------------------------------------------------------------------ */

export function rowsOf(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
}

export function fmtDate(value) {
  if (!value) return "—";
  return new Date(value).toLocaleDateString("vi-VN");
}

export function fmtTime(value) {
  if (!value) return "—";
  return new Date(value).toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
}

export function fmtDateTime(value) {
  if (!value) return "—";
  return `${fmtTime(value)} ${fmtDate(value)}`;
}

export function orgName(user) {
  return user?.profile?.organizationName || user?.fullName || "—";
}

export function shortId(prefix, id) {
  return `#${prefix}-${String(id || "").replace(/-/g, "").slice(0, 4).toUpperCase()}`;
}

export function percent(value, total) {
  if (!total) return 0;
  return Math.max(0, Math.min(100, Math.round((value / total) * 100)));
}

export function downloadCsv(filename, header, rows) {
  const escape = (cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`;
  const content = [header, ...rows].map((row) => row.map(escape).join(",")).join("\r\n");
  const blob = new Blob(["\ufeff", content], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

/** Đọc ảnh người dùng chọn và nén xuống JPEG nhỏ để lưu thẳng trong hồ sơ. */
export function readImage(file, maxSide = 900, quality = 0.72) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Không đọc được tệp ảnh"));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("Tệp không phải ảnh hợp lệ"));
      image.onload = () => {
        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      image.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}

export async function sha256Hex(text) {
  const bytes = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

/** Đọc tệp (ảnh/PDF) thành data URL để lưu cùng hồ sơ. */
export function readDocument(file, maxBytes = 1_500_000) {
  return new Promise((resolve, reject) => {
    if (file.size > maxBytes) {
      reject(new Error("Tệp quá lớn (tối đa 1,5 MB). Hãy nén hoặc chọn tệp khác."));
      return;
    }
    if (file.type.startsWith("image/")) {
      readImage(file, 1400, 0.8).then(resolve, reject);
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Không đọc được tệp"));
    reader.onload = () => resolve(String(reader.result));
    reader.readAsDataURL(file);
  });
}

export async function openDocument(url) {
  if (!url) return;
  if (!url.startsWith("data:")) {
    window.open(url, "_blank", "noopener");
    return;
  }
  const blob = await (await fetch(url)).blob();
  window.open(URL.createObjectURL(blob), "_blank");
}

export function currentPosition() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(null);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy }),
      () => resolve(null),
      { enableHighAccuracy: true, timeout: 8000 },
    );
  });
}

/* ------------------------------------------------------------------ */
/* Hook                                                                 */
/* ------------------------------------------------------------------ */

export function usePortalTab() {
  const [params, setParams] = useSearchParams();
  const tab = params.get("tab");
  const openTab = useCallback(
    (next, extra = {}) => {
      setParams((current) => {
        const following = new URLSearchParams(current);
        following.set("tab", next);
        ["q", "scan", "pledge", "item", "campaign", "requisition", "waybill", "edit"].forEach((key) => following.delete(key));
        Object.entries(extra).forEach(([key, value]) => {
          if (value) following.set(key, value);
        });
        return following;
      });
    },
    [setParams],
  );
  return { params, tab, openTab, setParams };
}

export function useNotice() {
  const [notice, setNotice] = useState(null);
  useEffect(() => {
    if (!notice || notice.tone === "error") return undefined;
    const timer = window.setTimeout(() => setNotice(null), 6000);
    return () => window.clearTimeout(timer);
  }, [notice]);
  return {
    notice,
    ok: (text) => setNotice({ text, tone: "ok" }),
    fail: (text) => setNotice({ text, tone: "error" }),
    clear: () => setNotice(null),
  };
}

export function waybillItems(waybill) {
  return (waybill?.allocationPlan?.items || []).map((line) => line.resourceItem).filter(Boolean);
}

export function useWaybills(status) {
  const [waybills, setWaybills] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const reload = useCallback(async () => {
    try {
      const response = await api.get("/waybills", { params: { limit: 100, status: status || undefined } });
      setWaybills(rowsOf(response.data));
      setError("");
    } catch (failure) {
      setError(apiError(failure, "Không tải được vận đơn."));
    } finally {
      setLoading(false);
    }
  }, [status]);
  useEffect(() => {
    reload();
    window.addEventListener("portal:refresh", reload);
    return () => window.removeEventListener("portal:refresh", reload);
  }, [reload]);
  return { waybills, error, loading, reload };
}

export function useAutoRefresh(callback, ms) {
  const saved = useRef(callback);
  saved.current = callback;
  useEffect(() => {
    const timer = window.setInterval(() => saved.current(), ms);
    return () => window.clearInterval(timer);
  }, [ms]);
}

/* ------------------------------------------------------------------ */
/* Thành phần giao diện                                                 */
/* ------------------------------------------------------------------ */

const TONES = {
  blue: "bg-blue-50 text-blue-700 ring-blue-100",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  amber: "bg-amber-50 text-amber-700 ring-amber-100",
  rose: "bg-rose-50 text-rose-700 ring-rose-100",
  violet: "bg-violet-50 text-violet-700 ring-violet-100",
  slate: "bg-slate-100 text-slate-600 ring-slate-200",
};

export function Badge({ tone = "slate", children }) {
  return <span className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ${TONES[tone] || TONES.slate}`}>{children}</span>;
}

export function StatusBadge({ kind, value }) {
  const [label, tone] = statusMeta(kind, value);
  return <Badge tone={tone}>{label}</Badge>;
}

export function PageHead({ eyebrow, title, subtitle, actions }) {
  return (
    <header className="mb-5 flex flex-wrap items-end justify-between gap-3">
      <div>
        {eyebrow ? <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">{eyebrow}</p> : null}
        <h1 className="font-display text-2xl font-semibold text-slate-900">{title}</h1>
        {subtitle ? <p className="mt-1 max-w-3xl text-sm text-slate-500">{subtitle}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </header>
  );
}

export function Card({ title, hint, actions, children, className = "" }) {
  return (
    <section className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>
      {title || actions ? (
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            {title ? <h2 className="font-display text-base font-semibold text-slate-900">{title}</h2> : null}
            {hint ? <p className="mt-0.5 text-xs text-slate-500">{hint}</p> : null}
          </div>
          {actions}
        </div>
      ) : null}
      {children}
    </section>
  );
}

export function Stat({ label, value, hint, tone = "blue", icon: Icon }) {
  const accent = { blue: "text-blue-700", emerald: "text-emerald-700", amber: "text-amber-700", rose: "text-rose-700", violet: "text-violet-700", slate: "text-slate-700" }[tone];
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{label}</p>
        {Icon ? <Icon size={16} className={accent} /> : null}
      </div>
      <p className={`mt-1 font-display text-2xl font-semibold ${accent}`}>{value}</p>
      {hint ? <p className="mt-0.5 text-[11px] text-slate-500">{hint}</p> : null}
    </div>
  );
}

export function Chips({ items, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(([key, label, count]) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${value === key ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"}`}
        >
          {label}
          {count !== undefined ? <span className={`ml-1.5 rounded-full px-1.5 text-[10px] ${value === key ? "bg-white/25" : "bg-slate-100 text-slate-500"}`}>{count}</span> : null}
        </button>
      ))}
    </div>
  );
}

export function Field({ label, hint, children }) {
  return (
    <label className="block text-xs font-semibold text-slate-600">
      {label}
      <div className="mt-1 font-normal">{children}</div>
      {hint ? <span className="mt-1 block text-[11px] font-normal text-slate-400">{hint}</span> : null}
    </label>
  );
}

export function Notice({ notice }) {
  if (!notice) return null;
  const error = notice.tone === "error";
  const Icon = error ? TriangleAlert : CheckCircle2;
  return (
    <div className={`mb-4 flex items-start gap-2 rounded-lg px-4 py-3 text-sm ${error ? "bg-rose-50 text-rose-800" : "bg-teal-50 text-teal-800"}`} role="status">
      <Icon size={16} className="mt-0.5 shrink-0" />
      <span>{notice.text}</span>
    </div>
  );
}

export function Panel({ title, hint, children }) {
  return (
    <Card title={title} hint={hint}>
      <div className="space-y-3">{children}</div>
    </Card>
  );
}

export function PrimaryButton({ children, pending, className = "", ...props }) {
  return (
    <button type="button" {...props} disabled={pending || props.disabled} className={`inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}>
      {pending ? "Đang xử lý..." : children}
    </button>
  );
}

export function GhostButton({ children, tone = "slate", className = "", ...props }) {
  const color = tone === "danger" ? "border-rose-200 text-rose-700 hover:bg-rose-50" : "border-slate-200 text-slate-700 hover:bg-slate-50";
  return (
    <button type="button" {...props} className={`inline-flex items-center justify-center gap-2 rounded-lg border bg-white px-3 py-2 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${color} ${className}`}>
      {children}
    </button>
  );
}

export function SearchBox({ value, onChange, placeholder }) {
  return <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className={`${inputClass} max-w-xs`} />;
}

export function Empty({ children }) {
  return <p className="rounded-lg bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">{children}</p>;
}

export function Progress({ value, tone = "blue" }) {
  const color = { blue: "bg-blue-600", emerald: "bg-emerald-500", amber: "bg-amber-500", rose: "bg-rose-500" }[tone];
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}

export function DataTable({ columns, rows, empty = "Chưa có dữ liệu." }) {
  if (!rows.length) return <Empty>{empty}</Empty>;
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="text-[10px] uppercase tracking-wide text-slate-500">
          <tr>{columns.map((column) => <th key={column} className="whitespace-nowrap px-3 py-2 font-semibold">{column}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key} className="border-t border-slate-100 align-top hover:bg-slate-50/60">
              {row.cells.map((cell, index) => <td key={`${row.key}-${index}`} className="px-3 py-2.5 text-slate-700">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Modal({ title, subtitle, onClose, children, footer, wide = false, tone = "blue" }) {
  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);
  const accent = tone === "rose" ? "border-rose-500" : "border-blue-600";
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto bg-slate-950/45 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className={`w-full ${wide ? "max-w-3xl" : "max-w-lg"} overflow-hidden rounded-xl border-t-4 bg-white shadow-2xl ${accent}`}>
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 px-5 py-4">
          <div>
            <h2 className="font-display text-lg font-semibold text-slate-900">{title}</h2>
            {subtitle ? <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p> : null}
          </div>
          <button type="button" onClick={onClose} className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label="Đóng"><X size={18} /></button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto px-5 py-4">{children}</div>
        {footer ? <div className="flex flex-wrap justify-end gap-2 border-t border-slate-100 bg-slate-50 px-5 py-3">{footer}</div> : null}
      </div>
    </div>
  );
}

export function Timeline({ steps }) {
  return (
    <ol className="space-y-4">
      {steps.map((step, index) => (
        <li key={`${step.title}-${index}`} className="relative flex gap-3">
          {index < steps.length - 1 ? <span className="absolute left-[11px] top-6 h-full w-px bg-slate-200" /> : null}
          <span className={`z-10 mt-0.5 grid size-6 shrink-0 place-items-center rounded-full text-[10px] font-bold ${step.done ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-500"}`}>{step.done ? "✓" : index + 1}</span>
          <div>
            <p className={`text-sm font-semibold ${step.done ? "text-slate-900" : "text-slate-400"}`}>{step.title}</p>
            {step.detail ? <p className="text-xs text-slate-500">{step.detail}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function PhotoPicker({ photos, onChange, max = 4, label = "Thêm ảnh" }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function pick(event) {
    const files = Array.from(event.target.files || []).slice(0, max - photos.length);
    event.target.value = "";
    if (!files.length) return;
    setBusy(true);
    setError("");
    try {
      const encoded = await Promise.all(files.map((file) => readImage(file)));
      onChange([...photos, ...encoded]);
    } catch (failure) {
      setError(failure.message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {photos.map((photo, index) => (
          <div key={`${index}-${photo.length}`} className="relative size-20 overflow-hidden rounded-lg border border-slate-200">
            <img src={photo} alt={`Ảnh ${index + 1}`} className="size-full object-cover" />
            <button type="button" onClick={() => onChange(photos.filter((_, position) => position !== index))} className="absolute right-0.5 top-0.5 grid size-5 place-items-center rounded-full bg-slate-900/70 text-white" aria-label="Xóa ảnh"><X size={12} /></button>
          </div>
        ))}
        {photos.length < max ? (
          <label className="grid size-20 cursor-pointer place-items-center rounded-lg border-2 border-dashed border-slate-300 text-center text-[10px] font-semibold text-slate-500 hover:border-blue-400 hover:text-blue-700">
            <span><ImagePlus size={18} className="mx-auto" />{busy ? "Đang nén..." : label}</span>
            <input type="file" accept="image/*" multiple className="hidden" onChange={pick} />
          </label>
        ) : null}
      </div>
      {error ? <p className="mt-1 text-xs text-rose-600">{error}</p> : null}
    </div>
  );
}

export const SignaturePad = forwardRef(function SignaturePad({ onChange }, ref) {
  const canvasRef = useRef(null);
  const drawing = useRef(false);
  const dirty = useRef(false);

  function point(event) {
    const rect = canvasRef.current.getBoundingClientRect();
    return [((event.clientX - rect.left) / rect.width) * canvasRef.current.width, ((event.clientY - rect.top) / rect.height) * canvasRef.current.height];
  }

  function start(event) {
    drawing.current = true;
    canvasRef.current.setPointerCapture(event.pointerId);
    const context = canvasRef.current.getContext("2d");
    const [x, y] = point(event);
    context.beginPath();
    context.moveTo(x, y);
  }

  function move(event) {
    if (!drawing.current) return;
    const context = canvasRef.current.getContext("2d");
    context.lineWidth = 2.5;
    context.lineCap = "round";
    context.strokeStyle = "#0f172a";
    const [x, y] = point(event);
    context.lineTo(x, y);
    context.stroke();
    dirty.current = true;
  }

  function end() {
    if (!drawing.current) return;
    drawing.current = false;
    onChange(dirty.current ? canvasRef.current.toDataURL("image/png") : "");
  }

  useImperativeHandle(ref, () => ({
    clear() {
      const canvas = canvasRef.current;
      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      dirty.current = false;
      onChange("");
    },
  }));

  return (
    <canvas
      ref={canvasRef}
      width={480}
      height={180}
      className="h-40 w-full touch-none rounded-lg border-2 border-dashed border-slate-300 bg-white"
      onPointerDown={start}
      onPointerMove={move}
      onPointerUp={end}
      onPointerLeave={end}
    />
  );
});

/** Máy quét mã QR/barcode bằng camera (nếu trình duyệt hỗ trợ BarcodeDetector). */
export function CameraScanner({ onDetect }) {
  const videoRef = useRef(null);
  const [state, setState] = useState("idle");

  useEffect(() => {
    let stream = null;
    let timer = null;
    let cancelled = false;
    async function boot() {
      if (!("BarcodeDetector" in window) || !navigator.mediaDevices?.getUserMedia) {
        setState("unsupported");
        return;
      }
      try {
        const detector = new window.BarcodeDetector({ formats: ["qr_code", "code_128", "ean_13"] });
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        if (cancelled) return;
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setState("scanning");
        timer = window.setInterval(async () => {
          try {
            const codes = await detector.detect(videoRef.current);
            if (codes[0]?.rawValue) onDetect(codes[0].rawValue);
          } catch {
            /* khung hình chưa sẵn sàng */
          }
        }, 500);
      } catch {
        setState("denied");
      }
    }
    boot();
    return () => {
      cancelled = true;
      if (timer) window.clearInterval(timer);
      if (stream) stream.getTracks().forEach((track) => track.stop());
    };
  }, [onDetect]);

  return (
    <div className="overflow-hidden rounded-lg bg-slate-900">
      <video ref={videoRef} className={`aspect-video w-full object-cover ${state === "scanning" ? "" : "hidden"}`} muted playsInline />
      {state !== "scanning" ? (
        <div className="flex aspect-video flex-col items-center justify-center gap-2 p-4 text-center text-xs text-slate-300">
          <Camera size={28} />
          {state === "unsupported" ? "Trình duyệt này chưa hỗ trợ quét QR bằng camera. Hãy nhập mã vào ô bên dưới." : null}
          {state === "denied" ? "Không mở được camera (chưa cấp quyền). Hãy nhập mã vào ô bên dưới." : null}
          {state === "idle" ? "Đang bật camera..." : null}
        </div>
      ) : null}
    </div>
  );
}

export function QrImage({ value, size = 96, className = "" }) {
  const [src, setSrc] = useState("");
  useEffect(() => {
    let alive = true;
    QRCode.toDataURL(String(value || ""), { margin: 1, width: size * 2, errorCorrectionLevel: "M" })
      .then((url) => { if (alive) setSrc(url); })
      .catch(() => { if (alive) setSrc(""); });
    return () => { alive = false; };
  }, [value, size]);
  if (!src) return <div style={{ width: size, height: size }} className={`rounded bg-slate-100 ${className}`} />;
  return <img src={src} alt={`QR ${value}`} width={size} height={size} className={className} />;
}

/** Dòng thời gian vòng đời một mã QR, lấy từ /tracking/items/:qr. */
export function ItemJourney({ qr }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!qr) return undefined;
    let alive = true;
    setData(null);
    setError("");
    api.get(`/tracking/items/${encodeURIComponent(qr)}`)
      .then((response) => { if (alive) setData(response.data); })
      .catch((failure) => { if (alive) setError(apiError(failure, "Không tìm thấy hành trình của mã này.")); });
    return () => { alive = false; };
  }, [qr]);
  if (error) return <Empty>{error}</Empty>;
  if (!data) return <Empty>Đang tải hành trình...</Empty>;
  const lastInspection = data.inspections[data.inspections.length - 1];
  const steps = [
    { title: "Nhà hảo tâm trao tặng", detail: `${data.pledge?.organizationName || data.pledge?.donorName || "—"} · phiếu ${data.pledge?.code || "—"}`, done: Boolean(data.pledge) },
    { title: "Nhập kho & cấp mã QR", detail: data.receivedAt ? `${fmtDateTime(data.receivedAt)} · ${data.warehouse?.name || "Kho"}${data.binLocation ? ` · ${data.binLocation}` : ""}` : "Chưa nhập kho", done: Boolean(data.receivedAt) },
    { title: "Kiểm định chất lượng", detail: lastInspection ? `${fmtDateTime(lastInspection.inspectedAt)} · ${GRADE_LABEL[data.grade] || "—"}${lastInspection.physicalDefects ? ` · ${lastInspection.physicalDefects}` : ""}` : "Chưa kiểm định", done: Boolean(lastInspection) },
    { title: "Phân bổ cho trường học", detail: data.allocation ? `${data.allocation.schoolName} · yêu cầu ${data.allocation.requisitionCode}` : "Chưa phân bổ", done: Boolean(data.allocation) },
    { title: "Vận chuyển", detail: data.waybill ? `Vận đơn ${data.waybill.code} · ${data.waybill.dispatchedAt ? fmtDateTime(data.waybill.dispatchedAt) : "chờ lấy hàng"}` : "Chưa lập vận đơn", done: Boolean(data.waybill?.dispatchedAt) },
    { title: "Giao & ký nhận", detail: data.waybill?.proof ? `${data.waybill.proof.recipientName} (${data.waybill.proof.recipientTitle}) · ${fmtDateTime(data.waybill.proof.signedAt)}` : "Chưa bàn giao", done: Boolean(data.waybill?.proof) },
  ];
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <QrImage value={data.qrCode} size={72} />
        <div>
          <p className="font-mono text-sm font-semibold text-slate-900">{data.qrCode}</p>
          <p className="text-sm text-slate-700">{data.name}</p>
          <div className="mt-1 flex gap-2"><StatusBadge kind="item" value={data.status} /><Badge>{CATEGORY_LABEL[data.category]}</Badge></div>
        </div>
      </div>
      <Timeline steps={steps} />
    </div>
  );
}

export function KeyValue({ rows }) {
  return (
    <dl className="space-y-2 text-sm">
      {rows.map(([key, value]) => (
        <div key={key} className="flex justify-between gap-3">
          <dt className="text-slate-500">{key}</dt>
          <dd className="text-right font-medium text-slate-800">{value ?? "—"}</dd>
        </div>
      ))}
    </dl>
  );
}

export function SubmitBar({ children }) {
  return <div className="sticky bottom-0 z-10 -mx-4 mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur md:-mx-6 md:px-6">{children}</div>;
}

/**
 * Xuất Excel theo từng nhà hảo tâm: một sheet tổng hợp và mỗi nhà hảo tâm một sheet kèm sản phẩm họ đã ủng hộ.
 * `items` là danh sách hiện vật (có pledgeItem.pledge.donor).
 */
export async function exportDonorWorkbook(items, fileName, meta = {}) {
  const { default: ExcelJS } = await import("exceljs");
  const donorOf = (item) => item.pledgeItem?.pledge?.donor;
  const groups = new Map();
  items.forEach((item) => {
    const donor = donorOf(item);
    const key = donor?.id || "unknown";
    if (!groups.has(key)) groups.set(key, { donor, rows: [] });
    groups.get(key).rows.push(item);
  });
  const nameOf = (donor) => donor?.profile?.organizationName || donor?.fullName || "Không rõ nhà hảo tâm";
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "EduShare Vietnam";
  workbook.created = new Date();

  const header = (sheet) => {
    const row = sheet.getRow(sheet.rowCount);
    row.font = { bold: true, color: { argb: "FFFFFFFF" } };
    row.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF2563EB" } };
  };

  const summary = workbook.addWorksheet("Tổng hợp");
  summary.addRow(["Lệnh điều chuyển", meta.code || "—"]);
  summary.addRow(["Người nhận", meta.recipient || "—"]);
  summary.addRow(["Tình nguyện viên", meta.volunteers || "—"]);
  summary.addRow([]);
  summary.addRow(["Nhà hảo tâm", "Email", "Số điện thoại", "Số hiện vật"]);
  header(summary);
  groups.forEach(({ donor, rows }) => summary.addRow([nameOf(donor), donor?.email || "", donor?.phone || "", rows.length]));
  summary.addRow(["Tổng cộng", "", "", items.length]).font = { bold: true };
  summary.columns = [{ width: 36 }, { width: 30 }, { width: 18 }, { width: 14 }];

  const used = new Set(["Tổng hợp"]);
  groups.forEach(({ donor, rows }) => {
    let base = nameOf(donor).replace(/[\\/?*[\]:]/g, " ").trim().slice(0, 28) || "Nha hao tam";
    let title = base;
    let n = 2;
    while (used.has(title.toLowerCase()) || used.has(title)) title = `${base.slice(0, 26)} ${n++}`;
    used.add(title);
    const sheet = workbook.addWorksheet(title);
    sheet.addRow(["Nhà hảo tâm", nameOf(donor)]);
    sheet.addRow(["Email", donor?.email || ""]);
    sheet.addRow(["Số điện thoại", donor?.phone || ""]);
    sheet.addRow([]);
    sheet.addRow(["Mã QR", "Sản phẩm", "Nhóm", "Phân loại", "Mã phiếu", "Trạng thái"]);
    header(sheet);
    rows.forEach((item) => sheet.addRow([
      item.qrCode, item.name, CATEGORY_LABEL[item.category] || item.category, GRADE_LABEL[item.grade] || "Chưa kiểm định",
      item.pledgeItem?.pledge?.code || "", item.status,
    ]));
    sheet.columns = [{ width: 16 }, { width: 36 }, { width: 18 }, { width: 18 }, { width: 14 }, { width: 22 }];
  });

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(url);
}

/**
 * Hành trình của một yêu cầu đã duyệt: duyệt, phương án, lệnh điều chuyển, vận đơn, ký nhận.
 * Dùng cho admin (Duyệt yêu cầu) và kho (Theo dõi trạng thái chuyển) để biết đơn đang đi đến đâu.
 */
export function RequisitionJourney({ requisitionId, reloadKey = 0 }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!requisitionId) return undefined;
    let alive = true;
    setData(null);
    setError("");
    api.get(`/requisitions/${requisitionId}/journey`)
      .then((response) => { if (alive) setData(response.data); })
      .catch((failure) => { if (alive) setError(apiError(failure, "Không tải được hành trình đơn.")); });
    return () => { alive = false; };
  }, [requisitionId, reloadKey]);
  if (error) return <Empty>{error}</Empty>;
  if (!data) return <Empty>Đang tải hành trình...</Empty>;

  const { requisition, plan, waybill, transfers } = data;
  const approved = !["PENDING", "REJECTED"].includes(requisition.status);
  const movingTransfer = transfers.find((row) => row.status === "IN_TRANSIT");
  let where = "Đang chờ admin xét duyệt.";
  if (requisition.status === "REJECTED") where = "Yêu cầu đã bị từ chối.";
  else if (waybill?.proof) where = `Đã giao và trường đã ký nhận (${fmtDateTime(waybill.proof.signedAt)}).`;
  else if (waybill?.status === "FAILED") where = `Vận đơn ${waybill.code} gặp sự cố, cần lập lại.`;
  else if (waybill?.status === "DELIVERED") where = `Vận đơn ${waybill.code} đã giao, chờ trường ký nhận.`;
  else if (waybill?.status === "IN_TRANSIT") where = `Đang vận chuyển tới trường (vận đơn ${waybill.code}).`;
  else if (waybill) where = `Đã lập vận đơn ${waybill.code}, chờ tình nguyện viên lấy hàng.`;
  else if (movingTransfer) where = `Lệnh điều chuyển ${movingTransfer.code} đang vận chuyển tới ${movingTransfer.deliveryAddress || "trường"}.`;
  else if (transfers.some((row) => row.status === "RECEIVED")) {
    const arrived = transfers.find((row) => row.status === "RECEIVED");
    where = `Lệnh điều chuyển ${arrived.code} đã giao tới ${arrived.deliveryAddress || "trường"} (${fmtDateTime(arrived.receivedAt)}).`;
  } else if (transfers.some((row) => row.status === "PENDING")) {
    where = `Lệnh điều chuyển ${transfers.find((row) => row.status === "PENDING").code} đang chờ kho xuất hàng.`;
  } else if (plan?.adminConfirmedAt) where = "Phương án đã được xác nhận, chờ kho lập vận đơn.";
  else if (plan) where = "Đã ghép tồn kho, chờ admin xác nhận phương án.";
  else if (approved) where = "Đã duyệt, chờ ghép tồn kho.";

  const people = (list) => (list || []).map((person) => person.fullName).filter(Boolean).join(", ");
  const steps = [
    { title: "Trường gửi yêu cầu", detail: fmtDateTime(requisition.createdAt), done: true },
    { title: "Admin duyệt yêu cầu", detail: requisition.status === "REJECTED" ? "Đã từ chối" : approved ? "Đã duyệt" : "Chờ xét duyệt", done: approved },
    { title: "Ghép tồn kho & xác nhận phương án", detail: plan ? `${plan.totalItems} hiện vật · ${plan.adminConfirmedAt ? `admin xác nhận ${fmtDateTime(plan.adminConfirmedAt)}` : "chờ admin xác nhận"}` : "Chưa có phương án", done: Boolean(plan?.adminConfirmedAt) },
    ...transfers.map((row) => ({
      title: `Lệnh điều chuyển ${row.code}`,
      detail: `${statusMeta("transfer", row.status)[0]} · ${row.itemsCount} hiện vật${row.dispatchedAt ? ` · xuất ${fmtDateTime(row.dispatchedAt)}` : ""}${row.deliveryAddress ? ` · giao tới ${row.deliveryAddress}` : ""}${people(row.volunteers) ? ` · TNV: ${people(row.volunteers)}` : ""}`,
      done: row.status === "RECEIVED",
    })),
    { title: "Lập vận đơn", detail: waybill ? `${waybill.code}${people(waybill.volunteers) ? ` · TNV: ${people(waybill.volunteers)}` : ""}` : "Chưa lập vận đơn", done: Boolean(waybill) },
    { title: "Đang vận chuyển tới trường", detail: waybill?.dispatchedAt ? `Xuất phát ${fmtDateTime(waybill.dispatchedAt)}${waybill.incidentCount ? ` · ${waybill.incidentCount} sự cố` : ""}` : "Chưa xuất phát", done: ["IN_TRANSIT", "DELIVERED"].includes(waybill?.status) },
    { title: "Trường ký nhận", detail: waybill?.proof ? `${waybill.proof.recipientName} (${waybill.proof.recipientTitle}) · ${fmtDateTime(waybill.proof.signedAt)}` : "Chưa ký nhận", done: Boolean(waybill?.proof) },
  ];
  return (
    <div>
      <p className="mb-4 rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-800">Hiện tại: {where}</p>
      <Timeline steps={steps} />
    </div>
  );
}
