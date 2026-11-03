"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Flame, Heart, Skull, BookOpen, RefreshCw } from "lucide-react";
import { BOOK_REVIEWS, BookReview } from "@/data/books";
import { motion, AnimatePresence } from "framer-motion";

const MOODS = [
  {
    id: "debutante",
    label: "Je débute en Dark Romance (doux mais pimenté)",
    icon: Heart,
    matchSlug: "twisted-love-ana-huang",
    reason: "Parfait pour commencer sans traumatisme avec un héros ultra protecteur !",
  },
  {
    id: "obsession",
    label: "Je veux une obsession totale & des frissons (5/5 piments)",
    icon: Flame,
    matchSlug: "haunting-adeline-hd-carlton",
    reason: "Le sommet de la Stalker Romance gothique. Prépare-toi à veiller tard !",
  },
  {
    id: "addictif",
    label: "Le classique incontournable qui rend accro dès la page 1",
    icon: Sparkles,
    matchSlug: "captive-sarah-rivens",
    reason: "Impossible de le lâcher : testé et approuvé à 3h du matin.",
  },
  {
    id: "humour-noir",
    label: "Je veux rire aux éclats avec de l'humour très noir",
    icon: Skull,
    matchSlug: "butcher-and-blackbird-brynne-weaver",
    reason: "Deux tueurs en série amoureux et un héros complètement gaga !",
  },
  {
    id: "dragons",
    label: "Je veux des dragons, une académie mortelle et un Shadow Daddy",
    icon: BookOpen,
    matchSlug: "fourth-wing-rebecca-yarros",
    reason: "La Romantasy numéro 1 qui a conquis toutes les lectrices de Dark Romance.",
  },
];

export function MoodMatcher() {
  const [selectedMood, setSelectedMood] = useState(MOODS[0]);

  const matchedBook: BookReview =
    BOOK_REVIEWS.find((b) => b.slug === selectedMood.matchSlug) || BOOK_REVIEWS[0];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-[2.5rem] border border-rose-900/40 bg-gradient-to-br from-[#1c1917] via-[#0c0a09] to-[#292524] p-8 sm:p-12 shadow-2xl relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300">
            <Sparkles className="h-3.5 w-3.5" /> « Le bon livre pour le bon moment »
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
            Dis-moi dans quel état d'esprit tu es ce soir, <span className="italic text-rose-400 font-light">je te conseille ta prochaine lecture :</span>
          </h2>
          <p className="text-sm text-stone-400 font-light max-w-xl">
            Inspiré de la bibliothérapie (version maman fatiguée qui veut s'évader après 21h) : clique sur ton envie du moment et laisse la magie opérer !
          </p>

          <div className="space-y-3 pt-4">
            {MOODS.map((mood) => {
              const Icon = mood.icon;
              const isSelected = selectedMood.id === mood.id;
              return (
                <button
                  key={mood.id}
                  type="button"
                  onClick={() => setSelectedMood(mood)}
                  className={`w-full flex items-center gap-4 rounded-2xl px-5 py-4 text-left text-sm font-medium transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-r from-rose-800 to-[#881337] text-white shadow-lg shadow-rose-950/60 ring-1 ring-amber-400/50 scale-[1.02]"
                      : "bg-[#1c1917]/80 text-stone-300 border border-stone-800 hover:border-rose-800/60 hover:bg-[#292524]"
                  }`}
                >
                  <div className={`p-2 rounded-full ${isSelected ? "bg-white/10" : "bg-stone-800/50"}`}>
                    <Icon className={`h-5 w-5 shrink-0 ${isSelected ? "text-amber-300" : "text-rose-400"}`} />
                  </div>
                  <span className="font-light tracking-wide">{mood.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Résultat recommandé avec animation */}
        <div className="lg:col-span-5 h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMood.id}
              initial={{ opacity: 0, x: 20, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -20, rotateY: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-[2rem] border border-amber-500/30 bg-[#0c0a09]/90 p-6 shadow-2xl shadow-rose-950/20 space-y-5 relative overflow-hidden h-full flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400">
                  L'ordonnance de Chloé :
                </span>
                <span className="rounded-full bg-rose-950/80 px-3 py-1 text-xs font-bold text-rose-200 border border-rose-800 flex items-center gap-1">
                  <Flame className="h-3 w-3" /> {matchedBook.rating}/5
                </span>
              </div>

              <div className={`rounded-2xl bg-gradient-to-br ${matchedBook.coverGradient} p-6 border border-white/10 book-cover-float book-spine`}>
                <p className="text-[10px] uppercase tracking-[0.2em] text-rose-300">{matchedBook.category}</p>
                <h3 className="font-serif text-3xl font-bold text-white mt-1 leading-tight">{matchedBook.title}</h3>
                <p className="text-sm text-stone-300 italic mt-1">de {matchedBook.author}</p>
                <p className="mt-4 text-xs italic text-amber-200/90 border-l-2 border-amber-500 pl-3 leading-relaxed">
                  {matchedBook.coverQuote}
                </p>
              </div>

              <div className="rounded-2xl bg-rose-950/30 border border-rose-900/40 p-4 text-xs text-rose-100 font-light leading-relaxed flex-1">
                <strong className="text-rose-400 block mb-1 uppercase tracking-wider text-[10px]">Pourquoi ce choix pour toi :</strong>
                {selectedMood.reason}
              </div>

              <p className="text-xs text-stone-400 font-light italic line-clamp-2">
                "{matchedBook.verdictCourt}"
              </p>

              <Link
                href={`/chroniques/${matchedBook.slug}`}
                className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-4 text-sm font-bold text-[#0c0a09] hover:bg-amber-300 transition-colors shadow-lg shadow-amber-900/20"
              >
                Découvrir ma chronique complète →
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
