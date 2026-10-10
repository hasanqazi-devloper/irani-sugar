"use client";

import React from "react";
import { ArrowRight, Building2, Award, ShieldCheck, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      
      {/* Background Hero Image with Soft Gradient Overlay */}
    {/* Background Hero Image with Mobile-Specific Focal Point */}
<div 
  className="absolute inset-0 bg-no-repeat bg-cover bg-[position:85%_center] sm:bg-center"
  style={{ backgroundImage: `url('/hero.png')` }}
>
  {/* Soft light overlay on left side for text contrast */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/30 sm:to-transparent" />
</div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-12 sm:pb-20 w-full">
        <div className="max-w-2xl">
          
          {/* Sub-tag */}
      

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-md">
            Official B2B Export Gateway <br className="hidden sm:block" />
            for <span className="text-emerald-400">130+ Iranian Sugar Refineries</span>
          </h1>

          {/* Subtext */}
          <p className="text-xs sm:text-base text-slate-100 mb-6 sm:mb-8 leading-relaxed max-w-xl drop-shadow">
            Connect directly with 130+ verified Iranian sugar mills. High-quality sugar, competitive factory prices, and reliable export logistics support for global buyers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#rfq"
              className="bg-[#065F46] hover:bg-[#044E38] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#directory"
              className="bg-white/90 hover:bg-white text-slate-900 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full border border-slate-300 backdrop-blur-md transition-all shadow-sm text-center"
            >
              Explore Our Mills
            </a>
          </div>

        </div>
      </div>

      {/* Floating 4-Card Stats Bar - Perfectly Aligned for Mobile & Desktop */}
      {/* <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 sm:pb-12">
        <div className="bg-white text-slate-900 rounded-2xl shadow-xl border border-slate-200/80 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="flex items-center gap-3 p-2 border-b sm:border-b-0 sm:border-r border-slate-100 last:border-none">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-[#065F46] shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-sm sm:text-base text-slate-900">130+</div>
              <div className="text-[11px] text-slate-500 font-medium">Verified Mills Across Iran</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 border-b sm:border-b-0 sm:border-r border-slate-100 last:border-none">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-[#065F46] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-sm sm:text-base text-slate-900">ICUMSA 45</div>
              <div className="text-[11px] text-slate-500 font-medium">Premium White Sugar Standard</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 border-b sm:border-b-0 sm:border-r border-slate-100 last:border-none">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-[#065F46] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-sm sm:text-base text-slate-900">SGS Certified</div>
              <div className="text-[11px] text-slate-500 font-medium">Quality & Safety Assured</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-[#065F46] shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-sm sm:text-base text-slate-900">Global Logistics</div>
              <div className="text-[11px] text-slate-500 font-medium">GCC & Eurasia Direct</div>
            </div>
          </div>

        </div>
      </div> */}

    </section>
  );
}