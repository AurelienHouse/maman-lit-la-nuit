"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAdmin } from "@/context/AdminContext";
import {
  Lock,
  Unlock,
  Save,
  Settings,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  X,
  BookPlus,
} from "lucide-react";

export function AdminFloatingBar() {
  const {
    isAdmin,
    setIsAdmin,
    adminPassword,
    setAdminPassword,
    saveToServer,
    resetAllChanges,
    hasUnsavedChanges,
    isSaving,
  } = useAdmin();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mot de passe par défaut : chloe2026 (ou admin)
    if (
      passwordInput.trim().toLowerCase() === "chloe2026" ||
      passwordInput.trim().toLowerCase() === "admin"
    ) {
      setAdminPassword(passwordInput.trim() === "admin" ? "chloe2026" : passwordInput.trim());
      setIsAdmin(true);
      setShowLoginModal(false);
      setPasswordInput("");
      setLoginError("");
      setToastMessage("✨ Mode Édition Directe activé ! Cliquez sur n'importe quel texte entouré en doré pour le modifier.");
      setTimeout(() => setToastMessage(null), 5000);
    } else {
      setLoginError("Mot de passe incorrect (Astuce : tapez chloe2026)");
    }
  };

  const handleSave = async () => {
    const res = await saveToServer();
    setToastMessage(res.message);
    setTimeout(() => setToastMessage(null), 5000);
  };

  return (
    <>
      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 max-w-md rounded-2xl border border-amber-400/50 bg-[#0c0a09]/95 px-5 py-4 text-xs font-medium text-amber-200 shadow-2xl backdrop-blur-xl flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="ml-auto text-stone-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Modal de connexion Admin */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="w-full max-w-md rounded-3xl border border-amber-500/30 bg-[#1c1917] p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-950 text-amber-400 border border-amber-500/30">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Accès Mode Admin
                  </h3>
                  <p className="text-xs text-stone-400">
                    Modifiez tous les textes et livres en direct
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowLoginModal(false)}
                className="rounded-lg p-1.5 text-stone-400 hover:bg-stone-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-300 mb-2">
                  Code secret administrateur
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Entrez le mot de passe (chloe2026)"
                  className="w-full rounded-xl border border-stone-700 bg-[#0c0a09] px-4 py-3 text-sm text-white focus:border-amber-400 focus:outline-none"
                  autoFocus
                />
                {loginError && (
                  <p className="mt-2 text-xs text-rose-400 font-medium">{loginError}</p>
                )}
              </div>

              <div className="rounded-xl bg-[#0c0a09]/80 border border-stone-800 p-3 text-[11px] text-stone-400 leading-relaxed">
                💡 <strong className="text-amber-300">Mot de passe par défaut :</strong>{" "}
                <code className="text-rose-300 font-mono">chloe2026</code>. Une fois activé, chaque texte de chaque page devient cliquable et modifiable en direct !
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-rose-700 to-rose-900 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg hover:from-rose-600 hover:to-rose-800 transition-all"
              >
                Activer l&apos;édition sur tout le site
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Barre flottante en bas de l'écran */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-wrap items-center gap-2">
        {!isAdmin ? (
          <button
            type="button"
            onClick={() => setShowLoginModal(true)}
            className="group flex items-center gap-2 rounded-full border border-stone-700/80 bg-[#1c1917]/90 px-4 py-2.5 text-xs font-semibold text-stone-300 shadow-xl backdrop-blur-md hover:border-amber-400/60 hover:text-amber-300 transition-all"
            title="Activer le mode administrateur pour modifier les textes"
          >
            <Lock className="h-3.5 w-3.5 text-amber-400" />
            <span>Mode Admin</span>
          </button>
        ) : (
          <div className="flex flex-wrap items-center gap-2 rounded-2xl border-2 border-amber-400/80 bg-[#0c0a09]/95 p-2.5 shadow-2xl backdrop-blur-xl">
            <span className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400/15 px-3 py-1.5 text-xs font-bold text-amber-300">
              <Unlock className="h-3.5 w-3.5 text-amber-400" />
              Mode Édition Actif (cliquez sur n&apos;importe quel texte)
            </span>

            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 rounded-xl bg-rose-900/70 border border-rose-500/40 px-3.5 py-2 text-xs font-bold text-white hover:bg-rose-800 transition-colors"
            >
              <BookPlus className="h-3.5 w-3.5 text-amber-300" />
              Gérer Livres & Textes (/admin)
            </Link>

            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                hasUnsavedChanges
                  ? "bg-emerald-600 text-white hover:bg-emerald-500 animate-pulse"
                  : "bg-stone-800 text-stone-200 hover:bg-stone-700"
              }`}
            >
              <Save className="h-3.5 w-3.5" />
              {isSaving ? "Sauvegarde..." : "Enregistrer tout"}
            </button>

            <button
              type="button"
              onClick={() => {
                if (confirm("Réinitialiser toutes les modifications aux textes d'origine ?")) {
                  resetAllChanges();
                  setToastMessage("Textes réinitialisés aux valeurs d'origine.");
                  setTimeout(() => setToastMessage(null), 3500);
                }
              }}
              className="inline-flex items-center gap-1 rounded-xl bg-stone-900 px-3 py-2 text-xs font-medium text-stone-400 hover:text-rose-400 border border-stone-800"
              title="Réinitialiser par défaut"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setIsAdmin(false)}
              className="inline-flex items-center gap-1 rounded-xl bg-stone-900 px-3 py-2 text-xs font-semibold text-stone-300 hover:bg-stone-800 border border-stone-700"
            >
              Quitter
            </button>
          </div>
        )}
      </div>
    </>
  );
}
