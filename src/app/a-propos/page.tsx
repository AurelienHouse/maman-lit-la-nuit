"use client";

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
  ArrowRight,
} from "lucide-react";
import { MAMA_PROFILE } from "@/data/books";
import { motion } from "framer-motion";

const fadeInUp: any = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const TIMELINE_JOUR_NUIT = [
  {
    time: "07h15",
    mode: "Mode Maman",
    title: "Réveil en fanfare & opération tartines",
    desc: "Les yeux piquent un peu après avoir lu jusqu'à 2h du matin, mais un grand mug de café filtre sauve la matinée. Direction l'école et la crèche !",
    icon: Coffee,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20"
  },
  {
    time: "13h30",
    mode: "Mode Lectrice Furtive",
    title: "Pause déj' & 2 chapitres volés",
    desc: "Ma liseuse ne quitte jamais mon sac à main. Même 15 minutes dans la file d'attente ou pendant la sieste de Mila, c'est déjà 10 pages de gagnées.",
    icon: BookOpen,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20"
  },
  {
    time: "18h00",
    mode: "Mode Maman",
    title: "Le tunnel Bain - Devoirs - Repas",
    desc: "On passe de la lecture de 'T'choupi' et des exercices de CP à la négociation du brossage de dents. La vraie course de fond commence.",
    icon: Baby,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  },
  {
    time: "21h15",
    mode: "Mode Dark Romance 🌶️",
    title: "Silence dans la maison : mon deuxième monde",
    desc: "Plaid doux, tisane (ou carré de chocolat noir), téléphone en mode avion et plongée immédiate dans mes univers sombres et passionnés préférés.",
    icon: Flame,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20"
  },
];

