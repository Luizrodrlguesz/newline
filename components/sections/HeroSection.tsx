"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import MagneticFillButton from "@/components/ui/buttons/magnetic-fill-button";
import ArrowSlideButton from "@/components/ui/buttons/arrow-slide-button";
import Image from "next/image";

const HERO_IMAGE = "/images/persianas-bg.jpg";
/** Quantidade de lâminas em que a foto do hero é dividida. */
const SLATS = 12;

/**
 * Uma lâmina da "persiana": mostra a sua faixa da foto (a imagem inteira, com
 * a altura do hero, deslocada para cima) e se recolhe para o topo conforme o
 * scroll. As de baixo recolhem primeiro, como uma persiana subindo.
 */
const Slat = ({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) => {
  const order = SLATS - 1 - index;
  const start = (order / SLATS) * 0.55;
  const scaleY = useTransform(progress, [start, start + 0.3], [1, 0]);

  // Cada lâmina é 1px mais alta e cobre o topo da de baixo: com alturas
  // fracionadas (1/12 da tela) o arredondamento deixava frestas por onde a
  // seção clara de baixo aparecia. A foto interna desconta esse 1px.
  return (
    <motion.div
      style={{
        top: `${(index * 100) / SLATS}%`,
        height: `calc(${100 / SLATS}% + 1px)`,
        scaleY,
      }}
      className="absolute inset-x-0 origin-top overflow-hidden"
    >
      <div
        className="absolute inset-x-0"
        style={{
          top: `calc(${-index} * (100% - 1px))`,
          height: `calc(${SLATS} * (100% - 1px))`,
        }}
      >
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
      </div>
      {index > 0 && (
        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.15]" />
      )}
    </motion.div>
  );
};

/**
 * Hero com a foto de persianas de fundo. Ao rolar, o hero fica fixo (sticky)
 * e as lâminas sobem como uma persiana, revelando a seção de produtos que
 * passa por baixo dele (o -mb puxa a próxima seção 100vh para cima).
 * Técnica de sticky + useScroll adaptada do Skiper 16 (Card stack scroll) da
 * Skiper UI — https://skiper-ui.com/v1/skiper16
 */
const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.35], [0, -80]);
  // Com a persiana recolhida, o hero (sticky, z-10) fica parado e invisível
  // em cima do começo da seção de produtos; sem isso ele roubaria o mouse
  // dos cards de lá.
  const pointerEvents = useTransform(scrollYProgress, (v) =>
    v > 0.8 ? "none" : "auto"
  );

  return (
    <div
      ref={containerRef}
      // Fundo igual ao da seção de produtos: o que aparece enquanto as lâminas
      // sobem é o mesmo marrom escuro, sem faixa clara.
      className={`bg-[#17120f] ${
        reduceMotion ? "relative" : "relative h-[200vh] -mb-[100vh]"
      }`}
    >
      <motion.section
        id="inicio"
        style={reduceMotion ? undefined : { pointerEvents }}
        className={`${
          reduceMotion ? "relative" : "sticky top-0"
        } z-10 h-screen min-h-[560px] overflow-hidden`}
      >
        <div aria-hidden className="absolute inset-0">
          {Array.from({ length: SLATS }, (_, i) => (
            <Slat key={i} index={i} progress={scrollYProgress} />
          ))}
        </div>

        <motion.div
          style={reduceMotion ? undefined : { opacity: contentOpacity, y: contentY }}
          className="container-custom relative z-10 flex h-full flex-col justify-center pt-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--caramel)] sm:text-sm"
          >
            <span className="h-px w-10 bg-[var(--caramel)]" />
            Persianas · Cortinas
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-3xl font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.01em] text-white sm:text-5xl lg:text-[4.25rem]"
          >
            <span className="text-[var(--caramel)]">25 anos</span> vestindo
            janelas com elegância.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            Persianas e cortinas com qualidade, garantia e os melhores
            preços de Curitiba e região.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <MagneticFillButton href="#contato">
              SOLICITE UM ORÇAMENTO
            </MagneticFillButton>
            <ArrowSlideButton href="#produtos">
              CONHEÇA NOSSOS PRODUTOS
            </ArrowSlideButton>
          </motion.div>
        </motion.div>

        <motion.div
          style={reduceMotion ? undefined : { opacity: contentOpacity }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <a href="#produtos" aria-label="Ir para produtos">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <ChevronDown className="h-6 w-6 text-white" />
            </motion.div>
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
