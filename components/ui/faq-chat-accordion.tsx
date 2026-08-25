"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: "left" | "right";
}

interface FaqAccordionProps {
  data: FAQItem[];
  className?: string;
  timestamp?: string;
  questionClassName?: string;
  answerClassName?: string;
}

export function FaqAccordion({
  data,
  className = "",
  timestamp = "Atendimento VM Gráfica • Respondemos em poucos minutos",
  questionClassName = "",
  answerClassName = "",
}: FaqAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <div className={`p-4 max-w-[800px] mx-auto ${className}`}>
      {timestamp && (
        <div className="mb-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          {timestamp}
        </div>
      )}

      <Accordion.Root
        type="single"
        collapsible
        value={openItem || ""}
        onValueChange={(value) => setOpenItem(value)}
      >
        {data.map((item) => (
          <Accordion.Item 
            value={item.id.toString()} 
            key={item.id} 
            className="mb-4 group"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between gap-x-4 text-left py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-xl">
                <div
                  className={`relative flex items-center space-x-2 rounded-2xl px-4 py-3 transition-all duration-200 shadow-sm border border-border/50 ${
                    openItem === item.id.toString() 
                      ? "bg-primary/10 text-primary border-primary/30" 
                      : "bg-card hover:bg-muted text-foreground"
                  } ${questionClassName}`}
                >
                  {item.icon && (
                    <span
                      className={`absolute -top-3 text-lg select-none ${
                        item.iconPosition === "right" ? "right-2" : "left-2"
                      }`}
                      style={{
                        transform: item.iconPosition === "right" 
                          ? "rotate(7deg)" 
                          : "rotate(-4deg)",
                      }}
                    >
                      {item.icon}
                    </span>
                  )}
                  <span className="font-semibold text-sm md:text-base">{item.question}</span>
                </div>

                <span 
                  className={`flex items-center justify-center w-8 h-8 rounded-full border border-border/60 transition-colors ${
                    openItem === item.id.toString() 
                      ? "bg-primary text-primary-foreground border-primary" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {openItem === item.id.toString() ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild forceMount>
              <motion.div
                initial="collapsed"
                animate={openItem === item.id.toString() ? "open" : "collapsed"}
                variants={{
                  open: { opacity: 1, height: "auto", marginTop: "8px" },
                  collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <div className="ml-4 md:ml-8 pl-3 border-l-2 border-primary/30">
                  <div
                    className={`relative max-w-xl rounded-2xl bg-gradient-to-r from-[#0084D1] to-[#0070BA] px-5 py-3.5 text-sm md:text-base text-white shadow-md leading-relaxed ${answerClassName}`}
                  >
                    {item.answer}
                  </div>
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
