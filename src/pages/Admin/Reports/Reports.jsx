import { useState } from "react";
import {
  FileBarChart2,
  Download,
  Calendar,
  Filter,
  Search,
  CheckCircle2,
  FileSpreadsheet,
  FileText,
  Clock,
  Printer,
  Share2,
  ShieldCheck,
  TrendingUp,
  Layers,
  ChevronRight,
} from "lucide-react";

export default function Reports() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const reportCategories = [
    { id: "all", label: "All Reports" },
    { id: "audit", label: "ISO Audit Packs" },
    { id: "kpi", label: "KPI & Performance" },
    { id: "nc", label: "Nonconformance & CAPA" },
    { id: "supplier", label: "Supplier & Purchase" },
    { id: "support", label: "Support & Calibration" },
  ];

  const reportList = [
    {
      id: "RPT-01",
      title: "ISO 9001:2015 Complete Annual Surveillance Audit Dossier",
      category: "audit",
      clauses: "Clauses 4.1 to 10.3 Comprehensive",
      frequency: "Annual / On-Demand",
      lastGenerated: "2024-10-28",
      format: "PDF & ZIP",
      size: "14.2 MB",
      status: "Audit Ready",
      description: "Complete compilation of Context, Risk Register, Objectives, MRM Minutes, Audit Schedule, and CAPA logs for external auditors.",
    },
    {
      id: "RPT-02",
      title: "Monthly Departmental KPI Performance & Target Variance Report",
      category: "kpi",
      clauses: "Clause 6.2 & 9.1",
      frequency: "Monthly",
      lastGenerated: "2024-10-31",
      format: "Excel & PDF",
      size: "2.8 MB",
      status: "Ready",
      description: "Aggregated performance breakdown across 6 departments with target achievement percentages and historical trends.",
    },
    {
      id: "RPT-03",
      title: "Nonconformance (NCR) Trend & Root Cause Pareto Analysis",
      category: "nc",
      clauses: "Clause 8.7 & 10.2",
      frequency: "Monthly",
      lastGenerated: "2024-10-25",
      format: "PDF",
      size: "3.4 MB",
      status: "Ready",
      description: "Root cause classification (5-Why & Fishbone), recurrence rate, and CAPA resolution cycle time analytics.",
    },
    {
      id: "RPT-04",
      title: "Approved Supplier Evaluation Scorecard & Rating Summary",
      category: "supplier",
      clauses: "Clause 8.4",
      frequency: "Quarterly",
      lastGenerated: "2024-09-30",
      format: "Excel",
      size: "1.9 MB",
      status: "Ready",
      description: "Quarterly assessment of 24 vendors evaluated on quality acceptance, on-time delivery, and pricing stability.",
    },
    {
      id: "RPT-05",
      title: "Equipment Calibration & Measurement Uncertainty Register",
      category: "support",
      clauses: "Clause 7.1.5",
      frequency: "Quarterly",
      lastGenerated: "2024-10-15",
      format: "PDF",
      size: "1.5 MB",
      status: "Ready",
      description: "Active calibration records, upcoming due dates, and traceable metrology certificates for all shop floor measuring devices.",
    },
    {
      id: "RPT-06",
      title: "Employee Training Needs Analysis (TNA) & Competency Matrix",
      category: "support",
      clauses: "Clause 7.2",
      frequency: "Bi-Annual",
      lastGenerated: "2024-10-01",
      format: "PDF & Excel",
      size: "2.1 MB",
      status: "Ready",
      description: "Staff skills inventory, certified auditor credentials, and training effectiveness evaluation scores.",
    },
  ];

  const filteredReports = reportList.filter((r) => {
    const matchesCategory = selectedCategory === "all" || r.category === selectedCategory;
    const matchesSearch =
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.clauses.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full space-y-5 pb-8 font-sans text-slate-800">
      {/* 1. Header Banner */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="p-2 bg-white/20 backdrop-blur-md rounded-xl inline-flex text-white">
                <FileBarChart2 className="w-6 h-6" />
              </span>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Reports & Audit Analytics
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-md border border-white/30 uppercase tracking-wider">
                Management Intelligence
              </span>
            </div>
            <p className="text-blue-100 text-sm max-w-2xl leading-relaxed">
              Generate certified compliance dossiers, executive dashboards, KPI trend reports, and surveillance audit packages ready for DAS Certification Body inspectors.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white text-blue-700 hover:bg-blue-50 rounded-xl text-xs font-bold transition shadow-sm active:scale-95">
              <Download className="w-4 h-4" />
              Download Full Audit Pack (.ZIP)
            </button>
          </div>
        </div>
      </div>

      {/* 2. Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Total Reports
            </p>
            <h3 className="text-xl font-bold text-slate-900">{reportList.length}</h3>
            <p className="text-[10px] text-emerald-600 font-medium">Standard Templates</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Audit Readiness
            </p>
            <h3 className="text-xl font-bold text-emerald-600">100%</h3>
            <p className="text-[10px] text-emerald-600 font-medium">All Clauses Covered</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Data Freshness
            </p>
            <h3 className="text-xl font-bold text-slate-900">Live</h3>
            <p className="text-[10px] text-indigo-600 font-medium">Synced With ERP</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Export Formats
            </p>
            <h3 className="text-xl font-bold text-slate-900">PDF / XLS</h3>
            <p className="text-[10px] text-slate-400 font-medium">Multi-format Export</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Scheduled Jobs
            </p>
            <h3 className="text-xl font-bold text-slate-900">4</h3>
            <p className="text-[10px] text-slate-400 font-medium">Auto-emailed</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-teal-50 text-teal-600">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              ISO Version
            </p>
            <h3 className="text-base font-bold text-emerald-600">9001:2015</h3>
            <p className="text-[10px] text-slate-400 font-medium">Certified Structure</p>
          </div>
        </div>
      </div>

      {/* 3. Search and Category Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search reports by title, clause or code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {reportCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Report Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredReports.map((r) => (
          <div
            key={r.id}
            className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700">
                  {r.id}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3" />
                  {r.status}
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">{r.title}</h3>
              <p className="text-xs text-blue-600 font-medium mb-2">{r.clauses}</p>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">{r.description}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] text-slate-400 block">
                  Last Generated • Size:
                </span>
                <span className="font-semibold text-slate-700">
                  {r.lastGenerated} • {r.size} ({r.format})
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  title="Print Report"
                  className="p-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg transition"
                >
                  <Printer className="w-3.5 h-3.5" />
                </button>
                <button
                  title="Download File"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  Export {r.format.split(" ")[0]}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
