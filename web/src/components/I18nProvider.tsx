"use client";

import { createContext, useContext } from "react";
import type { Language, TranslationKey } from "@/lib/i18n";
import { t as translate } from "@/lib/i18n";

type I18nContextValue = {
  language: Language;
  t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  language,
  children,
}: {
  language: Language;
  children: React.ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ language, t: (key) => translate(language, key) }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

