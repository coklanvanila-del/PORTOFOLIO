"use client";

import React from "react";
import { ArrowUp, Linkedin, Mail, Instagram, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const { profile, footer } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white border-t border-brand-border-pink/80 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Brand Quote */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-1 mb-2">
              <span className="font-serif font-black text-2xl tracking-wider text-brand-charcoal">
                {profile.logoText}
              </span>
              <span className="w-2 h-2 rounded-full bg-brand-rose-pink" />
            </div>
            <p className="text-xs text-brand-muted-gray flex items-center gap-1.5">
              <span>{footer.brandQuote}</span>
              <Heart className="w-3.5 h-3.5 text-brand-rose-pink fill-brand-rose-pink inline" />
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-brand-soft-pink/40 border border-brand-border-pink text-brand-charcoal hover:bg-brand-rose-pink hover:text-white hover:border-brand-rose-pink flex items-center justify-center transition-all duration-200 shadow-xs"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="w-10 h-10 rounded-full bg-brand-soft-pink/40 border border-brand-border-pink text-brand-charcoal hover:bg-brand-rose-pink hover:text-white hover:border-brand-rose-pink flex items-center justify-center transition-all duration-200 shadow-xs"
              aria-label="Email"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={profile.instagramPhoto}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-brand-soft-pink/40 border border-brand-border-pink text-brand-charcoal hover:bg-brand-rose-pink hover:text-white hover:border-brand-rose-pink flex items-center justify-center transition-all duration-200 shadow-xs"
              aria-label="Instagram Portfolio (@nilensco)"
              title="Instagram Photography (@nilensco)"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-brand-soft-pink/50 text-brand-charcoal hover:bg-brand-rose-pink hover:text-white border border-brand-border-pink transition-all duration-200 shadow-xs"
            aria-label="Kembali ke Atas"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-brand-border-pink/50 text-center text-xs text-brand-muted-gray">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
