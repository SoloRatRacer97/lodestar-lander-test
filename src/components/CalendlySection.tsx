'use client';

import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail } from 'lucide-react';

// Calendly URL
const CALENDLY_URL = 'lodestar-talent/lodestar-talent-discovery-call-x';

export default function CalendlySection() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="book-call" className="py-24 lg:py-32 gradient-navy relative overflow-hidden">
      {/* Decorative line accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Floating bubbles - subtle on navy */}
      <div className="bubble-float bubble-float-slow w-[250px] h-[250px] top-[10%] left-[5%] opacity-10" />
      <div className="bubble-float w-[200px] h-[200px] bottom-[20%] right-[8%] opacity-8" />
      <div className="bubble-float bubble-float-fast w-[150px] h-[150px] top-[60%] left-[15%] opacity-6" />

      {/* Glowing orbs */}
      <div className="orb-glow w-[600px] h-[600px] top-0 right-0" />
      <div className="orb-glow w-[500px] h-[500px] bottom-0 left-0" style={{ animationDelay: '2s' }} />
      <div className="orb-glow w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '1s' }} />

      {/* Cloud shapes - very subtle */}
      <div className="cloud-shape w-[400px] h-[200px] -top-20 right-[20%] opacity-10" />
      <div className="cloud-shape w-[300px] h-[150px] -bottom-10 left-[10%] opacity-8" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-6 px-6 py-2 gradient-accent text-foreground border-0 font-semibold rounded-full shadow-lg">
            Get Started
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Ready to Find Your Next Star Hire?
          </h2>
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
            Book a free consultation call with our team. We&apos;ll discuss your hiring
            needs and show you how we can help you find exceptional talent.
          </p>
        </div>

        {/* Calendly embed container */}
        <Card className="max-w-4xl mx-auto shadow-premium border-0 overflow-hidden rounded-[28px]">
          <CardContent className="p-0">
            <div
              className="calendly-inline-widget"
              data-url={`https://calendly.com/${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=1a2744&primary_color=243b67`}
              style={{ minWidth: '320px', height: '700px' }}
            />

            {/* Fallback for when Calendly hasn't loaded */}
            <noscript>
              <div className="p-12 text-center">
                <p className="text-foreground mb-4">
                  Please enable JavaScript to view the scheduling widget.
                </p>
                <Button asChild>
                  <a
                    href={`https://calendly.com/${CALENDLY_URL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule on Calendly
                  </a>
                </Button>
              </div>
            </noscript>
          </CardContent>
        </Card>

        {/* Alternative contact info */}
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-8 text-lg lg:text-xl">
            Prefer to reach out directly?
          </p>
          <div className="flex justify-center items-center">
            <a
              href="mailto:todd@lodestartalent.co"
              className="flex items-center text-accent hover:text-white transition-all duration-300 text-lg font-semibold group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-accent/30 transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              todd@lodestartalent.co
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
