"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CaretDown,
  MagnifyingGlass,
  Question,
  WhatsappLogo,
  EnvelopeSimple,
  ShieldCheck,
  CaretRight,
} from "@phosphor-icons/react";
import { faq, company } from "@/lib/content";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedId, setExpandedId] = useState<string | null>("1");

  const categories = [
    { key: "all", label: faq.categories.all },
    { key: "species", label: faq.categories.species },
    { key: "orders", label: faq.categories.orders },
    { key: "shipping", label: faq.categories.shipping },
    { key: "docs", label: faq.categories.docs },
  ];

  const filteredQuestions = faq.questions.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleQuestion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* ===================================================================== */}
      {/* HERO SECTION                                                          */}
      {/* ===================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2818] via-[#031d0d] to-[#06180e] text-white pt-20 pb-16 sm:pt-24 sm:pb-20 border-b border-[#0f381c]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/cameroon_timber_hero.jpg"
            alt="Cameroon timber buyer frequently asked questions"
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
            <span className="text-[#d5920c]">Buyer FAQ</span>
          </div>

          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#031f0e]/60 px-4 py-2 shadow-sm backdrop-blur-md mb-6">
              <Question className="h-5 w-5 text-[#d5920c]" weight="fill" />
              <span className="text-sm font-bold tracking-wide text-slate-100">
                Buyer FAQ · Commercial Timber Export
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5">
              Buyer Frequently{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffe082] via-[#f5b324] to-[#d5920c]">
                Asked Questions
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8">
              Clear, practical answers about our Cameroon hardwood species, volumes, dimensions, shipping routes, and export documentation for international importers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#faq-list"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#d5920c] hover:bg-[#e5a118] text-[#06180e] font-bold text-sm shadow-lg shadow-[#d5920c]/25 transition-all"
              >
                <MagnifyingGlass className="h-5 w-5" weight="bold" />
                <span>Browse All Questions</span>
              </Link>

              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm backdrop-blur-sm transition-all"
              >
                <WhatsappLogo className="h-5 w-5" weight="fill" />
                <span>Ask Export Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* FAQ SECTION                                                           */}
      {/* ===================================================================== */}
      <section id="faq-list" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search & Category Filter Toolbar */}
          <div className="max-w-4xl mx-auto mb-10 space-y-4">
            {/* Search Input */}
            <div className="relative">
              <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search buyer questions (e.g., Azobé logs, MOQ, Kribi port, phytosanitary certificate, payment terms)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-[#d5920c] focus:ring-2 focus:ring-[#d5920c]/20 outline-none text-sm text-slate-900 shadow-xs transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeCategory === cat.key
                      ? "bg-[#032f0e] text-white shadow-sm"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center text-sm text-slate-600">
              Showing {filteredQuestions.length} of {faq.questions.length} questions
              {activeCategory !== "all" && ` in ${categories.find(c => c.key === activeCategory)?.label}`}
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="max-w-4xl mx-auto space-y-3.5">
            {filteredQuestions.length === 0 ? (
              <div className="text-center py-12 bg-gradient-to-br from-[#fcfbf7] to-[#f4efe6] rounded-2xl border border-slate-200 p-8">
                <p className="text-slate-600 mb-3">No matching answers found for "{searchQuery}".</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="text-xs font-bold text-[#032f0e] hover:underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              filteredQuestions.map((item) => {
                const isOpen = expandedId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl transition-all duration-200 border ${
                      isOpen
                        ? "bg-white border-[#d5920c]/50 shadow-md ring-1 ring-[#d5920c]/20"
                        : "bg-white/80 hover:bg-white border-slate-200/90 shadow-xs"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleQuestion(item.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-base sm:text-lg text-[#0d1a13] leading-snug">
                        {item.question}
                      </span>
                      <span
                        className={`p-1.5 rounded-lg shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? "rotate-180 bg-[#d5920c]/15 text-[#d5920c]"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <CaretDown className="h-4 w-4" weight="bold" />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
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
              <span>Direct Commercial Export Support</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Have a Specific Species, Volume or Port Requirement?
            </h3>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Every export shipment is custom quoted with physical log yard availability, current port vessel schedules, and formal proforma documentation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#d5920c] hover:bg-[#e5a118] text-[#06180e] font-bold text-sm shadow-lg shadow-[#d5920c]/25 transition-all w-full sm:w-auto"
              >
                <EnvelopeSimple className="h-5 w-5" weight="bold" />
                <span>Request Formal Proforma Quote</span>
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
    </main>
  );
}
