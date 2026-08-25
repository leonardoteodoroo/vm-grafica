import { FaqAccordion } from "./faq-chat-accordion";

export const vmGraficaFaqData = [
  {
    id: 1,
    question: "Eu não tenho a arte pronta, a VM Gráfica cria para mim?",
    answer: "Sim! Nossa equipe de design desenvolve a arte exclusiva do seu impresso, brinde ou personalizado. Enviamos a prévia digital para você aprovar antes de qualquer impressão.",
    icon: "🎨",
    iconPosition: "left" as const,
  },
  {
    id: 2,
    question: "Qual o endereço e horário de atendimento?",
    answer: "Estamos na Rua CP, 05 - Qd 09 LT 18 - Conjunto Primavera, Goiânia - GO (CEP 74477-258). Atendemos de Segunda a Sexta das 08h às 18h e aos Sábados das 08h às 12h.",
    icon: "📍",
    iconPosition: "right" as const,
  },
  {
    id: 3,
    question: "Quais as formas de pagamento aceitas?",
    answer: "Aceitamos PIX, cartões de crédito e débito. Oferecemos retirada em balcão em Goiânia ou entrega expressa via motoboy / transportadora em toda a região metropolitana.",
    icon: "💳",
    iconPosition: "left" as const,
  },
  {
    id: 4,
    question: "Qual o prazo de produção para itens personalizados?",
    answer: "Itens a pronta entrega ou pequenos lotes saem em até 24h a 48h úteis após aprovação da arte. Para tiragens maiores ou DTF UV sob demanda, consulte nossos prazos rápidos com os consultores.",
    icon: "⚡",
    iconPosition: "right" as const,
  },
  {
    id: 5,
    question: "Como funciona a tecnologia DTF UV para brindes?",
    answer: "O DTF UV permite aplicação em relevo e alta aderência em materiais rígidos (vidro, acrílico, plástico, madeira, metal), resistente a lavagens e com cores ultra-vibrantes sem limite de tiragem mínima.",
    icon: "✨",
    iconPosition: "left" as const,
  },
];

export function VmGraficaFaqDemo() {
  return (
    <section className="py-12 bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-2">Dúvidas Frequentes</h2>
        <p className="text-center text-slate-400 mb-8">Tire suas dúvidas sobre criação de arte, prazos e entregas em Goiânia.</p>
        <FaqAccordion 
          data={vmGraficaFaqData}
          timestamp="Central de Atendimento • Segunda a Sábado"
        />
      </div>
    </section>
  );
}

export default VmGraficaFaqDemo;
