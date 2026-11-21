import { useState } from "react";
import {
  AlertTriangle,
  ShieldCheck,
  TrendingUp,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  CheckCircle2,
  Clock,
  Layers,
  ArrowUpRight,
  Flame,
  Check,
  X,
  Target,
} from "lucide-react";

export default function Risks() {
  const [activeTab, setActiveTab] = useState("risks");
  const [riskTypeFilter, setRiskTypeFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRisk, setSelectedRisk] = useState(null);

  // Clause 6.1 Risk Register Data
  const [riskList, setRiskList] = useState([
    {
      id: "RSK-01",
      code: "RSK-SC-01",
      type: "Risk",
      category: "Supply Chain",
      title: "Single source raw material supplier disruption",
      cause: "Exclusive vendor dependency for imported alloy steel",
      consequence: "Production halt for 10-15 business days and shipment delays",
      likelihood: 4,
      impact: 4,
      score: 16,
      level: "High",
      mitigation: "Develop secondary supplier in local market & buffer 30-day stock",
      residualLikelihood: 2,
      residualImpact: 3,
      residualScore: 6,
      owner: "Procurement Lead",
      dueDate: "2024-12-15",
      status: "Mitigating",
    },
    {
      id: "RSK-02",
      code: "RSK-OP-02",
      title: "CNC spindle bearing wear & unexpected machine failure",
      cause: "Continuous 3-shift operation without scheduled interval cooling",
      consequence: "Out-of-tolerance manufactured parts & unplanned downtime",
      likelihood: 4,
      impact: 5,
      score: 20,
      level: "Critical",
      mitigation: "Implement weekly predictive vibration analysis & standby motor",
      residualLikelihood: 1,
      residualImpact: 3,
      residualScore: 3,
      owner: "Maintenance Head",
      dueDate: "2024-11-30",
      status: "Mitigating",
    },
    {
      id: "RSK-03",
      code: "RSK-CMP-03",
      type: "Risk",
      category: "Compliance",
      title: "Regulatory environmental effluent discharge limit updates",
      cause: "Revised national wastewater treatment parameters",
      consequence: "Potential statutory penalties & audit non-compliance flag",
      likelihood: 3,
      impact: 4,
      score: 12,
      level: "Medium",
      mitigation: "Upgrade ETP bio-reactor membrane filter & bi-monthly third-party testing",
      residualLikelihood: 1,
      residualImpact: 2,
      residualScore: 2,
      owner: "HSE Officer",
      dueDate: "2025-01-20",
      status: "Controlled",
    },
    {
      id: "RSK-04",
      code: "RSK-HR-04",
      type: "Risk",
      category: "Human Resource",
      title: "High turnover of certified CNC programmers & QA inspectors",
      cause: "Competitive local job market offerings in export processing zone",
      consequence: "Loss of institutional quality know-how & onboarding lag",
      likelihood: 3,
      impact: 3,
      score: 9,
      level: "Medium",
      mitigation: "Implement quarterly skill retention allowance & junior cross-training",
      residualLikelihood: 2,
      residualImpact: 2,
      residualScore: 4,
      owner: "HR Manager",
      dueDate: "2024-12-30",
      status: "Mitigating",
    },
    {
      id: "RSK-05",
      code: "RSK-CYB-05",
      type: "Risk",
      category: "Cybersecurity & IT",
      title: "ERP Database corruption or server ransomware threat",
      cause: "Unpatched on-premise secondary staging server exposed to internet",
      consequence: "Loss of traceability records for ISO audit and client orders",
      likelihood: 2,
      impact: 5,
      score: 10,
      level: "Medium",
      mitigation: "Enforce automated encrypted cloud backups every 6h & firewall isolation",
      residualLikelihood: 1,
      residualImpact: 2,
      residualScore: 2,
      owner: "IT Systems Lead",
      dueDate: "2024-11-10",
      status: "Controlled",
    },
    {
      id: "RSK-06",
      code: "RSK-FIN-06",
      type: "Risk",
      category: "Financial",
      title: "Foreign exchange currency depreciation on raw imports",
      cause: "High volatility in USD to BDT foreign exchange rate",
      consequence: "Margin erosion on fixed-price long-term export contracts",
      likelihood: 4,
      impact: 3,
      score: 12,
      level: "Medium",
      mitigation: "Include currency escalation clauses in new RFQs & forward hedging",
      residualLikelihood: 2,
      residualImpact: 2,
      residualScore: 4,
      owner: "Finance Director",
      dueDate: "2025-02-28",
      status: "Controlled",
    },
  ]);

  // Opportunities Data (Clause 6.1.2)
  const [opportunityList, setOpportunityList] = useState([
    {
      id: "OPP-01",
      code: "OPP-MKT-01",
      category: "Market Expansion",
      title: "Adoption of European CE Mark certification for EU export",
      potential: "Expand sales pipeline by 35% across Germany and Scandinavia",
      actionPlan: "Align technical file with EN ISO 12100 & schedule notified body audit",
      owner: "Sales Director",
      timeframe: "Q2 2025",
      status: "Active",
      roi: "BDT 8.5M Est.",
    },
    {
      id: "OPP-02",
      code: "OPP-PRD-02",
      category: "Automation",
      title: "Automated robotic arm insertion for secondary assembly",
      potential: "Reduce cycle time by 22% and eliminate repetitive operator strain",
      actionPlan: "Pilot unit installation on Line 2 with local systems integrator",
      owner: "Operations Head",
      timeframe: "Q1 2025",
      status: "In Progress",
      roi: "BDT 3.2M / Yr",
    },
    {
      id: "OPP-03",
      code: "OPP-SLR-03",
      category: "Sustainability",
      title: "Rooftop Solar PV installation for green factory rating",
      potential: "Cut factory electricity costs by 40% and qualify for LEED green tiers",
      actionPlan: "Feasibility study finalized; vendor quotation under tender evaluation",
      owner: "Plant Engineer",
      timeframe: "Q3 2025",
      status: "Planned",
      roi: "BDT 4.8M / Yr",
    },
  ]);

  // New Risk Form State
  const [newRisk, setNewRisk] = useState({
    code: "",
    category: "Operational",
    title: "",
    cause: "",
    consequence: "",
    likelihood: 3,
    impact: 3,
    mitigation: "",
    owner: "",
    dueDate: "",
  });

  const handleAddRisk = (e) => {
    e.preventDefault();
    if (!newRisk.title || !newRisk.code) return;
    const score = Number(newRisk.likelihood) * Number(newRisk.impact);
    let level = "Low";
    if (score >= 15) level = "Critical";
    else if (score >= 10) level = "High";
    else if (score >= 5) level = "Medium";

    const item = {
      id: `RSK-0${riskList.length + 1}`,
      type: "Risk",
      ...newRisk,
      score,
      level,
      residualLikelihood: Math.max(1, newRisk.likelihood - 2),
      residualImpact: Math.max(1, newRisk.impact - 1),
      residualScore: Math.max(1, (newRisk.likelihood - 2) * (newRisk.impact - 1)),
      status: "Mitigating",
    };

    setRiskList([item, ...riskList]);
    setIsModalOpen(false);
    setNewRisk({
      code: "",
      category: "Operational",
      title: "",
      cause: "",
      consequence: "",
      likelihood: 3,
      impact: 3,
      mitigation: "",
      owner: "",
      dueDate: "",
    });
  };

  const filteredRisks = riskList.filter((r) => {
    const matchesSearch =
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      riskTypeFilter === "all" || r.category.toLowerCase() === riskTypeFilter.toLowerCase();
    const matchesLevel = levelFilter === "all" || r.level.toLowerCase() === levelFilter.toLowerCase();
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="w-full space-y-5 pb-8 font-sans text-slate-800">
      {/* 1. Header Banner */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="p-2 bg-white/20 backdrop-blur-md rounded-xl inline-flex text-white">
                <AlertTriangle className="w-6 h-6" />
              </span>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Risk Management & Opportunity Register
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-md border border-white/30 uppercase tracking-wider">
                Clause 6.1
              </span>
            </div>
            <p className="text-blue-100 text-sm max-w-2xl leading-relaxed">
              Identify risks and opportunities that need to be addressed to assure the QMS can achieve its intended results, enhance desirable effects, prevent or reduce undesired effects, and achieve continual improvement.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white text-blue-700 hover:bg-blue-50 rounded-xl text-xs font-bold transition shadow-sm active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Add Risk / Opportunity
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-800/60 hover:bg-blue-800 text-white rounded-xl text-xs font-semibold backdrop-blur-md border border-white/20 transition active:scale-95">
              <Download className="w-4 h-4" />
              Export Risk Matrix
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
              Total Risks
            </p>
            <h3 className="text-xl font-bold text-slate-900">{riskList.length}</h3>
            <p className="text-[10px] text-slate-400 font-medium">Documented</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-rose-50 text-rose-600">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Critical / High
            </p>
            <h3 className="text-xl font-bold text-rose-600">2</h3>
            <p className="text-[10px] text-rose-500 font-medium">Active Treatment</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Medium Risks
            </p>
            <h3 className="text-xl font-bold text-amber-600">4</h3>
            <p className="text-[10px] text-slate-400 font-medium">Routine Monitoring</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Controlled
            </p>
            <h3 className="text-xl font-bold text-emerald-600">3</h3>
            <p className="text-[10px] text-emerald-600 font-medium">Residual Score &lt; 5</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Opportunities
            </p>
            <h3 className="text-xl font-bold text-indigo-600">{opportunityList.length}</h3>
            <p className="text-[10px] text-indigo-600 font-medium">Positive Drivers</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-teal-50 text-teal-600">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              ISO Clause 6.1
            </p>
            <h3 className="text-base font-bold text-emerald-600">Audited</h3>
            <p className="text-[10px] text-slate-500 font-medium">Fully Compliant</p>
          </div>
        </div>
      </div>

      {/* 3. 5x5 Risk Heatmap & Assessment Matrix */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-3 mb-4 border-b border-slate-100 gap-2">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              ISO 9001:2015 5x5 Risk Assessment Heatmap (Likelihood vs Consequence)
            </h3>
            <p className="text-xs text-slate-500">
              Risk Score = Likelihood (1 to 5) × Consequence (1 to 5). Score: 1-4 Low (Green), 5-9 Medium (Yellow), 10-14 High (Orange), 15-25 Critical (Red).
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Low (1-4)
            </span>
            <span className="flex items-center gap-1 font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span> Medium (5-9)
            </span>
            <span className="flex items-center gap-1 font-semibold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span> High (10-14)
            </span>
            <span className="flex items-center gap-1 font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span> Critical (15-25)
            </span>
          </div>
        </div>

        {/* 5x5 Matrix Display */}
        <div className="overflow-x-auto">
          <table className="w-full text-center text-xs border border-slate-200">
            <thead>
              <tr className="bg-slate-50 text-slate-700 font-bold">
                <th className="p-2 border border-slate-200 text-left w-36">
                  Likelihood \ Impact
                </th>
                <th className="p-2 border border-slate-200">1 - Negligible</th>
                <th className="p-2 border border-slate-200">2 - Minor</th>
                <th className="p-2 border border-slate-200">3 - Moderate</th>
                <th className="p-2 border border-slate-200">4 - Major</th>
                <th className="p-2 border border-slate-200">5 - Catastrophic</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "5 - Almost Certain", l: 5 },
                { label: "4 - Likely", l: 4 },
                { label: "3 - Possible", l: 3 },
                { label: "2 - Unlikely", l: 2 },
                { label: "1 - Rare", l: 1 },
              ].map((row) => (
                <tr key={row.l}>
                  <td className="p-2 font-bold text-left bg-slate-50 border border-slate-200 text-slate-800">
                    {row.label}
                  </td>
                  {[1, 2, 3, 4, 5].map((imp) => {
                    const cellScore = row.l * imp;
                    let bg = "bg-emerald-100/70 text-emerald-900 border-emerald-200";
                    if (cellScore >= 15) bg = "bg-rose-500 text-white border-rose-600 font-bold";
                    else if (cellScore >= 10) bg = "bg-orange-400 text-white border-orange-500 font-bold";
                    else if (cellScore >= 5) bg = "bg-amber-200 text-amber-900 border-amber-300 font-medium";

                    // Check which risks fall into this cell
                    const matchingRisks = riskList.filter(
                      (r) => r.likelihood === row.l && r.impact === imp
                    );

                    return (
                      <td key={imp} className={`p-2 border border-slate-200 ${bg} transition`}>
                        <div className="font-mono text-xs">{cellScore}</div>
                        {matchingRisks.length > 0 && (
                          <div className="mt-1 flex flex-wrap gap-1 justify-center">
                            {matchingRisks.map((m) => (
                              <span
                                key={m.id}
                                className="px-1.5 py-0.5 rounded bg-black/30 text-[10px] font-bold text-white tracking-wider cursor-pointer shadow-sm hover:scale-105 transition"
                                title={m.title}
                              >
                                {m.code}
                              </span>
                            ))}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Tab Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab("risks")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "risks"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <AlertTriangle className="w-4 h-4" />
          Risk Register (Clause 6.1.1) — {riskList.length}
        </button>
        <button
          onClick={() => setActiveTab("opportunities")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "opportunities"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <Target className="w-4 h-4" />
          Opportunities Register (Clause 6.1.2) — {opportunityList.length}
        </button>
      </div>

      {/* 5. TAB 1: Risk Register Table */}
      {activeTab === "risks" && (
        <div className="space-y-4">
          {/* Search & Filter Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search risk by code, title, owner, category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-semibold text-slate-500">Category:</span>
                <select
                  value={riskTypeFilter}
                  onChange={(e) => setRiskTypeFilter(e.target.value)}
                  className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Categories</option>
                  <option value="Supply Chain">Supply Chain</option>
                  <option value="Operational">Operational</option>
                  <option value="Compliance">Compliance</option>
                  <option value="Human Resource">Human Resource</option>
                  <option value="Financial">Financial</option>
                  <option value="Cybersecurity & IT">Cybersecurity & IT</option>
                </select>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-semibold text-slate-500">Level:</span>
                <select
                  value={levelFilter}
                  onChange={(e) => setLevelFilter(e.target.value)}
                  className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Levels</option>
                  <option value="Critical">Critical</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="px-4 py-3">Code / Category</th>
                    <th className="px-4 py-3">Risk Event & Cause</th>
                    <th className="px-4 py-3 text-center">Inherent Score</th>
                    <th className="px-4 py-3">Mitigation Action Plan</th>
                    <th className="px-4 py-3 text-center">Residual Score</th>
                    <th className="px-4 py-3">Owner / Target</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredRisks.map((r) => (
                    <tr key={r.id} className="hover:bg-slate-50/70 transition">
                      <td className="px-4 py-3.5">
                        <span className="font-bold text-blue-600 block">{r.code}</span>
                        <span className="text-[10px] text-slate-400 font-medium">{r.category}</span>
                      </td>
                      <td className="px-4 py-3.5 max-w-xs">
                        <div className="font-semibold text-slate-900 leading-snug">{r.title}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                          Cause: {r.cause}
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
                            r.level === "Critical"
                              ? "bg-rose-100 text-rose-700 border border-rose-200"
                              : r.level === "High"
                              ? "bg-orange-100 text-orange-700 border border-orange-200"
                              : "bg-amber-100 text-amber-700 border border-amber-200"
                          }`}
                        >
                          {r.score} ({r.level})
                        </span>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          L:{r.likelihood} × I:{r.impact}
                        </div>
                      </td>
                      <td className="px-4 py-3.5 max-w-xs">
                        <p className="text-slate-700 text-xs leading-relaxed">{r.mitigation}</p>
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          {r.residualScore} (Low)
                        </span>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          L:{r.residualLikelihood} × I:{r.residualImpact}
                        </div>
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="font-medium text-slate-800">{r.owner}</div>
                        <div className="text-[10px] text-slate-400">{r.dueDate}</div>
                      </td>
                      <td className="px-4 py-3.5">
                        {r.status === "Controlled" ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3" />
                            Controlled
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                            <Clock className="w-3 h-3" />
                            Mitigating
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-right">
                        <button
                          onClick={() => setSelectedRisk(r)}
                          className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                          title="View Details"
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

      {/* 6. TAB 2: Opportunities Register */}
      {activeTab === "opportunities" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {opportunityList.map((opp) => (
            <div
              key={opp.id}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {opp.code}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {opp.status}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{opp.title}</h4>
                <p className="text-xs text-slate-600 mb-3">{opp.potential}</p>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Strategic Action Plan:
                  </span>
                  <p className="text-slate-700">{opp.actionPlan}</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block">Target & Owner:</span>
                  <span className="font-bold text-slate-800">
                    {opp.timeframe} ({opp.owner})
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">Estimated ROI:</span>
                  <span className="font-bold text-emerald-600">{opp.roi}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Risk Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-rose-100 text-rose-700 rounded-lg">
                  <AlertTriangle className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  Add Risk Assessment (Clause 6.1)
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddRisk} className="space-y-3 mt-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Risk Code *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. RSK-OP-08"
                    value={newRisk.code}
                    onChange={(e) => setNewRisk({ ...newRisk, code: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Category *
                  </label>
                  <select
                    value={newRisk.category}
                    onChange={(e) => setNewRisk({ ...newRisk, category: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Operational">Operational</option>
                    <option value="Supply Chain">Supply Chain</option>
                    <option value="Compliance">Compliance</option>
                    <option value="Financial">Financial</option>
                    <option value="Human Resource">Human Resource</option>
                    <option value="Cybersecurity & IT">Cybersecurity & IT</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">
                  Risk Event & Description *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. CNC Spindle breakdown due to lack of lubrication"
                  value={newRisk.title}
                  onChange={(e) => setNewRisk({ ...newRisk, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Likelihood (1 - 5)
                  </label>
                  <select
                    value={newRisk.likelihood}
                    onChange={(e) => setNewRisk({ ...newRisk, likelihood: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="1">1 - Rare</option>
                    <option value="2">2 - Unlikely</option>
                    <option value="3">3 - Possible</option>
                    <option value="4">4 - Likely</option>
                    <option value="5">5 - Almost Certain</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Consequence / Impact (1 - 5)
                  </label>
                  <select
                    value={newRisk.impact}
                    onChange={(e) => setNewRisk({ ...newRisk, impact: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="1">1 - Negligible</option>
                    <option value="2">2 - Minor</option>
                    <option value="3">3 - Moderate</option>
                    <option value="4">4 - Major</option>
                    <option value="5">5 - Catastrophic</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">
                  Mitigation Action Plan *
                </label>
                <textarea
                  required
                  rows="2"
                  placeholder="State preventive controls and actions to eliminate or reduce risk..."
                  value={newRisk.mitigation}
                  onChange={(e) => setNewRisk({ ...newRisk, mitigation: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Risk Owner
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Maintenance Head"
                    value={newRisk.owner}
                    onChange={(e) => setNewRisk({ ...newRisk, owner: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Target Completion Date
                  </label>
                  <input
                    type="date"
                    value={newRisk.dueDate}
                    onChange={(e) => setNewRisk({ ...newRisk, dueDate: e.target.value })}
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
                  Save to Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
