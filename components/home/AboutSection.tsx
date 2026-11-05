"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react";
import { about } from "@/lib/content";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-[#e4e2d8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#fef8eb] border border-[#d5920c]/30 rounded-full mb-4">
            <Users className="h-4 w-4 text-[#b87b08]" weight="bold" />
            <span className="text-xs sm:text-sm font-bold text-[#b87b08] uppercase tracking-wider">
              {about.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
            Connecting Cameroon to Global Commerce
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Direct timber supply from Cameroon's Congo Basin to international importers with verified inventory, strict grading, and flawless documentation.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
          {/* Left Text */}
          <div className="space-y-6">
            <p className="text-base text-slate-700 leading-relaxed">
              {about.paragraph1}
            </p>

            <p className="text-base text-slate-700 leading-relaxed">
              {about.paragraph2}
            </p>
          </div>

          {/* Right Image */}
          <div>
            <div className="relative rounded-2xl overflow-hidden border border-[#e4e2d8] shadow-xl aspect-[4/3] bg-slate-900 group">
              <Image
                src="/images/cameroon_timber_hero.jpg"
                alt="Prime Wood Global Cameroon sawmill and timber yard operations"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06180e] via-transparent to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs text-[#d5920c] font-bold uppercase tracking-wider mb-1">
                  Verified Sourcing Network
                </div>
                <div className="text-sm font-semibold text-white">
                  Direct procurement from authorized Congo Basin forestry units
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Values Preview Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {about.values.map((val, idx) => (
            <div
              key={idx}
              className="bg-[#fcfbf7] border border-[#f0eee6] rounded-xl p-6 hover:border-[#d5920c] hover:bg-white transition-all shadow-xs"
            >
              <div className="w-10 h-10 rounded-lg bg-[#eaf4ed] text-[#032f0e] flex items-center justify-center mb-4">
                <CheckCircle className="h-5 w-5 text-[#032f0e]" weight="fill" />
              </div>
              <h4 className="font-bold text-base text-[#0d1a13] mb-2">
                {val.label}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {val.text}
              </p>
            </div>
          ))}
        </div>

        {/* View Full About Page Button */}
        <div className="text-center">
          <Link
            href="/about-us"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#032f0e] hover:bg-[#0a461b] text-white font-bold text-sm shadow-md transition-all"
          >
            <span>Learn More About Us</span>
            <ArrowRight className="h-4 w-4" weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
