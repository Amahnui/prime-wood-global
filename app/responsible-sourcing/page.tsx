"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  TreeEvergreen,
  Certificate,
  FileText,
  Eye,
  CheckCircle,
  ArrowRight,
  WhatsappLogo,
  EnvelopeSimple,
  CaretRight,
  Leaf,
  MapTrifold,
  ListChecks,
  Handshake,
  Globe,
  Barcode,
  Scales,
  Target,
} from "@phosphor-icons/react";
import { company } from "@/lib/content";

const sourcingPillars = [
  {
    title: "100% Legal Concessions",
    description:
      "All timber sourced exclusively from legal Unités Forestières d'Aménagement (UFAs) and authorized community forests with active administrative cutting permits issued by Cameroon Ministry of Forestry (MINFOF).",
    icon: Certificate,
    details: [
      "State-authorized forestry concessions only",
      "Valid annual cutting permits (AACs)",
      "Compliance with Cameroon Forestry Law No. 94/01",
      "Zero tolerance for illegal logging sources"
    ]
  },
  {
    title: "FLEGT Licensing",
    description:
      "Cameroon is a signatory to the EU Forest Law Enforcement, Governance and Trade (FLEGT) Voluntary Partnership Agreement. All exports to EU destinations require FLEGT licenses confirming legal harvest origin.",
    icon: FileText,
    details: [
      "EU-Cameroon VPA compliance",
      "FLEGT license for every EU shipment",
      "Legality verification system (SVL)",
      "Third-party audit trail available"
    ]
  },
  {
    title: "Chain-of-Custody Tracking",
    description:
      "Every log harvested in Cameroon carries a unique forestry barcode tag applied at the harvest site. This traceability extends from stump to port, ensuring zero unverified timber enters our supply chain.",
    icon: Barcode,
    details: [
      "Individual log barcode tagging",
      "GPS coordinates at harvest site",
      "Electronic tracking via national SIGIF system",
      "Full documentary trail to container loading"
    ]
  },
  {
    title: "Sustainable Harvest Quotas",
    description:
      "Cameroon implements annual harvest quotas based on forest inventories, minimum diameter restrictions, and rotation cycles to ensure natural regeneration and long-term forest viability.",
    icon: TreeEvergreen,
    details: [
      "Government-issued annual quotas per species",
      "Minimum harvest diameter enforcement",
      "Protected species CITES compliance",
      "Multi-year forest management plans"
    ]
  }
];

const flegtFramework = {
  title: "Understanding FLEGT Licensing for Cameroon Timber",
  introduction:
    "The EU-Cameroon Voluntary Partnership Agreement (VPA) under the FLEGT Action Plan establishes a robust system to ensure timber exported from Cameroon to the European Union is legally harvested. This framework protects both forest ecosystems and legitimate commercial operators.",
  components: [
    {
      title: "What is a FLEGT License?",
      description:
        "A FLEGT license is an official export authorization document issued by the Cameroon government confirming that timber has been legally harvested according to national forestry laws. It is mandatory for timber shipments entering EU member states.",
      icon: Certificate
    },
    {
      title: "Legality Verification (SVL)",
      description:
        "Cameroon's Legality Verification System (Système de Vérification de la Légalité - SVL) audits every step of the timber supply chain: concession legality, cutting permits, transport waybills, processing records, and export documentation.",
      icon: ListChecks
    },
    {
      title: "Who Issues FLEGT Licenses?",
      description:
        "The FLEGT license is issued by the Independent Observer (Observateur Indépendant) after verifying compliance with Cameroon forestry law. Without this license, timber cannot clear EU customs.",
      icon: ShieldCheck
    },
    {
      title: "Buyer Confidence",
      description:
        "For EU-based importers, the FLEGT license eliminates due diligence uncertainty. It provides legal assurance that timber has been verified by national authorities and independent third-party observers.",
      icon: Handshake
    }
  ]
};

