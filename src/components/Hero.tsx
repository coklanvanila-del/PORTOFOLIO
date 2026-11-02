"use client";

import React from "react";
import Image from "next/image";
import {
  Download,
  ArrowRight,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Award,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const Hero: React.FC = () => {
  const { profile } = portfolioData;

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("tentang-saya");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Decorative ambient background blur shapes */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-brand-soft-pink/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-brand-rose-pink/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/60 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-soft-pink/70 border border-brand-rose-pink/30 text-brand-charcoal text-xs font-semibold tracking-widest uppercase mb-5 w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-rose-pink" />
              <span>{profile.heroGreeting}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-charcoal tracking-tight leading-[1.15]">
              {profile.fullName}
            </h1>

            {/* Professional Title */}
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="text-xl sm:text-2xl font-serif text-brand-rose-pink font-semibold">
                {profile.professionalTitle}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-soft-pink text-brand-deep-rose border border-brand-rose-pink/20">
                Fresh Graduate
              </span>
            </div>

            {/* Supporting Text */}
            <p className="mt-6 text-brand-muted-gray text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              {profile.summary}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-brand-charcoal text-white hover:bg-brand-rose-pink transition-all duration-200 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-brand-soft-pink" />
                <span>Unduh CV Saya</span>
              </a>

              <a
                href="#tentang-saya"
                onClick={scrollToAbout}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white/90 text-brand-charcoal border border-brand-rose-pink/40 hover:bg-brand-soft-pink/40 hover:border-brand-rose-pink transition-all duration-200 shadow-xs"
              >
                <span>Jelajahi Profil Saya</span>
                <ArrowRight className="w-4 h-4 text-brand-rose-pink" />
              </a>
            </div>

            {/* Contact & Location Strip */}
            <div className="mt-10 pt-8 border-t border-brand-border-pink/60 flex flex-wrap items-center gap-6 text-sm text-brand-muted-gray">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-rose-pink shrink-0" />
                <span>{profile.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider text-brand-charcoal/60 font-semibold">Hubungi:</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white border border-brand-border-pink hover:border-brand-rose-pink hover:text-brand-rose-pink transition-colors shadow-xs"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="p-2 rounded-full bg-white border border-brand-border-pink hover:border-brand-rose-pink hover:text-brand-rose-pink transition-colors shadow-xs"
                  aria-label="Email"
                  title="Email Indy Assel"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Profile Photo with Frames & Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Decorative Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-rose-pink/20 to-brand-soft-pink/60 rounded-[2.5rem] rotate-2 -z-10 blur-xs" />
              <div className="absolute -inset-2 bg-white/60 rounded-[2.2rem] -rotate-1 -z-10 border border-brand-border-pink/40" />

              {/* Main Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden bg-brand-soft-pink/20 border-2 border-white shadow-soft-lg aspect-[3/4]">
                <Image
                  src={profile.avatarPath}
                  alt={profile.fullName}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-500 ease-out"
                />

                {/* Subtle soft gradient overlay at bottom for smooth contrast */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-charcoal/40 to-transparent pointer-events-none" />

                {/* Image caption label */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs backdrop-blur-md bg-black/30 border border-white/20 py-1.5 px-3 rounded-full flex items-center justify-between">
                  <span className="font-medium tracking-wide">Indy Rahmawati Assel</span>
                  <span className="text-[10px] text-brand-soft-pink font-semibold uppercase">Teknik Produksi Migas</span>
                </div>
              </div>

              {/* Floating Badge 1: K3 Operator Migas */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-brand-border-pink shadow-soft flex items-center gap-3 animate-bounce-subtle">
                <div className="w-10 h-10 rounded-xl bg-brand-soft-pink flex items-center justify-center text-brand-deep-rose shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-brand-rose-pink uppercase tracking-wider">
                    Sertifikasi Resmi
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-brand-charcoal">
                    K3 Operator Migas
                  </div>
                  <div className="text-[10px] text-brand-muted-gray">
                    BNSP – PPSDM Migas
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Academic IPK */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-brand-border-pink shadow-soft flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-soft-pink flex items-center justify-center text-brand-rose-pink shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-brand-muted-gray">
                    Politeknik Negeri Ambon
                  </div>
                  <div className="text-sm font-bold text-brand-charcoal flex items-center gap-1.5">
                    <span>IPK 3,64</span>
                    <span className="text-xs font-normal text-brand-muted-gray">/ 4,00</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
