'use client';

import { useState } from 'react';
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
import { Play, X, Quote } from 'lucide-react';

// Video testimonials with full context
const videoTestimonials = [
  {
    id: 1,
    name: "Corey",
    title: "Founder, Clixsy",
    highlight: "Rapid team scaling with top-tier SEO talent",
    description: "Corey was stretched thin running Clixsy while trying to scale—but every attempt to hire ate up hours and led to poor fits. We placed multiple SEO leads and division-level talent who hit the ground running, helping accomplish Q1 and Q2 goals months ahead of schedule.",
    image: null,
    youtubeId: 'V7sjd8hEapI',
  },
  {
    id: 2,
    name: "Cory",
    title: "Founder, Gutter Tuneup",
    highlight: "From losing leads to scaling with VAs",
    description: "Cory was taking every phone call himself, which capped his growth. We placed a VA he could train directly—calls answered went up, more leads got booked, and revenue followed. When the first placement didn't work out, we had a replacement in 3-4 days.",
    image: null,
    youtubeId: 'LWSSoCVpH6w',
  },
  {
    id: 3,
    name: "Joe",
    title: "Founder, Wislead",
    highlight: "From drowning in task work to signing clients with confidence",
    description: "Joe was buried in low-level execution—no consistent processes, no documentation, and a mental backlog that made it hard to focus on growth. Now he has a proactive VA who works independently, plus monthly strategy calls to sharpen delivery.",
    image: null,
    youtubeId: 'scHSF1bafpg',
  },
  {
    id: 4,
    name: "Kai",
    title: "Agency Owner",
    highlight: "First candidate shown, $10K collected in first week",
    description: "Kai needed fast help to handle client acquisition but had no time to sift through candidates. We placed Sophie—first candidate shown, hired on the spot, started next day. Result: 8 clients signed in 7 days, nearly $10,000 cash collected.",
    image: null,
    youtubeId: 't_Hw4sq3bRw',
  },
  {
    id: 5,
    name: "Alex",
    title: "Founder, Cincinnati Painting Co.",
    highlight: "Conversion rates soared within two weeks",
    description: "Alex's team was overwhelmed with calls, estimates, and admin work. We placed a VA who quickly took over inbound calls and booking estimates, boosting lead-to-estimate conversions almost immediately while streamlining their systems.",
    image: null,
    youtubeId: '5gOqcvHBOcA',
  },
  {
    id: 6,
    name: "Noah",
    title: "Marketing Agency Founder",
    highlight: "90% of operations handled in just 4 days",
    description: "Noah was overwhelmed—handling sales, client work, ops, and contractors. We placed an operations manager VA who quickly mastered SOPs, fixed bottlenecks, and built systems. She now saves Noah 20+ hours a week.",
    image: null,
    youtubeId: 'ycaL0O8T_Hs',
  },
  {
    id: 7,
    name: "Abishek",
    title: "Content Agency Owner",
    highlight: "End-to-end client management handled",
    description: "Abishek was doing everything himself—writing posts, managing clients, and handling content end-to-end with no time to focus on scaling. We placed a VA who seamlessly joined the team and now saves him 20-30 hours a week.",
    image: null,
    youtubeId: 'q790pEeFgEs',
  },
  {
    id: 8,
    name: "Jason",
    title: "SEO Agency Owner",
    highlight: "20 hours a week saved within two weeks",
    description: "Jason was buried in admin tasks, proposals, social scheduling, and SEO work. We helped restructure his team and placed a VA who immediately took over—now Jason has reclaimed hours of his day and is focused on high-level strategy.",
    image: null,
    youtubeId: 'vZum8W9dINQ',
  },
  {
    id: 9,
    name: "Benson",
    title: "Real Estate Acquisitions Investor",
    highlight: "No more mundane administrative work",
    description: "Benson was drowning in mundane follow-up tasks—texts, calls, and operational details that ate up his day. We placed a VA who brought both skill and cultural fit, giving Benson peace of mind and capacity to take on more volume.",
    image: null,
    youtubeId: 'TjzWrUv7GbY',
  },
];

