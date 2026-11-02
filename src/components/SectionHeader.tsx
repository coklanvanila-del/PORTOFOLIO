import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
}) => {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-soft-pink/60 border border-brand-rose-pink/30 text-brand-charcoal text-xs font-semibold tracking-wider uppercase mb-3 ${isCenter ? "mx-auto" : ""}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-rose-pink animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-charcoal tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-brand-muted-gray text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-brand-rose-pink to-brand-soft-pink rounded-full ${isCenter ? "mx-auto" : ""}`} />
    </div>
  );
};
