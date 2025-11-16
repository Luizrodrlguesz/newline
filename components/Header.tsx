"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
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

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobile || isScrolled
          ? "bg-[var(--bg-color)] shadow-lg"
          : "bg-[var(--bg-color)]/95 backdrop-blur-sm"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <a
            href="#inicio"
            onClick={(e) => handleMenuClick(e, "#inicio")}
            className="flex items-center space-x-2"
          >
            <Image
              src="/images/logo-1.png"
              alt="NEW LINE Logo"
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => {
              const itemId = item.href.replace("#", "");
              const isActive = activeSection === itemId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleMenuClick(e, item.href)}
                  className={`relative text-sm font-medium transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[var(--brown)] after:transition-transform after:duration-300 after:content-[''] ${
                    isActive
                      ? "text-[var(--brown)] after:scale-x-100"
                      : "text-gray-700 hover:text-[var(--brown)] hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="https://wa.me/5541984982581?text=Olá,%20vi%20seu%20contato%20e%20gostaria%20de%20saber%20mais!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="gradient-brown text-white">
                <BsWhatsapp className="w-4 h-4 mr-2" />
                (41) 98498-2581
              </Button>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
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
              <div className="py-4 space-y-4 border-t border-gray-200">
                {menuItems.map((item) => {
                  const itemId = item.href.replace("#", "");
                  const isActive = activeSection === itemId;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleMenuClick(e, item.href)}
                      className={`block text-base font-medium transition-colors ${
                        isActive
                          ? "text-[var(--brown)]"
                          : "text-gray-700 hover:text-[var(--brown)]"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <div className="pt-4">
                  <a
                    href="https://wa.me/5541984982581?text=Olá,%20vi%20seu%20contato%20e%20gostaria%20de%20saber%20mais!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      size="sm"
                      className="w-full gradient-brown text-white"
                    >
                      <BsWhatsapp className="w-4 h-4 mr-2" />
                      (41) 98498-2581 - WhatsApp
                    </Button>
                  </a>
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
