"use client";

import React from "react";
import {
  Award,
  Globe,
  ShieldCheck,
  CheckCircle2,
  Download,
  FlaskConical,
  Check
} from "lucide-react";

interface SpecRow {
  parameter: string;
  unit: string;
  specification: string;
  typicalResult: string;
}

const SPECS_DATA: SpecRow[] = [
  { parameter: "Polarization", unit: "°Z", specification: "≥ 99.80%", typicalResult: "99.82%" },
  { parameter: "Moisture", unit: "% (w/w)", specification: "≤ 0.04%", typicalResult: "0.03%" },
  { parameter: "Ash Content", unit: "% (w/w)", specification: "≤ 0.04%", typicalResult: "0.02%" },
  { parameter: "Solubility (Dry Substance)", unit: "% (w/w)", specification: "≥ 99.7%", typicalResult: "99.8%" },
  { parameter: "Colour (ICUMSA)", unit: "IU", specification: "≤ 45", typicalResult: "32" },
  { parameter: "Granulation", unit: "%", specification: "> 99.5% (on sieve)", typicalResult: "99.7%" },
  { parameter: "Magnetic Particles", unit: "mg/kg", specification: "≤ 5", typicalResult: "< 1" },
  { parameter: "SO₂ Residue", unit: "mg/kg", specification: "≤ 10", typicalResult: "< 5" },
  { parameter: "Heavy Metals (as Pb)", unit: "mg/kg", specification: "≤ 0.5", typicalResult: "< 0.1" },
  { parameter: "Pesticide Residue", unit: "-", specification: "Complies with Codex", typicalResult: "Compliant" },
];

export default function QualityPageContent() {
  const handleDownloadTDS = () => {
    alert("Downloading Technical Data Sheet (TDS PDF)...");
  };

  return (
    <div className="bg-[#F8FAFC] text-slate-900 font-sans antialiased w-full">

      {/* 1. CLEAN HERO BANNER SECTION */}
      <section className="relative bg-slate-950 border-b border-slate-200 overflow-hidden pt-12 pb-16 w-full">

        {/* Background Full Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/quality-hero.png" // Aap yahan apni background image path rakh sakte hain
            alt="Quality & Certifications Background"
            className="w-full h-full object-cover object-center opacity-60 sm:opacity-80"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 sm:via-slate-900/80 to-slate-950/60" />
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
          <div className="max-w-5xl space-y-6 py-6">

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              ICUMSA 45 Technical Specifications <br />
              <span className="text-emerald-400">& Quality Assurance</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
              Our sugar meets international standards with consistent quality, ensuring reliability for global trade and industrial use.
            </p>

         

          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA (Table + Certifications Sidebar) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT: ICUMSA 45 TECHNICAL SPECIFICATION TABLE */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs space-y-5">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
                  ICUMSA 45 Technical Specification
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Our sugar is tested and certified to meet ICUMSA 45 international standards.
                </p>
              </div>

              <div className="bg-emerald-50 text-[#065F46] border border-emerald-200/80 text-xs font-black px-3.5 py-1.5 rounded-full shrink-0">
                ICUMSA 45 <span className="font-normal text-slate-600">White Sugar</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-400 text-[10px] uppercase tracking-wider border-b border-slate-200 font-black">
                    <th className="py-3 px-3">Parameter</th>
                    <th className="py-3 px-3">Unit</th>
                    <th className="py-3 px-3">Specification (ICUMSA 45)</th>
                    <th className="py-3 px-3 text-right">Typical Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-800">
                  {SPECS_DATA.map((row, idx) => (
                    <tr key={idx} className="hover:bg-emerald-50/30 transition-colors">
                      <td className="py-3 px-3 font-bold text-slate-950">{row.parameter}</td>
                      <td className="py-3 px-3 text-slate-500 font-mono">{row.unit}</td>
                      <td className="py-3 px-3 font-semibold text-slate-700">{row.specification}</td>
                      <td className="py-3 px-3 text-right">
                        <div className="inline-flex items-center justify-end gap-1.5">
                          <span className="font-extrabold text-slate-950">{row.typicalResult}</span>
                          <span className="inline-flex items-center gap-1 bg-emerald-100/80 text-[#065F46] text-[9px] font-bold px-2 py-0.5 rounded-full">
                            <Check className="w-2.5 h-2.5" />
                            <span>Within Range</span>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

          {/* RIGHT: CERTIFICATIONS & COMPLIANCE */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-2xs space-y-6">

              <div>
                <h3 className="text-lg font-black text-slate-950 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#065F46]" />
                  Certifications & Compliance
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Globally recognized standards for your confidence.
                </p>
              </div>

              <div className="space-y-4">

                {/* ISO 22000 */}
                <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#065F46] text-white flex flex-col items-center justify-center font-black text-xs shrink-0 shadow-xs">
                      ISO
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-950">ISO 22000</h4>
                      <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                        Food Safety Management System
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">
                        Ensures food safety and quality across the supply chain.
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 bg-emerald-100 text-[#065F46] text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0">
                    <Check className="w-3 h-3" /> Certified
                  </span>
                </div>

                {/* FDA License */}
                <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                      FDA
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-950">FDA License</h4>
                      <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                        U.S. Food & Drug Administration
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">
                        Meets FDA requirements for food and beverage exports.
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 bg-emerald-100 text-[#065F46] text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0">
                    <Check className="w-3 h-3" /> Certified
                  </span>
                </div>

                {/* SGS Inspection */}
                <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                      SGS
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-950">SGS Inspection Ready</h4>
                      <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                        Global Trade Assurance
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">
                        Pre-shipment inspection and quality verification.
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 bg-emerald-100 text-[#065F46] text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0">
                    <Check className="w-3 h-3" /> Certified
                  </span>
                </div>

              </div>

              {/* Download TDS Button */}
              <div className="pt-2">
                <button
                  onClick={handleDownloadTDS}
                  className="w-full bg-[#064E3B] hover:bg-[#043E2E] text-white text-xs font-extrabold py-3.5 px-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-xs active:scale-98"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Technical Data Sheet (TDS PDF)</span>
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-2 font-medium">
                  Complete specifications • Test Reports • Certification Documents
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. BOTTOM TRUST BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-2xs grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100 items-center">

          <div className="pt-3 md:pt-0 flex flex-col items-center justify-center">
            <p className="text-sm font-black text-slate-950">130+</p>
            <p className="text-[10px] text-slate-400 font-medium mt-0.5">Member Refineries</p>
          </div>

          <div className="pt-3 md:pt-0 flex flex-col items-center justify-center">
            <p className="text-sm font-black text-slate-950">Global Trade Network</p>
            <p className="text-[10px] text-slate-400 font-medium mt-0.5">Middle East • Asia • Europe</p>
          </div>

          <div className="pt-3 md:pt-0 flex flex-col items-center justify-center">
            <p className="text-sm font-black text-slate-950">ICUMSA 45</p>
            <p className="text-[10px] text-slate-400 font-medium mt-0.5">International Standard</p>
          </div>

          <div className="pt-3 md:pt-0 flex flex-col items-center justify-center">
            <p className="text-sm font-black text-slate-950">SGS Certified</p>
            <p className="text-[10px] text-slate-400 font-medium mt-0.5">Quality & Safety</p>
          </div>

          <div className="pt-3 md:pt-0 flex flex-col items-center justify-center">
            <p className="text-sm font-black text-slate-950">Reliable Supply</p>
            <p className="text-[10px] text-slate-400 font-medium mt-0.5">On Time Delivery</p>
          </div>

        </div>
      </section>

    </div>
  );
}