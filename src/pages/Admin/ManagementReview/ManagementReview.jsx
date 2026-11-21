import { useState } from "react";
import {
  UsersRound,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  Plus,
  Search,
  Filter,
  Eye,
  ShieldCheck,
  Award,
  FileText,
  Layers,
  ArrowRight,
  TrendingUp,
  X,
  Check,
} from "lucide-react";

export default function ManagementReview() {
  const [activeTab, setActiveTab] = useState("meetings");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  // MRM Meetings Data (Clause 9.3)
  const [meetings, setMeetings] = useState([
    {
      id: "MRM-2024-02",
      title: "H2 Annual Strategic Management Review Meeting (MRM)",
      date: "2024-10-24",
      chairperson: "Managing Director",
      secretary: "Quality Director",
      attendees: 9,
      status: "Completed",
      inputsCovered: "12 / 12 Mandatory Clauses",
      actionItemsTotal: 6,
      actionItemsClosed: 4,
      minutesFile: "MOM-MRM-2024-02.pdf",
    },
    {
      id: "MRM-2024-01",
      title: "H1 Mid-Year QMS Performance & Audit Review Meeting",
      date: "2024-04-18",
      chairperson: "Managing Director",
      secretary: "Quality Director",
      attendees: 8,
      status: "Completed",
      inputsCovered: "12 / 12 Mandatory Clauses",
      actionItemsTotal: 5,
      actionItemsClosed: 5,
      minutesFile: "MOM-MRM-2024-01.pdf",
    },
    {
      id: "MRM-2025-01",
      title: "H1 2025 QMS Strategic Objectives & Resource Planning MRM",
      date: "2025-04-15",
      chairperson: "Managing Director",
      secretary: "Quality Director",
      attendees: 9,
      status: "Scheduled",
      inputsCovered: "Agenda Circulated",
      actionItemsTotal: 0,
      actionItemsClosed: 0,
      minutesFile: "Agenda-Draft.pdf",
    },
  ]);

  // Clause 9.3.2 Mandatory ISO 9001:2015 Inputs Checklist
  const mandatoryInputs = [
    {
      clause: "9.3.2 a",
      item: "Status of actions from previous management reviews",
      status: "Reviewed & Approved",
      summary: "5 of 5 actions from H1 2024 verified closed by Lead Auditor.",
    },
    {
      clause: "9.3.2 b",
      item: "Changes in external and internal issues relevant to QMS (Clause 4.1)",
      status: "Reviewed & Approved",
      summary: "Updated for raw material foreign exchange fluctuation and European CE Mark scope.",
    },
    {
      clause: "9.3.2 c.1",
      item: "Customer satisfaction and feedback from relevant interested parties (9.1.2)",
      status: "Reviewed & Approved",
      summary: "Customer CSAT achieved 94.2% (Target: 90%). 2 client suggestions adopted.",
    },
    {
      clause: "9.3.2 c.2",
      item: "Extent to which Quality Objectives have been met (Clause 6.2)",
      status: "Reviewed & Approved",
      summary: "7 of 8 company objectives achieved or on track (87.5% attainment).",
    },
    {
      clause: "9.3.2 c.3",
      item: "Process performance and conformity of products and services (Clause 8)",
      status: "Reviewed & Approved",
      summary: "Manufacturing scrap rate decreased to 1.8% (Target < 2.5%). OEE at 86.4%.",
    },
    {
      clause: "9.3.2 c.4",
      item: "Nonconformities and corrective actions (CAPA status - Clause 10.2)",
      status: "Reviewed & Approved",
      summary: "12 NCs logged, 10 closed, 2 in verification. Recurrence rate zero.",
    },
    {
      clause: "9.3.2 c.5",
      item: "Monitoring and measurement results (Calibration - Clause 7.1.5)",
      status: "Reviewed & Approved",
      summary: "100% of 14 measuring instruments in valid calibration tolerance.",
    },
    {
      clause: "9.3.2 c.6",
      item: "Internal & External audit results (Clause 9.2)",
      status: "Reviewed & Approved",
      summary: "DAS annual surveillance audit successfully cleared with 0 Major NCs.",
    },
    {
      clause: "9.3.2 d",
      item: "Performance of external providers and suppliers (Clause 8.4)",
      status: "Reviewed & Approved",
      summary: "On-time delivery 94%. Evaluated 24 approved suppliers; 1 placed on probation.",
    },
    {
      clause: "9.3.2 e",
      item: "Adequacy of resources (Human, Infrastructure, Work Environment - Clause 7.1)",
      status: "Reviewed & Approved",
      summary: "Approved budget for 2 CNC machine replacements and HVAC maintenance.",
    },
    {
      clause: "9.3.2 f",
      item: "Effectiveness of actions taken to address risks and opportunities (Clause 6.1)",
      status: "Reviewed & Approved",
      summary: "Supply chain dual-sourcing reduced raw material shortage risk from High to Low.",
    },
    {
      clause: "9.3.2 g",
      item: "Opportunities for continual improvement (Clause 10.3)",
      status: "Reviewed & Approved",
      summary: "Approved Kaizen proposal for barcode tracking on finished carton boxes.",
    },
  ];

  // Clause 9.3.3 MRM Outputs / Action Items Register
  const [actionItems, setActionItems] = useState([
    {
      id: "ACT-MRM-01",
      mrmRef: "MRM-2024-02",
      outputType: "Resource Allocation",
      action: "Approve BDT 2.4M capex for second CNC machining center to eliminate bottleneck.",
      owner: "Managing Director",
      dueDate: "2024-12-30",
      status: "In Progress",
    },
    {
      id: "ACT-MRM-02",
      mrmRef: "MRM-2024-02",
      outputType: "Continual Improvement",
      action: "Introduce automated digital barcode scanners at QC packaging line 1 & 2.",
      owner: "Plant Head",
      dueDate: "2024-11-30",
      status: "Completed",
    },
    {
      id: "ACT-MRM-03",
      mrmRef: "MRM-2024-02",
      outputType: "QMS Change",
      action: "Revise SOP-PUR-002 to incorporate quarterly ESG and financial health screening for Tier-1 suppliers.",
      owner: "Procurement Lead",
      dueDate: "2024-12-15",
      status: "Completed",
    },
    {
      id: "ACT-MRM-04",
      mrmRef: "MRM-2024-02",
      outputType: "Competence",
      action: "Arrange ISO 9001:2015 internal auditor refresher course for 6 newly promoted team leads.",
      owner: "HR Manager",
      dueDate: "2025-01-15",
      status: "In Progress",
    },
  ]);

  // Modal Form State
  const [newMeeting, setNewMeeting] = useState({
    title: "",
    date: "",
    chairperson: "Managing Director",
    secretary: "Quality Director",
    attendees: 8,
  });

  const handleAddMeeting = (e) => {
    e.preventDefault();
    if (!newMeeting.title || !newMeeting.date) return;
    const item = {
      id: `MRM-2025-0${meetings.length + 1}`,
      ...newMeeting,
      status: "Scheduled",
      inputsCovered: "Agenda Prepared",
      actionItemsTotal: 0,
      actionItemsClosed: 0,
      minutesFile: "Agenda-Draft.pdf",
    };
    setMeetings([item, ...meetings]);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full space-y-5 pb-8 font-sans text-slate-800">
      {/* 1. Header Banner */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="p-2 bg-white/20 backdrop-blur-md rounded-xl inline-flex text-white">
                <UsersRound className="w-6 h-6" />
              </span>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Management Review (MRM)
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-md border border-white/30 uppercase tracking-wider">
                Clause 9.3
              </span>
            </div>
            <p className="text-blue-100 text-sm max-w-2xl leading-relaxed">
              Top management shall review the organization's quality management system at planned intervals, to ensure its continuing suitability, adequacy, effectiveness, and alignment with the strategic direction.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white text-blue-700 hover:bg-blue-50 rounded-xl text-xs font-bold transition shadow-sm active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Schedule MRM
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-800/60 hover:bg-blue-800 text-white rounded-xl text-xs font-semibold backdrop-blur-md border border-white/20 transition active:scale-95">
              <Download className="w-4 h-4" />
              Export Minutes (MOM)
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
              MRM Frequency
            </p>
            <h3 className="text-xl font-bold text-slate-900">Bi-Annual</h3>
            <p className="text-[10px] text-emerald-600 font-medium">H1 & H2 Completed</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Clause 9.3.2 Inputs
            </p>
            <h3 className="text-xl font-bold text-emerald-600">12 / 12</h3>
            <p className="text-[10px] text-emerald-600 font-medium">100% Mandated Items</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              MRM Outputs
            </p>
            <h3 className="text-xl font-bold text-slate-900">{actionItems.length}</h3>
            <p className="text-[10px] text-slate-400 font-medium">Strategic Actions</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Action Closure
            </p>
            <h3 className="text-xl font-bold text-emerald-600">75%</h3>
            <p className="text-[10px] text-emerald-600 font-medium">6 Closed, 2 Active</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600">
            <UsersRound className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Attendance
            </p>
            <h3 className="text-xl font-bold text-purple-600">100%</h3>
            <p className="text-[10px] text-slate-400 font-medium">All HODs Present</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-teal-50 text-teal-600">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              ISO Compliance
            </p>
            <h3 className="text-base font-bold text-emerald-600">Audited</h3>
            <p className="text-[10px] text-slate-400 font-medium">Clause 9.3 Compliant</p>
          </div>
        </div>
      </div>

      {/* 3. Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab("meetings")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "meetings"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <Calendar className="w-4 h-4" />
          MRM Meetings Register ({meetings.length})
        </button>

        <button
          onClick={() => setActiveTab("inputs")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "inputs"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          Clause 9.3.2 Mandatory Inputs Checklist (12/12)
        </button>

        <button
          onClick={() => setActiveTab("outputs")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "outputs"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <Layers className="w-4 h-4" />
          Clause 9.3.3 MRM Outputs & Actions ({actionItems.length})
        </button>
      </div>

      {/* TAB 1: MRM Meetings Register */}
      {activeTab === "meetings" && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="px-4 py-3">Meeting Ref</th>
                  <th className="px-4 py-3">Meeting Title & Scope</th>
                  <th className="px-4 py-3">Meeting Date</th>
                  <th className="px-4 py-3">Chairperson / Secretary</th>
                  <th className="px-4 py-3">Attendees</th>
                  <th className="px-4 py-3">Clause 9.3.2 Inputs</th>
                  <th className="px-4 py-3">Actions Closed</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">MOM File</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {meetings.map((m) => (
                  <tr key={m.id} className="hover:bg-slate-50/70 transition">
                    <td className="px-4 py-3.5 font-bold text-blue-600">{m.id}</td>
                    <td className="px-4 py-3.5 font-semibold text-slate-900">{m.title}</td>
                    <td className="px-4 py-3.5 font-medium text-slate-800">{m.date}</td>
                    <td className="px-4 py-3.5">
                      <div className="font-semibold text-slate-800">{m.chairperson}</div>
                      <div className="text-[10px] text-slate-400">Sec: {m.secretary}</div>
                    </td>
                    <td className="px-4 py-3.5 text-slate-700 font-medium">
                      {m.attendees} Members
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="font-semibold text-emerald-700">{m.inputsCovered}</span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="font-bold text-slate-900">
                        {m.actionItemsClosed} / {m.actionItemsTotal}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      {m.status === "Completed" ? (
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
                      <button className="text-blue-600 hover:underline font-bold text-[11px] inline-flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: Clause 9.3.2 Mandatory Inputs Checklist */}
      {activeTab === "inputs" && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-200">
            <h3 className="text-sm font-bold text-slate-900">
              ISO 9001:2015 Clause 9.3.2 Mandatory Management Review Inputs Matrix
            </h3>
            <p className="text-xs text-slate-500">
              The management review shall be planned and carried out taking into consideration all 12 mandated points.
            </p>
          </div>

          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-4 py-3">Clause Ref</th>
                <th className="px-4 py-3">Mandatory ISO 9001:2015 Review Subject</th>
                <th className="px-4 py-3">Executive Summary & Findings</th>
                <th className="px-4 py-3">Compliance Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mandatoryInputs.map((input, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition">
                  <td className="px-4 py-3.5 font-bold text-blue-600 whitespace-nowrap">
                    {input.clause}
                  </td>
                  <td className="px-4 py-3.5 font-semibold text-slate-900 max-w-xs">
                    {input.item}
                  </td>
                  <td className="px-4 py-3.5 text-slate-700 leading-relaxed max-w-md">
                    {input.summary}
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <Check className="w-3 h-3" />
                      {input.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* TAB 3: Clause 9.3.3 Outputs & Actions */}
      {activeTab === "outputs" && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Clause 9.3.3 Management Review Outputs & Decisions Register
              </h3>
              <p className="text-xs text-slate-500">
                Decisions and actions related to: opportunities for improvement, any need for changes to the QMS, and resource needs.
              </p>
            </div>
          </div>

          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-4 py-3">Action ID</th>
                <th className="px-4 py-3">MRM Ref</th>
                <th className="px-4 py-3">Clause 9.3.3 Category</th>
                <th className="px-4 py-3">Executive Decision / Action Required</th>
                <th className="px-4 py-3">Responsible Owner</th>
                <th className="px-4 py-3">Due Date</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {actionItems.map((act) => (
                <tr key={act.id} className="hover:bg-slate-50/70 transition">
                  <td className="px-4 py-3.5 font-bold text-blue-600">{act.id}</td>
                  <td className="px-4 py-3.5 text-slate-700 font-medium">{act.mrmRef}</td>
                  <td className="px-4 py-3.5">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {act.outputType}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 font-semibold text-slate-900 max-w-sm">
                    {act.action}
                  </td>
                  <td className="px-4 py-3.5 font-medium text-slate-800">{act.owner}</td>
                  <td className="px-4 py-3.5 text-slate-700">{act.dueDate}</td>
                  <td className="px-4 py-3.5">
                    {act.status === "Completed" ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" />
                        Completed
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
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
      )}

      {/* Add MRM Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-blue-100 text-blue-700 rounded-lg">
                  <Calendar className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  Schedule Management Review (Clause 9.3)
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddMeeting} className="space-y-3 mt-4 text-xs">
              <div>
                <label className="block text-slate-600 font-semibold mb-1">
                  Meeting Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. H1 2025 Annual QMS Strategic Review"
                  value={newMeeting.title}
                  onChange={(e) => setNewMeeting({ ...newMeeting, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Meeting Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={newMeeting.date}
                    onChange={(e) => setNewMeeting({ ...newMeeting, date: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Expected Attendees
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={newMeeting.attendees}
                    onChange={(e) => setNewMeeting({ ...newMeeting, attendees: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Chairperson
                  </label>
                  <input
                    type="text"
                    value={newMeeting.chairperson}
                    onChange={(e) => setNewMeeting({ ...newMeeting, chairperson: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Secretary / Quality Lead
                  </label>
                  <input
                    type="text"
                    value={newMeeting.secretary}
                    onChange={(e) => setNewMeeting({ ...newMeeting, secretary: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
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
                  Schedule MRM
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
