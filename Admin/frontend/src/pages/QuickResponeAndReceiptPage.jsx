import { useEffect, useState } from "react";
import api, { apiError } from "../lib/api";
import { formatDateTime } from "../lib/labels";
import { Breadcrumb } from "../components/system-ui";
import {
  Search,
  BadgeCheck,
  QrCode,
  CheckCircle2,
  Clock,
  MonitorSmartphone,
  MailCheck,
  ArrowRight,
  ShieldCheck,
  FileEdit,
  Send,
  Download,
  ExternalLink,
  GraduationCap,
  Package,
  Waypoints,
  CheckSquare,
  X,
} from "lucide-react";

const receiptSeed = [
    {
      id: "CERT-2024-VNPT-08",
      name: "Tập đoàn VNPT (Chi nhánh Đà Nẵng)",
      time: "14:30 · 20/10/2024",
      campaign: "Chiến dịch Ánh Sáng Tri Thức",
      items: "40 Laptop Dell Latitude 5520 + 20 Màn hình LG IPS",
      value: "480.000.000 đ",
      status: "Đã cấp chứng nhận",
      rec: "#REC-2024-890",
      type: "enterprise",
    },
    {
      id: "CERT-2024-MB-05",
      name: "MB Bank - Ngân hàng Quân Đội",
      time: "09:15 · 19/10/2024",
      campaign: "",
      items: "25 Laptop ThinkPad X1 Carbon Gen 6",
      value: "312.500.000 đ",
      status: "Đã cấp chứng nhận",
      rec: "#REC-2024-889",
      type: "enterprise",
    },
    {
      id: "CERT-2024-FPT-12",
      name: "FPT Software Hà Nội",
      time: "16:45 · 18/10/2024",
      campaign: "",
      items: "50 Bộ máy tính bàn PC HP ProDesk 400 + Bộ bàn ghế tin học",
      value: "520.000.000 đ",
      status: "Đã cấp chứng nhận",
      rec: "#REC-2024-884",
      type: "enterprise",
    },
    {
      id: "CERT-2024-IND-99",
      name: "Chị Trần Kim Ngân (Nhà hảo tâm cá nhân)",
      time: "11:20 · 18/10/2024",
      campaign: "",
      items: "05 Apple iPad Gen 9 & Quỹ học bổng tin học 20.000.000 đ",
      value: "65.000.000 đ",
      status: "Đã cấp chứng nhận",
      rec: "#REC-2024-881",
      type: "individual",
    },
    {
      id: "CERT-2024-VCB-02",
      name: "Vietcombank - CN Hội An",
      time: "14:00 · 15/10/2024",
      campaign: "",
      items: "30 Máy tính xách tay HP EliteBook & 60 Ba lô học sinh",
      value: "360.000.000 đ",
      status: "Đã cấp chứng nhận",
      rec: "#REC-2024-872",
      type: "enterprise",
    },
  ];

export default function QuickResponeAndReceiptPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeRecord, setActiveRecord] = useState(receiptSeed[0].id);
  const [records, setRecords] = useState(receiptSeed);
  const [notice, setNotice] = useState("");
  const [recordPage, setRecordPage] = useState(1);
  const [templateNote, setTemplateNote] = useState("Chứng nhận số EduShare");

  useEffect(() => {
    api.get("/pledges?limit=20").then((response) => {
      const rows = (response.data.data ?? []).map((pledge) => ({
        id: pledge.code,
        pledgeId: pledge.id,
        pledgeStatus: pledge.status,
        name: pledge.donor?.fullName || "Nhà hảo tâm",
        time: formatDateTime(pledge.createdAt),
        campaign: pledge.campaign?.title || "",
        items: (pledge.items ?? []).map((item) => `${item.estimatedQuantity} ${item.name}`).join(", ") || "Thiết bị tin học",
        value: pledge.code,
        status: pledge.status === "PENDING" ? "Chờ xác nhận" : pledge.status === "VERIFIED" ? "Đã xác nhận" : pledge.status,
        rec: pledge.code,
        type: "enterprise",
      }));
      if (rows.length === 0) return;
      setRecords(rows);
      setActiveRecord(rows[0].id);
    }).catch(() => undefined);
  }, []);

  async function confirmPledge() {
    const record = records.find((row) => row.id === activeRecord);
    if (!record?.pledgeId) {
      setNotice("Hồ sơ này chưa nằm trong database.");
      return;
    }
    if (record.pledgeStatus !== "PENDING") {
      setNotice(`${record.id} đã được xử lý (${record.status}).`);
      return;
    }
    try {
      await api.patch(`/pledges/${record.pledgeId}/verify`);
      setRecords((rows) => rows.map((row) => row.pledgeId === record.pledgeId ? { ...row, pledgeStatus: "VERIFIED", status: "Đã xác nhận" } : row));
      setNotice(`Đã xác nhận ${record.id} và lưu vào database.`);
    } catch (error) {
      setNotice(apiError(error, "Không xác nhận được cam kết."));
    }
  }

  async function verifyAllPending() {
    const pending = records.filter((row) => row.pledgeStatus === "PENDING" && row.pledgeId);
    if (pending.length === 0) {
      setNotice("Không còn cam kết đang chờ xác nhận.");
      return;
    }
    let done = 0;
    for (const record of pending) {
      try {
        await api.patch(`/pledges/${record.pledgeId}/verify`);
        done += 1;
      } catch {
        break;
      }
    }
    setRecords((rows) => rows.map((row) => pending.slice(0, done).some((item) => item.pledgeId === row.pledgeId) ? { ...row, pledgeStatus: "VERIFIED", status: "Đã xác nhận" } : row));
    setNotice(`Đã xác nhận ${done}/${pending.length} cam kết đang chờ.`);
  }

  const listedRecords = records.filter((row) => activeTab === "all" || row.type === activeTab);
  const recordPageSize = 5;
  const recordPageCount = Math.max(1, Math.ceil(listedRecords.length / recordPageSize));
  const recordSafePage = Math.min(recordPage, recordPageCount);
  const pageRecords = listedRecords.slice((recordSafePage - 1) * recordPageSize, recordSafePage * recordPageSize);

  return (
    <>
      <Breadcrumb current="QR & Biên lai số" />
      {notice && <div className="mx-auto max-w-[1540px] px-4 pt-4 text-sm text-teal-800 lg:px-6">{notice}</div>}
      <main className="mx-auto max-w-[1540px] px-4 py-5 lg:px-6">
        <div className="flex flex-col w-full space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-2">
            <div className="flex flex-col gap-1">
              <nav className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <span>EduShare VN</span>
                <ArrowRight size={12} />
                <span>Nhà Hảo Tâm</span>
                <ArrowRight size={12} />
                <span className="text-blue-600 font-semibold">
                  QR & Biên lai số
                </span>
              </nav>
              <div className="flex items-center gap-3">
                <h1 className="font-display text-2xl font-semibold text-slate-900 tracking-tight">
                  Hệ Thống Chứng Nhận & Biên Lai Kỹ Thuật Số
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-teal-50 text-teal-700 flex items-center gap-1.5 border border-teal-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                  Cổng Xác Thực Trực Tuyến
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-2.5 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 px-3 py-1.5 bg-slate-50 rounded-lg">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <BadgeCheck size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase">
                    Tổng phát hành
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    1.428{" "}
                    <span className="text-xs font-normal text-slate-500">
                      bản
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-3 py-1.5 bg-slate-50 rounded-lg">
                <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600">
                  <QrCode size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase">
                    Lượt quét tra cứu
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    19.850
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <section className="lg:col-span-4 flex flex-col gap-4">
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                <div className="p-4 bg-slate-50 flex flex-col gap-3 border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900">
                      Phiên quyên góp hoàn thành
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold">
                      248 hồ sơ
                    </span>
                  </div>

                  <div className="relative flex items-center w-full">
                    <Search
                      className="absolute left-3 text-slate-400"
                      size={16}
                    />
                    <input
                      className="w-full pl-9 pr-8 py-2 bg-white text-slate-900 placeholder:text-slate-400 text-xs rounded-lg shadow-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                      placeholder="Tìm theo tên nhà tài trợ, mã #REC, mã băm..."
                      type="text"
                      defaultValue="VNPT"
                    />
                    <button className="absolute right-2 text-slate-400 hover:text-slate-600">
                      <X size={14} />
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 pt-1">
                    <button
                      onClick={() => setActiveTab("all")}
                      className={`px-3 py-1 rounded-lg text-[10px] font-semibold transition-colors ${activeTab === "all" ? "bg-blue-600 text-white shadow-sm" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"}`}
                    >
                      Tất cả (248)
                    </button>
                    <button
                      onClick={() => setActiveTab("enterprise")}
                      className={`px-3 py-1 rounded-lg text-[10px] font-semibold transition-colors ${activeTab === "enterprise" ? "bg-blue-600 text-white shadow-sm" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"}`}
                    >
                      Doanh nghiệp (182)
                    </button>
                    <button
                      onClick={() => setActiveTab("individual")}
                      className={`px-3 py-1 rounded-lg text-[10px] font-semibold transition-colors ${activeTab === "individual" ? "bg-blue-600 text-white shadow-sm" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"}`}
                    >
                      Cá nhân (66)
                    </button>
                  </div>
                </div>

                <div className="divide-y divide-slate-100 overflow-y-auto max-h-[700px]">
                  {pageRecords.map((record) => (
                      <article
                        key={record.id}
                        onClick={() => setActiveRecord(record.id)}
                        className={`p-4 transition-all cursor-pointer relative ${activeRecord === record.id ? "bg-blue-50/50 shadow-sm" : "hover:bg-slate-50"}`}
                      >
                        {activeRecord === record.id && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r"></div>
                        )}

                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <span
                            className={`font-mono text-xs font-bold ${activeRecord === record.id ? "text-blue-600" : "text-slate-600"}`}
                          >
                            #{record.id}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold">
                            <CheckCircle2 size={12} />
                            {record.status}
                          </span>
                        </div>

                        <div>
                          <h2 className="text-sm text-slate-900 font-semibold line-clamp-1">
                            {record.name}
                          </h2>
                          <div className="flex items-center gap-2 mt-1 text-slate-500 text-xs">
                            <Clock size={13} />
                            <span>{record.time}</span>
                            {record.campaign && (
                              <>
                                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                <span className="text-blue-600 font-medium">
                                  {record.campaign}
                                </span>
                              </>
                            )}
                          </div>

                          {activeRecord === record.id ? (
                            <div className="mt-2.5 p-2.5 bg-white rounded-lg shadow-sm border border-slate-100">
                              <div className="text-slate-700 text-xs flex items-start gap-1.5">
                                <MonitorSmartphone
                                  className="text-blue-600 shrink-0 mt-0.5"
                                  size={14}
                                />
                                <span className="line-clamp-2 text-slate-900 font-medium">
                                  {record.items}
                                </span>
                              </div>
                              <div className="mt-2 flex items-center justify-between pt-2 border-t border-slate-100 text-[10px]">
                                <span className="text-slate-500">
                                  Trị giá quy đổi tương đương:
                                </span>
                                <span className="text-sm text-blue-600 font-bold">
                                  {record.value}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <>
                              <p className="mt-1.5 text-slate-600 text-xs line-clamp-1">
                                {record.items}
                              </p>
                              <div className="mt-2 flex items-center justify-between text-[10px]">
                                <span className="text-slate-500 font-mono">
                                  Tra cứu: {record.rec}
                                </span>
                                <span className="font-bold text-slate-900">
                                  {record.value}
                                </span>
                              </div>
                            </>
                          )}

                          {activeRecord === record.id && (
                            <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500">
                              <span className="flex items-center gap-1">
                                <MailCheck
                                  size={14}
                                  className="text-teal-600"
                                />
                                Đã email chứng thư điện tử
                              </span>
                              <span className="text-blue-600 font-medium hover:underline flex items-center gap-0.5">
                                Xem chi tiết <ArrowRight size={12} />
                              </span>
                            </div>
                          )}
                        </div>
                      </article>
                    ))}
                </div>

                <div className="p-3 bg-slate-50 flex items-center justify-between text-[11px] font-medium text-slate-500 border-t border-slate-100">
                  <span>
                    Trang <strong className="text-slate-900">{recordSafePage}</strong> / {recordPageCount}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setRecordPage((current) => Math.max(1, current - 1))}
                      className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 text-slate-900 disabled:opacity-40 transition-colors"
                    >
                      Trước
                    </button>
                    <button type="button" onClick={() => setRecordPage((current) => Math.min(recordPageCount, current + 1))} className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 text-slate-900 transition-colors">
                      Sau
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-blue-600" size={24} />
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-900">
                      Kiểm tra tính toàn vẹn SHA-256
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono mt-0.5">
                      0x4a9f...c289 (Khớp Ledger Quốc Gia)
                    </span>
                  </div>
                </div>
                <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                  100% Valid
                </span>
              </div>
            </section>

            <section className="lg:col-span-8 flex flex-col gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 pl-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-medium text-slate-900">
                    Bản xem trước Chứng nhận số · Phục vụ lưu trữ & Tra cứu minh
                    bạch
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button type="button" onClick={() => { const next = window.prompt("Tiêu đề chứng nhận", templateNote); if (next) { setTemplateNote(next); setNotice(`Đã đổi tiêu đề chứng nhận thành “${next}”.`); } }} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-medium transition-colors">
                    <FileEdit size={14} />
                    <span>Chỉnh sửa Template</span>
                  </button>
                  <button type="button" onClick={verifyAllPending} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-medium transition-colors">
                    <Send size={14} />
                    <span>Gửi Email hàng loạt</span>
                  </button>
                  <button type="button" onClick={confirmPledge} className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all">
                    <Download size={16} />
                    <span>Xác nhận cam kết</span>
                  </button>
                  <a
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
                    href="#"
                    title="Mở đường dẫn tra cứu công khai"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="bg-slate-100 p-6 rounded-2xl flex items-center justify-center shadow-inner overflow-x-auto min-h-[500px]">
                <div className="relative w-full min-w-[700px] max-w-[860px] bg-white text-slate-900 p-10 md:p-12 rounded-sm shadow-2xl overflow-hidden select-none">
                  <div className="absolute inset-3 border-2 border-blue-900/20 rounded-lg pointer-events-none"></div>
                  <div className="absolute inset-4 border border-amber-600/40 rounded-md pointer-events-none"></div>
                  <div className="absolute inset-[18px] border-2 border-blue-900 rounded-sm pointer-events-none"></div>

                  <div className="absolute top-5 left-5 w-10 h-10 text-amber-600 pointer-events-none">
                    <svg
                      className="w-full h-full opacity-80"
                      fill="currentColor"
                      viewBox="0 0 40 40"
                    >
                      <path
                        d="M0 0 L40 0 C20 0 0 20 0 40 Z"
                        fill="currentColor"
                      ></path>
                      <circle cx="12" cy="12" fill="#1e3a8a" r="3"></circle>
                    </svg>
                  </div>
                  <div className="absolute top-5 right-5 w-10 h-10 text-amber-600 pointer-events-none rotate-90">
                    <svg
                      className="w-full h-full opacity-80"
                      fill="currentColor"
                      viewBox="0 0 40 40"
                    >
                      <path
                        d="M0 0 L40 0 C20 0 0 20 0 40 Z"
                        fill="currentColor"
                      ></path>
                      <circle cx="12" cy="12" fill="#1e3a8a" r="3"></circle>
                    </svg>
                  </div>
                  <div className="absolute bottom-5 left-5 w-10 h-10 text-amber-600 pointer-events-none -rotate-90">
                    <svg
                      className="w-full h-full opacity-80"
                      fill="currentColor"
                      viewBox="0 0 40 40"
                    >
                      <path
                        d="M0 0 L40 0 C20 0 0 20 0 40 Z"
                        fill="currentColor"
                      ></path>
                      <circle cx="12" cy="12" fill="#1e3a8a" r="3"></circle>
                    </svg>
                  </div>
                  <div className="absolute bottom-5 right-5 w-10 h-10 text-amber-600 pointer-events-none rotate-180">
                    <svg
                      className="w-full h-full opacity-80"
                      fill="currentColor"
                      viewBox="0 0 40 40"
                    >
                      <path
                        d="M0 0 L40 0 C20 0 0 20 0 40 Z"
                        fill="currentColor"
                      ></path>
                      <circle cx="12" cy="12" fill="#1e3a8a" r="3"></circle>
                    </svg>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035]">
                    <svg
                      fill="none"
                      height="420"
                      stroke="#1e3a8a"
                      strokeWidth="0.5"
                      viewBox="0 0 100 100"
                      width="420"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="48"
                        strokeDasharray="1 1"
                      ></circle>
                      <circle cx="50" cy="50" r="38"></circle>
                      <circle
                        cx="50"
                        cy="50"
                        r="28"
                        strokeDasharray="2 1"
                      ></circle>
                      <polygon points="50,15 62,38 88,38 67,54 75,78 50,62 25,78 33,54 12,38 38,38"></polygon>
                    </svg>
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="flex flex-col items-center gap-1 mb-6">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-7 h-7 rounded bg-blue-900 text-white flex items-center justify-center shadow-sm">
                          <GraduationCap size={16} />
                        </div>
                        <span className="text-[13px] tracking-widest text-blue-900 uppercase font-bold">
                          Hệ Thống Điều Phối Giáo Dục Quốc Gia EduShare Vietnam
                        </span>
                      </div>
                      <p className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                        CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                      </p>
                      <p className="text-[9px] font-medium text-slate-600 tracking-wider">
                        Độc lập - Tự do - Hạnh phúc
                      </p>
                      <div className="w-24 h-0.5 bg-amber-600 mt-1"></div>
                    </div>

                    <div className="w-full flex items-center justify-between px-6 mb-4 text-[10px] text-slate-500 font-mono">
                      <span>
                        Mã cấp: <strong>#{activeRecord}/QG-EDU</strong>
                      </span>
                      <span>Sổ định danh điện tử: SHA256-VN8902A</span>
                    </div>

                    <div className="flex flex-col items-center mb-5">
                      <h2 className="text-3xl md:text-4xl leading-tight text-slate-900 font-serif uppercase tracking-normal font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900">
                        CHỨNG NHẬN ĐÓNG GÓP SỐ
                      </h2>
                      <span className="text-[11px] font-bold text-amber-700 uppercase tracking-[0.2em] mt-0.5">
                        Digital Certificate of Philanthropy
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 font-serif italic mb-1">
                      Ban Điều Hành Quỹ & Mạng Lưới Điều Phối Thiết Bị Giáo Dục
                      EduShare Việt Nam
                    </p>
                    <p className="text-sm font-bold tracking-widest uppercase text-blue-900 mb-2">
                      TRÂN TRỌNG CẢM ƠN VÀ VINH DANH
                    </p>

                    <div className="my-2 py-1 px-4 border-b border-slate-300">
                      <h3 className="text-xl md:text-2xl text-slate-900 font-bold tracking-tight uppercase">
                        {records.find((r) => r.id === activeRecord)?.name}
                      </h3>
                    </div>

                    <p className="max-w-2xl text-xs leading-relaxed text-slate-700 font-serif mt-2">
                      Đã có đóng góp tài trợ đặc biệt ý nghĩa cho sự nghiệp phát
                      triển giáo dục chuyển đổi số vùng cao, trao cơ hội học tập
                      bình đẳng cho học sinh thông qua chiến dịch{" "}
                      <span className="font-semibold text-blue-900">
                        "Ánh Sáng Tri Thức Miền Tây Xứ Quảng"
                      </span>
                      .
                    </p>

                    <div className="w-full max-w-2xl mt-5 p-4 bg-slate-50 border border-slate-200 rounded-lg shadow-sm text-left relative z-20">
                      <div className="flex items-center gap-2 mb-1.5 text-[10px] font-bold text-blue-900 uppercase tracking-wider">
                        <Package size={14} />
                        Nội dung thiết bị bàn giao & Phân bổ tiếp nhận
                      </div>
                      <p className="text-xs text-slate-900 leading-normal font-medium">
                        •{" "}
                        <strong className="text-slate-900">
                          {records.find((r) => r.id === activeRecord)?.items}
                        </strong>
                      </p>
                      <p className="text-[11px] text-slate-600 mt-1">
                        Phục vụ xây dựng 02 phòng thực hành tin học chuẩn tại:{" "}
                        <span className="font-semibold text-slate-900">
                          Trường PTDTBT THCS Trà Dơn
                        </span>{" "}
                        và{" "}
                        <span className="font-semibold text-slate-900">
                          Trường Tiểu học Vùng Cao Nam Trà My
                        </span>
                        .
                      </p>
                      <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px]">
                        <span className="text-slate-500">
                          Tổng giá trị hiện vật quy đổi kiểm định:
                        </span>
                        <span className="font-bold text-blue-900 text-[13px]">
                          {records.find((r) => r.id === activeRecord)?.value}
                        </span>
                      </div>
                    </div>

                    <div className="w-full grid grid-cols-12 items-end mt-8 pt-4 gap-4">
                      <div className="col-span-4 flex items-center gap-3 text-left">
                        <div className="p-1.5 bg-white border-2 border-blue-900/40 rounded-lg shadow-sm">
                          <svg
                            className="w-16 h-16"
                            fill="#0f172a"
                            viewBox="0 0 100 100"
                          >
                            <rect
                              fill="#1e3a8a"
                              fillOpacity="0.1"
                              height="30"
                              rx="3"
                              width="30"
                              x="0"
                              y="0"
                            ></rect>
                            <rect
                              fill="none"
                              height="22"
                              rx="2"
                              stroke="#1e3a8a"
                              strokeWidth="4"
                              width="22"
                              x="4"
                              y="4"
                            ></rect>
                            <rect
                              fill="#1e3a8a"
                              height="10"
                              width="10"
                              x="10"
                              y="10"
                            ></rect>
                            <rect
                              fill="#1e3a8a"
                              fillOpacity="0.1"
                              height="30"
                              rx="3"
                              width="30"
                              x="70"
                              y="0"
                            ></rect>
                            <rect
                              fill="none"
                              height="22"
                              rx="2"
                              stroke="#1e3a8a"
                              strokeWidth="4"
                              width="22"
                              x="74"
                              y="4"
                            ></rect>
                            <rect
                              fill="#1e3a8a"
                              height="10"
                              width="10"
                              x="80"
                              y="10"
                            ></rect>
                            <rect
                              fill="#1e3a8a"
                              fillOpacity="0.1"
                              height="30"
                              rx="3"
                              width="30"
                              x="0"
                              y="70"
                            ></rect>
                            <rect
                              fill="none"
                              height="22"
                              rx="2"
                              stroke="#1e3a8a"
                              strokeWidth="4"
                              width="22"
                              x="4"
                              y="74"
                            ></rect>
                            <rect
                              fill="#1e3a8a"
                              height="10"
                              width="10"
                              x="10"
                              y="80"
                            ></rect>
                            <rect height="6" width="6" x="36" y="6"></rect>
                            <rect height="6" width="6" x="48" y="12"></rect>
                            <rect height="6" width="6" x="36" y="24"></rect>
                            <rect height="8" width="8" x="56" y="20"></rect>
                            <rect
                              fill="#2563eb"
                              height="20"
                              rx="2"
                              width="20"
                              x="40"
                              y="40"
                            ></rect>
                            <path
                              d="M46 50 L49 53 L55 47"
                              fill="none"
                              stroke="#ffffff"
                              strokeWidth="2"
                            ></path>
                            <rect height="6" width="8" x="6" y="40"></rect>
                            <rect height="12" width="6" x="20" y="48"></rect>
                            <rect height="6" width="12" x="72" y="42"></rect>
                            <rect height="12" width="8" x="86" y="52"></rect>
                            <rect height="14" width="6" x="36" y="68"></rect>
                            <rect height="6" width="14" x="48" y="76"></rect>
                            <rect height="8" width="8" x="68" y="72"></rect>
                            <rect height="8" width="14" x="80" y="82"></rect>
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-bold text-blue-900 uppercase tracking-tight">
                            Quét mã kiểm tra
                          </span>
                          <span className="text-[8px] text-slate-500 leading-tight mt-0.5">
                            Tra cứu hành trình thiết bị
                          </span>
                          <span className="text-[9px] font-mono text-slate-900 font-semibold mt-1">
                            edushare.vn/verify
                          </span>
                        </div>
                      </div>

                      <div className="col-span-4 flex justify-center">
                        <div className="relative w-24 h-24 flex items-center justify-center select-none transform hover:scale-105 transition-transform">
                          <svg
                            className="w-full h-full text-red-700"
                            viewBox="0 0 100 100"
                          >
                            <circle
                              cx="50"
                              cy="50"
                              fill="none"
                              r="46"
                              stroke="#b91c1c"
                              strokeDasharray="4 2"
                              strokeWidth="2"
                            ></circle>
                            <circle
                              cx="50"
                              cy="50"
                              fill="#b91c1c"
                              fillOpacity="0.04"
                              r="41"
                              stroke="#b91c1c"
                              strokeWidth="1.5"
                            ></circle>
                            <path
                              d="M 18,50 A 32,32 0 1,1 82,50"
                              fill="none"
                              id="curveTop"
                            ></path>
                            <text
                              fill="#b91c1c"
                              fontSize="6.5"
                              fontWeight="700"
                              letterSpacing="1.2"
                            >
                              <textPath
                                href="#curveTop"
                                startOffset="50%"
                                textAnchor="middle"
                              >
                                ★ EDUSHARE VIETNAM ★
                              </textPath>
                            </text>
                            <path
                              d="M 82,50 A 32,32 0 0,1 18,50"
                              fill="none"
                              id="curveBottom"
                            ></path>
                            <text
                              fill="#b91c1c"
                              fontSize="6.2"
                              fontWeight="600"
                              letterSpacing="0.8"
                            >
                              <textPath
                                href="#curveBottom"
                                startOffset="50%"
                                textAnchor="middle"
                              >
                                CHỨNG THỰC MINH BẠCH
                              </textPath>
                            </text>
                            <circle
                              cx="50"
                              cy="50"
                              fill="none"
                              r="17"
                              stroke="#b91c1c"
                              strokeWidth="1"
                            ></circle>
                            <polygon
                              fill="#b91c1c"
                              points="50,38 53,46 62,46 55,51 58,59 50,54 42,59 45,51 38,46 47,46"
                            ></polygon>
                          </svg>
                          <span className="absolute text-[7px] font-bold text-red-700 uppercase bottom-5 tracking-tight bg-white px-1">
                            ĐÃ XÁC THỰC
                          </span>
                        </div>
                      </div>

                      <div className="col-span-4 flex flex-col items-center text-center">
                        <span className="text-[10px] text-slate-600 italic">
                          Hà Nội, ngày 20 tháng 10 năm 2024
                        </span>
                        <span className="text-[10px] font-bold text-slate-900 uppercase mt-0.5 tracking-wider">
                          TM. Ban Điều Hành Quỹ Quốc Gia
                        </span>
                        <span className="text-[9px] text-slate-500 uppercase">
                          Giám đốc điều phối
                        </span>

                        <div className="h-12 w-32 my-1 relative flex items-center justify-center">
                          <svg
                            className="w-full h-full text-blue-800"
                            viewBox="0 0 160 60"
                          >
                            <path
                              d="M20,42 C35,20 48,15 55,28 C62,42 70,48 85,25 C92,12 110,18 120,38 C128,52 145,22 152,18"
                              fill="none"
                              stroke="#1e40af"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.2"
                            ></path>
                            <path
                              d="M38,32 C65,34 95,30 135,28"
                              fill="none"
                              stroke="#1e40af"
                              strokeLinecap="round"
                              strokeWidth="1.4"
                            ></path>
                            <path
                              d="M50,18 C45,35 60,50 78,45"
                              fill="none"
                              stroke="#1e40af"
                              strokeLinecap="round"
                              strokeWidth="1.2"
                            ></path>
                          </svg>
                        </div>

                        <span className="text-xs font-bold text-slate-900">
                          Nguyễn Văn An
                        </span>
                        <div className="mt-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[8px] font-medium flex items-center gap-1">
                          <ShieldCheck size={10} className="text-emerald-600" />
                          Ký điện tử CA: EduShare-Root-01
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Waypoints className="text-blue-600" size={18} />
                    <span className="text-sm font-semibold text-slate-900">
                      Tiến trình xác thực & Bàn giao thực tế theo QR
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    Phiên giao dịch ID: #TX-VNPT-480M
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-blue-600 font-bold">
                        BƯỚC 01
                      </span>
                      <CheckCircle2 className="text-teal-600" size={14} />
                    </div>
                    <span className="text-xs font-semibold text-slate-900 mt-1">
                      Tiếp nhận & Kiểm định
                    </span>
                    <span className="text-[11px] text-slate-600">
                      Kho Kỹ thuật Đà Nẵng
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      20/10 14:30
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-blue-600 font-bold">
                        BƯỚC 02
                      </span>
                      <CheckCircle2 className="text-teal-600" size={14} />
                    </div>
                    <span className="text-xs font-semibold text-slate-900 mt-1">
                      Cài đặt EduOS & Học liệu
                    </span>
                    <span className="text-[11px] text-slate-600">
                      40 máy hoàn tất 100%
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      21/10 10:15
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-blue-600 font-bold">
                        BƯỚC 03
                      </span>
                      <CheckCircle2 className="text-teal-600" size={14} />
                    </div>
                    <span className="text-xs font-semibold text-slate-900 mt-1">
                      Vận chuyển lên điểm trường
                    </span>
                    <span className="text-[11px] text-slate-600">
                      Xe hậu cần Nam Trà My
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      22/10 08:00
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-emerald-700 font-bold">
                        BƯỚC 04
                      </span>
                      <CheckSquare className="text-emerald-600" size={14} />
                    </div>
                    <span className="text-xs font-semibold text-emerald-900 mt-1">
                      Bàn giao & Ký số nhà trường
                    </span>
                    <span className="text-[11px] text-emerald-800">
                      Biên bản số #BB-TRA-DON-01
                    </span>
                    <span className="text-[10px] text-emerald-700 font-mono">
                      22/10 16:20 (Xong)
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
