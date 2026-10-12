"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShieldCheck, Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"en" | "fa">("en");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Mills", href: "/mills" },
    { name: "Products", href: "/products" },
    { name: "Quality", href: "/quality" },
    { name: "Trade", href: "/trade" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleLanguage = () => {
    const targetLang = currentLang === "en" ? "fa" : "en";
    setCurrentLang(targetLang);

    const attemptTranslation = (retries = 5) => {
      const selectElem = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      
      if (selectElem) {
        selectElem.value = targetLang;
        selectElem.dispatchEvent(new Event("change"));
      } else if (retries > 0) {
        setTimeout(() => attemptTranslation(retries - 1), 300);
      }
    };

    attemptTranslation();
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm notranslate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
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
        </Link>

        {/* Center Desktop Navigation (Fast Client Routing using <Link>) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors pb-1 ${
                  isActive
                    ? "text-[#065F46] border-b-2 border-[#065F46]"
                    : "hover:text-[#065F46]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Controls (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <button className="p-2 text-slate-600 hover:text-[#065F46] transition-colors cursor-pointer">
            <Search className="w-5 h-5" />
          </button>

          {/* Styled Language Switch Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-xs font-bold bg-[#065F46] text-white px-3.5 py-2 rounded-full cursor-pointer hover:bg-[#044E38] active:scale-95 transition-all shadow-sm"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-200" />
            <span className="tracking-wide">
              {currentLang === "en" ? "EN / فارسی" : "فارسی / EN"}
            </span>
          </button>

          {/* Verified Badge */}
          <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold px-3 py-1.5 rounded-md">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Verified Association</span>
          </div>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Quick Language Toggle Button for Mobile Header */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-[11px] font-bold bg-[#065F46] text-white px-2.5 py-1.5 rounded-full"
          >
            <Globe className="w-3 h-3 text-emerald-200" />
            <span>{currentLang === "en" ? "FA" : "EN"}</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 cursor-pointer rounded-lg hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 font-semibold text-slate-700 text-sm shadow-xl">
          
          {/* Links List */}
          <div className="space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 px-3 rounded-md transition-colors ${
                    isActive
                      ? "bg-slate-100 text-[#065F46] font-bold"
                      : "hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <hr className="border-slate-100" />

          {/* Mobile Extra Controls */}
          <div className="pt-1 space-y-3">
            <button
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 text-xs font-bold bg-[#065F46] text-white py-2.5 rounded-lg active:scale-98 transition-all shadow-sm"
            >
              <Globe className="w-4 h-4 text-emerald-200" />
              <span>Switch to {currentLang === "en" ? "فارسی (Persian)" : "English"}</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold py-2 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Verified Official Association</span>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}