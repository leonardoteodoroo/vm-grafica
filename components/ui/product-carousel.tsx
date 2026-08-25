"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, ArrowRight } from "lucide-react";

// --- TYPE DEFINITIONS ---
export interface Product {
  id: string | number;
  name: string;
  category?: string;
  quantity: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  deliveryTime: string;
  imageUrl: string;
  linkUrl?: string;
  badgeType?: "success" | "warning" | "magenta" | "cyan";
}

interface ProductCardProps {
  product: Product;
}

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllHref?: string;
  className?: string;
}

// --- SUB-COMPONENTS ---
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formattedPrice = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  
  const formattedOriginalPrice = product.originalPrice
    ? product.originalPrice.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    : null;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 },
      }}
      className="group relative w-64 sm:w-64 flex-shrink-0 snap-start sm:snap-start snap-always"
    >
      <div className="flex flex-col h-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#0084D1] dark:hover:border-[#0084D1]">
        {/* Imagem e Badges */}
        <div className="relative h-44 overflow-hidden bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-3">
          <img
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
          {product.discount && (
            <div className="absolute left-3 top-3 rounded-full bg-emerald-500 text-white px-2.5 py-0.5 text-xs font-extrabold shadow-sm">
              {product.discount}
            </div>
          )}
        </div>

        {/* Informações do Produto */}
        <div className="flex flex-col justify-between flex-1 p-4 space-y-3">
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
              <Clock className="h-3.5 w-3.5 text-[#0084D1]" />
              <span>{product.deliveryTime}</span>
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{product.quantity}</p>
          </div>

          {/* Preços e Ação de Pedido */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-base font-extrabold text-slate-900 dark:text-slate-100">
                {formattedPrice}
              </span>
              {formattedOriginalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  {formattedOriginalPrice}
                </span>
              )}
            </div>

            <a
              href={product.linkUrl || "#simulador"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#0084D1] hover:bg-[#0070BA] text-white px-3.5 py-2 text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              <span>PEDIR</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
export const ProductCarousel = React.forwardRef<HTMLDivElement, ProductCarouselProps>(
  ({ title, subtitle, products, viewAllHref = "#produtos", className = "" }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [isScrollable, setIsScrollable] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [pageCount, setPageCount] = React.useState(4);

    const getScrollStep = () => {
      const el = scrollContainerRef.current;
      if (!el) return 280;
      const cardWidth = 260;
      const gap = 16;
      if (window.innerWidth <= 640) {
        return cardWidth + gap;
      }
      const visibleCount = Math.max(1, Math.floor(el.clientWidth / (cardWidth + gap)));
      return (cardWidth + gap) * visibleCount;
    };

    const handleScroll = (direction: "left" | "right") => {
      const el = scrollContainerRef.current;
      if (!el) return;

      const scrollLeft = el.scrollLeft;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const step = getScrollStep();

      if (direction === "right") {
        if (scrollLeft >= maxScroll - 10) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollTo({ left: Math.min(maxScroll, scrollLeft + step), behavior: "smooth" });
        }
      } else {
        if (scrollLeft <= 10) {
          el.scrollTo({ left: maxScroll, behavior: "smooth" });
        } else {
          el.scrollTo({ left: Math.max(0, scrollLeft - step), behavior: "smooth" });
        }
      }
    };

    const scrollToPage = (pageIdx: number) => {
      if (scrollContainerRef.current) {
        const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
        const targetScroll = (maxScroll / (pageCount - 1)) * pageIdx;
        scrollContainerRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
      }
    };

    const checkScrollState = React.useCallback(() => {
      const el = scrollContainerRef.current;
      if (!el) return;

      const scrollable = el.scrollWidth > el.clientWidth;
      setIsScrollable(scrollable);

      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll > 0) {
        const progress = el.scrollLeft / maxScroll;
        const currentActive = Math.min(Math.round(progress * (pageCount - 1)), pageCount - 1);
        setActiveIndex(currentActive);
      }
    }, [pageCount]);

    React.useEffect(() => {
      const el = scrollContainerRef.current;
      if (el) {
        const cardWidth = 260;
        const gap = 16;
        const step = window.innerWidth <= 640 ? (cardWidth + gap) : (cardWidth + gap) * Math.max(1, Math.floor(el.clientWidth / (cardWidth + gap)));
        const maxScroll = el.scrollWidth - el.clientWidth;
        const rawPages = Math.ceil(maxScroll / step) + 1;
        setPageCount(Math.min(Math.max(3, rawPages), 5));
      }
    }, [products.length]);

    React.useEffect(() => {
      checkScrollState();
      const el = scrollContainerRef.current;
      el?.addEventListener("scroll", checkScrollState);
      window.addEventListener("resize", checkScrollState);

      return () => {
        el?.removeEventListener("scroll", checkScrollState);
        window.removeEventListener("resize", checkScrollState);
      };
    }, [checkScrollState]);

    return (
      <section className={`relative w-full space-y-4 py-8 ${className}`} ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between px-4 sm:px-6 mb-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{subtitle}</p>
            )}
          </div>
          <a
            href={viewAllHref}
            className="inline-flex items-center gap-1 text-sm font-bold text-[#0084D1] hover:text-[#0070BA] transition-colors mt-2 md:mt-0"
          >
            <span>Ver catálogo completo</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-auto px-4 sm:px-6 pb-4 pt-1 scroll-smooth snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Controles Inferiores Cíclicos */}
          {isScrollable && (
            <div className="flex items-center justify-center gap-4 mt-4 pt-2">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                aria-label="Rolar para a esquerda"
                className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center transition-all opacity-90 hover:opacity-100 hover:border-slate-400 dark:hover:border-slate-600 hover:scale-105 active:scale-95 text-slate-800 dark:text-slate-200"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2" role="tablist" aria-label="Paginação do carrossel">
                {Array.from({ length: pageCount }).map((_, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => scrollToPage(idx)}
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Ir para página ${idx + 1}`}
                      className={`transition-all duration-200 flex items-center justify-center outline-none ${
                        isActive
                          ? "w-4 h-4 rounded-full border border-slate-900 dark:border-slate-100 bg-transparent"
                          : "w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                      }`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-slate-100" />
                      )}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => handleScroll("right")}
                aria-label="Rolar para a direita"
                className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center transition-all opacity-90 hover:opacity-100 hover:border-slate-400 dark:hover:border-slate-600 hover:scale-105 active:scale-95 text-slate-800 dark:text-slate-200"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    );
  }
);

ProductCarousel.displayName = "ProductCarousel";
