import { useCallback, useEffect, useRef, useState } from "react";
import { Crosshair, Eraser } from "lucide-react";
import api, { apiError, currentUser } from "@/lib/api";
import {
  CATEGORY_LABEL, Card, Empty, Field, GhostButton, Notice, PageHead, PhotoPicker, PrimaryButton, SignaturePad,
  StatusBadge, SubmitBar, currentPosition, fmtDateTime, inputClass,
} from "@/pages/portals/kit";

export default function TransferReceiptScreen({ params }) {
  const user = currentUser();
  const [transfers, setTransfers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pending, setPending] = useState(false);
  const [selectedId, setSelectedId] = useState(params.get("transfer") || "");
  const [name, setName] = useState(user?.fullName || "");
  const [title, setTitle] = useState("Đại diện nhà trường");
  const [signature, setSignature] = useState("");
  const [photos, setPhotos] = useState([]);
  const [position, setPosition] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [notice, setNotice] = useState(null);
  const pad = useRef(null);

  const load = useCallback(async () => {
    try {
      const { data } = await api.get("/transfers/school/pending-proof");
      setTransfers(data);
    } catch (error) {
      setNotice({ tone: "error", text: apiError(error, "Không tải được lệnh đang chờ ký nhận.") });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    currentPosition().then((result) => { if (result) setPosition(result); }).catch(() => {});
  }, []);

  const selected = transfers.find((transfer) => transfer.id === selectedId) || transfers[0];
  const items = selected?.items.map((line) => line.resourceItem).filter(Boolean) || [];
  const counts = items.reduce((groups, item) => ({ ...groups, [item.category]: (groups[item.category] || 0) + 1 }), {});

  async function locate() {
    const result = await currentPosition();
    if (result) setPosition(result);
    else setNotice({ tone: "error", text: "Không lấy được vị trí. Hãy cấp quyền định vị hoặc bỏ qua bước này." });
  }

  async function submit(event) {
    event.preventDefault();
    if (!selected || !signature || !photos.length || !confirmed) {
      setNotice({ tone: "error", text: "Vui lòng kiểm đếm hàng, ký tên và tải ít nhất một ảnh bàn giao." });
      return;
    }
    setPending(true);
    try {
      await api.patch(`/transfers/${selected.id}/receive`, {
        recipientName: name.trim(),
        recipientTitle: title.trim(),
        recipientSignatureUrl: signature,
        proofPhotoUrls: photos,
        gpsLatitude: position?.latitude,
        gpsLongitude: position?.longitude,
      });
      setTransfers((current) => current.filter((transfer) => transfer.id !== selected.id));
      setSignature("");
      setPhotos([]);
      setConfirmed(false);
      setNotice({ tone: "ok", text: `Đã ký nhận lệnh ${selected.code}; minh chứng sẽ hiển thị trong hành trình QR của Donor.` });
    } catch (error) {
      setNotice({ tone: "error", text: apiError(error, "Không lưu được biên bản ký nhận.") });
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={submit}>
      <PageHead
        eyebrow="3. Vận chuyển & ký nhận"
        title="Ký nhận lệnh điều chuyển"
        subtitle="Đại diện trường kiểm đếm, ký tên và chụp ảnh khi nhận hàng. Lệnh đang vận chuyển chỉ hoàn tất sau khi gửi biên bản."
      />
      <Notice notice={notice} />
      {loading ? <Empty>Đang tải lệnh điều chuyển...</Empty> : null}
      {!loading && !transfers.length ? <Empty>Không có lệnh nào cần trường ký nhận.</Empty> : null}

      {selected ? (
        <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
          <div className="space-y-5">
            <Card title="Lệnh cần ký nhận">
              <select className={inputClass} value={selected.id} onChange={(event) => setSelectedId(event.target.value)}>
                {transfers.map((transfer) => (
                  <option key={transfer.id} value={transfer.id}>
                    {transfer.code} · {transfer.requisition?.title || transfer.campaign?.title || "Điều chuyển"}
                  </option>
                ))}
              </select>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                <StatusBadge kind="transfer" value={selected.status} />
                <span className="text-slate-500">{selected.targetSchool?.fullName || "Trường nhận"}</span>
                <span className="text-slate-500">· {selected.deliveryAddress || "Chưa ghi địa chỉ giao"}</span>
              </div>
              {selected.status === "RECEIVED" ? (
                <p className="mt-3 rounded-lg bg-amber-50 p-3 text-xs text-amber-900">
                  Lệnh cũ đã được Kho đánh dấu hoàn tất. Biên bản này sẽ bổ sung chữ ký và ảnh cho hồ sơ, không cộng lại tiến độ phân phối.
                </p>
              ) : null}
              <p className="mt-3 text-xs text-slate-500">
                Xuất kho: {fmtDateTime(selected.dispatchedAt)}{selected.receivedAt ? ` · Kho ghi nhận: ${fmtDateTime(selected.receivedAt)}` : ""}
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {Object.entries(counts).map(([category, count]) => (
                  <div key={category} className="rounded-lg bg-slate-50 px-3 py-2 text-sm">
                    <p className="text-xs text-slate-500">{CATEGORY_LABEL[category]}</p>
                    <b>{count} món</b>
                  </div>
                ))}
              </div>
              <ul className="mt-3 max-h-48 space-y-1 overflow-y-auto text-xs">
                {items.map((item) => (
                  <li key={item.qrCode} className="rounded bg-slate-50 px-2 py-1.5">
                    <b className="font-mono">{item.qrCode}</b> · {item.name}
                  </li>
                ))}
              </ul>
            </Card>

            <Card title="Người ký nhận">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Họ tên người nhận">
                  <input required minLength={2} className={inputClass} value={name} onChange={(event) => setName(event.target.value)} />
                </Field>
                <Field label="Chức vụ">
                  <input required minLength={2} className={inputClass} value={title} onChange={(event) => setTitle(event.target.value)} />
                </Field>
              </div>
              <div className="mt-4">
                <div className="mb-1 flex items-center justify-between">
                  <p className="text-xs font-semibold text-slate-600">Chữ ký tay</p>
                  <GhostButton type="button" onClick={() => pad.current?.clear()}><Eraser size={13} />Xóa nét vẽ</GhostButton>
                </div>
                <SignaturePad ref={pad} onChange={setSignature} />
              </div>
            </Card>

            <Card title="Ảnh minh chứng bàn giao" hint="Chụp hàng hóa tại trường và người nhận cùng hiện vật (tối đa 4 ảnh).">
              <PhotoPicker photos={photos} onChange={setPhotos} max={4} />
            </Card>
          </div>

          <aside className="space-y-5">
            <Card title="Vị trí ký nhận" hint="Không bắt buộc; giúp đối soát địa điểm nhận hàng.">
              <GhostButton type="button" onClick={locate}><Crosshair size={14} />Lấy vị trí hiện tại</GhostButton>
              {position ? (
                <p className="mt-2 text-xs text-slate-600">
                  {position.latitude.toFixed(5)}, {position.longitude.toFixed(5)} (±{Math.round(position.accuracy)} m)
                </p>
              ) : null}
            </Card>
            <label className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-600">
              <input type="checkbox" className="mt-0.5" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} />
              Tôi xác nhận đã kiểm đếm đúng số lượng và tình trạng hiện vật trong lệnh {selected.code}.
            </label>
          </aside>
        </div>
      ) : null}

      {selected ? (
        <SubmitBar>
          <p className="text-xs text-slate-500">Biên bản không thể chỉnh sửa sau khi gửi.</p>
          <PrimaryButton type="submit" pending={pending} disabled={!confirmed || !signature || !photos.length}>
            Xác nhận đã nhận hàng & ký
          </PrimaryButton>
        </SubmitBar>
      ) : null}
    </form>
  );
}
