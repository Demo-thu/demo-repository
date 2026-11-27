import CampaignsScreen from "./CampaignsScreen";
import AiCampaignRecommendationsScreen from "./AiCampaignRecommendationsScreen";
import DevicesScreen from "./DevicesScreen";
import ImpactScreen from "./ImpactScreen";
import MyPledgesScreen from "./MyPledgesScreen";
import PledgeFormScreen from "./PledgeFormScreen";
import ReceiptScreen from "./ReceiptScreen";

export const donorScreens = {
  campaigns: CampaignsScreen,
  recommend: AiCampaignRecommendationsScreen,
  pledge: PledgeFormScreen,
  mine: MyPledgesScreen,
  receipt: ReceiptScreen,
  track: DevicesScreen,
  impact: ImpactScreen,
};
