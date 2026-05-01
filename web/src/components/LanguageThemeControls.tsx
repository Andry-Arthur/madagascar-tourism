"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  detectBrowserLanguage,
  supportedLanguages,
  type Language,
  t,
} from "@/lib/i18n";
import { IconGlobe, IconMoon, IconSun } from "@/components/icons";

type Props = {
  onLanguageChange: (lang: Language) => void;
  onAutoTranslateChange: (enabled: boolean) => void;
  autoTranslate: boolean;
  language: Language;
};

const STORAGE_LANG = "mth_lang";
const STORAGE_AUTO = "mth_auto_translate";

export function readInitialLanguage(): {
  language: Language;
  autoTranslate: boolean;
} {
  if (typeof window === "undefined") return { language: "en", autoTranslate: true };

  const autoRaw = window.localStorage.getItem(STORAGE_AUTO);
  const autoTranslate = autoRaw ? autoRaw === "1" : true;

  const langRaw = window.localStorage.getItem(STORAGE_LANG) as Language | null;
  const language = langRaw ?? detectBrowserLanguage();

  return { language, autoTranslate };
}

export function LanguageThemeControls(props: Props) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentLabel = useMemo(() => {
    const found = supportedLanguages.find((l) => l.id === props.language);
    return found?.label ?? props.language;
  }, [props.language]);

  function setAutoTranslate(enabled: boolean) {
    props.onAutoTranslateChange(enabled);
    window.localStorage.setItem(STORAGE_AUTO, enabled ? "1" : "0");
    if (enabled) {
      const detected = detectBrowserLanguage();
      props.onLanguageChange(detected);
    }
  }

  function setLanguage(lang: Language) {
    props.onLanguageChange(lang);
    props.onAutoTranslateChange(false);
    window.localStorage.setItem(STORAGE_LANG, lang);
    window.localStorage.setItem(STORAGE_AUTO, "0");
  }

  const themeText = mounted
    ? resolvedTheme === "dark"
      ? t(props.language, "toggle_light")
      : t(props.language, "toggle_dark")
    : t(props.language, "toggle_dark");

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-border bg-white px-3 text-xs font-semibold text-foreground hover:bg-black/5"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {mounted ? (
          resolvedTheme === "dark" ? (
            <IconSun className="h-4 w-4" />
          ) : (
            <IconMoon className="h-4 w-4" />
          )
        ) : (
          <IconMoon className="h-4 w-4" />
        )}
        {themeText}
      </button>

      <label className="hidden items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-black/5 md:flex">
        <span className="text-muted">{t(props.language, "toggle_auto_translate")}</span>
        <input
          type="checkbox"
          checked={props.autoTranslate}
          onChange={(e) => setAutoTranslate(e.target.checked)}
        />
      </label>

      <details className="relative">
        <summary className="list-none cursor-pointer inline-flex h-9 items-center justify-center gap-2 rounded-full border border-border bg-white px-3 text-xs font-semibold text-foreground hover:bg-black/5">
          <IconGlobe className="h-4 w-4" />
          {t(props.language, "toggle_language")}: {currentLabel}
        </summary>
        <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
          <button
            type="button"
            className="flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-black/5"
            onClick={() => setAutoTranslate(true)}
          >
            <span>{t(props.language, "toggle_auto_translate")}</span>
            <span className="text-muted">{props.autoTranslate ? "On" : ""}</span>
          </button>
          <div className="h-px bg-[color:var(--border)]" />
          {supportedLanguages.map((l) => (
            <button
              key={l.id}
              type="button"
              className="flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-black/5"
              onClick={() => setLanguage(l.id)}
            >
              <span>{l.label}</span>
              <span className="text-muted">{props.language === l.id ? "✓" : ""}</span>
            </button>
          ))}
        </div>
      </details>
    </div>
  );
}

