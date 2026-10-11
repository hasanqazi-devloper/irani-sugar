"use client";

import React, { useState } from "react";
import { Package, Truck, Calculator, ArrowRight, MessageSquare, CheckCircle2 } from "lucide-react";

const TRADE_DESK_WHATSAPP = "989120000000";

export default function PackagingEstimator() {
  const [containerType, setContainerType] = useState<"20ft" | "40ft">("20ft");
  const [packagingType, setPackagingType] = useState<"50kg" | "5kg" | "1000kg">("50kg");

  // Loading Estimator Calculation Logic
  const getLoadingCapacity = () => {
    if (containerType === "20ft") {
      if (packagingType === "50kg") return { bags: "500 Bags", weight: "25 Metric Tons", cartons: "N/A" };
      if (packagingType === "5kg") return { bags: "N/A", weight: "25 Metric Tons", cartons: "5,000 Cartons (10x5kg)" };
      return { bags: "25 Jumbo Bags", weight: "25 Metric Tons", cartons: "N/A" };
    } else {
      if (packagingType === "50kg") return { bags: "540 Bags", weight: "27 Metric Tons", cartons: "N/A" };
      if (packagingType === "5kg") return { bags: "N/A", weight: "27 Metric Tons", cartons: "5,400 Cartons (10x5kg)" };
      return { bags: "27 Jumbo Bags", weight: "27 Metric Tons", cartons: "N/A" };
    }
  };

  const currentCapacity = getLoadingCapacity();

  return (
    <section id="packaging" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
       
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Export Packaging & <span className="text-[#065F46]">Container Estimator</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 font-medium">
            Choose from retail cartons to industrial jumbo bags and calculate your shipping capacity for FOB Bandar Abbas orders.
          </p>
        </div>

        {/* Packaging Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: 5kg Retail Carton */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-amber-100 text-amber-800 text-[11px] font-extrabold px-3 py-1 rounded-full">
                  Retail Packaging
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">ICUMSA 45</span>
              </div>
              <h3 className="text-xl font-black text-slate-950 mb-2">5kg Retail Carton Box</h3>
              <p className="text-xs text-slate-500 mb-6 font-medium">
                Premium retail-ready consumer packaging with multi-layer moisture protection for supermarkets and distributors.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-semibold mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#065F46]" />
                  <span>Outer Carton: 10 x 5kg Bags</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#065F46]" />
                  <span>Laminated Poly-Lined Protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#065F46]" />
                  <span>Custom Private Label Available</span>
                </li>
              </ul>
            </div>
            <a
              href={`https://wa.me/${TRADE_DESK_WHATSAPP}?text=${encodeURIComponent("Hello ISPA Trade Desk, I would like to request sample/pricing for 5kg Retail Cartons.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#065F46] hover:bg-[#044E38] text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire 5kg Retail Sample</span>
            </a>
          </div>

          {/* Card 2: 50kg PP Woven Bag */}
          <div className="bg-white rounded-3xl border-2 border-[#065F46] p-6 shadow-lg transition-all flex flex-col justify-between relative">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#065F46] text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
              MOST POPULAR FOR EXPORT
            </span>
            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="bg-emerald-100 text-[#065F46] text-[11px] font-extrabold px-3 py-1 rounded-full">
                  Bulk Commercial
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">ICUMSA 45</span>
              </div>
              <h3 className="text-xl font-black text-slate-950 mb-2">50kg PP Woven Bag</h3>
              <p className="text-xs text-slate-500 mb-6 font-medium">
                Standard export grade heavy-duty polypropylene bags with inner PE lining for global port shipments.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-semibold mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#065F46]" />
                  <span>UV-Stabilized Polypropylene</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#065F46]" />
                  <span>Double Stitched Seams</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#065F46]" />
                  <span>SGS / Geo-Chem Sealed</span>
                </li>
              </ul>
            </div>
            <a
              href={`https://wa.me/${TRADE_DESK_WHATSAPP}?text=${encodeURIComponent("Hello ISPA Trade Desk, I would like to request an FOB Bandar Abbas quote for 50kg PP Bags.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#065F46] hover:bg-[#044E38] text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire 50kg Bulk Quote</span>
            </a>
          </div>

          {/* Card 3: 1000kg Jumbo FIBC Bag */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-800 text-[11px] font-extrabold px-3 py-1 rounded-full">
                  Industrial Bulk
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">ICUMSA 45</span>
              </div>
              <h3 className="text-xl font-black text-slate-950 mb-2">1,000kg Jumbo FIBC Bag</h3>
              <p className="text-xs text-slate-500 mb-6 font-medium">
                Heavy industrial 1-Ton Jumbo Big Bags designed for automated refinery feed, food processors, and confectioners.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-semibold mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#065F46]" />
                  <span>4-Loop Lifting Mechanism</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#065F46]" />
                  <span>Top Spout & Bottom Discharge</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#065F46]" />
                  <span>Ideal for Bulk Vessel / Rail</span>
                </li>
              </ul>
            </div>
            <a
              href={`https://wa.me/${TRADE_DESK_WHATSAPP}?text=${encodeURIComponent("Hello ISPA Trade Desk, I would like to inquire about 1,000kg Jumbo FIBC Big Bags.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#065F46] hover:bg-[#044E38] text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire Jumbo Bag Terms</span>
            </a>
          </div>

        </div>

        {/* Interactive Container Loading Calculator Box */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left Controls */}
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-extrabold text-[#065F46] uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Interactive Container Estimator</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
                  Calculate Shipping Tonnage
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1 font-medium">
                  Select your container type and packaging size to estimate exact vessel loading figures.
                </p>
              </div>

              {/* Selector 1: Container Size */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">Select Container Size:</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setContainerType("20ft")}
                    className={`py-3 px-4 rounded-xl text-xs font-extrabold border transition-all flex items-center justify-center gap-2 ${
                      containerType === "20ft"
                        ? "bg-[#065F46] text-white border-[#065F46] shadow-md"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <Truck className="w-4 h-4" />
                    <span>20ft FCL Container</span>
                  </button>
                  <button
                    onClick={() => setContainerType("40ft")}
                    className={`py-3 px-4 rounded-xl text-xs font-extrabold border transition-all flex items-center justify-center gap-2 ${
                      containerType === "40ft"
                        ? "bg-[#065F46] text-white border-[#065F46] shadow-md"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <Truck className="w-4 h-4" />
                    <span>40ft FCL Container</span>
                  </button>
                </div>
              </div>

              {/* Selector 2: Packaging Type */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">Select Packaging Size:</label>
                <div className="grid grid-cols-3 gap-3">
                  {(["50kg", "5kg", "1000kg"] as const).map((pkg) => (
                    <button
                      key={pkg}
                      onClick={() => setPackagingType(pkg)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-extrabold border transition-all text-center ${
                        packagingType === pkg
                          ? "bg-[#065F46] text-white border-[#065F46] shadow-sm"
                          : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {pkg === "50kg" ? "50kg PP Bag" : pkg === "5kg" ? "5kg Carton" : "1-Ton Jumbo"}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Display Results Box */}
            <div className="w-full md:w-1/2 bg-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Estimated Load Calculation</span>
                  <span className="bg-emerald-950 text-emerald-400 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-emerald-800">
                    FOB Bandar Abbas
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Total Net Weight</span>
                    <span className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1 block">
                      {currentCapacity.weight}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Quantity Breakdown</span>
                    <span className="text-lg sm:text-xl font-extrabold text-white mt-1 block">
                      {packagingType === "5kg" ? currentCapacity.cartons : currentCapacity.bags}
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${TRADE_DESK_WHATSAPP}?text=${encodeURIComponent(`Hello ISPA Trade Desk, I estimated a loading of ${currentCapacity.weight} (${packagingType}) in a${containerType} container. Please share current FOB pricing.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Request Booking for this Container</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}