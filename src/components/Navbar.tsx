"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang Saya", href: "#tentang-saya" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Pendidikan", href: "#pendidikan" },
  { label: "Sertifikasi", href: "#sertifikasi" },
  { label: "Organisasi", href: "#organisasi" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Kontak", href: "#kontak" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = navLinks.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-navbar py-3 shadow-soft"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="flex items-center gap-1 group"
          >
            <span className="font-serif font-black text-2xl tracking-wider text-brand-charcoal transition-colors group-hover:text-brand-rose-pink">
              {portfolioData.profile.logoText}
            </span>
            <span className="w-2 h-2 rounded-full bg-brand-rose-pink" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-brand-border-pink/40 shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-brand-rose-pink text-white shadow-sm"
                      : "text-brand-charcoal hover:text-brand-rose-pink hover:bg-brand-soft-pink/30"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={portfolioData.profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-brand-charcoal text-white hover:bg-brand-rose-pink transition-all duration-200 shadow-sm hover:shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh CV</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-brand-charcoal hover:bg-brand-soft-pink/50 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-brand-charcoal" />
            ) : (
              <Menu className="w-6 h-6 text-brand-charcoal" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[60px] bg-white/95 backdrop-blur-xl border-b border-brand-border-pink shadow-soft-lg px-6 py-6 transition-all animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-brand-soft-pink text-brand-charcoal font-semibold"
                      : "text-brand-charcoal hover:bg-brand-soft-pink/40"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-brand-rose-pink" />
                  )}
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-brand-border-pink/60 flex flex-col gap-3">
              <a
                href={portfolioData.profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-brand-charcoal text-white hover:bg-brand-rose-pink transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Unduh CV Saya</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
