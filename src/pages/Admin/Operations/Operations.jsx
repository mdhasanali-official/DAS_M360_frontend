import { useState } from "react";
import {
  Cog,
  FileText,
  Truck,
  CheckCircle2,
  AlertTriangle,
  Factory,
  Layers,
  ArrowRight,
  ShieldCheck,
  PackageCheck,
  Users,
  Search,
  Filter,
  Download,
  Plus,
  ChevronRight,
  ClipboardList,
  Sliders,
  Check,
  AlertCircle,
  Clock,
  ExternalLink,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { toast } from "react-hot-toast";

// Production Plan vs Actual Bar Chart Data (Weekly)
const PRODUCTION_CHART_DATA = [
  { week: "Week 1", planned: 80, actual: 55 },
  { week: "Week 2", planned: 82, actual: 68 },
  { week: "Week 3", planned: 85, actual: 66 },
  { week: "Week 4", planned: 90, actual: 75 },
];

// Production Efficiency Donut Data (92% Overall Efficiency)
const EFFICIENCY_DONUT_DATA = [
  { name: "Efficient Output", value: 92, color: "#10b981" },
  { name: "Loss / Rework", value: 8, color: "#cbd5e1" },
];

// Order Status Live Register
const INITIAL_ORDERS = [
  { id: "SO-001", customer: "ABC Ltd.", product: "Dairy Products A", status: "Completed", statusColor: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { id: "SO-002", customer: "XYZ Ltd.", product: "Fortified Yoghurt", status: "In Production", statusColor: "bg-amber-100 text-amber-800 border-amber-200" },
  { id: "SO-003", customer: "Rahul Group", product: "Sweet Curd (Misty)", status: "In Progress", statusColor: "bg-sky-100 text-sky-800 border-sky-200" },
  { id: "SO-004", customer: "Chinipata Doi", product: "Traditional Doi", status: "Planned", statusColor: "bg-blue-100 text-blue-800 border-blue-200" },
  { id: "SO-005", customer: "Deshi Meat & Dairy", product: "Pasteurized Milk Pack", status: "Delayed", statusColor: "bg-rose-100 text-rose-800 border-rose-200" },
];

// Supplier Performance Records
const SUPPLIERS_DATA = [
  { name: "Supplier A (Raw Milk)", onTime: "95%", quality: "98%", overall: "96%", scoreColor: "text-emerald-700 font-bold bg-emerald-50" },
  { name: "Supplier B (Packaging)", onTime: "90%", quality: "85%", overall: "88%", scoreColor: "text-slate-800 font-semibold bg-slate-50" },
  { name: "Supplier C (Ingredients)", onTime: "80%", quality: "88%", overall: "84%", scoreColor: "text-slate-800 font-semibold bg-slate-50" },
  { name: "Supplier D (Logistics Co.)", onTime: "100%", quality: "92%", overall: "96%", scoreColor: "text-emerald-700 font-bold bg-emerald-50" },
  { name: "Supplier E (Chemicals/Sanitizers)", onTime: "88%", quality: "80%", overall: "84%", scoreColor: "text-slate-800 font-semibold bg-slate-50" },
];

export default function Operations() {
  const [selectedMonth, setSelectedMonth] = useState("This Month");
  const [ordersList, setOrdersList] = useState(INITIAL_ORDERS);
  const [isAddOrderOpen, setIsAddOrderOpen] = useState(false);
  const [newOrder, setNewOrder] = useState({
    id: "",
    customer: "",
    product: "",
    status: "Planned",
  });

  const handleAddOrder = (e) => {
    e.preventDefault();
    if (!newOrder.customer || !newOrder.product) {
      toast.error("Please fill in customer and product");
      return;
    }

    const created = {
      id: newOrder.id || `SO-00${ordersList.length + 1}`,
      customer: newOrder.customer,
      product: newOrder.product,
      status: newOrder.status,
      statusColor:
        newOrder.status === "Completed"
          ? "bg-emerald-100 text-emerald-800 border-emerald-200"
          : newOrder.status === "In Production"
          ? "bg-amber-100 text-amber-800 border-amber-200"
          : "bg-blue-100 text-blue-800 border-blue-200",
    };

    setOrdersList([created, ...ordersList]);
    setIsAddOrderOpen(false);
    setNewOrder({ id: "", customer: "", product: "", status: "Planned" });
    toast.success("Order added successfully!");
  };

  return (
    <div className="w-full space-y-5 pb-8 font-sans text-slate-800">
      {/* 1. TOP HEADER BANNER (Operations Module - Clause 8) */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 rounded-xl bg-white/20 backdrop-blur-md">
              <Cog className="w-6 h-6 text-white" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Operations Module
            </h1>
            <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold tracking-wide uppercase">
              ISO 9001:2015 Clause 8
            </span>
          </div>
          <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed max-w-2xl">
            Plan • Control • Deliver • Monitor • Ensure Conformity • Product & Service Provision
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsAddOrderOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm shadow-md transition"
          >
            <Plus className="w-4 h-4" />
            <span>Create Order</span>
          </button>

          <button
            onClick={() => toast.success("Generating Clause 8 Operations Audit Report (PDF)...")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-800/80 hover:bg-blue-900 text-white font-semibold text-sm border border-white/20 shadow transition"
          >
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* 2. TOP 6 STAT CARDS (Exact match from screenshot) */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3.5">
        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Orders</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">125</p>
            <p className="text-[11px] text-emerald-600 font-bold mt-0.5">↑ 12% This Month</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">On-Time Delivery</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">92%</p>
            <p className="text-[11px] text-emerald-600 font-bold mt-0.5">↑ 5% vs Last Month</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Cog className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Production Plan</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">18</p>
            <p className="text-[11px] text-purple-600 font-bold mt-0.5">Active Batches</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
            <Factory className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">In Production</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">12</p>
            <p className="text-[11px] text-orange-600 font-bold mt-0.5">In Progress</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Completed</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">96</p>
            <p className="text-[11px] text-emerald-600 font-bold mt-0.5">↑ 18% This Month</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nonconformities</p>
            <p className="text-xl font-black text-slate-900 mt-0.5">3</p>
            <p className="text-[11px] text-emerald-600 font-bold mt-0.5">↓ 50% vs Last Month</p>
          </div>
        </div>
      </div>

      {/* 3. SECTION 1 & 2: OPERATIONAL PROCESS FLOW (Clause 8) + PLANNING & CONTROL (8.1) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Operational Process Flow (Col 8) */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                1
              </span>
              <h2 className="text-base font-bold text-slate-900">
                Operational Process Flow (Clause 8)
              </h2>
            </div>
            <span className="text-xs font-semibold text-blue-600">End-to-End Value Stream</span>
          </div>

          <div className="p-5 flex-1 flex flex-col justify-center">
            {/* 7-Step Flow Container */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-center">
                <span className="text-[10px] font-bold text-blue-600 block mb-1">Step 1</span>
                <p className="text-xs font-bold text-slate-800">Customer Requirements</p>
                <p className="text-[10px] text-slate-500 mt-0.5">(8.2)</p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-center">
                <span className="text-[10px] font-bold text-emerald-600 block mb-1">Step 2</span>
                <p className="text-xs font-bold text-slate-800">Planning & Control</p>
                <p className="text-[10px] text-slate-500 mt-0.5">(8.1)</p>
              </div>

              <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-center">
                <span className="text-[10px] font-bold text-amber-600 block mb-1">Step 3</span>
                <p className="text-xs font-bold text-slate-800">Design & Development</p>
                <p className="text-[10px] text-slate-500 mt-0.5">(8.3)</p>
              </div>

              <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-200 text-center">
                <span className="text-[10px] font-bold text-purple-600 block mb-1">Step 4</span>
                <p className="text-xs font-bold text-slate-800">External Providers</p>
                <p className="text-[10px] text-slate-500 mt-0.5">(8.4)</p>
              </div>

              <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200 text-center">
                <span className="text-[10px] font-bold text-rose-600 block mb-1">Step 5</span>
                <p className="text-xs font-bold text-slate-800">Production / Provision</p>
                <p className="text-[10px] text-slate-500 mt-0.5">(8.5)</p>
              </div>

              <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-200 text-center">
                <span className="text-[10px] font-bold text-teal-600 block mb-1">Step 6</span>
                <p className="text-xs font-bold text-slate-800">Release of Products</p>
                <p className="text-[10px] text-slate-500 mt-0.5">(8.6)</p>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-center">
                <span className="text-[10px] font-bold text-blue-600 block mb-1">Step 7</span>
                <p className="text-xs font-bold text-slate-800">Customer Satisfaction</p>
                <p className="text-[10px] text-slate-500 mt-0.5">(9.1.2)</p>
              </div>
            </div>

            {/* Bottom Monitoring Bar */}
            <div className="mt-4 p-2.5 rounded-xl bg-blue-50/50 border border-blue-100 text-center text-xs font-semibold text-blue-700">
              Monitoring, Measurement, Control and Improvement (Clause 8.7 & 9.1)
            </div>
          </div>
        </div>

        {/* Right: Operational Planning & Control (8.1) (Col 4) */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                2
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                Operational Planning & Control (8.1)
              </h3>
            </div>
            <button
              onClick={() => toast.success("SOPs & Operational Controls up to date")}
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              Manage
            </button>
          </div>

          <div className="space-y-2.5 my-3 text-xs text-slate-700">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Define operational processes and product criteria</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Determine requirements for products & services</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Ensure adequate resources and control methods</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Implement operational change control</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Maintain documented information & batch records</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SECTION 3, 4, 5: CUSTOMER REQS (8.2), DESIGN (8.3), EXTERNAL PROVIDERS (8.4) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Customer Requirements (8.2) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                3
              </span>
              <h4 className="text-xs font-bold text-slate-900 uppercase">
                Customer Requirements (8.2)
              </h4>
            </div>
            <button
              onClick={() => toast("Customer Requirements Register opened", { icon: "📋" })}
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-blue-50/60 text-slate-800 font-semibold text-center border border-blue-100">
              Order Management
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-50/60 text-slate-800 font-semibold text-center border border-emerald-100">
              Contract Review
            </div>
            <div className="p-2.5 rounded-lg bg-sky-50/60 text-slate-800 font-semibold text-center border border-sky-100">
              Customer Communication
            </div>
            <div className="p-2.5 rounded-lg bg-purple-50/60 text-slate-800 font-semibold text-center border border-purple-100">
              Requirements Tracking
            </div>
          </div>
        </div>

        {/* Design & Development (8.3) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-amber-500 text-white flex items-center justify-center font-bold text-xs">
                4
              </span>
              <h4 className="text-xs font-bold text-slate-900 uppercase">
                Design & Development (8.3)
              </h4>
            </div>
            <button
              onClick={() => toast("Design & Development Register opened", { icon: "💡" })}
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[11px]">
            <div className="p-2 rounded-lg bg-amber-50/60 text-slate-800 font-semibold text-center border border-amber-100">
              Design Planning
            </div>
            <div className="p-2 rounded-lg bg-emerald-50/60 text-slate-800 font-semibold text-center border border-emerald-100">
              Design Input
            </div>
            <div className="p-2 rounded-lg bg-sky-50/60 text-slate-800 font-semibold text-center border border-sky-100">
              Design Review
            </div>
            <div className="p-2 rounded-lg bg-orange-50/60 text-slate-800 font-semibold text-center border border-orange-100 col-span-1.5">
              Design Output
            </div>
            <div className="p-2 rounded-lg bg-rose-50/60 text-slate-800 font-semibold text-center border border-rose-100 col-span-1.5">
              Design Change Control
            </div>
          </div>
        </div>

        {/* External Providers (8.4) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
                5
              </span>
              <h4 className="text-xs font-bold text-slate-900 uppercase">
                External Providers (8.4)
              </h4>
            </div>
            <button
              onClick={() => toast("Supplier Management Dossier opened", { icon: "📦" })}
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[11px]">
            <div className="p-2 rounded-lg bg-purple-50/60 text-slate-800 font-semibold text-center border border-purple-100">
              Supplier Selection
            </div>
            <div className="p-2 rounded-lg bg-emerald-50/60 text-slate-800 font-semibold text-center border border-emerald-100">
              Supplier Evaluation
            </div>
            <div className="p-2 rounded-lg bg-blue-50/60 text-slate-800 font-semibold text-center border border-blue-100">
              Purchase Order
            </div>
            <div className="p-2 rounded-lg bg-amber-50/60 text-slate-800 font-semibold text-center border border-amber-100 col-span-1.5">
              Incoming Inspection
            </div>
            <div className="p-2 rounded-lg bg-teal-50/60 text-slate-800 font-semibold text-center border border-teal-100 col-span-1.5">
              Supplier Performance
            </div>
          </div>
        </div>
      </div>

      {/* 5. SECTION 6, 7, 8: PRODUCTION (8.5), RELEASE (8.6), NONCONFORMING (8.7) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Production Provision Flow (8.5) (Col 6) */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-rose-600 text-white flex items-center justify-center font-bold text-xs">
                6
              </span>
              <h4 className="text-xs font-bold text-slate-900 uppercase">
                Production & Service Provision (8.5)
              </h4>
            </div>
            <span className="text-xs font-semibold text-slate-400">Shop-Floor Flow</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-center my-2">
            <div className="p-2.5 rounded-lg bg-orange-50 border border-orange-200 font-bold text-slate-800">
              Raw Material
            </div>
            <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 font-bold text-slate-800">
              Receiving & Inspection
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 font-bold text-slate-800">
              Production Planning
            </div>
            <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 font-bold text-slate-800">
              Production / Service
            </div>
            <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-200 font-bold text-slate-800">
              In-Process Control
            </div>
            <div className="p-2.5 rounded-lg bg-teal-50 border border-teal-200 font-bold text-slate-800">
              Finished Goods
            </div>
            <div className="p-2.5 rounded-lg bg-purple-50 border border-purple-200 font-bold text-slate-800 col-span-2">
              Storage & Delivery Logistics
            </div>
          </div>
        </div>

        {/* Release of Products (8.6) (Col 3) */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-teal-600 text-white flex items-center justify-center font-bold text-xs">
                7
              </span>
              <h4 className="text-xs font-bold text-slate-900 uppercase truncate">
                Release of Products (8.6)
              </h4>
            </div>
          </div>
          <div className="space-y-1.5 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Verify conformity with specs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Ensure QC test records complete</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Authorized QA release approval</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Delivery release documentation</span>
            </div>
          </div>
        </div>

        {/* Control of Nonconforming Outputs (8.7) (Col 3) */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-rose-600 text-white flex items-center justify-center font-bold text-xs">
                8
              </span>
              <h4 className="text-xs font-bold text-slate-900 uppercase truncate">
                Nonconforming Outputs (8.7)
              </h4>
            </div>
          </div>
          <div className="space-y-1.5 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span>Identify & quarantine defects</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span>Prevent unintended shipment</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span>Authorized disposal or rework</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span>Maintain NCR & CAPA records</span>
            </div>
          </div>
        </div>
      </div>

      {/* 6. BOTTOM 4 REAL-TIME CARDS: CHART, ORDERS TABLE, EFFICIENCY GAUGE, SUPPLIER TABLE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Card 1: Production Plan vs Actual Bar Chart (Col 3) */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Production Plan vs Actual
            </h3>
            <span className="text-[10px] text-slate-500 font-semibold bg-slate-100 px-2 py-0.5 rounded">
              This Month
            </span>
          </div>

          <div className="w-full h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PRODUCTION_CHART_DATA} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="week" tick={{ fontSize: 9, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 9, fill: "#64748b" }} axisLine={false} tickLine={false} domain={[0, 100]} />
                <Tooltip contentStyle={{ backgroundColor: "#ffffff", borderRadius: "8px", fontSize: "11px" }} />
                <Bar dataKey="planned" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={8} />
                <Bar dataKey="actual" fill="#10b981" radius={[4, 4, 0, 0]} barSize={8} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center gap-4 text-[10px] font-bold pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1 text-blue-600">
              <span className="w-2 h-2 rounded-sm bg-blue-600" /> Planned
            </span>
            <span className="flex items-center gap-1 text-emerald-600">
              <span className="w-2 h-2 rounded-sm bg-emerald-500" /> Actual
            </span>
          </div>
        </div>

        {/* Card 2: Order Status Table (Col 3) */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Order Status
            </h3>
            <button
              onClick={() => setIsAddOrderOpen(true)}
              className="text-[10px] font-bold text-blue-600 hover:underline"
            >
              + New Order
            </button>
          </div>

          <div className="space-y-2 text-xs">
            {ordersList.slice(0, 5).map((o) => (
              <div key={o.id} className="flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-50 transition border border-slate-50">
                <div className="min-w-0 pr-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[10px] font-bold text-blue-600">{o.id}</span>
                    <span className="font-semibold text-slate-800 text-[11px] truncate">{o.customer}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 truncate">{o.product}</p>
                </div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold border shrink-0 ${o.statusColor}`}>
                  {o.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Production Efficiency Donut Gauge (Col 3) */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Production Efficiency
            </h3>
            <span className="text-[10px] text-slate-500 font-semibold bg-slate-100 px-2 py-0.5 rounded">
              This Month
            </span>
          </div>

          <div className="relative w-32 h-32 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={EFFICIENCY_DONUT_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={36}
                  outerRadius={50}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {EFFICIENCY_DONUT_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xl font-black text-slate-900 leading-none">92%</span>
              <span className="text-[9px] font-semibold text-slate-400 mt-0.5">Efficiency</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 grid grid-cols-3 gap-1 text-center text-[10px]">
            <div>
              <p className="font-bold text-slate-800">85%</p>
              <p className="text-slate-400 text-[9px]">Machine Util.</p>
            </div>
            <div>
              <p className="font-bold text-amber-600">10%</p>
              <p className="text-slate-400 text-[9px]">Downtime</p>
            </div>
            <div>
              <p className="font-bold text-rose-600">5%</p>
              <p className="text-slate-400 text-[9px]">Rework Rate</p>
            </div>
          </div>
        </div>

        {/* Card 4: Supplier Performance Table (Col 3) */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Supplier Performance
            </h3>
            <span className="text-[10px] font-semibold text-blue-600">Evaluated</span>
          </div>

          <div className="space-y-1.5 text-[11px]">
            {SUPPLIERS_DATA.map((s) => (
              <div key={s.name} className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50/50">
                <span className="font-semibold text-slate-800 truncate max-w-[110px]">{s.name}</span>
                <div className="flex items-center gap-2 text-[10px]">
                  <span className="text-slate-500">OT: {s.onTime}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] ${s.scoreColor}`}>
                    {s.overall}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CREATE ORDER MODAL */}
      {isAddOrderOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">Create Production Order</h3>
              <button
                onClick={() => setIsAddOrderOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddOrder} className="space-y-4 mt-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Customer / Client Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Foods Ltd."
                  value={newOrder.customer}
                  onChange={(e) => setNewOrder({ ...newOrder, customer: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Product Description *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 500ml Dairy Sweet Yoghurt"
                  value={newOrder.product}
                  onChange={(e) => setNewOrder({ ...newOrder, product: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Status</label>
                <select
                  value={newOrder.status}
                  onChange={(e) => setNewOrder({ ...newOrder, status: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 outline-none"
                >
                  <option value="Planned">Planned</option>
                  <option value="In Production">In Production</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddOrderOpen(false)}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                >
                  Save Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
