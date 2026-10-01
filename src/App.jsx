import { BrowserRouter, Route, Routes } from "react-router-dom";
import SystemLayout from "./layouts/SystemLayout";

// Admin
import DashboardPage from "./pages/admin/DashboardPage";
import CampaignsPage from "./pages/admin/CampaignsPage";
import AuthorizationAndAuditingPage from "./pages/admin/AuthorizationAndAuditingPage";
import InspectionPage from "./pages/admin/InspectionPage";
import RepairPage from "./pages/admin/RepairPage";
import InventoryAndCoordinatingItemsPage from "./pages/admin/InventoryAndCoordinatingItemsPage";

// Admin (Moved from School)
import SchoolSupportPage from "./pages/admin/SchoolSupportPage";
import StudentsPage from "./pages/admin/StudentsPage";
import ProofsPage from "./pages/admin/ProofsPage";

// Donor
import DonorDashboardPage from "./pages/donor/DonorDashboardPage";
import DonorDonationDetailsPage from "./pages/donor/DonorDonationDetailsPage";
import DonorCertificatesPage from "./pages/donor/DonorCertificatesPage";
import DonorTrackingPage from "./pages/donor/DonorTrackingPage";
import DonorActiveCampaignsPage from "./pages/donor/DonorActiveCampaignsPage";

// School
import SchoolDonationRequestPage from "./pages/school/SchoolDonationRequestPage";
import SchoolStudentDetailsPage from "./pages/school/SchoolStudentDetailsPage";
import SchoolPoDPage from "./pages/school/SchoolPoDPage";
import SchoolDeliveryHistoryPage from "./pages/school/SchoolDeliveryHistoryPage";
import SchoolEquipmentPage from "./pages/school/SchoolEquipmentPage";


// Admin (Moved from Donor)
import DonorTransparencyPage from "./pages/admin/DonorTransparencyPage";
import TrackingPage from "./pages/admin/Tracking";
import QuickResponeAndReceiptPage from "./pages/admin/QuickResponeAndReceiptPage";

// Admin (Moved from Volunteer)
import VolunteerAndHandlerIntakePage from "./pages/admin/VolunteerAndHandlerIntakePage";
import DispatchPage from "./pages/admin/DispatchPage";

// Public pages
import LoginPage from "./pages/public/LoginPage";
import RegisterPage from "./pages/public/RegisterPage";
import NotFoundPage from "./pages/public/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/donor/dashboard" element={<DonorDashboardPage />} />
        <Route path="/donor/donation-details" element={<DonorDonationDetailsPage />} />
        <Route path="/donor/certificates" element={<DonorCertificatesPage />} />
        <Route path="/donor/tracking" element={<DonorTrackingPage />} />
        <Route path="/donor/campaigns" element={<DonorActiveCampaignsPage />} />
        
        <Route path="/school/request" element={<SchoolDonationRequestPage />} />
        <Route path="/school/student-details" element={<SchoolStudentDetailsPage />} />
        <Route path="/school/pod" element={<SchoolPoDPage />} />
        <Route path="/school/delivery-history" element={<SchoolDeliveryHistoryPage />} />
        <Route path="/school/equipment" element={<SchoolEquipmentPage />} />
        <Route element={<SystemLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="proofs" element={<ProofsPage />} />
          <Route path="students" element={<StudentsPage />} />
          <Route path="donations" element={<DonorTransparencyPage />} />
          <Route path="campaigns" element={<CampaignsPage />} />
          <Route path="school-requests" element={<SchoolSupportPage />} />
          <Route path="inspection" element={<InspectionPage />} />
          <Route path="dispatch" element={<DispatchPage />} />
          <Route path="audit" element={<AuthorizationAndAuditingPage />} />
          <Route path="receipts" element={<QuickResponeAndReceiptPage />} />
          <Route path="repairs" element={<RepairPage />} />
          <Route path="volunteers" element={<VolunteerAndHandlerIntakePage />} />
          <Route path="inventory" element={<InventoryAndCoordinatingItemsPage />} />
          <Route path="tracking" element={<TrackingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
