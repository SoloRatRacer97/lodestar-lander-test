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
import { Play, X } from 'lucide-react';

// Video testimonials - Add YouTube video IDs to make them playable
const videoTestimonials = [
  {
    id: 1,
    title: "How Lodestar helped us scale our engineering team",
    company: "TechCorp",
    thumbnail: null, // Add thumbnail URL or it will auto-generate from YouTube
    youtubeId: '', // Add YouTube video ID here, e.g., 'dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: "Finding our perfect CTO match",
    company: "StartupXYZ",
    thumbnail: null,
    youtubeId: '',
  },
  {
    id: 3,
    title: "From 10 to 50 employees in 6 months",
    company: "GrowthLabs",
    thumbnail: null,
    youtubeId: '',
  },
  {
    id: 4,
    title: "Building a world-class sales team",
    company: "SalesForce Pro",
    thumbnail: null,
    youtubeId: '',
  },
  {
    id: 5,
    title: "Why we keep coming back to Lodestar",
    company: "ReturnClient Inc",
    thumbnail: null,
    youtubeId: '',
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
            Video Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 tracking-tight">
            See Our Success Stories
          </h2>
          <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
            Watch video testimonials from companies we&apos;ve helped find exceptional talent.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {videoTestimonials.map((video) => (
              <CarouselItem key={video.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <Card className="gradient-navy border-0 overflow-hidden group cursor-pointer shadow-xl rounded-[24px] hover:shadow-2xl transition-all duration-500">
                    <CardContent className="p-0">
                      {/* Video thumbnail */}
                      <div className="relative aspect-video">
                        {playingVideoId === video.id && video.youtubeId ? (
                          <>
                            {/* YouTube Embed */}
                            <iframe
                              className="absolute inset-0 w-full h-full"
                              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                              title={video.title}
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
                            {video.youtubeId ? (
                              <Image
                                src={video.thumbnail || getYouTubeThumbnail(video.youtubeId)}
                                alt={video.title}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center gradient-navy">
                                <span className="text-white/40 text-sm font-medium">Add YouTube ID</span>
                              </div>
                            )}

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                            {/* Play button overlay */}
                            <div
                              className="absolute inset-0 flex items-center justify-center"
                              onClick={() => video.youtubeId && setPlayingVideoId(video.id)}
                            >
                              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl border-4 border-white/30">
                                <Play className="w-7 h-7 text-foreground ml-0.5 fill-current" />
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Video info */}
                      <div className="p-6 bg-gradient-to-b from-[#1a4a7c] to-[#0f3a64]">
                        <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                          {video.title}
                        </h3>
                        <p className="text-accent text-sm font-semibold">
                          {video.company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          <div className="flex justify-center gap-4 mt-10">
            <CarouselPrevious className="static translate-y-0 bg-white/10 border-0 text-white hover:bg-accent hover:text-foreground h-12 w-12 rounded-xl transition-all duration-300" />
            <CarouselNext className="static translate-y-0 bg-white/10 border-0 text-white hover:bg-accent hover:text-foreground h-12 w-12 rounded-xl transition-all duration-300" />
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
