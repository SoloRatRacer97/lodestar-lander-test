'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Rocket, Search, BadgeCheck, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We start with a free consultation to understand your hiring needs, company culture, and the specific skills you\'re looking for in your ideal candidate.',
    icon: Phone,
  },
  {
    number: '02',
    title: 'Kickoff Call',
    description:
      'Once aligned, we dive deeper into your requirements, define success metrics, and establish a clear timeline for your talent search.',
    icon: Rocket,
  },
  {
    number: '03',
    title: 'Talent Search & Vetting',
    description:
      'Our expert recruiters leverage our extensive network to identify candidates, then thoroughly screen and verify their skills, experience, and cultural fit.',
    icon: Search,
  },
  {
    number: '04',
    title: 'Hiring & Monitoring',
    description:
      'Once you\'ve hired your perfect match, we stay engaged to ensure a successful integration. Our 90-day guarantee means we\'re invested in long-term success.',
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-section-light relative overflow-hidden">
      {/* Floating bubbles */}
      <div className="bubble-float bubble-float-slow w-[250px] h-[250px] top-[15%] right-[5%] opacity-30" />
      <div className="bubble-float w-[180px] h-[180px] bottom-[20%] left-[8%] opacity-25" />
      <div className="bubble-float bubble-float-fast w-[120px] h-[120px] top-[50%] left-[15%] opacity-20" />

      {/* Glowing orbs */}
      <div className="orb-glow w-[400px] h-[400px] top-0 right-0" />
      <div className="orb-glow w-[300px] h-[300px] bottom-0 left-0" style={{ animationDelay: '1.5s' }} />

      {/* Cloud accent */}
      <div className="cloud-shape w-[350px] h-[180px] -bottom-10 right-[20%] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge className="mb-6 px-6 py-2 bg-white border border-primary/20 text-primary font-semibold rounded-full shadow-sm">
            Simple Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Our streamlined process makes hiring top talent simple and risk-free.
            You only pay when you make a successful hire.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-accent/40 to-accent/10">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full" />
                  </div>
                )}

                <Card className="relative h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border border-border/30 rounded-[24px] overflow-hidden pattern-dots">
                  <CardContent className="pt-10 pb-8 px-6 relative">
                    {/* Step number badge */}
                    <Badge className="absolute -top-4 left-6 gradient-navy text-white border-0 px-5 py-1.5 font-bold shadow-lg rounded-full text-sm z-10">
                      Step {step.number}
                    </Badge>

                    {/* Icon */}
                    <div className="w-[72px] h-[72px] gradient-accent rounded-2xl flex items-center justify-center text-foreground mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg relative z-10">
                      <Icon className="w-9 h-9" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Pricing highlight */}
        <div className="mt-20 grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Main Pricing Card */}
          <Card className="lg:col-span-2 bg-white border-2 border-accent/30 overflow-hidden relative shadow-premium rounded-[32px] hover:shadow-2xl transition-all duration-500">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-baby-blue/10 rounded-full translate-y-1/2 -translate-x-1/3" />

            <CardContent className="p-10 lg:p-12 relative">
              <Badge className="mb-6 px-6 py-2 gradient-accent text-foreground border-0 font-semibold rounded-full shadow-sm">
                Our Pricing
              </Badge>
              <h3 className="text-2xl lg:text-4xl font-extrabold mb-6 tracking-tight text-foreground">
                Transparent, Results-Based Pricing
              </h3>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
                <span className="font-bold text-foreground">25-35% of international hires&apos; salary</span> — only when we make a successful placement.
              </p>

              {/* Highlight Box */}
              <div className="bg-gradient-to-r from-accent/20 to-baby-blue/10 rounded-2xl p-6 mb-8 border border-accent/20">
                <p className="text-foreground font-bold text-lg mb-2">
                  90-Day Replacement &amp; Refund Guarantee
                </p>
                <p className="text-muted-foreground">
                  Your investment is protected. If it doesn&apos;t work out, we&apos;ll replace them or refund your deposit.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                No monthly retainers, no crazy upfront fees aside from a minor deposit — just results.
              </p>
            </CardContent>
          </Card>

          {/* CTA Card */}
          <Card className="gradient-navy text-white border-0 overflow-hidden relative shadow-premium rounded-[32px] flex flex-col justify-center">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/15 rounded-full translate-y-1/2 -translate-x-1/3" />

            <CardContent className="p-10 text-center relative flex flex-col items-center justify-center h-full">
              <h4 className="text-xl lg:text-2xl font-bold mb-4">
                Ready to Find Your Next Star Hire?
              </h4>
              <p className="text-white/70 mb-8 leading-relaxed">
                Let&apos;s discuss your hiring needs and see how we can help.
              </p>
              <Button
                asChild
                size="lg"
                className="text-sm font-extrabold tracking-wide px-8 py-5 h-auto gradient-accent text-foreground border-0 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl uppercase w-full"
              >
                <a href="#book-call">
                  Book a Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
