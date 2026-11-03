"use client";

import { useState } from "react";
import { MessageCircle, Send, User } from "lucide-react";

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
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-10 space-y-8">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-3">
          <MessageCircle className="h-6 w-6 text-rose-500" />
          <h2 className="font-serif text-2xl font-bold text-white">
            Le Coin Papotage ({comments.length} avis de lectrices)
          </h2>
        </div>
      </div>

      {/* Formulaire pour laisser un avis */}
      <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 space-y-4">
        <h3 className="font-serif text-lg font-semibold text-white">
          Tu as lu <em>{bookTitle}</em> ? Donne-moi ton avis en commentaire !
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
              Ton prénom ou pseudo *
            </label>
            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Ex: Aurélie_LitTard"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-white focus:border-rose-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
              Ton profil de lectrice
            </label>
            <select
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-white focus:border-rose-500 focus:outline-none"
            >
              <option value="Maman & Lectrice">Maman & Lectrice nocturne</option>
              <option value="Fan de Dark Romance">Fan de Dark Romance 🌶️</option>
              <option value="Team Liseuse">Team Liseuse discrète</option>
              <option value="Débutante Dark Romance">Débutante en Dark Romance</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
            Ton impression sur ce roman *
          </label>
          <textarea
            rows={3}
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Est-ce que tu as aimé le héros ? Tu as veillé jusqu'à quelle heure ?"
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-white focus:border-rose-500 focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-between">
          {submitted ? (
            <span className="text-xs font-semibold text-emerald-400">
              ✨ Merci ! Ton commentaire a bien été ajouté sous la chronique.
            </span>
          ) : (
            <span className="text-xs text-zinc-500">
              Bienveillance et respect des goûts de chacune garantis 💕
            </span>
          )}
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-rose-500 transition-colors"
          >
            <Send className="h-3.5 w-3.5" /> Publier mon commentaire
          </button>
        </div>
      </form>

      {/* Liste des commentaires */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-sm text-zinc-400 italic">
            Sois la première à partager ton avis sur cette lecture !
          </p>
        ) : (
          comments.map((c, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-5 space-y-2"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-950 text-rose-300 border border-rose-800">
                    <User className="h-4 w-4" />
                  </div>
                  <span className="font-semibold text-sm text-white">{c.author}</span>
                  {c.badge && (
                    <span className="rounded-full bg-rose-950/80 border border-rose-800/60 px-2.5 py-0.5 text-[11px] text-rose-300">
                      {c.badge}
                    </span>
                  )}
                </div>
                <span className="text-xs text-zinc-500">{c.date}</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed pl-10">{c.text}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
