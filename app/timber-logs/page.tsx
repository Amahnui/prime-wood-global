"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Ruler,
  TreeEvergreen,
  CheckCircle,
  ArrowRight,
  WhatsappLogo,
  EnvelopeSimple,
  Package,
  CaretRight,
  ShieldCheck,
  ListNumbers,
  Truck,
  CirclesThreePlus,
} from "@phosphor-icons/react";
import { company } from "@/lib/content";

const logSpecifications = [
  {
    id: "species",
    title: "Species",
    description: "Azobé, Tali, Sapelli, Padouk, Ebony, Iroko, Bilinga, Doussié, Afromosia, or other Cameroon hardwoods subject to sustainable harvest quotas and FLEGT licensing."
  },
  {
    id: "diameter",
    title: "Diameter",
    description: "Measured at the small end (top) of the log, inside bark. Typical export diameters range from 60cm to 100cm+. Large diameter logs (80cm+) command premium prices but availability varies by species and season."
  },
  {
    id: "length",
    title: "Length",
    description: "Standard export lengths: 4m, 5m, 6m, 7m, 8m, and longer where available. Dense species like Azobé and Doussié are often cut to 6-8m for structural applications. Longer logs require coordination with sawmill capacity and container/vessel loading."
  },
  {
    id: "grade",
    title: "Grade & Quality",
    description: "Grading considers straightness, soundness, knots, heart shake, rot, and bark inclusion. Export-grade logs are sound, straight, and free from major defects. Interior inspection may require end-painting or wax sealing for moisture control."
  },
  {
    id: "scaling",
    title: "Volume Scaling",
    description: "Log volume calculated using standard formulas (e.g., Smalian, Huber) based on diameter and length measurements. Volume expressed in cubic meters (m³). Scaling method and measurement points should be agreed before shipment."
  },
  {
    id: "moisture",
    title: "Moisture & Storage",
    description: "Fresh-cut tropical hardwood logs have high moisture content (60-100%+). Logs should be stored off the ground on skids, ends sealed to prevent checking, and protected from prolonged sun exposure. Specify storage duration and end-sealing requirements."
  },
  {
    id: "bark",
    title: "Bark & Preparation",
    description: "Logs may be shipped with bark on or debarked. Debarking reduces weight and pest risk but exposes wood to checking. Many buyers prefer bark-on for moisture retention during shipping. Clarify bark requirements upfront."
  },
  {
    id: "documentation",
    title: "Documentation & Certification",
    description: "All log exports from Cameroon require FLEGT license, phytosanitary certificate, certificate of origin, and commercial invoice. CITES permits required for regulated species. Ensure compliance with destination country import regulations."
  },
  {
    id: "loading",
    title: "Loading & Shipping",
    description: "Logs are typically shipped as break-bulk cargo due to size and weight. Container loading possible for shorter logs and smaller diameters. Heavy species like Azobé require careful weight distribution and securing to prevent shifting."
  },
  {
    id: "pricing",
    title: "Pricing Basis",
    description: "Log prices quoted per cubic meter (m³) FOB Douala or Kribi port. Prices vary by species, diameter class, length, grade, and current market demand. Large-diameter premium logs fetch significantly higher prices."
  }
];

const diameterClasses = [
  {
    range: "60-70 cm",
    description: "Standard export diameter, good availability across most species",
    badge: "Common"
  },
  {
    range: "70-80 cm",
    description: "Medium-large logs, suitable for high-grade sawn timber production",
    badge: "Good Yield"
  },
  {
    range: "80-100 cm",
    description: "Large diameter logs, premium pricing, limited seasonal availability",
    badge: "Premium"
  },
  {
    range: "100+ cm",
    description: "Extra-large logs, rare availability, highest pricing, species-dependent",
    badge: "Rare"
  }
];

const lengthClasses = [
  {
    length: "4-5 m",
    species: "All species",
    applications: "Container loading, shorter structural members",
    note: "Easier to handle and transport"
  },
  {
    length: "6-7 m",
    species: "Azobé, Tali, Doussié, Sapelli",
    applications: "Structural beams, heavy construction, bridge timber",
    note: "Most common export length"
  },
  {
    length: "8-10 m",
    species: "Sapelli, Sipo, Iroko, Padouk",
    applications: "Long-span beams, boat building, specialty construction",
    note: "Subject to log availability and sawmill capacity"
  },
  {
    length: "10+ m",
    species: "Limited species and availability",
    applications: "Marine construction, very long-span structures",
    note: "Requires special arrangements and pricing"
  }
];

const inquiryPoints = [
  {
    number: "01",
    title: "Species",
    description: "Specify the hardwood species required"
  },
  {
    number: "02",
    title: "Diameter Class",
    description: "Small-end diameter range (e.g. 70-80cm)"
  },
  {
    number: "03",
    title: "Length Requirement",
    description: "Preferred log lengths (e.g. 6m, 7m, 8m)"
  },
  {
    number: "04",
    title: "Grade & Quality",
    description: "Soundness, straightness, and defect tolerance"
  },
  {
    number: "05",
    title: "Required Volume",
    description: "Total cubic meters or approximate log count"
  },
  {
    number: "06",
    title: "Bark Condition",
    description: "Bark-on or debarked"
  },
  {
    number: "07",
    title: "Destination Country",
    description: "For shipping, documentation, and compliance"
  },
  {
    number: "08",
    title: "Shipping Method",
    description: "Break-bulk vessel or container (if applicable)"
  },
  {
    number: "09",
    title: "Target Delivery Timeline",
    description: "Expected arrival or project deadline"
  }
];

