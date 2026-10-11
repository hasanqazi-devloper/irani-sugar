"use client";

import React, { useState } from "react";
import { 
  Building2, 
  ChevronDown, 
  Scale, 
  Anchor, 
  MessageSquare, 
  Send, 
  ShieldCheck, 
  Globe, 
  Truck, 
  Leaf, 
  Phone, 
  Mail, 
  MapPin, 
  HelpCircle, 
  Plus, 
  Minus,
  MessageCircle
} from "lucide-react";

const TRADE_DESK_WHATSAPP = "989120000000";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What sugar grades are available for export?",
    answer: "We primarily supply premium ICUMSA 45 refined white sugar, ICUMSA 100-150 fine crystal sugar, and raw brown sugar from certified Iranian refineries."
  },
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer: "Our standard MOQ for ocean freight is 1 x 20ft container (approx. 20-25 Metric Tons depending on packaging type)."
  },
  {
    question: "What are the typical lead times for shipment?",
    answer: "For standard orders, dispatch from mill to Bandar Abbas port takes 3-5 days. Maritime transit depends on the destination port (e.g., GCC: 3-5 days, Eurasia/CIS: 7-12 days)."
  },
  {
    question: "Do you provide shipping and logistics support?",
    answer: "Yes, we handle complete FOB Bandar Abbas export clearance, container packing, SGS quality inspection certificates, and CIF delivery to key global ports."
  },
  {
    question: "Can I get a sample before placing a full order?",
    answer: "Yes, sample orders (e.g. 5kg retail carton or courier samples) are available upon request through our Trade Desk."
  }
];

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    companyName: "",
    targetGrade: "ICUMSA 45 Refined White Sugar",
    metricTonnage: "",
    destinationPort: "",
    additionalNotes: ""
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmitRfq = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*NEW B2B TRADE DESK RFQ INQUIRY*\n\n` +
      `🏢 *Company Name:* ${formData.companyName || "N/A"}\n` +
      `🍬 *Target Sugar Grade:* ${formData.targetGrade}\n` +
      `⚖️ *Metric Tonnage:* ${formData.metricTonnage || "N/A"}\n` +
      `⚓ *Destination Port:* ${formData.destinationPort || "N/A"}\n` +
      `📝 *Notes:* ${formData.additionalNotes || "N/A"}\n\n` +
      `Please provide pricing and delivery schedule for FOB Bandar Abbas.`;

    window.open(
      `https://wa.me/${TRADE_DESK_WHATSAPP}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-[#F3F6F8] min-h-screen text-slate-900 font-sans antialiased py-10 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: HERO TITLE & RFQ FORM */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header Text */}
            <div className="space-y-2">
              <span className="text-[11px] font-black tracking-widest uppercase text-[#065F46] block">
                CONNECT • TRADE • GROW
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Trade Desk Inquiry
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
                Tell us your requirements and our global trade team will get back to you with the best available options, pricing and shipment details.
              </p>
            </div>

            {/* RFQ Form Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs relative overflow-hidden">
              
              {/* Form Title & Subtitle */}
              <div className="flex items-start gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#065F46] shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-950 leading-tight">
                    Submit Your RFQ
                  </h2>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Fill in the details below and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              </div>

              {/* RFQ Form Fields */}
              <form onSubmit={handleSubmitRfq} className="space-y-4">
                
                {/* Row 1: Company Name & Target Sugar Grade */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Company Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Your company name"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl pl-10 pr-4 py-3 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#065F46] focus:bg-white transition-all"
                      />
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Target Sugar Grade *
                    </label>
                    <div className="relative">
                      <select
                        value={formData.targetGrade}
                        onChange={(e) => setFormData({ ...formData, targetGrade: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl pl-10 pr-9 py-3 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#065F46] focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option value="ICUMSA 45 Refined White Sugar">ICUMSA 45 Refined White Sugar</option>
                        <option value="ICUMSA 100-150 Fine Crystal">ICUMSA 100-150 Fine Crystal</option>
                        <option value="Raw Sugar (VHP)">Raw Sugar (VHP)</option>
                        <option value="5kg Retail Packaging">5kg Retail Packaging</option>
                        <option value="50kg Woven Bag">50kg Woven Bag</option>
                        <option value="1000kg Jumbo Bag">1000kg Jumbo Bag</option>
                      </select>
                      <Scale className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Row 2: Metric Tonnage & Destination Port */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Metric Tonnage *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. 5,000 MT"
                        value={formData.metricTonnage}
                        onChange={(e) => setFormData({ ...formData, metricTonnage: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl pl-10 pr-4 py-3 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#065F46] focus:bg-white transition-all"
                      />
                      <Scale className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Destination Port *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Karachi, Jebel Ali, Rotterdam"
                        value={formData.destinationPort}
                        onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl pl-10 pr-4 py-3 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#065F46] focus:bg-white transition-all"
                      />
                      <Anchor className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                {/* Row 3: Additional Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Additional Notes (Optional)
                  </label>
                  <div className="relative">
                    <textarea
                      rows={3}
                      placeholder="Any specific requirements, preferred origins, or other details..."
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl pl-10 pr-4 py-3 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#065F46] focus:bg-white transition-all resize-none"
                    />
                    <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#064E3B] hover:bg-[#043E2E] text-white text-xs sm:text-sm font-extrabold py-3.5 px-6 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 shadow-xs active:scale-98 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit RFQ</span>
                </button>

              </form>

              {/* Trust Badges Footer Bar inside Card */}
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-[#065F46] shrink-0" />
                  <span className="text-[11px] font-bold">Trusted Global Supplier</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <Globe className="w-4 h-4 text-[#065F46] shrink-0" />
                  <span className="text-[11px] font-bold">Competitive Pricing</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <Truck className="w-4 h-4 text-[#065F46] shrink-0" />
                  <span className="text-[11px] font-bold">Reliable Logistics</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <Leaf className="w-4 h-4 text-[#065F46] shrink-0" />
                  <span className="text-[11px] font-bold">Sustainable Trade</span>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: WHATSAPP BANNER, CONTACT INFO & FAQS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. WHATSAPP INSTANT BANNER */}
            <div className="bg-[#043E2E] rounded-3xl p-6 text-white shadow-md relative overflow-hidden border border-emerald-800">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                
                {/* Left Text */}
                <div className="space-y-1.5 z-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300 block">
                    1-CLICK
                  </span>
                  <h3 className="text-xl font-black text-white leading-tight">
                    WhatsApp Instant <br /> Trade Desk
                  </h3>
                  <p className="text-[11px] text-emerald-100/80 font-medium">
                    Get instant support, product availability, <br />
                    pricing and shipment updates.
                  </p>
                </div>

                {/* Right WhatsApp Button */}
                <a
                  href={`https://wa.me/${TRADE_DESK_WHATSAPP}?text=${encodeURIComponent("Hello ISPA Trade Desk, I have an urgent inquiry regarding sugar export pricing.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-emerald-50 text-[#043E2E] text-xs font-black px-4 py-3 rounded-2xl transition-all flex items-center gap-2 shadow-xs shrink-0 z-10"
                >
                  <MessageCircle className="w-4 h-4 text-[#043E2E] fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>

              </div>

              <div className="mt-4 pt-3 border-t border-emerald-800/80 flex items-center justify-between text-[10px] text-emerald-200/70 font-semibold">
                <span>Quick • Direct • Global</span>
                <span>Response Time: &lt; 15 mins</span>
              </div>
            </div>

            {/* 2. OFFICIAL SECRETARIAT CONTACT CARD */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
              <div>
                <h3 className="text-base font-black text-slate-950 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#065F46]" />
                  Official Secretariat Contact
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  For formal inquiries, documentation and partnership opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                
                {/* Phone */}
                <div className="bg-slate-50 border border-slate-100 p-3 rounded-2xl flex flex-col justify-between">
                  <div className="w-7 h-7 rounded-xl bg-emerald-50 text-[#065F46] flex items-center justify-center mb-2">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-900">+98 21 8800 0000</p>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">WhatsApp / Call</p>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-slate-50 border border-slate-100 p-3 rounded-2xl flex flex-col justify-between">
                  <div className="w-7 h-7 rounded-xl bg-emerald-50 text-[#065F46] flex items-center justify-center mb-2">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-900 truncate">trade@iransugar.org</p>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">Business Inquiries</p>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-slate-50 border border-slate-100 p-3 rounded-2xl flex flex-col justify-between">
                  <div className="w-7 h-7 rounded-xl bg-emerald-50 text-[#065F46] flex items-center justify-center mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-900">Tehran, Iran</p>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">Head Secretariat</p>
                  </div>
                </div>

              </div>
            </div>

            {/* 3. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
              <div>
                <h3 className="text-base font-black text-slate-950 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#065F46]" />
                  Frequently Asked Questions
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Find quick answers to common trade desk queries.
                </p>
              </div>

              {/* Accordion List */}
              <div className="divide-y divide-slate-100 pt-1">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="py-3">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between text-left gap-3 focus:outline-none group"
                      >
                        <span className="text-xs font-bold text-slate-900 group-hover:text-[#065F46] transition-colors">
                          {faq.question}
                        </span>
                        <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                          {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed pl-1">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}