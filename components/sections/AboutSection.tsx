"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, Shield, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, value: "25+", label: "Anos de experiência" },
  { icon: Users, value: "1000+", label: "Clientes satisfeitos" },
  { icon: Shield, value: "100%", label: "Garantia" },
  { icon: TrendingUp, value: "Top", label: "Qualidade premium" },
];

/**
 * Quem somos: única seção com a história e os números da empresa (os 25 anos
 * não se repetem nas seções de cima). Fundo bege (--bg-color) para separar da
 * seção de aplicações, que é branca.
 */
const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-[var(--bg-color)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brown-light)]">
              Quem somos
            </p>
            <h2 className="mb-6 font-display font-extrabold uppercase leading-tight text-gray-800">
              Conforto e usabilidade para cada espaço
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-600">
              <p>
                Com mais de{" "}
                <strong className="text-gray-800">25 anos de experiência</strong>{" "}
                na fabricação, instalação e manutenção de persianas e cortinas
                em diversos materiais e para variadas aplicações, a{" "}
                <strong className="text-gray-800">New Line</strong> é uma
                empresa focada em promover conforto e usabilidade aos espaços
                onde colabora.
              </p>
              <p>
                Nossa experiência nos permite oferecer soluções resistentes e
                seguras, sempre com foco em um atendimento próximo e
                personalizado.
              </p>
              <p>
                A empresa vem ampliando constantemente sua atuação como parceira
                direta na concepção de novos projetos. Localizada em{" "}
                <strong className="text-gray-800">Colombo</strong>, região
                metropolitana de Curitiba, apresenta em seu portfólio
                atendimentos em todo o estado do{" "}
                <strong className="text-gray-800">Paraná</strong>.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-black/10 pt-8 sm:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Icon className="mb-3 h-6 w-6 text-[var(--brown-light)]" />
                    <div className="font-display text-3xl font-extrabold leading-none text-[var(--brown)] md:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_30px_60px_-25px_rgba(0,0,0,0.45)] lg:max-w-none"
          >
            <Image
              src="/images/persiana-1.jpeg"
              alt="Persiana instalada pela New Line"
              fill
              sizes="(max-width: 1024px) 28rem, 40vw"
              className="rounded-[22px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
