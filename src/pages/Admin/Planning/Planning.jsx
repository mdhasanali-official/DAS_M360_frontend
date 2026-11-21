import { useState } from "react";
import {
  CalendarDays,
  Target,
  AlertTriangle,
  ClipboardList,
  TrendingUp,
  ShieldAlert,
  CheckCircle2,
  Clock,
  Plus,
  Download,
  Filter,
  Search,
  ChevronRight,
  Sparkles,
  Layers,
  ArrowRight,
  FileCheck2,
  BarChart3,
  Edit3,
  Calendar,
  X,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { toast } from "react-hot-toast";

// Multi-Year Strategic Roadmaps (2026 to 2030) - Core requirement from user
const STRATEGIC_PLANS = {
  2026: [
    { initiative: "Market Expansion & Brand Penetration", objective: "Increase regional market share by 15%", timeline: "2026", status: "In Progress", statusColor: "bg-blue-100 text-blue-800" },
    { initiative: "Infrastructure Upgrade (Clean Room)", objective: "Expand sterile dairy packing capacity", timeline: "2026", status: "In Progress", statusColor: "bg-blue-100 text-blue-800" },
    { initiative: "ISO 9001:2015 Recertification & Surveillance", objective: "Zero Major NC in annual surveillance audit", timeline: "2026", status: "In Progress", statusColor: "bg-blue-100 text-blue-800" },
    { initiative: "Procurement Vendor Rationalization", objective: "Establish top 10 long-term supplier agreements", timeline: "2026", status: "Completed", statusColor: "bg-emerald-100 text-emerald-800" },
  ],
  2027: [
    { initiative: "Digital Transformation & Cloud ERP", objective: "Achieve 100% paperless shop-floor data logging", timeline: "2026-2027", status: "Planned", statusColor: "bg-amber-100 text-amber-800" },
    { initiative: "Automated Packaging Line 2", objective: "Reduce packaging cycle time by 25%", timeline: "2027", status: "Planned", statusColor: "bg-amber-100 text-amber-800" },
    { initiative: "Energy Efficiency & Solar Rooftop", objective: "Cut factory carbon footprint by 20%", timeline: "2027", status: "Planned", statusColor: "bg-amber-100 text-amber-800" },
  ],
  2028: [
    { initiative: "New Organic Product Line R&D", objective: "Diversify dairy portfolio into fortified organics", timeline: "2027-2028", status: "Planned", statusColor: "bg-slate-100 text-slate-700" },
    { initiative: "Export Market Compliance (Halal & HACCP)", objective: "Achieve international export compliance", timeline: "2028", status: "Planned", statusColor: "bg-slate-100 text-slate-700" },
  ],
  2029: [
    { initiative: "Automated Cold Chain Logistics Hub", objective: "Zero product spoilage during nationwide transit", timeline: "2028-2029", status: "Planned", statusColor: "bg-slate-100 text-slate-700" },
    { initiative: "Talent Leadership Development Program", objective: "Upskill internal workforce for senior roles", timeline: "2029", status: "Planned", statusColor: "bg-slate-100 text-slate-700" },
  ],
  2030: [
    { initiative: "National Market Leadership Vision 2030", objective: "Become top 3 dairy processing brand in nation", timeline: "2026-2030", status: "Planned", statusColor: "bg-slate-100 text-slate-700" },
    { initiative: "Zero-Carbon Eco-Friendly Production", objective: "Full renewable manufacturing certified footprint", timeline: "2030", status: "Planned", statusColor: "bg-slate-100 text-slate-700" },
  ],
};

// Risks & Opportunities (Clause 6.1)
const INITIAL_RISKS = [
  { id: 1, item: "Raw material price sudden increase", type: "Risk", impact: "High", likelihood: "High", level: "High", action: "Mitigate", actionColor: "bg-amber-100 text-amber-800", levelColor: "bg-rose-100 text-rose-700 border-rose-200" },
  { id: 2, item: "New market expansion & regional demand", type: "Opportunity", impact: "High", likelihood: "Medium", level: "Medium", action: "Exploit", actionColor: "bg-emerald-100 text-emerald-800", levelColor: "bg-amber-100 text-amber-700 border-amber-200" },
  { id: 3, item: "Key production machine sudden breakdown", type: "Risk", impact: "High", likelihood: "Medium", level: "High", action: "Mitigate", actionColor: "bg-amber-100 text-amber-800", levelColor: "bg-rose-100 text-rose-700 border-rose-200" },
  { id: 4, item: "AI & automated ERP adoption on shop floor", type: "Opportunity", impact: "Medium", likelihood: "High", level: "Medium", action: "Enhance", actionColor: "bg-sky-100 text-sky-800", levelColor: "bg-amber-100 text-amber-700 border-amber-200" },
  { id: 5, item: "Regulatory food safety & tax revisions", type: "Risk", impact: "Medium", likelihood: "Medium", level: "Medium", action: "Monitor", actionColor: "bg-slate-100 text-slate-700", levelColor: "bg-amber-100 text-amber-700 border-amber-200" },
];

// Quality Objectives (Clause 6.2)
const QUALITY_OBJECTIVES = [
  { id: 1, objective: "Increase customer satisfaction score", kpi: "Customer Satisfaction Index", target: "≥ 90%", status: "On Track", progress: 85, color: "bg-emerald-500" },
  { id: 2, objective: "Reduce customer product complaints", kpi: "No. of complaints", target: "≤ 5 per year", status: "On Track", progress: 60, color: "bg-emerald-500" },
  { id: 3, objective: "Improve on-time delivery rate (OTD)", kpi: "OTD rate", target: "≥ 95%", status: "At Risk", progress: 70, color: "bg-amber-500" },
  { id: 4, objective: "Reduce process nonconformities (NCR)", kpi: "No. of Major NCRs", target: "≤ 3 per year", status: "On Track", progress: 100, color: "bg-emerald-500" },
  { id: 5, objective: "Improve employee competency & training", kpi: "Training completion rate", target: "≥ 90%", status: "On Track", progress: 80, color: "bg-emerald-500" },
];

// Action Plans (Clause 6.3)
const INITIAL_ACTION_PLANS = [
  { id: 1, plan: "Implement new market distribution strategy", related: "Opportunity", responsible: "Marketing Director", targetDate: "31 Dec 2026", status: "In Progress", statusColor: "bg-blue-100 text-blue-800" },
  { id: 2, plan: "Upgrade critical refrigeration & boiler equipment", related: "Risk", responsible: "Production Head", targetDate: "30 Nov 2026", status: "In Progress", statusColor: "bg-blue-100 text-blue-800" },
  { id: 3, plan: "Implement comprehensive QMS refresher training", related: "Objective", responsible: "HR Manager", targetDate: "31 Jan 2026", status: "Completed", statusColor: "bg-emerald-100 text-emerald-800" },
  { id: 4, plan: "Review legal statutory and BSTI requirements", related: "Risk", responsible: "Compliance Officer", targetDate: "28 Feb 2026", status: "In Progress", statusColor: "bg-blue-100 text-blue-800" },
  { id: 5, plan: "Develop prototype recipe for organic yoghurt line", related: "Opportunity", responsible: "R&D Head", targetDate: "30 Jun 2026", status: "Planned", statusColor: "bg-amber-100 text-amber-800" },
];

// Key Objective Progress Bar Chart Data (Clause 6.2)
const OBJECTIVE_PROGRESS_CHART = [
  { name: "Customer Satisfaction", target: 90, actual: 85 },
  { name: "On-time Delivery", target: 95, actual: 70 },
  { name: "NCR Reduction", target: 90, actual: 95 },
  { name: "Employee Competency", target: 90, actual: 80 },
  { name: "Revenue Growth", target: 80, actual: 75 },
];

export default function Planning() {
  const [selectedYear, setSelectedYear] = useState(2026);
  const [actionPlans, setActionPlans] = useState(INITIAL_ACTION_PLANS);
  const [isAddPlanModalOpen, setIsAddPlanModalOpen] = useState(false);
  const [newPlan, setNewPlan] = useState({
    plan: "",
    related: "Opportunity",
    responsible: "",
    targetDate: "",
    status: "In Progress",
  });

  const handleAddPlan = (e) => {
    e.preventDefault();
    if (!newPlan.plan || !newPlan.responsible) {
      toast.error("Please fill in action plan and responsible person");
      return;
    }

    const created = {
      id: Date.now(),
      ...newPlan,
      statusColor: newPlan.status === "Completed" ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800",
    };

    setActionPlans([created, ...actionPlans]);
    setIsAddPlanModalOpen(false);
    setNewPlan({ plan: "", related: "Opportunity", responsible: "", targetDate: "", status: "In Progress" });
    toast.success("Action Plan added successfully!");
  };

  return (
    <div className="w-full space-y-5 pb-8 font-sans text-slate-800">
      {/* 1. TOP HEADER BANNER (Planning Module - Clause 6) */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 rounded-xl bg-white/20 backdrop-blur-md">
              <CalendarDays className="w-6 h-6 text-white" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Planning Module
            </h1>
            <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold tracking-wide uppercase">
              ISO 9001:2015 Clause 6
            </span>
          </div>
          <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed max-w-2xl">
            Understand Context • Determine Risks & Opportunities • Set Quality Objectives • Plan Actions • Multi-Year Strategic Roadmaps (2026–2030)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsAddPlanModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm shadow-md transition"
          >
            <Plus className="w-4 h-4" />
            <span>Add Action Plan</span>
          </button>

          <button
            onClick={() => toast.success("Generating ISO Audit Planning Report (PDF)...")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-800/80 hover:bg-blue-900 text-white font-semibold text-sm border border-white/20 shadow transition"
          >
            <Download className="w-4 h-4" />
            <span>Export Plan</span>
          </button>
        </div>
      </div>

      {/* 2. TOP STAT METRICS (Exact match from screenshot: 8 Objectives, 3 High Risk, 24 Actions, 20 KPIs) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Strategic Objectives</p>
            <p className="text-2xl font-black text-slate-900 mt-0.5">8</p>
            <p className="text-xs text-emerald-600 font-semibold mt-0.5">6 On Track</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">High Risk Areas</p>
            <p className="text-2xl font-black text-slate-900 mt-0.5">3</p>
            <p className="text-xs text-rose-600 font-semibold mt-0.5">Action Required</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <ClipboardList className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Action Plans</p>
            <p className="text-2xl font-black text-slate-900 mt-0.5">24</p>
            <p className="text-xs text-blue-600 font-semibold mt-0.5">18 In Progress</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">KPI Targets</p>
            <p className="text-2xl font-black text-slate-900 mt-0.5">20</p>
            <p className="text-xs text-purple-600 font-semibold mt-0.5">85% On Track</p>
          </div>
        </div>
      </div>

      {/* 3. CORE SECTION: MULTI-YEAR STRATEGIC PLAN (2026, 2027, 2028, 2029, 2030) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                5
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Multi-Year Strategic Plan (Roadmap 2026–2030)
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Multi-year organizational initiatives, strategic objectives and ISO surveillance audit readiness
            </p>
          </div>

          {/* Year Switcher Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            {[2026, 2027, 2028, 2029, 2030].map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedYear === yr
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                {yr} {yr === 2026 && <span className="text-[10px] opacity-80">(Active)</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Multi-Year Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-700 font-semibold text-xs border-b border-slate-200">
                <th className="py-3 px-5 w-24">Year</th>
                <th className="py-3 px-5">Strategy / Initiative</th>
                <th className="py-3 px-5">Target Objective</th>
                <th className="py-3 px-5">Timeline</th>
                <th className="py-3 px-5 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {STRATEGIC_PLANS[selectedYear]?.map((plan, idx) => (
                <tr key={idx} className="hover:bg-blue-50/30 transition">
                  <td className="py-4 px-5">
                    <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-black text-xs border border-blue-200">
                      {selectedYear}
                    </span>
                  </td>
                  <td className="py-4 px-5 font-bold text-slate-900">{plan.initiative}</td>
                  <td className="py-4 px-5 text-slate-600 text-xs sm:text-sm">{plan.objective}</td>
                  <td className="py-4 px-5 text-slate-500 font-medium text-xs sm:text-sm">{plan.timeline}</td>
                  <td className="py-4 px-5 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${plan.statusColor}`}>
                      {plan.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. ROW 3: RISKS & OPPORTUNITIES (6.1) + QUALITY OBJECTIVES (6.2) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Risk & Opportunity Assessment (Clause 6.1) (Col 6) */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                6.1
              </span>
              <div>
                <h3 className="text-base font-bold text-slate-900">Risk & Opportunity Assessment</h3>
                <p className="text-xs text-slate-500">Likelihood × Impact matrix evaluation</p>
              </div>
            </div>
            <button
              onClick={() => toast.success("Opening 5x5 Full Risk Matrix")}
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              View 5x5 Matrix
            </button>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-700 font-semibold text-[11px] border-b border-slate-200">
                  <th className="py-2.5 px-3 w-8">#</th>
                  <th className="py-2.5 px-3">Risk / Opportunity</th>
                  <th className="py-2.5 px-3 text-center">Type</th>
                  <th className="py-2.5 px-3 text-center">Level</th>
                  <th className="py-2.5 px-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {INITIAL_RISKS.map((r) => (
                  <tr key={r.id} className="hover:bg-blue-50/30 transition">
                    <td className="py-3 px-3 text-slate-400 font-medium text-center">{r.id}</td>
                    <td className="py-3 px-3 font-semibold text-slate-900 max-w-[200px]">{r.item}</td>
                    <td className="py-3 px-3 text-center">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        r.type === "Risk" ? "bg-rose-50 text-rose-700" : "bg-emerald-50 text-emerald-700"
                      }`}>
                        {r.type}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${r.levelColor}`}>
                        {r.level}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${r.actionColor}`}>
                        {r.action}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Quality Objectives (Clause 6.2) (Col 6) */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                6.2
              </span>
              <div>
                <h3 className="text-base font-bold text-slate-900">Quality Objectives (2026)</h3>
                <p className="text-xs text-slate-500">Measurable quality targets & progress percentage</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              4 of 5 On Track
            </span>
          </div>

          <div className="p-4 space-y-3.5 flex-1">
            {QUALITY_OBJECTIVES.map((obj) => (
              <div key={obj.id} className="p-3 rounded-xl border border-slate-100 bg-slate-50/40 hover:bg-slate-50 transition">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-xs font-bold text-slate-800">{obj.objective}</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    obj.status === "On Track" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                  }`}>
                    {obj.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                  <span>KPI: <strong className="text-slate-700">{obj.kpi}</strong></span>
                  <span>Target: <strong className="text-slate-700">{obj.target}</strong></span>
                </div>
                <div className="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden flex items-center">
                  <div style={{ width: `${obj.progress}%` }} className={`h-full rounded-full ${obj.color}`} />
                </div>
                <div className="text-right text-[10px] font-bold text-slate-600 mt-1">
                  {obj.progress}% Completed
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. ROW 4: PLANNING OF ACTIONS (6.3) + KPI CHART & MANAGEMENT REVIEW INPUTS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Planning of Actions (Clause 6.3) (Col 7) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                6.3
              </span>
              <div>
                <h3 className="text-base font-bold text-slate-900">Planning of Actions & Changes</h3>
                <p className="text-xs text-slate-500">Ownership, timelines and deliverables</p>
              </div>
            </div>
            <button
              onClick={() => setIsAddPlanModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Plan</span>
            </button>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-700 font-semibold text-[11px] border-b border-slate-200">
                  <th className="py-2.5 px-3">Action Plan</th>
                  <th className="py-2.5 px-3">Related To</th>
                  <th className="py-2.5 px-3">Responsible</th>
                  <th className="py-2.5 px-3">Target Date</th>
                  <th className="py-2.5 px-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {actionPlans.map((ap) => (
                  <tr key={ap.id} className="hover:bg-blue-50/30 transition">
                    <td className="py-3 px-3 font-semibold text-slate-900 max-w-xs">{ap.plan}</td>
                    <td className="py-3 px-3">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium">
                        {ap.related}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-medium text-slate-700">{ap.responsible}</td>
                    <td className="py-3 px-3 text-slate-500">{ap.targetDate}</td>
                    <td className="py-3 px-3 text-center">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${ap.statusColor}`}>
                        {ap.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Key Objective Progress Chart + Management Review Inputs (Col 5) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Chart */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                Key Objective Progress (2026)
              </h3>
              <div className="flex items-center gap-2 text-[11px]">
                <span className="flex items-center gap-1 text-blue-600 font-bold">
                  <span className="w-2.5 h-2.5 rounded-sm bg-blue-600" /> Target
                </span>
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" /> Actual
                </span>
              </div>
            </div>

            <div className="w-full h-44">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={OBJECTIVE_PROGRESS_CHART} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fontSize: 9, fill: "#64748b" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: "#64748b" }} axisLine={false} tickLine={false} domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "11px" }}
                  />
                  <Bar dataKey="target" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={8} />
                  <Bar dataKey="actual" fill="#10b981" radius={[4, 4, 0, 0]} barSize={8} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Management Review Inputs Checklist */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-blue-600" />
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Management Review Inputs (Clause 9.3)
                </h4>
              </div>
              <button
                onClick={() => toast.success("Generating Management Review Dossier...")}
                className="text-[10px] font-bold text-blue-600 hover:underline"
              >
                Generate Report
              </button>
            </div>

            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-2 p-1.5 rounded bg-blue-50/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="truncate">Context & interested parties review status</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 rounded bg-blue-50/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="truncate">Risk & opportunity assessment status</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 rounded bg-blue-50/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="truncate">Quality objectives performance & KPI trends</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 rounded bg-blue-50/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="truncate">Action plan progress & resource requirements</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ADD ACTION PLAN MODAL */}
      {isAddPlanModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">Add New Action Plan</h3>
              <button
                onClick={() => setIsAddPlanModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddPlan} className="space-y-4 mt-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Action Plan Description *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="e.g. Implement clean room hygiene automation..."
                  value={newPlan.plan}
                  onChange={(e) => setNewPlan({ ...newPlan, plan: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Related To</label>
                  <select
                    value={newPlan.related}
                    onChange={(e) => setNewPlan({ ...newPlan, related: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 outline-none"
                  >
                    <option value="Opportunity">Opportunity</option>
                    <option value="Risk">Risk</option>
                    <option value="Objective">Objective</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Status</label>
                  <select
                    value={newPlan.status}
                    onChange={(e) => setNewPlan({ ...newPlan, status: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 outline-none"
                  >
                    <option value="In Progress">In Progress</option>
                    <option value="Planned">Planned</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Responsible Person *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Production Head"
                    value={newPlan.responsible}
                    onChange={(e) => setNewPlan({ ...newPlan, responsible: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Target Date</label>
                  <input
                    type="text"
                    placeholder="e.g. 31 Dec 2026"
                    value={newPlan.targetDate}
                    onChange={(e) => setNewPlan({ ...newPlan, targetDate: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddPlanModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                >
                  Save Action Plan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
