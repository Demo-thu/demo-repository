import { useCallback, useEffect, useState } from "react";
import { CheckCircle2, Clock3, ListOrdered, XCircle } from "lucide-react";
import api, { apiError } from "@/lib/api";
import {
  CATEGORY_LABEL, Chips, DataTable, GhostButton, KeyValue, Modal, Notice, PageHead, PrimaryButton, SearchBox, Stat, StatusBadge,
  URGENCY_LABEL, fmtDateTime, openDocument, rowsOf, useNotice,
} from "@/pages/portals/kit";

export default function QueueScreen({ params, openTab }) {
  const [rows, setRows] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [detail, setDetail] = useState(null);
  const { notice, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const response = await api.get("/requisitions?limit=100");
      setRows(rowsOf(response.data));
    } catch (error) {
      fail(apiError(error, "Không tải được hàng chờ xét duyệt."));
    }
  }, []);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  useEffect(() => {
    const id = params.get("requisition");
    if (id && rows.length) setDetail(rows.find((row) => row.id === id) || null);
  }, [params, rows]);

  const count = (review) => rows.filter((row) => row.reviewStatus === review).length;
  const pendingRows = rows.filter((row) => row.reviewStatus === "PENDING");
  const nextOrder = pendingRows.length ? Math.min(...pendingRows.map((row) => row.queueOrder || 99999)) : null;

  const visible = rows.filter((row) => {
    if (filter !== "all" && row.reviewStatus !== filter) return false;
    const term = search.trim().toLowerCase();
    return !term || `${row.code} ${row.title}`.toLowerCase().includes(term);
  });

  const table = visible.map((row) => ({
    key: row.id,
    cells: [
      <b className="text-blue-700">{row.code}</b>,
      <div><p className="font-medium text-slate-800">{row.title}</p><p className="text-xs text-slate-500">{row.items.map((item) => `${item.quantityNeeded} ${CATEGORY_LABEL[item.category]}`).join(" · ")}</p></div>,
      URGENCY_LABEL[row.urgencyLevel],
      row.queueOrder ? <b>#{row.queueOrder}</b> : "—",
      fmtDateTime(row.createdAt),
      <StatusBadge kind="requisition" value={row.status} />,
      <div className="flex gap-1.5">
        <GhostButton onClick={() => setDetail(row)}>Chi tiết</GhostButton>
        {row.status === "PENDING" ? <GhostButton onClick={() => openTab("request", { edit: row.id })}>Chỉnh sửa</GhostButton> : null}
      </div>,
    ],
  }));

  return (
    <div>
      <PageHead
        eyebrow="1. Yêu cầu hỗ trợ"
        title="Hàng chờ xét duyệt"
        subtitle="Yêu cầu được xét theo thứ tự thời gian gửi. Bạn chỉ chỉnh sửa được khi yêu cầu còn ở trạng thái chờ duyệt."
        actions={<PrimaryButton onClick={() => openTab("request")}>+ Tạo yêu cầu mới</PrimaryButton>}
      />
      <Notice notice={notice} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Đang chờ duyệt" value={count("PENDING")} tone="amber" icon={Clock3} />
        <Stat label="Thứ tự gần nhất" value={nextOrder ? `#${nextOrder}` : "—"} icon={ListOrdered} />
        <Stat label="Đã duyệt" value={count("APPROVED")} tone="emerald" icon={CheckCircle2} />
        <Stat label="Bị từ chối" value={count("REJECTED")} tone="rose" icon={XCircle} />
      </div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Chips value={filter} onChange={setFilter} items={[["all", "Tất cả", rows.length], ["PENDING", "Chờ duyệt", count("PENDING")], ["APPROVED", "Đã duyệt", count("APPROVED")], ["REJECTED", "Từ chối", count("REJECTED")]]} />
        <SearchBox value={search} onChange={setSearch} placeholder="Tìm mã hoặc tiêu đề..." />
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <DataTable columns={["Mã", "Nội dung", "Khẩn cấp", "Thứ tự", "Ngày gửi", "Trạng thái", "Thao tác"]} rows={table} empty="Chưa có yêu cầu nào." />
      </div>

      {detail ? (
        <Modal wide title={`Yêu cầu ${detail.code}`} subtitle={detail.title} onClose={() => setDetail(null)}
          footer={<>{detail.status === "PENDING" ? <PrimaryButton onClick={() => openTab("request", { edit: detail.id })}>Chỉnh sửa yêu cầu</PrimaryButton> : null}<GhostButton onClick={() => setDetail(null)}>Đóng</GhostButton></>}>
          <div className="grid gap-5 md:grid-cols-2">
            <KeyValue rows={[
              ["Trạng thái", <StatusBadge kind="requisition" value={detail.status} />],
              ["Mức khẩn", URGENCY_LABEL[detail.urgencyLevel]],
              ["Thứ tự hàng chờ", detail.queueOrder ? `#${detail.queueOrder}` : "—"],
              ["Gửi lúc", fmtDateTime(detail.createdAt)],
              ["Tổng học sinh", detail.studentInfo?.totalStudents],
              ["Học sinh thiếu thiết bị", detail.studentInfo?.studentsInNeed],
              ["Nhóm ưu tiên", detail.studentInfo?.priorityGroups?.join(", ") || "—"],
            ]} />
            <div>
              <p className="mb-2 text-xs font-semibold text-slate-600">Hiện trạng</p>
              <p className="rounded bg-slate-50 p-3 text-sm text-slate-700">{detail.description || "Không có mô tả."}</p>
              <p className="mb-1 mt-4 text-xs font-semibold text-slate-600">Hồ sơ đính kèm</p>
              <div className="flex gap-2">
                <GhostButton onClick={() => openDocument(detail.schoolConfirmationUrl)}>Xác nhận nhà trường</GhostButton>
                <GhostButton onClick={() => openDocument(detail.committeeConfirmationUrl)}>Xác nhận ủy ban</GhostButton>
              </div>
            </div>
          </div>
          <ul className="mt-4 space-y-1 text-sm">
            {detail.items.map((item) => (
              <li key={item.id} className="rounded bg-slate-50 px-3 py-2">
                <b>{item.quantityNeeded} {item.unit || ""}</b> · {CATEGORY_LABEL[item.category]}{item.specification ? ` · ${item.specification}` : ""}
                {item.reason ? <span className="block text-xs text-slate-500">Lý do: {item.reason}</span> : null}
                <span className="block text-xs text-slate-500">Đã đáp ứng {item.quantityFulfilled}/{item.quantityNeeded}</span>
              </li>
            ))}
          </ul>
        </Modal>
      ) : null}
    </div>
  );
}
