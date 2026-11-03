import Link from "next/link";
import {
  BookOpen,
  Coffee,
  Flame,
  Heart,
  Moon,
  Sparkles,
  Star,
  Clock,
  ShieldAlert,
  ArrowRight,
  Baby,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { BOOK_REVIEWS, CURATED_LISTS, MAMA_PROFILE } from "@/data/books";
import { BookCard } from "@/components/BookCard";
import { MoodMatcher } from "@/components/MoodMatcher";

export default function HomePage() {
  const featuredBooks = BOOK_REVIEWS.slice(0, 6);

  return (
    <div className="space-y-24 pb-24">
      {/* HERO SECTION — Maman de 2 enfants & Reine de la Dark Romance */}
      <section className="relative overflow-hidden border-b border-rose-950/50 bg-gradient-to-b from-rose-950/30 via-zinc-950 to-zinc-950 pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Glow effects */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-rose-700/20 blur-3xl" />
        <div className="pointer-events-none absolute top-40 right-10 h-80 w-80 rounded-full bg-purple-900/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            {/* Colonne Gauche : Présentation punchy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-rose-500/30 bg-rose-950/60 px-4 py-1.5 text-xs font-semibold text-rose-200">
                <Sparkles className="h-3.5 w-3.5 text-rose-400" />
                <span>Le blog d&apos;une maman de 2 enfants qui bouquine (vraiment) beaucoup</span>
              </div>

              <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
                Le jour, je gère les gouters.{" "}
                <span className="bg-gradient-to-r from-rose-400 via-rose-500 to-amber-300 bg-clip-text text-transparent italic">
                  La nuit, je dévore de la Dark Romance.
                </span>
              </h1>

              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-300">
                Bienvenue dans mon boudoir littéraire ! Moi c&apos;est <strong className="text-white">Chloé</strong>,
                maman de Léo (7 ans) et Mila (3 ans). Avec plus de <strong className="text-rose-300">110 romans lus cette année</strong>,
                je partage ici mes avis 100% honnêtes, mes coups de cœur sulfureux, les niveaux de piment 🌶️ et les
                <em> Trigger Warnings</em> pour vous aider à choisir votre prochaine obsession nocturne.
              </p>

              {/* Boutons CTA */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/chroniques"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-rose-600 to-red-700 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-rose-950/80 hover:from-rose-500 hover:to-red-600 transition-all"
                >
                  <BookOpen className="h-4 w-4" />
                  Découvrir mes avis de lecture
                </Link>
                <Link
                  href="/tops"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/90 px-6 py-4 text-sm font-semibold text-zinc-200 hover:border-rose-500/50 hover:text-white transition-all"
                >
                  <Flame className="h-4 w-4 text-rose-500" />
                  Par où commencer la Dark Romance ?
                </Link>
              </div>

              {/* Stats rapides de la maman lectrice */}
              <div className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-4">
                {MAMA_PROFILE.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-zinc-800/90 bg-zinc-900/60 p-4 backdrop-blur-sm"
                  >
                    <p className="font-serif text-2xl sm:text-3xl font-bold text-rose-400">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-white">{stat.label}</p>
                    <p className="mt-0.5 text-[11px] text-zinc-400">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne Droite : Carte "Qui suis-je & Lecture en cours" inspirée de MademoiselleLit */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-rose-900/50 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 sm:p-8 shadow-2xl shadow-rose-950/30 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 via-red-700 to-purple-900 text-white shadow-lg ring-2 ring-rose-400/40">
                    <span className="font-serif text-3xl font-bold">C</span>
                    <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-950 ring-2 ring-rose-500 text-xs">
                      🌶️
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-rose-400">
                      Qui suis-je ?
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-white">
                      Chloé, 34 ans
                    </h2>
                    <p className="text-xs text-zinc-400">
                      Maman poule le jour • Lectrice insomniaque la nuit
                    </p>
                  </div>
                </div>

                <blockquote className="rounded-2xl bg-zinc-950/80 border border-zinc-800 p-4 text-sm italic text-zinc-300 leading-relaxed">
                  « Ma mission : déculpabiliser toutes les mamans (et toutes les femmes !) qui lisent de la Dark Romance en cachette entre le bain des petits et le pliage du linge, et vous dénicher <strong className="text-rose-300 not-italic">le bon livre pour le bon moment</strong>. »
                </blockquote>

                {/* Widget : En ce moment dans mon sac à langer */}
                <div className="rounded-2xl border border-rose-800/40 bg-rose-950/20 p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-rose-300">
                      <Moon className="h-3.5 w-3.5 text-rose-400" /> Sur ma table de chevet
                    </span>
                    <span className="text-zinc-400">
                      Page {MAMA_PROFILE.currentlyReading.currentPage} / {MAMA_PROFILE.currentlyReading.totalPages}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">
                      {MAMA_PROFILE.currentlyReading.title}
                    </h3>
                    <p className="text-xs text-rose-300">
                      de {MAMA_PROFILE.currentlyReading.author}
                    </p>
                  </div>

                  {/* Barre de progression */}
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-rose-600 to-amber-500"
                      style={{
                        width: `${Math.round(
                          (MAMA_PROFILE.currentlyReading.currentPage /
                            MAMA_PROFILE.currentlyReading.totalPages) *
                            100
                        )}%`,
                      }}
                    />
                  </div>

                  <p className="text-xs italic text-zinc-400">
                    📍 {MAMA_PROFILE.currentlyReading.status}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-1 text-xs text-zinc-400">
                  <Link
                    href="/a-propos"
                    className="font-semibold text-rose-400 hover:text-rose-300 transition-colors"
                  >
                    En savoir plus sur mon quotidien →
                  </Link>
                  <span>100% garanti sans jugement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION : COMMENT JE NOTE MES LIVRES (Échelle Piment, Noirceur & Charge Mentale) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 sm:p-10">
          <div className="max-w-3xl space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400">
              Ma méthode de conseil
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Pourquoi mes chroniques vous évitent les mauvaises surprises
            </h2>
            <p className="text-sm text-zinc-400">
              Quand on a 45 minutes de temps libre par soir après avoir couché deux enfants, hors de question de les gaspiller avec un mauvais livre ! Chaque roman est évalué selon 3 critères :
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-6 space-y-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500 border border-rose-500/20">
                <Flame className="h-5 w-5 fill-rose-500" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Le Spicymètre (1 à 5 Piments)
              </h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                Pour savoir immédiatement si vous pouvez lire ce livre tranquillement dans la salle d&apos;attente du pédiatre ou s&apos;il vaut mieux attendre d&apos;être seule sous la couette.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-6 space-y-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Niveau Dark & Trigger Warnings
              </h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                La Dark Romance aborde des thèmes sensibles. Je liste systématiquement les avertissements de contenu (TW) et le degré de noirceur psychologique avec bienveillance.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-6 space-y-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Testé en conditions réelles de Maman
              </h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                Chapitres courts faciles à interrompre quand bébé pleure ? Ou gros pavé qui vous fera rater le réveil de 7h ? Je vous dis toute la vérité !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DERNIÈRES CHRONIQUES (Inspiré de MademoiselleLit) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400">
              Mes dernières impressions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Mes Dernières Chroniques & Avis
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl">
              Dark Romance, Romantasy, Enemies to Lovers et Thrillers : voici les derniers romans qui ont occupé mes soirées.
            </p>
          </div>
          <Link
            href="/chroniques"
            className="inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-rose-950/30 px-5 py-2.5 text-sm font-semibold text-rose-300 hover:bg-rose-900/40 transition-colors self-start sm:self-auto"
          >
            Voir les {BOOK_REVIEWS.length} chroniques <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredBooks.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </section>

      {/* OUTIL INTERACTIF : LE BON LIVRE POUR LE BON MOMENT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MoodMatcher />
      </section>

      {/* SECTION : TOPS & GUIDES DE SURVIE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400">
              Sélections thématiques
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Mes Guides & Tops pour bien choisir
            </h2>
          </div>
          <Link
            href="/tops"
            className="text-sm font-semibold text-rose-400 hover:text-rose-300"
          >
            Explorer tous mes guides →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {CURATED_LISTS.map((list) => (
            <div
              key={list.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-rose-700/50 transition-all space-y-6"
            >
              <div className="space-y-3">
                <span className="inline-block rounded-full bg-rose-950/80 border border-rose-700/40 px-3 py-1 text-xs font-semibold text-rose-300">
                  {list.tag}
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  {list.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {list.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl bg-zinc-950 p-3.5 border border-zinc-800/80 text-xs text-zinc-300">
                  <strong className="text-rose-400 block mb-1">💡 Le conseil de Maman :</strong>
                  {list.mamaTip}
                </div>
                <Link
                  href="/tops"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-400 hover:text-rose-300"
                >
                  Découvrir cette sélection →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