const forestStewardship = [
  {
    title: "Congo Basin Conservation",
    description:
      "The Congo Basin is the world's second-largest tropical rainforest. Sustainable timber harvesting in Cameroon is governed by principles that balance commercial use with biodiversity conservation and carbon sequestration.",
    image: "/images/3962b-1.jpg"
  },
  {
    title: "Minimum Diameter Management",
    description:
      "Cameroon forestry regulations specify minimum harvest diameters for each commercial species (e.g., 80cm for Azobé, 60cm for Sapelli). This ensures younger trees remain to mature, reproduce, and regenerate the forest.",
    image: "/images/1453b-1.jpg"
  },
  {
    title: "Selective Logging Practices",
    description:
      "Unlike clear-cutting, Cameroon concessions practice selective logging: only commercially mature trees meeting size thresholds are harvested, preserving forest structure, wildlife habitat, and watershed functions.",
    image: "/images/SAPELLI_log.jpg"
  },
  {
    title: "Community Forest Rights",
    description:
      "Community forests in Cameroon allow local populations to manage and benefit from timber resources. A percentage of revenues from community forest timber goes directly to local development projects.",
    image: "/images/bilinga_log.jpg"
  }
];

const complianceProcess = [
  {
    step: "01",
    title: "Concession Authorization",
    description:
      "Logging operations begin only in state-authorized Unités Forestières d'Aménagement (UFAs) with approved forest management plans and valid annual cutting permits (Assiettes Annuelles de Coupe - AAC)."
  },
  {
    step: "02",
    title: "Harvest & Barcode Tagging",
    description:
      "Each log is tagged with a unique barcode identifier at the felling site. GPS coordinates, species, diameter, and length are recorded in the national SIGIF database for traceability."
  },
  {
    step: "03",
    title: "Transport Waybills",
    description:
      "Logs leaving the forest carry official transport waybills (Lettres de Voiture) issued by forestry authorities, detailing origin concession, species, volume, and destination sawmill or port."
  },
  {
    step: "04",
    title: "Processing & Sawmill Records",
    description:
      "Sawmills maintain official production records cross-referenced with incoming log waybills. Conversion rates and output volumes are monitored by forestry inspectors."
  },
  {
    step: "05",
    title: "Legality Verification (SVL)",
    description:
      "Before export, the Independent Observer verifies compliance with all forestry regulations, checks documentary consistency, and audits the physical cargo for legality."
  },
  {
    step: "06",
    title: "FLEGT License Issuance",
    description:
      "Upon successful legality verification, the FLEGT license is issued. The cargo can then proceed to export with full legal clearance for entry into EU member states."
  }
];

const certifications = [
  {
    name: "FLEGT Licensed Export",
    description: "EU-Cameroon VPA compliance for all European Union destinations",
    verified: true
  },
  {
    name: "CITES Compliance",
    description: "Convention on International Trade in Endangered Species permits for regulated hardwoods",
    verified: true
  },
  {
    name: "Phytosanitary Certified",
    description: "Cameroon Ministry of Agriculture quarantine inspection and certification",
    verified: true
  },
  {
    name: "Chamber of Commerce Verified",
    description: "Official Certificate of Origin authenticated by Douala Chamber of Commerce",
    verified: true
  }
];

const buyerVerification = {
  title: "Open Buyer Verification & Pre-Shipment Inspection",
  description:
    "We encourage buyer transparency and welcome third-party verification at every stage of the export process.",
  options: [
    {
      title: "Documentary Audit",
      description:
        "Full access to concession permits, forestry waybills, SIGIF traceability records, and legality verification documents prior to shipment.",
      icon: FileText
    },
    {
      title: "Pre-Shipment Yard Inspection",
      description:
        "Buyers may appoint independent inspection agencies (SGS, Bureau Veritas, Cotecna) to physically verify species, dimensions, moisture content, and quality before container sealing.",
      icon: Eye
    },
    {
      title: "Real-Time Photo & Video Evidence",
      description:
        "WhatsApp delivery of photos and videos showing cargo tallying, bundling, grading, and container stuffing process with visible barcode tags.",
      icon: WhatsappLogo
    },
    {
      title: "Concession Origin Disclosure",
      description:
        "Upon request, we disclose the specific UFA concession name and geographic region of origin for full supply chain transparency.",
      icon: MapTrifold
    }
  ]
};

const sustainabilityGoals = [
  {
    title: "Zero Illegal Timber",
    target: "100% legal concession sourcing",
    status: "Active compliance",
    icon: Target
  },
  {
    title: "Traceability Standard",
    target: "Every log barcode-tracked from stump to port",
    status: "Fully implemented",
    icon: Barcode
  },
  {
    title: "FLEGT VPA Commitment",
    target: "Full EU legality assurance system",
    status: "Licensed exporter",
    icon: Certificate
  },
  {
    title: "Community Forest Support",
    target: "Support local community forestry rights",
    status: "Ongoing partnerships",
    icon: Handshake
  }
];

