"use client";

import { CURATED_LISTS } from "@/data/books";
import { BookCard } from "@/components/BookCard";
import { Flame } from "lucide-react";
import { motion } from "framer-motion";
import { useAdmin } from "@/context/AdminContext";
import { EditableText } from "@/components/EditableText";

const fadeInUp: any = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function TopsPage() {
  const { books: allBooks } = useAdmin();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-24">
      {/* Header */}
      <motion.div
        {...fadeInUp}
        className="rounded-[2.5rem] border border-rose-950/40 bg-gradient-to-br from-[#1c1917] via-[#0c0a09] to-[#292524] p-10 sm:p-16 space-y-5 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300 relative z-10">
          <Flame className="h-3.5 w-3.5" />{" "}
          <EditableText
            id="tops.kicker"
            defaultText="Guides & Sélections Thématiques"
          />
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white relative z-10 leading-tight">
          <EditableText id="tops.title_1" defaultText="Mes Tops &" />{" "}
          <span className="italic text-rose-400 font-light">
            <EditableText
              id="tops.title_2"
              defaultText="Guides Dark Romance"
            />
          </span>
        </h1>
        <p className="max-w-2xl text-sm sm:text-base text-stone-300 font-light leading-relaxed relative z-10">
          <EditableText
            id="tops.subtitle"
            defaultText="Vous ne savez pas par quel roman commencer ? Vous cherchez un trope bien précis (Enemies to Lovers, Stalker, Mafia, Shadow Daddy) ? Voici mes sélections sur-mesure testées et approuvées !"
            multiline
          />
        </p>
      </motion.div>

      {/* Petit lexique de la Dark Romance */}
      <motion.section
        {...fadeInUp}
        className="rounded-[2.5rem] border border-stone-800 bg-[#1c1917]/50 backdrop-blur-sm p-10 sm:p-14 space-y-10 shadow-xl"
      >
        <div className="space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400">
            <EditableText id="tops.lexique_kicker" defaultText="Le dico de Maman" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            <EditableText
              id="tops.lexique_title"
              defaultText="Petit lexique de survie sur BookTok & Dark Romance"
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              id: "morally_grey",
              title: "Morally Grey",
              desc: "Un héros ni tout blanc ni tout noir : capable du pire envers le monde entier, mais d'une loyauté absolue envers l'héroïne.",
            },
            {
              id: "slow_burn",
              title: "Slow Burn",
              desc: "Quand la tension monte pendant 300 pages avant le premier baiser. Idéal pour tourner les pages jusqu'à 2h du matin !",
            },
            {
              id: "tw",
              title: "Trigger Warnings (TW)",
              desc: "Les avertissements de contenu en début de livre. Toujours les vérifier pour lire en toute sérénité selon sa sensibilité.",
            },
            {
              id: "shadow_daddy",
              title: "Shadow Daddy",
              desc: "Le cousin Romantasy du héros de Dark Romance : ténébreux, sarcastique et doté de pouvoirs liés aux ombres (coucou Xaden !).",
            },
          ].map((term, idx) => (
            <motion.div
              key={term.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="rounded-[1.5rem] bg-[#0c0a09] p-6 border border-stone-800 space-y-3 hover:border-amber-500/30 transition-colors group"
            >
              <h3 className="font-serif font-bold text-xl text-rose-300 group-hover:text-amber-300 transition-colors">
                <EditableText
                  id={`tops.lexique.${term.id}.title`}
                  defaultText={term.title}
                />
              </h3>
              <p className="text-sm text-stone-400 font-light leading-relaxed">
                <EditableText
                  id={`tops.lexique.${term.id}.desc`}
                  defaultText={term.desc}
                  multiline
                />
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Les listes curatées avec leurs livres */}
      <div className="space-y-24">
        {CURATED_LISTS.map((list) => {
          const books = allBooks.filter((b) => list.bookSlugs.includes(b.slug));
          return (
            <motion.section key={list.id} {...fadeInUp} className="space-y-10">
              <div className="rounded-[2rem] border border-rose-900/30 bg-[#1c1917]/40 backdrop-blur-sm p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-lg">
                <div className="space-y-4 max-w-3xl">
                  <span className="inline-block rounded-full bg-rose-950/80 border border-rose-700/40 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-rose-300">
                    <EditableText
                      id={`list.${list.id}.tag`}
                      defaultText={list.tag}
                    />
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                    <EditableText
                      id={`list.${list.id}.title`}
                      defaultText={list.title}
                    />
                  </h2>
                  <p className="text-sm text-stone-300 font-light leading-relaxed">
                    <EditableText
                      id={`list.${list.id}.description`}
                      defaultText={list.description}
                      multiline
                    />
                  </p>
                </div>

                <div className="rounded-2xl bg-[#0c0a09] border border-amber-500/20 p-6 text-sm text-stone-300 lg:max-w-sm shrink-0 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/50" />
                  <strong className="text-amber-400 block mb-2 uppercase tracking-widest text-[10px]">
                    💡 L&apos;astuce de Chloé :
                  </strong>
                  <p className="font-light italic">
                    <EditableText
                      id={`list.${list.id}.mamaTip`}
                      defaultText={list.mamaTip}
                      multiline
                    />
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {books.map((book) => (
                  <BookCard key={book.slug} book={book} />
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