export default function VideoTestimonials() {
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

  const getYouTubeThumbnail = (youtubeId: string) => {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  };

  return (
    <section className="py-24 lg:py-32 gradient-dark relative overflow-hidden">
      {/* Decorative line accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Floating bubbles - subtle on dark background */}
      <div className="bubble-float bubble-float-slow w-[200px] h-[200px] top-[15%] left-[8%] opacity-10" />
      <div className="bubble-float w-[160px] h-[160px] bottom-[25%] right-[10%] opacity-8" />
      <div className="bubble-float bubble-float-fast w-[120px] h-[120px] top-[50%] right-[25%] opacity-6" />

      {/* Glowing orbs */}
      <div className="orb-glow w-[500px] h-[500px] top-0 left-0" />
      <div className="orb-glow w-[400px] h-[400px] bottom-0 right-0" style={{ animationDelay: '1.5s' }} />
      <div className="orb-glow w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '3s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-6 px-6 py-2 gradient-accent text-foreground border-0 font-semibold rounded-full shadow-lg">
            Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Real Results From Real Founders
          </h2>
          <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
            Watch how we&apos;ve helped founders reclaim their time and scale their businesses.
          </p>
        </div>

        {/* Carousel - 2 cards at a time, vertical layout */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {videoTestimonials.map((video) => (
              <CarouselItem key={video.id} className="pl-6 basis-full lg:basis-1/2">
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden group shadow-2xl rounded-[28px] hover:border-accent/30 transition-all duration-500 h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Video thumbnail - top */}
                    <div className="relative w-full aspect-video flex-shrink-0">
                      {playingVideoId === video.id && video.youtubeId ? (
                        <>
                          {/* YouTube Embed */}
                          <iframe
                            className="absolute inset-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                            title={`${video.name} - ${video.highlight}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                          {/* Close button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlayingVideoId(null);
                            }}
                            className="absolute top-3 right-3 z-20 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                            aria-label="Close video"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </>
                      ) : (
                        <>
                          {/* Thumbnail */}
                          {video.youtubeId && (
                            <Image
                              src={getYouTubeThumbnail(video.youtubeId)}
                              alt={video.title}
                              fill
                              className="object-cover"
                            />
                          )}

                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                          {/* Play button overlay */}
                          <button
                            className="absolute inset-0 flex items-center justify-center cursor-pointer"
                            onClick={() => video.youtubeId && setPlayingVideoId(video.id)}
                            aria-label="Play video"
                          >
                            <div className="w-20 h-20 gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl border-4 border-white/30">
                              <Play className="w-8 h-8 text-foreground ml-1 fill-current" />
                            </div>
                          </button>
                        </>
                      )}
                    </div>

                    {/* Content section - bottom */}
                    <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-[#1a4a7c]/50 to-[#0f3a64]/50">
                      {/* Person info */}
                      <div className="flex items-center gap-4 mb-5">
                        {/* Avatar placeholder */}
                        <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          {video.image ? (
                            <Image
                              src={video.image}
                              alt={video.name}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover rounded-full"
                            />
                          ) : (
                            <span className="text-foreground font-bold text-lg">
                              {video.name.charAt(0)}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="text-white font-bold">{video.name}</p>
                          <p className="text-accent text-sm font-medium">{video.title}</p>
                        </div>
                      </div>

                      {/* Highlight */}
                      <h3 className="text-white font-bold text-lg lg:text-xl mb-3 leading-tight">
                        {video.highlight}
                      </h3>

                      {/* Description */}
                      <p className="text-white/70 leading-relaxed text-sm line-clamp-3">
                        {video.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-10">
            <CarouselPrevious className="static translate-y-0 bg-white/10 border-0 text-white hover:bg-accent hover:text-foreground h-14 w-14 rounded-xl transition-all duration-300" />
            <CarouselNext className="static translate-y-0 bg-white/10 border-0 text-white hover:bg-accent hover:text-foreground h-14 w-14 rounded-xl transition-all duration-300" />
          </div>
        </Carousel>

        {/* Scroll indicator for mobile */}
        <div className="flex justify-center mt-10 lg:hidden">
          <p className="text-white/50 text-sm flex items-center font-medium">
            Swipe to see more
          </p>
        </div>
      </div>
    </section>
  );
}
