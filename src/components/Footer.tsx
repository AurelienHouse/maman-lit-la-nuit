import Link from "next/link";
import { BookOpen, Coffee, Flame, Heart, Moon, Feather, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-rose-950/40 bg-[#0a0908] text-stone-400 overflow-hidden">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-full max-w-4xl rounded-full bg-rose-900/10 blur-3xl opacity-50" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#881337] to-[#292524] text-rose-100 shadow-md transition-transform group-hover:-rotate-12">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="font-serif text-3xl font-bold text-stone-100">
                Maman Lit <span className="text-[#e11d48] italic font-light">La Nuit</span>
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-stone-400 font-light">
              Le boudoir littéraire d&apos;une maman de deux enfants qui dévore plus de 100 romans par an.
              Spécialiste autoproclamée de la <strong className="text-rose-300 font-serif italic">Dark Romance</strong>, de la
              Romantasy et des héros moralement gris qui nous font oublier de dormir.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-stone-500">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1c1917] px-4 py-1.5 text-stone-300 border border-stone-800">
                <Moon className="h-3.5 w-3.5 text-amber-400" /> Club des lectrices nocturnes
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1c1917] px-4 py-1.5 text-stone-300 border border-stone-800">
                <Flame className="h-3.5 w-3.5 text-rose-500" /> Avis 100% honnêtes & sans filtre
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-amber-500/80 border-b border-stone-800 pb-3">
              Explorer le Boudoir
            </h3>
            <ul className="mt-5 space-y-3 text-sm font-light">
              <li>
                <Link href="/" className="hover:text-amber-200 transition-colors flex items-center gap-2 group">
                  <span className="h-px w-0 bg-amber-500 transition-all group-hover:w-3" /> Accueil & Coups de cœur
                </Link>
              </li>
              <li>
                <Link href="/chroniques" className="hover:text-amber-200 transition-colors flex items-center gap-2 group">
                  <span className="h-px w-0 bg-amber-500 transition-all group-hover:w-3" /> Toutes mes chroniques
                </Link>
              </li>
              <li>
                <Link href="/tops" className="hover:text-amber-200 transition-colors flex items-center gap-2 group">
                  <span className="h-px w-0 bg-amber-500 transition-all group-hover:w-3" /> Tops & Guides de survie
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-amber-200 transition-colors flex items-center gap-2 group">
                  <span className="h-px w-0 bg-amber-500 transition-all group-hover:w-3" /> La vie de maman
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-200 transition-colors flex items-center gap-2 group">
                  <span className="h-px w-0 bg-amber-500 transition-all group-hover:w-3" /> Me conseiller une lecture
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-amber-500/80 border-b border-stone-800 pb-3">
              Genres Favoris
            </h3>
            <ul className="mt-5 space-y-3 text-sm font-light">
              <li>
                <Link href="/chroniques" className="hover:text-amber-200 transition-colors flex items-center gap-2 group">
                  <span className="h-px w-0 bg-amber-500 transition-all group-hover:w-3" /> Dark Romance & Stalker
                </Link>
              </li>
              <li>
                <Link href="/chroniques" className="hover:text-amber-200 transition-colors flex items-center gap-2 group">
                  <span className="h-px w-0 bg-amber-500 transition-all group-hover:w-3" /> Romantasy & Shadow Daddies
                </Link>
              </li>
              <li>
                <Link href="/chroniques" className="hover:text-amber-200 transition-colors flex items-center gap-2 group">
                  <span className="h-px w-0 bg-amber-500 transition-all group-hover:w-3" /> Enemies to Lovers
                </Link>
              </li>
              <li>
                <Link href="/chroniques" className="hover:text-amber-200 transition-colors flex items-center gap-2 group">
                  <span className="h-px w-0 bg-amber-500 transition-all group-hover:w-3" /> New Romance Épicée
                </Link>
              </li>
              <li>
                <Link href="/chroniques" className="hover:text-amber-200 transition-colors flex items-center gap-2 group">
                  <span className="h-px w-0 bg-amber-500 transition-all group-hover:w-3" /> Thrillers Psychologiques
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-stone-800/80 pt-8 text-xs text-stone-500 sm:flex-row">
          <p className="flex items-center gap-2">
            <Feather className="h-4 w-4 text-rose-400" /> © 2026 Maman Lit La Nuit — Boudoir Littéraire. Tous droits réservés.
          </p>
          <p className="flex items-center gap-1.5">
            Fait avec <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" /> et beaucoup de <Coffee className="h-3.5 w-3.5 text-amber-500" /> après le coucher des enfants.
          </p>
        </div>
      </div>
    </footer>
  );
}
