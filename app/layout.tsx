import "./globals.css";
import Navbar from "@/components/Navbar";
import GoogleTranslate from "@/components/GoogleTranslate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iran Sugar Producers Association | Official B2B Export Portal",
  description:
    "Direct procurement access to Iran's top export-ready sugar refineries. Request technical specifications and verified certified quotes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-[#0D0D0D] text-white font-sans">
        <Navbar />
        {children}
        <GoogleTranslate />
      </body>
    </html>
  );
}