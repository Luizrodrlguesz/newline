import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import MaintenanceSection from "@/components/sections/MaintenanceSection";
import ApplicationsSection from "@/components/sections/ApplicationsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Header />
      <HeroSection />
      {/*
        `relative` obrigatório: o bloco do hero (posicionado, com fundo escuro)
        sobrepõe a primeira altura de tela (100vh) depois dele. Em telas muito
        altas (ex.: 4K) isso passa da seção de produtos e cobriria o começo da
        seção seguinte; posicionado, este conteúdo fica sempre por cima.
      */}
      <div className="relative">
        <ProductsSection />
        {/*
          Manutenção com degradê que começa no marrom escuro da seção de produtos
          e termina no caramelo do logo; Aplicações vem depois, com fundo branco.
        */}
        <div className="bg-gradient-to-b from-[#17120f] via-[var(--brown)] via-60% to-[var(--caramel)]">
          <MaintenanceSection />
        </div>
        <ApplicationsSection />
        <AboutSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
