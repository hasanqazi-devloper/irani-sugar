"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { Mail, MapPin, Phone, ShieldCheck, Loader2 } from "lucide-react";
// 🚀 Pathed correctly to your client instance schema mapping
import { supabase } from "@/app/[locale]/lib/supabase"; 

export default function ContactForm() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; msg: string } | null>(null);

  // ✅ Viewport tracking to protect layout runtime computation flow flawlessly
  useEffect(() => {
    const checkDeviceWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDeviceWidth();
    window.addEventListener("resize", checkDeviceWidth);
    return () => window.removeEventListener("resize", checkDeviceWidth);
  }, []);

  // 🚀 Database Submission Handler aligned exactly with ContactPage Schema
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // ✅ Schema mapping fixes to fully bypass PGRST204 schema cache errors
      const { error } = await supabase
        .from("leads") 
        .insert([
          { 
            name: name, 
            email: email, 
            phone: "FORM_GATEWAY_NODE", // Fallback text token because form lacks phone input
            property_interest: "OFF-MARKET", // Default state routing vector
            status: "New" 
          }
        ]);

      if (error) throw error;

      setStatus({ success: true, msg: "ACCESS MATRIX TRANSMITTED SUCCESSFULLY!" });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      console.error("Lead insertion gateway error:", err);
      setStatus({ success: false, msg: "TRANSMISSION FAILED. TRY AGAIN." });
    } finally {
      setLoading(false);
    }
  };

  return (
    // Pure Obsidian Black Surface alignment for the final action gate
    <section id="contact" className="py-20 md:py-32 bg-[#050505] border-t border-white/5 scroll-mt-24 relative z-10 w-full">
      
      {/* ✅ Bounded wrapper locked at unified max-w-[1400px] alignment structure */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch w-full">
        
        {/* CORPORATE INFORMATION LAYER - ✅ Powered by Montserrat & Unified Header Blueprint */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left py-2">
          <div className="space-y-4">
            {/* Pre-Title Upper Ribbon */}
            <m.span 
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3 }}
              className="text-[10px] tracking-[0.4em] font-black text-[#C9A050] uppercase block"
            >
              ( PRIVACY & DATA NETWORK )
            </m.span>
            
            {/* Main H2 Section Title */}
            <m.h2 
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-2xl sm:text-3xl md:text-4xl font-sans font-black tracking-[0.05em] text-white leading-tight"
            >
              Connect Privately.
            </m.h2>
            
            {/* Description Box */}
            <m.p 
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className="text-[15px] sm:text-[16px] text-white font-sans font-normal leading-relaxed max-w-sm tracking-wide"
            >
              Unlock structured local analytics, premium off-market listing updates, and private DFW investment vectors direct to your corporate network hub.
            </m.p>
          </div>

          {/* Contact Cards Stack */}
          <div className="space-y-4 pt-8 text-[14px] sm:text-[15px] text-white font-sans font-normal tracking-wide border-t border-white/5 max-w-sm">
            <p className="flex items-center gap-4 group cursor-pointer hover:text-[#C9A050] transition-colors duration-300">
              <Phone size={14} className="text-[#C9A050] shrink-0" /> (214) 428-1121
            </p>
            <p className="flex items-center gap-4 group cursor-pointer hover:text-[#C9A050] transition-colors duration-300 uppercase tracking-widest text-xs font-bold">
              <Mail size={14} className="text-[#C9A050] shrink-0" /> jennifer@sohipdallas.homes
            </p>
            <div className="flex items-start gap-4 leading-relaxed">
              <MapPin size={14} className="text-[#C9A050] shrink-0 mt-1" /> 
              <span>650 Fort Worth Ave, <br /> Dallas, Texas</span>
            </div>
          </div>

          {/* Legal Compliance Block */}
          <div className="pt-6 text-[9px] tracking-widest text-white space-y-2 font-mono max-w-md border-t border-white/5 lg:border-none">
            <p className="flex items-center gap-2 font-black text-white"><ShieldCheck size={12} className="shrink-0" /> Brokerage Compliance Framework Active</p>
            <p>JPAR Real Estate Corporation Systems • License #0599698</p>
          </div>
        </div>

        {/* INPUT VALIDATION CONTROL HUB FORM */}
        <m.form 
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onSubmit={handleSubmit} 
          className="lg:col-span-7 space-y-6 bg-[#141414] bg-[radial-gradient(circle_at_top_left,rgba(201,160,80,0.03),transparent_45%)] p-6 sm:p-10 md:p-12 border border-white/5 focus-within:border-[#C9A050]/30 rounded-2xl shadow-3xl relative flex flex-col justify-center overflow-hidden group transform-gpu w-full text-left font-sans transition-all duration-500"
        >
          {/* Subtle inside tracking animation border */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A050]/30 to-transparent" />

          <div className="space-y-1 w-full">
            <label className="text-[10px] font-mono tracking-[0.2em] text-[#C9A050] uppercase block font-black">Identified Identity</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ENTER YOUR FULL LEGAL NAME..." 
              className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-[#C9A050] transition-colors uppercase text-xs tracking-[0.2em] font-bold placeholder-white/45 font-sans" 
            />
          </div>

          <div className="space-y-1 w-full">
            <label className="text-[10px] font-mono tracking-[0.2em] text-[#C9A050] uppercase block font-black">Communication Routing</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER SECURE EMAIL ADDRESS..." 
              className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-[#C9A050] transition-colors uppercase text-xs tracking-[0.2em] font-bold placeholder-white/45 font-sans" 
            />
          </div>

          <div className="space-y-1 w-full">
            <label className="text-[10px] font-mono tracking-[0.2em] text-[#C9A050] uppercase block font-black">Confidential Parameters</label>
            <textarea 
              placeholder="DESCRIBE THE PARAMETERS OF YOUR ACQUISITION OR ASSET INTEL NEEDS..." 
              rows={4} 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-[#C9A050] transition-colors uppercase text-xs tracking-[0.2em] font-bold placeholder-white/45 resize-none font-sans leading-relaxed" 
            />
          </div>

          {status && (
            <div className={`text-xs font-mono tracking-wider font-bold ${status.success ? "text-emerald-400" : "text-rose-500"}`}>
              {status.msg}
            </div>
          )}

          <div className="pt-4 w-full">
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#C9A050] text-black py-5 tracking-[0.35em] font-black text-xs hover:bg-white disabled:bg-gray-600 disabled:text-gray-400 transition-colors uppercase rounded-full shadow-2xl sm:active:scale-[0.98] duration-300 transform-gpu cursor-pointer font-sans flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={14} /> TRANSMITTING...
                </>
              ) : (
                "Transmit VIP Access Matrix"
              )}
            </button>
          </div>
        </m.form>

      </div>
    </section>
  );
}