import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api, { apiError } from "../lib/api";
import { copyText, downloadCsv } from "../lib/actions";
import { CATEGORY_LABEL, GRADE_LABEL, specLine } from "../lib/labels";
import {
  BadgeCheck,
  Box,
  Check,
  ChevronDown,
  ClipboardCheck,
  Download,
  FileDown,
  Gift,
  Laptop,
  PackageCheck,
  Plus,
  QrCode,
  RefreshCw,
  Search,
  Share2,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";
import { Breadcrumb } from "../components/system-ui";

const campaignStatusLabel = { ACTIVE: "Đang diễn ra", COMPLETED: "Đã hoàn thành", UPCOMING: "Sắp mở", PAUSED: "Tạm dừng" };
const pledgeStatusLabel = { PENDING: "Chờ xác minh", VERIFIED: "Đã xác minh", PARTIALLY_RECEIVED: "Đã nhập một phần", COMPLETED: "Đã nhận đủ", CANCELLED: "Đã hủy" };

function TimelineStep({ icon: Icon, title, date, state, children, active, last }) {
  return (
    <div className="relative grid grid-cols-[34px_1fr] gap-3 pb-4 last:pb-0">
      {!last && <span className="absolute left-[16px] top-9 h-[calc(100%-22px)] w-px bg-blue-200" />}
      <span className={`z-10 grid size-[34px] place-items-center rounded-md ${active ? "bg-blue-600 text-white" : "bg-teal-700 text-white"}`}>
        <Icon size={17} />
      </span>
      <article className={`rounded-md p-3 ${active ? "bg-blue-50 ring-1 ring-blue-100" : "bg-blue-50/80"}`}>
        <div className="flex flex-wrap items-start justify-between gap-1">
          <h3 className={`font-display text-sm font-semibold ${active ? "text-blue-700" : "text-slate-900"}`}>{title}</h3>
          <div className="flex items-center gap-1 text-[10px] text-slate-500">
            <span className={`rounded px-1.5 py-0.5 font-semibold ${active ? "bg-blue-600 text-white" : "bg-teal-100 text-teal-800"}`}>{state}</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="mt-1 text-xs leading-4 text-slate-600">{children}</div>
      </article>
    </div>
  );
}

export default function DonorTransparencyPage() {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const [showRegister, setShowRegister] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [pledges, setPledges] = useState([]);
  const [message, setMessage] = useState("");
  const [deviceQuery, setDeviceQuery] = useState("");
  const [devicePage, setDevicePage] = useState(1);
  const [devices, setDevices] = useState([]);
  const requestedId = params.get("campaign") || "";
  const selected = campaigns.find((item) => item.id === requestedId) || campaigns[0] || null;

  useEffect(() => {
    api.get("/campaigns?limit=50").then((response) => {
      setCampaigns(response.data.data ?? []);
    }).catch(() => undefined);
  }, []);

  useEffect(() => {
    if (!selected) return;
    if (requestedId !== selected.id) setParams({ campaign: selected.id }, { replace: true });
    const targetLine = (selected.targets ?? []).map((target) => `${CATEGORY_LABEL[target.category] || target.category} · ${target.currentReceivedQuantity ?? 0}/${target.targetQuantity}`).join(", ");
    api.get(`/pledges?campaignId=${selected.id}&limit=50`).then((response) => setPledges(response.data.data ?? [])).catch(() => setPledges([]));
    api.get("/items?limit=100").then((response) => {
      const rows = (response.data.data ?? [])
        .filter((item) => item.pledgeItem?.pledge?.campaignId === selected.id)
        .map((item) => [
          item.qrCode,
          item.name,
          item.specifications?.serialNumber || item.qrCode,
          GRADE_LABEL[item.grade] || item.status,
          specLine(item.specifications) || targetLine || "Chưa ghi thông số",
          item.binLocation || "Chưa xếp kệ",
        ]);
      setDevices(rows);
    }).catch(() => setDevices([]));
  }, [selected, requestedId, setParams]);

  const visibleDevices = devices.filter((device) => device.join(" ").toLowerCase().includes(deviceQuery.trim().toLowerCase()));
  const devicePageSize = 4;
  const devicePageCount = Math.max(1, Math.ceil(visibleDevices.length / devicePageSize));
  const deviceSafePage = Math.min(devicePage, devicePageCount);
  const deviceRows = visibleDevices.slice((deviceSafePage - 1) * devicePageSize, deviceSafePage * devicePageSize);
  const targetLine = (selected?.targets ?? []).map((target) => `${CATEGORY_LABEL[target.category] || target.category} · ${target.currentReceivedQuantity ?? 0}/${target.targetQuantity}`).join(", ") || "Chưa có hạng mục";
  const receivedLine = `Đã tiếp nhận: ${selected?.summary?.received ?? 0} / ${selected?.summary?.targetQuantity ?? 0}`;
  const progress = selected?.summary?.receivedRate ?? 0;

  async function submitRegistration(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const org = String(form.get("org") || "").trim();
    const device = String(form.get("device") || "").trim();
    const place = String(form.get("place") || "").trim();
    const quantity = Math.min(5000, Math.max(1, Number(device.match(/(\d+)/)?.[1] || 1)));
    const name = device.replace(/^\d+\s*/, "").trim() || "Thiết bị tin học";
    try {
      const response = await api.post("/pledges", {
        handoverMethod: "DROP_OFF",
        address: place,
        notes: `${org}. Khu vực mong muốn: ${place}`,
        campaignId: selected?.id,
        items: [{ category: "IT_DEVICES", name: name.slice(0, 160), estimatedQuantity: quantity, unit: "chiếc" }],
      });
      setShowRegister(false);
      setMessage(`Đã lưu cam kết ${response.data.code} vào database.`);
    } catch (error) {
      setMessage(apiError(error, "Không lưu được đợt đóng góp."));
    }
  }

  return (
    <>
      <Breadcrumb current="Hành trình quyên góp minh bạch" />
      <main className="mx-auto max-w-[1540px] space-y-4 px-4 py-5 lg:px-6">
        <section className="rounded-lg bg-white px-5 py-4 shadow-sm">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <span className="inline-flex items-center gap-1 rounded-full bg-teal-100 px-2 py-1 text-[10px] font-semibold text-teal-800"><ShieldCheck size={12} /> CỔNG NHÀ HẢO TÂM ĐỘC LẬP • MINH BẠCH CHUỖI CUNG ỨNG</span>
              <h1 className="mt-2 max-w-3xl font-display text-2xl font-semibold leading-tight text-slate-950 md:text-[28px]">{selected?.title || "Đợt quyên góp"}</h1>
              <p className="mt-1 max-w-3xl text-sm text-slate-600">{selected?.description || "Chọn một chiến dịch để xem cùng bộ thông tin với trang Chiến dịch."}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button onClick={() => setShowRegister(true)} className="inline-flex items-center gap-1.5 rounded bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700"><Plus size={16} /> Đăng ký đợt đóng góp mới</button>
              <button type="button" onClick={() => setShowHistory(true)} className="inline-flex items-center gap-1.5 rounded bg-blue-50 px-3 py-2 text-xs font-semibold text-slate-700"><FileDown size={15} /> Lịch sử hồ sơ</button>
            </div>
          </div>
        </section>

        {message && <div className="flex items-center justify-between rounded-md bg-teal-50 px-4 py-3 text-sm text-teal-800"><span className="flex items-center gap-2"><Check size={16} />{message}</span><button onClick={() => setMessage("")}><X size={16} /></button></div>}
        {showHistory && <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/35 p-4"><article className="max-h-[80vh] w-full max-w-lg overflow-auto rounded-xl bg-white p-6 shadow-2xl"><div className="flex justify-between"><h2 className="font-display text-xl font-semibold">Lịch sử cam kết</h2><button type="button" onClick={() => setShowHistory(false)}>×</button></div><ul className="mt-4 space-y-2 text-sm">{pledges.length === 0 && <li>Chưa có cam kết.</li>}{pledges.map((pledge) => <li key={pledge.id} className="rounded bg-slate-50 px-3 py-2"><b>{pledge.code}</b> · {pledge.status}<br />{pledge.donor?.fullName}</li>)}</ul></article></div>}

        <section className="grid gap-4 md:grid-cols-12">
          <article className="rounded-lg bg-white p-4 shadow-sm md:col-span-4">
            <div className="flex items-center justify-between"><span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Chiến dịch đang xem</span><span className="rounded-full bg-teal-100 px-2 py-1 text-[10px] font-semibold text-teal-800">{campaignStatusLabel[selected?.status] || "Chưa có"}</span></div>
            <div className="mt-3"><p className="text-[10px] font-semibold text-blue-700">MÃ: {selected?.slug || "—"}</p><h2 className="font-display text-base font-semibold">{selected?.title || "Chưa có chiến dịch"}</h2><p className="mt-1 text-xs text-slate-600">{targetLine}</p></div>
            <div className="mt-4 rounded bg-blue-50 px-3 py-2 text-[10px]"><div className="flex justify-between"><span>{receivedLine}</span><b className="text-blue-700">{progress}%</b></div><div className="mt-2 h-1.5 rounded bg-blue-100"><span style={{ width: `${Math.min(progress, 100)}%` }} className="block h-full rounded bg-blue-600" /></div></div>
          </article>
          <StatCard className="md:col-span-2" icon={Laptop} label="Đã tiếp nhận" value={selected?.summary?.received ?? 0} footer={receivedLine} description={targetLine} />
          <StatCard className="md:col-span-3" icon={Gift} teal label="Mục tiêu chiến dịch" value={selected?.summary?.targetQuantity ?? 0} description={campaignStatusLabel[selected?.status] || "—"} footer={`${pledges.length} phiếu quyên góp`} />
          <StatCard className="md:col-span-3" icon={BadgeCheck} label="Tiến độ huy động" value={progress} suffix="%" footer="Cùng số liệu với trang Chiến dịch" progress />
        </section>

        <section className="flex flex-col justify-between gap-3 rounded-lg bg-white p-3 shadow-sm md:flex-row md:items-center">
          <label className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Đợt quyên góp:
            <span className="relative"><select value={selected?.id || ""} onChange={(event) => { setDevicePage(1); setParams({ campaign: event.target.value }); }} className="max-w-md appearance-none rounded bg-blue-50 py-2 pl-3 pr-8 text-xs font-medium normal-case tracking-normal text-slate-800 outline-none">{campaigns.length === 0 && <option value="">Chưa có chiến dịch</option>}{campaigns.map((item) => <option key={item.id} value={item.id}>{item.slug} · {item.title}</option>)}</select><ChevronDown className="pointer-events-none absolute right-2 top-2 size-4 text-slate-500" /></span>
          </label>
          <div className="flex items-center gap-2"><span className="inline-flex items-center gap-1 rounded bg-teal-50 px-2.5 py-1.5 text-[10px] font-semibold text-teal-800"><span className="size-1.5 rounded-full bg-teal-600" /> Cập nhật vệ tinh lúc 14:32:05 hôm nay</span><button type="button" onClick={() => selected && setParams({ campaign: selected.id })} className="rounded bg-blue-50 p-2 text-slate-600"><RefreshCw size={15} /></button></div>
        </section>

        <section className="grid items-start gap-4 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <article className="rounded-lg bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-blue-50 pb-3"><h2 className="flex items-center gap-2 font-display text-base font-semibold"><ClipboardCheck size={18} className="text-blue-600" /> Phiếu của chiến dịch <span className="rounded bg-blue-100 px-2 py-1 text-[10px] text-blue-700">{selected?.slug || "—"}</span></h2></div>
              <div className="mx-auto mt-4 grid max-w-[280px] place-items-center rounded bg-blue-50 p-4"><QrCode size={118} strokeWidth={1.7} /><p className="mt-3 text-center text-[10px] text-slate-600">Quét để xem trang báo cáo công khai<br />Tích hợp chữ ký số đã đối chiếu quốc gia</p></div>
              <dl className="mt-3 space-y-2 rounded bg-slate-50 p-3 text-[11px]"><Info label="Mã chiến dịch:" value={selected?.slug || "—"} blue /><Info label="Tên chiến dịch:" value={selected?.title || "—"} /><Info label="Hạng mục:" value={targetLine} /><Info label="Tiếp nhận:" value={receivedLine} blue /><Info label="Trạng thái:" value={campaignStatusLabel[selected?.status] || "—"} /></dl>
              <div className="mt-3 flex gap-2"><button type="button" onClick={() => downloadCsv("chung-nhan.csv", ["Mã", "Nhà hảo tâm", "Trạng thái"], pledges.map((pledge) => [pledge.code, pledge.donor?.fullName || "", pledge.status]))} className="flex-1 rounded bg-blue-100 px-2 py-2 text-[10px] font-semibold text-blue-700">Tải E-Certificate (Tấm Lòng Vàng)</button><button type="button" onClick={() => downloadCsv("chung-nhan.csv", ["Mã", "Trạng thái"], pledges.map((pledge) => [pledge.code, pledge.status]))} className="rounded bg-blue-50 p-2 text-slate-600"><Download size={14} /></button><button type="button" onClick={() => copyText(window.location.href).then(() => setMessage("Đã sao chép liên kết minh bạch."))} className="rounded bg-blue-50 p-2 text-slate-600"><Share2 size={14} /></button></div>
            </article>
            <article className="rounded-lg bg-white p-4 shadow-sm"><h2 className="flex items-center gap-2 font-display text-sm font-semibold"><ShieldCheck size={17} className="text-teal-700" /> Mô tả chiến dịch</h2><p className="mt-2 text-xs leading-4 text-slate-600">{selected?.description || "Chưa có mô tả."}</p></article>
          </div>

          <article className="rounded-lg bg-white p-4 shadow-sm lg:col-span-7">
            <div className="mb-4 flex items-center justify-between"><div><h2 className="flex items-center gap-2 font-display text-lg font-semibold"><Truck size={19} className="text-teal-700" /> Phiếu quyên góp của {selected?.slug || "chiến dịch"}</h2><p className="mt-1 text-xs text-slate-500">{receivedLine}. {targetLine}</p></div><span className="rounded bg-blue-100 px-2 py-1 text-[10px] font-semibold text-blue-700">{campaignStatusLabel[selected?.status] || "—"} · {progress}%</span></div>
            {pledges.length === 0 && <TimelineStep icon={Box} title="Chưa có phiếu gắn với chiến dịch này" state={campaignStatusLabel[selected?.status] || "—"} date={selected?.slug || ""} last>{selected?.description || "Phiếu mới sẽ hiện tại đây khi gắn đúng chiến dịch."}</TimelineStep>}
            {pledges.map((pledge, index) => <TimelineStep key={pledge.id} icon={index === pledges.length - 1 ? ClipboardCheck : PackageCheck} title={`${pledge.code} · ${pledge.donor?.fullName || "Nhà hảo tâm"}`} state={pledgeStatusLabel[pledge.status] || pledge.status} date={(pledge.items ?? []).map((line) => `${line.name} × ${line.estimatedQuantity}`).join(", ") || "Chưa có dòng hàng"} active={index === 0} last={index === pledges.length - 1}>{pledge.notes || pledge.address || "Phiếu thuộc chiến dịch đang xem."}</TimelineStep>)}
          </article>
        </section>

        <section className="overflow-hidden rounded-lg bg-white shadow-sm">
          <div className="flex flex-col justify-between gap-3 border-b border-blue-50 p-4 sm:flex-row sm:items-center"><div><h2 className="font-display text-base font-semibold">Thiết bị của {selected?.slug || "chiến dịch"} · {selected?.title || ""}</h2><p className="text-[10px] text-slate-500">{targetLine}. Chỉ hiện thiết bị thuộc đúng chiến dịch này.</p></div><div className="flex gap-2"><label className="flex items-center gap-1 rounded bg-blue-50 px-2 text-xs text-slate-500"><Search size={14} /><input value={deviceQuery} onChange={(event) => { setDeviceQuery(event.target.value); setDevicePage(1); }} className="w-32 bg-transparent py-2 outline-none" placeholder="Tra nhanh Serial hoặc Tag..." /></label><button type="button" onClick={() => downloadCsv("thiet-bi-quyen-gop.csv", ["QR", "Tên", "Serial", "Tình trạng", "Linh kiện", "Vị trí"], visibleDevices)} className="inline-flex items-center gap-1 rounded bg-blue-50 px-3 py-2 text-[10px] font-semibold text-slate-700"><Download size={13} /> Xuất Excel (CSV)</button></div></div>
          <div className="overflow-x-auto"><table className="w-full min-w-[900px] text-left"><thead className="bg-blue-50 text-[9px] uppercase tracking-wide text-slate-500"><tr>{["Mã Tag EduShare", "Dòng máy & Số Serial", "Tình trạng kiểm thử", "Linh kiện nâng cấp", "Phòng học chỉ định", "Chi tiết"].map((head) => <th key={head} className="px-4 py-3 font-semibold">{head}</th>)}</tr></thead><tbody className="text-[11px]">{deviceRows.map((device) => <tr key={device[0]} className="border-t border-blue-50"><td className="px-4 py-3 font-semibold text-blue-700">{device[0]}</td><td className="px-4 py-3"><b>{device[1]}</b><br /><span className="text-[9px] text-slate-500">S/N: {device[2]}</span></td><td className="px-4 py-3"><span className="rounded-full bg-teal-100 px-2 py-1 text-[10px] font-semibold text-teal-800">◉ {device[3]}</span></td><td className="px-4 py-3 text-slate-600">{device[4]}</td><td className="px-4 py-3 text-slate-600">{device[5]}</td><td className="px-4 py-3"><button type="button" onClick={() => navigate(`/tracking?q=${encodeURIComponent(device[0])}`)} className="font-semibold text-blue-700">Xem Log Kỹ Thuật</button></td></tr>)}</tbody></table></div>
          <footer className="flex items-center justify-between p-3 text-[10px] text-slate-500"><span>Hiển thị {deviceRows.length} / {visibleDevices.length} thiết bị</span><span><button type="button" onClick={() => setDevicePage((current) => Math.max(1, current - 1))} className="rounded bg-blue-50 px-2 py-1">Trước</button> <b className="px-2 text-slate-800">Trang {deviceSafePage} / {devicePageCount}</b><button type="button" onClick={() => setDevicePage((current) => Math.min(devicePageCount, current + 1))} className="rounded bg-blue-50 px-2 py-1">Tiếp</button></span></footer>
        </section>
      </main>

      {showRegister && <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/35 p-4"><form onSubmit={submitRegistration} className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl"><div className="flex items-start justify-between"><div><h2 className="font-display text-xl font-semibold">Đăng ký đợt đóng góp mới</h2><p className="mt-1 text-sm text-slate-500">Tạo hồ sơ để theo dõi minh bạch toàn bộ hành trình.</p></div><button type="button" onClick={() => setShowRegister(false)} className="rounded p-1 text-slate-500 hover:bg-slate-100"><X /></button></div><div className="mt-5 grid gap-4"><Field name="org" label="Tên tổ chức / nhà hảo tâm" placeholder="Ví dụ: Công ty CP Công nghệ FPT" /><Field name="device" label="Loại thiết bị và số lượng dự kiến" placeholder="Ví dụ: 25 Laptop ThinkPad T480" /><Field name="place" label="Điểm trường hoặc khu vực mong muốn" placeholder="Ví dụ: Mường Nhé, Điện Biên" /></div><div className="mt-6 flex justify-end gap-2"><button type="button" onClick={() => setShowRegister(false)} className="rounded bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">Hủy</button><button className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Gửi đăng ký</button></div></form></div>}
    </>
  );
}

function StatCard({ className, icon: Icon, label, value, suffix, footer, description, teal, progress }) {
  return <article className={`flex min-h-36 flex-col justify-between rounded-lg bg-white p-4 shadow-sm ${className}`}><div className="flex items-center justify-between"><span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">{label}</span><Icon size={18} className={teal ? "text-teal-700" : "text-blue-600"} /></div><div><div className="font-display text-[28px] font-semibold leading-none">{value} {suffix && <span className="text-sm font-medium text-slate-600">{suffix}</span>}</div>{description && <p className="mt-2 text-[10px] text-slate-500">{description}</p>}</div><div>{footer && <p className={`text-[10px] font-semibold ${teal ? "text-blue-700" : "text-teal-700"}`}>{footer}</p>}{progress && <div className="mt-3 h-1.5 rounded-full bg-blue-100"><span className="block h-full w-[85%] rounded-full bg-blue-600" /></div>}</div></article>;
}

function Info({ label, value, blue }) { return <div className="grid grid-cols-[92px_1fr] gap-2"><dt className="text-slate-500">{label}</dt><dd className={blue ? "font-medium text-blue-700" : "font-medium text-slate-700"}>{value}</dd></div>; }

function Field({ label, placeholder, name }) { return <label className="grid gap-1.5 text-sm font-medium text-slate-700">{label}<input name={name} required className="rounded border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" placeholder={placeholder} /></label>; }
