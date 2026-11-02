"use client";

import React from "react";
import {
  Flame,
  Sparkles,
  Camera,
  Calendar,
  CheckCircle,
  ExternalLink,
  Tag,
  Building,
} from "lucide-react";
import { portfolioData, ExperienceItem } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";

const experienceIcons = {
  oil: <Flame className="w-5 h-5 text-brand-deep-rose" />,
  creative: <Sparkles className="w-5 h-5 text-brand-rose-pink" />,
  camera: <Camera className="w-5 h-5 text-brand-dusty-pink" />,
};

const categoryBadgeColors = {
  oil: "bg-amber-50 text-amber-800 border-amber-200/70",
  creative: "bg-pink-50 text-brand-deep-rose border-brand-rose-pink/30",
  camera: "bg-purple-50 text-purple-800 border-purple-200/70",
};

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="pengalaman" className="py-20 md:py-28 bg-white/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="JEJAK LANGKAH PROFESIONAL"
          title="Pengalaman Kerja & Magang"
          subtitle="Kombinasi implementasi teknis di industri hulu migas serta eksplorasi media kreatif digital."
          align="center"
        />

        {/* Timeline Container */}
        <div className="relative mt-12">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-rose-pink via-brand-soft-pink to-transparent" />

          <div className="space-y-10 md:space-y-16">
            {experiences.map((exp: ExperienceItem, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Point (Center on desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-brand-rose-pink shadow-soft items-center justify-center z-10">
                    <span className="w-3.5 h-3.5 rounded-full bg-brand-rose-pink" />
                  </div>

                  {/* Spacer for other side on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Content (Full width on mobile, half on desktop) */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="group bg-white p-6 sm:p-7 rounded-3xl border border-brand-border-pink/80 hover:border-brand-rose-pink shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-1">
                      
                      {/* Top Meta Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                            categoryBadgeColors[exp.iconType]
                          }`}
                        >
                          <Tag className="w-3 h-3" />
                          <span>{exp.category}</span>
                        </span>

                        <span className="inline-flex items-center gap-1.5 text-xs text-brand-muted-gray font-medium bg-brand-soft-pink/30 px-3 py-1 rounded-full">
                          <Calendar className="w-3 h-3 text-brand-rose-pink" />
                          <span>{exp.period}</span>
                        </span>
                      </div>

                      {/* Role & Company */}
                      <div className="flex items-start gap-3.5 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-soft-pink/50 flex items-center justify-center shrink-0 border border-brand-rose-pink/20">
                          {experienceIcons[exp.iconType]}
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold font-serif text-brand-charcoal group-hover:text-brand-rose-pink transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-semibold text-brand-rose-pink flex items-center gap-1.5 mt-0.5">
                            <Building className="w-3.5 h-3.5 shrink-0" />
                            <span>{exp.company}</span>
                          </p>
                        </div>
                      </div>

                      {/* Optional Program Note */}
                      {exp.program && (
                        <div className="mb-4 px-3 py-1.5 rounded-xl bg-brand-soft-pink/20 text-[11px] text-brand-charcoal border border-brand-border-pink/50 font-medium">
                          <span className="font-semibold text-brand-rose-pink">Program: </span>
                          {exp.program}
                        </div>
                      )}

                      {/* Bullet Descriptions */}
                      <ul className="space-y-2 mt-4 text-sm text-brand-muted-gray">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-brand-rose-pink shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Instagram link for freelance */}
                      {exp.id === "freelance-creative" && (
                        <div className="mt-4 pt-3 border-t border-brand-border-pink/40 flex items-center justify-between text-xs">
                          <span className="text-brand-muted-gray">Galeri Portofolio Foto:</span>
                          <a
                            href="https://instagram.com/nilensco"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-brand-deep-rose font-semibold hover:underline"
                          >
                            <span>@nilensco di Instagram</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
