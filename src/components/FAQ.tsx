'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const faqs = [
  {
    question: "Why choose you over other staffing agencies?",
    answer:
      "Unlike most agencies, we've actually done this. I scaled my own marketing company from zero to $50K/month while working part-time solely by building, training, and mentoring international teams. After proving the model in my own business, I'm now replicating it for other founders, including multi-7-figure companies where we place division leads and account executives. We bring real operational experience, not just recruiting theory.",
  },
  {
    question: "What is your money back guarantee?",
    answer:
      "We offer two guarantees:\n\n• 90-Day Replacement Promise: If your hire isn't the right fit within 90 days, we'll replace them at no additional cost—no questions asked.\n\n• 100% Deposit Refund: If you're unsatisfied with our process or service delivery, we'll refund your entire deposit.\n\nYour investment is protected either way.",
  },
  {
    question: "How are their English skills?",
    answer:
      "All client-facing roles feature either native-level English or a subtle Spanish accent familiar to US audiences. Our division leads and senior positions maintain the same high standard of communication.",
  },
  {
    question: "On average, how long does the hiring process take?",
    answer:
      "Standard placements typically take 2-3 weeks. Basic operational roles can often be filled within 14 days. Highly specialized or executive-level positions may require additional time to ensure we find the perfect match.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-section-silver relative overflow-hidden">
      {/* Floating bubbles - more for liveliness */}
      <div className="bubble-float bubble-float-slow w-[280px] h-[280px] top-[5%] right-[5%] opacity-30" />
      <div className="bubble-float w-[200px] h-[200px] bottom-[25%] left-[3%] opacity-25" />
      <div className="bubble-float bubble-float-fast w-[120px] h-[120px] top-[35%] left-[20%] opacity-20" />
      <div className="bubble-float w-[160px] h-[160px] top-[60%] right-[15%] opacity-22" />
      <div className="bubble-float bubble-float-slow w-[100px] h-[100px] bottom-[10%] right-[30%] opacity-18" />

      {/* Glowing orbs */}
      <div className="orb-glow w-[500px] h-[500px] top-0 left-0" />
      <div className="orb-glow w-[400px] h-[400px] bottom-0 right-0" style={{ animationDelay: '2s' }} />
      <div className="orb-glow w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }} />

      {/* Cloud accents */}
      <div className="cloud-shape w-[350px] h-[180px] top-[10%] left-[55%] opacity-50" />
      <div className="cloud-shape w-[280px] h-[140px] -bottom-10 left-[10%] opacity-55" />
      <div className="cloud-shape w-[200px] h-[100px] top-[70%] right-[8%] opacity-40" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 px-6 py-2 bg-white border border-primary/20 text-primary font-semibold rounded-full shadow-sm">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Got questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re looking for,
            feel free to reach out.
          </p>
        </div>

        {/* FAQ accordion */}
        <Accordion type="single" collapsible className="w-full space-y-5">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/30 rounded-[20px] px-7 bg-white shadow-sm hover:shadow-lg transition-all duration-300 data-[state=open]:shadow-xl data-[state=open]:border-accent/40"
            >
              <AccordionTrigger className="text-left text-lg font-bold hover:no-underline py-7 gap-5">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 gradient-navy rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-7 pl-[68px] text-base whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
