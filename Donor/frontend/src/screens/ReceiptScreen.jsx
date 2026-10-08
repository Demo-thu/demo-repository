import { useEffect, useState } from "react";
import { Download, Printer } from "lucide-react";
import api, { apiError } from "@/lib/api";
import { CATEGORY_LABEL, Card, Empty, GRADE_LABEL, GhostButton, Notice, PageHead, QrImage, StatusBadge, downloadCsv, fmtDateTime, inputClass, rowsOf, useNotice } from "@/pages/portals/kit";

export default function ReceiptScreen({ params, openTab }) {
  const [pledges, setPledges] = useState([]);
  const [selected, setSelected] = useState(params.get("pledge") || "");
  const [receipt, setReceipt] = useState(null);
  const { notice, fail } = useNotice();

  useEffect(() => {
    api.get("/pledges?limit=100").then((response) => {
      const rows = rowsOf(response.data).filter((row) => !["PENDING", "CANCELLED"].includes(row.status));
      setPledges(rows);
      setSelected((current) => params.get("pledge") || current || rows[0]?.id || "");
    }).catch((error) => fail(apiError(error, "Không tải được danh sách phiếu.")));
  }, [params]);

  useEffect(() => {
    if (!selected) {
      setReceipt(null);
      return;
    }
    api.get(`/pledges/${selected}/receipt`).then((response) => setReceipt(response.data)).catch((error) => {
      setReceipt(null);
      fail(apiError(error, "Không tải được biên nhận."));
    });
  }, [selected]);

  function exportCsv() {
    const rows = receipt.lines.flatMap((line) => (line.assets.length
      ? line.assets.map((asset) => [receipt.code, line.name, CATEGORY_LABEL[line.category], asset.qrCode, GRADE_LABEL[asset.grade] || "Chưa kiểm định", asset.status])
      : [[receipt.code, line.name, CATEGORY_LABEL[line.category], "", "", "Chưa nhập kho"]]));
    downloadCsv(`bien-nhan-${receipt.code}.csv`, ["Mã phiếu", "Hiện vật", "Nhóm", "Mã QR", "Phân loại", "Trạng thái"], rows);
  }

  const received = receipt?.lines.reduce((sum, line) => sum + line.receivedQuantity, 0) || 0;
  const expected = receipt?.lines.reduce((sum, line) => sum + line.estimatedQuantity, 0) || 0;

  return (
    <div>
      <PageHead
        eyebrow="Biên nhận điện tử"
        title="Biên nhận hồ sơ pháp lý"
        subtitle="Biên nhận ghi nhận số lượng kho đã thực nhận và mã QR từng hiện vật."
        actions={receipt ? <><GhostButton onClick={() => window.print()}><Printer size={14} />In biên nhận</GhostButton><GhostButton onClick={exportCsv}><Download size={14} />Tải CSV</GhostButton></> : null}
      />
      <Notice notice={notice} />
      <div className="no-print mb-4 max-w-md">
        <select className={inputClass} value={selected} onChange={(event) => setSelected(event.target.value)}>
          <option value="">Chọn phiếu trao tặng</option>
          {pledges.map((row) => <option key={row.id} value={row.id}>{row.code} · {row.items.map((item) => item.name).join(", ").slice(0, 60)}</option>)}
        </select>
      </div>

      {!pledges.length ? <Empty>Chưa có phiếu nào được kho xác minh nên chưa có biên nhận. <button type="button" className="font-semibold text-blue-700" onClick={() => openTab("pledge")}>Tạo phiếu trao tặng</button></Empty> : null}

      {receipt ? (
        <Card className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">EduShare Vietnam · Biên nhận điện tử</p>
              <h2 className="font-display text-2xl font-semibold text-slate-900">{receipt.code}</h2>
              <p className="mt-1 text-xs text-slate-500">Lập lúc {fmtDateTime(receipt.createdAt)}</p>
            </div>
            <div className="flex items-center gap-3">
              <StatusBadge kind="pledge" value={receipt.status} />
              <QrImage value={receipt.code} size={84} />
            </div>
          </div>
          <dl className="grid gap-3 py-4 text-sm sm:grid-cols-2">
            <div><dt className="text-xs text-slate-500">Nhà hảo tâm</dt><dd className="font-semibold">{receipt.organizationName || receipt.donorName}</dd></div>
            <div><dt className="text-xs text-slate-500">Chiến dịch</dt><dd className="font-semibold">{receipt.campaign?.title || "Trao tặng chung"}</dd></div>
            <div><dt className="text-xs text-slate-500">Phương thức bàn giao</dt><dd className="font-semibold">{receipt.handoverMethod === "PICK_UP" ? "Kho đến lấy tận nơi" : "Tự mang đến kho"}</dd></div>
            <div><dt className="text-xs text-slate-500">Thực nhận / dự kiến</dt><dd className="font-semibold">{received} / {expected}</dd></div>
          </dl>
          {receipt.lines.map((line) => (
            <section key={line.name} className="mb-4 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between bg-slate-50 px-4 py-2 text-sm">
                <b>{line.name} <span className="font-normal text-slate-500">· {CATEGORY_LABEL[line.category]}</span></b>
                <span>{line.receivedQuantity}/{line.estimatedQuantity} {line.unit}</span>
              </div>
              {line.assets.length ? (
                <div className="grid gap-3 p-3 sm:grid-cols-3">
                  {line.assets.map((asset) => (
                    <div key={asset.id} className="flex items-center gap-2 rounded-lg border border-slate-100 p-2">
                      <QrImage value={asset.qrCode} size={56} />
                      <div className="min-w-0 text-xs">
                        <p className="truncate font-mono font-semibold text-slate-800">{asset.qrCode}</p>
                        <p className="text-slate-500">{GRADE_LABEL[asset.grade] || "Chờ kiểm định"}</p>
                        <StatusBadge kind="item" value={asset.status} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : <p className="px-4 py-3 text-xs text-slate-500">Kho chưa nhập dòng này.</p>}
            </section>
          ))}
          <p className="border-t border-slate-100 pt-3 text-center text-[11px] text-slate-400">Biên nhận được hệ thống EduShare tạo tự động, có hiệu lực khi đối chiếu bằng mã phiếu.</p>
        </Card>
      ) : null}
    </div>
  );
}
