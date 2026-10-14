"use client";

import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlight-card";
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

/**
 * Grade bento simétrica para os 7 produtos (inspirada no Magic Bento da React
 * Bits): no desktop são 3 colunas com o primeiro e o último card largos,
 * formando um desenho espelhado (largo+1 / 1+1+1 / 1+largo); no tablet são 2
 * colunas com o primeiro card largo no topo e três pares abaixo.
 */
const BENTO_SPANS: Record<number, string> = {
  0: "md:col-span-2",
  6: "md:col-span-1 lg:col-span-2",
};

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
    maxHeight?: number;
  }>({ top: 0, left: 0, side: "right" });
  const updatePositionRef = useRef<(() => void) | null>(null);

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
      // Área útil na vertical: abaixo do header flutuante e com uma margem
      // embaixo. O popup nunca passa disso (se não couber, rola por dentro).
      const topSafe = 96;
      const bottomSafe = 16;
      const maxHeight = viewportHeight - topSafe - bottomSafe;
      // Altura real quando o popup já está na tela; antes disso, uma estimativa.
      const popupHeight = Math.min(
        popupRef.current?.scrollHeight ?? Math.min(600, maxHeight),
        maxHeight
      );


      const spaceRight = viewportWidth - cardRect.right;
      const spaceLeft = cardRect.left;

      let left: number;
      let top: number;
      let side: "right" | "left";


      if (viewportWidth < 768) {
        left = (viewportWidth - popupWidth) / 2;
        side = "right";
      } else {

        // Abre para o lado com mais espaço em relação ao centro do card.
        const shouldOpenLeft =
          cardRect.left + cardRect.width / 2 > viewportWidth / 2;

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

      // Alinha com o topo do card e empurra para cima o quanto for preciso
      // para caber inteiro na tela, sem subir por trás do header.
      top = Math.min(cardRect.top, viewportHeight - bottomSafe - popupHeight);
      top = Math.max(topSafe, top);

      setPopupPosition({
        top,
        left,
        side,
        maxHeight,
      });
    };
    updatePositionRef.current = updatePosition;

    requestAnimationFrame(() => {
      updatePosition();
    });
    
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      updatePositionRef.current = null;
    };
  }, [isHovered]);

  // Quando o popup aparece, recalcula com a altura real dele.
  const popupVisible = isHovered && popupPosition.top > 0;
  useEffect(() => {
    if (popupVisible) updatePositionRef.current?.();
  }, [popupVisible]);

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
      className={`relative h-72 md:h-auto ${BENTO_SPANS[index] ?? ""} ${isMobile ? "cursor-pointer" : ""}`}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
      onClick={handleCardClick}
            >
      <SpotlightCard
        spotlightColor="rgba(227, 174, 70, 0.9)"
        intensity={0.25}
        spotlightSize={320}
        borderGlow={0.9}
        className={`group h-full rounded-2xl ${isMobile ? "active:scale-[0.98]" : ""} transition-transform duration-300`}
        style={
          {
            "--spotlight-card-surface": "#1f1915",
            "--spotlight-card-border": "rgba(255, 255, 255, 0.08)",
          } as React.CSSProperties
        }
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={index === 0 || index === 6 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
        />
        <div className="absolute inset-0 -z-[15] bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
        <div className="relative flex h-full flex-col justify-end p-6">
          <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--caramel)]">
            {product.variants.length} opções
          </span>
          <h3 className="font-display text-xl font-bold text-white md:text-2xl">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-white/70">{product.description}</p>
        </div>
      </SpotlightCard>

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
                className="fixed z-[9999] w-[90vw] max-w-[400px] overflow-y-auto bg-white rounded-lg shadow-2xl border border-gray-200"
                style={{
                  top: `${popupPosition.top}px`,
                  left: `${popupPosition.left}px`,
                  maxHeight: popupPosition.maxHeight,
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
  // Fundo marrom escuro (o mesmo que fica por trás do hero, então a persiana
  // sobe sem faixa clara). Topo mais curto que o section-padding para chegar
  // logo no conteúdo. O `relative` é obrigatório: o bloco do hero (posicionado,
  // com fundo) sobrepõe os primeiros 100vh desta seção e, sem ele, cobriria o
  // título.
  return (
    <section
      id="produtos"
      className="relative bg-[#17120f] pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--caramel)]">
            Nossas linhas
          </p>
          <h2 className="mb-4 font-display font-extrabold uppercase text-white">
            Produtos
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:auto-rows-[260px] lg:grid-cols-3 lg:auto-rows-[280px] lg:gap-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
