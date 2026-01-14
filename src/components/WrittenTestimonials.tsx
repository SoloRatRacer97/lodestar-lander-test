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
    quote: "Within days she mastered our processes and saved me 20+ hours a week.",
    content:
      "Lodestar helped me find an operations manager who completely transformed my agency. Within days she mastered our processes, fixed broken systems, and built tools that save me 20+ hours a week. Now I can focus on sales and scaling instead of being stuck in the day-to-day.",
    author: "Noah",
    role: "Marketing Agency Founder",
    company: "",
    image: null,
  },
  {
    quote: "I can almost guarantee you're losing leads if you're even thinking about it.",
    content:
      "Just do it. I can almost guarantee you're losing leads if you're even thinking about it. Todd responds to everything immediately—and if something doesn't work out, he'll make it right. We're already talking about expanding into more VAs, and that should tell you everything.",
    author: "Corey",
    role: "Founder",
    company: "Gutter Tuneup",
    image: null,
  },
  {
    quote: "100% worth it — I'd do it again in a heartbeat.",
    content:
      "Working with Todd to bring on a VA was a game changer. I used to be glued to the phone and stuck doing admin after long days on the ground. Now my VA handles calls, parts orders, and CRM tasks, freeing me up to actually lead my team and grow the business.",
    author: "Garrick",
    role: "Home Services Business Owner",
    company: "",
    image: null,
  },
  {
    quote: "It feels less like hiring an employee and more like building a true partnership.",
    content:
      "Lodestar gave me the perfect tool to scale my business. Instead of just plugging in a body, they focused on the human fit — someone who really matched my culture and long-term vision. The result has been peace of mind, better systems, and faster growth.",
    author: "Benson",
    role: "Real Estate Acquisitions Investor",
    company: "",
    image: null,
  },
  {
    quote: "We wouldn't be on track for our next growth season without her.",
    content:
      "Lodestar placed a VA who immediately lifted a huge weight off our sales pipeline. Within two weeks she was taking calls, booking estimates, and boosting our conversion rate. She's coachable, proactive, and already adding value far beyond her role.",
    author: "Alex",
    role: "Founder",
    company: "Cincinnati Painting Co.",
    image: null,
  },
  {
    quote: "Their team helped us hit Q1 and Q2 goals months ahead of schedule.",
    content:
      "I almost hesitated to hire another team member, but working with Lodestar changed the game. Their team helped us hit Q1 and Q2 goals months ahead of schedule.",
    author: "Corey",
    role: "Founder",
    company: "Clixsy",
    image: null,
  },
  {
    quote: "Got someone great on the first try. This was a no-brainer.",
    content:
      "Just do it. I tried hiring direct through OnlineJobs.ph and went through eight or nine people before finding one that stuck. With Todd's team, it was seamless—submitted a form, talked the same day, interviewed a shortlist, and got someone great on the first try.",
    author: "Joe",
    role: "Founder",
    company: "Wislead",
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
          <CarouselContent className="-ml-4 md:-ml-6 py-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3 py-4">
                <Card className="h-full card-testimonial card-blobs hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-[28px] overflow-visible">
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
                          {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
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
