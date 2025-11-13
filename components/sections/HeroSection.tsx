"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236B4423' fill-opacity='1' font-family='Arial, sans-serif' font-size='14' font-weight='bold'%3E%3Ctext x='10' y='20'%3EN%3C/text%3E%3Ctext x='50' y='20'%3EL%3C/text%3E%3Ctext x='10' y='60'%3EL%3C/text%3E%3Ctext x='50' y='60'%3EN%3C/text%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <Image
            src="/images/old-logo-1.png"
            alt="NEW LINE Logo"
            width={500}
            height={500}
            className="w-auto h-auto object-contain"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            <span className="text-[var(--brown)]">25 ANOS</span> de experiência
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
            Persianas, Cortinas e Toldos com qualidade, garantia e os melhores
            preços de Curitiba e região.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#contato">
            <Button
              size="lg"
              className="gradient-brown text-white text-lg px-8"
            >
              SOLICITE UM ORÇAMENTO
            </Button>
          </a>
          <a href="#produtos">
            <Button size="lg" variant="outline" className="text-lg px-8">
              CONHEÇA NOSSOS PRODUTOS
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#produtos">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-10 h-10 rounded-full bg-[var(--brown)] flex items-center justify-center cursor-pointer hover:bg-[var(--caramel)] transition-colors"
            >
              <ChevronDown className="w-6 h-6 text-white" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
