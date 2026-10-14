"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Droplets,
  Wrench,
  Shield,
  Clock,
  CheckCircle,
  Check,
  ArrowRight,
} from "lucide-react";
import SpotlightCard from "@/components/ui/spotlight-card";
import MagneticFillButton from "@/components/ui/buttons/magnetic-fill-button";

const services = [
  {
    icon: Sparkles,
    title: "Limpeza Profissional",
    description:
      "Serviço especializado de limpeza para todos os tipos de cortinas e persianas, utilizando produtos adequados para cada material e garantindo a preservação da qualidade original.",
    features: [
      "Limpeza de persianas horizontais e verticais",
      "Limpeza de cortinas de tecido",
      "Tratamento anti-mofo e anti-bolor",
      "Remoção de manchas e odores",
    ],
  },
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    description:
      "Manutenção regular para garantir o funcionamento perfeito dos mecanismos, prolongando a vida útil dos seus produtos e evitando reparos mais custosos no futuro.",
    features: [
      "Ajuste de mecanismos e cordas",
      "Lubrificação de trilhos e roldanas",
      "Substituição de peças desgastadas",
      "Verificação de fixações e suportes",
    ],
  },
  {
    icon: Shield,
    title: "Reparos e Restauração",
    description:
      "Serviço completo de reparos para cortinas e persianas danificadas, restaurando a funcionalidade e aparência original dos seus produtos com peças de reposição de qualidade.",
    features: [
      "Reparo de lâminas quebradas",
      "Substituição de cordas e correntes",
      "Conserto de mecanismos",
      "Restauração de tecidos",
    ],
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Agendamento Flexível",
    description: "Atendimento conforme sua disponibilidade",
  },
  {
    icon: CheckCircle,
    title: "Garantia de Qualidade",
    description: "Trabalho realizado com garantia e compromisso",
  },
  {
    icon: Droplets,
    title: "Produtos Especializados",
    description: "Utilizamos produtos adequados para cada material",
  },
];

/**
 * Manutenção e limpeza no padrão visual do site: títulos em Montserrat caixa
 * alta com sobretítulo caramelo, cards de serviço com o Spotlight Card (vidro
 * escuro + brilho caramelo que segue o cursor), diferenciais em linhas de
 * vidro e um banner final com a foto do hero e borda branca arredondada.
 * Fica sobre o degradê marrom escuro -> caramelo definido em app/page.tsx.
 */
const MaintenanceSection = () => {
  return (
    <section id="manutencao" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--caramel)]">
            Cuidado contínuo
          </p>
          <h2 className="mb-4 font-display font-extrabold uppercase text-white">
            Manutenção e limpeza
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Mantenha suas cortinas e persianas sempre em perfeito estado com
            nossos serviços especializados de limpeza, manutenção e reparos
          </p>
        </motion.div>

        {/* Serviços */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(227, 174, 70, 0.9)"
                  intensity={0.2}
                  spotlightSize={320}
                  borderGlow={0.9}
                  className="group h-full rounded-[28px] backdrop-blur-sm"
                  style={
                    {
                      "--spotlight-card-surface": "rgba(255, 255, 255, 0.05)",
                      "--spotlight-card-border": "rgba(255, 255, 255, 0.1)",
                    } as React.CSSProperties
                  }
                >
                  <div className="flex h-full flex-col p-7 md:p-8">
                    <div className="mb-6 flex items-start justify-between">
                      <Icon className="h-9 w-9 text-[var(--caramel)] transition-transform duration-300 group-hover:scale-110" />
                      <span className="font-display text-5xl font-extrabold leading-none text-white/10">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mb-3 font-display text-xl font-bold uppercase text-white">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-white/65">
                      {service.description}
                    </p>

                    <ul className="mt-auto space-y-2.5 border-t border-white/10 pt-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--caramel)]" />
                          <span className="text-sm text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Diferenciais */}
        <div className="mt-20 grid grid-cols-1 items-center gap-10 lg:mt-28 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--caramel)]">
              Diferenciais
            </p>
            <h3 className="mb-5 font-display text-3xl font-extrabold uppercase leading-tight text-white md:text-4xl">
              Por que escolher nossos serviços?
            </h3>
            <p className="max-w-xl text-lg leading-relaxed text-white/70">
              Do diagnóstico à entrega, cada peça recebe o cuidado certo para o
              seu material: técnicos especializados, produtos adequados e um
              orçamento claro antes de qualquer serviço.
            </p>
          </motion.div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-colors duration-300 hover:border-[rgba(227,174,70,0.4)] hover:bg-white/[0.09]"
                >
                  <Icon className="h-7 w-7 flex-shrink-0 text-[var(--caramel)]" />
                  <div>
                    <h4 className="font-display text-base font-bold uppercase text-white">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-white/65">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Banner de orçamento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-20 overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] lg:mt-28"
        >
          <Image
            src="/images/persianas-bg.jpg"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
          <div className="relative flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-2xl">
              <h3 className="mb-3 font-display text-2xl font-extrabold uppercase text-white md:text-3xl">
                Suas cortinas e persianas como novas
              </h3>
              <p className="text-lg text-white/80">
                Entre em contato e solicite um orçamento personalizado para
                manutenção ou limpeza das suas cortinas e persianas
              </p>
            </div>
            <MagneticFillButton href="#contato" className="flex-shrink-0">
              Solicitar orçamento
              <ArrowRight className="h-5 w-5" />
            </MagneticFillButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MaintenanceSection;
