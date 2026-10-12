"use client";

import React, { useState } from "react";
import {
  Award,
  Globe,
  ShieldCheck,
  Leaf,
  Scale,
  Box,
  CheckCircle2,
  Calendar,
  Droplet,
  MapPin,
  ArrowRight,
  Send,
  Truck,
  Calculator,
  Anchor
} from "lucide-react";

const TRADE_DESK_WHATSAPP = "989120000000";

interface Product {
  id: string;
  category: "retail" | "bulk" | "industrial";
  tag: string;
  title: string;
  subtitle: string;
  samplePrice: string;
  imageSrc: string;
  imageAlt: string;
  specs: {
    weight: string;
    packaging: string;
    grade: string;
    shelfLife: string;
    moisture: string;
    origin: string;
  };
}

const PRODUCTS: Product[] = [
  {
    id: "5kg-carton",
    category: "retail",
    tag: "Retail Packaging",
    title: "5kg Retail Carton",
    subtitle: "Premium Iranian White Sugar",
    samplePrice: "$3.00 USD",
    imageSrc: "/Aryaei-Sugar.png",
    imageAlt: "5kg Retail Carton Box",
    specs: {
      weight: "5 kg",
      packaging: "Carton Box",
      grade: "ICUMSA 45",
      shelfLife: "24 Months",
      moisture: "≤ 0.04%",
      origin: "Tehran, Iran",
    },
  },
  {
    id: "50kg-bag",
    category: "bulk",
    tag: "Bulk Packaging",
    title: "50kg Woven Bag",
    subtitle: "Export Grade White Sugar",
    samplePrice: "$4.00 USD",
    imageSrc: "/Aryaei-Sugar.png",
    imageAlt: "50kg PP Woven Bag",
    specs: {
      weight: "50 kg",
      packaging: "PP Woven Bag",
      grade: "ICUMSA 45",
      shelfLife: "24 Months",
      moisture: "≤ 0.04%",
      origin: "Bandar Abbas, Iran",
    },
  },
  {
    id: "1000kg-jumbo",
    category: "industrial",
    tag: "Industrial Packaging",
    title: "1000kg Jumbo Bag",
    subtitle: "Industrial Grade White Sugar",
    samplePrice: "$4.00 USD",
    imageSrc: "/Aryaei-Sugar.png",
    imageAlt: "1000kg Jumbo Bag",
    specs: {
      weight: "1,000 kg",
      packaging: "FIBC Jumbo Bag",
      grade: "ICUMSA 45",
      shelfLife: "24 Months",
      moisture: "≤ 0.04%",
      origin: "Bandar Abbas, Iran",
    },
  },
];

