import { useLang } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="border-t border-border/60 px-6 py-10 md:px-10">
      <div className="container-tight flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Aya Shaaban Gameel. {t.footer.rights}</p>
        <p>{t.footer.crafted}</p>
      </div>
    </footer>
  );
};
