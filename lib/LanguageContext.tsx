"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { translations } from "./translations";
import type { Lang, Dict } from "./translations";

type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const LanguageContext = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LangCtx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
