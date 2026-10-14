"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
import ContactRevealButton from "@/components/ui/buttons/contact-reveal-button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const menuItems = useMemo(
    () => [
      { href: "#inicio", label: "INÍCIO" },
      { href: "#produtos", label: "PRODUTOS" },
      { href: "#manutencao", label: "MANUTENÇÃO" },
      { href: "#aplicacoes", label: "APLICAÇÕES" },
      { href: "#sobre", label: "SOBRE" },
      { href: "#contato", label: "CONTATO" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionElements = menuItems
      .map((item) => {
        const id = item.href.replace("#", "");
        return document.getElementById(id);
      })
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [menuItems]);

  const handleMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        setActiveSection(targetId);
      setIsMenuOpen(false);

      setTimeout(
        () => {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        },
        isMenuOpen ? 300 : 0
      );
    }
  };

  const whatsappHref =
    "https://wa.me/5541984982581?text=Olá,%20vi%20seu%20contato%20e%20gostaria%20de%20saber%20mais!";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-3 transition-all duration-300 sm:px-4 ${
        isScrolled ? "pt-2" : "pt-4"
      }`}
    >
      {/*
        Barra flutuante de vidro (glassmorphism) com fundo meio branco: branco
        translúcido + desfoque/saturação do que passa por trás e um brilho de
        1px no topo. Usa rgba de branco puro porque o `white` do tema foi
        escurecido. O logo (marrom/caramelo) segue legível sobre o hero escuro.
      */}
      <nav
        className={`mx-auto max-w-7xl rounded-2xl border border-white/50 bg-gradient-to-b from-[rgba(255,255,255,0.72)] to-[rgba(255,255,255,0.52)] backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_10px_40px_-10px_rgba(0,0,0,0.35)]"
            : "shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_10px_40px_-15px_rgba(0,0,0,0.5)]"
        }`}
      >
        <div
          className={`flex items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
            isScrolled ? "h-16" : "h-[72px]"
          }`}
        >
          <a
            href="#inicio"
            onClick={(e) => handleMenuClick(e, "#inicio")}
            className="flex items-center"
          >
            <Image
              src="/images/logo-1.png"
              alt="NEW LINE Logo"
              width={120}
              height={60}
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? "h-10" : "h-12"
              }`}
              priority
            />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => {
              const itemId = item.href.replace("#", "");
              const isActive = activeSection === itemId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleMenuClick(e, item.href)}
                  className={`relative isolate rounded-full px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-gray-800 hover:bg-black/5 hover:text-[var(--brown)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--brown)] shadow-md"
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>

          <ContactRevealButton
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            icon={<BsWhatsapp className="h-4 w-4" />}
            className="hidden lg:inline-flex"
          >
            (41) 98498-2581
          </ContactRevealButton>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition-colors hover:bg-black/10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-800" />
            ) : (
              <Menu className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mx-4 space-y-1 border-t border-black/10 py-4 sm:mx-6">
                {menuItems.map((item) => {
                  const itemId = item.href.replace("#", "");
                  const isActive = activeSection === itemId;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleMenuClick(e, item.href)}
                      className={`block rounded-xl px-4 py-3 text-sm font-semibold tracking-wide transition-colors ${
                        isActive
                          ? "bg-[var(--brown)] text-white"
                          : "text-gray-800 hover:bg-black/5"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <div className="px-4 pt-3">
                  <ContactRevealButton
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<BsWhatsapp className="h-4 w-4" />}
                  >
                    (41) 98498-2581
                  </ContactRevealButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
