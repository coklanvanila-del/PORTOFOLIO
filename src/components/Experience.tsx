"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Flame,
  Sparkles,
  Camera,
  Calendar,
  CheckCircle,
  ExternalLink,
  Tag,
  Building,
  Image as ImageIcon,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Play,
} from "lucide-react";
import { portfolioData, ExperienceItem, ExperienceImage } from "@/data/portfolioData";
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

  // Lightbox Modal state
  const [activeGallery, setActiveGallery] = useState<{
    images: ExperienceImage[];
    currentIndex: number;
    title: string;
  } | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!activeGallery) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveGallery(null);
      } else if (e.key === "ArrowLeft") {
        setActiveGallery((prev) =>
          prev
            ? {
                ...prev,
                currentIndex:
                  (prev.currentIndex - 1 + prev.images.length) %
                  prev.images.length,
              }
            : null
        );
      } else if (e.key === "ArrowRight") {
        setActiveGallery((prev) =>
          prev
            ? {
                ...prev,
                currentIndex: (prev.currentIndex + 1) % prev.images.length,
              }
            : null
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeGallery]);

  const openLightbox = (
    images: ExperienceImage[],
    index: number,
    title: string
  ) => {
    setActiveGallery({
      images,
      currentIndex: index,
      title,
    });
  };

  const nextImage = () => {
    if (!activeGallery) return;
    setActiveGallery({
      ...activeGallery,
      currentIndex: (activeGallery.currentIndex + 1) % activeGallery.images.length,
    });
  };

  const prevImage = () => {
    if (!activeGallery) return;
    setActiveGallery({
      ...activeGallery,
      currentIndex:
        (activeGallery.currentIndex - 1 + activeGallery.images.length) %
        activeGallery.images.length,
    });
  };

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

                      {/* Photo / Media Documentation Section */}
                      {exp.images && exp.images.length > 0 && (
                        <div className="mt-5 pt-4 border-t border-brand-border-pink/40">
                          <div className="flex items-center justify-between mb-3">
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-charcoal tracking-wide">
                              <ImageIcon className="w-3.5 h-3.5 text-brand-rose-pink" />
                              <span>
                                {exp.id === "pertamina-ep"
                                  ? `Dokumentasi Lapangan & Bukti (${exp.images.length})`
                                  : `Dokumentasi & Portofolio Karya (${exp.images.length})`}
                              </span>
                            </span>
                            <span className="text-[11px] text-brand-muted-gray italic">
                              Klik media untuk melihat
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                            {exp.images.map((img, imgIdx) => (
                              <button
                                key={imgIdx}
                                type="button"
                                onClick={() => openLightbox(exp.images!, imgIdx, exp.role)}
                                className="group/img relative rounded-2xl overflow-hidden border border-brand-border-pink/70 bg-brand-soft-pink/15 hover:border-brand-rose-pink hover:shadow-soft transition-all duration-200 text-left flex flex-col focus:outline-none focus:ring-2 focus:ring-brand-rose-pink/50 cursor-pointer"
                              >
                                <div className="relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden">
                                  {img.type === "video" ? (
                                    <>
                                      <video
                                        src={`${img.src}#t=0.5`}
                                        preload="metadata"
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover pointer-events-none group-hover/img:scale-105 transition-transform duration-300"
                                      />
                                      <div className="absolute inset-0 bg-black/35 group-hover/img:bg-black/50 transition-colors flex items-center justify-center">
                                        <div className="w-10 h-10 rounded-full bg-brand-rose-pink text-white flex items-center justify-center shadow-lg group-hover/img:scale-110 transition-transform">
                                          <Play className="w-5 h-5 fill-white ml-0.5" />
                                        </div>
                                      </div>
                                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/75 text-white text-[10px] font-semibold flex items-center gap-1 backdrop-blur-xs border border-white/20">
                                        <Play className="w-2.5 h-2.5 fill-white" />
                                        Video
                                      </span>
                                    </>
                                  ) : (
                                    <>
                                      <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        className="object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 text-brand-charcoal text-[11px] font-semibold shadow-sm backdrop-blur-xs">
                                          <ZoomIn className="w-3 h-3 text-brand-rose-pink" />
                                          Perbesar
                                        </span>
                                      </div>
                                    </>
                                  )}
                                </div>
                                <div className="p-2 sm:p-2.5 bg-white flex-1 flex flex-col justify-center">
                                  <p className="text-[11px] font-semibold text-brand-charcoal line-clamp-1 leading-tight group-hover/img:text-brand-rose-pink transition-colors">
                                    {img.title || img.caption}
                                  </p>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

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

      {/* Lightbox Modal */}
      {activeGallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-brand-charcoal/85 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveGallery(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-border-pink flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-brand-border-pink/60 bg-brand-soft-pink-light">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-rose-pink text-white">
                  {activeGallery.currentIndex + 1} / {activeGallery.images.length}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-brand-charcoal line-clamp-1">
                  {activeGallery.images[activeGallery.currentIndex]?.title ||
                    activeGallery.title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeGallery.images[activeGallery.currentIndex]?.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full text-brand-muted-gray hover:text-brand-charcoal hover:bg-white/80 transition-colors"
                  title="Buka media ukuran penuh di tab baru"
                >
                  <Maximize2 className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveGallery(null)}
                  className="p-1.5 rounded-full text-brand-muted-gray hover:text-brand-charcoal hover:bg-white/80 transition-colors"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image / Video Area */}
            <div className="relative flex-1 bg-neutral-900 flex items-center justify-center min-h-[300px] sm:min-h-[460px] p-2 sm:p-4 overflow-hidden">
              <div className="relative w-full h-[52vh] sm:h-[60vh] flex items-center justify-center">
                {activeGallery.images[activeGallery.currentIndex]?.type === "video" ? (
                  <video
                    key={activeGallery.images[activeGallery.currentIndex]?.src}
                    src={activeGallery.images[activeGallery.currentIndex]?.src}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[52vh] sm:max-h-[60vh] max-w-full rounded-xl shadow-2xl object-contain bg-black"
                  />
                ) : (
                  <Image
                    src={activeGallery.images[activeGallery.currentIndex]?.src || ""}
                    alt={activeGallery.images[activeGallery.currentIndex]?.alt || ""}
                    fill
                    sizes="(max-width: 1200px) 90vw, 1000px"
                    className="object-contain"
                    priority
                  />
                )}
              </div>

              {/* Prev Button */}
              {activeGallery.images.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-brand-rose-pink text-white backdrop-blur-xs transition-colors shadow-md z-10"
                  aria-label="Media sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              {/* Next Button */}
              {activeGallery.images.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-brand-rose-pink text-white backdrop-blur-xs transition-colors shadow-md z-10"
                  aria-label="Media selanjutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Modal Caption & Details */}
            <div className="p-4 sm:p-5 bg-white border-t border-brand-border-pink/60">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-brand-charcoal">
                    {activeGallery.images[activeGallery.currentIndex]?.caption}
                  </h4>
                  {activeGallery.images[activeGallery.currentIndex]?.description && (
                    <p className="text-xs sm:text-sm text-brand-muted-gray mt-0.5 leading-relaxed">
                      {activeGallery.images[activeGallery.currentIndex]?.description}
                    </p>
                  )}
                </div>

                {/* Thumbnails Navigator */}
                <div className="flex items-center gap-2 shrink-0 overflow-x-auto py-1">
                  {activeGallery.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() =>
                        setActiveGallery((prev) =>
                          prev ? { ...prev, currentIndex: idx } : null
                        )
                      }
                      className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        activeGallery.currentIndex === idx
                          ? "border-brand-rose-pink ring-2 ring-brand-rose-pink/30 scale-105"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      {img.type === "video" ? (
                        <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-brand-rose-pink">
                          <Play className="w-4 h-4 fill-brand-rose-pink" />
                        </div>
                      ) : (
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
