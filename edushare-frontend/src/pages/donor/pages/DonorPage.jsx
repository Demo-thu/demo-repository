import { usePortalTab } from "@/pages/portals/kit";
import { donorScreens } from "../screens";

export default function DonorPage() {
  const { params, tab, openTab } = usePortalTab();
  const Screen = donorScreens[tab] || donorScreens.campaigns;
  return <Screen key={tab || "campaigns"} params={params} openTab={openTab} />;
}
