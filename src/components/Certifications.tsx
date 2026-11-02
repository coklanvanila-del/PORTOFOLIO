"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Award,
  Calendar,
  Building2,
  Sparkles,
  CheckCircle,
  FileBadge,
} from "lucide-react";
import { portfolioData, CertificationItem } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "K3 & Safety", "Engineering", "AI & Digital", "Software"];

  const filteredCerts = filter === "all"
    ? certifications
    : certifications.filter((cert) => cert.category === filter);

  const featuredCert = certifications.find((c) => c.isFeatured);
  const otherCerts = filteredCerts.filter((c) => !c.isFeatured || filter !== "all");

  return (
    <section id="sertifikasi" className="py-20 md:py-28 bg-white/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="KOMPETENSI TERVERIFIKASI"
          title="Sertifikasi & Pelatihan"
          subtitle="Kredensial resmi standar industri migas, keahlian keselamatan kerja, serta penguasaan teknologi digital."
          align="center"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 capitalize ${
                filter === cat
                  ? "bg-brand-rose-pink text-white shadow-soft"
                  : "bg-white text-brand-charcoal hover:bg-brand-soft-pink/40 border border-brand-border-pink"
              }`}
            >
              {cat === "all" ? "Semua Sertifikasi" : cat}
            </button>
          ))}
        </div>

        {/* Featured Card for K3 Operator Migas (Shown if 'all' or 'K3 & Safety' is selected) */}
        {(filter === "all" || filter === "K3 & Safety") && featuredCert && (
          <div className="mb-10">
            <div className="relative p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-brand-soft-pink/60 via-white to-brand-soft-pink/40 border-2 border-brand-rose-pink shadow-soft-lg overflow-hidden group">
              
              {/* Decorative background glow badge */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-rose-pink/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-brand-rose-pink text-white flex items-center justify-center shrink-0 shadow-soft">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-brand-deep-rose text-white uppercase tracking-wider mb-2">
                      <Sparkles className="w-3 h-3" />
                      <span>Sertifikasi Utama Kompetensi</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal">
                      {featuredCert.title}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-brand-rose-pink flex items-center gap-2 mt-1">
                      <Building2 className="w-4 h-4 shrink-0" />
                      <span>{featuredCert.issuer}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 bg-white/80 p-4 rounded-2xl border border-brand-border-pink/70">
                  <div className="flex items-center gap-1.5 text-xs text-brand-charcoal font-semibold">
                    <Calendar className="w-4 h-4 text-brand-rose-pink" />
                    <span>{featuredCert.validity}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3" />
                    <span>Aktif & Terverifikasi BNSP</span>
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-brand-rose-pink/20 text-xs sm:text-sm text-brand-muted-gray leading-relaxed">
                Standar kompetensi resmi Badan Nasional Sertifikasi Profesi (BNSP) untuk Operator Keselamatan dan Kesehatan Kerja pada operasi fasilitas hulu minyak dan gas bumi.
              </div>
            </div>
          </div>
        )}

        {/* Grid for Other Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(filter === "all" ? otherCerts : filteredCerts).map((cert: CertificationItem) => {
            // If already shown in featured and filter is 'all', skip duplicating
            if (filter === "all" && cert.isFeatured) return null;

            return (
              <div
                key={cert.id}
                className="bg-white p-6 rounded-2xl border border-brand-border-pink hover:border-brand-rose-pink/80 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-brand-soft-pink/40 text-brand-deep-rose border border-brand-border-pink/60">
                      <FileBadge className="w-3 h-3 text-brand-rose-pink" />
                      <span>{cert.category}</span>
                    </span>

                    <span className="text-[11px] text-brand-muted-gray font-medium flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-brand-rose-pink" />
                      <span>{cert.period}</span>
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-serif text-brand-charcoal group-hover:text-brand-rose-pink transition-colors leading-snug">
                    {cert.title}
                  </h4>

                  <p className="mt-2 text-xs font-medium text-brand-muted-gray flex items-start gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-brand-rose-pink shrink-0 mt-0.5" />
                    <span>{cert.issuer}</span>
                  </p>
                </div>

                {cert.validity && (
                  <div className="mt-4 pt-3 border-t border-brand-border-pink/40 text-[11px] text-brand-rose-pink font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>{cert.validity}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
