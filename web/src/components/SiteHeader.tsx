"use client";

import Link from "next/link";
import { LanguageThemeControls, readInitialLanguage } from "@/components/LanguageThemeControls";
import { useEffect, useState } from "react";
import { I18nProvider, useI18n } from "@/components/I18nProvider";
import type { Language } from "@/lib/i18n";

function HeaderInner({
  language,
  autoTranslate,
  setLanguage,
  setAutoTranslate,
}: {
  language: Language;
  autoTranslate: boolean;
  setLanguage: (l: Language) => void;
  setAutoTranslate: (v: boolean) => void;
}) {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-5 py-4 sm:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            Madagascar Tourism Hub
          </Link>
          <div className="hidden sm:block">
            <LanguageThemeControls
              language={language}
              autoTranslate={autoTranslate}
              onLanguageChange={setLanguage}
              onAutoTranslateChange={setAutoTranslate}
            />
          </div>
          <nav className="hidden items-center gap-6 text-sm text-muted sm:flex">
            <a className="hover:text-foreground" href="#visa">
              {t("nav_visa")}
            </a>
            <a className="hover:text-foreground" href="#guided">
              {t("nav_guided")}
            </a>
            <a className="hover:text-foreground" href="#stay">
              {t("nav_stay")}
            </a>
            <a className="hover:text-foreground" href="#contact">
              {t("nav_contact")}
            </a>
          </nav>
        </div>

        <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 text-xs font-semibold text-muted sm:hidden">
          <div className="flex items-center gap-2 pr-2">
            <LanguageThemeControls
              language={language}
              autoTranslate={autoTranslate}
              onLanguageChange={setLanguage}
              onAutoTranslateChange={setAutoTranslate}
            />
          </div>
          <a
            className="whitespace-nowrap rounded-full border border-border bg-white px-3 py-2 hover:bg-black/5"
            href="#visa"
          >
            {t("nav_visa")}
          </a>
          <a
            className="whitespace-nowrap rounded-full border border-border bg-white px-3 py-2 hover:bg-black/5"
            href="#guided"
          >
            {t("nav_guided")}
          </a>
          <a
            className="whitespace-nowrap rounded-full border border-border bg-white px-3 py-2 hover:bg-black/5"
            href="#stay"
          >
            {t("nav_stay")}
          </a>
          <a
            className="whitespace-nowrap rounded-full border border-border bg-white px-3 py-2 hover:bg-black/5"
            href="#contact"
          >
            {t("nav_contact")}
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteHeader() {
  const [language, setLanguage] = useState<Language>("en");
  const [autoTranslate, setAutoTranslate] = useState(true);

  useEffect(() => {
    const initial = readInitialLanguage();
    setLanguage(initial.language);
    setAutoTranslate(initial.autoTranslate);
  }, []);

  return (
    <I18nProvider language={language}>
      <HeaderInner
        language={language}
        autoTranslate={autoTranslate}
        setLanguage={setLanguage}
        setAutoTranslate={setAutoTranslate}
      />
    </I18nProvider>
  );
}

