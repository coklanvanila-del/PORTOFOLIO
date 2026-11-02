"use client";

import React from "react";
import { GraduationCap, Award, MapPin, Calendar, BookOpen, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="pendidikan" className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-brand-soft-pink/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="LATAR BELAKANG AKADEMIK"
          title="Riwayat Pendidikan"
          subtitle="Pondasi keilmuan yang kuat dalam bidang rekayasa dan operasional produksi minyak dan gas bumi."
          align="center"
        />

        {/* Education Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-brand-border-pink p-8 sm:p-10 shadow-soft relative overflow-hidden">
          
          {/* Subtle Pink Ribbon on top */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-rose-pink via-brand-soft-pink to-brand-rose-pink" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Degree & Institution Details */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft-pink/60 text-brand-charcoal text-xs font-semibold uppercase tracking-wider mb-3">
                <GraduationCap className="w-3.5 h-3.5 text-brand-rose-pink" />
                <span>Diploma IV (D-IV)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal">
                {education.field}
              </h3>

              <div className="mt-2 text-lg font-semibold text-brand-rose-pink flex items-center gap-2">
                <span>{education.institution}</span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-brand-muted-gray">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-brand-rose-pink" />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-rose-pink" />
                  <span>{education.location}</span>
                </div>
              </div>

              {/* Highlights & Curricular Focus */}
              <div className="mt-6 pt-6 border-t border-brand-border-pink/60">
                <h4 className="text-xs uppercase font-bold text-brand-charcoal tracking-wider mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-brand-rose-pink" />
                  <span>Highlight Akademik & Kompetensi:</span>
                </h4>
                <ul className="space-y-2.5">
                  {education.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-brand-muted-gray">
                      <CheckCircle2 className="w-4 h-4 text-brand-rose-pink shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: GPA Showcase Card */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="w-full max-w-[260px] p-6 rounded-3xl bg-gradient-to-b from-brand-soft-pink/60 to-brand-soft-pink/20 border-2 border-brand-rose-pink/30 shadow-soft text-center relative group hover:border-brand-rose-pink transition-colors">
                
                <div className="w-14 h-14 rounded-2xl bg-white mx-auto flex items-center justify-center text-brand-rose-pink shadow-xs mb-3">
                  <Award className="w-7 h-7" />
                </div>

                <div className="text-xs font-semibold text-brand-muted-gray uppercase tracking-wider">
                  Indeks Prestasi Kumulatif
                </div>

                <div className="my-2 flex items-baseline justify-center gap-1">
                  <span className="text-4xl sm:text-5xl font-serif font-black text-brand-charcoal tracking-tight">
                    {education.gpa}
                  </span>
                  <span className="text-sm font-semibold text-brand-muted-gray">
                    / {education.maxGpa}
                  </span>
                </div>

                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white text-brand-deep-rose border border-brand-rose-pink/30 shadow-xs">
                  Sangat Memuaskan
                </div>

                <p className="mt-3 text-[11px] text-brand-muted-gray leading-snug">
                  Bukti komitmen dan konsistensi dedikasi akademik selama studi.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