export default function ProductsPageContent() {
  const [activeTab, setActiveTab] = useState<"all" | "retail" | "bulk" | "industrial">("all");

  const filteredProducts =
    activeTab === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  const handleInquiry = (productTitle: string) => {
    const msg = `Hello ISPA Trade Desk,\nI am interested in requesting a sample and quote for: *${productTitle}*.\nPlease share pricing and delivery schedule for FOB Bandar Abbas.`;
    window.open(
      `https://wa.me/${TRADE_DESK_WHATSAPP}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-[#F8FAFC] text-slate-900 font-sans antialiased  w-full">
      
      {/* 1. FULL BACKGROUND IMAGE HERO SECTION */}
    <section className="relative bg-slate-950 border-b border-slate-200 overflow-hidden pt-12 pb-16 w-full">
        
  {/* Background Image: Ab mobile aur desktop dono par dikhegi with optimized opacity & overlay */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <img
      src="/product-hero.png"
      alt="Iranian Sugar Export Background"
      className="w-full h-full object-cover object-center opacity-60 sm:opacity-80"
    />
    {/* Rich Dark Gradient Overlay for 100% text readability on all screen sizes */}
    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 sm:via-slate-900/80 to-slate-950/60" />
  </div>

  <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* Hero Main Content */}
    <div className="max-w-3xl space-y-6 py-6">
      
    

      <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
        Premium Iranian Sugar <br />
        <span className="text-emerald-400">Packaging & Sample Orders</span>
      </h1>

      <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
        Choose from our flexible packaging options for global markets. Request samples and get a tailored quote for your import needs.
      </p>

   

    </div>

  </div>
</section>

      {/* 2. MAIN PRODUCTS SECTION & FILTER TABS */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Title & Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Our Export Packaging Options
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              Three flexible packaging sizes to meet your business needs — from retail to industrial.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-slate-200/70 p-1.5 rounded-2xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === "all"
                  ? "bg-[#065F46] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveTab("retail")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === "retail"
                  ? "bg-[#065F46] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              Retail (5kg)
            </button>
            <button
              onClick={() => setActiveTab("bulk")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === "bulk"
                  ? "bg-[#065F46] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              Bulk (50kg)
            </button>
            <button
              onClick={() => setActiveTab("industrial")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === "industrial"
                  ? "bg-[#065F46] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              Industrial (1000kg)
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                
                {/* Top Tag & Price Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-emerald-50 text-[#065F46] border border-emerald-200/60 text-[10px] font-extrabold px-3 py-1 rounded-full">
                    {product.tag}
                  </span>

                  <div className="bg-[#065F46] text-white rounded-xl px-3.5 py-1 text-right shadow-2xs">
                    <p className="text-xs font-black leading-none">{product.samplePrice}</p>
                    <p className="text-[8px] font-semibold text-emerald-200 leading-none mt-0.5">Sample Order</p>
                  </div>
                </div>

                {/* Horizontal Split Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-5">
                  
                  {/* Left Product Packaging Image Container */}
                  <div className="sm:col-span-5 w-full h-48 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center relative overflow-hidden p-2">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="max-h-full max-w-full object-contain drop-shadow-md"
                    />
                  </div>

                  {/* Right Details & Specs */}
                  <div className="sm:col-span-7 space-y-2">
                    <div>
                      <h3 className="text-base font-black text-slate-950 leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Compact Specs List */}
                    <div className="space-y-1.5 text-[11px] border-t border-slate-100 pt-2">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Net Weight:</span>
                        <span className="font-bold text-slate-900">{product.specs.weight}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Packaging:</span>
                        <span className="font-bold text-slate-900 truncate max-w-[110px]">{product.specs.packaging}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Grade:</span>
                        <span className="font-bold text-slate-900">{product.specs.grade}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Shelf Life:</span>
                        <span className="font-bold text-slate-900">{product.specs.shelfLife}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Moisture:</span>
                        <span className="font-bold text-slate-900">{product.specs.moisture}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Origin:</span>
                        <span className="font-bold text-slate-900">{product.specs.origin}</span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              {/* CTA Action Button */}
              <button
                onClick={() => handleInquiry(product.title)}
                className="w-full bg-[#065F46] hover:bg-[#044E38] text-white text-xs font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-2xs group-hover:shadow-md active:scale-95 mt-1"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Request Sample & Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          ))}
        </div>

        {/* 3. BOTTOM WIDGETS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Container Estimator Box */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#065F46] block">
                CONTAINER LOADING ESTIMATOR
              </span>
              <h3 className="text-xl font-black text-slate-950 mt-0.5">
                Calculate Your Shipping Capacity
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-0.5 mb-5">
                Estimate how many bags or cartons fit in a 20ft or 40ft container.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                
                {/* Container Image Box */}
                <div className="sm:col-span-4 bg-slate-50 rounded-2xl p-2 border border-slate-200 flex items-center justify-center overflow-hidden h-40">
                  <img
                    src="/container.png"
                    alt="Green Shipping Container 3D"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Specs Grid */}
                <div className="sm:col-span-8 grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <p className="text-xs font-black text-slate-900">20ft Container</p>
                    <p className="text-[10px] text-slate-400 font-medium mb-2">Max Capacity (approx.)</p>
                    <ul className="space-y-1 text-[11px] font-bold text-slate-700">
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#065F46]" />
                        10,000 kg (50kg bags)
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#065F46]" />
                        2,000 cartons (5kg)
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#065F46]" />
                        10 jumbo bags (1000kg)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <p className="text-xs font-black text-slate-900">40ft Container</p>
                    <p className="text-[10px] text-slate-400 font-medium mb-2">Max Capacity (approx.)</p>
                    <ul className="space-y-1 text-[11px] font-bold text-slate-700">
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#065F46]" />
                        20,000 kg (50kg bags)
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#065F46]" />
                        4,000 cartons (5kg)
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#065F46]" />
                        20 jumbo bags (1000kg)
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100">
              <a
                href="/#packaging"
                className="inline-flex items-center gap-2 border border-slate-300 hover:border-[#065F46] hover:text-[#065F46] text-slate-800 text-xs font-bold px-3.5 py-2 rounded-xl transition-all"
              >
                <Calculator className="w-3.5 h-3.5 text-[#065F46]" />
                <span>Try Calculator</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Global Reach Logistics Card */}
          <div className="lg:col-span-4 bg-emerald-50/50 rounded-3xl border border-emerald-200/70 p-6 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="space-y-1.5 mb-4">
                <p className="text-xs font-extrabold text-[#065F46] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#065F46]" />
                  Flexible Packaging.
                </p>
                <p className="text-xs font-extrabold text-[#065F46] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#065F46]" />
                  Reliable Supply.
                </p>
                <p className="text-xs font-extrabold text-[#065F46] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#065F46]" />
                  Global Reach.
                </p>
              </div>

              {/* Cargo Ship Map Graphic */}
              <div className="bg-white rounded-2xl p-2 border border-emerald-100 shadow-2xs mb-4 text-center overflow-hidden h-36 flex items-center justify-center">
                <img
                  src="/ship.png"
                  alt="Global Reach Shipping Vessel"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            <a
              href={`https://wa.me/${TRADE_DESK_WHATSAPP}?text=${encodeURIComponent("Hello ISPA Trade Desk, I would like to start a trade inquiry.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white hover:bg-slate-50 text-[#065F46] border border-emerald-300 font-extrabold text-xs py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-2xs"
            >
              <span>Start Your Trade Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

     {/* 4. BOTTOM COMPACT TRUST BADGES BAR */}
<div className="mt-8 pt-4 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-3 text-center bg-white/50 rounded-2xl p-4">
  <div className="flex flex-col items-center justify-center">
    <p className="text-sm font-black text-slate-950">130+</p>
    <p className="text-[10px] text-slate-500 font-medium">Member Refineries</p>
  </div>
  <div className="flex flex-col items-center justify-center border-l border-slate-200/60">
    <p className="text-sm font-black text-slate-950">ICUMSA 45</p>
    <p className="text-[10px] text-slate-500 font-medium">Global Standard</p>
  </div>
  <div className="flex flex-col items-center justify-center border-l border-slate-200/60">
    <p className="text-sm font-black text-slate-950">GCC & Eurasia Direct</p>
    <p className="text-[10px] text-slate-500 font-medium">To Key Markets</p>
  </div>
  <div className="flex flex-col items-center justify-center border-l border-slate-200/60">
    <p className="text-sm font-black text-slate-950">SGS Certified</p>
    <p className="text-[10px] text-slate-500 font-medium">Quality & Safety</p>
  </div>
</div>

      </section>

    </div>
  );
}