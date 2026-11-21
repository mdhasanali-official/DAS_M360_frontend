import { useState } from "react";
import {
  Building2,
  Globe2,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  FileText,
  Compass,
  Cpu,
  Scale,
  Plus,
  Bell,
  PieChart,
  UserCheck,
  Briefcase,
  Share2,
  Search,
  Download,
  Edit3,
  Trash2,
  Filter,
  Check,
  ExternalLink,
} from "lucide-react";
import { toast } from "react-hot-toast";

// ব্যাকএন্ড-রেডি স্ট্রাকচার্ড ডেমো ডাটা (পরবর্তীতে API থেকে লোড হবে)
const INITIAL_INTERNAL_ISSUES = [
  "Human Resources (Staff skills, competence, retention)",
  "Infrastructure & Facility Maintenance",
  "Technology & Production Automation",
  "Financial Resources & Cashflow",
  "Organizational Culture & Core Values",
  "Processes & ERP Systems Efficiency",
];

const INITIAL_EXTERNAL_ISSUES = [
  "Market & Customer Preference Trends",
  "Competitor Activities & Price Fluctuations",
  "Legal, Statutory & Food Safety Regulations",
  "Economic Factors (Inflation, Raw Material Costs)",
  "Technological Trends (AI, Cloud QMS)",
  "Environmental & Climate Impact on Supply Chain",
];

const INITIAL_SWOT = {
  strengths: [
    "Highly experienced core technical team",
    "Strong market brand reputation & trust",
    "Established ISO-certified QMS processes",
    "Solid nationwide supply chain network",
  ],
  weaknesses: [
    "Limited end-to-end automation in packing",
    "High dependence on specialized key staff",
    "Operational overhead cost during off-seasons",
  ],
  opportunities: [
    "Rapidly expanding national market demand",
    "New organic & healthy product line launch",
    "Full digital transformation & automated ERP",
  ],
  threats: [
    "Increasing aggressive price competition",
    "Frequent shifts in regulatory & tax laws",
    "Economic inflation affecting consumer purchasing power",
  ],
};

const INITIAL_PESTEL = [
  {
    letter: "P",
    name: "Political",
    color: "bg-blue-600 text-white",
    badge: "border-blue-200 bg-blue-50/70",
    points: "Government industrial policy, Trade & export regulations, Political stability",
  },
  {
    letter: "E",
    name: "Economic",
    color: "bg-emerald-600 text-white",
    badge: "border-emerald-200 bg-emerald-50/70",
    points: "Inflation & lending interest rates, Currency exchange rate, GDP growth",
  },
  {
    letter: "S",
    name: "Social",
    color: "bg-purple-600 text-white",
    badge: "border-purple-200 bg-purple-50/70",
    points: "Consumer purchasing behaviour, Demographic changes, Health lifestyle trends",
  },
  {
    letter: "T",
    name: "Technological",
    color: "bg-amber-500 text-white",
    badge: "border-amber-200 bg-amber-50/70",
    points: "Automation & Robotics, Cloud-based ERP systems, Digital traceability",
  },
  {
    letter: "E",
    name: "Environmental",
    color: "bg-teal-600 text-white",
    badge: "border-teal-200 bg-teal-50/70",
    points: "Climate impact on raw materials, Waste management & zero-effluent compliance",
  },
  {
    letter: "L",
    name: "Legal",
    color: "bg-rose-600 text-white",
    badge: "border-rose-200 bg-rose-50/70",
    points: "Labor employment laws, Quality standards compliance, Industry-specific certifications",
  },
];

