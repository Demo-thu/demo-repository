import { usePortalTab } from "@/pages/portals/kit";
import { volunteerScreens } from "../screens";

export default function VolunteerPage() {
  const { params, tab, openTab } = usePortalTab();
  const Screen = volunteerScreens[tab] || volunteerScreens.shift;
  return <Screen key={`${tab || "shift"}-${params.get("waybill") || ""}`} params={params} openTab={openTab} />;
}
