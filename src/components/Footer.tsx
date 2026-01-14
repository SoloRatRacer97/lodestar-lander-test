'use client';

import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-navy py-16 relative overflow-hidden">
      {/* Decorative line accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Floating bubbles - very subtle */}
      <div className="bubble-float bubble-float-slow w-[180px] h-[180px] top-[20%] right-[10%] opacity-8" />
      <div className="bubble-float w-[120px] h-[120px] bottom-[30%] left-[5%] opacity-6" />

      {/* Glowing orbs */}
      <div className="orb-glow w-[350px] h-[350px] top-0 right-0" />
      <div className="orb-glow w-[280px] h-[280px] bottom-0 left-1/4" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            {/* Logo */}
            <div className="relative h-14 w-44 mb-6 bg-white/90 rounded-xl p-2">
              <Image
                src="/logo.png"
                alt="Lodestar Talent"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white/70 max-w-md leading-relaxed text-lg">
              Connecting exceptional talent with growing companies.
              We make hiring simple, effective, and risk-free.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold mb-5 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="text-white/70 hover:text-accent transition-colors font-medium">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-accent transition-colors font-medium">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-accent transition-colors font-medium">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#book-call" className="text-white/70 hover:text-accent transition-colors font-medium">
                  Book a Call
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-5 text-lg">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:todd@lodestartalent.co"
                  className="text-white/70 hover:text-accent transition-colors flex items-center gap-3 font-medium"
                >
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  todd@lodestartalent.co
                </a>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex gap-3 mt-8">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/10 hover:bg-accent hover:text-foreground text-white rounded-lg w-10 h-10 transition-all"
                asChild
              >
                <a href="https://www.linkedin.com/in/todd-anderson-31999226b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/10 hover:bg-accent hover:text-foreground text-white rounded-lg w-10 h-10 transition-all"
                asChild
              >
                <a href="https://x.com/_toddanderson" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <Separator className="mt-14 mb-8 bg-white/10" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Lodestar Talent. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-white/50 hover:text-accent transition-colors font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-accent transition-colors font-medium">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
