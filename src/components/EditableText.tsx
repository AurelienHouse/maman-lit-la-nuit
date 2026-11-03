"use client";

import React, { useState } from "react";
import { useAdmin } from "@/context/AdminContext";
import { Pencil, Check, X } from "lucide-react";

interface EditableTextProps {
  id: string;
  defaultText: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "div" | "blockquote" | "strong" | "em";
  className?: string;
  multiline?: boolean;
}

export function EditableText({
  id,
  defaultText,
  as: Component = "span",
  className = "",
  multiline = false,
}: EditableTextProps) {
  const { isAdmin, getText, updateText } = useAdmin();
  const currentValue = getText(id, defaultText);
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(currentValue);

  if (!isAdmin) {
    return <Component className={className}>{currentValue}</Component>;
  }

  const handleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDraft(currentValue);
    setIsEditing(true);
  };

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    updateText(id, draft);
    setIsEditing(false);
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDraft(currentValue);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <span
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="relative z-50 inline-flex flex-col gap-2 w-full min-w-[240px] rounded-2xl border-2 border-amber-400 bg-[#0c0a09] p-3 shadow-2xl shadow-black"
      >
        <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-amber-400 flex items-center justify-between">
          <span>✏️ Modification du texte ({id})</span>
        </span>
        {multiline || currentValue.length > 80 ? (
          <textarea
            rows={4}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="w-full rounded-xl border border-stone-700 bg-[#1c1917] p-3 text-sm font-sans font-normal not-italic text-white focus:border-rose-500 focus:outline-none"
            autoFocus
          />
        ) : (
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="w-full rounded-xl border border-stone-700 bg-[#1c1917] px-3 py-2 text-sm font-sans font-normal not-italic text-white focus:border-rose-500 focus:outline-none"
            autoFocus
          />
        )}
        <span className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={handleCancel}
            className="inline-flex items-center gap-1 rounded-lg bg-stone-800 px-3 py-1.5 text-xs font-sans font-bold text-stone-300 hover:bg-stone-700"
          >
            <X className="h-3.5 w-3.5" /> Annuler
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-sans font-bold text-white hover:bg-emerald-500"
          >
            <Check className="h-3.5 w-3.5" /> Valider
          </button>
        </span>
      </span>
    );
  }

  return (
    <Component
      onClick={handleOpen}
      title="Cliquer pour modifier ce texte"
      className={`${className} group/edit relative cursor-pointer rounded-lg outline-1 outline-dashed outline-amber-400/50 hover:outline-2 hover:outline-amber-400 hover:bg-amber-500/10 transition-all px-1 -mx-1`}
    >
      {currentValue}
      <span className="ml-1.5 inline-flex items-center justify-center rounded-full bg-amber-400 p-1 text-[#0c0a09] opacity-80 group-hover/edit:opacity-100 group-hover/edit:scale-110 transition-all align-middle shadow">
        <Pencil className="h-2.5 w-2.5" />
      </span>
    </Component>
  );
}
