"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Ruler,
  Stack,
  CheckCircle,
  ArrowRight,
  TreeEvergreen,
  WhatsappLogo,
  EnvelopeSimple,
  Package,
  CaretRight,
  ShieldCheck,
  ListNumbers,
} from "@phosphor-icons/react";
import { company } from "@/lib/content";

const specifications = [
  {
    id: "species",
    title: "Species",
    description: "Azobé, Tali, Sapelli, Padouk, Ebony, Iroko, Bilinga, Doussié, or other Cameroon hardwoods available in stock."
  },
  {
    id: "product-type",
    title: "Product Type",
    description: "Rough-sawn (sawn surface, unplaned) or Dimensioned (precision-sawn to target nominal sizes with agreed tolerances)."
  },
  {
    id: "thickness",
    title: "Thickness",
    description: "Common export thicknesses: 25mm, 38mm, 50mm, 75mm, 100mm, and heavier structural sections. Specify whether nominal or actual measurement and tolerance (e.g. ±1mm, ±2mm)."
  },
  {
    id: "width",
    title: "Width",
    description: "Fixed widths (e.g. 100mm, 150mm, 200mm exactly) or random widths within a range. Fixed widths cost more; random widths suit buyers who re-rip."
  },
  {
    id: "length",
    title: "Length",
    description: "Minimum length (e.g. 2.1m and up) or specific length distribution. Long lengths in dense species limited by log yield."
  },
  {
    id: "grade",
    title: "Grade",
    description: "Grading defines allowable defects: knots, wane, splits, sapwood, pinholes. Agree on grading rule (e.g. FAS, Select & Better) or written description. Request representative photographs."
  },
  {
    id: "moisture",
    title: "Moisture Content",
    description: "Fresh-sawn (green, typically 60-80%+), Air-Dried (AD, 18-25%), or Kiln-Dried (KD, 10-14%). Dense species dry slowly; specify condition on arrival and how it will be verified."
  },
  {
    id: "surface",
    title: "Surface Condition",
    description: "Usually sawn finish. Planed (S2S/S4S) or surfaced options should be discussed specifically for additional processing."
  },
  {
    id: "edge",
    title: "Edge Condition",
    description: "Square-edged (standard for most structural/joinery) or with permitted wane. Clarify edge requirements upfront."
  },
  {
    id: "packaging",
    title: "Packaging & Bundling",
    description: "Bundles strapped with heavy-duty steel bands, consistent dimensions per bundle where possible, marked for identification. Discuss stickering, end-sealing, and labeling requirements."
  },
  {
    id: "container",
    title: "Container Loading",
    description: "Heavy species (Azobé, Tali, Doussié) often reach container weight limits (21-25 tonnes) before volume limits. Loading plans balance weight, volume, and bundle size."
  },
  {
    id: "volume",
    title: "Volume Calculation",
    description: "Volume calculated as: thickness × width × length per piece, summed and expressed in cubic meters (m³). Agree whether nominal or actual dimensions are used for calculation."
  }
];

const inquiryPoints = [
  {
    number: "01",
    title: "Species",
    description: "Specify the hardwood species you require"
  },
  {
    number: "02",
    title: "Product Type",
    description: "Rough-sawn or dimensioned timber"
  },
  {
    number: "03",
    title: "Dimensions",
    description: "Thickness, width, and length requirements"
  },
  {
    number: "04",
    title: "Grade",
    description: "Quality grade and acceptable defects"
  },
  {
    number: "05",
    title: "Required Volume",
    description: "Total cubic meters or container quantity"
  },
  {
    number: "06",
    title: "Moisture Requirement",
    description: "Green, Air-Dried, or Kiln-Dried"
  },
  {
    number: "07",
    title: "Destination Country",
    description: "For shipping and documentation purposes"
  },
  {
    number: "08",
    title: "Preferred Shipping Method",
    description: "Container (FCL) or bulk shipment"
  },
  {
    number: "09",
    title: "Target Delivery Timeline",
    description: "Expected arrival or project deadline"
  }
];

