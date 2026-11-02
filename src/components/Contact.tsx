"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  Send,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeader } from "./SectionHeader";

export const Contact: React.FC = () => {
  const { contact } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="kontak" className="py-20 md:py-28 relative">
      {/* Decorative background blur */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-brand-soft-pink/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="HUBUNGI SAYA"
          title={contact.title}
          subtitle={contact.subtitle}
          align="center"
        />

        <div className="bg-white/95 rounded-3xl border border-brand-border-pink p-8 sm:p-12 shadow-soft-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info: Contact channels */}
            <div className="lg:col-span-7 space-y-5">
              <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-4">
                Informasi Kontak Langsung
              </h3>
              <p className="text-sm text-brand-muted-gray mb-6 leading-relaxed">
                Silakan hubungi saya melalui jalur komunikasi berikut untuk diskusi peluang kerja, proyek teknis migas, perancangan desain, atau pertanyaan lainnya.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-brand-soft-pink/20 border border-brand-rose-pink/20 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-white text-brand-rose-pink flex items-center justify-center shrink-0 shadow-xs border border-brand-border-pink/50">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold text-brand-muted-gray uppercase block">
                      Email
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm sm:text-base font-bold text-brand-charcoal hover:text-brand-rose-pink transition-colors truncate block"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-xl bg-white hover:bg-brand-soft-pink text-brand-charcoal hover:text-brand-deep-rose transition-colors border border-brand-border-pink"
                    title="Salin Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`mailto:${contact.email}`}
                    className="p-2 rounded-xl bg-brand-rose-pink text-white hover:bg-brand-deep-rose transition-colors"
                    title="Buka Aplikasi Email"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-brand-soft-pink/20 border border-brand-rose-pink/20 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-white text-brand-rose-pink flex items-center justify-center shrink-0 shadow-xs border border-brand-border-pink/50">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold text-brand-muted-gray uppercase block">
                      Telepon / WhatsApp
                    </span>
                    <a
                      href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-sm sm:text-base font-bold text-brand-charcoal hover:text-brand-rose-pink transition-colors truncate block"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyPhone}
                  className="p-2 rounded-xl bg-white hover:bg-brand-soft-pink text-brand-charcoal hover:text-brand-deep-rose transition-colors border border-brand-border-pink"
                  title="Salin Nomor Telepon"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn & Location row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-brand-border-pink flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-soft-pink/50 text-brand-rose-pink flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-brand-muted-gray uppercase block">
                      Lokasi
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-brand-charcoal">
                      {contact.location}
                    </span>
                  </div>
                </div>

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white border border-brand-border-pink hover:border-brand-rose-pink transition-colors flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-brand-soft-pink/50 text-brand-rose-pink flex items-center justify-center shrink-0 group-hover:bg-brand-rose-pink group-hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold text-brand-muted-gray uppercase block">
                        LinkedIn
                      </span>
                      <span className="text-xs font-bold text-brand-charcoal group-hover:text-brand-rose-pink transition-colors truncate block">
                        {contact.linkedinDisplay}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-brand-muted-gray group-hover:text-brand-rose-pink shrink-0" />
                </a>
              </div>
            </div>

            {/* Right Action Box: Direct CTAs */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-soft-pink/50 to-brand-soft-pink/10 p-8 rounded-3xl border border-brand-rose-pink/30 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-white text-brand-rose-pink flex items-center justify-center shadow-soft mb-5">
                <Send className="w-7 h-7" />
              </div>

              <h4 className="font-serif text-xl font-bold text-brand-charcoal mb-2">
                Mulai Percakapan
              </h4>

              <p className="text-xs sm:text-sm text-brand-muted-gray mb-8 leading-relaxed">
                Klik tombol di bawah untuk langsung membuka email Anda atau mengakses Curriculum Vitae terbaru saya.
              </p>

              <div className="w-full space-y-3.5">
                <a
                  href={`mailto:${contact.email}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold bg-brand-rose-pink text-white hover:bg-brand-deep-rose transition-all duration-200 shadow-soft hover:shadow-soft-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Email</span>
                </a>

                <a
                  href={contact.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold bg-brand-charcoal text-white hover:bg-brand-rose-pink transition-all duration-200 shadow-sm"
                >
                  <Download className="w-4 h-4 text-brand-soft-pink" />
                  <span>Unduh CV Saya (PDF)</span>
                </a>
              </div>

              <div className="mt-6 text-[11px] text-brand-muted-gray">
                Biasanya membalas pesan dalam 1x24 jam kerja.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
