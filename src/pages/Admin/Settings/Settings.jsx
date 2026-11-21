import { useState } from "react";
import {
  Settings as SettingsIcon,
  Building,
  ShieldCheck,
  Lock,
  Bell,
  Database,
  Save,
  CheckCircle2,
  Award,
  Globe2,
  Clock,
} from "lucide-react";

export default function Settings() {
  const [savedSuccess, setSavedSuccess] = useState(false);

  const [companyProfile, setCompanyProfile] = useState({
    companyName: "DAS Certified Client Industries Ltd.",
    licenseNo: "DAS-CERT-9001-2024-8842",
    scope: "Design, Manufacture, Assembly and Precision Machining of Industrial Components and Metal Assemblies",
    certificationBody: "DAS Certification Group",
    standard: "ISO 9001:2015",
    initialDate: "2021-11-15",
    currentExpiry: "2027-11-14",
    leadAuditorContact: "auditor@dascertification.com",
    address: "Plot 42-45, Export Processing Zone, Dhaka, Bangladesh",
    adminEmail: "company@dasm360.com",
  });

  const handleSave = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="w-full space-y-5 pb-8 font-sans text-slate-800">
      {/* 1. Header Banner */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="p-2 bg-white/20 backdrop-blur-md rounded-xl inline-flex text-white">
                <SettingsIcon className="w-6 h-6" />
              </span>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                System & ISO Certificate Settings
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-md border border-white/30 uppercase tracking-wider">
                Enterprise Setup
              </span>
            </div>
            <p className="text-blue-100 text-sm max-w-2xl leading-relaxed">
              Configure company certification credentials, DAS surveillance audit schedule parameters, ISO 9001:2015 scope statement, and administrative security preferences.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2.5 bg-white text-blue-700 hover:bg-blue-50 rounded-xl text-xs font-bold transition shadow-sm active:scale-95"
            >
              <Save className="w-4 h-4" />
              Save Configuration
            </button>
          </div>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          Settings successfully updated and saved in system registry!
        </div>
      )}

      {/* 2. Grid Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left 2 Cols: Company & Certification Details */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2 pb-3 border-b border-slate-100">
              <Building className="w-4 h-4 text-blue-600" />
              Certified Organization Profile (Clause 4.3 & Certificate Scope)
            </h3>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Certified Entity Name
                  </label>
                  <input
                    type="text"
                    value={companyProfile.companyName}
                    onChange={(e) => setCompanyProfile({ ...companyProfile, companyName: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    DAS Certificate Number
                  </label>
                  <input
                    type="text"
                    value={companyProfile.licenseNo}
                    onChange={(e) => setCompanyProfile({ ...companyProfile, licenseNo: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-blue-700 font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">
                  Scope of ISO 9001:2015 Certification (As on Certificate)
                </label>
                <textarea
                  rows="3"
                  value={companyProfile.scope}
                  onChange={(e) => setCompanyProfile({ ...companyProfile, scope: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 leading-relaxed"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Certification Body
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={companyProfile.certificationBody}
                    className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-700 font-semibold cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Audited Standard
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={companyProfile.standard}
                    className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-700 font-semibold cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Initial Certification Date
                  </label>
                  <input
                    type="date"
                    value={companyProfile.initialDate}
                    onChange={(e) => setCompanyProfile({ ...companyProfile, initialDate: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Current Expiry / Re-certification Date
                  </label>
                  <input
                    type="date"
                    value={companyProfile.currentExpiry}
                    onChange={(e) => setCompanyProfile({ ...companyProfile, currentExpiry: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">
                  Factory / Office Physical Address
                </label>
                <input
                  type="text"
                  value={companyProfile.address}
                  onChange={(e) => setCompanyProfile({ ...companyProfile, address: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Right Col: Audit Mode & System Status */}
        <div className="space-y-5">
          {/* Certificate Badge Card */}
          <div className="bg-gradient-to-br from-slate-900 to-[#0b1329] p-5 rounded-xl text-white shadow-md border border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 bg-blue-500/20 text-sky-400 rounded-lg">
                <Award className="w-5 h-5" />
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Active Certificate
              </span>
            </div>

            <h4 className="font-bold text-base text-white">DAS M360 ERP</h4>
            <p className="text-xs text-slate-400 mt-0.5">ISO 9001:2015 Management System</p>

            <div className="mt-4 pt-3 border-t border-slate-800 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Next Audit:</span>
                <span className="font-semibold text-white">November 2024 (Surveillance)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Status:</span>
                <span className="font-semibold text-emerald-400">100% Audit Ready</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Auditor Credentials:</span>
                <span className="font-semibold text-sky-400">Enabled (Inspection Mode)</span>
              </div>
            </div>
          </div>

          {/* Quick Security Card */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-xs space-y-3">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-blue-600" />
              Auditor Access Controls
            </h4>
            <p className="text-slate-500 leading-relaxed">
              When external ISO auditors from DAS Certification visit your premises, provide them the ISO Auditor demo credentials (<code className="bg-slate-100 px-1 py-0.5 rounded text-blue-700 font-mono">admin@dasm360.com</code>) to view all compliance records in read-only audit mode.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
