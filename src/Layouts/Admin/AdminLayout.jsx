import { useState, useEffect, useRef } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import {
  Search,
  Calendar,
  Bell,
  Menu,
  LogOut,
  ChevronDown,
  Shield,
  HelpCircle,
} from "lucide-react";
import { toast } from "react-hot-toast";

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const mainRef = useRef(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  // পেজ পরিবর্তনের সাথে সাথে স্ক্রল সর্বদা একদম শুরুতে (Top) নিয়ে যাওয়ার ব্যবস্থা
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }

    // Dynamic Browser Tab Title
    const routeTitles = {
      "/admin/dashboard": "Dashboard | DAS M360 ERP",
      "/admin/organization": "Organization (Clause 4) | DAS M360 ERP",
      "/admin/context": "Context & Interested Parties | DAS M360 ERP",
      "/admin/leadership": "Leadership (Clause 5) | DAS M360 ERP",
      "/admin/planning": "Planning (Clause 6) | DAS M360 ERP",
      "/admin/process": "Process Management | DAS M360 ERP",
      "/admin/risks": "Risk Management | DAS M360 ERP",
      "/admin/support": "Support & Document Control | DAS M360 ERP",
      "/admin/operations": "Operations (Clause 8) | DAS M360 ERP",
      "/admin/performance": "Performance Evaluation | DAS M360 ERP",
      "/admin/improvement": "Improvement (PDCA) | DAS M360 ERP",
      "/admin/audits": "Audit Management | DAS M360 ERP",
      "/admin/management-review": "Management Review (MRM) | DAS M360 ERP",
      "/admin/reports": "Reports & Analytics | DAS M360 ERP",
      "/admin/master-data": "Master Data | DAS M360 ERP",
      "/admin/users": "User Management | DAS M360 ERP",
      "/admin/tasks": "Task Management | DAS M360 ERP",
      "/admin/settings": "Settings | DAS M360 ERP",
    };
    document.title = routeTitles[location.pathname] || "DAS M360 ERP | Management System";
  }, [location.pathname]);

  // Retrieve logged-in user from localStorage or use default
  const storedUser = localStorage.getItem("userInfo");
  const currentUser = storedUser
    ? JSON.parse(storedUser)
    : { name: "Admin", role: "System Administrator", email: "admin@dasm360.com" };

  // Current real-time dynamic date
  const today = new Date();
  const currentDate = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const currentDay = today.toLocaleDateString("en-US", { weekday: "long" });

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("userInfo");
    toast.success("লগআউট সম্পন্ন হয়েছে");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex text-slate-800 font-sans">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-slate-950/70 z-40 lg:hidden backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Desktop / Mobile Sliding Sidebar */}
      <div
        className={`fixed top-0 bottom-0 left-0 z-50 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <AdminSidebar closeSidebar={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0 min-h-screen">
        {/* Top Navbar (Matching Sidebar Navy Theme #0b1329) */}
        <header className="sticky top-0 z-30 h-16 bg-[#0b1329] border-b border-slate-800/90 px-4 sm:px-6 flex items-center justify-between shadow-md">
          {/* Left: Mobile Toggle & Clean Search Bar */}
          <div className="flex items-center gap-3 flex-1 max-w-xl">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Global Search Bar (Clean White Pill on Dark Nav - Exact from screenshot) */}
            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search employee, task, KPI, department..."
                className="w-full pl-9 pr-4 py-1.5 bg-white rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 transition shadow-inner"
              />
            </div>
          </div>

          {/* Right: Date, Notifications & Admin Profile */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Date Display (Live Today's Date) */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200">
              <Calendar className="w-4 h-4 text-sky-400" />
              <div className="text-left leading-tight">
                <span className="font-semibold text-white">{currentDate}</span>
                <span className="text-[10px] text-slate-400 block font-normal">{currentDay}</span>
              </div>
            </div>

            {/* Notification Bell with Badge */}
            <button
              onClick={() => toast("You have 5 unread audit & task alerts", { icon: "🔔" })}
              className="relative p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-red-500 text-[10px] font-bold text-white flex items-center justify-center shadow-sm">
                5
              </span>
            </button>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-slate-800/80 transition"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-sky-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
                  {currentUser.name ? currentUser.name.charAt(0) : "A"}
                </div>
                <div className="hidden sm:block text-left leading-tight">
                  <p className="text-xs font-bold text-white">{currentUser.name || "Admin"}</p>
                  <p className="text-[10px] text-slate-400">{currentUser.role || "System Administrator"}</p>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
              </button>

              {/* Profile Dropdown Menu */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-slate-200 py-1.5 z-50 text-xs text-slate-800">
                  <div className="px-4 py-2.5 border-b border-slate-100 bg-slate-50/50">
                    <p className="font-bold text-slate-900">{currentUser.name || "Admin"}</p>
                    <p className="text-[11px] text-slate-500 truncate">{currentUser.email || "admin@dasm360.com"}</p>
                  </div>
                  <button
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      toast.success("Role: ISO 9001 Management Administrator");
                    }}
                    className="w-full px-4 py-2 text-left text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                  >
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span>Security & Permissions</span>
                  </button>
                  <button
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      toast("ISO Surveillance Hotline: +880 1700-000000", { icon: "📞" });
                    }}
                    className="w-full px-4 py-2 text-left text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                  >
                    <HelpCircle className="w-4 h-4 text-sky-500" />
                    <span>Audit Support</span>
                  </button>
                  <div className="border-t border-slate-100 my-1" />
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center gap-2 font-medium"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Viewport with automatic Scroll-to-Top ref */}
        <main ref={mainRef} className="flex-1 p-4 sm:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
