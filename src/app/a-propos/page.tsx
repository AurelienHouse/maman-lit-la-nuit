import Link from "next/link";
import {
  Baby,
  BookOpen,
  Coffee,
  Flame,
  Heart,
  Moon,
  Sparkles,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { MAMA_PROFILE } from "@/data/books";

const TIMELINE_JOUR_NUIT = [
  {
    time: "07h15",
    mode: "Mode Maman",
    title: "Réveil en fanfare & opération tartines",
    desc: "Les yeux piquent un peu après avoir lu jusqu'à 2h du matin, mais un grand mug de café filtre sauve la matinée. Direction l'école et la crèche !",
  },
  {
    time: "13h30",
    mode: "Mode Lectrice Furtive",
    title: "Pause déj' & 2 chapitres volés",
    desc: "Ma liseuse ne quitte jamais mon sac à main. Même 15 minutes dans la file d'attente ou pendant la sieste de Mila, c'est déjà 10 pages de gagnées.",
  },
  {
    time: "18h00",
    mode: "Mode Maman",
    title: "Le tunnel Bain - Devoirs - Repas - Histoire du soir",
    desc: "On passe de la lecture de 'T'choupi' et des exercices de CP à la négociation du brossage de dents.",
  },
  {
    time: "21h15",
    mode: "Mode Dark Romance 🌶️",
    title: "Silence dans la maison : mon deuxième monde commence",
    desc: "Plaid doux, tisane (ou carré de chocolat noir), téléphone en mode avion et plongée immédiate dans mes univers sombres et passionnés préférés.",
  },
];

export default function AProposPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 space-y-20">
      {/* Hero À propos */}
      <section className="rounded-3xl border border-rose-950/60 bg-gradient-to-br from-rose-950/40 via-zinc-900 to-zinc-950 p-8 sm:p-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8 space-y-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-rose-300">
              <Heart className="h-3.5 w-3.5" /> Qui se cache derrière ce blog ?
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Moi c&apos;est Chloé : maman de 2 enfants à plein temps, et grande amoureuse de Dark Romance.
            </h1>
            <p className="text-base text-zinc-300 leading-relaxed">
              Pendant longtemps, après la naissance de mon deuxième enfant, j&apos;ai cru que je n&apos;aurais plus jamais le temps de lire. Et puis j&apos;ai découvert la littérature qui fait battre le cœur à 100 à l&apos;heure : la <strong className="text-rose-300">Dark Romance</strong> et la <strong className="text-rose-300">Romantasy</strong>.
            </p>
            <p className="text-base text-zinc-300 leading-relaxed">
              Pourquoi j&apos;ai créé ce site ? Parce que comme sur mes blogs littéraires préférés (coucou <em>MademoiselleLit</em> !), j&apos;avais envie d&apos;un espace chaleureux, loin des algorithmes rapides des réseaux sociaux, pour partager de vraies chroniques détaillées et conseiller d&apos;autres lectrices et mamans sans aucun tabou.
            </p>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-rose-800/40 bg-zinc-950/90 p-6 space-y-4">
            <h2 className="font-serif text-xl font-bold text-white">
              Ma fiche d&apos;identité
            </h2>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Tribu :</span>
                <strong className="text-white">Léo (7 ans) & Mila (3 ans)</strong>
              </li>
              <li className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Rythme de lecture :</span>
                <strong className="text-rose-400">~2 à 3 livres / semaine</strong>
              </li>
              <li className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Format préféré :</span>
                <strong className="text-white">Broché collector la nuit, Kindle le jour</strong>
              </li>
              <li className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Trope favori :</span>
                <strong className="text-rose-300">Enemies to Lovers & Morally Grey</strong>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-zinc-400">Book Boyfriend ultime :</span>
                <strong className="text-amber-300">Zade Meadows & Xaden Riorson</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Une journée type dans ma vie */}
      <section className="space-y-8">
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-400">
            Comment je fais pour lire autant ?
          </span>
          <h2 className="font-serif text-3xl font-bold text-white">
            24h dans la peau d&apos;une maman qui lit énormément
          </h2>
          <p className="text-sm text-zinc-400">
            La question qu&apos;on me pose le plus souvent : « Mais Chloé, avec deux enfants en bas âge, où trouves-tu le temps de lire 114 livres par an ?! »
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TIMELINE_JOUR_NUIT.map((item) => (
            <div
              key={item.time}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-rose-400">
                    {item.time}
                  </span>
                  <span className="rounded-full bg-zinc-950 border border-zinc-800 px-3 py-1 text-[11px] font-semibold text-zinc-300">
                    {item.mode}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pourquoi lire de la Dark Romance quand on est maman ? */}
      <section className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 sm:p-12 space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Pourquoi la Dark Romance fait autant de bien à notre charge mentale ?
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 text-sm text-zinc-300 leading-relaxed">
          <div className="space-y-2">
            <h3 className="font-bold text-rose-400 text-base">1. Une déconnexion immédiate</h3>
            <p>
              Quand le quotidien est rempli de listes de courses et de rendez-vous médicaux, un roman calme ne suffit pas toujours à faire taire le cerveau. L&apos;intensité de la Dark Romance coupe instantanément le flux de pensées !
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-rose-400 text-base">2. Retrouver sa part de femme</h3>
            <p>
              On n&apos;est pas que des mamans ! Lire des histoires passionnées, sulfureuses et adultes permet de se reconnecter à ses émotions, au frisson et à son jardin secret.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-rose-400 text-base">3. Une communauté incroyable</h3>
            <p>
              Échanger nos théories, nos coups de cœur et nos fous rires entre lectrices crée des liens précieux. Ici, on papote comme autour d&apos;un café entre copines !
            </p>
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-sm font-bold text-white hover:bg-rose-500 transition-colors"
          >
            Viens papoter ou me conseiller un livre →
          </Link>
        </div>
      </section>
    </div>
  );
}
