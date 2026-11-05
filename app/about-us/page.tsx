"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  CheckCircle,
  MapPin,
  Boat,
  ChartLineUp,
  Globe,
  TreeEvergreen,
  Handshake,
  ArrowRight,
  Phone,
  EnvelopeSimple,
  WhatsappLogo,
  FacebookLogo,
} from "@phosphor-icons/react";
import { about, company } from "@/lib/content";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a2818] via-[#031d0d] to-[#06180e] text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('/images/cameroon_timber_hero.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm mb-8 text-white/70">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">About Us</span>
          </nav>

          {/* Hero Content */}
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <Users className="h-4 w-4 text-[#d5920c]" weight="bold" />
              <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                {about.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
              Connecting Cameroon's Finest Hardwoods to Global Commerce
            </h1>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl">
              Direct timber supply from Cameroon's Congo Basin to international importers with verified inventory, strict grading, and flawless documentation.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#d5920c] hover:bg-[#b87b08] text-white font-bold rounded-xl shadow-lg transition-all"
              >
                <span>Request a Quote</span>
                <ArrowRight className="h-4 w-4" weight="bold" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white font-bold rounded-xl transition-all"
              >
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#e4e2d8] shadow-xl aspect-[4/3] bg-slate-900 group">
                <Image
                  src="/images/logs.jpg"
                  alt="Prime Wood Global operations in Cameroon"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06180e] via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#fef8eb] border border-[#d5920c]/30 rounded-full mb-6">
                <TreeEvergreen className="h-4 w-4 text-[#b87b08]" weight="bold" />
                <span className="text-xs sm:text-sm font-bold text-[#b87b08] uppercase tracking-wider">
                  Our Story
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-6">
                {about.title}
              </h2>

              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>{about.paragraph1}</p>
                <p>{about.paragraph2}</p>
              </div>

              <div className="mt-8 p-6 bg-[#eaf4ed] border border-[#032f0e]/10 rounded-xl">
                <div className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-[#032f0e] flex-shrink-0 mt-1" weight="bold" />
                  <div>
                    <h4 className="font-bold text-[#032f0e] mb-2">Global Reach, Local Expertise</h4>
                    <p className="text-sm text-slate-700">
                      From Cameroon's forests to your facility, we manage every step sourcing, processing, documentation, and maritime logistics ensuring your timber arrives on time, as specified.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24 bg-[#fcfbf7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#fef8eb] border border-[#d5920c]/30 rounded-full mb-6">
              <CheckCircle className="h-4 w-4 text-[#b87b08]" weight="bold" />
              <span className="text-xs sm:text-sm font-bold text-[#b87b08] uppercase tracking-wider">
                Our Principles
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We've built our reputation on four foundational commitments that guide every shipment and every customer relationship.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e4e2d8] rounded-xl p-8 hover:border-[#d5920c] hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#eaf4ed] text-[#032f0e] flex items-center justify-center mb-6 group-hover:bg-[#032f0e] group-hover:text-white transition-all">
                  <CheckCircle className="h-7 w-7" weight="fill" />
                </div>
                <h4 className="font-bold text-lg text-[#0d1a13] mb-3">
                  {val.label}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Operations - Two Bases */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#fef8eb] border border-[#d5920c]/30 rounded-full mb-6">
              <MapPin className="h-4 w-4 text-[#b87b08]" weight="bold" />
              <span className="text-xs sm:text-sm font-bold text-[#b87b08] uppercase tracking-wider">
                Our Operations
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              Dual Operational Bases in Cameroon
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Strategically positioned near both major export ports to ensure fast processing and reliable shipping schedules.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Kribi Location */}
            <div className="bg-gradient-to-br from-[#fcfbf7] to-white border border-[#e4e2d8] rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#eaf4ed] flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-[#032f0e]" weight="fill" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#032f0e]">
                    {company.locations.kribi.title}
                  </h3>
                  <div className="text-sm text-[#d5920c] font-bold">Kribi, South Region</div>
                </div>
              </div>

              <div className="space-y-3 text-slate-700">
                <p className="font-semibold">{company.locations.kribi.address}</p>
                <p className="text-sm flex items-center gap-2">
                  <Boat className="h-4 w-4 text-[#d5920c]" weight="fill" />
                  Near {company.locations.kribi.nearPort}
                </p>
                <p className="text-sm leading-relaxed mt-4">
                  Our forestry sourcing and primary processing hub, positioned near timber-rich regions and the modern Kribi deep-water terminal. Ideal for large-volume direct shipments.
                </p>
              </div>
            </div>

            {/* Douala Location */}
            <div className="bg-gradient-to-br from-[#fcfbf7] to-white border border-[#e4e2d8] rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#eaf4ed] flex items-center justify-center">
                  <Boat className="h-6 w-6 text-[#032f0e]" weight="fill" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#032f0e]">
                    {company.locations.douala.title}
                  </h3>
                  <div className="text-sm text-[#d5920c] font-bold">Douala, Littoral Region</div>
                </div>
              </div>

              <div className="space-y-3 text-slate-700">
                <p className="font-semibold">{company.locations.douala.address}</p>
                <p className="text-sm flex items-center gap-2">
                  <Boat className="h-4 w-4 text-[#d5920c]" weight="fill" />
                  Near {company.locations.douala.nearPort}
                </p>
                <p className="text-sm leading-relaxed mt-4">
                  Our commercial headquarters and export coordination center. Handles containerized shipments through Cameroon's main commercial gateway with frequent international liner services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-[#fcfbf7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#fef8eb] border border-[#d5920c]/30 rounded-full mb-6">
              <ChartLineUp className="h-4 w-4 text-[#b87b08]" weight="bold" />
              <span className="text-xs sm:text-sm font-bold text-[#b87b08] uppercase tracking-wider">
                Competitive Edge
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1a13] tracking-tight mb-4">
              Why International Buyers Choose Prime Wood Global
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-[#e4e2d8] rounded-xl p-8">
              <div className="w-12 h-12 rounded-xl bg-[#eaf4ed] flex items-center justify-center mb-6">
                <TreeEvergreen className="h-6 w-6 text-[#032f0e]" weight="bold" />
              </div>
              <h4 className="font-bold text-xl text-[#0d1a13] mb-3">
                Congo Basin Direct Access
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                We source from authorized forestry concessions across the Congo Basin, ensuring consistent supply of premium African hardwoods.
              </p>
            </div>

            <div className="bg-white border border-[#e4e2d8] rounded-xl p-8">
              <div className="w-12 h-12 rounded-xl bg-[#eaf4ed] flex items-center justify-center mb-6">
                <Handshake className="h-6 w-6 text-[#032f0e]" weight="bold" />
              </div>
              <h4 className="font-bold text-xl text-[#0d1a13] mb-3">
                Transparent Operations
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Real-time updates, yard visit invitations, photo/video documentation, and third-party inspection welcomed at every stage.
              </p>
            </div>

            <div className="bg-white border border-[#e4e2d8] rounded-xl p-8">
              <div className="w-12 h-12 rounded-xl bg-[#eaf4ed] flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-[#032f0e]" weight="bold" />
              </div>
              <h4 className="font-bold text-xl text-[#0d1a13] mb-3">
                Global Export Expertise
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Complete documentation, phytosanitary certificates, and maritime logistics coordination to all major international ports.
              </p>
            </div>

            <div className="bg-white border border-[#e4e2d8] rounded-xl p-8">
              <div className="w-12 h-12 rounded-xl bg-[#eaf4ed] flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-[#032f0e]" weight="fill" />
              </div>
              <h4 className="font-bold text-xl text-[#0d1a13] mb-3">
                Strict Quality Control
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Experienced graders inspect every piece. We reject substandard material before it reaches your container.
              </p>
            </div>

            <div className="bg-white border border-[#e4e2d8] rounded-xl p-8">
              <div className="w-12 h-12 rounded-xl bg-[#eaf4ed] flex items-center justify-center mb-6">
                <ChartLineUp className="h-6 w-6 text-[#032f0e]" weight="bold" />
              </div>
              <h4 className="font-bold text-xl text-[#0d1a13] mb-3">
                Flexible Volumes
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                From single container test orders to multi-container monthly supply contracts, we scale to your purchasing needs.
              </p>
            </div>

            <div className="bg-white border border-[#e4e2d8] rounded-xl p-8">
              <div className="w-12 h-12 rounded-xl bg-[#eaf4ed] flex items-center justify-center mb-6">
                <Boat className="h-6 w-6 text-[#032f0e]" weight="fill" />
              </div>
              <h4 className="font-bold text-xl text-[#0d1a13] mb-3">
                Dual Port Advantage
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Access to both Douala and Kribi ports means faster shipping, more liner options, and competitive freight rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#032f0e] via-[#0a461b] to-[#032f0e] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
              Ready to Start Your Order?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Contact our export team today to discuss your timber requirements. We respond within 24 hours with current availability and pricing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a
              href={company.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl p-6 text-center transition-all group"
            >
              <WhatsappLogo className="h-8 w-8 text-[#25D366] mx-auto mb-3 group-hover:scale-110 transition-transform" weight="fill" />
              <div className="font-bold text-white mb-1">WhatsApp</div>
              <div className="text-sm text-white/80">{company.whatsapp}</div>
            </a>

            <a
              href={company.emailHref}
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl p-6 text-center transition-all group"
            >
              <EnvelopeSimple className="h-8 w-8 text-[#d5920c] mx-auto mb-3 group-hover:scale-110 transition-transform" weight="fill" />
              <div className="font-bold text-white mb-1">Email</div>
              <div className="text-sm text-white/80">{company.email}</div>
            </a>

            <a
              href={company.phoneHref}
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl p-6 text-center transition-all group"
            >
              <Phone className="h-8 w-8 text-[#d5920c] mx-auto mb-3 group-hover:scale-110 transition-transform" weight="fill" />
              <div className="font-bold text-white mb-1">Phone</div>
              <div className="text-sm text-white/80">{company.phoneDisplay}</div>
            </a>

            <a
              href={company.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl p-6 text-center transition-all group"
            >
              <FacebookLogo className="h-8 w-8 text-[#1877F2] mx-auto mb-3 group-hover:scale-110 transition-transform" weight="fill" />
              <div className="font-bold text-white mb-1">Facebook</div>
              <div className="text-sm text-white/80">Follow Us</div>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#d5920c] hover:bg-[#b87b08] text-white font-bold text-lg rounded-xl shadow-lg transition-all"
            >
              <span>Request Export Quote</span>
              <ArrowRight className="h-5 w-5" weight="bold" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#032f0e] hover:bg-white/90 font-bold text-lg rounded-xl shadow-lg transition-all"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
