import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  CheckCircle2, ChevronRight, Copy, ExternalLink, MapPin, Package, Printer, Search, SearchCheck,
  Share2, ShieldCheck, Truck, Warehouse,
} from "lucide-react";
import api, { apiError } from "../lib/api";
import { copyText, downloadCsv, openPrint } from "../lib/actions";
import { ITEM_STATUS_LABEL, WAYBILL_STATUS_LABEL } from "../lib/labels";
import DeliveryEvidence from "./portals/DeliveryEvidence";
import {
  CATEGORY_LABEL, Empty, Stat, StatusBadge, fmtDateTime, orgName, waybillItems,
} from "./portals/kit";

const isWaybillCode = (code) => /^WB(?:-|\d)/i.test(code);

function JourneyTimeline({ waybill }) {
  const proof = waybill.proof;
  const steps = [
    { title: "Lập vận đơn", detail: waybill.allocationPlan?.requisition?.code || "Phương án điều phối đã được lập", at: waybill.createdAt, done: true },
    { title: "Tình nguyện viên nhận hàng", detail: (waybill.volunteers || []).map((person) => person.fullName).filter(Boolean).join(", ") || "Chưa có tình nguyện viên được gán", at: waybill.dispatchedAt, done: Boolean(waybill.dispatchedAt) },
    { title: "Giao hàng đến trường", detail: waybill.status === "FAILED" ? "Vận đơn giao thất bại" : orgName(waybill.allocationPlan?.requisition?.school), at: waybill.deliveredAt, done: waybill.status === "DELIVERED" || Boolean(waybill.deliveredAt) },
    { title: "Trường ký biên bản bàn giao", detail: proof ? `${proof.recipientName} · ${proof.recipientTitle}` : "Chưa có chữ ký bàn giao", at: proof?.signedAt, done: Boolean(proof?.signedAt) },
    { title: "Tình nguyện viên gửi báo cáo", detail: proof?.volunteerReportNote || "Chưa nộp báo cáo hoàn tất", at: proof?.volunteerReportedAt, done: Boolean(proof?.volunteerReportedAt) },
  ];

  return (
    <ol className="space-y-4">
      {steps.map((step, index) => (
        <li key={step.title} className="flex gap-3">
          <div className="flex flex-col items-center">
            <span className={`grid size-8 shrink-0 place-items-center rounded-full ${step.done ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-400"}`}>
              {step.done ? <CheckCircle2 size={16} /> : <span className="text-xs font-semibold">{index + 1}</span>}
            </span>
            {index < steps.length - 1 ? <span className="mt-1 h-full min-h-5 w-px bg-slate-200" /> : null}
          </div>
          <div className="min-w-0 flex-1 rounded-lg bg-slate-50 p-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <p className="text-sm font-semibold text-slate-800">{step.title}</p>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${step.done ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                {step.done ? "Hoàn tất" : "Đang chờ"}
              </span>
            </div>
            <p className="mt-1 whitespace-pre-wrap text-xs text-slate-600">{step.detail}</p>
            <p className="mt-1 text-[11px] text-slate-400">{step.at ? fmtDateTime(step.at) : "Chưa ghi nhận thời điểm"}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function WaybillResult({ waybill, matchedItem }) {
  const items = waybillItems(waybill);
  const school = waybill.allocationPlan?.requisition?.school;
  const donor = items.find((item) => item.pledgeItem?.pledge?.donor)?.pledgeItem?.pledge?.donor;
  const warehouses = [...new Map(items.filter((item) => item.warehouse).map((item) => [item.warehouse.code, item.warehouse])).values()];

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Hành trình vận đơn</p>
            <h2 className="mt-1 font-display text-2xl font-bold text-slate-900">{waybill.code}</h2>
            <p className="mt-1 text-sm text-slate-600">
              {waybill.allocationPlan?.requisition?.code || "Chưa liên kết yêu cầu"}
              {waybill.allocationPlan?.requisition?.title ? ` · ${waybill.allocationPlan.requisition.title}` : ""}
            </p>
          </div>
          <StatusBadge kind="waybill" value={waybill.status} />
        </div>
        {matchedItem ? (
          <p className="mt-4 rounded-lg bg-blue-50 px-3 py-2 text-sm text-blue-800">
            Mã hiện vật đang tra cứu: <b>{matchedItem.qrCode}</b> · {matchedItem.name}
          </p>
        ) : null}
        <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Stat label="Hiện vật" value={items.length} icon={Package} />
          <Stat label="Đã giao" value={items.filter((item) => item.status === "DELIVERED").length} tone="emerald" />
          <Stat label="Tình nguyện viên" value={(waybill.volunteers || []).length} tone="violet" />
          <Stat label="Ảnh bằng chứng" value={(waybill.proof?.proofPhotoUrls?.length || 0) + (waybill.proof?.volunteerPhotoUrls?.length || 0)} tone="amber" />
        </div>
      </section>

      <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="space-y-5">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-slate-900">Thông tin giao nhận</h3>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="flex items-center gap-1 text-xs font-semibold text-slate-500"><MapPin size={14} />Trường nhận</dt>
                <dd className="mt-1 text-sm font-medium text-slate-800">{orgName(school)}</dd>
                <dd className="text-xs text-slate-500">{[school?.profile?.address, school?.profile?.district, school?.profile?.city].filter(Boolean).join(", ") || "Chưa có địa chỉ"}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-1 text-xs font-semibold text-slate-500"><Truck size={14} />Tình nguyện viên</dt>
                <dd className="mt-1 text-sm font-medium text-slate-800">{(waybill.volunteers || []).map((person) => person.fullName).filter(Boolean).join(", ") || "Chưa phân công"}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-1 text-xs font-semibold text-slate-500"><Warehouse size={14} />Kho xuất</dt>
                <dd className="mt-1 text-sm text-slate-800">{warehouses.map((warehouse) => `${warehouse.name} (${warehouse.city})`).join(", ") || "Chưa ghi nhận kho"}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-slate-500">Nhà tài trợ</dt>
                <dd className="mt-1 text-sm text-slate-800">{donor?.profile?.organizationName || donor?.fullName || "Kho dự trữ / chưa liên kết phiếu"}</dd>
              </div>
            </dl>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-slate-900">Hiện vật trong vận đơn ({items.length})</h3>
            {items.length ? (
              <div className="mt-3 max-h-[28rem] overflow-auto">
                <table className="w-full text-left text-xs">
                  <thead className="sticky top-0 bg-slate-50 text-slate-500">
                    <tr><th className="px-2 py-2">Mã QR</th><th className="px-2 py-2">Hiện vật</th><th className="px-2 py-2">Loại</th><th className="px-2 py-2">Trạng thái</th></tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id} className={`border-t border-slate-100 ${matchedItem?.id === item.id ? "bg-blue-50" : ""}`}>
                        <td className="px-2 py-2 font-mono">{item.qrCode}</td>
                        <td className="px-2 py-2 font-medium text-slate-800">{item.name}</td>
                        <td className="px-2 py-2">{CATEGORY_LABEL[item.category] || item.category}</td>
                        <td className="px-2 py-2"><StatusBadge kind="item" value={item.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : <Empty>Vận đơn chưa có hiện vật.</Empty>}
          </section>
        </div>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-display text-lg font-semibold text-slate-900">Nhật ký hành trình thực tế</h3>
          <p className="mb-4 mt-1 text-xs text-slate-500">Các mốc được lấy từ vận đơn, biên bản ký nhận và báo cáo tình nguyện viên.</p>
          <JourneyTimeline waybill={waybill} />
        </section>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="mb-4 font-display text-lg font-semibold text-slate-900">Biên bản và ảnh bàn giao</h3>
        <DeliveryEvidence proof={waybill.proof} />
      </section>
    </div>
  );
}

function ItemResult({ item }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Mã hiện vật {item.qrCode}</p>
          <h2 className="mt-1 font-display text-2xl font-bold text-slate-900">{item.name}</h2>
        </div>
        <StatusBadge kind="item" value={item.status} />
      </div>
      <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div><dt className="text-xs font-semibold text-slate-500">Loại hiện vật</dt><dd className="mt-1 text-sm">{CATEGORY_LABEL[item.category] || item.category}</dd></div>
        <div><dt className="text-xs font-semibold text-slate-500">Hạng kiểm định</dt><dd className="mt-1 text-sm">{item.grade || "Chưa phân hạng"}</dd></div>
        <div><dt className="text-xs font-semibold text-slate-500">Kho lưu trữ</dt><dd className="mt-1 text-sm">{item.warehouse ? `${item.warehouse.name} · ${item.warehouse.city}` : "Chưa nhập kho"}</dd></div>
        <div><dt className="text-xs font-semibold text-slate-500">Phiếu trao tặng</dt><dd className="mt-1 text-sm">{item.pledge?.code || "Chưa liên kết"}</dd></div>
        <div><dt className="text-xs font-semibold text-slate-500">Nhà tài trợ</dt><dd className="mt-1 text-sm">{item.pledge?.organizationName || item.pledge?.donorName || "Kho dự trữ"}</dd></div>
        <div><dt className="text-xs font-semibold text-slate-500">Trường nhận</dt><dd className="mt-1 text-sm">{item.allocation?.schoolName || "Chưa phân bổ"}</dd></div>
      </dl>
      {item.inspections?.length ? (
        <div className="mt-5">
          <h3 className="font-semibold text-slate-800">Lịch sử kiểm định</h3>
          <ul className="mt-2 space-y-2">
            {item.inspections.map((inspection) => (
              <li key={`${inspection.inspectedAt}-${inspection.recommendedAction}`} className="rounded-lg bg-slate-50 p-3 text-xs">
                <p className="font-medium">{fmtDateTime(inspection.inspectedAt)} · {inspection.isFunctional ? "Hoạt động tốt" : "Cần xử lý"}</p>
                <p className="mt-1 text-slate-600">{inspection.recommendedAction || inspection.physicalDefects || "Không có ghi chú"}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {item.waybill ? (
        <div className="mt-5 rounded-lg bg-blue-50 p-3 text-sm text-blue-800">
          Vận đơn liên quan: <b>{item.waybill.code}</b> · {WAYBILL_STATUS_LABEL[item.waybill.status] || item.waybill.status}
        </div>
      ) : <p className="mt-5 rounded-lg bg-slate-50 p-3 text-sm text-slate-500">Hiện vật chưa được đưa vào vận đơn.</p>}
    </section>
  );
}

function SearchMatches({ data, onChoose }) {
  const matches = [
    ...(data.waybills || []).map((row) => ({ type: "Vận đơn", code: row.code, subtitle: WAYBILL_STATUS_LABEL[row.status] || row.status })),
    ...(data.items || []).map((row) => ({ type: "Hiện vật", code: row.qrCode, subtitle: `${row.name} · ${ITEM_STATUS_LABEL[row.status] || row.status}` })),
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="font-display text-lg font-semibold text-slate-900">Kết quả tìm kiếm gần đúng</h2>
      {matches.length ? (
        <ul className="mt-3 divide-y divide-slate-100">
          {matches.map((match) => (
            <li key={`${match.type}-${match.code}`} className="flex flex-wrap items-center justify-between gap-3 py-3">
              <div><p className="text-xs text-slate-500">{match.type}</p><p className="font-semibold text-slate-800">{match.code}</p><p className="text-xs text-slate-500">{match.subtitle}</p></div>
              <button type="button" onClick={() => onChoose(match.code)} className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700">Mở hành trình</button>
            </li>
          ))}
        </ul>
      ) : <Empty>Không tìm thấy vận đơn hoặc hiện vật phù hợp.</Empty>}
    </section>
  );
}

export default function TrackingPage() {
  const [params] = useSearchParams();
  const [searchValue, setSearchValue] = useState(params.get("q") || "");
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [shareNote, setShareNote] = useState("");

  const lookup = useCallback(async (term) => {
    const code = term.trim();
    if (!code) {
      setError("Nhập mã hiện vật hoặc mã vận đơn.");
      return;
    }

    setSearchValue(code);
    setIsSearching(true);
    setError("");
    setResult(null);

    async function showMatches() {
      const response = await api.get(`/tracking/search?q=${encodeURIComponent(code)}`);
      setResult({ kind: "search", data: response.data });
    }

    try {
      if (isWaybillCode(code)) {
        try {
          const response = await api.get(`/waybills/code/${encodeURIComponent(code)}`);
          setResult({ kind: "waybill", data: response.data });
        } catch (failure) {
          if (failure.response?.status !== 404) throw failure;
          await showMatches();
        }
        return;
      }

      try {
        const response = await api.get(`/tracking/items/${encodeURIComponent(code)}`);
        const item = response.data;
        if (item.waybill?.code) {
          const waybillResponse = await api.get(`/waybills/code/${encodeURIComponent(item.waybill.code)}`);
          setResult({ kind: "waybill", data: waybillResponse.data, matchedItem: item });
        } else {
          setResult({ kind: "item", data: item });
        }
      } catch (failure) {
        if (failure.response?.status !== 404) throw failure;
        await showMatches();
      }
    } catch (failure) {
      setResult(null);
      setError(apiError(failure, "Không tải được dữ liệu hành trình."));
    } finally {
      setIsSearching(false);
    }
  }, []);

  useEffect(() => {
    const initial = params.get("q");
    if (initial) void lookup(initial);
  }, [params, lookup]);

  function handleSearch(event) {
    event.preventDefault();
    void lookup(searchValue);
  }

  async function share() {
    try {
      await copyText(`${window.location.origin}/tracking?q=${encodeURIComponent(searchValue)}`);
      setShareNote("Đã sao chép liên kết tra cứu.");
    } catch (failure) {
      setError(apiError(failure, "Không sao chép được liên kết."));
    }
  }

  function exportResult() {
    if (result?.kind === "waybill") {
      const items = waybillItems(result.data);
      downloadCsv("hanh-trinh-van-don.csv", ["Mã vận đơn", "Trường nhận", "Hiện vật", "Mã QR", "Trạng thái hiện vật"], items.map((item) => [
        result.data.code,
        orgName(result.data.allocationPlan?.requisition?.school),
        item.name,
        item.qrCode,
        ITEM_STATUS_LABEL[item.status] || item.status,
      ]));
    } else if (result?.kind === "item") {
      downloadCsv("hanh-trinh-hien-vat.csv", ["Mã QR", "Tên hiện vật", "Loại", "Trạng thái", "Kho", "Trường nhận"], [[
        result.data.qrCode,
        result.data.name,
        CATEGORY_LABEL[result.data.category] || result.data.category,
        ITEM_STATUS_LABEL[result.data.status] || result.data.status,
        result.data.warehouse?.name || "",
        result.data.allocation?.schoolName || "",
      ]]);
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-5 p-4 pb-8 md:p-6">
      <header className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div>
          <nav className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <span>EduShare VN</span><ChevronRight size={15} /><span>Admin</span><ChevronRight size={15} /><span className="text-blue-700">Tra cứu hành trình</span>
          </nav>
          <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900">Tra cứu hành trình</h1>
          <p className="mt-1 max-w-3xl text-sm text-slate-600">Thông tin thực tế của vận đơn, hiện vật, bàn giao tại trường và báo cáo tình nguyện viên.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={share} disabled={!searchValue.trim()} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 disabled:opacity-50"><Share2 size={16} />Chia sẻ</button>
          <button type="button" onClick={openPrint} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"><Printer size={16} />In</button>
          {result && result.kind !== "search" ? <button type="button" onClick={exportResult} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"><Copy size={16} />Xuất CSV</button> : null}
        </div>
      </header>

      <form onSubmit={handleSearch} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
        <label htmlFor="trackingSearchInput" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">Mã vận đơn hoặc mã QR hiện vật</label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input id="trackingSearchInput" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} placeholder="Ví dụ: WB037 hoặc mã QR hiện vật" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          </div>
          <button type="submit" disabled={isSearching || !searchValue.trim()} className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50">
            <SearchCheck size={17} />{isSearching ? "Đang tra cứu..." : "Tra cứu"}
          </button>
        </div>
      </form>

      {shareNote ? <p role="status" className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">{shareNote}</p> : null}
      {error ? <p role="alert" className="rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{error}</p> : null}
      {isSearching ? <Empty>Đang tải dữ liệu hành trình...</Empty> : null}
      {!isSearching && !result && !error ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <Truck size={30} className="mx-auto text-blue-600" />
          <p className="mt-3 font-semibold text-slate-800">Nhập mã vận đơn hoặc mã QR để xem hành trình thực tế.</p>
          <p className="mt-1 text-sm text-slate-500">Mã vận đơn như WB037 được nhận diện trực tiếp.</p>
        </div>
      ) : null}
      {!isSearching && result?.kind === "waybill" ? <WaybillResult waybill={result.data} matchedItem={result.matchedItem} /> : null}
      {!isSearching && result?.kind === "item" ? <ItemResult item={result.data} /> : null}
      {!isSearching && result?.kind === "search" ? (
        <SearchMatches data={result.data} onChoose={(code) => { setSearchValue(code); void lookup(code); }} />
      ) : null}

      <p className="flex items-center gap-2 text-xs text-slate-500"><ShieldCheck size={15} />Các mốc hiển thị lấy từ hồ sơ vận đơn và biên bản đã lưu trên hệ thống.</p>
      <a href="#" onClick={(event) => event.preventDefault()} className="inline-flex items-center gap-1 self-start text-xs font-semibold text-blue-700 hover:underline">
        <ExternalLink size={14} />Thông tin minh bạch EduShare
      </a>
    </div>
  );
}
