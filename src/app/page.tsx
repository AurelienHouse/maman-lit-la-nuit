"use client";

import Link from "next/link";
import {
  BookOpen,
  Flame,
  Moon,
  Sparkles,
  Clock,
  ShieldAlert,
  ArrowRight,
  Quote,
} from "lucide-react";
import { CURATED_LISTS } from "@/data/books";
import { BookCard } from "@/components/BookCard";
import { MoodMatcher } from "@/components/MoodMatcher";
import { motion } from "framer-motion";
import { useAdmin } from "@/context/AdminContext";
import { EditableText } from "@/components/EditableText";

const fadeInUp: any = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

const staggerContainer: any = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
};

export default function HomePage() {
  const { books, mamaProfile } = useAdmin();
  const featuredBooks = books.slice(0, 6);

  return (
    <div className="space-y-32 pb-32 overflow-hidden">
      {/* HERO SECTION — Maman de 2 enfants & Reine de la Dark Romance */}
      <section className="relative pt-16 pb-24 lg:pt-28 lg:pb-36">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 h-[50rem] w-[50rem] rounded-full bg-rose-900/10 blur-3xl" />
          <div className="absolute top-1/4 -right-1/4 h-[40rem] w-[40rem] rounded-full bg-amber-900/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-center">
            {/* Colonne Gauche : Présentation punchy */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-[#1c1917]/80 backdrop-blur-md px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-200 shadow-lg shadow-rose-950/20">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <EditableText
                  id="home.hero_badge"
                  defaultText="Le blog d'une maman de 2 enfants qui bouquine (vraiment) beaucoup"
                />
              </div>

              <h1 className="font-serif text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
                <EditableText
                  id="home.hero_title_line1"
                  defaultText="Le jour, je gère les goûters."
                />{" "}
                <span className="bg-gradient-to-r from-rose-400 via-rose-300 to-amber-200 bg-clip-text text-transparent italic font-light block mt-2">
                  <EditableText
                    id="home.hero_title_line2"
                    defaultText="La nuit, je dévore de la Dark Romance."
                  />
                </span>
              </h1>

              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-stone-300 font-light">
                <EditableText
                  id="home.hero_intro"
                  defaultText="Bienvenue dans mon boudoir littéraire ! Moi c'est Chloé, maman de Léo (7 ans) et Mila (3 ans). Avec plus de 110 romans lus cette année, je partage ici mes avis 100% honnêtes, mes coups de cœur sulfureux, les niveaux de piment 🌶️ et les Trigger Warnings pour vous aider à choisir votre prochaine obsession nocturne."
                  multiline
                />
              </p>

              {/* Boutons CTA */}
              <div className="flex flex-wrap items-center gap-5 pt-4">
                <Link
                  href="/chroniques"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-rose-700 to-rose-900 px-8 py-4.5 text-sm font-bold uppercase tracking-widest text-rose-50 shadow-2xl shadow-rose-950/60 hover:shadow-rose-600/30 transition-all hover:-translate-y-1 border border-rose-500/50"
                >
                  <BookOpen className="h-4 w-4" />
                  <EditableText
                    id="home.cta_primary"
                    defaultText="Découvrir mes avis"
                  />
                </Link>
                <Link
                  href="/tops"
                  className="group inline-flex items-center gap-3 rounded-full border border-stone-700 bg-[#1c1917]/80 backdrop-blur-md px-8 py-4.5 text-sm font-bold uppercase tracking-widest text-stone-300 hover:border-amber-500/50 hover:text-amber-200 transition-all hover:-translate-y-1 shadow-lg"
                >
                  <Flame className="h-4 w-4 text-rose-500 group-hover:animate-pulse" />
                  <EditableText
                    id="home.cta_secondary"
                    defaultText="Par où commencer ?"
                  />
                </Link>
              </div>

              {/* Stats rapides de la maman lectrice */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 pt-10 sm:grid-cols-4"
              >
                {mamaProfile.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="rounded-[1.5rem] border border-stone-800/90 bg-[#1c1917]/60 backdrop-blur-sm p-5 hover:border-rose-900/50 transition-colors"
                  >
                    <p className="font-serif text-3xl sm:text-4xl font-bold text-rose-400">
                      <EditableText
                        id={`home.stat.${idx}.value`}
                        defaultText={stat.value}
                      />
                    </p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-wider text-stone-200">
                      <EditableText
                        id={`home.stat.${idx}.label`}
                        defaultText={stat.label}
                      />
                    </p>
                    <p className="mt-1 text-[11px] text-stone-500 italic">
                      <EditableText
                        id={`home.stat.${idx}.detail`}
                        defaultText={stat.detail}
                      />
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Colonne Droite : Carte "Qui suis-je & Lecture en cours" */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-[2.5rem] border border-amber-500/20 bg-gradient-to-b from-[#1c1917] to-[#0c0a09] p-8 sm:p-10 shadow-2xl shadow-rose-950/30 space-y-8 overflow-hidden">
                <div className="absolute -top-20 -right-20 h-40 w-40 bg-rose-600/20 rounded-full blur-3xl" />

                <div className="flex items-center gap-5 relative z-10">
                  <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-600 via-rose-900 to-[#1c1917] text-white shadow-xl ring-2 ring-amber-400/30 rotate-3 hover:rotate-6 transition-transform duration-500">
                    <span className="font-serif text-4xl font-bold italic">
                      <EditableText id="home.profile_initial" defaultText="C" />
                    </span>
                    <span className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#0c0a09] ring-2 ring-amber-500 text-sm shadow-lg">
                      🌶️
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400">
                      <EditableText
                        id="home.profile_kicker"
                        defaultText="Qui suis-je ?"
                      />
                    </span>
                    <h2 className="font-serif text-3xl font-bold text-white mt-1">
                      <EditableText
                        id="home.profile_name"
                        defaultText="Chloé, 34 ans"
                      />
                    </h2>
                    <p className="text-xs text-stone-400 mt-1 uppercase tracking-widest">
                      <EditableText
                        id="home.profile_role"
                        defaultText="Maman poule le jour • Lectrice insomniaque"
                      />
                    </p>
                  </div>
                </div>

                <blockquote className="rounded-2xl bg-[#1c1917]/80 border border-stone-800 p-6 text-sm italic text-stone-300 leading-relaxed font-serif relative">
                  <Quote className="absolute -top-3 -left-2 h-6 w-6 text-rose-500/50" />
                  <EditableText
                    id="home.profile_quote"
                    defaultText="« Ma mission : déculpabiliser toutes les mamans (et toutes les femmes !) qui lisent de la Dark Romance en cachette entre le bain des petits et le pliage du linge, et vous dénicher le bon livre pour le bon moment. »"
                    multiline
                  />
                </blockquote>

                {/* Widget : Sur ma table de chevet */}
                <div className="relative rounded-2xl border border-rose-800/40 bg-rose-950/20 p-6 space-y-4 overflow-hidden group hover:border-rose-600/50 transition-colors">
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-rose-900/40 to-transparent" />

                  <div className="flex items-center justify-between text-xs relative z-10">
                    <span className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-rose-300">
                      <Moon className="h-4 w-4 text-amber-400" />{" "}
                      <EditableText
                        id="home.nightstand_label"
                        defaultText="Sur ma table de chevet"
                      />
                    </span>
                    <span className="text-stone-400 font-mono">
                      <EditableText
                        id="home.nightstand_pages"
                        defaultText={`p.${mamaProfile.currentlyReading.currentPage} / ${mamaProfile.currentlyReading.totalPages}`}
                      />
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                      <EditableText
                        id="home.nightstand_title"
                        defaultText={mamaProfile.currentlyReading.title}
                      />
                    </h3>
                    <p className="text-xs text-rose-300 italic mt-0.5">
                      de{" "}
                      <EditableText
                        id="home.nightstand_author"
                        defaultText={mamaProfile.currentlyReading.author}
                      />
                    </p>
                  </div>

                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#0c0a09] relative z-10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-amber-400"
                      style={{
                        width: `${Math.round(
                          (mamaProfile.currentlyReading.currentPage /
                            mamaProfile.currentlyReading.totalPages) *
                            100
                        )}%`,
                      }}
                    />
                  </div>

                  <p className="text-xs italic text-stone-400 font-light relative z-10">
                    📍{" "}
                    <EditableText
                      id="home.nightstand_status"
                      defaultText={mamaProfile.currentlyReading.status}
                      multiline
                    />
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs text-stone-400 relative z-10">
                  <Link
                    href="/a-propos"
                    className="font-bold uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
                  >
                    En savoir plus <ArrowRight className="h-3 w-3" />
                  </Link>
                  <span className="uppercase tracking-widest">
                    <EditableText
                      id="home.profile_footer"
                      defaultText="100% sans jugement"
                    />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION : COMMENT JE NOTE MES LIVRES */}
      <motion.section {...fadeInUp} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-stone-800 bg-[#1c1917]/40 backdrop-blur-sm p-10 sm:p-14 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-600/50 to-transparent" />

          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400">
              <EditableText
                id="home.method_kicker"
                defaultText="Ma méthode de conseil"
              />
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              <EditableText
                id="home.method_title"
                defaultText="Pourquoi mes chroniques vous évitent les mauvaises surprises"
              />
            </h2>
            <p className="text-sm text-stone-400 font-light leading-relaxed">
              <EditableText
                id="home.method_desc"
                defaultText="Quand on a 45 minutes de temps libre par soir après avoir couché deux enfants, hors de question de les gaspiller avec un mauvais livre ! Chaque roman est évalué selon 3 critères :"
                multiline
              />
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                id: "spicy",
                icon: Flame,
                title: "Le Spicymètre (1 à 5 Piments)",
                desc: "Pour savoir immédiatement si vous pouvez lire ce livre tranquillement dans la salle d'attente du pédiatre ou s'il vaut mieux attendre d'être seule sous la couette.",
                color: "text-rose-500",
                bg: "bg-rose-500/10",
                border: "border-rose-500/20",
              },
              {
                id: "dark",
                icon: ShieldAlert,
                title: "Niveau Dark & Trigger Warnings",
                desc: "La Dark Romance aborde des thèmes sensibles. Je liste systématiquement les avertissements de contenu (TW) et le degré de noirceur psychologique avec bienveillance.",
                color: "text-purple-400",
                bg: "bg-purple-500/10",
                border: "border-purple-500/20",
              },
              {
                id: "mama",
                icon: Clock,
                title: "Testé en conditions réelles",
                desc: "Chapitres courts faciles à interrompre quand bébé pleure ? Ou gros pavé qui vous fera rater le réveil de 7h ? Je vous dis toute la vérité !",
                color: "text-amber-400",
                bg: "bg-amber-500/10",
                border: "border-amber-500/20",
              },
            ].map((feature, idx) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="rounded-[2rem] border border-stone-800/80 bg-[#0c0a09]/80 p-8 space-y-4 hover:border-stone-700 transition-colors group"
              >
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg} ${feature.color} border ${feature.border} group-hover:scale-110 transition-transform duration-500`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  <EditableText
                    id={`home.method.${feature.id}.title`}
                    defaultText={feature.title}
                  />
                </h3>
                <p className="text-sm leading-relaxed text-stone-400 font-light">
                  <EditableText
                    id={`home.method.${feature.id}.desc`}
                    defaultText={feature.desc}
                    multiline
                  />
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION DERNIÈRES CHRONIQUES */}
      <motion.section {...fadeInUp} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose-400">
              <EditableText
                id="home.latest_kicker"
                defaultText="Mes dernières impressions"
              />
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
              <EditableText
                id="home.latest_title"
                defaultText="Mes Dernières Chroniques"
              />
            </h2>
            <p className="text-sm text-stone-400 max-w-2xl font-light">
              <EditableText
                id="home.latest_desc"
                defaultText="Dark Romance, Romantasy, Enemies to Lovers et Thrillers : voici les derniers romans qui ont occupé mes soirées."
                multiline
              />
            </p>
          </div>
          <Link
            href="/chroniques"
            className="group inline-flex items-center gap-3 rounded-full border border-rose-900/50 bg-rose-950/20 px-6 py-3 text-xs font-bold uppercase tracking-widest text-rose-300 hover:bg-rose-900/40 hover:text-white transition-all shadow-lg"
          >
            Voir les {books.length} chroniques{" "}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredBooks.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </motion.section>

      {/* OUTIL INTERACTIF : LE BON LIVRE POUR LE BON MOMENT */}
      <motion.section {...fadeInUp} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MoodMatcher />
      </motion.section>

      {/* SECTION : TOPS & GUIDES DE SURVIE */}
      <motion.section {...fadeInUp} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400">
              <EditableText
                id="home.guides_kicker"
                defaultText="Sélections thématiques"
              />
            </span>
            <h2 className="font-serif text-4xl font-bold text-white">
              <EditableText
                id="home.guides_title"
                defaultText="Mes Guides & Tops pour bien choisir"
              />
            </h2>
          </div>
          <Link
            href="/tops"
            className="text-sm font-bold uppercase tracking-widest text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-2"
          >
            Explorer tous mes guides <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {CURATED_LISTS.map((list, idx) => (
            <motion.div
              key={list.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="flex flex-col justify-between rounded-[2rem] border border-stone-800 bg-[#1c1917]/50 backdrop-blur-sm p-8 hover:border-amber-500/30 hover:bg-[#1c1917]/80 transition-all space-y-8 group"
            >
              <div className="space-y-4">
                <span className="inline-block rounded-full bg-rose-950/80 border border-rose-700/40 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-rose-300">
                  <EditableText
                    id={`list.${list.id}.tag`}
                    defaultText={list.tag}
                  />
                </span>
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-200 transition-colors leading-tight">
                  <EditableText
                    id={`list.${list.id}.title`}
                    defaultText={list.title}
                  />
                </h3>
                <p className="text-sm text-stone-400 font-light leading-relaxed">
                  <EditableText
                    id={`list.${list.id}.description`}
                    defaultText={list.description}
                    multiline
                  />
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl bg-[#0c0a09] p-5 border border-stone-800/80 text-sm text-stone-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/50" />
                  <strong className="text-amber-400 block mb-2 uppercase tracking-widest text-[10px]">
                    💡 Le conseil de Maman :
                  </strong>
                  <p className="font-light italic">
                    <EditableText
                      id={`list.${list.id}.mamaTip`}
                      defaultText={list.mamaTip}
                      multiline
                    />
                  </p>
                </div>
                <Link
                  href="/tops"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-rose-400 group-hover:text-amber-300 transition-colors"
                >
                  Découvrir cette sélection{" "}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
