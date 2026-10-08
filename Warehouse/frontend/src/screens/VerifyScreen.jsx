import { useCallback, useEffect, useMemo, useState } from "react";
import { CheckCircle2, Clock3, PackageCheck, ScanLine } from "lucide-react";
import api, { apiError } from "@/lib/api";
import {
  CATEGORY_LABEL, Card, Chips, DataTable, GhostButton, KeyValue, Modal, Notice, PageHead, PrimaryButton, SearchBox, Stat,
  StatusBadge, downloadCsv, fmtDate, fmtDateTime, rowsOf, useNotice,
} from "@/pages/portals/kit";

export default function VerifyScreen({ params, openTab, setParams }) {
  const [pledges, setPledges] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [detail, setDetail] = useState(null);
  const [pending, setPending] = useState(false);
  const { notice, ok, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const response = await api.get("/pledges?limit=100");
      setPledges(rowsOf(response.data));
    } catch (error) {
      fail(apiError(error, "Không tải được danh sách phiếu."));
    }
  }, []);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  useEffect(() => {
    const id = params.get("pledge");
    if (id && pledges.length) setDetail(pledges.find((row) => row.id === id) || null);
  }, [params, pledges]);

  const count = (status) => pledges.filter((row) => row.status === status).length;
  const visible = useMemo(() => pledges.filter((row) => {
    if (filter !== "all" && row.status !== filter) return false;
    const term = search.trim().toLowerCase();
    return !term || `${row.code} ${row.donor?.fullName} ${row.donor?.profile?.organizationName || ""} ${row.items.map((item) => item.name).join(" ")}`.toLowerCase().includes(term);
  }), [pledges, filter, search]);

  useEffect(() => {
    const handler = () => downloadCsv("phieu-trao-tang.csv", ["Mã phiếu", "Nhà hảo tâm", "Phương thức", "Hiện vật", "Ngày hẹn", "Trạng thái"], visible.map((row) => [
      row.code, row.donor?.profile?.organizationName || row.donor?.fullName, row.handoverMethod, row.items.map((item) => `${item.estimatedQuantity} ${item.name}`).join("; "), fmtDate(row.scheduledAt), row.status,
    ]));
    window.addEventListener("portal:export", handler);
    return () => window.removeEventListener("portal:export", handler);
  }, [visible]);

  function closeDetail() {
    setDetail(null);
    if (params.get("pledge")) {
      const following = new URLSearchParams(params);
      following.delete("pledge");
      setParams(following);
    }
  }

  async function verify(pledge) {
    setPending(true);
    try {
      const { data } = await api.patch(`/pledges/${pledge.id}/verify`);
      ok(`Đã xác minh ${data.code}. Chuyển sang bước nhập kho.`);
      setDetail(null);
      await load();
      openTab("receive", { pledge: data.id });
    } catch (error) {
      fail(apiError(error, "Không xác minh được phiếu."));
    } finally {
      setPending(false);
    }
  }

  const rows = visible.map((pledge) => ({
    key: pledge.id,
    cells: [
      <b className="text-blue-700">{pledge.code}</b>,
      <div><p className="font-medium text-slate-800">{pledge.donor?.profile?.organizationName || pledge.donor?.fullName}</p><p className="text-xs text-slate-500">{pledge.contactPhone || pledge.donor?.phone || ""}</p></div>,
      pledge.handoverMethod === "PICK_UP" ? "Kho đến lấy" : "Tự mang đến",
      <span className="text-xs">{pledge.items.map((item) => `${item.estimatedQuantity} ${item.name}`).join("; ")}</span>,
      fmtDate(pledge.scheduledAt),
      <StatusBadge kind="pledge" value={pledge.status} />,
      <div className="flex flex-wrap gap-1.5">
        {pledge.status === "PENDING" ? <PrimaryButton className="!px-3 !py-1.5 !text-xs" onClick={() => setDetail(pledge)}>Xem & xác minh</PrimaryButton> : null}
        {["VERIFIED", "PARTIALLY_RECEIVED"].includes(pledge.status) ? <PrimaryButton className="!px-3 !py-1.5 !text-xs" onClick={() => openTab("receive", { pledge: pledge.id })}>{pledge.status === "VERIFIED" ? "Nhập kho" : "Nhập đợt tiếp"}</PrimaryButton> : null}
        {["COMPLETED", "CANCELLED"].includes(pledge.status) ? <GhostButton onClick={() => setDetail(pledge)}>Xem hồ sơ</GhostButton> : null}
      </div>,
    ],
  }));

  return (
    <div>
      <PageHead eyebrow="Tiếp nhận & kiểm định" title="Xác minh phiếu trao tặng" subtitle="Đối soát từng dòng hiện vật với phiếu của nhà hảo tâm trước khi cho phép nhập kho." />
      <Notice notice={notice} />
      <div className="mb-5 grid gap-3 lg:grid-cols-[1fr_1fr_1fr_1.2fr]">
        <Stat label="Chờ xác minh" value={count("PENDING")} tone="amber" icon={Clock3} />
        <Stat label="Đã xác minh / nhận một phần" value={count("VERIFIED") + count("PARTIALLY_RECEIVED")} tone="blue" icon={PackageCheck} />
        <Stat label="Đã hoàn tất" value={count("COMPLETED")} tone="emerald" icon={CheckCircle2} />
        <Card className="!p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Tiếp nhận nhanh</p>
          <PrimaryButton className="mt-2 w-full" onClick={() => { const following = new URLSearchParams(params); following.set("scan", "1"); setParams(following); }}><ScanLine size={15} />Quét QR phiếu / hiện vật</PrimaryButton>
        </Card>
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Chips value={filter} onChange={setFilter} items={[["all", "Tất cả", pledges.length], ["PENDING", "Chờ xác minh", count("PENDING")], ["VERIFIED", "Đã xác minh", count("VERIFIED")], ["PARTIALLY_RECEIVED", "Nhận một phần", count("PARTIALLY_RECEIVED")], ["COMPLETED", "Hoàn tất", count("COMPLETED")]]} />
        <SearchBox value={search} onChange={setSearch} placeholder="Tìm mã phiếu, nhà hảo tâm..." />
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <DataTable columns={["Mã phiếu", "Nhà hảo tâm", "Bàn giao", "Hiện vật", "Ngày hẹn", "Trạng thái", "Thao tác"]} rows={rows} empty="Không có phiếu nào khớp bộ lọc." />
      </div>

      {detail ? (
        <Modal wide title={`Đối soát phiếu ${detail.code}`} subtitle={detail.donor?.profile?.organizationName || detail.donor?.fullName} onClose={closeDetail}
          footer={<><GhostButton onClick={closeDetail}>Đóng</GhostButton>{detail.status === "PENDING" ? <PrimaryButton pending={pending} onClick={() => verify(detail)}>Xác minh phiếu</PrimaryButton> : null}</>}>
          <div className="grid gap-5 md:grid-cols-2">
            <KeyValue rows={[
              ["Trạng thái", <StatusBadge kind="pledge" value={detail.status} />],
              ["Chiến dịch", detail.campaign?.title || "Trao tặng chung"],
              ["Bàn giao", detail.handoverMethod === "PICK_UP" ? "Kho đến lấy" : "Tự mang đến kho"],
              ["Liên hệ", `${detail.contactName || detail.donor?.fullName} · ${detail.contactPhone || detail.donor?.phone || "—"}`],
              ["Địa chỉ", detail.address],
              ["Ngày hẹn", fmtDateTime(detail.scheduledAt)],
              ["Ghi chú", detail.notes],
            ]} />
            <div className="space-y-2">
              {detail.items.map((item) => (
                <div key={item.id} className="rounded-lg border border-slate-200 p-3 text-sm">
                  <p className="font-semibold">{item.estimatedQuantity} {item.unit} · {item.name}</p>
                  <p className="text-xs text-slate-500">{CATEGORY_LABEL[item.category]} · {item.declaredCondition || "Không khai báo tình trạng"}</p>
                  {item.photoUrls?.length ? <div className="mt-2 flex gap-1">{item.photoUrls.map((url, index) => <img key={index} src={url} alt="Ảnh khai báo" className="size-12 rounded object-cover" />)}</div> : null}
                </div>
              ))}
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
