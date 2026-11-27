import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowRight, Bot, Plus, Sparkles, Trash2 } from "lucide-react";
import api, { apiError, currentUser } from "@/lib/api";
import {
  CATEGORIES, CATEGORY_LABEL, CATEGORY_UNIT, Card, Empty, Field, GhostButton, Notice, PageHead, PrimaryButton,
  Progress, inputClass, orgName, rowsOf, useNotice, usePortalRefresh,
} from "@/pages/portals/kit";
import { donorAiDraftKey } from "./donorAiDraft";
import { classifyDonationCondition, DONATION_CONDITIONS, hasProhibitedDonation } from "./donorItemPolicy";

const newLine = () => ({ category: "IT_DEVICES", name: "", quantity: "1", condition: DONATION_CONDITIONS[1] });

function normalizeText(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
}

const CATEGORY_TERMS = [
  ["IT_DEVICES", [
    "thiet bi tin hoc", "laptop", "may tinh xach tay", "may tinh de ban", "may tinh", "pc", "cpu", "desktop",
    "computer", "tablet", "may tinh bang", "ipad", "man hinh", "ban phim", "chuot", "may chieu", "man chieu",
    "projector", "projection screen",
    "smart tv", "tivi", "tv", "bang tuong tac", "interactive whiteboard", "router", "bo phat wifi", "wifi", "wi-fi",
    "switch", "bo chia mang", "may in", "printer", "may quet", "scanner", "webcam", "tai nghe", "headset",
    "loa tro giang", "speaker", "headphones", "usb", "o cung di dong", "external hard drive", "ssd", "ram", "pin laptop",
    "adapter", "bo sac nguon", "bo sac", "charger", "cap ket noi", "cap hdmi", "cap vga", "cap mang lan",
    "hdmi", "vga", "lan cable", "ethernet cable", "monitor", "keyboard", "mouse",
  ]],
  ["VEHICLES", [
    "xe dap", "xe dap dien", "xe dien", "xe lan", "xe", "bicycle", "electric bike", "wheelchair", "mu bao hiem",
    "helmet", "khoa day xe", "khoa cang xe", "bike lock", "bom xe dap", "bom xe", "bike pump", "sam xe",
    "sam lop", "lop du phong", "spare tire", "spare tube", "ao mua bo", "ao mua", "rain suit",
  ]],
  ["UNIFORMS", [
    "dong phuc", "quan ao hoc sinh", "ao dong phuc", "ao so mi", "quan tay", "chan vay", "ao dai", "khan quang do",
    "red scarf", "huy hieu doan", "huy hieu doi", "school badge", "ca vat", "tie", "no dong phuc",
    "ao thun dong phuc", "do the duc", "sportswear", "quan the thao", "mu dong phuc", "non tai beo", "non ket",
    "ao khoac", "ao phao", "ao am", "winter coat", "sweater", "ao len", "khan choang", "mu len", "tat", "vo chan",
    "khan quang co", "vo di hoc", "socks", "giay the thao", "giay bata", "giay di hoc", "sneakers", "sandals", "dep quai hau",
    "ung di mua", "rain boots",
  ]],
  ["STATIONERY", [
    "van phong pham", "dung cu hoc tap", "do dung hoc tap", "vo o ly", "vo ke ngang", "vo ghi chep", "vo hoc tap",
    "notebook", "exercise book", "so tay", "giay kiem tra", "giay in", "giay a4", "giay a3", "giay thu cong",
    "paper", "but bi", "but may", "but chi", "but da quang", "but xoa", "but long", "but mau", "but", "pen",
    "pencil", "highlighter", "gom", "cuc tay", "tay xoa", "tay", "eraser", "do chuot but chi", "sharpener",
    "phan viet bang", "phan trang", "phan mau", "chalk", "thuoc ke", "ruler", "e-ke", "eke", "compa", "compass",
    "hop but", "pencil case", "sac mau", "chi mau", "mau nuoc", "colored pencils", "crayons", "craft paper",
    "keo hoc sinh", "scissors", "ho dan", "glue", "bang con", "ba lo", "balo", "backpack", "school bag",
    "cap sach", "cap dung ho so", "bia ho so", "bia tai lieu", "bia dung ho so", "bia dung tai lieu",
    "document folder", "binh nuoc ca nhan",
    "water bottle",
  ]],
  ["FURNITURE", [
    "ban ghe", "ban hoc", "ban hoc sinh", "ban don", "ban doi", "ghe hoc", "ghe hoc sinh", "ban ghe giao vien",
    "ban giao vien", "ghe giao vien", "ban may tinh", "ban dai", "ban phong thi nghiem", "ban thu vien",
    "giuong tang", "giuong ky tuc xa", "bunk bed", "gia sach",
    "ke sach", "bookshelf", "tu sach", "tu dung ho so", "tu dung thiet bi", "tu ho so", "cabinet", "bang tu", "bang xanh",
    "bang trang", "whiteboard", "green board", "quat treo tuong", "quat tran", "fan", "den chieu sang", "den lop",
    "classroom light",
  ]],
  ["BOOKS", [
    "sach", "sgk", "sbt", "textbook", "workbook", "sach tham khao", "sach luyen thi", "reference book",
    "dictionary", "tu dien", "sach huong dan giao vien", "teacher guide", "sach van hoc", "sach thieu nhi",
    "kids book", "truyen tranh", "comic book", "sach ky nang song", "life skills book", "sach khoa hoc",
    "science book", "bao hoc duong", "tap chi", "newspaper", "magazine", "school journal",
  ]],
];

