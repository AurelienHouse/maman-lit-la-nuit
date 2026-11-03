"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { BookOpen, Flame, Heart, Menu, Moon, Sparkles, X, Coffee, Feather } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Le Boudoir" },
  { href: "/chroniques", label: "Chroniques & Avis" },
  { href: "/tops", label: "Tops & Guides" },
  { href: "/a-propos", label: "La Maman Lectrice" },
  { href: "/contact", label: "Me Conseiller un Livre" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-500 border-b ${scrolled ? "bg-[#0c0a09]/90 backdrop-blur-xl border-rose-950/60 shadow-2xl shadow-rose-950/20" : "bg-transparent border-transparent"}`}>
      {/* Top banner clin d'œil maman luxueux */}
      <div className="bg-gradient-to-r from-rose-950/90 via-[#1c1917] to-rose-950/90 px-4 py-1.5 text-center text-[11px] uppercase tracking-widest text-rose-200/80 border-b border-rose-900/30">
        <span className="inline-flex items-center gap-1.5 font-medium">
          <Moon className="h-3 w-3 text-amber-400" />
          Lecture en cours à 23h45 : <strong className="text-white font-serif italic text-xs">Haunting Adeline (Tome 2)</strong> — 4 cafés au compteur
          <Coffee className="h-3 w-3 text-amber-500 ml-1" />
        </span>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-4">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#881337] to-[#292524] shadow-lg shadow-rose-950/60 ring-1 ring-amber-400/20 transition-all duration-500 group-hover:rotate-12 group-hover:shadow-amber-500/20">
            <BookOpen className="h-5 w-5 text-rose-100" />
            <div className="absolute inset-0 rounded-full border border-amber-400/10 scale-125 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
          </div>
          <div>
            <span className="flex items-center gap-1.5 font-serif text-2xl font-bold tracking-tight text-stone-100 sm:text-3xl">
              <Heart className="heart-beat h-6 w-6 fill-rose-600 text-rose-500 drop-shadow-[0_0_12px_rgba(244,63,94,0.75)] sm:h-7 sm:w-7" />
              <span className="italic font-light text-amber-400">&</span>
              <span>Lit</span>
            </span>
            <p className="text-[10px] uppercase tracking-[0.3em] text-amber-500/80">
              Boudoir Littéraire & Vie de Maman
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-amber-200"
                    : "text-stone-400 hover:text-stone-100"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-rose-950/40 border border-rose-800/40 shadow-inner"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/chroniques"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-rose-800 to-rose-950 px-6 py-3 text-sm font-semibold text-rose-100 shadow-md shadow-rose-950/60 transition-all hover:shadow-rose-600/20 hover:scale-105 border border-rose-600/30"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Flame className="h-4 w-4 text-amber-400 animate-pulse" />
            Pépites 5/5
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-stone-400 hover:bg-stone-900 hover:text-white md:hidden"
          aria-label="Menu principal"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-rose-950/50 bg-[#0c0a09] px-4 pt-3 pb-8 md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-2 mt-4">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-xl px-5 py-4 text-base font-medium font-serif transition-all ${
                      isActive
                        ? "bg-rose-950/60 text-amber-200 border border-rose-800/50 shadow-inner"
                        : "text-stone-400 hover:bg-stone-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
