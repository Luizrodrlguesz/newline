"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home,
  Warehouse,
  Waves,
  Building2,
  Store,
  Coffee,
  Dumbbell,
  Wine,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

interface Application {
  icon: LucideIcon;
  label: string;
  description: string;
  image: string;
}

// Fotos CC0 (créditos em public/images/aplicacoes/CREDITOS.md)
const applications: Application[] = [
  {
    icon: Warehouse,
    label: "Garagem",
    description:
      "Persianas e cortinas que controlam a luz e o calor, deixando a garagem mais organizada e agradável.",
    image: "/images/aplicacoes/garagem.jpg",
  },
  {
    icon: Home,
    label: "Janela",
    description:
      "Persianas e cortinas sob medida para controlar a luz, garantir privacidade e valorizar cada ambiente.",
    image: "/images/aplicacoes/janela.jpg",
  },
  {
    icon: Building2,
    label: "Deck",
    description:
      "Cortinas e persianas que deixam o deck coberto agradável a qualquer hora, sem abrir mão da vista.",
    image: "/images/aplicacoes/deck.jpg",
  },
  {
    icon: Home,
    label: "Pátios",
    description:
      "Cortinas que filtram a luz na medida certa e transformam o pátio coberto em um espaço de convivência.",
    image: "/images/aplicacoes/patios.jpg",
  },
  {
    icon: Waves,
    label: "Piscina",
    description:
      "Cortinas e persianas resistentes ao sol e à umidade para a área coberta da piscina.",
    image: "/images/aplicacoes/piscina.jpg",
  },
  {
    icon: Building2,
    label: "Terraço",
    description:
      "Cortinas e persianas que controlam a luz e garantem privacidade para aproveitar o terraço o ano inteiro.",
    image: "/images/aplicacoes/terraco.jpg",
  },
  {
    icon: Home,
    label: "Áreas de lazer",
    description:
      "Cortinas e persianas que deixam churrasqueiras e espaços gourmet aconchegantes e prontos para receber.",
    image: "/images/aplicacoes/areas-de-lazer.jpg",
  },
  {
    icon: Dumbbell,
    label: "Academias",
    description:
      "Controle de luminosidade e temperatura para treinos mais confortáveis e ambientes bem ventilados.",
    image: "/images/aplicacoes/academias.jpg",
  },
  {
    icon: Wine,
    label: "Bares",
    description:
      "Cortinas e persianas que criam o clima certo e deixam o ambiente mais aconchegante para os clientes.",
    image: "/images/aplicacoes/bares.jpg",
  },
  {
    icon: Store,
    label: "Lojas",
    description:
      "Persianas e cortinas que protegem vitrines e produtos do sol, valorizando o conforto de quem compra.",
    image: "/images/aplicacoes/lojas.jpg",
  },
  {
    icon: UtensilsCrossed,
    label: "Restaurantes",
    description:
      "Ambientes internos e externos aconchegantes, com luz controlada e mais mesas aproveitáveis.",
    image: "/images/aplicacoes/restaurantes.jpg",
  },
  {
    icon: Coffee,
    label: "Cafés",
    description:
      "Charme e conforto para salões e varandas, do café da manhã ao fim de tarde.",
    image: "/images/aplicacoes/cafes.jpg",
  },
];

const ApplicationCard = ({
  app,
  index,
}: {
  app: Application;
  index: number;
}) => {
  const Icon = app.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="flex h-full flex-col overflow-hidden rounded-[28px] border-[6px] border-white bg-white shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)]"
    >
      <div className="relative aspect-[4/3] w-full flex-shrink-0 overflow-hidden rounded-[22px]">
        <Image
          src={app.image}
          alt={app.label}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-3">
          <Icon className="h-6 w-6 text-[var(--brown-light)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--brown-light)]">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(applications.length).padStart(2, "0")}
          </span>
        </div>
        <h3 className="font-display text-xl font-extrabold uppercase text-gray-800">
          {app.label}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600">
          {app.description}
        </p>
      </div>
    </motion.div>
  );
};

const ApplicationsSection = () => {
  return (
    <section id="aplicacoes" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brown-light)]">
            Onde aplicar
          </p>
          <h2 className="mb-4 font-display font-extrabold uppercase text-gray-800">
            Aplicações
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções versáteis para diversos ambientes e necessidades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {applications.map((app, i) => (
            <ApplicationCard key={app.label} app={app} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
