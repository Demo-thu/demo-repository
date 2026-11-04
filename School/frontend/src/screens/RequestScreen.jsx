import { useEffect, useState } from "react";
import { FileCheck2, Plus, Trash2 } from "lucide-react";
import api, { apiError, currentUser } from "@/lib/api";
import {
  CATEGORIES, CATEGORY_UNIT, Card, Field, GhostButton, Notice, PageHead, PrimaryButton, SubmitBar, URGENCY_LABEL,
  inputClass, openDocument, readDocument, useNotice,
} from "@/pages/portals/kit";

const GROUPS = ["Học sinh dân tộc thiểu số", "Hộ nghèo / cận nghèo", "Mồ côi hoặc khuyết tật", "Vùng thiên tai, biên giới"];

const blankLine = () => ({ category: "IT_DEVICES", specification: "", quantity: 10, unit: "cái", reason: "" });

function DocumentCard({ label, hint, value, onChange }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function pick(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    setBusy(true);
    setError("");
    try {
      onChange(await readDocument(file));
    } catch (failure) {
      setError(failure.message);
    } finally {
      setBusy(false);
    }
  }
  const uploaded = value.startsWith("data:");
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="flex items-center gap-2 text-sm font-semibold text-slate-800"><FileCheck2 size={16} className={value ? "text-emerald-600" : "text-slate-400"} />{label}</p>
      <p className="mb-3 text-xs text-slate-500">{hint}</p>
      <input className={inputClass} value={uploaded ? "(Đã tải tệp lên)" : value} readOnly={uploaded} onChange={(event) => onChange(event.target.value)} placeholder="Dán đường dẫn tệp hoặc tải tệp lên" />
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <label className="cursor-pointer rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">
          {busy ? "Đang đọc..." : "Tải tệp (ảnh/PDF)"}
          <input type="file" accept="image/*,application/pdf" className="hidden" onChange={pick} />
        </label>
        {value ? <GhostButton onClick={() => openDocument(value)}>Xem tệp</GhostButton> : null}
        {value ? <GhostButton tone="danger" onClick={() => onChange("")}>Gỡ</GhostButton> : null}
      </div>
      {error ? <p className="mt-1 text-xs text-rose-600">{error}</p> : null}
    </div>
  );
}

