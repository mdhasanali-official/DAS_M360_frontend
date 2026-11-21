import { useState } from "react";
import {
  Gauge,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  FileCheck2,
  Users,
  Search,
  Filter,
  Download,
  Plus,
  ChevronRight,
  TrendingDown,
  Clock,
  ShieldCheck,
  Calendar,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
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

// Customer Satisfaction Donut Data
const SATISFACTION_PIE_DATA = [
  { name: "Very Satisfied", value: 55, color: "#2563eb" },
  { name: "Satisfied", value: 37, color: "#0ea5e9" },
  { name: "Neutral", value: 5, color: "#f59e0b" },
  { name: "Dissatisfied", value: 2, color: "#f97316" },
  { name: "Very Dissatisfied", value: 1, color: "#ef4444" },
];

// Customer Satisfaction Trend Line Data (Jan to Jun)
const SATISFACTION_TREND_DATA = [
  { month: "Jan", score: 80 },
  { month: "Feb", score: 85 },
  { month: "Mar", score: 87 },
  { month: "Apr", score: 89 },
  { month: "May", score: 90 },
  { month: "Jun", score: 92 },
];

// Process Performance Bar Chart Data
const PROCESS_PERFORMANCE_DATA = [
  { name: "Production Eff.", target: 95, actual: 92 },
  { name: "Rejection Rate", target: 80, actual: 40 },
  { name: "On-time Deliv.", target: 95, actual: 88 },
  { name: "Resource Util.", target: 90, actual: 82 },
  { name: "Energy Consump.", target: 90, actual: 85 },
];

// NCR vs Customer Complaints Trend Data
const NCR_COMPLAINT_TREND = [
  { month: "Jan", ncr: 20, complaints: 12 },
  { month: "Feb", ncr: 16, complaints: 9 },
  { month: "Mar", ncr: 14, complaints: 7 },
  { month: "Apr", ncr: 11, complaints: 6 },
  { month: "May", ncr: 9, complaints: 5 },
  { month: "Jun", ncr: 7, complaints: 3 },
];

// Top 5 Issues
const TOP_ISSUES_DATA = [
  { issue: "Late Delivery", percentage: 35, color: "bg-rose-500" },
  { issue: "Process Variation", percentage: 25, color: "bg-amber-500" },
  { issue: "Machine Breakdown", percentage: 15, color: "bg-orange-500" },
  { issue: "Raw Material Quality", percentage: 12, color: "bg-sky-500" },
  { issue: "Human Error", percentage: 10, color: "bg-blue-600" },
];

export default function Performance() {
  const [selectedAuditFilter, setSelectedAuditFilter] = useState("All");

  return (
    <div className="w-full space-y-5 pb-8 font-sans text-slate-800">
      {/* 1. TOP HEADER BANNER (Performance Evaluation Module - Clause 9) */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 rounded-xl bg-white/20 backdrop-blur-md">
              <Gauge className="w-6 h-6 text-white" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Performance Evaluation Module
            </h1>
            <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold tracking-wide uppercase">
              ISO 9001:2015 Clause 9
            </span>
          </div>
          <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed max-w-2xl">
            Monitor • Measure • Analyse • Evaluate • Internal Audit (9.2) • Management Review (9.3)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => toast.success("Scheduling QMS Internal Audit...")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm shadow-md transition"
          >
            <Plus className="w-4 h-4" />
            <span>Schedule Audit</span>
          </button>

          <button
            onClick={() => toast.success("Generating Comprehensive Evaluation Report (PDF)...")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-800/80 hover:bg-blue-900 text-white font-semibold text-sm border border-white/20 shadow transition"
          >
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* 2. TOP 6 STAT CARDS (Exact match from screenshot) */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3.5">
        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total KPIs</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">24</p>
            <p className="text-[11px] text-emerald-600 font-bold mt-0.5">18 On Track</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">KPI Achievement</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">87%</p>
            <p className="text-[11px] text-blue-600 font-bold mt-0.5">↑ 6% vs Last Month</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Satisfaction</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">92%</p>
            <p className="text-[11px] text-emerald-600 font-bold mt-0.5">Target ≥ 90%</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <FileCheck2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Internal Audit</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">3</p>
            <p className="text-[11px] text-amber-600 font-bold mt-0.5">Open NCs</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nonconformities</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">5</p>
            <p className="text-[11px] text-emerald-600 font-bold mt-0.5">↓ 38% vs Last Month</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mgmt Review</p>
            <p className="text-sm font-black text-slate-900 mt-1">On Schedule</p>
            <p className="text-[10px] text-slate-400 mt-0.5">20 Nov 2026</p>
          </div>
        </div>
      </div>

      {/* 3. SECTION 1 & 2: KPI MONITORING (9.1) + CUSTOMER SATISFACTION (9.1.2) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: KPI Monitoring Table (Col 6) */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                9.1
              </span>
              <h2 className="text-base font-bold text-slate-900">
                KPI Monitoring (Clause 9.1)
              </h2>
            </div>
            <button
              onClick={() => toast("All organizational KPIs opened", { icon: "📊" })}
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              View All
            </button>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-700 font-semibold text-[11px] border-b border-slate-200">
                  <th className="py-2.5 px-3 w-8">#</th>
                  <th className="py-2.5 px-3">KPI Indicator</th>
                  <th className="py-2.5 px-3 text-center">Target</th>
                  <th className="py-2.5 px-3 text-center">Actual</th>
                  <th className="py-2.5 px-3 text-center">Status</th>
                  <th className="py-2.5 px-3 text-center">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-blue-50/30">
                  <td className="py-3 px-3 text-slate-400">01</td>
                  <td className="py-3 px-3 font-bold text-slate-800">Customer Satisfaction</td>
                  <td className="py-3 px-3 text-center font-medium text-slate-600">≥ 90%</td>
                  <td className="py-3 px-3 text-center font-bold text-emerald-600">92%</td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      On Track
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center text-emerald-600 font-bold">
                    <ArrowUpRight className="w-4 h-4 inline" />
                  </td>
                </tr>
                <tr className="hover:bg-blue-50/30">
                  <td className="py-3 px-3 text-slate-400">02</td>
                  <td className="py-3 px-3 font-bold text-slate-800">On-time Delivery (OTD)</td>
                  <td className="py-3 px-3 text-center font-medium text-slate-600">≥ 95%</td>
                  <td className="py-3 px-3 text-center font-bold text-amber-600">88%</td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                      At Risk
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center text-amber-600 font-bold">
                    <ArrowDownRight className="w-4 h-4 inline" />
                  </td>
                </tr>
                <tr className="hover:bg-blue-50/30">
                  <td className="py-3 px-3 text-slate-400">03</td>
                  <td className="py-3 px-3 font-bold text-slate-800">Product Conformity Rate</td>
                  <td className="py-3 px-3 text-center font-medium text-slate-600">≥ 98%</td>
                  <td className="py-3 px-3 text-center font-bold text-emerald-600">97%</td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      On Track
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center text-emerald-600 font-bold">
                    <ArrowUpRight className="w-4 h-4 inline" />
                  </td>
                </tr>
                <tr className="hover:bg-blue-50/30">
                  <td className="py-3 px-3 text-slate-400">04</td>
                  <td className="py-3 px-3 font-bold text-slate-800">NCR Defect Rate</td>
                  <td className="py-3 px-3 text-center font-medium text-slate-600">≤ 3%</td>
                  <td className="py-3 px-3 text-center font-bold text-emerald-600">2.1%</td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      On Track
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center text-emerald-600 font-bold">
                    <ArrowUpRight className="w-4 h-4 inline" />
                  </td>
                </tr>
                <tr className="hover:bg-blue-50/30">
                  <td className="py-3 px-3 text-slate-400">05</td>
                  <td className="py-3 px-3 font-bold text-slate-800">Employee Competency</td>
                  <td className="py-3 px-3 text-center font-medium text-slate-600">≥ 90%</td>
                  <td className="py-3 px-3 text-center font-bold text-amber-600">85%</td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                      At Risk
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center text-amber-600 font-bold">
                    <ArrowDownRight className="w-4 h-4 inline" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Customer Satisfaction & Trend (Col 6) */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                9.1.2
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Customer Satisfaction (Clause 9.1.2)
              </h3>
            </div>
            <span className="text-xs font-bold text-blue-600">92% Overall</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            {/* Donut Chart */}
            <div className="sm:col-span-5 relative w-36 h-36 mx-auto">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={SATISFACTION_PIE_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={56}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {SATISFACTION_PIE_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-black text-slate-900 leading-none">92%</span>
                <span className="text-[9px] font-semibold text-slate-400 mt-0.5">Satisfaction</span>
              </div>
            </div>

            {/* Satisfaction Trend Line Chart */}
            <div className="sm:col-span-7 h-36">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Satisfaction Trend (Last 6 Months)
              </p>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={SATISFACTION_TREND_DATA} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#64748b" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 9, fill: "#64748b" }} axisLine={false} tickLine={false} domain={[70, 100]} />
                  <Tooltip contentStyle={{ backgroundColor: "#ffffff", borderRadius: "8px", fontSize: "11px" }} />
                  <Line type="monotone" dataKey="score" stroke="#10b981" strokeWidth={2.5} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-1 text-center text-[10px] font-medium pt-3 border-t border-slate-100">
            <div>
              <p className="font-bold text-blue-600">55%</p>
              <p className="text-slate-400 text-[9px]">Very Satisfied</p>
            </div>
            <div>
              <p className="font-bold text-sky-500">37%</p>
              <p className="text-slate-400 text-[9px]">Satisfied</p>
            </div>
            <div>
              <p className="font-bold text-amber-500">5%</p>
              <p className="text-slate-400 text-[9px]">Neutral</p>
            </div>
            <div>
              <p className="font-bold text-orange-500">2%</p>
              <p className="text-slate-400 text-[9px]">Dissatisfied</p>
            </div>
            <div>
              <p className="font-bold text-rose-500">1%</p>
              <p className="text-slate-400 text-[9px]">V. Dissatisfied</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SECTION 3, 4, 5: INTERNAL AUDIT (9.2), PROCESS PERF & COMPLIANCE (9.1) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Internal Audit Table (Clause 9.2) (Col 5) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                9.2
              </span>
              <h3 className="text-xs font-bold text-slate-900 uppercase">
                Internal Audit Schedule (Clause 9.2)
              </h3>
            </div>
            <button
              onClick={() => toast("Full Audit Schedule opened", { icon: "📋" })}
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              View All
            </button>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-700 font-semibold text-[10px] border-b border-slate-200">
                  <th className="py-2 px-3">Audit Area</th>
                  <th className="py-2 px-3">Plan Date</th>
                  <th className="py-2 px-3 text-center">Status</th>
                  <th className="py-2 px-2 text-center">Find.</th>
                  <th className="py-2 px-2 text-center">NC</th>
                  <th className="py-2 px-2 text-center">CAPA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[11px]">
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-semibold text-slate-800">Quality Management</td>
                  <td className="py-2.5 px-3 text-slate-500">10 Jan 2026</td>
                  <td className="py-2.5 px-3 text-center">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">Completed</span>
                  </td>
                  <td className="py-2.5 px-2 text-center font-bold">5</td>
                  <td className="py-2.5 px-2 text-center font-bold text-rose-600">1</td>
                  <td className="py-2.5 px-2 text-center font-bold text-blue-600">1</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-semibold text-slate-800">Production Facility</td>
                  <td className="py-2.5 px-3 text-slate-500">15 Feb 2026</td>
                  <td className="py-2.5 px-3 text-center">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">Completed</span>
                  </td>
                  <td className="py-2.5 px-2 text-center font-bold">3</td>
                  <td className="py-2.5 px-2 text-center font-bold text-slate-400">0</td>
                  <td className="py-2.5 px-2 text-center font-bold text-slate-400">0</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-semibold text-slate-800">HR & Competency</td>
                  <td className="py-2.5 px-3 text-slate-500">12 Mar 2026</td>
                  <td className="py-2.5 px-3 text-center">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">Completed</span>
                  </td>
                  <td className="py-2.5 px-2 text-center font-bold">4</td>
                  <td className="py-2.5 px-2 text-center font-bold text-rose-600">1</td>
                  <td className="py-2.5 px-2 text-center font-bold text-blue-600">1</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-semibold text-slate-800">Maintenance & Tools</td>
                  <td className="py-2.5 px-3 text-slate-500">18 Apr 2026</td>
                  <td className="py-2.5 px-3 text-center">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800">In Progress</span>
                  </td>
                  <td className="py-2.5 px-2 text-center text-slate-400">-</td>
                  <td className="py-2.5 px-2 text-center text-slate-400">-</td>
                  <td className="py-2.5 px-2 text-center text-slate-400">-</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-semibold text-slate-800">Food Safety & Hygiene</td>
                  <td className="py-2.5 px-3 text-slate-500">20 May 2026</td>
                  <td className="py-2.5 px-3 text-center">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-600">Planned</span>
                  </td>
                  <td className="py-2.5 px-2 text-center text-slate-400">-</td>
                  <td className="py-2.5 px-2 text-center text-slate-400">-</td>
                  <td className="py-2.5 px-2 text-center text-slate-400">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Process Performance Bar Chart (Col 4) */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Process Performance (9.1)
            </h3>
            <span className="text-[10px] text-slate-400">Target vs Actual</span>
          </div>

          <div className="w-full h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PROCESS_PERFORMANCE_DATA} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fontSize: 9, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 9, fill: "#64748b" }} axisLine={false} tickLine={false} domain={[0, 100]} />
                <Tooltip contentStyle={{ backgroundColor: "#ffffff", borderRadius: "8px", fontSize: "11px" }} />
                <Bar dataKey="target" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={8} />
                <Bar dataKey="actual" fill="#10b981" radius={[4, 4, 0, 0]} barSize={8} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center gap-4 text-[10px] font-bold pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1 text-blue-600"><span className="w-2 h-2 rounded-sm bg-blue-600" /> Target</span>
            <span className="flex items-center gap-1 text-emerald-600"><span className="w-2 h-2 rounded-sm bg-emerald-500" /> Actual</span>
          </div>
        </div>

        {/* Compliance Evaluation Checklist (Col 3) */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Compliance Evaluation
            </h3>
            <span className="text-[10px] text-emerald-600 font-bold">100% OK</span>
          </div>

          <div className="space-y-2 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Legal & Regulatory Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Customer Contract Terms</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Food Safety / Halal Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Contractual Requirements</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Internal QMS Requirements</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Compliance Evaluation Records</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. SECTION 6, 7, 8: ANALYSIS & EVALUATION, MANAGEMENT REVIEW, PERFORMANCE GAUGES */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Analysis & Evaluation: Top Issues + NCR Trend (Col 4) */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Analysis & Evaluation (9.1.3)
            </h3>
            <span className="text-[10px] text-slate-400">Last 6 Months</span>
          </div>

          {/* Top 5 Issues Progress */}
          <div className="space-y-1.5 mb-3">
            <p className="text-[10px] font-bold text-slate-500 uppercase">Top 5 Issues Reported</p>
            {TOP_ISSUES_DATA.map((iss) => (
              <div key={iss.issue} className="flex items-center gap-2 text-[11px]">
                <span className="w-28 text-slate-700 truncate">{iss.issue}</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div style={{ width: `${iss.percentage * 2}%` }} className={`h-full rounded-full ${iss.color}`} />
                </div>
                <span className="w-7 text-right font-bold text-slate-700">{iss.percentage}%</span>
              </div>
            ))}
          </div>

          {/* NCR Trend Line */}
          <div className="pt-2 border-t border-slate-100">
            <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">NCRs vs Customer Complaints</p>
            <div className="w-full h-24">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={NCR_COMPLAINT_TREND} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
                  <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#64748b" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 9, fill: "#64748b" }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: "#ffffff", borderRadius: "8px", fontSize: "10px" }} />
                  <Line type="monotone" dataKey="ncr" stroke="#ef4444" strokeWidth={2} dot={{ r: 2 }} />
                  <Line type="monotone" dataKey="complaints" stroke="#3b82f6" strokeWidth={2} dot={{ r: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Management Review Meetings Table (Clause 9.3) (Col 4) */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase">
              Management Review (Clause 9.3)
            </h3>
            <span className="text-[10px] text-blue-600 font-bold">2026 Meetings</span>
          </div>

          <div className="space-y-2 text-xs flex-1">
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800">15 Jan 2026</p>
                <p className="text-[10px] text-slate-500">Audit Result, KPI, NCRs</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">Completed</span>
            </div>

            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800">20 Apr 2026</p>
                <p className="text-[10px] text-slate-500">Customer Feedback, Risk</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">Completed</span>
            </div>

            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800">20 Jul 2026</p>
                <p className="text-[10px] text-slate-500">Resource, Opportunities</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">In Progress</span>
            </div>

            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800">20 Nov 2026</p>
                <p className="text-[10px] text-slate-500">Overall Annual Performance</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">Planned</span>
            </div>
          </div>
        </div>

        {/* Performance Dashboard Summary Gauges (Col 4) */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase">
              Performance Dashboard (This Year)
            </h3>
            <span className="text-[10px] text-emerald-600 font-bold">2026</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs py-1">
            <div className="p-2 rounded-xl bg-blue-50/50 border border-blue-100">
              <p className="text-lg font-black text-blue-700">87%</p>
              <p className="text-[10px] text-slate-500 font-semibold">KPI Target: 90%</p>
            </div>
            <div className="p-2 rounded-xl bg-emerald-50/50 border border-emerald-100">
              <p className="text-lg font-black text-emerald-700">92%</p>
              <p className="text-[10px] text-slate-500 font-semibold">Satisfaction: 90%</p>
            </div>
            <div className="p-2 rounded-xl bg-teal-50/50 border border-teal-100">
              <p className="text-lg font-black text-teal-700">98%</p>
              <p className="text-[10px] text-slate-500 font-semibold">Conformity: 98%</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center text-xs pt-1">
            <div className="p-2 rounded-xl bg-purple-50/50 border border-purple-100">
              <p className="text-lg font-black text-purple-700">2.1%</p>
              <p className="text-[10px] text-slate-500 font-semibold">NCR Rate (Target ≤3%)</p>
            </div>
            <div className="p-2 rounded-xl bg-rose-50/50 border border-rose-100">
              <p className="text-lg font-black text-rose-700">88%</p>
              <p className="text-[10px] text-slate-500 font-semibold">On-time Deliv. (95%)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
