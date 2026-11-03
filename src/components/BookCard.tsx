"use client";

import Link from "next/link";
import { Flame, Skull, Star, MessageCircle, Clock, Heart } from "lucide-react";
import { BookReview } from "@/data/books";
import { motion } from "framer-motion";

export function BookCard({ book }: { book: BookReview }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-stone-800/80 bg-[#1c1917]/60 transition-all duration-500 hover:-translate-y-2 hover:border-rose-800/60 hover:shadow-2xl hover:shadow-rose-950/50 backdrop-blur-sm"
    >
      {/* Couverture stylisée du livre + Badges */}
      <div className={`relative h-72 w-full bg-gradient-to-br ${book.coverGradient} p-8 flex flex-col justify-between overflow-hidden`}>
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-50"
          style={{ backgroundColor: book.coverAccent }}
        />

        {/* Top badges */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="rounded-full bg-[#0c0a09]/80 backdrop-blur-md px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-rose-300 border border-rose-500/30">
            {book.category}
          </span>
          {book.isFavorite && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-700 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-rose-950/80 border border-rose-400/50">
              <Heart className="h-3 w-3 fill-white" /> Coup de cœur
            </span>
          )}
        </div>

        {/* Mock Book Cover 3D Effect */}
        <div className="relative z-10 my-auto w-3/4 mx-auto book-cover-float rounded-r-xl rounded-l-sm bg-[#0c0a09]/40 backdrop-blur-sm border border-white/10 p-5 book-spine">
          <div className="border-l-2 border-rose-500/60 pl-4 py-1">
            {book.series && (
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
                {book.series}
              </p>
            )}
            <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-200 transition-colors leading-tight mt-1">
              {book.title}
            </h3>
            <p className="text-sm font-medium text-rose-300/90 italic font-serif mt-1">de {book.author}</p>
          </div>
        </div>

        {/* Bottom rating & spicy meter */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 text-xs bg-[#0c0a09]/60 backdrop-blur-md rounded-b-xl px-4 py-3 -mx-8 -mb-8">
          <div className="flex items-center gap-1.5 text-amber-400 font-bold">
            <Star className="h-4 w-4 fill-amber-400" />
            <span>{book.rating.toFixed(1)}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1" title={`Niveau Spicy : ${book.spicyLevel}/5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Flame
                  key={i}
                  className={`h-4 w-4 spicy-icon ${
                    i < book.spicyLevel
                      ? "text-rose-500 fill-rose-500"
                      : "text-stone-700"
                  }`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                />
              ))}
            </div>
            <div className="flex items-center gap-1" title={`Niveau Dark : ${book.darknessLevel}/5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Skull
                  key={i}
                  className={`h-4 w-4 dark-icon ${
                    i < book.darknessLevel
                      ? "text-purple-400"
                      : "text-stone-700"
                  }`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Corps de la carte */}
      <div className="flex flex-1 flex-col justify-between p-7 space-y-5">
        <div className="space-y-4">
          {/* Anecdote maman */}
          <div className="rounded-2xl bg-[#0c0a09]/80 border border-stone-800/80 p-4 text-xs text-stone-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/50" />
            <span className="font-serif font-bold text-amber-400 flex items-center gap-2 mb-1.5 uppercase tracking-wider text-[10px]">
              <Clock className="h-3.5 w-3.5" /> Journal de bord d'une maman :
            </span>
            <p className="italic text-stone-400 line-clamp-2 font-light leading-relaxed">{book.readingContext}</p>
          </div>

          {/* Verdict court */}
          <p className="text-sm leading-relaxed text-stone-300 font-light line-clamp-3">
            {book.verdictCourt}
          </p>

          {/* Tropes */}
          <div className="flex flex-wrap gap-2 pt-1">
            {book.tropes.slice(0, 3).map((trope) => (
              <span
                key={trope}
                className="rounded-lg bg-rose-950/30 border border-rose-900/30 px-3 py-1 text-[10px] uppercase tracking-wider text-rose-300/80"
              >
                #{trope}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-stone-800/80 pt-5">
          <span className="inline-flex items-center gap-1.5 text-xs text-stone-400 font-light">
            <MessageCircle className="h-4 w-4 text-rose-400" />
            {book.commentsCount} avis
          </span>

          <Link
            href={`/chroniques/${book.slug}`}
            className="inline-flex items-center gap-2 text-sm font-serif italic font-bold text-rose-400 group-hover:text-amber-300 transition-colors"
          >
            Lire mon avis <span className="not-italic group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
