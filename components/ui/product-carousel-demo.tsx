import React from "react";
import { ProductCarousel, Product } from "./product-carousel";

export const vmGraficaExpressProducts: Product[] = [
  {
    id: "caneca-325",
    name: "Caneca de Porcelana 325ml Personalizada",
    category: "Presentes & Corporativo",
    quantity: "A partir de 1 unidade",
    price: 19.90,
    originalPrice: 35.00,
    discount: "43% OFF",
    deliveryTime: "Pronto em 24h",
    imageUrl: "/assets/images/caneca/caneca-1-branca-classica.jpg",
    linkUrl: "/produto-caneca.html",
  },
  {
    id: "caneca-magica",
    name: "Caneca Mágica Termossensível Fosca",
    category: "Presentes Criativos",
    quantity: "Revela estampa no calor",
    price: 29.90,
    originalPrice: 42.00,
    discount: "28% OFF",
    deliveryTime: "Pronto em 24h",
    imageUrl: "/assets/images/caneca/caneca-2-magica.jpg",
    linkUrl: "/produto-caneca.html",
  },
  {
    id: "cartao-300g",
    name: "Cartão de Visita 300g Verniz Localizado",
    category: "Corporativo",
    quantity: "Cento / Milheiro",
    price: 89.00,
    originalPrice: 110.00,
    discount: "19% OFF",
    deliveryTime: "48h a 72h úteis",
    imageUrl: "/assets/images/caneca/caneca-3-alca-colorida.jpg",
    linkUrl: "#simulador",
  },
  {
    id: "copo-dtf",
    name: "Copo & Taça Personalizada DTF UV",
    category: "Festas & Brindes",
    quantity: "Relevo e Verniz Alto Brilho",
    price: 3.50,
    originalPrice: 5.00,
    discount: "30% OFF",
    deliveryTime: "24h a 48h úteis",
    imageUrl: "/assets/images/caneca/caneca-4-alca-vermelha.jpg",
    linkUrl: "https://wa.me/5562993725371?text=Olá,%20quero%20um%20orçamento%20de%20Copos%20DTF%20UV!",
  },
  {
    id: "agenda-2026",
    name: "Agenda 2026 Personalizada Love / Medicina",
    category: "Papelaria Criativa",
    quantity: "Capa Dura Laminada",
    price: 49.90,
    originalPrice: 65.00,
    discount: "23% OFF",
    deliveryTime: "Pronto em 48h",
    imageUrl: "/assets/images/caneca/caneca-5-caixa-presente.jpg",
    linkUrl: "https://wa.me/5562993725371?text=Olá,%20gostaria%20de%20encomendar%20uma%20Agenda%202026!",
  },
  {
    id: "topo-bolo-3d",
    name: "Topo de Bolo 3D em Camadas Especiais",
    category: "Festas & Aniversários",
    quantity: "Corte Digital de Alta Precisão",
    price: 30.00,
    deliveryTime: "Entrega em 24h",
    imageUrl: "/assets/images/caneca/caneca-1-branca-classica.jpg",
    linkUrl: "https://wa.me/5562993725371?text=Olá,%20quero%20um%20topo%20de%20bolo%20personalizado!",
  },
];

export const VmGraficaExpressDemo = () => {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 py-10">
      <div className="container mx-auto">
        <ProductCarousel
          title="Pedidos Rápidos & Destaques Express"
          subtitle="Compre com poucos cliques e receba com rapidez em Goiânia e Região Metropolitana"
          products={vmGraficaExpressProducts}
          viewAllHref="#produtos"
        />
      </div>
    </div>
  );
};

export default VmGraficaExpressDemo;
