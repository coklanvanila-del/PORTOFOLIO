"use client";

import React from "react";
import { Languages as LanguagesIcon, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const Languages: React.FC = () => {
  const { languages } = portfolioData;

  return (
    <section className="py-12 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-brand-border-pink/80 p-6 sm:p-8 shadow-soft">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-brand-border-pink/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-soft-pink/60 text-brand-rose-pink flex items-center justify-center">
                <LanguagesIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-brand-charcoal">
                  Kemampuan Bahasa
                </h3>
                <p className="text-xs text-brand-muted-gray">
                  Kemampuan komunikasi lisan dan tertulis untuk lingkungan profesional.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-brand-soft-pink/20 border border-brand-rose-pink/20 flex items-center justify-between"
              >
                <div>
                  <h4 className="text-base font-bold text-brand-charcoal flex items-center gap-2">
                    <span>{lang.name}</span>
                  </h4>
                  <p className="text-xs text-brand-muted-gray mt-0.5">
                    {lang.proficiency}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-brand-deep-rose border border-brand-rose-pink/30 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-rose-pink" />
                  <span>{lang.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
