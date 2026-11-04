import { usePortalTab } from "@/pages/portals/kit";
import { warehouseScreens } from "../screens";
import ScanModal from "../screens/ScanModal";

export default function WarehousePage() {
  const { params, tab, openTab, setParams } = usePortalTab();
  const Screen = warehouseScreens[tab] || warehouseScreens.verify;
  const scanning = params.get("scan");

  function closeScan() {
    const following = new URLSearchParams(params);
    following.delete("scan");
    following.delete("q");
    setParams(following);
  }

  return (
    <>
      <Screen key={`${tab || "verify"}-${params.get("pledge") || ""}-${params.get("item") || ""}`} params={params} openTab={openTab} setParams={setParams} />
      {scanning ? <ScanModal key={params.get("q") || "blank"} initialCode={params.get("q") || ""} onClose={closeScan} openTab={openTab} /> : null}
    </>
  );
}
