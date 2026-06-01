import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, type Lang, type Dict } from "@/i18n/translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<Ctx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const stored = localStorage.getItem("lang");
    return stored === "ar" ? "ar" : "en";
  });

  const dir = translations[lang].dir as "ltr" | "rtl";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem("lang", lang);
  }, [lang, dir]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((p) => (p === "en" ? "ar" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: translations[lang], dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
