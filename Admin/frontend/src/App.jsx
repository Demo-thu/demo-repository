import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SystemLayout from "./layouts/SystemLayout";
import LoginPage from "./pages/LoginPage";
import { isLoggedIn } from "./lib/api";
import DashboardPage from "./pages/DashboardPage";
import ProofsPage from "./pages/ProofsPage";
import StudentsPage from "./pages/StudentsPage";
import DonorTransparencyPage from "./pages/DonorTransparencyPage";
import CampaignsPage from "./pages/CampaignsPage";
import SchoolSupportPage from "./pages/SchoolSupportPage";
import InspectionPage from "./pages/InspectionPage";
import DispatchPage from "./pages/DispatchPage";
import AuthorizationAndAuditingPage from "./pages/AuthorizationAndAuditingPage";
import QuickResponeAndReceiptPage from "./pages/QuickResponeAndReceiptPage";
import RepairPage from "./pages/RepairPage";
import VolunteerAndHandlerIntakePage from "./pages/VolunteerAndHandlerIntakePage";
import InventoryAndCoordinatingItemsPage from "./pages/InventoryAndCoordinatingItemsPage";
import TrackingPage from "./pages/Tracking";
import NotFoundPage from "./pages/NotFoundPage";

function RequireAuth() {
  if (!isLoggedIn()) return <Navigate to="/login" replace />;
  return <SystemLayout />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route element={<RequireAuth />}>
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
