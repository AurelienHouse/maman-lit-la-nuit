"use client";

import { useState } from "react";
import { BookOpen, Flame, Heart, Mail, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formType, setFormType] = useState<"recommandation" | "conseil" | "partenariat">("recommandation");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-[2.5rem] border border-rose-950/40 bg-gradient-to-br from-[#1c1917] via-[#0c0a09] to-[#292524] p-10 sm:p-16 space-y-5 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300 relative z-10">
          <Mail className="h-3.5 w-3.5" /> Boîte à livres & Papotages
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white relative z-10 leading-tight">
          Conseille-moi une pépite ou demande ton <span className="italic text-rose-400 font-light">ordonnance lecture</span> !
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-stone-300 font-light leading-relaxed relative z-10">
          Ma Pile à Lire (PAL) déborde déjà sur trois étagères, mais il y a toujours de la place pour un nouveau coup de cœur Dark Romance ou Romantasy. Tu peux aussi m'écrire pour un conseil personnalisé !
        </p>
      </motion.div>

      {/* Formulaire interactif */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-[2.5rem] border border-stone-800 bg-[#1c1917]/50 backdrop-blur-sm p-8 sm:p-12 shadow-xl"
      >
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="py-16 text-center space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-[0_0_30px_rgba(251,191,36,0.2)]"
              >
                <CheckCircle2 className="h-10 w-10" />
              </motion.div>
              <h2 className="font-serif text-3xl font-bold text-white">
                Message bien reçu dans mon <span className="italic text-rose-400 font-light">boudoir littéraire</span> !
              </h2>
              <p className="text-sm text-stone-300 font-light max-w-md mx-auto leading-relaxed">
                Je te réponds dès que les enfants sont couchés et que j'ai ma tasse de thé en main. Merci d'avoir pris le temps de m'écrire !
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full bg-stone-800 px-8 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-stone-700 transition-colors shadow-lg"
              >
                Envoyer un autre message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Choix du sujet */}
              <div className="space-y-3">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
                  Pourquoi m'écris-tu aujourd'hui ?
                </label>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {[
                    { id: "recommandation", icon: Flame, label: "Te conseiller un livre à lire absolument", color: "text-rose-500" },
                    { id: "conseil", icon: Sparkles, label: "Te demander un conseil de lecture sur-mesure", color: "text-amber-400" },
                    { id: "partenariat", icon: BookOpen, label: "Service Presse / Autrice / Bookclub", color: "text-purple-400" }
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormType(type.id as any)}
                      className={`rounded-[1.5rem] p-6 text-left text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                        formType === type.id
                          ? "bg-rose-950/40 border-rose-500/50 text-white shadow-lg shadow-rose-950/30 scale-[1.02]"
                          : "bg-[#0c0a09] border-stone-800 text-stone-400 hover:text-white hover:border-stone-600"
                      }`}
                    >
                      <type.icon className={`h-5 w-5 ${type.color} mb-3`} />
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">
                    Ton prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Marine"
                    className="w-full rounded-2xl border border-stone-800 bg-[#0c0a09] px-5 py-4 text-sm text-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500 focus:outline-none transition-all shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">
                    Ton adresse e-mail *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marine@exemple.fr"
                    className="w-full rounded-2xl border border-stone-800 bg-[#0c0a09] px-5 py-4 text-sm text-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500 focus:outline-none transition-all shadow-inner"
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {formType === "recommandation" && (
                  <motion.div
                    key="reco-fields"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 overflow-hidden"
                  >
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">
                        Titre du livre & Autrice *
                      </label>
                      <input
                        type="text"
                        required={formType === "recommandation"}
                        placeholder="Ex: Does It Hurt? de H.D. Carlton"
                        className="w-full rounded-2xl border border-stone-800 bg-[#0c0a09] px-5 py-4 text-sm text-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500 focus:outline-none transition-all shadow-inner"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">
                        Niveau de piment estimé 🌶️
                      </label>
                      <select className="w-full rounded-2xl border border-stone-800 bg-[#0c0a09] px-5 py-4 text-sm text-white focus:border-rose-500 focus:outline-none appearance-none cursor-pointer shadow-inner">
                        <option>🌶️🌶️🌶️ (3/5 - Épicé)</option>
                        <option>🌶️🌶️🌶️🌶️ (4/5 - Très intense)</option>
                        <option>🌶️🌶️🌶️🌶️🌶️ (5/5 - À lire sur liseuse en cachette !)</option>
                        <option>🌶️🌶️ (2/5 - Doux / Slow Burn)</option>
                      </select>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">
                  Ton message *
                </label>
                <textarea
                  rows={6}
                  required
                  placeholder={
                    formType === "recommandation"
                      ? "Raconte-moi pourquoi ce livre va me faire faire une nuit blanche..."
                      : formType === "conseil"
                      ? "Dis-moi les derniers livres que tu as aimés, tes tropes favoris et tes limites (TW)..."
                      : "Bonjour Chloé, je vous contacte au sujet de..."
                  }
                  className="w-full rounded-2xl border border-stone-800 bg-[#0c0a09] px-5 py-4 text-sm text-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500 focus:outline-none transition-all shadow-inner resize-none"
                />
              </div>

              <button
                type="submit"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-rose-700 to-rose-900 px-10 py-5 text-sm font-bold uppercase tracking-widest text-rose-50 shadow-2xl shadow-rose-950/60 hover:shadow-rose-600/30 transition-all hover:-translate-y-1 border border-rose-500/50"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Send className="h-4 w-4" /> Envoyer mon message à Chloé
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
