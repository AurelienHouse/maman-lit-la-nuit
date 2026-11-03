"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BookOpen, Flame, Heart, Menu, Moon, Sparkles, X, Coffee } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/chroniques", label: "Mes Chroniques & Avis" },
  { href: "/tops", label: "Tops & Guides Dark" },
  { href: "/a-propos", label: "La Maman Lectrice" },
  { href: "/contact", label: "Me Conseiller un Livre" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rose-950/60 bg-zinc-950/85 backdrop-blur-xl">
      {/* Top banner clin d'œil maman */}
      <div className="bg-gradient-to-r from-rose-950/80 via-red-950/70 to-zinc-950 px-4 py-1.5 text-center text-xs text-rose-200/90 border-b border-rose-900/30">
        <span className="inline-flex items-center gap-1.5 font-medium">
          <Moon className="h-3.5 w-3.5 text-rose-400" />
          Lecture en cours à 23h45 : <strong className="text-white">Haunting Adeline (Tome 2)</strong> — 4 cafés au compteur aujourd&apos;hui
          <Coffee className="h-3.5 w-3.5 text-amber-400 ml-1" />
        </span>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-600 to-red-900 shadow-lg shadow-rose-950/60 ring-1 ring-rose-400/30 transition-transform group-hover:scale-105">
            <BookOpen className="h-5 w-5 text-rose-100" />
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-tight text-white sm:text-2xl">
              Maman Lit <span className="text-rose-500 italic">La Nuit</span>
            </span>
            <p className="text-[11px] uppercase tracking-widest text-zinc-400">
              Chroniques Dark Romance & Vie de Maman
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
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-rose-600/20 text-rose-300 ring-1 ring-rose-500/40 shadow-sm shadow-rose-950"
                    : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/chroniques"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-red-700 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-rose-950/60 hover:from-rose-500 hover:to-red-600 transition-all"
          >
            <Flame className="h-4 w-4 text-amber-300" />
            Pépites 5/5
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-300 hover:bg-zinc-900 hover:text-white md:hidden"
          aria-label="Menu principal"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950 px-4 pt-3 pb-6 md:hidden">
          <div className="flex flex-col space-y-2">
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
                  className={`rounded-xl px-4 py-3 text-base font-medium ${
                    isActive
                      ? "bg-rose-950/60 text-rose-300 border border-rose-800/50"
                      : "text-zinc-300 hover:bg-zinc-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
