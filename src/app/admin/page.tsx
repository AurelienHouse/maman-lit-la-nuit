"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAdmin } from "@/context/AdminContext";
import { BookReview } from "@/data/books";
import {
  Sparkles,
  Save,
  Plus,
  Trash2,
  Pencil,
  BookOpen,
  CheckCircle2,
  RotateCcw,
  Eye,
  Lock,
} from "lucide-react";

const PAGE_SECTIONS = [
  {
    title: "En-tête & Nom du Site (Navbar / Footer)",
    fields: [
      { id: "brand.amp", label: "Symbole central du logo", defaultText: "&" },
      { id: "brand.name", label: "Nom principal du logo", defaultText: "Lit" },
      { id: "brand.subtitle", label: "Sous-titre sous le logo", defaultText: "Boudoir Littéraire & Vie de Maman" },
      { id: "navbar.banner_prefix", label: "Bannière du haut (texte)", defaultText: "Lecture en cours à 23h45 :" },
      { id: "navbar.banner_book", label: "Bannière du haut (livre en cours)", defaultText: "Haunting Adeline (Tome 2)" },
      { id: "navbar.banner_coffee", label: "Bannière du haut (compteur café)", defaultText: "4 cafés au compteur" },
      { id: "footer.description", label: "Description du pied de page", defaultText: "Le boudoir littéraire d'une maman de deux enfants qui dévore plus de 100 romans par an. Spécialiste autoproclamée de la Dark Romance, de la Romantasy et des héros moralement gris qui nous font oublier de dormir.", multiline: true },
    ],
  },
  {
    title: "Page d'Accueil (Le Boudoir)",
    fields: [
      { id: "home.hero_badge", label: "Badge au-dessus du grand titre", defaultText: "Le blog d'une maman de 2 enfants qui bouquine (vraiment) beaucoup" },
      { id: "home.hero_title_line1", label: "Grand Titre - Ligne 1 (blanche)", defaultText: "Le jour, je gère les goûters." },
      { id: "home.hero_title_line2", label: "Grand Titre - Ligne 2 (italique rose/doré)", defaultText: "La nuit, je dévore de la Dark Romance." },
      { id: "home.hero_intro", label: "Paragraphe de présentation", defaultText: "Bienvenue dans mon boudoir littéraire ! Moi c'est Chloé, maman de Léo (7 ans) et Mila (3 ans). Avec plus de 110 romans lus cette année, je partage ici mes avis 100% honnêtes, mes coups de cœur sulfureux, les niveaux de piment 🌶️ et les Trigger Warnings pour vous aider à choisir votre prochaine obsession nocturne.", multiline: true },
      { id: "home.profile_name", label: "Carte Profil - Nom & Âge", defaultText: "Chloé, 34 ans" },
      { id: "home.profile_role", label: "Carte Profil - Sous-titre", defaultText: "Maman poule le jour • Lectrice insomniaque" },
      { id: "home.profile_quote", label: "Carte Profil - Citation mission", defaultText: "« Ma mission : déculpabiliser toutes les mamans (et toutes les femmes !) qui lisent de la Dark Romance en cachette entre le bain des petits et le pliage du linge, et vous dénicher le bon livre pour le bon moment. »", multiline: true },
      { id: "home.nightstand_title", label: "Table de chevet - Livre en cours", defaultText: "Haunting Adeline - Tome 2" },
      { id: "home.nightstand_author", label: "Table de chevet - Autrice", defaultText: "H.D. Carlton" },
      { id: "home.nightstand_pages", label: "Table de chevet - Progression pages", defaultText: "p.342 / 580" },
      { id: "home.nightstand_status", label: "Table de chevet - Anecdote maman", defaultText: "Caché sous le coussin du canapé entre deux épisodes de Pat'Patrouille", multiline: true },
    ],
  },
  {
    title: "Page Chroniques & Avis",
    fields: [
      { id: "chroniques.kicker", label: "Petit badge haut", defaultText: "Bibliothèque & Avis" },
      { id: "chroniques.title_1", label: "Titre partie 1", defaultText: "Toutes mes" },
      { id: "chroniques.title_2", label: "Titre partie 2 (italique)", defaultText: "Chroniques" },
      { id: "chroniques.subtitle", label: "Texte d'introduction", defaultText: "Retrouvez ici tous les romans que j'ai dévorés entre deux biberons, les sorties d'école et mes insomnies volontaires. Filtrez par genre, par trope ou par niveau de piment pour trouver votre prochaine lecture !", multiline: true },
    ],
  },
  {
    title: "Page Tops & Guides",
    fields: [
      { id: "tops.kicker", label: "Petit badge haut", defaultText: "Guides & Sélections Thématiques" },
      { id: "tops.title_1", label: "Titre partie 1", defaultText: "Mes Tops &" },
      { id: "tops.title_2", label: "Titre partie 2 (italique)", defaultText: "Guides Dark Romance" },
      { id: "tops.subtitle", label: "Texte d'introduction", defaultText: "Vous ne savez pas par quel roman commencer ? Vous cherchez un trope bien précis (Enemies to Lovers, Stalker, Mafia, Shadow Daddy) ? Voici mes sélections sur-mesure testées et approuvées !", multiline: true },
    ],
  },
  {
    title: "Page La Maman Lectrice (À Propos)",
    fields: [
      { id: "apropos.kicker", label: "Badge haut", defaultText: "Qui se cache derrière ce boudoir ?" },
      { id: "apropos.hero_title", label: "Grand titre", defaultText: "Moi c'est Chloé : maman de 2 enfants à plein temps, et grande amoureuse de Dark Romance.", multiline: true },
      { id: "apropos.hero_p1", label: "Paragraphe 1", defaultText: "Pendant longtemps, après la naissance de mon deuxième enfant, j'ai cru que je n'aurais plus jamais le temps de lire. Et puis j'ai découvert la littérature qui fait battre le cœur à 100 à l'heure : la Dark Romance et la Romantasy.", multiline: true },
      { id: "apropos.hero_p2", label: "Paragraphe 2", defaultText: "Pourquoi j'ai créé ce site ? Parce que comme sur mes blogs littéraires préférés (coucou MademoiselleLit !), j'avais envie d'un espace chaleureux, loin des algorithmes rapides des réseaux sociaux, pour partager de vraies chroniques détaillées et conseiller d'autres lectrices et mamans sans aucun tabou.", multiline: true },
      { id: "apropos.card_tribu", label: "Fiche identité - Tribu", defaultText: "Léo (7 ans) & Mila (3 ans)" },
      { id: "apropos.card_rythme", label: "Fiche identité - Rythme", defaultText: "~2 à 3 livres / semaine" },
      { id: "apropos.card_format", label: "Fiche identité - Format", defaultText: "Broché la nuit, Kindle le jour" },
      { id: "apropos.card_trope", label: "Fiche identité - Trope favori", defaultText: "Enemies to Lovers" },
      { id: "apropos.card_boyfriend", label: "Fiche identité - Book Boyfriend", defaultText: "Zade & Xaden" },
    ],
  },
  {
    title: "Page Contact",
    fields: [
      { id: "contact.kicker", label: "Badge haut", defaultText: "Boîte à livres & Papotages" },
      { id: "contact.title", label: "Grand titre", defaultText: "Conseille-moi une pépite ou demande ton ordonnance lecture !" },
      { id: "contact.subtitle", label: "Sous-titre", defaultText: "Ma Pile à Lire (PAL) déborde déjà sur trois étagères, mais il y a toujours de la place pour un nouveau coup de cœur Dark Romance ou Romantasy. Tu peux aussi m'écrire pour un conseil personnalisé !", multiline: true },
    ],
  },
];

