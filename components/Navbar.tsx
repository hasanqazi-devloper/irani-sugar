"use client";

import React, { useState } from "react";
import { Search, ShieldCheck, Menu, X } from "lucide-react";

export default function Navbar() {
  const [lang, setLang] = useState<"EN" | "FA">("EN");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
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

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <a href="/" className="text-[#065F46] border-b-2 border-[#065F46] pb-1">Home</a>
          <a href="/mills" className="hover:text-[#065F46] transition-colors">Our Mills</a>
          <a href="#products" className="hover:text-[#065F46] transition-colors">Products</a>
          <a href="#quality" className="hover:text-[#065F46] transition-colors">Quality</a>
          <a href="#rfq" className="hover:text-[#065F46] transition-colors">Trade</a>
          <a href="#contact" className="hover:text-[#065F46] transition-colors">Contact</a>
        </nav>

        {/* Right Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <button className="p-2 text-slate-600 hover:text-[#065F46] transition-colors">
            <Search className="w-5 h-5" />
          </button>

          {/* EN / FA Language Toggle */}
          <button
            onClick={() => setLang(lang === "EN" ? "FA" : "EN")}
            className="flex items-center gap-1.5 text-xs font-bold bg-[#065F46] text-white px-3 py-1.5 rounded-md cursor-pointer hover:bg-[#044E38] transition-all"
          >
            <span>{lang === "EN" ? "EN" : "EN"}</span>
            <span className="opacity-60">|</span>
            <span>{lang === "EN" ? "فارسی" : "فارسی"}</span>
          </button>

          {/* Verified Badge */}
          <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold px-3 py-1 rounded-md">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Verified Association</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 font-semibold text-slate-700 text-sm">
          <a href="/" className="block text-[#065F46]">Home</a>
          <a href="/mills" className="block">Our Mills</a>
          <a href="#products" className="block">Products</a>
          <a href="#quality" className="block">Quality</a>
          <a href="#rfq" className="block">Trade</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </header>
  );
}