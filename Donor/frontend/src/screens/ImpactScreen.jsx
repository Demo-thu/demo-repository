import { useCallback, useEffect, useState } from "react";
import { Award, Download, GraduationCap, Package, Printer, Truck } from "lucide-react";
import api, { apiError, currentUser } from "@/lib/api";
import { CATEGORY_LABEL, Card, Empty, GhostButton, Notice, PageHead, Progress, Stat, downloadCsv, orgName, percent, useNotice } from "@/pages/portals/kit";

export default function ImpactScreen() {
  const user = currentUser();
  const [impact, setImpact] = useState(null);
  const { notice, fail } = useNotice();

  const load = useCallback(async () => {
    try {
      const response = await api.get("/pledges/impact");
      setImpact(response.data);
    } catch (error) {
      fail(apiError(error, "Không tải được báo cáo tác động."));
    }
  }, []);

  useEffect(() => {
    load();
    window.addEventListener("portal:refresh", load);
    return () => window.removeEventListener("portal:refresh", load);
  }, [load]);

  function exportCsv() {
    downloadCsv("bao-cao-tac-dong.csv", ["Nhóm", "Đã cam kết", "Đã nhập kho", "Đã giao"], impact.byCategory.map((row) => [CATEGORY_LABEL[row.category], row.pledged, row.received, row.delivered]));
  }

  if (!impact) return <div><PageHead title="Tác động xã hội" /><Notice notice={notice} /><Empty>Đang tính toán tác động...</Empty></div>;

  return (
    <div>
      <PageHead
        eyebrow="Báo cáo minh bạch"
        title="Tác động xã hội của bạn"
        subtitle="Số liệu được tính từ phiếu trao tặng, mã QR nhập kho và biên bản giao nhận thực tế."
        actions={<><GhostButton onClick={() => window.print()}><Printer size={14} />In chứng nhận</GhostButton><GhostButton onClick={exportCsv}><Download size={14} />Xuất CSV</GhostButton></>}
      />
      <Notice notice={notice} />
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Phiếu trao tặng" value={impact.activePledgeCount} hint={`${impact.campaignCount} chiến dịch tham gia`} icon={Package} />
        <Stat label="Hiện vật cam kết" value={impact.pledgedTotal.toLocaleString("vi-VN")} tone="violet" />
        <Stat label="Đã nhập kho (có QR)" value={impact.receivedTotal.toLocaleString("vi-VN")} tone="emerald" icon={Truck} />
        <Stat label="Đã tới trường học" value={impact.deliveredTotal.toLocaleString("vi-VN")} tone="amber" icon={GraduationCap} />
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <Card title="Tiến độ theo nhóm hiện vật">
          {impact.byCategory.length ? (
            <div className="space-y-4">
              {impact.byCategory.map((row) => (
                <div key={row.category}>
                  <div className="mb-1 flex justify-between text-xs"><b className="text-slate-700">{CATEGORY_LABEL[row.category]}</b><span className="text-slate-500">{row.delivered} đã giao · {row.received} đã nhập · {row.pledged} cam kết</span></div>
                  <Progress value={percent(row.delivered, row.pledged)} tone="emerald" />
                </div>
              ))}
            </div>
          ) : <Empty>Chưa có dữ liệu trao tặng.</Empty>}
        </Card>
        <Card title="Trường học đã nhận hàng từ bạn">
          {impact.schools.length ? (
            <ul className="space-y-2">
              {impact.schools.map((school) => (
                <li key={school.id} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm"><span className="font-medium text-slate-800">{school.name}</span><b className="text-blue-700">{school.devices} hiện vật</b></li>
              ))}
            </ul>
          ) : <Empty>Chưa có hiện vật nào được giao tới trường.</Empty>}
        </Card>
      </div>

      {impact.deliveredTotal > 0 ? (
        <Card className="mt-5 text-center">
          <Award size={32} className="mx-auto text-amber-500" />
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-500">Giấy chứng nhận đóng góp</p>
          <p className="font-display text-xl font-semibold text-slate-900">{orgName(user)}</p>
          <p className="mt-1 text-sm text-slate-600">đã trao tặng {impact.deliveredTotal} hiện vật tới {impact.schools.length} trường học qua nền tảng EduShare Vietnam.</p>
        </Card>
      ) : null}
    </div>
  );
}
