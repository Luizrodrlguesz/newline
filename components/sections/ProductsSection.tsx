"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Persiana Horizontal Madeira",
    image: "/images/persiana-1.jpeg",
    description: "Elegância e sofisticação em madeira natural",
  },
  {
    id: 2,
    name: "Persiana Vertical Supreme",
    image: "/images/persiana-2.jpeg",
    description: "Controle de luminosidade com estilo moderno",
  },
  {
    id: 3,
    name: "Persiana Vertical Clássica",
    image: "/images/persiana-3.jpeg",
    description: "Tradição e qualidade em um só produto",
  },
  {
    id: 4,
    name: "Persiana Horizontal 50mm",
    image: "/images/persiana-4.jpeg",
    description: "Resistência e durabilidade",
  },
  {
    id: 5,
    name: "Persiana Horizontal Alumínio",
    image: "/images/persiana-1.jpeg",
    description: "Praticidade e beleza",
  },
  {
    id: 6,
    name: "Cortina Rolô Blackout",
    image: "/images/persiana-2.jpeg",
    description: "Bloqueio total de luz",
  },
  {
    id: 7,
    name: "Cortina Miragem",
    image: "/images/persiana-3.jpeg",
    description: "Efeito visual único",
  },
  {
    id: 8,
    name: "Cortina Rolô DUO",
    image: "/images/persiana-4.jpeg",
    description: "Versatilidade e funcionalidade",
  },
  {
    id: 9,
    name: "Cortina Painel",
    image: "/images/persiana-1.jpeg",
    description: "Modernidade para grandes áreas",
  },
  {
    id: 10,
    name: "Cortinas para Coberturas de Vidro",
    image: "/images/persiana-2.jpeg",
    description: "Proteção e conforto térmico",
  },
  {
    id: 11,
    name: "Cortina Romanshine",
    image: "/images/persiana-3.jpeg",
    description: "Charme clássico renovado",
  },
  {
    id: 12,
    name: "Cortina Romana",
    image: "/images/persiana-4.jpeg",
    description: "Elegância atemporal",
  },
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="section-padding bg-[var(--white)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gradient mb-4">PRODUTOS</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça nossa linha completa de persianas e cortinas com qualidade
            garantida
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--brown)] to-[var(--caramel)] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <CardContent className="p-4 flex-grow">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <a href="#contato" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-[var(--brown)] group-hover:text-white group-hover:border-[var(--brown)] transition-colors"
                    >
                      SOLICITAR ORÇAMENTO
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a href="#contato">
            <Button size="lg" className="gradient-brown text-white">
              SOLICITE UM ORÇAMENTO SEM CUSTO
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
