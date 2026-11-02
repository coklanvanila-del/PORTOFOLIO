# Personal Portfolio Website – Indy Rahmawati Assel

Website personal portfolio modern, elegan, dan profesional yang dirancang untuk **Indy Rahmawati Assel**, lulusan D-IV Teknik Produksi Migas (Politeknik Negeri Ambon) bersertifikasi K3 Operator Migas BNSP, serta memiliki keahlian kreatif dalam Desain Grafis & AI Content Creation.

---

## 🎨 Tema & Desain: *"Elegant Pink Professional Portfolio"*

Website ini dibangun dengan prinsip desain editorial modern bernuansa *soft feminine professionalism*:
* **Primary**: Soft Pink (`#F8DDE8`)
* **Secondary**: Rose Pink (`#D987AA`)
* **Accent**: Dusty Pink (`#C77D9A`)
* **Background**: Off White (`#FDF8FA`)
* **Text**: Dark Charcoal (`#30232B`)
* **Secondary Text**: Muted Gray (`#777078`)

---

## 🚀 Teknologi yang Digunakan

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (Custom Color Palette & Typography)
* **Icons:** Lucide React
* **Typography:** Playfair Display (Editorial Serif Headings) & Plus Jakarta Sans (Clean Modern Sans-Serif Body)
* **Deployment:** Vercel Ready
* **Version Control:** Git & GitHub

---

## 📂 Struktur Project

```text
PORTOFOLIO/
├── public/
│   └── images/
│       ├── profile.jpeg         # Foto profil profesional asli Indy Rahmawati Assel
│       └── profile.jpg
├── src/
│   ├── app/
│   │   ├── globals.css          # Styling global, custom scrollbar & utility classes
│   │   ├── icon.tsx             # Favicon dinamis dengan inisial "IA"
│   │   ├── layout.tsx           # Layout root dengan Google Fonts & SEO Metadata
│   │   └── page.tsx             # Halaman utama menyatukan seluruh section
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky navigation bar & mobile menu drawer
│   │   ├── Hero.tsx             # Pembuka editorial dengan frame foto & floating badges
│   │   ├── About.tsx            # Bagian "Tentang Saya" & 4 pilar kompetensi
│   │   ├── Experience.tsx       # Timeline vertikal pengalaman kerja & magang
│   │   ├── Education.tsx        # Kartu pendidikan & GPA highlight card (3.64/4.00)
│   │   ├── Certifications.tsx   # Grid sertifikasi dengan K3 Operator Migas featured
│   │   ├── Organizations.tsx    # Rekam jejak 4 tahun kepemimpinan di LDK Nur-Izzah
│   │   ├── Skills.tsx           # 3 Kategori keahlian (Teknis, Software, Personal)
│   │   ├── Languages.tsx        # Kemampuan bahasa (Indonesia & Inggris)
│   │   ├── Contact.tsx          # Saluran kontak langsung & tombol CV
│   │   ├── Footer.tsx           # Copyright & link media sosial
│   │   ├── BackToTop.tsx        # Tombol kembali ke atas otomatis
│   │   └── SectionHeader.tsx    # Komponen header section reusable
│   └── data/
│       └── portfolioData.ts     # Sumber data profil & informasi terpusat
├── next.config.mjs              # Konfigurasi Next.js
├── tailwind.config.ts           # Konfigurasi Tailwind CSS
├── tsconfig.json                # Konfigurasi TypeScript
├── postcss.config.js            # Konfigurasi PostCSS
└── package.json                 # Dependensi & skrip project
```

---

## 💻 Panduan Menjalankan Project Secara Lokal

### 1. Prasyarat
Pastikan komputer telah terpasang **Node.js** (versi 18.x atau 20.x ke atas) dan **npm**.

### 2. Instalasi Dependensi
Buka terminal atau PowerShell pada folder project:
```bash
npm install
```

### 3. Menjalankan Server Development
```bash
npm run dev
```
Buka browser dan akses [http://localhost:3000](http://localhost:3000).

### 4. Build untuk Production
Untuk menguji proses kompilasi sebelum deployment:
```bash
npm run build
npm run start
```

---

## 🌐 Panduan Deployment ke GitHub & Vercel

### Langkah 1: Inisialisasi Git & Push ke GitHub
1. Buat repository baru di [GitHub](https://github.com/new), misalnya dengan nama `indy-portfolio`.
2. Pada terminal di folder project, jalankan:
```bash
git init
git add .
git commit -m "feat: initial commit personal portfolio Indy Rahmawati Assel"
git branch -M main
git remote add origin https://github.com/USERNAME-ANDA/indy-portfolio.git
git push -u origin main
```

### Langkah 2: Deploy ke Vercel
1. Buka [Vercel Dashboard](https://vercel.com/dashboard) dan login menggunakan akun GitHub Anda.
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Cari repository `indy-portfolio` yang baru saja Anda buat, lalu klik **"Import"**.
4. Di bagian **Framework Preset**, Vercel akan otomatis mendeteksi **Next.js**.
5. Tidak memerlukan Environment Variables tambahan.
6. Klik **"Deploy"**.
7. Tunggu sekitar 1-2 menit hingga proses build selesai. Website Anda langsung online dengan domain gratis seperti `indy-portfolio.vercel.app`.

### Langkah 3: Menghubungkan Custom Domain (Opsional)
Jika Anda memiliki custom domain (misalnya `indyassel.com` atau `indyassel.my.id`):
1. Buka project Anda di dashboard Vercel, lalu pilih tab **Settings** > **Domains**.
2. Masukkan domain Anda (misal `indyassel.com`).
3. Vercel akan menampilkan DNS record (A record atau CNAME) yang perlu dimasukkan ke penyedia domain Anda.
4. Tunggu propagasi DNS (biasanya 5–60 menit), dan sertifikat SSL HTTPS akan otomatis aktif.

---

## 📄 Akses Curriculum Vitae (CV)

Link langsung CV Indy Rahmawati Assel:
[https://s.id/CVIndyAssel](https://s.id/CVIndyAssel)

---

## 📧 Kontak & Hubungi

* **Email:** [indyassel@gmail.com](mailto:indyassel@gmail.com)
* **Telepon:** +62 822-3907-8782
* **LinkedIn:** [linkedin.com/in/indyassel](https://linkedin.com/in/indyassel)
* **Lokasi:** Ambon, Maluku, Indonesia

---
© 2026 Indy Rahmawati Assel. All Rights Reserved.
