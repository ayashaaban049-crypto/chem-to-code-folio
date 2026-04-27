interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({ eyebrow, title, description, align = "center" }: SectionHeadingProps) => (
  <div className={`mb-14 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
    <span className="chip">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {eyebrow}
    </span>
    <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
      <span className="glow-text">{title}</span>
    </h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
    )}
  </div>
);
