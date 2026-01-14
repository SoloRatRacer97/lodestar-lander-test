'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight, X } from 'lucide-react';

// Client logos
const companyLogos = [
  { name: 'Client 1', logo: '/Client Logos/5mJszXpHegsq5q625fC0cUabyN4.avif' },
  { name: 'Client 2', logo: '/Client Logos/6OMMy3i9EpXjbpJRGGayXAPRyQ.avif' },
  { name: 'Client 3', logo: '/Client Logos/FGc5ikdqVYJH5DTuarKBwgIs0g.avif' },
  { name: 'Client 4', logo: '/Client Logos/HiBqwbUUwDdIUn5PZVPGjMvDX4.avif' },
  { name: 'Client 5', logo: '/Client Logos/fVaf423pH6PTYbbQL11CsICDqTY.avif' },
  { name: 'Client 6', logo: '/Client Logos/iYmBCOntYln2h7sFohEVgOgk.avif' },
  { name: 'Client 7', logo: '/Client Logos/pVVmnExZyOvmj2ZIi6fytKjItfA.avif' },
  { name: 'Client 8', logo: '/Client Logos/qzbiyAmDopubdszNKg06DpGb9w.avif' },
  { name: 'Client 9', logo: '/Client Logos/u40NVzmcvg6EhtrFS0RERjA7PQ.png' },
];

// YouTube Video ID
const YOUTUBE_VIDEO_ID = 'ha53lOYyL_I';

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Generate YouTube thumbnail URL
  const thumbnailUrl = YOUTUBE_VIDEO_ID
    ? `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`
    : null;

  return (
    <section className="pt-24 gradient-hero relative overflow-hidden min-h-screen">
      {/* Floating bubble decorations */}
      <div className="bubble-float bubble-float-slow w-[300px] h-[300px] top-[10%] left-[5%] opacity-40" />
      <div className="bubble-float w-[200px] h-[200px] top-[60%] right-[8%] opacity-30" />
      <div className="bubble-float bubble-float-fast w-[150px] h-[150px] top-[30%] right-[15%] opacity-25" />
      <div className="bubble-float bubble-float-slow w-[100px] h-[100px] bottom-[20%] left-[10%] opacity-35" />

      {/* Cloud shapes */}
      <div className="cloud-shape w-[400px] h-[200px] -top-20 -left-20 opacity-60" />
      <div className="cloud-shape w-[300px] h-[150px] top-[40%] -right-10 opacity-40" />

      {/* Animated glowing orbs */}
      <div className="orb-glow w-[500px] h-[500px] top-0 left-1/4" />
      <div className="orb-glow w-[400px] h-[400px] bottom-0 right-1/4" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <Badge className="mb-6 px-6 py-2.5 text-sm font-semibold gradient-navy text-white border-0 shadow-lg rounded-full">
            Trusted by 40+ Growing Companies
          </Badge>

          {/* Headline - using display font */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-[1.1] mb-8 tracking-tight">
            Find Your Next{' '}
            <span className="text-gradient">
              Star Hire
            </span>
            <br />
            Without the Hassle
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            We connect growing companies with exceptional talent.
            Let us handle the search while you focus on scaling your business.
          </p>
        </div>

        {/* VSL Video Container - with premium shadow and larger radius */}
        <div className="max-w-5xl mx-auto mb-14 animate-fade-in-up animate-delay-200">
          <div className="relative aspect-video rounded-[28px] shadow-premium overflow-hidden group border border-white/20">
            {!isVideoPlaying ? (
              <>
                {/* Video thumbnail */}
                {thumbnailUrl && (
                  <Image
                    src={thumbnailUrl}
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                {/* Play button overlay */}
                <button
                  onClick={() => YOUTUBE_VIDEO_ID && setIsVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Play video"
                >
                  <div className="w-20 h-20 sm:w-28 sm:h-28 gradient-accent rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500 ease-out border-4 border-white/30">
                    <Play className="w-8 h-8 sm:w-12 sm:h-12 text-foreground ml-1 fill-current" />
                  </div>
                </button>
              </>
            ) : (
              <>
                {/* YouTube Embed */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                  title="Lodestar Talent Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {/* Close button */}
                <button
                  onClick={() => setIsVideoPlaying(false)}
                  className="absolute top-4 right-4 z-20 w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                  aria-label="Close video"
                >
                  <X className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-300">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto text-sm font-extrabold tracking-wide px-8 py-5 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 gradient-navy hover:opacity-95 border-0 rounded-xl uppercase"
          >
            <a href="#book-call">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-sm font-extrabold tracking-wide px-8 py-5 h-auto border-2 border-foreground/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-xl bg-white/80 backdrop-blur-sm uppercase"
          >
            <a href="#how-it-works">
              See How It Works
            </a>
          </Button>
        </div>

        {/* Trust indicators - Revolving Logo Carousel */}
        {companyLogos.length > 0 && (
          <div className="mt-24 animate-fade-in-up animate-delay-400">
            <p className="text-sm text-muted-foreground mb-10 uppercase tracking-widest font-semibold text-center">
              Trusted by companies like
            </p>

            {/* Carousel container */}
            <div className="relative overflow-hidden py-4">
              {/* Scrolling logos - duplicated for seamless loop */}
              <div className="flex animate-scroll items-center">
                {[...companyLogos, ...companyLogos].map((company, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-8 h-12 w-32 flex items-center justify-center"
                  >
                    {company.logo && (
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={120}
                        height={48}
                        className="object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
