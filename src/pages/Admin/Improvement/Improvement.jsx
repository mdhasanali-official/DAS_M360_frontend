import { useState } from "react";
import {
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  Target,
  BarChart3,
  Search,
  Filter,
  Download,
  Plus,
  ChevronRight,
  ArrowRight,
  Clock,
  ShieldAlert,
  Coins,
  Smile,
  FileText,
  RotateCcw,
  Check,
  X,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { toast } from "react-hot-toast";

// Nonconformity Monthly Trend Data
const NC_TREND_DATA = [
  { month: "Jan", major: 3, minor: 4, observation: 5, total: 12 },
  { month: "Feb", major: 2, minor: 5, observation: 9, total: 16 },
  { month: "Mar", major: 4, minor: 7, observation: 9, total: 20 },
  { month: "Apr", major: 1, minor: 4, observation: 8, total: 13 },
  { month: "May", major: 1, minor: 3, observation: 6, total: 10 },
  { month: "Jun", major: 1, minor: 3, observation: 8, total: 12 },
];

// Corrective Action Status Donut Data
const CAPA_STATUS_DATA = [
  { name: "Completed", value: 8, color: "#10b981", percentage: "80%" },
  { name: "In Progress", value: 1, color: "#38bdf8", percentage: "10%" },
  { name: "Overdue", value: 1, color: "#ef4444", percentage: "10%" },
  { name: "Not Started", value: 0, color: "#cbd5e1", percentage: "0%" },
];

// Initial NC List
const INITIAL_NC_LIST = [
  { no: "01", date: "12 Jan 2026", source: "Internal Audit", desc: "Lack of calibration record", root: "Human error", status: "Open", statusColor: "bg-rose-100 text-rose-800 border-rose-200", target: "31 Jan 2026" },
  { no: "02", date: "20 Jan 2026", source: "Customer Complaint", desc: "Product damage in delivery", root: "Inadequate packing", status: "In Progress", statusColor: "bg-amber-100 text-amber-800 border-amber-200", target: "10 Feb 2026" },
  { no: "03", date: "05 Feb 2026", source: "Process Monitoring", desc: "Incorrect label used", root: "Lack of checking", status: "Completed", statusColor: "bg-emerald-100 text-emerald-800 border-emerald-200", target: "20 Feb 2026" },
  { no: "04", date: "15 Feb 2026", source: "Certification Audit", desc: "Procedure not followed", root: "Inadequate training", status: "Open", statusColor: "bg-rose-100 text-rose-800 border-rose-200", target: "28 Feb 2026" },
  { no: "05", date: "23 Feb 2026", source: "Internal Audit", desc: "Inadequate record keeping", root: "Lack of awareness", status: "Completed", statusColor: "bg-emerald-100 text-emerald-800 border-emerald-200", target: "15 Mar 2026" },
];

// Initial Improvement Ideas
const INITIAL_IDEAS = [
  { no: "01", idea: "Reduce energy consumption in cold store", source: "Operations", benefit: "Cost reduction", status: "Implemented", color: "bg-emerald-100 text-emerald-800" },
  { no: "02", idea: "Improve packaging machine efficiency", source: "Production", benefit: "Higher productivity", status: "In Progress", color: "bg-amber-100 text-amber-800" },
  { no: "03", idea: "Digital document control & barcode", source: "Admin", benefit: "Better compliance", status: "Implemented", color: "bg-emerald-100 text-emerald-800" },
  { no: "04", idea: "Automate dispatch tracking alerts", source: "Sales", benefit: "Higher satisfaction", status: "Planned", color: "bg-blue-100 text-blue-800" },
  { no: "05", idea: "Improve SOP training effectiveness", source: "HR", benefit: "Enhanced competency", status: "In Progress", color: "bg-amber-100 text-amber-800" },
];

// Initial Continual Improvement Projects
const INITIAL_PROJECTS = [
  { no: "01", title: "Reduce product defect rate", objective: "Decrease rejection to ≤ 2%", owner: "Production", start: "01 Jan 2026", target: "30 Jun 2026", status: "On Track", color: "bg-emerald-100 text-emerald-800" },
  { no: "02", title: "Cloud ERP & paperless QMS", objective: "100% digital data capture", owner: "IT", start: "15 Feb 2026", target: "31 Aug 2026", status: "In Progress", color: "bg-amber-100 text-amber-800" },
  { no: "03", title: "Lean manufacturing implementation", objective: "Reduce shop-floor waste by 15%", owner: "Operations", start: "01 Mar 2026", target: "31 Dec 2026", status: "Planned", color: "bg-blue-100 text-blue-800" },
  { no: "04", title: "Customer feedback resolution app", objective: "Faster complaint resolution < 48h", owner: "Sales", start: "01 Apr 2026", target: "30 Sep 2026", status: "On Track", color: "bg-emerald-100 text-emerald-800" },
  { no: "05", title: "Green energy & waste recycling", objective: "Recycle 90% water & packaging", owner: "Admin", start: "15 May 2026", target: "31 Dec 2026", status: "On Track", color: "bg-emerald-100 text-emerald-800" },
];

export default function Improvement() {
  const [ncList, setNcList] = useState(INITIAL_NC_LIST);
  const [isAddNCOpen, setIsAddNCOpen] = useState(false);
  const [newNC, setNewNC] = useState({
    source: "Internal Audit",
    desc: "",
    root: "",
    target: "",
  });

  const handleAddNC = (e) => {
    e.preventDefault();
    if (!newNC.desc || !newNC.root) {
      toast.error("Please fill in description and root cause");
      return;
    }

    const created = {
      no: `0${ncList.length + 1}`,
      date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
      source: newNC.source,
      desc: newNC.desc,
      root: newNC.root,
      status: "Open",
      statusColor: "bg-rose-100 text-rose-800 border-rose-200",
      target: newNC.target || "31 Dec 2026",
    };

    setNcList([created, ...ncList]);
    setIsAddNCOpen(false);
    setNewNC({ source: "Internal Audit", desc: "", root: "", target: "" });
    toast.success("Nonconformity logged successfully!");
  };

  return (
    <div className="w-full space-y-5 pb-8 font-sans text-slate-800">
      {/* 1. TOP HEADER BANNER (Improvement Module - Clause 10) */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 rounded-xl bg-white/20 backdrop-blur-md">
              <TrendingUp className="w-6 h-6 text-white" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Improvement Module (PDCA)
            </h1>
            <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold tracking-wide uppercase">
              ISO 9001:2015 Clause 10
            </span>
          </div>
          <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed max-w-2xl">
            Nonconformity • Corrective Action (CAPA) • Continual Improvement (10.3) • Lessons Learned
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsAddNCOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm shadow-md transition"
          >
            <Plus className="w-4 h-4" />
            <span>New Nonconformity</span>
          </button>

          <button
            onClick={() => toast.success("Generating CAPA & Improvement Report (PDF)...")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-800/80 hover:bg-blue-900 text-white font-semibold text-sm border border-white/20 shadow transition"
          >
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* 2. TOP 5 STAT CARDS (Exact match from screenshot) */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total NCs</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">12</p>
            <p className="text-[11px] text-rose-600 font-bold mt-0.5">↑ 20% vs Last Qtr</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Corrective Actions</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">10</p>
            <p className="text-[11px] text-emerald-600 font-bold mt-0.5">Closed: 8 (↗ 25%)</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Improvement Ideas</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">18</p>
            <p className="text-[11px] text-orange-600 font-bold mt-0.5">Implemented: 11</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Improvement Projects</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">6</p>
            <p className="text-[11px] text-blue-600 font-bold mt-0.5">On Track: 4</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5 col-span-2 sm:col-span-1">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Improvement Rate</p>
            <p className="text-xl font-black text-purple-700 mt-0.5">85%</p>
            <p className="text-[11px] text-purple-600 font-bold mt-0.5">↑ 15% vs Last Qtr</p>
          </div>
        </div>
      </div>

      {/* 3. SECTION 1 & 2: NONCONFORMITY TABLE (10.2) + CAPA WORKFLOW STEPS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Nonconformity & Corrective Action (10.2) Table (Col 7) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                1
              </span>
              <h2 className="text-base font-bold text-slate-900">
                Nonconformity & Corrective Action (Clause 10.2)
              </h2>
            </div>
            <button
              onClick={() => setIsAddNCOpen(true)}
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              + Log NC
            </button>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-700 font-semibold text-[11px] border-b border-slate-200">
                  <th className="py-2.5 px-3 w-8">#</th>
                  <th className="py-2.5 px-3">Date</th>
                  <th className="py-2.5 px-3">Source</th>
                  <th className="py-2.5 px-3">Nonconformity Description</th>
                  <th className="py-2.5 px-3">Root Cause</th>
                  <th className="py-2.5 px-3 text-center">Status</th>
                  <th className="py-2.5 px-3 text-center">Target Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ncList.map((nc) => (
                  <tr key={nc.no} className="hover:bg-blue-50/30 transition">
                    <td className="py-3 px-3 text-slate-400 font-medium">{nc.no}</td>
                    <td className="py-3 px-3 text-slate-500 whitespace-nowrap">{nc.date}</td>
                    <td className="py-3 px-3 font-semibold text-slate-700 whitespace-nowrap">{nc.source}</td>
                    <td className="py-3 px-3 font-medium text-slate-900 max-w-xs">{nc.desc}</td>
                    <td className="py-3 px-3 text-slate-600">{nc.root}</td>
                    <td className="py-3 px-3 text-center">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${nc.statusColor}`}>
                        {nc.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center text-slate-500 whitespace-nowrap">{nc.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: CAPA Workflow 6-Steps (Col 5) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                2
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                CAPA Workflow Protocol
              </h3>
            </div>
            <span className="text-xs font-semibold text-emerald-600">6 Stages</span>
          </div>

          {/* 6 Step Interactive Visual Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-2">
            <div className="p-3 rounded-xl bg-rose-50/80 border border-rose-200 text-center">
              <span className="w-5 h-5 rounded-full bg-rose-600 text-white text-[10px] font-bold inline-flex items-center justify-center mb-1">1</span>
              <p className="text-xs font-bold text-slate-900">Identify NC</p>
              <p className="text-[10px] text-rose-700 mt-0.5">Capture defect</p>
            </div>

            <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-center">
              <span className="w-5 h-5 rounded-full bg-amber-600 text-white text-[10px] font-bold inline-flex items-center justify-center mb-1">2</span>
              <p className="text-xs font-bold text-slate-900">Root Cause (RCA)</p>
              <p className="text-[10px] text-amber-700 mt-0.5">5-Why / Fishbone</p>
            </div>

            <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-center">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold inline-flex items-center justify-center mb-1">3</span>
              <p className="text-xs font-bold text-slate-900">Action Planning</p>
              <p className="text-[10px] text-blue-700 mt-0.5">Preventive plan</p>
            </div>

            <div className="p-3 rounded-xl bg-sky-50/80 border border-sky-200 text-center">
              <span className="w-5 h-5 rounded-full bg-sky-600 text-white text-[10px] font-bold inline-flex items-center justify-center mb-1">4</span>
              <p className="text-xs font-bold text-slate-900">Implementation</p>
              <p className="text-[10px] text-sky-700 mt-0.5">Deploy & Verify</p>
            </div>

            <div className="p-3 rounded-xl bg-purple-50/80 border border-purple-200 text-center">
              <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-bold inline-flex items-center justify-center mb-1">5</span>
              <p className="text-xs font-bold text-slate-900">Effectiveness</p>
              <p className="text-[10px] text-purple-700 mt-0.5">Audit validation</p>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-center">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] font-bold inline-flex items-center justify-center mb-1">6</span>
              <p className="text-xs font-bold text-slate-900">Close & Record</p>
              <p className="text-[10px] text-emerald-700 mt-0.5">Standardized</p>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-blue-50 text-blue-800 text-xs text-center font-semibold mt-2">
            Every Major NC requires verified root cause analysis before closure
          </div>
        </div>
      </div>

      {/* 4. SECTION 3, 4, 5: NC TREND CHART, CAPA STATUS DONUT, IMPROVEMENT IDEAS (10.3) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* NC Trend Chart (Col 4) */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Nonconformity Trend (Last 6 Months)
            </h3>
            <span className="text-[10px] text-slate-400 font-semibold">NC Breakdown</span>
          </div>

          <div className="w-full h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={NC_TREND_DATA} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 9, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: "#ffffff", borderRadius: "8px", fontSize: "11px" }} />
                <Bar dataKey="major" stackId="a" fill="#ef4444" barSize={10} />
                <Bar dataKey="minor" stackId="a" fill="#f59e0b" barSize={10} />
                <Bar dataKey="observation" stackId="a" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center gap-3 text-[10px] font-bold pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1 text-rose-600"><span className="w-2 h-2 rounded-sm bg-rose-500" /> Major NC</span>
            <span className="flex items-center gap-1 text-amber-600"><span className="w-2 h-2 rounded-sm bg-amber-500" /> Minor NC</span>
            <span className="flex items-center gap-1 text-blue-600"><span className="w-2 h-2 rounded-sm bg-blue-600" /> Observation</span>
          </div>
        </div>

        {/* Corrective Action Status Donut (Col 4) */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Corrective Action Status
            </h3>
            <span className="text-[10px] text-emerald-600 font-bold">10 Total CAPA</span>
          </div>

          <div className="relative w-36 h-36 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={CAPA_STATUS_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={42}
                  outerRadius={58}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {CAPA_STATUS_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xl font-black text-slate-900 leading-none">80%</span>
              <span className="text-[9px] font-semibold text-slate-400 mt-0.5">Closed</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1 text-center text-[10px] pt-2 border-t border-slate-100">
            <div>
              <p className="font-bold text-emerald-600">8 Completed</p>
              <p className="text-slate-400 text-[9px]">80%</p>
            </div>
            <div>
              <p className="font-bold text-sky-500">1 In Progress</p>
              <p className="text-slate-400 text-[9px]">10%</p>
            </div>
            <div>
              <p className="font-bold text-rose-500">1 Overdue</p>
              <p className="text-slate-400 text-[9px]">10%</p>
            </div>
          </div>
        </div>

        {/* Improvement Ideas & Opportunities (Clause 10.3) (Col 4) */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Ideas & Opportunities (10.3)
            </h3>
            <button
              onClick={() => toast.success("Idea submission form opened")}
              className="text-[10px] font-bold text-blue-600 hover:underline"
            >
              + Submit Idea
            </button>
          </div>

          <div className="space-y-2 text-xs flex-1">
            {INITIAL_IDEAS.map((idea) => (
              <div key={idea.no} className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                <div className="min-w-0 pr-2">
                  <p className="font-semibold text-slate-800 text-[11px] truncate">{idea.idea}</p>
                  <p className="text-[9px] text-slate-400">{idea.source} • <span className="text-blue-600 font-medium">{idea.benefit}</span></p>
                </div>
                <span className={`px-2 py-0.5 rounded text-[9px] font-bold shrink-0 ${idea.color}`}>
                  {idea.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. SECTION 6 & 7: CONTINUAL IMPROVEMENT PROJECTS + IMPROVEMENT IMPACT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Continual Improvement Projects (Col 8) */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                6
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Continual Improvement Projects (2026)
              </h3>
            </div>
            <button
              onClick={() => toast.success("New project charter initialized")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New Project</span>
            </button>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-700 font-semibold text-[11px] border-b border-slate-200">
                  <th className="py-2.5 px-3">Project Title</th>
                  <th className="py-2.5 px-3">Objective</th>
                  <th className="py-2.5 px-3">Owner</th>
                  <th className="py-2.5 px-3">Start Date</th>
                  <th className="py-2.5 px-3">Target Date</th>
                  <th className="py-2.5 px-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {INITIAL_PROJECTS.map((p) => (
                  <tr key={p.no} className="hover:bg-blue-50/30 transition">
                    <td className="py-3 px-3 font-semibold text-slate-900">{p.title}</td>
                    <td className="py-3 px-3 text-slate-600 text-[11px]">{p.objective}</td>
                    <td className="py-3 px-3 font-medium text-slate-800">{p.owner}</td>
                    <td className="py-3 px-3 text-slate-500">{p.start}</td>
                    <td className="py-3 px-3 text-slate-500">{p.target}</td>
                    <td className="py-3 px-3 text-center">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${p.color}`}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Improvement Impact Metrics (Col 4) */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Improvement Impact (2026)
            </h3>
            <span className="text-[10px] text-blue-600 font-bold">This Year</span>
          </div>

          <div className="grid grid-cols-2 gap-3 my-2">
            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-center">
              <Coins className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
              <p className="text-[10px] font-bold text-slate-500 uppercase">Cost Savings</p>
              <p className="text-base font-black text-emerald-700 mt-0.5">BDT 1,250,000</p>
            </div>

            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-center">
              <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <p className="text-[10px] font-bold text-slate-500 uppercase">Time Reduction</p>
              <p className="text-base font-black text-blue-700 mt-0.5">15%</p>
            </div>

            <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-100 text-center">
              <BarChart3 className="w-5 h-5 text-purple-600 mx-auto mb-1" />
              <p className="text-[10px] font-bold text-slate-500 uppercase">Productivity</p>
              <p className="text-base font-black text-purple-700 mt-0.5">+20%</p>
            </div>

            <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-100 text-center">
              <Smile className="w-5 h-5 text-sky-600 mx-auto mb-1" />
              <p className="text-[10px] font-bold text-slate-500 uppercase">Customer Sat.</p>
              <p className="text-base font-black text-sky-700 mt-0.5">+12%</p>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center text-[11px] text-slate-600">
            Validated during Surveillance Audit & Management Review
          </div>
        </div>
      </div>

      {/* 6. SECTION 8, 9, 10: LESSONS LEARNED, PDCA CYCLE, KEY REPORTS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Lessons Learned Register (Col 5) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Lessons Learned Register
            </h3>
            <span className="text-[10px] text-blue-600 font-semibold">Verified</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
              <p className="font-bold text-slate-800 text-[11px]">Machine Breakdown Prevention</p>
              <p className="text-[10px] text-slate-600">Learning: Preventive maintenance calendar stops emergency line halts.</p>
              <p className="text-[9px] text-slate-400 mt-0.5">Action: New digital schedule deployed • 10 Jan 2026</p>
            </div>

            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
              <p className="font-bold text-slate-800 text-[11px]">Supplier Quality Inconsistency</p>
              <p className="text-[10px] text-slate-600">Learning: Incoming QA inspection checklists prevent defective batch runs.</p>
              <p className="text-[9px] text-slate-400 mt-0.5">Action: Mandatory test certificate on gate receipt • 25 Jan 2026</p>
            </div>

            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
              <p className="font-bold text-slate-800 text-[11px]">Delivery Tracking Delays</p>
              <p className="text-[10px] text-slate-600">Learning: Live GPS dispatch tracking prevents customer delivery disputes.</p>
              <p className="text-[9px] text-slate-400 mt-0.5">Action: Integrated dispatch tracker • 12 Feb 2026</p>
            </div>
          </div>
        </div>

        {/* PDCA Cycle for Improvement (Col 4) */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              PDCA Cycle for Improvement
            </h3>
            <RotateCcw className="w-4 h-4 text-blue-600" />
          </div>

          <div className="space-y-2 text-xs text-slate-700">
            <div className="flex items-start gap-2 p-1.5 rounded-lg bg-blue-50 border border-blue-100">
              <span className="w-4 h-4 rounded bg-blue-600 text-white font-bold text-[9px] flex items-center justify-center shrink-0 mt-0.5">P</span>
              <div>
                <p className="font-bold text-slate-900 text-[11px]">Plan</p>
                <p className="text-[10px] text-slate-600">Identify opportunities and plan actions</p>
              </div>
            </div>

            <div className="flex items-start gap-2 p-1.5 rounded-lg bg-emerald-50 border border-emerald-100">
              <span className="w-4 h-4 rounded bg-emerald-600 text-white font-bold text-[9px] flex items-center justify-center shrink-0 mt-0.5">D</span>
              <div>
                <p className="font-bold text-slate-900 text-[11px]">Do</p>
                <p className="text-[10px] text-slate-600">Implement improvement actions</p>
              </div>
            </div>

            <div className="flex items-start gap-2 p-1.5 rounded-lg bg-amber-50 border border-amber-100">
              <span className="w-4 h-4 rounded bg-amber-600 text-white font-bold text-[9px] flex items-center justify-center shrink-0 mt-0.5">C</span>
              <div>
                <p className="font-bold text-slate-900 text-[11px]">Check</p>
                <p className="text-[10px] text-slate-600">Monitor and evaluate results</p>
              </div>
            </div>

            <div className="flex items-start gap-2 p-1.5 rounded-lg bg-rose-50 border border-rose-100">
              <span className="w-4 h-4 rounded bg-rose-600 text-white font-bold text-[9px] flex items-center justify-center shrink-0 mt-0.5">A</span>
              <div>
                <p className="font-bold text-slate-900 text-[11px]">Act</p>
                <p className="text-[10px] text-slate-600">Standardize and continually improve</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Reports Quick Access (Col 3) */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Key Reports
            </h3>
            <Download className="w-4 h-4 text-slate-400" />
          </div>

          <div className="space-y-1.5 text-[11px]">
            <button
              onClick={() => toast.success("Downloading Nonconformity Report...")}
              className="w-full p-2 text-left rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-between"
            >
              <span>Nonconformity Report</span>
              <FileText className="w-3.5 h-3.5 text-rose-500" />
            </button>
            <button
              onClick={() => toast.success("Downloading CAPA Status Report...")}
              className="w-full p-2 text-left rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-between"
            >
              <span>Corrective Action Status</span>
              <FileText className="w-3.5 h-3.5 text-emerald-500" />
            </button>
            <button
              onClick={() => toast.success("Downloading Improvement Progress...")}
              className="w-full p-2 text-left rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-between"
            >
              <span>Improvement Project Report</span>
              <FileText className="w-3.5 h-3.5 text-blue-500" />
            </button>
            <button
              onClick={() => toast.success("Downloading Cost Saving Report...")}
              className="w-full p-2 text-left rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-between"
            >
              <span>Cost Saving Impact Report</span>
              <FileText className="w-3.5 h-3.5 text-amber-500" />
            </button>
          </div>
        </div>
      </div>

      {/* LOG NONCONFORMITY MODAL */}
      {isAddNCOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">Log Nonconformity (CAPA)</h3>
              <button
                onClick={() => setIsAddNCOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddNC} className="space-y-4 mt-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Source of Finding *</label>
                <select
                  value={newNC.source}
                  onChange={(e) => setNewNC({ ...newNC, source: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 outline-none"
                >
                  <option value="Internal Audit">Internal Audit</option>
                  <option value="Customer Complaint">Customer Complaint</option>
                  <option value="Process Monitoring">Process Monitoring</option>
                  <option value="Certification Audit">Certification Audit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nonconformity Description *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="e.g. Storage temperature deviation detected..."
                  value={newNC.desc}
                  onChange={(e) => setNewNC({ ...newNC, desc: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Identified Root Cause (RCA) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sensor battery depleted during power outage"
                  value={newNC.root}
                  onChange={(e) => setNewNC({ ...newNC, root: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Target Closure Date</label>
                <input
                  type="text"
                  placeholder="e.g. 15 Mar 2026"
                  value={newNC.target}
                  onChange={(e) => setNewNC({ ...newNC, target: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddNCOpen(false)}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                >
                  Save Nonconformity
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
