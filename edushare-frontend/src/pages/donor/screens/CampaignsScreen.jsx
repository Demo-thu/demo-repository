import { useCallback, useEffect, useMemo, useState } from "react";
import { CalendarDays, Gift, Megaphone, Package, TriangleAlert } from "lucide-react";
import api, { apiError } from "@/lib/api";
import { CATEGORY_LABEL, Card, Chips, Empty, Notice, PageHead, PrimaryButton, Progress, SearchBox, Stat, fmtDate, percent, rowsOf, useNotice, usePortalRefresh } from "@/pages/portals/kit";

export default function CampaignsScreen({ openTab }) {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const { notice, fail } = useNotice();

  const load = useCallback(() => api.get("/campaigns/active")
    .then((response) => setCampaigns(rowsOf(response.data)))
    .catch((error) => fail(apiError(error, "Không tải được danh sách chiến dịch.")))
    .finally(() => setLoading(false)), []);

  useEffect(() => { load(); }, [load]);
  usePortalRefresh(load);

  const totals = useMemo(() => {
    const received = campaigns.reduce((sum, row) => sum + (row.summary?.received || 0), 0);
    const target = campaigns.reduce((sum, row) => sum + (row.summary?.targetQuantity || 0), 0);
    const byCategory = (category) => campaigns.reduce((sum, row) => sum + row.targets.filter((item) => item.category === category).reduce((inner, item) => inner + item.currentReceivedQuantity, 0), 0);
    return { received, target, devices: byCategory("IT_DEVICES"), books: byCategory("BOOKS") };
  }, [campaigns]);

  const shortage = useMemo(() => {
    const rows = campaigns.flatMap((campaign) => campaign.targets.map((target) => ({ campaign, target, missing: target.targetQuantity - target.currentReceivedQuantity })));
    return rows.filter((row) => row.missing > 0).sort((a, b) => a.target.receivedRate - b.target.receivedRate)[0] || null;
  }, [campaigns]);

  const visible = campaigns.filter((campaign) => {
    const rate = campaign.summary?.receivedRate || 0;
    if (filter === "urgent" && rate >= 50) return false;
    if (filter === "near" && rate < 80) return false;
    const term = search.trim().toLowerCase();
    return !term || `${campaign.title} ${campaign.slug} ${campaign.description}`.toLowerCase().includes(term);
  });

  const count = (predicate) => campaigns.filter(predicate).length;

  return (
    <div>
      <PageHead eyebrow="Cổng nhà hảo tâm" title="Khám phá chiến dịch nhu cầu" subtitle="Chọn chiến dịch đang thiếu hụt để trao tặng thiết bị, sách vở đúng nơi cần nhất." />
      <Notice notice={notice} />

      {shortage ? (
        <div className="mb-5 flex flex-wrap items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <TriangleAlert size={18} className="shrink-0" />
          <p className="flex-1">
            <b>Thiếu hụt lớn nhất:</b> {CATEGORY_LABEL[shortage.target.category]} thuộc chiến dịch "{shortage.campaign.title}" - còn thiếu {shortage.missing.toLocaleString("vi-VN")} / {shortage.target.targetQuantity.toLocaleString("vi-VN")}.
          </p>
          <PrimaryButton onClick={() => openTab("pledge", { campaign: shortage.campaign.id })}>Trao tặng ngay</PrimaryButton>
        </div>
      ) : null}

      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Chiến dịch đang mở" value={campaigns.length} icon={Megaphone} />
        <Stat label="Đã tiếp nhận / mục tiêu" value={`${totals.received.toLocaleString("vi-VN")} / ${totals.target.toLocaleString("vi-VN")}`} tone="emerald" icon={Package} />
        <Stat label="Thiết bị tin học đã nhận" value={totals.devices.toLocaleString("vi-VN")} tone="violet" />
        <Stat label="Sách đã nhận" value={totals.books.toLocaleString("vi-VN")} tone="amber" />
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Chips
          value={filter}
          onChange={setFilter}
          items={[
            ["all", "Tất cả", campaigns.length],
            ["urgent", "Đang cấp bách", count((row) => (row.summary?.receivedRate || 0) < 50)],
            ["near", "Sắp đủ", count((row) => (row.summary?.receivedRate || 0) >= 80)],
          ]}
        />
        <SearchBox value={search} onChange={setSearch} placeholder="Tìm chiến dịch..." />
      </div>

      {loading ? <Empty>Đang tải chiến dịch...</Empty> : null}
      {!loading && !visible.length ? <Empty>Chưa có chiến dịch phù hợp bộ lọc.</Empty> : null}

      <div className="grid gap-4 lg:grid-cols-2">
        {visible.map((campaign) => (
          <Card key={campaign.id}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-700">{campaign.slug}</p>
                <h2 className="font-display text-lg font-semibold text-slate-900">{campaign.title}</h2>
              </div>
              <span className="whitespace-nowrap rounded-full bg-blue-50 px-2 py-1 text-[11px] font-semibold text-blue-700">{campaign.summary?.receivedRate ?? 0}% mục tiêu</span>
            </div>
            <p className="mt-2 line-clamp-3 text-sm text-slate-600">{campaign.description}</p>
            <p className="mt-2 flex items-center gap-1 text-xs text-slate-500"><CalendarDays size={13} />{fmtDate(campaign.startDate)} - {fmtDate(campaign.endDate)} · {campaign._count?.pledges ?? 0} phiếu trao tặng</p>
            <div className="mt-4 space-y-3">
              {campaign.targets.map((target) => {
                const missing = Math.max(0, target.targetQuantity - target.currentReceivedQuantity);
                const rate = percent(target.currentReceivedQuantity, target.targetQuantity);
                return (
                  <div key={target.id}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">{CATEGORY_LABEL[target.category]}</span>
                      <span className={missing > 0 ? "text-amber-700" : "text-emerald-700"}>{missing > 0 ? `Thiếu ${missing.toLocaleString("vi-VN")}` : "Đã đủ"} · {target.currentReceivedQuantity.toLocaleString("vi-VN")}/{target.targetQuantity.toLocaleString("vi-VN")}</span>
                    </div>
                    <Progress value={rate} tone={rate >= 80 ? "emerald" : rate < 50 ? "amber" : "blue"} />
                  </div>
                );
              })}
            </div>
            <PrimaryButton className="mt-5 w-full" onClick={() => openTab("pledge", { campaign: campaign.id })}><Gift size={15} />Trao tặng cho đợt này</PrimaryButton>
          </Card>
        ))}
      </div>
    </div>
  );
}
