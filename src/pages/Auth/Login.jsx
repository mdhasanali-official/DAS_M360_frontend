import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, ShieldCheck } from "lucide-react";
import { toast } from "react-hot-toast";

const DEMO_USERS = [
  {
    role: "Company Admin",
    email: "company@dasm360.com",
    password: "company123",
  },
  {
    role: "ISO Auditor",
    email: "admin@dasm360.com",
    password: "admin123",
  },
  {
    role: "Employee",
    email: "imran@dasm360.com",
    password: "user123",
  },
];

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("company@dasm360.com");
  const [password, setPassword] = useState("company123");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuickFill = (user) => {
    setEmail(user.email);
    setPassword(user.password);
    toast.success(`${user.role} তথ্য সিলেক্ট করা হয়েছে`, { duration: 1500 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("ইমেইল ও পাসওয়ার্ড প্রদান করুন");
      return;
    }

    setIsLoading(true);

    // ফ্রন্টএন্ড মক লগইন (পরবর্তীতে ব্যাকএন্ডের সাথে যুক্ত হবে)
    setTimeout(() => {
      const mockUser = {
        email,
        name: email.includes("admin") ? "ISO Auditor" : email.includes("imran") ? "Imran Hossain" : "Company Director",
        role: email.includes("admin") ? "auditor" : "admin",
        company: "DAS Certified Client",
      };

      localStorage.setItem("userToken", "mock_auth_token_2026");
      localStorage.setItem("adminToken", "mock_auth_token_2026");
      localStorage.setItem("userInfo", JSON.stringify(mockUser));

      setIsLoading(false);
      toast.success("লগইন সফল হয়েছে!");
      navigate("/admin/dashboard");
    }, 500);
  };

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] flex flex-col justify-between items-center px-4 py-8 sm:py-12 text-slate-800">
      <div className="w-full flex-1 flex flex-col items-center justify-center">
        {/* লোগো ও হেডার */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-blue-500/20">
              DAS
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-black tracking-tight text-slate-900 leading-none">
                DAS <span className="text-blue-600">M360</span>
              </h1>
              <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                Management System ERP
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            ISO 9001:2015 Management System Portal
          </p>
        </div>

        {/* ক্লিন লাইট লগইন কার্ড */}
        <div className="w-full max-w-[420px] bg-white border border-slate-200/90 rounded-2xl shadow-xl shadow-slate-200/60 p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">Sign in to your account</h2>
            <p className="text-xs text-slate-500 mt-1">
              আপনার ইমেইল ও পাসওয়ার্ড দিয়ে লগইন করুন
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-lg text-sm text-slate-900 placeholder-slate-400 outline-none transition"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => toast("পাসওয়ার্ড রিসেট করতে অ্যাডমিনের সাথে যোগাযোগ করুন", { icon: "ℹ️" })}
                  className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-lg text-sm text-slate-900 placeholder-slate-400 outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span>Remember this device</span>
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-sm rounded-lg shadow-sm hover:shadow transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* ডেমো ক্রেডেনশিয়ালস - সিম্পল এবং ক্লিন */}
          <div className="mt-6 pt-5 border-t border-slate-100">
            <p className="text-[11px] font-semibold text-slate-500 mb-2.5 uppercase tracking-wider text-center">
              Demo Accounts (ক্লিক করলেই অটো-ফিল হবে)
            </p>
            <div className="grid grid-cols-3 gap-2">
              {DEMO_USERS.map((user) => (
                <button
                  key={user.role}
                  type="button"
                  onClick={() => handleQuickFill(user)}
                  className={`py-1.5 px-2 rounded-md text-xs font-medium border text-center transition ${
                    email === user.email
                      ? "bg-blue-50 border-blue-200 text-blue-700 font-semibold"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {user.role}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* নিচের সিকিউরিটি ও কমপ্লায়েন্স টেক্সট */}
        <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Secure ISO Audit Vault • 256-bit SSL</span>
        </div>
      </div>

      {/* ফুটার */}
      <footer className="w-full text-center text-xs text-slate-400 mt-8">
        © {new Date().getFullYear()} DAS Certification Group • DAS M360 ERP
      </footer>
    </div>
  );
}
