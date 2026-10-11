"use client";

import React, { useState } from "react";
import { MessageSquare, Send, ChevronDown, HelpCircle, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

const TRADE_DESK_WHATSAPP = "989120000000";

const FAQS = [
  {
    q: "What sugar grades are available for international export?",
    a: "ISPA member refineries primarily supply White Refined Sugar ICUMSA 45, ICUMSA 100, and Raw Cane Sugar. All shipments strictly conform to SGS / Geo-Chem international testing standards."
  },
  {
    q: "What is the Minimum Order Quantity (MOQ)?",
    a: "Our standard export MOQ is 1 Full Container Load (1 FCL = approx. 25-27 Metric Tons). For bulk vessel orders, orders start from 1,000 Metric Tons up to 25,000 MT."
  },
  {
    q: "What are the shipping terms and loading ports?",
    a: "Orders are quoted on FOB Bandar Abbas Port or CIF destination port terms. We provide complete phytosanitary certificates, certificates of origin, and SGS pre-shipment inspection reports."
  },
  {
    q: "Can I request sample orders before committing to bulk container orders?",
    a: "Yes, sample cartons (5kg or 10kg) are available for lab analysis and quality verification. Connect directly with our Trade Desk on WhatsApp to request sample dispatches."
  }
];

export default function TradeDeskFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    companyName: "",
    targetGrade: "ICUMSA 45 White Refined",
    tonnage: "",
    destinationPort: "",
    notes: ""
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello ISPA Trade Desk,\n*New RFQ Submission*\nCompany: ${formData.companyName}\nGrade: ${formData.targetGrade}\nTonnage: ${formData.tonnage} MT\nDestination: ${formData.destinationPort}\nNotes: ${formData.notes}`;
    window.open(`https://wa.me/${TRADE_DESK_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="trade-desk" className="py-20 bg-green-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
        
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Direct B2B <span className="text-[#065F46]">Trade Desk Inquiry</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 font-medium">
            Submit your official Request for Quotation (RFQ) or contact our international trade secretariat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive RFQ Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-extrabold text-slate-950">Submit Your RFQ</h3>
              <p className="text-xs text-slate-500 mt-1">Fill in your requirements below to receive an instant WhatsApp quotation.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Global Trading Ltd."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#065F46] font-medium"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">Target Sugar Grade *</label>
                  <select
                    value={formData.targetGrade}
                    onChange={(e) => setFormData({ ...formData, targetGrade: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#065F46] font-bold"
                  >
                    <option>ICUMSA 45 White Refined</option>
                    <option>ICUMSA 100 Grade</option>
                    <option>Raw Cane Sugar</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">Metric Tonnage (MT) *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 500 MT"
                    value={formData.tonnage}
                    onChange={(e) => setFormData({ ...formData, tonnage: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#065F46] font-medium"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">Destination Port *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jebel Ali / Karachi / Mersin"
                    value={formData.destinationPort}
                    onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#065F46] font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">Additional Requirements (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Specify packaging preferences, delivery timelines, or lab analysis needs..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl p-4 text-xs text-slate-900 focus:outline-none focus:border-[#065F46] font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#065F46] hover:bg-[#044E38] text-white font-extrabold text-xs py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Submit RFQ via Direct WhatsApp Desk</span>
              </button>

            </form>
          </div>

          {/* Right Column: FAQs & Quick Direct Contacts (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Banner */}
            <div className="bg-[#033B2C] text-white rounded-3xl p-6 shadow-md border border-emerald-900">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold bg-emerald-900/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-700 mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>INSTANT RESPONSE DESK</span>
              </span>
              <h4 className="text-lg font-black text-white">Need Immediate Assistance?</h4>
              <p className="text-slate-300 text-xs mt-1 mb-4">
                Our export team is online 24/7 on WhatsApp for container availability and SGS documentation queries.
              </p>
              <a
                href={`https://wa.me/${TRADE_DESK_WHATSAPP}?text=${encodeURIComponent("Hello ISPA Trade Desk, I have an urgent trade inquiry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#065F46] hover:bg-[#044E38] text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Accordion FAQs */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm mb-2">
                <HelpCircle className="w-4 h-4 text-[#065F46]" />
                <span>Frequently Asked Questions</span>
              </div>

              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-4 py-3 text-xs font-bold text-slate-900 flex items-center justify-between gap-2 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? "rotate-180 text-[#065F46]" : ""}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-3 text-[11px] text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}