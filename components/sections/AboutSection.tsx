"use client";

import { motion } from "framer-motion";
import { Award, Users, Shield, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, value: "25+", label: "Anos de Experiência" },
  { icon: Users, value: "1000+", label: "Clientes Satisfeitos" },
  { icon: Shield, value: "100%", label: "Garantia" },
  { icon: TrendingUp, value: "Top", label: "Qualidade Premium" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gradient mb-6">QUEM SOMOS</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Com mais de <strong>25 anos de experiência</strong> na
                fabricação, instalação e manutenção de persianas, cortinas e
                toldos em diversos materiais e para variadas aplicações, a{" "}
                <strong>New Line</strong> é uma empresa focada em promover
                conforto e usabilidade aos espaços onde colabora.
              </p>
              <p>
                Nossa experiência nos permite oferecer soluções resistentes e
                seguras, sempre com foco em um atendimento próximo e
                personalizado.
              </p>
              <p>
                A empresa vem ampliando constantemente sua atuação como parceira
                direta na concepção de novos projetos. Localizada em{" "}
                <strong>Colombo</strong>, região metropolitana de Curitiba,
                apresenta em seu portfólio atendimentos em todo o estado do{" "}
                <strong>Paraná</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center group"
                  >
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--brown)] to-[var(--caramel)] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-[var(--brown)] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
