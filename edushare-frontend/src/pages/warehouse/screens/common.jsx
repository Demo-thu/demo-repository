import { useEffect, useState } from "react";
import { MapPin, X } from "lucide-react";
import api from "@/lib/api";
import { Field, GhostButton, Modal, SearchBox, inputClass, orgName, rowsOf } from "@/pages/portals/kit";

/** Hệ thống chỉ có một kho xuất duy nhất: Tổng kho Miền Trung (mã WH-HAN). */
export function useWarehouses() {
  const [home, setHome] = useState(null);
  useEffect(() => {
    api.get("/warehouses?limit=50").then((response) => {
      const rows = rowsOf(response.data);
      setHome(rows.find((row) => row.code === "WH-HAN") || rows[0] || null);
    }).catch(() => setHome(null));
  }, []);
  return { home };
}

export function schoolAddress(requisition) {
  const profile = requisition?.school?.profile;
  return [profile?.address, profile?.district, profile?.city].filter(Boolean).join(", ");
}

/**
 * Popup chọn nơi cần giao: danh sách yêu cầu đã được admin duyệt mà các trường đã đề xuất ở cổng Trường học.
 * Chọn một yêu cầu để lấy trường nhận hàng và địa chỉ giao.
 */
export function DestinationPicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    api.get("/requisitions", { params: { limit: 100 } })
      .then((response) => setRows(rowsOf(response.data).filter((row) => ["APPROVED", "ALLOCATING"].includes(row.status))))
      .catch(() => setRows([]))
      .finally(() => setLoading(false));
  }, [open]);

  const visible = rows.filter((row) => `${row.code} ${row.title} ${orgName(row.school)} ${schoolAddress(row)}`.toLowerCase().includes(term.trim().toLowerCase()));

  return (
    <>
    <Field label="Địa chỉ nơi cần giao đến (trường đã đề xuất)">
      <button type="button" onClick={() => setOpen(true)} className={`${inputClass} flex w-full items-start justify-between gap-3 text-left`}>
        {value ? (
          <span>
            <b className="block text-slate-800">{orgName(value.school)} · {value.code}</b>
            <span className="flex items-center gap-1 text-xs text-slate-500"><MapPin size={12} />{schoolAddress(value) || "Trường chưa khai báo địa chỉ"}</span>
          </span>
        ) : <span className="text-slate-400">Bấm để chọn trường và địa chỉ giao hàng...</span>}
        <span className="shrink-0 text-xs font-semibold text-blue-700">{value ? "Đổi" : "Chọn"}</span>
      </button>
    </Field>
      {open ? (
        <Modal wide title="Chọn nơi cần giao đến" subtitle="Các yêu cầu đã được admin duyệt từ cổng Trường học." onClose={() => setOpen(false)}
          footer={<GhostButton onClick={() => setOpen(false)}>Đóng</GhostButton>}>
          <div className="mb-3"><SearchBox value={term} onChange={setTerm} placeholder="Tìm trường, mã yêu cầu, địa chỉ..." /></div>
          {loading ? <p className="py-6 text-center text-sm text-slate-500">Đang tải...</p> : null}
          {!loading && !visible.length ? <p className="py-6 text-center text-sm text-slate-500">Chưa có yêu cầu nào đã duyệt để giao.</p> : null}
          <ul className="space-y-2">
            {visible.map((row) => (
              <li key={row.id}>
                <button type="button" onClick={() => { onChange(row); setOpen(false); }} className={`w-full rounded-lg border p-3 text-left hover:border-blue-300 hover:bg-blue-50/40 ${value?.id === row.id ? "border-blue-500 bg-blue-50/50" : "border-slate-200"}`}>
                  <p className="flex items-center justify-between text-sm font-semibold text-slate-800">{orgName(row.school)}<span className="text-xs text-blue-700">{row.code}</span></p>
                  <p className="text-xs text-slate-600">{row.title}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-slate-500"><MapPin size={12} />{schoolAddress(row) || "Chưa khai báo địa chỉ"}</p>
                  <p className="text-xs text-slate-500">Liên hệ: {row.school?.fullName}{row.school?.phone ? ` · ${row.school.phone}` : ""}</p>
                </button>
              </li>
            ))}
          </ul>
        </Modal>
      ) : null}
    </>
  );
}
export function useVolunteerUsers() {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    api.get("/users?role=VOLUNTEER&limit=100").then((response) => setVolunteers(rowsOf(response.data))).catch(() => setVolunteers([]));
  }, []);
  return volunteers;
}

/** Chọn nhiều tình nguyện viên theo dạng chip; phần tử đầu tiên là trưởng đoàn. */
export function VolunteerPicker({ volunteers, value, onChange, label = "Tình nguyện viên đi cùng" }) {
  const [term, setTerm] = useState("");
  const chosen = value.map((id) => volunteers.find((row) => row.id === id)).filter(Boolean);
  const options = volunteers.filter((row) => !value.includes(row.id) && row.fullName.toLowerCase().includes(term.trim().toLowerCase()));
  return (
    <Field label={label}>
      <div className="rounded-lg border border-slate-200 p-2">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {chosen.map((person, index) => (
            <span key={person.id} className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
              {index === 0 ? "★ " : ""}{person.fullName}
              <button type="button" onClick={() => onChange(value.filter((id) => id !== person.id))} aria-label="Bỏ chọn"><X size={12} /></button>
            </span>
          ))}
          {!chosen.length ? <span className="text-xs text-slate-400">Chưa chọn tình nguyện viên.</span> : null}
        </div>
        <input value={term} onChange={(event) => setTerm(event.target.value)} className={inputClass} placeholder="Tìm tình nguyện viên..." />
        <div className="mt-2 max-h-32 space-y-1 overflow-y-auto">
          {options.slice(0, 8).map((person) => (
            <button key={person.id} type="button" onClick={() => { onChange([...value, person.id]); setTerm(""); }} className="flex w-full items-center justify-between rounded px-2 py-1.5 text-left text-xs hover:bg-slate-50">
              <span className="font-medium text-slate-700">{person.fullName}</span>
              <span className="text-slate-400">{person.phone || person.email}</span>
            </button>
          ))}
        </div>
      </div>
    </Field>
  );
}