export default function ResponsibleSourcingPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* ===================================================================== */}
      {/* HERO SECTION                                                          */}
      {/* ===================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2818] via-[#031d0d] to-[#06180e] text-white pt-20 pb-16 sm:pt-24 sm:pb-20 border-b border-[#0f381c]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/3962b-1.jpg"
            alt="Responsible forestry and sustainable timber sourcing in Cameroon"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021509]/95 via-[#021509]/85 to-[#021509]/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300/80 mb-6">
            <Link href="/" className="hover:text-[#d5920c] transition-colors">
              Home
            </Link>
            <CaretRight className="h-3 w-3 text-slate-400" />
            <span className="text-[#d5920c]">Responsible Sourcing</span>
          </div>

          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#031f0e]/60 px-4 py-2 shadow-sm backdrop-blur-md mb-6">
              <ShieldCheck className="h-5 w-5 text-[#d5920c]" weight="fill" />
              <span className="text-sm font-bold tracking-wide text-slate-100">
                FLEGT Licensed · Legal & Traceable
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5">
              Responsible Sourcing{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffe082] via-[#f5b324] to-[#d5920c]">
                & Forest Stewardship
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8">
              Every cubic meter we supply comes from legal, traceable Cameroon forestry concessions adhering to FLEGT licensing, chain-of-custody tracking, and sustainable harvest quotas protecting Congo Basin ecosystems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#d5920c] hover:bg-[#e5a118] text-[#06180e] font-bold text-sm shadow-lg shadow-[#d5920c]/25 transition-all"
              >
                <EnvelopeSimple className="h-5 w-5" weight="bold" />
                <span>Request Compliance Documentation</span>
              </Link>

              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm backdrop-blur-sm transition-all"
              >
                <WhatsappLogo className="h-5 w-5" weight="fill" />
                <span>WhatsApp Sourcing Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SOURCING PILLARS SECTION                                              */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#fef8eb] px-4 py-1.5 mb-4">
              <TreeEvergreen className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider">
                Four Pillars of Responsible Timber Sourcing
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              Legal, Traceable, Sustainable
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our sourcing commitment is built on four foundational pillars that ensure every shipment meets international legality, traceability, and environmental standards.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {sourcingPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6] border border-[#e4e2d8] rounded-2xl p-8 hover:shadow-xl transition-all group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-[#032f0e] flex items-center justify-center">
                      <Icon className="h-7 w-7 text-[#d5920c]" weight="fill" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0d1a13] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Details List */}
                  <div className="space-y-2">
                    {pillar.details.map((detail, detailIdx) => (
                      <div key={detailIdx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#d5920c] shrink-0 mt-0.5" weight="fill" />
                        <span className="text-xs text-slate-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* FLEGT LICENSING SECTION                                               */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-white px-4 py-1.5 mb-4">
              <Certificate className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider">
                FLEGT VPA Framework
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              {flegtFramework.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {flegtFramework.introduction}
            </p>
          </div>

          {/* FLEGT Components Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {flegtFramework.components.map((component, idx) => {
              const Icon = component.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#e4e2d8] rounded-xl p-6 hover:shadow-lg hover:border-[#d5920c] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-[#032f0e] flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#d5920c]" weight="fill" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0d1a13] mb-2">
                        {component.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {component.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FLEGT Importance Callout */}
          <div className="bg-gradient-to-r from-[#03200a] to-[#083015] rounded-2xl p-8 text-center border border-[#0f381c] max-w-4xl mx-auto">
            <ShieldCheck className="h-10 w-10 text-[#d5920c] mx-auto mb-3" weight="fill" />
            <h3 className="text-2xl font-extrabold text-white mb-2">
              Mandatory for All EU Timber Imports
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              If you are importing Cameroon timber into any European Union member state, a FLEGT license is legally required for customs clearance. This eliminates due diligence uncertainty and provides full legality assurance backed by government and independent verification.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* FOREST STEWARDSHIP SECTION                                            */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#fef8eb] px-4 py-1.5 mb-4">
              <Leaf className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider">
                Sustainable Forest Management
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              Congo Basin Stewardship
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Responsible timber sourcing from Cameroon balances commercial harvesting with biodiversity conservation, community rights, and long-term forest regeneration.
            </p>
          </div>

          {/* Forest Stewardship Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {forestStewardship.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6] border border-[#e4e2d8] rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-black text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* COMPLIANCE PROCESS TIMELINE                                           */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-white px-4 py-1.5 mb-4">
              <ListChecks className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider">
                Legality Compliance Process
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              From Forest to FLEGT License
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Six critical stages ensure every log meets Cameroon forestry law and international legality standards.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#e4e2d8]" />

            {/* Process Steps */}
            <div className="space-y-8">
              {complianceProcess.map((process, idx) => (
                <div key={idx} className="relative flex gap-6">
                  {/* Step Number Badge */}
                  <div className="shrink-0 w-16 h-16 rounded-full bg-[#032f0e] border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <span className="text-xl font-black text-[#d5920c]">{process.step}</span>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 bg-white border border-[#e4e2d8] rounded-xl p-6 hover:shadow-lg transition-all">
                    <h3 className="text-lg font-bold text-[#0d1a13] mb-2">
                      {process.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* CERTIFICATIONS & COMPLIANCE SECTION                                   */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#fef8eb] px-4 py-1.5 mb-4">
              <Scales className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider">
                Certifications & Compliance
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              Verified Compliance Standards
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every shipment meets international regulatory standards for legal timber trade and environmental protection.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6] border border-[#e4e2d8] rounded-xl p-6 text-center hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#032f0e] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-[#d5920c]" weight="fill" />
                </div>
                <h3 className="text-base font-bold text-[#0d1a13] mb-2">
                  {cert.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* BUYER VERIFICATION SECTION                                            */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-white px-4 py-1.5 mb-4">
              <Eye className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider">
                Buyer Verification
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              {buyerVerification.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {buyerVerification.description}
            </p>
          </div>

          {/* Verification Options Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {buyerVerification.options.map((option, idx) => {
              const Icon = option.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#e4e2d8] rounded-xl p-6 hover:shadow-lg hover:border-[#d5920c] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-[#032f0e] flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#d5920c]" weight="fill" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0d1a13] mb-2">
                        {option.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SUSTAINABILITY COMMITMENTS SECTION                                    */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#fef8eb] px-4 py-1.5 mb-4">
              <Globe className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs font-bold text-[#b87b08] uppercase tracking-wider">
                Our Commitments
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              Ongoing Sustainability Goals
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We hold ourselves to measurable standards that protect forest ecosystems while supporting legitimate commercial timber trade.
            </p>
          </div>

          {/* Goals Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainabilityGoals.map((goal, idx) => {
              const Icon = goal.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6] border border-[#e4e2d8] rounded-xl p-6 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-[#032f0e] flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[#d5920c]" weight="fill" />
                  </div>
                  <h3 className="text-base font-bold text-[#0d1a13] mb-2">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-slate-700 mb-3">
                    {goal.target}
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#032f0e] text-[#d5920c] text-xs font-bold">
                    {goal.status}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* CTA SECTION                                                           */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#03200a] to-[#083015] rounded-2xl p-8 md:p-12 text-center border border-[#0f381c] shadow-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/40 bg-[#062413] px-3.5 py-1 text-xs font-bold text-[#f5b324] uppercase tracking-wider mb-4">
              <ShieldCheck className="h-4 w-4" weight="fill" />
              <span>FLEGT Licensed & Fully Traceable</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Need Legal Documentation or Sourcing Verification?
            </h3>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
              We provide complete traceability documentation, FLEGT licenses, concession origin disclosure, and welcome third-party pre-shipment inspections. Contact us to discuss your compliance requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#d5920c] hover:bg-[#e5a118] text-[#06180e] font-bold text-sm shadow-lg shadow-[#d5920c]/25 transition-all w-full sm:w-auto"
              >
                <EnvelopeSimple className="h-5 w-5" weight="bold" />
                <span>Request Compliance File</span>
              </Link>

              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all w-full sm:w-auto"
              >
                <WhatsappLogo className="h-5 w-5" weight="fill" />
                <span>WhatsApp Sourcing Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
