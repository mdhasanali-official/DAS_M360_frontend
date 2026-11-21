import { useState } from "react";
import {
  GitFork,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowRight,
  TrendingUp,
  Layers,
  Activity,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Sliders,
  ShieldCheck,
  User,
  Settings2,
  FileSpreadsheet,
  X,
} from "lucide-react";

export default function Process() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const processes = [
    {
      id: "PRC-01",
      code: "COP-01",
      name: "Customer Order Processing & Contract Review",
      category: "Core",
      owner: "Md. Imran Hossain (Sales Lead)",
      inputs: "Customer RFQ, Purchase Order, Specifications",
      outputs: "Accepted Order, Work Order, Delivery Schedule",
      resources: "ERP Sales Module, CRM, Email Server",
      kpi: "Order Confirmation within 24h (Current: 98%)",
      cycleTime: "1.2 Days",
      riskLevel: "Low",
      status: "Optimal",
      clause: "Clause 8.2",
    },
    {
      id: "PRC-02",
      code: "COP-02",
      name: "Product Design & Development",
      category: "Core",
      owner: "Tanvir Ahmed (R&D Lead)",
      inputs: "Customer Specs, Regulatory Standards, Market Needs",
      outputs: "Approved Drawings, BOM, Prototype Testing Sign-off",
      resources: "CAD/CAM Workstations, Prototype Lab",
      kpi: "First Time Right Prototype (Current: 91%)",
      cycleTime: "14 Days",
      riskLevel: "Medium",
      status: "Optimal",
      clause: "Clause 8.3",
    },
    {
      id: "PRC-03",
      code: "COP-03",
      name: "Procurement & External Provider Control",
      category: "Core",
      owner: "Sadia Rahman (Procurement Lead)",
      inputs: "Material Requisition, Approved Vendor List (AVL)",
      outputs: "Purchase Order, Incoming Raw Materials, GRN",
      resources: "ERP Inventory, Supplier Portal",
      kpi: "On-Time Supplier Delivery (Current: 94%)",
      cycleTime: "4.5 Days",
      riskLevel: "Medium",
      status: "Warning",
      clause: "Clause 8.4",
    },
    {
      id: "PRC-04",
      code: "COP-04",
      name: "Manufacturing, Assembly & Packaging",
      category: "Core",
      owner: "Kamal Uddin (Plant Head)",
      inputs: "Raw Materials, Work Orders, CNC Programs, SOPs",
      outputs: "Finished Goods, Production Log, Shift Reports",
      resources: "Lines 1-4, CNC Machining Centers, Skilled Operators",
      kpi: "Overall Equipment Efficiency (OEE: 86.4%)",
      cycleTime: "3.2 Hours / Batch",
      riskLevel: "High",
      status: "Optimal",
      clause: "Clause 8.5",
    },
    {
      id: "PRC-05",
      code: "MGT-01",
      name: "Strategic Planning & Risk Assessment",
      category: "Management",
      owner: "Managing Director",
      inputs: "SWOT/PESTEL, Market Intelligence, Audit Results",
      outputs: "Quality Objectives, Annual Budget, Risk Register",
      resources: "Executive Committee, ERP Dashboards",
      kpi: "Strategic Milestones Met (Current: 88%)",
      cycleTime: "Annual / Qtrly",
      riskLevel: "Medium",
      status: "Optimal",
      clause: "Clause 5 & 6",
    },
    {
      id: "PRC-06",
      code: "MGT-02",
      name: "Management Review & Continual Improvement",
      category: "Management",
      owner: "Quality Director",
      inputs: "KPI Metrics, Customer Feedback, Audit Findings, CAPA",
      outputs: "MRM Minutes, Resource Allocation, Action Items",
      resources: "Meeting Records, DAS M360 ERP",
      kpi: "Action Item Closure Rate (Current: 94%)",
      cycleTime: "Bi-Annual",
      riskLevel: "Low",
      status: "Optimal",
      clause: "Clause 9.3 & 10",
    },
    {
      id: "PRC-07",
      code: "SUP-01",
      name: "Human Resource & Competency Development",
      category: "Support",
      owner: "Farhana Islam (HR Manager)",
      inputs: "Departmental TNA, Recruitment Needs, Appraisals",
      outputs: "Qualified Staff, Training Records, Competence Matrix",
      resources: "HRIS, Training Room, External Faculty",
      kpi: "Training Plan Execution (Current: 82%)",
      cycleTime: "Monthly Cycle",
      riskLevel: "Low",
      status: "Optimal",
      clause: "Clause 7.1.2 & 7.2",
    },
    {
      id: "PRC-08",
      code: "SUP-02",
      name: "Preventive Maintenance & Calibration",
      category: "Support",
      owner: "Rafiqul Islam (Chief Engineer)",
      inputs: "Equipment Calibration Schedule, Machine Run Hours",
      outputs: "Calibration Certificates, Maintenance Logs",
      resources: "Tool Room, Standard Reference Gauges",
      kpi: "Zero Unplanned Downtime (Current: 99.1%)",
      cycleTime: "Weekly / Monthly",
      riskLevel: "Medium",
      status: "Optimal",
      clause: "Clause 7.1.3 & 7.1.5",
    },
  ];

  const filteredProcesses = processes.filter((p) => {
    const matchesCategory =
      activeCategory === "all" || p.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.kpi.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full space-y-5 pb-8 font-sans text-slate-800">
      {/* 1. Top Header Banner */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="p-2 bg-white/20 backdrop-blur-md rounded-xl inline-flex text-white">
                <GitFork className="w-6 h-6" />
              </span>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Process Management & Interaction
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-md border border-white/30 uppercase tracking-wider">
                Clause 4.4
              </span>
            </div>
            <p className="text-blue-100 text-sm max-w-2xl leading-relaxed">
              Define, monitor, and optimize your Quality Management System processes. Map process interactions, assign responsibilities, track KPIs, and control inputs/outputs under ISO 9001:2015.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white text-blue-700 hover:bg-blue-50 rounded-xl text-xs font-bold transition shadow-sm active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Add New Process
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-800/60 hover:bg-blue-800 text-white rounded-xl text-xs font-semibold backdrop-blur-md border border-white/20 transition active:scale-95">
              <Download className="w-4 h-4" />
              Export Process Map
            </button>
          </div>
        </div>
      </div>

      {/* 2. Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Total Processes
            </p>
            <h3 className="text-xl font-bold text-slate-900">{processes.length}</h3>
            <p className="text-[10px] text-emerald-600 font-medium">Mapped & Active</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Core Operations
            </p>
            <h3 className="text-xl font-bold text-slate-900">4</h3>
            <p className="text-[10px] text-slate-500 font-medium">Customer Facing</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Management
            </p>
            <h3 className="text-xl font-bold text-slate-900">2</h3>
            <p className="text-[10px] text-purple-600 font-medium">Direction & Review</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-teal-50 text-teal-600">
            <Settings2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Support
            </p>
            <h3 className="text-xl font-bold text-slate-900">2</h3>
            <p className="text-[10px] text-teal-600 font-medium">HR & Maintenance</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Avg KPI Health
            </p>
            <h3 className="text-xl font-bold text-emerald-600">91.8%</h3>
            <p className="text-[10px] text-emerald-600 font-medium">Target &gt; 85%</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Clause 4.4
            </p>
            <h3 className="text-base font-bold text-emerald-600">Audited</h3>
            <p className="text-[10px] text-slate-500 font-medium">100% Compliant</p>
          </div>
        </div>
      </div>

      {/* 3. Search and Category Filter */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search process by name, code, owner, KPI..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2">
          {["all", "core", "management", "support"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat === "all" ? "All Processes" : `${cat} Processes`}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Process Cards / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProcesses.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelectedProcess(p)}
            className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700">
                    {p.code}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">{p.clause}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      p.category === "Core"
                        ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                        : p.category === "Management"
                        ? "bg-purple-50 text-purple-700 border border-purple-200"
                        : "bg-teal-50 text-teal-700 border border-teal-200"
                    }`}
                  >
                    {p.category}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      p.status === "Optimal"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
              </div>

              <h3 className="text-sm font-bold text-slate-900 mb-1">{p.name}</h3>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>Owner: </span>
                <span className="font-semibold text-slate-700">{p.owner}</span>
              </div>

              {/* Input -> Process -> Output Flow preview */}
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-2 text-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Inputs (What triggers this?):
                  </span>
                  <p className="text-slate-700 text-[11px] truncate">{p.inputs}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Key Outputs & Deliverables:
                  </span>
                  <p className="text-slate-700 text-[11px] truncate">{p.outputs}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] text-slate-400 block">Target KPI:</span>
                <span className="font-semibold text-blue-600">{p.kpi}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block">Cycle Time:</span>
                <span className="font-bold text-slate-800">{p.cycleTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Turtle Diagram / Detailed Modal */}
      {selectedProcess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700">
                    {selectedProcess.code}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {selectedProcess.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  ISO 9001:2015 Clause 4.4 Process Turtle Diagram
                </p>
              </div>
              <button
                onClick={() => setSelectedProcess(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 text-xs mb-1">Inputs (With What?)</h4>
                  <p className="text-slate-700">{selectedProcess.inputs}</p>
                </div>
                <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
                  <h4 className="font-bold text-emerald-900 text-xs mb-1">Outputs (Deliverables)</h4>
                  <p className="text-slate-700">{selectedProcess.outputs}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-800 text-xs mb-1">With Who? (Competency & Owner)</h4>
                  <p className="text-slate-700">{selectedProcess.owner}</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-800 text-xs mb-1">With What Resources?</h4>
                  <p className="text-slate-700">{selectedProcess.resources}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100">
                  <h4 className="font-bold text-indigo-900 text-xs mb-1">How? (KPI & Metrics)</h4>
                  <p className="text-slate-700">{selectedProcess.kpi}</p>
                </div>
                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100">
                  <h4 className="font-bold text-amber-900 text-xs mb-1">Risk Level & Cycle</h4>
                  <p className="text-slate-700">
                    Risk: <span className="font-bold">{selectedProcess.riskLevel}</span> | Cycle:{" "}
                    <span className="font-bold">{selectedProcess.cycleTime}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedProcess(null)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold text-xs hover:bg-blue-700"
                >
                  Close Turtle View
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
