"use client";

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
} from "lucide-react";

const applications = [
  { icon: Warehouse, label: "GARAGEM" },
  { icon: Home, label: "JANELA" },
  { icon: Building2, label: "DECK" },
  { icon: Home, label: "PÁTIOS" },
  { icon: Waves, label: "PISCINA" },
  { icon: Building2, label: "TERRAÇO" },
  { icon: Home, label: "ÁREAS DE LAZER" },
  { icon: Dumbbell, label: "ACADEMIAS" },
  { icon: Wine, label: "BARES" },
  { icon: Store, label: "LOJAS" },
  { icon: UtensilsCrossed, label: "RESTAURANTES" },
  { icon: Coffee, label: "CAFÉS" },
];

const ApplicationsSection = () => {
  return (
    <section id="aplicacoes" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gradient mb-4">APLICAÇÕES</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções versáteis para diversos ambientes e necessidades
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-[var(--brown)] to-[var(--caramel)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-semibold text-center text-gray-700 group-hover:text-[var(--brown)] transition-colors">
                  {app.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
