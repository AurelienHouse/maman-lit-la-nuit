"use client";

import { useState, useMemo } from "react";
import { BookCard } from "@/components/BookCard";
import { Flame, Search, Sparkles, Filter, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useAdmin } from "@/context/AdminContext";
import { EditableText } from "@/components/EditableText";

const CATEGORIES = [
  "Tous",
  "Dark Romance",
  "Romantasy",
  "New Romance",
  "Enemies to Lovers",
  "Thriller Psychologique",
] as const;

export default function ChroniquesPage() {
  const { books } = useAdmin();
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [minSpicy, setMinSpicy] = useState<number>(0);
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      if (selectedCategory !== "Tous" && book.category !== selectedCategory) {
        return false;
      }
      if (minSpicy > 0 && book.spicyLevel < minSpicy) {
        return false;
      }
      if (onlyFavorites && !book.isFavorite) {
        return false;
      }
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchTitle = book.title.toLowerCase().includes(q);
        const matchAuthor = book.author.toLowerCase().includes(q);
        const matchTropes = book.tropes.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchAuthor && !matchTropes) return false;
      }
      return true;
    });
  }, [books, selectedCategory, minSpicy, onlyFavorites, searchQuery]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-[2.5rem] border border-rose-950/40 bg-gradient-to-br from-[#1c1917] via-[#0c0a09] to-[#292524] p-10 sm:p-16 space-y-5 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300 relative z-10">
          <Sparkles className="h-3.5 w-3.5" />{" "}
          <EditableText
            id="chroniques.kicker"
            defaultText="Bibliothèque & Avis"
          />
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white relative z-10 leading-tight">
          <EditableText
            id="chroniques.title_1"
            defaultText="Toutes mes"
          />{" "}
          <span className="italic text-rose-400 font-light">
            <EditableText
              id="chroniques.title_2"
              defaultText="Chroniques"
            />
          </span>
        </h1>
        <p className="max-w-2xl text-sm sm:text-base text-stone-300 font-light leading-relaxed relative z-10">
          <EditableText
            id="chroniques.subtitle"
            defaultText="Retrouvez ici tous les romans que j'ai dévorés entre deux biberons, les sorties d'école et mes insomnies volontaires. Filtrez par genre, par trope ou par niveau de piment pour trouver votre prochaine lecture !"
            multiline
          />
        </p>
      </motion.div>

      {/* Barre de filtres */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-[2rem] border border-stone-800 bg-[#1c1917]/60 backdrop-blur-md p-6 sm:p-8 space-y-6 shadow-xl"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 items-center">
          {/* Recherche */}
          <div className="md:col-span-6 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-500 group-focus-within:text-rose-400 transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un titre, une autrice ou un trope (ex: Mafia, Stalker...)"
              className="w-full rounded-2xl border border-stone-700 bg-[#0c0a09] py-4 pl-12 pr-4 text-sm text-white placeholder-stone-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 focus:outline-none transition-all shadow-inner"
            />
          </div>

          {/* Filtre Spicy */}
          <div className="md:col-span-3 flex items-center gap-3">
            <label htmlFor="spicy-filter" className="text-xs font-bold uppercase tracking-widest text-stone-400 shrink-0 flex items-center gap-1.5">
              <Flame className="h-4 w-4 text-rose-500" /> Piment :
            </label>
            <select
              id="spicy-filter"
              value={minSpicy}
              onChange={(e) => setMinSpicy(Number(e.target.value))}
              className="w-full rounded-2xl border border-stone-700 bg-[#0c0a09] px-4 py-3.5 text-sm text-white focus:border-rose-500 focus:outline-none appearance-none cursor-pointer shadow-inner"
            >
              <option value={0}>Tous les niveaux</option>
              <option value={3}>🌶️🌶️🌶️ et plus (3/5+)</option>
              <option value={4}>🌶️🌶️🌶️🌶️ Intense (4/5+)</option>
              <option value={5}>🌶️🌶️🌶️🌶️🌶️ Ultra Spicy (5/5)</option>
            </select>
          </div>

          {/* Toggle Coups de coeur */}
          <div className="md:col-span-3 flex justify-end">
            <button
              type="button"
              onClick={() => setOnlyFavorites(!onlyFavorites)}
              className={`w-full inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-xs font-bold uppercase tracking-widest transition-all border shadow-md ${
                onlyFavorites
                  ? "bg-rose-700 text-white border-rose-500 shadow-rose-950/50"
                  : "bg-[#0c0a09] text-stone-300 border-stone-700 hover:border-rose-500/50 hover:text-white"
              }`}
            >
              <Heart className={`h-4 w-4 ${onlyFavorites ? "fill-white" : "text-rose-500"}`} />
              Coups de cœur
            </button>
          </div>
        </div>

        {/* Catégories pills */}
        <div className="flex flex-wrap items-center gap-2.5 pt-5 border-t border-stone-800/80">
          <span className="text-xs font-bold uppercase tracking-widest text-stone-400 mr-3 flex items-center gap-1.5">
            <Filter className="h-4 w-4" /> Genres :
          </span>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === category
                  ? "bg-rose-800 text-white shadow-md shadow-rose-950/50 border border-rose-600"
                  : "bg-[#0c0a09] text-stone-400 border border-stone-800 hover:text-white hover:border-stone-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grille de résultats */}
      {filteredBooks.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-[2rem] border border-stone-800 bg-[#1c1917]/40 p-16 text-center space-y-6"
        >
          <p className="font-serif text-2xl text-white italic">
            Aucun roman ne correspond à ces filtres dans mon boudoir... pour l&apos;instant !
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("Tous");
              setMinSpicy(0);
              setOnlyFavorites(false);
              setSearchQuery("");
            }}
            className="rounded-full bg-rose-800 px-8 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-rose-700 transition-colors shadow-lg"
          >
            Réinitialiser les filtres
          </button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
