"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Globe, 
  Anchor, 
  Truck, 
  ShieldCheck, 
  FileText, 
  ArrowUpRight, 
  CheckCircle2, 
  Calculator, 
  Ship,
  PhoneCall
} from "lucide-react";

const TRADE_DESK_WHATSAPP = "989120000000";

const TRADE_SERVICES_LIST = [
  {
    icon: <Anchor className="w-6 h-6 text-[#065F46]" />,
    title: "FOB & CIF Port Logistics",
    description: "Seamless container loading, customs clearance, and port handling directly from Bandar Abbas, Amirabad, and southern ports to global destinations."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#065F46]" />,
    title: "SGS & Quality Inspection",
    description: "Independent pre-shipment inspection and certification by international surveyors like SGS and Inspectorate to guarantee ICUMSA standards."
  },
  {
    icon: <FileText className="w-6 h-6 text-[#065F46]" />,
    title: "Export Documentation",
    description: "Complete legal and trade paperwork including Certificate of Origin, Phytosanitary certificates, Commercial Invoices, and Bills of Lading."
  },
  {
    icon: <Truck className="w-6 h-6 text-[#065F46]" />,
    title: "Multimodal Freight Solutions",
    description: "Flexible maritime shipping (20ft/40ft FCL), rail freight across Eurasian corridors, and road transit for neighboring Middle Eastern markets."
  },
  {
    icon: <Calculator className="w-6 h-6 text-[#065F46]" />,
    title: "Flexible Payment Terms",
    description: "Secure international transaction channels, Letters of Credit (LC), and structured escrow settlements for verified global buyers."
  },
  {
    icon: <Globe className="w-6 h-6 text-[#065F46]" />,
    title: "Direct Mill Sourcing",
    description: "Eliminate middlemen with direct negotiations across our verified network of 130+ sugar refineries throughout Iran."
  }
];

export default function TradeServicesPage() {
  const [destinationPort, setDestinationPort] = useState("");
  const [tonnage, setTonnage] = useState("5000");

  const handleCalculateShipping = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello ISPA Trade Desk, I would like to request freight estimation for *${tonnage} MT* of sugar to port *${destinationPort || "Not specified"}* (FOB Bandar Abbas / CIF). Please share rates.`;
    window.open(`https://wa.me/${TRADE_DESK_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased pb-16 w-full">
      
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative bg-slate-950 border-b border-slate-200 overflow-hidden pt-12 pb-16 w-full">
        
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/trade-hero.png" 
            alt="Trade Services & Logistics Background"
            className="w-full h-full object-cover object-center opacity-60 sm:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 sm:via-slate-900/80 to-slate-950/60" />
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6 py-6">
            
         

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Professional Export Services <br />
              <span className="text-emerald-400">& Maritime Logistics</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
              From mill floor to destination port, we manage complete export documentation, customs clearance, and secure global cargo delivery.
            </p>

         

          </div>
        </div>
      </section>

      {/* 2. MAIN SERVICES GRID */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#065F46]">
            END-TO-END SOLUTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
            How We Facilitate Your Sugar Imports
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Our trade desk streamlines every step of international procurement to protect your investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRADE_SERVICES_LIST.map((svc, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-2xs space-y-4 hover:border-emerald-500/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {svc.icon}
              </div>
              <h3 className="text-base font-black text-slate-950">{svc.title}</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>

        {/* 3. FREIGHT ESTIMATOR / INSTANT QUOTE WIDGET */}
        <div className="bg-[#043E2E] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-md">
          <div className="max-w-xl space-y-4 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300 block">
              INSTANT LOGISTICS ESTIMATE
            </span>
            <h3 className="text-2xl font-black text-white leading-tight">
              Calculate Shipping to Your Destination Port
            </h3>
            <p className="text-xs text-emerald-100/80 font-medium leading-relaxed">
              Enter your estimated tonnage and destination port to connect instantly with our logistics desk via WhatsApp.
            </p>

            <form onSubmit={handleCalculateShipping} className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <input
                type="text"
                required
                placeholder="Destination Port (e.g. Jebel Ali)"
                value={destinationPort}
                onChange={(e) => setDestinationPort(e.target.value)}
                className="bg-slate-900/80 border border-emerald-700/60 rounded-2xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400"
              />

              <select
                value={tonnage}
                onChange={(e) => setTonnage(e.target.value)}
                className="bg-slate-900/80 border border-emerald-700/60 rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-400 cursor-pointer"
              >
                <option value="1000">1,000 MT (Bulk/FCL)</option>
                <option value="5000">5,000 MT (Standard Vessel)</option>
                <option value="10000">10,000+ MT (Bulk Cargo)</option>
              </select>

              <button
                type="submit"
                className="bg-white hover:bg-emerald-50 text-[#043E2E] text-xs font-black px-6 py-3 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Request Rate</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

      </section>

    </div>
  );
}