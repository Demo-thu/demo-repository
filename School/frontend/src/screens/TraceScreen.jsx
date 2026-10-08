import { useEffect, useMemo, useState } from "react";
import { ScanLine } from "lucide-react";
import { Card, Empty, GhostButton, ItemJourney, PageHead, StatusBadge, inputClass, useWaybills, waybillItems } from "@/pages/portals/kit";

export default function TraceScreen({ params }) {
  const { waybills } = useWaybills();
  const [input, setInput] = useState(params.get("q") || "");
  const [qr, setQr] = useState(params.get("q") || "");

  useEffect(() => {
    const code = params.get("q");
    if (code) {
      setInput(code);
      setQr(code);
    }
  }, [params]);

  const items = useMemo(() => waybills.flatMap((waybill) => waybillItems(waybill)), [waybills]);

  function submit(event) {
    event.preventDefault();
    setQr(input.trim());
  }

  return (
    <div>
      <PageHead eyebrow="2. Phân bổ & mã QR" title="Truy vết vòng đời mã QR" subtitle="Nhập mã QR dán trên thiết bị để xem toàn bộ hành trình: nhà tài trợ, kho, kiểm định, vận chuyển và bàn giao." />
      <form onSubmit={submit} className="mb-5 flex max-w-xl gap-2">
        <div className="relative flex-1">
          <ScanLine size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input value={input} onChange={(event) => setInput(event.target.value)} className={`${inputClass} pl-9`} placeholder="Nhập mã QR, ví dụ IT001" />
        </div>
        <GhostButton type="submit">Truy vết</GhostButton>
      </form>
      <div className="grid gap-5 xl:grid-cols-[360px_1fr]">
        <Card title="Thiết bị của trường" hint={`${items.length} mã QR đã được phân bổ`}>
          {items.length ? (
            <ul className="max-h-[480px] space-y-1 overflow-y-auto pr-1">
              {items.map((item) => (
                <li key={item.id}>
                  <button type="button" onClick={() => { setInput(item.qrCode); setQr(item.qrCode); }} className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-blue-50 ${qr === item.qrCode ? "bg-blue-50 ring-1 ring-blue-200" : "bg-slate-50"}`}>
                    <span><b className="font-mono text-xs">{item.qrCode}</b><span className="block text-xs text-slate-500">{item.name}</span></span>
                    <StatusBadge kind="item" value={item.status} />
                  </button>
                </li>
              ))}
            </ul>
          ) : <Empty>Chưa có thiết bị nào được phân bổ.</Empty>}
        </Card>
        <Card title="Hành trình mã QR">{qr ? <ItemJourney qr={qr} /> : <Empty>Nhập hoặc chọn một mã QR để xem hành trình.</Empty>}</Card>
      </div>
    </div>
  );
}
