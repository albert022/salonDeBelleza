import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CallToActionBanner from "@/components/CallToActionBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MiniChatbot from "@/components/MiniChatbot";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-taupe-800 font-sans antialiased selection:bg-rose-200 selection:text-taupe-900">
      {/* Encabezado fijo con navegación interna */}
      <Header />

      <main className="flex-1">
        {/* SECCIÓN 1: INICIO Y SERVICIOS */}
        <div id="inicio" className="scroll-mt-20">
          <Hero />
          <Services />
          <WhyChooseUs />
        </div>

        {/* SECCIÓN 2: TRABAJOS REALIZADOS */}
        <div id="trabajos" className="scroll-mt-20">
          <Gallery />
          <Testimonials />
          <CallToActionBanner />
        </div>

        {/* SECCIÓN 3: CONTACTO Y COTIZACIONES */}
        <div id="contacto" className="scroll-mt-20">
          <ContactSection />
        </div>
      </main>

      {/* Footer profesional */}
      <Footer />

      {/* Funcionalidades globales flotantes */}
      <FloatingWhatsApp />
      <MiniChatbot />
    </div>
  );
}
