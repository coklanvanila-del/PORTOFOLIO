"use client";

import React from "react";
import {
  Flame,
  Laptop,
  Sparkles,
  CheckCircle,
  Wrench,
  Cpu,
  UserCheck,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="keahlian" className="py-20 md:py-28 bg-white/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="KEAHLIAN & KAPABILITAS"
          title="Keahlian dan Kompetensi"
          subtitle="Pemetaan komprehensif keahlian teknis industri hulu migas, perangkat lunak produktivitas, serta karakter interpersonal."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Kompetensi Teknis */}
          <div className="bg-white p-7 sm:p-8 rounded-3xl border border-brand-border-pink/90 hover:border-brand-rose-pink shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5 border border-amber-200/60 group-hover:bg-amber-100 transition-colors">
                <Flame className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-bold text-amber-800 tracking-wider uppercase mb-1 block">
                Pilar Utama (Primary)
              </span>

              <h3 className="text-xl font-bold font-serif text-brand-charcoal mb-2">
                {skills.technical.title}
              </h3>

              <p className="text-xs text-brand-muted-gray mb-6 leading-relaxed">
                {skills.technical.description}
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2.5">
                {skills.technical.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-amber-50/70 text-amber-950 border border-amber-200/50 hover:bg-amber-100 transition-colors"
                  >
                    <CheckCircle className="w-3 h-3 text-amber-600 shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-border-pink/40 text-[11px] text-brand-muted-gray">
              Penerapan standar keselamatan hulu migas dan operasi lapangan.
            </div>
          </div>

          {/* 2. Software & Keahlian Digital */}
          <div className="bg-white p-7 sm:p-8 rounded-3xl border border-brand-border-pink/90 hover:border-brand-rose-pink shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-50 text-brand-deep-rose flex items-center justify-center mb-5 border border-brand-rose-pink/30 group-hover:bg-pink-100 transition-colors">
                <Laptop className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-bold text-brand-deep-rose tracking-wider uppercase mb-1 block">
                Digital & Engineering Tools
              </span>

              <h3 className="text-xl font-bold font-serif text-brand-charcoal mb-2">
                {skills.software.title}
              </h3>

              <p className="text-xs text-brand-muted-gray mb-6 leading-relaxed">
                {skills.software.description}
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2.5">
                {skills.software.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-brand-soft-pink/40 text-brand-charcoal border border-brand-rose-pink/20 hover:bg-brand-soft-pink/70 transition-colors"
                  >
                    <CheckCircle className="w-3 h-3 text-brand-rose-pink shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-border-pink/40 text-[11px] text-brand-muted-gray">
              Keahlian perangkat pemodelan sumur, desain kreatif & tools AI.
            </div>
          </div>

          {/* 3. Kemampuan Personal */}
          <div className="bg-white p-7 sm:p-8 rounded-3xl border border-brand-border-pink/90 hover:border-brand-rose-pink shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center mb-5 border border-purple-200/60 group-hover:bg-purple-100 transition-colors">
                <Sparkles className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-bold text-purple-800 tracking-wider uppercase mb-1 block">
                Soft Skills & Karakter
              </span>

              <h3 className="text-xl font-bold font-serif text-brand-charcoal mb-2">
                {skills.personal.title}
              </h3>

              <p className="text-xs text-brand-muted-gray mb-6 leading-relaxed">
                {skills.personal.description}
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2.5">
                {skills.personal.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-purple-50/70 text-purple-950 border border-purple-200/50 hover:bg-purple-100 transition-colors"
                  >
                    <CheckCircle className="w-3 h-3 text-purple-600 shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-border-pink/40 text-[11px] text-brand-muted-gray">
              Kemampuan komunikasi adaptif, analisis kritis dan kerja sama tim.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