export default function RequestScreen({ params, openTab }) {
  const user = currentUser();
  const editId = params.get("edit");
  const draftKey = `edushare_request_draft_${user?.id}`;
  const [form, setForm] = useState(() => {
    try {
      const saved = !editId && JSON.parse(localStorage.getItem(draftKey) || "null");
      if (saved) return saved;
    } catch {
      /* bản nháp hỏng thì bỏ qua */
    }
    return {
      title: "", urgency: "HIGH", totalStudents: "", studentsInNeed: "", groups: [], grades: [{ grade: "Khối 6", students: "" }],
      description: "", lines: [blankLine()], schoolDoc: "", committeeDoc: "",
    };
  });
  const [pending, setPending] = useState(false);
  const [loaded, setLoaded] = useState(!editId);
  const { notice, ok, fail } = useNotice();

  useEffect(() => {
    if (!editId) return;
    api.get(`/requisitions/${editId}`).then(({ data }) => {
      setForm({
        title: data.title,
        urgency: data.urgencyLevel,
        totalStudents: data.studentInfo?.totalStudents ?? "",
        studentsInNeed: data.studentInfo?.studentsInNeed ?? "",
        groups: data.studentInfo?.priorityGroups ?? [],
        grades: (data.studentInfo?.grades ?? []).map((row) => ({ grade: row.grade, students: row.students })),
        description: data.description || "",
        lines: data.items.map((item) => ({ category: item.category, specification: item.specification || "", quantity: item.quantityNeeded, unit: item.unit || CATEGORY_UNIT[item.category], reason: item.reason || "" })),
        schoolDoc: data.schoolConfirmationUrl || "",
        committeeDoc: data.committeeConfirmationUrl || "",
      });
      setLoaded(true);
    }).catch((error) => fail(apiError(error, "Không tải được yêu cầu cần chỉnh sửa.")));
  }, [editId]);

  const set = (patch) => setForm((current) => ({ ...current, ...patch }));
  const setLine = (index, patch) => setForm((current) => ({ ...current, lines: current.lines.map((line, position) => (position === index ? { ...line, ...patch } : line)) }));
  const setGrade = (index, patch) => setForm((current) => ({ ...current, grades: current.grades.map((row, position) => (position === index ? { ...row, ...patch } : row)) }));

  function saveDraft() {
    localStorage.setItem(draftKey, JSON.stringify(form));
    ok("Đã lưu bản nháp trên trình duyệt này. Yêu cầu chưa được gửi.");
  }

  async function submit(event) {
    event.preventDefault();
    if (!form.schoolDoc.trim() || !form.committeeDoc.trim()) {
      fail("Cần đính kèm cả xác nhận của nhà trường và xác nhận của ủy ban nhân dân/hội đồng.");
      return;
    }
    if (Number(form.studentsInNeed) > Number(form.totalStudents)) {
      fail("Số học sinh thiếu thiết bị không thể lớn hơn tổng số học sinh.");
      return;
    }
    const body = {
      title: form.title.trim(),
      urgencyLevel: form.urgency,
      schoolConfirmationUrl: form.schoolDoc.trim(),
      committeeConfirmationUrl: form.committeeDoc.trim(),
      description: form.description.trim() || undefined,
      studentInfo: {
        totalStudents: Number(form.totalStudents) || 0,
        studentsInNeed: Number(form.studentsInNeed) || 0,
        priorityGroups: form.groups,
        grades: form.grades.filter((row) => row.grade.trim()).map((row) => ({ grade: row.grade.trim(), students: Number(row.students) || 0 })),
      },
      items: form.lines.map((line) => ({
        category: line.category,
        quantityNeeded: Number(line.quantity),
        specification: line.specification.trim() || undefined,
        unit: line.unit.trim() || undefined,
        reason: line.reason.trim() || undefined,
      })),
    };
    setPending(true);
    try {
      const { data } = editId ? await api.patch(`/requisitions/${editId}`, body) : await api.post("/requisitions", body);
      if (!editId) localStorage.removeItem(draftKey);
      openTab("queue", { requisition: data.id });
    } catch (error) {
      fail(apiError(error, editId ? "Không cập nhật được yêu cầu đang chờ." : "Không gửi được yêu cầu."));
    } finally {
      setPending(false);
    }
  }

  if (!loaded) return <div><PageHead title="Chỉnh sửa yêu cầu" /><Notice notice={notice} /></div>;

  return (
    <form onSubmit={submit}>
      <PageHead
        eyebrow="1. Yêu cầu hỗ trợ"
        title={editId ? "Chỉnh sửa yêu cầu đang chờ duyệt" : "Tạo yêu cầu hỗ trợ mới"}
        subtitle="Khai báo quy mô học sinh, thiết bị cần hỗ trợ và đính kèm hai xác nhận bắt buộc. Thứ tự xét duyệt theo thời điểm gửi yêu cầu."
      />
      <Notice notice={notice} />

      <div className="space-y-5">
        <Card title="Thông tin chung">
          <div className="grid gap-4 sm:grid-cols-[1fr_220px]">
            <Field label="Tiêu đề yêu cầu"><input required minLength={5} maxLength={180} className={inputClass} value={form.title} onChange={(event) => set({ title: event.target.value })} placeholder="Ví dụ: Bổ sung máy tính cho phòng tin học" /></Field>
            <Field label="Mức độ khẩn cấp">
              <select className={inputClass} value={form.urgency} onChange={(event) => set({ urgency: event.target.value })}>
                {Object.entries(URGENCY_LABEL).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
              </select>
            </Field>
          </div>
        </Card>

        <Card title="01. Quy mô học sinh & hiện trạng" hint="Thông tin này giúp kho và quản trị ưu tiên phân bổ hợp lý.">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Tổng số học sinh của trường"><input type="number" min="0" className={inputClass} value={form.totalStudents} onChange={(event) => set({ totalStudents: event.target.value })} /></Field>
            <Field label="Số học sinh thiếu thiết bị học tập"><input type="number" min="0" className={inputClass} value={form.studentsInNeed} onChange={(event) => set({ studentsInNeed: event.target.value })} /></Field>
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold text-slate-600">Nhóm đối tượng ưu tiên</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {GROUPS.map((group) => {
                const active = form.groups.includes(group);
                return <button key={group} type="button" onClick={() => set({ groups: active ? form.groups.filter((item) => item !== group) : [...form.groups, group] })} className={`rounded-full border px-3 py-1 text-xs font-semibold ${active ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 text-slate-600"}`}>{group}</button>;
              })}
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between"><p className="text-xs font-semibold text-slate-600">Học sinh theo khối lớp</p><GhostButton onClick={() => set({ grades: [...form.grades, { grade: "", students: "" }] })}><Plus size={13} />Thêm khối</GhostButton></div>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {form.grades.map((row, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input className={inputClass} value={row.grade} onChange={(event) => setGrade(index, { grade: event.target.value })} placeholder="Khối 6" />
                  <input type="number" min="0" className={`${inputClass} !w-28`} value={row.students} onChange={(event) => setGrade(index, { students: event.target.value })} placeholder="Số HS" />
                  {form.grades.length > 1 ? <button type="button" onClick={() => set({ grades: form.grades.filter((_, position) => position !== index) })} className="text-slate-400 hover:text-rose-600" aria-label="Xóa khối"><Trash2 size={15} /></button> : null}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <Field label="Mô tả hiện trạng cơ sở vật chất"><textarea rows={3} maxLength={2000} className={inputClass} value={form.description} onChange={(event) => set({ description: event.target.value })} placeholder="Ví dụ: phòng tin học còn 8 máy hỏng, học sinh phải học chung..." /></Field>
          </div>
        </Card>

        <Card title="02. Thiết bị & học liệu cần hỗ trợ" actions={<GhostButton onClick={() => set({ lines: [...form.lines, blankLine()] })}><Plus size={13} />Thêm dòng</GhostButton>}>
          <div className="space-y-3">
            {form.lines.map((line, index) => (
              <div key={index} className="grid gap-3 rounded-lg border border-slate-200 p-3 lg:grid-cols-[170px_1fr_100px_90px_1fr_auto]">
                <Field label="Nhóm">
                  <select className={inputClass} value={line.category} onChange={(event) => setLine(index, { category: event.target.value, unit: CATEGORY_UNIT[event.target.value] })}>
                    {CATEGORIES.map(([key, label]) => <option key={key} value={key}>{label}</option>)}
                  </select>
                </Field>
                <Field label="Quy cách / cấu hình"><input className={inputClass} value={line.specification} onChange={(event) => setLine(index, { specification: event.target.value })} placeholder="Laptop RAM ≥ 4GB" /></Field>
                <Field label="Số lượng"><input type="number" min="1" max="5000" className={inputClass} value={line.quantity} onChange={(event) => setLine(index, { quantity: event.target.value })} /></Field>
                <Field label="Đơn vị"><input className={inputClass} value={line.unit} onChange={(event) => setLine(index, { unit: event.target.value })} /></Field>
                <Field label="Lý do cần"><input className={inputClass} value={line.reason} onChange={(event) => setLine(index, { reason: event.target.value })} placeholder="Thay máy hỏng..." /></Field>
                <div className="flex items-end">{form.lines.length > 1 ? <GhostButton tone="danger" onClick={() => set({ lines: form.lines.filter((_, position) => position !== index) })}><Trash2 size={13} /></GhostButton> : null}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="03. Hồ sơ xác nhận bắt buộc" hint="Cần đủ hai tài liệu thì yêu cầu mới được xét duyệt.">
          <div className="grid gap-4 md:grid-cols-2">
            <DocumentCard label="Xác nhận của nhà trường" hint="Công văn / giấy đề nghị có chữ ký hiệu trưởng." value={form.schoolDoc} onChange={(schoolDoc) => set({ schoolDoc })} />
            <DocumentCard label="Xác nhận của UBND / hội đồng" hint="Giấy xác nhận hoàn cảnh từ chính quyền địa phương." value={form.committeeDoc} onChange={(committeeDoc) => set({ committeeDoc })} />
          </div>
        </Card>
      </div>

      <SubmitBar>
        <p className="text-xs text-slate-500">{editId ? "Chỉ sửa được khi yêu cầu còn ở trạng thái chờ duyệt." : "Bản nháp chỉ lưu trên trình duyệt này."}</p>
        <div className="flex gap-2">
          <GhostButton onClick={() => openTab("queue")}>Hủy</GhostButton>
          {!editId ? <GhostButton onClick={saveDraft}>Lưu bản nháp</GhostButton> : null}
          <PrimaryButton type="submit" pending={pending}>{editId ? "Lưu thay đổi" : "Gửi yêu cầu"}</PrimaryButton>
        </div>
      </SubmitBar>
    </form>
  );
}
