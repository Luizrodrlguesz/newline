"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ProductVariant {
  name: string;
  image: string;
  description: string;
}

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  category: string;
  variants: ProductVariant[];
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Persiana Horizontal",
    image: "/images/persiana-1.jpeg",
    description: "Elegância e sofisticação para seu ambiente",
    category: "Persiana Horizontal",
    variants: [
      {
        name: "Madeira",
        image: "/images/persiana-1.jpeg",
        description: "Elegância natural com madeira de alta qualidade",
      },
      {
        name: "PVC",
        image: "/images/persiana-2.jpeg",
        description: "Resistente à umidade, ideal para banheiros e cozinhas",
      },
      {
        name: "Alumínio",
        image: "/images/persiana-3.jpeg",
        description: "Durabilidade e leveza para qualquer ambiente",
      },
      {
        name: "50mm",
        image: "/images/persiana-4.jpeg",
        description: "Lâminas largas para maior controle de luz",
      },
    ],
    features: [
      "Controle total de luminosidade",
      "Isolamento térmico e acústico",
      "Fácil limpeza e manutenção",
      "Variedade de cores e materiais",
    ],
  },
  {
    id: 2,
    name: "Persiana Vertical",
    image: "/images/persiana-2.jpeg",
    description: "Controle de luminosidade com estilo moderno",
    category: "Persiana Vertical",
    variants: [
      {
        name: "Supreme",
        image: "/images/persiana-2.jpeg",
        description: "Design moderno e sofisticado",
      },
      {
        name: "Clássica",
        image: "/images/persiana-3.jpeg",
        description: "Tradição e qualidade em um só produto",
      },
      {
        name: "Tecido",
        image: "/images/persiana-1.jpeg",
        description: "Suavidade e elegância em tecido",
      },
    ],
    features: [
      "Ideal para portas e janelas grandes",
      "Economia de espaço",
      "Fácil manuseio",
      "Variedade de tecidos e cores",
    ],
  },
  {
    id: 3,
    name: "Cortina Rolô",
    image: "/images/persiana-3.jpeg",
    description: "Praticidade e funcionalidade",
    category: "Cortina Rolô",
    variants: [
      {
        name: "Blackout",
        image: "/images/persiana-3.jpeg",
        description: "Bloqueio total de luz para melhor descanso",
      },
      {
        name: "DUO",
        image: "/images/persiana-4.jpeg",
        description: "Dupla camada: tecido e blackout",
      },
      {
        name: "Translúcida",
        image: "/images/persiana-1.jpeg",
        description: "Luz suave e privacidade",
      },
    ],
    features: [
      "Sistema de enrolamento prático",
      "Economia de espaço",
      "Variedade de tecidos",
      "Controle de luz personalizado",
    ],
  },
  {
    id: 4,
    name: "Cortina Miragem",
    image: "/images/persiana-4.jpeg",
    description: "Efeito visual único e moderno",
    category: "Cortina Miragem",
    variants: [
      {
        name: "Clássica",
        image: "/images/persiana-4.jpeg",
        description: "Efeito de profundidade e movimento",
      },
      {
        name: "Premium",
        image: "/images/persiana-1.jpeg",
        description: "Tecido de alta qualidade",
      },
    ],
    features: [
      "Efeito visual diferenciado",
      "Controle de privacidade",
      "Fácil instalação",
      "Variedade de cores",
    ],
  },
  {
    id: 5,
    name: "Cortina Painel",
    image: "/images/persiana-1.jpeg",
    description: "Modernidade para grandes áreas",
    category: "Cortina Painel",
    variants: [
      {
        name: "Tecido",
        image: "/images/persiana-1.jpeg",
        description: "Painéis deslizantes em tecido",
      },
      {
        name: "Blackout",
        image: "/images/persiana-2.jpeg",
        description: "Bloqueio total de luz",
      },
    ],
    features: [
      "Ideal para grandes vãos",
      "Sistema deslizante suave",
      "Máximo controle de luz",
      "Design minimalista",
    ],
  },
  {
    id: 6,
    name: "Cortina Romana",
    image: "/images/persiana-2.jpeg",
    description: "Elegância atemporal",
    category: "Cortina Romana",
    variants: [
      {
        name: "Clássica",
        image: "/images/persiana-2.jpeg",
        description: "Dobras elegantes e sofisticadas",
      },
      {
        name: "Romanshine",
        image: "/images/persiana-3.jpeg",
        description: "Charme clássico renovado",
      },
    ],
    features: [
      "Dobras elegantes",
      "Controle preciso de luz",
      "Variedade de tecidos",
      "Instalação simples",
    ],
  },
  {
    id: 7,
    name: "Cortinas para Coberturas",
    image: "/images/persiana-3.jpeg",
    description: "Proteção e conforto térmico",
    category: "Coberturas",
    variants: [
  {
        name: "Vidro",
    image: "/images/persiana-3.jpeg",
        description: "Proteção para coberturas de vidro",
  },
  {
        name: "Térmica",
    image: "/images/persiana-4.jpeg",
        description: "Isolamento térmico eficiente",
      },
    ],
    features: [
      "Proteção UV",
      "Controle térmico",
      "Resistente às intempéries",
      "Instalação especializada",
    ],
  },
];

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const [popupPosition, setPopupPosition] = useState<{
    top: number;
    left: number;
    side: "right" | "left";
  }>({ top: 0, left: 0, side: "right" });

  useEffect(() => {
    setMounted(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!isHovered) {
      setPopupPosition({ top: 0, left: 0, side: "right" });
      return;
    }

    const updatePosition = () => {
      if (!cardRef.current) return;

      const cardRect = cardRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Largura do popup (responsiva)
      const popupWidth = Math.min(400, viewportWidth * 0.9);
      const spacing = 20;
      const popupMaxHeight = Math.min(600, viewportHeight * 0.8);


      const spaceRight = viewportWidth - cardRect.right;
      const spaceLeft = cardRect.left;

      let left: number;
      let top: number;
      let side: "right" | "left";


      if (viewportWidth < 768) {
        left = (viewportWidth - popupWidth) / 2;
        side = "right";
      } else {

        let colsPerRow = 1;
        if (viewportWidth >= 1280) {
          colsPerRow = 4;
        } else if (viewportWidth >= 1024) {
          colsPerRow = 3;
        } else if (viewportWidth >= 640) {
          colsPerRow = 2;
        }

        const positionInRow = index % colsPerRow;
        
        const shouldOpenLeft = positionInRow >= Math.ceil(colsPerRow / 2);

        if (shouldOpenLeft && spaceLeft >= popupWidth + spacing) {
          left = cardRect.left - popupWidth - spacing;
          side = "left";
        } else if (!shouldOpenLeft && spaceRight >= popupWidth + spacing) {
          left = cardRect.right + spacing;
          side = "right";
        } else {
          if (spaceRight >= spaceLeft) {
            left = cardRect.right + spacing;
            side = "right";
          } else {
            left = cardRect.left - popupWidth - spacing;
            side = "left";
          }
        }
      }

      top = cardRect.top;
      
      if (cardRect.top + popupMaxHeight > viewportHeight) {
        top = Math.max(20, cardRect.bottom - popupMaxHeight);
      }

      if (top < 20) {
        top = 20;
      }

      setPopupPosition({
        top,
        left,
        side,
      });
    };

    requestAnimationFrame(() => {
      updatePosition();
    });
    
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isHovered, index]);

  const handleCardClick = () => {
    if (isMobile) {
      setIsModalOpen(true);
    }
  };

  const handleCardMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleCardMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  return (
        <motion.div
      ref={cardRef}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`relative ${isMobile ? 'cursor-pointer' : ''}`}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
      onClick={handleCardClick}
            >
      <Card className={`group overflow-visible hover:shadow-xl transition-all duration-300 h-full flex flex-col ${isMobile ? 'active:scale-[0.98]' : ''}`}>
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
      </Card>

      {/* Popup para Desktop (hover) - mantém comportamento original */}
      {mounted && !isMobile &&
        createPortal(
          <AnimatePresence>
            {isHovered && popupPosition.top > 0 && (
              <motion.div
                ref={popupRef}
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="fixed z-[9999] w-[90vw] max-w-[400px] max-h-[80vh] overflow-y-auto bg-white rounded-lg shadow-2xl border border-gray-200"
                style={{
                  top: `${popupPosition.top}px`,
                  left: `${popupPosition.left}px`,
                  pointerEvents: "auto",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="p-6">
                  <div className="h-1 w-20 bg-gradient-to-r from-[var(--brown)] to-[var(--caramel)] rounded-full mb-4"></div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {product.category}
                  </h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-lg text-gray-800 mb-3">
                      Tipos Disponíveis:
                    </h4>
                    <div className="space-y-4">
                      {product.variants.map((variant, idx) => (
                        <div
                          key={idx}
                          className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                            <Image
                              src={variant.image}
                              alt={variant.name}
                              fill
                              className="object-cover"
                              sizes="96px"
                            />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-800 mb-1">
                              {variant.name}
                            </h5>
                            <p className="text-sm text-gray-600">
                              {variant.description}
                            </p>
                          </div>
                        </div>
          ))}
        </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-3">
                      Características:
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[var(--brown)] mt-1">✓</span>
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

      {/* Modal para Mobile (click) */}
      {mounted && isMobile &&
        createPortal(
          <AnimatePresence>
            {isModalOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/50 z-[9998] flex items-center justify-center p-4"
                  onClick={() => setIsModalOpen(false)}
                >
                  {/* Modal */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative z-[9999] w-full max-w-[500px] max-h-[90vh] overflow-hidden bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex-shrink-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-800">
                        {product.category}
                      </h3>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Fechar modal"
                      >
                        <X className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-6">
                    <div className="h-1 w-20 bg-gradient-to-r from-[var(--brown)] to-[var(--caramel)] rounded-full mb-4"></div>
                    <p className="text-gray-600 mb-6">{product.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-lg text-gray-800 mb-3">
                        Tipos Disponíveis:
                      </h4>
                      <div className="space-y-4">
                        {product.variants.map((variant, idx) => (
                          <div
                            key={idx}
                            className="flex gap-4 p-3 rounded-lg bg-gray-50"
                          >
                            <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                              <Image
                                src={variant.image}
                                alt={variant.name}
                                fill
                                className="object-cover"
                                sizes="96px"
                              />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-gray-800 mb-1">
                                {variant.name}
                              </h5>
                              <p className="text-sm text-gray-600">
                                {variant.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-3">
                        Características:
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[var(--brown)] mt-1">✓</span>
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    </div>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </motion.div>
  );
};

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
            <span className="hidden md:inline">
              Passe o mouse sobre os cards para conhecer mais sobre cada tipo de
              persiana e cortina
            </span>
            <span className="md:hidden">
              Toque nos cards para conhecer mais sobre cada tipo de
              persiana e cortina
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
