import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, FileText, XCircle } from "lucide-react";
import api, { apiError } from "../../lib/api";
import {
  CATEGORY_LABEL, Badge, Card, Chips, DataTable, Field, GhostButton, KeyValue, Modal, Notice, PageHead, PrimaryButton, RequisitionJourney, SearchBox, Stat, StatusBadge,
  URGENCY_LABEL, fmtDate, inputClass, openDocument, orgName, rowsOf, useNotice,
} from "../portals/kit";

const URGENCY_TONE = { LOW: "slate", MEDIUM: "blue", HIGH: "amber", CRITICAL: "rose" };

export default function AdminRequests() {
  const [rows, setRows] = useState([]);
  const [filter, setFilter] = useState("PENDING");
  const [search, setSearch] = useState("");
  const [detail, setDetail] = useState(null);
  const [rejecting, setRejecting] = useState(false);
  const [reason, setReason] = useState("");
  const [pending, setPending] = useState("");
  const { notice, ok, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const response = await api.get("/requisitions", { params: { limit: 100 } });
      setRows(rowsOf(response.data));
    } catch (error) {
      fail(apiError(error, "Không tải được yêu cầu của trường."));
    }
  }, []);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  const count = (status) => rows.filter((row) => row.status === status).length;
  const visible = rows.filter((row) => {
    if (filter !== "all" && row.status !== filter) return false;
    const term = search.trim().toLowerCase();
    return !term || `${row.code} ${row.title} ${orgName(row.school)}`.toLowerCase().includes(term);
  });

  async function approve(row) {
    setPending("approve");
    try {
      await api.patch(`/requisitions/${row.id}/approve`);
      ok(`Đã duyệt yêu cầu ${row.code}. Chuyển sang "Ghép tồn kho" để lập phương án phân bổ.`);
      setDetail(null);
      await load();
    } catch (error) {
      fail(apiError(error, "Không duyệt được yêu cầu."));
    } finally {
      setPending("");
    }
  }

  async function reject(row) {
    setPending("reject");
    try {
      await api.patch(`/requisitions/${row.id}/reject`, { reason: reason.trim() });
      ok(`Đã từ chối yêu cầu ${row.code}.`);
      setDetail(null);
      setRejecting(false);
      setReason("");
      await load();
    } catch (error) {
      fail(apiError(error, "Không từ chối được yêu cầu."));
    } finally {
      setPending("");
    }
  }

  const table = visible.map((row) => ({
    key: row.id,
    cells: [
      <button type="button" onClick={() => setDetail(row)} className="font-semibold text-blue-700 hover:underline">{row.code}</button>,
      <div><b>{orgName(row.school)}</b><span className="block text-xs text-slate-500">{row.title}</span></div>,
      <Badge tone={URGENCY_TONE[row.urgencyLevel]}>{URGENCY_LABEL[row.urgencyLevel] || row.urgencyLevel}</Badge>,
      (row.items || []).map((item) => `${item.quantityNeeded} ${CATEGORY_LABEL[item.category] || item.category}`).join(" · "),
      <StatusBadge kind="requisition" value={row.status} />,
      fmtDate(row.createdAt),
      <GhostButton onClick={() => setDetail(row)}>Xem & xử lý</GhostButton>,
    ],
  }));

  const info = detail?.studentInfo;

  return (
    <div className="mx-auto max-w-[1400px] p-4 md:p-6">
      <PageHead eyebrow="Cổng trường học · Admin" title="Duyệt yêu cầu của trường" subtitle="Duyệt hoặc từ chối yêu cầu hỗ trợ. Bấm vào đơn đã duyệt để xem toàn bộ thông tin và hành trình đơn đang đi đến đâu." />
      <Notice notice={notice} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Chờ xét duyệt" value={count("PENDING")} tone="amber" />
        <Stat label="Đã duyệt" value={count("APPROVED") + count("ALLOCATING")} tone="emerald" />
        <Stat label="Hoàn tất" value={count("COMPLETED")} tone="blue" />
        <Stat label="Từ chối" value={count("REJECTED")} tone="rose" />
      </div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Chips value={filter} onChange={setFilter} items={[["PENDING", "Chờ xét duyệt", count("PENDING")], ["APPROVED", "Đã duyệt", count("APPROVED")], ["ALLOCATING", "Đang điều phối", count("ALLOCATING")], ["COMPLETED", "Hoàn tất", count("COMPLETED")], ["REJECTED", "Từ chối", count("REJECTED")], ["all", "Tất cả", rows.length]]} />
        <SearchBox value={search} onChange={setSearch} placeholder="Tìm mã yêu cầu, trường..." />
      </div>
      <Card>
        <DataTable columns={["Mã", "Trường / tiêu đề", "Mức khẩn", "Hạng mục", "Trạng thái", "Ngày gửi", ""]} rows={table} empty="Không có yêu cầu nào khớp bộ lọc." />
      </Card>

      {detail ? (
        <Modal wide title={`${detail.code} · ${detail.title}`} subtitle={orgName(detail.school)} onClose={() => { setDetail(null); setRejecting(false); setReason(""); }}
          footer={detail.status === "PENDING" ? (
            rejecting ? (
              <><GhostButton onClick={() => setRejecting(false)}>Quay lại</GhostButton><PrimaryButton className="!bg-rose-600 hover:!bg-rose-700" pending={pending === "reject"} disabled={reason.trim().length < 5} onClick={() => reject(detail)}>Xác nhận từ chối</PrimaryButton></>
            ) : (
              <><GhostButton tone="danger" onClick={() => setRejecting(true)}><XCircle size={14} />Từ chối</GhostButton><PrimaryButton pending={pending === "approve"} onClick={() => approve(detail)}><CheckCircle2 size={14} />Duyệt yêu cầu</PrimaryButton></>
            )
          ) : (
            <>{["APPROVED", "ALLOCATING"].includes(detail.status) ? <Link to="/allocations" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Ghép tồn kho</Link> : null}<GhostButton onClick={() => setDetail(null)}>Đóng</GhostButton></>
          )}>
          <div className="space-y-4">
            <KeyValue rows={[
              ["Trạng thái", <StatusBadge kind="requisition" value={detail.status} />],
              ["Mức khẩn", URGENCY_LABEL[detail.urgencyLevel] || detail.urgencyLevel],
              ["Hạng đợi", detail.queueOrder ?? "—"],
              ["Ngày gửi", fmtDate(detail.createdAt)],
            ]} />
            {detail.description ? <p className="rounded-lg bg-slate-50 p-3 text-sm text-slate-700">{detail.description}</p> : null}
            {info ? (
              <div className="rounded-lg border border-slate-200 p-3 text-sm">
                <p className="font-semibold">Quy mô học sinh</p>
                <p className="mt-1 text-slate-600">{info.totalStudents} học sinh · {info.studentsInNeed} em cần hỗ trợ{info.priorityGroups?.length ? ` · ${info.priorityGroups.join(", ")}` : ""}</p>
                {info.grades?.length ? <p className="mt-1 text-xs text-slate-500">{info.grades.map((grade) => `${grade.grade}: ${grade.students}`).join(" · ")}</p> : null}
              </div>
            ) : null}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase text-slate-500">Hạng mục yêu cầu</p>
              <DataTable columns={["Hạng mục", "Cần", "Đã đáp ứng", "Quy cách", "Lý do"]} rows={(detail.items || []).map((item) => ({ key: item.id, cells: [CATEGORY_LABEL[item.category] || item.category, `${item.quantityNeeded} ${item.unit || ""}`, item.quantityFulfilled, item.specification || "—", item.reason || "—"] }))} />
            </div>
            <div className="flex flex-wrap gap-2">
              {[["Giấy xác nhận của trường", detail.schoolConfirmationUrl], ["Giấy xác nhận của ủy ban", detail.committeeConfirmationUrl]].map(([label, url]) => (
                <GhostButton key={label} disabled={!url} onClick={() => openDocument(url).catch(() => fail("Không mở được tệp."))}><FileText size={13} />{label}{url ? "" : " (chưa có)"}</GhostButton>
              ))}
            </div>
            {["APPROVED", "ALLOCATING", "COMPLETED"].includes(detail.status) ? (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase text-slate-500">Hành trình đơn · đang đi đến đâu</p>
                <RequisitionJourney requisitionId={detail.id} />
              </div>
            ) : null}
            {rejecting ? <Field label="Lý do từ chối (ít nhất 5 ký tự)"><textarea rows={3} className={inputClass} value={reason} onChange={(event) => setReason(event.target.value)} /></Field> : null}
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