export default function SawnTimberPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* ===================================================================== */}
      {/* HERO SECTION                                                          */}
      {/* ===================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2818] via-[#031d0d] to-[#06180e] text-white pt-20 pb-16 sm:pt-24 sm:pb-20 border-b border-[#0f381c]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-sawn-B4KWhbGX.webp"
            alt="Sawn hardwood timber from Cameroon"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021509]/95 via-[#021509]/75 to-[#021509]/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300/80 mb-6">
            <Link href="/" className="hover:text-[#d5920c] transition-colors">
              Home
            </Link>
            <CaretRight className="h-3 w-3 text-slate-400" />
            <span className="text-[#d5920c]">Sawn Hardwood from Cameroon</span>
          </div>

          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#031f0e]/60 px-4 py-2 shadow-sm backdrop-blur-md mb-6">
              <Stack className="h-5 w-5 text-[#d5920c]" weight="fill" />
              <span className="text-sm font-bold tracking-wide text-slate-100">
                Precision Sawn Timber · Export Grade
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5">
              Sawn Hardwood{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffe082] via-[#f5b324] to-[#d5920c]">
                from Cameroon
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8">
              Rough-sawn and dimensioned Azobé, Tali, Sapelli, Padouk, and Ebony for international buyers. Here&apos;s what to agree on before a quotation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#d5920c] hover:bg-[#e5a118] text-[#06180e] font-bold text-sm shadow-lg shadow-[#d5920c]/25 transition-all"
              >
                <EnvelopeSimple className="h-5 w-5" weight="bold" />
                <span>Request Sawn Timber Quote</span>
              </Link>

              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm backdrop-blur-sm transition-all"
              >
                <WhatsappLogo className="h-5 w-5" weight="fill" />
                <span>WhatsApp Specifications</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SPECIFICATIONS SECTION                                                */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#fef8eb] px-4 py-1.5 mb-4">
              <Ruler className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider">
                Technical Specifications
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              What Defines a Sawn Timber Order
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Specifications can vary according to grade, origin, moisture condition, and processing. Contact us for shipment-specific specifications.
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {specifications.map((spec) => (
              <div
                key={spec.id}
                className="bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6] border border-[#e4e2d8] rounded-xl p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#032f0e] flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-[#d5920c]" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0d1a13] mb-2">
                      {spec.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Type Highlight Cards */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Rough-Sawn */}
            <div className="relative rounded-2xl overflow-hidden border border-[#e4e2d8] bg-white shadow-sm hover:shadow-xl transition-all group">
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <Image
                  src="/images/sawn_log.jpg"
                  alt="Rough-sawn hardwood"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-block px-3 py-1 rounded-lg bg-[#032f0e]/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-2 border border-[#d5920c]/40">
                    Primary Processing
                  </div>
                  <h3 className="text-2xl font-black text-white">Rough-Sawn Hardwood</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Sawn straight from the log with a sawn surface. The most common export form; buyers plane, re-saw, or process it further at destination.
                </p>
                <div className="flex items-center text-xs font-bold text-[#032f0e]">
                  <span>Standard Export Format</span>
                  <ArrowRight className="h-4 w-4 ml-2" weight="bold" />
                </div>
              </div>
            </div>

            {/* Dimensioned Timber */}
            <div className="relative rounded-2xl overflow-hidden border border-[#e4e2d8] bg-white shadow-sm hover:shadow-xl transition-all group">
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <Image
                  src="/images/sawn_log1.jpg"
                  alt="Dimensioned timber"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-block px-3 py-1 rounded-lg bg-[#032f0e]/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-2 border border-[#d5920c]/40">
                    Precision Cut
                  </div>
                  <h3 className="text-2xl font-black text-white">Dimensioned Timber</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Sawn to agreed nominal sizes with defined tolerances, ready for the buyer's production or construction use. Precision thickness and width control.
                </p>
                <div className="flex items-center text-xs font-bold text-[#032f0e]">
                  <span>Contract Specifications</span>
                  <ArrowRight className="h-4 w-4 ml-2" weight="bold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* YOUR INQUIRY SECTION                                                  */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-white px-4 py-1.5 mb-4">
              <ListNumbers className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider">
                Quotation Requirements
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              What to Include in Your Inquiry
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              The more complete your request, the faster and more accurate our quotation.
            </p>
          </div>

          {/* Inquiry Points Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {inquiryPoints.map((point) => (
              <div
                key={point.number}
                className="bg-white border border-[#e4e2d8] rounded-xl p-6 hover:shadow-lg hover:border-[#d5920c] transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#032f0e] to-[#0a461b] flex items-center justify-center border-2 border-[#d5920c]/30 group-hover:border-[#d5920c] transition-colors">
                    <span className="text-xl font-black text-[#d5920c]">{point.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#0d1a13] mb-1">
                      {point.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-[#03200a] to-[#083015] rounded-2xl p-8 md:p-12 text-center border border-[#0f381c] shadow-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/40 bg-[#062413] px-3.5 py-1 text-xs font-bold text-[#f5b324] uppercase tracking-wider mb-4">
              <ShieldCheck className="h-4 w-4" weight="fill" />
              <span>Export Desk Ready</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Ready to Request Your Sawn Timber Specifications?
            </h3>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Our export managers in Douala and Kribi verify actual yard stock, cutting schedules, and vessel allocations before finalizing any commercial quote. Response time: under 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#d5920c] hover:bg-[#e5a118] text-[#06180e] font-bold text-sm shadow-lg shadow-[#d5920c]/25 transition-all w-full sm:w-auto"
              >
                <EnvelopeSimple className="h-5 w-5" weight="bold" />
                <span>Submit Inquiry Form</span>
              </Link>

              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all w-full sm:w-auto"
              >
                <WhatsappLogo className="h-5 w-5" weight="fill" />
                <span>WhatsApp Export Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SPECIES QUICK REFERENCE                                               */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#e4e2d8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#eaf4ed] to-[#d4e8da] rounded-2xl p-8 md:p-12 border border-[#0a461b]/20">
            <div className="flex items-start gap-4 mb-6">
              <TreeEvergreen className="h-8 w-8 text-[#032f0e] shrink-0" weight="fill" />
              <div>
                <h3 className="text-2xl font-extrabold text-[#0d1a13] mb-2">
                  Need Full Species Technical Details?
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
                  Explore our comprehensive timber species catalog with density data, durability ratings, typical applications, sawing considerations, and buyer guidelines for Azobé, Tali, Sapelli, Padouk, Ebony, Bilinga, Afromosia, Doussié, and more.
                </p>
              </div>
            </div>

            <Link
              href="/timber-species"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#032f0e] hover:bg-[#0a461b] text-white rounded-lg font-bold text-sm shadow-sm transition-colors"
            >
              <span>View All Timber Species</span>
              <ArrowRight className="h-4 w-4" weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
