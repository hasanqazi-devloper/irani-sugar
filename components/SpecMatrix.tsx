"use client";

import React from "react";
import { ShieldCheck, FileText, Check, Download, AlertCircle } from "lucide-react";

const SPECIFICATIONS = [
  { parameter: "Polarization (Purity)", spec: "99.80% Min", typical: "99.85%", testMethod: "ICUMSA GS2/3-1" },
  { parameter: "ICUMSA Color", spec: "45 RBU Max", typical: "35–40 RBU", testMethod: "ICUMSA GS2/3-9" },
  { parameter: "Moisture Content", spec: "0.04% Max", typical: "0.02%", testMethod: "ICUMSA GS2/1/3-15" },
  { parameter: "Conductivity Ash", spec: "0.04% Max", typical: "0.015%", testMethod: "ICUMSA GS2/3-17" },
  { parameter: "Solubility", spec: "100% Dry & Free Flowing", typical: "100%", testMethod: "Visual / Physical" },
  { parameter: "Granulation", spec: "Fine to Medium Crystal", typical: "0.60–0.90 mm", testMethod: "Sieve Analysis" },
  { parameter: "SO2 (Sulfur Dioxide)", spec: "20 mg/kg Max", typical: "< 10 mg/kg", testMethod: "ICUMSA GS2/3-35" },
  { parameter: "Radiation / Contaminants", spec: "Certified Normal", typical: "Nil", testMethod: "SGS Lab Test" },
];

export default function SpecMatrix() {
  return (
    <section id="quality" className="py-20 bg-green-100 border-b border-[#5A7A6D] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              ICUMSA 45 <span className="text-[#065F46]">Technical Specification Matrix</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Guaranteed international export standards across all ISPA member refineries. Inspected and verified by SGS and Geo-Chem prior to vessel loading.
            </p>
          </div>

          {/* Download Action Button */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => alert("Official SGS Quality Certificate PDF downloading...")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#065F46] hover:bg-[#044E38] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl transition-all shadow-lg active:scale-95"
            >
              <Download className="w-4 h-4 text-emerald-300" />
              <span>Download SGS Lab Report (PDF)</span>
            </button>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden mb-12 text-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#033B2C] text-white text-xs uppercase tracking-wider border-b border-emerald-900">
                  <th className="py-4.5 px-6 font-bold">Parameter</th>
                  <th className="py-4.5 px-6 font-bold">Official Standard Specification</th>
                  <th className="py-4.5 px-6 font-bold">Typical Analysis</th>
                  <th className="py-4.5 px-6 font-bold">Testing Standard Method</th>
                  <th className="py-4.5 px-6 font-bold text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700 font-medium">
                {SPECIFICATIONS.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-emerald-50/60 transition-colors bg-white odd:bg-slate-50/50"
                  >
                    <td className="py-4 px-6 font-extrabold text-slate-950 flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-[#065F46] shrink-0" />
                      <span>{item.parameter}</span>
                    </td>
                    <td className="py-4 px-6 font-bold text-[#065F46]">
                      {item.spec}
                    </td>
                    <td className="py-4 px-6 text-slate-700 font-semibold">
                      {item.typical}
                    </td>
                    <td className="py-4 px-6 text-slate-500 font-mono text-xs">
                      {item.testMethod}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1 bg-emerald-100 border border-emerald-300 text-[#065F46] font-bold text-[11px] px-3 py-1 rounded-full shadow-xs">
                        <Check className="w-3.5 h-3.5" />
                        <span>Pass</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-1 gap-4 md:hidden mb-10 text-slate-900">
          {SPECIFICATIONS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-4 shadow-md flex flex-col gap-2.5"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-extrabold text-slate-950 text-sm flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#065F46]" />
                  {item.parameter}
                </span>
                <span className="inline-flex items-center gap-1 bg-emerald-100 text-[#065F46] font-bold text-[10px] px-2.5 py-0.5 rounded-full">
                  <Check className="w-3 h-3" />
                  Pass
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-400 font-medium block text-[10px] uppercase">Specification</span>
                  <span className="font-bold text-[#065F46]">{item.spec}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block text-[10px] uppercase">Typical Analysis</span>
                  <span className="font-semibold text-slate-700">{item.typical}</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 font-mono bg-slate-50 p-2 rounded-lg border border-slate-100 mt-1">
                Method: {item.testMethod}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Badges Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#033B2C] text-white rounded-3xl p-6 sm:p-8 border border-emerald-900 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-900/60 rounded-2xl text-emerald-400 shrink-0 border border-emerald-800/50">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white">SGS Inspection Guaranteed</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                100% pre-shipment sampling and testing at port of loading (Bandar Abbas).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-900/60 rounded-2xl text-emerald-400 shrink-0 border border-emerald-800/50">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white">Non-GMO & Phytosanitary Certified</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Complete health and agricultural documentation provided for GCC customs clearance.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-900/60 rounded-2xl text-emerald-400 shrink-0 border border-emerald-800/50">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white">Custom Packing Options</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Available in 50kg PP bags, 1-ton Big Bags, or custom private label retail cartons.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}