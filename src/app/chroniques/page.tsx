"use client";

import { useState, useMemo } from "react";
import { BOOK_REVIEWS } from "@/data/books";
import { BookCard } from "@/components/BookCard";
import { Flame, Search, Sparkles, Filter, Heart } from "lucide-react";

const CATEGORIES = [
  "Tous",
  "Dark Romance",
  "Romantasy",
  "New Romance",
  "Enemies to Lovers",
  "Thriller Psychologique",
] as const;

export default function ChroniquesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [minSpicy, setMinSpicy] = useState<number>(0);
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredBooks = useMemo(() => {
    return BOOK_REVIEWS.filter((book) => {
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
  }, [selectedCategory, minSpicy, onlyFavorites, searchQuery]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="rounded-3xl border border-rose-950/60 bg-gradient-to-br from-rose-950/30 via-zinc-900 to-zinc-950 p-8 sm:p-12 space-y-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-rose-300">
          <Sparkles className="h-3.5 w-3.5" /> Bibliothèque & Avis
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Toutes mes Chroniques Littéraires
        </h1>
        <p className="max-w-2xl text-sm sm:text-base text-zinc-300 leading-relaxed">
          Retrouvez ici tous les romans que j&apos;ai dévorés entre deux biberons, les sorties d&apos;école et mes insomnies volontaires. Filtrez par genre, par trope ou par niveau de piment pour trouver votre prochaine lecture !
        </p>
      </div>

      {/* Barre de filtres */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 items-center">
          {/* Recherche */}
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un titre, une autrice ou un trope (ex: Mafia, Stalker, Dragons...)"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:border-rose-500 focus:outline-none"
            />
          </div>

          {/* Filtre Spicy */}
          <div className="md:col-span-3 flex items-center gap-2">
            <label htmlFor="spicy-filter" className="text-xs font-semibold text-zinc-400 shrink-0 flex items-center gap-1">
              <Flame className="h-4 w-4 text-rose-500" /> Piment min :
            </label>
            <select
              id="spicy-filter"
              value={minSpicy}
              onChange={(e) => setMinSpicy(Number(e.target.value))}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-sm text-white focus:border-rose-500 focus:outline-none"
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
              className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all border ${
                onlyFavorites
                  ? "bg-rose-600 text-white border-rose-500 shadow-lg shadow-rose-950"
                  : "bg-zinc-950 text-zinc-300 border-zinc-700 hover:border-rose-500/50"
              }`}
            >
              <Heart className={`h-4 w-4 ${onlyFavorites ? "fill-white" : "text-rose-500"}`} />
              Coups de cœur uniquement
            </button>
          </div>
        </div>

        {/* Catégories pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-800/80">
          <span className="text-xs font-semibold text-zinc-400 mr-2 flex items-center gap-1">
            <Filter className="h-3.5 w-3.5" /> Genres :
          </span>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-rose-600 text-white shadow-md shadow-rose-950"
                  : "bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grille de résultats */}
      {filteredBooks.length === 0 ? (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-12 text-center space-y-4">
          <p className="font-serif text-xl text-white">
            Aucun roman ne correspond à ces filtres dans ma bibliothèque... pour l&apos;instant !
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("Tous");
              setMinSpicy(0);
              setOnlyFavorites(false);
              setSearchQuery("");
            }}
            className="rounded-full bg-rose-600 px-5 py-2 text-xs font-bold text-white hover:bg-rose-500"
          >
            Réinitialiser les filtres
          </button>
        </div>
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
