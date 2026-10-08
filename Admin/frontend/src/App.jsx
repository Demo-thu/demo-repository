import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import SystemLayout from "./layouts/SystemLayout";
import PortalLayout from "./layouts/PortalLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "@donor/pages/RegisterPage";
import DonorPage from "@donor/pages/DonorPage";
import SchoolPage from "@school/pages/SchoolPage";
import WarehousePage from "@warehouse/pages/WarehousePage";
import VolunteerPage from "@volunteer/pages/VolunteerPage";
import { currentUser, isLoggedIn } from "./lib/api";
import { homeForRole } from "./lib/roles";
import DashboardPage from "./pages/DashboardPage";
import AdminCampaigns from "./pages/admin/AdminCampaigns";
import AdminAccounts from "./pages/admin/AdminAccounts";
import AdminRequests from "./pages/admin/AdminRequests";
import AdminAllocations from "./pages/admin/AdminAllocations";
import AdminWaybills from "./pages/admin/AdminWaybills";
import AdminIncidents from "./pages/admin/AdminIncidents";
import AdminAudit from "./pages/admin/AdminAudit";
import TrackingPage from "./pages/Tracking";
import NotFoundPage from "./pages/NotFoundPage";

function RequireSession() {
  if (!isLoggedIn()) return <Navigate to="/login" replace />;
  return <Outlet />;
}

function RequireAdmin() {
  if (!isLoggedIn()) return <Navigate to="/login" replace />;
  const role = currentUser()?.role;
  if (role !== "ADMIN") return <Navigate to={homeForRole(role)} replace />;
  return <SystemLayout />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route element={<RequireSession />}>
          <Route element={<PortalLayout />}>
            <Route path="donor" element={<DonorPage />} />
            <Route path="school" element={<SchoolPage />} />
            <Route path="warehouse" element={<WarehousePage />} />
            <Route path="volunteer" element={<VolunteerPage />} />
          </Route>
        </Route>
        <Route element={<RequireAdmin />}>
          <Route index element={<DashboardPage />} />
          <Route path="campaigns" element={<AdminCampaigns />} />
          <Route path="accounts" element={<AdminAccounts />} />
          <Route path="school-requests" element={<AdminRequests />} />
          <Route path="allocations" element={<AdminAllocations />} />
          <Route path="waybills" element={<AdminWaybills />} />
          <Route path="incidents" element={<AdminIncidents />} />
          <Route path="audit" element={<AdminAudit />} />
          <Route path="tracking" element={<TrackingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
