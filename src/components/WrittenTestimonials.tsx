'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "They found us a VP of Engineering in just 3 weeks!",
    content:
      "We had been struggling to fill this critical role for months. Lodestar Talent understood exactly what we needed and delivered exceptional candidates. The hire has been transformational for our team.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechStartup Inc.",
    image: null,
  },
  {
    quote: "The best recruiting experience we've ever had.",
    content:
      "Their process is seamless and the quality of candidates is outstanding. They took the time to understand our culture and only presented candidates who were genuinely a great fit.",
    author: "Michael Chen",
    role: "Head of People",
    company: "GrowthCo",
    image: null,
  },
  {
    quote: "Worth every penny. Our new hire exceeded expectations.",
    content:
      "The percentage-based model means they're as invested in finding the right person as we are. Our new Marketing Director has already made a huge impact in just a few months.",
    author: "Emily Rodriguez",
    role: "Founder",
    company: "Creative Agency",
    image: null,
  },
  {
    quote: "Exceptional service from start to finish.",
    content:
      "Lodestar Talent took the time to truly understand our unique needs. They found us a CTO who not only had the technical skills but also fit perfectly with our company culture.",
    author: "David Park",
    role: "Co-Founder",
    company: "InnovateTech",
    image: null,
  },
  {
    quote: "Game-changer for our hiring process.",
    content:
      "We've worked with many recruiters before, but none have delivered the quality and speed that Lodestar provides. They've become our go-to partner for all executive hires.",
    author: "Jennifer Walsh",
    role: "VP of Operations",
    company: "ScaleUp Solutions",
    image: null,
  },
  {
    quote: "They truly understand the startup ecosystem.",
    content:
      "Finding talent that can thrive in a fast-paced environment is challenging. Lodestar consistently delivers candidates who hit the ground running from day one.",
    author: "Alex Thompson",
    role: "CEO",
    company: "NextGen Ventures",
    image: null,
  },
];

export default function WrittenTestimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-section-blue relative overflow-hidden">
      {/* Floating bubbles */}
      <div className="bubble-float w-[220px] h-[220px] top-[10%] left-[3%] opacity-25" />
      <div className="bubble-float bubble-float-slow w-[280px] h-[280px] top-[60%] right-[5%] opacity-30" />
      <div className="bubble-float bubble-float-fast w-[140px] h-[140px] bottom-[15%] left-[20%] opacity-20" />

      {/* Glowing orbs */}
      <div className="orb-glow w-[450px] h-[450px] top-0 right-1/4" />
      <div className="orb-glow w-[350px] h-[350px] bottom-0 left-1/4" style={{ animationDelay: '2s' }} />

      {/* Cloud accents */}
      <div className="cloud-shape w-[380px] h-[200px] -top-20 left-[10%] opacity-50" />
      <div className="cloud-shape w-[300px] h-[150px] bottom-[10%] right-[5%] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-6 px-6 py-2 gradient-navy text-white border-0 font-semibold rounded-full shadow-lg">
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what companies we&apos;ve
            worked with have to say about their experience.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full card-testimonial card-blobs hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-[28px]">
                  <CardContent className="p-8 lg:p-10 relative">
                    {/* Quote icon with gradient background */}
                    <div className="mb-6 w-14 h-14 gradient-accent rounded-xl flex items-center justify-center shadow-lg">
                      <Quote className="w-7 h-7 text-foreground" />
                    </div>

                    {/* Star rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Quote headline */}
                    <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 leading-tight">
                      &ldquo;{testimonial.quote}&rdquo;
                    </h3>

                    {/* Testimonial content */}
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                      {testimonial.content}
                    </p>

                    {/* Author info */}
                    <div className="flex items-center pt-5 border-t border-accent/20">
                      {/* Avatar */}
                      <div className="w-12 h-12 gradient-navy rounded-xl flex items-center justify-center mr-3 flex-shrink-0 shadow-md overflow-hidden">
                        {testimonial.image ? (
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-white font-bold text-lg">
                            {testimonial.author.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-foreground">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-muted-foreground font-medium">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-10">
            <CarouselPrevious className="static translate-y-0 bg-white border-2 border-accent/30 text-foreground hover:bg-accent hover:text-foreground hover:border-accent h-12 w-12 rounded-xl transition-all duration-300 shadow-md" />
            <CarouselNext className="static translate-y-0 bg-white border-2 border-accent/30 text-foreground hover:bg-accent hover:text-foreground hover:border-accent h-12 w-12 rounded-xl transition-all duration-300 shadow-md" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