export default function AdminDashboardPage() {
  const {
    isAdmin,
    setIsAdmin,
    getText,
    updateText,
    books,
    addBook,
    updateBook,
    deleteBook,
    saveToServer,
    resetAllChanges,
    isSaving,
  } = useAdmin();

  const [passwordInput, setPasswordInput] = useState("");
  const [activeTab, setActiveTab] = useState<"textes" | "livres">("textes");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [editingBook, setEditingBook] = useState<BookReview | null>(null);

  if (!isAdmin) {
    return (
      <div className="mx-auto max-w-md px-4 py-24">
        <div className="rounded-3xl border border-amber-500/30 bg-[#1c1917] p-8 shadow-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-950 text-amber-400 border border-amber-500/30">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-serif text-3xl font-bold text-white">
                Administration ❤️ &amp; Lit
              </h1>
              <p className="text-xs text-stone-400">
                Connectez-vous pour modifier chaque fenêtre du site
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (
                passwordInput.trim().toLowerCase() === "chloe2026" ||
                passwordInput.trim().toLowerCase() === "admin"
              ) {
                setIsAdmin(true);
              } else {
                alert("Mot de passe incorrect (utilisez : chloe2026)");
              }
            }}
            className="space-y-4"
          >
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Code secret (chloe2026)"
              className="w-full rounded-xl border border-stone-700 bg-[#0c0a09] px-4 py-3.5 text-sm text-white focus:border-amber-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-rose-700 to-rose-900 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg"
            >
              Entrer dans l&apos;espace Admin
            </button>
          </form>
        </div>
      </div>
    );
  }

  const handleSaveAll = async () => {
    const res = await saveToServer();
    setStatusMessage(res.message);
    setTimeout(() => setStatusMessage(null), 5000);
  };

  const handleCreateNewBook = () => {
    const slug = `nouveau-livre-${Date.now()}`;
    const newBook: BookReview = {
      slug,
      title: "Titre du Nouveau Roman",
      author: "Nom de l'Autrice",
      series: "Tome 1",
      publisher: "Hugo Roman",
      pages: 450,
      releaseYear: 2026,
      category: "Dark Romance",
      rating: 4.8,
      spicyLevel: 4,
      darknessLevel: 4,
      tropes: ["Enemies to Lovers", "Morally Grey", "Slow Burn"],
      triggerWarnings: ["Scènes explicites", "Violence psychologique"],
      coverGradient: "from-rose-950 via-zinc-950 to-black",
      coverAccent: "#e11d48",
      coverQuote: "« Une citation marquante du roman... »",
      publishDate: "Novembre 2026",
      readingContext: "Lu jusqu'à 2h du matin après avoir couché les enfants !",
      verdictCourt: "Un coup de cœur addictif qui m'a tenue éveillée toute la nuit.",
      summary: "Résumé sans spoiler de l'intrigue du roman...",
      fullReview: [
        "Premier paragraphe de mon avis complet sur ce livre...",
        "Deuxième paragraphe sur les personnages et la plume de l'autrice...",
      ],
      pointsForts: [
        "Une tension incroyable dès le premier chapitre",
        "Des protagonistes inoubliables",
      ],
      pourQui: "Pour toutes les lectrices qui aiment les romances intenses et passionnées.",
      isFavorite: true,
      commentsCount: 0,
      comments: [],
    };
    addBook(newBook);
    setEditingBook(newBook);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-10 pb-32">
      {/* Header Admin */}
      <div className="rounded-[2.5rem] border border-amber-500/30 bg-gradient-to-br from-[#1c1917] via-[#0c0a09] to-[#292524] p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 border border-amber-400/30 px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-300">
            <Sparkles className="h-3.5 w-3.5" /> Tableau de Bord Administrateur
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Modifier les textes &amp; livres du site
          </h1>
          <p className="text-sm text-stone-300 max-w-2xl">
            💡 <strong className="text-amber-300">Astuce :</strong> Vous pouvez modifier tous les textes ci-dessous, <strong>OU</strong> aller directement sur n&apos;importe quelle page du site et cliquer sur le petit crayon doré ✏️ à côté de chaque phrase !
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900 px-5 py-3 text-xs font-bold uppercase tracking-widest text-stone-200 hover:border-amber-400"
          >
            <Eye className="h-4 w-4 text-amber-400" /> Voir et éditer sur le site
          </Link>
          <button
            type="button"
            onClick={handleSaveAll}
            disabled={isSaving}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-lg hover:bg-emerald-500"
          >
            <Save className="h-4 w-4" />
            {isSaving ? "Enregistrement..." : "Enregistrer toutes les modifications"}
          </button>
        </div>
      </div>

      {statusMessage && (
        <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/40 p-4 text-sm text-emerald-200 flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Onglets */}
      <div className="flex flex-wrap items-center gap-3 border-b border-stone-800 pb-4">
        <button
          type="button"
          onClick={() => setActiveTab("textes")}
          className={`rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all ${
            activeTab === "textes"
              ? "bg-rose-800 text-white shadow-lg"
              : "bg-[#1c1917] text-stone-400 hover:text-white"
          }`}
        >
          <Pencil className="inline h-4 w-4 mr-2" />
          Textes de chaque fenêtre / page
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("livres")}
          className={`rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all ${
            activeTab === "livres"
              ? "bg-rose-800 text-white shadow-lg"
              : "bg-[#1c1917] text-stone-400 hover:text-white"
          }`}
        >
          <BookOpen className="inline h-4 w-4 mr-2" />
          Gérer les Livres &amp; Chroniques ({books.length})
        </button>
      </div>

      {/* ONGLET 1 : TEXTES DE CHAQUE FENÊTRE */}
      {activeTab === "textes" && (
        <div className="space-y-8">
          {PAGE_SECTIONS.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-stone-800 bg-[#1c1917]/50 p-6 sm:p-8 space-y-6"
            >
              <h2 className="font-serif text-2xl font-bold text-amber-300 border-b border-stone-800 pb-3">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {section.fields.map((field) => {
                  const val = getText(field.id, field.defaultText);
                  return (
                    <div
                      key={field.id}
                      className={field.multiline ? "md:col-span-2" : ""}
                    >
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                        {field.label}
                      </label>
                      {field.multiline ? (
                        <textarea
                          rows={3}
                          value={val}
                          onChange={(e) => updateText(field.id, e.target.value)}
                          className="w-full rounded-xl border border-stone-700 bg-[#0c0a09] p-3.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                        />
                      ) : (
                        <input
                          type="text"
                          value={val}
                          onChange={(e) => updateText(field.id, e.target.value)}
                          className="w-full rounded-xl border border-stone-700 bg-[#0c0a09] px-4 py-3 text-sm text-white focus:border-amber-400 focus:outline-none"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ONGLET 2 : GESTION DES LIVRES */}
      {activeTab === "livres" && (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-white">
              Vos Chroniques Littéraires ({books.length})
            </h2>
            <button
              type="button"
              onClick={handleCreateNewBook}
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#0c0a09] hover:bg-amber-300 shadow-lg"
            >
              <Plus className="h-4 w-4" /> Ajouter un nouveau livre
            </button>
          </div>

          {editingBook && (
            <div className="rounded-3xl border-2 border-amber-400 bg-[#1c1917] p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <h3 className="font-serif text-2xl font-bold text-amber-300">
                  Édition de : {editingBook.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setEditingBook(null)}
                  className="rounded-lg bg-stone-800 px-4 py-2 text-xs font-bold text-white"
                >
                  Fermer l&apos;éditeur
                </button>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1.5">
                    Titre du roman
                  </label>
                  <input
                    type="text"
                    value={editingBook.title}
                    onChange={(e) => {
                      const updated = { ...editingBook, title: e.target.value };
                      setEditingBook(updated);
                      updateBook(updated);
                    }}
                    className="w-full rounded-xl border border-stone-700 bg-[#0c0a09] px-3.5 py-2.5 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1.5">
                    Autrice / Auteur
                  </label>
                  <input
                    type="text"
                    value={editingBook.author}
                    onChange={(e) => {
                      const updated = { ...editingBook, author: e.target.value };
                      setEditingBook(updated);
                      updateBook(updated);
                    }}
                    className="w-full rounded-xl border border-stone-700 bg-[#0c0a09] px-3.5 py-2.5 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1.5">
                    Catégorie
                  </label>
                  <select
                    value={editingBook.category}
                    onChange={(e) => {
                      const updated = {
                        ...editingBook,
                        category: e.target.value as BookReview["category"],
                      };
                      setEditingBook(updated);
                      updateBook(updated);
                    }}
                    className="w-full rounded-xl border border-stone-700 bg-[#0c0a09] px-3.5 py-2.5 text-sm text-white"
                  >
                    <option value="Dark Romance">Dark Romance</option>
                    <option value="Romantasy">Romantasy</option>
                    <option value="New Romance">New Romance</option>
                    <option value="Enemies to Lovers">Enemies to Lovers</option>
                    <option value="Thriller Psychologique">Thriller Psychologique</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1.5">
                    Note sur 5 (ex: 4.9)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    value={editingBook.rating}
                    onChange={(e) => {
                      const updated = {
                        ...editingBook,
                        rating: Number(e.target.value),
                      };
                      setEditingBook(updated);
                      updateBook(updated);
                    }}
                    className="w-full rounded-xl border border-stone-700 bg-[#0c0a09] px-3.5 py-2.5 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1.5">
                    Niveau Piment 🌶️ (1 à 5)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={editingBook.spicyLevel}
                    onChange={(e) => {
                      const updated = {
                        ...editingBook,
                        spicyLevel: Number(e.target.value) as 1 | 2 | 3 | 4 | 5,
                      };
                      setEditingBook(updated);
                      updateBook(updated);
                    }}
                    className="w-full rounded-xl border border-stone-700 bg-[#0c0a09] px-3.5 py-2.5 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1.5">
                    Niveau Dark 💀 (1 à 5)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={editingBook.darknessLevel}
                    onChange={(e) => {
                      const updated = {
                        ...editingBook,
                        darknessLevel: Number(e.target.value) as 1 | 2 | 3 | 4 | 5,
                      };
                      setEditingBook(updated);
                      updateBook(updated);
                    }}
                    className="w-full rounded-xl border border-stone-700 bg-[#0c0a09] px-3.5 py-2.5 text-sm text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-300 mb-1.5">
                  Anecdote de lecture de Maman
                </label>
                <input
                  type="text"
                  value={editingBook.readingContext}
                  onChange={(e) => {
                    const updated = {
                      ...editingBook,
                      readingContext: e.target.value,
                    };
                    setEditingBook(updated);
                    updateBook(updated);
                  }}
                  className="w-full rounded-xl border border-stone-700 bg-[#0c0a09] px-3.5 py-2.5 text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-300 mb-1.5">
                  Verdict court (affiché sur la carte)
                </label>
                <textarea
                  rows={2}
                  value={editingBook.verdictCourt}
                  onChange={(e) => {
                    const updated = {
                      ...editingBook,
                      verdictCourt: e.target.value,
                    };
                    setEditingBook(updated);
                    updateBook(updated);
                  }}
                  className="w-full rounded-xl border border-stone-700 bg-[#0c0a09] p-3 text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-300 mb-1.5">
                  Résumé sans spoiler
                </label>
                <textarea
                  rows={3}
                  value={editingBook.summary}
                  onChange={(e) => {
                    const updated = { ...editingBook, summary: e.target.value };
                    setEditingBook(updated);
                    updateBook(updated);
                  }}
                  className="w-full rounded-xl border border-stone-700 bg-[#0c0a09] p-3 text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-300 mb-1.5">
                  Mon avis complet (1 paragraphe par ligne)
                </label>
                <textarea
                  rows={6}
                  value={editingBook.fullReview.join("\n\n")}
                  onChange={(e) => {
                    const updated = {
                      ...editingBook,
                      fullReview: e.target.value.split(/\n\n+/),
                    };
                    setEditingBook(updated);
                    updateBook(updated);
                  }}
                  className="w-full rounded-xl border border-stone-700 bg-[#0c0a09] p-3 text-sm text-white"
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {books.map((book) => (
              <div
                key={book.slug}
                className="flex items-center justify-between rounded-2xl border border-stone-800 bg-[#1c1917]/60 p-5"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400">
                    {book.category} • {book.rating}/5 ★
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {book.title}
                  </h3>
                  <p className="text-xs text-stone-400">de {book.author}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingBook(book)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400/20 border border-amber-400/40 px-3.5 py-2 text-xs font-bold text-amber-300 hover:bg-amber-400/30"
                  >
                    <Pencil className="h-3.5 w-3.5" /> Modifier
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm(`Supprimer la chronique "${book.title}" ?`)) {
                        deleteBook(book.slug);
                      }
                    }}
                    className="inline-flex items-center justify-center rounded-xl bg-rose-950/60 border border-rose-800/40 p-2 text-rose-400 hover:bg-rose-900"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
