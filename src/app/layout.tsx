import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdminProvider } from "@/context/AdminContext";
import { AdminFloatingBar } from "@/components/AdminFloatingBar";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "❤️ & Lit | Boudoir Littéraire Dark Romance & Vie de Maman",
  description:
    "Le boudoir littéraire d'une maman de 2 enfants qui dévore énormément : chroniques Dark Romance, Romantasy, Spicymètre et conseils lecture nocturne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${jost.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0c0a09] text-stone-200 selection:bg-[#881337] selection:text-rose-50">
        <AdminProvider>
          <div className="grain-overlay" aria-hidden="true" />
          <Suspense fallback={<div className="h-20 bg-[#0c0a09]" />}>
            <Navbar />
          </Suspense>
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
          <AdminFloatingBar />
        </AdminProvider>
      </body>
    </html>
  );
}
