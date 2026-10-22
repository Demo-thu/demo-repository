import { usePortalTab } from "@/pages/portals/kit";
import { schoolScreens } from "../screens";

export default function SchoolPage() {
  const { params, tab, openTab } = usePortalTab();
  const Screen = schoolScreens[tab] || schoolScreens.request;
  return <Screen key={`${tab || "request"}-${params.get("edit") || ""}`} params={params} openTab={openTab} />;
}
