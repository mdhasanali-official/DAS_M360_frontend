import { useState } from "react";
import {
  Award,
  Users,
  FileText,
  Target,
  BarChart3,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Plus,
  Download,
  Edit3,
  ChevronRight,
  ArrowRight,
  GitFork,
  Briefcase,
  UserCheck,
  PieChart as PieIcon,
} from "lucide-react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { toast } from "react-hot-toast";

// Leadership Performance Donut Data (92% Overall Commitment Achievement)
const LEADERSHIP_PERF_DATA = [
  { name: "Policy & Direction", value: 20, color: "#2563eb", rate: "100%" },
  { name: "Objectives Achieved", value: 17, color: "#10b981", rate: "85%" },
  { name: "Resource Support", value: 18, color: "#f59e0b", rate: "90%" },
  { name: "Review & Evaluation", value: 17, color: "#8b5cf6", rate: "88%" },
  { name: "Improvement Actions", value: 19, color: "#ef4444", rate: "95%" },
];

export default function Leadership() {
  const [isEditPolicyOpen, setIsEditPolicyOpen] = useState(false);
  const [qualityPolicy, setQualityPolicy] = useState(
    "We are committed to providing products and services that consistently meet customer requirements, comply with applicable statutory and regulatory requirements, and continually improve our quality management system and organizational performance."
  );

  return (
    <div className="w-full space-y-5 pb-8 font-sans text-slate-800">
      {/* 1. TOP HEADER BANNER (Leadership Module - Clause 5) */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 rounded-xl bg-white/20 backdrop-blur-md">
              <Award className="w-6 h-6 text-white" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Leadership Module
            </h1>
            <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold tracking-wide uppercase">
              ISO 9001:2015 Clause 5
            </span>
          </div>
          <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed max-w-2xl">
            Direction • Commitment (5.1) • Quality Policy (5.2) • Roles, Responsibilities & Authorities (5.3)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsEditPolicyOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm shadow-md transition"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit Policy</span>
          </button>

          <button
            onClick={() => toast.success("Generating Leadership Commitment Report (PDF)...")}
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
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Policies</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">5</p>
            <p className="text-[11px] text-blue-600 font-bold mt-0.5">Active</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Quality Objectives</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">8</p>
            <p className="text-[11px] text-emerald-600 font-bold mt-0.5">On Track</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
            <GitFork className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Responsibilities</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">24</p>
            <p className="text-[11px] text-orange-600 font-bold mt-0.5">Defined</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Leadership Meetings</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">12</p>
            <p className="text-[11px] text-purple-600 font-bold mt-0.5">This Year</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5 col-span-2 sm:col-span-1">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Performance</p>
            <p className="text-xl font-black text-amber-600 mt-0.5">92%</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Achievement</p>
          </div>
        </div>
      </div>

      {/* 3. SECTION 1 & 2: LEADERSHIP OVERVIEW (5.1) + QUALITY POLICY (5.2) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Leadership Overview (Col 6) */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100 mb-3">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                5.1
              </span>
              <h2 className="text-base font-bold text-slate-900">
                Leadership & Commitment Overview
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Top management demonstrates commitment by establishing organizational direction, setting verified quality policies, assigning departmental roles, and driving a company-wide culture of continual improvement.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
              <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200 text-center">
                <FileText className="w-4 h-4 text-rose-600 mx-auto mb-1" />
                <p className="text-xs font-bold text-slate-800">Drive Policy</p>
                <p className="text-[9px] text-slate-500 mt-0.5">& Direction</p>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-center">
                <Target className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                <p className="text-xs font-bold text-slate-800">Set Objectives</p>
                <p className="text-[9px] text-slate-500 mt-0.5">& Review</p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-center">
                <Users className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                <p className="text-xs font-bold text-slate-800">Assign Roles</p>
                <p className="text-[9px] text-slate-500 mt-0.5">& Authorities</p>
              </div>

              <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-center">
                <BarChart3 className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                <p className="text-xs font-bold text-slate-800">Monitor</p>
                <p className="text-[9px] text-slate-500 mt-0.5">Performance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quality Policy (Clause 5.2) (Col 6) */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between relative overflow-hidden">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  5.2
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  Quality Policy Statement
                </h3>
              </div>
              <button
                onClick={() => setIsEditPolicyOpen(true)}
                className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
              >
                <Edit3 className="w-3.5 h-3.5" /> Edit
              </button>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 relative mb-3">
              <span className="text-3xl text-blue-300 font-serif absolute top-1 left-2 select-none">&ldquo;</span>
              <p className="text-xs sm:text-sm text-slate-700 italic pl-5 leading-relaxed">
                {qualityPolicy}
              </p>
              <span className="text-3xl text-blue-300 font-serif absolute bottom-0 right-2 select-none">&rdquo;</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs pt-2 border-t border-slate-100">
              <div>
                <p className="font-bold text-slate-800">Version 02</p>
                <p className="text-[10px] text-slate-400">Policy Revision</p>
              </div>
              <div>
                <p className="font-bold text-slate-800">01 Jan 2025</p>
                <p className="text-[10px] text-slate-400">Effective Date</p>
              </div>
              <div>
                <p className="font-bold text-slate-800">31 Dec 2026</p>
                <p className="text-[10px] text-slate-400">Next Review</p>
              </div>
              <div>
                <p className="font-bold text-emerald-600">Managing Director</p>
                <p className="text-[10px] text-slate-400">Approved By</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SECTION 3 & 4: QUALITY OBJECTIVES + ORG STRUCTURE & RESPONSIBILITIES (5.3) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Quality Objectives (Col 6) */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
            <h3 className="text-base font-bold text-slate-900">
              Quality Objectives (Clause 5.2 & 6.2)
            </h3>
            <span className="text-xs font-semibold text-emerald-600">Active Goals</span>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-700 font-semibold text-[11px] border-b border-slate-200">
                  <th className="py-2.5 px-3">Objective</th>
                  <th className="py-2.5 px-3 text-center">Target</th>
                  <th className="py-2.5 px-3 text-center">Status</th>
                  <th className="py-2.5 px-3 text-center">Progress</th>
                  <th className="py-2.5 px-3 text-center">Due Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-blue-50/30">
                  <td className="py-3 px-3 font-semibold text-slate-900">Increase customer satisfaction</td>
                  <td className="py-3 px-3 text-center font-medium">≥ 90%</td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">On Track</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <div className="flex items-center gap-1.5 justify-center">
                      <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div style={{ width: "85%" }} className="h-full bg-emerald-500 rounded-full" />
                      </div>
                      <span className="font-bold text-[10px]">85%</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center text-slate-500">31 Dec 2026</td>
                </tr>
                <tr className="hover:bg-blue-50/30">
                  <td className="py-3 px-3 font-semibold text-slate-900">Reduce customer complaints</td>
                  <td className="py-3 px-3 text-center font-medium">≤ 5/yr</td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">On Track</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <div className="flex items-center gap-1.5 justify-center">
                      <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div style={{ width: "60%" }} className="h-full bg-blue-500 rounded-full" />
                      </div>
                      <span className="font-bold text-[10px]">60%</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center text-slate-500">31 Dec 2026</td>
                </tr>
                <tr className="hover:bg-blue-50/30">
                  <td className="py-3 px-3 font-semibold text-slate-900">Improve on-time delivery</td>
                  <td className="py-3 px-3 text-center font-medium">≥ 95%</td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">At Risk</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <div className="flex items-center gap-1.5 justify-center">
                      <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div style={{ width: "70%" }} className="h-full bg-amber-500 rounded-full" />
                      </div>
                      <span className="font-bold text-[10px]">70%</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center text-slate-500">31 Dec 2026</td>
                </tr>
                <tr className="hover:bg-blue-50/30">
                  <td className="py-3 px-3 font-semibold text-slate-900">Achieve zero major NC in audits</td>
                  <td className="py-3 px-3 text-center font-medium">0</td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">On Track</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <div className="flex items-center gap-1.5 justify-center">
                      <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div style={{ width: "100%" }} className="h-full bg-emerald-500 rounded-full" />
                      </div>
                      <span className="font-bold text-[10px]">100%</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center text-slate-500">31 Dec 2026</td>
                </tr>
                <tr className="hover:bg-blue-50/30">
                  <td className="py-3 px-3 font-semibold text-slate-900">Improve employee competency</td>
                  <td className="py-3 px-3 text-center font-medium">≥ 90%</td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">On Track</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <div className="flex items-center gap-1.5 justify-center">
                      <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div style={{ width: "80%" }} className="h-full bg-blue-500 rounded-full" />
                      </div>
                      <span className="font-bold text-[10px]">80%</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center text-slate-500">31 Dec 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Organization Structure & Hierarchy (Clause 5.3) (Col 6) */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                5.3
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Organization Structure & Responsibilities
              </h3>
            </div>
            <button
              onClick={() => toast("Full organogram chart opened", { icon: "🏛️" })}
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              View Details
            </button>
          </div>

          {/* Org Chart Visual Tree */}
          <div className="space-y-3 my-2">
            {/* Top Node */}
            <div className="p-3 rounded-xl bg-blue-900 text-white text-center shadow-sm max-w-sm mx-auto">
              <p className="text-xs font-black tracking-wide">Managing Director (MD)</p>
              <p className="text-[10px] text-blue-200">Leadership & Strategic Direction</p>
            </div>

            {/* Department Nodes (4 Columns) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-200 text-center">
                <p className="text-[11px] font-bold text-sky-900">Quality Management</p>
                <p className="text-[9px] text-sky-700 mt-0.5">QMS Oversight</p>
                <div className="mt-2 text-[9px] text-slate-500 text-left space-y-0.5">
                  <p>• QMS Policy</p>
                  <p>• Objectives</p>
                  <p>• MS Performance</p>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-center">
                <p className="text-[11px] font-bold text-emerald-900">Operations</p>
                <p className="text-[9px] text-emerald-700 mt-0.5">Process Execution</p>
                <div className="mt-2 text-[9px] text-slate-500 text-left space-y-0.5">
                  <p>• Production/Service</p>
                  <p>• Process Mgmt</p>
                  <p>• Operational Control</p>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-center">
                <p className="text-[11px] font-bold text-amber-900">Human Resources</p>
                <p className="text-[9px] text-amber-700 mt-0.5">Competency & People</p>
                <div className="mt-2 text-[9px] text-slate-500 text-left space-y-0.5">
                  <p>• Competency</p>
                  <p>• Training</p>
                  <p>• Awareness</p>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-purple-50 border border-purple-200 text-center">
                <p className="text-[11px] font-bold text-purple-900">Finance & Admin</p>
                <p className="text-[9px] text-purple-700 mt-0.5">Resource Planning</p>
                <div className="mt-2 text-[9px] text-slate-500 text-left space-y-0.5">
                  <p>• Budgeting</p>
                  <p>• Financial Support</p>
                  <p>• Resource Mgmt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. SECTION 5, 6, 7: MEETINGS TABLE + ACTIONS + PERFORMANCE DONUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Leadership Meetings (Col 4) */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Leadership Meetings (2026)
            </h3>
            <span className="text-[10px] text-blue-600 font-bold">Scheduled</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800">15 Jan 2026</p>
                <p className="text-[10px] text-slate-500">QMS Performance, KPI review</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">Completed</span>
            </div>

            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800">20 Apr 2026</p>
                <p className="text-[10px] text-slate-500">Policy & Objectives review</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">Completed</span>
            </div>

            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800">18 Jul 2026</p>
                <p className="text-[10px] text-slate-500">Audit results, improvement</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">In Progress</span>
            </div>

            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800">20 Oct 2026</p>
                <p className="text-[10px] text-slate-500">Resource needs, risk review</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">Planned</span>
            </div>
          </div>
        </div>

        {/* Leadership Actions & Follow-up (Col 4) */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Leadership Actions & Follow-up
            </h3>
            <span className="text-[10px] text-emerald-600 font-bold">5 Tasks</span>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800 text-[11px]">Review Quality Policy</p>
                <p className="text-[9px] text-slate-400">MD • Target: 31 Jan 2026</p>
              </div>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">Completed</span>
            </div>

            <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800 text-[11px]">Update Org. Structure</p>
                <p className="text-[9px] text-slate-400">HR Manager • Target: 28 Feb 2026</p>
              </div>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800">In Progress</span>
            </div>

            <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800 text-[11px]">Set 2026 Quality Objectives</p>
                <p className="text-[9px] text-slate-400">Management • Target: 31 Jan 2026</p>
              </div>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">Completed</span>
            </div>

            <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800 text-[11px]">Improve Risk Management Plan</p>
                <p className="text-[9px] text-slate-400">QMS Team • Target: 30 Mar 2026</p>
              </div>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800">In Progress</span>
            </div>

            <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800 text-[11px]">Conduct Management Review</p>
                <p className="text-[9px] text-slate-400">MD • Target: 20 Jul 2026</p>
              </div>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-100 text-blue-800">Planned</span>
            </div>
          </div>
        </div>

        {/* Leadership Commitment Performance Donut (Col 4) */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-1 border-b border-slate-100 mb-1">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Leadership Commitment Rate
            </h3>
            <span className="text-[10px] text-slate-500 font-semibold">2026</span>
          </div>

          <div className="relative w-32 h-32 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={LEADERSHIP_PERF_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={36}
                  outerRadius={50}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {LEADERSHIP_PERF_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xl font-black text-slate-900 leading-none">92%</span>
              <span className="text-[9px] font-semibold text-slate-400 mt-0.5">Commitment</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-1 text-[10px]">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-blue-600" /> Policy & Direction
              </span>
              <span className="font-bold text-slate-900">100%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Objectives Achieved
              </span>
              <span className="font-bold text-slate-900">85%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> Resource Support
              </span>
              <span className="font-bold text-slate-900">90%</span>
            </div>
          </div>
        </div>
      </div>

      {/* EDIT QUALITY POLICY MODAL */}
      {isEditPolicyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">Edit Quality Policy Statement</h3>
              <button
                onClick={() => setIsEditPolicyOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 mt-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Policy Statement (Clause 5.2) *
                </label>
                <textarea
                  rows={4}
                  value={qualityPolicy}
                  onChange={(e) => setQualityPolicy(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 leading-relaxed"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsEditPolicyOpen(false)}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditPolicyOpen(false);
                    toast.success("Quality Policy updated & recorded!");
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                >
                  Save Policy Statement
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
