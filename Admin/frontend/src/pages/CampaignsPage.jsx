import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { apiError } from "../lib/api";
import { CATEGORY_LABEL } from "../lib/labels";
import { downloadCsv } from "../lib/actions";
import { Building2, CheckCircle2, ChevronRight, Download, Flag, MapPin, Package, PlusCircle, Search, SlidersHorizontal } from "lucide-react";
import { Breadcrumb } from "../components/system-ui";

const campaignSeed = [
  { id: "CD-2024-ML08", place: "Mường Lát, Thanh Hóa", name: "Chắp Cánh Ước Mơ Tin Học 2024", detail: "Trang bị đồng bộ phòng máy 35 bộ PC cấu hình Core i5 kèm bộ switch mạng cho trường...", progress: 85.7, received: "Đã tiếp nhận: 30 / 35 bộ PC", footer: "Đã kiểm định 100%", action: "Điều phối kho", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80" },
  { id: "CD-2024-HG14", place: "Mèo Vạc, Hà Giang", name: "Máy Tính Cho Em Vùng Cao", detail: "Cung cấp 50 máy tính xách tay kèm bộ phát Wifi mạng lưới giáo dục số tại Trường...", progress: 64, received: "Đã gom: 32 / 50 Laptop", footer: "Cần thêm 4 TNV xe bán tải vượt đèo Mã Pí Lèng", action: "Phân công TNV", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80", alert: true },
  { id: "CD-2024-QN02", place: "Nam Trà My, Quảng Nam", name: "Phòng Lab Số Cho Trẻ Em Đồng Bào", detail: "Số hóa phòng thực hành công nghệ thông tin cho Trường PTDT bán trú Nam Trà My...", progress: 37.5, received: "Đã tiếp nhận: 15 / 40 thiết bị", footer: "Kho Đà Nẵng phụ trách", action: "Chi tiết đợt gom", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80" },
];

const campaignRowsSeed = [
  ["CD-2024-ML08", "Tin Học Mường Lát 2024", "Tiểu học Tam Chung, Thanh Hóa", "30 / 35 Bộ PC", "85.7%", "Thiếu 5 bộ", "Tập đoàn FPT, VNPT"],
  ["CD-2024-HG14", "Máy Tính Cho Em Vùng Cao", "Bản Pả Vi, Mèo Vạc, Hà Giang", "32 / 50 Laptop", "64.0%", "Thiếu 18 máy", "Vietcombank, Quỹ Hy Vọng"],
  ["CD-2024-QN02", "Phòng Lab Số Nam Trà My", "THCS Trà Don, Quảng Nam", "15 / 40 Bộ thiết bị", "37.5%", "Thiếu 25 bộ", "Hội Tin Học Đà Nẵng"],
  ["CD-2024-GL05", "Phòng Tin Học Krông Pa 2024", "TH A Ju, Krông Pa, Gia Lai", "25 / 25 Bộ PC", "100.0%", "Hoàn thành", "Công Ty CMC Telecom"],
  ["CD-2024-LC03", "Màn Hình Cho Em Bát Xát", "THCS Y Tý, Lào Cai", "45 / 45 Màn hình", "100.0%", "Đã đóng hồ sơ", "Khối Doanh Nghiệp Trẻ HN"],
];

function Metric({ icon: Icon, label, value, children, blue }) {
  return <article className="flex min-h-40 flex-col justify-between rounded-lg bg-white p-5 shadow-sm"><div className="flex justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">{label}</p><h2 className={`mt-2 font-display text-3xl font-semibold ${blue ? "text-blue-700" : "text-slate-950"}`}>{value}</h2></div><span className="grid size-10 place-items-center rounded bg-blue-100 text-blue-600"><Icon size={21} /></span></div><div className="text-xs text-slate-600">{children}</div></article>;
}

const campaignStatusLabel = { ACTIVE: "Đang diễn ra", COMPLETED: "Đã hoàn thành", UPCOMING: "Sắp mở", PAUSED: "Tạm dừng" };

function mapCampaign(item, index) {
  const rate = item.summary?.receivedRate ?? 0;
  const images = campaignSeed.map((card) => card.image);
  const targets = (item.targets ?? []).map((target) => `${CATEGORY_LABEL[target.category] || target.category} · ${target.currentReceivedQuantity ?? 0}/${target.targetQuantity}`).join(", ");
  return {
    campaignId: item.id,
    id: item.slug,
    place: item.status,
    statusLabel: campaignStatusLabel[item.status] || item.status,
    name: item.title,
    detail: item.description,
    progress: rate,
    received: `Đã tiếp nhận: ${item.summary?.received ?? 0} / ${item.summary?.targetQuantity ?? 0}`,
    footer: targets || `${item._count?.pledges ?? 0} phiếu`,
    action: "Chi tiết",
    image: item.bannerUrl || images[index % images.length],
  };
}

export default function CampaignsPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("Tất cả");
  const [dialog, setDialog] = useState(false);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [targetCategory, setTargetCategory] = useState("IT_DEVICES");
  const [targetQuantity, setTargetQuantity] = useState(10);
  const [campaigns, setCampaigns] = useState([]);
  const [rows, setRows] = useState([]);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    api.get("/campaigns?limit=20").then((response) => {
      const list = response.data.data ?? [];
      setCampaigns(list.map(mapCampaign));
      setRows(list.map((item) => [
        item.slug,
        item.title,
        item.status,
        `${item.summary?.received ?? 0} / ${item.summary?.targetQuantity ?? 0}`,
        `${item.summary?.receivedRate ?? 0}%`,
        item.status,
        `${item._count?.pledges ?? 0} phiếu`,
      ]));
    }).catch(() => {
      setCampaigns(campaignSeed);
      setRows(campaignRowsSeed);
    });
  }, []);

  async function createCampaign() {
    if (title.trim().length < 3) return;
    const slug = title.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 40);
    await api.post("/campaigns", {
      slug: `${slug || "chien-dich"}-${Date.now().toString(36)}`,
      title: title.trim(),
      description: `${place.trim() || "Điểm trường"} — chiến dịch quyên góp thiết bị học tập EduShare Vietnam.`,
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 90 * 86400000).toISOString(),
      status: "ACTIVE",
      targets: [{ category: targetCategory, targetQuantity: Math.max(1, Number(targetQuantity) || 1) }],
    });
    setDialog(false);
    setTitle("");
    setPlace("");
    const response = await api.get("/campaigns?limit=20");
    const list = response.data.data ?? [];
    setCampaigns(list.map(mapCampaign));
  }
  const needle = query.trim().toLowerCase();
  const visibleCampaigns = campaigns.filter((item) => {
    const text = `${item.name} ${item.place} ${item.detail}`.toLowerCase();
    if (needle && !text.includes(needle)) return false;
    if (tab.startsWith("Đang vận hành")) return item.place === "ACTIVE";
    if (tab.startsWith("Đã hoàn thành")) return item.place === "COMPLETED";
    if (tab.startsWith("Gần đạt")) return Number(item.progress) >= 60;
    if (tab.startsWith("Đang mở")) return Number(item.progress) < 100;
    return true;
  });
  const visibleRows = rows.filter((row) => !needle || row.join(" ").toLowerCase().includes(needle));

  return <>
    <Breadcrumb current="Chiến dịch" />
    <main className="mx-auto max-w-[1540px] space-y-5 px-4 py-5 lg:px-6">
      <header className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div><div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wide"><span className="inline-flex items-center gap-1 rounded bg-blue-100 px-2 py-1 text-blue-700"><Flag size={13} /> Cổng điều phối quốc gia</span><span className="text-slate-500">• Năm tài khóa 2024</span></div><h1 className="max-w-3xl font-display text-2xl font-semibold leading-tight md:text-[28px]">Quản Lý & Điều Phối Chiến Dịch Quyên Góp Giáo Dục</h1><p className="mt-2 max-w-3xl text-sm text-slate-600">Hệ thống giám sát phân bổ phòng máy vi tính, vận chuyển laptop tái thiết bị và hạ tầng số hóa cho các điểm trường vùng cao, biên giới và hải đảo.</p></div>
        <div className="flex flex-wrap gap-2"><button type="button" onClick={() => downloadCsv("chien-dich.csv", ["Mã", "Tên", "Trạng thái", "Tiến độ"], visibleCampaigns.map((item) => [item.id, item.name, item.place, item.progress]))} className="inline-flex items-center gap-1 rounded bg-white px-3 py-2.5 text-xs font-semibold shadow-sm"><Download size={15} /> Xuất báo cáo</button><button type="button" onClick={() => setTab(tab.startsWith("Đang") ? "Tất cả" : "Đang vận hành")} className="inline-flex items-center gap-1 rounded bg-white px-3 py-2.5 text-xs font-semibold shadow-sm"><SlidersHorizontal size={15} /> Bộ lọc nâng cao</button><button onClick={() => setDialog(true)} className="inline-flex items-center gap-1 rounded bg-blue-600 px-3 py-2.5 text-xs font-semibold text-white shadow-sm"><PlusCircle size={15} /> Tạo chiến dịch mới</button></div>
      </header>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"><Metric icon={Flag} label="Tổng chiến dịch 2024" value="32"><span className="font-semibold text-teal-700">● 28 Đang diễn ra</span><span className="ml-4">4 Đã hoàn tất</span></Metric><Metric icon={Package} label="Thiết bị mục tiêu" value="18,450"><div className="flex justify-between text-[11px]"><b className="text-blue-700">Tỷ lệ huy động 75.3%</b><span>Còn thiếu 6,050</span></div><div className="mt-2 h-1.5 rounded bg-blue-100"><span className="block h-full w-[75.3%] rounded bg-blue-600" /></div></Metric><Metric icon={Building2} label="Điểm trường thụ hưởng" value="128 trường"><span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-teal-700" /> Phủ sóng tại 22 tỉnh miền núi & biên giới</span></Metric><Metric icon={Package} label="Ngân sách & linh kiện" value="3.82 Tỷ" blue><span>Huy động xã hội hóa <b className="float-right text-teal-700">+18.4% so kỳ trước</b></span></Metric></section>
      <section className="flex flex-col gap-3 rounded-lg bg-white p-3 shadow-sm xl:flex-row xl:items-center xl:justify-between"><div className="flex gap-1 overflow-x-auto">{["Tất cả (32)", "Đang vận hành (28)", "Gần đạt mục tiêu (6)", "Đang mở đăng ký TNV (8)", "Đã hoàn thành (4)"].map(x => <button key={x} onClick={() => setTab(x)} className={`whitespace-nowrap rounded px-3 py-2 text-xs font-semibold ${tab === x ? "bg-blue-600 text-white" : "bg-blue-50 text-slate-600"}`}>{x}</button>)}</div><div className="flex flex-wrap gap-2"><label className="flex items-center gap-1 rounded bg-blue-50 px-2 text-xs text-slate-500"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} className="w-44 bg-transparent py-2 outline-none" placeholder="Tìm tên chiến dịch, trường, tỉnh..." /></label><select className="rounded bg-blue-50 px-3 text-xs"><option>Tất cả khu vực</option></select><select className="rounded bg-blue-50 px-3 text-xs"><option>Phòng máy PC bàn</option></select></div></section>
      <section><div className="mb-3 flex items-center justify-between"><h2 className="font-display text-lg font-semibold">◉ Chiến Dịch Trọng Điểm Đang Triển Khai</h2><button type="button" onClick={() => navigate("/tracking")} className="text-xs font-semibold text-blue-700">Xem bản đồ toàn quốc <ChevronRight className="inline" size={14} /></button></div><div className="grid gap-4 lg:grid-cols-3">{visibleCampaigns.map(c => <article key={c.id} className="overflow-hidden rounded-lg bg-white shadow-sm"><div className="relative h-36"><img src={c.image} className="size-full object-cover" /><span className="absolute left-2 top-2 rounded bg-white/90 px-2 py-1 text-[10px] font-semibold">{c.statusLabel || c.place}</span><span className="absolute right-2 top-2 rounded bg-teal-100 px-2 py-1 text-[10px] font-semibold text-teal-800">Tiến độ {c.progress}%</span></div><div className="p-4"><p className="text-[10px] text-slate-500">MÃ: {c.id} · <span className="text-rose-600">Còn 5 ngày kết thúc</span></p><h3 className="mt-1 truncate font-display text-base font-semibold">{c.name}</h3><p className="mt-1 h-9 text-xs text-slate-600">{c.detail}</p><div className="mt-3 rounded bg-blue-50 p-2"><div className="flex justify-between text-[10px]"><span>{c.received}</span><b className="text-blue-700">{c.progress}%</b></div><div className="mt-2 h-1.5 rounded bg-blue-100"><span style={{ width: `${c.progress}%` }} className="block h-full rounded bg-blue-600" /></div></div>{c.alert ? <p className="mt-3 rounded bg-rose-50 px-2 py-2 text-[10px] font-semibold text-rose-700">🚚 {c.footer}</p> : <p className="mt-3 text-[10px] text-slate-500">{c.footer}</p>}</div><footer className="flex items-center justify-between border-t border-blue-50 bg-blue-50/60 px-4 py-3 text-[10px]"><span className="text-slate-500">◉ {c.footer}</span><button type="button" onClick={() => navigate(c.campaignId ? `/donations?campaign=${c.campaignId}` : "/donations")} className="rounded bg-blue-600 px-3 py-1.5 font-semibold text-white">{c.action}</button></footer></article>)}</div></section>
      <section className="overflow-hidden rounded-lg bg-white shadow-sm"><div className="flex items-center justify-between p-4"><div><h2 className="font-display text-lg font-semibold">Danh Mục Bàn Giao & Điều Phối Thực Địa</h2><p className="text-[10px] text-slate-500">Bảng dữ liệu tập trung quản lý thiết bị, kiểm định kho vận và lịch trình nghiệm thu kỹ thuật</p></div><span className="text-[10px] text-slate-500">Hiển thị: 5 / 32 chiến dịch</span></div><div className="overflow-x-auto"><table className="w-full min-w-[1000px] text-left"><thead className="bg-blue-50 text-[9px] uppercase text-slate-500"><tr>{["Mã CD", "Chiến dịch & điểm tiếp nhận", "Mục tiêu / tiếp nhận", "Tiến độ huy động", "Đối tác đồng hành"].map(h => <th key={h} className="px-4 py-3">{h}</th>)}</tr></thead><tbody>{visibleRows.map(r => <tr key={r[0]} className="border-t border-blue-50 text-xs"><td className="px-4 py-3 font-semibold text-blue-700">{r[0]}</td><td className="px-4 py-3"><b>{r[1]}</b><br /><span className="text-[10px] text-slate-500"><MapPin className="inline" size={11} /> {r[2]}</span></td><td className="px-4 py-3"><b>{r[3]}</b><br /><span className="text-[10px] text-teal-700">{r[4] === "100.0%" ? "Đã bàn giao hiệu trưởng" : "Đã áp dụng gói nâng cấp Off-line"}</span></td><td className="px-4 py-3"><b className="text-blue-700">{r[4]}</b><span className="ml-4 text-[10px] text-slate-500">{r[5]}</span><div className="mt-1 h-1.5 w-28 rounded bg-blue-100"><span style={{ width: r[4] }} className="block h-full rounded bg-blue-600" /></div></td><td className="px-4 py-3 text-slate-600">{r[6]}</td></tr>)}</tbody></table></div><footer className="flex justify-between bg-blue-50 px-4 py-3 text-[10px] text-slate-500"><span>Hiển thị 1 đến 5 trên tổng số 32 bản ghi chiến dịch</span><span>Trước　<b className="rounded bg-blue-600 px-2 py-1 text-white">1</b>　2　3　…　7　Tiếp</span></footer></section>
      <section className="grid gap-4 lg:grid-cols-12"><article className="rounded-lg bg-white p-5 shadow-sm lg:col-span-8"><div className="flex justify-between"><div><h2 className="font-display text-base font-semibold">⚑ Lộ Trình Bàn Giao & Nghiệm Thu Tháng 10 - 11/2024</h2><p className="text-[10px] text-slate-500">Điều phối chuỗi xe vận tải và đội tình nguyện kỹ thuật các trạm điểm trường</p></div><span className="rounded bg-blue-100 px-2 py-1 text-[10px] text-blue-700">Trọng điểm Quý IV</span></div>{[["18/10 - ĐÃ HOÀN TẤT", "Xuất kho 25 bộ máy tính từ Hub Hà Nội đi Thanh Hóa", "Biên bản số: BB-892"], ["25/10 - ĐANG DIỄN RA", "Đoàn TNV kỹ thuật xuất phát vượt đèo lên Mèo Vạc (Hà Giang)", "12 TNV tham gia"], ["02/11 - DỰ KIẾN", "Hợp kỹ thuật & Đóng gói thiết bị phòng máy Nam Trà My", "Kho Đà Nẵng"]].map(([time, title, tag]) => <div key={time} className="mt-4 border-l-2 border-blue-200 pl-4"><p className="text-[10px] font-semibold text-teal-700">{time}</p><div className="mt-1 rounded bg-blue-50 px-3 py-2"><b className="text-xs">{title}</b><span className="float-right text-[10px] text-blue-700">{tag}</span></div></div>)}</article><article className="rounded-lg bg-white p-5 shadow-sm lg:col-span-4"><div className="flex justify-between"><h2 className="font-display text-base font-semibold">💎 Đối Tác Đồng Hành</h2><span className="text-[10px]">24 Tổ chức</span></div><p className="mt-2 text-xs text-slate-500">Các tập đoàn công nghệ và quỹ cộng đồng tài trợ linh kiện, bảo trợ cước viễn thông và chi phí vận chuyển.</p>{[["FPT", "Tập đoàn FPT", "Bảo trợ 50 máy bộ & RAM"], ["VNPT", "Tập đoàn VNPT", "Bảo trợ 2 năm cước Internet"], ["VCB", "Quỹ An Sinh Vietcombank", "Hỗ trợ 1 tỷ VNĐ mua màn hình mới"]].map(x => <div key={x[0]} className="mt-3 flex items-center gap-2 rounded bg-blue-50 p-2"><b className="grid size-8 place-items-center rounded bg-white text-xs text-blue-700">{x[0]}</b><span className="text-[10px]"><b className="block text-xs">{x[1]}</b>{x[2]}</span><CheckCircle2 className="ml-auto text-teal-700" size={15} /></div>)}<button type="button" onClick={() => navigate("/audit")} className="mt-4 w-full rounded bg-blue-100 py-2 text-xs font-semibold text-blue-700">Tài khoản nhà hảo tâm nằm ở quản lý tài khoản</button></article></section>
    </main>
    {notice && <div className="fixed bottom-5 right-5 z-50 rounded-lg bg-teal-700 px-4 py-3 text-sm text-white shadow-xl">{notice}</div>}
    {dialog && <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/30 p-4"><div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl"><h2 className="font-display text-xl font-semibold">Tạo chiến dịch mới</h2><p className="mt-1 text-sm text-slate-500">Tạo đợt và hạng mục nhu yếu phẩm. Tài khoản nhà hảo tâm không tạo từ trang này.</p><input value={title} onChange={(event) => setTitle(event.target.value)} className="mt-5 w-full rounded border border-slate-200 px-3 py-2.5 text-sm" placeholder="Tên chiến dịch" /><input value={place} onChange={(event) => setPlace(event.target.value)} className="mt-3 w-full rounded border border-slate-200 px-3 py-2.5 text-sm" placeholder="Điểm trường tiếp nhận" /><label className="mt-3 block text-sm text-slate-600">Hạng mục cần</label><select value={targetCategory} onChange={(event) => setTargetCategory(event.target.value)} className="mt-1 w-full rounded border border-slate-200 px-3 py-2.5 text-sm"><option value="IT_DEVICES">Thiết bị tin học</option><option value="BOOKS">Sách</option><option value="UNIFORMS">Đồng phục</option><option value="STATIONERY">Văn phòng phẩm</option><option value="FURNITURE">Bàn ghế</option><option value="VEHICLES">Phương tiện</option></select><label className="mt-3 block text-sm text-slate-600">Số lượng mục tiêu</label><input type="number" min="1" value={targetQuantity} onChange={(event) => setTargetQuantity(event.target.value)} className="mt-1 w-full rounded border border-slate-200 px-3 py-2.5 text-sm" /><div className="mt-5 flex justify-end gap-2"><button onClick={() => setDialog(false)} className="rounded bg-slate-100 px-4 py-2 text-sm">Hủy</button><button onClick={() => createCampaign().catch((error) => setNotice(apiError(error, "Không tạo được chiến dịch.")))} className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Tạo chiến dịch</button></div></div></div>}
  </>;
}
