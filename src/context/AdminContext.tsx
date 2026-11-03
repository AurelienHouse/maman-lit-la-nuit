"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { BOOK_REVIEWS, BookReview, MAMA_PROFILE } from "@/data/books";
import initialSiteContent from "@/data/site-content.json";

export interface SiteContentData {
  overrides: Record<string, string>;
  customBooks: BookReview[] | null;
  mamaProfile: typeof MAMA_PROFILE | null;
}

interface AdminContextValue {
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  adminPassword: string;
  setAdminPassword: (val: string) => void;
  overrides: Record<string, string>;
  getText: (key: string, defaultText: string) => string;
  updateText: (key: string, newValue: string) => void;
  books: BookReview[];
  updateBook: (updatedBook: BookReview) => void;
  addBook: (newBook: BookReview) => void;
  deleteBook: (slug: string) => void;
  mamaProfile: typeof MAMA_PROFILE;
  updateMamaProfile: (profile: typeof MAMA_PROFILE) => void;
  saveToServer: () => Promise<{ ok: boolean; message: string }>;
  resetAllChanges: () => void;
  hasUnsavedChanges: boolean;
  isSaving: boolean;
}

const STORAGE_KEY = "coeur_et_lit_site_content_v1";
const ADMIN_AUTH_KEY = "coeur_et_lit_admin_auth_v1";

const AdminContext = createContext<AdminContextValue | null>(null);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdminState] = useState(false);
  const [adminPassword, setAdminPassword] = useState("chloe2026");
  const [overrides, setOverrides] = useState<Record<string, string>>(
    (initialSiteContent.overrides as Record<string, string>) || {}
  );
  const [customBooks, setCustomBooks] = useState<BookReview[] | null>(
    (initialSiteContent.customBooks as BookReview[] | null) || null
  );
  const [customMamaProfile, setCustomMamaProfile] = useState<typeof MAMA_PROFILE | null>(
    (initialSiteContent.mamaProfile as typeof MAMA_PROFILE | null) || null
  );
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Charger depuis l'API + LocalStorage au démarrage
  useEffect(() => {
    const savedAuth = localStorage.getItem(ADMIN_AUTH_KEY);
    if (savedAuth === "true") {
      setIsAdminState(true);
    }

    const savedLocal = localStorage.getItem(STORAGE_KEY);
    if (savedLocal) {
      try {
        const parsed: SiteContentData = JSON.parse(savedLocal);
        if (parsed.overrides) setOverrides(parsed.overrides);
        if (parsed.customBooks) setCustomBooks(parsed.customBooks);
        if (parsed.mamaProfile) setCustomMamaProfile(parsed.mamaProfile);
      } catch {
        // ignore invalid local storage
      }
    }

    // Récupérer aussi la version serveur / GitHub si disponible
    fetch("/api/content")
      .then((r) => r.json())
      .then((serverData: SiteContentData) => {
        if (!savedLocal && serverData) {
          if (serverData.overrides && Object.keys(serverData.overrides).length > 0) {
            setOverrides(serverData.overrides);
          }
          if (serverData.customBooks) {
            setCustomBooks(serverData.customBooks);
          }
          if (serverData.mamaProfile) {
            setCustomMamaProfile(serverData.mamaProfile);
          }
        }
      })
      .catch(() => {});
  }, []);

  const persistToLocal = (
    nextOverrides: Record<string, string>,
    nextBooks: BookReview[] | null,
    nextMama: typeof MAMA_PROFILE | null
  ) => {
    const payload: SiteContentData = {
      overrides: nextOverrides,
      customBooks: nextBooks,
      mamaProfile: nextMama,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    setHasUnsavedChanges(true);
  };

  const setIsAdmin = (val: boolean) => {
    setIsAdminState(val);
    if (val) {
      localStorage.setItem(ADMIN_AUTH_KEY, "true");
    } else {
      localStorage.removeItem(ADMIN_AUTH_KEY);
    }
  };

  const getText = (key: string, defaultText: string): string => {
    return overrides[key] !== undefined ? overrides[key] : defaultText;
  };

  const updateText = (key: string, newValue: string) => {
    setOverrides((prev) => {
      const next = { ...prev, [key]: newValue };
      persistToLocal(next, customBooks, customMamaProfile);
      return next;
    });
  };

  const books = customBooks ?? BOOK_REVIEWS;
  const mamaProfile = customMamaProfile ?? MAMA_PROFILE;

  const updateBook = (updatedBook: BookReview) => {
    const currentList = customBooks ?? [...BOOK_REVIEWS];
    const nextList = currentList.map((b) =>
      b.slug === updatedBook.slug ? updatedBook : b
    );
    setCustomBooks(nextList);
    persistToLocal(overrides, nextList, customMamaProfile);
  };

  const addBook = (newBook: BookReview) => {
    const currentList = customBooks ?? [...BOOK_REVIEWS];
    const nextList = [newBook, ...currentList];
    setCustomBooks(nextList);
    persistToLocal(overrides, nextList, customMamaProfile);
  };

  const deleteBook = (slug: string) => {
    const currentList = customBooks ?? [...BOOK_REVIEWS];
    const nextList = currentList.filter((b) => b.slug !== slug);
    setCustomBooks(nextList);
    persistToLocal(overrides, nextList, customMamaProfile);
  };

  const updateMamaProfile = (profile: typeof MAMA_PROFILE) => {
    setCustomMamaProfile(profile);
    persistToLocal(overrides, customBooks, profile);
  };

  const saveToServer = async (): Promise<{ ok: boolean; message: string }> => {
    setIsSaving(true);
    try {
      const payload: SiteContentData = {
        overrides,
        customBooks,
        mamaProfile: customMamaProfile,
      };
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: adminPassword,
          content: payload,
        }),
      });
      const data = await res.json();
      setIsSaving(false);
      if (!res.ok) {
        return { ok: false, message: data.error || "Erreur lors de la sauvegarde" };
      }
      setHasUnsavedChanges(false);
      return { ok: true, message: data.message || "Sauvegardé avec succès !" };
    } catch {
      setIsSaving(false);
      return {
        ok: true,
        message: "Sauvegardé localement dans votre navigateur !",
      };
    }
  };

  const resetAllChanges = () => {
    localStorage.removeItem(STORAGE_KEY);
    setOverrides({});
    setCustomBooks(null);
    setCustomMamaProfile(null);
    setHasUnsavedChanges(false);
  };

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        adminPassword,
        setAdminPassword,
        overrides,
        getText,
        updateText,
        books,
        updateBook,
        addBook,
        deleteBook,
        mamaProfile,
        updateMamaProfile,
        saveToServer,
        resetAllChanges,
        hasUnsavedChanges,
        isSaving,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return ctx;
}
