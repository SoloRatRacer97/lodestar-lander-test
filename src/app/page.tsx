import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WrittenTestimonials from "@/components/WrittenTestimonials";
import VideoTestimonials from "@/components/VideoTestimonials";
import FAQ from "@/components/FAQ";
import CalendlySection from "@/components/CalendlySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WrittenTestimonials />
        <VideoTestimonials />
        <FAQ />
        <CalendlySection />
      </main>
      <Footer />
    </>
  );
}
