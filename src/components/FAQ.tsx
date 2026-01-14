'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How much do you charge for your services?",
    answer:
      "We charge a percentage of the candidate's first-year salary, only payable when you make a successful hire. This means there's no upfront cost or risk to you. The exact percentage depends on the role level and complexity. Contact us for a personalized quote.",
  },
  {
    question: "How long does the hiring process typically take?",
    answer:
      "On average, we present qualified candidates within 2-4 weeks of our initial consultation. The total time to hire depends on your interview process and decision timeline, but most clients complete their hire within 4-8 weeks.",
  },
  {
    question: "What types of roles do you fill?",
    answer:
      "We specialize in mid to senior-level positions across technology, marketing, sales, operations, and executive leadership. Whether you're looking for a software engineer, VP of Marketing, or C-suite executive, we have the network and expertise to find the right fit.",
  },
  {
    question: "What happens if the hire doesn't work out?",
    answer:
      "We stand behind our placements with a guarantee period. If your new hire doesn't work out within the first 90 days, we'll find you a replacement at no additional cost. Your success is our priority.",
  },
  {
    question: "How do you vet candidates?",
    answer:
      "Our vetting process includes multiple interviews, skills assessments, reference checks, and background verification. We also evaluate culture fit based on the detailed information you provide about your company. We only present candidates we're confident will succeed.",
  },
  {
    question: "What makes Lodestar Talent different from other recruiters?",
    answer:
      "We take a partnership approach, not a transactional one. We invest time to deeply understand your company, culture, and goals. Our performance-based pricing model means we're aligned with your success. Plus, our extensive network and proven process deliver results faster.",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "No. We work on a success-based model without long-term commitments. You can engage us for a single hire or build an ongoing relationship. Our goal is to earn your repeat business through exceptional results.",
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
                  <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <HelpCircle className="w-6 h-6 text-foreground" />
                  </div>
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-7 pl-[68px] text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
