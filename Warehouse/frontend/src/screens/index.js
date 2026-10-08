import DispatchScreen from "./DispatchScreen";
import IncidentScreen from "./IncidentScreen";
import InspectScreen from "./InspectScreen";
import InventoryScreen from "./InventoryScreen";
import ReceiveScreen from "./ReceiveScreen";
import StatusScreen from "./StatusScreen";
import VerifyScreen from "./VerifyScreen";
import WaybillScreen from "./WaybillScreen";

export const warehouseScreens = {
  verify: VerifyScreen,
  inspect: InspectScreen,
  receive: ReceiveScreen,
  inventory: InventoryScreen,
  status: StatusScreen,
  dispatch: DispatchScreen,
  waybill: WaybillScreen,
  incident: IncidentScreen,
};