const CATEGORY_PATTERNS = CATEGORY_TERMS.map(([category, terms]) => [
  category,
  new RegExp(`\\b(?:${terms.join("|")})\\b`),
]);

function detectCategory(text) {
  const lowerText = text.toLowerCase();
  if (lowerText.includes("vớ")) return "UNIFORMS";
  if (lowerText.includes("vở")) return "STATIONERY";
  const normalized = normalizeText(text);
  return CATEGORY_PATTERNS.find(([, pattern]) => pattern.test(normalized))?.[0] || null;
}

function parseDescription(description) {
  const segments = description.split(/\n|;|,|\s+(?:và|&)\s+/i).map((part) => part.trim()).filter(Boolean);
  const lines = [];
  for (const segment of segments) {
    const category = detectCategory(segment);
    const quantityMatch = segment.match(/\d[\d.,]*/);
    if (!category || !quantityMatch) continue;

    const quantity = Number.parseInt(quantityMatch[0].replace(/[.,]/g, ""), 10);
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 5000) continue;

    let name = segment.replace(quantityMatch[0], " ").replace(/\s+/g, " ").trim();
    name = name.replace(/^.*?\b(?:ủng hộ|quyên góp|tặng|trao tặng)\b\s*/i, "");
    name = name.replace(/\b(?:cái|chiếc|bộ|cuốn|quyển|máy)\s*$/i, "").trim();
    if (!name || detectCategory(name) !== category) {
      name = name || CATEGORY_LABEL[category];
    }
    name = name.slice(0, 160);

    const condition = classifyDonationCondition(segment);
    lines.push({ category, name, quantity: String(quantity), condition });
  }
  return lines;
}

function recommendCampaigns(campaigns, lines) {
  const quantityByCategory = new Map();
  for (const line of lines) {
    quantityByCategory.set(line.category, (quantityByCategory.get(line.category) || 0) + Number(line.quantity));
  }
  const totalQuantity = [...quantityByCategory.values()].reduce((sum, quantity) => sum + quantity, 0);

  return campaigns.map((campaign) => {
    const needByCategory = new Map();
    for (const target of campaign.targets || []) {
      const missing = Math.max(0, target.targetQuantity - target.currentReceivedQuantity);
      needByCategory.set(target.category, (needByCategory.get(target.category) || 0) + missing);
    }
    const matches = [...quantityByCategory].map(([category, quantity]) => {
      const need = needByCategory.get(category) || 0;
      return { category, quantity, need, matched: Math.min(quantity, need) };
    }).filter((line) => line.matched > 0);
    const matchedQuantity = matches.reduce((sum, line) => sum + line.matched, 0);
    return {
      ...campaign,
      matches,
      matchedQuantity,
      totalQuantity,
      matchRate: totalQuantity ? Math.round((matchedQuantity / totalQuantity) * 100) : 0,
    };
  })
    .filter((campaign) => campaign.matchedQuantity > 0)
    .sort((a, b) => b.matchRate - a.matchRate || (a.summary?.receivedRate || 0) - (b.summary?.receivedRate || 0))
    .slice(0, 3);
}

