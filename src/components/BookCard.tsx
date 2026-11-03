import Link from "next/link";
import { Flame, Skull, Star, MessageCircle, Clock, Heart } from "lucide-react";
import { BookReview } from "@/data/books";

export function BookCard({ book }: { book: BookReview }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-rose-700/60 hover:shadow-2xl hover:shadow-rose-950/40">
      {/* Couverture stylisée du livre + Badges */}
      <div className={`relative h-64 w-full bg-gradient-to-br ${book.coverGradient} p-6 flex flex-col justify-between overflow-hidden`}>
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-30 transition-opacity group-hover:opacity-60"
          style={{ backgroundColor: book.coverAccent }}
        />

        {/* Top badges */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-rose-300 border border-rose-500/30">
            {book.category}
          </span>
          {book.isFavorite && (
            <span className="inline-flex items-center gap-1 rounded-full bg-rose-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
              <Heart className="h-3 w-3 fill-white" /> Coup de cœur
            </span>
          )}
        </div>

        {/* Mock Book Cover spine & typography */}
        <div className="relative z-10 my-auto border-l-2 border-rose-500/60 pl-4 py-1">
          {book.series && (
            <p className="text-[11px] uppercase tracking-widest text-zinc-400">
              {book.series}
            </p>
          )}
          <h3 className="font-serif text-2xl font-bold text-white group-hover:text-rose-200 transition-colors">
            {book.title}
          </h3>
          <p className="text-sm font-medium text-rose-300/90">de {book.author}</p>
        </div>

        {/* Bottom rating & spicy meter */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3 text-xs">
          <div className="flex items-center gap-1 text-amber-400 font-semibold">
            <Star className="h-4 w-4 fill-amber-400" />
            <span>{book.rating.toFixed(1)} / 5</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5" title={`Niveau Spicy : ${book.spicyLevel}/5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Flame
                  key={i}
                  className={`h-3.5 w-3.5 ${
                    i < book.spicyLevel
                      ? "text-rose-500 fill-rose-500"
                      : "text-zinc-700"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-0.5" title={`Niveau Dark : ${book.darknessLevel}/5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Skull
                  key={i}
                  className={`h-3.5 w-3.5 ${
                    i < book.darknessLevel
                      ? "text-purple-400"
                      : "text-zinc-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Corps de la carte */}
      <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
        <div className="space-y-3">
          {/* Anecdote maman */}
          <div className="rounded-xl bg-zinc-950/90 border border-zinc-800/80 p-3 text-xs text-zinc-300">
            <span className="font-semibold text-rose-400 flex items-center gap-1.5 mb-1">
              <Clock className="h-3.5 w-3.5" /> Conditions de lecture de Maman :
            </span>
            <p className="italic text-zinc-400 line-clamp-2">{book.readingContext}</p>
          </div>

          {/* Verdict court */}
          <p className="text-sm leading-relaxed text-zinc-300 line-clamp-3">
            {book.verdictCourt}
          </p>

          {/* Tropes */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {book.tropes.slice(0, 3).map((trope) => (
              <span
                key={trope}
                className="rounded-md bg-rose-950/40 border border-rose-900/40 px-2 py-0.5 text-[11px] text-rose-200"
              >
                #{trope}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-zinc-800/80 pt-4">
          <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
            <MessageCircle className="h-3.5 w-3.5 text-rose-400" />
            {book.commentsCount} avis de lectrices
          </span>

          <Link
            href={`/chroniques/${book.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-400 group-hover:text-rose-300 transition-colors"
          >
            Lire mon avis →
          </Link>
        </div>
      </div>
    </article>
  );
}
