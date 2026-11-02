export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  category: string;
  program?: string;
  description: string[];
  iconType: 'oil' | 'creative' | 'camera';
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
