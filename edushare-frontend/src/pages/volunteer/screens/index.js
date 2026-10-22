import BoardScreen from "./BoardScreen";
import GalleryScreen from "./GalleryScreen";
import IncidentScreen from "./IncidentScreen";
import PickupScreen from "./PickupScreen";
import ProofScreen from "./ProofScreen";
import ShiftScreen from "./ShiftScreen";
import WaybillsScreen from "./WaybillsScreen";

export const volunteerScreens = {
  shift: ShiftScreen,
  waybills: WaybillsScreen,
  pickup: PickupScreen,
  incident: IncidentScreen,
  proof: ProofScreen,
  board: BoardScreen,
  gallery: GalleryScreen,
};
