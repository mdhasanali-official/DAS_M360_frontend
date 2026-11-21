import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  CheckSquare,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Target,
  MoreVertical,
  Calendar,
  ChevronDown,
  Search,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Activity,
  Zap,
  Award,
  FileText,
} from "lucide-react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { toast } from "react-hot-toast";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const today = new Date();
  const defaultFormattedDate = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [searchEmployee, setSearchEmployee] = useState("");
  const [selectedDate, setSelectedDate] = useState(defaultFormattedDate);

  // Monthly Execution Trajectory (Past Month -> Current Month -> Next Month -> Target)
  const monthlyTrajectory = [
    {
      period: "Last Month (Oct)",
      shortName: "Oct (Past)",
      score: 62,
      target: 70,
      tasks: 84,
      status: "Completed",
      fill: "#94a3b8", // Slate
      badge: "62% (Baseline)",
      desc: "Baseline QMS setup & initial gap assessment",
    },
    {
      period: "This Month (Nov)",
      shortName: "Nov (Current)",
      score: 78,
      target: 85,
      tasks: 102,
      status: "Active Position",
      fill: "#2563eb", // Royal Blue
      badge: "78% (Active)",
      desc: "Process standardization & automation trials",
    },
    {
      period: "Next Month (Dec)",
      shortName: "Dec (Next Month)",
      score: 88,
      target: 88,
      tasks: 130,
      status: "Projected Target",
      fill: "#10b981", // Emerald
      badge: "88% (Target)",
      desc: "CE Mark audit submission & Line 2 robotic arm",
    },
    {
      period: "Q1 Target (Jan)",
      shortName: "Jan (Future Goal)",
      score: 95,
      target: 95,
      tasks: 156,
      status: "Final Target",
      fill: "#6366f1", // Indigo
      badge: "95% (Target)",
      desc: "Full certification & $120K lean scrap reduction",
    },
  ];

  // Top 6 Stat Cards Data (Exact from screenshot)
  const stats = [
    {
      title: "Total Employees",
      value: "48",
      change: "↑ 2%",
      subtitle: "vs last month",
      iconBg: "bg-blue-600",
      icon: Users,
    },
    {
      title: "Total Tasks Today",
      value: "156",
      change: "↑ 8%",
      subtitle: "vs yesterday",
      iconBg: "bg-emerald-500",
      icon: CheckSquare,
    },
    {
      title: "Completed Tasks",
      value: "102",
      change: "65.4%",
      subtitle: "completion rate",
      iconBg: "bg-sky-500",
      icon: CheckCircle2,
    },
    {
      title: "Pending Tasks",
      value: "42",
      change: "26.9%",
      subtitle: "of total tasks",
      iconBg: "bg-amber-500",
      icon: Clock,
    },
    {
      title: "Overdue Tasks",
      value: "12",
      change: "7.7%",
      subtitle: "of total tasks",
      iconBg: "bg-red-500",
      icon: AlertTriangle,
    },
    {
      title: "Overall KPI Achievement",
      value: "78%",
      change: "↑ 6%",
      subtitle: "vs last month",
      iconBg: "bg-purple-600",
      icon: Target,
    },
  ];

  // Task Status Overview Donut Data
  const taskStatusData = [
    { name: "Completed", value: 102, percentage: "65.4%", color: "#10b981" },
    { name: "In Progress", value: 30, percentage: "19.2%", color: "#06b6d4" },
    { name: "Overdue", value: 12, percentage: "7.7%", color: "#ef4444" },
    { name: "Not Started", value: 12, percentage: "7.7%", color: "#cbd5e1" },
  ];

  // Department-wise Task Completion Data (Stacked % bars)
  const deptTaskData = [
    { dept: "Management", completed: 82, progress: 10, overdue: 4, notStarted: 4 },
    { dept: "Sales & Marketing", completed: 76, progress: 14, overdue: 5, notStarted: 5 },
    { dept: "Procurement", completed: 68, progress: 18, overdue: 8, notStarted: 6 },
    { dept: "Production", completed: 62, progress: 22, overdue: 10, notStarted: 6 },
    { dept: "Quality Control", completed: 85, progress: 10, overdue: 3, notStarted: 2 },
    { dept: "HR & Admin", completed: 70, progress: 18, overdue: 6, notStarted: 6 },
    { dept: "Finance", completed: 78, progress: 12, overdue: 5, notStarted: 5 },
    { dept: "Logistics", completed: 65, progress: 20, overdue: 10, notStarted: 5 },
  ];

  // Department-wise KPI Achievement Data
  const deptKpiData = [
    { dept: "Management", percentage: 90 },
    { dept: "Sales & Marketing", percentage: 82 },
    { dept: "Procurement", percentage: 75 },
    { dept: "Production", percentage: 68 },
    { dept: "Quality Control", percentage: 88 },
    { dept: "HR & Admin", percentage: 72 },
    { dept: "Finance", percentage: 80 },
    { dept: "Logistics", percentage: 70 },
  ];

  // Employees Table Data (Exact from screenshot)
  const employees = [
    {
      id: 1,
      name: "Imran Hossain",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      department: "Sales & Marketing",
      assigned: 8,
      completed: 6,
      pending: 1,
      overdue: 1,
      completion: 75,
      target: 100,
      achieved: 78,
      status: "On Track",
    },
    {
      id: 2,
      name: "Sadiya Akter",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      department: "Procurement",
      assigned: 10,
      completed: 7,
      pending: 2,
      overdue: 1,
      completion: 70,
      target: 100,
      achieved: 72,
      status: "On Track",
    },
    {
      id: 3,
      name: "Rafiq Islam",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      department: "Production",
      assigned: 12,
      completed: 8,
      pending: 3,
      overdue: 1,
      completion: 67,
      target: 100,
      achieved: 65,
      status: "At Risk",
    },
    {
      id: 4,
      name: "Mitu Rahman",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      department: "Quality Control",
      assigned: 8,
      completed: 7,
      pending: 1,
      overdue: 0,
      completion: 88,
      target: 100,
      achieved: 85,
      status: "On Track",
    },
    {
      id: 5,
      name: "Hasan Ali",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80",
      department: "HR & Admin",
      assigned: 6,
      completed: 4,
      pending: 2,
      overdue: 0,
      completion: 67,
      target: 100,
      achieved: 70,
      status: "On Track",
    },
    {
      id: 6,
      name: "Jannatul Islam",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
      department: "Finance",
      assigned: 8,
      completed: 6,
      pending: 2,
      overdue: 0,
      completion: 75,
      target: 100,
      achieved: 80,
      status: "On Track",
    },
    {
      id: 7,
      name: "Karim Uddin",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
      department: "Logistics",
      assigned: 10,
      completed: 5,
      pending: 4,
      overdue: 1,
      completion: 50,
      target: 100,
      achieved: 60,
      status: "At Risk",
    },
    {
      id: 8,
      name: "Nusrat Jahan",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
      department: "Customer Service",
      assigned: 6,
      completed: 5,
      pending: 1,
      overdue: 0,
      completion: 83,
      target: 100,
      achieved: 78,
      status: "On Track",
    },
  ];

  // Filtered employees
  const filteredEmployees = employees.filter((emp) => {
    const matchesDept = selectedDept === "All Departments" || emp.department === selectedDept;
    const matchesSearch = emp.name.toLowerCase().includes(searchEmployee.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchEmployee.toLowerCase());
    return matchesDept && matchesSearch;
  });

  // My Tasks Today (Exact match from screenshot)
  const myTasks = [
    { title: "Client Follow-up", time: "09:00 AM", status: "Completed", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { title: "Prepare Quotation", time: "11:00 AM", status: "In Progress", color: "bg-amber-50 text-amber-700 border-amber-200" },
    { title: "Training Coordination", time: "02:00 PM", status: "Pending", color: "bg-rose-50 text-rose-700 border-rose-200" },
    { title: "Prepare Invoice", time: "04:00 PM", status: "Pending", color: "bg-rose-50 text-rose-700 border-rose-200" },
    { title: "Daily Work Report", time: "05:00 PM", status: "Not Started", color: "bg-slate-100 text-slate-600 border-slate-200" },
  ];

  // Overdue Tasks (Exact match from screenshot)
  const overdueTasks = [
    { title: "Supplier Evaluation", dept: "Procurement", days: "2 days overdue", priority: "High", priorityColor: "bg-red-50 text-red-600 border-red-200" },
    { title: "Machine Maintenance Report", dept: "Production", days: "1 day overdue", priority: "High", priorityColor: "bg-red-50 text-red-600 border-red-200" },
    { title: "Customer Complaint Closure", dept: "Quality Control", days: "3 days overdue", priority: "Medium", priorityColor: "bg-amber-50 text-amber-700 border-amber-200" },
    { title: "Monthly Bank Reconciliation", dept: "Finance", days: "1 day overdue", priority: "Medium", priorityColor: "bg-amber-50 text-amber-700 border-amber-200" },
  ];

  // KPI Progress Monthly Summary (Exact from screenshot: Jan to Oct)
  const monthlyKpiData = [
    { month: "Jan", target: 45, achieved: 40 },
    { month: "Feb", target: 50, achieved: 48 },
    { month: "Mar", target: 55, achieved: 53 },
    { month: "Apr", target: 60, achieved: 57 },
    { month: "May", target: 65, achieved: 62 },
    { month: "Jun", target: 70, achieved: 68 },
    { month: "Jul", target: 75, achieved: 74 },
    { month: "Aug", target: 80, achieved: 81 },
    { month: "Sep", target: 85, achieved: 86 },
    { month: "Oct", target: 90, achieved: 92 },
  ];

  // Top 5 Employees (Exact from screenshot)
  const topEmployees = [
    { id: 1, name: "Mitu Rahman", percentage: 98, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
    { id: 2, name: "Jannatul Islam", percentage: 92, avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" },
    { id: 3, name: "Imran Hossain", percentage: 90, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
    { id: 4, name: "Sadiya Akter", percentage: 88, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" },
    { id: 5, name: "Hasan Ali", percentage: 85, avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80" },
  ];

  // Overall KPI Donut Data (Exact: 78%)
  const overallKpiDonutData = [
    { name: "Achieved", value: 18, color: "#2563eb" },
    { name: "In Progress", value: 4, color: "#f59e0b" },
    { name: "Not Achieved", value: 2, color: "#ef4444" },
  ];

  return (
    <div className="space-y-5 pb-8 font-sans">
      {/* 1. TOP STAT CARDS (6 Cards Row) */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3.5">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-9 h-9 rounded-lg ${s.iconBg} text-white flex items-center justify-center shrink-0 shadow-sm`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-slate-500 truncate leading-tight">{s.title}</p>
                  <p className="text-xl font-bold text-slate-900 leading-none mt-0.5">{s.value}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[11px]">
                <span className="font-bold text-emerald-600">{s.change}</span>
                <span className="text-slate-400 truncate">{s.subtitle}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* STRATEGIC ROADMAP EXECUTION & MONTHLY TRAJECTORY BAR CHART (HIGHLY GRAPHICAL & 100% ENGLISH) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
        {/* Top Header Strip */}
        <div className="p-4 sm:p-5 border-b border-slate-150 bg-slate-50/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-sm shadow-sm shrink-0">
              ISO
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                  Strategic Performance Trajectory & Executive Management Review
                </h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
                  Clause 6.1 • 6.2 • 9.3
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Monthly execution trajectory (Where We Were ➔ Where We Are Now ➔ Where We Will Be Next)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Monthly Trajectory: On-Track (+16% MoM)
            </span>
          </div>
        </div>

        {/* SECTION 1: MONTHLY BAR CHART (WHERE WE WERE -> WHERE WE ARE -> WHERE WE WILL BE) */}
        <div className="p-4 sm:p-5 border-b border-slate-150 bg-gradient-to-b from-white to-slate-50/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            {/* Left 7 Cols: The Interactive Recharts Bar Chart */}
            <div className="lg:col-span-7 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-600" />
                    <span>Monthly Execution Trajectory (Chart Bar)</span>
                  </h3>
                  <span className="text-[11px] text-slate-500 block">
                    Comparing Past Month, Current Month, and Next Month Target Projections
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-500 hidden sm:flex">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded bg-slate-400"></span> Oct (Past)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded bg-blue-600"></span> Nov (Current)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded bg-emerald-500"></span> Dec (Next)
                  </span>
                </div>
              </div>

              {/* Responsive BarChart Container */}
              <div className="h-44 sm:h-48 w-full mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={monthlyTrajectory}
                    margin={{ top: 20, right: 15, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis
                      dataKey="shortName"
                      tick={{ fontSize: 11, fill: "#475569", fontWeight: 600 }}
                      axisLine={{ stroke: "#cbd5e1" }}
                      tickLine={false}
                    />
                    <YAxis
                      domain={[0, 100]}
                      ticks={[0, 25, 50, 75, 100]}
                      tick={{ fontSize: 10, fill: "#94a3b8" }}
                      unit="%"
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-slate-900 text-white text-xs p-3 rounded-xl shadow-xl border border-slate-700 min-w-[210px]">
                              <div className="font-bold text-slate-100 flex items-center justify-between pb-1.5 border-b border-slate-700">
                                <span>{data.period}</span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">
                                  {data.status}
                                </span>
                              </div>
                              <div className="mt-2 space-y-1 text-[11px]">
                                <div className="flex justify-between">
                                  <span className="text-slate-400">Score / Target:</span>
                                  <strong className="text-emerald-400">{data.score}% / {data.target}%</strong>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-slate-400">Tasks Completed:</span>
                                  <strong className="text-slate-200">{data.tasks} of 156</strong>
                                </div>
                                <div className="pt-1.5 border-t border-slate-800 text-[10px] text-slate-300 italic">
                                  {data.desc}
                                </div>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar
                      dataKey="score"
                      radius={[6, 6, 0, 0]}
                      barSize={38}
                    >
                      {monthlyTrajectory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right 5 Cols: Quick Trajectory Highlights Cards */}
            <div className="lg:col-span-5 space-y-2.5">
              {/* Card 1: Last Month (Oct) */}
              <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs shrink-0">
                    Oct
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-slate-900">Where We Were</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-semibold">
                        Last Month
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 block">Baseline QMS setup • 84 tasks</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-black text-slate-700 block">62%</span>
                  <span className="text-[10px] text-slate-400">Completed</span>
                </div>
              </div>

              {/* Card 2: This Month (Nov - Active) */}
              <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    Nov
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-blue-900">Where We Are Now</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-100 text-blue-700 font-bold animate-pulse">
                        Active
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 block">Process standardization • 102 tasks</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-black text-blue-700 block">78%</span>
                  <span className="text-[10px] text-blue-600 font-semibold">+16% Growth</span>
                </div>
              </div>

              {/* Card 3: Next Month (Dec - Projected Target) */}
              <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    Dec
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-emerald-900">Where We Will Be</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-700 font-bold">
                        Target
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 block">CE Mark dossier & Line 2 robotic arm</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-black text-emerald-700 block">88%</span>
                  <span className="text-[10px] text-emerald-600 font-semibold">Milestone Target</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: 3-STAGE DETAILED IMPACT CARDS */}
        <div className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* STAGE 1: CURRENT STATE - WHERE WE ARE NOW */}
          <div className="p-4 rounded-xl border border-blue-200/90 bg-gradient-to-b from-blue-50/40 to-white flex flex-col justify-between shadow-2xs relative">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-blue-100">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                    1
                  </span>
                  <div>
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block leading-none">
                      Current Position
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Where We Are Today
                    </h3>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700">
                  Active
                </span>
              </div>

              {/* Graphic 1: Big Progress Metric */}
              <div className="mt-3.5 p-3 rounded-lg bg-white border border-blue-100">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-blue-600" />
                    Overall KPI Execution
                  </span>
                  <span className="text-sm font-black text-blue-700">78%</span>
                </div>
                <div className="w-full bg-slate-150 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-700"
                    style={{ width: "78%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                  <span>Last Month: 62%</span>
                  <span className="font-semibold text-blue-600">Target: 85% by Q2</span>
                </div>
              </div>

              {/* Graphic 2: Dual Key Indicators */}
              <div className="mt-3 space-y-2">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-800 block">Task Velocity</span>
                      <span className="text-[10px] text-slate-500">102 of 156 tasks closed</span>
                    </div>
                  </div>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] border border-emerald-100">
                    65.4%
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-800 block">Customer CSAT</span>
                      <span className="text-[10px] text-slate-500">Benchmark ≥ 90.0%</span>
                    </div>
                  </div>
                  <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[11px] border border-amber-100">
                    85.0%
                  </span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-blue-100 flex items-center justify-between text-xs">
              <span className="text-[10px] text-slate-400 font-medium">Clause 6.2 Objectives</span>
              <button
                onClick={() => navigate("/admin/planning")}
                className="font-bold text-blue-600 hover:text-blue-800 text-xs inline-flex items-center gap-1 hover:underline"
              >
                <span>Strategic Plan</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* STAGE 2: TARGET DESTINATION - WHERE WE WILL REACH */}
          <div className="p-4 rounded-xl border border-emerald-200/90 bg-gradient-to-b from-emerald-50/40 to-white flex flex-col justify-between shadow-2xs relative">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                    2
                  </span>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block leading-none">
                      Target Milestones
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Where We Will Reach
                    </h3>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Planned Impact
                </span>
              </div>

              {/* Graphic 1: 3 Projected Impact Badges */}
              <div className="mt-3.5 space-y-2">
                <div className="p-2.5 rounded-lg bg-white border border-emerald-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-800 block">Export & Revenue Surge</span>
                      <span className="text-[10px] text-slate-500">CE Mark & Halal Certification</span>
                    </div>
                  </div>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    +18.5%
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-emerald-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-800 block">Cycle Time Reduction</span>
                      <span className="text-[10px] text-slate-500">Line 2 automated robotic packing</span>
                    </div>
                  </div>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    -25.0%
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-emerald-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-800 block">Annual Lean Scrap Savings</span>
                      <span className="text-[10px] text-slate-500">Driven by Kaizen scrap logging</span>
                    </div>
                  </div>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    $120K / ৳1.25M
                  </span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center justify-between text-xs">
              <span className="text-[10px] text-slate-400 font-medium">Clause 10.3 Improvement</span>
              <button
                onClick={() => navigate("/admin/planning")}
                className="font-bold text-emerald-700 hover:text-emerald-900 text-xs inline-flex items-center gap-1 hover:underline"
              >
                <span>Growth Targets</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* STAGE 3: CONTINGENCY & GAP - WHAT IF WE FAIL? */}
          <div className="p-4 rounded-xl border border-rose-200/90 bg-gradient-to-b from-rose-50/40 to-white flex flex-col justify-between shadow-2xs relative">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-rose-100">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold text-xs">
                    3
                  </span>
                  <div>
                    <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider block leading-none">
                      Contingency & Gaps
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      What If We Fail?
                    </h3>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-700">
                  Critical
                </span>
              </div>

              {/* Graphic 1: Risk Severity Meter */}
              <div className="mt-3.5 p-3 rounded-lg bg-white border border-rose-100">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                    Overall Risk Exposure
                  </span>
                  <span className="text-sm font-black text-rose-700">Score: 16 / 25</span>
                </div>
                <div className="w-full bg-slate-150 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-rose-600 h-2.5 rounded-full transition-all duration-700"
                    style={{ width: "64%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                  <span>Low Risk (0-8)</span>
                  <span className="font-semibold text-rose-600">High Risk Threshold</span>
                </div>
              </div>

              {/* Graphic 2: Critical Risk Gaps */}
              <div className="mt-3 space-y-2">
                <div className="p-2.5 rounded-lg bg-white border border-rose-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block">Single-Vendor Bottleneck</span>
                    <span className="text-[10px] text-slate-500">Exclusive steel supplier delay</span>
                  </div>
                  <span className="text-[10px] font-black text-rose-700 bg-rose-50 px-2 py-1 rounded border border-rose-200 text-right">
                    10-15 Days Stoppage
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-rose-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block">12 Overdue Action Items</span>
                    <span className="text-[10px] text-slate-500">Unresolved internal audit items</span>
                  </div>
                  <span className="text-[10px] font-black text-rose-700 bg-rose-50 px-2 py-1 rounded border border-rose-200 text-right">
                    Audit Major NC
                  </span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-rose-100 flex items-center justify-between text-xs">
              <span className="text-[10px] text-slate-400 font-medium">Clause 6.1 Mitigation</span>
              <button
                onClick={() => navigate("/admin/risks")}
                className="font-bold text-rose-600 hover:text-rose-800 text-xs inline-flex items-center gap-1 hover:underline"
              >
                <span>Risk Matrix</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM INTEGRATED EXECUTIVE MRM (CLAUSE 9.3) MEETING CALL & AGENDAS */}
        <div className="p-4 sm:p-5 border-t border-slate-200/80 bg-gradient-to-r from-slate-50 via-amber-50/20 to-slate-50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Visual Date Badge (Left 3 cols) */}
            <div className="lg:col-span-3 flex items-center gap-3 p-3 rounded-xl bg-white border border-amber-200/90 shadow-2xs">
              <div className="w-12 h-12 rounded-lg bg-amber-600 text-white flex flex-col items-center justify-center font-bold shrink-0 shadow-xs">
                <span className="text-[10px] uppercase tracking-wider leading-none">NOV</span>
                <span className="text-xl leading-tight font-black">28</span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-amber-800 uppercase tracking-wide">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  Upcoming MRM Call
                </div>
                <div className="text-xs font-black text-slate-900 mt-0.5">Thursday • 10:30 AM</div>
                <div className="text-[10px] text-slate-500">Boardroom A • Chair: MD</div>
              </div>
            </div>

            {/* Key Agenda Highlights (Middle 6 cols) */}
            <div className="lg:col-span-6 space-y-1.5">
              <span className="text-xs font-bold text-slate-900 block">
                Executive Agenda Items (ISO 9001:2015 Clause 9.3 Review):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-slate-700">
                <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white/80 border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">Approve $240K Automation Capex</span>
                </div>
                <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white/80 border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">Dual-Sourcing Supplier Contracts</span>
                </div>
                <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white/80 border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">Resolve 12 Overdue Corrective Actions</span>
                </div>
                <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white/80 border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">Q2 Surveillance Audit Readiness</span>
                </div>
              </div>
            </div>

            {/* Action Buttons (Right 3 cols) */}
            <div className="lg:col-span-3 flex flex-col gap-2">
              <button
                onClick={() => navigate("/admin/management-review")}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-sm flex items-center justify-center gap-2"
              >
                <span>Open MRM Agenda & Register</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => navigate("/admin/planning")}
                className="w-full py-1.5 px-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-lg text-xs font-semibold transition flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                <span>View Full Strategic Roadmap</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE ROW: 3 VISUAL OVERVIEW CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Card 1: Task Status Overview (Donut Chart) */}
        <div className="lg:col-span-4 bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex flex-col justify-between">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
            Task Status Overview
          </h3>

          <div className="flex items-center justify-center py-2 relative">
            <div className="w-44 h-44 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={taskStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {taskStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-black text-slate-900 leading-none">156</span>
                <span className="text-[10px] font-semibold text-slate-400 mt-0.5">Total Tasks</span>
              </div>
            </div>

            <div className="space-y-1.5 text-xs ml-3">
              {taskStatusData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-slate-600 text-[11px] w-20 truncate">{item.name}</span>
                  <span className="font-bold text-slate-800 text-[11px]">{item.value} ({item.percentage})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2: Department-wise Task Completion */}
        <div className="lg:col-span-4 bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-3">
            Department-wise Task Completion
          </h3>
          <div className="space-y-2">
            {deptTaskData.map((d) => (
              <div key={d.dept} className="flex items-center gap-2 text-xs">
                <span className="w-28 text-[11px] text-slate-600 truncate">{d.dept}</span>
                <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden flex">
                  <div style={{ width: `${d.completed}%` }} className="bg-emerald-500 h-full" />
                  <div style={{ width: `${d.progress}%` }} className="bg-amber-400 h-full" />
                  <div style={{ width: `${d.overdue}%` }} className="bg-red-400 h-full" />
                </div>
                <span className="w-8 text-[11px] font-bold text-slate-700 text-right">{d.completed}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: KPI Achievement (Department-wise) */}
        <div className="lg:col-span-4 bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-3">
            KPI Achievement (Department-wise)
          </h3>
          <div className="space-y-2">
            {deptKpiData.map((d) => (
              <div key={d.dept} className="flex items-center gap-2 text-xs">
                <span className="w-28 text-[11px] text-slate-600 truncate">{d.dept}</span>
                <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${d.percentage}%` }}
                    className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                  />
                </div>
                <span className="w-8 text-[11px] font-bold text-slate-700 text-right">{d.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. ROW 3: EMPLOYEE DAILY WORK TABLE + TASKS SIDE PANEL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Employee Daily Work & KPI Status Table (Col 8) */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col">
          {/* Table Header Controls */}
          <div className="p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Employee Daily Work & KPI Status</h3>
              <p className="text-[11px] text-slate-400">Real-time daily task & performance overview</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              {/* Date Filter */}
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[11px] font-medium">{selectedDate}</span>
              </div>

              {/* Department Dropdown */}
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 outline-none cursor-pointer"
              >
                <option value="All Departments">All Departments</option>
                <option value="Sales & Marketing">Sales & Marketing</option>
                <option value="Procurement">Procurement</option>
                <option value="Production">Production</option>
                <option value="Quality Control">Quality Control</option>
                <option value="HR & Admin">HR & Admin</option>
                <option value="Finance">Finance</option>
                <option value="Logistics">Logistics</option>
                <option value="Customer Service">Customer Service</option>
              </select>

              {/* Search Employee */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search employee..."
                  value={searchEmployee}
                  onChange={(e) => setSearchEmployee(e.target.value)}
                  className="pl-7 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-800 placeholder-slate-400 outline-none w-36"
                />
              </div>
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-600 font-semibold text-[11px] border-b border-slate-200">
                  <th className="py-2.5 px-3 w-8">#</th>
                  <th className="py-2.5 px-3">Employee</th>
                  <th className="py-2.5 px-3">Department</th>
                  <th className="py-2.5 px-3 text-center">Today's Tasks<br /><span className="text-[9px] text-slate-400 font-normal">Assigned / Comp / Pend / Over</span></th>
                  <th className="py-2.5 px-3 text-center">Task Completion</th>
                  <th className="py-2.5 px-3 text-center">KPI Target</th>
                  <th className="py-2.5 px-3 text-center">KPI Achieved</th>
                  <th className="py-2.5 px-3 text-center">Status</th>
                  <th className="py-2.5 px-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredEmployees.map((emp) => (
                  <tr key={emp.id} className="hover:bg-blue-50/40 transition">
                    <td className="py-2.5 px-3 font-medium text-slate-400 text-[11px]">{emp.id}</td>
                    <td className="py-2.5 px-3">
                      <div className="flex items-center gap-2">
                        <img
                          src={emp.avatar}
                          alt={emp.name}
                          className="w-7 h-7 rounded-full object-cover shrink-0"
                        />
                        <span className="font-semibold text-slate-800 text-[11px] truncate max-w-[110px]">{emp.name}</span>
                      </div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-600 text-[11px]">{emp.department}</td>
                    <td className="py-2.5 px-3 text-center text-[11px]">
                      <span className="font-semibold text-slate-800">{emp.assigned}</span> /{" "}
                      <span className="text-emerald-600 font-semibold">{emp.completed}</span> /{" "}
                      <span className="text-amber-500 font-semibold">{emp.pending}</span> /{" "}
                      <span className="text-rose-500 font-semibold">{emp.overdue}</span>
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            style={{ width: `${emp.completion}%` }}
                            className={`h-full rounded-full ${emp.completion >= 70 ? "bg-emerald-500" : "bg-amber-400"}`}
                          />
                        </div>
                        <span className="text-[11px] font-bold text-slate-700">{emp.completion}%</span>
                      </div>
                    </td>
                    <td className="py-2.5 px-3 text-center font-medium text-slate-600 text-[11px]">{emp.target}%</td>
                    <td className="py-2.5 px-3 text-center font-bold text-slate-800 text-[11px]">{emp.achieved}%</td>
                    <td className="py-2.5 px-3 text-center">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${emp.status === "On Track"
                          ? "bg-emerald-100/80 text-emerald-700 border border-emerald-200"
                          : "bg-amber-100/80 text-amber-700 border border-amber-200"
                          }`}
                      >
                        {emp.status}
                      </span>
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <button
                        onClick={() => toast(`Viewing profile of ${emp.name}`, { icon: "👤" })}
                        className="p-1 text-slate-400 hover:text-slate-700 rounded"
                      >
                        <MoreVertical className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: My Tasks & Overdue Tasks (Col 4) */}
        <div className="lg:col-span-4 space-y-5">
          {/* My Tasks (Today) */}
          <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                My Tasks (Today)
              </h3>
              <button
                onClick={() => navigate("/admin/tasks")}
                className="text-[11px] font-semibold text-blue-600 hover:text-blue-700"
              >
                View All
              </button>
            </div>

            <div className="space-y-2">
              {myTasks.map((t) => (
                <div
                  key={t.title}
                  className="flex items-center justify-between p-2 rounded-lg border border-slate-100 hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      defaultChecked={t.status === "Completed"}
                      className="w-3.5 h-3.5 rounded border-slate-300 text-blue-600"
                    />
                    <div>
                      <p className="text-[11px] font-semibold text-slate-800">{t.title}</p>
                      <p className="text-[10px] text-slate-400">{t.time}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${t.color}`}>
                    {t.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Overdue Tasks (12) */}
          <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Overdue Tasks (12)
                </h3>
              </div>
              <button
                onClick={() => navigate("/admin/tasks")}
                className="text-[11px] font-semibold text-blue-600 hover:text-blue-700"
              >
                View All
              </button>
            </div>

            <div className="space-y-2">
              {overdueTasks.map((ot) => (
                <div
                  key={ot.title}
                  className="flex items-center justify-between p-2 rounded-lg border border-red-100 bg-red-50/30"
                >
                  <div className="min-w-0 pr-2">
                    <p className="text-[11px] font-semibold text-slate-800 truncate">{ot.title}</p>
                    <p className="text-[10px] text-slate-500">
                      {ot.dept} • <span className="text-red-500 font-medium">{ot.days}</span>
                    </p>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold border shrink-0 ${ot.priorityColor}`}>
                    {ot.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. ROW 4: BOTTOM 3 CHARTS & METRICS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Card 1: KPI Progress Summary (Bar & Line Chart, Col 5) */}
        <div className="lg:col-span-5 bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              KPI Progress Summary
            </h3>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1 text-blue-600 font-semibold">
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-600" /> Target
              </span>
              <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" /> Achieved
              </span>
            </div>
          </div>

          <div className="w-full h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyKpiData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#64748b" }} axisLine={false} tickLine={false} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "11px" }}
                />
                <Bar dataKey="target" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={8} />
                <Bar dataKey="achieved" fill="#10b981" radius={[4, 4, 0, 0]} barSize={8} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card 2: Top 5 Employees (Col 4) */}
        <div className="lg:col-span-4 bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Top 5 Employees (KPI Achievement)
            </h3>
            <span className="text-[10px] font-semibold text-slate-500 px-2 py-0.5 rounded bg-slate-100">
              This Month
            </span>
          </div>

          <div className="space-y-2.5">
            {topEmployees.map((top, idx) => (
              <div key={top.id} className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 w-3">{idx + 1}</span>
                <img
                  src={top.avatar}
                  alt={top.name}
                  className="w-7 h-7 rounded-full object-cover shrink-0"
                />
                <span className="w-24 text-[11px] font-semibold text-slate-800 truncate">{top.name}</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${top.percentage}%` }}
                    className="h-full bg-emerald-500 rounded-full"
                  />
                </div>
                <span className="text-[11px] font-bold text-emerald-600 w-8 text-right">{top.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: KPI vs Target (Overall) Donut (Col 3) */}
        <div className="lg:col-span-3 bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex flex-col justify-between">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2">
            KPI vs Target (Overall)
          </h3>

          <div className="relative w-36 h-36 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={overallKpiDonutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={42}
                  outerRadius={58}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {overallKpiDonutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-black text-slate-900 leading-none">78%</span>
              <span className="text-[9px] font-semibold text-slate-400 mt-0.5">Overall</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-1 text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-slate-500">Achieved: <strong className="text-slate-800">18</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-slate-500">In Progress: <strong className="text-slate-800">4</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-slate-500">Not Achieved: <strong className="text-slate-800">2</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              <span className="text-slate-500">Total: <strong className="text-slate-800">24</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