const INITIAL_PARTIES = [
  {
    id: 1,
    party: "Customers & Consumers",
    category: "Customer",
    relevance: "High",
    requirements: "Consistent premium quality, On-time delivery, Fair pricing, Safe packaging",
    method: "Email, Meetings, Feedback Portal",
    person: "Sales & Marketing Director",
  },
  {
    id: 2,
    party: "Employees & Staff",
    category: "Internal",
    relevance: "High",
    requirements: "Safe working environment, Timely compensation, Training & Career growth",
    method: "Townhalls, Notices, HR App",
    person: "Head of Human Resources",
  },
  {
    id: 3,
    party: "Suppliers & Vendors",
    category: "External",
    relevance: "Medium",
    requirements: "Clear purchase orders, Fair payment terms, Long-term partnership",
    method: "Vendor Meetings, Supplier Audits",
    person: "Procurement Manager",
  },
  {
    id: 4,
    party: "Regulatory Authorities (BSTI, ISO, City Corp)",
    category: "External",
    relevance: "High",
    requirements: "Full legal statutory compliance, Periodic lab tests, Timely audits",
    method: "Official Submissions, On-site Audits",
    person: "Compliance & Legal Officer",
  },
  {
    id: 5,
    party: "Shareholders & Board of Directors",
    category: "Internal",
    relevance: "High",
    requirements: "Sustainable profitability, Brand reputation, Corporate governance",
    method: "Monthly Board Meetings, Financial Reports",
    person: "Managing Director (MD)",
  },
  {
    id: 6,
    party: "Local Community & Neighbors",
    category: "External",
    relevance: "Medium",
    requirements: "Environmental protection, Zero noise/waste pollution, Social CSR support",
    method: "CSR Programs, Community Liaisons",
    person: "CSR Coordinator",
  },
];

