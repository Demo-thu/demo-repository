import { useCallback, useEffect, useMemo, useState } from "react";
import { CheckCircle2, Clock3, PackageCheck, ScanLine, Send, TriangleAlert, Undo2 } from "lucide-react";
import api, { apiError } from "@/lib/api";
import {
  CATEGORY_LABEL, Card, Chips, DataTable, Field, GhostButton, KeyValue, Modal, Notice, PageHead, PrimaryButton, SearchBox, Stat,
  StatusBadge, downloadCsv, fmtDate, fmtDateTime, inputClass, rowsOf, useNotice,
} from "@/pages/portals/kit";

const VERDICT = {
  FIT: ["Đủ nhu cầu", "bg-emerald-50 text-emerald-700"],
  PARTIAL: ["Chỉ cần một phần", "bg-amber-50 text-amber-700"],
  NONE: ["Không còn cần", "bg-rose-50 text-rose-700"],
  GENERAL: ["Trao tặng chung", "bg-slate-100 text-slate-600"],
};

export default function VerifyScreen({ params, openTab, setParams }) {
  const [pledges, setPledges] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [detail, setDetail] = useState(null);
  const [review, setReview] = useState(null);
  const [proposalOpen, setProposalOpen] = useState(false);
  const [proposal, setProposal] = useState({ reason: "", note: "", redirectCampaignId: "", offerStock: false, offerSplit: false });
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

  // Đối soát phiếu đang mở với nhu cầu còn lại của chiến dịch (tính lại từ database mỗi lần mở / làm mới).
  const loadReview = useCallback(async (pledge) => {
    if (!pledge || !["PENDING", "AWAITING_DONOR"].includes(pledge.status)) {
      setReview(null);
      return;
    }
    try {
      const { data } = await api.get(`/pledges/${pledge.id}/review`);
      setReview(data);
    } catch (error) {
      setReview(null);
      fail(apiError(error, "Không đối soát được phiếu với nhu cầu chiến dịch."));
    }
  }, []);

  useEffect(() => {
    setReview(null);
    loadReview(detail);
  }, [detail?.id, detail?.status]);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  useEffect(() => {
    const id = params.get("pledge");
    if (id && pledges.length) setDetail(pledges.find((row) => row.id === id) || null);
  }, [params, pledges]);

  // Giữ hộp thoại đang mở đồng bộ với dữ liệu mới nhất sau mỗi lần tải lại danh sách.
  useEffect(() => {
    setDetail((current) => (current ? pledges.find((row) => row.id === current.id) || current : current));
  }, [pledges]);

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

  function openProposal() {
    const firstFit = review?.candidates?.find((candidate) => candidate.coversAll);
    setProposal({ reason: review?.summary || "", note: "", redirectCampaignId: firstFit?.id || "", offerSplit: Boolean(review?.canSplit), offerStock: !firstFit && !review?.canSplit });
    setProposalOpen(true);
  }

  async function sendProposal() {
    setPending(true);
    try {
      await api.post(`/pledges/${detail.id}/proposal`, {
        reason: proposal.reason.trim() || undefined,
        note: proposal.note.trim() || undefined,
        redirectCampaignId: proposal.redirectCampaignId || undefined,
        offerStock: proposal.offerStock,
        offerSplit: proposal.offerSplit,
      });
      ok(`Đã gửi phiếu đề xuất của ${detail.code} cho nhà hảo tâm. Phiếu chuyển sang trạng thái chờ nhà hảo tâm xác nhận.`);
      setProposalOpen(false);
      setDetail(null);
      await load();
    } catch (error) {
      fail(apiError(error, "Không gửi được phiếu đề xuất."));
      loadReview(detail);
    } finally {
      setPending(false);
    }
  }

  async function withdraw(pledge) {
    setPending(true);
    try {
      await api.patch(`/pledges/${pledge.id}/proposal/withdraw`);
      ok(`Đã rút đề xuất của ${pledge.code}. Phiếu quay về trạng thái chờ xác minh.`);
      setDetail(null);
      await load();
    } catch (error) {
      fail(apiError(error, "Không rút được đề xuất."));
    } finally {
      setPending(false);
    }
  }

  const latestProposal = detail?.proposals?.[0] || review?.proposals?.[0] || null;

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
        {pledge.status === "AWAITING_DONOR" ? <GhostButton onClick={() => setDetail(pledge)}>Xem đề xuất</GhostButton> : null}
        {["COMPLETED", "CANCELLED"].includes(pledge.status) ? <GhostButton onClick={() => setDetail(pledge)}>Xem hồ sơ</GhostButton> : null}
      </div>,
    ],
  }));

  return (
    <div>
      <PageHead eyebrow="Tiếp nhận & kiểm định" title="Xác minh phiếu trao tặng" subtitle="Đối soát từng dòng hiện vật với phiếu của nhà hảo tâm trước khi cho phép nhập kho." />
      <Notice notice={notice} />
      <div className="mb-5 grid gap-3 lg:grid-cols-[1fr_1fr_1fr_1fr_1.2fr]">
        <Stat label="Chờ xác minh" value={count("PENDING")} tone="amber" icon={Clock3} />
        <Stat label="Chờ nhà hảo tâm xác nhận" value={count("AWAITING_DONOR")} tone="rose" icon={Send} />
        <Stat label="Đã xác minh / nhận một phần" value={count("VERIFIED") + count("PARTIALLY_RECEIVED")} tone="blue" icon={PackageCheck} />
        <Stat label="Đã hoàn tất" value={count("COMPLETED")} tone="emerald" icon={CheckCircle2} />
        <Card className="!p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Tiếp nhận nhanh</p>
          <PrimaryButton className="mt-2 w-full" onClick={() => { const following = new URLSearchParams(params); following.set("scan", "1"); setParams(following); }}><ScanLine size={15} />Quét QR phiếu / hiện vật</PrimaryButton>
        </Card>
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Chips value={filter} onChange={setFilter} items={[["all", "Tất cả", pledges.length], ["PENDING", "Chờ xác minh", count("PENDING")], ["AWAITING_DONOR", "Chờ nhà hảo tâm", count("AWAITING_DONOR")], ["VERIFIED", "Đã xác minh", count("VERIFIED")], ["PARTIALLY_RECEIVED", "Nhận một phần", count("PARTIALLY_RECEIVED")], ["COMPLETED", "Hoàn tất", count("COMPLETED")]]} />
        <SearchBox value={search} onChange={setSearch} placeholder="Tìm mã phiếu, nhà hảo tâm..." />
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <DataTable columns={["Mã phiếu", "Nhà hảo tâm", "Bàn giao", "Hiện vật", "Ngày hẹn", "Trạng thái", "Thao tác"]} rows={rows} empty="Không có phiếu nào khớp bộ lọc." />
      </div>

      {detail ? (
        <Modal wide title={`Đối soát phiếu ${detail.code}`} subtitle={detail.donor?.profile?.organizationName || detail.donor?.fullName} onClose={closeDetail}
          footer={(
            <>
              <GhostButton onClick={closeDetail}>Đóng</GhostButton>
              {detail.status === "AWAITING_DONOR" ? <GhostButton disabled={pending} onClick={() => withdraw(detail)}><Undo2 size={13} />Rút đề xuất</GhostButton> : null}
              {detail.status === "PENDING" && review?.needsProposal ? <PrimaryButton pending={pending} onClick={openProposal}><Send size={14} />Gửi phiếu đề xuất cho nhà hảo tâm</PrimaryButton> : null}
              {detail.status === "PENDING" && review && !review.needsProposal ? <PrimaryButton pending={pending} onClick={() => verify(detail)}>Xác minh phiếu</PrimaryButton> : null}
            </>
          )}>
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

          {review ? (
            <div className="mt-5 rounded-xl border border-slate-200 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Đối soát với nhu cầu chiến dịch</p>
              {!review.campaign ? (
                <p className="text-sm text-slate-600">Phiếu trao tặng chung, không gắn chiến dịch nào nên có thể xác minh và nhập vào kho chung.</p>
              ) : (
                <>
                  <p className="mb-2 text-sm text-slate-700">Chiến dịch: <b>{review.campaign.title}</b></p>
                  <table className="w-full text-left text-sm">
                    <thead className="text-[10px] uppercase tracking-wide text-slate-500">
                      <tr><th className="py-1 pr-3">Hiện vật</th><th className="py-1 pr-3">Phiếu gửi</th><th className="py-1 pr-3">Chiến dịch còn cần</th>{review.needsProposal ? <th className="py-1 pr-3">Nhận cho chiến dịch / phần dư</th> : null}<th className="py-1">Kết luận</th></tr>
                    </thead>
                    <tbody>
                      {review.lines.map((line) => (
                        <tr key={line.pledgeItemId} className="border-t border-slate-100">
                          <td className="py-1.5 pr-3">{line.name}<span className="block text-[11px] text-slate-400">{CATEGORY_LABEL[line.category]}</span></td>
                          <td className="py-1.5 pr-3">{line.quantity} {line.unit}</td>
                          <td className="py-1.5 pr-3">{line.need === null ? "—" : line.need}</td>
                          {review.needsProposal ? <td className="py-1.5 pr-3">{line.fitQuantity} / {line.restQuantity}</td> : null}
                          <td className="py-1.5"><span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${VERDICT[line.verdict]?.[1]}`}>{VERDICT[line.verdict]?.[0]}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
              {review.needsProposal ? (
                <div className="mt-3 flex gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
                  <TriangleAlert size={16} className="mt-0.5 shrink-0" />
                  <div>
                    <p>{review.summary}</p>
                    <p className="mt-1 text-xs">
                      {review.candidates.some((candidate) => candidate.coversAll)
                        ? `Có ${review.candidates.filter((candidate) => candidate.coversAll).length} chiến dịch khác đang cần đủ số vật tư này: ${review.candidates.filter((candidate) => candidate.coversAll).map((candidate) => candidate.title).join(", ")}.`
                        : "Không chiến dịch nào đang cần đủ số vật tư này. Có thể đề xuất nhà hảo tâm để kho lưu dự trữ cho các chiến dịch sau."}
                    </p>
                  </div>
                </div>
              ) : null}
              {review.pledge.status === "AWAITING_DONOR" && latestProposal ? (
                <div className="mt-3 rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-900">
                  <p className="font-semibold">Đã gửi đề xuất lúc {fmtDateTime(latestProposal.createdAt)} - đang chờ nhà hảo tâm xác nhận</p>
                  <p className="mt-1">{latestProposal.reason}</p>
                  <ul className="mt-1 list-disc pl-5 text-xs">
                    {latestProposal.options.map((option) => (
                      <li key={option.type}>
                        {option.type === "REDIRECT" ? `Đổi sang chiến dịch "${option.campaignTitle}"`
                          : option.type === "SPLIT" ? `Chia phiếu: ${option.lines.filter((line) => line.fit > 0).map((line) => `${line.fit} ${line.unit} ${line.name}`).join(", ")} nhận cho chiến dịch, phần dư lưu kho dự trữ`
                            : "Lưu kho dự trữ cho các chiến dịch sau"}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-1 text-xs">Nhà hảo tâm chưa phản hồi sau {7} ngày thì đề xuất tự hết hạn và phiếu quay về trạng thái chờ xác minh. Nếu không đồng ý, họ sẽ hủy phiếu.</p>
                </div>
              ) : null}
            </div>
          ) : null}
        </Modal>
      ) : null}

      {proposalOpen && detail ? (
        <Modal title={`Phiếu đề xuất cho ${detail.code}`} subtitle="Nhà hảo tâm sẽ nhận phiếu này ở mục Phiếu đã gửi và chọn đồng ý hoặc hủy phiếu." onClose={() => setProposalOpen(false)}
          footer={<><GhostButton onClick={() => setProposalOpen(false)}>Quay lại</GhostButton><PrimaryButton pending={pending} disabled={!proposal.redirectCampaignId && !proposal.offerStock && !proposal.offerSplit} onClick={sendProposal}>Gửi cho nhà hảo tâm</PrimaryButton></>}>
          <div className="space-y-4">
            <Field label="Lý do kho đưa ra"><textarea className={inputClass} rows={3} value={proposal.reason} onChange={(event) => setProposal({ ...proposal, reason: event.target.value })} /></Field>
            <div className="rounded-lg border border-slate-200 p-3">
              <p className="mb-2 text-xs font-semibold text-slate-600">Phương án đề xuất (chọn ít nhất một)</p>
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" className="mt-1" checked={Boolean(proposal.redirectCampaignId)} disabled={!review?.candidates?.some((candidate) => candidate.coversAll)}
                  onChange={(event) => setProposal({ ...proposal, redirectCampaignId: event.target.checked ? review.candidates.find((candidate) => candidate.coversAll)?.id || "" : "" })} />
                <span className="flex-1">Đổi sang chiến dịch đang cần đủ số vật tư này
                  <select className={`${inputClass} mt-1`} value={proposal.redirectCampaignId} disabled={!review?.candidates?.some((candidate) => candidate.coversAll)} onChange={(event) => setProposal({ ...proposal, redirectCampaignId: event.target.value })}>
                    <option value="">— Không đề xuất đổi chiến dịch —</option>
                    {review?.candidates?.filter((candidate) => candidate.coversAll).map((candidate) => <option key={candidate.id} value={candidate.id}>{candidate.title}</option>)}
                  </select>
                  {!review?.candidates?.some((candidate) => candidate.coversAll) ? <span className="mt-1 block text-xs text-slate-400">Hiện không có chiến dịch nào cần đủ số lượng này.</span> : null}
                </span>
              </label>
              <label className="mt-3 flex items-start gap-2 text-sm">
                <input type="checkbox" className="mt-1" checked={proposal.offerSplit} disabled={!review?.canSplit} onChange={(event) => setProposal({ ...proposal, offerSplit: event.target.checked })} />
                <span>
                  Chia phiếu: nhận phần chiến dịch còn cần, phần dư lưu kho dự trữ
                  {review?.canSplit ? <span className="mt-0.5 block text-xs text-slate-500">{review.lines.filter((line) => line.fitQuantity > 0).map((line) => `${line.fitQuantity}/${line.quantity} ${line.unit} ${line.name} cho chiến dịch`).join(", ")}; phần dư {review.lines.reduce((sum, line) => sum + line.restQuantity, 0)} lưu dự trữ.</span> : <span className="mt-0.5 block text-xs text-slate-400">Chiến dịch hiện không còn nhận được phần nào của phiếu này.</span>}
                </span>
              </label>
              <label className="mt-3 flex items-start gap-2 text-sm">
                <input type="checkbox" className="mt-1" checked={proposal.offerStock} onChange={(event) => setProposal({ ...proposal, offerStock: event.target.checked })} />
                <span>Để kho lưu giữ toàn bộ hiện vật làm dự trữ, dùng cho các chiến dịch sau</span>
              </label>
            </div>
            <Field label="Ghi chú thêm (không bắt buộc)"><input className={inputClass} value={proposal.note} onChange={(event) => setProposal({ ...proposal, note: event.target.value })} /></Field>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
