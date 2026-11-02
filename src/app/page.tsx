import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Organizations } from "@/components/Organizations";
import { Skills } from "@/components/Skills";
import { Languages } from "@/components/Languages";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-charcoal selection:bg-brand-soft-pink selection:text-brand-charcoal relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certifications />
      <Organizations />
      <Skills />
      <Languages />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
