"use client";

import { motion } from "framer-motion";
import { Sparkles, Droplets, Wrench, Shield, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

const MaintenanceSection = () => {
  return (
    <section id="manutencao" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gradient mb-4">MANUTENÇÃO E LIMPEZA</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantenha suas cortinas e persianas sempre em perfeito estado com
            nossos serviços especializados de limpeza, manutenção e reparos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--brown)] to-[var(--caramel)] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[var(--brown)] mt-1 flex-shrink-0">
                            ✓
                          </span>
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Por que escolher nossos serviços?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Com mais de 25 anos de experiência, oferecemos serviços
              especializados que preservam a qualidade e prolongam a vida útil
              dos seus produtos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--brown)] to-[var(--caramel)] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 mb-6">
            Entre em contato e solicite um orçamento personalizado para
            manutenção ou limpeza das suas cortinas e persianas
          </p>
          <a
            href="#contato"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[var(--brown)] to-[var(--caramel)] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Solicitar Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MaintenanceSection;

