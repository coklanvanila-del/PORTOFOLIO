export interface ExperienceImage {
  src: string;
  alt: string;
  caption: string;
  title?: string;
  description?: string;
  type?: 'image' | 'video';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  category: string;
  program?: string;
  description: string[];
  iconType: 'oil' | 'creative' | 'camera';
  images?: ExperienceImage[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa: string;
  maxGpa: string;
  location: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
  validity?: string;
  isFeatured?: boolean;
  category: 'K3 & Safety' | 'AI & Digital' | 'Engineering' | 'Software';
}

export interface OrganizationItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  responsibilities: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  iconName: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  proficiency: string;
  percentage?: number;
}

export const portfolioData = {
  profile: {
    fullName: "Indy Rahmawati Assel",
    shortName: "Indy",
    logoText: "INDY.",
    heroGreeting: "HALO, SAYA",
    professionalTitle: "Lulusan Teknik Produksi Migas",
    subtitle: "D-IV Teknik Produksi Migas | K3 Operator Migas BNSP Certified | Creative & AI Content Creator",
    summary: "Lulusan Teknik Produksi Migas yang memiliki ketertarikan pada industri minyak dan gas bumi, khususnya operasi produksi, operasi lapangan, serta keselamatan kerja. Memiliki sertifikasi K3 Operator Migas, pengalaman organisasi selama empat tahun di bidang media dan kemampuan di bidang desain grafis serta pembuatan konten berbasis kecerdasan buatan (AI).",
    location: "Ambon, Maluku, Indonesia",
    phone: "+62 822-3907-8782",
    email: "indyassel@gmail.com",
    linkedin: "https://linkedin.com/in/indyassel",
    instagramPhoto: "https://instagram.com/nilensco",
    cvUrl: "https://s.id/CVIndyAssel",
    avatarPath: "/images/profile.jpeg",
  },
  
  about: {
    title: "Tentang Saya",
    subheading: "Get to Know Me Better",
    paragraphs: [
      "Saya merupakan lulusan baru D-IV Teknik Produksi Minyak dan Gas Politeknik Negeri Ambon dengan minat yang kuat pada industri minyak dan gas bumi, khususnya bidang operasi produksi, operasi lapangan, dan keselamatan proses. Memiliki sertifikasi K3 Operator Migas serta pemahaman dasar mengenai proses produksi migas, standar keselamatan operasional, dan identifikasi bahaya di lingkungan kerja.",
      "Selain kompetensi teknis, saya memiliki pengalaman organisasi selama empat tahun di bidang media dan komunikasi, dengan fokus pada desain grafis, pengembangan konten visual, serta pengelolaan dan evaluasi desain. Pengalaman tersebut mencakup peran sebagai Sekretaris Bidang Media, Ketua Departemen Syiar dan Media, Majelis Pertimbangan Organisasi yang merangkap sebagai pendamping Departemen Syiar dan Media dalam memberikan arahan dan evaluasi desain. Saya juga memiliki pengalaman sebagai freelancer di bidang fotografi dan editing, serta pembuatan konten digital berbasis kecerdasan buatan (AI).",
      "Saya merupakan pribadi yang adaptif, kreatif, komunikatif, dan memiliki motivasi tinggi untuk terus mengembangkan kompetensi, baik di bidang teknik maupun kreatif, serta memberikan kontribusi positif bagi perusahaan."
    ],
    highlights: [
      {
        title: "Teknik Produksi Migas",
        description: "Pemahaman operasi produksi migas, fasilitas lapangan, dan proses keselamatan teknis.",
        icon: "Factory"
      },
      {
        title: "Bersertifikasi K3 Operator Migas",
        description: "Tersertifikasi resmi BNSP - PPSDM Migas dengan pemahaman standar K3L operasional.",
        icon: "ShieldCheck"
      },
      {
        title: "Kepemimpinan & Organisasi",
        description: "Pengalaman 4 tahun kepengurusan hingga MPO, memimpin tim media dan komunikasi.",
        icon: "Users"
      },
      {
        title: "Desain Grafis & Kreativitas Digital",
        description: "Mahir dalam perancangan visual, fotografi (@nilensco), dan pembuatan konten AI.",
        icon: "Palette"
      }
    ]
  },

  experiences: [
    {
      id: "pertamina-ep",
      role: "Production Field Engineer Intern",
      company: "PT. Pertamina EP Asset 4 Field Cepu – District II, Nglobo",
      period: "01 September 2024 – 30 September 2024",
      category: "Magang Industri Migas",
      iconType: "oil",
      description: [
        "Terlibat langsung dalam pemantauan kegiatan operasional produksi harian.",
        "Melakukan pencatatan dan pengelolaan data produksi minyak dan gas secara akurat.",
        "Menerapkan standar Kesehatan, Keselamatan Kerja, dan Lingkungan (K3L) dalam kegiatan operasional migas."
      ],
      images: [
        {
          src: "/images/experience/pertamina-surat-magang.png",
          alt: "Surat Keterangan Magang SKK Migas PT Pertamina EP Cepu No. 1009/PPC62330/2024-S8",
          title: "Surat Keterangan Magang Resmi",
          caption: "Surat Keterangan Magang PT Pertamina EP Cepu",
          description: "Sertifikat / Surat Keterangan resmi pelaksanaan Program Magang di Produksi Field Cepu – Zona 11 PT Pertamina EP Cepu No. 1009/PPC62330/2024-S8 (1 – 30 September 2024)."
        },
        {
          src: "/images/experience/pertamina-spu.jpg",
          alt: "Dokumentasi di Stasiun Pengumpul Utama PT Pertamina Asset 4 Cepu Field",
          title: "Stasiun Pengumpul Utama (SPU)",
          caption: "Stasiun Pengumpul Utama Cepu Field",
          description: "Observasi operasional dan fasilitas lapangan di Stasiun Pengumpul Utama PT Pertamina Asset 4 Cepu Field menggunakan APD lengkap."
        },
        {
          src: "/images/experience/pertamina-pompa-angguk.jpg",
          alt: "Inspeksi Lapangan di depan Unit Pompa Angguk Thomassen Bd",
          title: "Unit Pompa Angguk (Pumping Unit)",
          caption: "Inspeksi Unit Pompa Angguk Lapangan Migas",
          description: "Inspeksi lapangan di area sumur produksi migas dengan unit pompa angguk (beam pumping unit Thomassen Bd)."
        },
        {
          src: "/images/experience/pertamina-lab.jpg",
          alt: "Pengujian dan Analisis Sampel di Laboratorium Produksi Pertamina EP",
          title: "Analisis Laboratorium Migas",
          caption: "Pengujian & Analisis Sampel di Laboratorium",
          description: "Pengujian dan analisis kualitas fluida/air formasi menggunakan peralatan laboratorium untuk mendukung kendali mutu produksi migas."
        }
      ]
    },
    {
      id: "desa-negeri-lama",
      role: "Graphic Designer & AI Content Creator",
      company: "Kantor Desa Negeri Lama",
      period: "28 September 2026 – 23 October 2026",
      category: "Creative & Digital Internship",
      program: "Program Pemagangan Berbasis Pelatihan Dari BPVP Ambon",
      iconType: "creative",
      description: [
        "Mendesain poster, infografis, dan spanduk desa menggunakan Canva dan Teknologi AI.",
        "Memproduksi video profil desa, Posyandu, dan video edukasi menggunakan Teknologi AI dan CapCut.",
        "Mendukung digitalisasi informasi desa untuk meningkatkan penyampaian informasi kepada masyarakat."
      ],
      images: [
        {
          src: "/images/experience/desa-sertifikat-magang.jpg",
          alt: "Sertifikat Magang Desa Negeri Lama - Indy Rahmawati Assel",
          title: "Sertifikat Magang Resmi",
          caption: "Sertifikat Magang Kantor Desa Negeri Lama",
          description: "Sertifikat penghargaan resmi atas dedikasi dan kontribusi selama proses pemagangan di Kantor Desa Negeri Lama, Kecamatan Baguala, Kota Ambon (Diterbitkan 23 Oktober 2026).",
          type: "image"
        },
        {
          src: "/images/experience/desa-dokumentasi-kegiatan.jpg",
          alt: "Dokumentasi Kegiatan dan Penyerahan Sertifikat Magang Desa Negeri Lama",
          title: "Dokumentasi Kegiatan & Penutupan",
          caption: "Dokumentasi Penyerahan Sertifikat Magang",
          description: "Momen penyerahan sertifikat magang dan sesi foto bersama Kepala Desa Negeri Lama, staf kantor desa, serta rekan peserta magang.",
          type: "image"
        },
        {
          src: "/images/experience/desa-monografi-infografis.jpg",
          alt: "Desain Poster Infografis Monografi Desa Negeri Lama",
          title: "Poster Infografis Monografi Desa",
          caption: "Karya Desain Monografi Desa Negeri Lama",
          description: "Desain poster infografis publikasi komprehensif Monografi Desa Negeri Lama yang memuat Profil Desa, Visi Misi, Data Kependudukan, Peta Wilayah RT/RW, dan Fasilitas Desa.",
          type: "image"
        },
        {
          src: "/images/experience/desa-video-profil.mp4",
          alt: "Video Profil dan Konten Digital Kreatif Desa Negeri Lama",
          title: "Video Profil Desa (AI & CapCut)",
          caption: "Video Profil & Edukasi Desa Negeri Lama",
          description: "Produksi video profil dan konten edukasi desa memanfaatkan teknologi AI dan CapCut sebagai wujud digitalisasi komunikasi publik dan profil wilayah Desa Negeri Lama.",
          type: "video"
        }
      ]
    },
    {
      id: "freelance-creative",
      role: "Freelance Photographer, Photo Editor & Graphic Designer",
      company: "Nilensco Creative Portfolio (@nilensco)",
      period: "2022 – Sekarang",
      category: "Fotografi & Desain Grafis",
      iconType: "camera",
      description: [
        "Melakukan pemotretan untuk kebutuhan dokumentasi dan konten visual.",
        "Mengedit dan melakukan retouching foto untuk menghasilkan visual yang profesional.",
        "Mendesain banner untuk kebutuhan akademik, seperti ujian skripsi dan sidang.",
        "Menyesuaikan warna, pencahayaan, komposisi, dan tata letak sesuai konsep desain.",
        "Mempublikasikan hasil karya fotografi melalui Instagram @nilensco."
      ],
      images: [
        {
          src: "/images/experience/nilensco-graduation-photography.jpg",
          alt: "NiLensCo Graduation Photography - Portofolio Fotografi Wisuda",
          title: "Graduation Photography (@nilensco)",
          caption: "Karya Fotografi Wisuda NiLensCo",
          description: "Karya pemotretan dan sesi dokumentasi wisuda (Graduation Photography) oleh NiLensCo (@nilensco). Mencakup komposisi potret estetik, arahan gaya, serta color grading & photo retouching profesional.",
          type: "image"
        },
        {
          src: "/images/experience/nilensco-banner-designs.jpg",
          alt: "Banner Designs - Portofolio Desain Grafis Banner Sidang & Wisuda",
          title: "Banner Designs Akademik & Sidang",
          caption: "Desain Banner Sidang & Kelulusan",
          description: "Koleksi perancangan desain grafis banner perayaan kelulusan dan ujian sidang diploma/sarjana. Menghadirkan konsep visual kreatif seperti kartu identitas personal, surat izin sidang, dan kolase foto estetik.",
          type: "image"
        }
      ]
    }
  ] as ExperienceItem[],

  education: {
    institution: "Politeknik Negeri Ambon",
    degree: "Diploma IV (D-IV)",
    field: "Oil and Gas Production Engineering (Teknik Produksi Migas)",
    period: "2021 – 2026",
    gpa: "3,64",
    maxGpa: "4,00",
    location: "Ambon, Maluku, Indonesia",
    highlights: [
      "Predikat Sangat Memuaskan dengan Indeks Prestasi Kumulatif 3,64 / 4,00",
      "Fokus kurikulum pada Operasi Produksi Lapangan, Perhitungan Cadangan, Keselamatan Operasi Migas, dan Instrumentasi",
      "Praktek kerja lapangan di industri hulu migas PT. Pertamina EP Asset 4 Field Cepu"
    ]
  } as EducationItem,

  certifications: [
    {
      id: "cert-k3-migas",
      title: "K3 Operator Migas",
      issuer: "BNSP – Lembaga Sertifikasi Profesi PPSDM Migas",
      period: "04 November 2024 – 06 November 2028",
      validity: "Masa Berlaku: 04 Nov 2024 – 06 Nov 2028",
      isFeatured: true,
      category: "K3 & Safety"
    },
    {
      id: "cert-gen-ai",
      title: "Pengoperasian Tools Generative AI untuk Konten Digital & Bisnis",
      issuer: "BPVP Ambon",
      period: "26 Agustus 2026 – 22 September 2026",
      isFeatured: false,
      category: "AI & Digital"
    },
    {
      id: "cert-hse-plan",
      title: "Training the Role of HSE Plan in Oil & Gas EPC Project",
      issuer: "Alpha Petroleum Indonesia",
      period: "28 Februari 2026",
      isFeatured: false,
      category: "K3 & Safety"
    },
    {
      id: "cert-ind-hygiene",
      title: "Implementasi Industrial Hygiene di Perusahaan",
      issuer: "PT. Mutiara Mutu Sertifikasi",
      period: "28 Februari 2026",
      isFeatured: false,
      category: "K3 & Safety"
    },
    {
      id: "cert-office-app",
      title: "Aplikasi Perkantoran",
      issuer: "Lembaga Kursus dan Pelatihan Jaya Negara",
      period: "01 November 2023 – 11 Januari 2024",
      isFeatured: false,
      category: "Software"
    },
    {
      id: "cert-masela",
      title: "Integrated Training – Perhitungan Cadangan Minyak – Ms Excel",
      issuer: "Laboratorium Terpadu Blok Masela",
      period: "30 Mei 2023 – 31 Mei 2023",
      isFeatured: false,
      category: "Engineering"
    },
    {
      id: "cert-petrodays",
      title: "PetroDays",
      issuer: "MigasID",
      period: "29 November 2021 – 09 Desember 2021",
      isFeatured: false,
      category: "Engineering"
    }
  ] as CertificationItem[],

  organizations: [
    {
      id: "org-pendamping",
      role: "Pendamping Departemen Syiar dan Media",
      organization: "LDK Nur-Izzah POLNAM",
      period: "2024/2025, 2025/2026, & 2026/2027",
      responsibilities: [
        "Memberikan arahan dan masukan terkait pengembangan desain grafis.",
        "Mendampingi tim dalam diskusi konsep dan ide kreatif desain.",
        "Melakukan evaluasi dan revisi terhadap hasil desain.",
        "Memberikan rekomendasi terkait tata letak, warna, dan elemen visual.",
        "Membimbing anggota dalam meningkatkan kreativitas dan keterampilan desain."
      ]
    },
    {
      id: "org-mpo",
      role: "Anggota Majelis Pertimbangan Organisasi (MPO)",
      organization: "LDK Nur-Izzah POLNAM",
      period: "2024/2025 – 2025/2026",
      responsibilities: [
        "Memberikan saran strategis dan rekomendasi kebijakan kepada pengurus organisasi.",
        "Mengevaluasi program kerja agar selaras dengan visi jangka panjang organisasi.",
        "Memberikan arahan dan pendampingan kepada kepala departemen serta anggota inti.",
        "Meninjau laporan kinerja dan mendukung proses pengambilan keputusan.",
        "Menjaga nilai-nilai organisasi, tata kelola, dan keberlanjutan organisasi."
      ]
    },
    {
      id: "org-kadep",
      role: "Ketua Departemen Syiar dan Media",
      organization: "LDK Nur-Izzah POLNAM",
      period: "2023/2024",
      responsibilities: [
        "Memimpin dan mengawasi tim Syiar dan Media dalam merencanakan serta melaksanakan strategi syiar.",
        "Mengembangkan strategi konten yang selaras dengan visi organisasi.",
        "Mengelola media sosial, desain publikasi, dan dokumentasi kegiatan.",
        "Mengoordinasikan kolaborasi antardepartemen untuk mendukung promosi program kerja.",
        "Mengevaluasi kinerja tim dan mengoptimalkan strategi keterlibatan audiens."
      ]
    },
    {
      id: "org-sekretaris",
      role: "Sekretaris Departemen Syiar dan Media",
      organization: "LDK Nur-Izzah POLNAM",
      period: "2022/2023",
      responsibilities: [
        "Mengelola administrasi dan dokumentasi departemen.",
        "Menyusun notulen rapat dan laporan kegiatan.",
        "Mengatur jadwal serta mendukung koordinasi internal.",
        "Mengelola arsip dan memastikan kelengkapan administrasi.",
        "Membantu publikasi dan distribusi informasi."
      ]
    }
  ] as OrganizationItem[],

  skills: {
    technical: {
      title: "Kompetensi Teknis",
      description: "Kemampuan inti dalam bidang teknik dan operasional migas serta keselamatan kerja.",
      skills: [
        "Teknik Produksi Minyak dan Gas",
        "Operasi Produksi",
        "Operasi Lapangan",
        "Dasar-Dasar K3 Migas",
        "Identifikasi Bahaya di Tempat Kerja",
        "Keselamatan Proses"
      ],
      iconName: "Flame"
    },
    software: {
      title: "Software & Keahlian Digital",
      description: "Penguasaan perangkat lunak teknik, produktivitas, dan multimedia modern.",
      skills: [
        "Microsoft Office",
        "Software PROSPER",
        "Adobe Lightroom",
        "Canva",
        "CapCut",
        "Teknologi AI"
      ],
      iconName: "Laptop"
    },
    personal: {
      title: "Kemampuan Personal",
      description: "Karakter kepemimpinan, komunikasi, kolaborasi tim, dan pemecahan masalah.",
      skills: [
        "Kepemimpinan",
        "Kerja Sama Tim",
        "Berbicara di Depan Umum",
        "Berpikir Kritis",
        "Kreativitas",
        "Komunikasi",
        "Pemecahan Masalah"
      ],
      iconName: "Sparkles"
    }
  },

  languages: [
    {
      name: "Bahasa Indonesia",
      level: "Sangat Mahir",
      proficiency: "Penutur Asli / Native Fluency",
      percentage: 100
    },
    {
      name: "Bahasa Inggris",
      level: "Menengah",
      proficiency: "Komunikasi Kerja & Pemahaman Teknis",
      percentage: 75
    }
  ] as LanguageItem[],

  contact: {
    title: "Let's Connect!",
    subtitle: "Saya terbuka terhadap peluang karier, kolaborasi profesional, serta kesempatan untuk terus belajar dan mengembangkan kemampuan. Feel free to reach out!",
    email: "indyassel@gmail.com",
    phone: "+62 822-3907-8782",
    location: "Ambon, Maluku, Indonesia",
    linkedin: "https://linkedin.com/in/indyassel",
    linkedinDisplay: "linkedin.com/in/indyassel",
    cvUrl: "https://s.id/CVIndyAssel"
  },

  footer: {
    brandQuote: "Designed with passion by Indy Rahmawati Assel.",
    copyright: "© 2026 Indy Rahmawati Assel. All Rights Reserved."
  }
};