export default function TimberLogsPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* ===================================================================== */}
      {/* HERO SECTION                                                          */}
      {/* ===================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2818] via-[#031d0d] to-[#06180e] text-white pt-20 pb-16 sm:pt-24 sm:pb-20 border-b border-[#0f381c]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/logs-BtgG5hd2.webp"
            alt="Export-grade hardwood logs from Cameroon"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021509]/95 via-[#021509]/80 to-[#021509]/65" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300/80 mb-6">
            <Link href="/" className="hover:text-[#d5920c] transition-colors">
              Home
            </Link>
            <CaretRight className="h-3 w-3 text-slate-400" />
            <span className="text-[#d5920c]">Timber Logs Export</span>
          </div>

          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#031f0e]/60 px-4 py-2 shadow-sm backdrop-blur-md mb-6">
              <TreeEvergreen className="h-5 w-5 text-[#d5920c]" weight="fill" />
              <span className="text-sm font-bold tracking-wide text-slate-100">
                Export-Grade Logs · FLEGT Licensed
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5">
              Hardwood Logs{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffe082] via-[#f5b324] to-[#d5920c]">
                from Cameroon
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8">
              Export-grade Azobé, Tali, Sapelli, Padouk, Ebony, and other premium hardwood logs for international buyers, sawmills, and industrial processors. Here&apos;s what defines a log shipment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#d5920c] hover:bg-[#e5a118] text-[#06180e] font-bold text-sm shadow-lg shadow-[#d5920c]/25 transition-all"
              >
                <EnvelopeSimple className="h-5 w-5" weight="bold" />
                <span>Request Log Quote</span>
              </Link>

              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm backdrop-blur-sm transition-all"
              >
                <WhatsappLogo className="h-5 w-5" weight="fill" />
                <span>WhatsApp Log Specifications</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* LOG SPECIFICATIONS SECTION                                            */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#fef8eb] px-4 py-1.5 mb-4">
              <Ruler className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider">
                Log Specifications
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              What Defines a Timber Log Order
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Log specifications vary by species, harvest conditions, and export regulations. Contact us for current availability and shipment-specific specifications.
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {logSpecifications.map((spec) => (
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
        </div>
      </section>

      {/* ===================================================================== */}
      {/* DIAMETER CLASSES SECTION                                              */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-white px-4 py-1.5 mb-4">
              <CirclesThreePlus className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider">
                Diameter Classification
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              Log Diameter Classes
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Diameter measured at small end (top), inside bark. Availability and pricing vary by diameter class.
            </p>
          </div>

          {/* Diameter Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {diameterClasses.map((dClass, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e4e2d8] rounded-xl p-6 hover:shadow-lg hover:border-[#d5920c] transition-all relative overflow-hidden group"
              >
                <div className="absolute top-3 right-3">
                  <span className="inline-block px-2 py-1 rounded-md bg-[#032f0e] text-[#d5920c] text-xs font-bold">
                    {dClass.badge}
                  </span>
                </div>
                <div className="text-3xl font-black text-[#032f0e] mb-3">
                  {dClass.range}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {dClass.description}
                </p>
              </div>
            ))}
          </div>

          {/* Length Classes Table */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0d1a13] mb-3">
              Length Classes & Applications
            </h3>
            <p className="text-sm text-slate-600">
              Standard export lengths by species and typical end-use applications.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#e4e2d8] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#032f0e] text-white text-left">
                    <th className="px-6 py-4 text-sm font-bold">Length</th>
                    <th className="px-6 py-4 text-sm font-bold">Common Species</th>
                    <th className="px-6 py-4 text-sm font-bold">Applications</th>
                    <th className="px-6 py-4 text-sm font-bold">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {lengthClasses.map((lClass, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-[#e4e2d8] last:border-b-0 hover:bg-[#fef8eb] transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="text-base font-bold text-[#032f0e]">
                          {lClass.length}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        {lClass.species}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {lClass.applications}
                      </td>
                      <td className="px-6 py-4 text-xs text-slate-500 italic">
                        {lClass.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* LOG EXAMPLES WITH IMAGES                                              */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0d1a13] mb-3">
              Export-Grade Log Examples
            </h2>
            <p className="text-sm text-slate-600">
              Representative examples of export-grade hardwood logs from our yards in Douala and Kribi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Afromosia Log */}
            <div className="bg-white rounded-xl overflow-hidden border border-[#e4e2d8] hover:shadow-xl transition-all group">
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <Image
                  src="/images/AFROMOSIA_log.jpg"
                  alt="Afromosia export-grade log"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black text-[#032f0e] mb-2">Afromosia</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Premium hardwood log with excellent durability and strength. High demand for marine and exterior applications.
                </p>
                <div className="flex items-center text-xs font-bold text-[#d5920c]">
                  <span>CITES Regulated</span>
                </div>
              </div>
            </div>

            {/* Bilinga Log */}
            <div className="bg-white rounded-xl overflow-hidden border border-[#e4e2d8] hover:shadow-xl transition-all group">
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <Image
                  src="/images/bilinga_log.jpg"
                  alt="Bilinga export-grade log"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black text-[#032f0e] mb-2">Bilinga</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Dense, durable hardwood suitable for heavy construction, flooring, and marine applications. Good availability.
                </p>
                <div className="flex items-center text-xs font-bold text-[#032f0e]">
                  <span>High Availability</span>
                </div>
              </div>
            </div>

            {/* Sapelli Log */}
            <div className="bg-white rounded-xl overflow-hidden border border-[#e4e2d8] hover:shadow-xl transition-all group">
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <Image
                  src="/images/SAPELLI_log.jpg"
                  alt="Sapelli export-grade log"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black text-[#032f0e] mb-2">Sapelli</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Popular mahogany substitute with rich color and figure. Excellent for furniture, joinery, and boat building.
                </p>
                <div className="flex items-center text-xs font-bold text-[#032f0e]">
                  <span>Premium Export</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SUPPLY CONSIDERATIONS                                                 */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#eaf4ed] to-[#d4e8da]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/logs-BtgG5hd2.webp"
                alt="Timber logs ready for export"
                fill
                className="object-cover"
              />
            </div>

            {/* Content Side */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#032f0e]/20 bg-white px-4 py-1.5 mb-4">
                <Truck className="h-4 w-4 text-[#d5920c]" weight="bold" />
                <span className="text-xs font-bold text-[#032f0e] uppercase tracking-wider">
                  Supply & Logistics
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0d1a13] mb-6">
                Supply Considerations for Log Export
              </h2>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#032f0e] shrink-0 mt-0.5" weight="fill" />
                  <div>
                    <h4 className="font-bold text-[#0d1a13] mb-1">Seasonal Availability</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Logging operations and road conditions vary by season. Rainy season (March-October) can affect harvest and transport timing. Dry season offers better logistics but higher demand.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#032f0e] shrink-0 mt-0.5" weight="fill" />
                  <div>
                    <h4 className="font-bold text-[#0d1a13] mb-1">Sustainable Harvest Quotas</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      All species subject to government-issued annual harvest quotas and forest management plans. FLEGT licensing ensures legal and sustainable sourcing. Some species face stricter controls or seasonal restrictions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#032f0e] shrink-0 mt-0.5" weight="fill" />
                  <div>
                    <h4 className="font-bold text-[#0d1a13] mb-1">Lead Time Planning</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Typical lead time from order to shipment: 4-8 weeks depending on species, diameter class, volume, and port logistics. Large orders or specific diameter requirements may require longer lead times.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#032f0e] shrink-0 mt-0.5" weight="fill" />
                  <div>
                    <h4 className="font-bold text-[#0d1a13] mb-1">Inspection & Quality Control</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Pre-shipment inspection available upon request. Third-party surveyor reports can document diameter, length, volume, grade, and species verification. Costs and timing to be agreed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* YOUR INQUIRY SECTION                                                  */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#fef8eb] px-4 py-1.5 mb-4">
              <ListNumbers className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider">
                Quotation Requirements
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              What to Include in Your Log Inquiry
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
                className="bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6] border border-[#e4e2d8] rounded-xl p-6 hover:shadow-lg hover:border-[#d5920c] transition-all group"
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
              <span>FLEGT Licensed Export</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Ready to Request Your Log Specifications?
            </h3>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Our log export managers verify yard inventory, diameter classes, species availability, and vessel scheduling before issuing any commercial quote. Response time: under 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#d5920c] hover:bg-[#e5a118] text-[#06180e] font-bold text-sm shadow-lg shadow-[#d5920c]/25 transition-all w-full sm:w-auto"
              >
                <EnvelopeSimple className="h-5 w-5" weight="bold" />
                <span>Submit Log Inquiry Form</span>
              </Link>

              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all w-full sm:w-auto"
              >
                <WhatsappLogo className="h-5 w-5" weight="fill" />
                <span>WhatsApp Log Export Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SPECIES REFERENCE CTA                                                 */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6] border-t border-[#e4e2d8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#eaf4ed] to-[#d4e8da] rounded-2xl p-8 md:p-12 border border-[#0a461b]/20">
            <div className="flex items-start gap-4 mb-6">
              <TreeEvergreen className="h-8 w-8 text-[#032f0e] shrink-0" weight="fill" />
              <div>
                <h3 className="text-2xl font-extrabold text-[#0d1a13] mb-2">
                  Need Full Species Technical Details?
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
                  Explore our comprehensive timber species catalog with density data, durability ratings, typical log diameters, sawing characteristics, and export guidelines for Azobé, Tali, Sapelli, Padouk, Ebony, Bilinga, Afromosia, Doussié, and more.
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
