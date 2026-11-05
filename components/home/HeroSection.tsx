"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  WhatsappLogo,
  ShieldCheck,
  MapPin,
  TreeEvergreen,
  Boat,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import { hero, company } from "@/lib/content";

const stats = [
  {
    value: "7+ Species",
    label: "Azobé, Tali, Sapelli, Ebony & More",
  },
  {
    value: "Logs & Timber",
    label: "Round logs & sawn dimensions",
  },
  {
    value: "Cameroon Origin",
    label: "100% legal Congo Basin sourcing",
  },
  {
    value: "Two Ports",
    label: "Douala & Kribi deep-water access",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#031d0d] text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cameroon_timber_hero.jpg"
          alt="Cameroon hardwood timber logs ready for export"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021509]/98 via-[#021509]/90 to-[#021509]/70" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#031f0e]/80 px-4 py-2 mb-8 backdrop-blur-sm">
            <MapPin className="h-4 w-4 text-[#d5920c]" weight="fill" />
            <span className="text-xs font-semibold tracking-wide text-slate-100">
              {hero.badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6">
            {hero.titlePrefix}{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffe082] to-[#d5920c]">
              {hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
            {hero.description}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-[#d5920c] px-8 text-base font-bold text-[#06180e] shadow-lg hover:bg-[#e5a118] transition-all group"
            >
              <EnvelopeSimple className="h-5 w-5" weight="bold" />
              <span>{hero.ctaQuote}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" weight="bold" />
            </a>

            <a
              href={company.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 text-base font-bold text-white shadow-lg hover:bg-[#20ba59] transition-all"
            >
              <WhatsappLogo className="h-5 w-5" weight="fill" />
              <span>{hero.ctaWhatsApp}</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#d5920c]" weight="fill" />
              <span>100% Legal Sourcing</span>
            </div>
            <div className="flex items-center gap-2">
              <TreeEvergreen className="h-5 w-5 text-[#d5920c]" weight="fill" />
              <span>Premium Hardwoods</span>
            </div>
            <div className="flex items-center gap-2">
              <Boat className="h-5 w-5 text-[#d5920c]" weight="fill" />
              <span>Direct Port Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}