"use client";

import React from "react";
import {
  Users,
  Compass,
  Crown,
  FileText,
  Calendar,
  CheckCircle2,
  Building,
  HeartHandshake,
} from "lucide-react";
import { portfolioData, OrganizationItem } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";

const roleIcons: Record<string, React.ReactNode> = {
  "org-pendamping": <Compass className="w-5 h-5 text-brand-rose-pink" />,
  "org-mpo": <Crown className="w-5 h-5 text-amber-700" />,
  "org-kadep": <Users className="w-5 h-5 text-brand-deep-rose" />,
  "org-sekretaris": <FileText className="w-5 h-5 text-purple-700" />,
};

const rolePills: Record<string, { label: string; style: string }> = {
  "org-pendamping": {
    label: "Advisory & Mentorship",
    style: "bg-pink-50 text-brand-deep-rose border-brand-rose-pink/30",
  },
  "org-mpo": {
    label: "Strategic Governance",
    style: "bg-amber-50 text-amber-800 border-amber-200",
  },
  "org-kadep": {
    label: "Department Leadership",
    style: "bg-rose-50 text-brand-deep-rose border-rose-200",
  },
  "org-sekretaris": {
    label: "Administration & Documentation",
    style: "bg-purple-50 text-purple-800 border-purple-200",
  },
};

export const Organizations: React.FC = () => {
  const { organizations } = portfolioData;

  return (
    <section id="organisasi" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="KEPEMIMPINAN & DEDIKASI"
          title="Pengalaman Organisasi"
          subtitle="Empat tahun rekam jejak kepemimpinan, manajemen tim, tata kelola organisasi, dan strategi komunikasi visual."
          align="center"
        />

        {/* Leadership Pillar Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-2xl bg-white border border-brand-border-pink text-center shadow-xs">
            <span className="text-xl font-bold font-serif text-brand-rose-pink block mb-1">
              4+ Tahun
            </span>
            <span className="text-xs text-brand-muted-gray">Dedikasi Kontinu</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-brand-border-pink text-center shadow-xs">
            <span className="text-xl font-bold font-serif text-brand-rose-pink block mb-1">
              Leadership
            </span>
            <span className="text-xs text-brand-muted-gray">Ketua & MPO</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-brand-border-pink text-center shadow-xs">
            <span className="text-xl font-bold font-serif text-brand-rose-pink block mb-1">
              Mentorship
            </span>
            <span className="text-xs text-brand-muted-gray">Pendamping Desain</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-brand-border-pink text-center shadow-xs">
            <span className="text-xl font-bold font-serif text-brand-rose-pink block mb-1">
              Syiar Media
            </span>
            <span className="text-xs text-brand-muted-gray">Publikasi & Desain</span>
          </div>
        </div>

        {/* Organization Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {organizations.map((org: OrganizationItem) => {
            const pill = rolePills[org.id];

            return (
              <div
                key={org.id}
                className="bg-white/95 p-7 sm:p-8 rounded-3xl border border-brand-border-pink/80 hover:border-brand-rose-pink shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    {pill && (
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold border ${pill.style}`}
                      >
                        {pill.label}
                      </span>
                    )}

                    <span className="inline-flex items-center gap-1.5 text-xs text-brand-muted-gray font-medium bg-brand-soft-pink/30 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3 text-brand-rose-pink" />
                      <span>{org.period}</span>
                    </span>
                  </div>

                  {/* Role & Org */}
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-brand-soft-pink/60 flex items-center justify-center shrink-0 border border-brand-rose-pink/20">
                      {roleIcons[org.id] || <Users className="w-5 h-5 text-brand-rose-pink" />}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-serif text-brand-charcoal group-hover:text-brand-rose-pink transition-colors">
                        {org.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-brand-muted-gray flex items-center gap-1.5 mt-0.5">
                        <Building className="w-3.5 h-3.5 text-brand-rose-pink shrink-0" />
                        <span>{org.organization}</span>
                      </p>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mt-4 pt-4 border-t border-brand-border-pink/50">
                    <h4 className="text-xs uppercase font-bold text-brand-charcoal tracking-wider mb-2.5">
                      Tanggung Jawab Utama:
                    </h4>
                    <ul className="space-y-2">
                      {org.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-brand-muted-gray">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-rose-pink shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-3 text-[11px] text-brand-muted-gray/80 italic border-t border-brand-border-pink/30 flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-brand-rose-pink" />
                  <span>Membangun kolaborasi, sinergi komunikasi, dan kepemimpinan beretika.</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
