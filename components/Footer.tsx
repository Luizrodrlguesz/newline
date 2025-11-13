"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#381617] text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[var(--caramel-light)]">
              CONTATO
            </h3>
            <div className="space-y-3">
              <a
                href="tel:4136217074"
                className="flex items-start space-x-3 hover:text-[var(--caramel-light)] transition-colors"
              >
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>(41) 3621-7074</span>
              </a>
              <a
                href="https://wa.me/5541984982581?text=Olá,%20vi%20seu%20contato%20e%20gostaria%20de%20saber%20mais!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-[var(--caramel-light)] transition-colors"
              >
                <BsWhatsapp className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>(41) 98498-2581 (WhatsApp)</span>
              </a>
              <a
                href="mailto:contato@newlinepersianas.com.br"
                className="flex items-start space-x-3 hover:text-[var(--caramel-light)] transition-colors"
              >
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>contato@newlinepersianas.com.br</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=R.+Estrada+da+Ribeira,+2612,+Maracanã,+Colombo-PR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-[var(--caramel-light)] transition-colors"
              >
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  R. Estrada da Ribeira, 2612
                  <br />
                  Maracanã, Colombo-PR
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[var(--caramel-light)]">
              SOBRE A NEW LINE
            </h3>
            <p className="text-sm leading-relaxed">
              A NEW LINE Persianas e Cortinas é uma empresa especializada no
              comércio e instalação de Cortinas e Persianas em Curitiba e
              região, com projetos executados por profissionais qualificados,
              produtos de ótima qualidade e os melhores preços.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[var(--caramel-light)]">
              REDES SOCIAIS
            </h3>
            <div className="space-y-4">
              <a
                href="https://www.facebook.com/New-Line-Persianas-e-Cortinas-559553994243016/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-[var(--caramel-light)] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-5 h-5" />
                </div>
                <span>Siga-nos no Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/persianasnewline/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-[var(--caramel-light)] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span>Siga-nos no Instagram</span>
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm">Uma empresa do Grupo Comercial GRW</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/20 text-center text-sm"
        >
          <p>
            © {currentYear} New Line Persianas e Cortinas. Todos os direitos
            reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