export default function AiCampaignRecommendationsScreen({ openTab }) {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [description, setDescription] = useState("");
  const [lines, setLines] = useState([newLine()]);
  const [recommendations, setRecommendations] = useState(null);
  const [analysisError, setAnalysisError] = useState("");
  const { notice, ok, fail } = useNotice();
  const hasRejectedDescription = hasProhibitedDonation(description);
  const hasRejectedLine = lines.some((line) => hasProhibitedDonation(line.name));
  const hasRejectedDonation = hasRejectedDescription || hasRejectedLine;

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get("/campaigns/active");
      setCampaigns(rowsOf(response.data));
      setLoadError("");
    } catch (error) {
      setLoadError(apiError(error, "Không tải được dữ liệu chiến dịch để gợi ý."));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);
  usePortalRefresh(load);

  const canRecommend = lines.length > 0 && lines.every((line) =>
    line.name.trim().length >= 2 && Number.isInteger(Number(line.quantity)) && Number(line.quantity) >= 1 && Number(line.quantity) <= 5000,
  );
  const matchResults = useMemo(
    () => recommendations === null ? [] : recommendCampaigns(campaigns, recommendations),
    [campaigns, recommendations],
  );

  function updateLine(index, patch) {
    setLines((current) => current.map((line, position) => position === index ? { ...line, ...patch } : line));
    setRecommendations(null);
    setAnalysisError("");
  }

  function analyzeDescription() {
    if (hasRejectedDescription) return;
    const parsed = parseDescription(description);
    if (!parsed.length) {
      setAnalysisError("Chưa nhận diện được mặt hàng. Hãy nêu số lượng và tên nhóm hàng, hoặc nhập trực tiếp ở danh sách bên dưới.");
      return;
    }
    setLines(parsed);
    setRecommendations(null);
    setAnalysisError("");
    ok(`Đã nhận diện ${parsed.length} dòng hiện vật. Vui lòng kiểm tra và chỉnh sửa trước khi tìm chiến dịch.`);
  }

  function findCampaigns() {
    if (hasRejectedDonation) {
      setRecommendations(null);
      return;
    }
    if (!canRecommend) {
      setAnalysisError("Vui lòng nhập tên, nhóm và số lượng hợp lệ cho tất cả dòng hiện vật.");
      return;
    }
    setAnalysisError("");
    setRecommendations(lines.map((line) => ({ ...line, quantity: Number(line.quantity) })));
  }

  function selectCampaign(campaign) {
    if (hasRejectedDonation) return;
    try {
      const user = currentUser();
      sessionStorage.setItem(donorAiDraftKey(user?.id), JSON.stringify({
        campaignId: campaign.id,
        lines: lines.map((line) => ({
          category: line.category,
          name: line.name.trim(),
          quantity: Number(line.quantity),
          condition: line.condition,
        })),
      }));
      openTab("pledge", { campaign: campaign.id, aiDraft: "1" });
    } catch {
      fail("Không lưu được danh sách hiện vật tạm thời. Vui lòng thử lại hoặc tạo phiếu thủ công.");
    }
  }

  return (
    <div>
      <PageHead
        eyebrow="Cổng nhà hảo tâm · Gợi ý thông minh"
        title="Tìm chiến dịch phù hợp"
        subtitle="Nhập các hiện vật dự kiến trao tặng để đối chiếu với nhu cầu còn thiếu của chiến dịch đang hoạt động."
        actions={<PrimaryButton onClick={() => openTab("pledge")}><ArrowRight size={14} />Đến tạo phiếu</PrimaryButton>}
      />
      <Notice notice={notice} />
      {loadError ? <Notice notice={{ tone: "error", text: loadError }} /> : null}
      {hasRejectedDonation ? (
        <p role="alert" className="mb-4 rounded-lg border border-rose-300 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          Từ chối tiếp nhận: nội dung có dấu hiệu thuộc danh mục hàng hóa bị cấm. Đã chặn phân tích, gợi ý chiến dịch và tạo phiếu.
        </p>
      ) : null}

      <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]">
        <div className="space-y-5">
          <Card title="1. Mô tả hoặc liệt kê hiện vật" hint="Có thể nhập mô tả tự nhiên hoặc điền trực tiếp từng dòng.">
            <Field label="Mô tả nhanh">
              <textarea
                rows={3}
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                  setRecommendations(null);
                  setAnalysisError("");
                }}
                className={inputClass}
                placeholder="Ví dụ: Tôi muốn tặng 20 laptop Dell cũ còn tốt và 50 bộ đồng phục học sinh mới."
              />
            </Field>
            <GhostButton className="mt-3" disabled={!description.trim() || hasRejectedDescription} onClick={analyzeDescription}>
              <Bot size={14} />Phân tích mô tả
            </GhostButton>

            <div className="mt-5 flex items-center justify-between gap-3">
              <h2 className="text-sm font-semibold text-slate-800">Chi tiết hiện vật</h2>
              <GhostButton onClick={() => {
                setLines((current) => [...current, newLine()]);
                setRecommendations(null);
              }}><Plus size={14} />Thêm dòng</GhostButton>
            </div>
            <div className="mt-3 space-y-3">
              {lines.map((line, index) => (
                <div key={index} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-700">Hiện vật #{index + 1}</span>
                    {lines.length > 1 ? (
                      <GhostButton tone="danger" aria-label={`Xóa hiện vật ${index + 1}`} onClick={() => {
                        setLines((current) => current.filter((_, position) => position !== index));
                        setRecommendations(null);
                      }}><Trash2 size={13} />Xóa</GhostButton>
                    ) : null}
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field label="Nhóm hiện vật">
                      <select className={inputClass} value={line.category} onChange={(event) => updateLine(index, { category: event.target.value })}>
                        {CATEGORIES.map(([key, label]) => <option key={key} value={key}>{label}</option>)}
                      </select>
                    </Field>
                    <Field label="Tên / cấu hình">
                      <input className={inputClass} value={line.name} maxLength={160} onChange={(event) => updateLine(index, { name: event.target.value })} placeholder="Ví dụ: Laptop Dell Latitude i5 8GB" />
                    </Field>
                    <Field label={`Số lượng (${CATEGORY_UNIT[line.category]})`}>
                      <input type="number" min="1" max="5000" step="1" className={inputClass} value={line.quantity} onChange={(event) => updateLine(index, { quantity: event.target.value })} />
                    </Field>
                    <Field label="Tình trạng khai báo">
                      <select className={inputClass} value={line.condition} onChange={(event) => updateLine(index, { condition: event.target.value })}>
                        {DONATION_CONDITIONS.map((condition) => <option key={condition} value={condition}>{condition}</option>)}
                      </select>
                    </Field>
                  </div>
                </div>
              ))}
            </div>
            {analysisError ? <p role="alert" className="mt-3 text-xs text-rose-700">{analysisError}</p> : null}
            <PrimaryButton className="mt-4 w-full" disabled={!canRecommend || hasRejectedDonation || loading || Boolean(loadError)} onClick={findCampaigns}>
              <Sparkles size={14} />Tìm chiến dịch phù hợp
            </PrimaryButton>
          </Card>
          <p className="text-xs text-slate-500">Gợi ý được xếp hạng theo phần số lượng có thể đáp ứng từ mục tiêu còn thiếu hiện tại. Hãy kiểm tra thông tin trước khi tạo phiếu.</p>
        </div>

        <Card title="2. Chiến dịch được đề xuất" hint={recommendations === null ? "Nhập vật tư rồi bấm tìm chiến dịch." : `${matchResults.length} chiến dịch có nhu cầu phù hợp`}>
          {loading ? <Empty>Đang tải nhu cầu chiến dịch...</Empty> : null}
          {!loading && !loadError && recommendations !== null && !matchResults.length ? <Empty>Chưa có chiến dịch đang mở thiếu các nhóm hiện vật này.</Empty> : null}
          {!loading && recommendations === null ? <Empty>Các đề xuất sẽ hiển thị sau khi phân tích danh sách hiện vật.</Empty> : null}
          <div className="space-y-3">
            {matchResults.map((campaign, index) => (
              <article key={campaign.id} className={`rounded-lg border p-4 ${index === 0 ? "border-blue-300 bg-blue-50/50" : "border-slate-200 bg-white"}`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    {index === 0 ? <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-blue-700">Phù hợp nhất</p> : null}
                    <p className="font-semibold text-slate-900">{campaign.slug} · {campaign.title}</p>
                    <p className="mt-1 text-xs text-slate-500">Trường thụ hưởng: {orgName(campaign.beneficiarySchool)}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">{campaign.matchRate}% khớp</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">{campaign.description}</p>
                <div className="mt-3 space-y-2">
                  {campaign.matches.map((match) => (
                    <div key={match.category}>
                      <div className="mb-1 flex justify-between gap-3 text-xs">
                        <span className="font-medium text-slate-700">{CATEGORY_LABEL[match.category]}</span>
                        <span className="text-slate-600">Đáp ứng {match.matched}/{match.quantity} · còn thiếu {match.need}</span>
                      </div>
                      <Progress value={match.need ? Math.min(100, Math.round((match.matched / match.need) * 100)) : 0} />
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  Đáp ứng {campaign.matchedQuantity} trên {campaign.totalQuantity} hiện vật theo mục tiêu còn thiếu.
                </p>
                <PrimaryButton className="mt-4 w-full" disabled={hasRejectedDonation} onClick={() => selectCampaign(campaign)}>
                  Chọn chiến dịch & chuyển sang tạo phiếu <ArrowRight size={14} />
                </PrimaryButton>
              </article>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
