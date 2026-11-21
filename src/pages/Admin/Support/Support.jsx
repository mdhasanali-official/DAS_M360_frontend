import { useState } from "react";
import {
  LifeBuoy,
  FileText,
  FileCheck2,
  Users,
  Search,
  Filter,
  Plus,
  Download,
  Eye,
  Edit,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Award,
  Layers,
  Wrench,
  Radio,
  BookOpen,
  Calendar,
  X,
  FileSpreadsheet,
  Check,
} from "lucide-react";

export default function Support() {
  const [activeTab, setActiveTab] = useState("documents");
  const [docSearch, setDocSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isAddDocModalOpen, setIsAddDocModalOpen] = useState(false);
  const [isAddTrainingModalOpen, setIsAddTrainingModalOpen] = useState(false);
  const [isAddEquipmentModalOpen, setIsAddEquipmentModalOpen] = useState(false);

  // Clause 7.5 Documented Information Master List
  const [documents, setDocuments] = useState([
    {
      id: "DOC-001",
      code: "QM-001",
      title: "Quality Management System Manual",
      type: "Manual",
      dept: "Management",
      version: "v4.0",
      revDate: "2024-01-15",
      owner: "Quality Director",
      approver: "Managing Director",
      status: "Approved",
      retention: "Permanent",
      location: "QMS Cloud Vault / Sec-A1",
    },
    {
      id: "DOC-002",
      code: "POL-001",
      title: "Quality Policy Statement",
      type: "Policy",
      dept: "Executive",
      version: "v3.2",
      revDate: "2024-02-01",
      owner: "Managing Director",
      approver: "Board of Directors",
      status: "Approved",
      retention: "Permanent",
      location: "Public Notice & Portal",
    },
    {
      id: "DOC-003",
      code: "SOP-PRD-014",
      title: "Standard Operating Procedure: Production Line Control",
      type: "SOP",
      dept: "Production",
      version: "v2.1",
      revDate: "2024-04-10",
      owner: "Production Manager",
      approver: "Operations Head",
      status: "Approved",
      retention: "5 Years",
      location: "Floor Station 1-6 & ERP",
    },
    {
      id: "DOC-004",
      code: "SOP-QC-008",
      title: "In-Process Inspection and Testing Procedure",
      type: "SOP",
      dept: "Quality Control",
      version: "v3.0",
      revDate: "2024-05-20",
      owner: "QC Lead",
      approver: "Quality Director",
      status: "Approved",
      retention: "5 Years",
      location: "QC Lab Binder & ERP",
    },
    {
      id: "DOC-005",
      code: "WI-MNT-005",
      title: "Work Instruction: CNC Machine Daily Calibration & Cleaning",
      type: "Work Instruction",
      dept: "Maintenance",
      version: "v1.4",
      revDate: "2024-06-12",
      owner: "Maintenance Head",
      approver: "Plant Manager",
      status: "Approved",
      retention: "3 Years",
      location: "Maintenance Bay",
    },
    {
      id: "DOC-006",
      code: "FRM-HR-003",
      title: "Employee Competence & Annual Training Record Form",
      type: "Form",
      dept: "Human Resources",
      version: "v2.0",
      revDate: "2024-03-01",
      owner: "HR Executive",
      approver: "HR Manager",
      status: "Approved",
      retention: "7 Years",
      location: "HR Personnel Files",
    },
    {
      id: "DOC-007",
      code: "SOP-PUR-002",
      title: "Purchasing & Supplier Evaluation Procedure",
      type: "SOP",
      dept: "Procurement",
      version: "v2.3",
      revDate: "2024-07-01",
      owner: "Procurement Lead",
      approver: "Finance Director",
      status: "Under Review",
      retention: "5 Years",
      location: "Procurement ERP",
    },
    {
      id: "DOC-008",
      code: "EXT-ISO-9001",
      title: "ISO 9001:2015 International Standard Specification",
      type: "External Doc",
      dept: "Quality",
      version: "2015 Ed.",
      revDate: "2015-09-15",
      owner: "ISO Committee",
      approver: "DAS Certification",
      status: "Approved",
      retention: "Permanent",
      location: "Standards Library",
    },
  ]);

  // Clause 7.2 Competence & Training Records
  const [trainingList, setTrainingList] = useState([
    {
      id: "TRN-01",
      title: "ISO 9001:2015 Clause Awareness & Internal Auditor Training",
      targetDept: "All Dept Leads",
      participants: 14,
      trainer: "DAS Lead Auditor",
      scheduledDate: "2024-03-15",
      status: "Completed",
      scoreAvg: "92%",
    },
    {
      id: "TRN-02",
      title: "Good Manufacturing Practices (GMP) & 5S Floor Standards",
      targetDept: "Production & Warehouse",
      participants: 36,
      trainer: "Internal QC Lead",
      scheduledDate: "2024-05-10",
      status: "Completed",
      scoreAvg: "88%",
    },
    {
      id: "TRN-03",
      title: "Statistical Process Control (SPC) & Calibration Verification",
      targetDept: "Quality Engineers",
      participants: 8,
      trainer: "Metrology Institute",
      scheduledDate: "2024-08-20",
      status: "Completed",
      scoreAvg: "95%",
    },
    {
      id: "TRN-04",
      title: "Emergency Response & Workplace Health and Safety (HSE)",
      targetDept: "All Staff",
      participants: 58,
      trainer: "Safety Officer",
      scheduledDate: "2024-11-25",
      status: "Scheduled",
      scoreAvg: "Pending",
    },
  ]);

  // Clause 7.1.5 Calibration Register
  const [calibrationList, setCalibrationList] = useState([
    {
      id: "EQP-01",
      code: "CAL-MIC-01",
      name: "Digital Micrometer 0-25mm",
      dept: "QC Inspection Lab",
      lastCal: "2024-02-10",
      nextCal: "2025-02-09",
      standard: "NIST Traceable Gauge Blocks",
      certificate: "CERT-2024-8891",
      status: "Valid",
    },
    {
      id: "EQP-02",
      code: "CAL-VER-02",
      name: "Vernier Caliper 0-300mm",
      dept: "Tool Room",
      lastCal: "2024-04-12",
      nextCal: "2025-04-11",
      standard: "ISO/IEC 17025 Calibrated",
      certificate: "CERT-2024-9104",
      status: "Valid",
    },
    {
      id: "EQP-03",
      code: "CAL-PRS-05",
      name: "Hydraulic Pressure Gauge 0-600 PSI",
      dept: "Assembly Line 2",
      lastCal: "2024-01-20",
      nextCal: "2024-12-15",
      standard: "Deadweight Tester",
      certificate: "CERT-2024-7320",
      status: "Due Soon",
    },
    {
      id: "EQP-04",
      code: "CAL-TMP-01",
      name: "Digital Infrared Thermometer",
      dept: "Heat Treatment",
      lastCal: "2024-06-05",
      nextCal: "2025-06-04",
      standard: "Blackbody Calibration Source",
      certificate: "CERT-2024-9982",
      status: "Valid",
    },
  ]);

  // Clause 7.4 Communication Matrix
  const communicationMatrix = [
    {
      what: "Quality Policy & Objectives",
      when: "Induction, Annual review & monthly Townhalls",
      withWhom: "All employees, contractors, interested parties",
      how: "Display boards, Employee Handbook, ERP portal",
      who: "Managing Director / Quality Head",
    },
    {
      what: "Customer Requirements & Changes",
      when: "Upon receiving RFQ / Order amendments",
      withWhom: "Production, Design, Purchasing & QC teams",
      how: "Production Order Briefings, ERP Notification",
      who: "Sales & Marketing Manager",
    },
    {
      what: "Internal Audit Schedules & Findings",
      when: "2 weeks prior to audit & within 48h after closing",
      withWhom: "Auditees, HODs, Management Review Committee",
      how: "Audit Plan email, CAPA module on DAS M360 ERP",
      who: "Lead Internal Auditor",
    },
    {
      what: "Nonconformances & Corrective Actions (CAPA)",
      when: "Immediately upon detection & during weekly reviews",
      withWhom: "Process owners, QC Inspectors, Operations",
      how: "Incident Log, ERP CAPA Dashboard, Weekly standup",
      who: "QC Inspector / Process Owner",
    },
    {
      what: "Supplier Performance Ratings",
      when: "Quarterly performance evaluation cycle",
      withWhom: "Approved external providers & suppliers",
      how: "Supplier Scorecard report via email",
      who: "Procurement Manager",
    },
  ];

  // New Doc Form State
  const [newDoc, setNewDoc] = useState({
    code: "",
    title: "",
    type: "SOP",
    dept: "Quality",
    version: "v1.0",
    owner: "",
    approver: "Quality Director",
    retention: "5 Years",
    location: "QMS Cloud Vault",
  });

  const handleAddDocument = (e) => {
    e.preventDefault();
    if (!newDoc.code || !newDoc.title) return;
    const item = {
      id: `DOC-00${documents.length + 1}`,
      ...newDoc,
      revDate: new Date().toISOString().split("T")[0],
      status: "Approved",
    };
    setDocuments([item, ...documents]);
    setIsAddDocModalOpen(false);
    setNewDoc({
      code: "",
      title: "",
      type: "SOP",
      dept: "Quality",
      version: "v1.0",
      owner: "",
      approver: "Quality Director",
      retention: "5 Years",
      location: "QMS Cloud Vault",
    });
  };

  // Filtered Documents
  const filteredDocs = documents.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(docSearch.toLowerCase()) ||
      doc.code.toLowerCase().includes(docSearch.toLowerCase()) ||
      doc.owner.toLowerCase().includes(docSearch.toLowerCase()) ||
      doc.dept.toLowerCase().includes(docSearch.toLowerCase());
    const matchesType = typeFilter === "all" || doc.type === typeFilter;
    const matchesStatus = statusFilter === "all" || doc.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="w-full space-y-5 pb-8 font-sans text-slate-800">
      {/* 1. Header Banner */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="p-2 bg-white/20 backdrop-blur-md rounded-xl inline-flex text-white">
                <LifeBuoy className="w-6 h-6" />
              </span>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Support & Documented Information
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-md border border-white/30 uppercase tracking-wider">
                Clause 7.1 — 7.5
              </span>
            </div>
            <p className="text-blue-100 text-sm max-w-2xl leading-relaxed">
              Manage human resources, competence matrix, infrastructure, monitoring & measuring resources (calibration), awareness, communication protocols, and complete control of documented information.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAddDocModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white text-blue-700 hover:bg-blue-50 rounded-xl text-xs font-bold transition shadow-sm active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Add Controlled Document
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-800/60 hover:bg-blue-800 text-white rounded-xl text-xs font-semibold backdrop-blur-md border border-white/20 transition active:scale-95">
              <Download className="w-4 h-4" />
              Export Master Register
            </button>
          </div>
        </div>
      </div>

      {/* 2. Top Summary Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Total Docs
            </p>
            <h3 className="text-xl font-bold text-slate-900">{documents.length}</h3>
            <p className="text-[10px] text-emerald-600 font-medium">Controlled & Active</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Training Done
            </p>
            <h3 className="text-xl font-bold text-slate-900">18 / 22</h3>
            <p className="text-[10px] text-indigo-600 font-medium">82% Plan Achieved</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Calibration
            </p>
            <h3 className="text-xl font-bold text-emerald-600">100%</h3>
            <p className="text-[10px] text-slate-500 font-medium">14 Instruments OK</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Under Review
            </p>
            <h3 className="text-xl font-bold text-amber-600">1</h3>
            <p className="text-[10px] text-slate-500 font-medium">SOP-PUR-002</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Competence
            </p>
            <h3 className="text-xl font-bold text-purple-600">94%</h3>
            <p className="text-[10px] text-slate-500 font-medium">Certified Workforce</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-teal-50 text-teal-600">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              ISO Status
            </p>
            <h3 className="text-base font-bold text-emerald-600">Audited</h3>
            <p className="text-[10px] text-slate-500 font-medium">Clause 7 Compliant</p>
          </div>
        </div>
      </div>

      {/* 3. Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("documents")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
            activeTab === "documents"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <FileText className="w-4 h-4" />
          Clause 7.5 Documented Information ({documents.length})
        </button>

        <button
          onClick={() => setActiveTab("competence")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
            activeTab === "competence"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <Users className="w-4 h-4" />
          Clause 7.2 Competence & Training
        </button>

        <button
          onClick={() => setActiveTab("calibration")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
            activeTab === "calibration"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <Wrench className="w-4 h-4" />
          Clause 7.1.5 Calibration & Equipment
        </button>

        <button
          onClick={() => setActiveTab("communication")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
            activeTab === "communication"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <Radio className="w-4 h-4" />
          Clause 7.4 Communication Matrix
        </button>

        <button
          onClick={() => setActiveTab("awareness")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
            activeTab === "awareness"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Clause 7.3 & 7.1.6 Knowledge Base
        </button>
      </div>

      {/* TAB 1: Clause 7.5 Documented Information Master Register */}
      {activeTab === "documents" && (
        <div className="space-y-4">
          {/* Filter Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by code, title, owner or department..."
                value={docSearch}
                onChange={(e) => setDocSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-semibold text-slate-500">Type:</span>
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Types</option>
                  <option value="Manual">Manual</option>
                  <option value="Policy">Policy</option>
                  <option value="SOP">SOP</option>
                  <option value="Work Instruction">Work Instruction</option>
                  <option value="Form">Form / Record</option>
                  <option value="External Doc">External Standard</option>
                </select>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-semibold text-slate-500">Status:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="Approved">Approved</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>
            </div>
          </div>

          {/* Master Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="px-4 py-3">Doc Code</th>
                    <th className="px-4 py-3">Document Title & Scope</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Dept</th>
                    <th className="px-4 py-3">Rev / Date</th>
                    <th className="px-4 py-3">Owner / Approver</th>
                    <th className="px-4 py-3">Retention</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredDocs.map((doc) => (
                    <tr key={doc.id} className="hover:bg-slate-50/70 transition">
                      <td className="px-4 py-3.5 font-bold text-blue-600">
                        {doc.code}
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="font-semibold text-slate-900">{doc.title}</div>
                        <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                          <span>{doc.location}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                          {doc.type}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-slate-700 font-medium">
                        {doc.dept}
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="font-semibold text-slate-800">{doc.version}</div>
                        <div className="text-[10px] text-slate-400">{doc.revDate}</div>
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="font-medium text-slate-800">{doc.owner}</div>
                        <div className="text-[10px] text-slate-400">App: {doc.approver}</div>
                      </td>
                      <td className="px-4 py-3.5 text-slate-600">
                        {doc.retention}
                      </td>
                      <td className="px-4 py-3.5">
                        {doc.status === "Approved" ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3" />
                            Approved
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                            <Clock className="w-3 h-3" />
                            Under Review
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            title="View Document"
                            className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button
                            title="Download Official PDF"
                            className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Document Control Guidelines Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100">
              <h4 className="text-xs font-bold text-blue-900 flex items-center gap-1.5 mb-1">
                <Check className="w-4 h-4 text-blue-600" />
                Clause 7.5.2 Creating & Updating
              </h4>
              <p className="text-[11px] text-blue-800/80 leading-relaxed">
                Ensure proper identification (title, date, author, reference number), approved format, and review for adequacy prior to publication.
              </p>
            </div>
            <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
              <h4 className="text-xs font-bold text-emerald-900 flex items-center gap-1.5 mb-1">
                <Check className="w-4 h-4 text-emerald-600" />
                Clause 7.5.3 Control of Documents
              </h4>
              <p className="text-[11px] text-emerald-800/80 leading-relaxed">
                Controlled distribution, availability where essential work is executed, protection of confidentiality, and prevention of unintended use of obsolete documents.
              </p>
            </div>
            <div className="bg-purple-50/60 p-4 rounded-xl border border-purple-100">
              <h4 className="text-xs font-bold text-purple-900 flex items-center gap-1.5 mb-1">
                <Check className="w-4 h-4 text-purple-600" />
                Retention & Disposal Schedule
              </h4>
              <p className="text-[11px] text-purple-800/80 leading-relaxed">
                All inspection records, training evaluations, and management review minutes are archived securely in accordance with regulatory retention periods.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Clause 7.2 Competence & Training */}
      {activeTab === "competence" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Competence & Annual Training Plan (Clause 7.2)
              </h3>
              <p className="text-xs text-slate-500">
                Ensure personnel performing work affecting quality are competent based on appropriate education, training, or experience.
              </p>
            </div>
            <button
              onClick={() => setIsAddTrainingModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition"
            >
              <Plus className="w-3.5 h-3.5" />
              Schedule Training
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trainingList.map((trn) => (
              <div
                key={trn.id}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                      {trn.id}
                    </span>
                    {trn.status === "Completed" ? (
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
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{trn.title}</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Target Audience:</span>
                      <span className="font-semibold text-slate-800">{trn.targetDept}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Participants:</span>
                      <span className="font-semibold text-slate-800">{trn.participants} Personnel</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Trainer / Faculty:</span>
                      <span className="font-semibold text-slate-800">{trn.trainer}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Date / Effectiveness:</span>
                      <span className="font-semibold text-emerald-600">
                        {trn.scheduledDate} ({trn.scoreAvg})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">Evaluation: Post-training test passed</span>
                  <button className="text-blue-600 font-bold hover:underline flex items-center gap-1">
                    View Attendance Record &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Clause 7.1.5 Calibration Register */}
      {activeTab === "calibration" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Monitoring & Measuring Resources / Calibration Register (Clause 7.1.5)
              </h3>
              <p className="text-xs text-slate-500">
                Verification and calibration of inspection tools against national or international measurement standards.
              </p>
            </div>
            <button
              onClick={() => setIsAddEquipmentModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Equipment
            </button>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="px-4 py-3">Equip ID</th>
                  <th className="px-4 py-3">Instrument Name</th>
                  <th className="px-4 py-3">Location / Dept</th>
                  <th className="px-4 py-3">Last Cal Date</th>
                  <th className="px-4 py-3">Next Due Date</th>
                  <th className="px-4 py-3">Certificate Ref</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {calibrationList.map((cal) => (
                  <tr key={cal.id} className="hover:bg-slate-50/70 transition">
                    <td className="px-4 py-3 font-bold text-blue-600">{cal.code}</td>
                    <td className="px-4 py-3 font-semibold text-slate-900">{cal.name}</td>
                    <td className="px-4 py-3 text-slate-600">{cal.dept}</td>
                    <td className="px-4 py-3 text-slate-700">{cal.lastCal}</td>
                    <td className="px-4 py-3 font-semibold text-slate-900">{cal.nextCal}</td>
                    <td className="px-4 py-3 text-blue-600 font-mono text-[11px]">
                      {cal.certificate}
                    </td>
                    <td className="px-4 py-3">
                      {cal.status === "Valid" ? (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Valid & In-Spec
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                          Due Soon
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-blue-600 hover:underline font-bold text-[11px]">
                        Certificate
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: Clause 7.4 Communication Matrix */}
      {activeTab === "communication" && (
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Internal & External Communication Matrix (Clause 7.4)
            </h3>
            <p className="text-xs text-slate-500">
              The organization determines the internal and external communications relevant to the quality management system.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="px-4 py-3">What is Communicated?</th>
                  <th className="px-4 py-3">When? (Frequency)</th>
                  <th className="px-4 py-3">With Whom? (Target)</th>
                  <th className="px-4 py-3">How? (Method / Channel)</th>
                  <th className="px-4 py-3">Who Communicates? (Responsibility)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {communicationMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition">
                    <td className="px-4 py-3.5 font-bold text-slate-900">
                      {item.what}
                    </td>
                    <td className="px-4 py-3.5 text-slate-600 font-medium">
                      {item.when}
                    </td>
                    <td className="px-4 py-3.5 text-blue-700 font-medium">
                      {item.withWhom}
                    </td>
                    <td className="px-4 py-3.5 text-slate-700">
                      {item.how}
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-slate-900">
                      {item.who}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 5: Clause 7.3 & 7.1.6 Knowledge Base */}
      {activeTab === "awareness" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Clause 7.3 Awareness Checklist
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              All personnel under the organization's control must be aware of:
            </p>

            <div className="space-y-3">
              {[
                {
                  title: "Quality Policy Understanding",
                  desc: "Every employee can state their role in achieving customer satisfaction and product quality.",
                  status: "100% Surveyed",
                },
                {
                  title: "Relevant Quality Objectives",
                  desc: "Departmental KPIs and current performance metrics are transparent on shop floor dashboards.",
                  status: "Active",
                },
                {
                  title: "Contribution to QMS Effectiveness",
                  desc: "Benefits of improved performance and reporting deviations early.",
                  status: "Trained",
                },
                {
                  title: "Implications of Not Conforming",
                  desc: "Clear awareness of safety, customer rejection, and legal consequences of nonconformance.",
                  status: "Enforced",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-start justify-between"
                >
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              Clause 7.1.6 Organizational Knowledge
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Knowledge necessary for the operation of processes and to achieve conformity of products and services:
            </p>

            <div className="space-y-3">
              <div className="p-3 bg-blue-50/60 rounded-lg border border-blue-100">
                <h4 className="font-bold text-blue-900 text-xs">Internal Intellectual Property</h4>
                <p className="text-[11px] text-blue-800/80 mt-1">
                  Proprietary production recipes, machine tooling templates, lessons learned from past failures, and unwritten operational tips codified into SOPs.
                </p>
              </div>

              <div className="p-3 bg-purple-50/60 rounded-lg border border-purple-100">
                <h4 className="font-bold text-purple-900 text-xs">External Knowledge Sources</h4>
                <p className="text-[11px] text-purple-800/80 mt-1">
                  National/International technical standards, regulatory updates, industry conferences, and customer feedback surveys.
                </p>
              </div>

              <div className="p-3 bg-emerald-50/60 rounded-lg border border-emerald-100">
                <h4 className="font-bold text-emerald-900 text-xs">Succession & Knowledge Retention</h4>
                <p className="text-[11px] text-emerald-800/80 mt-1">
                  Mentorship pairing for key machine operators, structured handover documentation, and video work instructions for complex assemblies.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Document Modal */}
      {isAddDocModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-blue-100 text-blue-700 rounded-lg">
                  <FileText className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  Register Controlled Document (7.5)
                </h3>
              </div>
              <button
                onClick={() => setIsAddDocModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddDocument} className="space-y-3.5 mt-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Document Code *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. SOP-QC-015"
                    value={newDoc.code}
                    onChange={(e) => setNewDoc({ ...newDoc, code: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Document Type *
                  </label>
                  <select
                    value={newDoc.type}
                    onChange={(e) => setNewDoc({ ...newDoc, type: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="SOP">SOP</option>
                    <option value="Policy">Policy</option>
                    <option value="Manual">Manual</option>
                    <option value="Work Instruction">Work Instruction</option>
                    <option value="Form">Form / Record</option>
                    <option value="External Doc">External Standard</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">
                  Document Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Raw Material Receiving & Testing SOP"
                  value={newDoc.title}
                  onChange={(e) => setNewDoc({ ...newDoc, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Department
                  </label>
                  <input
                    type="text"
                    placeholder="Quality / Operations"
                    value={newDoc.dept}
                    onChange={(e) => setNewDoc({ ...newDoc, dept: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Version Number
                  </label>
                  <input
                    type="text"
                    placeholder="v1.0"
                    value={newDoc.version}
                    onChange={(e) => setNewDoc({ ...newDoc, version: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Owner / Author
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Quality Manager"
                    value={newDoc.owner}
                    onChange={(e) => setNewDoc({ ...newDoc, owner: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Retention Period
                  </label>
                  <select
                    value={newDoc.retention}
                    onChange={(e) => setNewDoc({ ...newDoc, retention: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="3 Years">3 Years</option>
                    <option value="5 Years">5 Years</option>
                    <option value="7 Years">7 Years</option>
                    <option value="Permanent">Permanent</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddDocModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-sm"
                >
                  Save & Control Document
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
