"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Facebook,
  Instagram,
  ArrowRight,
  ArrowUp,
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import BeadChain from "@/components/BeadChain";
import MagneticFillButton from "@/components/ui/buttons/magnetic-fill-button";

/**
 * Footer "revelado" (mesmo efeito do portfólio): o conteúdo fica fixo no fundo
 * da tela e a página rola por cima dele. O <footer> fica no fluxo com a altura
 * do conteúdo e usa `clip-path` como invólucro: o filho `fixed` só aparece
 * dentro da área do footer. Só liga no desktop (lg) e quando o conteúdo cabe
 * na tela; senão o footer flui normal.
 */
const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#produtos", label: "Produtos" },
  { href: "#manutencao", label: "Manutenção" },
  { href: "#aplicacoes", label: "Aplicações" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

const CONTACTS = [
  {
    icon: BsWhatsapp,
    label: "(41) 98498-2581",
    href: "https://wa.me/5541984982581?text=Olá,%20vi%20seu%20contato%20e%20gostaria%20de%20saber%20mais!",
    external: true,
  },
  {
    icon: Mail,
    label: "contato@newlinepersianas.com.br",
    href: "mailto:contato@newlinepersianas.com.br",
    external: false,
  },
  {
    icon: MapPin,
    label: "R. Estrada da Ribeira, 2612 — Maracanã, Colombo-PR",
    href: "https://www.google.com/maps/search/?api=1&query=R.+Estrada+da+Ribeira,+2612,+Maracanã,+Colombo-PR",
    external: true,
  },
];

const SOCIALS = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/persianasnewline/",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/New-Line-Persianas-e-Cortinas-559553994243016/",
  },
];

const COLUMN_TITLE =
  "mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--caramel)]";
const LINK =
  "text-white/70 transition-colors hover:text-[var(--caramel)]";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();
  const [fixed, setFixed] = useState(false);
  // Com o conteúdo `fixed` ele está sempre "na tela" para o navegador, então
  // quem dispara as animações é o próprio <footer>, que fica no fluxo.
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      const h = content.offsetHeight;
      setHeight(h);
      setFixed(desktop.matches && h <= window.innerHeight);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(content);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true);
        observer.disconnect();
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const reveal = (delay = 0, y = 20) => ({
    initial: { opacity: 0, y },
    animate: revealed ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 0.5, delay },
  });

  return (
    <footer
      ref={footerRef}
      className="relative z-10 bg-[#17120f] text-white"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        height: fixed ? height : undefined,
      }}
    >
      <div
        ref={contentRef}
        className={`w-full bg-[#17120f] ${fixed ? "fixed bottom-0 left-0" : "relative"}`}
      >
        <div className="container-custom py-12 md:py-14">
          {/* Chamada final (à esquerda: a direita fica livre para a corrente) */}
          <motion.div {...reveal()} className="max-w-2xl">
            <p className={COLUMN_TITLE.replace("mb-5", "mb-3")}>
              Pronto para começar?
            </p>
            <h2 className="font-display text-3xl font-extrabold uppercase leading-tight text-white md:text-4xl lg:text-5xl">
              Vamos vestir as suas janelas?
            </h2>
            <MagneticFillButton href="#contato" className="mt-7">
              Solicitar orçamento
              <ArrowRight className="h-5 w-5" />
            </MagneticFillButton>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.4fr_0.8fr] lg:gap-12">
            <motion.div {...reveal(0.1)}>
              <Image
                src="/images/nl-white.png"
                alt="NEW LINE Persianas e Cortinas"
                width={790}
                height={316}
                className="h-16 w-auto object-contain"
              />
              <p className="mt-5 text-sm leading-relaxed text-white/60">
                Comércio e instalação de cortinas e persianas em Curitiba e
                região, com profissionais qualificados, produtos de ótima
                qualidade e os melhores preços.
              </p>
              <p className="mt-4 text-xs text-white/40">
                Uma empresa do Grupo Comercial GRW
              </p>
            </motion.div>

            <motion.nav {...reveal(0.15)} aria-label="Seções">
              <h3 className={COLUMN_TITLE}>Navegação</h3>
              <ul className="space-y-2.5 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className={LINK}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            <motion.div {...reveal(0.2)}>
              <h3 className={COLUMN_TITLE}>Contato</h3>
              <ul className="space-y-4 text-sm">
                {CONTACTS.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <li key={contact.href}>
                      <a
                        href={contact.href}
                        {...(contact.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className={`group flex items-start gap-3 ${LINK}`}
                      >
                        <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--caramel)]" />
                        <span className="break-words">{contact.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            <motion.div {...reveal(0.25)}>
              <h3 className={COLUMN_TITLE}>Redes</h3>
              <ul className="space-y-3 text-sm">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <li key={social.href}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 ${LINK}`}
                      >
                        <Icon className="h-4 w-4 text-[var(--caramel)]" />
                        {social.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>

          <motion.div
            {...reveal(0.3, 0)}
            className="mt-12 flex flex-col-reverse gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"
          >
            <p>
              © {currentYear} New Line Persianas e Cortinas. Todos os direitos
              reservados.
            </p>
            <a
              href="#inicio"
              className="group inline-flex items-center gap-2 font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-[var(--caramel)]"
            >
              Voltar ao topo
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/*
        Corrente de persiana pendurada na borda de baixo da seção de cima: fica
        no <footer> (no fluxo), não no conteúdo fixo, para "descer" junto com a
        seção enquanto o footer é revelado. Mesma cor do fundo dela (bg-white).
      */}
      <BeadChain className="absolute top-0 right-6 hidden text-white md:block lg:right-12" />
    </footer>
  );
};

export default Footer;
