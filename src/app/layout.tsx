import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://indyassel.vercel.app"),
  title: "Indy Rahmawati Assel | Personal Portfolio",
  description:
    "Personal portfolio website of Indy Rahmawati Assel – Fresh Graduate D-IV Teknik Produksi Migas Politeknik Negeri Ambon, K3 Operator Migas BNSP Certified, Creative Designer & AI Content Creator.",
  keywords: [
    "Indy Rahmawati Assel",
    "Teknik Produksi Migas",
    "Politeknik Negeri Ambon",
    "K3 Operator Migas",
    "BNSP PPSDM Migas",
    "Pertamina EP Field Cepu",
    "HSE Plan",
    "Oil and Gas Production",
    "Portfolio Indy Assel",
    "Graphic Designer Ambon"
  ],
  authors: [{ name: "Indy Rahmawati Assel", url: "https://linkedin.com/in/indyassel" }],
  creator: "Indy Rahmawati Assel",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Indy Rahmawati Assel | Personal Portfolio",
    description:
      "Fresh Graduate D-IV Teknik Produksi Migas | K3 Operator Migas BNSP Certified | Creative & AI Content Creator.",
    url: "https://indyassel.vercel.app",
    siteName: "Indy Rahmawati Assel Portfolio",
    images: [
      {
        url: "/images/profile.jpeg",
        width: 800,
        height: 1067,
        alt: "Indy Rahmawati Assel",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indy Rahmawati Assel | Personal Portfolio",
    description:
      "Fresh Graduate D-IV Teknik Produksi Migas | K3 Operator Migas BNSP Certified | Creative & AI Content Creator.",
    images: ["/images/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-brand-bg text-brand-charcoal antialiased selection:bg-brand-soft-pink selection:text-brand-charcoal min-h-screen">
        {children}
      </body>
    </html>
  );
}
