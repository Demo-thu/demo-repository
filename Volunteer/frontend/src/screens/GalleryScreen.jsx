import { useMemo, useState } from "react";
import { Camera } from "lucide-react";
import { Card, Chips, Empty, Modal, Notice, PageHead, fmtDateTime, orgName, useWaybills } from "@/pages/portals/kit";

export default function GalleryScreen() {
  const { waybills, error } = useWaybills("DELIVERED");
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState(null);

  const photos = useMemo(() => waybills.flatMap((row) => [
    ...(row.proof?.proofPhotoUrls || []).map((url) => ({ url, kind: "school", row })),
    ...(row.proof?.volunteerPhotoUrls || []).map((url) => ({ url, kind: "volunteer", row })),
  ]), [waybills]);
  const visible = photos.filter((photo) => filter === "all" || photo.kind === filter);

  return (
    <div>
      <PageHead eyebrow="Cổng tình nguyện viên" title="Thư viện ảnh trao tặng" subtitle="Ảnh hiện trường lấy từ biên bản bàn giao của nhà trường và báo cáo của tình nguyện viên." />
      <Notice notice={error ? { tone: "error", text: error } : null} />
      <div className="mb-4"><Chips value={filter} onChange={setFilter} items={[["all", "Tất cả", photos.length], ["school", "Ảnh nhà trường", photos.filter((photo) => photo.kind === "school").length], ["volunteer", "Ảnh tình nguyện viên", photos.filter((photo) => photo.kind === "volunteer").length]]} /></div>
      {!visible.length ? <Empty>Chưa có ảnh nào. Ảnh xuất hiện sau khi chuyến hàng được bàn giao.</Empty> : null}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((photo, index) => (
          <button key={`${photo.row.id}-${index}`} type="button" onClick={() => setView(photo)} className="group overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm">
            <img src={photo.url} alt={`Ảnh ${photo.row.code}`} className="aspect-video w-full object-cover transition group-hover:scale-105" />
            <div className="p-3 text-xs"><p className="font-semibold text-blue-700">{photo.row.code}</p><p className="truncate text-slate-600">{orgName(photo.row.allocationPlan?.requisition?.school)}</p></div>
          </button>
        ))}
      </div>
      {view ? (
        <Modal wide title={`Ảnh ${view.row.code}`} subtitle={`${orgName(view.row.allocationPlan?.requisition?.school)} · ${fmtDateTime(view.row.deliveredAt)}`} onClose={() => setView(null)}>
          <Card className="!border-0 !p-0 !shadow-none"><img src={view.url} alt="Ảnh phóng to" className="max-h-[60vh] w-full rounded object-contain" /><p className="mt-2 flex items-center gap-1 text-xs text-slate-500"><Camera size={13} />{view.kind === "school" ? "Ảnh bàn giao do nhà trường xác nhận" : "Ảnh do tình nguyện viên báo cáo"}</p></Card>
        </Modal>
      ) : null}
    </div>
  );
}
