import Link from "next/link";
import { notFound } from "next/navigation";
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
} from "lucide-react";
import { BOOK_REVIEWS } from "@/data/books";
import { CommentSection } from "@/components/CommentSection";

export function generateStaticParams() {
  return BOOK_REVIEWS.map((book) => ({
    slug: book.slug,
  }));
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = BOOK_REVIEWS.find((b) => b.slug === slug);

  if (!book) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Retour */}
      <div>
        <Link
          href="/chroniques"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-rose-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Retour à toutes mes chroniques
        </Link>
      </div>

      {/* En-tête de la chronique */}
      <div className={`rounded-3xl bg-gradient-to-br ${book.coverGradient} border border-rose-900/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden`}>
        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-12 items-center">
          <div className="md:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-black/50 px-3.5 py-1 text-xs font-semibold text-rose-300 border border-rose-500/30">
                {book.category}
              </span>
              {book.series && (
                <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs text-zinc-200">
                  {book.series}
                </span>
              )}
              {book.isFavorite && (
                <span className="inline-flex items-center gap-1 rounded-full bg-rose-600 px-3 py-1 text-xs font-bold text-white">
                  <Heart className="h-3.5 w-3.5 fill-white" /> Coup de cœur de Maman
                </span>
              )}
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white">
              {book.title} : Mon Avis
            </h1>
            <p className="text-lg text-rose-200 font-medium">
              Un roman de <strong className="text-white">{book.author}</strong> • Éditions {book.publisher} ({book.pages} pages)
            </p>

            <blockquote className="border-l-4 border-rose-500 pl-4 py-1 italic text-zinc-200 text-base">
              {book.coverQuote}
            </blockquote>

            <div className="flex flex-wrap gap-2 pt-2">
              {book.tropes.map((trope) => (
                <span
                  key={trope}
                  className="rounded-lg bg-black/50 border border-white/15 px-3 py-1 text-xs font-medium text-rose-200"
                >
                  #{trope}
                </span>
              ))}
            </div>
          </div>

          {/* Encadré de notation */}
          <div className="md:col-span-4 rounded-2xl bg-zinc-950/90 border border-white/10 p-6 space-y-4 backdrop-blur-md">
            <div className="text-center border-b border-zinc-800 pb-4">
              <span className="text-xs uppercase tracking-widest text-zinc-400">
                Note Globale de Chloé
              </span>
              <div className="mt-1 flex items-center justify-center gap-2 text-3xl font-serif font-bold text-amber-400">
                <Star className="h-7 w-7 fill-amber-400" />
                {book.rating.toFixed(1)} <span className="text-base text-zinc-500">/ 5</span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-300 font-medium">Niveau Spicy 🌶️ :</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Flame
                      key={i}
                      className={`h-4 w-4 ${
                        i < book.spicyLevel ? "text-rose-500 fill-rose-500" : "text-zinc-700"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-300 font-medium">Niveau Dark 💀 :</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skull
                      key={i}
                      className={`h-4 w-4 ${
                        i < book.darknessLevel ? "text-purple-400" : "text-zinc-700"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800 text-zinc-400">
                Publié le {book.publishDate}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Avertissements & Contexte Maman */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-rose-900/40 bg-rose-950/20 p-6 space-y-2">
          <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-rose-300">
            <Clock className="h-5 w-5 text-rose-400" /> Journal de bord d&apos;une maman débordée
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed">{book.readingContext}</p>
        </div>

        <div className="rounded-2xl border border-purple-900/40 bg-purple-950/20 p-6 space-y-2">
          <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-purple-300">
            <ShieldAlert className="h-5 w-5 text-purple-400" /> Trigger Warnings (Avertissements)
          </h2>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {book.triggerWarnings.map((tw) => (
              <span
                key={tw}
                className="rounded-md bg-purple-950/80 border border-purple-700/40 px-2.5 py-1 text-xs text-purple-200"
              >
                ⚠️ {tw}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Résumé & Chronique Complète */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 sm:p-10 space-y-8">
        <div className="space-y-3 border-b border-zinc-800 pb-6">
          <h2 className="font-serif text-2xl font-bold text-white">De quoi ça parle ? (Sans spoiler)</h2>
          <p className="text-base text-zinc-300 leading-relaxed">{book.summary}</p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-rose-400">
            Mon avis complet & sans filtre
          </h2>
          {book.fullReview.map((paragraph, index) => (
            <p key={index} className="text-base text-zinc-200 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Points forts & Pour qui */}
        <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">
          <div className="rounded-2xl bg-zinc-950 p-6 border border-zinc-800 space-y-3">
            <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-400" /> Ce qui m&apos;a fait vibrer
            </h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              {book.pointsForts.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-zinc-950 p-6 border border-zinc-800 space-y-3">
            <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-rose-400" /> Est-ce que je vous le conseille ?
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">{book.pourQui}</p>
          </div>
        </div>
      </div>

      {/* Commentaires interactifs */}
      <CommentSection initialComments={book.comments} bookTitle={book.title} />
    </div>
  );
}
