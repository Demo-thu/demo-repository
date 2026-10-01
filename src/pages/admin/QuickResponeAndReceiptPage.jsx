import { useState } from "react";
import { Breadcrumb } from "../../components/system-ui";
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

export default function QuickResponeAndReceiptPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeRecord, setActiveRecord] = useState("CERT-2024-VNPT-08");

  const records = [
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

  return (
    <>
      <Breadcrumb current="QR & Biên lai số" />
      <main className="mx-auto max-w-[1540px] px-4 py-5 lg:px-6">
        <div className="flex w-full flex-col space-y-6">
          <div className="flex flex-col justify-between gap-3 pb-2 md:flex-row md:items-center">
            <div className="flex flex-col gap-1">
              <nav className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <span>EduShare VN</span>
                <ArrowRight size={12} />
                <span>Nhà Hảo Tâm</span>
                <ArrowRight size={12} />
                <span className="font-semibold text-blue-600">QR & Biên lai số</span>
              </nav>
              <div className="flex items-center gap-3">
                <h1 className="font-display text-2xl font-semibold tracking-tight text-slate-900">
                  Hệ Thống Chứng Nhận & Biên Lai Kỹ Thuật Số
                </h1>
                <span className="flex items-center gap-1.5 rounded-full border border-teal-100 bg-teal-50 px-2.5 py-0.5 text-[10px] font-semibold text-teal-700">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500"></span>
                  Cổng Xác Thực Trực Tuyến
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm">
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-1.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <BadgeCheck size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase">Tổng phát hành</span>
                  <span className="text-sm font-bold text-slate-900">
                    1.428 <span className="text-xs font-normal text-slate-500">bản</span>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-1.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                  <QrCode size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase">Lượt quét tra cứu</span>
                  <span className="text-sm font-bold text-slate-900">19.850</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
            <section className="flex flex-col gap-4 lg:col-span-4">
              <div className="flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
                <div className="flex flex-col gap-3 border-b border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900">Phiên quyên góp hoàn thành</span>
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">
                      248 hồ sơ
                    </span>
                  </div>

                  <div className="relative flex w-full items-center">
                    <Search className="absolute left-3 text-slate-400" size={16} />
                    <input
                      className="w-full rounded-lg border border-slate-200 bg-white py-2 pr-8 pl-9 text-xs text-slate-900 shadow-sm transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 focus:outline-none"
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
                      className={`rounded-lg px-3 py-1 text-[10px] font-semibold transition-colors ${activeTab === "all" ? "bg-blue-600 text-white shadow-sm" : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"}`}
                    >
                      Tất cả (248)
                    </button>
                    <button
                      onClick={() => setActiveTab("enterprise")}
                      className={`rounded-lg px-3 py-1 text-[10px] font-semibold transition-colors ${activeTab === "enterprise" ? "bg-blue-600 text-white shadow-sm" : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"}`}
                    >
                      Doanh nghiệp (182)
                    </button>
                    <button
                      onClick={() => setActiveTab("individual")}
                      className={`rounded-lg px-3 py-1 text-[10px] font-semibold transition-colors ${activeTab === "individual" ? "bg-blue-600 text-white shadow-sm" : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"}`}
                    >
                      Cá nhân (66)
                    </button>
                  </div>
                </div>

                <div className="max-h-[700px] divide-y divide-slate-100 overflow-y-auto">
                  {records
                    .filter((r) => activeTab === "all" || r.type === activeTab)
                    .map((record) => (
                      <article
                        key={record.id}
                        onClick={() => setActiveRecord(record.id)}
                        className={`relative cursor-pointer p-4 transition-all ${activeRecord === record.id ? "bg-blue-50/50 shadow-sm" : "hover:bg-slate-50"}`}
                      >
                        {activeRecord === record.id && (
                          <div className="absolute top-0 bottom-0 left-0 w-1 rounded-r bg-blue-600"></div>
                        )}

                        <div className="mb-1.5 flex items-start justify-between gap-2">
                          <span
                            className={`font-mono text-xs font-bold ${activeRecord === record.id ? "text-blue-600" : "text-slate-600"}`}
                          >
                            #{record.id}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                            <CheckCircle2 size={12} />
                            {record.status}
                          </span>
                        </div>

                        <div>
                          <h2 className="line-clamp-1 text-sm font-semibold text-slate-900">{record.name}</h2>
                          <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                            <Clock size={13} />
                            <span>{record.time}</span>
                            {record.campaign && (
                              <>
                                <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                                <span className="font-medium text-blue-600">{record.campaign}</span>
                              </>
                            )}
                          </div>

                          {activeRecord === record.id ? (
                            <div className="mt-2.5 rounded-lg border border-slate-100 bg-white p-2.5 shadow-sm">
                              <div className="flex items-start gap-1.5 text-xs text-slate-700">
                                <MonitorSmartphone className="mt-0.5 shrink-0 text-blue-600" size={14} />
                                <span className="line-clamp-2 font-medium text-slate-900">{record.items}</span>
                              </div>
                              <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-2 text-[10px]">
                                <span className="text-slate-500">Trị giá quy đổi tương đương:</span>
                                <span className="text-sm font-bold text-blue-600">{record.value}</span>
                              </div>
                            </div>
                          ) : (
                            <>
                              <p className="mt-1.5 line-clamp-1 text-xs text-slate-600">{record.items}</p>
                              <div className="mt-2 flex items-center justify-between text-[10px]">
                                <span className="font-mono text-slate-500">Tra cứu: {record.rec}</span>
                                <span className="font-bold text-slate-900">{record.value}</span>
                              </div>
                            </>
                          )}

                          {activeRecord === record.id && (
                            <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500">
                              <span className="flex items-center gap-1">
                                <MailCheck size={14} className="text-teal-600" />
                                Đã email chứng thư điện tử
                              </span>
                              <span className="flex items-center gap-0.5 font-medium text-blue-600 hover:underline">
                                Xem chi tiết <ArrowRight size={12} />
                              </span>
                            </div>
                          )}
                        </div>
                      </article>
                    ))}
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 p-3 text-[11px] font-medium text-slate-500">
                  <span>
                    Trang <strong className="text-slate-900">1</strong> / 25
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      className="rounded border border-slate-200 bg-white px-2.5 py-1 text-slate-900 transition-colors hover:bg-slate-100 disabled:opacity-40"
                      disabled
                    >
                      Trước
                    </button>
                    <button className="rounded border border-slate-200 bg-white px-2.5 py-1 text-slate-900 transition-colors hover:bg-slate-100">
                      Sau
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-blue-600" size={24} />
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-900">Kiểm tra tính toàn vẹn SHA-256</span>
                    <span className="mt-0.5 font-mono text-[11px] text-slate-500">
                      0x4a9f...c289 (Khớp Ledger Quốc Gia)
                    </span>
                  </div>
                </div>
                <span className="rounded bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700">
                  100% Valid
                </span>
              </div>
            </section>

            <section className="flex flex-col gap-4 lg:col-span-8">
              <div className="flex flex-col justify-between gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-sm sm:flex-row sm:items-center">
                <div className="flex items-center gap-2 pl-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-medium text-slate-900">
                    Bản xem trước Chứng nhận số · Phục vụ lưu trữ & Tra cứu minh bạch
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100">
                    <FileEdit size={14} />
                    <span>Chỉnh sửa Template</span>
                  </button>
                  <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100">
                    <Send size={14} />
                    <span>Gửi Email hàng loạt</span>
                  </button>
                  <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-blue-700">
                    <Download size={16} />
                    <span>Tải xuống PDF Bản Gốc</span>
                  </button>
                  <a
                    className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-slate-100"
                    href="#"
                    title="Mở đường dẫn tra cứu công khai"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="flex min-h-[500px] items-center justify-center overflow-x-auto rounded-2xl bg-slate-100 p-6 shadow-inner">
                <div className="relative w-full max-w-[860px] min-w-[700px] overflow-hidden rounded-sm bg-white p-10 text-slate-900 shadow-2xl select-none md:p-12">
                  <div className="pointer-events-none absolute inset-3 rounded-lg border-2 border-blue-900/20"></div>
                  <div className="pointer-events-none absolute inset-4 rounded-md border border-amber-600/40"></div>
                  <div className="pointer-events-none absolute inset-[18px] rounded-sm border-2 border-blue-900"></div>

                  <div className="pointer-events-none absolute top-5 left-5 h-10 w-10 text-amber-600">
                    <svg className="h-full w-full opacity-80" fill="currentColor" viewBox="0 0 40 40">
                      <path d="M0 0 L40 0 C20 0 0 20 0 40 Z" fill="currentColor"></path>
                      <circle cx="12" cy="12" fill="#1e3a8a" r="3"></circle>
                    </svg>
                  </div>
                  <div className="pointer-events-none absolute top-5 right-5 h-10 w-10 rotate-90 text-amber-600">
                    <svg className="h-full w-full opacity-80" fill="currentColor" viewBox="0 0 40 40">
                      <path d="M0 0 L40 0 C20 0 0 20 0 40 Z" fill="currentColor"></path>
                      <circle cx="12" cy="12" fill="#1e3a8a" r="3"></circle>
                    </svg>
                  </div>
                  <div className="pointer-events-none absolute bottom-5 left-5 h-10 w-10 -rotate-90 text-amber-600">
                    <svg className="h-full w-full opacity-80" fill="currentColor" viewBox="0 0 40 40">
                      <path d="M0 0 L40 0 C20 0 0 20 0 40 Z" fill="currentColor"></path>
                      <circle cx="12" cy="12" fill="#1e3a8a" r="3"></circle>
                    </svg>
                  </div>
                  <div className="pointer-events-none absolute right-5 bottom-5 h-10 w-10 rotate-180 text-amber-600">
                    <svg className="h-full w-full opacity-80" fill="currentColor" viewBox="0 0 40 40">
                      <path d="M0 0 L40 0 C20 0 0 20 0 40 Z" fill="currentColor"></path>
                      <circle cx="12" cy="12" fill="#1e3a8a" r="3"></circle>
                    </svg>
                  </div>

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.035]">
                    <svg fill="none" height="420" stroke="#1e3a8a" strokeWidth="0.5" viewBox="0 0 100 100" width="420">
                      <circle cx="50" cy="50" r="48" strokeDasharray="1 1"></circle>
                      <circle cx="50" cy="50" r="38"></circle>
                      <circle cx="50" cy="50" r="28" strokeDasharray="2 1"></circle>
                      <polygon points="50,15 62,38 88,38 67,54 75,78 50,62 25,78 33,54 12,38 38,38"></polygon>
                    </svg>
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-6 flex flex-col items-center gap-1">
                      <div className="mb-1 flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded bg-blue-900 text-white shadow-sm">
                          <GraduationCap size={16} />
                        </div>
                        <span className="text-[13px] font-bold tracking-widest text-blue-900 uppercase">
                          Hệ Thống Điều Phối Giáo Dục Quốc Gia EduShare Vietnam
                        </span>
                      </div>
                      <p className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                        CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                      </p>
                      <p className="text-[9px] font-medium tracking-wider text-slate-600">
                        Độc lập - Tự do - Hạnh phúc
                      </p>
                      <div className="mt-1 h-0.5 w-24 bg-amber-600"></div>
                    </div>

                    <div className="mb-4 flex w-full items-center justify-between px-6 font-mono text-[10px] text-slate-500">
                      <span>
                        Mã cấp: <strong>#{activeRecord}/QG-EDU</strong>
                      </span>
                      <span>Sổ định danh điện tử: SHA256-VN8902A</span>
                    </div>

                    <div className="mb-5 flex flex-col items-center">
                      <h2 className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 bg-clip-text font-serif text-3xl leading-tight font-extrabold tracking-normal text-slate-900 text-transparent uppercase md:text-4xl">
                        CHỨNG NHẬN ĐÓNG GÓP SỐ
                      </h2>
                      <span className="mt-0.5 text-[11px] font-bold tracking-[0.2em] text-amber-700 uppercase">
                        Digital Certificate of Philanthropy
                      </span>
                    </div>

                    <p className="mb-1 font-serif text-xs text-slate-600 italic">
                      Ban Điều Hành Quỹ & Mạng Lưới Điều Phối Thiết Bị Giáo Dục EduShare Việt Nam
                    </p>
                    <p className="mb-2 text-sm font-bold tracking-widest text-blue-900 uppercase">
                      TRÂN TRỌNG CẢM ƠN VÀ VINH DANH
                    </p>

                    <div className="my-2 border-b border-slate-300 px-4 py-1">
                      <h3 className="text-xl font-bold tracking-tight text-slate-900 uppercase md:text-2xl">
                        {records.find((r) => r.id === activeRecord)?.name}
                      </h3>
                    </div>

                    <p className="mt-2 max-w-2xl font-serif text-xs leading-relaxed text-slate-700">
                      Đã có đóng góp tài trợ đặc biệt ý nghĩa cho sự nghiệp phát triển giáo dục chuyển đổi số vùng cao,
                      trao cơ hội học tập bình đẳng cho học sinh thông qua chiến dịch{" "}
                      <span className="font-semibold text-blue-900">"Ánh Sáng Tri Thức Miền Tây Xứ Quảng"</span>.
                    </p>

                    <div className="relative z-20 mt-5 w-full max-w-2xl rounded-lg border border-slate-200 bg-slate-50 p-4 text-left shadow-sm">
                      <div className="mb-1.5 flex items-center gap-2 text-[10px] font-bold tracking-wider text-blue-900 uppercase">
                        <Package size={14} />
                        Nội dung thiết bị bàn giao & Phân bổ tiếp nhận
                      </div>
                      <p className="text-xs leading-normal font-medium text-slate-900">
                        •{" "}
                        <strong className="text-slate-900">{records.find((r) => r.id === activeRecord)?.items}</strong>
                      </p>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Phục vụ xây dựng 02 phòng thực hành tin học chuẩn tại:{" "}
                        <span className="font-semibold text-slate-900">Trường PTDTBT THCS Trà Dơn</span> và{" "}
                        <span className="font-semibold text-slate-900">Trường Tiểu học Vùng Cao Nam Trà My</span>.
                      </p>
                      <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-2 text-[11px]">
                        <span className="text-slate-500">Tổng giá trị hiện vật quy đổi kiểm định:</span>
                        <span className="text-[13px] font-bold text-blue-900">
                          {records.find((r) => r.id === activeRecord)?.value}
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 grid w-full grid-cols-12 items-end gap-4 pt-4">
                      <div className="col-span-4 flex items-center gap-3 text-left">
                        <div className="rounded-lg border-2 border-blue-900/40 bg-white p-1.5 shadow-sm">
                          <svg className="h-16 w-16" fill="#0f172a" viewBox="0 0 100 100">
                            <rect fill="#1e3a8a" fillOpacity="0.1" height="30" rx="3" width="30" x="0" y="0"></rect>
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
                            <rect fill="#1e3a8a" height="10" width="10" x="10" y="10"></rect>
                            <rect fill="#1e3a8a" fillOpacity="0.1" height="30" rx="3" width="30" x="70" y="0"></rect>
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
                            <rect fill="#1e3a8a" height="10" width="10" x="80" y="10"></rect>
                            <rect fill="#1e3a8a" fillOpacity="0.1" height="30" rx="3" width="30" x="0" y="70"></rect>
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
                            <rect fill="#1e3a8a" height="10" width="10" x="10" y="80"></rect>
                            <rect height="6" width="6" x="36" y="6"></rect>
                            <rect height="6" width="6" x="48" y="12"></rect>
                            <rect height="6" width="6" x="36" y="24"></rect>
                            <rect height="8" width="8" x="56" y="20"></rect>
                            <rect fill="#2563eb" height="20" rx="2" width="20" x="40" y="40"></rect>
                            <path d="M46 50 L49 53 L55 47" fill="none" stroke="#ffffff" strokeWidth="2"></path>
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
                          <span className="text-[9px] font-bold tracking-tight text-blue-900 uppercase">
                            Quét mã kiểm tra
                          </span>
                          <span className="mt-0.5 text-[8px] leading-tight text-slate-500">
                            Tra cứu hành trình thiết bị
                          </span>
                          <span className="mt-1 font-mono text-[9px] font-semibold text-slate-900">
                            edushare.vn/verify
                          </span>
                        </div>
                      </div>

                      <div className="col-span-4 flex justify-center">
                        <div className="relative flex h-24 w-24 transform items-center justify-center transition-transform select-none hover:scale-105">
                          <svg className="h-full w-full text-red-700" viewBox="0 0 100 100">
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
                            <path d="M 18,50 A 32,32 0 1,1 82,50" fill="none" id="curveTop"></path>
                            <text fill="#b91c1c" fontSize="6.5" fontWeight="700" letterSpacing="1.2">
                              <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
                                ★ EDUSHARE VIETNAM ★
                              </textPath>
                            </text>
                            <path d="M 82,50 A 32,32 0 0,1 18,50" fill="none" id="curveBottom"></path>
                            <text fill="#b91c1c" fontSize="6.2" fontWeight="600" letterSpacing="0.8">
                              <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">
                                CHỨNG THỰC MINH BẠCH
                              </textPath>
                            </text>
                            <circle cx="50" cy="50" fill="none" r="17" stroke="#b91c1c" strokeWidth="1"></circle>
                            <polygon
                              fill="#b91c1c"
                              points="50,38 53,46 62,46 55,51 58,59 50,54 42,59 45,51 38,46 47,46"
                            ></polygon>
                          </svg>
                          <span className="absolute bottom-5 bg-white px-1 text-[7px] font-bold tracking-tight text-red-700 uppercase">
                            ĐÃ XÁC THỰC
                          </span>
                        </div>
                      </div>

                      <div className="col-span-4 flex flex-col items-center text-center">
                        <span className="text-[10px] text-slate-600 italic">Hà Nội, ngày 20 tháng 10 năm 2024</span>
                        <span className="mt-0.5 text-[10px] font-bold tracking-wider text-slate-900 uppercase">
                          TM. Ban Điều Hành Quỹ Quốc Gia
                        </span>
                        <span className="text-[9px] text-slate-500 uppercase">Giám đốc điều phối</span>

                        <div className="relative my-1 flex h-12 w-32 items-center justify-center">
                          <svg className="h-full w-full text-blue-800" viewBox="0 0 160 60">
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

                        <span className="text-xs font-bold text-slate-900">Nguyễn Văn An</span>
                        <div className="mt-1 flex items-center gap-1 rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[8px] font-medium text-emerald-800">
                          <ShieldCheck size={10} className="text-emerald-600" />
                          Ký điện tử CA: EduShare-Root-01
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Waypoints className="text-blue-600" size={18} />
                    <span className="text-sm font-semibold text-slate-900">
                      Tiến trình xác thực & Bàn giao thực tế theo QR
                    </span>
                  </div>
                  <span className="font-mono text-xs text-slate-500">Phiên giao dịch ID: #TX-VNPT-480M</span>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-2 md:grid-cols-4">
                  <div className="flex flex-col gap-1 rounded-lg border border-slate-100 bg-slate-50 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-blue-600">BƯỚC 01</span>
                      <CheckCircle2 className="text-teal-600" size={14} />
                    </div>
                    <span className="mt-1 text-xs font-semibold text-slate-900">Tiếp nhận & Kiểm định</span>
                    <span className="text-[11px] text-slate-600">Kho Kỹ thuật Đà Nẵng</span>
                    <span className="font-mono text-[10px] text-slate-400">20/10 14:30</span>
                  </div>

                  <div className="flex flex-col gap-1 rounded-lg border border-slate-100 bg-slate-50 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-blue-600">BƯỚC 02</span>
                      <CheckCircle2 className="text-teal-600" size={14} />
                    </div>
                    <span className="mt-1 text-xs font-semibold text-slate-900">Cài đặt EduOS & Học liệu</span>
                    <span className="text-[11px] text-slate-600">40 máy hoàn tất 100%</span>
                    <span className="font-mono text-[10px] text-slate-400">21/10 10:15</span>
                  </div>

                  <div className="flex flex-col gap-1 rounded-lg border border-slate-100 bg-slate-50 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-blue-600">BƯỚC 03</span>
                      <CheckCircle2 className="text-teal-600" size={14} />
                    </div>
                    <span className="mt-1 text-xs font-semibold text-slate-900">Vận chuyển lên điểm trường</span>
                    <span className="text-[11px] text-slate-600">Xe hậu cần Nam Trà My</span>
                    <span className="font-mono text-[10px] text-slate-400">22/10 08:00</span>
                  </div>

                  <div className="flex flex-col gap-1 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-emerald-700">BƯỚC 04</span>
                      <CheckSquare className="text-emerald-600" size={14} />
                    </div>
                    <span className="mt-1 text-xs font-semibold text-emerald-900">Bàn giao & Ký số nhà trường</span>
                    <span className="text-[11px] text-emerald-800">Biên bản số #BB-TRA-DON-01</span>
                    <span className="font-mono text-[10px] text-emerald-700">22/10 16:20 (Xong)</span>
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
