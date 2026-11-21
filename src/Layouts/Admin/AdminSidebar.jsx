import { NavLink, useLocation } from "react-router-dom";
import dasLogo from "../../assets/das-logo.png";
import {
  LayoutDashboard,
  Building,
  Globe2,
  Users,
  Award,
  CalendarDays,
  GitFork,
  AlertTriangle,
  LifeBuoy,
  Cog,
  Gauge,
  TrendingUp,
  FileCheck2,
  UsersRound,
  FileBarChart2,
  Database,
  Settings,
  ShieldCheck,
  X,
} from "lucide-react";

export default function AdminSidebar({ closeSidebar }) {
  const location = useLocation();

  // Full ISO 9001:2015 ERP Navigation List directly from client's screenshots
  const navItems = [
    { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/admin/organization", label: "Organization", icon: Building },
    { to: "/admin/context", label: "Context & Interested Parties", icon: Globe2 },
    { to: "/admin/leadership", label: "Leadership", icon: Award },
    { to: "/admin/planning", label: "Planning", icon: CalendarDays },
    { to: "/admin/process", label: "Process Management", icon: GitFork },
    { to: "/admin/risks", label: "Risk Management", icon: AlertTriangle },
    { to: "/admin/support", label: "Support", icon: LifeBuoy },
    { to: "/admin/operations", label: "Operations", icon: Cog },
    { to: "/admin/performance", label: "Performance Evaluation", icon: Gauge },
    { to: "/admin/improvement", label: "Improvement (PDCA)", icon: TrendingUp },
    { to: "/admin/audits", label: "Audit Management", icon: FileCheck2 },
    { to: "/admin/management-review", label: "Management Review", icon: UsersRound },
    { to: "/admin/reports", label: "Reports & Analytics", icon: FileBarChart2 },
    { to: "/admin/master-data", label: "Master Data", icon: Database },
    { to: "/admin/users", label: "User Management", icon: Users },
    { to: "/admin/settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="w-64 h-screen bg-[#0b1329] text-slate-300 flex flex-col border-r border-slate-800/80 select-none">
      {/* Sidebar Header / Logo (Exact match from screenshot with transparent background) */}
      <div className="px-5 py-4 border-b border-slate-800/80 flex items-center justify-between min-h-[75px]">
        <div className="flex-1 flex items-center justify-start">
          <img
            src={dasLogo}
            alt="DAS M360 Management System ERP"
            className="w-full max-w-[195px] h-auto object-contain cursor-pointer transition hover:opacity-95"
            onClick={() => window.location.href = "/admin/dashboard"}
          />
        </div>

        {/* Mobile Close Button */}
        {closeSidebar && (
          <button
            onClick={closeSidebar}
            className="lg:hidden p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Nav List */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1 text-xs font-medium scrollbar-thin scrollbar-thumb-slate-800">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isDashboard = item.to === "/admin/dashboard";
          const isActive =
            location.pathname === item.to ||
            (isDashboard && location.pathname === "/admin");

          return (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeSidebar}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30"
                  : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="truncate">{item.label}</span>
            </NavLink>
          );
        })}
      </div>

      {/* Sidebar Footer with Certified System status */}
      <div className="p-3 border-t border-slate-800/80 bg-[#080e1c] flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>ISO 9001:2015 QMS</span>
        </div>
        <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-400">
          Audited
        </span>
      </div>
    </aside>
  );
}
