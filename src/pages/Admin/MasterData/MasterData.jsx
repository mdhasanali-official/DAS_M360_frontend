import { useState } from "react";
import {
  Database,
  Plus,
  Search,
  Building,
  Users,
  Layers,
  Wrench,
  FileText,
  CheckCircle2,
  Edit,
  Trash2,
  Download,
  ShieldCheck,
  X,
} from "lucide-react";

export default function MasterData() {
  const [activeTab, setActiveTab] = useState("departments");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [departments, setDepartments] = useState([
    { id: "DEP-01", name: "Quality Control & Assurance", code: "QC", head: "Quality Director", staffCount: 12, status: "Active" },
    { id: "DEP-02", name: "Manufacturing & Production", code: "PRD", head: "Kamal Uddin", staffCount: 48, status: "Active" },
    { id: "DEP-03", name: "Procurement & Supply Chain", code: "PUR", head: "Sadia Rahman", staffCount: 8, status: "Active" },
    { id: "DEP-04", name: "Sales & Marketing", code: "SLS", head: "Md. Imran Hossain", staffCount: 14, status: "Active" },
    { id: "DEP-05", name: "Human Resources & Administration", code: "HR", head: "Farhana Islam", staffCount: 6, status: "Active" },
    { id: "DEP-06", name: "Plant Maintenance & Engineering", code: "MNT", head: "Rafiqul Islam", staffCount: 10, status: "Active" },
  ]);

  const [docPrefixes, setDocPrefixes] = useState([
    { id: "PFX-01", type: "Standard Operating Procedure", prefix: "SOP-", reviewCycle: "Annual", retention: "5 Years" },
    { id: "PFX-02", type: "Quality Policy Statement", prefix: "POL-", reviewCycle: "Annual", retention: "Permanent" },
    { id: "PFX-03", type: "Quality Manual", prefix: "QM-", reviewCycle: "Annual", retention: "Permanent" },
    { id: "PFX-04", type: "Work Instruction", prefix: "WI-", reviewCycle: "Bi-Annual", retention: "3 Years" },
    { id: "PFX-05", type: "Operational Form / Record", prefix: "FRM-", reviewCycle: "As Needed", retention: "7 Years" },
    { id: "PFX-06", type: "External Standard Document", prefix: "EXT-", reviewCycle: "On Release", retention: "Permanent" },
  ]);

  return (
    <div className="w-full space-y-5 pb-8 font-sans text-slate-800">
      {/* 1. Header Banner */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="p-2 bg-white/20 backdrop-blur-md rounded-xl inline-flex text-white">
                <Database className="w-6 h-6" />
              </span>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Master Data Configuration
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-md border border-white/30 uppercase tracking-wider">
                System Taxonomy
              </span>
            </div>
            <p className="text-blue-100 text-sm max-w-2xl leading-relaxed">
              Standardize departmental hierarchies, document coding prefixes, units of measurement, risk thresholds, and certification taxonomies across your ISO 9001:2015 ERP system.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white text-blue-700 hover:bg-blue-50 rounded-xl text-xs font-bold transition shadow-sm active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Add Master Record
            </button>
          </div>
        </div>
      </div>

      {/* 2. Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab("departments")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "departments"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <Building className="w-4 h-4" />
          Departments & HODs ({departments.length})
        </button>

        <button
          onClick={() => setActiveTab("prefixes")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "prefixes"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <FileText className="w-4 h-4" />
          Document Prefixes & Retention ({docPrefixes.length})
        </button>
      </div>

      {/* TAB 1: Departments */}
      {activeTab === "departments" && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-4 py-3">Dept ID</th>
                <th className="px-4 py-3">Department Name</th>
                <th className="px-4 py-3">Code</th>
                <th className="px-4 py-3">Department Head</th>
                <th className="px-4 py-3">Active Staff</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {departments.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50/70 transition">
                  <td className="px-4 py-3.5 font-bold text-blue-600">{d.id}</td>
                  <td className="px-4 py-3.5 font-semibold text-slate-900">{d.name}</td>
                  <td className="px-4 py-3.5 font-mono text-slate-700 font-semibold">{d.code}</td>
                  <td className="px-4 py-3.5 text-slate-800 font-medium">{d.head}</td>
                  <td className="px-4 py-3.5 text-slate-700">{d.staffCount} Personnel</td>
                  <td className="px-4 py-3.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" />
                      {d.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* TAB 2: Document Prefixes */}
      {activeTab === "prefixes" && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-4 py-3">Prefix ID</th>
                <th className="px-4 py-3">Document Classification</th>
                <th className="px-4 py-3">Standard Prefix</th>
                <th className="px-4 py-3">Mandatory Review Cycle</th>
                <th className="px-4 py-3">Default Retention Period</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {docPrefixes.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/70 transition">
                  <td className="px-4 py-3.5 font-bold text-blue-600">{p.id}</td>
                  <td className="px-4 py-3.5 font-semibold text-slate-900">{p.type}</td>
                  <td className="px-4 py-3.5 font-mono text-blue-700 font-bold">{p.prefix}</td>
                  <td className="px-4 py-3.5 text-slate-700">{p.reviewCycle}</td>
                  <td className="px-4 py-3.5 font-medium text-slate-900">{p.retention}</td>
                  <td className="px-4 py-3.5 text-right">
                    <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
