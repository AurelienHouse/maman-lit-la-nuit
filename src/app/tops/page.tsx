import Link from "next/link";
import { BOOK_REVIEWS, CURATED_LISTS } from "@/data/books";
import { BookCard } from "@/components/BookCard";
import { Flame, Sparkles, ShieldAlert, BookOpen, Heart } from "lucide-react";

export default function TopsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 space-y-20">
      {/* Header */}
      <div className="rounded-3xl border border-rose-950/60 bg-gradient-to-br from-rose-950/30 via-zinc-900 to-zinc-950 p-8 sm:p-12 space-y-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-rose-300">
          <Flame className="h-3.5 w-3.5" /> Guides & Sélections Thématiques
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Mes Tops & Guides Dark Romance
        </h1>
        <p className="max-w-2xl text-sm sm:text-base text-zinc-300 leading-relaxed">
          Vous ne savez pas par quel roman commencer ? Vous cherchez un trope bien précis (Enemies to Lovers, Stalker, Mafia, Shadow Daddy) ? Voici mes sélections sur-mesure testées et approuvées !
        </p>
      </div>

      {/* Petit lexique de la Dark Romance pour les nouvelles lectrices */}
      <section className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 sm:p-10 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-400">
            Le dico de Maman
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Petit lexique de survie sur BookTok & en Dark Romance
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-zinc-950 p-5 border border-zinc-800 space-y-2">
            <h3 className="font-serif font-bold text-rose-400">Morally Grey</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Un héros ni tout blanc ni tout noir : capable du pire envers le monde entier, mais d&apos;une loyauté absolue envers l&apos;héroïne.
            </p>
          </div>
          <div className="rounded-2xl bg-zinc-950 p-5 border border-zinc-800 space-y-2">
            <h3 className="font-serif font-bold text-rose-400">Slow Burn</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Quand la tension monte pendant 300 pages avant le premier baiser. Idéal pour tourner les pages jusqu&apos;à 2h du matin !
            </p>
          </div>
          <div className="rounded-2xl bg-zinc-950 p-5 border border-zinc-800 space-y-2">
            <h3 className="font-serif font-bold text-rose-400">Trigger Warnings (TW)</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Les avertissements de contenu en début de livre. Toujours les vérifier pour lire en toute sérénité selon sa sensibilité.
            </p>
          </div>
          <div className="rounded-2xl bg-zinc-950 p-5 border border-zinc-800 space-y-2">
            <h3 className="font-serif font-bold text-rose-400">Shadow Daddy</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Le cousin Romantasy du héros de Dark Romance : ténébreux, sarcastique et doté de pouvoirs liés aux ombres (coucou Xaden !).
            </p>
          </div>
        </div>
      </section>

      {/* Les listes curatées avec leurs livres */}
      <div className="space-y-16">
        {CURATED_LISTS.map((list) => {
          const books = BOOK_REVIEWS.filter((b) => list.bookSlugs.includes(b.slug));
          return (
            <section key={list.id} className="space-y-8">
              <div className="rounded-2xl border border-rose-900/40 bg-zinc-900/40 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <span className="inline-block rounded-full bg-rose-600/20 border border-rose-500/30 px-3 py-1 text-xs font-bold text-rose-300">
                    {list.tag}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {list.title}
                  </h2>
                  <p className="text-sm text-zinc-300">{list.description}</p>
                </div>

                <div className="rounded-xl bg-zinc-950 border border-rose-800/40 p-4 text-xs text-zinc-300 lg:max-w-sm shrink-0">
                  <strong className="text-rose-400 block mb-1">💡 L&apos;astuce de Chloé :</strong>
                  {list.mamaTip}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {books.map((book) => (
                  <BookCard key={book.slug} book={book} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
