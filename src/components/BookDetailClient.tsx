"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock,
  Flame,
  Heart,
  ShieldAlert,
  Skull,
  Sparkles,
  Star,
  Quote,
} from "lucide-react";
import { BookReview } from "@/data/books";
import { CommentSection } from "@/components/CommentSection";
import { EditableText } from "@/components/EditableText";
import { useAdmin } from "@/context/AdminContext";

export function BookDetailClient({
  slug,
  fallbackBook,
}: {
  slug: string;
  fallbackBook?: BookReview;
}) {
  const { books } = useAdmin();
  const book = books.find((b) => b.slug === slug) ?? fallbackBook;

  if (!book) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center space-y-4">
        <h1 className="font-serif text-3xl font-bold text-white">
          Chronique introuvable
        </h1>
        <Link
          href="/chroniques"
          className="inline-flex items-center gap-2 rounded-full bg-rose-700 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white"
        >
          Retour aux chroniques
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
      {/* Retour */}
      <div>
        <Link
          href="/chroniques"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-stone-400 hover:text-rose-400 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Retour au boudoir
        </Link>
      </div>

      {/* En-tête de la chronique */}
      <div className={`rounded-[2.5rem] bg-gradient-to-br ${book.coverGradient} border border-rose-900/30 p-10 sm:p-14 shadow-2xl relative overflow-hidden`}>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#0c0a09]/80 backdrop-blur-md px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-300 border border-rose-500/30">
                <EditableText
                  id={`book.${book.slug}.category`}
                  defaultText={book.category}
                />
              </span>
              {book.series && (
                <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs text-stone-200 backdrop-blur-md">
                  <EditableText
                    id={`book.${book.slug}.series`}
                    defaultText={book.series}
                  />
                </span>
              )}
              {book.isFavorite && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-700 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg border border-rose-400/50">
                  <Heart className="h-3 w-3 fill-white" /> Coup de cœur
                </span>
              )}
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white leading-[1.1]">
              <EditableText
                id={`book.${book.slug}.title`}
                defaultText={book.title}
              />{" "}
              <span className="italic font-light text-rose-200 block mt-2 text-3xl sm:text-4xl">
                <EditableText
                  id={`book.${book.slug}.subtitle_avis`}
                  defaultText="Mon Avis"
                />
              </span>
            </h1>
            <p className="text-lg text-rose-100/80 font-light">
              Un roman de{" "}
              <strong className="text-white font-medium">
                <EditableText
                  id={`book.${book.slug}.author`}
                  defaultText={book.author}
                />
              </strong>{" "}
              • Éditions{" "}
              <EditableText
                id={`book.${book.slug}.publisher`}
                defaultText={book.publisher}
              />{" "}
              ({book.pages} pages)
            </p>

            <blockquote className="border-l-4 border-amber-500 pl-6 py-2 italic text-white/90 text-xl font-serif leading-relaxed relative">
              <Quote className="absolute -left-3 -top-4 h-8 w-8 text-amber-500/30" />
              <EditableText
                id={`book.${book.slug}.coverQuote`}
                defaultText={book.coverQuote}
                multiline
              />
            </blockquote>

            <div className="flex flex-wrap gap-2.5 pt-4">
              {book.tropes.map((trope, i) => (
                <span
                  key={trope}
                  className="rounded-xl bg-[#0c0a09]/60 backdrop-blur-sm border border-white/10 px-4 py-1.5 text-xs font-medium text-rose-200"
                >
                  #<EditableText id={`book.${book.slug}.trope.${i}`} defaultText={trope} />
                </span>
              ))}
            </div>
          </div>

          {/* Encadré de notation luxueux */}
          <div className="md:col-span-4 rounded-[2rem] bg-[#0c0a09]/90 border border-white/10 p-8 space-y-6 backdrop-blur-xl shadow-2xl book-cover-float">
            <div className="text-center border-b border-stone-800 pb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
                Note Globale de Chloé
              </span>
              <div className="mt-3 flex items-center justify-center gap-3 text-4xl font-serif font-bold text-amber-400">
                <Star className="h-8 w-8 fill-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                {book.rating.toFixed(1)} <span className="text-lg text-stone-500 font-light">/ 5</span>
              </div>
            </div>

            <div className="space-y-5 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-stone-300 font-bold uppercase tracking-widest text-[10px]">Spicymètre 🌶️ :</span>
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Flame
                      key={i}
                      className={`h-5 w-5 ${
                        i < book.spicyLevel ? "text-rose-500 fill-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]" : "text-stone-800"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-stone-300 font-bold uppercase tracking-widest text-[10px]">Niveau Dark 💀 :</span>
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skull
                      key={i}
                      className={`h-5 w-5 ${
                        i < book.darknessLevel ? "text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" : "text-stone-800"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 text-stone-400 text-xs text-center uppercase tracking-widest">
                Publié le{" "}
                <EditableText
                  id={`book.${book.slug}.publishDate`}
                  defaultText={book.publishDate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Avertissements & Contexte Maman */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] border border-amber-900/30 bg-amber-950/10 p-8 space-y-4 backdrop-blur-sm">
          <h2 className="flex items-center gap-3 font-serif text-2xl font-bold text-amber-400">
            <Clock className="h-6 w-6" /> Journal de bord d&apos;une maman débordée
          </h2>
          <p className="text-sm text-stone-300 font-light leading-relaxed italic">
            <EditableText
              id={`book.${book.slug}.readingContext`}
              defaultText={book.readingContext}
              multiline
            />
          </p>
        </div>

        <div className="rounded-[2rem] border border-purple-900/30 bg-purple-950/10 p-8 space-y-4 backdrop-blur-sm">
          <h2 className="flex items-center gap-3 font-serif text-2xl font-bold text-purple-300">
            <ShieldAlert className="h-6 w-6" /> Trigger Warnings
          </h2>
          <div className="flex flex-wrap gap-2 pt-2">
            {book.triggerWarnings.map((tw, i) => (
              <span
                key={tw}
                className="rounded-lg bg-purple-950/80 border border-purple-700/40 px-3 py-1.5 text-xs text-purple-200 font-medium"
              >
                ⚠️{" "}
                <EditableText
                  id={`book.${book.slug}.tw.${i}`}
                  defaultText={tw}
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Résumé & Chronique Complète */}
      <div className="rounded-[2.5rem] border border-stone-800 bg-[#1c1917]/40 backdrop-blur-sm p-10 sm:p-14 space-y-12">
        <div className="space-y-5 border-b border-stone-800 pb-10">
          <h2 className="font-serif text-3xl font-bold text-white flex items-center gap-3">
            <BookOpen className="h-7 w-7 text-rose-400" /> De quoi ça parle ? <span className="italic font-light text-stone-400 text-xl">(Sans spoiler)</span>
          </h2>
          <p className="text-lg text-stone-300 font-light leading-relaxed">
            <EditableText
              id={`book.${book.slug}.summary`}
              defaultText={book.summary}
              multiline
            />
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-rose-400 italic">
            Mon avis complet & sans filtre
          </h2>
          <div className="space-y-6 text-lg text-stone-200 font-light leading-relaxed font-serif">
            {book.fullReview.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "text-xl text-white font-normal" : ""}>
                <EditableText
                  id={`book.${book.slug}.review.${index}`}
                  defaultText={paragraph}
                  multiline
                />
              </p>
            ))}
          </div>
        </div>

        {/* Points forts & Pour qui */}
        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-[#0c0a09] p-8 border border-stone-800 space-y-5 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-amber-400" /> Ce qui m&apos;a fait vibrer
            </h3>
            <ul className="space-y-4 text-sm text-stone-300 font-light">
              {book.pointsForts.map((pt, i) => (
                <li key={pt} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <EditableText
                      id={`book.${book.slug}.pointFort.${i}`}
                      defaultText={pt}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-[#0c0a09] p-8 border border-stone-800 space-y-5 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-3">
              <Heart className="h-6 w-6 text-rose-400" /> Est-ce que je vous le conseille ?
            </h3>
            <p className="text-sm text-stone-300 font-light leading-relaxed italic">
              <EditableText
                id={`book.${book.slug}.pourQui`}
                defaultText={book.pourQui}
                multiline
              />
            </p>
          </div>
        </div>
      </div>

      {/* Commentaires interactifs */}
      <CommentSection initialComments={book.comments} bookTitle={book.title} />
    </div>
  );
}
