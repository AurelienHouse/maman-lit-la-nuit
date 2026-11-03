"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Flame, Heart, Skull, BookOpen, RefreshCw } from "lucide-react";
import { BOOK_REVIEWS, BookReview } from "@/data/books";

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
    <div className="rounded-3xl border border-rose-900/40 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-rose-950/30 p-6 sm:p-10 shadow-2xl">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 border border-rose-500/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-rose-300">
            <Sparkles className="h-3.5 w-3.5" /> « Le bon livre pour le bon moment »
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Dis-moi dans quel état d&apos;esprit tu es ce soir, je te conseille ta prochaine lecture :
          </h2>
          <p className="text-sm text-zinc-400">
            Inspiré de la bibliothérapie (version maman fatiguée qui veut s&apos;évader après 21h) : clique sur ton envie du moment !
          </p>

          <div className="space-y-2.5 pt-2">
            {MOODS.map((mood) => {
              const Icon = mood.icon;
              const isSelected = selectedMood.id === mood.id;
              return (
                <button
                  key={mood.id}
                  type="button"
                  onClick={() => setSelectedMood(mood)}
                  className={`w-full flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-gradient-to-r from-rose-700 to-red-800 text-white shadow-lg shadow-rose-950/60 ring-1 ring-rose-400"
                      : "bg-zinc-900/80 text-zinc-300 border border-zinc-800 hover:border-rose-800/60 hover:bg-zinc-900"
                  }`}
                >
                  <Icon className={`h-5 w-5 shrink-0 ${isSelected ? "text-amber-300" : "text-rose-400"}`} />
                  <span>{mood.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Résultat recommandé */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-rose-500/40 bg-zinc-950/90 p-6 shadow-xl space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-400">
                L&apos;ordonnance de Chloé :
              </span>
              <span className="rounded-full bg-rose-950 px-3 py-0.5 text-xs font-semibold text-rose-200 border border-rose-800">
                Note : {matchedBook.rating}/5 ★
              </span>
            </div>

            <div className={`rounded-xl bg-gradient-to-br ${matchedBook.coverGradient} p-5 border border-white/10`}>
              <p className="text-xs uppercase tracking-wider text-rose-300">{matchedBook.category}</p>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">{matchedBook.title}</h3>
              <p className="text-sm text-zinc-300">de {matchedBook.author}</p>
              <p className="mt-3 text-xs italic text-rose-200/90 border-l-2 border-rose-500 pl-3">
                {matchedBook.coverQuote}
              </p>
            </div>

            <div className="rounded-xl bg-rose-950/30 border border-rose-900/40 p-3.5 text-xs text-rose-100">
              <strong className="text-rose-400 block mb-1">Pourquoi ce choix pour toi :</strong>
              {selectedMood.reason}
            </div>

            <p className="text-xs text-zinc-400 line-clamp-3">
              {matchedBook.verdictCourt}
            </p>

            <Link
              href={`/chroniques/${matchedBook.slug}`}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-zinc-950 hover:bg-rose-100 transition-colors"
            >
              Découvrir ma chronique complète →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
