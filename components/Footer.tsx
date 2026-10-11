"use client";

import React from "react";
import { MessageSquare, Mail, MapPin, Building2, ShieldCheck, ArrowUpRight } from "lucide-react";

const TRADE_DESK_WHATSAPP = "989120000000";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-700 border-t border-slate-200 pt-16 pb-12 overflow-hidden shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
      

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand & Organization */}
          <div className="space-y-4">
             {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#065F46] flex items-center justify-center text-white font-bold text-lg shadow-sm">
            🌾
          </div>
          <div>
            <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg block leading-none">
              IRAN SUGAR
            </span>
            <span className="text-[10px] text-slate-500 font-semibold tracking-wider">
              PRODUCERS ASSOCIATION
            </span>
          </div>
        </div>

            <p className="text-xs text-slate-600 leading-relaxed pt-2">
              The official apex industry body representing 130+ certified Iranian sugar refineries, white refined ICUMSA 45 producers, and raw sugar processors.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#065F46] bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                <Building2 className="w-3.5 h-3.5" />
                <span>130+ Refineries Represented</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation & Directories */}
          <div>
            <h5 className="font-extrabold text-slate-950 text-sm tracking-wider uppercase mb-4 border-l-2 border-[#065F46] pl-2.5">
              Refinery Portals
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <a href="#featured-mills" className="hover:text-[#065F46] transition-colors flex items-center gap-1.5">
                  <span>Shirin Kam Koosh (Aryaei)</span>
                </a>
              </li>
              <li>
                <a href="#featured-mills" className="hover:text-[#065F46] transition-colors flex items-center gap-1.5">
                  <span>Jaziari Sugar & Sugar Co.</span>
                </a>
              </li>
              <li>
                <a href="#featured-mills" className="hover:text-[#065F46] transition-colors flex items-center gap-1.5">
                  <span>Qazvin Refineries Directory</span>
                </a>
              </li>
              <li>
                <a href="#featured-mills" className="hover:text-[#065F46] transition-colors flex items-center gap-1.5">
                  <span>Khuzestan Cane Agro-Complexes</span>
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-[#065F46] transition-colors flex items-center gap-1.5">
                  <span>ICUMSA 45 Spec Matrix</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Export Logistics & Quality */}
          <div>
            <h5 className="font-extrabold text-slate-950 text-sm tracking-wider uppercase mb-4 border-l-2 border-[#065F46] pl-2.5">
              Trade & Certification
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-center gap-2 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#065F46] shrink-0" />
                <span>SGS Pre-Shipment Inspection</span>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#065F46] shrink-0" />
                <span>Geo-Chem Quality Laboratory</span>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#065F46] shrink-0" />
                <span>FOB Bandar Abbas Port Terms</span>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#065F46] shrink-0" />
                <span>Phytosanitary & Non-GMO Docs</span>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#065F46] shrink-0" />
                <span>50kg PP & Bulk Container Bags</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Headquarters & Contact */}
          <div>
            <h5 className="font-extrabold text-slate-950 text-sm tracking-wider uppercase mb-4 border-l-2 border-[#065F46] pl-2.5">
              Headquarters
            </h5>
            <ul className="space-y-3 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#065F46] shrink-0 mt-0.5" />
                <span>ISPA Central Trade Secretariat, Tehran, Islamic Republic of Iran</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#065F46] shrink-0" />
                <span className="text-slate-900 font-bold">trade@iransugar.org</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#065F46] shrink-0" />
                <span>WhatsApp Desk: +98 912 000 0000</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Iran Sugar Producers Association (ISPA). All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-900 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-slate-900 transition-colors cursor-pointer">
              Export Terms of Trade
            </span>
            <span className="hover:text-slate-900 transition-colors cursor-pointer">
              Member Verification Portal
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}