import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import MaintenanceSection from "@/components/sections/MaintenanceSection";
import ApplicationsSection from "@/components/sections/ApplicationsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProductsSection />
      <MaintenanceSection />
      <ApplicationsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
