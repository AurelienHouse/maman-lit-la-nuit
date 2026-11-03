"use client";

import { useState } from "react";
import { BookOpen, Flame, Heart, Mail, Send, Sparkles, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formType, setFormType] = useState<"recommandation" | "conseil" | "partenariat">("recommandation");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="rounded-3xl border border-rose-950/60 bg-gradient-to-br from-rose-950/30 via-zinc-900 to-zinc-950 p-8 sm:p-12 space-y-4 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-rose-300">
          <Mail className="h-3.5 w-3.5" /> Boîte à livres & Papotages
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Conseille-moi une pépite ou demande ton ordonnance lecture !
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-300 leading-relaxed">
          Ma Pile à Lire (PAL) déborde déjà sur trois étagères, mais il y a toujours de la place pour un nouveau coup de cœur Dark Romance ou Romantasy. Tu peux aussi m&apos;écrire pour un conseil personnalisé !
        </p>
      </div>

      {/* Formulaire interactif */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 sm:p-10">
        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-600/20 text-rose-400 border border-rose-500/40">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-white">
              Message bien reçu dans mon boudoir littéraire !
            </h2>
            <p className="text-sm text-zinc-300 max-w-md mx-auto">
              Je te réponds dès que les enfants sont couchés et que j&apos;ai ma tasse de thé en main. Merci d&apos;avoir pris le temps de m&apos;écrire !
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-4 rounded-full bg-zinc-800 px-6 py-2.5 text-xs font-bold text-white hover:bg-zinc-700"
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Choix du sujet */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-rose-400">
                Pourquoi m&apos;écris-tu aujourd&apos;hui ?
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <button
                  type="button"
                  onClick={() => setFormType("recommandation")}
                  className={`rounded-xl p-4 text-left text-xs font-semibold border transition-all ${
                    formType === "recommandation"
                      ? "bg-rose-950/60 border-rose-500 text-white"
                      : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  <Flame className="h-4 w-4 text-rose-500 mb-1.5" />
                  Te conseiller un livre à lire absolument
                </button>
                <button
                  type="button"
                  onClick={() => setFormType("conseil")}
                  className={`rounded-xl p-4 text-left text-xs font-semibold border transition-all ${
                    formType === "conseil"
                      ? "bg-rose-950/60 border-rose-500 text-white"
                      : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  <Sparkles className="h-4 w-4 text-amber-400 mb-1.5" />
                  Te demander un conseil de lecture sur-mesure
                </button>
                <button
                  type="button"
                  onClick={() => setFormType("partenariat")}
                  className={`rounded-xl p-4 text-left text-xs font-semibold border transition-all ${
                    formType === "partenariat"
                      ? "bg-rose-950/60 border-rose-500 text-white"
                      : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  <BookOpen className="h-4 w-4 text-purple-400 mb-1.5" />
                  Service Presse / Autrice / Éditeur / Bookclub
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-2">
                  Ton prénom *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Marine"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-rose-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-2">
                  Ton adresse e-mail *
                </label>
                <input
                  type="email"
                  required
                  placeholder="marine@exemple.fr"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-rose-500 focus:outline-none"
                />
              </div>
            </div>

            {formType === "recommandation" && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    Titre du livre & Autrice *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Does It Hurt? de H.D. Carlton"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-rose-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    Niveau de piment estimé 🌶️
                  </label>
                  <select className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-rose-500 focus:outline-none">
                    <option>🌶️🌶️🌶️ (3/5 - Épicé)</option>
                    <option>🌶️🌶️🌶️🌶️ (4/5 - Très intense)</option>
                    <option>🌶️🌶️🌶️🌶️🌶️ (5/5 - À lire sur liseuse en cachette !)</option>
                    <option>🌶️🌶️ (2/5 - Doux / Slow Burn)</option>
                  </select>
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-2">
                Ton message *
              </label>
              <textarea
                rows={5}
                required
                placeholder={
                  formType === "recommandation"
                    ? "Raconte-moi pourquoi ce livre va me faire faire une nuit blanche..."
                    : formType === "conseil"
                    ? "Dis-moi les derniers livres que tu as aimés, tes tropes favoris et tes limites (TW)..."
                    : "Bonjour Chloé, je vous contacte au sujet de..."
                }
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-rose-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-red-700 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-rose-950/60 hover:from-rose-500 hover:to-red-600 transition-all"
            >
              <Send className="h-4 w-4" /> Envoyer mon message à Chloé
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
