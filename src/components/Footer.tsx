import Link from "next/link";
import { BookOpen, Coffee, Flame, Heart, Moon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-rose-950/50 bg-black text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-600 to-red-900 text-white">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="font-serif text-2xl font-bold text-white">
                Maman Lit <span className="text-rose-500 italic">La Nuit</span>
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-zinc-400">
              Le repaire littéraire d&apos;une maman de deux enfants qui dévore plus de 100 romans par an.
              Spécialiste autoproclamée de la <strong className="text-rose-300">Dark Romance</strong>, de la
              Romantasy et des héros moralement gris qui nous font oublier de dormir.
            </p>
            <div className="flex items-center gap-4 pt-2 text-xs text-zinc-500">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1.5 text-zinc-300 border border-zinc-800">
                <Moon className="h-3.5 w-3.5 text-rose-400" /> Club des lectrices nocturnes
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1.5 text-zinc-300 border border-zinc-800">
                <Flame className="h-3.5 w-3.5 text-amber-400" /> Avis 100% honnêtes & sans filtre
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-rose-400">
              Explorer le Blog
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-rose-300 transition-colors">
                  Accueil & Coups de cœur
                </Link>
              </li>
              <li>
                <Link href="/chroniques" className="hover:text-rose-300 transition-colors">
                  Toutes mes chroniques
                </Link>
              </li>
              <li>
                <Link href="/tops" className="hover:text-rose-300 transition-colors">
                  Tops, Guides & Par où commencer
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-rose-300 transition-colors">
                  Qui suis-je ? (La vie de maman)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rose-300 transition-colors">
                  Me conseiller une lecture
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-rose-400">
              Genres Favoris
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/chroniques" className="hover:text-rose-300 transition-colors">
                  Dark Romance & Stalker
                </Link>
              </li>
              <li>
                <Link href="/chroniques" className="hover:text-rose-300 transition-colors">
                  Romantasy & Shadow Daddies
                </Link>
              </li>
              <li>
                <Link href="/chroniques" className="hover:text-rose-300 transition-colors">
                  Enemies to Lovers
                </Link>
              </li>
              <li>
                <Link href="/chroniques" className="hover:text-rose-300 transition-colors">
                  New Romance Épicée
                </Link>
              </li>
              <li>
                <Link href="/chroniques" className="hover:text-rose-300 transition-colors">
                  Thrillers Psychologiques
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-8 text-xs text-zinc-500 sm:flex-row">
          <p>
            © 2026 Maman Lit La Nuit — Inspiré des blogs littéraires passionnés. Tous droits réservés.
          </p>
          <p className="flex items-center gap-1.5">
            Fait avec <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" /> et beaucoup de <Coffee className="h-3.5 w-3.5 text-amber-500" /> après le coucher des enfants.
          </p>
        </div>
      </div>
    </footer>
  );
}
