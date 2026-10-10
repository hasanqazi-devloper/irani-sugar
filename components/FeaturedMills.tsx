"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, MapPin, CheckCircle2, Package, Search } from "lucide-react";

const TRADE_DESK_WHATSAPP = "989120000000";

const createWhatsAppLink = (millName: string, brand: string, samplePrice: string) => {
  const msg = `Hello ISPA Trade Desk, I am interested in ordering a sample for ${millName} (${brand}) at ${samplePrice}. Please provide FOB Bandar Abbas quotation for bulk container order.`;
  return `https://wa.me/${TRADE_DESK_WHATSAPP}?text=${encodeURIComponent(msg)}`;
};

export default function FeaturedMills() {
  return (
    <section id="featured-mills" className="py-16 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Premium Iranian Sugar <span className="text-[#065F46]">Export Showcase</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Direct procurement access to Iran's top export-ready sugar refineries. Order certified samples and request technical specifications.
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm px-6 py-3.5 rounded-xl border border-slate-300 shadow-sm transition-all whitespace-nowrap">
            <Search className="w-4 h-4 text-[#065F46]" />
            <span>Search 130+ Refineries</span>
          </button>
        </div>

        {/* 2-Card Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Shirin Kam Koosh (Aryaei Sugar) */}
          <div className="group bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 flex flex-col sm:flex-row gap-6 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 justify-between">
            
            {/* Responsive Image Container */}
            <div className="w-full sm:w-48 h-52 sm:h-auto bg-slate-100/70 rounded-2xl relative shrink-0 flex items-center justify-center p-4 border border-slate-200 overflow-hidden">
              <Image
                src="/Aryaei-Sugar.png"
                alt="Aryaei Sugar Box"
                width={180}
                height={180}
                quality={100}
                priority
                className="object-contain max-h-full drop-shadow-md group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-extrabold text-slate-950 text-lg tracking-tight leading-none">
                      Shirin Kam Koosh
                    </h3>
                    <p className="text-xs font-semibold text-[#065F46] mt-1">(Aryaei Sugar)</p>
                  </div>
                  <div className="bg-[#065F46] text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1 shrink-0">
                    <span>$3.00 USD</span>
                    <span className="opacity-60 font-normal">/ Sample</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-500 font-medium mb-4">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>Qazvin Province, Iran</span>
                </div>

                <ul className="space-y-2 text-xs text-slate-700 mb-6 border-t border-slate-100 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Grade:</strong> ICUMSA 45 White Refined Cane</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Packaging:</strong> 5kg Premium Retail Carton</span>
                  </li>
                </ul>
              </div>

              <a
                href={createWhatsAppLink("Shirin Kam Koosh", "Aryaei Sugar", "$3.00 USD")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#065F46] hover:bg-[#044E38] text-white text-xs font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Link to RFQ ($3 Sample)</span>
              </a>
            </div>

          </div>

          {/* Card 2: Jaziari Sugar & Sugar Co. */}
          <div className="group bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 flex flex-col sm:flex-row gap-6 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 justify-between">
            
            {/* Responsive Image Container */}
            <div className="w-full sm:w-48 h-52 sm:h-auto bg-slate-100/70 rounded-2xl relative shrink-0 flex items-center justify-center p-4 border border-slate-200 overflow-hidden">
              <Image
                src="/Jaziari-Sugar.png"
                alt="Jaziari Sugar Packaging"
                width={180}
                height={180}
                quality={100}
                priority
                className="object-contain max-h-full drop-shadow-md group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-extrabold text-slate-950 text-lg tracking-tight leading-none">
                      Jaziari Sugar & Sugar Co.
                    </h3>
                    <p className="text-xs font-semibold text-[#065F46] mt-1">(Industrial Grade)</p>
                  </div>
                  <div className="bg-[#065F46] text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1 shrink-0">
                    <span>$4.00 USD</span>
                    <span className="opacity-60 font-normal">/ Sample</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-500 font-medium mb-4">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>Zanjan Province, Iran</span>
                </div>

                <ul className="space-y-2 text-xs text-slate-700 mb-6 border-t border-slate-100 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Grade:</strong> ICUMSA 45 White Refined Cane</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Packaging:</strong> 5kg Industrial Box / PP Bag</span>
                  </li>
                </ul>
              </div>

              <a
                href={createWhatsAppLink("Jaziari Sugar & Sugar Co.", "Jaziari Sugar", "$4.00 USD")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#065F46] hover:bg-[#044E38] text-white text-xs font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Link to RFQ ($4 Sample)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}