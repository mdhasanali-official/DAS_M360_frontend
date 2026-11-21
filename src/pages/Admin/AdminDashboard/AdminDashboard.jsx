import { useState } from "react";
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
  ShieldCheck,
  TrendingUp,
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
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [searchEmployee, setSearchEmployee] = useState("");
  const [selectedDate, setSelectedDate] = useState("31 Oct 2024");

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
                  <th className="py-2.5 px-3 text-center">Today's Tasks<br/><span className="text-[9px] text-slate-400 font-normal">Assigned / Comp / Pend / Over</span></th>
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
                        className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          emp.status === "On Track"
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
                onClick={() => toast("All today's tasks opened", { icon: "📋" })}
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
                onClick={() => toast("Viewing all 12 overdue tasks", { icon: "⚠️" })}
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
