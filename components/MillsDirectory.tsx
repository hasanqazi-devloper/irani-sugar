"use client";

import React, { useState } from "react";
import { MessageSquare, MapPin, Search, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";

const TRADE_DESK_WHATSAPP = "989120000000";

const MILLS_DATA = [
  {
    id: 1,
    name: "Shirin Kam Koosh (Aryaei Sugar)",
    province: "Qazvin Province",
    capacity: "4,500 Tons / Day",
    grade: "ICUMSA 45 White Refined",
    packing: "5kg, 50kg PP, 1-Ton Big Bag",
    status: "Verified Export Mill",
  },
  {
    id: 2,
    name: "Jaziari Sugar & Sugar Co.",
    province: "Zanjan Province",
    capacity: "3,800 Tons / Day",
    grade: "ICUMSA 45 Industrial Grade",
    packing: "50kg PP Bags / Bulk",
    status: "Verified Export Mill",
  },
  {
    id: 3,
    name: "Naghsh-e Jahan Sugar Agro-Ind.",
    province: "Isfahan Province",
    capacity: "5,000 Tons / Day",
    grade: "ICUMSA 45 Cane Refined",
    packing: "50kg Export Bags",
    status: "Verified Export Mill",
  },
  {
    id: 4,
    name: "Haft Tappeh Cane Sugar Complex",
    province: "Khuzestan Province",
    capacity: "10,000 Tons / Day",
    grade: "ICUMSA 45 & Raw Cane",
    packing: "Bulk Vessel / 50kg Bags",
    status: "Verified Export Mill",
  },
  {
    id: 5,
    name: "Mirza Koochak Khan Agro-Ind.",
    province: "Khuzestan Province",
    capacity: "6,500 Tons / Day",
    grade: "ICUMSA 45 White Refined",
    packing: "50kg PP Bags",
    status: "Verified Export Mill",
  },
  {
    id: 6,
    name: "Karkhaneh-ye Qand-e Shirvan",
    province: "Khorasan Razavi",
    capacity: "3,200 Tons / Day",
    grade: "ICUMSA 45 Beet Sugar",
    packing: "10kg, 50kg Export Bags",
    status: "Verified Export Mill",
  },
];

export default function MillsDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("All");

  const provinces = ["All", "Qazvin Province", "Zanjan Province", "Isfahan Province", "Khuzestan Province", "Khorasan Razavi"];

  const filteredMills = MILLS_DATA.filter((mill) => {
    const matchesSearch = mill.name.toLowerCase().includes(searchTerm.toLowerCase()) || mill.province.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProvince = selectedProvince === "All" || mill.province === selectedProvince;
    return matchesSearch && matchesProvince;
  });

  const createWhatsAppLink = (millName: string) => {
    const msg = `Hello ISPA Trade Desk, I am interested in placing a bulk container order or requesting a quote for refinery: ${millName}. Please share FOB Bandar Abbas terms and current availability.`;
    return `https://wa.me/${TRADE_DESK_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="directory" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-[#065F46] text-xs font-bold mb-3 shadow-xs">
            <Building2 className="w-4 h-4 text-[#065F46]" />
            <span>130+ REFINERIES DIRECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Official ISPA <span className="text-[#065F46]">Member Mills Directory</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-medium">
            Browse through Iran's verified sugar refineries and send direct WhatsApp inquiries to our international trade desk for immediate container booking.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search refinery name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#065F46] focus:bg-white transition-all font-medium"
            />
          </div>

          {/* Province Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {provinces.map((prov) => (
              <button
                key={prov}
                onClick={() => setSelectedProvince(prov)}
                className={`text-xs font-bold px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                  selectedProvince === prov
                    ? "bg-[#065F46] text-white shadow-md"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                {prov}
              </button>
            ))}
          </div>

        </div>

        {/* Mills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMills.map((mill) => (
            <div 
              key={mill.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-[#065F46] font-bold text-[10px] px-2.5 py-1 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3 h-3" />
                    {mill.status}
                  </span>
                  <span className="text-xs font-extrabold text-slate-400 font-mono">
                    ID: #{mill.id}04
                  </span>
                </div>

                <h3 className="font-black text-slate-950 text-lg tracking-tight group-hover:text-[#065F46] transition-colors mb-1">
                  {mill.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-4">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{mill.province}</span>
                </div>

                <ul className="space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-4 mb-6">
                  <li className="flex items-center justify-between">
                    <span className="text-slate-400">Production Capacity:</span>
                    <span className="font-bold text-slate-900">{mill.capacity}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-slate-400">Quality Grade:</span>
                    <span className="font-bold text-[#065F46]">{mill.grade}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-slate-400">Packaging:</span>
                    <span className="font-semibold text-slate-700">{mill.packing}</span>
                  </li>
                </ul>
              </div>

              {/* Direct WhatsApp Inquiry Button */}
              <a
                href={createWhatsAppLink(mill.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#065F46] hover:bg-[#044E38] text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-current text-emerald-200" />
                <span>WhatsApp Inquiry for this Mill</span>
              </a>

            </div>
          ))}
        </div>

        {filteredMills.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm font-medium">No refineries found matching your search criteria.</p>
          </div>
        )}

      </div>
    </section>
  );
}