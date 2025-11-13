"use client";

import { motion } from "framer-motion";
import { Package, Star, Headphones, MapPin } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Diversificação",
    description:
      "Lonas, ferragens, aviamentos e uma ampla gama de materiais de alta qualidade para atender todas as suas necessidades.",
  },
  {
    icon: Star,
    title: "Exclusividade",
    description:
      "Nossa equipe especializada orça e fabrica projetos sob medida, garantindo soluções únicas para cada cliente.",
  },
  {
    icon: Headphones,
    title: "Atendimento",
    description:
      "Experiência consolidada com clientes que exigem alto padrão de qualidade e atendimento diferenciado.",
  },
  {
    icon: MapPin,
    title: "Ampla Atuação",
    description:
      "Atendemos em todo o estado do Paraná e Santa Catarina, levando qualidade e excelência onde você estiver.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding gradient-brown text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/images/persianas-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            NOSSOS DIFERENCIAIS
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Qualidade, experiência e compromisso em cada projeto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-10 h-10" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/90 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
