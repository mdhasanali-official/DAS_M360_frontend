import { useState } from "react";
import {
  FileCheck2,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Clock,
  Download,
  Plus,
  Search,
  Filter,
  Eye,
  ShieldCheck,
  Award,
  Users,
  FileSpreadsheet,
  X,
  Check,
} from "lucide-react";

export default function Audits() {
  const [activeTab, setActiveTab] = useState("schedule");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAudit, setSelectedAudit] = useState(null);

  // Annual Audit Program Data (Clause 9.2)
  const [auditList, setAuditList] = useState([
    {
      id: "AUD-2024-01",
      title: "Q1 Internal QMS Audit — Management, Sales & Procurement",
      type: "Internal",
      clauses: "Clause 4, 5, 6, 8.2, 8.4",
      leadAuditor: "Md. Imran Hossain (Lead Auditor)",
      auditeeDept: "Top Management, Sales, Purchase",
      plannedDate: "2024-03-20",
      status: "Completed",
      findings: { major: 0, minor: 2, ofi: 3 },
      closureStatus: "100% Closed",
    },
    {
      id: "AUD-2024-02",
      title: "Q2 Internal QMS Audit — Manufacturing, Assembly & QC Lab",
      type: "Internal",
      clauses: "Clause 7.1.5, 8.5, 8.6, 8.7",
      leadAuditor: "Tanvir Ahmed (Certified Auditor)",
      auditeeDept: "Production Lines 1-4, QC Metrology",
      plannedDate: "2024-06-18",
      status: "Completed",
      findings: { major: 0, minor: 1, ofi: 2 },
      closureStatus: "100% Closed",
    },
    {
      id: "AUD-2024-03",
      title: "Annual ISO 9001:2015 Surveillance Audit (DAS Certification)",
      type: "External (CB)",
      clauses: "Full Standard Scope (Clauses 4 to 10)",
      leadAuditor: "DAS Certification Body Lead Auditor",
      auditeeDept: "All Departments & Managing Director",
      plannedDate: "2024-09-12",
      status: "Completed",
      findings: { major: 0, minor: 0, ofi: 2 },
      closureStatus: "Certificate Maintained",
    },
    {
      id: "AUD-2024-04",
      title: "Q4 Internal QMS Audit — HR, Competence, Maintenance & IT",
      type: "Internal",
      clauses: "Clause 7.1, 7.2, 7.3, 7.4, 7.5",
      leadAuditor: "Sadia Rahman (Internal Auditor)",
      auditeeDept: "HR, Maintenance, IT, Document Control",
      plannedDate: "2024-11-28",
      status: "Scheduled",
      findings: { major: 0, minor: 0, ofi: 0 },
      closureStatus: "Preparation in Progress",
    },
    {
      id: "AUD-2024-05",
      title: "Tier-1 Raw Material Supplier Quality Audit",
      type: "Supplier Audit",
      clauses: "Clause 8.4 External Provider Control",
      leadAuditor: "Kamal Uddin (Senior QC)",
      auditeeDept: "Apex Steel Works Ltd. (Supplier Facility)",
      plannedDate: "2024-12-10",
      status: "Scheduled",
      findings: { major: 0, minor: 0, ofi: 0 },
      closureStatus: "Checklist Prepared",
    },
  ]);

  // Audit Findings Log
  const findingsLog = [
    {
      id: "FND-01",
      auditRef: "AUD-2024-01",
      clause: "Clause 8.4.2",
      type: "Minor NC",
      description: "One new vendor added to ERP without documented credit and quality rating assessment.",
      dept: "Procurement",
      capaRef: "CAPA-2024-04",
      status: "Closed & Verified",
      closureDate: "2024-04-10",
    },
    {
      id: "FND-02",
      auditRef: "AUD-2024-01",
      clause: "Clause 7.5.3",
      type: "Minor NC",
      description: "Obsolete packing slip template rev 1.1 found printed at dispatch desk.",
      dept: "Warehouse",
      capaRef: "CAPA-2024-05",
      status: "Closed & Verified",
      closureDate: "2024-04-05",
    },
    {
      id: "FND-03",
      auditRef: "AUD-2024-02",
      clause: "Clause 7.1.5",
      type: "Minor NC",
      description: "Digital caliper calibration sticker date obscured by cutting fluid spray.",
      dept: "QC Inspection",
      capaRef: "CAPA-2024-09",
      status: "Closed & Verified",
      closureDate: "2024-07-02",
    },
    {
      id: "FND-04",
      auditRef: "AUD-2024-03",
      clause: "Clause 6.2",
      type: "OFI (Opportunity)",
      description: "Consider digitizing real-time scrap tracking on the shop floor LCD monitors.",
      dept: "Production",
      capaRef: "IMPR-2024-12",
      status: "In Progress",
      closureDate: "Target Dec 2024",
    },
  ];

  // New Audit Form State
  const [newAudit, setNewAudit] = useState({
    title: "",
    type: "Internal",
    clauses: "",
    leadAuditor: "",
    auditeeDept: "",
    plannedDate: "",
  });

  const handleAddAudit = (e) => {
    e.preventDefault();
    if (!newAudit.title) return;
    const item = {
      id: `AUD-2024-0${auditList.length + 1}`,
      ...newAudit,
      status: "Scheduled",
      findings: { major: 0, minor: 0, ofi: 0 },
      closureStatus: "Scheduled",
    };
    setAuditList([...auditList, item]);
    setIsModalOpen(false);
    setNewAudit({
      title: "",
      type: "Internal",
      clauses: "",
      leadAuditor: "",
      auditeeDept: "",
      plannedDate: "",
    });
  };

  const filteredAudits = auditList.filter((a) => {
    const matchesSearch =
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.auditeeDept.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.leadAuditor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || a.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="w-full space-y-5 pb-8 font-sans text-slate-800">
      {/* 1. Top Header Banner */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="p-2 bg-white/20 backdrop-blur-md rounded-xl inline-flex text-white">
                <FileCheck2 className="w-6 h-6" />
              </span>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Internal & External Audit Management
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-md border border-white/30 uppercase tracking-wider">
                Clause 9.2
              </span>
            </div>
            <p className="text-blue-100 text-sm max-w-2xl leading-relaxed">
              Plan, execute, and verify internal audits, supplier audits, and third-party ISO 9001:2015 certification surveillance audits. Maintain auditor independence, track non-conformances, and verify CAPA resolution.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white text-blue-700 hover:bg-blue-50 rounded-xl text-xs font-bold transition shadow-sm active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Schedule Audit
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-800/60 hover:bg-blue-800 text-white rounded-xl text-xs font-semibold backdrop-blur-md border border-white/20 transition active:scale-95">
              <Download className="w-4 h-4" />
              Export Audit Program
            </button>
          </div>
        </div>
      </div>

      {/* 2. Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Annual Program
            </p>
            <h3 className="text-xl font-bold text-slate-900">{auditList.length}</h3>
            <p className="text-[10px] text-emerald-600 font-medium">Audits Planned</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Completed
            </p>
            <h3 className="text-xl font-bold text-emerald-600">3</h3>
            <p className="text-[10px] text-slate-400 font-medium">60% Complete</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Upcoming
            </p>
            <h3 className="text-xl font-bold text-amber-600">2</h3>
            <p className="text-[10px] text-slate-400 font-medium">Nov & Dec 2024</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-rose-50 text-rose-600">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Major NCs
            </p>
            <h3 className="text-xl font-bold text-slate-900">0</h3>
            <p className="text-[10px] text-emerald-600 font-medium">Zero Major Non-conf</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              CAPA Closure
            </p>
            <h3 className="text-xl font-bold text-indigo-600">100%</h3>
            <p className="text-[10px] text-emerald-600 font-medium">All 3 NCs Resolved</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-teal-50 text-teal-600">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              CB Status
            </p>
            <h3 className="text-base font-bold text-emerald-600">Certified</h3>
            <p className="text-[10px] text-slate-400 font-medium">DAS ISO 9001:2015</p>
          </div>
        </div>
      </div>

      {/* 3. Tab Buttons */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab("schedule")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "schedule"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <Calendar className="w-4 h-4" />
          Annual Audit Program ({auditList.length})
        </button>
        <button
          onClick={() => setActiveTab("findings")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "findings"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <AlertCircle className="w-4 h-4" />
          Findings & Nonconformance Log ({findingsLog.length})
        </button>
      </div>

      {/* TAB 1: Audit Program Schedule */}
      {activeTab === "schedule" && (
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search audit by title, lead auditor, department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-slate-500">Status:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Audits</option>
                <option value="completed">Completed</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>
          </div>

          {/* Audits Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="px-4 py-3">Audit ID / Type</th>
                    <th className="px-4 py-3">Audit Title & Scope</th>
                    <th className="px-4 py-3">Target Department</th>
                    <th className="px-4 py-3">Lead Auditor</th>
                    <th className="px-4 py-3">Planned Date</th>
                    <th className="px-4 py-3">Findings</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredAudits.map((a) => (
                    <tr key={a.id} className="hover:bg-slate-50/70 transition">
                      <td className="px-4 py-3.5">
                        <span className="font-bold text-blue-600 block">{a.id}</span>
                        <span className="text-[10px] text-slate-400 font-medium">{a.type}</span>
                      </td>
                      <td className="px-4 py-3.5 max-w-xs">
                        <div className="font-semibold text-slate-900 leading-snug">{a.title}</div>
                        <div className="text-[11px] text-blue-600 font-medium mt-0.5">
                          {a.clauses}
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-slate-700 font-medium">
                        {a.auditeeDept}
                      </td>
                      <td className="px-4 py-3.5 text-slate-800 font-medium">
                        {a.leadAuditor}
                      </td>
                      <td className="px-4 py-3.5 font-semibold text-slate-900">
                        {a.plannedDate}
                      </td>
                      <td className="px-4 py-3.5">
                        {a.status === "Completed" ? (
                          <div className="text-[11px] font-medium space-y-0.5">
                            <span className="text-emerald-700 font-bold">0 Major</span> •{" "}
                            <span className="text-amber-700 font-bold">{a.findings.minor} Minor</span> •{" "}
                            <span className="text-blue-700">{a.findings.ofi} OFI</span>
                          </div>
                        ) : (
                          <span className="text-slate-400 text-[11px]">Pending Audit</span>
                        )}
                      </td>
                      <td className="px-4 py-3.5">
                        {a.status === "Completed" ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3" />
                            Completed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                            <Clock className="w-3 h-3" />
                            Scheduled
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-right">
                        <button
                          onClick={() => setSelectedAudit(a)}
                          className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                          title="View Audit Details"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Findings Log */}
      {activeTab === "findings" && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="px-4 py-3">Finding Ref</th>
                  <th className="px-4 py-3">Audit / Clause</th>
                  <th className="px-4 py-3">Classification</th>
                  <th className="px-4 py-3">Non-conformance Description</th>
                  <th className="px-4 py-3">Department</th>
                  <th className="px-4 py-3">Corrective Action (CAPA)</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {findingsLog.map((f) => (
                  <tr key={f.id} className="hover:bg-slate-50/70 transition">
                    <td className="px-4 py-3 font-bold text-blue-600">{f.id}</td>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-slate-900">{f.auditRef}</div>
                      <div className="text-[10px] text-slate-400">{f.clause}</div>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          f.type.includes("Minor")
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-blue-50 text-blue-700 border border-blue-200"
                        }`}
                      >
                        {f.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 max-w-sm text-slate-800">{f.description}</td>
                    <td className="px-4 py-3 text-slate-700 font-medium">{f.dept}</td>
                    <td className="px-4 py-3">
                      <span className="font-mono text-blue-600 font-semibold">{f.capaRef}</span>
                      <div className="text-[10px] text-slate-400">{f.closureDate}</div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" />
                        {f.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add Audit Schedule Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-blue-100 text-blue-700 rounded-lg">
                  <Calendar className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  Plan & Schedule Audit (Clause 9.2)
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddAudit} className="space-y-3 mt-4 text-xs">
              <div>
                <label className="block text-slate-600 font-semibold mb-1">
                  Audit Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Q4 Internal Audit - Warehouse & Shipping"
                  value={newAudit.title}
                  onChange={(e) => setNewAudit({ ...newAudit, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Audit Type *
                  </label>
                  <select
                    value={newAudit.type}
                    onChange={(e) => setNewAudit({ ...newAudit, type: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Internal">Internal QMS</option>
                    <option value="External (CB)">External Certification Body</option>
                    <option value="Supplier Audit">Supplier Audit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Applicable ISO Clauses
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Clause 8.5, 8.6, 7.5"
                    value={newAudit.clauses}
                    onChange={(e) => setNewAudit({ ...newAudit, clauses: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Lead Auditor *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Qualified Lead Auditor Name"
                    value={newAudit.leadAuditor}
                    onChange={(e) => setNewAudit({ ...newAudit, leadAuditor: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Auditee Department *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Operations, Procurement"
                    value={newAudit.auditeeDept}
                    onChange={(e) => setNewAudit({ ...newAudit, auditeeDept: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">
                  Planned Date *
                </label>
                <input
                  type="date"
                  required
                  value={newAudit.plannedDate}
                  onChange={(e) => setNewAudit({ ...newAudit, plannedDate: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
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
                  Add to Audit Plan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
