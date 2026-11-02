"use client";

import React from "react";
import {
  Factory,
  ShieldCheck,
  Users,
  Palette,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";

const highlightIcons: Record<string, React.ReactNode> = {
  Factory: <Factory className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
};

export const About: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section id="tentang-saya" className="py-20 md:py-28 relative">
      {/* Decorative subtle backdrop elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-soft-pink/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="TENTANG SAYA"
          title={about.title}
          subtitle={about.subheading}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Bio Content */}
          <div className="lg:col-span-7 bg-white/80 backdrop-blur-md p-6 sm:p-9 rounded-3xl border border-brand-border-pink/70 shadow-soft">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-6 bg-brand-rose-pink rounded-full" />
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal">
                Dedikasi Teknik & Sentuhan Kreatif
              </h3>
            </div>

            <div className="space-y-4 text-brand-muted-gray text-base leading-relaxed">
              {about.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-justify sm:text-left">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Personal Attributes */}
            <div className="mt-8 pt-6 border-t border-brand-border-pink/50 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-2xl bg-brand-soft-pink/30 border border-brand-rose-pink/15 text-center">
                <span className="text-xs font-semibold text-brand-charcoal block">Adaptif</span>
                <span className="text-[10px] text-brand-muted-gray">Cepat belajar</span>
              </div>
              <div className="p-3 rounded-2xl bg-brand-soft-pink/30 border border-brand-rose-pink/15 text-center">
                <span className="text-xs font-semibold text-brand-charcoal block">Kreatif</span>
                <span className="text-[10px] text-brand-muted-gray">Inovatif & Solutif</span>
              </div>
              <div className="p-3 rounded-2xl bg-brand-soft-pink/30 border border-brand-rose-pink/15 text-center">
                <span className="text-xs font-semibold text-brand-charcoal block">Komunikatif</span>
                <span className="text-[10px] text-brand-muted-gray">Kolaboratif</span>
              </div>
              <div className="p-3 rounded-2xl bg-brand-soft-pink/30 border border-brand-rose-pink/15 text-center">
                <span className="text-xs font-semibold text-brand-charcoal block">Termotivasi</span>
                <span className="text-[10px] text-brand-muted-gray">Berorientasi hasil</span>
              </div>
            </div>
          </div>

          {/* Highlights Cards (Right Column) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="mb-2">
              <h3 className="font-serif text-xl font-bold text-brand-charcoal flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-rose-pink" />
                <span>Pilar Utama Kompetensi</span>
              </h3>
              <p className="text-xs text-brand-muted-gray mt-1">
                Kombinasi keunggulan rekayasa proses migas dan penguasaan komunikasi visual modern.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {about.highlights.map((item, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-2xl bg-white/90 border border-brand-border-pink/80 hover:border-brand-rose-pink hover:shadow-soft transition-all duration-200 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-soft-pink/70 text-brand-deep-rose flex items-center justify-center shrink-0 group-hover:bg-brand-rose-pink group-hover:text-white transition-colors duration-200">
                    {highlightIcons[item.icon] || <CheckCircle2 className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-brand-charcoal group-hover:text-brand-rose-pink transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-brand-muted-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 p-4 rounded-2xl bg-gradient-to-r from-brand-soft-pink/50 to-brand-soft-pink/20 border border-brand-rose-pink/20 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-brand-charcoal">Tertarik berkolaborasi?</p>
                <p className="text-[11px] text-brand-muted-gray">Lihat pengalaman dan proyek saya di bawah.</p>
              </div>
              <a
                href="#pengalaman"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-deep-rose hover:text-brand-charcoal transition-colors"
              >
                <span>Lihat Pengalaman</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
