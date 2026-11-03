"use client";

import { useState } from "react";
import { MessageCircle, Send, User, Feather } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CommentItem {
  author: string;
  date: string;
  text: string;
  badge?: string;
}

export function CommentSection({
  initialComments,
  bookTitle,
}: {
  initialComments: CommentItem[];
  bookTitle: string;
}) {
  const [comments, setComments] = useState<CommentItem[]>(initialComments);
  const [author, setAuthor] = useState("");
  const [badge, setBadge] = useState("Maman & Lectrice");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;

    const newComment: CommentItem = {
      author: author.trim(),
      badge,
      date: "À l'instant",
      text: text.trim(),
    };

    setComments([newComment, ...comments]);
    setAuthor("");
    setText("");
    setSubmitted(true);
  };

  return (
    <section className="rounded-[2.5rem] border border-stone-800 bg-[#1c1917]/40 backdrop-blur-sm p-8 sm:p-12 space-y-10 shadow-xl">
      <div className="flex items-center justify-between border-b border-stone-800 pb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-rose-950/50 border border-rose-800/50 text-rose-400">
            <MessageCircle className="h-6 w-6" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-white">
            Le Coin <span className="italic text-rose-400 font-light">Papotage</span> <span className="text-sm font-sans font-normal text-stone-400 ml-2">({comments.length} avis)</span>
          </h2>
        </div>
      </div>

      {/* Formulaire pour laisser un avis */}
      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-stone-800 bg-[#0c0a09]/80 p-8 space-y-6 shadow-inner">
        <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
          <Feather className="h-5 w-5 text-amber-400" /> Tu as lu <em className="text-rose-300">{bookTitle}</em> ? Donne-moi ton avis !
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">
              Ton prénom ou pseudo *
            </label>
            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Ex: Aurélie_LitTard"
              className="w-full rounded-2xl border border-stone-800 bg-[#1c1917] px-5 py-3.5 text-sm text-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500 focus:outline-none transition-all shadow-inner"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">
              Ton profil de lectrice
            </label>
            <select
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className="w-full rounded-2xl border border-stone-800 bg-[#1c1917] px-5 py-3.5 text-sm text-white focus:border-rose-500 focus:outline-none appearance-none cursor-pointer shadow-inner"
            >
              <option value="Maman & Lectrice">Maman & Lectrice nocturne</option>
              <option value="Fan de Dark Romance">Fan de Dark Romance 🌶️</option>
              <option value="Team Liseuse">Team Liseuse discrète</option>
              <option value="Débutante Dark Romance">Débutante en Dark Romance</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">
            Ton impression sur ce roman *
          </label>
          <textarea
            rows={4}
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Est-ce que tu as aimé le héros ? Tu as veillé jusqu'à quelle heure ?"
            className="w-full rounded-2xl border border-stone-800 bg-[#1c1917] px-5 py-3.5 text-sm text-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500 focus:outline-none transition-all shadow-inner resize-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <AnimatePresence>
            {submitted ? (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-sm font-bold text-amber-400 flex items-center gap-2"
              >
                ✨ Merci ! Ton commentaire a été ajouté au boudoir.
              </motion.span>
            ) : (
              <span className="text-xs text-stone-500 italic">
                Bienveillance et respect des goûts de chacune garantis 💕
              </span>
            )}
          </AnimatePresence>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-700 to-rose-900 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white hover:from-rose-600 hover:to-rose-800 transition-all shadow-lg shadow-rose-950/50 w-full sm:w-auto"
          >
            <Send className="h-4 w-4" /> Publier mon avis
          </button>
        </div>
      </form>

      {/* Liste des commentaires */}
      <div className="space-y-5">
        {comments.length === 0 ? (
          <p className="text-sm text-stone-400 italic text-center py-8">
            Sois la première à partager ton avis sur cette lecture !
          </p>
        ) : (
          <AnimatePresence>
            {comments.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-[1.5rem] border border-stone-800/80 bg-[#0c0a09]/60 p-6 space-y-3 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-950/80 text-rose-300 border border-rose-800/60 shadow-inner">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-serif font-bold text-base text-white block">{c.author}</span>
                      {c.badge && (
                        <span className="inline-block mt-0.5 rounded-full bg-[#1c1917] border border-stone-800 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-amber-400">
                          {c.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-stone-500 font-mono">{c.date}</span>
                </div>
                <p className="text-sm text-stone-300 font-light leading-relaxed pl-13 pt-2">{c.text}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
