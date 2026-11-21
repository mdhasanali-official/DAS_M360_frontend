import { useState } from "react";
import {
  CheckSquare,
  Clock,
  AlertCircle,
  CheckCircle2,
  Plus,
  Search,
  Filter,
  Users,
  Building,
  Calendar,
  X,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function Tasks() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [deptFilter, setDeptFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [taskList, setTaskList] = useState([
    {
      id: "TSK-101",
      title: "Quarterly ISO 9001:2015 Internal Audit Checklist Preparation",
      assignedTo: "Md. Imran Hossain",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      department: "Sales & Marketing",
      dueDate: "2024-11-05",
      priority: "High",
      status: "In Progress",
      progress: 65,
    },
    {
      id: "TSK-102",
      title: "CNC Spindle Daily Vibration Analysis & Log Verification",
      assignedTo: "Tanvir Ahmed",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      department: "Production",
      dueDate: "2024-10-31",
      priority: "Medium",
      status: "Completed",
      progress: 100,
    },
    {
      id: "TSK-103",
      title: "Incoming Raw Material Heat-Treatment Chemical Composition Test",
      assignedTo: "Sadia Rahman",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      department: "Quality Assurance",
      dueDate: "2024-10-30",
      priority: "High",
      status: "Overdue",
      progress: 40,
    },
    {
      id: "TSK-104",
      title: "Supplier ESG & Credit Health Scoring for Tier-1 Vendors",
      assignedTo: "Kamal Uddin",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80",
      department: "Procurement",
      dueDate: "2024-11-10",
      priority: "Low",
      status: "In Progress",
      progress: 50,
    },
    {
      id: "TSK-105",
      title: "Annual Training Competency Matrix Refresh & Certificates Upload",
      assignedTo: "Farhana Islam",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
      department: "HR & Admin",
      dueDate: "2024-11-15",
      priority: "Medium",
      status: "In Progress",
      progress: 75,
    },
    {
      id: "TSK-106",
      title: "Shop Floor Work Instruction (WI-PRD-014) Lamination & Mount",
      assignedTo: "Rafiqul Islam",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
      department: "Maintenance",
      dueDate: "2024-10-28",
      priority: "Medium",
      status: "Completed",
      progress: 100,
    },
  ]);

  const [newTask, setNewTask] = useState({
    title: "",
    assignedTo: "Md. Imran Hossain",
    department: "Sales & Marketing",
    dueDate: "",
    priority: "Medium",
  });

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.title || !newTask.dueDate) return;
    const task = {
      id: `TSK-${taskList.length + 101}`,
      ...newTask,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
      status: "In Progress",
      progress: 0,
    };
    setTaskList([task, ...taskList]);
    setIsModalOpen(false);
    setNewTask({
      title: "",
      assignedTo: "Md. Imran Hossain",
      department: "Sales & Marketing",
      dueDate: "",
      priority: "Medium",
    });
  };

  const filteredTasks = taskList.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.assignedTo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || t.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesDept = deptFilter === "all" || t.department === deptFilter;
    return matchesSearch && matchesStatus && matchesDept;
  });

  return (
    <div className="w-full space-y-5 pb-8 font-sans text-slate-800">
      {/* 1. Header Banner */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="p-2 bg-white/20 backdrop-blur-md rounded-xl inline-flex text-white">
                <CheckSquare className="w-6 h-6" />
              </span>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Task & Daily Activity Management
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-md border border-white/30 uppercase tracking-wider">
                ISO Clause 6 & 8 Execution
              </span>
            </div>
            <p className="text-blue-100 text-sm max-w-2xl leading-relaxed">
              Track day-to-day employee action items, operational checklists, overdue compliance tasks, and departmental work order progress across the enterprise.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white text-blue-700 hover:bg-blue-50 rounded-xl text-xs font-bold transition shadow-sm active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Assign New Task
            </button>
          </div>
        </div>
      </div>

      {/* 2. Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
            <CheckSquare className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Total Tasks
            </p>
            <h3 className="text-xl font-bold text-slate-900">156</h3>
            <p className="text-[10px] text-slate-400 font-medium">All Departments</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Completed
            </p>
            <h3 className="text-xl font-bold text-emerald-600">98</h3>
            <p className="text-[10px] text-emerald-600 font-medium">63% Resolution Rate</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              In Progress
            </p>
            <h3 className="text-xl font-bold text-amber-600">46</h3>
            <p className="text-[10px] text-amber-600 font-medium">Active Shop Floor</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-rose-50 text-rose-600">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Overdue
            </p>
            <h3 className="text-xl font-bold text-rose-600">12</h3>
            <p className="text-[10px] text-rose-600 font-medium">Attention Required</p>
          </div>
        </div>
      </div>

      {/* 3. Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search tasks by title, assignee, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold text-slate-500">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="in progress">In Progress</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold text-slate-500">Dept:</span>
            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Departments</option>
              <option value="Sales & Marketing">Sales & Marketing</option>
              <option value="Production">Production</option>
              <option value="Quality Assurance">Quality Assurance</option>
              <option value="Procurement">Procurement</option>
              <option value="HR & Admin">HR & Admin</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>
        </div>
      </div>

      {/* 4. Tasks Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-4 py-3">Task ID</th>
                <th className="px-4 py-3">Task Description</th>
                <th className="px-4 py-3">Assigned To</th>
                <th className="px-4 py-3">Department</th>
                <th className="px-4 py-3">Due Date</th>
                <th className="px-4 py-3">Priority</th>
                <th className="px-4 py-3">Progress</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTasks.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50/70 transition">
                  <td className="px-4 py-3.5 font-bold text-blue-600">{t.id}</td>
                  <td className="px-4 py-3.5 font-semibold text-slate-900 max-w-sm">
                    {t.title}
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2">
                      <img
                        src={t.avatar}
                        alt={t.assignedTo}
                        className="w-6 h-6 rounded-full object-cover border border-slate-200"
                      />
                      <span className="font-medium text-slate-800">{t.assignedTo}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-slate-700">{t.department}</td>
                  <td className="px-4 py-3.5 font-medium text-slate-900">{t.dueDate}</td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        t.priority === "High"
                          ? "bg-rose-50 text-rose-700 border border-rose-200"
                          : t.priority === "Medium"
                          ? "bg-amber-50 text-amber-700 border border-amber-200"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {t.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 w-32">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            t.progress === 100
                              ? "bg-emerald-500"
                              : t.status === "Overdue"
                              ? "bg-rose-500"
                              : "bg-blue-600"
                          }`}
                          style={{ width: `${t.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-600">
                        {t.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    {t.status === "Completed" ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" />
                        Completed
                      </span>
                    ) : t.status === "Overdue" ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                        <AlertCircle className="w-3 h-3" />
                        Overdue
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        <Clock className="w-3 h-3" />
                        In Progress
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Task Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-blue-100 text-blue-700 rounded-lg">
                  <CheckSquare className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  Assign Operational Task
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddTask} className="space-y-3 mt-4 text-xs">
              <div>
                <label className="block text-slate-600 font-semibold mb-1">
                  Task Title & Scope *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Conduct QC Calibration check on Micrometer 01"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Assignee *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTask.assignedTo}
                    onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Department *
                  </label>
                  <select
                    value={newTask.department}
                    onChange={(e) => setNewTask({ ...newTask, department: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Sales & Marketing">Sales & Marketing</option>
                    <option value="Production">Production</option>
                    <option value="Quality Assurance">Quality Assurance</option>
                    <option value="Procurement">Procurement</option>
                    <option value="HR & Admin">HR & Admin</option>
                    <option value="Maintenance">Maintenance</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Target Due Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Priority
                  </label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-sm"
                >
                  Assign Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