export default function AProposPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 space-y-24">
      {/* Hero À propos */}
      <motion.section
        {...fadeInUp}
        className="rounded-[2.5rem] border border-rose-950/40 bg-gradient-to-br from-[#1c1917] via-[#0c0a09] to-[#292524] p-10 sm:p-16 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center relative z-10">
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300">
              <Heart className="h-3.5 w-3.5" /> Qui se cache derrière ce boudoir ?
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-[1.1]">
              Moi c'est Chloé : maman de 2 enfants à plein temps, et grande amoureuse de <span className="italic text-rose-400 font-light">Dark Romance</span>.
            </h1>
            <p className="text-lg text-stone-300 font-light leading-relaxed">
              Pendant longtemps, après la naissance de mon deuxième enfant, j'ai cru que je n'aurais plus jamais le temps de lire. Et puis j'ai découvert la littérature qui fait battre le cœur à 100 à l'heure : la <strong className="text-rose-300 font-medium">Dark Romance</strong> et la <strong className="text-rose-300 font-medium">Romantasy</strong>.
            </p>
            <p className="text-lg text-stone-300 font-light leading-relaxed">
              Pourquoi j'ai créé ce site ? Parce que comme sur mes blogs littéraires préférés (coucou <em className="text-amber-300">MademoiselleLit</em> !), j'avais envie d'un espace chaleureux, loin des algorithmes rapides des réseaux sociaux, pour partager de vraies chroniques détaillées et conseiller d'autres lectrices et mamans sans aucun tabou.
            </p>
          </div>

          <div className="lg:col-span-4 rounded-[2rem] border border-amber-500/20 bg-[#0c0a09]/90 p-8 space-y-6 shadow-xl backdrop-blur-md">
            <h2 className="font-serif text-2xl font-bold text-white border-b border-stone-800 pb-4">
              Ma fiche d'identité
            </h2>
            <ul className="space-y-4 text-sm text-stone-300 font-light">
              <li className="flex items-center justify-between border-b border-stone-800/50 pb-3">
                <span className="text-stone-500 uppercase tracking-widest text-[10px] font-bold">Tribu :</span>
                <strong className="text-white font-medium">Léo (7 ans) & Mila (3 ans)</strong>
              </li>
              <li className="flex items-center justify-between border-b border-stone-800/50 pb-3">
                <span className="text-stone-500 uppercase tracking-widest text-[10px] font-bold">Rythme :</span>
                <strong className="text-rose-400 font-medium">~2 à 3 livres / semaine</strong>
              </li>
              <li className="flex items-center justify-between border-b border-stone-800/50 pb-3">
                <span className="text-stone-500 uppercase tracking-widest text-[10px] font-bold">Format :</span>
                <strong className="text-white font-medium">Broché la nuit, Kindle le jour</strong>
              </li>
              <li className="flex items-center justify-between border-b border-stone-800/50 pb-3">
                <span className="text-stone-500 uppercase tracking-widest text-[10px] font-bold">Trope favori :</span>
                <strong className="text-rose-300 font-medium">Enemies to Lovers</strong>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-stone-500 uppercase tracking-widest text-[10px] font-bold">Book Boyfriend :</span>
                <strong className="text-amber-300 font-medium">Zade & Xaden</strong>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Une journée type dans ma vie */}
      <motion.section {...fadeInUp} className="space-y-12">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400">
            Comment je fais pour lire autant ?
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            24h dans la peau d'une maman qui lit <span className="italic text-rose-400 font-light">énormément</span>
          </h2>
          <p className="text-sm text-stone-400 font-light">
            La question qu'on me pose le plus souvent : « Mais Chloé, avec deux enfants en bas âge, où trouves-tu le temps de lire 114 livres par an ?! »
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {TIMELINE_JOUR_NUIT.map((item, idx) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="rounded-[2rem] border border-stone-800 bg-[#1c1917]/50 backdrop-blur-sm p-8 space-y-5 flex flex-col justify-between hover:border-stone-700 transition-colors group shadow-lg"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-rose-400">
                    {item.time}
                  </span>
                  <div className={`p-3 rounded-full ${item.bg} ${item.color} border ${item.border} group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <span className="inline-block rounded-full bg-[#0c0a09] border border-stone-800 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-3">
                    {item.mode}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-stone-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pourquoi lire de la Dark Romance quand on est maman ? */}
      <motion.section
        {...fadeInUp}
        className="rounded-[2.5rem] border border-stone-800 bg-[#1c1917]/40 backdrop-blur-sm p-10 sm:p-16 space-y-10 shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-600/50 to-transparent" />

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white text-center max-w-3xl mx-auto leading-tight">
          Pourquoi la Dark Romance fait autant de bien à notre <span className="italic text-rose-400 font-light">charge mentale</span> ?
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-sm text-stone-300 font-light leading-relaxed pt-6">
          <div className="space-y-4 bg-[#0c0a09] p-8 rounded-[2rem] border border-stone-800 shadow-inner">
            <div className="h-12 w-12 rounded-full bg-rose-950/50 border border-rose-800/50 flex items-center justify-center text-rose-400 font-serif text-2xl font-bold italic mb-4">1</div>
            <h3 className="font-bold text-white text-lg font-serif">Une déconnexion immédiate</h3>
            <p>
              Quand le quotidien est rempli de listes de courses et de rendez-vous médicaux, un roman calme ne suffit pas toujours à faire taire le cerveau. L'intensité de la Dark Romance coupe instantanément le flux de pensées !
            </p>
          </div>
          <div className="space-y-4 bg-[#0c0a09] p-8 rounded-[2rem] border border-stone-800 shadow-inner">
            <div className="h-12 w-12 rounded-full bg-amber-950/50 border border-amber-800/50 flex items-center justify-center text-amber-400 font-serif text-2xl font-bold italic mb-4">2</div>
            <h3 className="font-bold text-white text-lg font-serif">Retrouver sa part de femme</h3>
            <p>
              On n'est pas que des mamans ! Lire des histoires passionnées, sulfureuses et adultes permet de se reconnecter à ses émotions, au frisson et à son jardin secret.
            </p>
          </div>
          <div className="space-y-4 bg-[#0c0a09] p-8 rounded-[2rem] border border-stone-800 shadow-inner">
            <div className="h-12 w-12 rounded-full bg-purple-950/50 border border-purple-800/50 flex items-center justify-center text-purple-400 font-serif text-2xl font-bold italic mb-4">3</div>
            <h3 className="font-bold text-white text-lg font-serif">Une communauté incroyable</h3>
            <p>
              Échanger nos théories, nos coups de cœur et nos fous rires entre lectrices crée des liens précieux. Ici, on papote comme autour d'un café entre copines !
            </p>
          </div>
        </div>

        <div className="pt-8 text-center">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-rose-700 to-rose-900 px-10 py-5 text-sm font-bold uppercase tracking-widest text-rose-50 shadow-2xl shadow-rose-950/60 hover:shadow-rose-600/30 transition-all hover:-translate-y-1 border border-rose-500/50"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            Viens papoter ou me conseiller un livre <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
