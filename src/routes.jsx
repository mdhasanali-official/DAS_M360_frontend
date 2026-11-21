import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import AdminLayout from "./Layouts/Admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import Organization from "./pages/Admin/Organization/Organization";
import Planning from "./pages/Admin/Planning/Planning";
import Operations from "./pages/Admin/Operations/Operations";
import Performance from "./pages/Admin/Performance/Performance";
import Improvement from "./pages/Admin/Improvement/Improvement";
import Leadership from "./pages/Admin/Leadership/Leadership";
import Support from "./pages/Admin/Support/Support";
import Process from "./pages/Admin/Process/Process";
import Risks from "./pages/Admin/Risks/Risks";
import Audits from "./pages/Admin/Audits/Audits";
import ManagementReview from "./pages/Admin/ManagementReview/ManagementReview";
import Reports from "./pages/Admin/Reports/Reports";
import MasterData from "./pages/Admin/MasterData/MasterData";
import Settings from "./pages/Admin/Settings/Settings";
import Tasks from "./pages/Admin/Tasks/Tasks";
import AdminProtectedRoute from "./components/Admin/ProtectedRoute/AdminProtectedRoute";
import ManageUsers from "./pages/Admin/ManageUsers/ManageUsers";
import UserDetails from "./pages/Admin/ManageUsers/UserDetails";
import UserRegister from "./pages/Users/Auth/UserRegister";
import VerifyEmail from "./pages/Users/Auth/VerifyEmail";
import UserProfile from "./pages/Users/Profile/UserProfile";
import UserProtectedRoute from "./components/Users/ProtectedRoute/UserProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <UserRegister />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
  {
    path: "/profile",
    element: (
      <UserProtectedRoute>
        <UserProfile />
      </UserProtectedRoute>
    ),
  },
  // Admin Login route alias
  {
    path: "/admin",
    element: <Login />,
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <AdminProtectedRoute>
        <AdminLayout />
      </AdminProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "organization",
        element: <Organization />,
      },
      {
        path: "context",
        element: <Organization />,
      },
      {
        path: "leadership",
        element: <Leadership />,
      },
      {
        path: "planning",
        element: <Planning />,
      },
      {
        path: "process",
        element: <Process />,
      },
      {
        path: "risks",
        element: <Risks />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "operations",
        element: <Operations />,
      },
      {
        path: "performance",
        element: <Performance />,
      },
      {
        path: "improvement",
        element: <Improvement />,
      },
      {
        path: "audits",
        element: <Audits />,
      },
      {
        path: "management-review",
        element: <ManagementReview />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "master-data",
        element: <MasterData />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "users",
        element: <ManageUsers />,
      },
      {
        path: "users/:id",
        element: <UserDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);
