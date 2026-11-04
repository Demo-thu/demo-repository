import { useEffect, useRef, useState } from "react";
import { Crosshair, Eraser } from "lucide-react";
import api, { apiError, currentUser } from "@/lib/api";
import {
  CATEGORY_LABEL, Card, Empty, Field, GhostButton, Notice, PageHead, PhotoPicker, PrimaryButton, SignaturePad, SubmitBar,
  currentPosition, inputClass, useNotice, useWaybills, waybillItems,
} from "@/pages/portals/kit";

export default function SignScreen({ params, openTab }) {
  const user = currentUser();
  const { waybills, loading } = useWaybills("IN_TRANSIT");
  const signable = waybills.filter((row) => !row.proof);
  const [selected, setSelected] = useState(params.get("waybill") || "");
  const [name, setName] = useState(user?.fullName || "");
  const [title, setTitle] = useState("Hiệu trưởng");
  const [signature, setSignature] = useState("");
  const [photos, setPhotos] = useState([]);
  const [position, setPosition] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [pending, setPending] = useState(false);
  const pad = useRef(null);
  const { notice, fail } = useNotice();

  useEffect(() => {
    setSelected((current) => params.get("waybill") || (signable.some((row) => row.id === current) ? current : signable[0]?.id || ""));
  }, [waybills, params]);

  useEffect(() => {
    currentPosition().then((result) => { if (result) setPosition(result); }).catch(() => {});
  }, []);

  const waybill = signable.find((row) => row.id === selected);
  const items = waybillItems(waybill);
  const counts = items.reduce((groups, item) => ({ ...groups, [item.category]: (groups[item.category] || 0) + 1 }), {});

  async function locate() {
    const result = await currentPosition();
    if (result) setPosition(result);
    else fail("Không lấy được vị trí. Hãy cấp quyền định vị cho trình duyệt hoặc bỏ qua bước này.");
  }

  async function submit(event) {
    event.preventDefault();
    if (!signature) {
      fail("Vui lòng ký tên vào khung chữ ký trước khi xác nhận.");
      return;
    }
    if (!photos.length) {
      fail("Cần ít nhất một ảnh chụp lúc bàn giao.");
      return;
    }
    setPending(true);
    try {
      await api.post(`/waybills/${waybill.id}/proof`, {
        recipientName: name.trim(),
        recipientTitle: title.trim(),
        recipientSignatureUrl: signature,
        proofPhotoUrls: photos,
        gpsLatitude: position?.latitude,
        gpsLongitude: position?.longitude,
      });
      openTab("history", { waybill: waybill.id });
    } catch (error) {
      fail(apiError(error, "Không ký được biên bản."));
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={submit}>
      <PageHead eyebrow="3. Vận chuyển & ký nhận" title="Ký biên bản bàn giao (PoD)" subtitle="Đối chiếu hàng thực nhận, ký tên và chụp ảnh. Biên bản đã ký không thể sửa; sau đó tình nguyện viên mới nộp báo cáo của họ." />
      <Notice notice={notice} />
      {loading ? <Empty>Đang tải vận đơn...</Empty> : null}
      {!loading && !signable.length ? <Empty>Hiện không có chuyến hàng nào đang chờ trường ký nhận. Biên bản chỉ ký được khi vận đơn ở trạng thái "Đang vận chuyển".</Empty> : null}

      {waybill ? (
        <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
          <div className="space-y-5">
            <Card title="Chuyến hàng cần ký">
              <select className={inputClass} value={selected} onChange={(event) => setSelected(event.target.value)}>
                {signable.map((row) => <option key={row.id} value={row.id}>{row.code} · {row.allocationPlan?.requisition?.title}</option>)}
              </select>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {Object.entries(counts).map(([category, count]) => <div key={category} className="rounded-lg bg-slate-50 px-3 py-2 text-sm"><p className="text-xs text-slate-500">{CATEGORY_LABEL[category]}</p><b>{count} món</b></div>)}
              </div>
            </Card>
            <Card title="Người ký nhận">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Họ tên người nhận"><input required minLength={2} className={inputClass} value={name} onChange={(event) => setName(event.target.value)} /></Field>
                <Field label="Chức vụ"><input required minLength={2} className={inputClass} value={title} onChange={(event) => setTitle(event.target.value)} /></Field>
              </div>
              <div className="mt-4">
                <div className="mb-1 flex items-center justify-between"><p className="text-xs font-semibold text-slate-600">Chữ ký tay</p><GhostButton onClick={() => pad.current?.clear()}><Eraser size={13} />Xóa nét vẽ</GhostButton></div>
                <SignaturePad ref={pad} onChange={setSignature} />
              </div>
            </Card>
            <Card title="Ảnh xác nhận tại điểm trường" hint="Chụp toàn cảnh hàng hóa và người nhận (tối đa 4 ảnh).">
              <PhotoPicker photos={photos} onChange={setPhotos} max={4} />
            </Card>
          </div>
          <aside className="space-y-5">
            <Card title="Vị trí bàn giao" hint="Không bắt buộc nhưng giúp đối soát địa điểm giao.">
              <GhostButton onClick={locate}><Crosshair size={14} />Lấy vị trí hiện tại</GhostButton>
              {position ? <p className="mt-2 text-xs text-slate-600">{position.latitude.toFixed(5)}, {position.longitude.toFixed(5)} (±{Math.round(position.accuracy)} m)</p> : null}
            </Card>
            <label className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-600">
              <input type="checkbox" className="mt-0.5" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} />
              Tôi xác nhận đã kiểm đếm đúng số lượng và tình trạng hàng hóa so với danh sách mã QR của vận đơn {waybill.code}.
            </label>
          </aside>
        </div>
      ) : null}

      {waybill ? (
        <SubmitBar>
          <p className="text-xs text-slate-500">Biên bản gắn với vận đơn {waybill.code} và không thể chỉnh sửa sau khi ký.</p>
          <PrimaryButton type="submit" pending={pending} disabled={!confirmed}>Xác nhận đã nhận hàng & ký</PrimaryButton>
        </SubmitBar>
      ) : null}
    </form>
  );
}