export default function Organization() {
  const [activeTab, setActiveTab] = useState("all"); // 'all' | 'issues' | 'parties' | 'swot'
  const [searchTerm, setSearchTerm] = useState("");
  const [partiesList, setPartiesList] = useState(INITIAL_PARTIES);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Party Form State
  const [newParty, setNewParty] = useState({
    party: "",
    category: "External",
    relevance: "High",
    requirements: "",
    method: "",
    person: "",
  });

  const handleAddParty = (e) => {
    e.preventDefault();
    if (!newParty.party || !newParty.requirements) {
      toast.error("Please fill in the party name and requirements");
      return;
    }

    const created = {
      id: Date.now(),
      ...newParty,
    };

    setPartiesList([created, ...partiesList]);
    setIsAddModalOpen(false);
    setNewParty({
      party: "",
      category: "External",
      relevance: "High",
      requirements: "",
      method: "",
      person: "",
    });
    toast.success("New Interested Party added successfully!");
  };

  const handleDeleteParty = (id) => {
    setPartiesList(partiesList.filter((p) => p.id !== id));
    toast.success("Party removed");
  };

  // Filtered parties
  const filteredParties = partiesList.filter(
    (p) =>
      p.party.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.requirements.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.person.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full space-y-5 pb-8 font-sans text-slate-800">
      {/* 1. TOP HEADER BANNER (Clean, High-Readability & Modern) */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 rounded-xl bg-white/20 backdrop-blur-md">
              <Building2 className="w-6 h-6 text-white" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Context of the Organization
            </h1>
            <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold tracking-wide uppercase">
              Clause 4.1 & 4.2
            </span>
          </div>
          <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed max-w-2xl">
            Analyze internal & external organizational factors, identify interested parties, and set the strategic foundation for your ISO 9001:2015 Quality Management System.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm shadow-md transition"
          >
            <Plus className="w-4 h-4" />
            <span>Add Interested Party</span>
          </button>

          <button
            onClick={() => toast.success("Generating ISO Audit Dossier (PDF)...")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-800/80 hover:bg-blue-900 text-white font-semibold text-sm border border-white/20 shadow transition"
          >
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* 2. SUMMARY METRICS (Spacious & Clean) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Bell className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Internal Issues</p>
            <p className="text-2xl font-black text-slate-900 mt-0.5">{INITIAL_INTERNAL_ISSUES.length}</p>
            <p className="text-xs text-slate-400 mt-0.5">Strengths & Weaknesses</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
            <Globe2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">External Issues</p>
            <p className="text-2xl font-black text-slate-900 mt-0.5">{INITIAL_EXTERNAL_ISSUES.length}</p>
            <p className="text-xs text-slate-400 mt-0.5">Opportunities & Threats</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Stakeholders</p>
            <p className="text-2xl font-black text-slate-900 mt-0.5">{partiesList.length}</p>
            <p className="text-xs text-slate-400 mt-0.5">Identified Interested Parties</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">ISO Status</p>
            <p className="text-2xl font-black text-emerald-600 mt-0.5">Audited</p>
            <p className="text-xs text-slate-400 mt-0.5">Clause 4.1 & 4.2 Compliant</p>
          </div>
        </div>
      </div>

      {/* 3. CLAUSE 4.1: INTERNAL & EXTERNAL ISSUES (Readable, Modern Layout) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              4.1
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Internal & External Issues Analysis
              </h2>
              <p className="text-xs text-slate-500">
                Understanding the organization and its strategic direction
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Clause 4.1 Requirement
          </span>
        </div>

        <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Internal Issues */}
          <div className="p-5 rounded-xl bg-emerald-50/40 border border-emerald-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Internal Issues</h3>
                  <p className="text-xs text-emerald-700 font-medium">Organizational Factors, Culture & Capabilities</p>
                </div>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                {INITIAL_INTERNAL_ISSUES.length} Items
              </span>
            </div>

            <ul className="space-y-2.5">
              {INITIAL_INTERNAL_ISSUES.map((issue, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-emerald-100/80 text-sm text-slate-700 hover:shadow-xs transition"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{issue}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* External Issues */}
          <div className="p-5 rounded-xl bg-orange-50/40 border border-orange-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">External Issues</h3>
                  <p className="text-xs text-orange-700 font-medium">Market, Regulatory, Social & Environmental Factors</p>
                </div>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                {INITIAL_EXTERNAL_ISSUES.length} Items
              </span>
            </div>

            <ul className="space-y-2.5">
              {INITIAL_EXTERNAL_ISSUES.map((issue, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-orange-100/80 text-sm text-slate-700 hover:shadow-xs transition"
                >
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{issue}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 4. SWOT & PESTEL ANALYSIS GRID (Spacious, High Readability) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* SWOT Analysis (Col 7) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
            <div>
              <h2 className="text-base font-bold text-slate-900">SWOT Matrix</h2>
              <p className="text-xs text-slate-500">Internal strengths/weaknesses and external opportunities/threats</p>
            </div>
            <button
              onClick={() => toast("SWOT Matrix update mode active", { icon: "📝" })}
              className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
            >
              <Edit3 className="w-3.5 h-3.5" /> Edit Matrix
            </button>
          </div>

          <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            {/* Strengths */}
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <h4 className="text-sm font-bold text-emerald-900 uppercase tracking-wide">Strengths</h4>
              </div>
              <ul className="space-y-2">
                {INITIAL_SWOT.strengths.map((item, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                <h4 className="text-sm font-bold text-rose-900 uppercase tracking-wide">Weaknesses</h4>
              </div>
              <ul className="space-y-2">
                {INITIAL_SWOT.weaknesses.map((item, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opportunities */}
            <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
                <h4 className="text-sm font-bold text-sky-900 uppercase tracking-wide">Opportunities</h4>
              </div>
              <ul className="space-y-2">
                {INITIAL_SWOT.opportunities.map((item, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Threats */}
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wide">Threats</h4>
              </div>
              <ul className="space-y-2">
                {INITIAL_SWOT.threats.map((item, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* PESTEL Analysis (Col 5) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
            <div>
              <h2 className="text-base font-bold text-slate-900">PESTEL Analysis</h2>
              <p className="text-xs text-slate-500">Macro-environmental scanning & risk indicators</p>
            </div>
            <span className="text-xs font-semibold text-slate-400">6 Pillars</span>
          </div>

          <div className="p-5 space-y-3 flex-1 overflow-y-auto">
            {INITIAL_PESTEL.map((p) => (
              <div
                key={p.name}
                className="p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 transition flex items-start gap-3"
              >
                <div
                  className={`w-7 h-7 rounded-lg ${p.color} font-black text-xs flex items-center justify-center shrink-0 shadow-xs`}
                >
                  {p.letter}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900">{p.name}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-snug mt-0.5">{p.points}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. CLAUSE 4.2: INTERESTED PARTIES TABLE (Dynamic, Searchable, Add/Delete ready) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                4.2
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Interested Parties & Stakeholders Register
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Identifying needs, expectations, and monitoring compliance obligations
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Box */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search stakeholder or person..."
                className="pl-9 pr-3.5 py-1.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 w-48 sm:w-64"
              />
            </div>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add New</span>
            </button>
          </div>
        </div>

        {/* Table Content with Readable Font & Comfortable Spacing */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 text-slate-700 font-semibold text-xs border-b border-slate-200">
                <th className="py-3 px-4 w-12 text-center">#</th>
                <th className="py-3 px-4">Interested Party</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4 text-center">Relevance</th>
                <th className="py-3 px-4">Key Requirements / Expectations</th>
                <th className="py-3 px-4">Communication Method</th>
                <th className="py-3 px-4">Responsible Person</th>
                <th className="py-3 px-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredParties.map((p, idx) => (
                <tr key={p.id} className="hover:bg-blue-50/30 transition">
                  <td className="py-3.5 px-4 text-slate-400 font-medium text-center text-xs">{idx + 1}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                    {p.party}
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold ${
                        p.category === "Customer"
                          ? "bg-blue-100 text-blue-800"
                          : p.category === "Internal"
                          ? "bg-sky-100 text-sky-800"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {p.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        p.relevance === "High"
                          ? "bg-rose-100 text-rose-700 border border-rose-200"
                          : "bg-amber-100 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {p.relevance}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 max-w-xs leading-relaxed text-xs sm:text-sm">
                    {p.requirements}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 text-xs sm:text-sm whitespace-nowrap">
                    {p.method}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-800 text-xs sm:text-sm whitespace-nowrap">
                    {p.person}
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <button
                      onClick={() => handleDeleteParty(p.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. LINK TO FURTHER ISO MODULES (Clause Integration Workflow) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Link to Further ISO 9001:2015 Modules
            </h3>
            <p className="text-xs text-slate-500">
              How Clause 4 outputs feed into Risks, Strategy and Process Management
            </p>
          </div>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            PDCA Alignment
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 relative group">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                6.1
              </div>
              <h4 className="text-sm font-bold text-slate-900">Risk & Opportunity Management</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Identified context issues and stakeholder needs feed directly into the 5x5 Risk Assessment Matrix.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-200 relative group">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-xs">
                6.2
              </div>
              <h4 className="text-sm font-bold text-slate-900">Strategic Quality Objectives</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Supports multi-year roadmap (2026–2030) and department-wise annual KPI target allocation.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 relative group">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                4.4
              </div>
              <h4 className="text-sm font-bold text-slate-900">Process Management & Mapping</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Provides inputs for defining Core, Support, and Management process boundaries and interactions.
            </p>
          </div>
        </div>
      </div>

      {/* ADD INTERESTED PARTY MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">Add New Interested Party</h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddParty} className="space-y-4 mt-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Interested Party / Stakeholder Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Export Buyers, Financial Auditor"
                  value={newParty.party}
                  onChange={(e) => setNewParty({ ...newParty, party: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                  <select
                    value={newParty.category}
                    onChange={(e) => setNewParty({ ...newParty, category: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 outline-none"
                  >
                    <option value="Customer">Customer</option>
                    <option value="Internal">Internal</option>
                    <option value="External">External</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Relevance Level</label>
                  <select
                    value={newParty.relevance}
                    onChange={(e) => setNewParty({ ...newParty, relevance: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 outline-none"
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Key Requirements / Expectations *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="e.g. Compliance with statutory ISO standards..."
                  value={newParty.requirements}
                  onChange={(e) => setNewParty({ ...newParty, requirements: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Communication Method</label>
                  <input
                    type="text"
                    placeholder="e.g. Official Email, Portal"
                    value={newParty.method}
                    onChange={(e) => setNewParty({ ...newParty, method: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Responsible Person</label>
                  <input
                    type="text"
                    placeholder="e.g. Quality Manager"
                    value={newParty.person}
                    onChange={(e) => setNewParty({ ...newParty, person: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                >
                  Save Stakeholder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
